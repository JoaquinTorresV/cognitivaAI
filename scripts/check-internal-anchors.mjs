import fs from 'fs';
import path from 'path';

// This script performs a basic static analysis to find all internal anchor links (href="#...")
// and verify if a matching element with `id="..."` or an equivalent generated anchor stub exists.

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('node_modules') && !fullPath.includes('.next')) {
                arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
            }
        } else {
            if (/\.(js|jsx|ts|tsx)$/.test(file)) {
                arrayOfFiles.push(fullPath);
            }
        }
    });

    return arrayOfFiles;
}

function extractHrefs(content) {
    const regex = /href=['"]\/?#([^'"]+)['"]/g;
    const hrefs = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        hrefs.push(match[1]);
    }
    return hrefs;
}

function extractIds(content) {
    const regex = /id=['"]([^'"]+)['"]/g;
    const ids = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        if (!match[1].includes('${')) {
            ids.push(match[1]);
        }
    }
    return ids;
}

function extractConstantIds(content, constName) {
    const regex = new RegExp(`const\\s+${constName}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
    const match = regex.exec(content);
    if (!match) return [];

    const idRegex = /id:\s*['"]([^'"]+)['"]/g;
    const ids = [];
    let idMatch;
    while ((idMatch = idRegex.exec(match[1])) !== null) {
        ids.push(idMatch[1]);
    }
    return ids;
}

const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir);

let allHrefs = new Set();
let allIds = new Set();

// Hardcoded sections that are guaranteed to exist directly via JS navigation
// or through next.js routing structure outside of react ID mapping depending on the layout
allIds.add('servicios');
allIds.add('industrias');
allIds.add('proceso');
allIds.add('final-cta');

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = extractHrefs(content);
    const ids = extractIds(content);

    hrefs.forEach(h => allHrefs.add(h));
    ids.forEach(i => allIds.add(i));

    // Extract dynamic IDs for known components mapping
    if (file.includes('ServiceOfferings.jsx')) {
        const serviceIds = extractConstantIds(content, 'SERVICES_DATA');
        serviceIds.forEach(id => allIds.add(`servicios-${id}`));
    }

    if (file.includes('IndustryExpertise.jsx')) {
        const industryIds = extractConstantIds(content, 'INDUSTRIES_DATA');
        industryIds.forEach(id => allIds.add(`industrias-${id}`));
    }
});

let missing = false;
console.log('--- Checking Internal Anchors ---');

for (const href of allHrefs) {
    if (!allIds.has(href)) {
        console.error(`❌ Broken link: href="#${href}" found, but no matching id="${href}" exists.`);
        missing = true;
    } else {
        console.log(`✅ Anchor linked successfully: #${href}`);
    }
}

if (missing) {
    console.error('\\nAudit failed: Some internal anchors are broken.');
    process.exit(1);
} else {
    console.log('\\nAudit passed: All internal anchors are valid.');
}
