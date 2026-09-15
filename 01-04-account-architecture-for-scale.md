# Lesson 1.4 — How to Organise Your Campaigns

*Phase 1 · How Google Ads Works, and Setting It Up — Module 1 · How Google Ads Really Works*

---

## Quick Recap From Lesson 1.3

Your workspace is set up and you can see profit at a glance. Now we design the skeleton of the account itself.

---

## 🎯 What You Will Learn

- What each level of a Google Ads account actually controls
- Why splitting too much is now a mistake, not a best practice
- The four honest reasons to create a separate campaign
- A naming system you can still read in two years
- When to use an MCC, and how to set it up safely

---

## The Levels, and What Each One Controls

Google Ads has a fixed hierarchy. Understand what lives where, and half your confusion disappears.

```
MCC (Manager Account)
 └── Google Ads Account
      └── Campaign
           └── Ad Group  (Search, Display, Video)
           └── Asset Group (Performance Max)
                └── Keywords / Ads / Assets
```

Here is the part that actually matters:

| Level | What it controls |
|---|---|
| **MCC** | Access, billing across accounts, cross-account reporting |
| **Account** | Currency, timezone, conversion actions, shared audiences |
| **Campaign** | **Budget, bid strategy, locations, languages, networks, schedule** |
| **Ad group** | Keywords, match types, ads, audiences |
| **Asset group (PMax)** | Creative assets, audience signals, product listing groups |

**Memorise the campaign row.** Budget and bid strategy live at campaign level. This single fact drives almost every structural decision you will ever make.

---

## The Old Way Is Dead: Why You Should Stop Splitting

For years, the advice was to split everything. One keyword per ad group (SKAG). Separate ad groups for every match type. Twenty campaigns for one small business.

That made sense when *you* set the bids. Tight structure gave you tight control.

It is now actively harmful. Here is why:

**Smart Bidding learns from conversion data.** Split your account into 30 tiny campaigns and you split your data into 30 tiny pieces. Each piece is too small for the AI to learn from. Every campaign stays stuck in the learning phase forever.

**Think of teaching a child to recognise dogs.** Show them 200 photos of dogs and they learn quickly. Split those 200 photos across 30 different rooms, showing 6 or 7 in each, and they learn almost nothing in any room.

> **The modern rule: consolidate by default. Split only when you have a specific reason.**

---

## The Four Honest Reasons to Split

Create a separate campaign only when one of these is true.

### 1. You need separate budget control
The business says "spend no more than PKR 50,000 on the dental implant service". That needs its own campaign, because budget lives at campaign level.

### 2. You need a different bid strategy or target
Products with a 60% margin need a different tROAS target than products with a 20% margin. Different targets need different campaigns.

### 3. You need different settings
Different countries, different languages, different ad schedules, different networks.

### 4. Performance differs so much that mixing them harms results
Brand searches convert at 30%. Non-brand at 2%. Mixed together, the average misleads both you and the AI. Always separate brand from non-brand.

**If your reason is not on this list, do not split.** "It feels more organised" is not a reason. It is a data problem in disguise.

---

## Building Ad Groups: Intent Clusters

Inside a campaign, group keywords by **what the person wants**, not by exact wording.

**Wrong (old SKAG style):**
- Ad group 1: "water filter karachi"
- Ad group 2: "water filters karachi"
- Ad group 3: "buy water filter karachi"

Three ad groups, three tiny data sets, three sets of nearly identical ads. Pointless.

**Right (intent clusters):**
- Ad group 1 — *Buying intent:* buy water filter, water filter price, water filter online, order water filter
- Ad group 2 — *Local intent:* water filter karachi, water filter near me, water filter shop
- Ad group 3 — *Product type:* RO water filter, UV water purifier, gravity water filter
- Ad group 4 — *Problem intent:* remove bacteria from water, water tastes bad solution

Each cluster gets its own ads and its own landing page. Each has enough data to learn from.

**Practical guide:** aim for 3–6 ad groups per campaign, and 5–20 keywords per ad group. This is guidance, not law. Small accounts can run one ad group and be perfectly fine.

We build these properly in Lesson 3.5.

---

## Asset Groups in Performance Max

PMax does not use keywords or ad groups. It uses **asset groups**.

An asset group is a bundle of creative — headlines, descriptions, images, videos, logos — plus an audience signal, aimed at one theme.

**How to structure them:**

- One asset group per product category, or per customer type
- Not one giant asset group for everything — the AI cannot match creative to intent
- Not fifty tiny ones — they starve

**Example for Sana:**
- Asset group 1: Home water filters
- Asset group 2: Replacement cartridges
- Asset group 3: Commercial / office filters

Each with its own images, its own message, and its own product listing group from the feed.

⚠️ **A note about products in PMax:** you can also use **listing groups** to control which products appear in each asset group. This is how you build profit tiers. It is covered in Lesson 6.2.

---

## A Naming System You Will Thank Yourself For

Bad names cost you hours. Here is a system that scales.

**Campaign name format:**

```
[Type] | [Market] | [Theme] | [Match/Focus] | [Goal]
```

**Real examples:**

- `Search | PK-KHI | Brand | Exact | Sales`
- `Search | PK-National | Water Filters | Phrase | Sales`
- `PMax | PK-National | High Margin | Feed | ROAS`
- `Demand Gen | PK-National | Cold Video | Prospecting | Awareness`
- `Search | US | Dental Implants | Broad | Leads`

**Ad group name format:**

```
[Intent cluster] - [Detail]
```

Examples: `Buying Intent - Price`, `Local - Karachi`, `Problem - Bad Taste`

### Rules that make naming work

1. **Pick one separator and never change it.** The pipe `|` is easy to read and easy to filter.
2. **Put the most useful information first.** You will often see only the first 30 characters.
3. **Use the same country and city codes everywhere.** PK-KHI, PK-LHE, US, UK.
4. **Never use dates in names.** "Campaign_March2026" becomes confusing in April.
5. **Never use "Test" without a plan.** "Test 3 Copy Final" is how accounts become unmanageable.

---

## Labels: The Feature Nobody Uses

Labels let you tag campaigns, ad groups, keywords and ads with any word you like, then filter by it.

**Really useful labels:**

- `Profit-Tier-A`, `Profit-Tier-B`, `Profit-Tier-C`
- `Experiment-Q3`
- `Client-Approved`
- `Seasonal-Ramadan`
- `Do-Not-Pause`

Then filter your whole account by label and see performance for that group across campaigns. This is how you answer questions like "how did all our high-margin work perform?" in ten seconds.

---

## The MCC: Your Manager Account

An MCC (Manager Account) sits above multiple Google Ads accounts.

### When you need one

- You manage more than one account (clients, or multiple businesses)
- You want one login for everything
- You want cross-account reporting
- You want to share negative keyword lists and audiences across accounts
- You want to be visible to Google's partner team (Lesson 10.4)

### When you do not

- You run one business with one account. Then it just adds a step.

### MCC rules that prevent disasters

1. **The client owns their account. Always.** You link your MCC to their account, you do not create their account inside your MCC and keep it. If the relationship ends, they keep their data and history. Say this in your contract (Lesson 0.7).

2. **Never let a client's billing sit on your MCC** unless you have clearly agreed to that and understand the risk. You become responsible for the bill.

3. **Use access levels properly.** Not everyone needs admin. Give the minimum access needed. A junior who can delete conversion actions is a risk you created.

4. **Keep a structure inside the MCC.** Sub-manager accounts for different client types or regions keep things findable at 20+ accounts.

Full MCC operations, permissions and onboarding are in Lesson 10.1.

---

## 📖 Real-World Example: Rebuilding a Broken Account

Dr. Ayesha's clinic hired a freelancer before finding this course. Here is what the account looked like.

**Before: 23 campaigns.**

- One campaign per treatment (implants, whitening, braces, root canal, cleaning...)
- Each split again by match type: `Implants Exact`, `Implants Phrase`, `Implants Broad`
- Total monthly conversions across the account: **31**
- That is about 1.3 conversions per campaign per month

**Every single campaign was permanently stuck in the learning phase.** Smart Bidding never had enough data to learn anything. The AI was guessing, every day, forever.

Cost per booking: PKR 4,200.

**The rebuild took four hours.** New structure:

| Campaign | Why it exists |
|---|---|
| `Search \| PK-LHE \| Brand \| Exact \| Leads` | Brand always separates from non-brand |
| `Search \| PK-LHE \| High-Value Treatments \| Phrase+Broad \| Leads` | Implants, braces — high margin, own budget |
| `Search \| PK-LHE \| General Dental \| Phrase+Broad \| Leads` | Cleaning, checkups — lower value, own budget |
| `Search \| PK-LHE \| Emergency \| Phrase \| Leads` | Different schedule: 24/7, higher urgency |

Four campaigns. Inside `High-Value Treatments`, four ad groups by intent cluster: `Implants - Cost`, `Implants - Local`, `Braces - Cost`, `Braces - Local`.

Now the numbers per campaign:
- Brand: 9 conversions/month
- High-Value: 12
- General: 8
- Emergency: 6

Still small. But **High-Value now had enough signal to leave the learning phase**, and it was the campaign that mattered most.

**Results after 8 weeks:**

| Metric | Before | After |
|---|---|---|
| Campaigns | 23 | 4 |
| Cost per booking | PKR 4,200 | PKR 2,050 |
| Bookings/month | 31 | 47 |
| Time spent managing | ~6 hrs/week | ~1.5 hrs/week |

**Nothing was added.** No new keywords, no new budget, no new offer. She removed complexity, and the AI could finally learn.

*(Her cost per booking later fell to PKR 1,350 after the offer rebuild in Lesson 0.2. These two changes stacked.)*

---

## 📊 Mastery Score

**Level: Intermediate**

Structure is where beginners feel most uncertain. Learn the four splitting rules and you will never feel lost again.

---

## 📌 Key Takeaways

- Budget and bid strategy live at campaign level. That fact drives most structure decisions.
- Consolidate by default. Splitting divides your conversion data and starves Smart Bidding.
- Split only for: separate budget, different bid target, different settings, or very different performance.
- Always separate brand from non-brand.
- Name campaigns with a consistent format, and use labels for cross-campaign analysis.

---

## ☑️ Self-Assessment

1. How many conversions per month does each of your campaigns get? Any under 15?
2. Can you justify every campaign in your account using one of the four reasons?
3. Is your brand traffic separated from non-brand?
4. Could someone else understand your campaign names without asking you?
5. Do you have an MCC? Should you?

---

## 🧠 Quiz

**1. Which level controls the budget?**
a) Account
b) Campaign
c) Ad group
d) Keyword

**2. Why is splitting into many small campaigns now harmful?**
a) Google charges per campaign
b) It divides conversion data so Smart Bidding cannot learn
c) It slows the interface
d) It is against policy

**3. Which is a valid reason to create a separate campaign?**
a) It feels tidier
b) You want a different bid target for high-margin products
c) You have more than 10 keywords
d) The client asked for more campaigns

**4. What replaces ad groups in Performance Max?**
a) Keyword groups
b) Asset groups
c) Audience lists
d) Nothing

**5. Who should own the Google Ads account when an agency manages it?**
a) The agency
b) Google
c) The client
d) Whoever created it

---

## 💪 Practical Exercise (30 minutes)

Audit and redesign one account's structure on paper.

1. List every campaign with its monthly conversion count.
2. Mark every campaign getting fewer than 15 conversions per month.
3. For each campaign, write which of the four splitting reasons justifies it. If none, mark it "merge".
4. Draw the new structure with proper names using the format in this lesson.
5. Estimate: after merging, how many conversions would each new campaign get?

Do not make the changes yet. Design first, then build. Restructuring resets learning, so it must be planned, not improvised.

---

## 🎯 Expert Challenge

Design a structure that will still work at ten times the current spend.

- Build the campaign map for a business planning to expand from one city to five, and from one product line to three.
- Decide which dimension becomes the campaign split (geography, product, or margin tier) and defend the choice with the four-reason rule.
- Design the naming system, the label taxonomy, and the shared negative keyword list structure.
- Write the migration plan: what order you change things in, how you protect learning, and how you would prove afterwards whether the restructure helped or hurt. Include a control — something you on purpose do not change, so you have a comparison.
- Finally, write the rollback plan. If performance drops 30% in week two, what exactly do you do?

---

## ✅ Quiz Answers

1 — **b**. Campaign. This drives most structural decisions.
2 — **b**. Data dilution keeps every campaign in the learning phase.
3 — **b**. Different bid targets need different campaigns.
4 — **b**. Asset groups hold creative and audience signals in PMax.
5 — **c**. The client owns the account and the data. Always.

---

**Next lesson:** 1.5 — Avoid Getting Your Account Suspended
