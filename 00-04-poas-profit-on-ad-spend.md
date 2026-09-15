# Lesson 0.4 — Profit, Not Just Sales: Why ROAS Can Lie

*Phase 0 · Know Your Numbers Before You Spend — Module 0 · Know What a Customer Is Worth*

---

## Quick Recap From Lesson 0.3

You learned contribution margin and breakeven ROAS. Now we fix a serious problem: **ROAS can look excellent while the business quietly loses money.**

---

## 🎯 What You Will Learn

- Why ROAS lies, and when it lies the most
- What POAS is and how to calculate it
- The four hidden costs that destroy real profit: fees, refunds, shipping and tax
- Three ways to send profit data to Google, from easy to advanced
- How to spot a "profitable" account that is actually losing money

---

## The Problem With ROAS

ROAS = revenue ÷ ad spend. It treats every rupee of revenue as equal.

But revenue is not equal. Some products earn you 60% margin. Some earn you 8%.

**Think of two shops in the same market.** One sells gold jewellery. One sells sugar. Both take PKR 100,000 in one day. The jewellery shop keeps PKR 30,000. The sugar shop keeps PKR 3,000. Same revenue. Completely different business.

ROAS cannot tell the difference. It sees two shops with identical numbers.

Google's AI sees the same thing. If you tell Google to chase revenue, it will happily sell your sugar all day.

---

## What Is POAS?

**POAS = Profit On Ad Spend.**

> **POAS = Gross profit ÷ Ad spend**

Where gross profit is revenue minus *all* the variable costs of delivering the order.

The magic of POAS is how easy it is to read:

| POAS | Meaning |
|---|---|
| Below 1.0 | You are losing money |
| Exactly 1.0 | You break even |
| 1.5 | You keep PKR 0.50 profit for every PKR 1 of ad spend |
| 2.0 | You double your ad money |

No mental maths. No comparing against a breakeven number. **1.0 is the line.**

---

## The Four Hidden Costs That Kill Profit

Most accounts ignore at least two of these. Let's fix that.

### 1. Sales tax / VAT / GST

This is the most common mistake in the world.

If your product page shows PKR 5,000 including 18% sales tax, then PKR 763 of that is not your money. It belongs to the government.

But most tracking sends the full PKR 5,000 to Google as the conversion value. Google now thinks you earned 18% more than you did.

✅ **Fix:** always send conversion values *excluding* tax.

### 2. Shipping costs

"Free delivery" is never free. You pay it.

If you offer free delivery on a PKR 5,000 order and it costs you PKR 300, your real revenue is PKR 4,700.

Also watch the reverse case: if the customer pays PKR 200 for shipping, that PKR 200 is not profit. It usually does not even cover your cost.

### 3. Payment and platform fees

- Card gateways: usually 2–3%
- Cash on delivery: often 1.5–3% plus a fixed fee
- Marketplaces: can be 5–15%

On thin margins, fees alone can decide profit or loss.

### 4. Refunds and returns

This is the silent killer, especially in fashion and electronics.

If 15% of orders come back, your real revenue is 15% lower — but you often still paid the shipping both ways.

⚠️ **Important:** Google counts a conversion when the order is placed. It does not know about the refund 20 days later. Your reported ROAS stays high. Your bank account does not.

We fix this properly with conversion adjustments in Module 7.

---

## Calculating POAS: A Worked Example

Sana's store, one month.

| Line | Amount (PKR) |
|---|---|
| Revenue (as Google reports it) | 1,000,000 |
| Ad spend | 250,000 |
| **Reported ROAS** | **4.0x** ✅ Looks great |

Now the real numbers:

| Line | Amount (PKR) |
|---|---|
| Revenue including tax | 1,000,000 |
| Less sales tax (18%) | −152,542 |
| **Net revenue** | **847,458** |
| Less product cost (40%) | −400,000 |
| Less shipping | −60,000 |
| Less payment fees (2.5%) | −21,186 |
| Less refunds (8% of orders) | −67,797 |
| **Gross profit** | **298,475** |
| Ad spend | 250,000 |
| **POAS** | **1.19** |

A 4.0x ROAS turned into a POAS of 1.19.

She is still profitable — but only just. And she has not yet paid rent, salaries or her own time. A ROAS drop to 3.4x would push her into a real loss, while her dashboard still showed a "good" number.

---

## Not All Products Deserve the Same Bid

This is where POAS becomes a weapon.

Sana sells three products:

| Product | Price | Margin % | Margin (PKR) |
|---|---|---|---|
| Water filter | 5,000 | 52% | 2,600 |
| Replacement cartridge | 1,200 | 68% | 816 |
| Steel water bottle | 900 | 15% | 135 |

Google's AI, chasing revenue, will push hard on the PKR 5,000 filter and ignore the cartridge. But look again. The cartridge has the best margin percentage *and* customers buy it 4 times a year.

Meanwhile, the bottle at 15% margin can almost never be sold profitably through ads. Every bottle sale drags her average down.

**What a CMO does:**

1. Group products into profit tiers (high, medium, low).
2. Push budget to the high tier.
3. Exclude or de-prioritise the low tier.
4. Send profit — not revenue — as the conversion value.

The exact method for this (custom labels in Merchant Center) is in Lesson 6.1. The thinking starts here.

---

## Three Ways to Get Profit Into Google

You do not need to be a developer for the first two.

### Level 1: The Blended Margin Method (easy, start today)

Multiply every conversion value by your average margin.

If your average margin is 30%, send 30% of the order value instead of 100%.

- Pros: takes 15 minutes, works immediately
- Cons: treats every product the same

Good enough for single-product businesses and most service businesses.

### Level 2: Category Margin Tiers (medium)

Split products into 3–4 margin groups. Send a different margin rate for each group.

- Pros: much closer to the truth
- Cons: needs a small change in your tracking setup

This is the sweet spot for most stores.

### Level 3: True Profit Per Item (advanced)

Your website sends the real profit for each specific product with every order.

- Pros: Google's AI optimises for actual profit
- Cons: needs developer help and a clean product cost database

This is what the top 1% run. We build it in Lesson 12.3.

⚠️ **Whichever level you use, be consistent.** Never switch methods in the middle of a month. Your data will become impossible to read, and Smart Bidding will get confused.

---

## 📖 Real-World Example: The Agency That Nearly Lost a Client

Bilal runs a small agency from Rawalpindi with three US clients. His best client sold sports supplements.

For six months he reported a 4.8x ROAS. The client was happy. Bilal was proud.

In month seven the client called. "We are shutting down the ads. We are losing money."

Bilal was shocked. So he sat with the client's accountant for two hours. Here is what they found on an average $100 order:

- Product cost: $38
- Shipping (free over $50): $9
- Payment fees: $3
- Refund allowance (12% return rate): $12
- **Gross profit: $38**

Ad spend per order was $100 ÷ 4.8 = **$20.83**.

- POAS = 38 ÷ 20.83 = **1.82**

That still looks fine. But then the accountant added the parts Bilal never saw: warehouse staff, the 3PL monthly fee, customer support and software. Those cost about $16 per order.

- Real profit per order: $38 − $16 − $20.83 = **$1.17**

The client was working extremely hard for one dollar per order.

**What Bilal did next saved the account:**

1. He got the real cost of every product from the client (a 40-minute call).
2. He switched conversion values from revenue to profit, using Level 2 tiers.
3. He excluded 22 low-margin products from the shopping feed.
4. He set the bid target on POAS, not ROAS.

Two months later: reported ROAS *dropped* to 3.6x. The client's profit per order rose to $9.40.

**The dashboard got worse. The business got better.** Bilal now leads every client report with POAS, and he has never lost a client since.

---

## 📊 Mastery Score

**Level: Advanced**

Most agencies never reach this lesson. If you can explain POAS to a business owner in five minutes, you can charge more than your competitors.

---

## 📌 Key Takeaways

- ROAS treats all revenue as equal. POAS treats profit as what matters.
- POAS = gross profit ÷ ad spend. Below 1.0 you are losing money.
- Always remove tax, shipping, fees and refunds from conversion values.
- Start with a blended margin today; move to profit tiers, then true profit per item.
- A falling ROAS with a rising POAS is a win. Teach your client to read it that way.

---

## ☑️ Self-Assessment

1. Do your conversion values include sales tax right now? Check today.
2. What is your business's refund rate? Can you prove it?
3. Which of your products should probably never be advertised?
4. Can you explain the difference between ROAS and POAS in two sentences?
5. Which of the three levels of profit tracking can you realistically build this month?

---

## 🧠 Quiz

**1. What does a POAS of 1.0 mean?**
a) You doubled your money
b) You broke even
c) You lost half your spend
d) Your ROAS is 100x

**2. Which cost is most often forgotten in conversion values?**
a) Product cost
b) Sales tax / VAT
c) Ad spend
d) Website hosting

**3. Why can a 4x ROAS still mean a loss?**
a) Because Google reports late
b) Because margins, fees, refunds and tax are not in the ROAS number
c) Because 4x is a low number
d) Because ROAS only counts mobile users

**4. Your reported ROAS drops but POAS rises. What happened?**
a) Something broke
b) You are selling fewer but more profitable orders
c) Your tracking is wrong
d) Google raised your CPC

**5. Which is the correct first step for a beginner with no developer?**
a) Build a BigQuery profit pipeline
b) Send true profit per item
c) Multiply conversion values by a blended margin
d) Stop using conversion tracking

---

## 💪 Practical Exercise (25 minutes)

Take any account or business you have access to.

1. Find last month's revenue and ad spend. Calculate ROAS.
2. Now subtract tax, product cost, shipping, fees and refunds.
3. Calculate POAS.
4. Write both numbers side by side in one line.
5. Send that one line to the business owner and ask: "Did you know this?"

That single message has won many people a client.

---

## 🎯 Expert Challenge

Build a profit tier map for a real product catalogue.

- List every product with its price and true cost.
- Calculate margin percentage and margin amount for each.
- Sort them into four tiers: Hero (high margin, high volume), Steady, Weak, and Kill.
- For the Kill tier, calculate exactly how much money the account lost on them last quarter.
- Write a one-page recommendation: which products to exclude, which to push, and the expected profit change. Include the risk that removing products reduces total revenue, and say how you would monitor it.

---

## ✅ Quiz Answers

1 — **b**. POAS 1.0 is exactly breakeven.
2 — **b**. Tax is included in the price but is not your money.
3 — **b**. ROAS ignores every cost except ad spend.
4 — **b**. Fewer but better orders. This is usually a success, not a failure.
5 — **c**. Blended margin takes 15 minutes and beats doing nothing.

---

**Next lesson:** 0.5 — Landing Pages That Turn Clicks Into Sales
