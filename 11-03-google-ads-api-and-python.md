# Lesson 11.3 — When to Use the API, and When Not To

*Phase 6 · Automation and Working With Data — Module 11 · Save Time With Scripts and Automation*

---

## Quick Recap From Lesson 11.2

Scripts run inside Google Ads and are excellent for monitoring. The API runs outside Google Ads and can do things scripts cannot. This lesson explains where the line is.

---

## 🎯 What You Will Learn

- When to use the API rather than a script
- What you need to get started, in order
- The no-code route for people who do not want to write Python
- Two practical builds: bulk negatives and reporting automation
- The mistakes that get API access suspended

---

## Scripts vs API: Where the Line Is

| | Google Ads Scripts | Google Ads API |
|---|---|---|
| Language | JavaScript only | Python, Java, PHP, C#, Ruby, Perl |
| Where it runs | Inside Google Ads | Your own server or machine |
| Execution limit | ~30 minutes | None you control |
| Setup effort | None | Significant |
| External data | Limited | Full access to anything |
| Cost | Free | Free, but you pay for hosting |
| Best for | Monitoring, alerting, simple changes | Bulk operations, integrations, data pipelines |

### Use a script when

✅ The task lives entirely inside one Google Ads account
✅ It finishes in under 30 minutes
✅ It is monitoring, reporting or a simple rule
✅ You want it running without infrastructure

### Use the API when

✅ You need to process thousands of items
✅ You need to join Google Ads data with your CRM, warehouse or ERP
✅ You are building a tool with a user interface
✅ You need scheduling and error handling beyond what scripts offer
✅ You are working across many accounts at speed

**Think of the difference between a kitchen timer and a commercial kitchen management system.** The timer is instant, free and perfect for one job. The system takes weeks to install and runs a restaurant chain.

⚠️ **Most people do not need the API.** If scripts solve your problem, use scripts. The API is a significant commitment.

---

## What You Need to Get Started

In order. Each step depends on the last.

### 1. A Google Ads Manager account (MCC)
API access is granted at MCC level.

### 2. A developer token
Apply through the API Center in your MCC: Tools → Setup → **API Center**.

**The application asks about your intended use.** Answer honestly and specifically. Vague applications are rejected.

**Access levels:**
- **Test access** — granted quickly, works only against test accounts
- **Basic access** — for production use, with daily operation limits
- **Standard access** — higher limits, applied for after demonstrating responsible use

### 3. A Google Cloud project
For OAuth credentials.

### 4. OAuth credentials
A client ID and client secret, then a refresh token generated once through an authorisation flow.

### 5. The client library
For Python:
```
pip install google-ads
```

### 6. A configuration file
A `google-ads.yaml` holding your developer token, credentials and login customer ID.

⚠️ **Never commit this file to a public code repository.** Credentials in a public repository are found by automated scanners within minutes, and your access will be suspended.

**Realistic time to first working query:** half a day for an experienced developer, several days for a beginner.

---

## The No-Code Route

You do not have to write Python. Several routes give you most of the value.

### Route 1: Google Sheets + the Ads add-on

Some third-party add-ons pull Google Ads data into Sheets on a schedule. Combined with Sheets formulas and Apps Script, this covers a surprising amount.

**Good for:** reporting, simple analysis, sharing with non-technical people.
**Limits:** read-mostly, and dependent on a third party.

### Route 2: Zapier, Make or n8n

Connect Google Ads to other systems with visual workflows.

**Typical uses:**
- CRM stage change → upload an offline conversion (Lesson 7.4)
- New Google Ads lead form submission → create a CRM record
- Spend threshold reached → post an alert to Slack
- New negative keyword approved in a sheet → add to the account

**Good for:** integrations between systems, no coding needed.
**Limits:** cost per task at volume, and limited bulk capability.

### Route 3: Looker Studio + BigQuery

From Lessons 7.6 and 8.2. For reporting, this is often better than building your own pipeline.

### Route 4: AI-assisted coding

Describe what you want to an AI, get Python code, run it.

**This really works now**, and it has changed who can use the API.

⚠️ **But you must still understand what the code does.** A script that deletes campaigns because you misread it is your responsibility, not the AI's.

**The safe pattern:**
1. Ask for read-only code first
2. Read it and understand every line
3. Run it against a test account
4. Only then consider write operations
5. Always include a dry-run mode

---

## Build 1: Bulk Negative Keyword Automation

The most common genuine API use for media buyers.

### The problem

From Lesson 3.4: you run an n-gram analysis and find 400 negative keywords to add across 30 ad groups in 12 accounts.

**By hand:** several hours, with mistakes.
**With a script:** limited to one account.
**With the API:** minutes, across everything.

### The structure

```
Google Sheet: approved negatives
  Columns: account, campaign, keyword, match type, date approved
        ↓
Python script (scheduled daily)
        ↓
Reads the sheet, filters for rows not yet applied
        ↓
Validates: does this conflict with an active keyword?
        ↓
Applies via the API
        ↓
Writes back: applied date, status, any error
        ↓
Emails a summary
```

### Why the sheet matters

**Human approval stays in the loop.** The n-gram analysis proposes; a person approves; the API applies.

**Fully automatic negative addition is dangerous** — the conflict risk from Lesson 3.4 is real, and an automated system can block your best converting terms overnight.

### The essential safety checks

Before applying any negative, the script should:

1. **Check for conflicts.** Would this block an active keyword? If so, skip and flag.
2. **Check conversion history.** Has any search term containing this had conversions? If so, skip and flag.
3. **Cap the batch size.** No more than N per run.
4. **Log everything**, including what it skipped and why.
5. **Support a dry-run mode** that reports without applying.

⚠️ **Point 2 is the one people skip.** An n-gram can look like pure waste in aggregate while containing one high-value converting term. Always check before blocking.

---

## Build 2: Reporting Automation

The second most common use.

### The problem

You produce 21 client reports monthly (Lesson 10.1). Each takes 40 minutes of data gathering. That is 14 hours a month of copying numbers.

### The structure

```
Scheduled Python job (monthly)
        ↓
Pulls Google Ads data via the API
Pulls CRM data via its API
Pulls order/margin data from the warehouse
        ↓
Joins them on a common key
Calculates profit, POAS, cost per customer
        ↓
Writes to BigQuery (Lesson 7.6)
        ↓
Looker Studio reads the summary tables (Lesson 8.2)
        ↓
Emails each client their report link
```

### What this gives you that a script cannot

- **Joining data across systems.** Google Ads alone cannot see your CRM.
- **True profit calculation** using real margins, not estimates.
- **Consistency across every client**, because it is one codebase.
- **Historical retention** beyond Google's limits.

**The narrative section from Lesson 8.2 still gets written by hand.** Automate the numbers, never the thinking.

---

## API Limits and Good Behaviour

The API has operation limits, and misuse gets access revoked.

### The rules

**1. Respect rate limits.** Build in delays and handle rate limit errors gracefully with exponential backoff.

**2. Use batch operations.** Sending 500 individual requests when one batch request would do is both slow and wasteful of your quota.

**3. Request only the fields you need.** Same principle as BigQuery costs (Lesson 7.6).

**4. Cache where sensible.** Do not re-pull data that has not changed.

**5. Handle errors properly.** A script that retries a failing request in a tight loop will exhaust your quota in minutes and may trigger a suspension.

**6. Use the test account for development.** Never develop against a live client account.

### What gets access suspended

⚠️ These are real and they happen:

- Exceeding rate limits repeatedly
- Retry loops without backoff
- Using the API for a purpose different from your stated application
- Sharing your developer token
- Scraping or bulk data extraction beyond legitimate use
- Building tools that violate Google's terms

**Losing API access can take weeks to restore, and it affects every client you serve through it.**

---

## Should You Learn This?

An honest check.

### Learn it if

- You manage 15+ accounts and do repetitive bulk work
- You need to join Google Ads with other systems regularly
- You are building a product or a really differentiated service
- You have or can hire technical capability
- You will use it for years, not once

### Do not learn it if

- Scripts already solve your problems
- You manage a handful of accounts
- You would use it once and then leave it unmaintained
- Nobody on the team could fix it when it breaks

⚠️ **An unmaintained automation is worse than no automation.** It fails silently, people trust its output, and wrong data drives wrong decisions.

### The middle path

**Use the no-code tools first.** Zapier or Make will handle offline conversion uploads and cross-system integrations at a fraction of the effort. Move to the API only when you hit a genuine wall.

---

## 📖 Real-World Example: The Build That Was Not Worth It, and the One That Was

Bilal's agency built two API projects. One was a mistake. Understanding both is more useful than only the success.

### Project 1: The custom dashboard (not worth it)

**The idea:** build a custom client dashboard using the API, hosted on their own domain, branded to the agency.

**The investment:** a contract developer for six weeks, roughly £9,000, plus £40/month hosting.

**What they got:** a dashboard that did about what Looker Studio did for free.

**What went wrong:**
- Google Ads API versions change regularly. Every change needed developer time to update.
- The developer moved on after four months. Nobody in-house could keep it.
- When it broke in month seven, it stayed broken for three weeks.
- Clients did not care that it was branded. They cared whether the numbers were right.

**They abandoned it in month nine** and moved back to Looker Studio.

**The lesson:** they built a custom version of a solved problem. The branding was worth far less than they assumed, and the maintenance cost was far higher.

### Project 2: The negative keyword pipeline (really worth it)

**The problem:** the n-gram script (Lesson 11.2) generated recommendations across 21 accounts weekly. Reviewing and applying them by hand took roughly six hours a week.

**The build:** three weeks of part-time work by one team member, using AI assistance for the Python.

**The system:**

1. The n-gram script writes proposed negatives to a shared Google Sheet, one tab per account, with cost, conversions and the search terms containing each n-gram.

2. A team member reviews weekly and marks each row Approve, Reject or Investigate. **This takes about 45 minutes across all 21 accounts** — because they are reviewing a filtered list, not raw data.

3. A Python job runs nightly. For each approved row it:
   - Checks for conflicts with active keywords → skips and flags if found
   - Checks whether any search term containing it has ever converted → skips and flags if so
   - Applies the negative to the correct shared list
   - Writes back the applied date and status
   - Logs everything

4. A morning email summarises: applied, skipped, and why.

**The safety layer caught real problems.** In the first three months it blocked 34 proposed negatives that would have cut off converting traffic. A human reviewer had approved every one of those 34 — they looked like obvious waste in the aggregate view.

### Results after 12 months

| Metric | Before | After |
|---|---|---|
| Hours per week on negatives | 6.0 | **0.75** |
| Negatives applied per month | ~180 | **~640** |
| Accidental blocks of converting terms | 3 in 6 months | **0** |
| Build cost | — | ~£2,400 of internal time |
| Annual time saved | — | ~270 hours |

**The build paid for itself in roughly two months.**

### Why one worked and one did not

| | Dashboard (failed) | Negative pipeline (succeeded) |
|---|---|---|
| Solved a problem free tools already solved? | ✅ Yes — bad sign | ❌ No |
| Repetitive work eliminated? | Minimal | 270 hours/year |
| Maintainable in-house? | ❌ No | ✅ Yes |
| Broke silently? | ✅ Yes | ❌ No — it emails daily |
| Kept a human in the loop? | N/A | ✅ Yes, at the approval step |

**Bilal's rule afterwards:** *"Automate the repetitive work nobody enjoys. Never automate something a free tool already does, and never automate the judgement."*

---

## 📊 Mastery Score

**Level: Master**

The API is genuine software engineering. The valuable skill is judging when it is worth the commitment.

---

## 📌 Key Takeaways

- Scripts run inside Google Ads and are perfect for monitoring. The API runs outside and handles bulk work and integrations.
- Most people do not need the API. Try scripts, then no-code tools, then the API.
- AI-assisted coding makes the API accessible — but you must still understand every line before running it.
- Automate the application of decisions, never the decisions themselves. Keep a human approval step.
- An unmaintained automation is worse than none. It fails silently and people trust its output.

---

## ☑️ Self-Assessment

1. What repetitive task takes you more than three hours a week?
2. Could a script solve it, or does it really need the API?
3. Have you tried the no-code route for that task?
4. If you built something, who would keep it when it breaks?
5. Would your automation fail loudly or silently?

---

## 🧠 Quiz

**1. When should you use the API instead of a script?**
a) Always — it is more powerful
b) When you need bulk operations, cross-system integration, or processing beyond script limits
c) Never
d) Only for reporting

**2. What must never be committed to a public code repository?**
a) The script logic
b) Your `google-ads.yaml` with credentials
c) The README
d) Test data

**3. What is the essential safety check before bulk-adding negatives?**
a) Checking the spelling
b) Checking for conflicts with active keywords and whether the term has ever converted
c) Checking the budget
d) None needed

**4. Why did the custom dashboard project fail?**
a) The developer was poor
b) It rebuilt something free tools already solved, and nobody could keep it
c) Clients disliked it
d) The API was too slow

**5. What should never be automated?**
a) Reporting
b) Data gathering
c) The judgement — the decision itself
d) Negative keyword application

---

## 💪 Practical Exercise (35 minutes)

Assess your automation opportunities honestly.

1. List every repetitive task you do weekly, with the time each takes.
2. For each, decide: script, no-code tool, API, or leave manual.
3. For the largest one, sketch the workflow: input, processing, output, human approval point.
4. Estimate the build cost in hours and the annual time saved.
5. Answer honestly: who keeps it when it breaks? If the answer is nobody, do not build it.

---

## 🎯 Expert Challenge

Design an automation programme for an agency.

- Audit all repetitive work across the team, quantified in hours per month, and rank by total time cost.
- For each candidate, evaluate against four rules: does a free tool already solve it, can it be maintained in-house, does it fail loudly, and does it keep human judgement in the loop.
- Design the highest-value build in full: structure, data flow, error handling, logging, alerting, and the human approval step.
- Build the safety layer clearly. For any system that changes accounts, specify every check that must pass before a change is applied, and what happens when a check fails.
- Design the maintenance plan: who owns it, how API version changes are handled, and how you would know within a day if it stopped working.
- Then, after six months, measure it. Time saved, errors prevented, errors caused. Be honest about the last one — automation that quietly causes errors is common, and only measurement reveals it.

---

## ✅ Quiz Answers

1 — **b**. Bulk work, integrations, and beyond-script processing.
2 — **b**. Credentials. Public repositories are scanned within minutes.
3 — **b**. Conflict checks and conversion history checks.
4 — **b**. It duplicated free tools and became unmaintainable.
5 — **c**. Judgement stays human. Automate the execution.

---

**Next lesson:** 11.4 — Tell Google Some Conversions Are Worth More
