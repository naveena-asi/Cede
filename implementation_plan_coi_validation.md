# Split-Screen Coverage Validation Workbench

This plan details the implementation of a dedicated "Validation Result" screen that provides a professional, split-pane comparison between Contract Requirements and Policy Coverage.

## Goal
To evolve the "Validate Coverages" action from a simple status badge into a deep-audit workspace that allows brokers to visually confirm compliance before stamping a COI.

## User Review Required

> [!IMPORTANT]
> I will implement a "Side-by-Side Comparison" view. This is the industry gold standard for COI validation. One side shows the Project Requirements (target), and the other shows the Client's Policy (source).

## Proposed Changes

### [Component Name] Broker Core - COI Validation

#### [MODIFY] [main.js](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/main.js)
- Update `state` with `coiValidationView` (boolean).
- Modify `handleCoiAction('validate')` to perform a timed simulation and then open the **Split-Screen View**.
- Implement `renderCoiValidationSplit()`:
    - **Header**: Audit status summary (e.g., "3 Matches Found, 1 Warning").
    - **Left Pane (Requirements)**: Lists the Project's insurance mandates (e.g., "$1M Occurrence").
    - **Right Pane (Policy Data)**: Lists current policy details side-by-side.
    - **Mapping Logic**: Visual "connecting lines" or highlighted rows where fields pair up.
- Add an "Apply & Return" button to lock in the matches and return to the main Workbench.

## 3. UI/UX Design Specifications
*   **Layout**: `display: grid; grid-template-columns: 1fr 1fr;` with a shared vertical gutter.
*   **Color Logic**: 
    - **Success** (Green): Exact match in limits and endorsement language.
    - **Warning** (Yellow): Date mismatches or minor wordage variations.
    - **Error** (Red): Insufficient limits or missing coverage.
*   **Interactivity**: Hovering over a requirement highlights the corresponding policy section.

## 4. Verification Plan

### Manual Verification
1. Navigate to COI Workbench.
2. Click **Validate Coverages**.
3. Verify the layout shifts to a **Split-Pane Comparison**.
4. Review the "Match" highlighting between the Contract side and Policy side.
5. Click **Confirm Matches** to return to the Workbench with a "Verified" state.
