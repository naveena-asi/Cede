# Synapi — Insurance API Platform: Research & Implementation Plan

> 6th portal · Electric-violet accent · Role-toggled (Platform Admin · API Publisher · API Consumer · Compliance/Audit)
> ACORD-compliant, REST/JSON-first, OAuth-secured, event-driven infrastructure layer
> Will NOT touch Customer, Broker, MGA, Konduit, or CarrierQP portals.

## 1. What Synapi is

The connective tissue that sits underneath all 5 other portals (and the wider ecosystem): a unified API hub, developer portal, catalog marketplace, and event bus modeled after Herald, Ivans/Applied Markets, Vertafore TransactNOW, Bold Penguin, and the Stripe developer-portal UX standard.

**Reference vendors for feature research:**
- Herald — unified commercial quoting API, 30+ carriers, ACORD-compliant
- Ivans / Applied Markets — AL3 + JSON layer between AMS and carriers
- Vertafore TransactNOW — real-time quote/bind/endorsement for 200+ carriers
- Bold Penguin — commercial submission exchange
- Zywave Distribution Cloud — partner marketplace + orchestration
- ACORD — standards body (XML/AL3 + NGDS JSON)
- Socotra / Duck Creek Cloud / Guidewire Cloud — API-first core systems
- Stripe — developer portal UX reference (catalog, docs, keys, webhooks, logs, status)

## 2. Where it fits

```
Insured ↔ Broker ↔ MGA ↔ (Konduit) ↔ Capacity ↔ CarrierQP
            └────────── Synapi API fabric ──────────┘
```

Every arrow above becomes programmatic: one `/quote` call fans out to 12 carriers, policy events broadcast to MGA + reinsurer + AMS in parallel, embedded insurance partners can bind in 400ms.

**Scope guarantee:** Touch only (a) `renderLogin()` for a 6th card, (b) router `state.portal === 'synapi'`, (c) new `renderSynapiPortal()` + own nav + `.synapi-theme` CSS + screens + data. Zero edits to the other 5 portals.

## 3. Personas — by flow stage

### Platform side
- Platform Admin (superuser)
- Platform Ops / SRE
- Platform Security & Compliance
- Partner Success Manager
- Developer Advocate
- Finance / Billing Admin

### Publisher side (Carriers, MGAs exposing APIs)
- Carrier / MGA Integration Manager
- Carrier / MGA IT Architect
- Carrier Underwriter (consumes submissions arriving via API)
- Carrier / MGA Compliance

### Consumer side (Brokers, InsurTechs, embedded partners)
- Agency Tech Lead / CIO
- AMS Integrator (Applied Epic, Vertafore)
- In-house Developer
- InsurTech Engineer
- Comparative Rater Vendor
- Embedded Insurance Partner

### External / oversight
- State DOI Examiner
- Reinsurer Integration Team
- NAIC Data Call Respondent

### Stage → persona map

| Stage | Personas |
|---|---|
| Discovery | Consumer (Tech Lead/Dev), Platform Admin (curator), Publisher (listing) |
| Evaluation | Consumer Dev (reads docs, sandboxes), Publisher (reviews sandbox) |
| Onboarding | Platform Admin, Partner Success, Legal/Compliance (both sides), Publisher (provisions keys), Dev (OAuth app) |
| Development | Dev (builds), Publisher (monitors), Dev Advocate (supports) |
| Production go-live | Platform Admin (promotes), Publisher (rate limits), Dev (deploys), Ops (monitors), Finance (meters) |
| Operation | End users in 5 portals (invisible), Dev (errors), Ops (incidents), Compliance (audits), Finance (bills) |
| Change / Maintenance | Publisher (new version), Admin (migration), Dev (updates), Ops (deprecates), Dev Advocate (guide) |
| Incident | Ops (first responder), Publisher (RCA), Admin (comms), Consumer (impacted), DOI (for consumer outages) |
| Audit | Compliance Officer, Platform Security, DOI, NAIC |
| Billing | Finance (platform & partner), Publisher (revenue share), Consumer (AP) |

## 4. Navigation (4 role toggles)

### A. Platform Admin (11 modules)
Dashboard · Partners · API Catalog (admin) · Connections · OAuth Apps · ACORD Standards · Billing & Plans · Ops Center · Audit & Compliance · Release Notes · Settings

### B. API Publisher (10 modules)
Dashboard · My APIs · Endpoint Builder · Schema Mapper · Access Control · Webhooks Out · Analytics · Sandbox · Documentation · Partner Requests

### C. API Consumer (10 modules)
Dashboard · API Catalog · My Apps · Keys & Secrets · Routing Rules · Transaction Log · Webhooks In · Developer Workbench · Documentation · Billing & Usage

### D. Compliance / Audit (5 modules)
Dashboard · Audit Log · PII / Data Residency · Policy Library · Reports

## 5. Screen inventory — ~95 screens

| Role | Screens |
|---|---|
| Platform Admin | ~35 |
| API Publisher  | ~25 |
| API Consumer   | ~25 |
| Compliance     | ~10 |

## 6. Core flows

1. **Partner onboarding** — apply → contract → OAuth app → sandbox → cert → production → go-live
2. **Consumer onboarding** — catalog → OAuth app (sandbox) → dev → production request → approve → go-live
3. **Unified quote** — one `/quote` call → fan out to matched carriers → normalize ACORD → return ranked array
4. **Bind orchestration** — validate quote → carrier bind → policy issued → event fanout → docs available
5. **Event streaming** — policy event → hub → subscribers (MGA, reinsurer, AMS) via webhooks; retries + DLQ
6. **Versioning / migration** — v2 draft → sandbox → 90d sunset → consumer dashboards flag impacted apps → sunset
7. **Incident response** — detect → status page → notify consumers → RCA → SLA credits
8. **Compliance audit** — DOI query → compliance officer builds export → signed CSV → log the export itself
9. **Embedded insurance** — partner app `/quote` → `/bind` → policy in 400ms

## 7. Data model

`SYNAPI_USERS`, `synapiPartners`, `synapiApis`, `synapiApiVersions`, `synapiConsumerApps`, `synapiRoutingRules`, `synapiTransactions`, `synapiWebhooks`, `synapiAcordSchemas`, `synapiIncidents`, `synapiSla`, `synapiBillingPlans`, `synapiInvoices`, `synapiAuditLog`, `synapiPartnerRequests`, `synapiChangelog`

## 8. UX rules

- `.table-scroll` on all tables
- No blank mock data
- No dead buttons — everything navigates, mutates state, opens modal, or triggers real download
- Flash-banner confirmations in electric violet
- Readable `<option>` styling
- Real downloads: OpenAPI YAML, Postman JSON, SDK zip stubs, transaction logs CSV, audit CSV, incident RCAs, invoices, changelog MD

## 9. Build phases

- **Phase 0** — Scaffolding (6th card, router, shell, 4-role nav, theme, flash, stubs)
- **Phase 1** — Consumer side (Dashboard, Catalog, Apps, Keys, Routing, Transactions, Webhooks, Workbench, Docs, Billing)
- **Phase 2** — Publisher side (Dashboard, My APIs, Builder, Mapper, Access, Webhooks Out, Analytics, Sandbox, Docs, Requests)
- **Phase 3** — Platform Admin (Partners, Catalog, Connections, OAuth, ACORD, Billing, Ops Center, Audit, Release, Settings)
- **Phase 4** — Compliance (Audit Log, PII, Policy Library, Reports, Findings)
- **Phase 5** — Polish (real downloads, button audit, build)

## 10. Integrations represented

- **ACORD NGDS** (JSON)
- **ACORD AL3** (XML batch)
- **SERFF**, **NIPR**, **ISO ERC**, **RMS / AIR**, **NAIC**
- **OAuth 2.0 / OIDC**
- **Webhooks with HMAC-SHA256**
- **AMS connectors** — Applied Epic, Vertafore, Hawksoft, QQCatalyst, EZLynx
- **Comparative raters** — Bold Penguin, Tarmika
- **Stripe** (billing metering)
- **SendGrid / Twilio** (async delivery)
- **Datadog / New Relic** (observability feeds)
- **Drata / Vanta** (SOC2 evidence)
- **Okta / Entra** (partner SSO)

## 11. Non-goals

- No real OAuth issuance
- No real ACORD schema enforcement
- No real SDK compilation (zip stub only)
- No cryptographic webhook signing (documented not live)
- No real rate limiting engine (visualized only)
- No production rating engine orchestration (carriers return mock quotes)

## 12. Design tokens

- Accent: `#7c3aed` (electric violet)
- Hover: `#6d28d9`
- Soft: `rgba(124, 58, 237, 0.12)`
- Border accent: `rgba(124, 58, 237, 0.35)`
- Glow: `0 0 20px rgba(124, 58, 237, 0.18)`
- Deep: `#1a0b3d`

Scoped under `.synapi-theme`.

## 13. Choices (confirmed)

- Name: **Synapi**
- Accent: electric violet
- Default role: **Consumer** (largest user type)
- Compliance role: included from Phase 0
- Partner continuity: yes — reuse names from other portals (Summit, Munich Re, Meridian, Harbor, Marsh, Aon, Lockton)
- Sandbox fidelity: interactive mock with 3–4 canned scenarios per endpoint
- ACORD depth: both NGDS JSON and AL3 XML side-by-side in transaction inspector
