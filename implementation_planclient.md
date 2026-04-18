# Client Details Tabs Implementation Plan

This plan details the technical execution to build the fully functional Client Account sub-navigation screens based on the previously approved data models and wireframes.

## Goal

Upgrade the `renderBrokerClientDetails()` screen to dynamically switch and render the 6 individual tabs (Policies, Submissions, Certificates, Loss Runs, Documents, and Activity) instead of just displaying the static Overview structure.

## Proposed Changes

### [main.js]
1. **State Management Upgrade**:
   - Introduce `clientTab` to the global `state` object (defaulting to `'overview'`).
2. **Tab Header Integration**:
   - Refactor the hardcoded `<!-- TABS -->` block inside `renderBrokerClientDetails()`.
   - Map the tabs dynamically to toggle `setState({ clientTab: 'xyz' })` with active/inactive CSS stylings.
3. **Dynamic View Rendering**:
   - Extract the entire existing `<div class="display:grid...` representing the Overview into a helper function or an `if (state.clientTab === 'overview')` branch.
   - For all other tabs, return their respective high-fidelity table structures based on the `client_account_analysis.md` wireframes:
     - **Policies**: Table featuring LOBs, Policy numbers, Term dates, Premiums, and action items.
     - **Submissions**: Table showing Quotes in progress, Carrier listings, and indications.
     - **Certificates**: Table for COI management tracking holder entities and attached policies.
     - **Loss Runs**: Table detailing claim numbers, dates, paid losses, and reserves.
     - **Documents**: Vault structure tracking file names, tags, sizes, and upload dates.
     - **Activity**: Linear audit log of user/system actions.

## User Review Required

> [!IMPORTANT]
> Because these are currently front-end mockscreens meant to demonstrate capability, the action links inside the tables (e.g., clicking to view a specific policy or download a document) will be bound to our newly constructed Global Modal system `window.showAlert()` unless you specify otherwise.

## Verification Plan

### Manual Verification
1. I will boot the site map on your screen.
2. I will navigate to `Clients > View (Magnolia Construction)`.
3. I will click through every single tab (Policies, Submissions, Certificates, Loss Runs, Documents, Activity) verifying that the state toggles properly without losing the core header.
4. I will verify that the data correctly maps to the US Commercial constraints.
