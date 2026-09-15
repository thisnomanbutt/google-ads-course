# Lesson 4.3 — Write Better Ads, and Use AI to Help

*Phase 2 · Building Your First Search Campaigns — Module 4 · Writing Ads and Building Campaigns*

---

## Quick Recap From Lesson 4.2

You know the framework and the assets. Now we work on the actual words — and on using AI to help without producing generic rubbish.

---

## 🎯 What You Will Learn

- The four rules that separate high-CTR copy from filler
- Why numbers beat adjectives, every time
- The "so what?" test that kills weak headlines
- How to prompt an AI to write really usable ad assets
- How to edit AI output so it does not sound like everyone else's

---

## Rule 1: Specificity Beats Everything

This is the most important rule in advertising copy.

| Weak (vague) | Strong (specific) |
|---|---|
| Fast delivery | Delivered in 48 hours |
| Affordable prices | Filters from PKR 5,000 |
| Many happy customers | 40,000 Karachi families |
| Experienced team | 15 years, 2,400 patients |
| Great quality | Removes 99.9% of bacteria |
| Save money | Save PKR 3,200 a year on bottled water |

**Why specificity works:** a vague claim is a claim anyone could make. A specific claim sounds like it came from someone who actually knows their business. Numbers feel checkable, and checkable feels true.

**Think of two job candidates.** One says "I improved sales a lot." The other says "I grew sales 34% in eight months, from £180k to £241k." You believe the second one, and you have not checked either.

⚠️ **Every specific number must be true.** Made-up numbers are a misrepresentation risk (Lesson 1.5) and a trust risk with customers.

---

## Rule 2: Mirror the Search

The searcher's own words are the most powerful words you can use.

If someone searches "water filter without electricity", the headline "Water Filter, No Electricity Needed" outperforms "Advanced Water Purification Solutions" — every time.

**Why:** it creates instant recognition. The person's brain says *"this is exactly what I asked for"* before they read anything else.

**How to do it always:**
1. Take the top 5 search terms for each ad group (Lesson 3.4)
2. Make sure at least three headlines contain those actual words
3. Do not force it into awkward grammar — natural phrasing still matters

This also raises Ad Relevance, one of the three Quality Score components (Lesson 4.5).

---

## Rule 3: One Idea Per Headline

You have 30 characters. That is room for one idea, said clearly.

❌ **Trying to say too much:**
"Best Water Filter & Free Delivery & Guarantee" — does not fit, and reads as noise.

✅ **One idea, clean:**
"Free Delivery Across Karachi"

Remember: Google combines three headlines. If each headline says three things, the assembled ad says nine things and communicates none.

**Your job is to write nine clean parts. Google's job is to build the sentence.**

---

## Rule 4: Proof Over Adjectives

Adjectives are what you say about yourself. Proof is what others can check.

| Adjective | Proof |
|---|---|
| Trusted | 40,000 customers since 2019 |
| Professional | Licensed and insured |
| Best | Rated 4.8 from 612 reviews |
| Reliable | 98% on-time delivery |
| Painless | We numb before the needle |

Notice the last one. "Painless" is a claim. "We numb before the needle" is a **mechanism** (Lesson 0.2), and it makes the claim believable without stating it.

**The pattern:** instead of claiming a quality, describe the thing that produces it.

---

## The "So What?" Test

Read every headline and ask "so what?" as if you were a tired, sceptical customer.

- "We Use Advanced Technology." → *So what?*
- "Korean Nano-Membrane Filter." → *So what?*
- "Removes 99.9% of Bacteria." → *So what?*
- "Safe Water Without Boiling." → **Ah. That is what I want.**

Keep asking until you reach something the customer actually cares about. That last answer is your headline. The steps above it are supporting detail.

**Most weak ads stop at step one or two.** They describe the feature and assume the customer will do the translation. Tired people do not translate.

---

## Words That Work and Words That Waste Space

### 🟢 Usually strong

- **Numbers:** 48 hours, 30-day, 99.9%, PKR 5,000, 40,000
- **Action verbs:** get, book, order, save, stop, start, see
- **Risk removers:** guarantee, free trial, no obligation, money back, cancel anytime
- **Certainty words:** guaranteed (only if true), included, always, never
- **Local words:** Karachi, near you, same city, local
- **Question openers:** used sparingly, for problem clusters

### 🔴 Usually wasted space

- **Empty adjectives:** best, top, leading, premium, quality, professional, amazing, excellent
- **Corporate filler:** solutions, services, offerings, complete, innovative, cutting-edge
- **Vague promises:** great value, competitive prices, customer focused
- **Your own excitement:** welcome, hello, we are pleased to

⚠️ **A note on "best" and "#1":** beyond being weak, unsupported superlatives are a policy risk (Lesson 1.5). If you cannot prove you are #1, do not say it.

---

## Emotional Angles, Used Honestly

People buy on emotion and justify with logic. You can use this without manipulating anyone.

| Emotion | Honest use | Dishonest use |
|---|---|---|
| **Fear** | "Karachi tap water tested: bacteria found" (true, cited) | "Your family is dying" (manipulation) |
| **Relief** | "We numb before the needle" | Promising painless when it is not |
| **Pride** | "The filter serious cooks choose" | Fake exclusivity |
| **Belonging** | "40,000 Karachi families" (true count) | Invented numbers |
| **Urgency** | "Sale ends 30 September" (real date) | A timer that resets on reload |
| **Curiosity** | "The one thing boiling water does not remove" | Clickbait with no payoff |

**The line is simple:** if the person would feel misled after clicking, you crossed it. And that is also where Google's misrepresentation policy sits.

---

## Prompt Engineering for Ad Assets

AI can write 15 headlines in seconds. It will also produce generic rubbish if you prompt it lazily.

### Why lazy prompts fail

Prompt: *"Write 15 Google Ads headlines for a water filter company."*

Output: "Premium Water Filters", "Best Water Purification", "Quality You Can Trust", "Affordable Clean Water"...

Every one of these is an empty adjective. The AI produced generic copy because you gave it generic input. **It knows nothing about the business you did not tell it.**

### The prompt structure that works

Give the AI everything a good copywriter would need:

1. **The business and what it actually sells**
2. **The specific offer** (Lesson 0.2)
3. **The mechanism** — why it works
4. **The exact audience and their situation**
5. **Their top objections**
6. **What competitors say** (so it can avoid that)
7. **Real proof points and numbers**
8. **The intent cluster** this ad serves
9. **The character limit**
10. **The framework slots** to cover
11. **A ban list** of words you never want to see

---

## The Full Prompt Template

Copy this. Fill in the brackets.

```
You are writing Google Ads Responsive Search Ad assets.

BUSINESS
[Business name and what it sells, in one paragraph]

THE OFFER
Core promise: [what result the customer gets]
Mechanism: [why it works — the specific reason]
Risk removal: [guarantee, trial, return policy]
Price: [actual price or range]
Speed: [delivery or service time]
Effort needed from customer: [what they must do]

AUDIENCE
Who: [specific description, not "everyone"]
Location: [city and country]
Their situation right now: [what is happening in their life]
Their top 3 objections:
1. [objection]
2. [objection]
3. [objection]

PROOF POINTS (all checked true)
- [number and fact]
- [number and fact]
- [number and fact]

COMPETITORS
Every competitor says: [the shared message — we must avoid this]
Nobody says: [the gap]

THIS AD GROUP
Intent cluster: [name]
Top search terms people actually type:
- [term]
- [term]
- [term]
Landing page headline: [exact text of the page headline]

TASK
Write 15 headlines, maximum 30 characters each. Count characters and
show the count after each one. Cover these angles, one per headline:
1. Exact keyword match
2. Keyword variation
3. Main benefit
4. Mechanism
5. Proof or social evidence
6. Risk removal
7. Price or offer
8. Speed
9. Effort removal
10. Objection handler
11. Call to action
12. Urgency (only if really true)
13. Local trust
14. Differentiator
15. Question format

Then write 4 descriptions, maximum 90 characters each:
1. Full offer summary
2. Risk and trust
3. Proof and specifics
4. Call to action

RULES
- Never use these words: best, top, leading, premium, quality,
  professional, solutions, amazing, excellent, innovative,
  cutting-edge, complete, world-class
- Use specific numbers wherever possible
- Never make a claim not supported by the proof points above
- No superlatives that cannot be proven
- Match the tone of the landing page headline
- Write in [English / Urdu-influenced English / American English]
```

### Why each part matters

- **The ban list** is what prevents generic output more than anything else
- **The competitor gap** forces differentiation (Lesson 0.2)
- **The character count request** saves you 20 minutes of manual counting
- **The proof points** stop the AI from inventing claims — a real policy risk

---

## How to Edit AI Output

**AI output is a first draft. It is never the final ad.**

Work through this checklist on every generated asset:

- [ ] **Character count.** Check yourself. AI counts wrong surprisingly often.
- [ ] **Truth check.** Is every claim supported? Delete anything invented.
- [ ] **The "so what?" test** on each headline.
- [ ] **Read three random combinations aloud.** Do they work as complete ads?
- [ ] **Remove near-duplicates.** AI often produces the same idea twice with different words.
- [ ] **Add one thing the AI could not know.** A local reference, a customer phrase, an inside detail. This is what makes it yours.
- [ ] **Policy check** against Lesson 1.5.

That last-but-one point matters most. The AI has your brief. It does not have the phone call where a customer said *"does it work during load-shedding?"* **That sentence is worth more than the other fourteen headlines combined**, and only you have it.

---

## 📖 Real-World Example: Same Business, Two Prompts

Sana tested this properly. Same business, same ad group, two different prompts, two RSAs running in a controlled experiment.

### Prompt A (lazy)

> "Write 15 Google Ads headlines for a water filter company in Karachi."

**Output included:**
- Premium Water Filters Karachi
- Best Water Purifier Online
- Quality Water Solutions
- Affordable Clean Water
- Trusted Water Filter Brand
- Professional Water Systems
- Top Rated Water Purifiers

**Result: CTR 2.8%. Ad Strength: Average.**

Every headline was interchangeable with every competitor's. Nothing in the ad told anyone why to choose her.

### Prompt B (full template)

She filled in the whole template. Key inputs:
- Mechanism: Korean nano-membrane, gravity powered
- Objection 1: "Will it work during load-shedding?"
- Objection 2: "Do I need a plumber?"
- Objection 3: "How do I know it actually works?"
- Proof: 40,000 customers, 99.9% bacteria removal, 2-year warranty
- Competitors all say: "best quality, affordable, free delivery"
- Nobody says: anything about electricity
- Ban list: best, top, premium, quality, professional, solutions

**Output included:**
- Works During Load-Shedding (24)
- No Plumber. No Electricity. (26)
- Korean Nano-Membrane Filter (27)
- 40,000 Karachi Homes Use It (27)
- Removes 99.9% of Bacteria (25)
- 30-Day Money Back, We Collect (29)
- From PKR 5,000, Free Delivery (29)
- Delivered in 48 Hours (21)
- Still Boiling Water Daily? (26)

**Result: CTR 6.9%. Ad Strength: Good.**

**Then she added the human layer.** She replaced two AI headlines with phrases taken straight from customer WhatsApp messages:

- "Bijli Nahi? Paani Phir Bhi Saaf" (mixing Urdu — matched how her customers actually talk)
- "Bas Rakho Aur Bhool Jao" (roughly: "just place it and forget it")

**Final CTR: 8.4%.**

| Version | CTR | Cost per sale |
|---|---|---|
| Prompt A (lazy) | 2.8% | PKR 3,100 |
| Prompt B (full template) | 6.9% | PKR 1,720 |
| Prompt B + human edits | **8.4%** | **PKR 1,380** |

**The AI got her from bad to good. The human touch got her from good to excellent.**

That is the correct relationship. AI is a fast, tireless first-draft writer. It is not a copywriter, because it has never spoken to your customer.

---

## 📊 Mastery Score

**Level: Intermediate**

Copywriting is a craft that improves with practice. The rules here give you a reliable floor; volume and feedback raise your ceiling.

---

## 📌 Key Takeaways

- Specificity beats everything. Numbers feel checkable, and checkable feels true.
- Mirror the searcher's own words. Recognition happens before reading.
- One idea per headline. Google assembles the sentence; you supply clean parts.
- Replace adjectives with proof, and claims with mechanisms.
- AI needs the full brief — offer, mechanism, objections, proof, competitor gap and a ban list. Then edit it with something only you know.

---

## ☑️ Self-Assessment

1. Count the empty adjectives in your current ads. How many?
2. How many specific numbers appear in your headlines?
3. Do your headlines contain the actual words people search?
4. Apply the "so what?" test to your best headline. Does it survive?
5. When you last used AI for copy, did you give it a ban list?

---

## 🧠 Quiz

**1. Which headline is stronger?**
a) Premium Quality Water Filters
b) Removes 99.9% of Bacteria
c) Best Water Solutions
d) Professional Water Systems

**2. Why does mirroring the searcher's words work?**
a) Google needs it
b) It creates instant recognition before the person even reads properly
c) It is cheaper
d) It fills more characters

**3. What is the "so what?" test?**
a) Asking whether the ad fits the character limit
b) Repeatedly asking why the customer should care, until you reach something they actually want
c) Checking Ad Strength
d) Comparing to competitors

**4. Why do lazy AI prompts produce generic copy?**
a) AI cannot write ads
b) The AI only knows what you tell it, so a generic brief produces generic output
c) Google blocks AI copy
d) Character limits

**5. What should you always add to AI-generated copy?**
a) More adjectives
b) Something only you could know — a customer phrase, a local detail
c) The word "best"
d) Nothing, it is ready to use

---

## 💪 Practical Exercise (40 minutes)

Rewrite one existing ad using the rules.

1. Take a current RSA. List every empty adjective in it.
2. For each one, find a specific replacement using real business facts.
3. Apply the "so what?" test to every headline. Rewrite the failures.
4. Add three headlines using exact search terms from your search terms report.
5. Fill in the full prompt template for that ad group and generate a set with AI.
6. Compare your version with the AI version. Take the best from each.

---

## 🎯 Expert Challenge

Build a messaging system, not just an ad.

- Create a message-market fit document: for each intent cluster, the customer's belief before the ad, the belief you want after, and the single sentence that bridges them.
- Build your proof inventory: every verifiable number, credential, review count and result the business has. Most businesses have far more than they use, and nobody has ever written them all down.
- Design a customer language library: record the exact phrases customers use in calls, reviews, chats and complaints. Tag them by objection. This becomes your headline source.
- Build a reusable prompt for this business, and test it against three different intent clusters. Refine the ban list based on what keeps appearing.
- Then run a real experiment (Lesson 13.1) comparing your best human-written ad against your best AI-assisted ad. Record the result honestly, including if the AI wins. Repeat this quarterly to keep your own judgement calibrated.

---

## ✅ Quiz Answers

1 — **b**. A specific, checkable number beats three empty adjectives.
2 — **b**. Recognition is instant and pre-conscious.
3 — **b**. Keep asking why they care until you reach a real want.
4 — **b**. Generic input, generic output. The AI knows only your brief.
5 — **b**. The detail only you have — usually from a real customer.

---

**Next lesson:** 4.4 — The Settings That Quietly Waste Your Money
