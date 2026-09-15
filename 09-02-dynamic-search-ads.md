# Lesson 9.2 — Advertise Thousands of Products Without Keywords

*Phase 5 · Running Big Accounts and Clients — Module 9 · Managing Large, Complex Accounts*

---

## Quick Recap From Module 3

You built keywords and intent clusters manually. That works for 50 keywords. It does not work for a site with 40,000 product pages. This lesson solves that.

---

## 🎯 What You Will Learn

- What Dynamic Search Ads are, and how they differ from PMax
- The targeting options, and which to use
- Feed-driven DSA — the version most people do not know exists
- How to control DSA so it does not waste money
- When DSA still beats PMax in 2026

---

## What Dynamic Search Ads Are

With a normal Search campaign, you supply keywords and Google matches searches to them.

With **Dynamic Search Ads (DSA)**, you supply **no keywords**. Google reads your website, understands what each page is about, and matches searches to pages automatically. It then generates the headline dynamically to match the search.

**You provide:**
- Which pages Google may use
- The description lines
- The bid strategy

**Google provides:**
- The matching
- The headline
- The landing page choice

**Think of a library with no catalogue.** Instead of you writing an index card for every book, a librarian reads all the books and answers visitors' questions by fetching the right one. You do not need to have anticipated every question.

---

## DSA vs PMax: Why DSA Still Exists

A reasonable question in 2026: why use DSA when PMax exists?

| | DSA | PMax |
|---|---|---|
| Surfaces | **Search only** | All Google surfaces |
| Visibility | **Full search terms report** | Limited insights only |
| Negative keywords | **Full control** | Limited |
| Control over pages | **Precise** | Less precise |
| Creative needed | Descriptions only | Full creative set |
| Predictability | **High** | Lower |

**The case for DSA:** you get automatic coverage of a large catalogue **while keeping Search-campaign levels of control and visibility.**

That combination is exactly what many large advertisers want, and PMax does not offer it.

### When to use DSA

✅ Large catalogue or many service pages
✅ Frequently changing inventory
✅ You want to find keywords you have not thought of
✅ You want Search-only reach with full reporting
✅ Filling gaps around your keyword campaigns

### When not to

❌ Small site with under 20 pages — just write the keywords
❌ Poorly written website content — DSA reads your pages, so bad content produces bad matching
❌ Pages you cannot control (user-generated content)
❌ Highly regulated industries where uncontrolled headlines are a compliance risk

⚠️ **That last point matters.** DSA generates headlines automatically. In healthcare, finance or legal advertising, an auto-generated headline could create a policy or regulatory problem (Lesson 1.5). Use pinned assets or avoid DSA in those categories.

---

## The Targeting Options

You choose which pages DSA may use. There are five methods.

### 1. Categories of your website

Google groups your site into categories it finds. You select which to target.

**Good for:** a quick start. Google's categorisation is often surprisingly sensible.
**Weakness:** you did not choose the categories.

### 2. Specific web pages by URL rule

Target pages whose URL contains, starts with, or equals something.

```
URL contains "/water-filters/"
URL contains "/products/" AND does not contain "/clearance/"
```

**Good for:** precise control using your site structure.
**This is the most commonly used method.**

### 3. Page title contains

Target pages whose title contains specific words.

```
Page title contains "gravity filter"
```

**Good for:** when your URL structure is unhelpful but titles are descriptive.

### 4. Page content contains

Target based on words in the page body.

**Use carefully.** A word appearing anywhere on the page can pull in pages you did not intend.

### 5. All web pages

Everything on the domain.

⚠️ **Almost never do this.** It will include your blog, careers page, terms and conditions, support articles and checkout pages. You will pay for clicks on your privacy policy.

**If you must start broad, exclude aggressively first** (below).

---

## Feed-Driven DSA: The Version Most People Miss

This is the powerful, underused option.

Instead of Google crawling your site, **you supply a page feed** — a file listing exactly which URLs are eligible, each with custom labels you control.

### The page feed format

A simple two-column file:

| Page URL | Custom label |
|---|---|
| `https://site.pk/products/gravity-filter` | `high_margin; in_stock; filters` |
| `https://site.pk/products/ro-filter` | `mid_margin; in_stock; filters` |
| `https://site.pk/products/steel-bottle` | `low_margin; in_stock; accessories` |

### Why this is so much better

**1. You control exactly which pages are eligible.** No accidental blog or careers page.

**2. You can target by custom label** — which means **profit tiers** (Lesson 6.1).

```
Ad group 1: target label "high_margin" → aggressive tROAS
Ad group 2: target label "mid_margin"  → moderate tROAS
Low margin pages: not in the feed at all
```

**3. It updates automatically.** Out of stock? Remove it from the feed and DSA stops advertising it that day.

**4. Google is not guessing.** Crawling can be slow to notice new pages and slow to forget removed ones. A feed is immediate.

### How to build it

**Step 1.** Create a spreadsheet with `Page URL` and `Custom label` columns.

**Step 2.** Generate it from your product database, so it stays current. A daily export is ideal.

**Step 3.** Upload in Google Ads: Tools → **Business data** → Page feeds.

**Step 4.** In your DSA campaign settings, select the page feed as the source, and choose **"Use URLs from my page feed only"**.

**Step 5.** In each ad group, target by custom label.

⚠️ **Step 4 matters.** If you leave the setting on "Use Google's index of my website", the feed becomes an addition rather than a restriction, and you lose the control you built it for.

---

## Controlling DSA

DSA without controls behaves like broad match without negatives. Here are the essential controls.

### Control 1: Negative dynamic ad targets

The DSA equivalent of negative keywords, applied to *pages*.

**Always exclude:**
```
URL contains "/blog/"
URL contains "/careers/"
URL contains "/about/"
URL contains "/terms/"
URL contains "/privacy/"
URL contains "/checkout/"
URL contains "/cart/"
URL contains "/account/"
URL contains "/search?"
URL contains "/tag/"
URL contains "?page="
```

**Also exclude:** out-of-stock pages, discontinued products, and anything with thin content.

### Control 2: Negative keywords

DSA campaigns support normal negative keywords. **Apply your shared lists** from Lesson 3.4 — the universal junk list especially.

DSA has no keywords of its own, so negatives are your primary steering mechanism.

### Control 3: Exclude your existing keywords

If you already have well-optimised keyword campaigns, you do not want DSA competing with them.

**Add your top performing keywords as negatives in the DSA campaign.** DSA then covers only the gaps, which is exactly what you want it for.

⚠️ **Do this at launch, not later.** Otherwise DSA will absorb your best traffic and appear to perform brilliantly — the same illusion as PMax brand absorption (Lesson 6.3).

### Control 4: Weekly search term mining

DSA generates a full search terms report. **Use it** (Lesson 3.4).

The first month of a DSA campaign typically needs twice-weekly review. This is where DSA earns its reputation — well-mined DSA is excellent, unmined DSA is expensive.

### Control 5: A separate campaign, always

Never put DSA ad groups inside your keyword campaigns. Separate campaign, separate budget, separate reporting.

---

## Writing DSA Ads

You supply the **descriptions**. Google supplies the headline and the landing page.

### What this means for your copy

Your descriptions must work with **any** headline Google generates, for **any** page.

❌ **Too specific:** "Our gravity filter removes 99.9% of bacteria." Wrong if Google shows an RO filter page.

✅ **Works everywhere:** "Free delivery across Karachi. 30-day money back guarantee. Cash on delivery available."

**Write descriptions about the business, not about a specific product.**

### You can also add your own headlines

Modern DSA supports adding your own headlines alongside the dynamic one. Use this where you need a consistent brand message or a needed disclaimer.

⚠️ **In regulated industries, pin a compliance headline** so it always appears (Lesson 4.1).

---

## Using DSA for Keyword Discovery

This is a really valuable secondary use, even for smaller advertisers.

**The method:**

1. Run a small DSA campaign with a modest budget
2. Let it run for 6–8 weeks
3. Export the search terms report
4. Find high-performing terms you do not have keywords for
5. **Promote them into your keyword campaigns** as exact match
6. Add them as negatives in the DSA campaign so it moves on to finding new ones

**This turns DSA into a permanent keyword research engine.** It finds the long-tail phrases no tool suggests, using real search data from your own site.

**Budget for this use:** 5–10% of your Search budget is usually enough.

---

## 📖 Real-World Example: 41,000 Products, 200 Keywords

Bilal's largest client was a UK industrial supplies distributor. Their catalogue had **41,000 products** across 340 categories.

Their existing account had **200 keywords**, covering their top categories. Everything else — roughly 38,000 products — had no advertising at all.

Writing keywords for 41,000 products was not realistic. Neither was writing ads for them.

### Attempt 1: Basic DSA (failed)

The in-house team had tried DSA a year earlier. They set it to "All web pages" with a £200 daily budget.

**What happened in three weeks:**
- 31% of spend went to blog articles
- 14% went to their careers page (they were hiring, and "engineering jobs" searches were plentiful)
- 9% went to a technical glossary they had published for SEO
- Conversion rate: 0.3%

They turned it off and concluded DSA did not work.

### Attempt 2: Feed-driven DSA

**Week 1: Build the page feed.**

Bilal worked with their developer to generate a daily export from the product database:

| Page URL | Custom label |
|---|---|
| /products/bearing-6204 | `margin_high; stock_in; cat_bearings` |
| /products/pump-seal-x2 | `margin_mid; stock_in; cat_seals` |
| /products/valve-brass-15mm | `margin_low; stock_in; cat_valves` |

**Only product pages with stock and a known margin entered the feed.** Blog, careers, glossary and out-of-stock pages were never eligible.

The feed regenerated every morning at 04:00.

**Week 1: Campaign structure.**

Three DSA campaigns, matching the profit tier structure from Lesson 6.1:

| Campaign | Targets label | Budget/day | tROAS |
|---|---|---|---|
| `DSA \| UK \| High Margin \| Feed \| Sales` | `margin_high` | £180 | 3.2x |
| `DSA \| UK \| Mid Margin \| Feed \| Sales` | `margin_mid` | £120 | 4.1x |
| `DSA \| UK \| Discovery \| Feed \| Sales` | all in-stock, excluding the top 200 keywords | £60 | 4.5x |

That third campaign was the keyword discovery engine.

**Week 1: Controls.**

- Universal negative list applied (Lesson 3.4)
- All 200 existing keywords added as negatives to all three DSA campaigns
- Page feed set to "Use URLs from my page feed only"
- Negative dynamic ad targets for any URL pattern that could slip through

**Week 2–4: Mining.**

Twice-weekly search term review. In the first month he added **640 negatives.**

### Results at 16 weeks

| Metric | Before (keywords only) | After (keywords + feed DSA) |
|---|---|---|
| Products advertised | ~2,800 | **38,400** |
| Monthly spend | £41,000 | £58,200 |
| Conversions | 984 | **1,912** |
| Cost per conversion | £41.67 | **£30.44** |
| Revenue | £312,000 | £689,000 |
| Blended ROAS | 7.6x | **11.8x** |

**Spend rose 42%. Conversions rose 94%. Cost per conversion fell 27%.**

### Why cost per conversion fell while scaling

This is surprising and worth understanding.

Normally, scaling raises cost per conversion because you exhaust the best traffic (Lesson 8.1).

Here, the opposite happened, because DSA was reaching **completely untapped long-tail demand**. Searches like "SKF 6204 2RS bearing 20mm bore" — extremely specific, very low competition, very high intent.

**These searches were cheaper and converted better than the head terms** the keyword campaigns were fighting over.

The client had been competing hard for 200 popular terms while 38,000 uncontested niches sat unused.

### The discovery engine

Over 16 weeks, the Discovery campaign surfaced **312 search terms** with three or more conversions each that had no keyword coverage.

Bilal promoted the top 89 into exact match keyword ad groups, then added them as DSA negatives so the discovery campaign moved on.

**The keyword account grew from 200 to 289 keywords, all of them proven converters** — found by data rather than by guessing.

### The client's reaction

*"We spent four years arguing about which 200 products to advertise. It turns out the answer was all of them, just carefully."*

---

## 📊 Mastery Score

**Level: Expert**

Feed-driven DSA is one of the least widely used techniques in Google Ads, and one of the highest-use for any business with a large catalogue.

---

## 📌 Key Takeaways

- DSA gives automatic catalogue coverage while keeping Search-level control and full search term visibility.
- Never use "All web pages". You will pay for clicks on your blog, careers page and privacy policy.
- Feed-driven DSA lets you control exactly which pages are eligible and target by profit tier.
- Add your existing keywords as DSA negatives so DSA covers gaps rather than absorbing proven traffic.
- DSA doubles as a permanent keyword discovery engine — mine the search terms and promote the winners.

---

## ☑️ Self-Assessment

1. How many pages or products does the site have? How many are currently advertised?
2. If you run DSA, is it using a page feed or Google's crawl?
3. Have you excluded blog, careers and policy pages?
4. Are your existing keywords added as DSA negatives?
5. When did you last mine the DSA search terms report?

---

## 🧠 Quiz

**1. What does DSA use instead of keywords?**
a) Audiences
b) Your website content or a page feed, matched to searches automatically
c) Product feeds only
d) Nothing — it shows to everyone

**2. Why is DSA still useful when PMax exists?**
a) It is cheaper
b) Search-only reach with full search term visibility and negative keyword control
c) It has better creative
d) PMax does not work

**3. What is the main advantage of a page feed over Google's crawl?**
a) It is faster to set up
b) You control exactly which pages are eligible and can target by custom label such as profit tier
c) It costs less
d) Google needs it

**4. Why add your existing keywords as DSA negatives?**
a) To reduce spend
b) So DSA covers gaps rather than absorbing traffic your keyword campaigns already win
c) Google needs it
d) To improve Quality Score

**5. Why did cost per conversion fall while scaling in the example?**
a) The tracking changed
b) DSA reached untapped long-tail searches that were cheaper and higher intent than the contested head terms
c) The client lowered prices
d) Seasonality

---

## 💪 Practical Exercise (40 minutes)

Plan a DSA setup.

1. Count the total pages or products on the site, and how many are currently covered by keywords.
2. List every URL pattern that must be excluded — blog, careers, policies, checkout, search results.
3. Design the page feed structure: which pages qualify, and what custom labels they need.
4. Design the campaign structure by profit tier or category.
5. Build the negative keyword list, including your existing top keywords.
6. Write three descriptions that would work with any product page.

---

## 🎯 Expert Challenge

Build a complete feed-driven DSA system for a large catalogue.

- Design the page feed generation: which database fields work out eligibility, how margin tiers are calculated, how stock status is handled, and the refresh schedule.
- Build the exclusion structure at every level: page feed rules, negative dynamic ad targets, and negative keywords.
- Design the discovery-to-promotion pipeline: how DSA search terms are reviewed, what threshold promotes a term to a keyword, and how it is then negated in DSA so the engine keeps discovering.
- Design the interaction with PMax: which products go to DSA, which to PMax, and how you prevent them competing. Then measure whether the split is actually working using the incrementality methods from Lesson 6.3.
- Build the monitoring layer: alerts for pages entering the feed without a margin label, out-of-stock products still receiving clicks, and spend concentrating on unexpected page patterns.
- Finally, calculate the untapped opportunity: how many products currently receive no advertising, their combined margin potential, and a realistic estimate of what full coverage would produce. That is the business case.

---

## ✅ Quiz Answers

1 — **b**. Your site content or a page feed, matched automatically.
2 — **b**. Search-only reach with full visibility and negative control.
3 — **b**. Precise page control plus custom label targeting.
4 — **b**. So DSA fills gaps instead of absorbing proven traffic.
5 — **b**. Untapped long-tail demand is cheaper and higher intent.

---

**Next lesson:** 9.3 — Target the Right Areas, Not Just a Circle
