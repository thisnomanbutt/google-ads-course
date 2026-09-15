# Lesson 6.1 — Build a Product Feed That Sells

*Phase 3 · Bidding and Other Ad Types — Module 6 · Shopping, PMax, YouTube and Display*

---

## Quick Recap From Module 5

You control bidding. Now we expand beyond Search — starting with the foundation of all product advertising: the feed.

---

## 🎯 What You Will Learn

- Why the feed matters more than bids in Shopping
- How to write product titles that act as your keywords
- The attributes that actually affect performance
- Custom labels: how to build profit tiers
- Feed rules and supplemental feeds, without a developer

---

## In Shopping, the Feed Is Everything

Search campaigns have keywords. **Shopping campaigns do not.**

You never tell Google which searches should show your product. Google reads your **product feed** and decides.

This changes where your effort goes:

| Search campaign | Shopping campaign |
|---|---|
| Keywords control matching | The product title controls matching |
| Ad copy is your message | The product image and price are your message |
| Optimise ads and bids | Optimise the feed |

**Think of a market stall versus a catalogue.** In Search, you shout to passers-by. In Shopping, you post a catalogue and customers find you by browsing. If your catalogue has bad photos, vague names and wrong prices, no amount of clever bidding will save it.

> **The rule: feed quality decides Shopping performance more than bids ever will.**

---

## The Product Title: Your Most Important Field

The title is what Google matches against searches. It is also what customers read first.

### The title formula

```
Brand + Product Type + Key Attribute + Size/Colour/Model
```

**Weak title:**
`Water Filter`

**Strong title:**
`AquaPure Gravity Water Filter — No Electricity, 20L, White`

### What to include, in priority order

1. **Brand** — people search by brand
2. **Product type** — what it actually is
3. **The attribute people search for** — this is where you win
4. **Size, capacity, colour, model number**

### Rules

- **Front-load the important words.** Titles are truncated on mobile, often around 70 characters. What matters must be in the first 70.
- **Maximum 150 characters.** Use 100–150 where you have useful information.
- **No promotional text.** "SALE!!!", "Free Shipping", "Best Price" — these are against Merchant Center policy in titles.
- **No ALL CAPS.**
- **Match the website.** The title should be recognisably the same product as the landing page.

### How to find the right attribute words

This is the highest-value 20 minutes in feed work.

1. Open your **search terms report** from Shopping campaigns
2. Find the attribute words that appear repeatedly in converting searches
3. Put those words in your titles

Sana found that "without electricity" appeared in converting searches. She added it to her titles. **Clicks on those products rose 41%** — with no bid change, because she was now matching searches she had been invisible for.

---

## The Other Fields That Matter

### Product description
Less important for matching than the title, but still read. 500–1,000 characters. Cover materials, dimensions, what is included, and who it is for.

### Image link
**Critical.** The image is the ad.

- White or clean background for the main image
- Product fills 75–90% of the frame
- Minimum 800×800 px, larger is better
- **No text, watermarks or logos overlaid** — this is a policy violation and a common suspension cause
- Add extra images for other angles

### Price and availability
**Must match your website exactly**, including currency. This is the number one Merchant Center suspension cause (Lesson 1.5).

If your prices change often, your feed must update often. Daily at minimum; hourly for volatile pricing.

### GTIN, MPN, Brand
Product identifiers. Providing correct GTINs generally improves how well Google understands and matches your products. If a product really has no GTIN, set `identifier_exists` to `no`.

### Product type vs Google product category
- **Google product category** — Google's own taxonomy. Be specific. "Home & Garden > Kitchen & Dining > Water Filters" beats "Home & Garden".
- **Product type** — *your* categorisation. Use your site's structure. This is useful for organising campaigns.

### Sale price and sale price effective date
Use these for genuine sales. Google can then show a strikethrough price, which improves click rate.

---

## Custom Labels: The Profit Tier System

**This is the most important part of this lesson.**

Custom labels are five free fields (`custom_label_0` to `custom_label_4`) where you can put **anything you want**. Google does not read them for matching. You use them to **group products for bidding**.

This is how you apply Lesson 0.4 — POAS — at product level.

### The standard setup

| Label | Use for | Example values |
|---|---|---|
| `custom_label_0` | **Profit tier** | high_margin, mid_margin, low_margin, loss_maker |
| `custom_label_1` | **Price bracket** | under_2000, 2000_5000, 5000_15000, over_15000 |
| `custom_label_2` | **Performance** | bestseller, steady, slow, dead_stock |
| `custom_label_3` | **Seasonality** | summer, winter, ramadan, all_year |
| `custom_label_4` | **Stock level** | high_stock, low_stock, clearance |

### Building the profit tier label

**Step 1.** Export your product list with price and true cost (Lesson 0.4).

**Step 2.** Calculate the margin percentage for each: `(price − cost) ÷ price`.

**Step 3.** Assign tiers:

| Margin % | Label |
|---|---|
| Above 50% | `high_margin` |
| 30–50% | `mid_margin` |
| 15–30% | `low_margin` |
| Below 15% | `loss_maker` |

**Step 4.** Add the label to your feed.

**Step 5.** Now you can:
- Build a Shopping campaign for `high_margin` only, with an aggressive target
- Build a separate campaign for `mid_margin` with a tighter target
- **Exclude `loss_maker` entirely**

**This single change is often worth more than months of bid optimisation.**

Sana's steel water bottle at 15% margin could never be sold profitably through ads (Lesson 0.4). Labelling it `loss_maker` and excluding it removed a permanent drag on her account.

---

## Feed Rules: Fixing Things Without a Developer

Feed rules let you modify your feed **inside Merchant Center**, without changing your website. This is enormously useful.

**Where:** Merchant Center → Products → Feeds → select feed → Feed rules.

### What you can do

**1. Add a prefix or suffix to titles**
Take `Gravity Water Filter 20L` and make it `AquaPure Gravity Water Filter 20L — No Electricity`.

**2. Set a static value for a field**
Set `brand` to "AquaPure" for every product where it is missing.

**3. Extract from another field**
Pull the colour from the description into the `color` field.

**4. Find and replace**
Replace "H2O" with "Water" across all titles.

**5. Conditional rules**
If `product_type` contains "cartridge", set `custom_label_0` to `high_margin`.

### The practical value

If your e-commerce platform produces a poor feed, you can fix a large part of it in Merchant Center in an afternoon — instead of waiting three weeks for a developer.

### Supplemental feeds

A supplemental feed is a second file (often a Google Sheet) that adds data to your main feed, matched by product ID.

**The most common use: custom labels.**

Your main feed comes from your website and does not know your margins. Create a Google Sheet with two columns:

| id | custom_label_0 |
|---|---|
| SKU-1001 | high_margin |
| SKU-1002 | low_margin |
| SKU-1003 | loss_maker |

Upload as a supplemental feed. Google merges it with the main feed.

**You now have profit tiers without touching your website.** Update the sheet whenever costs change, and the feed updates automatically.

---

## The Feed Health Routine

### Weekly (15 minutes)

1. Merchant Center → **Diagnostics**. Check for errors and warnings.
2. Fix all **errors** — these stop products showing.
3. Review **warnings** — these reduce performance.
4. Check disapproved products and why.

### Monthly (60 minutes)

1. Check prices against the website. Spot-check 20 products.
2. Review titles for your top 20 products by clicks. Are the right attribute words present?
3. Update custom labels if costs or margins changed.
4. Check for out-of-stock products still being advertised.
5. Review the Shopping search terms report and add attribute words to titles.

### Quarterly

1. Full margin recalculation and re-tiering.
2. Image audit on top products.
3. Review the loss-maker list — has anything changed?

---

## 📖 Real-World Example: Sana's Feed Rebuild

Sana's Shopping campaign was spending PKR 180,000 a month at a 3.1x ROAS. Acceptable, not exciting.

She had never touched the feed. It came straight from her e-commerce platform.

### What she found

**Problem 1: Titles were product names only.**
`RO Filter`, `Gravity Filter`, `Cartridge Pack`

Nobody searches "gravity filter" alone. They search "water filter without electricity for home karachi".

**Problem 2: 31 products had no brand field.**

**Problem 3: All 84 products were in one campaign** with one ROAS target — from the 62%-margin cartridges to the 15%-margin bottles.

**Problem 4: 11 products were out of stock but still in the feed**, taking clicks that went nowhere.

**Problem 5: Images had her logo watermarked** in the corner — a policy violation waiting to be caught.

### What she did, in order

**Week 1: Titles.** She used the search terms report to find the attribute words that converted, then wrote a feed rule to restructure every title.

Before: `Gravity Filter`
After: `AquaPure Gravity Water Filter — No Electricity Needed, 20L, Home Use`

**Week 1: Brand and images.** Feed rule to set brand where missing. Re-exported all images without watermarks.

**Week 2: Profit tiers.** She built the supplemental feed sheet with real costs from her supplier invoices:

| Tier | Products | Margin | Action |
|---|---|---|---|
| `high_margin` | 22 | 52–68% | Own campaign, aggressive target |
| `mid_margin` | 39 | 31–49% | Own campaign, moderate target |
| `low_margin` | 14 | 18–29% | Own campaign, tight target |
| `loss_maker` | 9 | Under 15% | **Excluded entirely** |

**Week 3: Campaign restructure.** Three Shopping campaigns instead of one, split by profit tier, each with its own tROAS target.

**Ongoing: stock sync.** She set the feed to update every 6 hours instead of weekly.

### Results after 10 weeks

| Metric | Before | After |
|---|---|---|
| Shopping spend | PKR 180,000 | PKR 180,000 |
| Clicks | 4,120 | 5,890 |
| Conversion rate | 2.1% | 3.4% |
| Revenue | PKR 558,000 | PKR 1,001,000 |
| Reported ROAS | 3.1x | 5.6x |
| **Gross profit** | **PKR 110,000** | **PKR 341,000** |

**She changed no bids.** She changed the catalogue.

### The three effects, separated

This is worth understanding, because it shows where the gains came from:

1. **Better titles → 43% more clicks.** She was now matching searches she had been invisible for. Same budget, more traffic, because relevance improved.
2. **Excluding loss makers → higher conversion rate and margin.** Budget stopped flowing to products that could never pay for themselves.
3. **Profit tiers → correct bidding per product group.** High-margin products got the aggressive treatment they deserved; low-margin products got a target they could actually meet.

**The largest single contributor was excluding nine products.** Removing bad inventory from the feed beat every optimisation she made to the good inventory.

---

## 📊 Mastery Score

**Level: Advanced**

Feed work is unglamorous and enormously valuable. Most agencies never open Merchant Center beyond checking for errors.

---

## 📌 Key Takeaways

- In Shopping, the product title does the job keywords do in Search. Front-load the attribute words people search.
- Prices in the feed must match the website exactly. This is the top suspension cause.
- Custom labels are free fields for grouping products. Use `custom_label_0` for profit tiers.
- Supplemental feeds let you add margin data without touching your website.
- Excluding unprofitable products often beats every optimisation you could make to the profitable ones.

---

## ☑️ Self-Assessment

1. Do your product titles contain the attribute words people actually search?
2. Do your feed prices match your website right now? When did you last check?
3. Have you set custom labels for profit tiers?
4. Which of your products should never be advertised?
5. How often does your feed update? Is that often enough for your price changes?

---

## 🧠 Quiz

**1. What replaces keywords in a Shopping campaign?**
a) Ad copy
b) The product title and feed data
c) Audience signals
d) Bid adjustments

**2. What is the title formula?**
a) Price + Discount + Brand
b) Brand + Product Type + Key Attribute + Size/Colour
c) Just the product name
d) Category + SKU

**3. What are custom labels used for?**
a) Matching searches
b) Grouping products for bidding — for example, by profit tier
c) Displaying text in the ad
d) SEO

**4. Your feed price is PKR 4,800 and your website says PKR 5,000. What happens?**
a) Google uses the lower one
b) Risk of Merchant Center suspension
c) Nothing
d) The ad shows both

**5. What is a supplemental feed most commonly used for?**
a) Replacing the main feed
b) Adding data such as custom labels without changing the website
c) Uploading images
d) Setting bids

---

## 💪 Practical Exercise (45 minutes)

Audit and improve one product feed.

1. Open Merchant Center Diagnostics. List every error and warning.
2. Export your top 20 products by clicks. Review each title against the formula.
3. Open the Shopping search terms report. Find five attribute words that appear in converting searches.
4. Write improved titles for those 20 products, including the attribute words.
5. Build a margin spreadsheet for all products. Assign profit tiers.
6. Find your loss makers. Calculate what they cost you last quarter.

---

## 🎯 Expert Challenge

Build a complete feed management system.

- Design the title structure: a rule-based system that generates correct titles for every product category, set up as feed rules so it keeps itself.
- Build the profit tier system with a supplemental feed that pulls from a live cost sheet, and design the update process for when supplier costs change.
- Create the feed monitoring layer: automated checks for price mismatches, stock accuracy, and disapprovals, with alerts. A script-based approach is covered in Lesson 11.2.
- Design the campaign structure that consumes the tiers, including how new products enter the system and get tiered before they can spend money. Untiered new products defaulting into the aggressive campaign is a common and expensive failure.
- Then quantify the loss-maker opportunity across the full catalogue: total spend on products with negative contribution over the last year, and the profit recovered by excluding them. Present this as the business case for the whole project.

---

## ✅ Quiz Answers

1 — **b**. The feed, and especially the title, does the matching.
2 — **b**. Brand, type, attribute, then size or colour.
3 — **b**. Grouping for bidding. Google does not read them for matching.
4 — **b**. Price mismatch risks suspension.
5 — **b**. Adding data like custom labels without website changes.

---

**Next lesson:** 6.2 — Set Up Performance Max Properly
