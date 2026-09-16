# Lesson 8.0 — Reading Your GA4 Reports

*Phase 4 · Tracking and Reading Your Results — Module 8 · Reading Reports and Fixing Problems*

---

## Quick Recap From Lesson 7.6

You have built strong measurement. But there is a gap: you connected GA4 in Lesson 2.2 and never learned to read it. This lesson fixes that.

---

## 🎯 What You Will Learn

- The five GA4 reports worth your time, out of dozens
- How to see what ad traffic does after it lands
- Why GA4 and Google Ads never show the same numbers
- How to find the page that is quietly losing your money
- When to trust GA4, and when to trust Google Ads

---

## Why Bother With GA4 at All

Google Ads tells you what happened **up to the click**.

GA4 tells you what happened **after** it.

| Question | Answered by |
|---|---|
| Which keyword got the click? | Google Ads |
| How much did the click cost? | Google Ads |
| **What did they do on the site?** | **GA4** |
| **Which page did they leave from?** | **GA4** |
| **How long did they stay?** | **GA4** |
| **Did they come back later?** | **GA4** |
| **How does ad traffic compare to organic?** | **GA4** |

⚠️ **Most advertisers never open GA4.** They optimise the half of the journey they can see and stay blind to the half where the money is actually lost or won.

---

## First: Why the Numbers Never Match

**This confuses everyone, so deal with it before anything else.**

Google Ads says 180 conversions. GA4 says 143. Neither is broken.

### The five reasons

| Reason | What happens |
|---|---|
| **Different attribution** | Google Ads credits the ad click. GA4 may credit the last channel before the sale. |
| **Different timing** | Google Ads counts a conversion on the day of the **click**. GA4 counts it on the day of the **sale**. |
| **Different counting** | Google Ads can count several conversions per click. GA4 counts sessions differently. |
| **Modelled data** | Google Ads fills gaps with modelling (Lesson 7.5). GA4 models differently. |
| **Cross-device** | The two systems join devices together in different ways. |

### The rule

> **Use Google Ads numbers to make Google Ads decisions. Use GA4 to understand behaviour. Never try to make them match.**

⚠️ **A gap of 10–20% is normal.** A gap of 3x means something is genuinely broken — go to Lesson 2.5.

---

## The Five Reports Worth Your Time

GA4 has dozens of reports. These five do almost everything you need.

### 1. Traffic acquisition

**Reports → Acquisition → Traffic acquisition**

Shows where visitors came from, and what they did.

**What to look at:** find the row for `google / cpc` — that is your paid traffic. Compare it to `google / organic` and `(direct)`.

| What you see | What it tells you |
|---|---|
| Paid engagement rate much lower than organic | Your landing pages do not match the ad promise (Lesson 0.5) |
| Paid conversion rate much lower than organic | Traffic quality problem, or a page problem |
| Large `(direct)` share | Tagging problem — untagged channels hiding here (Lesson 11.5) |

⚠️ **If `(direct)` is over 20% of conversions, you have a tracking problem, not a direct-traffic success story.**

### 2. Landing page

**Reports → Engagement → Landing page**

Shows which page people arrived on, and what happened next.

**This is the most useful report in GA4 for an advertiser.**

| Column | What it tells you |
|---|---|
| Sessions | How many arrived here |
| Engagement rate | The share who did something meaningful |
| Average engagement time | How long they stayed |
| Conversions | How many converted |

**What to do:** sort by sessions, highest first. Look at the top ten pages your ads send people to.

**Then find the leak:** a page with many sessions and a low conversion rate is where your money is going.

### 3. Pages and screens

**Reports → Engagement → Pages and screens**

Every page, not just entry pages.

**Use it to find:** where people go after landing, and where they stop. If everyone visits your pricing page then leaves, your price is the problem — not your ads.

### 4. Conversions

**Reports → Engagement → Conversions** (or Key events, depending on your version)

Shows which conversion actions are firing, and how often.

**Use it to check:** that the events you set up in Lesson 2.4 are actually happening, and in sensible numbers.

⚠️ **If an event fires far more often than it should, it is probably firing on page load instead of on the action.** That is the Lesson 2.5 problem.

### 5. Explore (free-form)

**Explore → Blank**

Lets you build your own table. More flexible, more work.

**The one thing worth building here:** a table with **Landing page** as rows, and Sessions, Conversions and Conversion rate as columns, filtered to `google / cpc` only.

**That single table tells you which of your ad landing pages are working.**

---

## The One Analysis to Run Monthly

If you do nothing else in GA4, do this.

### Find the page that is losing your money

**Step 1.** Go to Reports → Engagement → Landing page.

**Step 2.** Add a filter for paid traffic only. Session source / medium = `google / cpc`.

**Step 3.** Sort by sessions, highest first.

**Step 4.** Build this table for your top 10 pages:

| Landing page | Sessions | Conv. rate | Your average |
|---|---|---|---|
| /gravity-filter | 2,140 | 4.8% | 3.1% ✅ |
| /ro-filter | 1,880 | 3.2% | 3.1% ✅ |
| **/products** | **1,640** | **0.9%** | 3.1% 🔴 |
| /cartridges | 920 | 6.1% | 3.1% ✅ |

**Step 5.** Any page well below your average is the leak.

### Working out what it costs you

```
The /products page:
  1,640 sessions at 0.9% = 15 conversions
  At your site average of 3.1% = 51 conversions

  36 conversions lost.
  At PKR 2,600 margin each = PKR 93,600 per month.
```

⚠️ **That number is what you take to the client or the developer.** "This page converts badly" gets ignored. "This page costs us PKR 93,600 a month" does not.

---

## Linking GA4 to Google Ads

You did this in Lesson 2.2. Here is what it gives you once it is working.

**Inside GA4:** you can see campaign, ad group and keyword alongside behaviour data.

**Inside Google Ads:** you can import GA4 audiences and, if you choose, GA4 conversions.

⚠️ **Be careful importing GA4 conversions into Google Ads.** You can easily end up counting the same sale twice — once from your Google Ads tag and once from the GA4 import. Lesson 2.4 covers this. **Pick one source per conversion and stick to it.**

---

## What GA4 Is Bad At

Being honest about the limits saves you from bad conclusions.

❌ **It cannot see impressions.** Only clicks. So it undervalues channels that work by being seen — YouTube, Display, Meta (Lesson 13.3).

❌ **It cannot see offline.** Phone calls, shop visits, anything that happens away from the site.

❌ **It is affected by consent choices.** If people decline tracking, GA4 sees less (Lesson 7.5).

❌ **Its default data retention is limited.** Often 14 months. For longer history you need the BigQuery export (Lesson 7.6).

❌ **It is not the truth about profit.** It knows revenue if you send it. It does not know your costs.

---

## 📖 Real-World Example: The Page Nobody Had Opened

TaskFlow had solid measurement by this point — offline conversions running, real contract values flowing back to Google (Lesson 7.2).

Their cost per paying customer was $112. Good.

But Bilal ran the monthly GA4 landing page analysis and found something nobody had looked at.

### What the report showed

Filtered to paid traffic, top landing pages by sessions:

| Landing page | Sessions | Conv. rate |
|---|---|---|
| /construction-software | 4,120 | 5.1% |
| /site-management | 2,890 | 4.4% |
| **/pricing** | **2,610** | **0.4%** |
| /demo | 1,740 | 11.2% |
| /compliance-tracking | 1,180 | 4.8% |

**The pricing page was receiving 2,610 paid sessions a month and converting at 0.4%.**

### Why it was getting traffic

Their keyword `construction software pricing` — a genuinely high-intent search — was pointing straight at the pricing page. That seemed sensible.

### What was actually happening

Bilal opened the page himself. Then he checked **Pages and screens** to see where those visitors went next.

**62% of them left the site entirely from that page.**

He looked at the page properly. It showed three plans, all priced **per user per month**, with a minimum of 25 users.

**Their ads were attracting small construction firms.** A 6-person company landed on that page, did the arithmetic, saw a minimum of 25 seats, and left.

### The finding underneath the finding

This was not a landing page problem. **It was a targeting problem the landing page had exposed.**

The keyword was bringing in firms too small to buy. The pricing page was just the first place they found out.

### What he changed

**1. Fixed the immediate leak.** Added a "Small teams" option to the pricing page — 5 to 24 users, at a lower entry price they had always been willing to offer but never listed.

**2. Fixed the cause.** Added negatives for small-team phrases, and built a separate campaign with its own messaging for firms under 25 people.

**3. Sent high-intent pricing traffic to a comparison page instead**, with pricing lower down after the value was explained.

### Results at 10 weeks

| Metric | Before | After |
|---|---|---|
| Sessions to /pricing (paid) | 2,610 | 1,340 |
| Pricing page conv. rate | 0.4% | **6.8%** |
| Monthly spend | $19,600 | $19,400 |
| **Paying customers** | 175 | **241** |
| **Cost per customer** | **$112** | **$80** |

### Why this could only be found in GA4

⚠️ **Google Ads showed nothing wrong.** The keyword had good volume, reasonable CPC, acceptable click-through rate. By every Google Ads measure it was a decent keyword.

**The failure happened after the click**, and Google Ads cannot see after the click.

**The whole discovery took twenty minutes** in a report nobody on the team had ever opened.

---

## 📊 Mastery Score

**Level: Foundational**

GA4 looks complicated and mostly is not. Five reports cover almost everything an advertiser needs.

---

## 📌 Key Takeaways

- Google Ads shows what happened up to the click. GA4 shows what happened after it.
- The numbers will never match. Use Google Ads for ad decisions, GA4 for behaviour. Do not try to reconcile them.
- The landing page report, filtered to paid traffic, is the most useful screen in GA4 for an advertiser.
- Convert a low conversion rate into a monthly money figure before you report it. "This page costs PKR 93,600 a month" gets acted on; "this page converts badly" does not.
- GA4 cannot see impressions, offline activity, or your costs. Know what it is blind to.

---

## ☑️ Self-Assessment

1. When did you last open GA4 for an account you manage?
2. Can you filter a report to paid traffic only?
3. Do you know which of your landing pages has the worst conversion rate?
4. What share of your conversions show as `(direct)`? Is it over 20%?
5. Are you importing GA4 conversions into Google Ads as well as using your own tag? Check for double counting.

---

## 🧠 Quiz

**1. Google Ads says 180 conversions, GA4 says 143. What is wrong?**
a) The tracking is broken
b) Nothing — they count differently, and a 10–20% gap is normal
c) GA4 is more accurate
d) Google Ads is more accurate

**2. Which GA4 report is most useful for an advertiser?**
a) Demographics
b) Landing page, filtered to paid traffic
c) Real-time
d) Tech details

**3. Over 20% of your conversions show as `(direct)`. What does that suggest?**
a) Great brand awareness
b) A tagging problem — untagged channels are hiding there
c) Nothing unusual
d) GA4 is broken

**4. What can GA4 not see?**
a) Landing pages
b) Impressions, offline activity, and your costs
c) Traffic sources
d) Conversions

**5. TaskFlow's pricing page converted at 0.4%. What was the real cause?**
a) The page design was poor
b) Their keyword was attracting firms too small to afford the minimum plan
c) The page loaded slowly
d) The price was too high for everyone

---

## 💪 Practical Exercise (35 minutes)

Find the leak.

1. Open GA4 → Reports → Engagement → Landing page.
2. Add a filter: Session source / medium = `google / cpc`.
3. Sort by sessions, highest first. Take the top 10.
4. Write down each page's conversion rate, and work out the average across all of them.
5. Mark any page well below that average.
6. For the worst one, calculate the money: (sessions × average rate) − actual conversions, multiplied by your margin per conversion.
7. Write that number down. **That is your next project.**

---

## 🎯 Expert Challenge

Build a monthly behaviour review that finds problems Google Ads cannot show.

- Build the paid-traffic landing page table as a saved Explore report, so it takes one click each month rather than rebuilding.
- Add the step after the leak: for every underperforming page, use Pages and screens to find where those visitors went next. **The exit page usually tells you the real problem**, as TaskFlow's pricing page did.
- Build the channel comparison: paid versus organic versus direct, on engagement rate and conversion rate. A large gap between paid and organic on the same pages means the traffic quality differs, not the page.
- Design the `(direct)` audit: if direct conversions exceed 20%, trace which channels are untagged using Lesson 11.5's tagging standard.
- Then connect the two systems properly: take the worst-performing landing page, find which campaigns and keywords send traffic there, and decide whether the fix is the page or the targeting. **TaskFlow's answer was targeting, and most people would have rebuilt the page instead.**

**The skill here is not reading GA4. It is knowing whether what you found is a page problem or a traffic problem** — because those have completely different fixes, and guessing wrong costs you a month.

---

## ✅ Quiz Answers

1 — **b**. They count differently. A 10–20% gap is expected.
2 — **b**. Landing page, filtered to paid traffic.
3 — **b**. A tagging problem hiding real sources.
4 — **b**. Impressions, offline activity and your costs.
5 — **b**. The targeting was wrong; the page merely revealed it.

---

**Next lesson:** 8.1 — Can You Grow? Reading Impression Share
