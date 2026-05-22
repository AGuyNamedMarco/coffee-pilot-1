# Asset Acquisition Agent v1

Goal:
Automate: scrape -> filter -> rank -> manifest -> curated assets

Pipeline:
1. Acquire raw assets
2. Reject junk (SVG payment icons, tiny images, duplicates)
3. Score authenticity/quality/relevance
4. Generate asset-manifest.json
5. Copy selected assets to public/assets/

Planned commands:

npx tsx tools/asset-acquisition/acquire-assets.ts <url>

Outputs:
/public/assets/
asset-manifest.json
