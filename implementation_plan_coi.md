# COI Workbench Industry Standard Upgrade

This plan outlines the technical and design overhaul of the Certificate of Insurance (COI) Workbench to meet US Commercial Insurance standards.

## Goal
Transform the current placeholder COI screen into a professional, operational "Workbench" that simulates the issuance of an ACORD-25 form with real-world validation logic and interactive controls.

## User Review Required

> [!IMPORTANT]
> The workbench will now explicitly track "Validation State". Issuance will be visually gated until the "Validate Coverages" check is performed. I will simulate the ACORD-25 form layout (Producer, Insured, Insurers, Coverages Matrix).

## Proposed Changes

### [Component Name] Broker Core - COI Workbench

#### [MODIFY] [main.js](file:///c:/Users/91784/Desktop/ANtigravity/Broker/src/main.js)
- Update `state` to track `coiValidated` and `coiProcessingStatus`.
- Overhaul `renderBrokerCOIWorkbench()` to use a dense, form-centric layout.
- Implement the following interactive flows:
    - **Validate Coverages**: Runs a simulation checking linked GL, WC, and Auto policies against the Holder's requirements (e.g., AI/WOS).
    - **Stamp & Issue**: Finalizes the document with a digital signature stamp and transitions to a success state.
    - **Email/Preview**: Bridges to the existing PDF viewer and mock email dialogs.

## 3. UI Design Specifications
*   **Structure**: 2x2 Header (Producer/Insured), 1x1 Coverage Matrix (The "Heart" of the ACORD form), 1x1 Holder/Operations.
*   **Visual Style**: Dark mode enterprise style with higher contrast for form labels.
*   **Feedback**: Use "Live Validation" badges (e.g., "Policy Match ✅", "Deductible Verified ✅").

## 4. Verification Plan

### Manual Verification
1. Navigate to Magnolia Construction > Certificates > View C-102.
2. Click **Validate Coverages** - verify the loading state and success badges appear.
3. Click **Preview PDF** - verify navigation to the document viewer.
4. Click **Stamp & Issue COI** - verify the "Success" screen and return path to the certificates list.
