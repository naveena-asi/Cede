# Implementation Plan — Insurance Catchup (Apr 17, 2026)
## MGA Platform: Singlepoint / Nexus / Applied Epic Build
### Meeting: Vishal Kumar + Naveena Chittiboyina + Group

> **Goal:** Build a Managing General Agent (MGA) insurance platform with 3 portals —
> Customer Portal, Broker Portal, and Agency Management Portal (Applied Epic-style).
> Deadline for V1 prototype: **Tuesday evening (Apr 22, 2026)**

---

## 1. SYSTEM ARCHITECTURE OVERVIEW

### Insurance Hierarchy (Top to Bottom)
```
CARRIER (e.g., United Health, State Farm, Liberty Mutual)
    └── MGA — Managing General Agent (Client = Singlepoint)
            └── BROKER (e.g., Lockton)
                    └── AGENT
                            └── CUSTOMER (Individual / Corporate)
```

### Key Definitions:
| Term | Definition |
|---|---|
| **MGA (Singlepoint)** | One level below carrier; authority to sign agreements on carrier's behalf; handles accounts below carrier's direct threshold |
| **Broker (e.g., Lockton)** | Intermediary between customer and MGA/carrier; negotiates quotes from multiple carriers; earns commission |
| **Agent** | Sells to end customers; works under broker |
| **Customer** | End buyer of insurance — individual or corporate |
| **Loss Run** | History of a client's past claims — used for renewal quoting and carrier switching |
| **Accord Form** | Standard template (e.g., Certificate of Liability Insurance) used to apply for new insurance |
| **Endorsement** | Mid-term change request on an active policy (e.g., adding a building, adding a person) |
| **COI** | Certificate of Insurance — issued solely by the carrier (not MGA or broker) |
| **Binding** | Final purchase/confirmation of a policy — triggers commission calculation |
| **SEMC** | Aggregator — digitized product catalogs of ~40 carriers with unified API access |
| **Applied Epic** | Industry-standard agency management system — to be emulated for V1 |
| **Nexus Platform** | Custom front-end broker portal being built on top of SEMC backend |
| **Loss Ratio** | Claims paid ÷ Premiums collected — key metric for carrier health |

---

## 2. THREE-PORTAL ARCHITECTURE

### Portal 1 — Customer Portal ✅ (Already Built)
**Users:** End customers (individuals or corporate clients)
**Purpose:** Submit requests, view policies, raise endorsements

**Screens needed (verify completeness):**
- [ ] Customer login / registration
- [ ] Active policies dashboard
- [ ] Submit new insurance request (Accord form upload)
- [ ] Endorsement request form (add building / person / vehicle)
- [ ] View loss run history (read-only)
- [ ] COI download (issued by carrier — view only, no edit)
- [ ] Claims status tracker

---

### Portal 2 — Broker Portal 🟡 (Partially Built)
**Users:** Brokers like Lockton
**Purpose:** Submit client documents, receive multi-carrier quotes, filter and propose best options, track commissions

**Key Flow:**
```
Client submits loss run + Accord forms
    → Broker uploads to portal
        → System sends to SEMC API (40+ carriers simultaneously)
            → Quotes received from up to 30 carriers
                → Broker filters top 2-3 quotes
                    → Broker presents to client
                        → Client selects → BINDING occurs
                            → Commission triggered (paid within ~60 days)
```

**Screens to build / complete:**

#### Screen 2.1 — Broker Dashboard
- Active submissions (status: In Progress / Quoted / Bound / Lapsed)
- Pending renewals (flagged 60 days before expiry)
- Recent bindings with commission status
- KPI cards: Total Active Clients | Quotes This Month | Bindings This Month | Commission Pending

#### Screen 2.2 — New Submission Flow
- Step 1: Client selection or new client creation
  - Fields: Legal name, FEIN, address, NAICS code, SIC code, state(s) of operation
- Step 2: Document upload (drag & drop)
  - Supported types: Accord forms (PDF), Loss runs (PDF/Excel), Supplemental applications, Equipment schedules
- Step 3: AI extraction preview
  - Show extracted fields with confidence scores
  - Editable before submission
- Step 4: Carrier routing
  - Display which carriers are being queried via SEMC
  - Real-time status: Sent → Pending → Quoted / Declined
- Step 5: Quote comparison matrix
  - Columns: Carrier | Coverage Type | Premium | AM Best Rating | Turnaround Time | Select
  - Broker filters: select 2–3 to show client
  - "Add to Proposal" button per row

#### Screen 2.3 — Client Proposal Generator
- Branded proposal PDF with broker's name
- Shows selected 2–3 carrier options side by side
- Coverage highlights, premium, carrier rating
- One-click email to client

#### Screen 2.4 — Binding Screen
- Pre-filled from extraction: limits, dates, contact info
- Prompt only for missing fields
- "Bind Now" → generates binding confirmation + policy number
- Triggers commission request to MGA

#### Screen 2.5 — Commission Tracker
- List of all bindings with commission amounts
- Status: Pending / Approved / Paid
- Commission = % of premium on bound policy (configured per carrier in MGA portal)
- Broker requests commission from MGA after binding

#### Screen 2.6 — Loss Run Upload + Renewal Flow
- Upload prior carrier's loss runs
- AI ingests and summarizes: Year | Carrier | Premium | Losses | Loss Ratio
- Trend analysis view (improving / worsening)
- One-click "Re-submit to Market" for renewal

#### Screen 2.7 — Endorsement Management
- Select active policy
- Choose endorsement type: Add person / Add location / Add vehicle / Change limits
- Submit to MGA for processing
- Track status: Submitted → Under Review → Approved → Applied

#### Screen 2.8 — Claims View (Broker-managed)
- Broker manages claims on behalf of client
- Claim stages: Filed → Under Review → Negotiation → Settled
- MGA involvement: flagged when negotiation requires MGA mediation
- Download claim documents

---

### Portal 3 — Agency Management Portal (MGA Portal) 🔴 (To Be Built — V1 Priority)
**Users:** Singlepoint (MGA) internal team — admins, underwriters, compliance
**Purpose:** Manage brokers, carriers, policies, commissions, compliance filings — mirrors Applied Epic functionality

**This is the CRITICAL build for Tuesday's meeting with Marc.**

#### Module 3.1 — Dashboard (Command Center)
- KPI cards: Active Brokers | Active Policies | Quotes This Month | Bindings This Month | Total Premium | Total Commission
- Renewal alerts (next 30 / 60 / 90 days)
- Pending broker commission requests
- Pending endorsements
- Compliance filings due

#### Module 3.2 — Carrier Management (Nexus Module)
**Carrier onboarding and configuration — core MGA capability**

**Sub-screens:**
- Carrier list (name, AM Best rating, active/inactive, connected via: Direct API / SEMC / Manual file)
- Add new carrier:
  - Legal name, state license numbers, lines of business
  - Rating rules upload (PDF/Excel → AI ingests into structured format)
  - API credentials (if direct API)
  - Commission % per product line
  - Certificate issuance rules
- Carrier connectivity types:
  - **Type A:** Direct API from carrier → connect credentials
  - **Type B:** File-based (PDF/Excel) → Nexus digitizes into internal API → structured rating rules
  - **Type C:** Via SEMC aggregator → SEMC API key + carrier product selection
- Rating rules management:
  - Fields: Coverage type | Risk factor | Base premium | Multipliers (age, location, smoker, etc.)
  - Editable by MGA admin only
  - Version history (audit trail)

#### Module 3.3 — Broker Management
- Broker directory: Name | License # | States Licensed | Active Clients | Total Bindings | Commission Rate
- Add/edit broker profile
- Broker onboarding checklist:
  - [ ] License verification (all states)
  - [ ] E&O documentation
  - [ ] Commission agreement signed
  - [ ] Portal access granted
- Broker performance report: Submissions | Quotes | Conversion Rate | Revenue
- Commission approval queue:
  - Pending requests from brokers
  - One-click approve / request more info
  - Payment status tracking

#### Module 3.4 — Policy Management
- Full policy repository: all active, lapsed, cancelled policies
- Filters: By broker | By carrier | By line | By state | By expiry date
- Policy detail view:
  - Named insured | Carrier | Line | Limits | Premium | Effective/Expiry dates
  - All attached documents (Accord, loss runs, supplementals, COI)
  - Endorsement history
  - Claims history
  - Loss ratio calculation
- Renewal workflow:
  - Auto-flag 90 days before expiry
  - Pull loss run from prior carrier
  - Re-submit to market with one click

#### Module 3.5 — Commission Management
- Commission ledger per broker per binding
- MGA commission tracking from carriers
- Commission structure config: % by product line, by carrier, by broker tier
- Reports: Monthly commission summary | By broker | By carrier | By product

#### Module 3.6 — Document Ingestion & AI Extraction
- Upload: Accord forms, loss runs, supplementals, equipment schedules
- AI extracts and structures:
  - Business name, NAICS/SIC code, FEIN
  - Policy limits, premium, carrier name
  - Payroll by state (WC)
  - Loss history by year by carrier
  - Equipment items with serial numbers
- Confidence scores per field (Green ≥95% / Amber 88–94% / Red <88%)
- Human review queue for Red-flagged fields
- Export extracted data → auto-populate carrier submission forms

#### Module 3.7 — Compliance & Filings
- All 50-state filing requirements per product line
- Filing status tracker: Due | Filed | Confirmed | Overdue
- Surplus lines filing (where applicable)
- E&O documentation storage
- Audit log: every action by every user (who changed what, when)

#### Module 3.8 — Claims Oversight
- MGA gets involved when claim negotiation between broker and carrier requires mediation
- Claims escalation view: flagged claims requiring MGA intervention
- Loss ratio monitoring per carrier per period
- Claims data feeds into loss run history for future renewals

---

## 3. CARRIER CONNECTIVITY — THREE METHODS

### Method 1: Direct Carrier API
- Carrier provides API credentials
- MGA connects directly
- Most reliable but rare — few carriers offer standardized APIs
- **Implementation:** API credentials stored in Carrier Management module; OAuth2/token-based auth

### Method 2: File-Based (Nexus Digitization)
- Carrier provides rating rules as PDF or Excel
- Nexus platform ingests and structures into internal rating API
- MGA can then query internally without going to carrier each time
- **Implementation:** File upload → AI extraction → internal rating rules DB → API wrapper

### Method 3: SEMC Aggregator (Preferred for Speed)
- SEMC has already digitized ~40 carriers
- Single API key gives access to all 40
- MGA uses SEMC on backend; builds custom Nexus front-end on top
- **Implementation:** SEMC API key configured in system; carrier selection from SEMC catalog; quote requests routed through SEMC

---

## 4. DOCUMENT FLOWS

### Flow A — New Submission (Full Pipeline)
```
1. Broker uploads: Accord form + Loss runs + Supplementals
2. AI ingestion engine parses all documents
3. Structured data extracted → confidence scored → human review if needed
4. Data pushed to SEMC API → routed to 30+ carriers simultaneously
5. Quotes returned (typically within 60 minutes per BridgePoint benchmark)
6. Broker filters top 2–3 → creates client proposal
7. Client selects → Broker initiates binding
8. Binding confirmed → policy number generated → COI issued by carrier
9. Commission triggered → broker requests from MGA → MGA approves → paid within ~60 days
```

### Flow B — Renewal
```
1. System auto-flags account 90 days before expiry
2. MGA or broker pulls loss run from prior carrier
3. Loss run ingested → updated summary generated
4. Re-submitted to SEMC market for new quotes
5. Same quoting / binding flow as above
```

### Flow C — Endorsement
```
1. Client raises endorsement request via Customer Portal
2. Broker reviews and approves in Broker Portal
3. Endorsed to MGA for processing
4. MGA submits change to carrier
5. Carrier updates policy → issues updated COI
6. Status updated across all portals
```

### Flow D — Claims
```
1. Client files claim via Customer Portal or directly with carrier
2. Broker tracks in Broker Portal claims view
3. If negotiation stalls → escalated to MGA
4. MGA mediates between broker and carrier
5. Settlement agreed → carrier pays → loss ratio updated
6. Claim outcome stored in client's loss run history for next renewal
```

---

## 5. COI (CERTIFICATE OF INSURANCE) RULES

- **Issuer:** Carrier ONLY — they are the risk taker and money holder
- **Edit access:** Carrier only
- **View access:** MGA ✅ | Broker ✅ | Agent ✅ | Customer ✅ (download only)
- **Trigger:** After binding is confirmed
- **Storage:** Attached to policy record in MGA portal; downloadable in all portals
- **No edit functionality** should exist in broker or customer portals for COI

---

## 6. COMMISSION RULES

- Commission is earned **only on successful binding** (final purchase)
- Not earned on: quotes issued, documents submitted, or proposals sent
- Commission % is configured per product, per carrier in MGA portal
- Broker requests commission from MGA post-binding
- MGA approves and tracks payment (~60 days from customer payment)
- MGA also earns commission from carrier (separate from broker commission)
- Both commissions tracked in Module 3.5 — Commission Management

---

## 7. IMMEDIATE DELIVERABLES (By Tuesday, Apr 22)

### Naveena's Tasks:

| # | Task | Tool | Output |
|---|---|---|---|
| 1 | **Build Flow Diagram** | OpenCode.ai / Gemini | Visual flow of full platform architecture and all 4 document flows |
| 2 | **Recreate Applied Epic Interface** | OpenCode.ai + existing screenshots + Figma | V1 working prototype of Agency Management Portal |
| 3 | **Generate ASCII Diagrams** | Gemini / Claude from transcript | System hierarchy, portal relationships, document flows |
| 4 | **Document Onboarding Guide** | Markdown / Notion | Glossary of terms, system context, portal descriptions — for future devs |
| 5 | **Share Progress Updates** | USA Mark Slack channel | Screenshots, diagrams, prototype links — continuously |

### Vishal's Tasks:

| # | Task | Output |
|---|---|---|
| 1 | **Grant Naveena API Key** | OpenCode.ai access credentials shared |
| 2 | **Invite Naveena to Tuesday Meeting** | Calendar invite for Marc + SMC + Naveena session |

### Group Tasks:

| # | Task | Output |
|---|---|---|
| 1 | **Build Applied Epic V1** | Working prototype ready for Tuesday demo with Marc |
| 2 | **Prepare for Conference** | Applied Epic solution demo ready before September conference |

---

## 8. APPLIED EPIC V1 — PROTOTYPE SCOPE (For Tuesday)

The V1 of Applied Epic to show Marc must demonstrate:

### Must-Have Screens for Demo:
1. **MGA Dashboard** — KPIs, alerts, renewal pipeline
2. **Broker Management** — Broker directory, onboarding status, commission queue
3. **Carrier Management** — Carrier list, connectivity type (API/File/SEMC), rating rules view
4. **Policy Repository** — Searchable policy list with filters
5. **Policy Detail** — Full policy record with attached docs, endorsements, claims
6. **Document Ingestion** — Upload screen with AI extraction preview + confidence scores
7. **Commission Ledger** — Broker commissions pending/approved/paid
8. **Compliance Tracker** — State filings due

### Nice-to-Have (If Time Allows):
- Endorsement management screen
- Claims oversight screen
- Renewal auto-flag workflow

### Prototype Approach:
- Use **OpenCode.ai** (Vishal providing 1-month subscription)
- Reference all existing screenshots + Figma designs from BridgePoint
- Emulate Applied Epic layout and feature set
- Goal: working clickable prototype, not production-ready code
- V1 delivery: **Tuesday evening, Apr 22**

---

## 9. TECHNOLOGY & TOOLS

| Tool | Purpose | Owner |
|---|---|---|
| **OpenCode.ai** | AI-assisted prototyping, code generation, diagramming — aggregates multiple models (Minmax, GLM) | Vishal provides API key |
| **SEMC API** | Backend carrier connectivity for 40+ carriers — Rate / Quote / Bind | Backend integration |
| **Gemini** | Generate ASCII diagrams from transcripts | Naveena |
| **Figma** | UI/UX design for portals | Naveena / Design team |
| **Applied Epic** | Reference system to emulate for Agency Management Portal | Study existing screenshots |
| **Lovable / similar** | Front-end rapid prototyping | Naveena |

---

## 10. OPEN DECISIONS (Not Yet Resolved)

| # | Decision | Owner | Status |
|---|---|---|---|
| 1 | **Lockton deal signed?** | Marc | Waiting — not yet confirmed |
| 2 | **SEMC backend integration scope** | Vishal + SEMC | Defined conceptually, not technically spec'd |
| 3 | **Direct carrier API list** | Marc / Singlepoint | Which carriers have direct APIs vs file-based? |
| 4 | **Commission % per carrier per product** | Marc | Not configured yet |
| 5 | **Claims management depth** | Group | Broker manages? MGA manages? Both? Level not fully defined |
| 6 | **Surplus lines filing automation** | Marc | Mentioned, not scoped |
| 7 | **Applied Epic licensing / white-label rights** | Marc / Legal | Not discussed |
| 8 | **September conference demo scope** | Marc | What features need to be live by then? |

---

## 11. MISSING FLOWS TO BUILD

| Flow | Status | Notes |
|---|---|---|
| Loss run ingestion → structured summary | 🔴 Not built | Covered in Transcript 1 — Loss Run Pro integration needed |
| Multi-carrier simultaneous routing | 🟡 Partial | Via SEMC API — needs front-end routing screen |
| COI issuance visibility | 🔴 Not built | Read-only in all portals; edit only at carrier |
| Endorsement workflow (end to end) | 🔴 Not built | Customer → Broker → MGA → Carrier → COI update |
| Commission request and approval | 🔴 Not built | Post-binding trigger → broker request → MGA approval |
| Carrier file digitization (Method 2) | 🔴 Not built | PDF/Excel rating rules → internal API |
| Claims escalation to MGA | 🔴 Not built | Trigger when broker-carrier negotiation stalls |
| Renewal auto-flag + re-routing | 🔴 Not built | 90-day flag → loss run pull → re-market |
| Compliance & 50-state filings tracker | 🔴 Not built | Per state per product line |
| Broker fiduciary/commission transparency | 🔴 Not built | Show client which quotes yield broker commission (optional) |
