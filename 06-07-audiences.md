# Lesson 6.7 — Audiences: Show Ads to the Right People

*Phase 3 · Bidding and Other Ad Types — Module 6 · Shopping, PMax, YouTube and Display*

---

## Quick Recap From Module 6

You have built Shopping, PMax, Demand Gen, YouTube and Display. Audiences are the thread running through all of them. This lesson ties them together.

---

## 🎯 What You Will Learn

- Every audience type Google offers, and what each is really for
- Observation vs Targeting — the setting that decides whether you help or hurt
- How to build custom segments from search behaviour
- Customer Match: what you need, privacy, and why it is your strongest asset
- Predictive audiences from GA4

---

## The Audience Toolkit

Google offers seven main categories. Here is what each actually is.

### 1. Remarketing (Your Data)

People who visited your site, used your app, or watched your videos.

**Strongest signal available**, because it is based on real behaviour with your business. Covered fully in Lesson 6.6.

### 2. Customer Match

Your actual customer list — emails, phone numbers, addresses — uploaded and matched to Google accounts.

**The single most valuable audience asset you own.** More on this below.

### 3. In-Market

People Google believes are actively researching a purchase in a category right now.

*Examples:* "In-Market: Water Filtration Systems", "In-Market: Dental Services", "In-Market: Business Software".

**Really useful** because it shows current intent, not just interest.

### 4. Affinity

People with a long-term interest in a topic. *"Cooking Enthusiasts", "Health & Fitness Buffs".*

**Weaker than in-market** because interest is not intent. Someone can be a cooking enthusiast for ten years without ever buying a water filter.

**Best for:** upper-funnel video and Demand Gen, not Search.

### 5. Custom Segments

Audiences you build yourself, based on:
- **Search terms people recently used** ← the powerful one
- Websites they browse
- Apps they use

**This is the most underused audience type in Google Ads.** More below.

### 6. Detailed Demographics and Life Events

- **Detailed demographics:** parental status, marital status, education, homeownership
- **Life events:** recently moved, recently married, graduating, starting a business

**Useful when really relevant.** A dental clinic targeting "recently moved" people is sensible — they need a new dentist. A water filter company targeting "recently moved" is also sensible.

**Not useful** when applied because it feels advanced.

### 7. Predictive Audiences (from GA4)

GA4 can predict who is likely to purchase or churn in the next 7 days, and build audiences from that.

Covered at the end of this lesson.

---

## Observation vs Targeting: Get This Right

Every audience you add to a campaign is set to one of two modes. **This is the setting people most often get wrong.**

### Targeting
Your ads show **only** to people in this audience. Everyone else is excluded.

### Observation
Your ads show to everyone as normal. You can now **see** how this audience performs separately, and apply a bid adjustment to them.

### The rule by campaign type

| Campaign type | Default setting | Why |
|---|---|---|
| **Search** | **Observation** | Restricting Search to an audience usually cuts far too much volume |
| **Display remarketing** | **Targeting** | You specifically want only your visitors |
| **Display prospecting** | Targeting | Otherwise you are advertising to the entire internet |
| **Video / Demand Gen** | Targeting | Audience is the primary control in feed environments |
| **PMax** | Neither — it is a **signal**, not targeting (Lesson 6.2) |
| **Shopping** | Observation | Same reasoning as Search |

⚠️ **The classic mistake:** adding "In-Market: Water Filtration" to a Search campaign on **Targeting**. Impressions collapse by 90%, because you have now needed that the person both searched your keyword *and* is in that Google-defined segment.

**On Search, start with Observation. Always.** Then look at the data and decide.

### How to use Observation properly

1. Add relevant audiences on Observation
2. Wait 30–60 days for data
3. Open the Audiences tab and compare conversion rate and cost per conversion by audience
4. Apply bid adjustments to strong performers (if your bid strategy allows)
5. With Smart Bidding, the AI already uses audience signals — but the *reporting* remains valuable for your own understanding

**Even when you cannot adjust bids, Observation gives you free intelligence about who your customers are.**

---

## Custom Segments: The Underused Weapon

Custom segments let you build an audience from **search terms people recently used on Google**.

This is remarkable. You can show display, video and Demand Gen ads to people who searched your best keywords — even though those channels have no keywords of their own.

### How to build one

1. Tools → Audience manager → **Custom segments** → New
2. Choose "People who searched for any of these terms"
3. Enter your best converting Search keywords — 15 to 30 of them
4. Name it clearly: `Custom - Searched Water Filter Terms`

### Why this is so useful

You are bridging intent from Search into channels that have none.

Someone searched "water filter without electricity" last week. They did not buy. Now they see your video on YouTube and your banner on a news site.

**This is usually the best-performing cold audience** in Demand Gen, Video and Display campaigns.

### What to put in it

Use your **actual converting search terms** from the search terms report (Lesson 3.4) — not keywords you hope will work.

**Also useful:** competitor brand names. People searching for your competitor are in-market right now.

⚠️ Check local rules on competitor targeting, and remember you cannot use their trademark in your ad text (Lesson 1.5). Targeting the audience is generally allowed; naming them in the ad usually is not.

---

## Customer Match: Your Strongest Asset

Customer Match lets you upload your customer list. Google matches it against signed-in Google accounts.

### What you can do with it

| Use | How |
|---|---|
| **Exclude existing customers** from acquisition campaigns | Stops paying to reach people you already have |
| **Seed lookalike audiences** (Lesson 6.4) | Your best possible seed list |
| **Feed PMax audience signals** (Lesson 6.2) | Strongest available signal |
| **Bid differently for existing customers** | Higher or lower depending on strategy |
| **Cross-sell campaigns** | Filter buyers → cartridge ads at day 75 |
| **Win-back campaigns** | Lapsed customers |
| **New customer acquisition goals** | PMax needs this to know who is new |

### What you need and limits

- **Minimum list size** for the audience to become usable — typically around 1,000 matched members, though this varies by placement. Small lists may not serve.
- Data must be **hashed** before upload. Google Ads hashes it for you when uploading through the interface; if using the API, you hash it yourself.
- You must have **collected the data lawfully** and have the right to use it for advertising.
- Your account must meet Google's policy what you need for Customer Match eligibility.

### What to upload

In order of match rate:
1. **Email addresses** — usually the best match rate
2. **Phone numbers** — in E.164 format, e.g. +923001234567
3. **First name, last name, country, postcode** — lower match rate but adds coverage

**Upload all three where you have them.** Google matches on any of them.

### Privacy obligations

⚠️ This is real, and it matters.

- Your privacy policy must disclose that you share data with third parties for advertising
- You must honour deletion requests — remove people from your uploaded lists too
- For EU, UK and California customers, extra consent what you need apply
- Never upload data you got without permission, purchased lists included

**As with Lesson 0.7: check with a professional if you serve customers in regulated jurisdictions.**

### Keeping it fresh

Upload monthly. A list from 18 months ago is a list of people who may have moved on.

**Better: segment your uploads.**

| Segment | Use |
|---|---|
| Purchased in last 30 days | Exclude from acquisition |
| Purchased 60–120 days ago | Cross-sell target |
| Purchased 12+ months ago, no repeat | Win-back campaign |
| Top 20% by lifetime value | Lookalike seed |

That last one is the most valuable list in your account.

---

## Predictive Audiences from GA4

GA4 can build audiences based on **predicted behaviour**:

- **Likely 7-day purchasers** — people predicted to buy in the next week
- **Likely 7-day churning users** — people predicted to stop engaging
- **Predicted top spenders** — people predicted to be in the top spending group

### What you need

GA4 needs enough data to build the model — a meaningful volume of both positive and negative examples over the recent period. Small sites often do not qualify.

**Check:** GA4 → Admin → Audiences → the predictive audience templates will show whether your property is eligible.

### How to use them

**Likely 7-day purchasers** → target aggressively in remarketing. These are your warmest people.

**Likely churning users** → for subscription businesses, this is a retention campaign trigger.

**Predicted top spenders** → an excellent lookalike seed, and a good audience for premium product promotion.

⚠️ **Treat predictions as probabilities, not facts.** Test them against a simpler behavioural audience before committing significant budget. Sometimes "viewed a product page in the last 3 days" performs just as well.

---

## The Audience Strategy by Campaign Type

Here is the complete picture.

| Campaign | Audiences to use | Mode |
|---|---|---|
| **Brand Search** | Customer Match (exclude if you wish to reduce spend on existing) | Observation |
| **Non-brand Search** | Remarketing, in-market, custom segments, Customer Match | **Observation** |
| **Shopping** | Remarketing, Customer Match | Observation |
| **PMax** | Customer Match, converters, custom segments | Signal only |
| **Display remarketing** | Your remarketing lists, layered | **Targeting** |
| **Demand Gen** | Remarketing, lookalikes from customers, custom segments | **Targeting** |
| **Video** | Remarketing, custom segments, in-market, placements | **Targeting** |

### Exclusions to apply everywhere

- **Recent purchasers** from acquisition campaigns
- **Existing customers** from new-customer campaigns
- **Bounced visitors** from remarketing
- **Job applicants and employees**, if you can find them

**Exclusions are as valuable as inclusions, and almost nobody builds them.**

---

## 📖 Real-World Example: The Audience Stack That Cut CAC by 41%

TaskFlow's cost per paying customer had settled at $142. They wanted to reduce it without cutting volume.

They had never built a proper audience structure. Their account had two audiences: "All website visitors" and nothing else.

### What they built, over three weeks

**Layer 1: Customer Match, segmented.**

They exported from their CRM into four lists:

| List | Size | Use |
|---|---|---|
| Active paying customers | 610 | **Excluded** from all acquisition campaigns |
| Trials that did not convert, under 90 days | 1,840 | Remarketing target |
| Churned customers, 6+ months | 420 | Win-back campaign |
| Top 20% by LTV | 122 | Lookalike seed (too small alone — combined with all customers) |

**Layer 2: Custom segment from search behaviour.**

They built `Custom - Construction PM Searchers` from their 22 best converting search terms, plus four competitor names.

**Layer 3: Behavioural remarketing from GA4.**

| List | Definition | Duration |
|---|---|---|
| Pricing page viewers | Viewed /pricing, no trial | 30 days |
| Trial starters, no PQL | Started trial, did not invite team | 14 days |
| Demo page viewers | Viewed /demo, did not book | 21 days |

**Layer 4: Predictive.**

GA4 qualified for "likely 7-day purchasers". They added it to remarketing as a separate high-priority segment.

### How they applied it

**Search campaigns:** all audiences on **Observation**. No targeting restriction. Active customers excluded.

**Demand Gen:** three ad groups — pricing page viewers, custom segment searchers, lookalike from customers.

**Display remarketing:** targeting, with frequency caps, split by the three behavioural lists.

**PMax:** audience signal = Customer Match top LTV + converters + custom segment.

### Results at 12 weeks

| Metric | Before | After |
|---|---|---|
| Monthly spend | $19,400 | $19,600 |
| Paying customers | 137 | 234 |
| **Cost per customer** | **$142** | **$84** |

**A 41% reduction in cost per customer, with no change in budget.**

### Where the improvement came from

They analysed it properly, because a single number hides the lesson.

**1. Excluding active customers: 22% of the gain.**
They had been spending roughly $2,800 a month showing ads to people who were already paying them. This was pure waste, invisible until they built the exclusion.

**2. The custom search segment: 31% of the gain.**
Their best-performing cold audience by a wide margin. Demand Gen cost per customer for this segment was $96, against $210 for the lookalike.

**3. Behavioural remarketing segmentation: 28% of the gain.**
Previously one list, one message. Now "pricing page viewers" saw a pricing-focused ad and "trial no PQL" saw an onboarding-help ad. Same budget, much better message match.

**4. Observation data on Search: 19% of the gain.**
They discovered that people in "In-Market: Business Software" converted at 2.4× the campaign average. With that knowledge, they built dedicated Demand Gen targeting for that segment.

Note that this last one produced value **without changing the Search campaign at all.** Observation gave them intelligence they then used elsewhere.

### The finding nobody expected

The **churned customer win-back** campaign, on a tiny $600/month budget, produced 19 reactivations in 12 weeks. Cost per reactivation: $32.

**Their cheapest customers by a wide margin were people who had already left.** Nobody had ever tried to bring them back.

---

## 📊 Mastery Score

**Level: Advanced**

Audience structure is one of the highest-use areas in Google Ads and one of the least well built in real accounts.

---

## 📌 Key Takeaways

- On Search, use Observation. Targeting an audience on Search usually destroys volume.
- Custom segments built from real search terms are the most underused audience type available.
- Customer Match is your strongest asset. Segment it: exclude active customers, seed lookalikes from your best.
- Build exclusions as carefully as inclusions. Paying to advertise to existing customers is common and invisible.
- Predictive audiences are probabilities. Test them against a simple behavioural audience before committing budget.

---

## ☑️ Self-Assessment

1. Are any audiences on your Search campaigns set to Targeting instead of Observation?
2. Have you built a custom segment from your best converting search terms?
3. Is your customer list uploaded and segmented? When was it last refreshed?
4. Are existing customers excluded from your acquisition campaigns?
5. Have you ever tried a win-back campaign for lapsed customers?

---

## 🧠 Quiz

**1. What is the difference between Observation and Targeting?**
a) Nothing
b) Targeting restricts ads to that audience; Observation shows to everyone while reporting on that group
c) Observation costs more
d) Targeting is only for Display

**2. What should the default be on a Search campaign?**
a) Targeting
b) Observation
c) Neither
d) It depends on the budget

**3. What is a custom segment built from?**
a) Your customer list
b) Search terms people recently used, sites they browse, or apps they use
c) Demographics only
d) Google's predictions

**4. Which is the strongest lookalike seed?**
a) All website visitors
b) Your top 20% of customers by lifetime value
c) People who bounced
d) Everyone in your country

**5. Why exclude active customers from acquisition campaigns?**
a) Google needs it
b) You are paying to advertise to people who already pay you
c) It improves Quality Score
d) It reduces frequency

---

## 💪 Practical Exercise (40 minutes)

Build an audience structure for one account.

1. List every audience currently in the account and its mode. Flag anything on Targeting in a Search campaign.
2. Build one custom segment from your top 20 converting search terms.
3. Export your customer list and split it into four segments as in the example.
4. Check whether active customers are excluded from acquisition campaigns. If not, that is your first fix.
5. Add three relevant in-market audiences to your main Search campaign on Observation.
6. Diarise a review in 45 days to read the Observation data.

---

## 🎯 Expert Challenge

Design a complete audience structure with a data governance layer.

- Map every audience the business could build, from every source: website behaviour, CRM stages, purchase history, support interactions, and Google's own segments.
- Design the Customer Match refresh process: which segments, how often, from which system, and who is responsible. Include the deletion-request handling process.
- Build the exclusion structure always: for every campaign, which audiences must be excluded and why. Most accounts have none of this.
- Design the audience testing programme: how you will work out which audiences really outperform, controlling for the fact that warmer audiences always look better.
- Build the privacy compliance documentation: what data you upload, the lawful basis, what the privacy policy says, and how deletion requests propagate.
- Then run the win-back test. Take your lapsed customers, build a specific offer for them, and measure the cost per reactivation against your normal cost per acquisition. In most businesses this is the cheapest growth available, and almost nobody does it.

---

## ✅ Quiz Answers

1 — **b**. Targeting restricts; Observation reports without restricting.
2 — **b**. Observation, always, as the starting point.
3 — **b**. Recent search terms, browsed sites, or used apps.
4 — **b**. Your highest-value customers.
5 — **b**. It is spend on people you already have.

---

## 🏁 Module 6 and Phase 3 Complete

You can now run a full multi-channel account. Confirm you can:

1. Build and tier a product feed for profit
2. Structure and control a PMax campaign, including brand exclusions
3. Judge PMax on incrementality, not attribution
4. Launch Demand Gen with proper creative and honest measurement
5. Script and produce a video ad that works with sound off
6. Defend a Display campaign with placement exclusions and frequency caps
7. Build an audience structure with exclusions, custom segments and Customer Match

**Next:** Phase 4, Module 7 — Advanced Tracking That Sees Everything. This is where you get ahead of most advertisers.
