# Lesson 6.2 — Set Up Performance Max Properly

*Phase 3 · Bidding and Other Ad Types — Module 6 · Shopping, PMax, YouTube and Display*

---

## Quick Recap From Lesson 6.1

Your feed is clean and tiered by profit. Now we build the campaign type that uses it across every Google surface.

---

## 🎯 What You Will Learn

- What PMax actually is, and what it is not
- How to structure asset groups properly
- Audience signals: what they do and do not do
- Listing groups — how to control which products get spent on
- Feed-only PMax, and when it beats a full build

---

## What PMax Actually Is

Performance Max is **one campaign that runs across every Google surface**: Search, Shopping, YouTube, Display, Gmail, Discover and Maps.

You give it:
- Creative assets (headlines, descriptions, images, videos, logos)
- A product feed (for e-commerce)
- Audience signals (hints, not targeting)
- A goal and a budget

Google decides everything else: which surface, which product, which creative, which person, what bid.

**Think of hiring a specialist versus hiring a general contractor.** A Search campaign is a specialist you direct exactly. PMax is a general contractor: you describe the outcome, provide materials, and they decide how to build it.

That works brilliantly when your materials are good and your outcome is well defined. It goes badly when they are not.

---

## The Prerequisites (Read Before Building)

From Lesson 1.2, PMax needs:

✅ **Accurate conversion tracking** — checked with Lesson 2.5
✅ **Conversion volume** — 30+ per month minimum, 50+ preferred
✅ **A clean product feed** — Lesson 6.1, if e-commerce
✅ **Real creative** — images and ideally video, not placeholders
✅ **A working Search campaign** to compare against
✅ **Brand exclusions ready** — Lesson 6.3

⚠️ **Never launch PMax as your first campaign.** You will not be able to tell what worked, and it will absorb your brand traffic and claim credit for sales you would have had anyway.

---

## The Structure

```
PMax Campaign
 ├── Budget and bid strategy (campaign level)
 ├── Asset Group 1
 │    ├── Headlines, descriptions, images, videos, logos
 │    ├── Audience signal
 │    └── Listing group (which products)
 ├── Asset Group 2
 └── Asset Group 3
```

**Asset groups replace ad groups.** Each one is a themed bundle of creative pointed at a set of products or a customer type.

---

## Designing Asset Groups

### The rule

**One asset group per theme where the creative and message really differ.**

Not one per product. Not one giant group for everything.

### Good structures

**E-commerce, by profit tier** (using Lesson 6.1 labels):
- Asset Group 1: High-margin products
- Asset Group 2: Mid-margin products
- (Low margin and loss makers excluded entirely)

**E-commerce, by category:**
- Asset Group 1: Home water filters
- Asset Group 2: Replacement cartridges
- Asset Group 3: Commercial units

**Lead generation, by service:**
- Asset Group 1: Dental implants
- Asset Group 2: Braces and aligners
- Asset Group 3: General dentistry

### How many?

**3–6 for most accounts.** Enough to differentiate; few enough that each gets data.

⚠️ **Too many asset groups starve.** If an asset group gets fewer than about 10 conversions a month, merge it.

---

## Filling an Asset Group Properly

Google will run PMax with minimal assets. It will run it badly.

### The complete asset checklist per asset group

| Asset | Minimum | Recommended |
|---|---|---|
| Headlines (30 char) | 3 | **15** |
| Long headlines (90 char) | 1 | **5** |
| Descriptions (90 char) | 2 | **5** |
| Images 1.91:1 (landscape) | 1 | **5** |
| Images 1:1 (square) | 1 | **5** |
| Images 4:5 (portrait) | 0 | **3** |
| Logos 1:1 | 1 | **2** |
| Logos 4:1 | 0 | **1** |
| Videos | 0 | **3 (different lengths)** |

### About video — the part people skip

⚠️ **If you do not provide a video, Google will auto-generate one from your images.** These auto-generated videos are usually poor: awkward transitions, odd music, no message.

Since PMax runs on YouTube, a bad video is being shown to real people as your brand.

**Minimum workable video plan:** three videos, 10 seconds, 15 seconds and 30 seconds. They do not need to be expensive. A phone-shot video of the real product, with text overlay, beats an auto-generated slideshow.

**How to check:** Assets → look for videos you did not upload. Remove them and add your own.

### Final URL expansion

PMax can send traffic to pages on your site other than the one you specified, if it thinks they match better.

**Turn this OFF** when:
- You have carefully built landing pages (Lesson 0.5)
- Your site has pages you do not want ads sent to (blog, careers, support)

**Leave it ON** when:
- You have a large, well-structured e-commerce site
- You want PMax to find long-tail product matches

**Default recommendation: OFF for lead generation, cautiously ON for large e-commerce.**

---

## Audience Signals: The Most Misunderstood Feature

### What people think they are
Targeting. "Only show my ads to these people."

### What they actually are
**Hints.** A starting point that tells Google *"people like this tend to convert for us"*.

**PMax will show ads to people outside your signal.** The signal speeds up learning; it does not restrict reach.

**Think of describing a lost dog to a search party.** "Brown, medium-sized, answers to Rocky." That helps them start looking in the right way. It does not stop them checking other dogs.

### What to put in an audience signal

In priority order:

**1. Your customer list (Customer Match).** Your actual buyers. The strongest possible signal.

**2. Website visitors who converted.** From GA4 or Google Ads remarketing lists.

**3. Website visitors who did not convert.** Still useful.

**4. Custom segments built from search behaviour.** People who searched terms like your best keywords.

**5. In-market audiences** relevant to your product.

**6. Detailed demographics** — only if really relevant.

### What NOT to do

❌ Do not put a huge generic audience in the signal. "All website visitors" plus "everyone in Pakistan" tells Google nothing.
❌ Do not expect it to restrict targeting. It will not.
❌ Do not skip it. Without a signal, learning takes much longer.

---

## Listing Groups: Controlling Products

For e-commerce PMax, the **listing group** decides which products each asset group can advertise.

This is where your custom labels from Lesson 6.1 earn their value.

### How to build profit-tier control

**Asset Group 1: High Margin**
- Listing group → subdivide by `custom_label_0` → include only `high_margin`

**Asset Group 2: Mid Margin**
- Listing group → subdivide by `custom_label_0` → include only `mid_margin`

**Everything else:** excluded.

### Why this matters enormously

Without listing group control, PMax spends across your whole catalogue. It will find the products that convert most *easily* — which are often the cheapest, lowest-margin items.

Your ROAS looks acceptable. Your POAS is terrible (Lesson 0.4).

**With listing groups, you decide what PMax is allowed to sell.**

⚠️ **Watch for new products.** When a new product enters your feed without a custom label, it may fall into the wrong asset group or into "everything else". Build a rule: unlabelled products default to `low_margin` until reviewed.

---

## Feed-Only PMax

A **feed-only PMax** campaign has a product feed but **no asset group creative** — no images, no headlines, no video.

Google then generates Shopping-style ads from the feed only, mostly on Shopping surfaces.

### Why anyone would do this

- It behaves much more like a traditional Shopping campaign
- It is predictable and easy to read
- It does not spend on YouTube or Display
- Useful when you have no creative resources

### The honest check

**Advantages:** control, predictability, no bad auto-generated video.

**Disadvantages:** you lose most of PMax's reach advantage. If you want Shopping behaviour, a Standard Shopping campaign is often clearer and easier to manage.

**When feed-only really makes sense:**
- You are transitioning from Standard Shopping and want a controlled first step
- You have no creative assets and no capacity to make them
- You specifically want product ads without brand exposure on video

**Otherwise:** build the creative properly. A well-fed PMax outperforms a starved one a lot.

---

## Bid Strategy for PMax

PMax supports:
- Maximise Conversions (with optional tCPA)
- Maximise Conversion Value (with optional tROAS)

**Follow Module 5 exactly.** Start without a target. Learn. Then add a target 10–15% below your actual.

⚠️ **New customer acquisition goal:** PMax offers an option to bid higher for new customers, or to bid *only* for new customers.

- **"Bid higher for new customers"** — sensible for most businesses, especially with good LTV data.
- **"New customers only"** — a specialist setting. It severely restricts reach. Use only when you really have a saturated existing customer base.

This needs your customer list to be uploaded so Google knows who is existing.

---

## 📖 Real-World Example: Two PMax Builds

Sana ran PMax twice. Both are instructive.

### Build 1: The lazy build (month 8)

She created a PMax campaign in 20 minutes:
- One asset group, "All Products"
- 5 headlines, 2 descriptions
- 3 images pulled from her website
- No video (Google generated one)
- Audience signal: "All website visitors"
- Listing group: all products
- Budget: PKR 80,000/month
- No brand exclusions

**Results after 6 weeks:**

| Metric | Value |
|---|---|
| Spend | PKR 116,000 |
| Revenue | PKR 522,000 |
| Reported ROAS | 4.5x ✅ |
| **Gross profit (POAS analysis)** | **PKR 21,000** |

The reported ROAS looked excellent. Then she analysed it properly.

**What she found:**
- **38% of PMax "conversions" were brand searches** — people searching "sana water filters" who would have found her anyway
- **The top-selling product was the steel bottle** at 15% margin, because it was cheapest and easiest to sell
- The auto-generated video was a slideshow of her product images with generic music, running on YouTube as her brand

**Actual incremental profit: close to zero.** She was paying to buy her own customers, and selling her worst product.

### Build 2: The proper build (month 11)

She rebuilt it over two days.

**Prerequisites first:**
- Feed cleaned and profit-tiered (Lesson 6.1)
- Brand exclusion list built (Lesson 6.3)
- Three real videos filmed on a phone: 10s product demo, 15s customer testimonial, 30s "how it works"

**Structure: two asset groups.**

**Asset Group 1: High Margin Filters**
- Listing group: `custom_label_0 = high_margin` only
- 15 headlines, 5 long headlines, 5 descriptions
- 13 images across three aspect ratios, all real product and customer photos
- 3 videos
- Audience signal: Customer Match list + past purchasers + custom segment of people searching her top keywords

**Asset Group 2: Cartridges and Refills**
- Listing group: `custom_label_0 = high_margin` AND `product_type` contains "cartridge"
- Separate creative focused on repeat purchase
- Audience signal: existing customers only

**Excluded:** all `low_margin` and `loss_maker` products.

**Brand exclusions:** applied.
**Bid strategy:** Maximise Conversion Value, no target for 21 days, then tROAS 3.4x.
**Final URL expansion:** off.

**Results after 10 weeks:**

| Metric | Build 1 | Build 2 |
|---|---|---|
| Monthly spend | PKR 80,000 | PKR 80,000 |
| Revenue | PKR 360,000 | PKR 424,000 |
| Reported ROAS | 4.5x | **5.3x** |
| Brand share of conversions | 38% | **4%** |
| Average order value | PKR 3,140 | PKR 6,410 |
| **Gross profit** | **PKR 14,500** | **PKR 141,000** |

**Same budget. Reported ROAS improved modestly. Actual profit went up nearly ten times.**

### What drove the difference

1. **Brand exclusions** removed the biggest illusion. 38% of "results" were not incremental.
2. **Listing groups** stopped PMax selling the 15%-margin bottle and pushed it toward 52%+ margin filters. Average order value doubled.
3. **Real creative** improved performance across every surface, and stopped a poor auto-video representing her brand on YouTube.
4. **A specific audience signal** cut the learning period roughly in half.

**Her note:** *"PMax was not the problem. Giving it nothing to work with was the problem."*

---

## 📊 Mastery Score

**Level: Advanced**

PMax rewards preparation and punishes laziness. The build quality decides the outcome far more than any later optimisation.

---

## 📌 Key Takeaways

- PMax runs across every Google surface. You supply materials and a goal; it decides the rest.
- Never launch it first. It needs conversion data, a clean feed, real creative and brand exclusions.
- Fill asset groups completely, especially video. Without your video, Google generates a poor one.
- Audience signals are hints that speed up learning, not targeting that restricts reach.
- Listing groups with profit-tier labels decide which products PMax is allowed to sell. This is your main profit control.

---

## ☑️ Self-Assessment

1. Does your PMax campaign have real videos, or Google-generated ones?
2. How many assets does each asset group have? Compare to the checklist.
3. Are your listing groups controlling which products can be advertised?
4. What is in your audience signal? Is it specific or generic?
5. Do you know what share of your PMax conversions are brand searches?

---

## 🧠 Quiz

**1. What is an audience signal in PMax?**
a) Strict targeting that limits who sees ads
b) A hint that helps Google learn faster, without restricting reach
c) A bid adjustment
d) A conversion action

**2. What happens if you do not upload a video to PMax?**
a) Nothing, video is optional
b) Google auto-generates one, usually a poor slideshow
c) The campaign will not run
d) YouTube is excluded

**3. What do listing groups control?**
a) Which audiences see ads
b) Which products each asset group can advertise
c) The budget
d) The bid strategy

**4. Why did the lazy PMax build show 4.5x ROAS but almost no profit?**
a) Google reported wrongly
b) It absorbed brand traffic and sold low-margin products
c) The budget was too small
d) The tracking was broken

**5. How many asset groups should a typical account have?**
a) 1
b) 3–6
c) 20
d) One per product

---

## 💪 Practical Exercise (45 minutes)

Audit one PMax campaign, or plan a build.

1. Count the assets in each asset group. Compare to the checklist and note every gap.
2. Check for auto-generated videos. List any you did not upload.
3. Open the listing group. What products can this campaign sell? Are loss makers excluded?
4. Review the audience signal. Is it specific, or a generic catch-all?
5. Check whether brand exclusions are applied.
6. Write your rebuild plan in priority order.

---

## 🎯 Expert Challenge

Design a PMax structure for a large catalogue with mixed margins and multiple customer types.

- Build the asset group map: how many, split by what dimension, and the justification. Include the expected conversion volume per group and flag any that would starve.
- Design the listing group logic including the new-product rule: how products enter, get labelled, and are prevented from spending before they are tiered.
- Build the creative production plan: which assets exist, which must be made, the cost, and the priority order. Include the video plan specifically.
- Design the audience signal for each asset group, with the reasoning for why that signal matches that product set.
- Build the measurement plan that separates PMax's incremental contribution from what would have happened anyway — including brand share, new customer share, and a comparison against your Search baseline.
- Finally, write the PMax review process: what you check weekly, what monthly, and the specific evidence that would make you pause or rebuild it.

---

## ✅ Quiz Answers

1 — **b**. A hint to speed learning, not a restriction.
2 — **b**. Google generates one, usually poorly, and runs it on YouTube.
3 — **b**. Which products each asset group can advertise.
4 — **b**. Brand absorption plus low-margin product mix.
5 — **b**. Three to six for most accounts.

---

**Next lesson:** 6.3 — Stop PMax Taking Credit for Free Sales
