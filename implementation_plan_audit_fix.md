# Broker Portal Audit & Restoration Plan

This plan outlines a systematic "High-Fidelity" upgrade to the Broker Portal, fixing all broken navigation links and building out missing functional screens to match the quality of the COI Management module.

## Goal
Transform the Broker Portal from a collection of shells into a fully interactive, production-grade experience with consistent navigation and rich document-driven workflows.

## User Review Required

> [!IMPORTANT]
> **Navigation Change**: I will be moving away from ID-based event listeners in `bindBroker()` for simple screen transitions, favoring explicit `onclick` handlers in the templates. This ensures that dynamic state changes (like search or tab switching) don't break the listeners.

## Proposed Changes

### [Phase 1] Navigation & Link Repair
- **Audit Tables**: Update `renderBrokerQuotes`, `renderBrokerBindings`, `renderBrokerPolicies`, and `renderBrokerClients` tables.
    - Point all "View" buttons to their respective detail screens using `onclick="window.setState({screen: '...', ...})"`.
- **Audit Back Buttons**: Standardize all "← Back" buttons across 12+ screens to use `onclick` handlers.

### [Phase 2] High-Fidelity Screen Implementation

#### [NEW] [Proposal Generator](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/main.js)
- A new document-centric screen for Quotes.
- Features a "Proposal Preview" (similar to the COI PDF) where brokers can choose premium options before sending to a client.

#### [NEW] [Client Details Multi-Tab Expansion](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/main.js)
- Build functional shells for:
    - **Documents Tab**: Searchable list with "Upload" capability.
    - **Activity Tab**: A chronological log of policy events, claims, and certifications.
    - **Loss Runs**: Integrated history view with claim-level drill-down.

#### [NEW] [Global Communication Modal](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/main.js)
- Implement a shared `window.showClientEmailModal(context)` function.
- Hook up "Email Quote", "Email Policy", and "Email Client" buttons to this professional modal.

### [Phase 3] Data & Logic Polish
- Update `bindBroker()` to handle any complex multi-step interactions (e.g., file uploads, form submissions).
- Ensure `state.clientTab` is respected across all client-related navigations.

## Verification Plan

### Manual Verification
1. **Navigation Loop**: Dashboard → Clients → View Magnolia → Certificates → Issue COI → Back to Clients. Verify no "dead" buttons.
2. **Document Flow**: Quote Details → Generate Proposal. Verify high-fidelity document preview appears.
3. **Email Flow**: Click "Email to Client" in Quote Details. Verify the professional modal opens with correct context.
4. **Tab Switch**: In Client Details, switch between Policies, Documents, and Activity. Verify content updates dynamically.
