# Certificate of Insurance (COI) Issuance Audit & Architecture

Before building the frontend flow, I have audited your prompt requirements for the **COI Screen Flow**. This module is designed to feel highly operational for a CSR or Account Manager, emphasizing ACORD-style data tracking and strict validation against underlying policy coverage.

## 1. Information Architecture & Layout Strategy

Unlike standard dashboards, the COI workflow requires reviewing dense blocks of form data next to a broader list of issued certificates. 

**Proposed Layout (Master-Detail Dual Pane):**
1. **Main Pane (Master List):** A searchable, robust data table listing all generated requests (Draft, Issued, Voided).
2. **Detail Drawer/Modal (The "Workspace"):** An expansive slide-out or deep-link view acting as the workbench. This is where the ACORD-25 simulation happens, grouped logically into:
   * Holder Information
   * Coverage / Policies Validated (GL, WC, Auto)
   * Endorsements (AI, WOS, Primary/Non-Contributory)
   * The Action/Audit bar

## User Review Required

> [!IMPORTANT]
> The prompt calls for a "Detail drawer" as well as standard tables. Do you approve using the existing global Modal/Drawer system we established for the Quote details, or should this COI workbook take over the entire screen as a full-page wizard when editing/issuing? (The ASCII wireframe below assumes a full-screen split).

## 2. ASCII Wireframes (Desktop)

```text
+-------------------------------------------------------------------------------------------------------------------+
| COI MANAGEMENT CENTER (Magnolia Construction)                    [🔍 Search Holders...]  [+ Issue New Master COI] |
+-------------------------------------------------------------------------------------------------------------------+
| ALL ISSUED CERTIFICATES                                                                                           |
| REQ ID | HOLDER / PROJECT        | LOBs COVERED      | ISSUE DATE | EXPIRES   | SPCL REQ  | STATUS   | ACTIONS    |
| C-102  | City of Sacramento      | GL, WC, UMB       | 04/12/26   | 06/01/26  | AI, WOS   | [Issued] | [View] [⋮] |
| C-101  | Irvine Property Mgmt    | GL                | 03/05/26   | 11/15/26  | AI        | [Voided] | [View] [⋮] |
| C-100  | Default Client Master   | GL, Auto, WC      | 01/10/26   | 01/01/27  | --        | [Issued] | [View] [⋮] |
+-------------------------------------------------------------------------------------------------------------------+

+===================================================================================================================+
| [← Back]  COI WORKBENCH: City of Sacramento (REQ: C-102)                                             [Status: 🟡] |
+===================================================================================================================+
| [1] CERTIFICATE HOLDER INFO                         | [2] INSURED DETAILS & POLICY LINKING                        |
| Name: City of Sacramento (Permit Dept)              | Insured: Magnolia Construction LLC                          |
| Address: 1001 I Street, Sacramento, CA 95814        | Producer: AlphaBrokers LLC                                  |
| Contact: Sarah Jenkins (permit@sactown.gov)         | Carrier Mapping: SEMC (NAIC: 12345)                         |
|-----------------------------------------------------|-------------------------------------------------------------|
| [3] COVERAGE VALIDATION (GL)                        | [4] SPECIAL REQUIREMENTS / ENDORSEMENTS                     |
| Policy: GL-99324 (06/01/26 - 06/01/27)              | [x] Additional Insured (AI)   [x] Waiver of Subro (WOS)     |
| Limits: $1M Per Occ / $2M Agg                       | [ ] Primary & Non-Contributory                              |
| WARNING: Expiration Date (06/01) is < 60 days out!  | Describe Operations: "Trenching at K Street Project Site"   |
|-------------------------------------------------------------------------------------------------------------------|
|                                                   [ Validate Coverages ] [ Preview PDF ] [ 📧 Email ] [ Issue COI ]|
+===================================================================================================================+
```

## 3. Strict Field List (ACORD 25 Driven)
* **Entities**: Producer Name, Insured Name/Address, Certificate Holder Name/Address, Carrier NAIC codes.
* **Coverages**: Policy Number, Effective/Expiration Dates, Limits (Occ, Agg, Med Exp, Personal/Adv Injury), Deductibles.
* **Toggles**: Additional Insured (Y/N), Subrogation Waived (Y/N).
* **Metadata**: Requestor ID, Issue Date, Issued By, Delivery Method (PDF, Email, Portal).

## 4. Error & Validation States (Critical Rules)
* **`[ERROR]` Endorsement Mismatch**: If the user checks "AI" or "WOS" but the linked policy (e.g. GL-99324) does not have blanket endorsements attached in its core record, block issuance until a manual override is flagged.
* **`[WARNING]` Expiration Conflict**: Trigger yellow alerts if the COI requires terms ending in Dec 2026, but the underlying policy expires in June 2026.
* **`[ERROR]` Missing Required Field**: Block generation if "Description of Operations" is empty when Project specific conditions apply.

## 5. Suggested Workflow Steps
1. **Initialize**: CSR clicks `+ Issue New Master COI` or `+ Issue Project COI`.
2. **Setup**: Select the Certificate Holder from a directory (or create a new requirement block).
3. **Validation**: The system automatically pulls the active GL, WC, and Auto policies and scans for Endorsement mismatches against the holder's requirements.
4. **Approval**: If red flags exist, the COI is saved as `Draft` and forces an Underwriting / Account Executive approval via the Activity Feed.
5. **Execution**: If clean, the system stamps the Issue Date, generates the PDF, and triggers email delivery directly from the portal.

## 6. Empty State Logic
If navigating to a client without any COIs:
```text
📭 No Certificates Issued
This client does not have any active Certificates of Insurance on file. 
Ensure you have bound, active policy records before generating a Master COI.

[ + Issue First Certificate ] [ Link Existing Policy ]
```

## Review & Approval
Please review this functional breakdown. Once approved, I will build out the ACORD-style workbench and table views into the application!
