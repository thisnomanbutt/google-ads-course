# Lesson 13.1 — Run a Fair Test Instead of Guessing

*Phase 7 · Proving What Works, and Growing — Module 13 · Prove What Actually Works*

---

## Quick Recap From Module 12

You can measure profit at business level. Now we prove which changes actually caused the improvement — rather than assuming.

---

## 🎯 What You Will Learn

- Why before-and-after comparisons are usually wrong
- The experiment types available, and what each is for
- How to calculate the sample size you need before starting
- How to read a result honestly, including a null result
- The experiment discipline that compounds over years

---

## Why Before-and-After Comparisons Fail

The standard approach: change something, compare last month to this month, conclude it worked.

**This is wrong more often than it is right.**

### What else changed in that month

- Seasonality (Lesson 10.3)
- Competitor activity (Lesson 8.4)
- Your own other changes
- A promotion
- Weather, news, a holiday
- Random variation

**You cannot separate your change from any of these.** You changed one thing in a world where a hundred things changed.

**Think of a farmer who fertilises one field and gets a better harvest.** Was it the fertiliser, or the rain? Without an unfertilised field alongside it, they will never know — and they will spend money on fertiliser for years without evidence.

**An experiment gives you the second field.**

---

## The Experiment Types

### 1. Campaign Experiments (drafts and experiments)

Split traffic between your original campaign and a modified version.

**What you can test:** bid strategies, targets, keywords, match types, settings, structure.

**How it works:** you create a draft, modify it, then run it as an experiment with a chosen traffic split.

**This is the workhorse.** Most of your testing will use this.

### 2. Performance Max Experiments

Test PMax against a control, or test different PMax configurations.

**Particularly useful for:** the incrementality question from Lesson 6.3 — does PMax add anything beyond your Search campaigns?

### 3. Ad Variations

Test ad copy changes across many campaigns at once.

**What you can test:** find-and-replace in headlines, swapping descriptions, updating final URLs.

**Good for:** rolling out a copy change and measuring it, rather than assuming.

### 4. Video Experiments

Test different video creative against each other.

### 5. Landing page testing

⚠️ **Google Ads cannot split-test landing pages directly.** You need a separate tool, or you can use a campaign experiment where the experiment arm points to a different final URL.

**The cleaner method** is usually a dedicated testing tool that splits at the page level, so organic traffic is included too.

---

## The Sample Size Problem

**This is where most experiments fail, and it fails before the test starts.**

### The problem

You run a test for two weeks. The experiment arm has 18 conversions, the control has 14. The experiment is "28% better".

**That difference is almost certainly noise.**

With numbers that small, you would see a difference that large by chance frequently, even if both arms were identical.

### The rule

> **Calculate the sample size you need BEFORE you start. If you cannot reach it, do not run the test.**

### The rough guide

To detect a given improvement with reasonable confidence, you need roughly this many conversions **per arm**:

| Improvement you want to detect | Conversions needed per arm |
|---|---|
| 50% | ~50 |
| 30% | ~150 |
| 20% | ~350 |
| 10% | ~1,400 |
| 5% | ~5,500 |

**Read that table carefully.** Detecting a 10% improvement needs about 1,400 conversions in each arm.

⚠️ **This is why most accounts cannot test small changes.** A campaign producing 60 conversions a month, split 50/50, gives you 30 per arm per month. To reach 350 per arm takes almost a year.

### What to do about it

**Option 1: Test big changes.** A completely different offer or a basically different landing page might produce a 40% difference, which you can detect in weeks.

**Option 2: Run longer.** Accept that a meaningful test takes three months.

**Option 3: Pool campaigns.** Test across several similar campaigns at once for more volume.

**Option 4: Test at a higher level.** Use a geo experiment (Lesson 13.2) measuring total business results rather than campaign conversions.

**Option 5: Do not test it.** Make the change based on judgement, monitor, and be honest that you did not prove it.

⚠️ **Option 5 is legitimate.** Pretending a small test proved something is worse than admitting you made a judgement call.

---

## Setting Up a Campaign Experiment

### Step 1: Write the hypothesis first

Before touching anything, write:

> **"I believe that [change] will [effect] because [reason]. I will judge this on [metric], and I need [number] conversions per arm to be confident."**

**Example:**

> "I believe that moving from phrase match to broad match will reduce cost per conversion by at least 20%, because Smart Bidding has enough data to steer it (Lesson 3.3). I will judge this on cost per conversion. I need about 350 conversions per arm, which at current volume takes 9 weeks."

**Writing this prevents three common failures:**
- Testing something you cannot measure
- Changing the success criterion after seeing the result
- Running a test that could never have produced a conclusion

### Step 2: Create the draft

Campaigns → select the campaign → **Experiments** → New experiment → choose the campaign.

Modify the draft with your single change.

⚠️ **One change per experiment.** If you change match type and bid strategy together, you will learn nothing about either.

### Step 3: Set the split

**50/50 is the default and usually correct.** It reaches significance fastest.

Use an uneven split (for example 30/70) only when the change carries real risk and you want to limit exposure.

### Step 4: Set the dates

Set an end date based on your sample size calculation, not on convenience.

⚠️ **Run for whole weeks.** A test running Monday to Friday captures only weekday behaviour.

⚠️ **Avoid anomalous periods.** Do not run a test through Ramadan, Black Friday, or a promotion (Lesson 10.3).

### Step 5: Wait

**Do not check daily.** Do not stop early because it looks good.

⚠️ **Stopping a test early when it looks positive is the most common way to get a wrong answer.** Random variation means a test will pass through periods of apparent success. Stopping at that moment guarantees a false positive.

**Set the end date. Honour it.**

---

## Reading the Result

Google shows the difference between arms and a confidence indicator.

### The three possible outcomes

**1. Significant improvement**
The experiment arm performed better, with statistical confidence.
→ **Apply the change.**

**2. Significant decline**
The experiment arm performed worse, with confidence.
→ **Do not apply.** And you have learned something valuable — record it.

**3. No significant difference**
The arms performed similarly, or the difference is within noise.
→ **This is a real result, not a failure.**

### What a null result actually means

⚠️ **A null result is really useful and constantly misinterpreted.**

It means one of two things:
- The change really made no difference — **useful, stop doing it**
- Your sample was too small to detect the difference — **you learned nothing**

**Which one it is depends on whether you hit your calculated sample size.** If you did and found no difference, the change does not matter. If you did not, the test was inconclusive.

**Record null results.** Knowing that ad copy changes made no difference in a market saves you from testing it again next year.

### The trap of the significant-looking small test

| Arm | Conversions | Cost per conversion |
|---|---|---|
| Control | 41 | PKR 2,140 |
| Experiment | 52 | PKR 1,780 |

This looks like a 17% improvement. **With 41 and 52 conversions, it is well within the range of random variation.**

Google's confidence indicator will usually tell you this. **Read it, and believe it.**

---

## What to Test, in Priority Order

Test the things that could produce a large difference. Small tests need volumes most accounts do not have.

| Priority | What to test | Typical effect size |
|---|---|---|
| 1 | **A different offer** (Lesson 0.2) | Very large |
| 2 | **A different landing page concept** | Large |
| 3 | Bid strategy change | Medium to large |
| 4 | Match type strategy (Lesson 3.3) | Medium |
| 5 | Campaign structure change | Medium |
| 6 | New audience or targeting approach | Medium |
| 7 | Ad copy angle change (not wording) | Small to medium |
| 8 | Individual headline changes | Small — usually not testable |
| 9 | Button colours and small design changes | Negligible |

**Most accounts should never test items 8 and 9.** The effect is too small to detect and the opportunity cost is high.

---

## The Testing Discipline

The value of experimentation compounds. Here is how to build it.

### Keep a test log

| Date | Hypothesis | Change | Sample achieved | Result | Decision | Learned |
|---|---|---|---|---|---|---|

**After two years, this document is one of your most valuable assets.** It tells you what works in your market, and prevents you retesting settled questions.

### Run one test at a time per campaign

Two simultaneous experiments on the same traffic interfere with each other.

### Record predictions before results

Write what you expect to happen. Then compare.

**This calibrates your judgement**, and it is uncomfortable in a useful way. Most people discover their predictions are worse than they assumed.

### Be willing to be wrong

⚠️ **The most valuable experiments are the ones that contradict you.**

If every test confirms what you already believed, you are either testing trivial things or reading results with bias.

---

## 📖 Real-World Example: Three Tests, Three Lessons

Bilal ran three experiments on the same account in one quarter. Each taught something different.

### Test 1: The one that could never have worked

**Hypothesis:** changing the primary call-to-action button from "Get a Quote" to "Get My Free Quote" will increase conversion rate by 8%.

**The problem, which he spotted while writing the hypothesis:** to detect 8% he would need roughly 2,200 conversions per arm. The account produced 140 a month. **That is a 31-month test.**

**He did not run it.** He made the change based on judgement, noted it in the log as unproven, and moved on.

**The lesson:** the sample size calculation saved him three months of running a test that could never have concluded. **Calculating first is the discipline; not running the test was the correct outcome.**

### Test 2: The one that contradicted him

**Hypothesis:** moving from phrase match to broad match will reduce cost per conversion by at least 20%, because all four conditions from Lesson 3.3 are met.

**He was confident.** The account had good tracking, Smart Bidding with a stable target, 140 conversions a month, and 310 negatives.

**Sample size needed:** 350 per arm for a 20% effect. At 70 per arm per month, that meant a 10-week test.

**Result after 10 weeks:**

| Arm | Conversions | Cost per conversion |
|---|---|---|
| Control (phrase) | 358 | £48.20 |
| Experiment (broad) | 341 | £51.60 |

**Broad match was 7% worse, and the result was not statistically significant.**

**What he concluded:** in this account, in this market, broad match offered no advantage. Not "broad match does not work" — that would overgeneralise from one test.

**What he did:** kept phrase match, recorded the result, and noted the conditions under which he would retest — namely if conversion volume doubled, giving the AI more to steer with.

**The lesson:** he was confident and wrong. Without the test he would have rolled broad match out across every client on that basis. **The test cost ten weeks and saved him a systematic mistake across a portfolio.**

### Test 3: The one that worked, and by more than expected

**Hypothesis:** a dedicated landing page addressing the single biggest objection will increase conversion rate by at least 25%, because the current page is a generic homepage (Lesson 0.5).

**Sample size needed:** roughly 200 per arm for a 25% effect. At 70 per arm per month, a 6-week test.

He built the page properly using the Lesson 0.5 skeleton: message match to the ad, the objection answered in the headline, proof above the fold, no navigation.

**Result after 6 weeks:**

| Arm | Clicks | Conversions | Conversion rate | Cost per conversion |
|---|---|---|---|---|
| Control (homepage) | 4,120 | 189 | 4.6% | £51.10 |
| Experiment (dedicated page) | 4,088 | 331 | **8.1%** | **£29.20** |

**A 76% improvement in conversion rate. Comfortably significant.**

**What he did next — and this is the part that matters:** he did not simply apply the change. He built dedicated pages for the other four intent clusters (Lesson 3.5), and tested each one the same way.

Three of the four also won. One produced no difference, which told him that cluster's traffic was not objection-driven and needed a different approach.

### What the quarter produced

| Test | Cost | Outcome | Value |
|---|---|---|---|
| 1. Button copy | Zero — not run | Avoided | 3 months saved |
| 2. Broad match | 10 weeks | Contradicted the hypothesis | Prevented a portfolio-wide mistake |
| 3. Landing page | 6 weeks | 76% improvement | Rolled out to 4 more clusters |

**One win, one useful failure, one test correctly not run.**

**That ratio is normal and healthy.** An agency whose every test succeeds is not testing honestly.

---

## 📊 Mastery Score

**Level: Master**

Experimentation is the discipline that separates knowledge from opinion. It is slow, it is often uncomfortable, and it compounds.

---

## 📌 Key Takeaways

- Before-and-after comparisons cannot separate your change from everything else that changed.
- Calculate the sample size before starting. If you cannot reach it, do not run the test.
- Write the hypothesis and the success criterion in advance, so you cannot move the goalposts.
- Never stop a test early because it looks good. That guarantees false positives.
- A null result is a real result. Record it, and stop doing the thing.

---

## ☑️ Self-Assessment

1. How many conversions per month does your main campaign produce? What effect size could you detect?
2. Have you ever stopped a test early because it looked positive?
3. Do you keep a test log? Could you say what you learned last year?
4. When did a test last contradict something you believed?
5. Are you testing things large enough to matter, or button colours?

---

## 🧠 Quiz

**1. Why are before-and-after comparisons usually wrong?**
a) The data is inaccurate
b) You cannot separate your change from seasonality, competitors and random variation
c) Google delays reporting
d) They take too long

**2. Roughly how many conversions per arm do you need to detect a 10% improvement?**
a) 50
b) 150
c) 1,400
d) 20

**3. What is the most common way to get a false positive?**
a) Running too long
b) Stopping the test early when it looks good
c) Using a 50/50 split
d) Testing on weekdays

**4. What does a null result mean?**
a) The test failed
b) Either the change really made no difference, or your sample was too small — check which
c) Google made an error
d) You should test again immediately

**5. What should you do if the needed sample size is unreachable?**
a) Run it anyway and report the result
b) Make the change on judgement, log it as unproven, and move on
c) Halve the sample size need
d) Stop advertising

---

## 💪 Practical Exercise (35 minutes)

Design one experiment properly.

1. Choose a change you are considering making.
2. Write the hypothesis in the format given: change, expected effect, reason, metric.
3. Estimate the effect size you expect.
4. Look up the needed sample size per arm from the table.
5. Calculate how long that would take at your current conversion volume.
6. Decide honestly: run it, run it for longer, test something bigger, or do not test.

---

## 🎯 Expert Challenge

Build a testing programme for an agency.

- Build the test prioritisation framework: rank potential tests by expected effect size multiplied by the value if it wins, divided by the time to reach significance. This surfaces the tests actually worth running.
- Build the sample size calculator as a shared tool, so nobody launches an unmeasurable test again.
- Design the test log template with fields for the prediction, the result, and what was learned — and make recording the prediction mandatory before launch.
- Create the cross-client learning library: results from every client, tagged by industry and test type. After two years this tells you what generally works, which is really valuable intellectual property.
- Design the governance: one test at a time per campaign, no tests during anomalous periods, no early stopping, and a named person who can veto a test that cannot reach significance.
- Then measure your own calibration. Over twenty tests, compare your written predictions to the actual results. Calculate what percentage you got directionally right. Most practitioners discover they are around 55–65% — barely better than chance — and that discovery is the beginning of genuine expertise.

---

## ✅ Quiz Answers

1 — **b**. Too many other variables changed at the same time.
2 — **c**. Roughly 1,400 per arm.
3 — **b**. Early stopping on a positive-looking result.
4 — **b**. Really no effect, or an insufficient sample. Check which.
5 — **b**. Judgement call, logged honestly as unproven.

---

**Next lesson:** 13.2 — Prove Your Ads Caused the Sales
