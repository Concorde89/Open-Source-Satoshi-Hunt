#!/usr/bin/env node
/**
 * Build unified corpus from text sources
 * 
 * Usage: node build-corpus.js <input-directory> <output-file>
 * 
 * Combines all .txt files in the input directory into a single corpus file.
 */

const fs = require('fs');
const path = require('path');

function stripHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function buildCorpus(inputDir, outputFile) {
  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory not found: ${inputDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(inputDir)
    .filter(f => f.endsWith('.txt') && !f.startsWith('_'));
  
  console.log(`Found ${files.length} text files`);
  
  const contents = [];
  let totalWords = 0;
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(inputDir, file), 'utf8');
    const cleaned = stripHtml(content);
    const wordCount = cleaned.split(/\s+/).length;
    
    contents.push({
      source: file,
      wordCount,
      content: cleaned
    });
    
    totalWords += wordCount;
    console.log(`  ${file}: ${wordCount} words`);
  }
  
  // Combine into single corpus
  const corpus = contents
    .map(c => `=== Source: ${c.source} ===\n\n${c.content}`)
    .join('\n\n---\n\n');
  
  fs.writeFileSync(outputFile, corpus);
  
  console.log(`\nTotal: ${totalWords} words`);
  console.log(`Output: ${outputFile}`);
}

// Main
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: node build-corpus.js <input-directory> <output-file>');
  console.log('Example: node build-corpus.js ./sources ./corpus.txt');
  process.exit(1);
}

buildCorpus(args[0], args[1]);
