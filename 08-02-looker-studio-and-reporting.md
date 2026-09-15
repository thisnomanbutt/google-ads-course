# Lesson 8.2 — Build Reports Your Client Will Actually Read

*Phase 4 · Tracking and Reading Your Results — Module 8 · Reading Reports and Fixing Problems*

---

## Quick Recap From Lesson 8.1

You can diagnose whether an account can grow. Now we build the report that communicates it — to a client who has 90 seconds and does not care about impression share.

---

## 🎯 What You Will Learn

- Why most agency reports are worthless
- The four-layer report structure that actually works
- How to build a Looker Studio dashboard properly
- Connecting BigQuery without generating huge costs
- The reporting habits that keep clients

---

## Why Most Reports Fail

Here is a typical agency report:

> **Impressions:** 412,000 (+12%)
> **Clicks:** 8,240 (+8%)
> **CTR:** 2.0%
> **Average CPC:** $2.14
> **Conversions:** 184 (+4%)
> **Cost per conversion:** $95.80

Every number is accurate. The report is nearly useless.

**Three reasons:**

1. **It answers questions the client did not ask.** They do not care about impressions.
2. **It does not say whether this is good.** Is $95.80 good? Compared to what?
3. **It contains no decision.** What should the client do differently on Monday?

**Think of a doctor showing you your blood test results as a list of numbers with no explanation.** All accurate. All meaningless without interpretation. You wanted to know whether you are healthy and what to do about it.

---

## What Clients Actually Want to Know

Three questions, in this order:

1. **Did we make money?**
2. **Is it getting better or worse?**
3. **What are you doing about it?**

**Every report should answer these three questions in the first ten seconds.** Everything else is supporting detail.

---

## The Four-Layer Report Structure

### Layer 1: The Headline (10 seconds)

Three or four numbers, large, with the comparison and a clear direction.

```
PROFIT FROM ADS THIS MONTH        NEW CUSTOMERS
PKR 341,000                       118
▲ 24% vs last month               ▲ 12% vs last month

COST PER CUSTOMER                 RETURN ON AD SPEND
PKR 1,405                         5.6x
▼ 9% vs last month  ✅            ▲ 0.4 vs last month
```

**Note what is here:** profit, customers, cost per customer, return. **Note what is not:** impressions, clicks, CTR.

⚠️ **Colour matters.** A falling cost per customer is good, so it should be green even though the arrow points down. Getting this wrong confuses clients badly.

### Layer 2: The Trend (30 seconds)

A simple line chart, 12 months where possible. One or two lines maximum.

Trend beats a single month. A client seeing six months of steady improvement stays calm during one bad week.

### Layer 3: The Breakdown (2 minutes)

Where the money went and what it produced. By campaign, or by channel.

Sorted by **profit**, not by spend (Lesson 1.3).

### Layer 4: The Narrative (the part that matters most)

Written words. Three short sections:

**What happened**
> "Cost per customer fell 9% because we excluded nine low-margin products from Shopping and moved that budget to the high-margin campaign."

**What we are doing next**
> "Next month we are raising the Search - Core budget by 30%. It is losing 24% of impressions to budget and running under target, so this is profitable growth."

**What we need from you**
> "We need updated product cost figures by the 15th so the profit tiers stay accurate."

**This section is why clients keep you.** The numbers show what happened. The narrative shows you are thinking.

---

## Custom Reports Inside Google Ads

Before building dashboards, use what is already there.

### The Report Editor

**Where:** Campaigns → Insights and reports → **Report editor**

Build custom tables and charts, save them, and schedule email delivery.

**Really useful reports to build:**

| Report | Rows | Columns |
|---|---|---|
| Profit by campaign | Campaign | Cost, conversions, conv value, Gross Profit (custom column) |
| Scaling opportunities | Campaign | Cost, CPA, IS, Lost IS budget, Lost IS rank |
| Quality diagnosis | Keyword | Cost, QS, Exp CTR, Ad relevance, LP experience |
| Search term mining | Search term | Cost, conversions, cost/conv |
| Asset performance | Asset | Impressions, performance rating |
| Geographic performance | Location (user) | Cost, conversions, cost/conv |

### Scheduled emails

Any saved report can be emailed on a schedule.

**Use it for:** your own weekly discipline — a Monday morning email of the search terms report is a useful prompt to do the work in Lesson 3.4.

⚠️ **Do not simply forward these to clients.** A raw data table is not a report. It is a table.

---

## Looker Studio: Building It Properly

Looker Studio (formerly Data Studio) is free and connects to Google Ads, GA4, Sheets and BigQuery.

### The build process

**Step 1: Decide the audience first.**

| Audience | What they need |
|---|---|
| Business owner | Profit, customers, trend. One page. |
| Marketing manager | Channel breakdown, campaign performance, tests running |
| You | Everything: diagnostics, search terms, quality, impression share |

**Build separate dashboards.** A single dashboard serving all three serves none of them.

**Step 2: Connect the data source.**

Google Ads connector → select account. GA4 connector → select property.

⚠️ **Blending Google Ads and GA4 data is possible but produces confusing results**, because they count conversions differently (Lesson 2.2). Keep them on separate pages, clearly labelled.

**Step 3: Build calculated fields.**

This is where Looker Studio becomes powerful. Create your own metrics:

```
Gross Profit    = Conversion value * 0.35 - Cost
POAS            = (Conversion value * 0.35) / Cost
Real CPA        = Cost / Conversions
Profit Margin % = (Conversion value * 0.35 - Cost) / Conversion value
```

Replace 0.35 with the real margin (Lesson 0.3), and use a **parameter** so it can be changed without editing every field.

**Step 4: Design the page.**

- **One page per audience.** Never make the owner scroll past your diagnostics.
- **Scorecards at the top** with comparison to the previous period.
- **One trend chart**, not five.
- **A table below**, sorted by profit.
- **A text box for the narrative.** Update it every month by hand. This is the most valuable element on the page.

**Step 5: Add date controls and filters.**

A date range control at the top. A campaign filter if useful. Do not add ten filters — most clients will never touch them.

---

## Design Rules That Actually Matter

**1. Fewer charts, larger.** Six well-chosen charts beat twenty small ones.

**2. Comparison always.** A number without a comparison means nothing. Always show "vs previous period" or "vs last year".

**3. Consistent colour.** Pick one colour for good, one for bad. Use them everywhere and never swap them.

**4. Label everything in plain words.** Not "Conv. value / cost" — write "Return on ad spend".

**5. Remove every chart nobody looks at.** After three months, ask the client which sections they read. Delete the rest.

**6. Mobile check.** Many clients open reports on a phone. Look at it on one.

**7. No jargon in a client-facing report.** "Impression share lost to rank" means nothing to a business owner. Write "we are losing visibility because our ads rank below competitors".

---

## Connecting BigQuery Without Large Bills

From Lesson 7.6: **a Looker Studio dashboard connected to raw BigQuery tables re-queries them every time someone opens it.**

A dashboard opened 40 times a day scanning 20 GB each time is scanning 800 GB per day.

### The correct pattern

```
Raw BigQuery tables
        ↓
Scheduled query (runs once daily)
        ↓
Small summary table (a few thousand rows)
        ↓
Looker Studio reads THIS
```

### Building the summary table

**Step 1.** Write a query that aggregates exactly what your dashboard needs — daily totals by campaign, for example.

**Step 2.** In BigQuery, choose **Schedule query**. Set it to run daily, writing to a summary table with "overwrite" or "append".

**Step 3.** Point Looker Studio at the summary table.

**Result:** dashboard queries scan kilobytes instead of gigabytes. Loading is faster and costs drop to near zero.

### Also use extract data

Looker Studio's **Extract Data** connector takes a snapshot of your data on a schedule and stores it in Looker Studio itself. Even faster, and it eliminates the query cost entirely for data that does not need to be live.

**Good for:** dashboards where yesterday's data is fine. Which is most of them.

---

## The Reporting Cadence

| Frequency | Audience | Content |
|---|---|---|
| **Daily** | You only | Alerts and anomalies, not a report |
| **Weekly** | You, and the marketing manager if they want it | Search terms, spend pacing, tests |
| **Monthly** | The client | The four-layer report, with narrative |
| **Quarterly** | The client and their leadership | Strategy review, cohort analysis, next quarter plan |

⚠️ **Do not send daily or weekly reports to a business owner.** Daily numbers are noise. You will train them to react to randomness, and then they will interfere with your learning phases (Lesson 5.2).

**Send the monthly report on the same day each month**, without being asked. Reliability is a large part of perceived competence.

---

## 📖 Real-World Example: The Report That Saved an Account

Bilal was three months into a client relationship and it was going badly.

The client called every few days. *"Conversions were down yesterday."* *"Why did cost per click go up on Tuesday?"* *"My competitor is showing above me right now."*

Bilal was spending more time answering panicked messages than working on the account. And because the client kept asking for changes, campaigns were never allowed to settle.

**The root cause was his reporting.** He had given the client access to the raw Google Ads interface and sent a weekly spreadsheet with 40 columns.

The client was drowning in numbers and had no way to tell signal from noise.

### What he built

**He removed the client's daily access to the raw interface** — a difficult conversation, framed as: *"I want to give you something better than this."*

**He built three things:**

**1. A one-page monthly dashboard.**

Top row, four scorecards: Profit from ads, New customers, Cost per customer, Return on ad spend. Each with a comparison to the previous month and to the same month last year.

Middle: one 12-month trend line for profit.

Below: a table of campaigns sorted by profit, with only five columns.

Bottom: a large text box with the narrative, written by hand each month.

**2. An automated alert system.**

Rather than the client noticing problems, Bilal set up automated rules and a script (Lesson 11.2) that alerted **him** to genuine anomalies — a conversion drop over 40%, spend pacing off by more than 25%, disapproved ads.

**3. A monthly 20-minute call**, on the same date each month, to walk through the narrative.

### The conversation that changed things

He explained it in these terms:

> *"Daily numbers are like checking your weight every hour. It moves constantly and none of it means anything. The scale that matters is monthly. I watch the daily numbers so you do not have to — and if something really breaks, I will call you within a day, not wait for the report."*

The client agreed to try it for three months.

### What happened

| | Before | After 6 months |
|---|---|---|
| Client messages per week | 9 | 1 |
| Bilal's hours on the account | 14/week | 6/week |
| Changes made per month | 31 | 7 |
| Campaigns in learning phase | 4 of 6 | 0 of 6 |
| Cost per customer | $118 | **$71** |

**Read the last two rows together.** Because the client stopped demanding changes, campaigns finally completed their learning phases (Lesson 5.2). That alone drove most of the improvement.

**The reporting change improved performance more than any optimisation Bilal made.**

### The other effect

He was spending 8 fewer hours a week on this client. He used the time to take on a second client at the same fee.

**Better reporting doubled his income from the same effort.**

### The narrative section

The client later said the text box was the part they actually read. A typical entry:

> **What happened this month.** Profit rose 24%. The main driver was excluding nine low-margin products from Shopping — those products were selling well but losing money on every sale.
>
> **What we are doing next.** Raising the Search budget by 30%. We are currently missing about a quarter of the searches we could appear for, purely because the budget runs out. Those searches are profitable, so this is straightforward growth.
>
> **What we need from you.** Updated product costs by the 15th. Our profit calculations use figures from March and your supplier prices have changed.

**Three short paragraphs. No jargon. One clear ask.**

---

## 📊 Mastery Score

**Level: Intermediate**

Reporting is not technical difficulty. It is empathy — understanding what the reader needs and removing everything else.

---

## 📌 Key Takeaways

- Clients want three answers: did we make money, is it improving, and what are you doing about it.
- Use the four layers: headline, trend, breakdown, narrative. The narrative is why they keep you.
- Build separate dashboards for separate audiences. One dashboard for everyone serves nobody.
- Never point Looker Studio at raw BigQuery tables. Use scheduled summary tables.
- Do not send daily numbers to business owners. It trains them to react to noise and interfere with learning phases.

---

## ☑️ Self-Assessment

1. Does your current report answer "did we make money" in the first ten seconds?
2. Do you write a narrative, or only send numbers?
3. Do your clients have daily access to raw data? Is that helping anyone?
4. Is your Looker Studio dashboard connected to raw tables or summary tables?
5. Do you send the monthly report on the same date every month, unprompted?

---

## 🧠 Quiz

**1. What should be in the first ten seconds of a client report?**
a) Impressions and clicks
b) Profit, customers, cost per customer, with comparisons
c) A list of every campaign
d) Quality Score data

**2. What is the most valuable part of a report?**
a) The charts
b) The written narrative explaining what happened and what is next
c) The data table
d) The date filter

**3. Why should you not connect Looker Studio directly to raw BigQuery tables?**
a) It is not supported
b) Every dashboard view re-queries the raw data, generating large costs
c) It is slower to build
d) The data is wrong

**4. Why should business owners not receive daily reports?**
a) It takes too long to produce
b) Daily numbers are noise, and reacting to them causes interference with learning phases
c) They would not understand
d) Google restricts it

**5. Bilal's cost per customer fell from $118 to $71 mainly because of what?**
a) A new bid strategy
b) The client stopped demanding changes, so campaigns completed learning
c) A budget increase
d) New keywords

---

## 💪 Practical Exercise (45 minutes)

Rebuild one report properly.

1. Write down the three questions your client actually cares about.
2. Choose four headline metrics. If any of them are impressions, clicks or CTR, choose again.
3. Build a Looker Studio page with those four as scorecards, with period comparison.
4. Add one 12-month trend chart.
5. Add a table sorted by profit, with a maximum of five columns.
6. Write the narrative section for last month, in three short paragraphs with no jargon.
7. Open it on a phone and check it is readable.

---

## 🎯 Expert Challenge

Design a complete reporting system for an agency.

- Build the audience map: every stakeholder type across your clients, what decision each one makes, and what information that decision needs. Design one dashboard per decision, not per client.
- Build the templated dashboard so a new client can be onboarded in under an hour, with a parameter for their margin so profit calculations work immediately.
- Design the BigQuery summary layer: which aggregations are needed, the scheduled query design, and the cost model.
- Build the alerting layer that replaces client vigilance: which anomalies you detect, how fast, and what your response commitment is. Then tell clients about it clearly — it is the thing that lets them stop watching.
- Write the narrative template with prompts, so that even on a busy month the narrative section is thoughtful rather than skipped.
- Finally, measure the reporting itself: track client message volume, meeting length and retention before and after. Better reporting is a business improvement, not just a cosmetic one, and you should be able to prove it.

---

## ✅ Quiz Answers

1 — **b**. Money, customers, efficiency, with comparison.
2 — **b**. The narrative. It shows you are thinking, not just measuring.
3 — **b**. Each view re-queries and re-scans, generating cost.
4 — **b**. Daily numbers are noise and provoke damaging interference.
5 — **b**. Stability let Smart Bidding finish learning.

---

**Next lesson:** 8.3 — What to Do When You Have Too Few Sales
