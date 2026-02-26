#!/usr/bin/env node
/**
 * Basic Corpus Analysis Tool
 * 
 * Usage: node analyze.js <corpus-file>
 * 
 * Outputs basic statistics about a corpus file.
 */

const fs = require('fs');

function analyzeCorpus(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Basic stats
  const words = content.split(/\s+/).filter(w => w.length > 0);
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const paragraphs = content.split(/\n\n+/).filter(p => p.trim().length > 0);
  
  console.log('=== Corpus Statistics ===\n');
  console.log(`Words: ${words.length.toLocaleString()}`);
  console.log(`Sentences: ${sentences.length.toLocaleString()}`);
  console.log(`Paragraphs: ${paragraphs.length.toLocaleString()}`);
  console.log(`Avg words per sentence: ${(words.length / sentences.length).toFixed(1)}`);
  console.log(`Avg sentences per paragraph: ${(sentences.length / paragraphs.length).toFixed(1)}`);
  
  // Vocabulary analysis
  const wordFreq = {};
  const lowerWords = words.map(w => w.toLowerCase().replace(/[^a-z]/g, ''));
  
  for (const word of lowerWords) {
    if (word.length > 3) {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    }
  }
  
  const sortedWords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
  
  console.log('\n=== Top 20 Words ===\n');
  for (const [word, count] of sortedWords) {
    console.log(`  ${word}: ${count}`);
  }
  
  // British vs American English indicators
  const britishPatterns = ['colour', 'favour', 'behaviour', 'centre', 'defence', 
                           'organisation', 'realise', 'recognise', 'analyse', 'centralised'];
  const americanPatterns = ['color', 'favor', 'behavior', 'center', 'defense',
                            'organization', 'realize', 'recognize', 'analyze', 'centralized'];
  
  let britishCount = 0;
  let americanCount = 0;
  
  for (const word of lowerWords) {
    if (britishPatterns.some(p => word.includes(p))) britishCount++;
    if (americanPatterns.some(p => word.includes(p))) americanCount++;
  }
  
  console.log('\n=== Language Variant ===\n');
  console.log(`British English indicators: ${britishCount}`);
  console.log(`American English indicators: ${americanCount}`);
  
  if (britishCount > americanCount * 1.5) {
    console.log('Tendency: British English');
  } else if (americanCount > britishCount * 1.5) {
    console.log('Tendency: American English');
  } else {
    console.log('Tendency: Mixed');
  }
  
  // Technical vocabulary
  const techTerms = ['bitcoin', 'blockchain', 'cryptography', 'hash', 'transaction',
                     'signature', 'key', 'node', 'network', 'protocol', 'consensus',
                     'proof', 'work', 'mining', 'currency', 'digital', 'decentralized'];
  
  console.log('\n=== Technical Terms ===\n');
  for (const term of techTerms) {
    const count = lowerWords.filter(w => w.includes(term)).length;
    if (count > 0) {
      console.log(`  ${term}: ${count}`);
    }
  }
}

// Main
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log('Usage: node analyze.js <corpus-file>');
  console.log('Example: node analyze.js ../corpus/satoshi/satoshi_corpus.txt');
  process.exit(1);
}

analyzeCorpus(args[0]);
