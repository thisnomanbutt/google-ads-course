# Lesson 0.3 — The Numbers Every Advertiser Must Know

*Phase 0 · Know Your Numbers Before You Spend — Module 0 · Know What a Customer Is Worth*
**📎 Template included:** `templates/funnel-math-calculator.csv`

---

## Quick Recap From Lesson 0.2

You learned how to build an offer that answers real fears. Now we put numbers on it. An offer without numbers is just a hope.

---

## 🎯 What You Will Learn

- The seven numbers that run every paid account
- How to calculate your breakeven ROAS in under 2 minutes
- The difference between revenue, margin and profit (most people confuse these)
- Why LTV changes how much you can spend today
- How to build and use the funnel math calculator

---

## Why This Lesson Matters More Than Any Other

Most beginners open Google Ads and ask, "What should my budget be?"

That is the wrong question. The right question is: **"What is the most I can pay for one customer?"**

You cannot answer that with an opinion. You answer it with seven numbers.

**Think of a cook in a restaurant.** A cook who does not know the cost of the ingredients can still make good food. But they will never know if the restaurant is making money. Media buyers who do not know these numbers are exactly the same.

---

## The Seven Numbers

Learn these one by one. Each one is simple on its own.

### 1. AOV — Average Order Value

The average money a customer pays in one order.

> **AOV = Total revenue ÷ Number of orders**

Example: PKR 500,000 revenue from 100 orders = PKR 5,000 AOV.

### 2. COGS — Cost of Goods Sold

What it costs you to deliver one order. Product cost, shipping, packaging, payment fees.

Example: PKR 2,000 product + 300 shipping + 100 fees = PKR 2,400.

### 3. Contribution Margin

The money left from one sale after the delivery costs. This is the money that can pay for ads.

> **Contribution Margin = AOV − COGS**

Example: PKR 5,000 − 2,400 = **PKR 2,600**.

This is Sana's number from Lesson 0.1. It is the most important number in the account.

### 4. Conversion Rate (CVR)

The percentage of visitors who buy.

> **CVR = Conversions ÷ Clicks × 100**

Example: 24 sales from 1,000 clicks = 2.4%.

### 5. CAC — Customer Acquisition Cost

What you actually paid to get one customer. Also called CPA (cost per acquisition).

> **CAC = Ad spend ÷ Number of customers**

Example: PKR 100,000 spent, 60 customers = PKR 1,667 CAC.

### 6. LTV — Lifetime Value

The total contribution margin one customer gives you over their whole relationship with you. Not revenue — margin.

> **LTV = Contribution margin × Number of purchases per customer**

Example: PKR 2,600 margin × 2.5 orders per customer = **PKR 6,500 LTV**.

### 7. Breakeven ROAS

The ROAS where you make zero profit and zero loss. Above it, you profit. Below it, you lose.

> **Breakeven ROAS = AOV ÷ Contribution Margin**

Example: PKR 5,000 ÷ 2,600 = **1.92x**.

That means Sana must earn PKR 1.92 for every PKR 1 spent, just to break even.

---

## The One Formula That Ties It Together

Here is the chain that decides everything:

> **Cost per sale = Cost per click ÷ Conversion rate**

Let's use it.

- Cost per click: PKR 40
- Conversion rate: 2.4% (0.024)
- Cost per sale = 40 ÷ 0.024 = **PKR 1,667**

Compare to contribution margin of PKR 2,600.

**Profit per sale = 2,600 − 1,667 = PKR 933.** ✅ Profitable.

Now change one thing. Conversion rate falls to 1.2%.

- Cost per sale = 40 ÷ 0.012 = **PKR 3,333**
- Profit per sale = 2,600 − 3,333 = **−PKR 733** ❌ Loss.

**Look at what happened.** The bid did not change. The traffic did not change. Only the landing page changed. This is why Lesson 0.5 exists.

---

## Target ROAS vs Breakeven ROAS

Never run at breakeven. The business needs profit and it has other costs: rent, salaries, software, your fee.

A simple starting rule:

> **Target ROAS = Breakeven ROAS × 1.3 to 1.5**

Sana's breakeven is 1.92x. Her target is around **2.5x to 2.9x**.

Set your Google Ads tROAS target using the *target*, not the breakeven. Breakeven is your emergency floor, not your goal.

---

## The LTV Trap (And Why It Is Also a Gift)

Look at Sana's numbers again.

- First-order margin: PKR 2,600
- LTV margin (2.5 orders): PKR 6,500

If she only counts the first order, she can pay PKR 2,600 per customer. If she counts LTV, she can pay up to PKR 6,500.

That is a huge difference. She can outbid every competitor who only looks at the first sale.

**But here is the trap.** LTV money arrives in the *future*. The ad bill arrives *now*.

**Think of a farmer.** They know the harvest will be big. But they still need money to eat between planting and harvest. That gap is called cash flow, and it kills good businesses.

**Practical rule for beginners:**

- Small business, tight cash → set the maximum CAC at first-order margin.
- Strong cash reserves, proven repeat rate → allow CAC up to 40–60% of LTV.
- Never use LTV numbers you cannot prove with real order history.

---

## Lead Generation Math Is Slightly Different

Sana sells online, so a conversion is a sale. Dr. Ayesha gets leads, so we add one step: not every lead becomes a customer.

> **Max cost per lead = Max CAC × Lead-to-customer rate**

Dr. Ayesha's numbers:

- Average patient value (margin): PKR 12,000
- 25% of leads become patients (0.25)
- Max cost per lead = 12,000 × 0.25 = **PKR 3,000**

If her cost per lead is PKR 1,350, she is comfortably profitable. If it hits PKR 3,500, she is losing money — even though "leads are cheap."

We go much deeper on lead quality in Lesson 0.6.

---

## How to Use the Calculator Template

Open `templates/funnel-math-calculator.csv` in Excel or Google Sheets.

**Step 1.** Fill in only the yellow input rows. Do not touch the formula rows.
**Step 2.** Enter AOV, all your costs, your conversion rate and your repeat rate.
**Step 3.** Read the three output numbers at the bottom:
- Contribution margin
- Breakeven ROAS
- Maximum cost per sale (and per lead)

**Step 4.** Write the maximum cost per sale on a sticky note. Put it on your screen.

**Step 5.** Redo this every 90 days. Costs change. Prices change. Old math becomes wrong math.

---

## 📖 Real-World Example: TaskFlow's Expensive Mistake

TaskFlow is a small SaaS startup in Islamabad. SaaS means software that customers pay for monthly. They sell project software to construction firms for USD 60 per month.

The founder was proud. "Our cost per signup is only $80. That is cheap!"

Then we did the math properly.

- Monthly price: $60
- Server and support cost per customer: $12
- Monthly contribution margin: **$48**
- Average customer stays: 9 months
- **LTV = 48 × 9 = $432**

So $80 per signup looks great. But there was a hidden problem: only **1 in 4 free trials became a paying customer**.

- Real CAC = $80 × 4 = **$320 per paying customer**
- LTV = $432
- Payback time: $320 ÷ $48 = **6.7 months**

TaskFlow was profitable on paper. But they only got their money back after almost 7 months, and the average customer left after 9. They had 2 months of profit per customer.

Worse, they had to pay Google every month while waiting. They ran out of cash in month 5.

**The fix was not in Google Ads.** They did three things:

1. Charged annual plans upfront with 2 months free (cash arrives on day one)
2. Improved onboarding, raising trial-to-paid from 25% to 38%
3. Counted *paying customers* as their conversion, not free trials

New real CAC: $80 × 2.6 = **$208**. Payback: 4.3 months. The business survived.

---

## 📊 Mastery Score

**Level: Intermediate**

This is the first lesson where you must be able to *calculate*, not just understand. Do not move on until the numbers feel easy.

---

## 📌 Key Takeaways

- Contribution margin (AOV − COGS) is the money that can pay for ads.
- Breakeven ROAS = AOV ÷ Contribution Margin. Never target breakeven; target 1.3–1.5x above it.
- Cost per sale = Cost per click ÷ Conversion rate. Fixing the page beats fixing the bid.
- LTV lets you bid higher, but only if the business has the cash to wait.
- For lead gen, always multiply by the lead-to-customer rate. Cheap leads can still be a loss.

---

## ☑️ Self-Assessment

1. Can you write the breakeven ROAS formula from memory?
2. What is your contribution margin on one sale?
3. If your conversion rate doubles, what happens to your cost per sale?
4. Do you know your business's repeat purchase rate, or are you guessing?
5. How many months does it take to get your ad money back?

---

## 🧠 Quiz

**1. AOV is PKR 8,000 and COGS is PKR 5,000. What is the contribution margin?**
a) PKR 13,000
b) PKR 3,000
c) PKR 8,000
d) PKR 1,600

**2. Using those same numbers, what is the breakeven ROAS?**
a) 1.6x
b) 2.67x
c) 0.6x
d) 3.0x

**3. Cost per click is $2 and conversion rate is 5%. What is the cost per sale?**
a) $10
b) $0.10
c) $40
d) $25

**4. Why is it risky to bid using LTV instead of first-order margin?**
a) Google does not allow it
b) LTV money arrives later, but the ad bill arrives now
c) LTV is always wrong
d) It only works for e-commerce

**5. A clinic's max CAC is PKR 10,000 and 20% of leads become patients. What is the max cost per lead?**
a) PKR 50,000
b) PKR 10,000
c) PKR 2,000
d) PKR 500

---

## 💪 Practical Exercise (30 minutes)

Open the template and fill it in for one real business.

1. Enter AOV and every single cost. Do not skip payment fees.
2. Calculate contribution margin and breakeven ROAS.
3. Calculate your current cost per sale using the cost-per-click formula.
4. Answer in one line: is this business profitable on paid traffic today? Yes or no.
5. If no, write which single number must change, and by how much.

---

## 🎯 Expert Challenge

Build a sensitivity table. This is what separates analysts from operators.

- Make a grid. Conversion rate across the top (1%, 1.5%, 2%, 2.5%, 3%). Cost per click down the side (PKR 20, 30, 40, 50, 60).
- Fill every cell with the resulting cost per sale.
- Colour every cell green if it is below your contribution margin, red if above.
- Now you can see your entire profitable zone on one screen.
- Finally, answer this: at what cost per click does your business stop working, even at your best conversion rate? That number is your true ceiling.

---

## ✅ Quiz Answers

1 — **b**. 8,000 − 5,000 = PKR 3,000.
2 — **b**. 8,000 ÷ 3,000 = 2.67x.
3 — **c**. 2 ÷ 0.05 = $40.
4 — **b**. Cash flow. Future money cannot pay today's invoice.
5 — **c**. 10,000 × 0.20 = PKR 2,000.

---

**Next lesson:** 0.4 — Profit, Not Just Sales: Why ROAS Can Lie
