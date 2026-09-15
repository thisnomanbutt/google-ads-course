# Lesson 12.4 — Which Channel Really Drives Your Sales?

*Phase 6 · Automation and Working With Data — Module 12 · Use Your Own Customer Data*

---

## Quick Recap From Lesson 6.3

You learned to judge PMax on incrementality rather than attribution. Marketing Mix Modelling applies that same logic to the entire marketing budget.

---

## 🎯 What You Will Learn

- What MMM is and why it returned
- The difference between attribution and MMM
- What MMM can and cannot tell you
- How to run a simplified version without a data science team
- How to use the results without over-trusting them

---

## Why MMM Came Back

Marketing Mix Modelling is decades old. It was largely replaced by digital attribution, which promised to track every individual customer journey exactly.

**That promise no longer holds.**

- Third-party cookies are gone
- Privacy rules restrict tracking
- People use multiple devices
- Walled gardens do not share data with each other
- A meaningful share of conversions are modelled rather than observed (Lesson 7.5)

**Attribution now sees perhaps 60–80% of the picture, with systematic gaps.**

MMM takes the opposite approach. **It ignores individuals entirely.**

---

## Attribution vs MMM

| | Attribution | Marketing Mix Modelling |
|---|---|---|
| Unit of analysis | The individual customer journey | Aggregate spend and outcomes over time |
| Data needed | User-level tracking | Weekly or monthly totals |
| Privacy impact | Severe | **None** — no personal data |
| Covers offline channels | ❌ No | ✅ Yes |
| Covers brand and TV | ❌ No | ✅ Yes |
| Granularity | Keyword level | Channel level |
| Speed | Real time | Quarterly |
| Best for | Optimising within a channel | Allocating between channels |

**Think of two ways to understand a river.** Attribution follows individual water molecules and tries to trace where each came from. MMM measures the total flow at different points and works out which tributaries contribute most.

The first is precise but increasingly blind. The second is coarse but complete.

**You need both.** Attribution optimises inside Google Ads. MMM decides how much Google Ads should get in the first place.

---

## What MMM Actually Does

MMM uses statistical regression to estimate how much each marketing input contributed to sales.

### The inputs

| Input type | Examples |
|---|---|
| **Marketing spend** | Google Ads, Meta, TikTok, TV, radio, print, email |
| **Base factors** | Seasonality, trend, day of week |
| **External factors** | Price changes, promotions, competitor activity, weather, economic conditions, public holidays |

### The output

An estimate of how much each channel contributed, and the falling return curve for each.

```
Estimated contribution to sales:
  Base (would happen anyway)     42%
  Google Ads Search              18%
  Google Ads Shopping            11%
  Meta                            9%
  Email                           8%
  TV                              7%
  Seasonality effect              5%
```

### The two curves MMM gives you

**1. The saturation curve.** How much each channel produces at different spend levels. This shows where a channel stops responding — the ceiling from Lesson 8.1, but measured across the whole business.

**2. The adstock or carryover curve.** How long a channel's effect persists. TV and YouTube have long carryover; Search has almost none.

**Together these answer the question every CMO asks: where should the next PKR 100,000 go?**

---

## What MMM Cannot Tell You

Be honest about the limits. Overselling MMM damages your credibility.

❌ **Which keyword to bid on.** MMM works at channel level, not keyword level.

❌ **What happened last week.** MMM needs long time periods. Quarterly at best.

❌ **Precise numbers.** MMM produces estimates with confidence intervals. Anyone quoting an MMM result to two decimal places does not understand it.

❌ **Causation with certainty.** It finds correlation in historical data. A well-built model with experimental validation gets close to causation. A poorly built one does not.

⚠️ **The biggest limitation: correlated spend.** If you always increase Google Ads and Meta together, the model cannot separate their effects. This is extremely common and it is why validation matters.

---

## The Data You Need

MMM has real data what you need.

### Minimum workable

| What you need | Minimum | Better |
|---|---|---|
| Time period | 2 years of weekly data | 3+ years |
| Data points | ~104 weeks | 156+ |
| Channels | 3+ with meaningful spend | 5+ |
| Spend variation | Channels must have varied | Deliberate variation |
| Outcome data | Weekly sales or conversions | Weekly profit |

### The variation need

⚠️ **This is the one that disqualifies most businesses.**

If your Google Ads spend has been PKR 500,000 a month for two years, the model cannot estimate what happens at PKR 300,000 or PKR 800,000. **There is no variation to learn from.**

**The practical implication:** if you intend to run MMM in future, vary your spend on purpose now. Not randomly — but a planned 20% increase for a quarter, a planned reduction in a quiet period, and regional variation all create the variation a model needs.

**This is also why geo experiments (Lesson 13.2) pair so well with MMM.** They create clean variation on purpose.

---

## The Simplified Version

Full MMM needs a data scientist. Here is a version you can build in a spreadsheet that captures a useful part of the value.

### Step 1: Build the dataset

One row per week, going back as far as you have data.

| Week | Total sales | Google spend | Meta spend | Email sends | Promotion active | Season index |
|---|---|---|---|---|---|---|
| 2024-W01 | 412,000 | 88,000 | 41,000 | 12,000 | 0 | 0.81 |
| 2024-W02 | 388,000 | 91,000 | 39,000 | 0 | 0 | 0.81 |

**Include the season index from Lesson 10.3.** Without controlling for seasonality, the model will attribute seasonal effects to whichever channel happened to spend most in that period.

### Step 2: Look at the correlations first

Before any modelling, calculate the correlation between each channel's spend and sales.

**In Google Sheets:** `=CORREL(spend_column, sales_column)`

**What you learn:** which channels move with sales at all. A channel with near-zero correlation is unlikely to show a strong effect in any model.

⚠️ **Correlation is not causation, and this step proves nothing.** It is a first look, not an answer.

### Step 3: Run a multiple regression

Google Sheets and Excel both do this.

**In Sheets:** `=LINEST(sales_range, all_spend_columns, TRUE, TRUE)`

This estimates a coefficient for each channel — roughly, how much sales change per unit of spend.

### Step 4: Interpret carefully

**What the coefficients suggest:** the relative contribution of each channel.

**What they do not prove:** causation, or that the relationship holds outside the range of spend in your data.

### Step 5: Validate with an experiment

**This is the step that turns a spreadsheet exercise into something you can act on.**

Take the channel your model says is most under-invested. Run a geo experiment (Lesson 13.2): increase spend in some regions, hold others constant, and measure the difference.

**If the experiment confirms the model, you can trust the model more.** If it contradicts it, trust the experiment.

⚠️ **Never reallocate a large budget on an unvalidated model.** A spreadsheet regression on two years of correlated spend can be confidently wrong.

---

## Using MMM Results Properly

### The three questions MMM answers well

**1. Is the total marketing budget the right size?**
The saturation curves show where returns flatten across all channels.

**2. Is the split between channels right?**
Compare each channel's estimated marginal return. Money should flow toward the highest marginal return until the curves level.

**3. Are we over-investing in a channel that attribution flatters?**
This is the most valuable use. Channels that receive last-click credit — brand search, remarketing, email — are always overstated by attribution. MMM often shows their real contribution is lower.

### How to present it

**Always give ranges, not point estimates.**

❌ "Google Ads contributed 18.3% of sales."
✅ "Google Ads contributed an estimated 15–22% of sales. The model is most confident about Search and least confident about Display, where spend has not varied enough to measure well."

**Always state the limitations.** A model presented without caveats will be quoted as fact in a board meeting, and you will be held to it.

---

## Google's Own Tools

Google offers open-source MMM tooling, and other vendors offer commercial platforms.

**Considerations:**

| | Open source | Commercial platform | Build your own |
|---|---|---|---|
| Cost | Free | Significant | Staff time |
| Expertise needed | High | Medium | High |
| Speed to first result | Slow | Fast | Slow |
| Transparency | Full | Varies | Full |
| Bias risk | You control it | ⚠️ A vendor's model may favour their channels | You control it |

⚠️ **Watch for bias.** A model provided by a platform that sells advertising has an obvious incentive. That does not make it wrong, but it means you should validate its conclusions with an independent experiment before acting.

---

## 📖 Real-World Example: The Channel Everyone Overvalued

Sana's business reached PKR 1,400,000 monthly marketing spend across five channels. Her accountant asked the allocation question, and attribution could not answer it (Lesson 11.5).

She built a simplified MMM.

### The dataset

Weekly data, 118 weeks. Columns: total sales, Google Search spend, Google Shopping spend, Google PMax spend, Meta spend, TikTok spend, email sends, promotion active flag, season index.

### What attribution said

| Channel | Last-click conversions | Share |
|---|---|---|
| Google Search — brand | 412 | 22% |
| Google Search — non-brand | 288 | 15% |
| Google Shopping | 391 | 21% |
| Google PMax | 204 | 11% |
| Meta | 121 | 6% |
| TikTok | 31 | 2% |
| Email | 189 | 10% |
| Direct / organic | 241 | 13% |

**On this view, brand search was her single biggest channel.**

### What the model suggested

After controlling for seasonality and promotions:

| Channel | Estimated contribution | vs attribution |
|---|---|---|
| Base (would happen anyway) | 38% | — |
| Google Search — brand | **4%** | ⬇️ Far lower |
| Google Search — non-brand | 16% | ⬆️ Higher |
| Google Shopping | 14% | Similar |
| Google PMax | 5% | ⬇️ Lower |
| Meta | 8% | ⬆️ Higher |
| TikTok | 6% | ⬆️ Much higher |
| Email | 6% | ⬇️ Lower |
| Seasonality | 3% | — |

### The two findings

**1. Brand search was massively overstated by attribution.**

This is the classic MMM finding, and it makes sense. People searching "sana water filters" already intended to buy. The brand campaign captured the click and took the credit, but it rarely *caused* the sale.

⚠️ **This does not mean brand search is worthless.** It defends against competitors (Lesson 9.6) and controls the message. But 22% of credit for 4% of causal contribution is a large gap.

**2. TikTok and Meta were understated.**

Both are discovery channels. People saw an ad, did not click, and later searched the brand. Attribution gave the credit to brand search; MMM traced it back.

**This matched the pattern from Lessons 6.4 and 7.6** — discovery channels create demand that other channels harvest.

### The validation — and this is the important part

She did **not** immediately reallocate budget.

She ran a geo experiment (Lesson 13.2) on the model's strongest claim: that brand search was overvalued.

**The test:** in six matched regions, she reduced brand search spend by 60% for eight weeks. Six comparable regions were left unchanged.

**Results:**

| | Test regions | Control regions |
|---|---|---|
| Brand search conversions | −58% | −3% |
| **Total sales** | **−7%** | −2% |

**Brand campaign conversions fell 58%. Total sales fell 7%.**

Most of those brand conversions were people who would have found her anyway — through organic listings, direct navigation, or a later search.

**But not all of them.** A 5 percentage point real difference remained, meaning brand search was really contributing something. Cutting it entirely would have cost her.

### What she changed

Not a dramatic reallocation. A measured one.

| Channel | Before | After | Reasoning |
|---|---|---|---|
| Brand search | PKR 168,000 | **PKR 92,000** | Reduced, not eliminated. Kept enough for defence. |
| Non-brand search | PKR 312,000 | PKR 374,000 | Highest validated contribution |
| Shopping | PKR 401,000 | PKR 418,000 | Held, slight increase |
| PMax | PKR 244,000 | PKR 196,000 | Reduced — overlapped with Shopping |
| Meta | PKR 188,000 | PKR 224,000 | Increased on model evidence |
| TikTok | PKR 87,000 | PKR 156,000 | Increased, with a validation test planned |

### Results at 20 weeks

| Metric | Before | After |
|---|---|---|
| Total marketing spend | PKR 1,400,000 | PKR 1,460,000 |
| Total sales | PKR 4,190,000 | PKR 4,983,000 |
| Blended cost per customer | PKR 1,588 | **PKR 1,391** |
| Gross profit | PKR 1,634,000 | **PKR 2,043,000** |

**4% more spend, 25% more profit.**

### The honest caveats she wrote into the report

She included these, and they mattered:

> - The model has moderate confidence on Search and Shopping, where spend varied enough to measure. Confidence on Display is low.
> - The brand search finding is validated by experiment. The TikTok finding is not yet — a geo test is scheduled.
> - The model cannot separate Meta and TikTok cleanly, because their spend moved together for most of the period. We are on purpose varying them independently from now on.
> - These are estimates with ranges, not precise figures. Do not quote them as facts.

**Writing those caveats is what made the recommendation credible**, not what weakened it.

---

## 📊 Mastery Score

**Level: Top 1%**

MMM is where paid media meets corporate finance. Used carefully it is powerful. Used carelessly it produces confident, expensive mistakes.

---

## 📌 Key Takeaways

- Attribution follows individuals and is increasingly blind. MMM measures aggregate effects and covers every channel including offline.
- MMM answers budget allocation between channels. Attribution answers optimisation within a channel. You need both.
- The data need that disqualifies most businesses is spend variation. Create it on purpose if you intend to model later.
- Attribution always overstates last-touch channels — brand search, remarketing, email — and understates discovery channels.
- Never reallocate a large budget on an unvalidated model. Confirm the biggest claim with a geo experiment first.

---

## ☑️ Self-Assessment

1. Do you have two years of weekly spend and sales data across channels?
2. Has your channel spend varied enough for a model to learn from?
3. What share of credit does brand search currently receive in your reporting?
4. Which of your channels are likely overstated by last-click attribution?
5. Could you validate a model finding with a geo experiment?

---

## 🧠 Quiz

**1. What is the main difference between attribution and MMM?**
a) MMM is cheaper
b) Attribution follows individual journeys; MMM measures aggregate effects over time
c) MMM is more precise
d) They are the same

**2. What data need disqualifies most businesses from MMM?**
a) Too many channels
b) Insufficient variation in spend over time
c) Too much data
d) Wrong currency

**3. Which channels does attribution typically overstate?**
a) Discovery channels like TikTok and YouTube
b) Last-touch channels like brand search, remarketing and email
c) All channels equally
d) None

**4. What must you do before reallocating budget on a model's finding?**
a) Nothing
b) Validate the biggest claim with an experiment, such as a geo test
c) Ask Google
d) Run the model again

**5. Brand search conversions fell 58% but total sales fell only 7%. What does this mean?**
a) Tracking broke
b) Most brand clicks were people who would have found the business anyway
c) Brand search is worthless
d) The experiment failed

---

## 💪 Practical Exercise (45 minutes)

Build the foundation for a simplified MMM.

1. Build the weekly dataset: sales, spend by channel, promotions, seasonality index. Go back as far as you can.
2. Count your weeks of data. Below 104, note that as a limitation.
3. Check spend variation per channel. Calculate the range as a percentage of the average.
4. Calculate the correlation between each channel's spend and total sales.
5. Find which channels have moved together — those cannot be separated by a model.
6. Write down what deliberate variation you would introduce over the next six months to make future modelling possible.

---

## 🎯 Expert Challenge

Build a complete measurement triangulation framework.

- Build the MMM dataset properly, with all control variables: seasonality, promotions, price changes, competitor activity, public holidays, and any known external shocks.
- Run the regression and produce contribution estimates with confidence ranges, being clear about which channels the model can and cannot separate.
- Design the validation programme: rank the model's findings by how much money they would move, and design a geo experiment for the top two.
- Build the triangulation view: for each channel, show what attribution says, what MMM estimates, and what any experiment measured. Where all three agree, act confidently. Where they disagree, investigate before acting.
- Design the deliberate variation plan: how you will vary spend across channels and regions over the next year so that future models have something to learn from. This is a genuine trade-off — variation costs short-term efficiency to buy long-term knowledge.
- Then write the caveats document that accompanies every MMM output. The discipline of stating limitations clearly is what separates an analyst whose work gets acted on responsibly from one whose numbers get misquoted in a board paper.

---

## ✅ Quiz Answers

1 — **b**. Individual journeys versus aggregate effects over time.
2 — **b**. Insufficient spend variation to learn from.
3 — **b**. Last-touch channels receive credit they did not cause.
4 — **b**. Validate with an experiment before moving significant budget.
5 — **b**. Most of those conversions were not caused by the brand ad.

---

**Next lesson:** 12.5 — The Numbers to Show Your Boss or Client
