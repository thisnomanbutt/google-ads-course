# Lesson 11.1 — How Smart Bidding Thinks, and How to Guide It

*Phase 6 · Automation and Working With Data — Module 11 · Save Time With Scripts and Automation*

---

## Quick Recap From Module 5

You know how to configure Smart Bidding. This lesson is about understanding what it is actually doing — because you cannot steer something you do not understand.

---

## 🎯 What You Will Learn

- What signals Smart Bidding actually uses
- How the prediction model works, in plain language
- The five levers you really have to steer it
- What confuses the model, and what strengthens it
- How to think about the machine as a colleague rather than a black box

---

## What "70+ Signals" Actually Means

Google says Smart Bidding uses "millions of signal combinations". That phrase is used a lot and explained rarely.

Here is what it means in practice.

### The signal categories

**About the person**
- Device, operating system, browser
- Precise location, and location type (home, work, travelling)
- Language settings
- Whether they are on a remarketing list
- Their previous interactions with your site
- Their broader search behaviour patterns
- Demographic signals where available

**About the moment**
- Exact time of day and day of week
- Whether it is a holiday or unusual period
- Seasonality patterns for this query
- Recent browsing session behaviour

**About the query**
- The exact wording, not just the matched keyword
- The implied intent
- Whether it is navigational, informational or transactional
- Query length and specificity

**About your ad and page**
- Which ad combination will be shown
- Which landing page they will reach
- Your historical performance for similar auctions
- Your Quality Score components

**About the auction**
- How many competitors are present
- The competitive intensity right now
- The position your ad would occupy

**And crucially: the combinations.** Not "mobile" and "9pm" separately, but "mobile, 9pm, Karachi, returning visitor, transactional query" as a combined pattern.

**Think of a doctor diagnosing a patient.** They do not consider temperature, blood pressure and age as separate facts. They consider the pattern those facts form together. A temperature of 38°C means something different in a 6-year-old than in an 80-year-old.

---

## How the Prediction Works

Simplified, but accurate enough to be useful.

### Step 1: Predict the conversion probability

For each auction, the model estimates: *what is the probability this specific person, in this specific moment, converts if they click?*

This is not a guess. It is a prediction from patterns in thousands or millions of previous auctions.

### Step 2: Predict the conversion value

For value-based bidding, it also predicts *how much* this conversion would be worth.

### Step 3: Calculate the bid

> **Bid ≈ Predicted conversion probability × Predicted value ÷ Your target**

Higher probability → higher bid.
Higher predicted value → higher bid.
Tighter target → lower bid.

### Step 4: Learn from the outcome

Was the prediction right? The model updates.

**This loop runs for every auction, continuously.**

---

## What This Means Practically

### 1. Your average CPC is an average of very different bids

A reported average cost per click of PKR 40 might be composed of PKR 12 bids on poor auctions and PKR 95 bids on excellent ones.

**When your average CPC rises, the cause is often a change in the mix of auctions you entered** — not a competitor raising bids (Lesson 8.4).

### 2. The model is only as good as its data

It learns from your conversions. If your conversions measure the wrong thing (Lesson 0.6), it will learn confidently and pursue the wrong outcome.

> **The model is obedient, not wise.**

### 3. Restricting signals makes it worse

Every restriction you apply — narrow schedules, device exclusions, tight locations — removes data the model could have learned from.

⚠️ **Over-restriction is a common and invisible cause of poor Smart Bidding performance.** The model cannot learn that Tuesday evenings convert well if you have blocked Tuesday evenings.

### 4. It needs variety to learn

If every auction you enter is identical, the model cannot distinguish good from bad. Some exploration is necessary, and some of it will lose money.

**That is not waste. That is the cost of learning.**

---

## The Five Levers You Actually Have

You cannot edit the model. You can steer it. Here is how, in order of power.

### Lever 1: What you count as a conversion

**The most powerful lever by far.**

From Lesson 2.3 and Lesson 0.6: the model optimises for whatever you tell it to find.

Change the conversion action, and you change everything the model hunts for. This is why Lesson 7.2's offline conversion loop produces such dramatic shifts — it changes the definition of success.

**This lever alone is worth more than every bid adjustment combined.**

### Lever 2: The values you assign

From Lesson 5.5: the model bids in proportion to predicted value.

Tell it an implant enquiry is worth six times a checkup, and it will pay roughly six times more for implant traffic.

**Values are how you express business priorities to the machine.**

### Lever 3: The target

From Lesson 5.3: the target works out how selective the model is.

A tighter target means it enters only the auctions it is most confident about. A looser target means it explores further.

**The target is your risk dial.**

### Lever 4: The data you make available

Signals you can add:

- **Audience signals and remarketing lists** (Lesson 6.7) — more context about who this person is
- **Customer Match** — the model knows who is already a customer
- **Enhanced Conversions** (Lesson 7.1) — more complete conversion data to learn from
- **Offline conversions** (Lesson 7.4) — real outcomes rather than proxies
- **Conversion value rules** (Lesson 11.4) — contextual value adjustments

**Each of these makes the model's predictions better.** This is why Phase 4 exists.

### Lever 5: What you exclude

Negatives, placement exclusions, location exclusions.

**Use exclusions to remove what is clearly wrong. Do not use them to fine-tune.** Fine-tuning is the model's job, and it does it better than you can.

---

## What Confuses the Model

Understanding this prevents most Smart Bidding problems.

| Confusion | Effect |
|---|---|
| **Multiple Primary conversions** | Cannot tell which outcome matters (Lesson 2.3) |
| **Inconsistent values** | Cannot learn the value relationship |
| **Frequent changes** | Constantly relearning, never settling (Lesson 5.1) |
| **Broken or partial tracking** | Learns confidently from wrong data (Lesson 2.5) |
| **Too little volume** | Insufficient examples to find patterns |
| **Over-restriction** | Cannot learn about excluded segments |
| **Data fragmentation** | 30 campaigns each with too little data (Lesson 1.4) |
| **Structural changes mid-flight** | The situation it learned about no longer exists |

**Every one of these is something you control.**

---

## What Strengthens the Model

| Action | Effect |
|---|---|
| One clear Primary conversion | Unambiguous objective |
| Accurate, checked values | Correct value predictions |
| Enhanced Conversions | 10–30% more data to learn from |
| Offline conversion feedback | Learns from real outcomes, not proxies |
| Consolidated campaigns | More data per model |
| Audience signals | Better context per auction |
| Stability | Time to settle and refine |
| Enough volume | Enough examples for reliable patterns |

**Notice that almost every item is something covered earlier in this course.** Phase 4 and Module 5 exist exactly to make this model work well.

---

## Thinking About the Machine Correctly

The most useful mental shift is this.

**Stop thinking of Smart Bidding as a setting. Start thinking of it as a very capable, very literal colleague.**

This colleague:
- Processes more data than you ever could
- Never gets tired, distracted or emotional
- Has no understanding of your business
- Does exactly what you ask, exactly as you asked it
- Cannot tell you when your instruction was wrong

**Your job is to give clear, correct instructions and useful information.** Their job is execution.

**Think of an extremely capable new employee on their first day.** Brilliant at analysis, knows nothing about your company. If you say "get me as many leads as possible", they will do exactly that — including the worthless ones. If you say "get me leads from construction firms with more than 20 employees, and here is how to tell", they will excel.

**The quality of your instruction works out the quality of their work.** That is the whole of Module 11.

---

## Where Human Judgement Still Wins

Be clear about this too, because the opposite error also exists.

**The model cannot:**

- Know your margins unless you tell it (Lesson 0.4)
- Know your cash flow limits (Lesson 0.3)
- Know that a customer type is operationally difficult to serve
- Know about a supply problem next month
- Know your competitor is about to launch
- Know your business strategy is changing
- Judge whether an offer is really good (Lesson 0.2)
- Decide whether a channel is worth the measurement complexity

**These are business decisions, and they remain yours.** This is Lesson 0.1, returning at the end of the course with more evidence behind it.

---

## 📖 Real-World Example: Watching the Model Change Its Mind

TaskFlow's offline conversion setup (Lesson 7.2) produced a natural experiment in how the model thinks.

Before the change, the Primary conversion was **trial signup**. After, it was **closed customer with real contract value**.

Nothing else changed — same keywords, same ads, same budget, same landing pages. Only the definition of success.

Bilal recorded what the model did over the following twelve weeks.

### What it bid up

| Segment | Bid change | Why it made sense |
|---|---|---|
| Queries containing "multiple sites" | **+180%** | Larger firms, bigger contracts |
| Queries containing "compliance" or "audit" | **+140%** | Regulated firms, higher value |
| Desktop, 9am–5pm weekdays | **+95%** | Business users at work |
| Postcodes with industrial estates | **+70%** | Actual construction businesses |
| Queries over 6 words | **+65%** | Specific need, researched buyer |
| Returning visitors, 3+ sessions | **+120%** | Serious evaluation |

### What it bid down

| Segment | Bid change | Why it made sense |
|---|---|---|
| Queries containing "free" | **−85%** | Never became paying customers |
| Mobile, 8pm–midnight | **−70%** | Curious browsing, not buying |
| Queries containing "simple" or "easy" | **−60%** | Very small operations |
| One specific competitor comparison term | **−90%** | Many trials, zero customers |
| Queries containing "template" | **−95%** | Wanted a spreadsheet, not software |

### The observations that matter

**1. None of this was visible before.** When every trial counted equally, all these segments looked similar. The model had no way to distinguish them because the data did not distinguish them.

**2. Some of it was surprising.** The team had assumed mobile evening traffic was busy site managers checking their phones after work. The data showed they were curious browsers who never bought. Nobody would have guessed that.

**3. Some of it a human could never have found.** "Postcodes with industrial estates" is not a targeting option. The model found the pattern from location performance data and acted on it. No human would have thought to check.

**4. The competitor comparison term.** It had produced 84 trials in six months and zero customers. On the old measurement it looked like one of their best keywords. It was their worst.

### The result, restated from Lesson 7.2

| Metric | Before | After |
|---|---|---|
| Trials | 412 | 247 |
| Paying customers | 115 | **178** |
| Cost per customer | $171 | **$112** |

### What actually happened, in one sentence

**They did not improve their advertising. They improved their instruction.**

The model was equally capable before and after. It was simply pointed at the wrong target, and it pursued that wrong target with complete efficiency.

**This is the core insight of the entire course**, and it is why Module 0 came first.

---

## 📊 Mastery Score

**Level: Master**

Understanding how the machine thinks is what lets you work with it rather than against it. Most practitioners never develop this model.

---

## 📌 Key Takeaways

- Smart Bidding predicts conversion probability and value for each auction, then bids proportionally.
- The model is obedient, not wise. It pursues exactly what you tell it to find.
- Your five levers: what you count, what values you assign, your target, the data you provide, and what you exclude.
- Over-restriction and data fragmentation are common, invisible causes of poor performance.
- Business judgement — margins, cash flow, strategy, offer quality — remains entirely human.

---

## ☑️ Self-Assessment

1. Can you explain in one sentence what Smart Bidding is optimising for in your account?
2. Is that the thing that actually makes the business money?
3. Which of the five levers have you on purpose used in the last quarter?
4. Are you over-restricting anywhere — schedules, devices, locations?
5. What would change if you switched your Primary conversion to real customers?

---

## 🧠 Quiz

**1. What does Smart Bidding predict for each auction?**
a) Your competitor's bid
b) The probability of conversion and the likely value
c) Your Quality Score
d) The final position

**2. Why does your average CPC rise sometimes without competitors changing bids?**
a) Google raised prices
b) The mix of auctions you entered changed
c) Your budget increased
d) It is random

**3. Which is the most powerful lever for steering Smart Bidding?**
a) Bid adjustments
b) What you count as a conversion
c) Ad schedule
d) Keyword match types

**4. Why is over-restriction harmful?**
a) It costs more
b) The model cannot learn about segments you have blocked
c) Google penalises it
d) It is not harmful

**5. What did TaskFlow actually change to improve cost per customer by 35%?**
a) Their keywords
b) The definition of success — what the model was told to find
c) Their budget
d) Their bid strategy

---

## 💪 Practical Exercise (30 minutes)

Audit how well you are instructing the machine.

1. Write down, in one sentence, what your Primary conversion tells Smart Bidding to find.
2. Ask: is that the thing that makes the business money? If not, that is your project.
3. List every restriction on your campaigns — schedules, device adjustments, narrow locations.
4. For each, ask whether it is based on 90 days of data or on assumption. Remove the assumptions.
5. List which of the five levers you have on purpose used, and which you have not.

---

## 🎯 Expert Challenge

Build a signal enrichment programme.

- Audit every signal source available to the model in your account: conversions, values, audiences, Customer Match, Enhanced Conversions, offline data. Score each as set up, partial or missing.
- Prioritise the missing ones by expected impact, and build the setup roadmap.
- Design the restriction audit: every limit on every campaign, its justification, its supporting data, and whether it should be removed.
- Run a natural experiment as TaskFlow did: change one instruction — the Primary conversion, or the value model — and document exactly which segments the model bids up and down over the following 12 weeks.
- Then write the findings as a document. Which patterns did the model find that you would never have found? Which of your assumptions did it contradict? This exercise, done once properly, will improve your judgement more than any amount of reading.

---

## ✅ Quiz Answers

1 — **b**. Conversion probability and value, per auction.
2 — **b**. A changed mix of auctions entered.
3 — **b**. The conversion definition works out everything downstream.
4 — **b**. Blocked segments cannot be learned from.
5 — **b**. They changed the instruction, not the advertising.

---

**Next lesson:** 11.2 — Five Free Scripts That Watch Your Account
