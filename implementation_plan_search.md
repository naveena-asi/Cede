# Global Search Implementation Plan

This plan outlines how to enable the currently static search bar in the Broker Dashboard to provide real-time results across clients, policies, and quotes.

## Goal
Enable brokers to quickly locate entities (Accounts, LOBs, Policy Numbers) directly from the dashboard header.

## User Review Required

> [!NOTE]
> The search will be "Global" but specifically prioritized for the Broker Portal's context. It will feature a floating results dropdown that appears instantly as the user types.

## Proposed Changes

### [Component Name] Broker Core - Search Engine

#### [MODIFY] [state initialization](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/main.js)
- Add `searchQuery: ''` and `searchResults: null` to the global state.

#### [MODIFY] [renderBrokerDashboard](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/main.js)
- Add `id="global-search-input"` to the search input.
- Link it to a handler: `oninput="window.handleGlobalSearch(this.value)"`.
- Inject a container for the search dropdown: `<div id="search-results-overlay"></div>`.

#### [NEW] [Global Search Logic]
- Implement `window.handleGlobalSearch(query)`:
    - Filters `brokerClients`, `brokerPoliciesList`, and `brokerQuotes` from `data.js`.
    - Updates `state.searchQuery` and triggers a re-render or updates a specific results container.
- Implement `renderSearchResults(query, results)`:
    - A styled floating dropdown with categories (e.g., "Active Accounts", "Policies").
    - Actionable links to navigate directly to `client-details` or `policy-details`.

### [Component Name] UI Styling

#### [MODIFY] [styles.css](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/styles.css)
- Add styles for the `.search-dropdown-overlay`:
    - Position: absolute; Top: 100%; Width: 100%;
    - Z-index: 1000; Glassmorphic background; Max-height: 400px with scroll.

## Verification Plan

### Manual Verification
1. Navigate to Dashboard.
2. Type "Magnolia" in search bar.
3. Verify that a dropdown appears showing the "Magnolia Construction" client and their policies.
4. Click a result and verify navigation to the correct detail screen.
5. Clear search and verify the dropdown disappears.
