# Lesson 13.3 — Google, Meta and TikTok: Who Gets the Credit?

*Phase 7 · Proving What Works, and Growing — Module 13 · Prove What Actually Works*

---

## Quick Recap From Lesson 12.5

You know that platform-reported revenue adds up to more than actual revenue. This lesson is about building a picture that is honest across every channel.

---

## 🎯 What You Will Learn

- Why attribution models are all wrong, and which are less wrong
- The walled garden problem, stated plainly
- How to build a unified view across channels
- The triangulation method that produces defensible answers
- What to do when the channels disagree

---

## Every Attribution Model Is Wrong

Start from this position and everything else becomes clearer.

**Attribution assigns credit for a sale across the touchpoints that preceded it.** Any rule for doing this is arbitrary, because there is no factual answer to "which touchpoint caused this".

### The models, and how each is wrong

| Model | Rule | How it is wrong |
|---|---|---|
| **Last click** | 100% to the final touch | Ignores everything that created the demand |
| **First click** | 100% to the first touch | Ignores everything that closed the sale |
| **Linear** | Equal credit to all | Treats a banner impression as equal to a demo call |
| **Time decay** | More credit to recent touches | Assumes recency equals importance |
| **Position-based** | 40/20/40 split | Arbitrary numbers |
| **Data-driven** | Google's model, from your data | Only sees channels Google can observe |

### Data-driven attribution: the honest check

Google's data-driven model is really better than the rule-based ones. It uses your actual conversion paths.

**But:**

⚠️ **It only sees what Google can see.** It cannot see a Meta impression, a TikTok view, an email open, or an offline conversation.

**So a "data-driven" model in Google Ads is data-driven *within Google*.** It will never show you that a TikTok video created the demand, because it has no visibility of that video.

**Use it as the best available option inside Google Ads. Do not mistake it for a cross-channel truth.**

---

## The Walled Garden Problem

Google does not share user-level data with Meta. Meta does not share with TikTok. None of them share with each other.

**Each platform sees only its own touchpoints, and claims accordingly.**

### What this produces

From Lesson 12.5, Sana's platforms collectively claimed 2.6× her actual revenue.

**Every platform was reporting honestly by its own rules.** The sum was nonsense.

### Why it cannot be solved with better tracking

You could, in principle, capture every touchpoint yourself with careful UTM tagging (Lesson 11.5) and a data warehouse (Lesson 7.6).

**But you still could not see:**
- Impressions that were never clicked
- Cross-device journeys where the identifier was lost
- People who declined tracking (Lesson 7.5)
- View-through effects on YouTube and Meta
- Offline conversations and word of mouth

⚠️ **A unified view built from click data alone always undervalues awareness channels**, because their effect is mostly through impressions, not clicks.

**This is why Lesson 13.2 exists.** Where attribution reaches its limit, experiments take over.

---

## Building a Unified View

You can still build something much better than reading each platform's dashboard.

### Level 1: The blended view

The simplest useful step.

```
Total revenue ÷ Total spend across all channels = Blended ROAS
```

**What it gives you:** an honest number that cannot be double-counted.
**What it does not give you:** any idea which channel contributed.

**Every business should have this.** It takes ten minutes and it is the number the board should see (Lesson 12.5).

### Level 2: Consistent UTM tagging plus GA4

With disciplined tagging (Lesson 11.5), GA4 becomes a cross-channel reference point.

**Its advantage:** one attribution model applied consistently across all channels, rather than each platform using its own.

**Its limitations:**
- It only sees clicks, not impressions
- It undervalues awareness channels
- It cannot see offline
- Modelled data fills gaps you cannot inspect

**Use it as one input, clearly labelled.**

### Level 3: A data warehouse

From Lesson 7.6: pull spend from every platform, click data from GA4, and outcomes from your order system into BigQuery.

**What this unlocks:**
- Full customer journeys where identifiers persist
- Cohort analysis by first-touch channel (Lesson 12.2)
- Your own attribution model, with rules you choose
- Consistent, permanent history

⚠️ **Building your own attribution model does not solve the fundamental problem.** You will still be assigning arbitrary credit, just with your own arbitrary rules. It is more transparent, not more true.

### Level 4: Triangulation

**This is the answer.** Not one method — three, compared.

---

## The Triangulation Method

For each channel, gather three independent readings.

| Method | What it tells you | Confidence |
|---|---|---|
| **Attribution** | What the platform claims | Low — biased upward |
| **MMM** | Statistical contribution estimate (Lesson 12.4) | Medium |
| **Incrementality test** | Measured causal effect (Lesson 13.2) | **High** |

### How to use it

**Where all three agree:** act with confidence.

**Where they disagree:** trust them in reverse order of convenience — experiment first, MMM second, attribution last.

**Where you only have attribution:** treat the number as an upper bound, not an estimate.

### A worked triangulation

Sana's channels, after Lessons 12.4 and 13.2:

| Channel | Attribution share | MMM estimate | Geo test result | Verdict |
|---|---|---|---|---|
| Search — brand | 22% | 4% | −2.9% when paused | **Overstated. Reduce.** |
| Search — non-brand | 15% | 16% | +18% lift when scaled | **Confirmed. Scale.** |
| Shopping | 21% | 14% | Not yet tested | Probably somewhat overstated |
| PMax | 11% | 5% | +4% lift when added | **Overstated but incremental** |
| Meta | 6% | 8% | Not yet tested | Probably understated |
| TikTok | 2% | 6% | Not yet tested | **Probably a lot understated** |
| Email | 10% | 6% | Not yet tested | Probably overstated |

**Read the pattern.** Attribution overstates last-touch channels (brand, email) and understates upper-funnel channels (TikTok, Meta). **This pattern is nearly universal.**

### The action list this produces

1. **Test TikTok next** — the largest gap between attribution and MMM, and it points toward under-investment
2. **Test Shopping** — high spend, meaningful gap
3. **Reduce brand** — already validated
4. **Scale non-brand** — already validated

**Prioritise tests by the size of the gap multiplied by the spend involved.** That is where the money is.

---

## When Channels Disagree: A Practical Process

The situation you will actually face: Google says one thing, Meta says another, and the client asks which is right.

### The answer

**"Both, by their own rules. Neither, as a business number."**

### The process

**Step 1: Show the arithmetic.** Add up the revenue every platform claims. Compare to actual revenue. The gap is usually 1.5–3×.

**This one calculation ends most arguments**, because it is undeniable and needs no method debate.

**Step 2: Set up the blended number.** Total revenue over total spend. This is the truth about the whole.

**Step 3: Explain what the platforms are for.** Platform metrics optimise within a platform. They do not compare across platforms.

**Step 4: Propose the honest method.** MMM for allocation, geo tests for validation.

**Step 5: Set expectations.** A proper answer takes a quarter. Anyone offering a definitive cross-channel attribution answer next week is selling something.

⚠️ **Never adjudicate between two platforms' claims using a third platform's data.** Using GA4 to decide whether Google or Meta is right substitutes GA4's arbitrary model for theirs.

---

## The Practical Reporting Structure

Here is what an honest cross-channel report looks like.

### Section 1: The business truth

```
Total revenue          PKR 4,983,000
Total marketing spend  PKR 1,644,000
BLENDED MER                    3.03x
Contribution margin    PKR   753,000  (15.1%)
```

No attribution involved. Undeniable.

### Section 2: Channel view, honestly labelled

```
CHANNEL CONTRIBUTION — estimates, not measurements

Channel        Spend      Platform    MMM est.    Tested?
                          claims
Google Search  374,000    1,918,000   16%         Yes ✅
Google Shop    418,000    1,682,000   14%         No
Google PMax    196,000      688,000    5%         Yes ✅
Meta           224,000      612,000    8%         No
TikTok         156,000      211,000    6%         Scheduled
Email           61,000      498,000    6%         No

NOTE: Platform claims total PKR 5,609,000 against actual
revenue of PKR 4,983,000. Platforms count shared credit.
MMM estimates are ranges with moderate confidence.
Only tested channels have measured causal evidence.
```

⚠️ **That note is the most important part of the report.** It prevents the numbers being misused.

### Section 3: What we know and what we are finding out

```
VALIDATED
- Brand search: incremental at ~15% of reported level. Reduced.
- Non-brand search: strongly incremental. Scaled.

BEING TESTED
- TikTok geo test running, results week 8.

NOT YET TESTED — treat with caution
- Shopping, Meta, Email
```

**Distinguishing measured from estimated is what makes a report trustworthy.**

---

## 📖 Real-World Example: Settling the Argument

Sana's business had reached the point where three agencies were involved: Bilal on Google, a social agency on Meta and TikTok, and an in-house person on email.

**Every quarterly review became an argument.**

The Meta agency reported a 4.1x ROAS. Bilal reported 5.6x on Shopping. The email person reported that email drove 10% of revenue. Each had data supporting their claim, and each was quietly implying the others were overstating.

**Sana had to decide where to put an extra PKR 400,000 a month, and had no basis for the decision.**

### The intervention

Bilal proposed something unusual: he offered to run the analysis **including his own channels**, with the clear possibility that the answer would reduce his budget.

**He set three rules everyone agreed to:**
1. The measurement method would be agreed before any results were produced
2. Total business revenue would be the only outcome measure
3. Whatever the result, budget would move accordingly

### Step 1: The arithmetic that ended the argument

He put one table on screen.

| Channel | Revenue claimed |
|---|---|
| Google Ads | PKR 8,140,000 |
| Meta | PKR 2,190,000 |
| TikTok | PKR 610,000 |
| Email platform | PKR 1,320,000 |
| **Total claimed** | **PKR 12,260,000** |
| **Actual revenue** | **PKR 4,220,000** |

**The platforms collectively claimed 2.9× the real revenue.**

**Nobody argued after that.** It was not a method dispute; it was arithmetic.

### Step 2: The agreed method

- MMM on 118 weeks of data (Lesson 12.4) to produce estimates
- Geo tests on the two channels with the largest gaps, run sequentially
- Blended MER as the headline business metric (Lesson 12.5)

### Step 3: The MMM findings

Shown in Lesson 12.4. Brand search overstated, TikTok and Meta understated.

### Step 4: The tests

**Test 1: Brand search** (Lesson 13.2). Result: incremental, but at ~15% of the reported level. Reduced from PKR 168,000 to PKR 92,000.

**Test 2: TikTok.** The MMM said TikTok was understated. The social agency was pleased; Bilal was sceptical.

**The design:** increase TikTok spend by 150% in 6 test regions, hold 6 control regions constant. 10 weeks.

**Result:**

| | Test regions | Control regions |
|---|---|---|
| Baseline ratio | 0.981 | — |
| During test ratio | 1.062 | — |
| **Lift** | **+8.3%** | — |

- Extra TikTok spend in test: PKR 218,000
- Incremental revenue: PKR 641,000
- **Incremental ROAS: 2.94x**

**TikTok's platform-reported ROAS was 1.4x.** Its measured incremental ROAS was 2.94x — **more than double what its own platform claimed.**

**The social agency had been understating their own performance for a year**, because TikTok's attribution could not see the brand searches its videos generated.

### The reallocation

| Channel | Before | After | Basis |
|---|---|---|---|
| Google brand search | 168,000 | 92,000 | Geo tested |
| Google non-brand | 312,000 | 374,000 | Geo tested |
| Google Shopping | 401,000 | 418,000 | Held, test scheduled |
| Google PMax | 244,000 | 196,000 | Tested, partly incremental |
| Meta | 188,000 | 224,000 | MMM, test scheduled |
| **TikTok** | **87,000** | **256,000** | **Geo tested — largest increase** |
| Email | 61,000 | 61,000 | Held |
| **Total** | **1,461,000** | **1,621,000** | |

### Results at 24 weeks

| Metric | Before | After |
|---|---|---|
| Total marketing spend | PKR 1,461,000 | PKR 1,621,000 |
| Revenue | PKR 4,220,000 | PKR 5,411,000 |
| **Blended MER** | 2.89x | **3.34x** |
| Gross profit | PKR 1,835,000 | PKR 2,603,000 |

**11% more spend, 28% more revenue, 42% more gross profit.**

### The part that mattered most

**Bilal's own budget went down.** Google's share fell from 77% to 67% of the marketing budget.

He had proposed and run the analysis that reduced his own revenue.

**Sana's reaction:** she gave him responsibility for the entire marketing measurement function across all channels, at a higher fee than he had lost.

**His comment:** *"Recommending against yourself once buys more trust than ten good quarters. And I would rather be the person who measures honestly than the person who defends a budget."*

---

## 📊 Mastery Score

**Level: Top 1%**

Cross-channel honesty is rare because the incentives run against it. Practising it consistently is a genuine career advantage.

---

## 📌 Key Takeaways

- Every attribution model is arbitrary. Data-driven attribution is the best available inside Google, and blind to everything outside it.
- Platforms collectively claim far more revenue than exists. Adding up their claims and comparing to actual revenue ends most arguments.
- Attribution always overstates last-touch channels and understates awareness channels. This pattern is near universal.
- Triangulate: attribution as an upper bound, MMM as an estimate, geo tests as evidence.
- Label clearly which channels have been measured and which are estimated. That distinction is what makes a report trustworthy.

---

## ☑️ Self-Assessment

1. Add up the revenue every platform claims. What multiple of actual revenue is it?
2. Do you report a blended MER, or only platform metrics?
3. Which of your channels is most likely understated by attribution?
4. Have you ever recommended reducing your own budget?
5. Can you explain the walled garden problem to a client in two sentences?

---

## 🧠 Quiz

**1. What is the main limitation of data-driven attribution in Google Ads?**
a) It is inaccurate
b) It only sees touchpoints Google can observe, so it is blind to other channels
c) It is expensive
d) It needs a rep

**2. Which channels does attribution always overstate?**
a) Awareness channels like TikTok and YouTube
b) Last-touch channels like brand search, remarketing and email
c) All equally
d) None

**3. What is the single most effective way to end a cross-channel attribution argument?**
a) Cite an expert
b) Add up every platform's claimed revenue and compare it to actual revenue
c) Use GA4 as the referee
d) Switch attribution models

**4. In triangulation, which source do you trust most?**
a) Platform attribution
b) MMM
c) A geo incrementality test
d) GA4

**5. TikTok's platform ROAS was 1.4x and its measured incremental ROAS was 2.94x. Why?**
a) The platform was under-reporting on purpose
b) TikTok's attribution could not see the brand searches its videos generated
c) The test was flawed
d) A currency error

---

## 💪 Practical Exercise (35 minutes)

Build the cross-channel honesty check.

1. Collect the revenue claimed by every advertising platform for last month.
2. Add them up and compare to actual business revenue. Calculate the multiple.
3. Calculate blended MER: total revenue ÷ total marketing spend.
4. For each channel, note whether it is last-touch or awareness in nature.
5. Rank your channels by the likely gap between claimed and real contribution.
6. Write the one-paragraph explanation you would give a client about why platform numbers cannot be added together.

---

## 🎯 Expert Challenge

Build a cross-channel measurement function.

- Build the unified spend and revenue view across every channel, updated monthly, with the platform-claim reconciliation shown clearly.
- Design the triangulation matrix: for every channel, attribution figure, MMM estimate, and test status. Keep it visible and updated.
- Build the test prioritisation model: gap between attribution and MMM, multiplied by spend, gives the order in which channels get tested.
- Design the reporting standard that separates measured from estimated, and get every agency and internal team to adopt it. Consistency across parties is what makes the comparison meaningful.
- Build the governance: who owns cross-channel measurement, and how conflicts between agencies are resolved. In most businesses this ownership is undefined, which is why the arguments never end.
- Then do the difficult thing. Run the analysis on your own channel, with the genuine possibility that it reduces your budget, and present the result whatever it shows. It is the most reliable way to become the person a business trusts with the whole picture rather than one part of it.

---

## ✅ Quiz Answers

1 — **b**. It is blind to touchpoints outside Google.
2 — **b**. Last-touch channels take credit they did not cause.
3 — **b**. The arithmetic is undeniable and needs no method debate.
4 — **c**. A geo test measures causation directly.
5 — **b**. Its videos drove brand searches it could not see or claim.

---

**Next lesson:** 13.4 — The 100-Point Account Check That Wins Clients
