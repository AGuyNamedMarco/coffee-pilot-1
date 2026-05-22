import fs from 'fs';

console.log('Asset Acquisition Agent v1');
const url = process.argv[2];
if (!url) throw new Error('Provide business URL');

// TODO:
// 1 scrape assets
// 2 reject svg/payment icons/small images
// 3 dedupe
// 4 score
// 5 write asset-manifest.json

console.log(`Acquiring assets from ${url}`);
