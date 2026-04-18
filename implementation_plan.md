# MGA Insurance Platform — Build Plan

## Architecture Decision
- **Frontend-only SPA** using Vite + vanilla HTML/CSS/JS (no React/framework overhead)
- **Mock data layer** — all data is hardcoded JSON matching the wireframe values
- **3 Portals** accessible via a portal switcher on the login screen
- **Single codebase** with route-based portal switching

## Portal Structure
| Portal | Brand | User | Color Theme |
|--------|-------|------|-------------|
| Customer Portal | Singlepoint Insurance | John Smith | Deep Blue (#1a237e) |
| Broker Portal | Nexus | Sarah Mitchell (Lockton) | Indigo (#283593) |
| MGA Portal | Singlepoint MGA | Admin: Marc D. | Dark Charcoal (#1b1b2f) with Electric accents |

## Screens to Build (from wireframes)
### Portal 1 — Customer
1. **Dashboard** — KPI cards + policy table + quick actions
2. **Submit Endorsement** — Form with radio type selection, description, status tracker

### Portal 2 — Broker (Nexus)
1. **Dashboard** — Side nav + KPIs + renewals table + recent submissions
2. **New Submission Wizard** (6 steps):
   - Step 1: Client Info
   - Step 2: Document Upload
   - Step 3: AI Extraction Results
   - Step 4: Market Routing
   - Step 5: Quote Comparison Matrix
   - Step 6: Binding
3. **Commission Tracker** — KPI cards + ledger table

### Portal 3 — MGA Portal (Applied Epic)
1. **Dashboard (Command Center)** — 5 KPI cards + alerts + renewal pipeline bar chart
2. **Carrier Management** — Searchable table + carrier detail expansion
3. **Broker Management** — Table + onboarding checklist + commission queue
4. **Policy Repository** — Filterable policy table + policy detail expansion
5. **Commission Management** — KPI cards + pending approvals + config table
6. **Compliance & Filings** — Status overview + overdue alerts + filings table

## Build Order
1. Design system (CSS variables, typography, card/table components)
2. App shell with portal router + login screen
3. Customer Portal (2 screens)
4. Broker Portal (dashboard + wizard + commission)
5. MGA Portal (6 screens)
6. Polish and animations

## Design System
- **Font**: Inter (Google Fonts)
- **Dark mode by default** with glassmorphism cards
- **Color-coded statuses**: 🟢 Green (#4caf50), 🟡 Amber (#ff9800), 🔴 Red (#f44336), 🔵 Blue (#2196f3)
- **Smooth transitions** on all interactive elements
- **Gradient headers** per portal theme
