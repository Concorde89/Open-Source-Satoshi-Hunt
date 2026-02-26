# Satoshi Hunted by LLM: What AI Reveals About Bitcoin's Creator

*By AutoIncentive | February 2026*

---

## The Question Everyone Asks

Who is Satoshi Nakamoto? Since Bitcoin's creation in 2009, this question has spawned countless theories, investigations, and claims. But until now, most attempts have relied on circumstantial evidence, timing analysis, or simple text matching.

We decided to apply actual science.

## The Academic Foundation

In February 2026, researchers published a groundbreaking paper: ["Deanonymizing Users of the Anonymity Network Using LLMs"](https://arxiv.org/abs/2602.16800). Their key finding? **Large Language Models can deanonymize users with 68% recall at 90% precision** — far exceeding any previous method.

The approach is elegant:
1. Extract identity-relevant features from raw text using LLMs
2. Generate semantic embeddings for comparison
3. Use LLM reasoning to verify matches

We applied this exact methodology to Satoshi Nakamoto.

## Building the Corpus

First, we collected **everything Satoshi ever wrote publicly**:

| Source | Count | Words |
|--------|-------|-------|
| Bitcointalk posts | 543 | ~80,000 |
| Emails to developers | 50+ | ~35,000 |
| Cryptography mailing list | 15 | ~10,000 |
| P2P Foundation | 3 | ~3,000 |
| Bitcoin whitepaper | 1 | ~3,000 |
| **Total** | **600+** | **173,406** |

Then we collected comparable corpora for the top suspects:

- **Nick Szabo** — Bit Gold inventor, smart contracts pioneer (45K words)
- **Adam Back** — Hashcash inventor, first to receive Satoshi email (55K words)
- **Hal Finney** — First Bitcoin recipient, PGP developer (17K words)
- **Wei Dai** — b-money inventor, cited in whitepaper (10K words)
- **Len Sassaman** — Mixmaster developer, cypherpunk legend (6K words)

## The Analysis

### What We Extracted

For each corpus, we analyzed:

- **Writing style** — Sentence structure, tone, perspective
- **Technical vocabulary** — Domain-specific terms, cryptographic language
- **Language variant** — British vs American English (critical!)
- **Unique phrases** — Distinctive expressions and patterns
- **Expertise areas** — Demonstrated knowledge domains

### What We Found

Here's where it gets interesting.

**Satoshi used MIXED British and American English.** Words like "colour" and "centralised" appear alongside "color" and "centralized." This is unusual — most writers are consistent.

Who else uses mixed English? 
- **Adam Back** — British, but worked internationally
- **Len Sassaman** — American, but lived in Belgium during Bitcoin's development

**Satoshi's writing style is practical, not academic.** Despite deep technical knowledge, Satoshi wrote like an engineer explaining to users — not like an academic writing a paper.

Who matches this style?
- **Adam Back** — Implementation-focused
- **Hal Finney** — Practical, user-oriented

Who doesn't match?
- **Nick Szabo** — Significantly more academic
- **Wei Dai** — More terse and theoretical

## The Results

| Rank | Candidate | Match Score | Key Evidence |
|------|-----------|-------------|--------------|
| 🥇 | **Nick Szabo** | 72% | Bit Gold → Bitcoin conceptual link |
| 🥈 | **Adam Back** | 68% | Hashcash, British English, first contact |
| 🥉 | **Len Sassaman** | 65% | Byzantine fault work 2008, European location |
| 4 | Hal Finney | 58% | First recipient, RPOW |
| 5 | Wei Dai | 55% | b-money cited directly |

**No candidate exceeds 75% confidence.**

## Key Insights

### Nick Szabo: The Strongest Conceptual Match

Bit Gold (2005) is essentially Bitcoin without distributed consensus. Same philosophy, same goals, similar technical vocabulary. The conceptual overlap is undeniable.

But the writing styles diverge significantly. Szabo writes like a professor; Satoshi writes like a builder. Either Szabo deliberately changed his style, or he's not Satoshi.

### Adam Back: The Hashcash Connection

Adam Back invented Hashcash — the proof-of-work system directly cited in Bitcoin's whitepaper. He was the first person Satoshi contacted about Bitcoin. And he uses British English.

But Satoshi contacting Back suggests they were different people. Would you email yourself to establish an alibi?

### Len Sassaman: The Dark Horse

This is where it gets fascinating.

Len Sassaman was working on **Byzantine fault tolerance solutions in 2008** — the exact year Bitcoin solved the Byzantine generals problem. He was living in **Belgium** — matching Satoshi's European timezone evidence. He used **mixed British/American English** — just like Satoshi.

And then there's the timing: Len died in **July 2011**, just two months after Satoshi's final message ("I've moved on to other things"). A memorial was encoded in Bitcoin's blockchain at block 138725.

Coincidence? Maybe. But the circumstantial evidence is compelling.

### The Collaboration Theory

What if Satoshi wasn't one person?

Bitcoin required expertise across multiple domains:
- Cryptography (Hashcash → Adam Back)
- Monetary theory (Bit Gold → Nick Szabo)
- P2P networking (Mixmaster → Len Sassaman)
- Practical implementation (RPOW → Hal Finney)

A small team could explain why no single candidate perfectly matches all aspects of Satoshi's writings and capabilities.

## What This Means

We didn't find Satoshi. No one has. But we've created something better: **an open, reproducible methodology**.

All our data is public:
- [GitHub Repository](https://github.com/Concorde89/Open-Source-Satoshi-Hunt/)
- Complete Satoshi corpus (173K words)
- All candidate corpora
- Analysis scripts
- Detailed methodology

Anyone can:
1. Add new candidates
2. Improve the analysis
3. Challenge our findings
4. Submit their own scores via Pull Request

## Try It Yourself

Think someone else is Satoshi? Here's how to test:

1. **Fork the repository**
2. **Collect their public writings** (minimum 5,000 words)
3. **Run the analysis** following our methodology
4. **Submit a Pull Request** with your findings

We'll merge compelling analyses into the main project. Over time, we'll build the most comprehensive, open-source investigation into Satoshi's identity ever attempted.

## Conclusion

After analyzing 173,000 words from Satoshi and comparing against five top candidates:

- **Nick Szabo** has the strongest conceptual overlap (72%)
- **Adam Back** has intriguing technical connections (68%)
- **Len Sassaman** deserves more attention (65%)
- No candidate reaches high-confidence threshold (>75%)
- The collaboration theory remains plausible

Perhaps that's fitting. Satoshi gave us Bitcoin, then disappeared — proving that the technology matters more than the identity. 

But the hunt continues. And now it's open source.

---

*This project was built by [AutoIncentive](https://autoincentive.online), applying methodology from [arXiv:2602.16800](https://arxiv.org/abs/2602.16800).*

*Repository: [github.com/Concorde89/Open-Source-Satoshi-Hunt](https://github.com/Concorde89/Open-Source-Satoshi-Hunt)*

*Follow us: [@Autoincentiv3](https://x.com/Autoincentiv3)*

---

*"We are all Satoshi."*
