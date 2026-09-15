# Lesson 3.5 — Group Your Keywords the Right Way

*Phase 2 · Building Your First Search Campaigns — Module 3 · Choosing the Right Keywords*

---

## Quick Recap From Module 3 So Far

You can read intent, research keywords, choose match types and control waste. Now we assemble it all into ad groups.

---

## 🎯 What You Will Learn

- Why SKAGs died, and what replaced them
- What an intent cluster actually is
- The three-way match rule: keywords, ad, landing page
- How to build clusters from a keyword list, step by step
- When to split a cluster, and when to leave it alone

---

## A Short History (So You Understand Why)

You will meet all three of these in old blog posts and in inherited accounts.

### SKAG — Single Keyword Ad Group (about 2013–2019)
One keyword per ad group. If you had 200 keywords, you had 200 ad groups.

**The logic:** perfect message match. The ad could repeat the keyword exactly, which lifted Quality Score and CTR.

**Why it died:**
- Close variant matching meant "single keyword" was never actually single
- Smart Bidding needs pooled data; 200 ad groups meant 200 tiny data sets
- Responsive Search Ads made per-keyword ad copy less necessary
- Managing 200 ad groups took enormous time for shrinking benefit

### STAG — Single Theme Ad Group (about 2019–2022)
Group keywords by product or topic. Better, but still often too detailed, and "theme" was vague.

### Intent Clusters (now)
Group keywords by **what the searcher wants and which page answers it**.

**Think of a restaurant menu.** A SKAG menu would list every dish on its own separate page. A theme menu groups by ingredient. An intent cluster menu groups by *what the diner is in the mood for*: quick lunch, family dinner, something light. That is how people actually choose.

---

## What an Intent Cluster Is

An intent cluster is a group of keywords where **all three of these are true**:

1. The searcher wants the same outcome
2. The same ad copy would appeal to all of them
3. The same landing page would serve all of them

**If all three are true, they belong in one ad group.**
**If any one is false, they belong in different ad groups.**

That is the entire rule. Everything else in this lesson is application.

---

## The Three-Way Match Rule

Every ad group must have a matching set:

```
KEYWORDS  →  AD COPY  →  LANDING PAGE
   (what they searched)  (what you promise)  (what they get)
```

All three must say the same thing. Break any link and you lose money:

- Keywords match, ad does not → low CTR, low Quality Score, high cost
- Ad matches, page does not → clicks that never convert (Lesson 0.5)
- Page matches, keywords do not → wasted impressions on the wrong people

**The test:** for any ad group, read a keyword out loud, then the ad headline, then the page headline. If they tell one story, the cluster is correct.

---

## Common Cluster Types

Most businesses use some combination of these six.

### 1. Buying intent cluster
Keywords with purchase signals. *buy X, X price, order X, X online, X cost*
→ Page: the product or pricing page with the buy button visible.

### 2. Local intent cluster
Keywords with location signals. *X near me, X in Karachi, X shop nearby*
→ Page: a location page with address, map, phone number and hours.

### 3. Problem intent cluster
Keywords describing the problem, not the product. *water tastes bad, tooth pain at night, team missing deadlines*
→ Page: a page that names the problem first, then presents your solution.

### 4. Product type cluster
Keywords for a specific variant. *RO water filter, UV purifier, gravity filter*
→ Page: that specific product's page.

### 5. Comparison cluster
Keywords comparing options. *best X, X vs Y, top X, X review, X alternative*
→ Page: a comparison page or a "why choose us" page with proof.

### 6. Urgency cluster
Keywords showing time pressure. *emergency X, same day X, X open now, 24 hour X*
→ Page: a page emphasising speed, availability and immediate contact.

---

## Building Clusters: The Step-by-Step Process

### Step 1: Start with your filtered keyword list
From Lesson 3.2, already graded by intent (Lesson 3.1).

### Step 2: Sort by intent level
Group all Level 4 and 5 keywords together first. These are your priority clusters.

### Step 3: Ask the outcome question for each keyword
*"What does this person want to happen next?"*

- "water filter price" → wants to see the price and decide
- "water filter near me" → wants to visit a shop or get delivery today
- "water filter without electricity" → wants reassurance about a specific problem

Different answers mean different clusters.

### Step 4: Group keywords with the same answer

### Step 5: Check each group against the three-way rule
Could one ad serve them all? Could one page serve them all? If not, split.

### Step 6: Check the volume
If a cluster would get fewer than about 5 conversions a month, consider merging it into a neighbouring cluster. Too-small clusters starve.

### Step 7: Name it
`[Cluster type] - [Detail]`. For example: `Buying - Price`, `Local - Karachi`, `Problem - No Electricity`.

### Step 8: Assign the landing page
Every cluster gets one page. Write the URL next to the cluster name before you build anything.

---

## Worked Example: Sana's Full Cluster Map

Here is her filtered keyword list, turned into ad groups.

| Cluster | Keywords | Ad angle | Landing page |
|---|---|---|---|
| `Buying - Price` | water filter price, water filter cost pakistan, water purifier price karachi, how much is a water filter | Price transparency + free delivery | `/water-filter-price` |
| `Buying - Online` | buy water filter online, order water filter, water filter home delivery | Fast delivery, cash on delivery | `/shop/water-filters` |
| `Local - Karachi` | water filter karachi, water filter shop near me, water purifier gulshan | Local presence, same-day install | `/karachi` |
| `Product - RO` | ro plant for home, reverse osmosis filter, ro water purifier price | RO-specific specs and comparison | `/products/ro-filter` |
| `Product - Gravity` | gravity water filter, non electric water filter, manual water purifier | No electricity needed | `/products/gravity-filter` |
| `Problem - No Electricity` | water filter without electricity, water filter for load shedding, filter that works without power | Load-shedding proof | `/no-electricity-filter` |
| `Problem - Water Quality` | remove bacteria from tap water, karachi tap water safe, water tastes bad solution | Water quality in Karachi, tested results | `/karachi-water-quality` |
| `Comparison` | best water filter pakistan, ro vs uv filter, top water purifier brands | Honest comparison, why us | `/compare-water-filters` |

**Eight clusters. Eight pages. Eight separate ad messages.**

Note two things:

**1. `Product - Gravity` and `Problem - No Electricity` overlap.** Both involve non-electric filters. Why keep them separate?

Because the *intent differs*. A person searching "gravity water filter" already knows the product category and is comparing. A person searching "water filter for load shedding" is describing a problem and does not know the solution exists. Those need different ads.

If both clusters were small, she would merge them. Both had enough volume, so she kept them apart — and `Problem - No Electricity` became her best-performing ad group (Lesson 3.2).

**2. `Problem - Water Quality` is Level 1 informational.** She kept it on purpose, at a small budget, with remarketing attached — exactly the disciplined exception from Lesson 3.1.

---

## How Many Keywords and Ad Groups?

Guidance, not law:

| | Recommended | Why |
|---|---|---|
| Ad groups per campaign | 3–8 | Enough separation, enough data per group |
| Keywords per ad group | 5–20 | Enough coverage without diluting the theme |
| Conversions per ad group per month | 5+ | Below this, consider merging |
| Landing pages per ad group | **1** | Always one. This is not flexible. |

**Small accounts:** one campaign with 2–3 ad groups is completely fine. Do not build eight clusters for a business with 15 conversions a month.

**The honest rule:** build the smallest number of clusters that lets you write really different, better ads. If two clusters would get the same ad, they are one cluster.

---

## When to Split a Cluster

Split when one of these becomes true:

1. **The ad no longer fits all keywords.** You find yourself writing generic copy to cover everything. Generic copy is a symptom.
2. **The landing page no longer fits.** Some searchers need a different page.
3. **Performance diverges sharply.** Half the keywords convert at 5%, half at 0.8%. Split so you can control them separately.
4. **The cluster grew large enough** that a sub-theme now has its own volume.

## When NOT to split

1. Because you have "too many keywords" in one group. Count is not a reason.
2. Because match types differ. Match types can live together (Lesson 3.3).
3. Because it feels tidier.
4. When the resulting groups would each have under 5 conversions a month.

---

## Testing a Cluster Structure

After building, check these within two weeks:

**1. Search terms alignment.** Open the search terms report per ad group. Do the actual searches match the cluster's intent? If `Buying - Price` is triggering on problem searches, your keywords or negatives need work.

**2. Ad strength and CTR by ad group.** Big differences in CTR usually mean the ad does not fit some keywords in the group.

**3. Conversion rate by ad group.** A cluster far below the others usually has a landing page mismatch.

**4. Cross-cluster cannibalisation.** Are two ad groups competing for the same searches? Fix with ad-group-level negatives (Lesson 3.4).

---

## 📖 Real-World Example: TaskFlow's Cluster Rebuild

TaskFlow's account had 31 ad groups, built SKAG-style by a previous freelancer. Each had one keyword and one nearly identical ad.

Their total: 71 conversions a month. That is **2.3 conversions per ad group per month.** Every ad group was starved.

They rebuilt into five intent clusters.

| Cluster | Example keywords | The searcher's real question | Page |
|---|---|---|---|
| `Buying - Pricing` | project management software pricing, taskflow cost, construction software price | "Can I afford it?" | `/pricing` |
| `Problem - Delays` | construction project always late, site progress tracking, avoid project delays | "How do I stop losing money on delays?" | `/solutions/delays` |
| `Comparison` | best construction project software, taskflow vs procore, asana alternative for construction | "Which one should I choose?" | `/compare` |
| `Industry - Construction` | software for construction companies, contractor management software | "Is this built for my industry?" | `/construction` |
| `Buying - Trial` | project management software free trial, try construction software | "Can I test it first?" | `/trial` |

**Five clusters. Now averaging 14 conversions each per month.** Enough data for Smart Bidding to actually learn.

But the bigger win was the **ads**, which SKAGs had prevented.

Under SKAG, the ad for "construction project always late" said: *"Construction Project Software. Try TaskFlow Free."* Generic, because the same template covered 31 keywords.

Under the cluster structure, the `Problem - Delays` ad could say:

> **Headline:** Stop Losing Money on Site Delays
> **Headline 2:** See Real Progress From Every Site, Daily
> **Description:** Site managers update in 30 seconds from their phone. You see the true schedule before it slips.

And it pointed to a page about delays, not a generic homepage.

**Results after 10 weeks:**

| Metric | SKAG structure | Intent clusters |
|---|---|---|
| Ad groups | 31 | 5 |
| Conversions/ad group/month | 2.3 | 14 |
| Average CTR | 3.1% | 6.8% |
| Cost per paying customer | $198 | $142 |
| Time to manage weekly | 4 hrs | 45 min |

**Fewer ad groups. Better ads. Better data. Better results. Less work.**

That combination is rare in Google Ads, and it is why intent clustering replaced SKAGs completely.

---

## 📊 Mastery Score

**Level: Intermediate**

Clustering is a judgement skill. The rule is simple; applying it well takes practice on real keyword lists.

---

## 📌 Key Takeaways

- SKAGs died because they split conversion data into pieces too small for Smart Bidding to learn from.
- An intent cluster groups keywords where the same outcome, the same ad and the same page all apply.
- Keywords → ad copy → landing page must tell one story. Break any link and you lose money.
- Build the smallest number of clusters that lets you write really different ads.
- Split when the ad or page stops fitting, or when performance sharply diverges. Never split for tidiness.

---

## ☑️ Self-Assessment

1. How many conversions does each of your ad groups get per month?
2. Could you write a really different ad for each of your ad groups, or are they all similar?
3. Does every ad group point to its own matching landing page?
4. Read one keyword, one ad headline and one page headline aloud. Do they tell one story?
5. Are any two of your ad groups competing for the same searches?

---

## 🧠 Quiz

**1. Why did SKAGs stop working?**
a) Google banned them
b) They split conversion data into pieces too small for Smart Bidding
c) They were too expensive
d) Close variants made them illegal

**2. What defines an intent cluster?**
a) Keywords with the same word in them
b) Keywords where the same outcome, ad and landing page all apply
c) Keywords with the same match type
d) Keywords with similar search volume

**3. Two ad groups would use the same ad and the same page. What should you do?**
a) Keep them separate for organisation
b) Merge them — they are one cluster
c) Split them further
d) Pause one

**4. What is the minimum landing pages per ad group?**
a) One
b) Two
c) Three
d) It does not matter

**5. When should you split a cluster?**
a) When it has more than 20 keywords
b) When the ad copy no longer fits all keywords, or performance sharply diverges
c) When it looks untidy
d) When match types differ

---

## 💪 Practical Exercise (40 minutes)

Build a cluster map for one business.

1. Take your filtered keyword list from Lesson 3.2.
2. For each keyword, write the answer to: "What does this person want to happen next?"
3. Group keywords with matching answers.
4. For each group, write the ad angle in one sentence and name the landing page.
5. Check every group against the three-way rule. Merge or split as needed.
6. Estimate conversions per cluster per month. Merge anything under 5.
7. Produce a final table like Sana's, with cluster name, keywords, ad angle and page.

---

## 🎯 Expert Challenge

Design a cluster structure for a business with 400+ keywords across three product lines and two countries.

- Decide the top-level split first: does geography, product line, or intent become the campaign dimension? Justify it with the four splitting rules from Lesson 1.4.
- Build the full cluster map, and for each cluster state the expected monthly conversion volume. Flag every cluster that would fall below the starvation threshold, and decide what to do with it.
- Find the landing page gaps: which clusters need pages that do not yet exist? Prioritise them by potential value, and write the brief for the top three.
- Design the cannibalisation controls: which ad-group-level negatives prevent clusters competing with each other.
- Build the measurement plan: how you will judge, after 8 weeks, whether the structure was correct — and what specific evidence would make you change it.
- Finally, write the maintenance rule: what condition triggers a re-clustering review, so the structure does not silently decay over two years.

---

## ✅ Quiz Answers

1 — **b**. Data dilution. Smart Bidding needs pooled conversions.
2 — **b**. Same outcome, same ad, same page. All three.
3 — **b**. If one ad and one page serve both, it is one cluster.
4 — **a**. One page per ad group. This is not flexible.
5 — **b**. Split for message fit or diverging performance, never for tidiness.

---

## 🏁 Module 3 Complete

You can now take a business from nothing to a fully mapped keyword structure. Check you can:

1. Grade any keyword's intent in three seconds
2. Run the 90-minute research process
3. Judge whether an account is ready for broad match
4. Run a weekly search term mining session and a monthly n-gram
5. Turn a raw keyword list into a clean cluster map

**Next:** Module 4 — Writing Ads and Building Campaigns. We write the ads and build a campaign, live.
