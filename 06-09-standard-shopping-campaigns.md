# Lesson 6.9 — Standard Shopping Campaigns, and When to Use Them

*Phase 3 · Bidding and Other Ad Types — Module 6 · Shopping, PMax, YouTube and Display*

---

## Quick Recap From Lesson 6.8

You have covered every channel except one: the plain Shopping campaign. Performance Max gets all the attention, but Standard Shopping is still the better choice in several real situations.

---

## 🎯 What You Will Learn

- What a Standard Shopping campaign is, and how it differs from PMax
- The five situations where Standard beats PMax
- How to build one, step by step
- How to see which products earn money, which PMax hides from you
- How to run both together without them fighting

---

## What a Standard Shopping Campaign Is

A **Shopping ad** shows a product picture, price, shop name and title, straight in the search results.

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   [photo]    │ │   [photo]    │ │   [photo]    │
│ Gravity      │ │ RO Water     │ │ Water Filter │
│ Water Filter │ │ Purifier     │ │ Cartridge    │
│ PKR 5,000    │ │ PKR 12,500   │ │ PKR 1,200    │
│ Sana Filters │ │ AquaPure     │ │ Sana Filters │
└──────────────┘ └──────────────┘ └──────────────┘
```

**You do not choose keywords.** Google reads your product feed (Lesson 6.1) and decides which searches your products should appear for.

**This is why the feed is everything.** Your product title is effectively your keyword list.

---

## Standard Shopping vs Performance Max

Both run Shopping ads. They are not the same thing.

| | Standard Shopping | Performance Max |
|---|---|---|
| **Where it shows** | Search and Shopping tab mainly | Everywhere on Google |
| **Product-level reporting** | ✅ **Full — you see every product** | ⚠️ Limited |
| **Search term data** | ✅ **You can see it** | ⚠️ Limited |
| **Negative keywords** | ✅ **Full control** | Limited |
| **What you can exclude** | Precise | Less precise |
| **Creative needed** | Just the feed | Full set: images, video, headlines |
| **Typical performance** | Good, predictable | Often higher volume |
| **Predictability** | ✅ High | Lower |

### The honest summary

**PMax usually wins on volume.** It reaches more places and Google's automation has more room to work.

**Standard Shopping wins on control and visibility.** You can see what is happening and change it.

⚠️ **If PMax is running on the same products, it will usually take the traffic.** Google generally prioritises PMax over Standard Shopping for the same product. So running both on the same products means Standard gets starved.

**That is the key fact that decides how you use them together.**

---

## The Five Times Standard Shopping Wins

### 1. You are starting out and need to see what is happening

PMax is a box you cannot see inside. When you are learning what sells, that is a problem.

**Standard Shopping shows you:**
- Which exact products get clicks and sales
- Which search terms triggered them
- Which products waste money

**Run Standard first. Learn. Then move to PMax once you know your catalogue.**

### 2. You do not have the creative for PMax

PMax wants 15 headlines, 5 descriptions, images in three shapes, logos and ideally video (Lesson 6.2).

**Standard Shopping needs none of that.** Just a good feed.

⚠️ **A PMax campaign with thin creative performs badly and you will not know why.** If you cannot produce the assets properly, Standard Shopping is the better campaign.

### 3. You need product-level control

Standard Shopping lets you split products into ad groups and set different bids for different margin tiers.

**This is how you stop cheap, low-margin products from eating the budget** that high-margin products should get.

### 4. Your catalogue has real problems

Bad titles, missing attributes, wrong prices. PMax will still spend the money and you will struggle to see where it went.

**Standard Shopping shows you the damage clearly**, product by product, so you can fix the feed.

### 5. You want to protect specific products from PMax

Using both together, deliberately. See below.

---

## Building a Standard Shopping Campaign

### Step 1: The feed comes first

⚠️ **Do not start until your Merchant Center feed is right.** Lesson 6.1 is the prerequisite, and skipping it guarantees poor results.

The feed decides everything: which searches you appear for, what the ad looks like, and whether Google approves your products at all.

### Step 2: Create the campaign

Campaigns → New → **Sales** → **Shopping** → select your Merchant Center account → choose **Standard Shopping**.

### Step 3: Settings

| Setting | What to choose | Why |
|---|---|---|
| **Merchant Center account** | The right one | Obvious, but easy to pick wrong with multiple accounts |
| **Country of sale** | Where you actually ship | Must match your feed |
| **Bidding** | Maximise clicks to start, then move to tROAS | Lesson 5.1 |
| **Budget** | Start small | You can raise it once you see the data |
| **Campaign priority** | Low / Medium / High | See below |
| **Locations** | **Presence**, not "presence or interest" | Lesson 4.4 |
| **Local inventory** | Only if you have physical shops | Lesson 9.5 |

### Step 4: Campaign priority

Standard Shopping has a setting PMax does not: **priority**.

When two of your own Shopping campaigns contain the same product, **the higher priority one bids**, regardless of bid amount.

**Why this is useful:** it lets you run the same product in two campaigns with different rules. A classic setup:

| Campaign | Priority | Contains | Purpose |
|---|---|---|---|
| Shopping — Generic | High | All products, low bid | Catches broad searches cheaply |
| Shopping — Branded | Low | All products, higher bid | Catches specific, high-intent searches |

Plus negative keywords steering which searches reach which campaign.

⚠️ **This is an advanced structure.** Do not build it on day one. Start with one campaign, learn your data, then decide if you need it.

### Step 5: Split products into ad groups

The default puts every product in one group. **Do not leave it that way.**

Use **product groups** to split by your custom labels from Lesson 6.1:

```
Ad group: High margin
   └── custom_label_0 = margin_high     → higher bid

Ad group: Mid margin
   └── custom_label_0 = margin_mid      → normal bid

Ad group: Low margin
   └── custom_label_0 = margin_low      → low bid

EXCLUDED: custom_label_0 = margin_loss  → not advertised at all
```

**This is the whole point of Standard Shopping.** You are deciding, product by product, how much each is worth.

### Step 6: Negative keywords

Shopping campaigns accept negative keywords even though they have no positive keywords.

**Apply your standard lists** from Lesson 3.4 — `free`, `repair`, `second hand`, `jobs`, `how to make`.

Then check the search terms report weekly and add more.

---

## Reading the Report That PMax Will Not Give You

This is the main reason to run Standard Shopping.

**Campaigns → Products** (or the product-level view in your Shopping campaign).

You can see, for every single product:

| Column | What it tells you |
|---|---|
| Impressions | How often it appeared |
| Clicks | How often it was clicked |
| Cost | What it spent |
| Conversions | How many sold |
| Conv. value | Revenue it produced |

### The analysis to run every month

Sort by cost, highest first. Then put each product in one of four groups:

| Group | What it looks like | What to do |
|---|---|---|
| **Winners** | High spend, good return | Raise bid, check stock |
| **Sleepers** | Low spend, good return | Raise bid — you are under-buying |
| **Leakers** | High spend, poor return | Lower bid or exclude |
| **Quiet** | No spend at all | Check feed — often a title or approval problem |

⚠️ **That last group catches people out.** Products with zero impressions usually have a problem in the feed: a rejected item, a missing attribute, or a title nobody searches for. **Zero spend is not neutral — it is a hidden failure.**

---

## Running Standard Shopping and PMax Together

Since PMax usually outranks Standard Shopping for the same product, you cannot simply run both on everything and expect a fair split.

### Option A: Split by product (recommended)

Give each campaign different products.

```
PMax:               proven best sellers, high margin
Standard Shopping:  everything else, and anything new
```

**Why this works:** new and untested products go into Standard Shopping where you can see exactly how they perform. Once a product proves itself, move it to PMax for volume.

### Option B: Standard as a safety net

Run PMax on everything, and Standard Shopping on the same products at low priority. It catches whatever PMax does not take.

⚠️ **Measure this honestly.** It is easy to believe Standard is adding value when it is really just taking credit for sales PMax would have got anyway. Lesson 6.3's incrementality thinking applies.

### Option C: Standard only

Perfectly reasonable for smaller shops, thin creative, or where control matters more than volume.

**There is no rule that you must use PMax.**

---

## 📖 Real-World Example: What Sana Found When She Looked

Sana had been running PMax for four months. Her reported ROAS was 5.1x. It looked good.

But she could not answer a simple question from her accountant: **"Which products are actually making us money?"**

PMax would not tell her.

### What she did

She built a Standard Shopping campaign containing **only** the products PMax was not prioritising, plus every new product, and ran it for eight weeks.

Then she looked at the product report.

| Product | Spend | Sales | Revenue | Margin | **Profit** |
|---|---|---|---|---|---|
| Gravity filter | PKR 61,000 | 47 | PKR 235,000 | 52% | **+PKR 61,200** |
| Cartridge 3-pack | PKR 28,000 | 91 | PKR 109,200 | 68% | **+PKR 46,256** |
| RO filter | PKR 74,000 | 22 | PKR 275,000 | 31% | **+PKR 11,250** |
| Steel bottle | PKR 19,000 | 84 | PKR 100,800 | 18% | **−PKR 856** |
| Tap adapter | PKR 14,500 | 61 | PKR 36,600 | 22% | **−PKR 6,448** |
| Filter housing | PKR 11,000 | 0 | PKR 0 | — | **−PKR 11,000** |

### Three findings

**1. Two products were losing money on every sale.**

The steel bottle and tap adapter sold well — 145 units between them — but at 18% and 22% margin, the ad cost ate everything. They looked like successes in any report that counted sales rather than profit.

**2. The cartridge 3-pack was under-funded.**

At 68% margin it was her most profitable product per rupee spent, and it was getting less than half the budget of the RO filter, which earned a fifth as much profit.

**3. One product had spent PKR 11,000 and sold nothing.**

She checked the feed. The filter housing had been **disapproved in Merchant Center for six weeks** over a missing GTIN, but was still somehow accruing spend through a related variant. She would never have found this in PMax.

### What she changed

- Excluded the steel bottle and tap adapter from Shopping entirely
- Moved the cartridge 3-pack into its own ad group at a much higher bid
- Fixed the filter housing feed problem
- Rebuilt her custom labels so margin tiers drove the bids (Lesson 6.1)
- Moved the proven winners into PMax, kept everything new in Standard

### Results at 12 weeks

| | Before | After |
|---|---|---|
| Shopping spend | PKR 207,500 | PKR 211,000 |
| Units sold | 305 | 248 |
| Revenue | PKR 756,600 | PKR 712,000 |
| **Gross profit** | **PKR 100,402** | **PKR 288,300** |

**Fewer units. Less revenue. Nearly three times the profit.**

### The point

⚠️ **PMax was not doing anything wrong.** It was doing exactly what it was told: maximise conversion value. It found sales.

**It just could not tell her which sales were worth having**, and it would not show her the data to work it out herself.

**Standard Shopping was the diagnostic tool.** She used it to understand her catalogue, then fed that understanding back into PMax through profit-tier labels.

**That is the right relationship between the two:** Standard Shopping to see, PMax to scale.

---

## 📊 Mastery Score

**Level: Intermediate**

Standard Shopping is easier to run than PMax and teaches you far more. Many people skip it entirely and never learn their own catalogue.

---

## 📌 Key Takeaways

- Standard Shopping has no keywords. Your product feed decides which searches you appear for.
- It shows you product-level and search-term data that PMax hides. That visibility is the main reason to run it.
- PMax usually outranks Standard Shopping for the same product, so split them by product rather than overlapping.
- Split products into ad groups by margin tier. Cheap products should not eat the budget high-margin ones deserve.
- Products with zero spend are a hidden failure, usually a feed or approval problem. Check them.

---

## ☑️ Self-Assessment

1. Can you name your five most profitable products by margin, not by revenue?
2. Are any products in your Shopping campaign losing money on every sale?
3. Do any products have zero impressions? Do you know why?
4. Are PMax and Standard Shopping running on the same products?
5. Is your feed right? If not, no campaign type will save you.

---

## 🧠 Quiz

**1. How do you choose keywords for a Standard Shopping campaign?**
a) In the keyword tab
b) You do not — Google uses your product feed
c) Through negative keywords only
d) In the ad group settings

**2. What is the main advantage of Standard Shopping over PMax?**
a) It is cheaper
b) You can see product-level and search-term data
c) It reaches more places
d) It needs no feed

**3. What happens if the same product is in both PMax and Standard Shopping?**
a) They split the traffic evenly
b) PMax usually takes it, starving the Standard campaign
c) Standard takes priority
d) Both are paused

**4. A product has spent PKR 11,000 with zero sales and zero conversions. What should you check first?**
a) The bid
b) The feed — it may be disapproved or missing attributes
c) The budget
d) The landing page

**5. Sana's units and revenue both fell, but profit nearly tripled. Why?**
a) She raised prices
b) She stopped advertising products that lost money on every sale
c) PMax improved
d) Her costs fell

---

## 💪 Practical Exercise (40 minutes)

Find out which products actually earn money.

1. Open the product-level report for any Shopping campaign. Sort by cost, highest first.
2. For the top 15 products, write down spend, conversions and conversion value.
3. Add a column for your real margin percentage on each (from Lesson 0.3).
4. Calculate profit: (conversion value × margin) − cost.
5. Sort by that profit column. Mark each as Winner, Sleeper, Leaker or Quiet.
6. Write down the one product you should stop advertising today, and the one you should fund more.

---

## 🎯 Expert Challenge

Build a catalogue management system that keeps working.

- Build the full product profitability table for every product with spend, using real margin, not an average. Update it monthly.
- Design the four-group classification as an automatic rule rather than a manual judgement: define the thresholds that make something a Leaker, and what happens when it crosses them.
- Build the "zero spend" audit. Every product with no impressions gets checked for: disapproval, missing attributes, a title nobody searches, or being out of stock. **This group contains more hidden money than the Leakers do**, because nobody ever looks at it.
- Design the Standard-to-PMax promotion path: how many conversions and what profit level a product needs before it graduates into PMax, and what happens if its performance drops afterwards.
- Then connect it to Lesson 12.3: make the margin tiers in your feed the same ones that drive your conversion values, so the bidding and the campaign structure are telling Google the same story.

**A catalogue that reclassifies itself monthly is worth more than any bidding tweak.** Most shops never learn which of their own products make money, and no amount of advertising skill fixes that.

---

## ✅ Quiz Answers

1 — **b**. The feed does the matching. There are no keywords.
2 — **b**. Product-level and search-term visibility.
3 — **b**. PMax usually wins, so Standard gets starved.
4 — **b**. The feed. Zero sales with spend usually means a feed problem.
5 — **b**. She stopped selling at a loss and funded the profitable products.

---

**Next lesson:** 7.1 — Enhanced Conversions: Find the Sales You Are Missing

---

## 🏁 Module 6 Complete — Phase 3 Complete

You can run every Google ad type, and you know which one fits each job.

**Next:** Phase 4, Module 7 — Advanced Tracking That Sees Everything. This is where you get ahead of most advertisers.
