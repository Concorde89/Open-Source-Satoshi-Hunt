# Methodology

## Background: The Academic Foundation

This project applies the methodology from:

> **"Deanonymizing Users of the Anonymity Network Using LLMs"**  
> arXiv:2602.16800, February 2026

The paper demonstrates that Large Language Models can deanonymize users by:
1. Extracting identity-relevant features from raw text
2. Generating semantic embeddings for comparison
3. Using LLM reasoning to verify matches

Key finding: **68% recall at 90% precision** — significantly higher than previous methods.

## Our Application

### Step 1: Corpus Collection

**Satoshi Corpus** (173,406 words)
- Bitcointalk forum posts (543 posts, 2009-2010)
- Emails to developers (Wei Dai, Adam Back, Hal Finney, Gavin Andresen)
- Cryptography mailing list announcements
- P2P Foundation posts
- Bitcoin whitepaper

**Candidate Corpora**
- Collected from public sources only
- Minimum 5,000 words for statistical validity
- Multiple sources per candidate when available

### Step 2: Feature Extraction

For each corpus, we extract:

#### Writing Style
- **Sentence structure**: Average length, complexity, use of lists
- **Tone**: Formal, casual, academic, technical
- **Perspective**: First person ("I think") vs third person ("One might")
- **Paragraph structure**: Length, organization

#### Technical Vocabulary
- Domain-specific terms frequency
- Cryptographic terminology
- Economic/monetary vocabulary
- Programming language references

#### Language Variant
- British vs American English spellings
  - "colour" vs "color"
  - "centralised" vs "centralized"
  - "organisation" vs "organization"
- Date format preferences (dd/mm vs mm/dd)
- Punctuation patterns

#### Unique Phrases
- Distinctive expressions
- Repeated phrases across corpus
- Signature patterns

### Step 3: Comparison

For each candidate, we calculate:

1. **Writing Style Match** (0-100%)
   - How similar is their sentence structure?
   - Do they use similar organizational patterns?
   - Is the tone comparable?

2. **Technical Vocabulary Match** (0-100%)
   - Overlap in domain terminology
   - Similar depth of expertise areas
   - Matching technical focus

3. **Circumstantial Evidence** (0-100%)
   - Timeline alignment
   - Geographic indicators
   - Known connections to Bitcoin development
   - Public statements

4. **Final Score** = Weighted average
   - Writing Style: 30%
   - Technical Match: 40%
   - Circumstantial: 30%

### Step 4: LLM Verification

For top candidates, we perform deep analysis:

1. **Evidence For**
   - List all supporting points
   - Cite specific examples from corpus

2. **Evidence Against**
   - List contradicting points
   - Note stylistic differences

3. **Reasoning**
   - Synthesize evidence
   - Consider alternative explanations
   - Arrive at confidence score

## Limitations

### What This Method Can Do
- Identify stylistic similarities
- Find vocabulary patterns
- Detect language variant usage
- Compare technical expertise

### What This Method Cannot Do
- Prove identity definitively
- Account for deliberate style changes
- Detect collaboration between multiple authors
- Override strong contradicting evidence

### Known Biases
- Larger corpus = more reliable analysis
- Technical writing differs from casual writing
- Writing style evolves over time
- Authors may deliberately obscure patterns

## Scoring Interpretation

| Score | Interpretation |
|-------|----------------|
| 90-100% | Extremely strong match (essentially certain) |
| 75-89% | Strong match (high confidence) |
| 60-74% | Moderate match (plausible candidate) |
| 45-59% | Weak match (unlikely but possible) |
| 0-44% | No significant match |

**Note:** Our highest score is 72% (Nick Szabo), indicating no candidate reaches "high confidence" threshold.

## Reproducibility

All data and analysis are public. To reproduce:

1. Use corpus files in `corpus/` directory
2. Apply feature extraction methodology
3. Calculate scores using our weighting
4. Compare results

We welcome challenges to our methodology and findings.
