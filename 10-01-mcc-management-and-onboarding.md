# Lesson 10.1 — Manage Many Accounts and New Clients

*Phase 5 · Running Big Accounts and Clients — Module 10 · Handling Big Budgets and Clients*

---

## Quick Recap From Lesson 1.4

You met the MCC briefly. This lesson turns it into an operating system for running many accounts safely.

---

## 🎯 What You Will Learn

- How to structure an MCC that still works at 50+ accounts
- The permission model, and the mistakes that cause real damage
- A complete client onboarding SOP
- The offboarding process nobody prepares for
- The account health monitoring that scales

---

## The MCC as an Operating System

An MCC (Manager Account) is not just a login convenience. At scale it is where your process lives.

**What it gives you:**

| Capability | Value |
|---|---|
| Single login across all accounts | Time |
| Cross-account reporting | Portfolio view |
| Shared negative keyword lists | Consistency (Lesson 3.4) |
| Shared audiences | Better targeting (Lesson 6.7) |
| MCC-level conversion tracking | Consistent definitions (Lesson 9.5) |
| Cross-account bid strategies | Portfolio bidding (Lesson 9.1) |
| Consolidated billing (if used) | Simpler, but risky — see below |
| Visibility to Google's partner team | Access to support (Lesson 10.4) |

---

## Structuring the MCC

A flat MCC with 60 accounts becomes unusable. Use sub-manager accounts.

### The structure

```
Your Agency MCC (top level)
 ├── Sub-MCC: E-commerce clients
 │    ├── Client A
 │    ├── Client B
 │    └── Client C
 ├── Sub-MCC: Lead generation clients
 │    ├── Client D
 │    └── Client E
 ├── Sub-MCC: International (USD)
 │    ├── Client F
 │    └── Client G
 └── Sub-MCC: Internal / testing
      └── Agency's own account
```

### How to choose the grouping dimension

| Group by | When it makes sense |
|---|---|
| **Business type** | Your team specialises by type |
| **Currency** | You manage multiple currencies |
| **Account manager** | Each manager owns a portfolio |
| **Client size** | Different service levels |
| **Region** | Different markets and time zones |

**Pick one dimension and keep it.** Mixing dimensions produces an MCC nobody can navigate.

---

## The Permission Model

Google Ads has several access levels. **Understand them before granting anything.**

| Level | Can do | Give to |
|---|---|---|
| **Admin** | Everything, including managing users and links | You, and one backup. That is all. |
| **Standard** | Edit campaigns, view billing | Account managers |
| **Read only** | View reports, no changes | Clients, analysts, junior staff |
| **Email only** | Receive reports only | Stakeholders who never log in |
| **Billing** | Manage payment details only | Finance team |

### The rules that prevent damage

**1. Minimum access always.** A junior who can delete conversion actions is a risk you created. Read-only is the default; upgrade only when needed.

**2. Admin is for two people maximum.** You and one backup. If your only admin leaves the company or loses access, recovering an account can be really difficult.

**3. Review access quarterly.** People leave. Freelancers finish projects. Old agencies keep access for years. Put a quarterly review in your calendar.

**4. Never share logins.** One person, one login. Shared logins destroy your change history — you cannot tell who did what.

**5. The client should always have admin on their own account.** From Lesson 1.4. If they cannot remove you, the relationship is not healthy, and it will look bad when it ends.

⚠️ **The most common disaster:** an agency creates the client's account inside their own MCC, keeps sole admin, and the relationship ends badly. The client loses years of history and learning. This is both unprofessional and, in some jurisdictions, legally contentious. **Do not do it.**

---

## Billing: The Risk Nobody Discusses

An MCC can hold consolidated billing, where you pay Google and invoice clients.

### Why agencies do it
- Simpler for the client
- You may earn on payment terms or card rewards
- Some clients cannot set up their own billing easily

### The risk, stated plainly

**You become liable for the spend.**

If a client does not pay you, **you still owe Google.** A client spending PKR 2,000,000 a month who stops paying leaves you with a PKR 2,000,000 bill.

From Lesson 0.7: **never fund a client's ad spend with your own money.**

### If you do use consolidated billing

1. Only for clients with a proven payment history
2. Need prepayment, or a deposit covering one month's spend
3. Set hard budget caps you control
4. Have a written agreement covering non-payment
5. Have a defined process for pausing campaigns when payment is late
6. Know your total exposure across all clients at any moment

**Most agencies should keep billing on the client's own account.** It is safer and it is honest.

---

## The Client Onboarding SOP

This is the process. Follow it every time.

### Phase 1: Before access (Days 1–3)

**1. The discovery questionnaire.** Get written answers to:

| Question | Why |
|---|---|
| What is the average order value or customer value? | Lesson 0.3 |
| What is the cost of goods, shipping, fees, refund rate? | Lesson 0.4 |
| What is your contribution margin per sale? | Lesson 0.3 |
| For leads: what % become customers? | Lesson 0.6 |
| What is the maximum you can pay per customer? | Lesson 0.3 |
| Who are your top 3 competitors? | Lesson 0.2 |
| What makes you really better? | Lesson 0.2 |
| Which products or services are most profitable? | Lesson 6.1 |
| What is your monthly budget, and is it fixed? | Lesson 10.2 |
| Who pays Google? | Lesson 0.7 |
| Which CRM or order system do you use? | Lesson 7.4 |
| Who is your web developer, and how do we reach them? | Lesson 2.5 |

**2. The contract.** From Lesson 0.7: scope, fees, currency, who pays Google, account ownership, notice period, no guarantee of specific results.

**3. Expectations.** In writing:
- The learning phase timeline (Lesson 5.2)
- What month 1, month 3 and month 6 look like
- What you need from them, and by when

### Phase 2: Access and audit (Days 3–7)

**4. Access.** Client links their account to your MCC — you do not create it (Lesson 1.4). Client retains admin.

**5. The audit.** Run the full technical audit:

- [ ] Currency and timezone correct? (Lesson 2.1)
- [ ] Auto-apply recommendations off? (Lesson 1.3)
- [ ] Conversion tracking working? Test it. (Lesson 2.5)
- [ ] How many Primary conversions? (Lesson 2.3)
- [ ] Enhanced Conversions enabled? (Lesson 7.1)
- [ ] Auto-tagging on? (Lesson 2.2)
- [ ] Cross-domain journeys tested? (Lesson 9.5)
- [ ] GCLID captured in the CRM? (Lesson 2.6)
- [ ] Location option set to Presence? (Lesson 4.4)
- [ ] Display Network off on Search campaigns? (Lesson 4.4)
- [ ] Policy audit — any suspension risk? (Lesson 1.5)
- [ ] Merchant Center diagnostics clean? (Lesson 6.1)
- [ ] Placement exclusions applied? (Lesson 6.6)
- [ ] Impression share analysis done? (Lesson 8.1)

**6. The findings document.** Present what you found, ranked by money impact. This document is why they hired you, and it should be delivered within the first week.

### Phase 3: Foundation (Days 7–21)

**7. Fix tracking first.** Nothing else matters until measurement is right.

**8. Build custom columns and saved views** (Lesson 1.3).

**9. Set up reporting** (Lesson 8.2).

**10. Set up the change log** (Lesson 1.3).

**11. Apply shared negative lists and audiences** from your MCC library.

### Phase 4: Optimisation (Day 21 onwards)

**12. Only now** begin structural and bidding changes.

⚠️ **Resist the pressure to make changes in week one.** Clients often expect immediate action. The correct response: *"The first week is measurement. Changing things before I can measure them accurately would be guessing with your money."*

---

## The Offboarding Process

Nobody plans for this, and it is where reputations are made or destroyed.

### When a client leaves

**1. Handle it professionally, regardless of how it ends.** Your industry is smaller than you think.

**2. Deliver the handover pack:**
- Account structure documentation
- The change log
- Current strategy and reasoning
- Known issues and planned work
- Access to any external assets — feeds, sheets, scripts
- Conversion tracking documentation

**3. Remove your access** on the agreed date. Do not linger.

**4. Do not sabotage anything.** Pausing campaigns, deleting shared lists or removing assets on the way out is both unethical and, in most jurisdictions, potentially actionable. It will also become known.

**5. Transfer anything hosted by you.** Server-side containers (Lesson 7.3), BigQuery projects (Lesson 7.6), scripts. Either transfer ownership or give them time to rebuild.

⚠️ **Assets you built on your own infrastructure are a real issue.** Address it in the contract at the start, not at the end.

---

## Account Health Monitoring at Scale

With 40 accounts, you cannot check each one daily. You need exception reporting.

### The MCC-level checks

Run these weekly across all accounts:

| Check | Threshold |
|---|---|
| Conversions dropped | More than 40% week over week |
| Spend pacing off | More than 25% from target |
| Disapproved ads present | Any |
| Policy or suspension notices | Any |
| Campaigns limited by budget | Lost IS (budget) above 20% |
| Campaigns with zero conversions | 30 days with spend |
| Conversion tracking inactive | Any conversion action with no recent conversions |
| Payment method issues | Any |

**How to run them:** MCC-level reports, automated rules, or a script (Lesson 11.2). A script that emails one exception report each Monday across every account is the highest-value automation an agency can build.

---

## 📖 Real-World Example: The Agency That Scaled Badly, Then Well

Bilal grew from 3 clients to 14 in a year. Revenue tripled. The business nearly failed anyway.

### What went wrong at 14 clients

**Problem 1: No structure.** All 14 accounts sat flat in one MCC, named however the client had named them. Finding an account took a minute of scrolling.

**Problem 2: Everyone had admin.** He had hired two people and given both full admin on everything, because it was simpler. One accidentally applied a negative keyword list to the wrong client, blocking 60% of their traffic. It took nine days to notice.

**Problem 3: No onboarding process.** Each client was onboarded differently, depending on how busy he was. Two clients were three months in before anyone checked their conversion tracking. Both were broken.

**Problem 4: Consolidated billing.** He had put four clients' billing on his MCC because it was convenient. One stopped paying. He owed Google £14,000 and had no legal recourse in the contract, because the contract did not mention it.

**Problem 5: No monitoring.** A client's Merchant Center was suspended on a Friday. He found out on the following Wednesday, from the client.

### The rebuild

**Month 1: Structure and permissions.**

Sub-MCCs by client type. Every account renamed to a standard. Access reviewed: he kept admin, one senior colleague had admin as backup, everyone else moved to Standard on their own accounts only.

**Month 1: Billing.** He moved all four clients to their own billing over six weeks. Two objected; he explained the risk honestly and both accepted. He wrote off £6,000 of the £14,000 as a bad debt and recovered the rest over a year.

**Month 2: The onboarding SOP.** He wrote the full process as a checklist document with sign-off fields. Every new client went through it identically. He also **ran it retroactively on all 14 existing clients** — which took three weeks and found:

- 4 accounts with broken or partially broken conversion tracking
- 6 accounts with "Presence or interest" location targeting
- 9 accounts with auto-apply recommendations enabled
- 3 accounts with no Enhanced Conversions
- 2 accounts with cross-domain tracking failures
- 1 account one week from a Merchant Center suspension

**Month 3: Monitoring.** He built a script (Lesson 11.2) producing a Monday morning exception report across all accounts.

### Results at 12 months

| Metric | Before | After |
|---|---|---|
| Clients | 14 | 21 |
| Staff | 3 | 3 |
| Hours per client per week | 6.2 | **2.8** |
| Client churn (annual) | 43% | **9%** |
| Incidents needing an apology | 11/quarter | **1/quarter** |
| Bad debt exposure | £14,000 | **£0** |

**He added seven clients without adding staff**, purely because process replaced firefighting.

### The finding that mattered most

The retroactive audit found problems in **every single one** of the 14 existing accounts. Not one was clean.

These were accounts he had personally set up and managed. He was a competent practitioner. The problems existed because **without a process, competent people forget things when they are busy.**

**His conclusion:** *"I thought process was for big agencies. Actually, process is what stops a small agency being destroyed by its own growth."*

---

## 📊 Mastery Score

**Level: Expert**

Operational maturity is what separates a freelancer who is always busy from an agency that scales. It is unglamorous and it is decisive.

---

## 📌 Key Takeaways

- Structure your MCC with sub-managers on one consistent dimension, before you need to.
- Grant minimum access. Two admins maximum. Review access quarterly. Never share logins.
- The client owns their account and keeps admin. Creating accounts inside your own MCC is a trap for both parties.
- Consolidated billing makes you liable for the spend. Most agencies should avoid it.
- Run the full onboarding SOP on every client — including, retroactively, the ones you already have.

---

## ☑️ Self-Assessment

1. How many people have admin access to your accounts right now?
2. When did you last review who has access to what?
3. Do you have a written onboarding SOP, or does it depend on how busy you are?
4. What is your total billing exposure if a client stopped paying today?
5. If you ran your onboarding audit on your oldest client, what would you find?

---

## 🧠 Quiz

**1. How many people should have admin access?**
a) Everyone on the team
b) Two maximum — you and one backup
c) Only the client
d) It does not matter

**2. Who should own the client's Google Ads account?**
a) Your agency
b) The client, with admin access retained
c) Google
d) Whoever created it

**3. What is the risk of consolidated MCC billing?**
a) It is slower
b) You become liable to Google for the spend even if the client does not pay you
c) Google charges a fee
d) There is no risk

**4. When should you start making optimisation changes on a new account?**
a) Day one
b) After tracking is checked and the audit is complete — typically week three
c) After six months
d) Immediately, to show value

**5. What did the retroactive audit find in Bilal's 14 existing accounts?**
a) Nothing
b) Problems in every single one
c) Problems in about half
d) Only billing issues

---

## 💪 Practical Exercise (40 minutes)

Audit your own operations.

1. List every account you manage and who has what access. Flag anything above the minimum needed.
2. Check whether any client account was created inside your MCC rather than linked.
3. Calculate your total billing exposure if every client on consolidated billing stopped paying.
4. Write your onboarding SOP as a checklist, using this lesson as the template.
5. Pick your oldest client and run the technical audit section. Record what you find.

---

## 🎯 Expert Challenge

Build a complete agency operating system.

- Design the MCC structure for 100 accounts, with the grouping dimension justified and the naming standard specified.
- Build the full onboarding SOP as a document with phases, checklists, owners, sign-off fields and expected durations. It should be executable by someone who has never onboarded a client.
- Design the permissions matrix: every role, every access level, the approval process for elevation, and the quarterly review procedure.
- Build the exception monitoring system across all accounts, with defined thresholds, an escalation path, and a response-time commitment per severity level.
- Write the offboarding pack template, including the asset transfer process for anything hosted on your infrastructure — and add the corresponding clause to your contract.
- Then run the retroactive audit across every existing client. Record what you find, categorised by issue type. The pattern in those findings tells you exactly which part of your process is weakest, and that is where you improve next.

---

## ✅ Quiz Answers

1 — **b**. Two admins. More is unnecessary risk.
2 — **b**. The client, always, with admin retained.
3 — **b**. You owe Google regardless of whether the client pays you.
4 — **b**. After verification and audit — roughly week three.
5 — **b**. Every single account had problems.

---

**Next lesson:** 10.2 — Spend the Budget Evenly, Not All at Once
