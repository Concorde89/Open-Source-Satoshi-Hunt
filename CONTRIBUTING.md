# Contributing to Open Source Satoshi Hunt

Thank you for your interest in contributing! This project is designed to be collaborative — anyone can add candidates, improve analysis, or challenge existing findings.

## Ways to Contribute

### 1. Add a New Candidate

Want to analyze someone not in our current list? Here's how:

#### Step 1: Collect the Corpus

1. Fork this repository
2. Create a new directory: `corpus/candidates/<candidate-name>/`
3. Add their public writings as `.txt` files
4. Create a `_corpus.txt` combining all writings

**Requirements:**
- Only use **publicly available** writings
- Minimum 5,000 words for meaningful analysis
- Document your sources

#### Step 2: Run Analysis

Apply the feature extraction methodology:

1. **Writing Style Analysis**
   - Sentence structure patterns
   - Tone (formal, casual, academic)
   - Perspective (1st person, 3rd person)

2. **Technical Vocabulary**
   - Domain-specific terms
   - Unique phrases
   - Technical depth

3. **Language Variant**
   - British vs American English
   - Spelling patterns
   - Date formats

4. **Compare to Satoshi**
   - Similarities
   - Differences
   - Overall match score (0-100%)

#### Step 3: Submit Your Analysis

Create a Pull Request with:

```markdown
## Candidate: [Full Name]

### Corpus Statistics
- **Total Words:** X,XXX
- **Sources:** [list with links]
- **Time Period:** [when they wrote]

### Writing Style
[Your analysis]

### Technical Vocabulary
[Key terms they use]

### British/American English
[Which variant, with examples]

### Match Score: XX%

### Evidence Supporting Match
- [Point 1]
- [Point 2]
- [Point 3]

### Evidence Against Match
- [Point 1]
- [Point 2]
- [Point 3]

### Conclusion
[Your overall assessment]
```

---

### 2. Improve Existing Analysis

Found more writings from an existing candidate? Disagree with our analysis?

1. **Add More Data**
   - Find additional public writings
   - Add to existing corpus
   - Update word counts

2. **Challenge Scores**
   - Open an Issue explaining your reasoning
   - Provide specific evidence
   - Suggest revised score

3. **Refine Methodology**
   - Propose better feature extraction
   - Add statistical measures
   - Improve comparison techniques

---

### 3. Add Tools/Scripts

Help automate the analysis:

- Corpus processing scripts
- Stylometry tools
- Visualization dashboards
- Embedding generation

**Requirements:**
- No external API keys required to run
- Document dependencies clearly
- Include example usage

---

## Pull Request Guidelines

### Do:
✅ Use clear, descriptive titles
✅ Explain your methodology
✅ Cite your sources
✅ Be respectful of all candidates discussed
✅ Keep personal opinions separate from analysis

### Don't:
❌ Include proprietary or private data
❌ Make definitive claims ("X IS Satoshi")
❌ Include ad hominem attacks
❌ Submit low-effort analysis
❌ Include sensitive personal information

---

## Code of Conduct

1. **Respect Privacy** — Only use publicly available data
2. **Be Objective** — Present evidence, not conclusions
3. **Stay Scientific** — This is research, not witch-hunting
4. **Be Collaborative** — Help others improve their analysis
5. **Acknowledge Uncertainty** — No one knows for sure

---

## Issue Templates

### New Candidate Suggestion

```
**Candidate Name:** 
**Why They Should Be Analyzed:**
**Available Sources:**
**Estimated Corpus Size:**
```

### Analysis Dispute

```
**Current Score:** 
**Proposed Score:**
**Reasoning:**
**Evidence:**
```

### Bug Report

```
**Script/File:**
**Expected Behavior:**
**Actual Behavior:**
**Steps to Reproduce:**
```

---

## Questions?

Open an Issue or reach out:
- Twitter: [@Autoincentiv3](https://x.com/Autoincentiv3)
- GitHub Issues: [Open an Issue](https://github.com/Concorde89/Open-Source-Satoshi-Hunt/issues)

---

*Together we can build the most comprehensive, open, and rigorous analysis of Satoshi's identity.*
