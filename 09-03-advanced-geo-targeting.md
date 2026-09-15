# Lesson 9.3 — Target the Right Areas, Not Just a Circle

*Phase 5 · Running Big Accounts and Clients — Module 9 · Managing Large, Complex Accounts*

---

## Quick Recap From Lesson 4.4

You learned that the Presence setting matters enormously. This lesson goes far beyond that basic control.

---

## 🎯 What You Will Learn

- The four location targeting methods, and when to use each
- Radius targeting, and why distance is not the same as travel time
- Tiered geographic bidding — the framework for multi-location businesses
- Hyper-local strategy for service-area businesses
- Store visit conversions and store goals

---

## Why Geography Deserves Its Own Lesson

For many businesses, **location is the strongest predictor of conversion** — stronger than keyword, device or time of day.

- A dental clinic 3 km away converts far better than one 40 km away
- A plumber's value drops sharply with travel time
- A restaurant's catchment is measured in minutes, not kilometres

**Yet most accounts target "the city" and stop there.** That is leaving a large amount of performance unused.

---

## The Four Targeting Methods

### 1. Standard locations

Countries, regions, cities, postcodes. Google's predefined list.

**Good for:** most businesses, most of the time. Simple and reliable.
**Weakness:** administrative boundaries rarely match real catchment areas.

### 2. Radius targeting

A circle of a chosen distance around a point.

**Good for:** any business people physically travel to.
**Weakness:** a circle is not how people travel. More on this below.

### 3. Location groups

Target areas around your business locations, or areas matching demographic rules such as income bracket.

**Good for:** multi-location businesses, and premium services targeting affluent areas.

### 4. Bulk location upload

Upload a list of postcodes or coordinates.

**Good for:** franchise networks, defined delivery zones, territory-based sales teams.

---

## Radius Targeting: Distance vs Reality

A radius draws a perfect circle. **People do not travel in circles.**

### What actually works out catchment

| Factor | Effect |
|---|---|
| **Roads and traffic** | 5 km through city centre traffic may take 40 minutes |
| **Rivers, railways, motorways** | Physical barriers people rarely cross |
| **Public transport lines** | People travel far along a metro line, not across it |
| **Competitors** | Someone will not pass three competitors to reach you |
| **Perceived neighbourhood boundaries** | People have mental maps that do not match geography |

**Think of a bus route rather than a circle.** Your real catchment is shaped like the roads people use, stretched along the easy routes and cut short where crossing is difficult.

### How to find your real catchment

**The best method: use your own customer data.**

1. Export the postcodes or areas of your last 200 customers
2. Plot them on a map
3. **That shape is your catchment.** It is almost never a circle.

**Then build your targeting to match it** using postcodes rather than a radius.

### Practical radius guidance

| Business type | Typical radius | Note |
|---|---|---|
| Restaurant, café | 3–5 km | Or a 10-minute drive |
| Dental clinic, GP | 8–15 km | People travel further for trusted healthcare |
| Emergency plumber | 15–25 km | Urgency overrides distance |
| Car dealership | 30–60 km | Large purchase, worth travelling |
| Specialist surgery | 50–200 km | Rare specialism, people travel |
| Wedding venue | 50–150 km | Once-in-a-lifetime purchase |

⚠️ **Test rather than assume.** Start slightly wider than you think, use bid adjustments to find where performance drops, then tighten.

---

## Tiered Geographic Bidding

This is the professional framework for location-based businesses.

Instead of one radius, build **concentric tiers with different bid adjustments**, based on real performance.

### The structure

| Tier | Distance | Typical adjustment | Reasoning |
|---|---|---|---|
| **Tier 1: Core** | 0–5 km | +20% to +40% | Highest conversion, lowest travel friction |
| **Tier 2: Primary** | 5–12 km | 0% (baseline) | Solid performance |
| **Tier 3: Extended** | 12–20 km | −20% to −30% | Converts, but less well |
| **Tier 4: Fringe** | 20–35 km | −50% or excluded | Rarely converts |
| **Beyond** | 35 km+ | Excluded | Not a customer |

### How to build it

1. Create a campaign targeting the widest area
2. Add each radius as a separate location target
3. **Exclude the inner circle from each outer one** so tiers do not overlap

⚠️ **Overlapping radii are the classic mistake.** If you target 0–5 km and 0–12 km, the inner area is in both, and Google applies the more specific one — but your reporting becomes confusing. Structure them as genuine rings.

### Getting the adjustments right

**Do not guess.** Run it flat for 60–90 days first, then read the data.

Campaigns → Insights → Locations → set the view to your radius targets, and compare:
- Conversion rate by tier
- Cost per conversion by tier

**Then set adjustments proportional to the performance difference**, not to your intuition.

⚠️ **With most Smart Bidding strategies, location bid adjustments are ignored or heavily overridden.** In that case, use tiers for **reporting and exclusion**, and let Smart Bidding handle the bidding. Exclusion still works, and it is often the more valuable control.

---

## Hyper-Local Strategy

For service-area businesses — plumbers, electricians, cleaners, mobile services — geography is the whole strategy.

### The neighbourhood campaign approach

Rather than one campaign for "Lahore", build campaigns for the areas that matter, each with area-specific messaging.

| Campaign | Ad headline | Landing page |
|---|---|---|
| `Search \| Gulberg \| Plumber \| Leads` | "Emergency Plumber in Gulberg — 45 Minutes" | /gulberg-plumber |
| `Search \| DHA \| Plumber \| Leads` | "Emergency Plumber in DHA — 45 Minutes" | /dha-plumber |
| `Search \| Model Town \| Plumber \| Leads` | "Emergency Plumber in Model Town" | /model-town-plumber |

**Why this works:** message match at the neighbourhood level (Lesson 0.5). Someone in Gulberg seeing "Gulberg" in the ad feels certain you serve them.

**The trade-off:** more campaigns means more data fragmentation (Lesson 1.4). Only split where volume supports it, or use a portfolio strategy to pool the learning (Lesson 9.1).

### The location insertion alternative

If volume does not support separate campaigns, use **location insertion** in your ads. Google inserts the searcher's city or region into the headline dynamically.

```
Headline: Emergency Plumber in {LOCATION(City)}
```

**One campaign, locally relevant ads.** Less precise than dedicated pages, far easier to manage.

⚠️ **Always set a default** in case the location cannot be worked out, or your ad will show a gap.

---

## Multi-Location Businesses

A business with 12 branches faces a specific problem: how do you send each searcher to the right branch?

### Option 1: Location extensions with a Business Profile

Link your Google Business Profile (Lesson 2.2). Google shows the nearest branch's address automatically.

**Simplest option, and often enough.**

### Option 2: Location groups

Target a radius around each business location automatically. When you open a new branch, add it to the Business Profile and the targeting updates.

**Good for:** growing chains.

### Option 3: Campaign per location

Full control: separate budget, separate messaging, separate landing page per branch.

**Good for:** branches with really different economics, different services, or separate budget owners.

**Costly in:** management time and data fragmentation.

### Choosing

| Number of locations | Recommended approach |
|---|---|
| 1–3 | Campaign per location |
| 4–15 | Location groups, or campaigns for the largest branches only |
| 16+ | Location groups plus a portfolio strategy |
| Franchise with separate budgets | Campaign per location, separate accounts if separately owned |

---

## Store Visit Conversions

For businesses with physical premises, Google can measure **store visits** — people who saw an ad and later visited your location.

### How it works

Google uses signals from users who have enabled location history, then extrapolates to estimate total visits.

### The what you need

Store visit conversions are not available to everyone. Typical what you need include:

- A linked and checked Google Business Profile with multiple locations
- Enough ad click volume
- Enough store visit volume
- Availability in your country

⚠️ **Many small businesses will not qualify.** Check availability in your account rather than planning around it.

### How to interpret them

**Store visits are modelled, not counted.** They are an estimate based on a sample.

**Use them for:** understanding directional impact and comparing campaigns.
**Do not use them for:** precise ROI calculations, or as your Primary conversion without careful thought.

⚠️ **Never present modelled store visits to a client as if they were counted transactions.** Label them clearly as estimates.

### Store goals

Some campaign types support optimising specifically for store visits and local actions — calls, direction requests, and visits.

**Useful for:** retail and restaurants where the online action is not the goal.
**Combine with:** call tracking and direction request tracking as supporting signals.

---

## Location Exclusions: The Underused Control

Exclusions are often more valuable than inclusions.

### What to exclude, always

1. **Areas you really cannot serve.** Not "would prefer not to" — cannot.
2. **Areas with proven poor performance** after 90 days of data.
3. **Areas where a competitor dominates** and you cannot win economically.
4. **Countries you do not ship to** — even with Presence targeting, add clear exclusions as a safety net.

### The method

1. Run for 60–90 days with a wide target
2. Open the User Locations report
3. Sort by cost
4. Find areas with meaningful spend and no conversions
5. Exclude them

**Set the exclusion method to Presence as well** (Lesson 4.4), so you do not accidentally exclude a genuine local customer who happened to search about another city.

---

## 📖 Real-World Example: The Map That Was Not a Circle

Dr. Ayesha's clinic was in Gulberg, Lahore. Her campaign used a 15 km radius, which felt sensible.

Cost per booking: PKR 1,405. Good, after everything in Modules 0–4.

Then Bilal asked a question nobody had asked: *"Where do your patients actually come from?"*

### The analysis

She exported the addresses of her last 300 patients and plotted them.

**The shape was not a circle.**

| Area | Distance | Patients | Notes |
|---|---|---|---|
| Gulberg | 0–3 km | 94 | Core |
| Garden Town | 4 km | 51 | Easy road access |
| Model Town | 6 km | 43 | Easy road access |
| Johar Town | 9 km | 38 | Along the main road |
| DHA | 12 km | 31 | Affluent, willing to travel |
| **Shadman** | **3 km** | **4** | ⚠️ Very close, almost no patients |
| **Cantt** | **7 km** | **2** | ⚠️ Close, almost no patients |
| Beyond 15 km | — | 37 | Scattered, mostly referrals |

**Two areas within her radius produced almost nothing**, despite being close.

**The reason, when she investigated:** both Shadman and Cantt had well-set up dental clinics of their own, and the road connections to Gulberg from those areas involved difficult junctions. People simply went to their local option.

Meanwhile, DHA at 12 km produced 31 patients — because DHA residents routinely travelled to Gulberg for shopping and services anyway, and her clinic was on a route they already used.

**Distance was a poor predictor. Habit and competition were better ones.**

### The restructure

She replaced the 15 km radius with postcode-level targeting, in four tiers.

| Tier | Areas | Adjustment / action |
|---|---|---|
| Tier 1 | Gulberg, Garden Town, Model Town | Baseline, full budget |
| Tier 2 | Johar Town, DHA | Baseline |
| Tier 3 | Selected areas along main routes | −25% |
| **Excluded** | **Shadman, Cantt** | Excluded entirely |
| Beyond | Rest of Lahore | Excluded, except for a small implant-only campaign |

She also created **area-specific ad copy** for her three biggest areas, using location insertion for the rest.

**And one more thing.** She noticed the 37 patients from beyond 15 km were almost all implant and braces cases — high value, willing to travel. So she built a separate wide-radius campaign for high-value treatments only, at 40 km, excluding general dentistry.

### Results at 12 weeks

| Metric | Before | After |
|---|---|---|
| Monthly spend | PKR 122,500 | PKR 122,500 |
| Bookings | 108 | 141 |
| Cost per booking | PKR 1,405 | **PKR 1,076** |
| High-value treatments | 34% | **46%** |

**Two effects:**

1. **Excluding Shadman and Cantt** recovered about PKR 14,000 a month that had been producing almost nothing.

2. **The wide-radius high-value campaign** was the bigger win. It found implant and braces patients up to 40 km away — people who had never been targeted because the general 15 km radius excluded them.

**She had been using one geographic setting for two completely different businesses.** A cleaning appointment is worth PKR 5,000 and nobody travels 40 km for it. An implant is worth PKR 85,000 and people absolutely will.

### The principle

> **Your catchment area is not a property of your location. It is a property of your offer.**

Different services have different catchments. Treating them the same wastes money in both directions — paying for distant traffic on cheap services, and missing distant traffic on expensive ones.

---

## 📊 Mastery Score

**Level: Advanced**

Geographic strategy is one of the most neglected areas in Google Ads, and one of the easiest places to find a large, immediate improvement.

---

## 📌 Key Takeaways

- Radius targeting draws a circle. Real catchment is shaped by roads, barriers, habits and competitors.
- Plot your actual customers on a map. That shape is your real catchment; build targeting to match it.
- Build geographic tiers from performance data, not intuition. With Smart Bidding, use tiers mainly for exclusion and reporting.
- Different services have different catchments. High-value offers justify a much wider radius than cheap ones.
- Location exclusions are often more valuable than inclusions. Use the User Locations report to find them.

---

## ☑️ Self-Assessment

1. Have you ever plotted your actual customers on a map?
2. Are there areas inside your radius producing almost nothing?
3. Do all your services share one geographic setting? Should they?
4. Have you checked the User Locations report in the last quarter?
5. Are your location exclusions set to Presence as well?

---

## 🧠 Quiz

**1. Why is a radius often a poor representation of catchment?**
a) Google calculates it wrongly
b) People travel along roads and avoid barriers, so real catchment is not circular
c) It is too expensive
d) Radius targeting is not supported

**2. How should you set geographic bid adjustments?**
a) By intuition about distance
b) From 60–90 days of actual performance data per area
c) Always −20% for anything over 10 km
d) Never use them

**3. Two areas 3 km away produce almost no patients. What is the likely cause?**
a) Tracking failure
b) Established local competitors and difficult road connections
c) Google is not showing ads there
d) The radius is too small

**4. Why did the high-value wide-radius campaign work?**
a) Implants are cheaper to advertise
b) People will travel much further for a high-value service than a cheap one
c) There is less competition further away
d) Google favours wider targeting

**5. How should store visit conversions be presented to a client?**
a) As counted transactions
b) Clearly labelled as modelled estimates
c) Not at all
d) As the primary success metric

---

## 💪 Practical Exercise (40 minutes)

Map the real catchment of one local business.

1. Export the postcodes or areas of the last 100–200 customers.
2. Plot them, or group them into a table by area with customer counts.
3. Compare against your current targeting. Which targeted areas produce nothing?
4. Find areas producing customers that fall outside your current targeting.
5. Design the tier structure with justified inclusions and exclusions.
6. Check whether different services have different catchments, and design accordingly.

---

## 🎯 Expert Challenge

Build a complete geographic strategy for a multi-location business.

- Map the real catchment of every location using customer data, and find where catchments overlap. Overlapping branches competing in the same auction is a common and expensive problem.
- Design the targeting structure that prevents branches bidding against each other, using exclusions or a single campaign with location extensions.
- Build the service-tier geographic model: which services justify which radius, based on value and willingness to travel.
- Design the performance analysis: cost per conversion by area, by service, over 12 months, controlling for seasonality.
- Build the expansion model: given the catchment pattern of existing branches, where would a new location have the strongest uncontested catchment? This turns your advertising data into a property decision, which is a much more valuable conversation to be part of.
- Finally, design the measurement for store visits if available, being clear about what is modelled and what is counted, so the client's expectations are correctly set from the start.

---

## ✅ Quiz Answers

1 — **b**. Roads, barriers and habits shape real travel, not geometry.
2 — **b**. From real performance data over a meaningful period.
3 — **b**. Local competition and access difficulty beat raw distance.
4 — **b**. Willingness to travel scales with the value of the purchase.
5 — **b**. Always labelled as modelled estimates.

---

**Next lesson:** 9.4 — App Campaigns: Getting Users Who Pay
