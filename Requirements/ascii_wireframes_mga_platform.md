# ASCII Wireframes — MGA Insurance Platform
## Singlepoint / Nexus / Applied Epic
### All 3 Portals + Key Screens

---

## PORTAL 1 — CUSTOMER PORTAL

### Screen 1.1 — Customer Dashboard
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🏢 SINGLEPOINT INSURANCE  │  John Smith (Customer)      [Logout] ⎋     │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │ ACTIVE       │  │ EXPIRING     │  │ OPEN CLAIMS  │  │ PENDING    │  │
│  │ POLICIES     │  │ SOON         │  │              │  │ ENDORSEMTS │  │
│  │    4         │  │   1 ⚠️        │  │    2         │  │    1       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│  MY POLICIES                                     [+ New Request]        │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Policy #       │ Type      │ Carrier         │ Expiry    │ Action │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ WC-2025-48821  │ Workers   │ SEMC / Liberty  │ Jun 2026  │ [View] │  │
│  │                │ Comp      │ Mutual          │           │ [COI]  │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ GL-2025-33102  │ General   │ CNA             │ Apr 2026  │ [View] │  │
│  │                │ Liability │                 │ ⚠️ EXPIRING│ [COI]  │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ CY-2025-11044  │ Cyber     │ Hartford        │ Dec 2026  │ [View] │  │
│  │                │ Liability │                 │           │ [COI]  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│  QUICK ACTIONS                                                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────────┐ │
│  │ 📄 Download COI  │  │ 🔄 Request       │  │ ✏️ Submit Endorsement    │ │
│  │                  │  │    Renewal       │  │                          │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 1.2 — Submit Endorsement
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🏢 SINGLEPOINT │  Endorsement Request                     [← Back]     │
├─────────────────────────────────────────────────────────────────────────┤
│  Policy: WC-2025-48821  │  Workers Comp  │  Liberty Mutual               │
├─────────────────────────────────────────────────────────────────────────┤
│  ENDORSEMENT TYPE                                                        │
│  ◉ Add Location        ○ Add Person       ○ Remove Location              │
│  ○ Change Limits       ○ Add Vehicle      ○ Other                        │
├─────────────────────────────────────────────────────────────────────────┤
│  DETAILS                                                                 │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Description of change:                                            │  │
│  │ Adding new warehouse at 1400 Industrial Blvd, Sacramento CA 95811 │  │
│  │                                                                   │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  Effective Date: [04/25/2026]     Attach Document: [Browse Files]        │
├─────────────────────────────────────────────────────────────────────────┤
│  SUBMISSION STATUS                                                       │
│  ● Submitted  ○ Under Review  ○ Approved  ○ Applied                     │
├─────────────────────────────────────────────────────────────────────────┤
│                           [Cancel]  [Submit Endorsement →]               │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## PORTAL 2 — BROKER PORTAL

### Screen 2.1 — Broker Dashboard
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS BROKER PORTAL │  Lockton  │  Sarah Mitchell   [Settings] [⎋]  │
├────────────┬────────────────────────────────────────────────────────────┤
│ NAVIGATION │  DASHBOARD                                                  │
│            │                                                             │
│ 📊 Dashboard│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐   │
│ 📁 Submissns│  │ ACTIVE   │ │ QUOTES   │ │ BINDINGS │ │ COMMISSION │   │
│ 💬 Quotes  │  │ CLIENTS  │ │ THIS MO  │ │ THIS MO  │ │ PENDING    │   │
│ 🔒 Bindings│  │   127    │ │   43     │ │   12     │ │ $24,800    │   │
│ 📋 Policies│  └──────────┘ └──────────┘ └──────────┘ └────────────┘   │
│ 🔔 Renewals│                                                             │
│ 💰 Commssns│  ⚠️  RENEWALS EXPIRING IN 30 DAYS                          │
│ 📝 Claims  │  ┌───────────────────────────────────────────────────────┐ │
│            │  │ Client          │ Policy  │ Expiry    │ Action        │ │
│ [+ New     │  ├───────────────────────────────────────────────────────┤ │
│  Submission│  │ Magnolia Constr │ WC + GL │ May 15    │ [Re-Submit]   │ │
│          ] │  │ Apex Industries │ BOP     │ May 22    │ [Re-Submit]   │ │
│            │  │ Valley Logistics│ Cyber   │ Jun 01    │ [Re-Submit]   │ │
│            │  └───────────────────────────────────────────────────────┘ │
│            │                                                             │
│            │  RECENT SUBMISSIONS                                         │
│            │  ┌───────────────────────────────────────────────────────┐ │
│            │  │ Client          │ Status       │ Date    │ Action     │ │
│            │  ├───────────────────────────────────────────────────────┤ │
│            │  │ Magnolia Constr │ 🟢 Quoted     │ Apr 17  │ [View]     │ │
│            │  │ Apex Industries │ 🟡 In Market  │ Apr 16  │ [View]     │ │
│            │  │ Ridge Builders  │ 🔴 Docs Needed│ Apr 14  │ [View]     │ │
│            │  └───────────────────────────────────────────────────────┘ │
└────────────┴────────────────────────────────────────────────────────────┘
```

### Screen 2.2 — New Submission (Step 1: Client Info)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS │  New Submission                                   [← Back]  │
├─────────────────────────────────────────────────────────────────────────┤
│  ●━━━━━━━●━━━━━━━○━━━━━━━○━━━━━━━○━━━━━━━○                              │
│  1.Client  2.Docs  3.Extract  4.Route  5.Quote  6.Bind                  │
├─────────────────────────────────────────────────────────────────────────┤
│  STEP 1 — CLIENT INFORMATION                                             │
│                                                                          │
│  Legal Business Name  [Magnolia Construction LLC              ]          │
│  FEIN / Tax ID        [XX-XXXXXXX                             ]          │
│  NAICS Code           [238990  ] Specialty Trade Contractors             │
│  SIC Code             [1731    ] Electrical Work                         │
│                                                                          │
│  Primary Address      [1200 Commerce Dr, Fresno CA 93727      ]          │
│  States of Operation  [✅ CA] [✅ TX] [✅ NC] [+ Add State]               │
│                                                                          │
│  Years in Business    [14     ]    Annual Revenue  [$4,200,000 ]         │
│                                                                          │
│  LINES OF BUSINESS REQUIRED                                              │
│  [✅ Workers Comp]  [✅ General Liability]  [☐ BOP]                       │
│  [☐ Cyber]  [✅ Umbrella]  [☐ Management Lines]                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                    [Save Draft]  [Next: Upload Docs →]  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 2.3 — New Submission (Step 2: Document Upload)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS │  New Submission — Magnolia Construction           [← Back]  │
├─────────────────────────────────────────────────────────────────────────┤
│  ●━━━━━━━●━━━━━━━●━━━━━━━○━━━━━━━○━━━━━━━○                              │
│  1.Client  2.Docs  3.Extract  4.Route  5.Quote  6.Bind                  │
├─────────────────────────────────────────────────────────────────────────┤
│  STEP 2 — DOCUMENT UPLOAD                                                │
│  No templates, no reformatting. Drop any unstructured files.             │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                         ⬆                                       │    │
│  │                  Drag & Drop Files Here                         │    │
│  │         [PDF] [XLSX/XLS] [CSV] [Loss Runs] [Prior Policies]     │    │
│  │                    or  [Browse Files]                           │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  QUEUED FILES                                                            │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ 📄 Magnolia_PriorPolicy_2024.pdf        3.2 MB    ✅ READY        │  │
│  │ 📊 Client_EquipmentSchedule_v4.xlsx     1.8 MB    ✅ READY        │  │
│  │ 📄 WC_SupplementalApp_2024.pdf          2.1 MB    ✅ READY        │  │
│  │ 📄 LossRuns_2020_2024.pdf               4.6 MB    ✅ READY        │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  4 files  •  11.7 MB total  •  All ready                                │
├─────────────────────────────────────────────────────────────────────────┤
│                              [← Back]  [Start AI Extraction →]          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 2.4 — AI Extraction Results (Step 3)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS │  AI Extraction — Magnolia Construction           [← Back]  │
├─────────────────────────────────────────────────────────────────────────┤
│  ●━━━━━━━●━━━━━━━●━━━━━━━●━━━━━━━○━━━━━━━○                              │
│  1.Client  2.Docs  3.Extract  4.Route  5.Quote  6.Bind                  │
├─────────────────────────────────────────────────────────────────────────┤
│  ✅  AI Extraction Complete  │  12 fields extracted  │  Avg: 96.9% conf  │
├──────────────────────────────────────┬──────────────────────────────────┤
│  EXTRACTED FIELDS                    │  LOSS RUN SUMMARY                │
│                                      │                                  │
│  Business Name                       │  Year │ Carrier     │ Ratio      │
│  Magnolia Construction LLC  🟢 99%   │  2020 │ Berkshire   │ 42%  🟢    │
│                                      │  2021 │ Berkshire   │ 38%  🟢    │
│  NAICS Code                          │  2022 │ Berkshire   │ 500% 🔴    │
│  238990 — Specialty Trade   🟢 97%   │  2023 │ Chubb       │ 15%  🟢    │
│                                      │  2024 │ Chubb       │ 10%  🟢    │
│  GL Limits                           │                                  │
│  $1M / $2M                  🟢 95%   │  ⚠️  2022 was an aberration.      │
│                                      │  Trend: Strong downward          │
│  WC Payroll — California             │                                  │
│  $2,340,000                 🟢 96%   ├──────────────────────────────────┤
│                                      │  EQUIPMENT SCHEDULE              │
│  WC Payroll — Texas                  │                                  │
│  $870,000                   🟢 94%   │  Items extracted: 847            │
│                                      │  Total value: $4.2M              │
│  Prior Carrier                       │  [View Full Schedule]            │
│  Berkshire / Chubb          🟢 98%   │                                  │
│                                      │                                  │
│  Expiring Premium                    │                                  │
│  WC: $147,000  GL: $38,000  🟡 91%   │                                  │
│                                      │                                  │
│  Umbrella Limit                      │                                  │
│  $5,000,000                 🟢 99%   │                                  │
│                                      │                                  │
│  🟢 Green ≥95%  🟡 Amber 88-94%      │                                  │
│  🔴 Red <88% — mandatory review      │                                  │
├──────────────────────────────────────┴──────────────────────────────────┤
│  0 fields require mandatory review             [← Back]  [Route to Market →] │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 2.5 — Market Routing (Step 4)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS │  Market Routing — Magnolia Construction          [← Back]  │
├─────────────────────────────────────────────────────────────────────────┤
│  ●━━━━━━━●━━━━━━━●━━━━━━━●━━━━━━━●━━━━━━━○                              │
│  1.Client  2.Docs  3.Extract  4.Route  5.Quote  6.Bind                  │
├─────────────────────────────────────────────────────────────────────────┤
│  NAICS: 238990  │  Lines: WC + GL + Umbrella  │  States: CA, TX, NC     │
│  🛡️  50-State Compliant via Singlepoint Licensing                        │
├─────────────────────────────────────────────────────────────────────────┤
│  RECOMMENDED CARRIERS (via SEMC)                                         │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Carrier          │ Line        │ Method  │ Select                 │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ SEMC             │ WC + GL     │ API     │ [✅ Selected]          │  │
│  │ CNA              │ GL + Umbrla │ API     │ [✅ Selected]          │  │
│  │ Liberty Mutual   │ WC + GL     │ SEMC    │ [✅ Selected]          │  │
│  │ The Hartford     │ WC + GL     │ SEMC    │ [✅ Selected]          │  │
│  │ Guard/Berkshire  │ WC          │ SEMC    │ [✅ Selected]          │  │
│  │ Chubb            │ Umbrella    │ SEMC    │ [☐ Add]               │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  5 carriers selected  │  Simultaneous submission via SEMC API            │
│                                                                          │
│  STATUS (after send)                                                     │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ SEMC            ✅ Sent  •  Quote received (38 min)               │  │
│  │ CNA             ✅ Sent  •  Partial quote (GL + Umbrella only)    │  │
│  │ Liberty Mutual  ✅ Sent  •  Quote received (52 min)               │  │
│  │ The Hartford    ✅ Sent  •  Quote received (61 min)               │  │
│  │ Guard           ✅ Sent  •  Partial (WC only)                     │  │
│  └───────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│              [← Back]           [Send to Market — 5 Carriers →]         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 2.6 — Quote Comparison Matrix (Step 5)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS │  Quote Comparison — Magnolia Construction        [← Back]  │
├─────────────────────────────────────────────────────────────────────────┤
│  Expiring Premium: $185,000  │  62 mins since submission                │
├────────────────────┬──────────┬──────────┬──────────┬───────────────────┤
│ Carrier            │ WC       │ GL       │ Umbrella │ Total   │ Action  │
├────────────────────┼──────────┼──────────┼──────────┼─────────┼─────────┤
│ ⭐ SEMC             │ $147,200 │ $31,500  │ $6,000   │$184,700 │ [Bind]  │
│   AM Best: A+      │          │          │          │ 🟢 BEST  │ [Prop]  │
│   38 min           │          │          │          │ -$300   │         │
├────────────────────┼──────────┼──────────┼──────────┼─────────┼─────────┤
│ The Hartford       │ $152,000 │ $33,100  │ $8,000   │$193,100 │ [Bind]  │
│   AM Best: A+      │          │          │          │         │ [Prop]  │
│   61 min           │          │          │          │         │         │
├────────────────────┼──────────┼──────────┼──────────┼─────────┼─────────┤
│ Liberty Mutual     │ $153,200 │ $32,700  │ $8,000   │$193,900 │ [Bind]  │
│   AM Best: A       │          │          │          │         │ [Prop]  │
│   52 min           │          │          │          │         │         │
├────────────────────┼──────────┼──────────┼──────────┼─────────┼─────────┤
│ CNA (partial)      │ —        │ $34,000  │ $18,000  │ $52,000 │ [Bind]  │
│   AM Best: A       │          │ GL+Umbrl │          │ partial │ [Prop]  │
├────────────────────┼──────────┼──────────┼──────────┼─────────┼─────────┤
│ Guard (partial)    │ $152,300 │ —        │ —        │$152,300 │ [Bind]  │
│   AM Best: A-      │ WC only  │          │          │ partial │ [Prop]  │
└────────────────────┴──────────┴──────────┴──────────┴─────────┴─────────┘
│  Client savings vs expiring: $300   [Generate Client Proposal PDF]       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 2.7 — Binding Screen (Step 6)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS │  Bind Coverage — SEMC  │  Magnolia Construction   [← Back] │
├─────────────────────────────────────────────────────────────────────────┤
│  ●━━━━━━━●━━━━━━━●━━━━━━━●━━━━━━━●━━━━━━━●                              │
│  1.Client  2.Docs  3.Extract  4.Route  5.Quote  6.Bind ← YOU ARE HERE   │
├───────────────────────────┬─────────────────────────────────────────────┤
│  PRE-FILLED (from AI)     │  NEEDS INPUT                                │
│                           │                                              │
│  Named Insured            │  Primary Contact Phone                       │
│  Magnolia Constr LLC  ✅  │  [___________________________] ← Required    │
│                           │                                              │
│  Effective Date           │  Payment Plan                                │
│  June 1, 2026         ✅  │  ◉ Monthly   ○ Quarterly   ○ Annual          │
│                           │                                              │
│  WC Premium               │                                              │
│  $147,200             ✅  │  ✅ All other fields complete                 │
│                           │                                              │
│  GL Premium               │                                              │
│  $31,500              ✅  │                                              │
│                           │                                              │
│  Total Premium            │                                              │
│  $184,700             ✅  │                                              │
│                           │                                              │
│  States Covered           │                                              │
│  CA, TX, NC           ✅  │                                              │
│                           │                                              │
│  50-State Compliant   ✅  │                                              │
├───────────────────────────┴─────────────────────────────────────────────┤
│                         [← Back]     [🔒 Bind Coverage Now]              │
│                                                                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━ BINDING CONFIRMATION ━━━━━━━━━━━━━━━━━━━━━━━━ │
│  ✅ Policy #: SEMC-WC-2025-48821   Effective: Jun 1 2026                 │
│  Total: $184,700   States: CA, TX, NC   50-State: ✅                    │
│  [Download Binder PDF]   [Request Commission →]                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 2.8 — Commission Tracker
```
┌─────────────────────────────────────────────────────────────────────────┐
│  🔷 NEXUS │  Commission Tracker                                          │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │ TOTAL EARNED │  │ PENDING      │  │ APPROVED     │  │ PAID       │  │
│  │ THIS MONTH   │  │ APPROVAL     │  │ (Processing) │  │            │  │
│  │ $38,400      │  │ $24,800      │  │ $8,200       │  │ $5,400     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│  COMMISSION LEDGER                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Policy #      │ Client      │ Premium  │ Comm%  │ Amount│ Status  │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ SEMC-48821    │ Magnolia    │$184,700  │ 12%    │$22,164│🟡 Pend  │  │
│  │ CNA-33102     │ Apex Indus  │ $52,000  │ 10%    │ $5,200│✅ Apprvd│  │
│  │ HART-11044    │ Valley Log  │ $38,200  │ 11%    │ $4,202│💰 Paid  │  │
│  │ LIB-20291     │ Ridge Build │ $93,100  │ 12%    │$11,172│🟡 Pend  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                      [Request Commission] [Export CSV]   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## PORTAL 3 — MGA AGENCY MANAGEMENT PORTAL (Applied Epic Style)

### Screen 3.1 — MGA Dashboard
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚡ SINGLEPOINT MGA PORTAL  │  Admin: Marc D.          [Settings] [⎋]   │
├──────────────┬──────────────────────────────────────────────────────────┤
│ NAVIGATION   │  COMMAND CENTER                            Apr 17, 2026  │
│              │                                                           │
│ 📊 Dashboard │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│ 🏢 Carriers  │  │BROKERS │ │POLICIES│ │QUOTES  │ │BINDINGS│ │TOTAL   │ │
│ 👥 Brokers   │  │ACTIVE  │ │ACTIVE  │ │THIS MO │ │THIS MO │ │PREMIUM │ │
│ 📋 Policies  │  │  34    │ │  847   │ │  312   │ │  89    │ │$14.2M  │ │
│ 📄 Documents │  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ │
│ 💰 Commssns  │                                                           │
│ ⚖️ Compliance │  ⚠️  URGENT ALERTS                                        │
│ 📊 Reports   │  ┌───────────────────────────────────────────────────────┤ │
│ 🔧 Settings  │  │ 🔴 3 policies expire within 7 days — action required  │ │
│              │  │ 🟡 12 commission requests awaiting approval            │ │
│              │  │ 🟡 5 endorsements pending review                       │ │
│ [+ New       │  │ 🔵 2 new broker onboarding requests                   │ │
│  Submission] │  └───────────────────────────────────────────────────────┘ │
│              │                                                           │
│              │  RENEWAL PIPELINE (Next 90 Days)                         │
│              │  ┌─────────────────────────────────────────────────────┐ │
│              │  │ 0-30 days: ████████████████ 23 policies             │ │
│              │  │ 31-60 days: ████████████████████████ 41 policies    │ │
│              │  │ 61-90 days: ██████████████████████████████ 58 polcy │ │
│              │  └─────────────────────────────────────────────────────┘ │
└──────────────┴──────────────────────────────────────────────────────────┘
```

### Screen 3.2 — Carrier Management
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚡ MGA PORTAL │  Carrier Management                     [+ Add Carrier]│
├─────────────────────────────────────────────────────────────────────────┤
│  Search: [__________________]  Filter: [All Lines ▼]  [All Methods ▼]   │
├───────────────────────────────────────────────────────────────────────┐ │
│ Carrier          │ AM Best │ Lines              │ Method    │ Status  │ │
├───────────────────────────────────────────────────────────────────────┤ │
│ SEMC             │ A+      │ WC, GL, BOP, Cyber │ 🔵 SEMC   │ ✅ Live │ │
│ CNA              │ A       │ GL, Umbrella, Mgmt │ 🔵 SEMC   │ ✅ Live │ │
│ Liberty Mutual   │ A       │ WC, GL, BOP        │ 🔵 SEMC   │ ✅ Live │ │
│ Hartford         │ A+      │ WC, GL, Cyber      │ 🔵 SEMC   │ ✅ Live │ │
│ Berkeley Net     │ A-      │ WC                 │ 🟢 Direct │ ✅ Live │ │
│ Chubb            │ A++     │ Umbrella, Mgmt     │ 🟡 File   │ 🔧 Setup│ │
│ Zurich           │ A+      │ GL, Property       │ 🟡 File   │ 🔧 Setup│ │
└───────────────────────────────────────────────────────────────────────┘ │
│  🔵 SEMC Aggregator   🟢 Direct API   🟡 File-Based (Nexus digitized)    │
├─────────────────────────────────────────────────────────────────────────┤
│  CARRIER DETAIL — Chubb (Expanded)                                      │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Connection Type: 🟡 File-Based                                    │  │
│  │ Upload Rating Rules: [Browse PDF/Excel]   Last updated: Mar 2026  │  │
│  │ Lines: Umbrella | Management Lines                                │  │
│  │ Commission %: Umbrella 8% | Mgmt Lines 11%                       │  │
│  │ States Licensed: All 50                                           │  │
│  │ Status: 🔧 In Setup   [Activate Carrier]  [Edit]  [Deactivate]   │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 3.3 — Broker Management
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚡ MGA PORTAL │  Broker Management                      [+ Add Broker] │
├─────────────────────────────────────────────────────────────────────────┤
│  Search: [__________________]  Filter: [All States ▼] [All Status ▼]    │
├───────────────────────────────────────────────────────────────────────┐ │
│ Broker        │ States │ Active │ Bindings │ Comm Rate │ Status      │ │
│               │ Licnsd │ Clients│ This Mo  │           │             │ │
├───────────────────────────────────────────────────────────────────────┤ │
│ Lockton       │ 50     │  127   │    12    │ 12%       │ ✅ Active   │ │
│ Marsh         │ 50     │   84   │     8    │ 11%       │ ✅ Active   │ │
│ Aon           │ 50     │   61   │     5    │ 11%       │ ✅ Active   │ │
│ Regional Brkr │ CA, TX │   23   │     3    │ 10%       │ ✅ Active   │ │
│ New Broker Co │ —      │    0   │     0    │ —         │ 🟡 Onboard │ │
└───────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  BROKER DETAIL — Lockton (Expanded)                                     │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ ONBOARDING CHECKLIST                                              │  │
│  │ [✅] License verified (all 50 states)                             │  │
│  │ [✅] E&O documentation on file                                    │  │
│  │ [✅] Commission agreement signed (12%)                            │  │
│  │ [✅] Portal access granted                                        │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ PENDING COMMISSION REQUESTS                                       │  │
│  │ SEMC-48821 │ Magnolia Constr │ $22,164 │ Apr 17  │ [Approve] [❌] │  │
│  │ LIB-20291  │ Ridge Builders  │ $11,172 │ Apr 15  │ [Approve] [❌] │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 3.4 — Policy Repository
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚡ MGA PORTAL │  Policy Repository                                      │
├─────────────────────────────────────────────────────────────────────────┤
│  Search: [Magnolia____________]  [Broker ▼] [Carrier ▼] [Line ▼]         │
│  [All Statuses ▼]  [Expiry: Next 30 days ▼]             [Export CSV]     │
├───────────────────────────────────────────────────────────────────────┐ │
│ Policy #      │ Client       │ Carrier │ Line │ Premium │ Expiry │ St │ │
├───────────────────────────────────────────────────────────────────────┤ │
│ SEMC-48821    │ Magnolia     │ SEMC    │ WC   │$184,700 │Jun 26  │ ✅ │ │
│ CNA-33102     │ Apex Indus   │ CNA     │ GL   │ $52,000 │Apr 26  │ ⚠️ │ │
│ HART-11044    │ Valley Log   │ Hartford│ Cybr │ $38,200 │Dec 26  │ ✅ │ │
│ LIB-20291     │ Ridge Build  │ Liberty │ BOP  │ $93,100 │May 26  │ ⚠️ │ │
└───────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  POLICY DETAIL — SEMC-WC-2025-48821 (Expanded)                          │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Named Insured: Magnolia Construction LLC                          │  │
│  │ Carrier: SEMC │ Line: Workers Comp │ Premium: $184,700            │  │
│  │ Effective: Jun 1 2025 │ Expiry: Jun 1 2026 │ Days Left: 44 ⚠️    │  │
│  │ States: CA ($147,200) │ TX ($31,500) │ NC (included)              │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ DOCUMENTS        ENDORSEMENTS      CLAIMS      LOSS RUN           │  │
│  │ [Tab]            [Tab]             [Tab]       [Tab]              │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ [📄 Dec Page] [📋 Full Policy] [🔄 Start Renewal] [📧 Email]       │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 3.5 — Commission Management (MGA Side)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚡ MGA PORTAL │  Commission Management                                  │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │ TOTAL        │  │ PENDING      │  │ PAID TO      │  │ MGA EARNED │  │
│  │ EARNED       │  │ APPROVAL     │  │ BROKERS      │  │ FROM CARRS │  │
│  │ $284,000     │  │ 12 requests  │  │ $142,000     │  │ $142,000   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│  PENDING BROKER COMMISSION REQUESTS                                      │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Broker   │ Policy #    │ Client      │ Comm %│ Amount  │ Action   │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ Lockton  │ SEMC-48821  │ Magnolia    │  12%  │ $22,164 │[✅][❌]  │  │
│  │ Lockton  │ LIB-20291   │ Ridge Build │  12%  │ $11,172 │[✅][❌]  │  │
│  │ Marsh    │ CNA-33102   │ Apex Indus  │  11%  │  $5,720 │[✅][❌]  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────┤
│  COMMISSION CONFIG (by Carrier / Product)                                │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Carrier      │ Product         │ Broker Comm %  │ MGA Comm %     │  │
│  │ SEMC         │ Workers Comp    │ 12%            │ 8%             │  │
│  │ CNA          │ GL              │ 11%            │ 7%             │  │
│  │ Hartford     │ Cyber           │ 10%            │ 6%             │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Screen 3.6 — Compliance & Filings Tracker
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚡ MGA PORTAL │  Compliance & Filings                                   │
├─────────────────────────────────────────────────────────────────────────┤
│  Filter: [State ▼] [Product Line ▼] [Status ▼]     [Export Report]      │
├─────────────────────────────────────────────────────────────────────────┤
│  FILING STATUS OVERVIEW                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │ FILED    │  │ PENDING  │  │ DUE SOON │  │ OVERDUE  │                 │
│  │   312    │  │   18     │  │    7     │  │    2 🔴  │                 │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘                 │
│                                                                          │
│  OVERDUE — IMMEDIATE ACTION REQUIRED                                     │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ State │ Product     │ Type               │ Due Date │ Action      │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ TX    │ Surplus WC  │ Surplus Lines Fili │ Apr 10   │ [File Now]  │  │
│  │ NC    │ GL          │ Rate Filing        │ Apr 14   │ [File Now]  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ALL FILINGS                                                             │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ State │ Product     │ Type         │ Due     │ Filed   │ Status   │  │
│  ├───────────────────────────────────────────────────────────────────┤  │
│  │ CA    │ Workers Comp│ Annual Audit │ Jun 30  │ —       │ 🟡 Pend  │  │
│  │ TX    │ Surplus WC  │ Surplus Line │ Apr 10  │ —       │ 🔴 OVERd │  │
│  │ FL    │ GL          │ Rate Filing  │ May 15  │ —       │ 🟡 Due   │  │
│  │ NY    │ WC          │ Annual Audit │ Jul 01  │ —       │ 🔵 Future│  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## SYSTEM FLOW DIAGRAM (ASCII)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                    MGA PLATFORM — FULL SYSTEM FLOW                       │
└──────────────────────────────────────────────────────────────────────────┘

 CUSTOMER PORTAL          BROKER PORTAL              MGA PORTAL
 ┌─────────────┐          ┌──────────────┐           ┌──────────────────┐
 │             │          │              │           │                  │
 │  Customer   │─────────▶│   Broker     │──────────▶│  Singlepoint MGA │
 │  submits    │ Accord + │  uploads     │ Extracts  │  Reviews, routes │
 │  request /  │ Loss Runs│  docs, AI    │ & routes  │  approves        │
 │  endorsemnt │          │  extraction  │           │                  │
 └─────────────┘          └──────┬───────┘           └────────┬─────────┘
                                 │                            │
                    ┌────────────▼─────────────┐             │
                    │     SEMC AGGREGATOR       │             │
                    │   (40+ Carrier APIs)      │             │
                    └────────────┬──────────────┘             │
                                 │                            │
              ┌──────────────────▼──────────────────┐        │
              │            CARRIERS                  │        │
              │  SEMC │ CNA │ Liberty │ Hartford │   │        │
              │  Berkeley Net │ Chubb │ Zurich   │   │        │
              └──────────────────┬──────────────────┘        │
                                 │                            │
                    ┌────────────▼─────────────┐             │
                    │   QUOTES RETURNED         │◀────────────┘
                    │   Rate → Code → Bind      │  MGA approves bind
                    └────────────┬──────────────┘
                                 │
              ┌──────────────────▼──────────────────┐
              │     BINDING CONFIRMED                │
              │   Policy # │ COI (by carrier)        │
              │   Commission triggered               │
              └──────────────────────────────────────┘
```
