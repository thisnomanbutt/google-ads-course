# Lesson 1.3 — Set Up Google Ads to Show You Profit

*Phase 1 · How Google Ads Works, and Setting It Up — Module 1 · How Google Ads Really Works*

---

## Quick Recap From Lesson 1.2

You know which campaigns to run and in what order. Now we set up your workspace, so you can see the truth in 30 seconds instead of 30 minutes.

---

## 🎯 What You Will Learn

- Why the default Google Ads columns hide the things that matter
- How to build custom columns that show profit, not just revenue
- The saved views every professional keeps
- A daily, weekly and monthly routine you can actually follow
- The two settings you must turn off today

---

## The Default View Is Designed for Google, Not for You

When you open Google Ads, you see: Clicks, Impressions, CTR, Average CPC, Cost.

Every one of those numbers is about activity. Not one of them is about profit.

**Think of a car dashboard.** Imagine a car that shows engine temperature, tyre pressure, air quality and radio volume — but no speed and no fuel level. Everything displayed is real. None of it helps you drive.

The default Google Ads view is that car. We are going to rebuild the dashboard.

---

## The Five Custom Columns Every Professional Builds

Custom columns let you write your own formula using the account's data. This is a free feature and almost nobody uses it.

**Where to find it:** in any table, click the Columns icon → Modify columns → Custom columns → New custom column.

Here are the five to build. Use your own margin percentage in place of the examples.

### Column 1: Gross Profit

> **Formula:** `Conversion value × 0.35 − Cost`

Replace 0.35 with your real contribution margin (from Lesson 0.3). A 35% margin means 0.35.

**Why it matters:** this is the only column that tells you whether a campaign made money. Sort by it. Some of your "best ROAS" campaigns will move to the bottom.

**Format:** Number, currency.

### Column 2: POAS

> **Formula:** `(Conversion value × 0.35) ÷ Cost`

From Lesson 0.4. Anything below 1.0 is losing money.

**Format:** Number, 2 decimal places.

### Column 3: Cost per Qualified Lead

> **Formula:** `Cost ÷ Conversions (qualified lead action only)`

Custom columns let you pick specific conversion actions. Choose only your qualified lead action, not "all conversions".

**Why it matters:** from Lesson 0.6, this is the number that stops you celebrating junk leads.

### Column 4: Conversion Rate by Click

> **Formula:** `Conversions ÷ Clicks`

The default "Conv. rate" column is often fine, but building your own lets you restrict it to one conversion action.

### Column 5: Wasted Spend

> **Formula:** `Cost where Conversions = 0`

Simplest version: add a filter for Conversions = 0 and read the cost. Build it as a saved view instead (below).

⚠️ **Important warning about custom columns:** they are only as honest as the margin number you put in. Review the margin every quarter. A stale margin produces confident, wrong decisions.

---

## Columns to Add, and Columns to Remove

### Add these standard columns

- **Search impression share** — how often you appeared out of how often you could have
- **Search lost IS (budget)** — impressions lost because your budget ran out
- **Search lost IS (rank)** — impressions lost because your Ad Rank was too low
- **Conversions by conversion action** — split, not lumped together
- **Value per conversion**
- **Cost / conv.**

Those three impression share columns power the entire scaling decision framework in Lesson 8.1. Add them now.

### Remove or ignore these

- **Impressions** — vanity, unless diagnosing
- **CTR** as a headline metric — a high CTR on the wrong traffic is not success
- **Optimisation Score** — see the warning below

---

## The Optimisation Score Trap

Google shows an "Optimisation Score" out of 100%, with recommendations to raise it.

**Understand clearly: this is not a performance score.** It measures how closely you follow Google's suggestions. Some suggestions are really good. Others will raise your spend without raising your profit.

Common recommendations that often hurt:
- "Remove non-serving keywords" (sometimes fine)
- "Add broad match keywords" (only with good Smart Bidding and negatives)
- "Raise your budget" (only if impression share data supports it)
- "Switch to Maximise Conversions" (dangerous without volume)
- "Enable auto-apply" (see below)

**How to use it properly:** read every recommendation as a question, not an instruction. Ask: "Does this move my Gross Profit column up?" If you cannot answer yes, dismiss it. Dismissing a recommendation lowers your score. That is completely fine.

---

## Two Settings to Turn Off Today

### 1. Auto-apply recommendations

Google can apply changes to your account automatically. This includes adding keywords and changing bid strategies.

**Turn it off.** Every single time you take over an account, check this first.

Where: Recommendations → Auto-apply → review every toggle.

Why: an automatic change at 3am can undo weeks of work, and you will spend two days trying to work out what happened. If you did not decide it, you cannot learn from it.

### 2. Automatically created assets (unless you review them)

Google can generate headlines and descriptions from your website. Sometimes helpful. Sometimes it invents claims you never approved — which is a policy risk (Lesson 1.5).

**Recommendation:** turn it off until your account is stable and you have time to review the generated text weekly.

---

## Saved Views: Your Named Questions

A saved view is a table with your chosen columns, filters, date range and sorting, saved with a name. You can rebuild any analysis in one click.

Build these five:

**1. "Money Losers"**
Filter: Cost > 0 AND Conversions = 0. Last 30 days.
*Question it answers:* where am I burning money for nothing?

**2. "Budget Limited"**
Filter: Search lost IS (budget) > 10%. Campaign level.
*Question:* where would more budget produce more sales?

**3. "Quality Problems"**
Filter: Quality Score < 6 AND Cost > 0.
*Question:* where am I overpaying because of poor relevance?

**4. "Profit Ranking"**
Columns: Gross Profit, POAS, Cost, Conversions. Sorted by Gross Profit, high to low.
*Question:* what is actually making money?

**5. "New Search Terms"**
Search terms report, last 7 days, sorted by cost.
*Question:* what did Google decide to spend my money on this week?

---

## Your Actual Workflow

Most people either check the account 12 times a day or once a month. Both are wrong.

### Daily: 10 minutes (only on active accounts)

1. Open the "Money Losers" view. Scan for anything unusual.
2. Check spend against your daily target. Big swings need a reason.
3. Check for disapproved ads or policy notices.
4. **Change nothing** unless something is broken.

That last point is the hard one. Daily checking is for spotting fires, not for optimising. Smart Bidding needs time.

### Weekly: 60–90 minutes

1. Search terms report. Add negatives. (Lesson 3.4)
2. Review the "Budget Limited" view. Decide on budget moves.
3. Check asset performance. Replace anything rated "Low". (Lesson 4.1)
4. Review "Profit Ranking". Note the trend, not just the number.
5. Write your changes in a change log. Date, what, why, expected result.

### Monthly: 3 hours

1. Full profit review with real business data, not just Google's numbers.
2. Recalculate margin and update your custom columns if it changed.
3. Impression share analysis and scaling decisions. (Lesson 8.1)
4. Review lead quality with the sales team. (Lesson 0.6)
5. Plan next month's tests. Maximum two big tests at a time.

---

## The Change Log: Your Most Underrated Tool

Keep a simple sheet with five columns:

| Date | Account | What I changed | Why | Expected result |
|---|---|---|---|---|

**Why this matters so much:**

- When performance changes in three weeks, you will know what you did
- When a client asks "what have you been doing?", you have an answer
- When something works, you can repeat it
- When you take over an account from someone else, you will wish they had kept one

Google's Change History shows *what* changed. It never shows *why*. The why is where your skill lives.

---

## 📖 Real-World Example: The Column That Saved a Client

Bilal took over a US client's account managing $22,000 a month. The previous agency's report was proud of a 5.2x ROAS.

His first action was not a bid change. It was building the Gross Profit column, using the client's real 28% margin.

He sorted the campaigns by Gross Profit, highest first. The result changed everything:

| Campaign | Spend | ROAS | Gross Profit |
|---|---|---|---|
| Brand Search | $1,100 | 14.2x | +$3,272 |
| Shopping – Accessories | $3,400 | 6.8x | +$2,873 |
| Search – Core Product | $6,200 | 4.1x | +$921 |
| PMax – All Products | $8,900 | 4.4x | **−$937** |
| Display – Prospecting | $2,400 | 2.9x | **−$451** |

Two campaigns, taking half the budget, were losing money — while showing "acceptable" ROAS numbers.

The reason was hidden in the mix. PMax was selling mostly low-margin accessories bundled at discount, and it was absorbing brand traffic. Display was chasing cold audiences with no real intent.

**What he did:**
1. Paused Display prospecting entirely
2. Added brand exclusions to PMax and rebuilt it around high-margin products only
3. Moved the freed budget into Shopping – Accessories and Brand

**Result after 6 weeks:** total spend stayed at $22,000. Reported ROAS *fell* from 5.2x to 4.6x. Gross profit rose from $5,678 to $9,140 per month.

The client did not care about the ROAS drop. They cared about $3,462 more profit every month.

**One custom column found it in ten minutes.**

---

## 📊 Mastery Score

**Level: Foundational**

This lesson is setup, not strategy. But it decides how clearly you see everything that follows. Do it once, benefit forever.

---

## 📌 Key Takeaways

- Default columns show activity. Build custom columns that show profit.
- Optimisation Score measures obedience, not performance. Treat recommendations as questions.
- Turn off auto-apply recommendations on every account you touch.
- Build saved views as named questions you can answer in one click.
- Keep a change log with the "why". Google records the what; only you can record the why.

---

## ☑️ Self-Assessment

1. Have you built a Gross Profit column in a real account?
2. Do you know if auto-apply is on in the accounts you manage? Right now?
3. Can you answer "which campaign made the most profit last month?" in under 60 seconds?
4. Do you keep a change log? Honestly?
5. What is your current daily routine, and how long does it take?

---

## 🧠 Quiz

**1. What does the Optimisation Score measure?**
a) Account profitability
b) How closely you follow Google's recommendations
c) Quality Score across the account
d) Your competitor ranking

**2. Which formula gives you POAS as a custom column?**
a) Conversion value ÷ Cost
b) (Conversion value × margin) ÷ Cost
c) Cost ÷ Conversions
d) Clicks ÷ Impressions

**3. Why should auto-apply recommendations usually be turned off?**
a) It costs extra money
b) Changes you did not decide cannot be learned from, and can undo your work
c) It slows the account down
d) Google charges a fee

**4. What is the purpose of the "Budget Limited" saved view?**
a) To find wasted spend
b) To find where more budget would produce more sales
c) To check Quality Score
d) To review ad copy

**5. What does a change log record that Google's Change History does not?**
a) The date
b) The campaign name
c) The reason for the change and the expected result
d) The user who made the change

---

## 💪 Practical Exercise (30 minutes)

Set up one account properly.

1. Build the Gross Profit custom column using a real margin number.
2. Build the POAS custom column.
3. Add the three impression share columns.
4. Create the "Money Losers" and "Profit Ranking" saved views.
5. Check the auto-apply settings and screenshot what you find.
6. Sort by Gross Profit and write down the biggest surprise.

---

## 🎯 Expert Challenge

Build a complete reporting workspace for a multi-client agency.

- Design a naming standard for custom columns so every account uses identical definitions. Inconsistent definitions across clients make your reports meaningless.
- Build a margin variable system: document where each client's margin number comes from, who confirmed it, and the date it was last checked.
- Create a "first 30 minutes" audit view set that you apply to every new account, and write the five questions those views answer.
- Design your change log so it can be filtered by expected result versus actual result, so you can measure your own hit rate over a year.
- Then answer honestly: what percentage of your changes last quarter produced the result you expected? Most people have never measured this. It is the fastest way to improve.

---

## ✅ Quiz Answers

1 — **b**. It measures adoption of recommendations, not results.
2 — **b**. Multiply conversion value by margin, then divide by cost.
3 — **b**. Undecided changes are unlearnable changes.
4 — **b**. Lost impression share to budget means demand you are not serving.
5 — **c**. The reason and the expectation. That is where learning happens.

---

**Next lesson:** 1.4 — How to Organise Your Campaigns
