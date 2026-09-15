# Lesson 6.4 — Demand Gen: Reaching People Before They Search

*Phase 3 · Bidding and Other Ad Types — Module 6 · Shopping, PMax, YouTube and Display*

---

## Quick Recap From Lesson 6.3

Everything so far has been demand *capture* — meeting people who were already looking. Demand Gen is the opposite. Nobody was looking for you.

---

## 🎯 What You Will Learn

- What Demand Gen is and where the ads appear
- Why creative matters more than targeting here
- The prerequisites before you should spend a rupee on it
- How to build audiences and lookalike segments
- How to measure a channel that does not produce instant sales

---

## What Demand Gen Actually Is

Demand Gen places visual and video ads in three places:

- **YouTube** — in the feed, in Shorts, on the watch page
- **Discover** — the personalised feed on Android phones and the Google app
- **Gmail** — the Promotions tab

These are **feed environments**. People are scrolling, not searching. Nobody typed a query.

**Think of the difference between a shop on a busy street and a leaflet through a letterbox.** Search is the shop — people walk in because they wanted something. Demand Gen is the leaflet — it must be interesting enough to stop someone who was not thinking about you at all.

That difference changes everything about how you build it.

---

## The Fundamental Shift: Creative Is the Targeting

In Search, your keyword decides who sees your ad. Your copy then persuades them.

In Demand Gen, **your creative decides who stops scrolling.** Google can show your ad to a million people; only the ones your creative speaks to will engage.

> **A brilliant video with average targeting beats perfect targeting with a boring image. Every time.**

This is the single most important idea in this lesson. Media buyers who come from Search find it uncomfortable, because it means the lever they are most skilled with is no longer the main one.

---

## The Prerequisites

Do not launch Demand Gen until all of these are true. From Lesson 1.2:

✅ **Search is profitable and at or near its ceiling.** Check impression share — if you are at 45% search impression share, buy the remaining 55% before creating new demand. It is cheaper.

✅ **50+ conversions per month.** Demand Gen needs data.

✅ **Remarketing is running.** Demand Gen creates interest; remarketing captures it. Without remarketing you leak most of the value.

✅ **You have real creative capacity.** At minimum: 3 videos and 10 good images. If you cannot produce these, do not start.

✅ **You can wait 6–8 weeks to judge.** Demand Gen does not produce day-one sales.

✅ **Tracking is solid**, including view-through measurement decisions (Lesson 2.3).

---

## Campaign Structure

```
Demand Gen Campaign
 ├── Budget and bid strategy
 ├── Ad Group 1
 │    ├── Audience
 │    └── Ads (video and image)
 ├── Ad Group 2
 └── Ad Group 3
```

Unlike PMax, **you control the audience here.** Demand Gen ad groups have real targeting.

### A sensible starting structure

| Ad group | Audience | Purpose |
|---|---|---|
| `Remarketing` | Website visitors, cart abandoners | Warmest. Usually best performance. |
| `Customer Lookalike` | Lookalike of your customer list | Closest to cold traffic that works |
| `In-Market` | In-market segments for your category | People showing buying signals |
| `Custom Segment` | People who searched your top keywords | Bridges Search intent into feeds |

**Start with the warmest two.** Add colder audiences once those work.

---

## Audience Building: The Lookalike Stack

Demand Gen supports **lookalike segments** — Google finds people similar to a list you provide.

### The seed list quality ladder

The better your seed list, the better the lookalike.

| Seed list | Quality | Notes |
|---|---|---|
| **Your highest-value customers** | 🥇 Best | Top 20% by lifetime value |
| All purchasers | 🥈 Very good | Customer Match upload |
| Converters from your website | 🥉 Good | From GA4 or Ads remarketing |
| All website visitors | Weak | Too broad to be useful |

⚠️ **The most common mistake:** using "all website visitors" as the seed. That list includes bounces, job seekers and competitors. The lookalike will find more of the same.

**Always seed from actual customers, ideally your best ones.**

### Lookalike reach settings

You typically choose a reach level — narrow, balanced or broad.

- **Narrow:** most similar, smallest audience. Start here.
- **Balanced:** a compromise.
- **Broad:** widest reach, loosest similarity.

**Start narrow.** Widen only when narrow is working and you need more volume.

### Custom segments from search behaviour

This is a strong bridge between Search and Demand Gen. You can build an audience of people who recently **searched** terms you specify.

**Use your best converting Search keywords as the input.** You are now showing visual ads to people who demonstrated intent in Search but did not convert.

This is often the best-performing cold audience in a Demand Gen campaign.

---

## The Creative What you need

### Video specifications and formats

| Format | Aspect ratio | Where it shows |
|---|---|---|
| Vertical | 9:16 | YouTube Shorts, mobile feeds |
| Square | 1:1 | Feeds |
| Horizontal | 16:9 | YouTube watch page, desktop |

**Upload all three where you can.** Vertical is increasingly the most important, because Shorts volume is enormous.

### Video length

- **6–10 seconds:** best for Shorts and quick attention
- **15 seconds:** the workhorse
- **30 seconds:** for a more complete story

**Make all three lengths from the same shoot.**

### The first three seconds decide everything

In a feed, people scroll fast. If your first three seconds do not stop them, nothing else matters.

**What works in the first three seconds:**
- The problem, shown visually
- Movement or a visual surprise
- A face looking at the camera and speaking directly
- Text on screen stating the outcome
- The product doing the thing it does

**What fails:**
- A logo animation
- A slow establishing shot
- "Hello and welcome to..."
- Silence
- Anything that takes time to explain itself

### Sound off by default

Most feed video is watched without sound. **Your video must work silently.**

- Burn captions into the video, or add clear on-screen text
- Do not rely on a voiceover to carry the message
- Show, do not tell

### Image assets

- 1.91:1, 1:1 and 4:5 formats
- Real product, real people, real places
- Bright, high contrast, uncluttered
- Minimal text — the platform limits it and it reduces performance
- No generic foreign stock photos (Lesson 0.5)

---

## Bidding and Measurement

### Bid strategies available

- **Maximise conversions** (with optional tCPA)
- **Maximise conversion value** (with optional tROAS)
- **Maximise clicks** — for a first learning period when you have no data

**Start with Maximise Conversions, no target.** Same process as Lesson 5.2.

### The measurement problem

Demand Gen creates interest that converts **later**, often through a different channel.

Someone watches your video on Tuesday, thinks about it, searches your brand on Saturday, and buys. **Last-click attribution gives all the credit to the brand Search campaign.** Demand Gen shows almost nothing.

If you judge Demand Gen on last-click conversions after two weeks, you will always turn it off.

### How to measure it honestly

**1. Watch total account performance.** Did total conversions rise after Demand Gen launched? By how much? At what total cost?

**2. Watch brand search volume.** If Demand Gen is working, brand searches and direct traffic should rise. Check Search Console and your brand campaign impression volume.

**3. Use a longer attribution window.** Demand Gen effects appear over weeks.

**4. Watch view-through conversions — carefully.** Keep them as Secondary while you learn (Lesson 2.3). They can show influence, or coincidence.

**5. Run a geo experiment** (Lesson 13.2). This is the only really reliable method, and it is worth doing before committing significant budget.

**6. Judge at 8 weeks minimum.** Not two.

---

## 📖 Real-World Example: Sana's Demand Gen Launch

By month 11, Sana's Search impression share was 78% and rising spend was no longer producing more sales. She had hit the Search ceiling — the correct moment to add Demand Gen (Lesson 1.2).

### Preparation, before spending anything

She spent **three weeks making creative before launching.** This is the part most people skip.

**Videos filmed on a phone, edited in free software:**

| Video | Length | First 3 seconds |
|---|---|---|
| "Load-shedding" | 15s | A tap running, lights cut out, water keeps flowing through the filter |
| "Boiling" | 10s | A woman lifting a heavy pot of boiling water, sighing, wiping her forehead |
| "Testimonial" | 30s | A customer in her kitchen: "I stopped buying bottled water in March" |
| Vertical cuts | 9:16 | All three, recut for Shorts |

**All with burned-in captions.** All working with sound off.

**14 images:** the filter in real Karachi kitchens, a family drinking, the product against a load-shedding backdrop.

### Structure

| Ad group | Audience | Daily budget |
|---|---|---|
| `Remarketing` | Product viewers, cart abandoners, 90 days | PKR 400 |
| `Lookalike - Best Customers` | Narrow lookalike from top 20% LTV customers | PKR 600 |
| `Custom - Searchers` | People who searched her top 12 keywords | PKR 500 |

Total: PKR 1,500/day, about PKR 45,600/month. Roughly 12% of her total budget — a controlled test, not a bet.

### What happened

**Weeks 1–2.** Direct conversions: 9. Cost per conversion: PKR 2,370. Above her PKR 2,600 margin, but only just, and this was learning.

She did not change anything.

**Weeks 3–4.** Direct conversions: 21. Cost per conversion: PKR 1,810.

**Weeks 5–8.** Direct conversions: 58. Cost per conversion: PKR 1,340.

### The more interesting finding

She also tracked what happened elsewhere in the account:

| Metric | 8 weeks before | 8 weeks after |
|---|---|---|
| Brand search impressions | 4,100 | 9,800 |
| Brand campaign conversions | 71 | 138 |
| Direct traffic conversions (GA4) | 34 | 81 |
| Demand Gen direct conversions | 0 | 88 |
| **Total account conversions** | **588** | **811** |
| Total spend | PKR 618,000 | PKR 712,000 |

**Demand Gen reported 88 conversions. Total account conversions rose by 223.**

The extra 135 came through brand search and direct traffic — people who saw a video, remembered her, and came back through a different door.

**If she had judged Demand Gen on its own reported conversions, she would have valued it at 40% of its actual contribution.**

### The ad group breakdown

| Ad group | Cost per conversion | Verdict |
|---|---|---|
| Remarketing | PKR 780 | ✅ Excellent — scaled up |
| Custom - Searchers | PKR 1,290 | ✅ Strong — scaled up |
| Lookalike - Best Customers | PKR 2,140 | ✅ Acceptable — held steady |

Note the order. **Warmest performed best.** That is the normal pattern, and it is why you start with remarketing and work outward.

### What she learned about creative

After 8 weeks, the asset data showed:

- The **"Load-shedding" video** produced 61% of conversions
- The **"Boiling" video** produced 27%
- The **"Testimonial"** produced 12%

The load-shedding video was the one she had almost not made, because it felt "too specific". It was specific to a real problem her customers actually had — which is exactly why it worked.

**Same lesson as 0.2 and 3.2:** specificity wins.

---

## 📊 Mastery Score

**Level: Advanced**

Demand Gen needs creative capability and measurement patience. Both are rarer than technical skill.

---

## 📌 Key Takeaways

- Demand Gen places visual ads in feeds. Nobody searched for you, so creative decides who stops.
- Do not launch until Search is near its ceiling, remarketing is running, and you have real creative.
- Seed lookalikes from actual customers, ideally your best ones. Never from "all website visitors".
- Your video must work in three seconds and with sound off. Burn in captions.
- Judge on total account performance and brand search lift over 8 weeks, not on last-click conversions after two.

---

## ☑️ Self-Assessment

1. What is your Search impression share? Have you bought all available Search demand?
2. Do you have three real videos, in three lengths, in vertical format?
3. Would your video make sense with the sound off?
4. What list are you seeding your lookalike from? Is it customers or visitors?
5. Could you resist judging this channel for eight weeks?

---

## 🧠 Quiz

**1. What decides performance most in Demand Gen?**
a) Bid strategy
b) Creative quality
c) Keyword list
d) Budget size

**2. When should you launch Demand Gen?**
a) On day one, alongside Search
b) When Search is profitable and near its impression share ceiling, with remarketing running
c) Only for e-commerce
d) Never

**3. What should you seed a lookalike audience from?**
a) All website visitors
b) Your actual customers, ideally the highest value ones
c) Competitor lists
d) Random people

**4. Why must your video work with sound off?**
a) Google mutes ads
b) Most feed video is watched without sound
c) Sound costs extra
d) It does not matter

**5. Demand Gen reports 88 conversions but total account conversions rose by 223. What happened?**
a) Tracking error
b) Demand Gen also drove brand searches and direct visits that converted elsewhere
c) Double counting
d) The other campaigns improved by coincidence

---

## 💪 Practical Exercise (45 minutes)

Assess readiness and plan a Demand Gen launch.

1. Check each prerequisite. Score pass or fail honestly.
2. Find your current Search impression share. Calculate how much Search demand you are still missing.
3. List the creative you have and the creative you need. Be specific about video.
4. Design your ad group structure with three audiences, warmest first.
5. Write your seed list plan: which customers, how many, where the list comes from.
6. Write the measurement plan, including what you will look at outside the Demand Gen campaign itself.

---

## 🎯 Expert Challenge

Build a full creative and measurement system for demand creation.

- Design the creative production plan: the three problems your best customers have, one video concept per problem, and the shot list for each. Include how you will produce them at low cost.
- Build the audience structure as a ladder from warmest to coldest, with the expected cost per conversion at each level and the rule for when you expand outward.
- Design the incrementality test using a geographic holdout (Lesson 13.2): market selection, duration, and the minimum lift that would justify the spend.
- Build the halo measurement dashboard: brand search volume, direct traffic, total account conversions, and the branded-versus-non-branded split, tracked weekly against the Demand Gen launch date.
- Then write the creative learning log: after each 8-week cycle, which concept won, which failed, and the hypothesis about why. After a year, this document is worth more than any targeting knowledge, because creative insight compounds and platform features change.

---

## ✅ Quiz Answers

1 — **b**. Creative is effectively the targeting in a feed environment.
2 — **b**. After Search is near its ceiling, with remarketing already running.
3 — **b**. Real customers, ideally your highest value ones.
4 — **b**. Feed video is mostly watched silently.
5 — **b**. Demand creation drives conversions through other channels — the halo effect.

---

**Next lesson:** 6.5 — Making YouTube Ads That People Watch
