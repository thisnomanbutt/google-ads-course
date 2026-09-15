# Lesson 3.4 — Stop Wasting Money on the Wrong Searches

*Phase 2 · Building Your First Search Campaigns — Module 3 · Choosing the Right Keywords*
**📎 Template included:** `templates/universal-negative-keyword-list.txt`

---

## Quick Recap From Lesson 3.3

Broad match is powerful, but it needs a steering wheel. This lesson builds it.

---

## 🎯 What You Will Learn

- How negative keyword match types work (they behave differently from normal keywords)
- The shared list system that scales across accounts
- The weekly search term mining routine, step by step
- N-gram analysis — the technique that finds waste you would never spot manually
- The mistakes that make negatives dangerous

---

## What a Negative Keyword Does

A negative keyword stops your ad from showing when a search contains that word or phrase.

Add `-free` and your ads stop appearing for "free water filter".

Simple idea. The details are where people get it wrong.

**Think of a filter on a tap.** Water flows through, but the filter catches what you do not want. A good filter removes dirt and lets water through. A badly chosen filter blocks the water too.

---

## Negative Match Types Work Differently

This is the part almost everyone misunderstands. **Negative keywords do NOT include close variants.**

| Type | Written as | Blocks |
|---|---|---|
| Negative broad | `free` | Any search containing that word, in any order |
| Negative phrase | `"water filter repair"` | Searches containing that exact phrase, in that order |
| Negative exact | `[water filter]` | Only that exact search, nothing more |

### The critical difference from positive keywords

A positive exact match keyword `[water filter]` **will** match "water filters" (plural).

A negative exact keyword `[water filter]` will **NOT** block "water filters".

**Negatives block only what you literally write.** No plurals. No misspellings. No synonyms.

### What this means in practice

If you want to block "job", you must also add:
- jobs
- job
- vacancy
- vacancies
- career
- careers
- hiring
- salary
- salaries

**Nine entries to block one concept.** This is normal. Build your lists thoroughly.

⚠️ **Also watch misspellings.** Blocking "free" will not block "fre" or "freee". Add the common ones you actually see in your search terms.

---

## Where Negatives Live

You can add negatives at three levels.

### 1. Ad group level
Narrowest. Use to stop one ad group stealing traffic from another.

*Example:* in your "General Dental" ad group, add `-implant` so implant searches go to the high-value ad group instead.

### 2. Campaign level
Most common. Applies to everything in that campaign.

### 3. Shared negative keyword lists
The professional approach. Build a list once, apply it to many campaigns and many accounts.

**How to build one:** Tools → Shared library → Negative keyword lists → Create list.

### The list structure that scales

Build these separate lists:

| List name | Contents | Applied to |
|---|---|---|
| **Universal Junk** | free, jobs, salary, DIY, tutorial, meaning, wikipedia | Every campaign, every account |
| **Brand Terms** | your own brand names | Non-brand campaigns only |
| **Competitor Names** | competitor brands | Depends on strategy (Lesson 9.6) |
| **Wrong Products** | products you do not sell | All campaigns |
| **Wrong Locations** | cities and countries you do not serve | All campaigns |
| **Client Specific** | anything unique to this business | That account only |

Keeping them separate means you can apply the right combination to each campaign, and update one list without touching the others.

---

## The Universal Starter List

Every account should have these blocked from day one. The full list is in `templates/universal-negative-keyword-list.txt`.

**The main categories:**

- **Free seekers:** free, gratis, no cost, without paying, trial free
- **Job seekers:** job, jobs, career, careers, salary, vacancy, hiring, recruitment, intern, internship, cv, resume
- **Learners:** course, courses, training, tutorial, how to make, how to build, learn, certification, exam, syllabus, pdf, book
- **DIY:** diy, homemade, make your own, build your own, at home remedy
- **Researchers:** meaning, definition, wikipedia, what is, history of, examples of
- **Bargain hunters:** used, second hand, refurbished, olx, cheapest, discount code, coupon
- **Wrong industry:** wholesale (if you are retail), retail (if you are wholesale), manufacturer, supplier, distributor
- **Adult and illegal:** standard blocklist terms

⚠️ **Apply this list with judgement, not blindly.** If you *sell* training courses, do not block "course". If you *are* a wholesaler, do not block "wholesale". Read every term before applying.

---

## The Weekly Search Term Mining SOP

This is the single most valuable recurring task in Google Ads. Put it in your calendar.

**Time needed:** 30–60 minutes per account, weekly.

### Step 1: Open the report
Campaigns → Insights and reports → **Search terms**. Set the date range to the last 7 days (or 14 for low-volume accounts).

### Step 2: Add the right columns
Cost, Clicks, Conversions, Conv. value, Cost/conv., Conversion rate.

### Step 3: Sort by Cost, highest first
Money leaks are the priority. A search term with 400 impressions and no clicks costs you nothing.

### Step 4: Work down the list and make one of four decisions

For every search term, choose:

| Decision | When | Action |
|---|---|---|
| ✅ **Keep** | Converting, or relevant with good intent | Do nothing |
| ➕ **Promote** | Converting well and repeating | Add as an exact match keyword in the right ad group |
| ❌ **Block** | Irrelevant, wrong intent, wrong product | Add as a negative |
| ⏸️ **Watch** | Relevant but not converting yet, low spend | Note it, review next week |

**The threshold question for blocking:** *"Would I bid on this if I saw it in a keyword list?"* If no, block it.

### Step 5: Choose the negative match type carefully

- Blocking one specific search → negative **exact**
- Blocking a concept that appears in many searches → negative **phrase** or **broad**
- **When unsure, use phrase.** It is safer than broad and more useful than exact.

### Step 6: Add to the right list
Client-specific issues go to the client list. Universal junk goes to the universal list — so every future account benefits.

### Step 7: Log it
Note in your change log (Lesson 1.3): date, number of negatives added, and the money they should save.

### Step 8: Check the promoted terms next week
Did the exact match keywords you promoted actually perform? If not, they may have been lucky, not good.

---

## N-Gram Analysis: Finding Waste You Cannot See

Here is the problem with manual search term review. You look at a list of 800 search terms, each with PKR 40–200 of spend. Nothing looks alarming. So you find nothing.

But 90 of those terms all contain the word "repair" — and together they spent PKR 14,000 with zero conversions.

**You cannot see that pattern by reading a list. N-gram analysis finds it in two minutes.**

### What an n-gram is

An n-gram is a chunk of words.

The search term "best water filter for home karachi" contains:
- **1-grams (single words):** best, water, filter, for, home, karachi
- **2-grams (word pairs):** best water, water filter, filter for, for home, home karachi
- **3-grams:** best water filter, water filter for, filter for home, for home karachi

N-gram analysis breaks every search term into chunks, then adds up the cost and conversions for each chunk **across all search terms**.

Suddenly you can see that the word "repair" cost you PKR 14,000 and earned nothing — even though no single search term looked expensive.

**Think of a leaking house.** Checking each room finds nothing; every room has a small damp patch. Measuring total water loss reveals you are losing 200 litres a day. N-gram analysis is measuring the total.

### How to do it in Google Sheets (free, 20 minutes)

**Step 1.** Download your search terms report as CSV. Include Search term, Cost, Clicks, Conversions, Conv. value. Use 90 days of data — n-gram needs volume.

**Step 2.** Open in Google Sheets.

**Step 3.** Create a new sheet called `1-gram`.

**Step 4.** In your data sheet, add a helper column that splits each search term into words. Use `SPLIT(A2, " ")` to see how it works.

**Step 5.** Build the word list. The simplest reliable method:
- In a new column, use `TEXTJOIN` and `SPLIT` to produce one word per row, repeating the cost for each
- Or use the free "N-gram tool" approach: paste your terms into a helper sheet and use a `QUERY` to group

**Step 6.** Create a pivot table:
- Rows: the word
- Values: SUM of Cost, SUM of Conversions, SUM of Conv. value
- Sort by Cost, descending

**Step 7.** Add a calculated column: `Cost per conversion`. Where conversions are zero, mark it as "WASTE".

**Step 8.** Filter for words with cost above a threshold (say, 2× your target cost per conversion) and zero conversions. **That is your negative list for this month.**

**Step 9.** Repeat for 2-grams. Single words can be misleading — "water" alone tells you nothing, but "water tanker" tells you plenty.

### If spreadsheets are not your strength

Lesson 11.2 includes a Google Ads Script that runs n-gram analysis automatically and emails you the results weekly. Once that is running, this becomes a 5-minute review instead of a 20-minute build.

---

## The Dangers of Over-Blocking

Negatives can hurt you. Here is how.

### Danger 1: Blocking your own converters

You add `-cheap` because it feels low quality. But "cheap water filter karachi" was converting at 3.8%.

**Prevention:** always check the search term's conversion data before blocking. Sort by cost, but read the conversion column.

### Danger 2: Conflicts that silently kill keywords

You add a negative broad `filter`, and it blocks your own keyword `water filter karachi`.

**Prevention:** Google Ads shows conflicting negatives in the Recommendations section. Also, after any big negative addition, check your impression volume the next day. A sudden drop means a conflict.

### Danger 3: Starving Smart Bidding

Over-blocking narrows the auctions you can enter. With broad match, this can reduce the data the AI learns from, making performance worse overall.

**Prevention:** block what is clearly wrong. Do not block what is merely uncertain — let the bid strategy handle uncertainty by bidding low.

### Danger 4: The list nobody understands

Three years and 4,000 negatives later, nobody knows why half of them are there.

**Prevention:** date your additions. Review the list annually. Remove negatives that no longer make sense.

---

## 📖 Real-World Example: The Word That Cost PKR 340,000

Bilal took over a Pakistani home services account — AC repair and installation in Karachi. Spend: PKR 400,000 a month. Cost per lead: PKR 1,850. The client thought this was acceptable.

Manual search term review found the obvious things: a few job searches, some DIY terms. He added 40 negatives. Cost per lead moved to PKR 1,790. Barely anything.

**Then he ran an n-gram analysis on 90 days of data.**

Here is what the 1-gram table showed at the top:

| Word | Cost (PKR) | Conversions | Cost/conv |
|---|---|---|---|
| ac | 1,240,000 | 486 | 2,551 |
| karachi | 890,000 | 402 | 2,214 |
| repair | 410,000 | 51 | **8,039** |
| service | 380,000 | 178 | 2,135 |
| installation | 290,000 | 141 | 2,057 |
| **gas** | **187,000** | **2** | **93,500** |
| **filling** | **156,000** | **1** | **156,000** |
| **remote** | **94,000** | **0** | **WASTE** |
| **not cooling** | **88,000** | **3** | **29,333** |

Look at "gas" and "filling".

**What was happening:** people searching "ac gas filling price karachi" and "ac gas refill near me". This is a tiny job — a technician charges maybe PKR 3,500 and it takes 40 minutes. The client's business was installations and major repairs, worth PKR 25,000+.

These searches were highly relevant to air conditioning. They were completely wrong for the business.

Not one individual search term looked alarming. "ac gas filling karachi" had spent PKR 4,200 in 90 days. Unremarkable. But **there were 61 variations of it**, and together they had spent PKR 343,000 and produced 3 leads.

The n-gram found in two minutes what three months of manual review had missed.

**What he did:**

1. Added negative phrase: `"gas filling"`, `"gas refill"`, `"gas charging"`, plus 8 spelling variants
2. Added negative broad: `remote` (they do not repair remotes)
3. Reviewed "not cooling" carefully — some were real installation leads, so he blocked only the specific low-value variants
4. Reviewed "repair" — really mixed, so he split it into its own campaign with a lower budget rather than blocking it

**Results after 6 weeks:**

| Metric | Before | After |
|---|---|---|
| Monthly spend | PKR 400,000 | PKR 400,000 |
| Leads | 216 | 341 |
| Cost per lead | PKR 1,850 | PKR 1,173 |
| Lead quality (booked jobs) | 31% | 44% |

**Same budget. 58% more leads, and better ones.**

The client's reaction was the interesting part. *"Why didn't the last agency find this?"* The honest answer: because they read the search term list instead of measuring it.

---

## 📊 Mastery Score

**Level: Advanced**

Manual search term review is Intermediate. N-gram analysis is Advanced, and it is the single technique that most reliably finds hidden waste in large accounts.

---

## 📌 Key Takeaways

- Negative keywords do NOT include close variants. Add plurals, misspellings and synonyms manually.
- Build separate shared lists (universal junk, brand, competitors, wrong products) and apply the right combination per campaign.
- Run the weekly search term SOP: sort by cost, then keep, promote, block or watch every term.
- N-gram analysis aggregates cost by word chunk, revealing waste that is invisible in a term-by-term list.
- Over-blocking is real. Check conversion data before blocking, and watch for conflicts with your own keywords.

---

## ☑️ Self-Assessment

1. When did you last review search terms? Be honest about the date.
2. Do you have shared negative lists, or are negatives scattered at campaign level?
3. Have you ever run an n-gram analysis? On which account?
4. Have you ever accidentally blocked a converting search term?
5. Is the weekly review actually in your calendar as a recurring event?

---

## 🧠 Quiz

**1. Does a negative exact keyword `[water filter]` block the search "water filters"?**
a) Yes
b) No — negatives do not include close variants
c) Only with Smart Bidding
d) Only in some countries

**2. What is an n-gram analysis?**
a) Reviewing search terms one by one
b) Aggregating cost and conversions by word or word-pair across all search terms
c) A type of bid strategy
d) A competitor research tool

**3. Why can manual search term review miss major waste?**
a) The report is inaccurate
b) Waste spread across many small terms looks harmless individually
c) Google hides the data
d) It only shows 7 days

**4. Which negative match type is safest when you are unsure?**
a) Broad
b) Phrase
c) Exact
d) It makes no difference

**5. Before blocking a search term, what must you check?**
a) Its impression count
b) Whether it has conversions
c) Its Quality Score
d) The competitor's bid

---

## 💪 Practical Exercise (45 minutes)

Run one full search term mining session, plus a basic n-gram.

1. Download 90 days of search terms with cost and conversions.
2. Sort by cost. Work through the top 50 with the four decisions: keep, promote, block, watch.
3. Build a simple 1-gram pivot in Google Sheets: word, total cost, total conversions.
4. Filter for words with more than 2× your target cost per conversion and zero conversions.
5. Write your negative list from that filter, choosing the match type for each.
6. Check for conflicts with your existing keywords before applying.

---

## 🎯 Expert Challenge

Build a complete negative keyword governance system.

- Design the shared list structure for an agency managing multiple accounts across different industries, including which lists are global and which are account-specific.
- Build the n-gram process as a documented, repeatable procedure with a template sheet, so any team member can run it identically.
- Define the blocking thresholds mathematically: at what cost, with what conversion count, at what confidence level do you block? Guessing is not a system.
- Design the review cycle: weekly manual mining, monthly n-gram, annual list cleanup. Assign owners and dates.
- Build the safety layer: how you detect that a negative addition harmed performance, and how quickly you would notice.
- Finally, calculate the value of the system. Take one account's n-gram waste over 90 days, annualise it, and multiply across your portfolio. That number is what this process is worth per year — use it when someone says they do not have time for it.

---

## ✅ Quiz Answers

1 — **b**. Negatives are literal. Plurals need adding separately.
2 — **b**. Aggregating by word chunk reveals patterns across many terms.
3 — **b**. Small individual amounts hide large aggregate waste.
4 — **b**. Phrase is the safe middle ground.
5 — **b**. Always check conversions before blocking.

---

**Next lesson:** 3.5 — Group Your Keywords the Right Way
