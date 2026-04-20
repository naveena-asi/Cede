# CarrierQP — Carrier / Insurer Portal: Research & Implementation Plan

> 5th portal in the platform · Deep-sapphire accent · Role-toggled  
> (UW Operations · Reinsurance & Finance · Claims & Compliance · Reinsurer-facing)  
> Will NOT touch Customer, Broker, MGA, or Konduit portals.

## 1. What a carrier portal actually is

A carrier / insurer portal is the operating system of the company that *issues the paper* — the legal entity holding the insurance license, capital reserves, and state admissions. Unlike the MGA (which underwrites under delegated authority) or the broker (which distributes), the carrier is the **risk-bearing counterparty** responsible to regulators, reinsurers, policyholders, and claimants.

Across US carriers (AIG, Travelers, Chubb, Liberty, Zurich, Markel, Arch, W.R. Berkley, Nationwide, HDI, Munich Re US, Sompo, Tokio Marine) the common operating surfaces are:

- Submissions clearance + underwriter workbench (Duck Creek, Guidewire UnderwriterConnect, Majesco CL, EIS)
- Policy administration (PAS — Guidewire PolicyCenter, Duck Creek Policy, Majesco, Insurity)
- Claims administration (ClaimCenter, Duck Creek Claims, Snapsheet)
- Reinsurance management (SICS by Swiss Re, Sapiens ReinsuranceMaster, Moody's RMS)
- Rate & form filing (SERFF — System for Electronic Rate and Form Filing, operated by NAIC)
- Financial / statutory reporting (Yellow Book, Blue Book, Schedule P, RBC)
- Bordereau processing (premium + claims from MGAs)
- Reinsurer-facing ceding (the other side of Konduit)

## 2. Where CarrierQP fits

Current lifecycle:
```
Insured → Broker → MGA → (Konduit) → Capacity
```
The **Capacity** leg has no operating home. CarrierQP is that workbench. Every policy now has two operating homes: the MGA portal (Singlepoint) *and* the issuing carrier portal (CarrierQP).

**Scope guarantee:** Touch only (a) `renderLogin()` for a 5th portal card; (b) router for `state.portal === 'carrier'`; (c) new `renderCarrierPortal()` with its own nav, scoped theme (`.carrier-theme`), screens, data. Zero edits to Customer / Broker / MGA / Konduit render/bind.

## 3. Personas (role-toggled inside CarrierQP)

### A. Underwriting Operations (default)
- Chief Underwriting Officer (CUO)
- Line Underwriter (Commercial / Personal / Specialty)
- Senior UW / Referral Authority
- UW Assistant
- MGA Relationship Manager
- Producer Relationship Manager

### B. Reinsurance & Finance
- Head of Reinsurance
- Reinsurance Accountant
- Actuary
- CAT Manager
- Finance / Controller

### C. Claims & Compliance
- Claims Manager
- Claims Examiner
- Subrogation / Recovery
- Compliance Officer
- Risk Engineer

### D. Reinsurer-facing view (optional 4th toggle)
Read-only view for the carrier's reinsurance panel (Munich Re, Hannover Re, etc.) to see ceded bordereau, claims, recoverables.

## 4. Navigation / modules

### A. Underwriting Operations (14 modules)
1. Dashboard
2. Submissions Clearance
3. Underwriter Workbench
4. Quotes
5. Policies (In-force)
6. Endorsements & Servicing
7. Renewals
8. Appetite & Rules
9. Delegated Authority (MGAs)
10. Bordereau Inbox
11. Producers
12. Rate & Form Filings
13. Rate / Pricing Tools
14. Reports

### B. Reinsurance & Finance (10 modules)
1. Dashboard
2. Treaties
3. Ceded Bordereau
4. Recoverables
5. Retrocession
6. CAT Management
7. Reserving
8. Financials
9. Trust & Collateral
10. Statutory Reporting

### C. Claims & Compliance (9 modules)
1. Claims Dashboard
2. Claims List
3. Claim Detail (360°)
4. Subrogation & Salvage
5. Litigation Management
6. CAT Event Center
7. SERFF Filings
8. Complaints & Market Conduct
9. Compliance Library

### D. Reinsurer-facing (5 modules, read-only)
1. Ceded book summary
2. Bordereau — premium (inbound from carrier)
3. Bordereau — claims (inbound from carrier)
4. Recoverables outstanding
5. Treaty performance by LOB / accident year

## 5. Core flows (end-to-end)

1. **Submission → Bind** · clearance (duplicate check, appetite match, license verification) → UW assignment → risk review → quote (with referral if out-of-authority) → negotiation → bind → policy issuance → bordereau ingest.
2. **Endorsement** · request → coverage analysis → premium recalc → UW approval/referral → e-sign → policy update → reinsurance cession update.
3. **Renewal** · 90/60/30-day buckets → re-underwrite with loss experience → rate-change decision → renewal quote → accept/lapse.
4. **Claims** · FNOL → assignment → coverage → reserve set → investigation → reserve adjust → payments → subrogation/salvage → closure → cede → statutory reporting.
5. **Bordereau ingestion** · MGA submits → automated reconciliation → exceptions → adjust → ceded bordereau → commission payable → audit lock.
6. **Rate / Form filing** · actuarial indication → product draft → compliance review → SERFF submission → DOI objections → revisions → approval → effective-date.
7. **Treaty renewal** · 120-day lookahead → actuarial model → target retention → placement → negotiation → slip signing → treaty activation.
8. **CAT event response** · event declared → aggregated exposure → reinstatement tracking → claims surge → reinsurance triggered → recoverables accrued.

## 6. Screen inventory — ~110 screens

| Role | Screens |
|---|---|
| Underwriting Operations | ~45 |
| Reinsurance & Finance   | ~35 |
| Claims & Compliance     | ~25 |
| Reinsurer-facing        | ~5 |

## 7. Data model additions (in `data.js`, `CARRIER_*`)

`CARRIER_USERS`, `carrierAppetite`, `carrierSubmissions`, `carrierPolicies`, `carrierEndorsements`, `carrierRenewals`, `carrierMGAs`, `carrierBordereau`, `carrierTreaties`, `carrierRecoverables`, `carrierClaims`, `carrierSubrogation`, `carrierLitigation`, `carrierCATEvents`, `carrierReserveTriangles`, `carrierFinancials`, `carrierSerffFilings`, `carrierForms`, `carrierRateManual`, `carrierProducers`, `carrierComplaints`, `carrierAuditLog`, `STATES_ADMITTED`, `carrierRetroPanel`.

## 8. UX rules

- Every table in `.table-scroll` (no crop)
- Every mock field populated (no blanks)
- Every button wired — no dead `showAlert`s (navigate, mutate runtime, or modal/flow)
- Flash-banner confirmations (same pattern as Konduit)
- Readable `<option>` styling
- Real browser downloads for bordereau CSV, SERFF PDFs, loss runs, treaty slips, LEDES exports

## 9. Build phases

- **Phase 0** — Scaffolding (login card, router, `renderCarrierPortal`, `carrierNav`, theme, flash banner, stub dashboard)
- **Phase 1** — UW Core (Workbench, Submissions, Policies, Endorsements, Renewals, Appetite)
- **Phase 2** — Delegated Authority + Bordereau + Producers
- **Phase 3** — Claims + Subrogation + Litigation + CAT
- **Phase 4** — Reinsurance + Finance + Reserving
- **Phase 5** — SERFF + Compliance + Complaints
- **Phase 6** — Reinsurer-facing view (4th role toggle)
- **Phase 7** — Polish + audit

## 10. Integrations represented (as scoped mock surfaces)

- **SERFF** (rate/form filings to NAIC)
- **NIPR** (producer licensing)
- **ISO** (rating bureau forms, loss costs)
- **RMS / AIR** (CAT modeling)
- **NAIC** (statutory reporting)
- **DocuSign** (e-sign)
- **Stripe / ACH** (payouts)
- **OFAC / Sanctions**
- **SICS / Sapiens** (reinsurance accounting — simulated)

## 11. Non-goals

- No real rating engine (pre-computed mock indications)
- No real SERFF submission (simulated DOI states)
- No real CAT modeling (pre-computed PML curves)
- No real statutory XML generation (preview only)
- No real DocuSign (same e-sign wizard pattern)

## 12. Design tokens

- Accent: `#2960ff` (deep sapphire / royal blue)
- Hover: `#1e4ee0`
- Soft: `rgba(41, 96, 255, 0.12)`
- Border accent: `rgba(41, 96, 255, 0.35)`
- Glow: `0 0 20px rgba(41, 96, 255, 0.18)`

Scoped under `.carrier-theme` — other 4 portals unaffected.
