# Lesson 6.6 — Remarketing: Cheap Clicks, Expensive Mistakes

*Phase 3 · Bidding and Other Ad Types — Module 6 · Shopping, PMax, YouTube and Display*

---

## Quick Recap From Lesson 6.5

Video builds memory. Display keeps you in view. It is the cheapest channel in Google Ads and the easiest one to waste money on.

---

## 🎯 What You Will Learn

- Why cold Display targeting fails for most advertisers
- How to build remarketing lists that actually work
- Dynamic remarketing, and why it outperforms static
- Frequency capping — the setting that stops you annoying customers
- The placement exclusion list every account needs

---

## The Two Faces of Display

The Display Network reaches millions of websites and apps. It has two completely different uses.

### 1. Remarketing — showing ads to people who already visited you

✅ **This works.** It is often the cheapest cost per conversion in the whole account.

### 2. Prospecting — showing ads to strangers based on interests

⚠️ **This usually fails** for small and medium advertisers. Cheap clicks, terrible conversion rates, and a meaningful share of accidental clicks in mobile apps.

**Think of two ways to hand out leaflets.** Remarketing is handing a leaflet to someone who just walked out of your shop looking interested. Prospecting is standing on a motorway bridge dropping leaflets onto traffic. Both are cheap per leaflet. Only one produces customers.

**The rule for anyone below expert level: use Display for remarketing only.**

---

## Why Cold Display Fails

Three reasons, and they compound.

**1. No intent.** The person was reading a news article. They were not thinking about water filters, dentists or project software.

**2. Poor placement quality.** A large share of Display inventory is low-quality: content farms, auto-refreshing pages, and mobile games where a mis-tap counts as a click.

**3. Accidental clicks.** On mobile games and apps, the ad often sits next to a button. People tap it by mistake, bounce immediately, and you pay.

You will see cost per click of PKR 3–8 and think you found a bargain. Then you check the conversion rate and find it is 0.05%.

**A cheap click that never converts is infinitely expensive.**

---

## Building Remarketing Lists

A remarketing list is a group of people who took a specific action on your site.

### Where to build them

- **Google Ads** → Tools → Audience manager → Segments
- **GA4** → Admin → Audiences (then shared with Google Ads via the link from Lesson 2.2)

**GA4 is usually better** because it can use richer behavioural conditions.

### The list ladder: warmest to coldest

Build these, in this order. Each gets different treatment.

| List | Definition | Membership duration | Value |
|---|---|---|---|
| **Cart abandoners** | Added to cart, did not purchase | 7–14 days | 🥇 Highest |
| **Checkout abandoners** | Started checkout, did not finish | 3–7 days | 🥇 Highest |
| **Product viewers** | Viewed a product page, did not purchase | 30 days | 🥈 High |
| **Engaged visitors** | 2+ pages or 60+ seconds | 30–60 days | 🥉 Medium |
| **All visitors** | Anyone | 30 days | Low |
| **Past purchasers** | Bought before | 180–540 days | Depends — see below |
| **Bounced visitors** | Left in under 10 seconds | Use as an **exclusion** | Negative |

### Membership duration: the setting people get wrong

Membership duration is how long someone stays on the list.

**The rule: match it to the buying cycle.**

- Impulse purchase (a PKR 1,200 cartridge) → 7–14 days
- Considered purchase (a PKR 5,000 filter) → 30 days
- Major purchase (dental implants, B2B software) → 90–180 days

⚠️ **A 540-day list for an impulse product is wasted money.** You are showing ads to people who bought elsewhere 14 months ago.

### The lists people forget to build

**1. Exclusion lists.** Always exclude recent purchasers from acquisition campaigns. Nothing annoys a customer more than being chased with ads for a thing they just bought.

**2. Past purchaser lists, used correctly.** Not for the same product — for the *next* one. Sana shows cartridge ads to filter buyers at day 75, when the first cartridge is due for replacement.

**3. Bounced-visitor exclusions.** People who left in 3 seconds are not interested. Excluding them improves every list.

---

## Dynamic Remarketing

Static remarketing shows the same banner to everyone.

**Dynamic remarketing shows the exact products the person viewed**, pulled from your feed (Lesson 6.1).

| | Static | Dynamic |
|---|---|---|
| What they see | A generic brand banner | The specific filter they looked at |
| Typical performance | Baseline | A lot better |
| Setup effort | Low | Medium — needs feed and tags |

### What it needs

1. A product feed in Merchant Center (Lesson 6.1)
2. **Dynamic remarketing tags** with the right event parameters passing product IDs
3. Responsive display ads that pull from the feed

**Ask your developer for:** `view_item`, `add_to_cart` and `purchase` events with the product ID matching your feed IDs exactly.

⚠️ **The most common failure:** the product IDs on your website do not match the IDs in your feed. Then dynamic remarketing shows nothing, or shows the wrong product. Test this specifically (Lesson 2.5).

---

## Frequency Capping: Stop Annoying People

Frequency capping limits how many times one person sees your ad.

**Without it, someone can see your ad 40 times in a day.** They will not buy. They will develop a negative feeling about your brand, and some will actively block you.

### Sensible starting caps

| Campaign type | Cap |
|---|---|
| Cart abandoners (short, urgent) | 5–8 impressions per day |
| Product viewers | 3–5 per day |
| General remarketing | 2–3 per day |
| Prospecting (if you must) | 1–2 per day |

**Where:** campaign settings → Extra settings → Frequency capping.

### The falling return

Effectiveness rises with the first few impressions, plateaus, then goes negative. You are not just wasting money past the plateau — you are creating irritation.

**Check your data:** segment by "Impression frequency" or review the reach and frequency report. Find where conversions per impression fall off.

---

## Placement Exclusions: The Essential Defence

This is the single most important Display control.

**Placements** are the specific websites, apps and videos your ads appear on. By default, Google chooses.

### The exclusions every account needs

**1. Mobile apps — the big one.**

Campaign settings → Extra settings → **Content exclusions**, and also exclude the placement category for apps.

The most reliable method is to exclude these placement categories or add these as excluded placements:
- `mobileappcategory::69500` (all mobile apps) — check the current identifier in your account interface
- Games categories specifically

⚠️ **Most Display waste in beginner accounts is mobile app traffic.** Exclude it first, then selectively allow back if you have a reason.

**2. Content types you do not want.**
Content exclusions let you avoid:
- Sensitive content
- Live streaming video
- Embedded video
- Parked domains
- Games

**3. Poor-performing placements, found from your data.**

**Where:** campaign → Content → Placements → "Where ads showed".

Sort by cost. Any placement spending money with zero conversions goes on the exclusion list.

Do this **weekly** for the first month, then monthly.

**4. Build a shared exclusion list.**

Tools → Shared library → **Placement exclusion lists**. Build one, apply to all campaigns and all accounts. Every bad placement you find once is blocked everywhere, forever.

After a year, this list becomes one of your most valuable assets.

---

## Layering Audiences

You can combine audiences for tighter targeting.

### Observation vs Targeting

This distinction matters and people get it wrong.

| Setting | Effect |
|---|---|
| **Targeting** | Ads show ONLY to this audience. Restricts reach. |
| **Observation** | Ads show to everyone; you can see this audience's performance separately and adjust bids. |

**In Display remarketing:** use **Targeting**. You specifically want only your visitors.

**In Search campaigns:** use **Observation** by default. Restricting Search to an audience usually cuts too much volume.

### Useful combinations

- Cart abandoners **AND** high-value product viewers → your best possible list
- All visitors **EXCLUDING** recent purchasers → clean acquisition remarketing
- Product viewers **AND** in-market for your category → warm plus intent

---

## Measurement Caution

⚠️ **Display remarketing is the channel most prone to over-crediting.**

Someone who visited your site, was going to buy anyway, sees a banner and then buys. Display claims the conversion. But the sale would have happened regardless.

### How to be honest about it

**1. Keep view-through conversions Secondary** (Lesson 2.3). A banner impression that was never clicked is weak evidence.

**2. Check the click-through rate.** Display CTR of 0.05–0.3% is normal. If a campaign shows lots of view-through conversions and almost no clicks, be sceptical.

**3. Run a holdout test.** Exclude 20% of your remarketing audience from seeing ads. Compare conversion rates between the two groups after 6–8 weeks. This is the only real proof.

**4. Watch the frequency-to-conversion relationship.** If conversions do not rise with impressions, you are paying for coincidence.

---

## 📖 Real-World Example: The Placement That Ate the Budget

Sana ran a Display remarketing campaign. Budget PKR 15,000/month. It reported a cost per sale of PKR 900 — her best channel by far.

She was about to triple the budget. First, she opened the placements report.

| Placement | Spend | Clicks | Conversions |
|---|---|---|---|
| A Pakistani news site | PKR 2,100 | 340 | 8 |
| A recipe blog | PKR 1,400 | 210 | 5 |
| **"Bubble Shooter Puzzle" (app)** | **PKR 4,800** | **3,940** | **0** |
| **"Fruit Slice Master" (app)** | **PKR 3,200** | **2,610** | **1** |
| A home improvement blog | PKR 1,600 | 190 | 6 |
| Various others | PKR 1,900 | 380 | 3 |

**Two mobile games had consumed 53% of her budget** and produced one conversion between them.

Look at the click volumes. 6,550 clicks from two games, versus 1,120 from every legitimate site combined. Those were accidental taps by people playing games — many of them children.

**Her PKR 900 cost per sale was an average of two very different things:**
- Legitimate placements: 22 conversions from PKR 7,000 → **PKR 318 per sale**
- Mobile games: 1 conversion from PKR 8,000 → **PKR 8,000 per sale**

### What she did

1. **Excluded all mobile app placements** at the campaign level
2. **Built a shared placement exclusion list** and applied it to every campaign in the account
3. Added the two specific games to the list
4. Added content exclusions for games and parked domains
5. Set a frequency cap of 3 per day (she had none before)

### Results the following month

| Metric | Before | After |
|---|---|---|
| Spend | PKR 15,000 | PKR 15,000 |
| Clicks | 7,670 | 1,340 |
| Conversions | 23 | 41 |
| Cost per sale | PKR 652 | **PKR 366** |

**Clicks fell by 83%. Conversions rose by 78%.**

This is one of the clearest illustrations in the whole course that **clicks are not the goal.** She was buying six times fewer clicks and getting far more customers, because the clicks she now bought were from real people who had visited her site.

### The frequency finding

She also checked the frequency data afterwards:

| Impressions per person | Conversion rate |
|---|---|
| 1–3 | 4.1% |
| 4–7 | 3.8% |
| 8–15 | 1.2% |
| 16+ | 0.3% |

**Almost all the value was in the first three impressions.** Everything beyond seven was close to wasted, and beyond sixteen it was likely doing brand damage.

Her cap of 3 per day was, if anything, still slightly generous.

---

## 📊 Mastery Score

**Level: Intermediate**

Display is simple to run and easy to run badly. The skill is in exclusions and honest measurement, not in setup.

---

## 📌 Key Takeaways

- Use Display for remarketing. Cold prospecting fails for most advertisers.
- Match membership duration to the buying cycle. A 540-day list for an impulse product is waste.
- Dynamic remarketing shows the exact product viewed and consistently outperforms static banners.
- Exclude mobile apps first. They cause most Display waste through accidental clicks.
- Set frequency caps. Almost all the value is in the first few impressions.

---

## ☑️ Self-Assessment

1. Are you running any cold Display prospecting? Can you justify its performance?
2. Have you checked your placements report in the last month?
3. Do you have a shared placement exclusion list?
4. Is there a frequency cap on your Display campaigns?
5. Are recent purchasers excluded from your acquisition remarketing?

---

## 🧠 Quiz

**1. Why does cold Display prospecting usually fail?**
a) It is too expensive
b) No intent, poor placement quality, and accidental app clicks
c) Google restricts it
d) It only works for e-commerce

**2. What is the first exclusion every Display campaign needs?**
a) News sites
b) Mobile apps and games
c) Video sites
d) International placements

**3. What membership duration suits an impulse purchase product?**
a) 540 days
b) 7–14 days
c) 365 days
d) Unlimited

**4. Clicks fell 83% and conversions rose 78%. What does this show?**
a) The tracking broke
b) The removed clicks were worthless accidental taps
c) Google made an error
d) Prices changed

**5. Why should view-through conversions stay Secondary?**
a) They are always fake
b) An unclicked impression is weak evidence, and Display over-credits
c) Google needs it
d) They cost more

---

## 💪 Practical Exercise (35 minutes)

Audit one Display campaign.

1. Open the placements report, sorted by cost. Find every placement with spend and no conversions.
2. Calculate the share of budget going to mobile apps.
3. Recalculate cost per conversion excluding app placements. Compare to the reported figure.
4. Check whether a frequency cap is set. If not, look at the frequency-to-conversion relationship.
5. Check your remarketing list durations against the real buying cycle.
6. Build a shared placement exclusion list with everything you found.

---

## 🎯 Expert Challenge

Build a complete remarketing structure with proof of incrementality.

- Design the full list ladder for one business, with membership durations justified by actual time-to-purchase data from GA4, not by guesswork.
- Build the dynamic remarketing setup plan, including the developer specification for product ID matching, and the test that proves IDs align between site and feed.
- Design the frequency strategy using real data: find the impression count at which incremental conversions stop, and set caps accordingly per list.
- Build a holdout test: exclude a randomly selected 20% of your remarketing audience for 8 weeks, then compare conversion rates. Calculate the true incremental value of remarketing for this business.
- Then produce the honest report: how much of your reported remarketing performance is really incremental, and how much would have happened anyway. Most agencies avoid this question. Answering it is what makes a client trust you with more budget.

---

## ✅ Quiz Answers

1 — **b**. No intent, poor inventory, accidental clicks.
2 — **b**. Mobile apps and games cause most Display waste.
3 — **b**. 7–14 days for impulse products.
4 — **b**. The lost clicks had no value; the remaining ones did.
5 — **b**. Unclicked impressions are weak evidence of causation.

---

**Next lesson:** 6.7 — Audiences: Show Ads to the Right People
