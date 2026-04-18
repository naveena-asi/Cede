/* ============================================================
   MGA Insurance Platform — Mock Data Layer
   All data values match the ASCII wireframes exactly
   ============================================================ */

export const USERS = {
  customer: { name: 'John Smith', role: 'Customer', company: 'Magnolia Construction LLC', avatar: 'JS' },
  broker: { name: 'Sarah Mitchell', role: 'Broker', company: 'Lockton', avatar: 'SM' },
  mga: { name: 'Marc D.', role: 'Admin', company: 'Singlepoint MGA', avatar: 'MD' }
};

// ─── Customer Portal Data ───
export const customerPolicies = [
  { id: 'WC-2025-48821', type: 'Workers Comp', carrier: 'SEMC / Liberty Mutual', expiry: 'Jun 2026', expiring: false },
  { id: 'GL-2025-33102', type: 'General Liability', carrier: 'CNA', expiry: 'Apr 2026', expiring: true },
  { id: 'CY-2025-11044', type: 'Cyber Liability', carrier: 'Hartford', expiry: 'Dec 2026', expiring: false }
];

export const customerKPIs = [
  { label: 'Active Policies', value: '4' },
  { label: 'Expiring Soon', value: '1', warning: true },
  { label: 'Open Claims', value: '2' },
  { label: 'Pending Endorsements', value: '1' }
];

// ─── Broker Portal Data ───
export const brokerKPIs = [
  { label: 'Active Clients', value: '127' },
  { label: 'Quotes This Month', value: '43' },
  { label: 'Bindings This Month', value: '12' },
  { label: 'Commission Pending', value: '$24,800' }
];

export const brokerRenewals = [
  { client: 'Magnolia Constr', policy: 'WC + GL', expiry: 'May 15', action: 'Re-Submit' },
  { client: 'Apex Industries', policy: 'BOP', expiry: 'May 22', action: 'Re-Submit' },
  { client: 'Valley Logistics', policy: 'Cyber', expiry: 'Jun 01', action: 'Re-Submit' }
];

export const brokerSubmissions = [
  { client: 'Magnolia Constr', status: 'Quoted', statusColor: 'green', date: 'Apr 17' },
  { client: 'Apex Industries', status: 'In Market', statusColor: 'amber', date: 'Apr 16' },
  { client: 'Ridge Builders', status: 'Docs Needed', statusColor: 'red', date: 'Apr 14' }
];

export const commissionKPIs = [
  { label: 'Earned (MTD)', value: '$148,320' },
  { label: 'Earned (YTD)', value: '$1.42M' },
  { label: 'Receivable', value: '$64,200', warning: true },
  { label: 'Reconciled', value: '92%' },
  { label: 'Open Exceptions', value: '14', warning: true },
  { label: 'Producer Payout Due', value: '$48,600' }
];

export const commissionTypes = ['New Business', 'Renewal', 'Endorsement', 'Contingent', 'Override/Bonus', 'Trail Fee', 'Clawback'];
export const commissionStatuses = ['Expected', 'Pending', 'Matched', 'Exception', 'Approved', 'Processing', 'Paid', 'Disputed'];

export const commissionLedger = [
  { id: 'COMM-4821', carrier: 'Liberty Mutual / SEMC', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'SEMC-WC-2025-48821', client: 'Magnolia Construction LLC', lob: 'Workers Comp', txType: 'New Business', premium: 184700, rate: 12.0, earned: 22164, paid: 0, status: 'Pending', statusColor: 'amber', expected_pay: '2026-05-10', producer: 'Sarah Chen' },
  { id: 'COMM-4820', carrier: 'CNA', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'CNA-GL-2025-33102', client: 'Apex Industries', lob: 'General Liability', txType: 'Renewal', premium: 52000, rate: 10.0, earned: 5200, paid: 5200, status: 'Paid', statusColor: 'green', expected_pay: '2026-04-05', producer: 'Mike Torres', paid_date: '2026-04-05' },
  { id: 'COMM-4819', carrier: 'Hartford', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'HTF-BOP-2025-90112', client: 'Harbor Foods', lob: 'BOP', txType: 'Renewal', premium: 38200, rate: 11.0, earned: 4202, paid: 4202, status: 'Paid', statusColor: 'green', expected_pay: '2026-04-02', producer: 'Sarah Chen', paid_date: '2026-04-03' },
  { id: 'COMM-4818', carrier: 'AMTrust', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'AMT-WC-2025-44821', client: 'Ridge Builders', lob: 'Workers Comp', txType: 'New Business', premium: 93100, rate: 12.0, earned: 11172, paid: 0, status: 'Exception', statusColor: 'red', expected_pay: '2026-05-01', producer: 'Mike Torres', exception_reason: 'Carrier paid $10,200 vs expected $11,172' },
  { id: 'COMM-4817', carrier: 'Travelers', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'TRV-AUTO-2026-11223', client: 'Delta Logistics', lob: 'Commercial Auto', txType: 'New Business', premium: 142800, rate: 11.5, earned: 16422, paid: 16422, status: 'Paid', statusColor: 'green', expected_pay: '2026-04-10', producer: 'Sarah Chen', paid_date: '2026-04-09' },
  { id: 'COMM-4816', carrier: 'CNA', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'CNA-CYB-2026-88102', client: 'TechCorp Inc', lob: 'Cyber', txType: 'New Business', premium: 256100, rate: 15.0, earned: 38415, paid: 0, status: 'Matched', statusColor: 'blue', expected_pay: '2026-05-08', producer: 'Sarah Chen' },
  { id: 'COMM-4815', carrier: 'Liberty Mutual', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'LIB-PRO-2025-22841', client: 'Summit Medical', lob: 'Professional Liability', txType: 'Endorsement', premium: 8500, rate: 10.0, earned: 850, paid: 850, status: 'Paid', statusColor: 'green', expected_pay: '2026-04-12', producer: 'Sarah Chen', paid_date: '2026-04-12' },
  { id: 'COMM-4814', carrier: 'AMTrust', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'AMT-GL-2026-11092', client: 'Coastal Realty', lob: 'General Liability', txType: 'New Business', premium: 38900, rate: 12.0, earned: 4668, paid: 0, status: 'Exception', statusColor: 'red', expected_pay: '2026-05-02', producer: 'Mike Torres', exception_reason: 'Policy not found on carrier statement' },
  { id: 'COMM-4813', carrier: 'Liberty Mutual', statement: 'STMT-2026-Q1', period: 'Q1 2026', policy: 'MULTI — Contingent', client: 'All Liberty policies', lob: 'Contingent', txType: 'Contingent', premium: 2100000, rate: 3.5, earned: 73500, paid: 73500, status: 'Paid', statusColor: 'green', expected_pay: '2026-04-01', producer: 'Agency', paid_date: '2026-04-01' },
  { id: 'COMM-4812', carrier: 'Hartford', statement: 'STMT-2026-04', period: 'Apr 2026', policy: 'HTF-BOP-2024-77004', client: 'Peak Fitness Co.', lob: 'BOP', txType: 'Clawback', premium: -28400, rate: 11.0, earned: -3124, paid: -3124, status: 'Paid', statusColor: 'gray', expected_pay: '2026-04-01', producer: 'Mike Torres', paid_date: '2026-04-01', notes: 'Policy cancelled 2026-03-15 — clawback applied' },
  { id: 'COMM-4811', carrier: 'CNA', statement: 'STMT-2026-03', period: 'Mar 2026', policy: 'CNA-WC-2024-55012', client: 'Blue Ridge Supplies', lob: 'WC', txType: 'Trail Fee', premium: 12000, rate: 5.0, earned: 600, paid: 600, status: 'Paid', statusColor: 'green', expected_pay: '2026-03-20', producer: 'Sarah Chen', paid_date: '2026-03-20' },
  { id: 'COMM-4810', carrier: 'Travelers', statement: 'STMT-2026-Q1', period: 'Q1 2026', policy: 'MULTI — Override', client: 'Sarah Chen book', lob: 'Override', txType: 'Override/Bonus', premium: 0, rate: 0, earned: 8200, paid: 8200, status: 'Paid', statusColor: 'green', expected_pay: '2026-04-01', producer: 'Sarah Chen', paid_date: '2026-04-01', notes: 'Q1 performance override — 105% of target' }
];

export const commissionExceptions = [
  { id: 'EX-102', comm_id: 'COMM-4818', carrier: 'AMTrust', policy: 'AMT-WC-2025-44821', client: 'Ridge Builders', expected: 11172, actual: 10200, variance: -972, variance_pct: -8.7, reason: 'Rate applied at 11% not 12%', aging_days: 12, status: 'Open', severity: 'High', notes: 'Carrier schedule shows 12% for new WC; investigating.' },
  { id: 'EX-101', comm_id: 'COMM-4814', carrier: 'AMTrust', policy: 'AMT-GL-2026-11092', client: 'Coastal Realty', expected: 4668, actual: 0, variance: -4668, variance_pct: -100, reason: 'Policy missing from carrier statement', aging_days: 7, status: 'Open', severity: 'High', notes: 'Policy bound 2026-04-02; should appear on April statement.' },
  { id: 'EX-100', comm_id: 'COMM-4808', carrier: 'Liberty Mutual', policy: 'LIB-WC-2024-11201', client: 'Apex Labs', expected: 8400, actual: 9800, variance: 1400, variance_pct: 16.7, reason: 'Overpayment — duplicate credit', aging_days: 4, status: 'Under Review', severity: 'Medium', notes: 'Likely duplicate; awaiting carrier confirmation before return.' },
  { id: 'EX-099', comm_id: 'COMM-4805', carrier: 'Hartford', policy: 'HTF-BOP-2024-88332', client: 'Sunrise Dental', expected: 3200, actual: 3200, variance: 0, variance_pct: 0, reason: 'Missing endorsement commission', aging_days: 18, status: 'Disputed', severity: 'Medium', notes: 'Endorsement added mid-term; commission for $500 add not received.' },
  { id: 'EX-098', comm_id: 'COMM-4803', carrier: 'CNA', policy: 'CNA-CYB-2024-22093', client: 'DataCore Inc', expected: 6000, actual: 5400, variance: -600, variance_pct: -10, reason: 'Premium base discrepancy', aging_days: 25, status: 'Disputed', severity: 'High', notes: 'CNA statement uses annualized premium $36k; we have $40k net of taxes.' },
  { id: 'EX-097', comm_id: 'COMM-4802', carrier: 'Travelers', policy: 'TRV-AUTO-2024-10012', client: 'Metro Couriers', expected: 2400, actual: 2400, variance: 0, variance_pct: 0, reason: 'Paid to wrong producer', aging_days: 9, status: 'Resolved', severity: 'Low', notes: 'Reallocated from Mike Torres to Sarah Chen; book transfer Jan 2026.' }
];

export const carrierStatements = [
  { id: 'STMT-2026-04-LIB', carrier: 'Liberty Mutual', period: 'April 2026', received: '2026-04-17', source: 'API Sync', lines: 184, matched: 179, exceptions: 2, amount: '$287,400', status: 'Processing' },
  { id: 'STMT-2026-04-CNA', carrier: 'CNA', period: 'April 2026', received: '2026-04-16', source: 'IVANS', lines: 142, matched: 138, exceptions: 1, amount: '$214,800', status: 'Reconciled' },
  { id: 'STMT-2026-04-HTF', carrier: 'Hartford', period: 'April 2026', received: '2026-04-15', source: 'SFTP / Excel', lines: 68, matched: 65, exceptions: 2, amount: '$74,100', status: 'Processing' },
  { id: 'STMT-2026-04-TRV', carrier: 'Travelers', period: 'April 2026', received: '2026-04-14', source: 'API Sync', lines: 96, matched: 95, exceptions: 1, amount: '$118,300', status: 'Reconciled' },
  { id: 'STMT-2026-04-AMT', carrier: 'AMTrust', period: 'April 2026', received: '2026-04-10', source: 'Email PDF', lines: 42, matched: 38, exceptions: 4, amount: '$46,200', status: 'Exceptions' },
  { id: 'STMT-2026-Q1-LIB', carrier: 'Liberty Mutual', period: 'Q1 Contingent', received: '2026-04-05', source: 'Manual Entry', lines: 1, matched: 1, exceptions: 0, amount: '$73,500', status: 'Reconciled' }
];

export const carrierCommissionSchedules = [
  { carrier: 'Liberty Mutual', lob: 'Workers Comp',         new_pct: 12.0, renewal_pct: 10.0, contingent: 'Yes — 3.5% on LTY', effective: '2026-01-01', status: 'Active' },
  { carrier: 'Liberty Mutual', lob: 'General Liability',    new_pct: 13.0, renewal_pct: 11.0, contingent: 'Yes — 3.5% on LTY', effective: '2026-01-01', status: 'Active' },
  { carrier: 'Liberty Mutual', lob: 'Professional Liability', new_pct: 15.0, renewal_pct: 12.5, contingent: 'Yes — 3.5% on LTY', effective: '2026-01-01', status: 'Active' },
  { carrier: 'CNA',            lob: 'General Liability',    new_pct: 10.0, renewal_pct: 10.0, contingent: 'Yes — 2.0% on LTY', effective: '2026-01-01', status: 'Active' },
  { carrier: 'CNA',            lob: 'Cyber',                new_pct: 15.0, renewal_pct: 12.0, contingent: 'Yes — 2.5% on LTY', effective: '2026-01-01', status: 'Active' },
  { carrier: 'Hartford',       lob: 'BOP',                  new_pct: 11.0, renewal_pct: 10.0, contingent: 'Yes — 2.0% on LTY', effective: '2026-01-01', status: 'Active' },
  { carrier: 'Hartford',       lob: 'Workers Comp',         new_pct: 11.0, renewal_pct: 10.0, contingent: 'Yes — 2.0% on LTY', effective: '2026-01-01', status: 'Active' },
  { carrier: 'Travelers',      lob: 'Commercial Auto',      new_pct: 11.5, renewal_pct: 10.5, contingent: 'Yes — Tiered',      effective: '2026-01-01', status: 'Active' },
  { carrier: 'AMTrust',        lob: 'Workers Comp',         new_pct: 12.0, renewal_pct: 10.0, contingent: 'No',                effective: '2026-01-01', status: 'Active' },
  { carrier: 'AMTrust',        lob: 'General Liability',    new_pct: 12.0, renewal_pct: 10.0, contingent: 'No',                effective: '2026-01-01', status: 'Active' },
  { carrier: 'CFC',            lob: 'Cyber',                new_pct: 15.0, renewal_pct: 12.0, contingent: 'No',                effective: '2026-01-01', status: 'Active' }
];

export const producerPayouts = [
  { id: 'PAY-2026-04-SC', producer: 'Sarah Chen',   period: 'April 2026', gross: 82400, split_pct: 60, gross_share: 49440, deductions: 860,  advances: 0,    net: 48580, method: 'ACH',    status: 'Pending Approval', payout_date: '2026-05-15', mgr_required: true,  approver: 'Regional Mgr' },
  { id: 'PAY-2026-04-MT', producer: 'Mike Torres',  period: 'April 2026', gross: 64200, split_pct: 55, gross_share: 35310, deductions: 3124, advances: 0,    net: 32186, method: 'ACH',    status: 'Pending Approval', payout_date: '2026-05-15', mgr_required: false, approver: 'Auto-approve' },
  { id: 'PAY-2026-04-LP', producer: 'Lisa Park',    period: 'April 2026', gross: 41800, split_pct: 55, gross_share: 22990, deductions: 0,    advances: 1000, net: 21990, method: 'Check',  status: 'Approved',         payout_date: '2026-05-15', mgr_required: false, approver: 'Auto-approve' },
  { id: 'PAY-2026-04-DK', producer: 'David Kim',    period: 'April 2026', gross: 28400, split_pct: 50, gross_share: 14200, deductions: 0,    advances: 0,    net: 14200, method: 'ACH',    status: 'Approved',         payout_date: '2026-05-15', mgr_required: false, approver: 'Auto-approve' },
  { id: 'PAY-2026-03-SC', producer: 'Sarah Chen',   period: 'March 2026', gross: 74100, split_pct: 60, gross_share: 44460, deductions: 750,  advances: 0,    net: 43710, method: 'ACH',    status: 'Paid',             payout_date: '2026-04-15', mgr_required: true,  approver: 'Regional Mgr', paid_date: '2026-04-15' },
  { id: 'PAY-2026-03-MT', producer: 'Mike Torres',  period: 'March 2026', gross: 58700, split_pct: 55, gross_share: 32285, deductions: 2100, advances: 0,    net: 30185, method: 'ACH',    status: 'Paid',             payout_date: '2026-04-15', mgr_required: false, approver: 'Auto-approve', paid_date: '2026-04-15' }
];

export const contingentAccruals = [
  { carrier: 'Liberty Mutual', lty_premium: '$3.14M', threshold: 'Hit: $2.5M', rate: 3.5, accrued: 109900, paid_q1: 73500, projected_q2: 36400, loss_ratio_req: '≤75%', loss_ratio_actual: '62%' },
  { carrier: 'CNA',            lty_premium: '$1.82M', threshold: 'Hit: $1.5M', rate: 2.5, accrued: 45500,  paid_q1: 0,     projected_q2: 45500, loss_ratio_req: '≤70%', loss_ratio_actual: '71%' },
  { carrier: 'Hartford',       lty_premium: '$640k',  threshold: 'Below $1M', rate: 0,   accrued: 0,      paid_q1: 0,     projected_q2: 0,     loss_ratio_req: '—',    loss_ratio_actual: '84%' },
  { carrier: 'Travelers',      lty_premium: '$1.16M', threshold: 'Tiered',    rate: 2.0, accrued: 23200,  paid_q1: 0,     projected_q2: 23200, loss_ratio_req: '≤72%', loss_ratio_actual: '48%' }
];

export const commissionAlerts = [
  { type: 'red',   text: 'AMTrust April statement has 4 exceptions totaling -$1,572', action: 'Review', screen: 'commission-recon' },
  { type: 'amber', text: 'Producer payouts due in 3 days — $48,600 pending approval', action: 'Approve', screen: 'commission-payout-approval' },
  { type: 'amber', text: 'EX-098 (CNA / DataCore) aging 25 days — dispute escalation recommended', action: 'Open', screen: 'commission-recon' },
  { type: 'blue',  text: 'CNA Q1 contingent $45,500 projected — loss ratio trending 71% (threshold 70%)', action: 'Track', screen: 'commission-dashboard' }
];

export const commissionAnalytics = {
  receivable_aging: [
    { range: '0–30 days',  amount: 38200, pct: 60 },
    { range: '31–60 days', amount: 18400, pct: 29 },
    { range: '61–90 days', amount: 5800,  pct: 9 },
    { range: '90+ days',   amount: 1800,  pct: 2 }
  ],
  by_carrier: [
    { carrier: 'Liberty Mutual', ytd: 284100, share: 20, growth: '+12%' },
    { carrier: 'CNA',            ytd: 256800, share: 18, growth: '+8%' },
    { carrier: 'Travelers',      ytd: 198400, share: 14, growth: '+15%' },
    { carrier: 'Hartford',       ytd: 124600, share: 9,  growth: '-3%' },
    { carrier: 'AMTrust',        ytd: 84200,  share: 6,  growth: '+22%' },
    { carrier: 'Others',         ytd: 473900, share: 33, growth: '+9%' }
  ],
  by_lob: [
    { lob: 'Workers Comp',             ytd: 412000, pct: 29 },
    { lob: 'General Liability',        ytd: 342000, pct: 24 },
    { lob: 'Commercial Auto',          ytd: 198000, pct: 14 },
    { lob: 'BOP',                      ytd: 152000, pct: 11 },
    { lob: 'Cyber',                    ytd: 128000, pct: 9 },
    { lob: 'Professional Liability',   ytd: 96000,  pct: 7 },
    { lob: 'Contingent / Override',    ytd: 92000,  pct: 6 }
  ],
  leakage: [
    { reason: 'Missing endorsements',       count: 8,  amount: 4800 },
    { reason: 'Rate mis-applied',           count: 5,  amount: 3200 },
    { reason: 'Policy not on statement',    count: 3,  amount: 9400 },
    { reason: 'Clawback disputes',          count: 2,  amount: 1800 }
  ],
  yoy_growth: [
    { month: 'Oct', ly: 112, ty: 128 },
    { month: 'Nov', ly: 118, ty: 134 },
    { month: 'Dec', ly: 124, ty: 142 },
    { month: 'Jan', ly: 116, ty: 139 },
    { month: 'Feb', ly: 120, ty: 146 },
    { month: 'Mar', ly: 126, ty: 148 }
  ],
  producer_leaderboard: [
    { name: 'Sarah Chen',  ytd: 482100, deals: 42, split: 60, rank: 1 },
    { name: 'Mike Torres', ytd: 312400, deals: 36, split: 55, rank: 2 },
    { name: 'Lisa Park',   ytd: 268200, deals: 28, split: 55, rank: 3 },
    { name: 'David Kim',   ytd: 184600, deals: 21, split: 50, rank: 4 }
  ],
  forecast: {
    current_month: 148320,
    next_month: 186400,
    quarter: 580000,
    year: 1920000,
    contingent_projected: 208600
  },
  reconciliation_stats: {
    auto_match_rate: 92,
    target: 95,
    exceptions_open: 14,
    avg_resolve_days: 4.2,
    monthly_close_target: '15th of month'
  }
};

// ─── Submission Wizard Data ───
export const uploadedFiles = [
  { name: 'Magnolia_PriorPolicy_2024.pdf', size: '3.2 MB', icon: '📄' },
  { name: 'Client_EquipmentSchedule_v4.xlsx', size: '1.8 MB', icon: '📊' },
  { name: 'WC_SupplementalApp_2024.pdf', size: '2.1 MB', icon: '📄' },
  { name: 'LossRuns_2020_2024.pdf', size: '4.6 MB', icon: '📄' }
];

export const extractedFields = [
  { label: 'Business Name', value: 'Magnolia Construction LLC', confidence: 99, level: 'green' },
  { label: 'NAICS Code', value: '238990 — Specialty Trade', confidence: 97, level: 'green' },
  { label: 'GL Limits', value: '$1M / $2M', confidence: 95, level: 'green' },
  { label: 'WC Payroll — California', value: '$2,340,000', confidence: 96, level: 'green' },
  { label: 'WC Payroll — Texas', value: '$870,000', confidence: 94, level: 'amber' },
  { label: 'Prior Carrier', value: 'Berkshire / Chubb', confidence: 98, level: 'green' },
  { label: 'Expiring Premium', value: 'WC: $147,000  GL: $38,000', confidence: 91, level: 'amber' },
  { label: 'Umbrella Limit', value: '$5,000,000', confidence: 99, level: 'green' }
];

export const lossRunSummary = [
  { year: '2020', carrier: 'Berkshire', ratio: '42%', level: 'green' },
  { year: '2021', carrier: 'Berkshire', ratio: '38%', level: 'green' },
  { year: '2022', carrier: 'Berkshire', ratio: '500%', level: 'red' },
  { year: '2023', carrier: 'Chubb', ratio: '15%', level: 'green' },
  { year: '2024', carrier: 'Chubb', ratio: '10%', level: 'green' }
];

export const carriers = [
  { name: 'SEMC', line: 'WC + GL', method: 'API', selected: true },
  { name: 'CNA', line: 'GL + Umbrella', method: 'API', selected: true },
  { name: 'Liberty Mutual', line: 'WC + GL', method: 'SEMC', selected: true },
  { name: 'The Hartford', line: 'WC + GL', method: 'SEMC', selected: true },
  { name: 'Guard/Berkshire', line: 'WC', method: 'SEMC', selected: true },
  { name: 'Chubb', line: 'Umbrella', method: 'SEMC', selected: false }
];

export const carrierStatuses = [
  { name: 'SEMC', status: 'Quote received (38 min)' },
  { name: 'CNA', status: 'Partial quote (GL + Umbrella only)' },
  { name: 'Liberty Mutual', status: 'Quote received (52 min)' },
  { name: 'The Hartford', status: 'Quote received (61 min)' },
  { name: 'Guard', status: 'Partial (WC only)' }
];

export const quoteComparison = [
  { carrier: 'SEMC', rating: 'A+', wc: '$147,200', gl: '$31,500', umbrella: '$6,000', total: '$184,700', best: true, time: '38 min', savings: '-$300' },
  { carrier: 'The Hartford', rating: 'A+', wc: '$152,000', gl: '$33,100', umbrella: '$8,000', total: '$193,100', best: false, time: '61 min', savings: '' },
  { carrier: 'Liberty Mutual', rating: 'A', wc: '$153,200', gl: '$32,700', umbrella: '$8,000', total: '$193,900', best: false, time: '52 min', savings: '' },
  { carrier: 'CNA', rating: 'A', wc: '—', gl: '$34,000', umbrella: '$18,000', total: '$52,000', best: false, time: '', savings: '', partial: 'GL+Umbrella' },
  { carrier: 'Guard', rating: 'A-', wc: '$152,300', gl: '—', umbrella: '—', total: '$152,300', best: false, time: '', savings: '', partial: 'WC only' }
];

// ─── Broker Portal Data (Extended) ───
export const brokerQuotes = [
  { client: 'Magnolia Constr', policy: 'WC + GL', premium: '$184,700', carrier: 'SEMC', status: 'Quoted', statusColor: 'green', date: 'Apr 17' },
  { client: 'Apex Industries', policy: 'BOP', premium: '$52,000', carrier: 'CNA', status: 'In Market', statusColor: 'amber', date: 'Apr 16' },
  { client: 'Valley Logistics', policy: 'Cyber', premium: '$38,200', carrier: 'Hartford', status: 'Declined', statusColor: 'red', date: 'Apr 15' }
];

export const brokerBindings = [
  { client: 'Ridge Builders', policy: 'BOP', premium: '$93,100', carrier: 'Liberty Mutual', effDate: 'May 01', status: 'Bound', statusColor: 'green' },
  { client: 'Sunny Farms', policy: 'GL', premium: '$14,500', carrier: 'SEMC', effDate: 'May 10', status: 'Pending Issuance', statusColor: 'amber' }
];

// ─── Policy Master Record (Upgraded) ───
export const brokerPoliciesList = [
  { 
    id: 'SEMC-WC-2025-48821', 
    epic_id: 'POL-19283-99',
    carrier_code: 'SEMC',
    client: 'Magnolia Constr', 
    type: 'Workers Comp', 
    carrier: 'SEMC / Liberty Mutual', 
    term: '12 Months',
    effective: '2025-06-01',
    expiry: '2026-06-01', 
    premium_annual: '$184,700',
    billing_type: 'Agency Bill',
    status: 'Active', 
    statusColor: 'green' 
  },
  { 
    id: 'CNA-GL-2025-33102', 
    epic_id: 'POL-11022-44',
    carrier_code: 'CNA',
    client: 'Apex Industries', 
    type: 'General Liability', 
    carrier: 'CNA', 
    term: '12 Months',
    effective: '2025-04-12',
    expiry: '2026-04-12', 
    premium_annual: '$52,000',
    billing_type: 'Direct Bill',
    status: 'Active', 
    statusColor: 'green' 
  },
  { 
    id: 'LIB-BOP-20291', 
    epic_id: 'POL-44122-11',
    carrier_code: 'LIB',
    client: 'Ridge Builders', 
    type: 'BOP', 
    carrier: 'Liberty Mutual', 
    term: '12 Months',
    effective: '2025-05-01',
    expiry: '2026-05-01', 
    premium_annual: '$93,100',
    billing_type: 'Agency Bill',
    status: 'Active', 
    statusColor: 'green' 
  }
];

export const policyDetails = {
  // Identifiers
  id: 'SEMC-WC-2025-48821', 
  epic_id: 'POL-19283-99',
  carrier_policy_no: 'WC-00088921-X',
  carrier_code: 'SEMC',
  line_of_business: 'Workers Comp',
  client: 'Magnolia Construction LLC', 
  carrier: 'SEMC / Liberty Mutual',
  
  // Term Details
  effective: '2025-06-01', 
  expiration: '2026-06-01', 
  term_length: '12 Months',
  term_flag: 'Renewal',
  
  // Financials
  premium_written: '$184,700',
  premium_estimated: '$190,000',
  commission_rate: '12.5%',
  commission_amt: '$23,087.50',
  billing_method: 'Agency Bill',
  payment_plan: 'Monthly Installments',
  
  // Status & Stage
  status: 'Active', 
  statusColor: 'green', 
  transaction_type: 'Renewal',
  
  // Servicing Roles
  producer: 'Sarah Mitchell',
  csr: 'James Wilson',
  underwriter: 'Kevin Blake (SEMC)',
  department: 'Commercial Lines',
  profit_center: 'Sacramento Main',

  // Custom Metadata
  description: 'Primary Workers Comp coverage for California and Texas operations. Master Policy including Waiver of Subrogation.',
  notes: 'Client requires COIs with specifically worded Additional Insured language for Sacramento Project #892.',
  
  // Transactions / History
  history: [
    { date: '2025-06-01', type: 'Policy Issued', action: 'New Business - Bound via API', user: 'System' },
    { date: '2025-12-15', type: 'Endorsement', action: 'Add Vehicle: 2024 Ford F-150', user: 'S. Mitchell', reason: 'Fleet Expansion' },
    { date: '2026-03-12', type: 'Claim', action: 'Claim Filed - DOL 03/10/26 (Worker Injury)', user: 'Client Portal', status: 'Open' }
  ],

  // Servicing - COI Holders
  coi_holders: [
    { name: 'City of Sacramento', address: '915 I St, Sacramento, CA 95814', type: 'Main Contract Holder' },
    { name: 'State of California', address: '1500 Capitol Ave, Sacramento, CA 95814', type: 'Regulatory' }
  ],
  
  // Loss Run Linkage
  claims_linkage: {
    open_count: 1,
    loss_history_summary: 'Overall loss ratio 12% (Exceptional performance)'
  }
};

export const brokerQuotesKPIs = [
  { label: 'Active Quotes', value: '43' },
  { label: 'Pipeline Value', value: '$2.84M' },
  { label: 'Quoted (Ready)', value: '12' },
  { label: 'Presented', value: '8' },
  { label: 'Close Ratio (YTD)', value: '34%' },
  { label: 'Avg Quote→Bind', value: '6.2d' }
];

export const quoteStages = [
  { id: 'draft',     label: 'Draft',           color: 'gray',  desc: 'Risk info collection in progress' },
  { id: 'market',    label: 'In Market',       color: 'blue',  desc: 'Submitted to carriers, awaiting quotes' },
  { id: 'quoted',    label: 'Quoted',          color: 'amber', desc: 'Carrier quotes received, ready to present' },
  { id: 'presented', label: 'Presented',       color: 'amber', desc: 'Sent to client, awaiting decision' },
  { id: 'bound',     label: 'Bound',           color: 'green', desc: 'Client accepted, policy in issuance' },
  { id: 'lost',      label: 'Lost / Declined', color: 'red',   desc: 'Did not close — reason captured' }
];

export const quoteLOBs = [
  { group: 'Personal', items: ['Auto', 'Homeowners', 'Renters', 'Umbrella', 'Life', 'Health'] },
  { group: 'Commercial', items: ['BOP', 'General Liability', 'Commercial Property', 'Workers Comp', 'Commercial Auto', 'Professional Liability', 'Cyber', 'Inland Marine'] },
  { group: 'Specialty', items: ['High-Value Home', 'Contractor', 'Restaurant', 'Tech / SaaS', 'Healthcare'] }
];

export const quotesList = [
  { id: 'Q-2026-0182', client: 'Magnolia Construction LLC', is_prospect: false, lob: 'WC + GL', effective: '2026-06-01', stage: 'quoted', carriers_count: 4, best_premium: 178500, best_carrier: 'SEMC', appetite_match: 95, retention_score: 92, expires: '2026-05-12', producer: 'Sarah Chen', created: '2026-04-08', last_activity: '2026-04-17 11:00', tags: ['#Renewal'] },
  { id: 'Q-2026-0181', client: 'TechCorp Inc',              is_prospect: false, lob: 'Cyber',   effective: '2026-08-01', stage: 'market', carriers_count: 5, best_premium: null,    best_carrier: null,   appetite_match: 78, retention_score: 88, expires: '2026-05-15', producer: 'Sarah Chen', created: '2026-04-12', last_activity: '2026-04-17 14:30', tags: ['#NewBusiness'] },
  { id: 'Q-2026-0180', client: 'Coastal Realty',            is_prospect: false, lob: 'GL',      effective: '2026-05-14', stage: 'presented', carriers_count: 3, best_premium: 38900, best_carrier: 'AMTrust', appetite_match: 90, retention_score: 80, expires: '2026-05-10', producer: 'Mike Torres', created: '2026-04-02', last_activity: '2026-04-15 10:00', tags: ['#NewBusiness'] },
  { id: 'Q-2026-0179', client: 'Delta Logistics',           is_prospect: false, lob: 'Commercial Auto', effective: '2026-07-05', stage: 'quoted', carriers_count: 6, best_premium: 142800, best_carrier: 'Travelers', appetite_match: 88, retention_score: 87, expires: '2026-05-25', producer: 'Sarah Chen', created: '2026-04-09', last_activity: '2026-04-16 12:14', tags: ['#FleetReview'] },
  { id: 'Q-2026-0178', client: 'Apex Industries',           is_prospect: false, lob: 'BOP',     effective: '2026-06-01', stage: 'presented', carriers_count: 4, best_premium: 92400, best_carrier: 'CNA', appetite_match: 92, retention_score: 78, expires: '2026-04-22', producer: 'Mike Torres', created: '2026-04-04', last_activity: '2026-04-13 09:42', tags: ['#Renewal'] },
  { id: 'Q-2026-0177', client: 'NewCo Bakery — Prospect',   is_prospect: true,  lob: 'BOP',     effective: '2026-06-15', stage: 'draft',  carriers_count: 0, best_premium: null,    best_carrier: null, appetite_match: null, retention_score: null, expires: null, producer: 'Sarah Chen', created: '2026-04-17', last_activity: '2026-04-17 16:20', tags: ['#Prospect'] },
  { id: 'Q-2026-0176', client: 'Harbor Foods',              is_prospect: false, lob: 'BOP + WC', effective: '2026-05-18', stage: 'quoted', carriers_count: 3, best_premium: 97200, best_carrier: 'Hartford', appetite_match: 65, retention_score: 45, expires: '2026-05-08', producer: 'Sarah Chen', created: '2026-04-01', last_activity: '2026-04-15 13:00', tags: ['#Renewal', '#AtRisk'] },
  { id: 'Q-2026-0175', client: 'Summit Medical',            is_prospect: false, lob: 'Professional Liability', effective: '2026-07-12', stage: 'market', carriers_count: 7, best_premium: null, best_carrier: null, appetite_match: 55, retention_score: 38, expires: '2026-06-10', producer: 'Sarah Chen', created: '2026-03-28', last_activity: '2026-04-17 10:00', tags: ['#Renewal', '#HighValue'] },
  { id: 'Q-2026-0174', client: 'Ridge Builders',            is_prospect: false, lob: 'WC',      effective: '2026-05-30', stage: 'presented', carriers_count: 5, best_premium: 96000, best_carrier: 'AMTrust', appetite_match: 85, retention_score: 84, expires: '2026-05-15', producer: 'Mike Torres', created: '2026-04-05', last_activity: '2026-04-16 15:00', tags: ['#Renewal'] },
  { id: 'Q-2026-0173', client: 'Blue Ridge Supplies',       is_prospect: false, lob: 'GL',      effective: '2026-04-30', stage: 'bound',  carriers_count: 4, best_premium: 61800, best_carrier: 'Travelers', appetite_match: 90, retention_score: 75, expires: '2026-04-25', producer: 'Sarah Chen', created: '2026-03-15', last_activity: '2026-04-10 11:00', tags: ['#NewBusiness'] },
  { id: 'Q-2026-0172', client: 'Peak Fitness Co.',          is_prospect: false, lob: 'BOP',     effective: '2026-04-15', stage: 'lost',   carriers_count: 4, best_premium: 34200, best_carrier: 'Hartford', appetite_match: 80, retention_score: 42, expires: '2026-04-20', producer: 'Mike Torres', created: '2026-03-10', last_activity: '2026-04-14 09:00', tags: ['#Renewal'], lost_reason: 'Price — went to direct writer' },
  { id: 'Q-2026-0171', client: 'GreenTech Solutions — Prospect', is_prospect: true, lob: 'Cyber + Tech E&O', effective: '2026-06-01', stage: 'lost', carriers_count: 3, best_premium: 24800, best_carrier: 'CFC', appetite_match: 88, retention_score: null, expires: '2026-05-01', producer: 'Sarah Chen', created: '2026-03-22', last_activity: '2026-04-12 13:00', tags: ['#Prospect'], lost_reason: 'Coverage needs changed' }
];

export const quoteDetail = {
  id: 'Q-2026-0182',
  client: 'Magnolia Construction LLC',
  is_prospect: false,
  producer: 'Sarah Chen',
  lob: 'Workers Comp + General Liability',
  effective: '2026-06-01',
  expiration: '2026-05-12 (24 days)',
  status: 'Quoted — Ready to Present',
  status_color: 'amber',
  stage: 'quoted',
  current_premium_range: '$172,800 – $189,400',
  recommended: { carrier: 'SEMC / Liberty Mutual', premium: 178500, monthly: 14875, score: 'Best Value' },
  risk_summary: {
    industry: 'Specialty Trade Contractor (NAICS 238990)',
    revenue: '$8.5M',
    employees: 120,
    locations: 3,
    states: ['CA', 'TX'],
    payroll: '$3.4M',
    osha_emr: 0.85,
    loss_history: '8 claims / 5yr / $42k paid'
  },
  carrier_quotes: [
    { carrier: 'SEMC / Liberty Mutual', premium: 178500, monthly: 14875, coverage_score: 98, appetite_match: 95, status: 'Quoted', recommended: 'Best Value', binder_ready: true, expires: '2026-05-12', notes: 'Incumbent — preserves continuity. EMR 0.85 honored.' },
    { carrier: 'CNA',                   premium: 184200, monthly: 15350, coverage_score: 96, appetite_match: 92, status: 'Quoted', recommended: null, binder_ready: true, expires: '2026-05-10', notes: 'Slightly broader umbrella; $5M instead of $3M.' },
    { carrier: 'Travelers',             premium: 172800, monthly: 14400, coverage_score: 92, appetite_match: 90, status: 'Quoted', recommended: 'Lowest Price', binder_ready: true, expires: '2026-05-08', notes: '$2k deductible vs $1k; higher subjectivity list.' },
    { carrier: 'Hartford',              premium: 189400, monthly: 15783, coverage_score: 99, appetite_match: 88, status: 'Quoted', recommended: 'Broadest Coverage', binder_ready: true, expires: '2026-05-14', notes: 'Adds cyber endorsement at no extra cost.' },
    { carrier: 'AMTrust',               premium: null,   monthly: null,  coverage_score: 0,  appetite_match: 30, status: 'Declined', recommended: null, binder_ready: false, expires: null, notes: 'WC class-code outside appetite for high-payroll trade contractors.' }
  ],
  coverage_grid: [
    { coverage: 'WC Limit per Occurrence', semc: '$1M',  cna: '$1M',  travelers: '$1M',  hartford: '$1M' },
    { coverage: 'GL Aggregate',            semc: '$2M',  cna: '$2M',  travelers: '$2M',  hartford: '$3M' },
    { coverage: 'GL Per Occurrence',       semc: '$1M',  cna: '$1M',  travelers: '$1M',  hartford: '$1M' },
    { coverage: 'Umbrella',                semc: '$3M',  cna: '$5M',  travelers: '$2M',  hartford: '$5M' },
    { coverage: 'GL Deductible',           semc: '$1k',  cna: '$1k',  travelers: '$2k',  hartford: '$1k' },
    { coverage: 'Cyber Endorsement',       semc: 'No',   cna: 'No',   travelers: 'No',   hartford: 'Included' },
    { coverage: 'Annual Premium',          semc: '$178,500', cna: '$184,200', travelers: '$172,800', hartford: '$189,400' },
    { coverage: 'Monthly',                 semc: '$14,875',  cna: '$15,350',  travelers: '$14,400',  hartford: '$15,783' }
  ],
  versions: [
    { v: 'v1.3', when: '2026-04-17 11:00', who: 'Sarah Chen', change: 'Increased umbrella requirement to $5M (re-rated all carriers)' },
    { v: 'v1.2', when: '2026-04-15 14:00', who: 'Sarah Chen', change: 'Updated payroll from $3.15M to $3.4M (added new TX jobsite)' },
    { v: 'v1.1', when: '2026-04-12 09:30', who: 'System',     change: 'Auto-pulled from existing policy SEMC-WC-2025-48821 (renewal)' },
    { v: 'v1.0', when: '2026-04-08 15:42', who: 'Sarah Chen', change: 'Initial quote created' }
  ],
  presentation: {
    proposal_generated: '2026-04-15 14:30',
    delivered: '2026-04-15 14:32 (client portal + email)',
    viewed: '2026-04-16 10:18',
    signed: null,
    last_followup: '2026-04-17 11:00 (call)',
    next_followup: '2026-04-22 09:00'
  },
  benchmarks: {
    market_avg_premium: 182400,
    market_low: 168200,
    market_high: 198400,
    your_quote_position: 'Below average — competitive'
  },
  ai_recommendations: [
    'Bind with SEMC (incumbent) — best value, preserves claims relationship',
    'Cross-sell Cyber Liability — TechCorp/Magnolia data risk profile suggests $50k+ premium opportunity',
    'Schedule renewal kickoff call within 5 days to lock in commitment',
    'Apply 2% early-bird discount (15-day commitment window)'
  ]
};

export const quoteAnalytics = {
  close_ratio_by_producer: [
    { name: 'Sarah Chen',  quoted: 84, bound: 38, ratio: 45.2, growth: '+5.1pts' },
    { name: 'Mike Torres', quoted: 62, bound: 22, ratio: 35.5, growth: '+1.8pts' },
    { name: 'Lisa Park',   quoted: 51, bound: 19, ratio: 37.3, growth: '+3.2pts' },
    { name: 'David Kim',   quoted: 38, bound: 11, ratio: 28.9, growth: '-0.4pts' }
  ],
  close_ratio_by_lob: [
    { lob: 'Workers Comp',           ratio: 48.2 },
    { lob: 'BOP',                    ratio: 42.8 },
    { lob: 'General Liability',      ratio: 38.4 },
    { lob: 'Commercial Auto',        ratio: 34.2 },
    { lob: 'Cyber',                  ratio: 28.5 },
    { lob: 'Professional Liability', ratio: 22.1 }
  ],
  hit_ratio_by_carrier: [
    { carrier: 'Liberty Mutual', submitted: 142, won: 71,  ratio: 50.0 },
    { carrier: 'CNA',            submitted: 118, won: 48,  ratio: 40.7 },
    { carrier: 'Travelers',      submitted: 96,  won: 38,  ratio: 39.6 },
    { carrier: 'Hartford',       submitted: 84,  won: 24,  ratio: 28.6 },
    { carrier: 'AMTrust',        submitted: 62,  won: 18,  ratio: 29.0 },
    { carrier: 'CFC',            submitted: 38,  won: 14,  ratio: 36.8 }
  ],
  premium_quoted_vs_written: [
    { month: 'Jan', quoted: 1.82, written: 0.62 },
    { month: 'Feb', quoted: 2.14, written: 0.74 },
    { month: 'Mar', quoted: 2.46, written: 0.84 },
    { month: 'Apr', quoted: 2.84, written: 0.98 }
  ],
  top_lost_reasons: [
    { reason: 'Price — competitor cheaper',           count: 18, pct: 32 },
    { reason: 'Coverage needs changed',                count: 12, pct: 21 },
    { reason: 'Switched to direct writer',             count: 9,  pct: 16 },
    { reason: 'Decision delayed past quote expiry',    count: 7,  pct: 13 },
    { reason: 'Carrier appetite mismatch',             count: 5,  pct: 9 },
    { reason: 'Did not respond / ghosted',             count: 5,  pct: 9 }
  ],
  pipeline_value: {
    draft: '$184k',
    market: '$842k',
    quoted: '$1.18M',
    presented: '$632k',
    total: '$2.84M'
  },
  quote_to_bind_distribution: [
    { range: '< 3 days',   count: 22, pct: 24 },
    { range: '3–7 days',   count: 38, pct: 42 },
    { range: '8–14 days',  count: 19, pct: 21 },
    { range: '15+ days',   count: 12, pct: 13 }
  ]
};

export const carrierAppetiteMatrix = [
  { carrier: 'Liberty Mutual', wc: 'Strong', gl: 'Strong', auto: 'Moderate', cyber: 'No',       prof: 'Strong',  property: 'Strong' },
  { carrier: 'CNA',            wc: 'Moderate', gl: 'Strong', auto: 'No',     cyber: 'Strong',   prof: 'Strong',  property: 'Moderate' },
  { carrier: 'Travelers',      wc: 'Strong', gl: 'Strong', auto: 'Strong',   cyber: 'Moderate', prof: 'Moderate', property: 'Strong' },
  { carrier: 'Hartford',       wc: 'Strong', gl: 'Strong', auto: 'Moderate', cyber: 'Moderate', prof: 'No',      property: 'Strong' },
  { carrier: 'AMTrust',        wc: 'Moderate', gl: 'Strong', auto: 'No',     cyber: 'No',       prof: 'No',      property: 'Moderate' },
  { carrier: 'CFC',            wc: 'No',     gl: 'Moderate', auto: 'No',     cyber: 'Strong',   prof: 'Strong',  property: 'No' }
];

export const brokerBindingsKPIs = [
  { label: 'Active Bindings', value: '23' },
  { label: 'Bound This Month', value: '12' },
  { label: 'Pending e-Sig', value: '4', warning: true },
  { label: 'Awaiting UW', value: '3' },
  { label: 'Subjectivities Open', value: '8', warning: true },
  { label: 'Avg Quote→Bind', value: '6.2d' }
];

export const bindingTypes = ['New Business', 'Renewal', 'Endorsement', 'Binder (Temporary)', 'Rewrite / Replacement'];

export const bindingStages = [
  { id: 'app',      label: 'Application',           color: 'gray',  order: 1, desc: 'ACORD/carrier app finalization' },
  { id: 'submitted', label: 'Submitted to Carrier', color: 'blue',  order: 2, desc: 'Awaiting UW response' },
  { id: 'uw',       label: 'UW Approval',           color: 'amber', order: 3, desc: 'Carrier reviewing / conditional' },
  { id: 'esig',     label: 'Client e-Sig',          color: 'amber', order: 4, desc: 'Awaiting client signature' },
  { id: 'binder',   label: 'Binder Issued',         color: 'blue',  order: 5, desc: 'Coverage active, full policy pending' },
  { id: 'issued',   label: 'Policy Issued',         color: 'green', order: 6, desc: 'Full policy live in AMS' },
  { id: 'declined', label: 'Declined / Lost',       color: 'red',   order: 7, desc: 'Carrier declined or client withdrew' }
];

export const bindingsList = [
  { id: 'B-2026-0091', quote_id: 'Q-2026-0182', client: 'Magnolia Construction LLC', carrier: 'SEMC / Liberty Mutual', lob: 'WC + GL', premium: 178500, type: 'Renewal',     effective: '2026-06-01', stage: 'esig',      esig_status: 'Sent', payment_status: 'Pending',   subj_total: 4, subj_done: 3, days_in_stage: 2, producer: 'Sarah Chen', conditional: false, billing: 'Agency Bill' },
  { id: 'B-2026-0090', quote_id: 'Q-2026-0179', client: 'Delta Logistics',           carrier: 'Travelers',              lob: 'Commercial Auto', premium: 142800, type: 'New Business', effective: '2026-07-05', stage: 'uw',       esig_status: 'Not Sent', payment_status: 'Pending', subj_total: 5, subj_done: 2, days_in_stage: 4, producer: 'Sarah Chen', conditional: true,  billing: 'Direct Bill' },
  { id: 'B-2026-0089', quote_id: 'Q-2026-0180', client: 'Coastal Realty',            carrier: 'AMTrust',                lob: 'GL',     premium: 38900,  type: 'New Business', effective: '2026-05-14', stage: 'binder',    esig_status: 'Signed', payment_status: 'Received', subj_total: 3, subj_done: 3, days_in_stage: 1, producer: 'Mike Torres', conditional: false, billing: 'Agency Bill' },
  { id: 'B-2026-0088', quote_id: 'Q-2026-0178', client: 'Apex Industries',           carrier: 'CNA',                    lob: 'BOP',    premium: 92400,  type: 'Renewal',     effective: '2026-06-01', stage: 'submitted', esig_status: 'Not Sent', payment_status: 'Pending', subj_total: 4, subj_done: 1, days_in_stage: 3, producer: 'Mike Torres', conditional: false, billing: 'Direct Bill' },
  { id: 'B-2026-0087', quote_id: 'Q-2026-0173', client: 'Blue Ridge Supplies',       carrier: 'Travelers',              lob: 'GL',     premium: 61800,  type: 'New Business', effective: '2026-04-30', stage: 'issued',    esig_status: 'Signed', payment_status: 'Applied',  subj_total: 3, subj_done: 3, days_in_stage: 6, producer: 'Sarah Chen', conditional: false, billing: 'Agency Bill', issued_date: '2026-04-12' },
  { id: 'B-2026-0086', quote_id: 'Q-2026-0174', client: 'Ridge Builders',            carrier: 'AMTrust',                lob: 'WC',     premium: 96000,  type: 'Renewal',     effective: '2026-05-30', stage: 'esig',      esig_status: 'Viewed', payment_status: 'Pending', subj_total: 4, subj_done: 4, days_in_stage: 1, producer: 'Mike Torres', conditional: false, billing: 'Agency Bill' },
  { id: 'B-2026-0085', quote_id: 'Q-2026-0177', client: 'NewCo Bakery',              carrier: 'Hartford',               lob: 'BOP',    premium: 12400,  type: 'New Business', effective: '2026-05-15', stage: 'app',       esig_status: 'Not Sent', payment_status: 'Pending', subj_total: 2, subj_done: 0, days_in_stage: 1, producer: 'Sarah Chen', conditional: false, billing: 'Agency Bill' },
  { id: 'B-2026-0084', quote_id: 'Q-2026-0172', client: 'Peak Fitness Co.',          carrier: 'Hartford',               lob: 'BOP',    premium: 34200,  type: 'Renewal',     effective: '2026-04-15', stage: 'declined',  esig_status: 'N/A',     payment_status: 'N/A',     subj_total: 0, subj_done: 0, days_in_stage: 0, producer: 'Mike Torres', conditional: false, billing: 'Direct Bill', decline_reason: 'Client withdrew — chose direct writer' },
  { id: 'B-2026-0083', quote_id: 'Q-2026-0181', client: 'TechCorp Inc',              carrier: 'CNA',                    lob: 'Cyber',  premium: 175000, type: 'Endorsement', effective: '2026-04-30', stage: 'binder',    esig_status: 'Signed', payment_status: 'Received', subj_total: 5, subj_done: 5, days_in_stage: 2, producer: 'Sarah Chen', conditional: false, billing: 'Agency Bill' }
];

export const bindingDetail = {
  id: 'B-2026-0091',
  quote_id: 'Q-2026-0182',
  client: 'Magnolia Construction LLC',
  client_signatory: 'Robert Nguyen — CEO (robert@magnoliaconstruction.com)',
  carrier: 'SEMC / Liberty Mutual',
  carrier_underwriter: 'M. Henderson — m.henderson@libertymutual.com',
  type: 'Renewal',
  lob: 'Workers Comp + General Liability',
  effective: '2026-06-01 12:01 AM PT',
  expiration: '2027-06-01 12:01 AM PT',
  premium: 178500,
  monthly: 14875,
  billing: 'Agency Bill',
  payment_due: '2026-05-25',
  stage: 'esig',
  status: 'Awaiting client e-Signature',
  status_color: 'amber',
  conditional: false,
  producer: 'Sarah Chen',
  app_completion: 100,
  esig_status: 'Sent — Viewed',
  esig_provider: 'DocuSign',
  esig_sent: '2026-04-17 11:42',
  esig_viewed: '2026-04-17 14:18',
  esig_signed: null,
  payment_status: 'Pending',
  coverages: [
    { line: 'Workers Comp',     limit: 'Statutory · $1M / $1M / $1M EL', deductible: '$0',     premium: 138400, additional_insureds: 0 },
    { line: 'General Liability', limit: '$1M per occ · $2M aggregate',    deductible: '$1,000', premium: 34200,  additional_insureds: 2 },
    { line: 'Umbrella',          limit: '$3,000,000',                     deductible: '$10k SIR', premium: 5900,   additional_insureds: 0 }
  ],
  subjectivities: [
    { name: 'Signed Application (ACORD 125 + WC supplement)', status: 'Received',     due: '2026-05-25', priority: 'High', received_date: '2026-04-17 09:00', notes: 'e-signed by Robert Nguyen' },
    { name: 'Loss Runs — 5 year history',                     status: 'Received',     due: '2026-05-25', priority: 'High', received_date: '2026-04-15 14:32', notes: 'Pulled from prior carrier' },
    { name: 'OSHA 300 Logs (2024, 2025)',                     status: 'Received',     due: '2026-05-25', priority: 'Medium', received_date: '2026-04-16 10:18', notes: 'Confirmed clean' },
    { name: 'TRIA Form (Terrorism Election)',                 status: 'Outstanding',  due: '2026-05-25', priority: 'High', received_date: null, notes: 'Awaiting client signature on rejection form' }
  ],
  documents: [
    { name: 'ACORD_125_Magnolia_2026.pdf',  type: 'Application',     uploaded: '2026-04-17 09:00', by: 'Sarah Chen' },
    { name: 'WC_Supplement_Magnolia.pdf',   type: 'Supplement',      uploaded: '2026-04-17 09:02', by: 'Sarah Chen' },
    { name: 'Magnolia_5yr_LossRuns.pdf',    type: 'Loss History',    uploaded: '2026-04-15 14:32', by: 'System (Carrier)' },
    { name: 'OSHA_300_2024_2025.pdf',       type: 'Compliance',      uploaded: '2026-04-16 10:18', by: 'Client Portal' },
    { name: 'NoLossLetter_Magnolia.pdf',    type: 'Statement',       uploaded: '2026-04-17 09:42', by: 'Sarah Chen' },
    { name: 'Quote_Q-2026-0182_v1.3.pdf',   type: 'Quote',           uploaded: '2026-04-17 11:00', by: 'System' }
  ],
  additional_insureds: [
    { name: 'City of Sacramento — Public Works', address: '915 I St, Sacramento, CA 95814', certificate_holder: true, waiver_of_subro: true },
    { name: 'Pacific Gas & Electric Co.',         address: '77 Beale St, San Francisco, CA 94105', certificate_holder: true, waiver_of_subro: false }
  ],
  payment_info: {
    method: 'ACH Transfer',
    account_last4: '****8421',
    amount_due: 178500,
    down_payment: 44625,
    installments: 12,
    first_payment: '2026-05-25',
    invoice_number: 'INV-2026-04821'
  },
  timeline: [
    { when: '2026-04-08 15:42', actor: 'Sarah Chen',     action: 'Quote Q-2026-0182 created from renewal',         details: 'Initial quote across 4 carriers' },
    { when: '2026-04-15 14:30', actor: 'Sarah Chen',     action: 'Quote selected — SEMC (Best Value)',             details: 'Client confirmed verbally during follow-up call' },
    { when: '2026-04-17 09:00', actor: 'Sarah Chen',     action: 'Binding wizard initiated',                       details: 'Application auto-populated from quote v1.3' },
    { when: '2026-04-17 09:42', actor: 'Sarah Chen',     action: 'Application submitted to Liberty Mutual API',    details: 'Real-time submission acknowledged' },
    { when: '2026-04-17 11:15', actor: 'M. Henderson',   action: 'Carrier underwriting approval received',         details: 'Approved with standard terms; no conditions' },
    { when: '2026-04-17 11:42', actor: 'Sarah Chen',     action: 'e-Signature request sent to Robert Nguyen',      details: 'DocuSign envelope ID: ELG-88291' },
    { when: '2026-04-17 14:18', actor: 'Robert Nguyen',  action: 'Client viewed e-Sig envelope',                   details: 'Awaiting signature' }
  ],
  post_bind_tasks: [
    { task: 'Welcome Call — Day 3',          due: '2026-06-04', auto: true,  assigned: 'Sarah Chen' },
    { task: 'Send Policy Documents',         due: '2026-06-01', auto: true,  assigned: 'System' },
    { task: 'Client Portal Invite',          due: '2026-06-01', auto: true,  assigned: 'System' },
    { task: 'Schedule Policy Review — Day 30', due: '2026-07-01', auto: true,  assigned: 'Sarah Chen' },
    { task: 'Send COI to City of Sacramento', due: '2026-06-01', auto: false, assigned: 'Sarah Chen' },
    { task: 'Notify Accounting (Commission Tracking)', due: '2026-06-01', auto: true, assigned: 'System' }
  ],
  conditional_terms: [],
  binder_preview: {
    binder_number: 'BND-2026-91-LIB-MAG',
    issued: null,
    valid_through: '2026-07-01 (60 days)'
  }
};

export const bindingAnalytics = {
  bind_ratio: { quoted: 88, bound: 67, ratio: 76.1, target: 80 },
  avg_time_to_bind: { current: 6.2, last_period: 7.1, target: 4.0 },
  bind_distribution: [
    { range: 'Same day',    count: 14, pct: 21 },
    { range: '< 24 hours',  count: 18, pct: 27 },
    { range: '1–3 days',    count: 21, pct: 31 },
    { range: '4–7 days',    count: 9,  pct: 13 },
    { range: '8+ days',     count: 5,  pct: 8 }
  ],
  carrier_approval_rate: [
    { carrier: 'Liberty Mutual', submitted: 42, approved: 38, rate: 90.5, conditional: 4 },
    { carrier: 'CNA',            submitted: 32, approved: 28, rate: 87.5, conditional: 6 },
    { carrier: 'Travelers',      submitted: 26, approved: 23, rate: 88.5, conditional: 2 },
    { carrier: 'Hartford',       submitted: 19, approved: 14, rate: 73.7, conditional: 5 },
    { carrier: 'AMTrust',        submitted: 14, approved: 11, rate: 78.6, conditional: 1 }
  ],
  by_producer: [
    { name: 'Sarah Chen',  bound: 32, ratio: 84.2, avg_time: 5.4 },
    { name: 'Mike Torres', bound: 18, ratio: 72.0, avg_time: 6.8 },
    { name: 'Lisa Park',   bound: 12, ratio: 75.0, avg_time: 7.2 },
    { name: 'David Kim',   bound: 5,  ratio: 62.5, avg_time: 9.1 }
  ],
  by_lob: [
    { lob: 'BOP',                ratio: 84.2, count: 19 },
    { lob: 'Workers Comp',       ratio: 81.0, count: 21 },
    { lob: 'General Liability',  ratio: 76.8, count: 28 },
    { lob: 'Commercial Auto',    ratio: 71.4, count: 14 },
    { lob: 'Cyber',              ratio: 64.3, count: 14 },
    { lob: 'Professional Liab.', ratio: 58.3, count: 12 }
  ],
  by_state: [
    { state: 'CA', bound: 24, ratio: 80.0 },
    { state: 'TX', bound: 16, ratio: 78.0 },
    { state: 'FL', bound: 10, ratio: 71.4 },
    { state: 'CO', bound: 6,  ratio: 75.0 }
  ],
  non_bind_reasons: [
    { reason: 'Client withdrew — chose direct writer', count: 8, pct: 38 },
    { reason: 'Client withdrew — price decision',      count: 5, pct: 24 },
    { reason: 'Carrier declined post-quote',           count: 3, pct: 14 },
    { reason: 'Subjectivity not satisfied',            count: 3, pct: 14 },
    { reason: 'Quote expired before client decision',  count: 2, pct: 10 }
  ]
};

// ─── Client Onboarding ───
export const onboardingKPIs = [
  { label: 'Active Onboardings', value: '14' },
  { label: 'Avg Time to Activate', value: '9.2d' },
  { label: 'Completion Rate', value: '78%' },
  { label: 'Stalled (>14d)', value: '3', warning: true },
  { label: 'Welcome Sent (MTD)', value: '11' },
  { label: '90-Day Retention', value: '94%' }
];

export const onboardingStages = [
  { id: 'prospect',     label: 'Prospect',         order: 1, color: 'gray',  desc: 'Lead captured, not yet engaged' },
  { id: 'lead',         label: 'Lead',             order: 2, color: 'blue',  desc: 'Producer assigned, discovery scheduled' },
  { id: 'application',  label: 'Application',      order: 3, color: 'amber', desc: 'Risk profile + needs analysis in progress' },
  { id: 'documents',    label: 'Documents',        order: 4, color: 'amber', desc: 'Awaiting client documents + e-Sig' },
  { id: 'bound',        label: 'Bound',            order: 5, color: 'blue',  desc: 'Coverage active, policy issuance pending' },
  { id: 'active',       label: 'Active',           order: 6, color: 'green', desc: 'Welcome kit sent, portal activated' },
  { id: 'lost',         label: 'Lost / Withdrawn', order: 7, color: 'red',   desc: 'Did not convert' }
];

export const onboardingSources = ['Website', 'Referral — Client', 'Referral — Centers of Influence', 'Marketing Campaign', 'Cold Outreach', 'Walk-in', 'Existing Carrier Referral'];

export const onboardingsList = [
  { id: 'OB-2026-0042', client: 'NewCo Bakery LLC',          source: 'Referral — Client',  producer: 'Sarah Chen',   stage: 'documents',   started: '2026-04-12', last_activity: '2026-04-17 16:20', days_in_stage: 1, completion_pct: 65, target_lobs: 'BOP, WC',         segment: 'Standard',    contact: 'Patricia Lee — patricia@newcobakery.com', est_premium: 12400,  stalled: false },
  { id: 'OB-2026-0041', client: 'GreenTech Solutions',       source: 'Marketing Campaign', producer: 'Sarah Chen',   stage: 'application', started: '2026-04-08', last_activity: '2026-04-17 11:00', days_in_stage: 4, completion_pct: 42, target_lobs: 'Cyber, Tech E&O', segment: 'High-Value',  contact: 'Marcus Wong — m.wong@greentech.io',         est_premium: 38800,  stalled: false },
  { id: 'OB-2026-0040', client: 'Bayside Restaurant Group',  source: 'Website',            producer: 'Mike Torres',  stage: 'bound',       started: '2026-04-02', last_activity: '2026-04-17 09:30', days_in_stage: 2, completion_pct: 88, target_lobs: 'BOP, WC, Liquor', segment: 'Standard',    contact: 'Jenny Kim — j.kim@bayside.com',             est_premium: 24600,  stalled: false },
  { id: 'OB-2026-0039', client: 'Apex Industries',           source: 'Referral — COI',     producer: 'Mike Torres',  stage: 'active',      started: '2026-03-28', last_activity: '2026-04-15 14:00', days_in_stage: 4, completion_pct: 100, target_lobs: 'GL, BOP',        segment: 'Standard',    contact: 'David Liu — d.liu@apex.com',                est_premium: 92400,  stalled: false },
  { id: 'OB-2026-0038', client: 'StellarHealth Clinic',      source: 'Referral — COI',     producer: 'Lisa Park',    stage: 'application', started: '2026-04-05', last_activity: '2026-04-08 10:00', days_in_stage: 13, completion_pct: 30, target_lobs: 'Professional, BOP', segment: 'High-Value', contact: 'Dr. R. Patel — drp@stellarhealth.org',     est_premium: 64200,  stalled: true },
  { id: 'OB-2026-0037', client: 'Coastal Realty',            source: 'Existing Carrier Referral', producer: 'Mike Torres', stage: 'documents', started: '2026-04-04', last_activity: '2026-04-15 10:00', days_in_stage: 4, completion_pct: 70, target_lobs: 'GL',             segment: 'Standard',    contact: 'Maria Costa — maria@coastalrealty.com',     est_premium: 38900,  stalled: false },
  { id: 'OB-2026-0036', client: 'Delta Logistics',           source: 'Cold Outreach',      producer: 'Sarah Chen',   stage: 'bound',       started: '2026-03-25', last_activity: '2026-04-16 15:00', days_in_stage: 2, completion_pct: 90, target_lobs: 'Commercial Auto', segment: 'High-Value', contact: 'Tom Ramirez — t.ramirez@deltalog.com',      est_premium: 142800, stalled: false },
  { id: 'OB-2026-0035', client: 'Magnolia Construction LLC', source: 'Referral — COI',     producer: 'Sarah Chen',   stage: 'active',      started: '2026-01-08', last_activity: '2026-04-17 11:00', days_in_stage: 92, completion_pct: 100, target_lobs: 'WC, GL',        segment: 'Platinum',    contact: 'Robert Nguyen — robert@magnoliaconstruction.com', est_premium: 178500, stalled: false },
  { id: 'OB-2026-0034', client: 'TechStart Studios',         source: 'Website',            producer: 'Lisa Park',    stage: 'lead',        started: '2026-04-15', last_activity: '2026-04-17 09:00', days_in_stage: 2, completion_pct: 15, target_lobs: 'Cyber, BOP',     segment: 'Standard',    contact: 'Anna Liu — anna@techstart.io',              est_premium: 8400,   stalled: false },
  { id: 'OB-2026-0033', client: 'Mountain View Builders',    source: 'Walk-in',            producer: 'Mike Torres',  stage: 'prospect',    started: '2026-04-17', last_activity: '2026-04-17 14:00', days_in_stage: 1, completion_pct: 5,  target_lobs: 'WC, GL',         segment: 'Standard',    contact: 'Jim Mountain — jim@mvbuilders.com',         est_premium: null,   stalled: false },
  { id: 'OB-2026-0032', client: 'Sunrise Dental Group',      source: 'Marketing Campaign', producer: 'Lisa Park',    stage: 'lost',        started: '2026-03-20', last_activity: '2026-04-10 11:00', days_in_stage: 8, completion_pct: 35, target_lobs: 'Professional',   segment: 'Standard',    contact: 'Dr. K. Patel — drk@sunrise.dental',        est_premium: 24800,  stalled: false, lost_reason: 'Went with competitor — price' },
  { id: 'OB-2026-0031', client: 'BlueSky Consulting',        source: 'Referral — Client',  producer: 'Sarah Chen',   stage: 'lost',        started: '2026-03-10', last_activity: '2026-04-05 09:00', days_in_stage: 13, completion_pct: 50, target_lobs: 'Professional, Cyber', segment: 'Standard', contact: 'Sandra Park — sandra@blueskyc.com',         est_premium: 18200,  stalled: false, lost_reason: 'Stalled — never returned signed app' }
];

export const onboardingDetail = {
  id: 'OB-2026-0042',
  client: 'NewCo Bakery LLC',
  status: 'In Progress — Documents',
  status_color: 'amber',
  stage: 'documents',
  segment: 'Standard',
  source: 'Referral — Client (Apex Industries)',
  producer: 'Sarah Chen',
  csr: 'Lisa Park',
  started: '2026-04-12',
  target_active_date: '2026-04-25',
  days_open: 6,
  est_premium: 12400,
  contact: { name: 'Patricia Lee', title: 'Owner', email: 'patricia@newcobakery.com', phone: '(415) 555-0291' },
  business: {
    legal_name: 'NewCo Bakery LLC',
    dba: 'NewCo Artisan Bakery',
    fein: '88-XXXX918',
    naics: '311811 — Retail Bakeries',
    revenue: '$420,000',
    employees: 6,
    years_in_business: 1,
    address: '142 Mission St, San Francisco, CA 94102',
    locations: 1
  },
  insurance_history: {
    current_carrier: 'None — first commercial policy',
    prior_carrier: null,
    expiration: null,
    losses_5yr: '0 (new business, no history)',
    declinations: 'None'
  },
  target_lobs: ['BOP', 'Workers Comp'],
  checklist: [
    { id: 'CK-1', task: 'Discovery call completed',           owner: 'Producer', status: 'Done',     due: '2026-04-13', done_date: '2026-04-13', auto_check: true },
    { id: 'CK-2', task: 'Risk profile captured',              owner: 'Producer', status: 'Done',     due: '2026-04-14', done_date: '2026-04-14', auto_check: true },
    { id: 'CK-3', task: 'Quote presented to client',          owner: 'Producer', status: 'Done',     due: '2026-04-16', done_date: '2026-04-16', auto_check: true },
    { id: 'CK-4', task: 'Quote selected by client',           owner: 'Client',   status: 'Done',     due: '2026-04-17', done_date: '2026-04-17', auto_check: true },
    { id: 'CK-5', task: 'Application e-signed',               owner: 'Client',   status: 'Sent',     due: '2026-04-19', done_date: null, auto_check: false },
    { id: 'CK-6', task: 'Articles of organization uploaded',  owner: 'Client',   status: 'Pending',  due: '2026-04-19', done_date: null, auto_check: false },
    { id: 'CK-7', task: 'Recent payroll register uploaded',   owner: 'Client',   status: 'Pending',  due: '2026-04-19', done_date: null, auto_check: false },
    { id: 'CK-8', task: 'AML / OFAC compliance check',        owner: 'CSR',      status: 'Pending',  due: '2026-04-20', done_date: null, auto_check: true },
    { id: 'CK-9', task: 'Payment method captured',            owner: 'Producer', status: 'Pending',  due: '2026-04-20', done_date: null, auto_check: false },
    { id: 'CK-10', task: 'Binder issued',                     owner: 'Producer', status: 'Pending',  due: '2026-04-22', done_date: null, auto_check: false },
    { id: 'CK-11', task: 'Welcome packet sent',               owner: 'CSR',      status: 'Pending',  due: '2026-04-22', done_date: null, auto_check: true },
    { id: 'CK-12', task: 'Client portal account created',     owner: 'CSR',      status: 'Pending',  due: '2026-04-22', done_date: null, auto_check: true },
    { id: 'CK-13', task: '30-day policy review scheduled',    owner: 'Producer', status: 'Pending',  due: '2026-05-22', done_date: null, auto_check: false }
  ],
  documents: [
    { name: 'NewCo_Discovery_Notes.pdf',     type: 'Discovery',     status: 'Received', uploaded: '2026-04-13', by: 'Sarah Chen' },
    { name: 'NewCo_Quote_v1.pdf',            type: 'Quote',         status: 'Received', uploaded: '2026-04-16', by: 'System' },
    { name: 'BOP_Application_Signed.pdf',    type: 'Application',   status: 'Sent — awaiting e-Sig', uploaded: '2026-04-17', by: 'Sarah Chen' },
    { name: 'Articles_of_Organization.pdf',  type: 'Legal',         status: 'Outstanding', uploaded: null, by: null },
    { name: 'Payroll_Register_Q1.pdf',       type: 'Financial',     status: 'Outstanding', uploaded: null, by: null }
  ],
  esignatures: [
    { envelope: 'ELG-90112', doc: 'BOP Application + Authorization', sent: '2026-04-17 14:42', viewed: '2026-04-17 16:20', signed: null, status: 'Viewed' }
  ],
  timeline: [
    { when: '2026-04-12 09:00', actor: 'Apex Industries (Referral)', action: 'Lead referred to Bridgepoint',                details: 'Source: existing client referral' },
    { when: '2026-04-12 09:30', actor: 'System',                      action: 'Prospect record created · OB-2026-0042',     details: 'Auto-assigned to Sarah Chen' },
    { when: '2026-04-13 10:30', actor: 'Sarah Chen',                  action: 'Discovery call completed (45 min)',          details: 'Captured exposure: 6 employees, $420k revenue, retail bakery' },
    { when: '2026-04-14 14:00', actor: 'Sarah Chen',                  action: 'Risk profile saved',                         details: 'BOP + WC identified as primary needs' },
    { when: '2026-04-15 11:00', actor: 'System',                      action: 'Quote Q-2026-0177 created',                  details: 'Submitted to 3 carriers via comparative rater' },
    { when: '2026-04-16 09:00', actor: 'Sarah Chen',                  action: 'Quote presented to Patricia Lee',            details: 'Recommended: Hartford BOP $12,400 + WC TBD' },
    { when: '2026-04-17 11:00', actor: 'Patricia Lee',                action: 'Quote accepted',                              details: 'Bind requested for May 15 effective' },
    { when: '2026-04-17 14:42', actor: 'Sarah Chen',                  action: 'e-Signature envelope sent',                  details: 'DocuSign — application + authorization (5 docs)' },
    { when: '2026-04-17 16:20', actor: 'Patricia Lee',                action: 'Viewed e-Sig envelope',                      details: 'Awaiting signature' }
  ],
  tasks: [
    { task: 'Send Welcome Email & Portal Invite',  due: '2026-04-22', auto: true, assigned: 'CSR', status: 'Pending' },
    { task: 'Schedule 30-Day Policy Review',        due: '2026-05-22', auto: true, assigned: 'Producer', status: 'Pending' },
    { task: 'Request remaining documents',          due: '2026-04-19', auto: true, assigned: 'CSR', status: 'In Progress' },
    { task: 'Follow up on Binder Payment',          due: '2026-04-22', auto: true, assigned: 'CSR', status: 'Pending' },
    { task: 'AML / OFAC compliance verification',   due: '2026-04-20', auto: true, assigned: 'Compliance', status: 'In Progress' }
  ],
  welcome_journey: {
    segment_template: 'Standard SMB Welcome Journey',
    touchpoints: [
      { day: 0, action: 'Welcome email + portal invite (auto)' },
      { day: 1, action: 'Welcome video from agency principal' },
      { day: 3, action: 'Producer welcome call' },
      { day: 7, action: 'Coverage walkthrough call (optional)' },
      { day: 30, action: 'Policy review meeting' },
      { day: 90, action: 'Satisfaction survey + cross-sell check' }
    ]
  }
};

export const onboardingDocChecklists = {
  BOP: ['Articles of Incorporation/Organization', 'Last 12-month payroll', 'Loss runs (if prior carrier)', 'Photos of premises', 'Lease agreement (if applicable)'],
  WC: ['Articles of Incorporation/Organization', 'Payroll by class code', 'Loss runs (5 years)', 'OSHA 300 logs', 'Safety program documentation'],
  GL: ['Articles of Incorporation/Organization', 'Loss runs (5 years)', 'Financial statements', 'Contracts/MSAs (sample)'],
  'Commercial Auto': ['Driver list with MVR', 'Vehicle schedule with VINs', 'Loss runs (5 years)', 'Operating radius'],
  Cyber: ['Network architecture overview', 'Data classification', 'Incident response plan', 'Last security audit / pen test'],
  'Professional Liability': ['Articles of Incorporation/Organization', 'CV/credentials of key staff', 'Loss runs (10 years)', 'Engagement letter samples']
};

export const onboardingAnalytics = {
  completion_funnel: [
    { stage: 'Prospect',    count: 84 },
    { stage: 'Lead',        count: 68 },
    { stage: 'Application', count: 52 },
    { stage: 'Documents',   count: 41 },
    { stage: 'Bound',       count: 38 },
    { stage: 'Active',      count: 36 }
  ],
  avg_time_per_stage: [
    { stage: 'Prospect → Lead',         days: 1.4, target: 2 },
    { stage: 'Lead → Application',      days: 2.8, target: 3 },
    { stage: 'Application → Documents', days: 1.9, target: 2 },
    { stage: 'Documents → Bound',       days: 2.6, target: 3 },
    { stage: 'Bound → Active',          days: 0.5, target: 1 }
  ],
  drop_off_reasons: [
    { reason: 'Price — went with competitor',     count: 11, pct: 32 },
    { reason: 'Stalled — client never responded', count: 8,  pct: 24 },
    { reason: 'Coverage gap not addressable',     count: 5,  pct: 15 },
    { reason: 'Missing documents — gave up',      count: 5,  pct: 15 },
    { reason: 'Carrier declined',                 count: 3,  pct: 9 },
    { reason: 'Decided to self-insure',           count: 2,  pct: 5 }
  ],
  conversion_by_source: [
    { source: 'Referral — Client',        leads: 42, converted: 36, rate: 85.7 },
    { source: 'Referral — COI',           leads: 28, converted: 22, rate: 78.6 },
    { source: 'Existing Carrier Referral', leads: 16, converted: 12, rate: 75.0 },
    { source: 'Website',                  leads: 38, converted: 18, rate: 47.4 },
    { source: 'Marketing Campaign',       leads: 24, converted: 9,  rate: 37.5 },
    { source: 'Cold Outreach',            leads: 18, converted: 4,  rate: 22.2 },
    { source: 'Walk-in',                  leads: 8,  converted: 5,  rate: 62.5 }
  ],
  conversion_by_producer: [
    { name: 'Sarah Chen',  leads: 48, converted: 38, rate: 79.2 },
    { name: 'Mike Torres', leads: 36, converted: 26, rate: 72.2 },
    { name: 'Lisa Park',   leads: 31, converted: 23, rate: 74.2 },
    { name: 'David Kim',   leads: 22, converted: 14, rate: 63.6 }
  ],
  retention_90d: { onboarded: 124, retained_90d: 117, rate: 94.4 },
  avg_time_to_onboard: 9.2,
  target_time: 14
};

// ─── Carrier Management (Broker side) ───
export const brokerCarriersKPIs = [
  { label: 'Active Carriers', value: '23' },
  { label: 'Tier 1 Partners', value: '6' },
  { label: 'Real-time API', value: '14' },
  { label: 'Avg Carrier Rating', value: '4.2★' },
  { label: 'YTD Premium Placed', value: '$8.42M' },
  { label: 'Pending Appetite Alerts', value: '3', warning: true }
];

export const carrierTiers = ['Tier 1 — Strategic', 'Tier 2 — Standard', 'Tier 3 — Specialty', 'Tier 4 — Restricted'];
export const carrierMethods = ['Real-time API', 'IVANS', 'SFTP', 'Email', 'Carrier Portal'];

export const brokerCarriersList = [
  { id: 'CAR-001', name: 'Liberty Mutual', legal_name: 'Liberty Mutual Insurance Co.', code: 'LIB', naic: '23035', tier: 'Tier 1 — Strategic', am_best: 'A', appointment: 'Active', appointed_date: '2018-03-12', renewal_date: '2027-03-12', integration: 'Real-time API', api_health: 99.4, ivans: true, comp_rater: true, sso: true, primary_lobs: ['Workers Comp','GL','Professional','BOP'], states: 50, ytd_premium: 2840000, ytd_policies: 142, hit_ratio: 50.0, bind_ratio: 76.1, avg_quote_hours: 4.2, claims_score: 4.5, payment_score: 4.7, overall_rating: 4.6, status: 'Healthy', statusColor: 'green', appetite_state: 'Aggressive', last_qbr: '2026-02-14', open_issues: 0 },
  { id: 'CAR-002', name: 'CNA',            legal_name: 'CNA Financial Corporation',    code: 'CNA', naic: '20443', tier: 'Tier 1 — Strategic', am_best: 'A',  appointment: 'Active', appointed_date: '2017-08-22', renewal_date: '2026-08-22', integration: 'Real-time API', api_health: 98.7, ivans: true, comp_rater: true, sso: true, primary_lobs: ['GL','Cyber','Professional'], states: 48, ytd_premium: 2568000, ytd_policies: 118, hit_ratio: 40.7, bind_ratio: 87.5, avg_quote_hours: 6.8, claims_score: 4.3, payment_score: 4.5, overall_rating: 4.4, status: 'Healthy', statusColor: 'green', appetite_state: 'Selective', last_qbr: '2026-01-22', open_issues: 1 },
  { id: 'CAR-003', name: 'Travelers',      legal_name: 'The Travelers Companies, Inc.', code: 'TRV', naic: '25658', tier: 'Tier 1 — Strategic', am_best: 'A++', appointment: 'Active', appointed_date: '2016-04-11', renewal_date: '2027-04-11', integration: 'Real-time API', api_health: 97.2, ivans: true, comp_rater: true, sso: true, primary_lobs: ['Commercial Auto','Property','BOP'], states: 50, ytd_premium: 1984000, ytd_policies: 96, hit_ratio: 39.6, bind_ratio: 88.5, avg_quote_hours: 3.8, claims_score: 4.7, payment_score: 4.6, overall_rating: 4.7, status: 'Healthy', statusColor: 'green', appetite_state: 'Aggressive', last_qbr: '2026-03-08', open_issues: 0 },
  { id: 'CAR-004', name: 'Hartford',       legal_name: 'The Hartford Financial Services Group', code: 'HTF', naic: '29424', tier: 'Tier 2 — Standard', am_best: 'A+', appointment: 'Active', appointed_date: '2019-09-01', renewal_date: '2026-09-01', integration: 'IVANS', api_health: 92.4, ivans: true, comp_rater: true, sso: false, primary_lobs: ['BOP','Workers Comp','Property'], states: 48, ytd_premium: 1246000, ytd_policies: 84, hit_ratio: 28.6, bind_ratio: 73.7, avg_quote_hours: 12.4, claims_score: 3.8, payment_score: 4.0, overall_rating: 3.9, status: 'Watchlist', statusColor: 'amber', appetite_state: 'Selective', last_qbr: '2025-11-15', open_issues: 3 },
  { id: 'CAR-005', name: 'AMTrust',        legal_name: 'AmTrust Financial Services',    code: 'AMT', naic: '11070', tier: 'Tier 2 — Standard', am_best: 'A-', appointment: 'Active', appointed_date: '2020-06-18', renewal_date: '2027-06-18', integration: 'Email', api_health: 0,    ivans: false, comp_rater: true, sso: false, primary_lobs: ['Workers Comp','GL'], states: 42, ytd_premium: 842000,  ytd_policies: 62, hit_ratio: 29.0, bind_ratio: 78.6, avg_quote_hours: 28.2, claims_score: 3.5, payment_score: 3.4, overall_rating: 3.6, status: 'Watchlist', statusColor: 'amber', appetite_state: 'Selective', last_qbr: '2025-12-10', open_issues: 4 },
  { id: 'CAR-006', name: 'CFC Underwriting', legal_name: 'CFC Underwriting Ltd.',       code: 'CFC', naic: 'AA1234', tier: 'Tier 3 — Specialty', am_best: 'A',  appointment: 'Active', appointed_date: '2021-02-14', renewal_date: '2027-02-14', integration: 'Real-time API', api_health: 96.8, ivans: false, comp_rater: true, sso: true, primary_lobs: ['Cyber','Tech E&O','Professional'], states: 50, ytd_premium: 528000,  ytd_policies: 38, hit_ratio: 36.8, bind_ratio: 82.0, avg_quote_hours: 5.4, claims_score: 4.6, payment_score: 4.4, overall_rating: 4.5, status: 'Healthy', statusColor: 'green', appetite_state: 'Aggressive', last_qbr: '2026-02-28', open_issues: 0 },
  { id: 'CAR-007', name: 'SEMC Insurance Group', legal_name: 'SEMC Insurance Group',     code: 'SEMC', naic: '12345', tier: 'Tier 1 — Strategic', am_best: 'A',  appointment: 'Active', appointed_date: '2015-01-01', renewal_date: '2027-01-01', integration: 'Real-time API', api_health: 99.8, ivans: true, comp_rater: true, sso: true, primary_lobs: ['Workers Comp','GL','BOP'], states: 50, ytd_premium: 3140000, ytd_policies: 198, hit_ratio: 54.2, bind_ratio: 84.3, avg_quote_hours: 2.8, claims_score: 4.6, payment_score: 4.8, overall_rating: 4.8, status: 'Healthy', statusColor: 'green', appetite_state: 'Aggressive', last_qbr: '2026-03-22', open_issues: 0 },
  { id: 'CAR-008', name: 'Berkshire Hathaway', legal_name: 'Berkshire Hathaway Specialty', code: 'BHS', naic: '22357', tier: 'Tier 3 — Specialty', am_best: 'A++', appointment: 'Active', appointed_date: '2022-05-20', renewal_date: '2027-05-20', integration: 'IVANS', api_health: 94.1, ivans: true, comp_rater: false, sso: true, primary_lobs: ['Excess/Umbrella','D&O','Property'], states: 50, ytd_premium: 412000,  ytd_policies: 18, hit_ratio: 48.5, bind_ratio: 81.0, avg_quote_hours: 8.2, claims_score: 4.4, payment_score: 4.5, overall_rating: 4.5, status: 'Healthy', statusColor: 'green', appetite_state: 'Selective', last_qbr: '2026-01-30', open_issues: 1 },
  { id: 'CAR-009', name: 'Nationwide',     legal_name: 'Nationwide Mutual Insurance',    code: 'NWD', naic: '23787', tier: 'Tier 2 — Standard', am_best: 'A+', appointment: 'Active', appointed_date: '2019-11-04', renewal_date: '2026-11-04', integration: 'IVANS', api_health: 91.2, ivans: true, comp_rater: true, sso: false, primary_lobs: ['Personal Auto','Homeowners','BOP'], states: 50, ytd_premium: 684000, ytd_policies: 124, hit_ratio: 41.2, bind_ratio: 75.8, avg_quote_hours: 9.1, claims_score: 4.0, payment_score: 4.1, overall_rating: 4.1, status: 'Healthy', statusColor: 'green', appetite_state: 'Selective', last_qbr: '2025-12-18', open_issues: 1 },
  { id: 'CAR-010', name: 'Markel',         legal_name: 'Markel Specialty',               code: 'MKL', naic: '38970', tier: 'Tier 3 — Specialty', am_best: 'A',  appointment: 'Active', appointed_date: '2020-10-12', renewal_date: '2026-10-12', integration: 'SFTP', api_health: 88.4, ivans: false, comp_rater: false, sso: false, primary_lobs: ['Restaurants','Contractors','Specialty'], states: 38, ytd_premium: 218000, ytd_policies: 24, hit_ratio: 42.1, bind_ratio: 79.0, avg_quote_hours: 18.4, claims_score: 4.2, payment_score: 4.0, overall_rating: 4.1, status: 'Healthy', statusColor: 'green', appetite_state: 'Aggressive', last_qbr: '2026-02-05', open_issues: 0 },
  { id: 'CAR-011', name: 'Zurich North America', legal_name: 'Zurich North America',     code: 'ZUR', naic: '24503', tier: 'Tier 2 — Standard', am_best: 'A+', appointment: 'Active', appointed_date: '2018-08-30', renewal_date: '2026-08-30', integration: 'Real-time API', api_health: 95.7, ivans: true, comp_rater: true, sso: true, primary_lobs: ['Commercial Property','Marine','International'], states: 50, ytd_premium: 392000, ytd_policies: 22, hit_ratio: 38.2, bind_ratio: 76.4, avg_quote_hours: 11.2, claims_score: 4.3, payment_score: 4.2, overall_rating: 4.3, status: 'Healthy', statusColor: 'green', appetite_state: 'Selective', last_qbr: '2026-01-15', open_issues: 1 },
  { id: 'CAR-012', name: 'Old Republic',   legal_name: 'Old Republic General Insurance', code: 'ORI', naic: '24139', tier: 'Tier 4 — Restricted', am_best: 'A+', appointment: 'Suspended', appointed_date: '2019-04-20', renewal_date: '2026-04-20', integration: 'Email', api_health: 0, ivans: false, comp_rater: false, sso: false, primary_lobs: ['Workers Comp','Specialty'], states: 25, ytd_premium: 0, ytd_policies: 0, hit_ratio: 0, bind_ratio: 0, avg_quote_hours: 0, claims_score: 2.1, payment_score: 2.4, overall_rating: 2.3, status: 'Suspended', statusColor: 'red', appetite_state: 'Not Accepting', last_qbr: '2024-08-01', open_issues: 5 }
];

export const brokerCarrierDetail = {
  id: 'CAR-007',
  name: 'SEMC Insurance Group',
  legal_name: 'SEMC Insurance Group',
  code: 'SEMC',
  naic: '12345',
  tier: 'Tier 1 — Strategic',
  am_best: 'A (Excellent)',
  logo: '🛡️',
  website: 'semc-insurance.com',
  primary_phone: '(800) 555-0101',
  primary_email: 'producer@semc-insurance.com',
  appointment: { status: 'Active', appointed: '2015-01-01', renewal: '2027-01-01', producer_count: 4, contract_pdf: 'SEMC_Producer_Agreement_2024.pdf' },
  reps: [
    { name: 'M. Henderson', role: 'Senior Underwriter', email: 'm.henderson@semc.com', phone: '(800) 555-0144', territory: 'CA, TX, NV' },
    { name: 'L. Park',       role: 'Agency Manager',     email: 'l.park@semc.com',       phone: '(800) 555-0188', territory: 'National' },
    { name: 'D. Owens',      role: 'Claims Liaison',     email: 'd.owens@semc.com',      phone: '(800) 555-0212', territory: 'National' }
  ],
  primary_lobs: ['Workers Comp', 'General Liability', 'BOP'],
  secondary_lobs: ['Commercial Auto', 'Umbrella', 'Property'],
  states: ['All 50 states'],
  volume_commitment: { target: '$3.0M', actual: '$3.14M', tier_qualified: 'Platinum (>$2.5M)' },
  commission: {
    new_business_pct: 12.0,
    renewal_pct: 10.0,
    contingent: '3.5% on LTY (≤75% loss ratio)',
    overrides: 'Tier bonus: +0.5% over $3M LTY',
    payment_terms: 'Net 30',
    last_payment: '$73,500 (Q1 contingent)',
    schedule_effective: '2026-01-01'
  },
  integration: {
    method: 'Real-time API',
    api_health: 99.8,
    api_uptime_30d: '99.94%',
    avg_response_ms: 412,
    last_sync: '2 minutes ago',
    ivans: { enabled: true, last_download: '2026-04-18 06:00' },
    comp_rater: { enabled: true, partners: ['EZLynx', 'Bold Penguin', 'PathPoint'] },
    sso: true,
    sso_url: 'https://semc-insurance.com/agent-portal',
    webhooks: ['Quote Status', 'Bind Confirmation', 'Claim FNOL', 'Commission Statement']
  },
  appetite: [
    { lob: 'Workers Comp',            ca: 'Aggressive', tx: 'Aggressive', ny: 'Selective',     fl: 'Aggressive' },
    { lob: 'General Liability',       ca: 'Aggressive', tx: 'Aggressive', ny: 'Aggressive',    fl: 'Selective'  },
    { lob: 'BOP',                     ca: 'Aggressive', tx: 'Aggressive', ny: 'Selective',     fl: 'Aggressive' },
    { lob: 'Commercial Auto',         ca: 'Selective',  tx: 'Selective',  ny: 'Not Accepting', fl: 'Selective'  },
    { lob: 'Cyber',                   ca: 'Not Accepting', tx: 'Not Accepting', ny: 'Not Accepting', fl: 'Not Accepting' },
    { lob: 'Professional Liability',  ca: 'Selective',  tx: 'Selective',  ny: 'Aggressive',    fl: 'Selective'  }
  ],
  appetite_rules: [
    'Workers Comp — accepts payroll up to $25M, EMR ≤ 1.10 preferred',
    'GL — minimum $300k revenue, no high-hazard contractors (roofing, demolition)',
    'BOP — under $1M revenue, low-hazard occupancies',
    'Commercial Auto — fleet 5–25 vehicles, no long-haul trucking',
    'Restricted: Cyber (no appetite), High-rise condos, Coastal property in CAT zones'
  ],
  uw_guidelines: [
    { name: 'WC Underwriting Guide 2026', type: 'PDF', size: '2.4 MB', updated: '2026-01-15' },
    { name: 'GL Class Code Restrictions', type: 'PDF', size: '0.8 MB', updated: '2026-01-15' },
    { name: 'BOP Eligibility Matrix',     type: 'XLS', size: '0.4 MB', updated: '2026-02-01' },
    { name: 'Authority Levels — Producer',type: 'PDF', size: '0.6 MB', updated: '2026-01-15' }
  ],
  authority: { binding_authority: 'Up to $250k premium', referral_required: 'Above $250k or restricted classes' },
  scorecard: {
    submission_to_bind: 84.3,
    avg_quote_hours: 2.8,
    claims_service_quality: 4.6,
    commission_payment_timeliness: 4.8,
    overall: 4.8
  },
  qbrs: [
    { date: '2026-03-22', producer_attendees: 'Sarah Chen, Lisa Park (mgr)', notes: 'Exceeded volume commitment by $140k. Discussed 2026 contingent acceleration.' },
    { date: '2025-12-18', producer_attendees: 'Sarah Chen, Lisa Park (mgr)', notes: 'On track. Reviewed loss ratio trends; on target for full contingent.' },
    { date: '2025-09-12', producer_attendees: 'Sarah Chen, Lisa Park (mgr)', notes: 'Quarterly review — flagged pricing pressure on WC. New rate filing approved CA.' }
  ],
  growth: { last_year_premium: 2480000, current_premium: 3140000, growth_pct: 26.6, last_year_policies: 158, current_policies: 198 },
  issues_log: [],
  preferred_for: ['BOP under $50k premium', 'Workers Comp CA payroll < $25M', 'New construction GL'],
  recent_activity: [
    { when: '2026-04-18 09:24', action: 'API Sync', details: 'Pulled 12 new commission lines for April statement' },
    { when: '2026-04-17 11:42', action: 'Quote Submission', details: 'Q-2026-0182 (Magnolia Construction) — quoted in 38 minutes' },
    { when: '2026-04-15 14:30', action: 'Bind Confirmation', details: 'B-2026-0091 ready to bind on 2026-06-01' },
    { when: '2026-04-12 09:00', action: 'Appetite Update', details: 'WC appetite expanded in NV — payroll cap raised to $30M' }
  ]
};

export const carrierAppetiteAlerts = [
  { type: 'green', carrier: 'Liberty Mutual', message: 'WC appetite expanded — now accepts payroll up to $35M (was $25M)', date: '2026-04-17' },
  { type: 'red',   carrier: 'Hartford',       message: 'Cyber appetite restricted — no new BOP-bundled cyber until further notice', date: '2026-04-15' },
  { type: 'amber', carrier: 'CNA',            message: 'Professional Liability rate increase 8% effective 2026-05-01', date: '2026-04-12' }
];

export const carrierAnalytics = {
  premium_by_carrier: [
    { carrier: 'SEMC',           ytd: 3140000, share: 26 },
    { carrier: 'Liberty Mutual', ytd: 2840000, share: 23 },
    { carrier: 'CNA',            ytd: 2568000, share: 21 },
    { carrier: 'Travelers',      ytd: 1984000, share: 16 },
    { carrier: 'Hartford',       ytd: 1246000, share: 10 },
    { carrier: 'Others',         ytd: 484000,  share: 4 }
  ],
  hit_bind_grid: [
    { carrier: 'SEMC',           hit: 54.2, bind: 84.3 },
    { carrier: 'Liberty Mutual', hit: 50.0, bind: 76.1 },
    { carrier: 'CNA',            hit: 40.7, bind: 87.5 },
    { carrier: 'Travelers',      hit: 39.6, bind: 88.5 },
    { carrier: 'Hartford',       hit: 28.6, bind: 73.7 },
    { carrier: 'AMTrust',        hit: 29.0, bind: 78.6 },
    { carrier: 'CFC',            hit: 36.8, bind: 82.0 }
  ],
  loss_ratio_profitability: [
    { carrier: 'SEMC',           loss_ratio: 58, commission_rate: 12, profitability: 'Excellent' },
    { carrier: 'Liberty Mutual', loss_ratio: 62, commission_rate: 12, profitability: 'Excellent' },
    { carrier: 'Travelers',      loss_ratio: 48, commission_rate: 11.5, profitability: 'Excellent' },
    { carrier: 'CNA',            loss_ratio: 71, commission_rate: 10, profitability: 'Good' },
    { carrier: 'AMTrust',        loss_ratio: 78, commission_rate: 12, profitability: 'Watch' },
    { carrier: 'Hartford',       loss_ratio: 84, commission_rate: 11, profitability: 'Concern' }
  ],
  submission_volume_trend: [
    { month: 'Jan', volume: 124 },
    { month: 'Feb', volume: 142 },
    { month: 'Mar', volume: 168 },
    { month: 'Apr', volume: 184 }
  ],
  response_time_analysis: [
    { carrier: 'SEMC',           avg_hours: 2.8, target: 4 },
    { carrier: 'Travelers',      avg_hours: 3.8, target: 4 },
    { carrier: 'Liberty Mutual', avg_hours: 4.2, target: 4 },
    { carrier: 'CFC',            avg_hours: 5.4, target: 6 },
    { carrier: 'CNA',            avg_hours: 6.8, target: 6 },
    { carrier: 'Hartford',       avg_hours: 12.4, target: 8 },
    { carrier: 'Markel',         avg_hours: 18.4, target: 12 },
    { carrier: 'AMTrust',        avg_hours: 28.2, target: 12 }
  ],
  top_bottom: {
    top: [
      { carrier: 'SEMC',           rating: 4.8 },
      { carrier: 'Travelers',      rating: 4.7 },
      { carrier: 'Liberty Mutual', rating: 4.6 }
    ],
    bottom: [
      { carrier: 'Old Republic',   rating: 2.3 },
      { carrier: 'AMTrust',        rating: 3.6 },
      { carrier: 'Hartford',       rating: 3.9 }
    ]
  }
};

export const esigEnvelopes = [
  { id: 'ELG-88291', binding_id: 'B-2026-0091', client: 'Magnolia Construction LLC', signatory: 'Robert Nguyen', sent: '2026-04-17 11:42', viewed: '2026-04-17 14:18', signed: null, status: 'Viewed', provider: 'DocuSign', expires: '2026-04-24' },
  { id: 'ELG-88290', binding_id: 'B-2026-0086', client: 'Ridge Builders',            signatory: 'Tom Reynolds', sent: '2026-04-17 09:15', viewed: '2026-04-17 10:02', signed: null, status: 'Viewed', provider: 'DocuSign', expires: '2026-04-24' },
  { id: 'ELG-88289', binding_id: 'B-2026-0089', client: 'Coastal Realty',            signatory: 'Maria Costa',  sent: '2026-04-15 16:00', viewed: '2026-04-16 09:18', signed: '2026-04-16 09:24', status: 'Signed', provider: 'DocuSign', expires: '2026-04-22' },
  { id: 'ELG-88288', binding_id: 'B-2026-0087', client: 'Blue Ridge Supplies',       signatory: 'David Kim',    sent: '2026-04-10 11:00', viewed: '2026-04-10 14:18', signed: '2026-04-10 14:21', status: 'Signed', provider: 'DocuSign', expires: '2026-04-17' },
  { id: 'ELG-88287', binding_id: 'B-2026-0083', client: 'TechCorp Inc',              signatory: 'Jenna Wu',     sent: '2026-04-12 09:30', viewed: '2026-04-12 10:00', signed: '2026-04-12 10:14', status: 'Signed', provider: 'DocuSign', expires: '2026-04-19' }
];

export const brokerPoliciesKPIs = [
  { label: 'Active Policies', value: '847' },
  { label: 'Total Premium', value: '$14.2M' },
  { label: 'Endorsements in Progress', value: '4' }
];

export const brokerRenewalsKPIs = [
  { label: 'Expiring ≤ 30 Days', value: '12', warning: true },
  { label: 'Expiring ≤ 60 Days', value: '28' },
  { label: 'Expiring ≤ 90 Days', value: '47' },
  { label: 'Pipeline Value', value: '$4.82M' },
  { label: 'Retention Rate (YTD)', value: '91.4%' },
  { label: 'Avg Rate Increase', value: '+4.2%' }
];

export const renewalStages = [
  { id: 'early',    label: '120-day Early Alert',   range: '90–120d',   color: 'blue'  },
  { id: 'campaign', label: '90-day Campaign',       range: '60–90d',    color: 'blue'  },
  { id: 'market',   label: '60-day Remarketing',    range: '30–60d',    color: 'amber' },
  { id: 'final',    label: '30-day Final Review',   range: '0–30d',     color: 'red'   },
  { id: 'closed',   label: 'Closed (Won / Lost)',   range: 'Past',      color: 'green' }
];

export const renewalsList = [
  // 30-day final
  { id: 'REN-2026-101', client: 'Magnolia Construction LLC', policy_id: 'SEMC-WC-2025-48821', lob: 'WC + GL', carrier: 'SEMC / Liberty Mutual', expiry: '2026-05-15', days: 27, stage: 'final', current_premium: 170000, projected: 178500, delta_pct: 5.0, retention_score: 92, retention_tier: 'High', status: 'Quoted', statusColor: 'green', producer: 'Sarah Chen', strategy: 'Bind incumbent', open_claims: 1, tier: 'Platinum' },
  { id: 'REN-2026-102', client: 'Apex Industries',           policy_id: 'CNA-GL-2025-33102',    lob: 'BOP',      carrier: 'CNA',                    expiry: '2026-05-22', days: 34, stage: 'final', current_premium: 92400,  projected: 98200,  delta_pct: 6.3, retention_score: 78, retention_tier: 'Medium', status: 'Remarketing', statusColor: 'amber', producer: 'Mike Torres', strategy: 'Remarket 5 carriers', open_claims: 0, tier: 'Gold' },
  { id: 'REN-2026-103', client: 'Harbor Foods',              policy_id: 'HTF-BOP-2025-90112',   lob: 'BOP + WC', carrier: 'Hartford',               expiry: '2026-05-18', days: 30, stage: 'final', current_premium: 76500,  projected: 97200,  delta_pct: 27.1, retention_score: 45, retention_tier: 'At Risk', status: 'Client Decision', statusColor: 'red', producer: 'Sarah Chen', strategy: 'Escalated — CAT claim impact', open_claims: 1, tier: 'Silver' },
  // 60-day remarketing
  { id: 'REN-2026-104', client: 'Ridge Builders',            policy_id: 'SEMC-WC-2025-44821',   lob: 'WC',       carrier: 'AMTrust',                expiry: '2026-05-30', days: 42, stage: 'market', current_premium: 93250,  projected: 96000,  delta_pct: 2.9, retention_score: 84, retention_tier: 'High', status: 'In Market', statusColor: 'amber', producer: 'Mike Torres', strategy: 'Remarket 7 carriers', open_claims: 0, tier: 'Gold' },
  { id: 'REN-2026-105', client: 'Coastal Realty',            policy_id: 'AMT-GL-2026-11092',    lob: 'GL',       carrier: 'AMTrust',                expiry: '2026-06-14', days: 57, stage: 'market', current_premium: 38900,  projected: 41500,  delta_pct: 6.7, retention_score: 88, retention_tier: 'High', status: 'Proposal Ready', statusColor: 'blue', producer: 'Mike Torres', strategy: 'Present incumbent', open_claims: 0, tier: 'Silver' },
  { id: 'REN-2026-106', client: 'TechCorp Inc',              policy_id: 'CNA-CYB-2026-88102',   lob: 'Cyber',    carrier: 'CNA',                    expiry: '2026-06-20', days: 63, stage: 'market', current_premium: 256100, projected: 322000, delta_pct: 25.7, retention_score: 61, retention_tier: 'Medium', status: 'In Market', statusColor: 'amber', producer: 'Sarah Chen', strategy: 'Remarket — hardening market', open_claims: 1, tier: 'Platinum' },
  // 90-day campaign
  { id: 'REN-2026-107', client: 'Delta Logistics',           policy_id: 'TRV-AUTO-2026-11223',  lob: 'Commercial Auto', carrier: 'Travelers',       expiry: '2026-07-05', days: 78, stage: 'campaign', current_premium: 142800, projected: 149800, delta_pct: 4.9, retention_score: 87, retention_tier: 'High', status: 'Client Notified', statusColor: 'blue', producer: 'Sarah Chen', strategy: 'Telematics discount push', open_claims: 1, tier: 'Gold' },
  { id: 'REN-2026-108', client: 'Summit Medical',            policy_id: 'LIB-PRO-2025-22841',   lob: 'Professional Liability', carrier: 'Liberty Mutual', expiry: '2026-07-12', days: 85, stage: 'campaign', current_premium: 312450, projected: 398000, delta_pct: 27.4, retention_score: 38, retention_tier: 'At Risk', status: 'Remarketing', statusColor: 'red', producer: 'Sarah Chen', strategy: 'High-touch — litigation pending', open_claims: 1, tier: 'Platinum' },
  // 120-day early alert
  { id: 'REN-2026-109', client: 'Valley Logistics',          policy_id: 'CFC-CYB-2025-12098',   lob: 'Cyber',    carrier: 'CFC',                    expiry: '2026-08-01', days: 105, stage: 'early', current_premium: 18500,  projected: 21400, delta_pct: 15.7, retention_score: 72, retention_tier: 'Medium', status: 'Not Started', statusColor: 'gray', producer: 'Mike Torres', strategy: 'Pending kickoff', open_claims: 0, tier: 'Silver' },
  { id: 'REN-2026-110', client: 'Summit Medical',            policy_id: 'LIB-UMB-2025-22861',   lob: 'Umbrella', carrier: 'Liberty Mutual',         expiry: '2026-08-14', days: 118, stage: 'early', current_premium: 42800,  projected: 45200, delta_pct: 5.6, retention_score: 85, retention_tier: 'High', status: 'Not Started', statusColor: 'gray', producer: 'Sarah Chen', strategy: 'Tie-in with PL renewal', open_claims: 0, tier: 'Platinum' },
  // Recently closed (for Win/Loss)
  { id: 'REN-2026-099', client: 'Blue Ridge Supplies',       policy_id: 'CNA-GL-2024-77281',    lob: 'GL',       carrier: 'CNA',                    expiry: '2026-03-31', days: -18, stage: 'closed', current_premium: 54200, projected: 61800, delta_pct: 14.0, retention_score: 58, retention_tier: 'Medium', status: 'Won', statusColor: 'green', producer: 'Sarah Chen', strategy: 'Switched carrier — Travelers', open_claims: 0, tier: 'Silver' },
  { id: 'REN-2026-098', client: 'Peak Fitness Co.',          policy_id: 'HTF-BOP-2024-55104',   lob: 'BOP',       carrier: 'Hartford',               expiry: '2026-03-15', days: -34, stage: 'closed', current_premium: 28400, projected: 34200, delta_pct: 20.4, retention_score: 42, retention_tier: 'At Risk', status: 'Lost', statusColor: 'red', producer: 'Mike Torres', strategy: 'Lost to online aggregator', open_claims: 0, tier: 'Bronze' }
];

export const renewalDetail = {
  id: 'REN-2026-101',
  client: 'Magnolia Construction LLC', client_tier: 'Platinum',
  policy_id: 'SEMC-WC-2025-48821',
  lob: 'Workers Comp + General Liability',
  incumbent_carrier: 'SEMC / Liberty Mutual', producer: 'Sarah Chen',
  expiration: '2026-05-15', days_remaining: 27,
  current_premium: 170000, projected_premium: 178500, delta_pct: 5.0,
  retention_score: 92, retention_tier: 'High',
  retention_factors: [
    { factor: '2 years tenure, on-time payments', impact: '+12', positive: true },
    { factor: 'Low loss ratio (0.58)', impact: '+8', positive: true },
    { factor: 'Multi-policy account (3 LOBs)', impact: '+7', positive: true },
    { factor: 'Active claim CLM-2026-0042', impact: '-5', positive: false },
    { factor: 'Rate increase +5%', impact: '-3', positive: false }
  ],
  exposure_updates: {
    payroll: { was: '$3,150,000', now: '$3,400,000', note: '+8% — new Texas jobsite' },
    employees: { was: 108, now: 120 },
    vehicles: { was: 14, now: 16 },
    locations: { was: 2, now: 3 }
  },
  loss_history: { '5yr_claims': 8, '5yr_paid': '$42,000', open: 1, loss_ratio: '0.58' },
  status: 'Quoted — Pending Client Decision',
  status_color: 'green',
  strategy: 'Bind incumbent renewal; remarket only if client requests. Cross-sell opportunity: Cyber Liability.',
  timeline: [
    { when: '2026-01-15', actor: 'System',      action: '120-day early alert triggered',   details: 'Renewal opportunity record created' },
    { when: '2026-02-14', actor: 'System',      action: '90-day campaign started',         details: 'Email + SMS sent to client. Activity task auto-created.' },
    { when: '2026-02-20', actor: 'Sarah Chen',  action: 'Kickoff call with Robert Nguyen', details: 'Discussed expansion, updated exposure' },
    { when: '2026-03-10', actor: 'Sarah Chen',  action: 'Submitted to 4 alternate carriers', details: 'CNA, Hartford, Travelers, AMTrust' },
    { when: '2026-03-28', actor: 'System',      action: 'Incumbent quote received',        details: '+5% rate increase; $178,500' },
    { when: '2026-04-05', actor: 'Sarah Chen',  action: 'Renewal proposal sent to client', details: 'PDF delivered via client portal' },
    { when: '2026-04-12', actor: 'Robert Nguyen', action: 'Client viewed proposal',         details: 'Portal activity log' },
    { when: '2026-04-17', actor: 'Sarah Chen',  action: 'Follow-up call logged',           details: 'Client considering; decision expected by 04/22' }
  ],
  carrier_quotes: [
    { carrier: 'SEMC / Liberty Mutual (Incumbent)', premium: 178500, coverage_score: 98, notes: 'Current coverage preserved; +5% rate', recommended: 'Best Value', status: 'Quoted' },
    { carrier: 'CNA',        premium: 184200, coverage_score: 96, notes: 'Slightly broader umbrella; no gaps', recommended: null, status: 'Quoted' },
    { carrier: 'Travelers',  premium: 172800, coverage_score: 92, notes: '$2k deductible vs $1k; higher subjectivities', recommended: 'Lowest Price', status: 'Quoted' },
    { carrier: 'Hartford',   premium: 189400, coverage_score: 99, notes: 'Adds cyber endorsement; broadest', recommended: 'Broadest Coverage', status: 'Quoted' },
    { carrier: 'AMTrust',    premium: null,   coverage_score: 0,  notes: 'Declined — WC exposure outside appetite', recommended: null, status: 'Declined' }
  ],
  proposal: {
    generated: '2026-04-05 10:42',
    delivered: '2026-04-05 10:45 (client portal)',
    viewed: '2026-04-12 14:18',
    signed: null,
    version: 'v1.2'
  },
  win_loss: null,
  cross_sell_flags: ['Cyber Liability', 'Umbrella increase to $5M']
};

export const renewalCarrierComparison = {
  renewal_id: 'REN-2026-101',
  client: 'Magnolia Construction LLC',
  coverages: [
    { name: 'WC Limit per Occurrence', incumbent: '$1M', cna: '$1M', travelers: '$1M', hartford: '$1M' },
    { name: 'GL Aggregate', incumbent: '$2M', cna: '$2M', travelers: '$2M', hartford: '$3M' },
    { name: 'GL Per Occurrence', incumbent: '$1M', cna: '$1M', travelers: '$1M', hartford: '$1M' },
    { name: 'Umbrella Limit', incumbent: '$3M', cna: '$3M', travelers: '$2M', hartford: '$5M' },
    { name: 'Deductible (GL)', incumbent: '$1k', cna: '$1k', travelers: '$2k', hartford: '$1k' },
    { name: 'Cyber Endorsement', incumbent: 'No', cna: 'No', travelers: 'No', hartford: 'Yes' },
    { name: 'Premium', incumbent: '$178,500', cna: '$184,200', travelers: '$172,800', hartford: '$189,400' },
    { name: 'Rate vs Current', incumbent: '+5.0%', cna: '+8.4%', travelers: '+1.6%', hartford: '+11.4%' }
  ],
  recommendation: 'SEMC (Incumbent) — Best Value. Preserves coverage continuity, moderate increase, no gaps.'
};

export const lostRenewalReasons = [
  { reason: 'Price — went to cheaper alternative', count: 8, pct: 31, trend: '+2' },
  { reason: 'Switched to direct writer', count: 5, pct: 19, trend: '0' },
  { reason: 'Coverage needs changed', count: 4, pct: 15, trend: '-1' },
  { reason: 'Business closed / sold', count: 3, pct: 12, trend: '0' },
  { reason: 'Dissatisfied with claims service', count: 3, pct: 12, trend: '+1' },
  { reason: 'Moved to captive / MGA', count: 2, pct: 8, trend: '0' },
  { reason: 'Other', count: 1, pct: 3, trend: '0' }
];

export const renewalAnalytics = {
  retention_trend: [
    { period: 'Q2 2025', rate: 88.2 },
    { period: 'Q3 2025', rate: 89.6 },
    { period: 'Q4 2025', rate: 90.4 },
    { period: 'Q1 2026', rate: 91.4 }
  ],
  retention_by_carrier: [
    { carrier: 'Liberty Mutual', rate: 94.1, count: 52 },
    { carrier: 'CNA',            rate: 90.8, count: 41 },
    { carrier: 'Travelers',      rate: 92.5, count: 38 },
    { carrier: 'Hartford',       rate: 86.3, count: 27 },
    { carrier: 'AMTrust',        rate: 84.0, count: 19 }
  ],
  retention_by_producer: [
    { name: 'Sarah Chen',   rate: 94.8, policies: 68, growth: '+8.2%' },
    { name: 'Mike Torres',  rate: 89.3, policies: 54, growth: '+4.1%' },
    { name: 'Lisa Park',    rate: 91.7, policies: 42, growth: '+5.9%' },
    { name: 'David Kim',    rate: 82.1, policies: 31, growth: '+1.2%' }
  ],
  retention_by_lob: [
    { lob: 'Workers Comp',       rate: 93.2, count: 47 },
    { lob: 'General Liability',  rate: 92.8, count: 58 },
    { lob: 'Commercial Auto',    rate: 88.4, count: 29 },
    { lob: 'BOP',                rate: 87.1, count: 34 },
    { lob: 'Cyber',              rate: 79.5, count: 18 },
    { lob: 'Professional Liab.', rate: 85.3, count: 12 }
  ],
  pipeline_by_stage: [
    { stage: '120-day Early Alert',    count: 19, value: '$1.42M' },
    { stage: '90-day Campaign',        count: 16, value: '$1.18M' },
    { stage: '60-day Remarketing',     count: 14, value: '$1.08M' },
    { stage: '30-day Final Review',    count: 12, value: '$1.14M' }
  ],
  top_producers: [
    { name: 'Sarah Chen',  retention: '94.8%', growth: '+8.2%', score: 96 },
    { name: 'Lisa Park',   retention: '91.7%', growth: '+5.9%', score: 88 },
    { name: 'Mike Torres', retention: '89.3%', growth: '+4.1%', score: 82 }
  ]
};

export const brokerClaimsKPIs = [
  { label: 'Open Claims', value: '24', warning: true },
  { label: 'Total Open Value', value: '$1.24M' },
  { label: 'High-Value (>$50k)', value: '6' },
  { label: 'Avg Cycle Time', value: '38d' },
  { label: 'SLA Breaches', value: '3', warning: true },
  { label: 'Closed This Month', value: '6' }
];

export const claimLossTypes = ['Collision', 'Fire', 'Theft', 'Liability', 'Weather/Storm', 'Water Damage', 'Vandalism', 'Workers Comp Injury', 'Slip & Fall', 'Product Liability', 'Professional Liability', 'Cyber Incident'];
export const claimStatuses = ['New', 'Acknowledged', 'Under Investigation', 'Reserved', 'Payment Processing', 'Closed', 'Denied'];
export const claimDocCategories = ['Photo', 'Police Report', 'Fire Report', 'Invoice', 'Repair Estimate', 'Medical Record', 'Witness Statement', 'Correspondence', 'Other'];

export const brokerClaimsList = [
  {
    id: 'CLM-2026-0042', internal_no: 'CLM-2026-0042', carrier_no: 'LIB-CL-88219',
    client: 'Magnolia Construction LLC', policy_id: 'SEMC-WC-2025-48821', lob: 'Workers Comp',
    loss_date: '2026-04-15', reported_date: '2026-04-15', loss_type: 'Workers Comp Injury',
    location: '4890 Contractor Way, Los Angeles, CA 90001',
    description: 'Electrician fell from ladder at jobsite, fractured wrist. Treated at Cedars-Sinai ER.',
    status: 'Under Investigation', statusColor: 'amber', age_days: 3, sla_due: '+1d',
    reserve: 45000, paid: 2500, incurred: 47500,
    adjuster: 'J. Martinez — Liberty Mutual', producer: 'Sarah Chen',
    fraud_flag: false, injury_flag: true, third_party_flag: false, cat_flag: false
  },
  {
    id: 'CLM-2026-0041', internal_no: 'CLM-2026-0041', carrier_no: 'CNA-CL-77102',
    client: 'Apex Industries', policy_id: 'CNA-GL-2025-33102', lob: 'General Liability',
    loss_date: '2025-11-02', reported_date: '2025-11-04', loss_type: 'Slip & Fall',
    location: 'Apex HQ Lobby, Dallas TX',
    description: 'Visitor slipped on wet floor, claims back injury.',
    status: 'Payment Processing', statusColor: 'blue', age_days: 168, sla_due: 'OK',
    reserve: 30000, paid: 18000, incurred: 30000,
    adjuster: 'R. Patel — CNA', producer: 'Mike Torres',
    fraud_flag: false, injury_flag: true, third_party_flag: true, cat_flag: false
  },
  {
    id: 'CLM-2026-0040', internal_no: 'CLM-2026-0040', carrier_no: 'TRV-CL-55441',
    client: 'Delta Logistics', policy_id: 'TRV-AUTO-2026-11223', lob: 'Commercial Auto',
    loss_date: '2026-03-22', reported_date: '2026-03-22', loss_type: 'Collision',
    location: 'I-35 Mile 220, Austin TX',
    description: 'Delivery truck rear-ended passenger vehicle. No injuries reported.',
    status: 'Reserved', statusColor: 'amber', age_days: 27, sla_due: 'OK',
    reserve: 28500, paid: 0, incurred: 28500,
    adjuster: 'L. Kim — Travelers', producer: 'Sarah Chen',
    fraud_flag: false, injury_flag: false, third_party_flag: true, cat_flag: false
  },
  {
    id: 'CLM-2026-0039', internal_no: 'CLM-2026-0039', carrier_no: 'HTF-CL-33290',
    client: 'Harbor Foods', policy_id: 'HTF-BOP-2025-90112', lob: 'BOP',
    loss_date: '2026-02-28', reported_date: '2026-03-01', loss_type: 'Fire',
    location: 'Harbor Foods Warehouse, Oakland CA',
    description: 'Electrical fire in refrigeration unit. Significant inventory loss.',
    status: 'Under Investigation', statusColor: 'red', age_days: 49, sla_due: 'OVERDUE 2d',
    reserve: 285000, paid: 50000, incurred: 335000,
    adjuster: 'M. O\'Brien — Hartford', producer: 'Sarah Chen',
    fraud_flag: false, injury_flag: false, third_party_flag: false, cat_flag: true
  },
  {
    id: 'CLM-2026-0038', internal_no: 'CLM-2026-0038', carrier_no: 'SEMC-CL-44821',
    client: 'Ridge Builders', policy_id: 'SEMC-WC-2025-44821', lob: 'Workers Comp',
    loss_date: '2026-01-12', reported_date: '2026-01-12', loss_type: 'Workers Comp Injury',
    location: 'Ridge Jobsite, San Diego CA',
    description: 'Carpenter lacerated hand using power saw. Returned to light duty.',
    status: 'Closed', statusColor: 'green', age_days: 97, sla_due: 'Closed',
    reserve: 0, paid: 8200, incurred: 8200,
    adjuster: 'J. Martinez — Liberty Mutual', producer: 'Mike Torres',
    fraud_flag: false, injury_flag: true, third_party_flag: false, cat_flag: false
  },
  {
    id: 'CLM-2026-0037', internal_no: 'CLM-2026-0037', carrier_no: 'CNA-CL-66702',
    client: 'TechCorp Inc', policy_id: 'CNA-CYB-2026-88102', lob: 'Cyber',
    loss_date: '2026-03-30', reported_date: '2026-03-31', loss_type: 'Cyber Incident',
    location: 'Remote — All Offices',
    description: 'Ransomware event. Systems offline 3 days. Forensics engaged.',
    status: 'Acknowledged', statusColor: 'amber', age_days: 19, sla_due: '+5d',
    reserve: 175000, paid: 0, incurred: 175000,
    adjuster: 'TPA: Crawford & Co.', producer: 'Sarah Chen',
    fraud_flag: false, injury_flag: false, third_party_flag: false, cat_flag: true
  },
  {
    id: 'CLM-2026-0036', internal_no: 'CLM-2026-0036', carrier_no: 'AMT-CL-11092',
    client: 'Coastal Realty', policy_id: 'AMT-GL-2026-11092', lob: 'General Liability',
    loss_date: '2026-04-02', reported_date: '2026-04-03', loss_type: 'Theft',
    location: 'Coastal Branch, Miami FL',
    description: 'Break-in at branch office. Electronics stolen.',
    status: 'Denied', statusColor: 'red', age_days: 16, sla_due: 'Denied',
    reserve: 0, paid: 0, incurred: 0,
    adjuster: 'K. Nguyen — AMTrust', producer: 'Mike Torres',
    fraud_flag: true, injury_flag: false, third_party_flag: false, cat_flag: false
  },
  {
    id: 'CLM-2026-0035', internal_no: 'CLM-2026-0035', carrier_no: 'LIB-CL-22841',
    client: 'Summit Medical', policy_id: 'LIB-PRO-2025-22841', lob: 'Professional Liability',
    loss_date: '2025-12-15', reported_date: '2025-12-20', loss_type: 'Professional Liability',
    location: 'Summit Medical, Denver CO',
    description: 'Patient alleges delayed diagnosis. In litigation.',
    status: 'Under Investigation', statusColor: 'red', age_days: 124, sla_due: 'OVERDUE 14d',
    reserve: 450000, paid: 22000, incurred: 472000,
    adjuster: 'Counsel: Baker & Hostetler', producer: 'Sarah Chen',
    fraud_flag: false, injury_flag: true, third_party_flag: true, cat_flag: false
  }
];

export const claimDetail = {
  id: 'CLM-2026-0042',
  internal_no: 'CLM-2026-0042', carrier_no: 'LIB-CL-88219',
  client: 'Magnolia Construction LLC', client_contact: 'Robert Nguyen — (916) 555-0182',
  policy_id: 'SEMC-WC-2025-48821', lob: 'Workers Comp', carrier: 'Liberty Mutual (via SEMC)',
  coverage_triggered: 'Employer Liability — Part B / Bodily Injury by Accident',
  loss_date: '2026-04-15 09:42 AM', reported_date: '2026-04-15 10:18 AM',
  loss_type: 'Workers Comp Injury',
  location: '4890 Contractor Way, Los Angeles, CA 90001',
  description: 'Electrician employee, 14 years tenure, fell approx. 6ft from ladder during rough-in work. Sustained distal radius fracture to right wrist. Transported via ambulance to Cedars-Sinai ER. Treated, splinted, discharged. Follow-up with orthopedic scheduled. Witness: foreman J. Garcia.',
  status: 'Under Investigation', statusColor: 'amber',
  sla_acknowledge_due: '2026-04-15 12:18 PM (met)', sla_next_action_due: '2026-04-19',
  age_days: 3, fraud_flag: false, injury_flag: true, third_party_flag: false, cat_flag: false,
  adjuster: { name: 'J. Martinez', company: 'Liberty Mutual', phone: '(800) 555-0199', email: 'j.martinez@libertymutual.com' },
  producer: 'Sarah Chen',
  police_report_no: 'N/A', fire_report_no: 'N/A',
  reserves_history: [
    { date: '2026-04-15', type: 'Initial', amount: 25000, set_by: 'Broker FNOL' },
    { date: '2026-04-16', type: 'Revised', amount: 45000, set_by: 'J. Martinez (Carrier)' }
  ],
  parties: [
    { role: 'Claimant', name: 'Miguel Alvarez', relation: 'Employee', contact: '(323) 555-0121', notes: '14yr tenure, right-hand dominant' },
    { role: 'Witness', name: 'J. Garcia', relation: 'Foreman', contact: '(323) 555-0144', notes: 'On-site at time of incident' },
    { role: 'Treating Provider', name: 'Cedars-Sinai ER', relation: 'Hospital', contact: '(310) 423-3277', notes: 'Initial treatment, discharged same day' }
  ],
  documents: [
    { name: 'ER_Discharge_Summary.pdf', category: 'Medical Record', size: '0.6 MB', by: 'Sarah Chen', date: 'Apr 15', pushed_to_carrier: true },
    { name: 'Jobsite_Photo_Ladder.jpg', category: 'Photo', size: '3.2 MB', by: 'Client Portal', date: 'Apr 15', pushed_to_carrier: true },
    { name: 'Jobsite_Photo_Scene2.jpg', category: 'Photo', size: '2.8 MB', by: 'Client Portal', date: 'Apr 15', pushed_to_carrier: true },
    { name: 'Witness_Statement_Garcia.pdf', category: 'Witness Statement', size: '0.2 MB', by: 'Sarah Chen', date: 'Apr 16', pushed_to_carrier: true },
    { name: 'OSHA_300_Entry.pdf', category: 'Other', size: '0.1 MB', by: 'Client Portal', date: 'Apr 16', pushed_to_carrier: false },
    { name: 'Initial_Repair_Estimate.pdf', category: 'Repair Estimate', size: '0.4 MB', by: 'Sarah Chen', date: 'Apr 17', pushed_to_carrier: false }
  ],
  timeline: [
    { when: '2026-04-15 10:18 AM', actor: 'Robert Nguyen (Client)', source: 'Client Portal', action: 'FNOL submitted', details: 'Initial report with 2 photos attached' },
    { when: '2026-04-15 10:22 AM', actor: 'System', source: 'Automation', action: 'Auto-acknowledge sent to client', details: 'SLA clock started (2-hour acknowledge window)' },
    { when: '2026-04-15 10:35 AM', actor: 'Sarah Chen (Broker)', source: 'Broker Portal', action: 'Submitted to carrier (Liberty Mutual API)', details: 'Carrier claim # LIB-CL-88219 assigned' },
    { when: '2026-04-15 11:40 AM', actor: 'J. Martinez (Adjuster)', source: 'Carrier Sync', action: 'Claim acknowledged', details: 'Adjuster assigned, initial reserve $25k' },
    { when: '2026-04-16 09:05 AM', actor: 'Sarah Chen (Broker)', source: 'Broker Portal', action: 'Witness statement uploaded', details: 'Foreman J. Garcia on-scene account' },
    { when: '2026-04-16 02:14 PM', actor: 'J. Martinez (Adjuster)', source: 'Carrier Sync', action: 'Reserve revised to $45,000', details: 'Based on injury severity and wage continuation' },
    { when: '2026-04-17 11:00 AM', actor: 'Sarah Chen (Broker)', source: 'Broker Portal', action: 'Client update call logged', details: 'Robert Nguyen informed of progress; return-to-work timeline discussed' },
    { when: '2026-04-18 08:30 AM', actor: 'System', source: 'Automation', action: 'Task auto-created: Request medical authorization', details: 'Due Apr 20' }
  ],
  payments: [
    { date: '2026-04-15', type: 'Medical — ER', amount: 2500, payee: 'Cedars-Sinai', status: 'Paid' }
  ],
  recoveries: [],
  notes: [
    { when: '2026-04-17 11:05 AM', author: 'Sarah Chen', visibility: 'Internal', text: 'Client cooperative. Ensure OSHA 300 logged before Apr 22 deadline.' },
    { when: '2026-04-16 03:20 PM', author: 'Sarah Chen', visibility: 'Client-Visible', text: 'Carrier has assigned your claim to adjuster J. Martinez. Initial reserve set; expect contact within 48 hours.' }
  ],
  tasks: [
    { id: 'T-1', title: 'Request medical authorization from claimant', due: '2026-04-20', status: 'Open', assigned: 'Sarah Chen' },
    { id: 'T-2', title: 'Follow up with adjuster on return-to-work plan', due: '2026-04-22', status: 'Open', assigned: 'Sarah Chen' },
    { id: 'T-3', title: 'Confirm OSHA 300 log entry', due: '2026-04-22', status: 'Open', assigned: 'Client' }
  ],
  carrier_messages: [
    { when: '2026-04-15 11:40 AM', from: 'J. Martinez', body: 'Received. Assigning nurse case manager today.' },
    { when: '2026-04-16 02:14 PM', from: 'J. Martinez', body: 'Reserve increased to $45k. Please confirm wage records.' }
  ]
};

export const claimsAnalytics = {
  aging_buckets: [
    { range: '0–7 days', count: 6, value: '$142k', pct: 20 },
    { range: '8–30 days', count: 9, value: '$388k', pct: 30 },
    { range: '31–60 days', count: 5, value: '$295k', pct: 22 },
    { range: '61–90 days', count: 2, value: '$168k', pct: 13 },
    { range: '90+ days', count: 2, value: '$247k', pct: 15 }
  ],
  loss_ratio_by_carrier: [
    { carrier: 'Liberty Mutual', ratio: 62.4, premium: '$2.1M', losses: '$1.31M' },
    { carrier: 'CNA', ratio: 71.8, premium: '$1.4M', losses: '$1.00M' },
    { carrier: 'Travelers', ratio: 48.2, premium: '$980k', losses: '$472k' },
    { carrier: 'Hartford', ratio: 84.1, premium: '$620k', losses: '$521k' },
    { carrier: 'AMTrust', ratio: 55.9, premium: '$410k', losses: '$229k' }
  ],
  cycle_time_by_lob: [
    { lob: 'Workers Comp', avg_days: 42, target: 45 },
    { lob: 'General Liability', avg_days: 58, target: 60 },
    { lob: 'Commercial Auto', avg_days: 24, target: 30 },
    { lob: 'BOP', avg_days: 49, target: 45 },
    { lob: 'Professional Liability', avg_days: 118, target: 90 }
  ],
  claim_type_frequency: [
    { type: 'Workers Comp Injury', count: 12, pct: 33 },
    { type: 'Collision', count: 7, pct: 19 },
    { type: 'Slip & Fall', count: 5, pct: 14 },
    { type: 'Fire', count: 3, pct: 8 },
    { type: 'Theft', count: 3, pct: 8 },
    { type: 'Cyber Incident', count: 2, pct: 6 },
    { type: 'Other', count: 4, pct: 12 }
  ],
  claims_by_state: [
    { state: 'CA', count: 14, value: '$612k' },
    { state: 'TX', count: 9, value: '$344k' },
    { state: 'FL', count: 4, value: '$98k' },
    { state: 'CO', count: 3, value: '$472k' },
    { state: 'NY', count: 2, value: '$64k' }
  ],
  high_value_claims: [
    { id: 'CLM-2026-0035', client: 'Summit Medical', incurred: '$472k', status: 'Under Investigation' },
    { id: 'CLM-2026-0039', client: 'Harbor Foods', incurred: '$335k', status: 'Under Investigation' },
    { id: 'CLM-2026-0037', client: 'TechCorp Inc', incurred: '$175k', status: 'Acknowledged' }
  ]
};

export const brokerClientsKPIs = [
  { label: 'Total Clients', value: '127' },
  { label: 'New This Month', value: '8' },
  { label: 'Retention Rate', value: '94%' }
];

export const brokerClients = [
  { name: 'Magnolia Constr', policies: 3, carrier: 'SEMC / Liberty Mutual', expDate: '2026-06-01', premium: '$184,700', status: 'Active', statusColor: 'green' },
  { name: 'Apex Industries', policies: 2, carrier: 'CNA', expDate: '2026-04-12', premium: '$92,400', status: 'Active', statusColor: 'green' },
  { name: 'TechCorp Inc', policies: 4, carrier: 'Liberty Mutual', expDate: '2026-07-22', premium: '$256,100', status: 'Active', statusColor: 'green' },
  { name: 'Coastal Realty', policies: 1, carrier: 'AMTrust', expDate: '2026-05-14', premium: '$38,900', status: 'Pending', statusColor: 'amber' },
  { name: 'Ridge Builders', policies: 2, carrier: 'AMTrust', expDate: '2026-05-30', premium: '$93,250', status: 'Renewal Due', statusColor: 'amber' },
  { name: 'Delta Logistics', policies: 3, carrier: 'Travelers', expDate: '2026-08-05', premium: '$142,800', status: 'Active', statusColor: 'green' },
  { name: 'Harbor Foods', policies: 2, carrier: 'Hartford', expDate: '2026-03-18', premium: '$76,500', status: 'Expiring', statusColor: 'red' },
  { name: 'Summit Medical', policies: 5, carrier: 'CNA', expDate: '2026-09-12', premium: '$312,450', status: 'Active', statusColor: 'green' }
];

// ─── MGA Portal Data ───
export const mgaKPIs = [
  { label: 'Brokers Active', value: '34' },
  { label: 'Policies Active', value: '847' },
  { label: 'Quotes This Month', value: '312' },
  { label: 'Bindings This Month', value: '89' },
  { label: 'Total Premium', value: '$14.2M' }
];

export const mgaAlerts = [
  { type: 'red', text: '3 policies expire within 7 days — action required' },
  { type: 'amber', text: '12 commission requests awaiting approval' },
  { type: 'amber', text: '5 endorsements pending review' },
  { type: 'blue', text: '2 new broker onboarding requests' }
];

export const renewalPipeline = [
  { range: '0–30 days', count: 23, pct: 19 },
  { range: '31–60 days', count: 41, pct: 34 },
  { range: '61–90 days', count: 58, pct: 47 }
];

export const mgaCarriers = [
  { name: 'SEMC', rating: 'A+', lines: 'WC, GL, BOP, Cyber', method: 'SEMC', status: 'Live' },
  { name: 'CNA', rating: 'A', lines: 'GL, Umbrella, Mgmt', method: 'SEMC', status: 'Live' },
  { name: 'Liberty Mutual', rating: 'A', lines: 'WC, GL, BOP', method: 'SEMC', status: 'Live' },
  { name: 'Hartford', rating: 'A+', lines: 'WC, GL, Cyber', method: 'SEMC', status: 'Live' },
  { name: 'Berkeley Net', rating: 'A-', lines: 'WC', method: 'Direct', status: 'Live' },
  { name: 'Chubb', rating: 'A++', lines: 'Umbrella, Mgmt', method: 'File', status: 'Setup' },
  { name: 'Zurich', rating: 'A+', lines: 'GL, Property', method: 'File', status: 'Setup' }
];

export const mgaBrokers = [
  { name: 'Lockton', states: '50', clients: 127, bindings: 12, commRate: '12%', status: 'Active' },
  { name: 'Marsh', states: '50', clients: 84, bindings: 8, commRate: '11%', status: 'Active' },
  { name: 'Aon', states: '50', clients: 61, bindings: 5, commRate: '11%', status: 'Active' },
  { name: 'Regional Brkr', states: 'CA, TX', clients: 23, bindings: 3, commRate: '10%', status: 'Active' },
  { name: 'New Broker Co', states: '—', clients: 0, bindings: 0, commRate: '—', status: 'Onboard' }
];

export const mgaPolicies = [
  { id: 'SEMC-48821', client: 'Magnolia', carrier: 'SEMC', line: 'WC', premium: '$184,700', expiry: 'Jun 26', ok: true },
  { id: 'CNA-33102', client: 'Apex Indus', carrier: 'CNA', line: 'GL', premium: '$52,000', expiry: 'Apr 26', ok: false },
  { id: 'HART-11044', client: 'Valley Log', carrier: 'Hartford', line: 'Cyber', premium: '$38,200', expiry: 'Dec 26', ok: true },
  { id: 'LIB-20291', client: 'Ridge Build', carrier: 'Liberty', line: 'BOP', premium: '$93,100', expiry: 'May 26', ok: false }
];

export const mgaCommKPIs = [
  { label: 'Total Earned', value: '$284,000' },
  { label: 'Pending Approval', value: '12 requests' },
  { label: 'Paid to Brokers', value: '$142,000' },
  { label: 'MGA Earned from Carriers', value: '$142,000' }
];

export const mgaPendingComm = [
  { broker: 'Lockton', policy: 'SEMC-48821', client: 'Magnolia', pct: '12%', amount: '$22,164' },
  { broker: 'Lockton', policy: 'LIB-20291', client: 'Ridge Build', pct: '12%', amount: '$11,172' },
  { broker: 'Marsh', policy: 'CNA-33102', client: 'Apex Indus', pct: '11%', amount: '$5,720' }
];

export const mgaCommConfig = [
  { carrier: 'SEMC', product: 'Workers Comp', brokerPct: '12%', mgaPct: '8%' },
  { carrier: 'CNA', product: 'GL', brokerPct: '11%', mgaPct: '7%' },
  { carrier: 'Hartford', product: 'Cyber', brokerPct: '10%', mgaPct: '6%' }
];

export const complianceKPIs = [
  { label: 'Filed', value: '312' },
  { label: 'Pending', value: '18' },
  { label: 'Due Soon', value: '7' },
  { label: 'Overdue', value: '2', warning: true }
];

export const overdueFilings = [
  { state: 'TX', product: 'Surplus WC', type: 'Surplus Lines Filing', due: 'Apr 10' },
  { state: 'NC', product: 'GL', type: 'Rate Filing', due: 'Apr 14' }
];

export const allFilings = [
  { state: 'CA', product: 'Workers Comp', type: 'Annual Audit', due: 'Jun 30', filed: '—', status: 'Pending', statusColor: 'amber' },
  { state: 'TX', product: 'Surplus WC', type: 'Surplus Line', due: 'Apr 10', filed: '—', status: 'Overdue', statusColor: 'red' },
  { state: 'FL', product: 'GL', type: 'Rate Filing', due: 'May 15', filed: '—', status: 'Due', statusColor: 'amber' },
  { state: 'NY', product: 'WC', type: 'Annual Audit', due: 'Jul 01', filed: '—', status: 'Future', statusColor: 'blue' }
];

// ─── Activity & Task Management ───
export const activityTypes = {
  client: ['Phone Call', 'Meeting', 'Email', 'SMS', 'Renewal Discussion', 'Claim Update Call', 'Policy Review'],
  internal: ['Task', 'Follow-up Reminder', 'Underwriting Follow-up', 'Document Request', 'Compliance Check'],
  automated: ['Policy Issued', 'Claim Reported', 'Renewal Alert', 'Workflow Task', 'Commission Alert']
};
export const activityPriorities = ['Low', 'Medium', 'High', 'Urgent'];
export const activityStatuses = ['Open', 'In Progress', 'Completed', 'Cancelled'];
export const activityAssignees = ['Sarah Chen', 'Mike Torres', 'Lisa Park', 'David Kim', 'CSR Pool', 'Commercial Lines Team'];

export const activityKPIs = [
  { label: 'Due Today', value: '8', warning: true },
  { label: 'Overdue', value: '3', warning: true },
  { label: 'This Week', value: '24' },
  { label: 'Completed (7d)', value: '31' },
  { label: 'Completion Rate', value: '87%' },
  { label: 'Avg Response', value: '1.8h' }
];

export const activities = [
  // Overdue
  { id: 'A-201', type: 'Task', category: 'internal', subject: 'Send Policy Docs to Magnolia Construction', description: 'Email PDF of WC policy + schedule of benefits.', client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-16 10:00', priority: 'High', priorityColor: 'red', status: 'Open', outcome: null, tags: ['#Onboarding'], recurrence: null, source: 'Manual', created: '2026-04-15', linkedType: 'Policy' },
  { id: 'A-200', type: 'Renewal Discussion', category: 'client', subject: 'Kickoff call — Ridge Builders BOP renewal', description: '45-day-out renewal discussion. Discuss rate indication and coverage updates.', client: 'Ridge Builders', policy: 'AMT-BOP-2025-22911', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-17 14:00', priority: 'Urgent', priorityColor: 'red', status: 'Open', outcome: null, tags: ['#Renewal', '#Urgent'], recurrence: null, source: 'Auto (Renewal 45d)', created: '2026-04-10', linkedType: 'Policy' },
  { id: 'A-199', type: 'Follow-up Reminder', category: 'internal', subject: 'Underwriter follow-up — TechCorp Cyber Sub S-882', description: 'Chase CFC underwriter for firm quote decision.', client: 'TechCorp Inc', policy: null, claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-17 17:00', priority: 'High', priorityColor: 'red', status: 'In Progress', outcome: null, tags: ['#Underwriting'], recurrence: null, source: 'Manual', created: '2026-04-14', linkedType: 'Submission' },
  // Today
  { id: 'A-198', type: 'Claim Update Call', category: 'client', subject: 'Claim update — Magnolia wrist injury', description: 'Update Robert Nguyen on claim progress, reserve, next steps.', client: 'Magnolia Construction LLC', policy: null, claim: 'CLM-2026-0042', assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-18 11:00', priority: 'High', priorityColor: 'amber', status: 'Open', outcome: null, tags: ['#Claim'], recurrence: null, source: 'Auto (Claim FNOL)', created: '2026-04-15', linkedType: 'Claim' },
  { id: 'A-197', type: 'Meeting', category: 'client', subject: 'Annual Policy Review — Apex Industries', description: 'Virtual meeting. Review coverages, discuss expansion.', client: 'Apex Industries', policy: 'CNA-GL-2025-33102', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-18 14:30', priority: 'Medium', priorityColor: 'amber', status: 'Open', outcome: null, tags: ['#AnnualReview'], recurrence: 'Annual', source: 'Auto (Policy Issued +11mo)', created: '2025-05-12', linkedType: 'Client' },
  { id: 'A-196', type: 'Phone Call', category: 'client', subject: 'Cross-sell — Umbrella for Harbor Foods', description: 'Call CFO; warm lead after WC bind.', client: 'Harbor Foods', policy: null, claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-18 15:00', priority: 'Medium', priorityColor: 'amber', status: 'Open', outcome: null, tags: ['#CrossSell'], recurrence: null, source: 'AI Suggestion', created: '2026-04-17', linkedType: 'Client' },
  { id: 'A-195', type: 'Document Request', category: 'internal', subject: 'Collect OSHA 300 log — Magnolia claim', description: 'Required for WC file. Client Portal link sent.', client: 'Magnolia Construction LLC', policy: null, claim: 'CLM-2026-0042', assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-18 17:00', priority: 'High', priorityColor: 'amber', status: 'Open', outcome: null, tags: ['#Claim', '#Compliance'], recurrence: null, source: 'Auto (Claim Workflow)', created: '2026-04-16', linkedType: 'Claim' },
  { id: 'A-194', type: 'Email', category: 'client', subject: 'Send binder — Coastal Realty GL', description: 'Binder + invoice package.', client: 'Coastal Realty', policy: 'AMT-GL-2026-11092', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-18 16:00', priority: 'Medium', priorityColor: 'amber', status: 'Open', outcome: null, tags: ['#Binding'], recurrence: null, source: 'Auto (Policy Bound)', created: '2026-04-18', linkedType: 'Policy' },
  // This week
  { id: 'A-193', type: 'Policy Review', category: 'client', subject: 'Q2 policy review — Summit Medical', description: 'Professional Liability renewal strategy.', client: 'Summit Medical', policy: 'LIB-PRO-2025-22841', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-22 10:00', priority: 'Medium', priorityColor: 'blue', status: 'Open', outcome: null, tags: ['#Renewal'], recurrence: 'Quarterly', source: 'Manual', created: '2026-04-01', linkedType: 'Client' },
  { id: 'A-192', type: 'Compliance Check', category: 'internal', subject: 'Verify NY producer license renewal', description: 'NY DFS renewal due in 60 days.', client: null, policy: null, claim: null, assignee: 'Lisa Park', owner: 'Lisa Park', due: '2026-04-25 12:00', priority: 'Medium', priorityColor: 'blue', status: 'Open', outcome: null, tags: ['#Licensing'], recurrence: null, source: 'Auto (License 60d)', created: '2026-04-01', linkedType: null },
  { id: 'A-191', type: 'Underwriting Follow-up', category: 'internal', subject: 'Request updated payroll — Ridge Builders', description: 'Need Q1 payroll for WC renewal UW.', client: 'Ridge Builders', policy: 'SEMC-WC-2025-44821', claim: null, assignee: 'Mike Torres', owner: 'Mike Torres', due: '2026-04-21 17:00', priority: 'Medium', priorityColor: 'blue', status: 'Open', outcome: null, tags: ['#Underwriting', '#Renewal'], recurrence: null, source: 'Manual', created: '2026-04-14', linkedType: 'Policy' },
  { id: 'A-190', type: 'Meeting', category: 'client', subject: 'In-person — Delta Logistics fleet review', description: 'Review fleet list, discuss telematics discount.', client: 'Delta Logistics', policy: 'TRV-AUTO-2026-11223', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-24 09:00', priority: 'High', priorityColor: 'blue', status: 'Open', outcome: null, tags: ['#FleetReview'], recurrence: null, source: 'Manual', created: '2026-04-12', linkedType: 'Policy' },
  // Completed (for history)
  { id: 'A-188', type: 'Policy Issued', category: 'automated', subject: 'WC Policy bound — Magnolia Construction', description: 'Auto-generated on policy issuance.', client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', claim: null, assignee: 'System', owner: 'System', due: '2026-04-15 09:15', priority: 'Low', priorityColor: 'green', status: 'Completed', outcome: 'System Event', tags: ['#System'], recurrence: null, source: 'System', created: '2026-04-15', linkedType: 'Policy', completed: '2026-04-15 09:15' },
  { id: 'A-187', type: 'Phone Call', category: 'client', subject: 'Welcome call — Magnolia Construction', description: 'Day-3 welcome call post-bind.', client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-17 10:00', priority: 'Medium', priorityColor: 'green', status: 'Completed', outcome: 'Client satisfied; requested COI for subcontractor.', tags: ['#Onboarding'], recurrence: null, source: 'Auto (Policy Bound +3d)', created: '2026-04-15', linkedType: 'Policy', completed: '2026-04-17 10:22' },
  { id: 'A-186', type: 'Email', category: 'client', subject: 'Sent binder + welcome packet', description: 'Auto-sent post-bind.', client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', claim: null, assignee: 'Sarah Chen', owner: 'Sarah Chen', due: '2026-04-15 09:30', priority: 'Low', priorityColor: 'green', status: 'Completed', outcome: 'Delivered.', tags: ['#Onboarding'], recurrence: null, source: 'Auto (Policy Bound)', created: '2026-04-15', linkedType: 'Policy', completed: '2026-04-15 09:32' },
  { id: 'A-185', type: 'Claim Reported', category: 'automated', subject: 'FNOL received — Magnolia WC', description: 'Client Portal submission.', client: 'Magnolia Construction LLC', policy: null, claim: 'CLM-2026-0042', assignee: 'System', owner: 'System', due: '2026-04-15 10:18', priority: 'High', priorityColor: 'green', status: 'Completed', outcome: 'Claim intake completed.', tags: ['#Claim'], recurrence: null, source: 'System', created: '2026-04-15', linkedType: 'Claim', completed: '2026-04-15 10:18' }
];

export const workflowRules = [
  { id: 'WF-01', name: 'Welcome call after policy bind', trigger: 'Policy Issued', condition: 'LOB = Any', action: 'Create "Welcome Call – Day 3" task for Producer', enabled: true, lastFired: '2026-04-15', fireCount: 127 },
  { id: 'WF-02', name: 'Renewal remarketing — 90 days out', trigger: 'Policy 90d to expiry', condition: 'Renewal Flag = Auto', action: 'Create "Start Remarketing" task + Renewal file', enabled: true, lastFired: '2026-04-17', fireCount: 44 },
  { id: 'WF-03', name: 'Claim contact SLA — 2 hours', trigger: 'Claim Reported', condition: 'All', action: 'Create "Contact Client within 2 hours" task + SMS producer', enabled: true, lastFired: '2026-04-15', fireCount: 36 },
  { id: 'WF-04', name: 'Overdue task escalation', trigger: 'Task Overdue 3d', condition: 'Priority in [High, Urgent]', action: 'Reassign to Manager + Email notify', enabled: true, lastFired: '2026-04-17', fireCount: 12 },
  { id: 'WF-05', name: 'Cross-sell review after claim closed', trigger: 'Claim Closed', condition: 'Client has ≤ 2 LOBs', action: 'Create "Cross-Sell Review" task for Producer', enabled: true, lastFired: '2026-04-12', fireCount: 19 },
  { id: 'WF-06', name: 'Endorsement approval confirmation', trigger: 'Endorsement Issued', condition: 'All', action: 'Create "Confirm Client Approval" task', enabled: false, lastFired: '2026-03-28', fireCount: 23 },
  { id: 'WF-07', name: 'Commission discrepancy review', trigger: 'Commission Variance > 5%', condition: 'All', action: 'Create "Review with Producer" task + flag', enabled: true, lastFired: '2026-04-03', fireCount: 8 }
];

export const activityAnalytics = {
  completionByProducer: [
    { name: 'Sarah Chen', assigned: 42, completed: 38, rate: 90, avg_response: '1.4h' },
    { name: 'Mike Torres', assigned: 31, completed: 26, rate: 84, avg_response: '2.1h' },
    { name: 'Lisa Park', assigned: 28, completed: 25, rate: 89, avg_response: '1.9h' },
    { name: 'David Kim', assigned: 22, completed: 17, rate: 77, avg_response: '3.2h' }
  ],
  volume_trend: [
    { week: 'Wk 14', created: 54, completed: 48 },
    { week: 'Wk 15', created: 61, completed: 55 },
    { week: 'Wk 16', created: 58, completed: 59 },
    { week: 'Wk 17', created: 67, completed: 52 }
  ],
  overdue_aging: [
    { range: '1 day', count: 5 },
    { range: '2–3 days', count: 3 },
    { range: '4–7 days', count: 2 },
    { range: '8+ days', count: 1 }
  ],
  top_activity_types: [
    { type: 'Phone Call', count: 84, pct: 28 },
    { type: 'Email', count: 62, pct: 21 },
    { type: 'Follow-up Reminder', count: 45, pct: 15 },
    { type: 'Renewal Discussion', count: 38, pct: 13 },
    { type: 'Meeting', count: 31, pct: 10 },
    { type: 'Claim Update Call', count: 24, pct: 8 },
    { type: 'Other', count: 16, pct: 5 }
  ],
  productivity_scores: [
    { name: 'Sarah Chen', score: 94, tier: 'Top' },
    { name: 'Lisa Park', score: 88, tier: 'Strong' },
    { name: 'Mike Torres', score: 82, tier: 'Strong' },
    { name: 'David Kim', score: 71, tier: 'Needs Focus' }
  ]
};
