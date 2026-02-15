import fs from 'fs';

// Extract links from main.js
const content = fs.readFileSync('src/main.js', 'utf8');
const mapMatch = content.match(/const gradePDFLinksMap = (\{[\s\S]+?\});/);
if (!mapMatch) {
  console.log('Map not found');
  process.exit(1);
}

// Simple regex extraction to avoid eval
const links = [];
const regex = /url:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(mapMatch[1])) !== null) {
  links.push(match[1]);
}

console.log(`Checking ${links.length} links...`);

import { execSync } from 'child_process';
const broken = [];
for (const link of links) {
  try {
    execSync(`curl -I -s -L --max-time 5 "${link}" | grep "HTTP/2 200"`);
  } catch (e) {
    broken.push(link);
  }
}

console.log('Broken links:');
broken.forEach(l => console.log(l));
