# 🔍 Open Source Satoshi Hunt

**An open-source investigation into Satoshi Nakamoto's identity using LLM-based deanonymization techniques.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

By [AutoIncentive](https://autoincentive.online) | February 2026

---

## 📖 Overview

This project applies the methodology from the academic paper ["Deanonymizing Users of the Anonymity Network Using LLMs"](https://arxiv.org/abs/2602.16800) to analyze Satoshi Nakamoto's writings and compare them against known candidates.

Unlike previous attempts that relied on simple text matching or timing analysis, this approach uses:

1. **LLM Feature Extraction** — Analyzing writing style, vocabulary patterns, technical terminology
2. **Semantic Comparison** — Vector similarity across extracted linguistic features  
3. **LLM Verification** — Deep reasoning with supporting evidence and contradictions

### Why This Matters

Everyone has speculated about Satoshi's identity. We decided to apply actual academic methodology to the question. The paper from arXiv demonstrates that LLMs can deanonymize users with 68% recall at 90% precision. We applied this same pipeline to the Satoshi corpus.

**The goal isn't to "expose" anyone** — it's to demonstrate the methodology and create an open platform where anyone can contribute their own analysis.

---

## 📊 Results

### Final Match Scores

| Rank | Candidate | Score | Key Evidence |
|------|-----------|-------|--------------|
| 🥇 | **Nick Szabo** | 72% | Bit Gold conceptual precursor, smart contracts, monetary theory |
| 🥈 | **Adam Back** | 68% | Hashcash cited in whitepaper, British English patterns, first contact |
| 🥉 | **Len Sassaman** | 65% | Byzantine fault work 2008, European location, timing of disappearance |
| 4 | Hal Finney | 58% | First recipient, RPOW, but likely separate person |
| 5 | Wei Dai | 55% | b-money cited, but contacted by Satoshi directly |

**⚠️ No candidate exceeds 75% confidence.**

### Key Findings

1. **Nick Szabo** has the strongest conceptual overlap (Bit Gold → Bitcoin), but his writing style is significantly more academic than Satoshi's

2. **Adam Back** matches Satoshi's British English patterns and has direct proof-of-work expertise, but lacks the economic theory depth

3. **Len Sassaman** has compelling circumstantial evidence:
   - Working on Byzantine fault tolerance solutions in 2008 (Bitcoin's core innovation)
   - Living in Belgium during Bitcoin development (matches European timezone evidence)
   - Death in July 2011 coincides with Satoshi's disappearance (2 months after final message)
   - Mixed British/American English like Satoshi

4. **Collaboration theory** deserves serious consideration — Bitcoin required expertise across cryptography, distributed systems, economics, and P2P networking

---

## 📚 The Corpus

### Satoshi Nakamoto (173,406 words)

| Source | Count | Description |
|--------|-------|-------------|
| Bitcointalk posts | 543 | Forum discussions 2009-2010 |
| Emails | 50+ | Correspondence with developers |
| Cryptography mailing list | 15 | Original Bitcoin announcement |
| P2P Foundation | 3 | Early posts |
| Bitcoin whitepaper | 1 | The foundational document |

### Candidates Analyzed

| Candidate | Words | Primary Sources |
|-----------|-------|-----------------|
| Nick Szabo | 45,344 | Bit Gold, Smart Contracts, Shelling Out, Unenumerated blog |
| Adam Back | 54,656 | Hashcash paper, Cypherpunks posts (732+) |
| Hal Finney | 17,224 | Bitcoin and Me, RPOW, Cypherpunks archive |
| Wei Dai | 9,521 | b-money, PipeNet, Cypherpunks posts |
| Len Sassaman | 5,584 | Mixmaster Protocol specification |

---

## 🔬 Methodology

Based on [arXiv:2602.16800](https://arxiv.org/abs/2602.16800):

```
┌─────────────────────────────────────────────────────────────┐
│  1. CORPUS COLLECTION                                        │
│     • Satoshi's complete public writings (173K words)        │
│     • Candidate writings from public sources                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  2. LLM FEATURE EXTRACTION                                   │
│     • Writing style (sentence structure, tone)               │
│     • Technical vocabulary patterns                          │
│     • British vs American English usage                      │
│     • Unique phrases and expressions                         │
│     • Topic expertise areas                                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  3. SEMANTIC COMPARISON                                      │
│     • Feature similarity scoring                             │
│     • Technical knowledge overlap                            │
│     • Circumstantial evidence weighting                      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  4. LLM VERIFICATION                                         │
│     • Deep reasoning over top candidates                     │
│     • Evidence for and against each                          │
│     • Confidence score calculation                           │
└─────────────────────────────────────────────────────────────┘
```

### Feature Categories Analyzed

| Category | What We Extract |
|----------|-----------------|
| **Writing Style** | Sentence length, complexity, tone, perspective (1st/3rd person) |
| **Technical Vocabulary** | Domain-specific terms, cryptographic language |
| **Language Variant** | British vs American English spellings and phrases |
| **Communication Patterns** | How they explain concepts, respond to questions |
| **Expertise Areas** | Deep knowledge domains demonstrated in writing |

---

## 📁 Repository Structure

```
Open-Source-Satoshi-Hunt/
├── README.md                    # This file
├── CONTRIBUTING.md              # How to add candidates/analysis
├── LICENSE                      # MIT License
│
├── corpus/
│   ├── satoshi/
│   │   ├── satoshi_corpus.json  # Full corpus with metadata
│   │   └── satoshi_corpus.txt   # Plain text version
│   │
│   └── candidates/
│       ├── nick-szabo/
│       │   └── _corpus.txt
│       ├── adam-back/
│       │   └── _corpus.txt
│       ├── hal-finney/
│       │   └── _corpus.txt
│       ├── wei-dai/
│       │   └── _corpus.txt
│       └── len-sassaman/
│           └── _corpus.txt
│
├── analysis/
│   ├── FEATURE_EXTRACTION.md    # Detailed feature analysis
│   ├── FINAL_RESULTS.md         # Complete results with reasoning
│   └── methodology.md           # Detailed methodology explanation
│
└── scripts/
    ├── build-corpus.js          # Corpus processing script
    └── analyze.js               # Analysis runner
```

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Ways to Contribute

1. **Add a New Candidate**
   - Create corpus in `corpus/candidates/<name>/`
   - Run analysis
   - Submit PR with your findings

2. **Improve Existing Analysis**
   - Add more writings to existing candidates
   - Refine feature extraction methodology
   - Challenge or support existing scores

3. **Add New Methodology**
   - Implement embeddings-based comparison
   - Add statistical stylometry tools
   - Create visualization dashboards

### Candidate Submission Format

When submitting a new candidate analysis:

```markdown
## Candidate: [Name]

### Corpus
- Sources: [list sources]
- Word count: [total]

### Feature Analysis
- Writing style: [description]
- Technical vocabulary: [key terms]
- British/American: [which]

### Match Score: [X]%

### Evidence For
- [bullet points]

### Evidence Against
- [bullet points]

### Conclusion
[your analysis]
```

---

## 📖 References

### The Paper
This project applies methodology from:

> **"Deanonymizing Users of the Anonymity Network Using LLMs"**  
> arXiv:2602.16800, February 2026
> 
> Key finding: LLMs can deanonymize users with 68% recall at 90% precision by extracting identity-relevant features from raw text.

### Data Sources

- [Satoshi Nakamoto Institute](https://satoshi.nakamotoinstitute.org/) — Complete Satoshi archive
- [satoshi-data (GitHub)](https://github.com/flesler/satoshi-data) — Curated JSON dataset
- [Sirius Emails](https://mmalmi.github.io/satoshi/) — Martti Malmi correspondence
- [Cypherpunks Archive](https://mailing-list-archive.cryptoanarchy.wiki/) — Mailing list posts
- [nakamoto-archive (GitHub)](https://github.com/lugaxker/nakamoto-archive) — Verified archive

---

## ⚖️ License

MIT License — See [LICENSE](LICENSE)

Corpora collected from public sources. Original writings remain the intellectual property of their respective authors.

---

## ⚠️ Disclaimer

**This is a research project applying academic methodologies to publicly available data.**

- We make no definitive claims about Satoshi Nakamoto's identity
- Probability scores represent algorithmic analysis, not certainty
- This project respects privacy — we only analyze public writings
- The goal is methodology demonstration, not exposure

---

## 🏢 About AutoIncentive

[AutoIncentive](https://autoincentive.online) builds AI + crypto infrastructure:

- **x402 Facilitator** — Payment verification for Base + Solana
- **Agent Coordination Protocol** — Agent-to-agent communication with micropayments
- **Open-source crypto tools**

**Token:** [$AIT on Solana](https://pump.fun/9QRknyCszLEmzgfEHuW4v8cygf4Hu5Dwc1LjgSaRpump)

Follow us: [@Autoincentiv3](https://x.com/Autoincentiv3)

---

*"We are all Satoshi."* — The Cypherpunk Community
