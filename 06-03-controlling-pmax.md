# Lesson 6.3 — Stop PMax Taking Credit for Free Sales

*Phase 3 · Bidding and Other Ad Types — Module 6 · Shopping, PMax, YouTube and Display*

---

## Quick Recap From Lesson 6.2

Your PMax campaign is built properly. Now we stop it taking credit for work your Search campaigns already did.

---

## 🎯 What You Will Learn

- Why PMax absorbs brand traffic, and what that costs you
- How to apply brand exclusions correctly
- How PMax and Search compete, and who wins
- How to read Search Term Insights and Asset Group reports
- The PMax monthly control routine

---

## The Central Problem With PMax

PMax will find your **easiest** conversions first. That is rational — it is trying to hit your target.

Your easiest conversions are people searching your own brand name. They already know you. They already intended to buy.

So PMax spends on brand traffic, reports excellent results, and you conclude PMax is your best channel.

**The problem: those sales were going to happen anyway.**

**Think of hiring a salesperson who stands at your shop door and greets people who were already walking in, then claims commission on their purchases.** Impressive sales figures. Zero new revenue.

This is not Google being dishonest. It is a system doing exactly what you asked: find conversions cheaply. You have to tell it not to.

---

## Brand Exclusions: The Essential Control

Brand exclusions stop PMax showing ads on searches containing your brand name.

### How to set it up

**Step 1: Create a brand list.**
Tools → Shared library → **Brand lists** → Create.

**Step 2: Add every variation.**
- Your brand name
- Common misspellings
- Your brand + product ("aquapure filter")
- Your website domain
- Your brand in local script if relevant
- Any sub-brand names

**Step 3: Apply it.**
PMax campaign → Settings → **Brand exclusions** → select your brand list.

### What this does

Your brand searches now go to your dedicated Brand Search campaign — where they cost far less and where the reporting is honest.

### What to expect afterwards

⚠️ **Your PMax reported ROAS will fall. Sometimes sharply.**

This is not a problem. It is the illusion being removed. Your total business results should stay the same or improve, because the same brand sales now come through a cheaper channel.

**Tell the client before you do it.** "PMax ROAS will drop by roughly X%. Total sales will not. We are moving those sales to a cheaper campaign and getting honest numbers."

### How to measure the brand share first

Before applying exclusions, find out how big the problem is:

1. PMax campaign → Insights → **Search terms insights**
2. Look at the search categories
3. Estimate what share contains your brand name

If it is over 20%, brand exclusions will change your reporting a lot.

---

## How PMax and Search Compete

When both a PMax campaign and a Search campaign could serve the same query, Google decides between them. Here is the general logic:

| Situation | Usually wins |
|---|---|
| An **exact match keyword** matches the search | **Search campaign** |
| Only broad or phrase match applies | **The higher Ad Rank wins** |
| No matching keyword in Search | **PMax** |

### What this means practically

**Exact match keywords protect your Search campaigns.** If you have a keyword on exact match that matches the query, Search generally takes it.

**Phrase and broad match do not offer the same protection.** PMax can win those auctions if its Ad Rank is higher.

### The practical strategy

1. **Put your top proven converters on exact match** in Search. This protects your most valuable traffic from PMax.
2. **Apply brand exclusions to PMax** so brand always goes to your brand campaign.
3. **Let PMax handle discovery** — the long tail you have not covered with keywords.
4. **Monitor the overlap monthly** using the methods below.

---

## Search Terms Insights: The Limited Window

PMax does not give you a full search terms report like Search campaigns do. You get **Search terms insights**, which groups queries into categories.

**Where:** campaign → Insights → Search terms insights.

### What you can do with it

- See the **themes** PMax is spending on
- Spot obvious irrelevance
- Estimate the brand share
- Find themes worth building dedicated Search campaigns for

### What you cannot do

- See every individual search term
- Add negative keywords directly at the search term level (in most accounts)

### The negative keyword situation

Historically, adding negatives to PMax needed asking a Google representative. Account-level negative keyword lists have become available to more advertisers over time.

**Check your account:** Tools → Shared library → Negative keyword lists → look for the option to apply at account level.

If available, use it for:
- Job seekers, students, DIY (the universal list from Lesson 3.4)
- Products or services you do not offer
- Locations you do not serve

⚠️ **Be more careful with PMax negatives than with Search negatives.** PMax reaches across many surfaces, and an overly broad negative can restrict it in ways you cannot see. Block what is clearly wrong; do not fine-tune.

---

## Asset Group Reporting: What You Can See

**Where:** campaign → Asset groups → set the view to show performance.

### What to check

1. **Conversions per asset group.** Any group below ~10/month should probably be merged.
2. **Asset performance ratings.** Same as Lesson 4.1 — Best, Good, Low. Replace Low performers 2–3 at a time.
3. **Which images and videos are working.** This tells you what creative to make more of.

### The Insights page

Also check campaign → Insights for:
- **Search terms insights** (themes)
- **Audience insights** (who is converting)
- **Asset audience insights** (which creative works for which group)
- **Diagnostics** (setup problems)

**Diagnostics is worth checking weekly.** It flags issues like missing assets, feed problems and policy restrictions that would otherwise be invisible.

---

## Detecting Cannibalisation

Cannibalisation is when PMax takes traffic your Search campaigns were already winning — cheaply.

### The diagnostic method

**Step 1.** Note your Search campaign performance for 30 days *before* PMax launched.

**Step 2.** After PMax has run 30 days, compare:

| Metric | Before PMax | After PMax | Read as |
|---|---|---|---|
| Search conversions | 120 | 118 | ✅ Search unaffected |
| Search conversions | 120 | 71 | ⚠️ Cannibalisation |
| Total conversions | 120 | 190 | ✅ Real growth |
| Total conversions | 120 | 132 | ⚠️ Mostly shifted |

**Step 3.** Calculate the **incremental** conversions:

> **Incremental = Total after − Total before**

If PMax reports 70 conversions but total account conversions only rose by 12, then **58 of those were taken from Search.**

### The honest test

If you can afford a two-week pause, this is the cleanest evidence:

1. Pause PMax for 14 days
2. Watch **total account** conversions, not PMax conversions
3. If total conversions fall by roughly what PMax was producing → PMax is incremental ✅
4. If total conversions barely move → PMax was mostly shifting existing traffic ⚠️

⚠️ **Cost of this test:** pausing PMax restarts its learning phase. Only run it when the question really matters — for example, before a large budget increase.

A cleaner method is a geographic experiment (Lesson 13.2), which measures incrementality without pausing anything.

---

## The PMax Monthly Control Routine

### Weekly (15 minutes)
1. Check **Diagnostics** for setup problems
2. Check spend pacing
3. Review Search terms insights for obvious irrelevance
4. Check for auto-generated assets you did not approve

### Monthly (60 minutes)
1. **Brand share check** — is brand traffic creeping back in?
2. **Asset performance review** — replace 2–3 Low assets
3. **Asset group volume check** — anything starving?
4. **Listing group audit** — any new products unlabelled and spending?
5. **Cannibalisation check** — compare Search performance trend
6. **Incrementality question** — is total account performance rising, or just PMax's share?

### Quarterly
1. Full creative refresh — new images and video
2. Audience signal update with fresh customer data
3. Profit tier recalculation (Lesson 6.1)
4. Consider a geo experiment to measure true incrementality

---

## When to Pause PMax Entirely

Be willing to reach this conclusion. Signals that PMax is not earning its place:

1. **Total account conversions have not risen** since launch, despite PMax reporting conversions
2. **Search performance fell** by roughly what PMax gained
3. **POAS is below 1.0** after proper profit analysis (Lesson 0.4)
4. **It is only winning brand traffic** and brand exclusions have not fixed it
5. **A geo experiment showed no incremental lift** (Lesson 13.2)

**PMax is a tool, not an obligation.** Some accounts really perform better with well-run Search and Shopping campaigns.

---

## 📖 Real-World Example: The 58 Conversions That Never Existed

Bilal's US e-commerce client launched PMax in March. The results looked excellent.

**Month 1 report:**
- PMax: 94 conversions, $8,200 spend, 5.1x ROAS
- Client delighted, asked to double the PMax budget

Before agreeing, Bilal did the comparison the client had not asked for.

| | February (no PMax) | March (with PMax) |
|---|---|---|
| Search conversions | 186 | 121 |
| Shopping conversions | 84 | 47 |
| PMax conversions | 0 | 94 |
| **Total conversions** | **270** | **262** |
| Total spend | $19,400 | $27,600 |

**Total conversions went DOWN by 8.** Spend went up by $8,200.

PMax had produced 94 conversions and taken 102 from Search and Shopping. Every conversion it "gained" came from somewhere else in the account — and it paid more for them.

**The client's dashboard showed a successful new channel. The business was 8 conversions worse off and $8,200 poorer.**

### What Bilal did

**Step 1: Brand exclusions.** He measured first: 41% of PMax search terms contained the brand name. He built the brand list and applied it.

**Step 2: Exact match protection.** He moved the top 30 converting keywords in Search from phrase to exact match, protecting them from PMax.

**Step 3: Listing group restriction.** He restricted PMax to `high_margin` and `mid_margin` products only, and excluded the 40 products Search was already winning efficiently.

**Step 4: He told the client the truth.** *"Last month looked like growth. It was not. Here is the comparison. I am going to make PMax smaller and more specific, and the PMax number in your report will get worse."*

### Results in month 3

| | February (baseline) | May (controlled PMax) |
|---|---|---|
| Search conversions | 186 | 191 |
| Shopping conversions | 84 | 88 |
| PMax conversions | 0 | 46 |
| **Total conversions** | **270** | **325** |
| Total spend | $19,400 | $24,100 |
| Cost per conversion | $71.85 | $74.15 |

**PMax's own number halved, from 94 to 46. Total conversions rose by 55.**

Those 46 were really incremental — new demand PMax found on surfaces Search could not reach.

Cost per conversion rose slightly, from $71.85 to $74.15. That is expected: incremental customers are harder to find than existing ones. The client was happy to pay 3% more per conversion for 20% more conversions.

**Bilal's line to the client, which is worth remembering:** *"The question is never how many conversions PMax reports. It is how many conversions your business got that it would not have got otherwise."*

---

## 📊 Mastery Score

**Level: Expert**

Measuring incrementality rather than attribution is really advanced. Most agencies never do it, which is exactly why it is valuable.

---

## 📌 Key Takeaways

- PMax finds your easiest conversions first, which are usually your own brand searches.
- Apply brand exclusions. Expect reported PMax ROAS to fall — that is the illusion being removed.
- Exact match keywords protect Search campaigns from PMax. Phrase and broad do not.
- Judge PMax on total account conversions, not on PMax's own reported number.
- Be willing to conclude PMax is not incremental. It is a tool, not an obligation.

---

## ☑️ Self-Assessment

1. Do your PMax campaigns have brand exclusions applied?
2. What share of PMax search terms contain your brand name?
3. Did your Search conversions fall when PMax launched?
4. Have total account conversions risen since PMax started, or just shifted?
5. Are your top converting keywords on exact match to protect them?

---

## 🧠 Quiz

**1. Why does PMax absorb brand traffic?**
a) Google forces it
b) Brand searches are the easiest conversions, so a system chasing targets finds them first
c) It is a bug
d) Brand keywords are cheap

**2. What happens to reported PMax ROAS after applying brand exclusions?**
a) It rises
b) It usually falls, because the easy conversions are removed
c) Nothing changes
d) The campaign stops

**3. Which match type protects Search campaigns from PMax?**
a) Broad
b) Phrase
c) Exact
d) None

**4. PMax reports 70 conversions but total account conversions only rose by 12. What does this mean?**
a) PMax is your best channel
b) Roughly 58 conversions were taken from other campaigns
c) Tracking is broken
d) The budget is too small

**5. What is the cleanest way to measure PMax incrementality without pausing it?**
a) Check the ROAS
b) A geographic experiment
c) Ask Google support
d) Compare to last year

---

## 💪 Practical Exercise (40 minutes)

Run a PMax control audit.

1. Check whether brand exclusions are applied. If not, build the brand list.
2. Open Search terms insights. Estimate the brand share of spend.
3. Compare the 30 days before PMax launched to the most recent 30 days: Search conversions, Shopping conversions, total conversions.
4. Calculate the incremental conversions.
5. Check which of your top converting keywords are on exact match.
6. Write your findings as a one-page client summary, including what you will change.

---

## 🎯 Expert Challenge

Build a complete PMax governance and incrementality framework.

- Design the brand protection structure: brand list, exact match keyword coverage, and the monthly check that confirms brand traffic is still going to the brand campaign.
- Build the incrementality measurement plan using a geographic holdout (Lesson 13.2), including the market selection, the duration, the minimum detectable effect, and how you will control for other changes during the test period.
- Create the cannibalisation dashboard: a view showing Search, Shopping and PMax conversions side by side over time, with total account conversions as the headline number.
- Design the escalation process: the specific evidence that would justify reducing, restructuring, or pausing PMax, and who decides.
- Write the client education document explaining channel attribution versus incrementality in plain language, with the specific numbers from their account. This document is often what converts a transactional client relationship into a strategic one.

---

## ✅ Quiz Answers

1 — **b**. It is rational behaviour from a system chasing a target.
2 — **b**. Reported ROAS falls; real business results do not.
3 — **c**. Exact match generally takes precedence over PMax.
4 — **b**. Most of the "gain" was shifted, not created.
5 — **b**. A geo experiment measures lift without disrupting the campaign.

---

**Next lesson:** 6.4 — Demand Gen: Reaching People Before They Search
