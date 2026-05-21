import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

/**
 * Asset Acquisition Agent (AAA) v1
 * Purpose:
 * Collect website images as evidence for Asset Intelligence.
 *
 * Usage:
 * npx tsx scrape-site.ts https://example.com ./assets/example/raw
 */

const [url, outputDir = './assets/raw'] = process.argv.slice(2);

if (!url) {
  console.error('Missing URL');
  process.exit(1);
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2400 } });

  await page.goto(url, { waitUntil: 'networkidle' });

  const images = await page.$$eval('img', imgs =>
    imgs
      .map(img => ({ src: img.getAttribute('src'), alt: img.getAttribute('alt') }))
      .filter(x => !!x.src)
  );

  await fs.mkdir(outputDir, { recursive: true });

  const metadata = [];

  for (let i = 0; i < images.length; i++) {
    try {
      const src = new URL(images[i].src!, url).href;
      const response = await page.request.get(src);
      const buffer = await response.body();

      const filename = `asset-${i}${path.extname(src).split('?')[0] || '.jpg'}`;
      await fs.writeFile(path.join(outputDir, filename), buffer);

      metadata.push({
        filename,
        src,
        alt: images[i].alt ?? ''
      });
    } catch {
      metadata.push({ error: true, src: images[i].src });
    }
  }

  await fs.writeFile(
    path.join(outputDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );

  console.log(`Collected ${metadata.length} assets → ${outputDir}`);

  await browser.close();
}

run();
