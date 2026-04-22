# Implementation Plan — Cede (Carrier ↔ MGA Capacity Bridge)

**Portal:** Cede — 7th portal of the Singlepoint platform
**Purpose:** Neutral, multi-carrier marketplace + program-lifecycle workbench bridging primary/fronting carriers and MGAs
**Plan version:** v1.0
**Date:** 2026-04-21
**Companion PRD:** `PRD/07_Cede_Carrier_MGA_Bridge_PRD.md`
**Companion research brief:** See "Industry Research Report" embedded in PRD Appendices

---

## 0. Executive Summary

Cede is the 7th portal of the Singlepoint platform. It lives between carriers (CarrierQP) and MGAs (MGA Portal), handling the program-origination, DUA management, and ongoing delegated-authority oversight that neither portal owns today. This document is the **engineering / build plan** corresponding to the PRD.

Scope: ~14 modules, ~90 renderers, ~100 routes, extending `src/main.js` and `src/data.js`.

Build budget (sequential, single engineer): ~10-12 days at the current velocity seen across the prior six portals (~1-1.5 portals/wk on this codebase's vanilla-JS SPA pattern).

---

## 1. Architectural Approach

Follow the pattern already established by the other six portals — do not introduce new frameworks or tooling.

### 1.1 File layout (additive only)

| Touchpoint | Change |
|------------|--------|
| `src/main.js` | Add Cede routes, render functions, state helpers |
| `src/data.js` | Add `cede*` mock datasets |
| `src/styles.css` | Add `.cede-theme` block (warm amber, #f59e0b accent) |
| `index.html` | No change (Cede mounts at existing `#app` root) |

### 1.2 Route & state conventions

Match existing portals:

- `state.portal === 'cede'`
- `state.role` toggles — one of `carrier` · `mga` · `broker` · `admin`
- `state.screen` uses kebab-case slugs: `cede-dashboard`, `cede-marketplace`, `cede-dua-editor`, etc.
- Router dispatches on `state.portal + state.screen` (see existing `router()` in `main.js`)

### 1.3 Theme

```css
.cede-theme {
  --accent: #f59e0b;
  --accent-deep: #b45309;
  --accent-soft: #fef3c7;
  --portal-bg: linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%);
}
```

Use existing `.portal-header`, `.portal-nav`, `.card`, `.table-scroll`, `.badge-*` components — do not fork them.

### 1.4 Role toggle

Cede has four roles sharing the same URL. Implement as a top-right switcher (like Konduit / CarrierQP / Synapi) that updates `state.role` and re-renders navigation + default landing screen. Left-nav is computed per role.

### 1.5 Existing cross-portal rules (MUST follow)

- All wide tables wrapped in `.table-scroll` — no cropping, no horizontal overflow on parent cards.
- Every data field populated — no blanks, no "TBD", no dead buttons.
- AI-extracted fields use confidence scoring (Green ≥95% · Amber 88-94% · Red <88%).
- All write actions produce audit-log entries.

---

## 2. Module Breakdown

For each of the 14 modules, this section lists screens to build, data entities consumed, and key interactions. Module names match the PRD.

### Module 1 — Marketplace & Origination (10 screens)

| Screen slug | Purpose | Key data |
|-------------|---------|----------|
| `cede-dashboard` | Role-aware landing page | `cedeMandates`, `cedeCarriers`, `cedeMGAs` |
| `cede-marketplace-browse` | Browse MGAs / carriers (role-aware) | `cedeAppetites`, `cedeSeekingProfiles` |
| `cede-carrier-appetite-registry` | Carrier publishes appetite | `cedeAppetites` |
| `cede-mga-seeking-profile` | MGA publishes capacity needs | `cedeSeekingProfiles` |
| `cede-match-results` | Smart-match scored list | `cedeMatches` |
| `cede-opt-in-reveal` | Mutual NDA + financials reveal | `cedeMandates`, `cedeAuditLog` |
| `cede-bor-nomination` | Nominate broker-of-record | `cedeMandates`, broker registry |
| `cede-mandate-detail` | Single mandate workspace (milestones, tasks) | `cedeMandates` |
| `cede-mandate-pipeline` | All active mandates w/ SLA flags | `cedeMandates` |
| `cede-market-analytics` | Anonymized market stats | `cedeBenchmarks` |

### Module 2 — Due Diligence Data Room (10)

| Screen | Purpose |
|--------|---------|
| `cede-dd-checklist-builder` | Template + customization |
| `cede-dd-document-vault` | Upload + version |
| `cede-dd-viewer` | PDF / Word preview + annotation |
| `cede-dd-extraction` | AI-extracted structured fields w/ confidence |
| `cede-dd-qa-thread` | Document-level Q&A + SLA |
| `cede-dd-reviewer-board` | Reviewer assignments + scoring |
| `cede-dd-scoring-rubric` | Weighted score roll-up vs. cohort |
| `cede-dd-reference-check` | Broker / reinsurer / legal refs |
| `cede-dd-redflags` | Auto + manual red-flag registry |
| `cede-dd-export-pack` | Signed PDF DD pack |

### Module 3 — DUA / Program Agreement Builder (12)

| Screen | Purpose |
|--------|---------|
| `cede-dua-templates` | LMA 3113/3114/5159 + NAIC model library |
| `cede-dua-clauses` | ~150 standard clauses w/ variants |
| `cede-dua-parties` | Parties + recitals builder |
| `cede-dua-grant` | Grant-of-authority |
| `cede-dua-binding-matrix` | Binding-authority matrix editor |
| `cede-dua-commission` | Commission structure builder w/ sliding-scale visualizer |
| `cede-dua-claims-authority` | Claims tiers + panel counsel + large-loss notification |
| `cede-dua-bordereau-spec` | Cadence + format selector (ACORD NGDS / LMA CRS / Excel) |
| `cede-dua-audit-rights` | Annual / for-cause / SOC / collateral audit rights |
| `cede-dua-termination` | Notice + cause + run-off structure |
| `cede-dua-diff` | Clause-level diff vs. template or peer |
| `cede-dua-redline` | Versioning + redline accept/reject |

### Module 4 — Term Negotiation & E-sign (6)

| Screen | Purpose |
|--------|---------|
| `cede-term-sheet-list` | All open term sheets |
| `cede-term-sheet-detail` | Economic terms + counter-offer |
| `cede-counteroffer-flow` | Versioned counter-offers |
| `cede-economic-simulator` | LR-scenario commission model |
| `cede-esign-ceremony` | DocuSign-integrated e-sign |
| `cede-closing-bundle` | Immutable executed pack |

### Module 5 — Program Activation (6)

| Screen | Purpose |
|--------|---------|
| `cede-activation-checklist` | Auto-generated tasks post-DUA |
| `cede-collateral-setup` | Trust / LOC setup + bank confirmation |
| `cede-system-integration` | Push binding matrix to MGA PAS + configure bordereau endpoint |
| `cede-producer-appointments` | State-by-state NIPR appointments |
| `cede-reinsurance-handoff` | Coordinate w/ CarrierQP + Konduit |
| `cede-golive-signoff` | Dual CUO sign-off |

### Module 6 — Program Monitoring & UW Compliance (10)

| Screen | Purpose |
|--------|---------|
| `cede-program-performance` | Real-time premium + LR + triangles |
| `cede-uw-compliance-scorecard` | Every bind validated live |
| `cede-breach-resolution` | UW desk workflow on flagged breaches |
| `cede-rate-adequacy` | Pricing vs. indication |
| `cede-hit-ratio` | Quote-to-bind per MGA/class/state |
| `cede-binding-velocity` | Concentration / drift flags |
| `cede-claim-authority-monitor` | Claim-by-claim authority validation |
| `cede-claim-audit-sampling` | AI-driven stratified sampler |
| `cede-program-benchmarking` | Anonymized cohort comparisons |
| `cede-alerts` | Early-warning rule engine |

### Module 7 — Bordereau Management (8)

| Screen | Purpose |
|--------|---------|
| `cede-bordereau-inbox` | Inbound risk / premium / claim bordereaux |
| `cede-bordereau-transformer` | Canonical-format translator |
| `cede-bordereau-validation` | Schema + rule validation |
| `cede-bordereau-reconciliation` | Cash vs. premium vs. commission |
| `cede-bordereau-exceptions` | Manual resolution queue |
| `cede-lr-feed` | T+5 LR dashboard |
| `cede-bordereau-archive` | Immutable + searchable |
| `cede-ddm-sync` | Lloyd's DDM submission |

### Module 8 — Collateral & Trust Management (6)

| Screen | Purpose |
|--------|---------|
| `cede-collateral-dashboard` | LOCs + trusts + funds-withheld live |
| `cede-collateral-verification` | Direct bank confirmation log |
| `cede-collateral-vs-exposure` | Live ratio + alerts |
| `cede-loc-maturity` | Renewal countdown |
| `cede-trust-ledger` | Fiduciary reconciliation |
| `cede-vesttoo-redflags` | Issuing-bank concentration + unusual-counterparty alerts |

### Module 9 — Amendments & Renewal (6)

| Screen | Purpose |
|--------|---------|
| `cede-amendment-initiator` | Change to matrix / commission / territory |
| `cede-amendment-diff` | Clause + rule diff vs. current DUA |
| `cede-effective-dating` | New biz vs. retroactive |
| `cede-renewal-pipeline` | Programs approaching anniversary |
| `cede-renewal-negotiation` | Reuses term-negotiation module |
| `cede-annual-review-pack` | DA committee auto-built pack |

### Module 10 — Termination & Run-off (6)

| Screen | Purpose |
|--------|---------|
| `cede-termination-initiator` | Convenience / cause / auto |
| `cede-notice-tracker` | Cure period + notice expiry |
| `cede-runoff-dashboard` | In-force book + run-off commission |
| `cede-data-export` | ACORD-canonical post-termination pack |
| `cede-authority-winddown` | Reduce binding authority |
| `cede-novation-lpt` | Loss-portfolio transfer workflow |

### Module 11 — Audit & Compliance (10)

| Screen | Purpose |
|--------|---------|
| `cede-audit-calendar` | Annual + for-cause schedule |
| `cede-uw-file-audit` | UW-file sampling workbench |
| `cede-claim-file-audit` | Claim-file sampling workbench |
| `cede-premium-trust-audit` | Fiduciary recon + FDIC status |
| `cede-soc-registry` | SOC-1 / SOC-2 tracking |
| `cede-naic-225-checklist` | Per-state compliance |
| `cede-state-variations` | NY / TX / CA / FL + others deltas |
| `cede-audit-findings` | Open findings + SLA |
| `cede-orsa-export` | One-click ORSA-aligned export |
| `cede-exam-pack` | DOI exam-bundle builder |

### Module 12 — Commissions, Settlement & Profit Commission (6)

| Screen | Purpose |
|--------|---------|
| `cede-commission-ledger` | Multi-layer ledger |
| `cede-sliding-scale` | Live LR-driven commission calc |
| `cede-profit-accrual` | Cohort-based w/ development factors |
| `cede-settlement-dashboard` | Net owed each way + ACH |
| `cede-bor-fees` | Broker-of-Record fee ledger |
| `cede-profit-truup` | YoY restatement + IBNR true-up |

### Module 13 — Benchmarking & Analytics (6)

| Screen | Purpose |
|--------|---------|
| `cede-benchmark-mga-view` | Your LR vs. peer cohort |
| `cede-benchmark-commission` | Typical commission structures |
| `cede-carrier-scorecard-mga-view` | Fronting-fee trend + dispute history |
| `cede-mga-scorecard-carrier-view` | LR drift + bordereau timeliness + UW compliance |
| `cede-market-trends` | Aggregate platform telemetry |
| `cede-privacy-controls` | k-anonymity / ε thresholds |

### Module 14 — Governance (Platform Admin) (6)

| Screen | Purpose |
|--------|---------|
| `cede-member-applications` | MGA applications queue |
| `cede-carrier-applications` | Carrier applications queue |
| `cede-bor-registry` | Approved specialty brokers |
| `cede-disputes` | Mediation workflow |
| `cede-data-residency` | Per-tenant privacy controls |
| `cede-platform-audit-log` | Immutable access + edit + view + export log |

---

## 3. Data Model Additions (to `src/data.js`)

Add one export per entity; mirror the mock-data pattern used by the other portals (realistic field values, no placeholders).

```
export const cedeCarriers            = [ /* 8-12 carriers: State National, Accelerant, Sutton, Clear Blue, Trisura, Spinnaker, Obsidian, Vantage, Everspan, Core Specialty, Transverse, Bowhead */ ];
export const cedeMGAs                = [ /* 14-20 MGAs across E&S specialty, BOP, cyber, trucking, cannabis, pet, habitational, artisan contractor */ ];
export const cedeMandates            = [ /* 12-16 mandates across lifecycle stages: prospecting, DD, DUA-draft, term-nego, e-sign, activating, in-force, amending, renewing, terminating, run-off */ ];
export const cedeAppetites           = [ /* carrier appetite matrices */ ];
export const cedeSeekingProfiles     = [ /* MGA capacity-seeking entries */ ];
export const cedeMatches             = [ /* scored pairings */ ];
export const cedeDDPacks             = [ /* DD artefacts + review scores */ ];
export const cedeAgreements          = [ /* executed DUAs w/ full clause structure */ ];
export const cedeClauses             = [ /* 150+ library clauses */ ];
export const cedeBindingMatrices     = [ /* machine-executable rules per program */ ];
export const cedeClaimAuthorities    = [ /* claim-tier configurations */ ];
export const cedeTermSheets          = [ /* versioned negotiation artefacts */ ];
export const cedeActivations         = [ /* activation checklists */ ];
export const cedeCollateral          = [ /* LOCs + trusts + FW per program */ ];
export const cedeCollateralVerifs    = [ /* issuing-bank confirmation logs */ ];
export const cedeBordereaux          = [ /* risk / premium / claim bordereaux */ ];
export const cedeBordereauxValidns   = [ /* schema + business-rule pass/fail */ ];
export const cedeReconciliations     = [ /* recon ledger */ ];
export const cedeCompliance          = [ /* UW-breach + claim-authority-breach registry */ ];
export const cedeAudits              = [ /* annual + for-cause workspaces */ ];
export const cedeSocReports          = [ /* SOC-1 / SOC-2 registry */ ];
export const cedeAmendments          = [ /* amendment history */ ];
export const cedeRenewals            = [ /* renewal pipeline */ ];
export const cedeTerminations        = [ /* termination workflows + run-off */ ];
export const cedeDataPortability     = [ /* post-termination data packs */ ];
export const cedeCommissions         = [ /* multi-layer ledger */ ];
export const cedeSlidingScales       = [ /* sliding-scale configs */ ];
export const cedeProfitCommissions   = [ /* accruals + true-ups */ ];
export const cedeBorFees             = [ /* BoR fee ledger */ ];
export const cedeBenchmarks          = [ /* anonymized cohort telemetry */ ];
export const cedeReferences          = [ /* MGA reference packs */ ];
export const cedeNaicCompliance      = [ /* NAIC #225 compliance state per program */ ];
export const cedeStateVariations     = [ /* state-by-state deltas */ ];
export const cedeAuditLog            = [ /* immutable platform audit trail */ ];
export const cedeUsers               = [ /* carrier / MGA / broker / admin personas */ ];
```

Seed volume: ~400-500 rows total across all entities — enough for every screen to render meaningful non-empty data.

---

## 4. CSS Additions (to `src/styles.css`)

One theme block + reuse of existing utility classes.

```css
.cede-theme {
  --accent: #f59e0b;
  --accent-deep: #b45309;
  --accent-soft: #fef3c7;
  --portal-bg: linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%);
  --badge-bg: #fef3c7;
  --badge-fg: #92400e;
}
.cede-theme .portal-header { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); }
.cede-theme .primary-btn    { background: var(--accent-deep); }
.cede-theme .accent-link    { color: var(--accent-deep); }

/* Cede-specific components (add only if reused ≥ 2 screens) */
.cede-matrix-cell-auto    { background: #d1fae5; color: #065f46; }
.cede-matrix-cell-refer   { background: #fef3c7; color: #92400e; }
.cede-matrix-cell-decline { background: #fee2e2; color: #991b1b; }
.cede-collateral-verified { border-left: 4px solid #10b981; }
.cede-collateral-pending  { border-left: 4px solid #f59e0b; }
.cede-collateral-unverified { border-left: 4px solid #ef4444; }
.cede-confidence-green    { color: #059669; }
.cede-confidence-amber    { color: #d97706; }
.cede-confidence-red      { color: #dc2626; }
```

Do not fork card / table / badge — reuse.

---

## 5. Phased Rollout

Phasing is sized so each phase ends at a demoable milestone.

### Phase 0 — Foundation (0.5 day)
- Theme CSS block
- Portal routing skeleton (`state.portal === 'cede'`)
- Role-toggle plumbing (carrier / mga / broker / admin)
- Top-level layout + left-nav shell
- Login-screen portal-picker entry for Cede
- Dashboard placeholder per role

### Phase 1 — Marketplace & Origination (2 days)
- Module 1 (all 10 screens)
- Seed `cedeCarriers`, `cedeMGAs`, `cedeAppetites`, `cedeSeekingProfiles`, `cedeMatches`, `cedeMandates`
- Demo: carrier publishes appetite → MGA posts profile → match engine scores → mutual opt-in → mandate created

### Phase 2 — Due Diligence + DUA Builder (2 days)
- Modules 2 and 3 (22 screens)
- Seed `cedeDDPacks`, `cedeClauses`, `cedeAgreements`, `cedeBindingMatrices`
- Demo: DD data room → scoring → DUA drafted from templates → binding matrix editor produces machine-executable JSON

### Phase 3 — Term Negotiation + Activation (1.5 days)
- Modules 4 and 5 (12 screens)
- Seed `cedeTermSheets`, `cedeActivations`, `cedeCollateral`, `cedeCollateralVerifs`
- Demo: counter-offer workflow → economic simulator → e-sign → activation checklist with collateral verification gate

### Phase 4 — Monitoring + Bordereau (2 days)
- Modules 6 and 7 (18 screens)
- Seed `cedeBordereaux`, `cedeBordereauxValidns`, `cedeReconciliations`, `cedeCompliance`
- Demo: live bordereau ingest → T+5 LR dashboard → UW compliance score → AI-flagged breach

### Phase 5 — Collateral + Amendments + Termination (1.5 days)
- Modules 8, 9, 10 (18 screens)
- Seed `cedeAmendments`, `cedeRenewals`, `cedeTerminations`, `cedeDataPortability`
- Demo: LOC verification → amendment flow → termination with data-pack export

### Phase 6 — Audit + Commissions + Analytics + Admin (1.5 days)
- Modules 11, 12, 13, 14 (28 screens)
- Seed `cedeAudits`, `cedeSocReports`, `cedeCommissions`, `cedeSlidingScales`, `cedeProfitCommissions`, `cedeBenchmarks`, `cedeNaicCompliance`, `cedeStateVariations`, `cedeAuditLog`
- Demo: NAIC #225 checklist → SOC registry → ORSA export → sliding-scale commission live calc → benchmarking privacy controls

### Phase 7 — Cross-portal integration polish (0.5 day)
- Wire `cedeMandates` to surface inside **MGA Portal** and **CarrierQP** as read-only "Program Origination" tab
- Wire binding-matrix push (Cede → MGA policy admin mock)
- Wire bordereau-exchange mock (Cede ↔ CarrierQP bordereau inbox)
- Emit `Synapi` events (simulate via console + audit log)
- Update platform login screen + portal picker

---

## 6. Cross-Portal Integration Contract

| Contract | Where | Direction | Notes |
|----------|-------|-----------|-------|
| `cedeBindingMatrices[].rulesJson` | Cede → MGA Portal | push | MGA's policy-admin must ingest JSON matrix and enforce at bind-time |
| `cedeBordereaux[]` | MGA Portal → Cede | push | MGA posts via canonical ACORD NGDS; Cede transforms + validates + reconciles |
| `cedeBordereaux[]` | Cede → CarrierQP | push | After Cede reconciles, post to CarrierQP bordereau inbox |
| `cedeAgreements[]` | Cede → CarrierQP | push | Executed DUA lives as carrier's "delegated-authority contract" record |
| `cedeTerminations[]` | Cede → MGA Portal / CarrierQP | push | Status changes drive UI state in both portals |
| `Synapi` events | Cede → Synapi | publish | `program.originated`, `dua.drafted`, `dua.executed`, `program.activated`, `bordereau.posted`, `breach.detected`, `program.amended`, `program.terminated` |
| `Konduit` cross-link | Cede ↔ Konduit | read | When primary program activates, prompt user to set up outward cession through Konduit |

---

## 7. Acceptance Criteria (per phase)

A phase is "done" when **all** of the following pass:

1. All screens in-scope for that phase render without error in each applicable role.
2. Every data field on every screen is populated from `data.js` (no blanks, no "TBD", no `undefined`).
3. All wide tables wrapped in `.table-scroll` — horizontal scroll works, no cropping.
4. No dead buttons: every interactive control either does something, is disabled with a reason tooltip, or links to the relevant next screen.
5. Role toggle switches work — navigation updates, default screen updates, persona-appropriate data visible.
6. Audit-log entries produced for every write action demonstrated in the phase demo.
7. Existing six portals continue to work (regression).

---

## 8. Testing Approach

- **Manual smoke test** per phase (follow the demo script noted in each phase).
- **Regression check:** hit each of the six existing portals' top screens, confirm no errors.
- **Data completeness spot-check:** randomly open 10 screens per phase and visually confirm no empty fields / dead buttons.
- **Browser matrix:** Chrome + Edge (primary); Firefox + Safari (secondary) — same as rest of platform.

No automated test suite is in scope for this build (matches existing codebase convention).

---

## 9. Risks & Mitigations (engineering-level)

| Risk | Mitigation |
|------|------------|
| `main.js` size growth past practical edit threshold (~40K lines) | OK for now; if it becomes unwieldy, split to `src/cede.js` in a follow-on refactor — do not introduce a framework |
| Data model collisions with existing portals (e.g., `cedeCarriers` vs. `mgaCarriers`, `carrierMGAs`) | Keep `cede*` prefix; document cross-references explicitly |
| Binding-matrix JSON schema must be stable across portals | Define schema up front in Phase 2, freeze before Phase 3 |
| Bordereau canonical format fidelity | Use ACORD NGDS field names verbatim; add Lloyd's CRS crosswalk as separate mapper, not inline |
| Role-toggle state leakage between portals | Reset `state.role` on portal switch; existing portals unaffected |
| Regulatory content accuracy (NAIC, state deltas, Lloyd's) | Flag content source in data.js; real deployment should have counsel review |

---

## 10. Out of Scope for This Build

- Real integrations (NIPR, A.M. Best, SERFF, DocuSign, bank LOC APIs, Lloyd's DDM, Stripe, SOC-2 evidence tooling) — simulated in mock data.
- Real authentication / RBAC — portal picker + role toggle are demo affordances.
- Real-time multi-user collaboration on DUA editing — versioning / redline shown as single-user mock.
- PDF generation for DD-pack / closing-bundle exports — show "Export" buttons that would trigger a PDF; actual generation out of scope.
- ML / AI behind extraction + sampling — show results with confidence-score UI affordances; no model in loop.

---

## 11. Open Decisions (resolve before build)

1. **Final name.** "Cede" is the working name; alternatives are Paperline, Mandate, Binder, Accord. Confirm before committing CSS class names and all `state.portal` string.
2. **Role-toggle default.** Should first-time user land on `carrier` or on the role last used? Propose: last-used, fall back to `carrier`.
3. **Dashboard layout.** Copy Konduit's executive-toggle pattern vs. CarrierQP's four-role tiles. Propose: CarrierQP-style tiles with carrier/MGA/broker/admin cards on landing, then role-toggle to enter role's dashboard.
4. **Broker-of-Record lane visibility.** Should BoR see ALL mandates they're tagged on, or only current-active? Propose: all, with active-vs-archived tabs.
5. **Benchmarking default privacy.** k ≥ ? for cohort reveal. Propose: k ≥ 5 for any LOB × state cell; otherwise "insufficient sample".
6. **Integration stubs.** Should this build emit real JSON to a localStorage bus that MGA / CarrierQP consume, or just console.log? Propose: localStorage bus keyed `cede.events.v1` for realistic demo cross-portal flow.

---

## 12. Deliverables Checklist

- [ ] `src/main.js` — all route handlers + renderers for 14 modules (~90 renderers)
- [ ] `src/data.js` — all `cede*` mock datasets (34+ exports, ~400-500 rows total)
- [ ] `src/styles.css` — `.cede-theme` block + new component classes (≤ 20 lines of genuinely Cede-specific CSS)
- [ ] Portal picker on login screen includes "Cede"
- [ ] Role toggle UI on Cede header
- [ ] Navigation left-rail per role
- [ ] Cross-portal hooks (localStorage bus) to MGA + CarrierQP
- [ ] Audit-log entries for all write actions
- [ ] Demo data complete (no blanks, no dead buttons, all tables scrollable)
- [ ] Regression pass on all six existing portals
- [ ] PRD companion at `PRD/07_Cede_Carrier_MGA_Bridge_PRD.md` (already written)
- [ ] Platform Summary at `PRD/00_Platform_Summary.md` updated to reflect 7 portals
- [ ] README at `PRD/README.md` updated index
- [ ] PDFs regenerated via `node PRD/_build_pdfs.mjs`

---

## 13. Reference Materials

- PRD: `PRD/07_Cede_Carrier_MGA_Bridge_PRD.md`
- Research brief and source citations: Appendix A & B of the PRD
- Data standards: ACORD NGDS / AL3 reference, Lloyd's CRS v5.2
- Regulatory: NAIC Model #225; NY Reg 120; TX Ch. 4053; CA producer-appointment rules
- Market data: Conning 2025 MGA Study · Gallagher Re 2024 NA MGA Fronting Counterparties · Accelerant 10-K
- Prior plans: `implementation_plan.md` (Broker), `implementation_planclient.md` (Customer), `implementation_planCarrierQP.md` (Carrier), `implementation_plan_Synapi.md` (Synapi)
