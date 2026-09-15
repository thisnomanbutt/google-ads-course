# Lesson 7.6 — Keep Your Own Data With BigQuery

*Phase 4 · Tracking and Reading Your Results — Module 7 · Advanced Tracking That Sees Everything*

---

## Quick Recap From Module 7

You have built accurate, privacy-compliant measurement. This lesson is about **keeping** that data — permanently, in raw form, under your control.

---

## 🎯 What You Will Learn

- What BigQuery is, in plain words
- The four real reasons to use it
- How to set up the GA4 export and the Google Ads Data Transfer
- How to control costs, which is the part people get wrong
- Queries you can actually use, without being a data engineer

---

## What BigQuery Is

BigQuery is Google's data warehouse. Think of it as **an enormous spreadsheet in the cloud that can hold billions of rows and answer questions about them in seconds.**

You put data in. You ask questions using SQL. You get answers.

**Think of the difference between a shop's till receipts and its accounts.** The till shows today's transactions. The accounts hold every transaction ever, in a form you can analyse any way you like. GA4's interface is the till. BigQuery is the accounts.

---

## The Four Real Reasons

### 1. You keep your raw data forever

**GA4's standard data retention is limited** — commonly 14 months for user-level and event-level data. After that, detailed data is gone.

**BigQuery keeps everything, permanently.** Three years from now, you can still analyse what happened this month.

For a business making decisions across years and seasons, this alone justifies it.

### 2. No sampling, no thresholding

GA4's interface applies sampling to large or complex queries, and **data thresholding** — hiding rows where user counts are small enough to risk finding someone.

You will see "(other)" rows and missing detail. In BigQuery, you have the raw event data.

### 3. You can join data Google cannot see

This is the big one.

| Data source | What it adds |
|---|---|
| GA4 events | Website behaviour |
| Google Ads | Cost, impressions, clicks |
| Your CRM | Which leads became customers |
| Your order system | Real revenue, real margins, refunds |
| Meta / TikTok | Cross-channel spend |

**Joined together, you can answer questions no single platform can.** For example: *"What is the true profit per keyword, after refunds, by customer cohort?"*

No dashboard in Google Ads will ever tell you that.

### 4. Custom attribution and modelling

Once you own the raw event stream, you can build your own attribution model rather than accepting Google's. This underpins Lessons 13.3 and 12.4.

---

## When It Is Worth It

✅ **Yes, if:**
- Monthly ad spend above roughly $10,000
- You need data older than 14 months
- You want to join Google data with CRM or order data
- You produce reports for a client or a board and need reliable, unsampled numbers
- Someone on the team can write basic SQL, or will learn

❌ **Not yet, if:**
- Small spend where the GA4 interface answers your questions
- Nobody can write or keep SQL
- Your basic tracking is not validated yet (Lesson 2.5)
- You have not set up Enhanced Conversions or offline conversions — do those first

⚠️ **Order matters again.** BigQuery makes your data analysable. It does not make bad data good. Fix measurement first.

---

## Setting Up the GA4 Export

This is straightforward and the export itself is free.

### Steps

1. **Create a Google Cloud project.** console.cloud.google.com → New Project. Give it a clear name.
2. **Enable billing** on the project. You will use the free tier, but billing must be enabled.
3. **Enable the BigQuery API.**
4. In **GA4 → Admin → BigQuery links → Link.**
5. Select your Cloud project.
6. Choose the **data location** — pick a region near you, or one that matches your data residency what you need.
7. Choose the export type:
   - **Daily** — one complete table per day, arriving next day. Free.
   - **Streaming** — near real-time. Costs a small amount per gigabyte.
8. Select the events to export. **Export all events** unless you have a specific reason not to.
9. Save.

**Data begins arriving the next day.** It is not backdated — another reason to set this up before you need it, exactly as in Lesson 2.6.

### What you get

A dataset called `analytics_XXXXXXXXX` containing:
- `events_YYYYMMDD` — one table per day, one row per event
- `events_intraday_YYYYMMDD` — if streaming is enabled

Each row contains the event name, timestamp, user identifiers, traffic source, device, geography, and a nested set of event parameters.

---

## Setting Up the Google Ads Data Transfer

This brings your Google Ads performance data into the same place.

### Steps

1. In BigQuery, go to **Data transfers → Create transfer**
2. Source: **Google Ads**
3. Set the schedule — daily is standard
4. Choose or create a destination dataset
5. Enter your **Customer ID** (your Google Ads account or MCC ID)
6. Authorise
7. Configure the **refresh window** — how many past days to re-import each run. 7 days is a sensible default, because conversions arrive late.

⚠️ **The refresh window matters.** Conversions can be attributed days after the click. Without a refresh window, your historical numbers in BigQuery will be permanently lower than reality.

### What you get

Dozens of tables covering campaigns, ad groups, keywords, ads, geographic performance, conversion actions and more.

**Note:** the Data Transfer service itself may carry a cost depending on your setup and volume. Check current pricing before enabling on a large MCC.

---

## Controlling Costs

This is where people get unpleasant surprises. BigQuery has two costs.

### Cost 1: Storage

You pay per gigabyte stored per month. This is usually **small** — most small and medium businesses store a few gigabytes.

**Control it:**
- Set a **table expiration** on datasets you do not need forever
- Long-term storage (untouched for 90 days) is automatically cheaper

### Cost 2: Query processing

**You pay for the data your query scans, not the data it returns.**

This is the very important point, and it catches everyone out.

```sql
-- BAD: scans every column of every table, every time
SELECT * FROM `project.analytics_123456.events_*`
```

This query might scan hundreds of gigabytes and return a result you did not need.

```sql
-- GOOD: scans only the columns and dates you need
SELECT event_name, event_timestamp
FROM `project.analytics_123456.events_*`
WHERE _TABLE_SUFFIX BETWEEN '20260901' AND '20260930'
```

### The five cost rules

1. **Never use `SELECT *`.** Name the columns you need.
2. **Always filter by date** using `_TABLE_SUFFIX` on wildcard tables. This is the single biggest saving.
3. **Use the query validator.** Before running, BigQuery shows how much data the query will process. Look at it every time.
4. **Set a custom quota.** Cloud Console → IAM & Admin → Quotas → set a daily query limit. This prevents one bad query from producing a large bill.
5. **Set a budget alert.** Billing → Budgets & alerts. Do this on day one.

### The free tier

BigQuery includes a monthly free allowance for storage and query processing. **Many small accounts stay entirely within it.**

⚠️ **A single careless `SELECT *` across two years of event data can exhaust a month's free tier in one query.** Rules 1 and 2 are what keep you free.

---

## Queries You Can Actually Use

You do not need to be a data engineer. Here are four really useful queries.

### 1. Daily conversions by traffic source

```sql
SELECT
  PARSE_DATE('%Y%m%d', event_date) AS date,
  traffic_source.source AS source,
  traffic_source.medium AS medium,
  COUNT(*) AS conversions
FROM `your-project.analytics_123456.events_*`
WHERE _TABLE_SUFFIX BETWEEN '20260801' AND '20260831'
  AND event_name = 'purchase'
GROUP BY date, source, medium
ORDER BY date DESC, conversions DESC
```

### 2. Revenue by landing page

```sql
SELECT
  (SELECT value.string_value FROM UNNEST(event_params)
   WHERE key = 'page_location') AS landing_page,
  COUNT(*) AS purchases,
  SUM((SELECT value.double_value FROM UNNEST(event_params)
       WHERE key = 'value')) AS revenue
FROM `your-project.analytics_123456.events_*`
WHERE _TABLE_SUFFIX BETWEEN '20260801' AND '20260831'
  AND event_name = 'purchase'
GROUP BY landing_page
ORDER BY revenue DESC
LIMIT 50
```

### 3. Days from first visit to purchase

Useful for setting your attribution window (Lesson 2.3) and your offline upload window (Lesson 2.6).

```sql
WITH first_visit AS (
  SELECT user_pseudo_id, MIN(event_timestamp) AS first_ts
  FROM `your-project.analytics_123456.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '20260601' AND '20260831'
  GROUP BY user_pseudo_id
),
purchases AS (
  SELECT user_pseudo_id, MIN(event_timestamp) AS purchase_ts
  FROM `your-project.analytics_123456.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '20260601' AND '20260831'
    AND event_name = 'purchase'
  GROUP BY user_pseudo_id
)
SELECT
  DIV(p.purchase_ts - f.first_ts, 86400000000) AS days_to_purchase,
  COUNT(*) AS users
FROM first_visit f
JOIN purchases p USING (user_pseudo_id)
GROUP BY days_to_purchase
ORDER BY days_to_purchase
```

### 4. True profit per campaign

This joins Google Ads cost with your own margin data — the query that justifies the whole pipeline.

```sql
SELECT
  c.campaign_name,
  SUM(cs.metrics_cost_micros) / 1000000 AS cost,
  SUM(cs.metrics_conversions) AS conversions,
  SUM(cs.metrics_conversions_value) AS revenue,
  SUM(cs.metrics_conversions_value) * 0.35 AS gross_profit,
  (SUM(cs.metrics_conversions_value) * 0.35)
    - (SUM(cs.metrics_cost_micros) / 1000000) AS net_profit
FROM `your-project.google_ads.ads_CampaignBasicStats_1234567890` cs
JOIN `your-project.google_ads.ads_Campaign_1234567890` c
  ON cs.campaign_id = c.campaign_id
WHERE cs._DATA_DATE BETWEEN '2026-08-01' AND '2026-08-31'
GROUP BY c.campaign_name
ORDER BY net_profit DESC
```

⚠️ **Table names vary** by your account ID and transfer configuration. Check the actual names in your dataset before running. Replace `0.35` with your real margin (Lesson 0.3).

---

## Connecting to Looker Studio

Once your data is in BigQuery, connecting it to Looker Studio gives you dashboards on your own data.

**Steps:** Looker Studio → Create → Data source → BigQuery → select your project, dataset and table.

⚠️ **Cost warning:** a Looker Studio dashboard connected directly to raw event tables re-queries BigQuery every time someone opens it. A dashboard viewed 50 times a day can generate 50 large queries.

**The fix:** build a **summary table** — a scheduled query that aggregates your raw data into a small daily table — and point Looker Studio at that instead. Costs drop dramatically and dashboards load faster.

This is covered further in Lesson 8.2.

---

## 📖 Real-World Example: The Question Nobody Could Answer

Sana's business had grown to PKR 900,000 monthly ad spend across Search, Shopping, PMax and Demand Gen.

Her accountant asked a reasonable question: *"Which advertising actually produced customers who are still buying a year later?"*

**Nobody could answer it.**

- Google Ads showed conversions attributed within a 30-day window
- GA4 had deleted user-level data older than 14 months
- Her order system knew repeat purchases but not which ad brought the customer
- Nothing connected them

### What she built

**Month 1: The pipeline.**
- GA4 → BigQuery daily export
- Google Ads Data Transfer with a 7-day refresh window
- A daily upload from her order system: order ID, customer ID, date, revenue, cost of goods, refund status
- A join key: her checkout wrote the GA4 `user_pseudo_id` and the GCLID into every order record

That last step took her developer two days and was the piece that made everything else possible.

**Month 2: The cohort query.**

She built a query answering: for customers acquired in a given month, through a given campaign, what was their total margin over the following twelve months?

### What the data showed

| Acquisition campaign | Customers | CAC | First-order margin | **12-month margin** | **True LTV:CAC** |
|---|---|---|---|---|---|
| Search - Brand | 412 | PKR 320 | PKR 2,610 | PKR 8,940 | **27.9** |
| Search - Problem/No Electricity | 388 | PKR 361 | PKR 2,580 | PKR 9,210 | **25.5** |
| Shopping - High Margin | 941 | PKR 1,450 | PKR 2,640 | PKR 6,120 | **4.2** |
| PMax - Controlled | 604 | PKR 1,600 | PKR 2,590 | PKR 5,880 | **3.7** |
| Demand Gen - Lookalike | 217 | PKR 2,140 | PKR 2,610 | **PKR 11,430** | **5.3** |
| Search - Comparison Terms | 331 | PKR 2,890 | PKR 2,570 | **PKR 3,110** | **1.1** |

Two findings changed her strategy completely.

**Finding 1: Demand Gen customers were her most valuable.**

On first-order metrics, Demand Gen looked mediocre — CAC of PKR 2,140 against a PKR 2,600 margin. Barely profitable. She had been considering cutting it.

Over twelve months, those customers produced PKR 11,430 in margin — **31% more than any other channel.**

Why? Demand Gen reached people who had not been actively shopping. They were not comparing prices; they discovered a solution to a problem. Those customers stayed loyal and bought cartridges regularly.

Price-driven Search customers, by contrast, had come looking for a deal — and left for the next deal.

**Finding 2: Comparison-term Search customers were nearly worthless.**

"Best water filter pakistan", "ro vs uv" — these had looked acceptable on a first-order basis. Over twelve months, their LTV:CAC ratio was **1.1**. Basically breakeven, before any overheads.

These were serial comparers. They bought once, then compared again next time.

### What she changed

- **Demand Gen budget increased 3×**, judged on 12-month cohort margin rather than first-order ROAS
- **Comparison-term keywords moved to a separate campaign** with a much tighter target, and eventually reduced by 70%
- **Cartridge cross-sell campaigns** built specifically for Demand Gen-acquired customers, who had the highest repeat rate
- Her **max CAC by channel** was rebuilt using true 12-month margin instead of one flat figure

### The result at 12 months

| | Before | After |
|---|---|---|
| Monthly ad spend | PKR 900,000 | PKR 940,000 |
| New customers/month | 489 | 462 |
| First-order margin | PKR 1,271,000 | PKR 1,205,000 |
| **12-month cohort margin** | **PKR 3,180,000** | **PKR 4,690,000** |

**Fewer customers. Lower first-order margin. 47% more long-term profit.**

Every metric visible in Google Ads got slightly worse. The business got a lot better.

**None of this was visible without joining the data.** The answer needed Google Ads cost, GA4 behaviour and her order system's twelve-month history in one place.

---

## 📊 Mastery Score

**Level: Master**

Owning and joining your own data is where the top 1% operate. It changes the questions you are able to ask.

---

## 📌 Key Takeaways

- BigQuery keeps your raw data permanently, unsampled, and lets you join it with data Google cannot see.
- Set up the GA4 export today. It is free and it is not backdated.
- Set a refresh window on the Google Ads Data Transfer, because conversions arrive late.
- You pay for data scanned, not returned. Never use `SELECT *`, and always filter by date.
- Point Looker Studio at summary tables, not raw event tables, or dashboard views will generate large query costs.

---

## ☑️ Self-Assessment

1. How far back does your GA4 data go? What happens to data older than that?
2. Is your GA4 BigQuery export enabled? If not, why not — it is free.
3. Can you answer "which campaign produced customers still buying a year later"?
4. Do you have a budget alert on your Google Cloud project?
5. Does your order system store a join key linking orders back to advertising?

---

## 🧠 Quiz

**1. What is the main advantage of BigQuery over the GA4 interface?**
a) It is easier to use
b) Permanent raw data, no sampling, and the ability to join other data sources
c) It is faster
d) It is free

**2. What do you pay for in BigQuery queries?**
a) The rows returned
b) The data scanned
c) The time taken
d) The number of queries

**3. Why set a refresh window on the Google Ads Data Transfer?**
a) To reduce cost
b) Because conversions are attributed days after the click, so past days need re-importing
c) Google needs it
d) It improves speed

**4. Why should Looker Studio point at a summary table?**
a) It looks better
b) A dashboard on raw tables re-queries BigQuery on every view, generating large costs
c) Raw tables are not supported
d) It is needed

**5. Demand Gen had the worst first-order CAC but the best 12-month margin. What does this mean?**
a) The tracking is broken
b) Channel value must be judged on cohort lifetime margin, not first-order metrics
c) Demand Gen should be paused
d) The data is coincidental

---

## 💪 Practical Exercise (45 minutes)

Set up the pipeline foundation.

1. Create a Google Cloud project and enable billing.
2. Set a budget alert at a low amount, with email notification.
3. Link GA4 to BigQuery with the daily export.
4. Set a custom daily query quota to prevent runaway costs.
5. Tomorrow, when data has arrived, run query 1 from this lesson. Check the estimated data scanned before running.
6. Write down one question about your business that you currently cannot answer, and sketch the data you would need to answer it.

---

## 🎯 Expert Challenge

Build a complete profit data warehouse.

- Design the schema: which data sources, which join keys, and how each system will produce them. The join key design is the hard part and everything depends on it.
- Build the ingestion for your order or CRM system, including margin, refunds and repeat purchases, so profit rather than revenue is available.
- Create the scheduled summary tables that aggregate raw data into small, fast, cheap reporting tables — and design the refresh schedule.
- Build the cohort analysis: customers by acquisition month and channel, with margin tracked over 3, 6 and 12 months.
- Then use it to rebuild the maximum CAC per channel from Lesson 0.3, replacing one flat figure with channel-specific figures based on real lifetime margin.
- Finally, design the governance: who can query, cost controls, data retention, and the documentation that means someone other than you can keep it. A pipeline only one person understands is a liability, not an asset.

---

## ✅ Quiz Answers

1 — **b**. Permanent, unsampled, joinable data.
2 — **b**. Data scanned. This is why `SELECT *` is expensive.
3 — **b**. Late-arriving conversions must be re-imported.
4 — **b**. Every dashboard view re-queries the underlying data.
5 — **b**. Judge channels on lifetime cohort value, not first-order metrics.

---

## 🏁 Module 7 Complete

You have built the elite measurement moat. Confirm you can:

1. Set up Enhanced Conversions with correct hashing and deduplication
2. Close the loop from click to paying customer via CRM
3. Assess whether server-side tagging is justified, and control its cost
4. Integrate offline conversions with a real CRM and test it properly
5. Set up Consent Mode v2 lawfully and check it actually works
6. Own your raw data in BigQuery and join it with business data

**Next:** Module 8 — Reading Reports and Fixing Problems. You can measure everything. Now we learn to read it.
