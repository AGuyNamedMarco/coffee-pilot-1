import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

type CandidateAsset = {
  src: string;
  absoluteSrc: string;
  alt: string;
  source: string;
};

type ManifestAsset = CandidateAsset & {
  filename: string;
  sizeBytes: number;
  score: number;
  recommendedUse: string;
};

const targetUrl = process.argv[2];

if (!targetUrl) {
  throw new Error('Provide business URL. Example: npx tsx tools/asset-acquisition/acquire-assets.ts https://example.com');
}

const outputDir = 'public/assets';
const manifestPath = 'asset-manifest.json';
const minAssetBytes = 15_000;
const maxAssets = 24;

fs.mkdirSync(outputDir, { recursive: true });

console.log('Asset Acquisition Agent v1');
console.log(`Acquiring assets from ${targetUrl}`);

const html = await fetchText(targetUrl);
const $ = cheerio.load(html);

const candidates = collectImageCandidates($, targetUrl);
console.log(`Found ${candidates.length} image candidates before filtering`);

const uniqueCandidates = dedupeCandidates(candidates).filter(isUsefulCandidate);
console.log(`Retained ${uniqueCandidates.length} image candidates after filtering`);

const manifest: ManifestAsset[] = [];

for (const candidate of uniqueCandidates) {
  if (manifest.length >= maxAssets) break;

  try {
    const response = await fetch(candidate.absoluteSrc, {
      headers: {
        'user-agent': 'Mozilla/5.0 AssetAcquisitionAgent/1.0'
      }
    });

    if (!response.ok) {
      console.warn(`Skipped ${candidate.absoluteSrc}: HTTP ${response.status}`);
      continue;
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.startsWith('image/')) {
      console.warn(`Skipped ${candidate.absoluteSrc}: content-type ${contentType}`);
      continue;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < minAssetBytes) {
      console.warn(`Skipped ${candidate.absoluteSrc}: too small (${buffer.length} bytes)`);
      continue;
    }

    const ext = extensionFrom(candidate.absoluteSrc, contentType);
    const recommendedUse = recommendUse(candidate);
    const score = scoreAsset(candidate, buffer.length, contentType);
    const filename = `${String(manifest.length + 1).padStart(2, '0')}-${recommendedUse}${ext}`;
    const filePath = path.join(outputDir, filename);

    fs.writeFileSync(filePath, buffer);

    manifest.push({
      ...candidate,
      filename,
      sizeBytes: buffer.length,
      score,
      recommendedUse
    });

    console.log(`Saved ${filename} (${buffer.length} bytes)`);
  } catch (error) {
    console.warn(`Skipped ${candidate.absoluteSrc}: ${(error as Error).message}`);
  }
}

manifest.sort((a, b) => b.score - a.score);

fs.writeFileSync(
  manifestPath,
  JSON.stringify(
    {
      sourceUrl: targetUrl,
      createdAt: new Date().toISOString(),
      assetCount: manifest.length,
      assets: manifest
    },
    null,
    2
  )
);

console.log(`Saved ${manifest.length} assets`);
console.log(`Wrote ${manifestPath}`);

function collectImageCandidates($: cheerio.CheerioAPI, baseUrl: string): CandidateAsset[] {
  const candidates: CandidateAsset[] = [];

  $('img').each((_, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src') || $(el).attr('data-original') || '';
    const srcset = $(el).attr('srcset') || '';
    const alt = $(el).attr('alt') || '';

    const selectedSrc = src || selectLargestFromSrcset(srcset);
    if (!selectedSrc) return;

    candidates.push({
      src: selectedSrc,
      absoluteSrc: toAbsoluteUrl(selectedSrc, baseUrl),
      alt,
      source: 'website-img-tag'
    });
  });

  $('[style]').each((_, el) => {
    const style = $(el).attr('style') || '';
    const match = style.match(/url\(["']?([^"')]+)["']?\)/i);
    if (!match?.[1]) return;

    candidates.push({
      src: match[1],
      absoluteSrc: toAbsoluteUrl(match[1], baseUrl),
      alt: '',
      source: 'website-inline-style'
    });
  });

  $('meta[property="og:image"], meta[name="twitter:image"]').each((_, el) => {
    const src = $(el).attr('content') || '';
    if (!src) return;

    candidates.push({
      src,
      absoluteSrc: toAbsoluteUrl(src, baseUrl),
      alt: 'social preview image',
      source: 'metadata'
    });
  });

  return candidates;
}

function selectLargestFromSrcset(srcset: string): string {
  if (!srcset) return '';

  const entries = srcset
    .split(',')
    .map((entry) => entry.trim().split(/\s+/))
    .filter(([src]) => Boolean(src));

  return entries.at(-1)?.[0] || '';
}

function toAbsoluteUrl(src: string, baseUrl: string): string {
  return new URL(src, baseUrl).href;
}

function dedupeCandidates(candidates: CandidateAsset[]): CandidateAsset[] {
  const seen = new Set<string>();

  return candidates.filter((candidate) => {
    const key = candidate.absoluteSrc.split('?')[0];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isUsefulCandidate(candidate: CandidateAsset): boolean {
  const src = candidate.absoluteSrc.toLowerCase();
  const alt = candidate.alt.toLowerCase();
  const junkTerms = [
    'payment',
    'visa',
    'mastercard',
    'amex',
    'discover',
    'applepay',
    'googlepay',
    'cashapp',
    'favicon',
    'icon',
    'sprite',
    'logo-square'
  ];

  if (src.endsWith('.svg')) return false;
  if (src.startsWith('data:')) return false;
  if (junkTerms.some((term) => src.includes(term) || alt.includes(term))) return false;

  return true;
}

function extensionFrom(src: string, contentType: string): string {
  const pathname = new URL(src).pathname;
  const ext = path.extname(pathname);

  if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext.toLowerCase())) {
    return ext.toLowerCase() === '.jpeg' ? '.jpg' : ext.toLowerCase();
  }

  if (contentType.includes('png')) return '.png';
  if (contentType.includes('webp')) return '.webp';
  if (contentType.includes('gif')) return '.gif';

  return '.jpg';
}

function recommendUse(candidate: CandidateAsset): string {
  const combined = `${candidate.absoluteSrc} ${candidate.alt}`.toLowerCase();

  if (/truck|store|location|street|exterior|front/.test(combined)) return 'location';
  if (/latte|coffee|drink|espresso|brew|matcha|cup/.test(combined)) return 'drink';
  if (/people|community|customer|team|owner|event/.test(combined)) return 'community';
  if (/logo|brand/.test(combined)) return 'brand';

  return 'general';
}

function scoreAsset(candidate: CandidateAsset, sizeBytes: number, contentType: string): number {
  const combined = `${candidate.absoluteSrc} ${candidate.alt}`.toLowerCase();
  let score = 0;

  if (sizeBytes > 100_000) score += 3;
  if (sizeBytes > 500_000) score += 2;
  if (contentType.includes('jpeg') || contentType.includes('jpg') || contentType.includes('png') || contentType.includes('webp')) score += 2;
  if (/truck|store|location|street|exterior|front/.test(combined)) score += 4;
  if (/latte|coffee|drink|espresso|brew|matcha|cup/.test(combined)) score += 4;
  if (/people|community|customer|team|owner|event/.test(combined)) score += 5;
  if (candidate.source === 'metadata') score += 1;

  return score;
}

async function fetchText(requestUrl: string): Promise<string> {
  const response = await fetch(requestUrl, {
    headers: {
      'user-agent': 'Mozilla/5.0 AssetAcquisitionAgent/1.0'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${requestUrl}: HTTP ${response.status}`);
  }

  return response.text();
}
