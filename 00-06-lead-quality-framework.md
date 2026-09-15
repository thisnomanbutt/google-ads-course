# Lesson 0.6 — Why Cheap Leads Can Be Worth Nothing

*Phase 0 · Know Your Numbers Before You Spend — Module 0 · Know What a Customer Is Worth*

---

## Quick Recap From Lesson 0.5

You learned how to build a page that turns clicks into leads. Now we ask a harder question: **were those leads any good?**

---

## 🎯 What You Will Learn

- Why cheap leads are often the most expensive mistake in paid ads
- What MQL, SQL and PQL mean, in plain words
- How to build a simple lead scoring system in one afternoon
- How to send quality signals back to Google so the AI learns
- How to report lead quality to a client without losing the account

---

## The Most Dangerous Report in Marketing

Here is a report that has ended many agency relationships:

> "Great month! We generated 100 leads at only PKR 500 each. Cost per lead down 40%!"

The client reads it and smiles. Then they check their sales. Zero new customers.

What happened? The leads were real people. They filled the form. Google counted them. But:

- 40 were students doing research
- 25 wanted a service the business does not offer
- 20 gave a wrong phone number
- 10 were price shoppers who wanted half price
- 5 were real, and 1 bought

**Real cost per customer: PKR 50,000.** Not PKR 500.

**Think of fishing with a very wide net.** You pull it in and it is full. You are excited. Then you look closer: plastic bottles, weeds, small fish you cannot sell, and two good fish. A full net is not the same as a good catch.

---

## Why This Happens: You Get What You Ask For

Google's AI is obedient, not wise. You told it to get form fills. It got you form fills.

If your conversion action is "form submitted", the AI will find the people most likely to submit forms. Those are often the people with the least money and the least intention to buy.

> **The rule: Google optimises for whatever you count. So count the right thing.**

This one sentence explains 80% of failed lead generation accounts.

---

## The Three Lead Stages: MQL, SQL, PQL

These sound like jargon. They are actually simple.

### MQL — Marketing Qualified Lead
Someone who showed interest and matches your basic what you need.
*Example:* a person in Lahore filled the dental form and wants an appointment this month.

### SQL — Sales Qualified Lead
Someone your sales team spoke to and confirmed is a genuine buyer.
*Example:* the clinic called back, the person answered, has the budget, and booked a slot.

### PQL — Product Qualified Lead
Used mostly in SaaS. Someone who used the free product and showed real buying behaviour.
*Example:* a TaskFlow trial user who invited 3 team members and created 20 tasks.

**Think of a hospital emergency room.** Everyone who walks in is an MQL. The nurse checks them and decides who really needs a doctor — that is the SQL step. Nobody treats every walk-in the same way. Your account should not either.

---

## The Lead Value Ladder

Not all leads are worth the same. Give each one a value.

Here is Dr. Ayesha's ladder:

| Stage | What it means | Value assigned |
|---|---|---|
| Form submitted | Anyone, any form | PKR 100 |
| Valid phone (answered) | Real, contactable person | PKR 500 |
| Qualified (in area, needs treatment) | An MQL | PKR 2,000 |
| Appointment booked | An SQL | PKR 6,000 |
| Showed up at clinic | Real opportunity | PKR 10,000 |
| Treatment completed | Customer | PKR 12,000 (real margin) |

Now Google can learn the difference. Instead of chasing 100 form fills, it learns which searches, places and times produce people who *show up*.

**This one change often cuts real cost per customer by 30–50%.**

The technical build (GCLID → CRM → offline upload) is Lesson 7.2. Right now, just understand the logic.

---

## Building a Lead Score in One Afternoon

You do not need expensive software. A Google Sheet works.

**Step 1: Ask the sales team one question.**
"Describe the last 5 customers who were easy to close. What did they have in common?"

Write down what they say. That is your scoring rules — not your opinion.

**Step 2: Pick 4–6 scoring factors.**

For Dr. Ayesha:
- Lives within 10 km of the clinic → +3
- Needs treatment within 30 days → +3
- Answered the phone on the first try → +2
- Asked about a specific treatment → +2
- Asked only about price → −2
- Outside the city → −3

**Step 3: Set your cut-off.**
Score 6 or above = qualified lead. Below 6 = not counted.

**Step 4: Score every lead for 30 days.** No exceptions. This is the boring part that creates the advantage.

**Step 5: Look backwards.** Which keywords, campaigns and locations produced the high scores? That is your real performance report.

---

## Cutting the Waste at the Source

Fixing quality after the lead arrives is good. Preventing bad leads is better.

### 1. Add a qualifying question to the form

One question, chosen carefully. Examples:
- "What is your budget range?" (for high-ticket services)
- "When do you need this?" (filters out browsers)
- "Which city are you in?" (filters out-of-area)

⚠️ Every extra field lowers total leads. That is fine. You want fewer, better leads. But add one field at a time and watch the effect.

### 2. Put the price, or a price range, on the page

This scares beginners. It works.

If your service starts at PKR 50,000, say so. You will lose the people who had PKR 5,000. Those people were never going to buy. You just stopped paying for their clicks.

### 3. Fix your keywords and negatives

Words that attract poor leads:
- "free", "cheap", "jobs", "salary", "course", "how to", "DIY", "second hand"

Words that attract buyers:
- "near me", "best", "book", "price", "hire", "service", "emergency", "same day"

The weekly search term mining process is Lesson 3.4.

### 4. Be honest in the ad

If you serve only Karachi, say "Karachi" in the ad. If you have a minimum order, say it. Clarity filters.

---

## Reporting Lead Quality Without Losing the Client

This is a real professional skill. When you tell a client "your leads are bad", they often hear "you are bad at sales".

Use this order instead:

1. **Show the good news first.** Volume, cost per lead, trend.
2. **Show the quality data as a shared discovery**, not an accusation. "Here is what we learned about which leads convert."
3. **Take part of the responsibility.** "We were sending traffic that looked right but was not. That is on us."
4. **Give one clear next step.** "We want to count booked appointments instead of form fills."
5. **Predict the scary part before it happens.** "Your lead count will drop by about 30%, and your cost per lead will go up. Your cost per *patient* will go down. That is the goal."

That fifth point is essential. If the client sees lead volume drop without warning, you lose the account. If you predicted it, you look like an expert.

---

## 📖 Real-World Example: TaskFlow's 900 Useless Signups

TaskFlow (the Islamabad SaaS from Lesson 0.3) was celebrating. Their free trial signups went from 200 to 900 per month. Cost per signup: $9.

The founder wanted to double the budget.

We checked one number first: **how many of those 900 became paying customers?**

The answer was 11. The previous month, 200 signups had produced 34 customers.

Look at what really happened:

| | Old | New |
|---|---|---|
| Signups | 200 | 900 |
| Cost per signup | $40 | $9 |
| Paying customers | 34 | 11 |
| **Real cost per customer** | **$235** | **$736** |

Cost per signup fell by 78%. Cost per *customer* rose by 213%.

**Why?** They had switched to broad match and let Smart Bidding chase signups. Google found exactly what it was asked for: people who love signing up for free things. Students. Job seekers. Curious developers. Not construction managers with budgets.

**The fix, in three steps:**

1. They defined a PQL: a trial user who invited at least 2 team members within 7 days.
2. They sent that PQL event back to Google as the primary conversion, with a value.
3. They added one form question: "How many people are on your team?" Anyone answering "just me" got a different, self-serve path and was not counted as a conversion.

Three months later:

- Signups: 380 (down from 900)
- Paying customers: 52 (up from 34)
- Real cost per customer: **$198**

The dashboard number got worse. The company grew.

---

## 📊 Mastery Score

**Level: Advanced**

Lead quality is where most agencies quietly fail. Master this and you can charge premium fees for lead generation work.

---

## 📌 Key Takeaways

- Google optimises for whatever you count. Count customers, not form fills.
- MQL = interested and matching. SQL = confirmed by sales. PQL = proved it by using the product.
- Give each lead stage a value so the AI can learn the difference.
- Prevent bad leads at the source: qualifying questions, honest pricing, strong negatives.
- Always warn the client that lead volume will drop before it drops.

---

## ☑️ Self-Assessment

1. What is your current conversion action? Is it a form fill or a real customer?
2. Do you know what percentage of your leads become customers? Exactly?
3. Can you name the 4 things your best customers have in common?
4. Have you ever reported a "cost per lead" without knowing the cost per customer?
5. Who in the business can tell you if a lead was good? Have you spoken to them this month?

---

## 🧠 Quiz

**1. Why does chasing cheap leads often fail?**
a) Google penalises cheap leads
b) The AI finds people likely to fill forms, not people likely to buy
c) Cheap leads take longer to call
d) It always works, actually

**2. What is an SQL?**
a) A database language
b) A lead the sales team confirmed is a genuine buyer
c) Any form submission
d) A lead from social media

**3. Which change sends the strongest quality signal to Google?**
a) Lowering the budget
b) Adding more keywords
c) Counting booked appointments instead of form fills
d) Changing the ad schedule

**4. You add a qualifying question and lead volume drops 30%. What should you do?**
a) Remove the question immediately
b) Check whether cost per *customer* improved before deciding
c) Double the budget
d) Switch to broad match

**5. What must you tell the client BEFORE improving lead quality?**
a) Nothing, surprise them with results
b) That lead volume will fall and cost per lead will rise
c) That you need a bigger budget
d) That Google made a mistake

---

## 💪 Practical Exercise (30 minutes)

Take the last 20 leads from any business you can access.

1. Call or check what happened to each one. Mark them: junk, unqualified, qualified, customer.
2. Count how many are in each group. Write the percentages.
3. Calculate the real cost per customer: total spend ÷ number of customers.
4. Compare it to the reported cost per lead. Write both numbers side by side.
5. Write the one question you would add to the form to remove the biggest junk group.

---

## 🎯 Expert Challenge

Design a complete lead quality system for one business.

- Define the exact rules for MQL, SQL and customer for that business. Get sales to agree in writing.
- Assign a money value to each stage, based on real close rates, not guesses.
- Map how the data will travel: form → CRM → status change → back to Google. Name each tool in the chain.
- Write the client communication plan: what you will say before the change, at week 2, and at week 8.
- Calculate the break point: how far can lead volume fall before the business would actually be worse off? Below that number, your plan is too aggressive.

---

## ✅ Quiz Answers

1 — **b**. The AI is obedient. It delivers exactly what you measure.
2 — **b**. Sales has confirmed the lead is real and able to buy.
3 — **c**. Changing what you count changes what the AI hunts for.
4 — **b**. Volume is not the goal. Judge on cost per customer.
5 — **b**. Predicting the drop protects the relationship and your reputation.

---

**Next lesson:** 0.7 — Getting Paid and Staying Legal in Pakistan
