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
export const customerProducer = {
  name: 'Sarah Chen', title: 'Your Producer', phone: '(916) 555-0182', email: 'sarah@bridgepoint.com', avatar: 'SC', photo_color: 'linear-gradient(135deg, #6c5ce7, #a67dff)'
};

export const customerKPIs = [
  { label: 'Active Policies',      value: '4' },
  { label: 'Total Annual Premium', value: '$318k' },
  { label: 'Next Renewal',         value: '43 days' },
  { label: 'Open Claims',          value: '1', warning: true },
  { label: 'Pending Requests',     value: '2' },
  { label: 'Balance Due',          value: '$15,392' }
];

export const customerPolicyStatuses = ['Active', 'Renewing', 'Endorsement Pending', 'Cancelled', 'Expired'];

export const customerPolicies = [
  {
    id: 'SEMC-WC-2025-48821',
    carrier_policy_no: 'WC-00088921-X',
    type: 'Workers Comp',
    lob_group: 'Commercial',
    icon: '👷',
    carrier: 'SEMC / Liberty Mutual',
    carrier_rating: 'A (AM Best)',
    effective: '2025-06-01',
    expiry: '2026-06-01',
    days_to_expiry: 43,
    status: 'Active',
    statusColor: 'green',
    premium: 184700,
    premium_display: '$184,700 / yr',
    billing: 'Agency Bill · Quarterly',
    next_payment: '2026-07-01',
    next_payment_amount: 46175,
    balance_due: 0,
    named_insured: 'Magnolia Construction LLC',
    additional_insureds: ['Kroger Real Estate', 'Prologis Trust'],
    lienholders: [],
    primary_location: '1201 Industrial Blvd, Sacramento, CA 95814',
    coverage_summary: [
      { k: 'Employers Liability — Bodily Injury by Accident', v: '$1,000,000 / accident' },
      { k: 'Employers Liability — Bodily Injury by Disease',  v: '$1,000,000 / employee, $1,000,000 / aggregate' },
      { k: 'Workers Compensation — Statutory',                v: 'CA Statutory' }
    ],
    deductible: '$0',
    exposures: [
      { k: 'Annual Payroll',   v: '$2.4M' },
      { k: 'Employee Count',   v: '38' },
      { k: 'Locations',        v: '3 (CA)' },
      { k: 'Class Code',       v: '5403 Carpentry' },
      { k: 'Experience Mod',   v: '0.92' }
    ],
    safety_score: 88,
    claim_count_3yr: 0,
    tags: ['Multi-location', 'Top-quartile loss ratio'],
    has_renewal: false,
    id_card_available: true
  },
  {
    id: 'CNA-GL-2025-33102',
    carrier_policy_no: 'GL-33102-A',
    type: 'General Liability',
    lob_group: 'Commercial',
    icon: '🛡️',
    carrier: 'CNA',
    carrier_rating: 'A (AM Best)',
    effective: '2025-04-12',
    expiry: '2026-04-12',
    days_to_expiry: -6,
    status: 'Renewing',
    statusColor: 'amber',
    premium: 52000,
    premium_display: '$52,000 / yr',
    billing: 'Direct Bill · Annual',
    next_payment: '2026-04-12',
    next_payment_amount: 54600,
    balance_due: 54600,
    named_insured: 'Magnolia Construction LLC',
    additional_insureds: ['General Contractor (Kroger)'],
    lienholders: [],
    primary_location: '1201 Industrial Blvd, Sacramento, CA 95814',
    coverage_summary: [
      { k: 'Each Occurrence',                    v: '$1,000,000' },
      { k: 'General Aggregate',                  v: '$2,000,000' },
      { k: 'Products-Completed Ops Aggregate',   v: '$2,000,000' },
      { k: 'Personal & Advertising Injury',      v: '$1,000,000' },
      { k: 'Damage to Rented Premises',          v: '$100,000' },
      { k: 'Medical Expense (any one person)',   v: '$5,000' }
    ],
    deductible: '$2,500',
    exposures: [
      { k: 'Annual Gross Sales', v: '$42M' },
      { k: 'Operations',         v: 'Commercial construction' },
      { k: 'Subcontracted Work', v: '$8M' }
    ],
    safety_score: 82,
    claim_count_3yr: 1,
    tags: ['Renewing in 6 days', 'Rate change +5%'],
    has_renewal: true,
    id_card_available: false
  },
  {
    id: 'LIB-UMB-2025-88103',
    carrier_policy_no: 'UMB-88103-X',
    type: 'Umbrella',
    lob_group: 'Commercial',
    icon: '☂️',
    carrier: 'Liberty Mutual',
    carrier_rating: 'A (AM Best)',
    effective: '2025-06-01',
    expiry: '2026-06-01',
    days_to_expiry: 43,
    status: 'Active',
    statusColor: 'green',
    premium: 18200,
    premium_display: '$18,200 / yr',
    billing: 'Agency Bill · Annual',
    next_payment: '2026-06-01',
    next_payment_amount: 18200,
    balance_due: 0,
    named_insured: 'Magnolia Construction LLC',
    additional_insureds: [],
    lienholders: [],
    primary_location: '1201 Industrial Blvd, Sacramento, CA 95814',
    coverage_summary: [
      { k: 'Each Occurrence',   v: '$5,000,000' },
      { k: 'Aggregate',         v: '$5,000,000' },
      { k: 'Self-Insured Retention', v: '$10,000' },
      { k: 'Underlying Policies', v: 'GL + WC + Auto' }
    ],
    deductible: '$10,000 SIR',
    exposures: [
      { k: 'Follow-form',  v: 'Yes — over GL/WC/Auto' }
    ],
    safety_score: 88,
    claim_count_3yr: 0,
    tags: ['Follow-form'],
    has_renewal: false,
    id_card_available: false
  },
  {
    id: 'TRV-AUTO-2026-11223',
    carrier_policy_no: 'CA-11223-B',
    type: 'Commercial Auto',
    lob_group: 'Commercial',
    icon: '🚚',
    carrier: 'Travelers',
    carrier_rating: 'A++ (AM Best)',
    effective: '2025-08-05',
    expiry: '2026-08-05',
    days_to_expiry: 108,
    status: 'Endorsement Pending',
    statusColor: 'blue',
    premium: 62700,
    premium_display: '$62,700 / yr',
    billing: 'Agency Bill · Monthly',
    next_payment: '2026-05-05',
    next_payment_amount: 5225,
    balance_due: 5225,
    named_insured: 'Magnolia Construction LLC',
    additional_insureds: ['Amazon Freight'],
    lienholders: ['Ally Financial (Truck #8, #12)'],
    primary_location: 'Fleet — garaged at 1201 Industrial Blvd, Sacramento CA',
    coverage_summary: [
      { k: 'Combined Single Limit',              v: '$1,000,000' },
      { k: 'Uninsured Motorists',                v: '$1,000,000' },
      { k: 'Medical Payments',                   v: '$5,000' },
      { k: 'Physical Damage — Comp / Collision', v: 'ACV · $1,000 deductible ea.' }
    ],
    deductible: '$1,000',
    exposures: [
      { k: 'Fleet Size',       v: '12 vehicles' },
      { k: 'Annual Miles',     v: '480,000' },
      { k: 'Radius',           v: 'Intra-state' },
      { k: 'Hazmat',           v: 'No' }
    ],
    safety_score: 76,
    claim_count_3yr: 1,
    tags: ['Endorsement pending — Add Vehicle #13', 'Fleet telematics enabled'],
    has_renewal: false,
    id_card_available: true
  }
];

export const customerPolicyDetail = {
  id: 'SEMC-WC-2025-48821',
  timeline: [
    { ts: '2026-04-17 14:08', event: 'COI issued to Kroger Real Estate', actor: 'System' },
    { ts: '2026-04-15 09:22', event: 'Premium payment Q2 received',      actor: 'System' },
    { ts: '2026-04-10 11:40', event: 'Safety audit completed (score 88)',actor: 'Carrier Inspector' },
    { ts: '2026-03-20 15:00', event: 'Endorsement issued — added Prologis as additional insured', actor: 'Sarah Chen' },
    { ts: '2026-02-14 10:15', event: 'Policy renewed — 12-month term',   actor: 'Sarah Chen' },
    { ts: '2025-06-01 08:00', event: 'Policy issued — coverage effective',actor: 'Carrier Underwriter' }
  ],
  photos: [
    { label: 'Yard — North side',    emoji: '🏗' },
    { label: 'Main shop floor',      emoji: '🔧' },
    { label: 'Crew vehicle lineup',  emoji: '🚛' },
    { label: 'Safety signage',       emoji: '⚠️' }
  ],
  docs: [
    { name: 'Declarations Page.pdf',   size: '420 KB', type: 'Dec Page',    uploaded: '2025-06-01' },
    { name: 'Policy Form.pdf',         size: '2.1 MB', type: 'Policy',      uploaded: '2025-06-01' },
    { name: 'Endorsement 1.pdf',       size: '180 KB', type: 'Endorsement', uploaded: '2026-03-20' },
    { name: 'COI — Kroger.pdf',        size: '240 KB', type: 'COI',         uploaded: '2026-04-17' },
    { name: 'ID Card.pdf',             size: '80 KB',  type: 'ID Card',     uploaded: '2025-06-01' }
  ]
};

export const customerServicingRequests = [
  { id: 'SR-20284', type: 'Add Vehicle',        policy: 'TRV-AUTO-2026-11223', submitted: '2026-04-14', status: 'In Progress', statusColor: 'blue',  eta: '2026-04-19', description: 'Add 2025 Ford F-250 (VIN 1FTEX1EP...) to fleet' },
  { id: 'SR-20283', type: 'COI Request',        policy: 'SEMC-WC-2025-48821', submitted: '2026-04-17', status: 'Completed',   statusColor: 'green', eta: '—',          description: 'COI for Kroger Real Estate — delivered to landlord' },
  { id: 'SR-20282', type: 'Address Change',     policy: 'CNA-GL-2025-33102',  submitted: '2026-04-12', status: 'Completed',   statusColor: 'green', eta: '—',          description: 'Updated HQ address to 1201 Industrial Blvd' },
  { id: 'SR-20281', type: 'Accept Renewal',     policy: 'CNA-GL-2025-33102',  submitted: '2026-04-10', status: 'Pending Signature', statusColor: 'amber', eta: '2026-04-18', description: 'Renewal offer for 2026-04-12 term — awaiting e-signature' }
];

export const customerServicingTypes = [
  { key: 'address',     icon: '🏠', name: 'Change Address',           desc: 'Business or mailing address' },
  { key: 'driver',      icon: '👤', name: 'Add / Remove Driver',      desc: 'Add or remove a driver from auto policy' },
  { key: 'vehicle',     icon: '🚗', name: 'Add / Remove Vehicle',     desc: 'Add, remove, or replace a vehicle' },
  { key: 'location',    icon: '📍', name: 'Add / Remove Location',    desc: 'Add or close a business location' },
  { key: 'ai',          icon: '👥', name: 'Additional Insured',       desc: 'Add a landlord, lender, or vendor' },
  { key: 'limits',      icon: '📊', name: 'Change Limits / Coverage', desc: 'Increase or decrease coverage limits' },
  { key: 'cancel',      icon: '🚫', name: 'Cancel Policy',            desc: 'Request mid-term or at-expiry cancellation' },
  { key: 'other',       icon: '📝', name: 'Other Change',             desc: 'Any change not listed above' }
];

export const customerRenewalCompare = {
  policy: 'CNA-GL-2025-33102',
  carrier: 'CNA',
  effective_new: '2026-04-12',
  expiry_new: '2027-04-12',
  current: { premium: 52000, deductible: 2500, aggregate: 2000000, occurrence: 1000000 },
  renewal: { premium: 54600, deductible: 2500, aggregate: 2000000, occurrence: 1000000 },
  rate_change: 5.0,
  rationale: [
    'Industry-wide hard market pricing (+4–7% average in CA General Liability)',
    'Clean loss history preserved 0.92 ExperienceMod — avoided +12% market hit',
    'No coverage reductions — limits, deductible, endorsements identical',
    'Additional Insured schedule carried over (1 holder)'
  ],
  changes: [
    { field: 'Annual Premium',   before: '$52,000',   after: '$54,600',   note: '+5.0% (below +7.4% market)' },
    { field: 'General Aggregate',before: '$2,000,000',after: '$2,000,000',note: 'Unchanged' },
    { field: 'Deductible',       before: '$2,500',    after: '$2,500',    note: 'Unchanged' },
    { field: 'Endorsements',     before: '2 active',  after: '2 active',  note: 'Kroger AI + Waiver of Subro carried' }
  ]
};

export const customerCOIs = [
  { id: 'COI-8842', policy: 'SEMC-WC-2025-48821', holder: 'Kroger Real Estate',    issued: '2026-04-17', expires: '2027-04-17', status: 'Active',  statusColor: 'green' },
  { id: 'COI-8841', policy: 'SEMC-WC-2025-48821', holder: 'Prologis Trust',        issued: '2026-03-22', expires: '2027-03-22', status: 'Active',  statusColor: 'green' },
  { id: 'COI-8840', policy: 'LIB-UMB-2025-88103', holder: 'General Contractor',    issued: '2026-04-10', expires: '2027-04-10', status: 'Active',  statusColor: 'green' },
  { id: 'COI-8839', policy: 'CNA-GL-2025-33102',  holder: 'Commerce Title Co.',    issued: '2025-11-12', expires: '2026-05-12', status: 'Expiring', statusColor: 'amber' },
  { id: 'COI-8838', policy: 'TRV-AUTO-2026-11223',holder: 'Amazon Freight',        issued: '2026-02-05', expires: '2027-02-05', status: 'Active',   statusColor: 'green' }
];

// ─── Customer Resources / Learn More ───
export const customerLearnCategories = [
  { key: 'all',      icon: '📚', name: 'All' },
  { key: 'basics',   icon: '💡', name: 'Insurance 101' },
  { key: 'claims',   icon: '🛡', name: 'Claims' },
  { key: 'coverage', icon: '📋', name: 'Coverage Explained' },
  { key: 'videos',   icon: '🎥', name: 'Videos' },
  { key: 'downloads',icon: '📥', name: 'Downloads' }
];

export const customerLearnArticles = [
  { id: 'LA-001', title: 'What Is a Deductible (and How Do You Pick the Right One)?',   category: 'basics',   type: 'Article',   read_time: '4 min', published: '2026-03-15', updated: '2026-03-15', tags: ['Auto','Home','Commercial'], level: 'Beginner', status: 'popular', thumbnail: '💰', views: 8420, helpful: 412, saved: false, excerpt: 'The higher your deductible, the lower your premium — but what does that actually mean for your wallet when something happens? Here is the plain-English breakdown.', author: 'Sarah Chen, Producer' },
  { id: 'LA-002', title: 'How to Read Your Declarations Page',                           category: 'coverage', type: 'Article',   read_time: '6 min', published: '2026-02-28', updated: '2026-03-01', tags: ['Commercial','Coverage'], level: 'Beginner', status: 'popular',       thumbnail: '📄', views: 6280, helpful: 348, saved: true,  excerpt: 'Your dec page is the cheat sheet for your whole policy — premium, limits, deductibles, and what is actually covered. Here is what each section means.', author: 'Agency Marketing' },
  { id: 'LA-003', title: 'Top 5 Claim Mistakes to Avoid',                                 category: 'claims',   type: 'Article',   read_time: '5 min', published: '2026-04-05', updated: '2026-04-05', tags: ['Claims'], level: 'Beginner', status: 'recommended', thumbnail: '⚠️', views: 4120, helpful: 278, saved: false, excerpt: 'Most claims get delayed or reduced because of five avoidable mistakes. Know them before you ever need to file.', author: 'Jane Rodriguez, Claims' },
  { id: 'LA-004', title: 'Understanding Additional Insureds (The One-Page Guide)',        category: 'coverage', type: 'Article',   read_time: '3 min', published: '2026-03-22', updated: '2026-03-22', tags: ['Commercial','Coverage'], level: 'Intermediate', status: 'new',       thumbnail: '🤝', views: 2840, helpful: 184, saved: false, excerpt: 'Your landlord wants to be named as an additional insured. What does that actually do, and should you worry?', author: 'Sarah Chen, Producer' },
  { id: 'LA-005', title: 'Why Premiums Go Up (Even When You Have No Claims)',              category: 'basics',   type: 'Article',   read_time: '7 min', published: '2026-04-12', updated: '2026-04-12', tags: ['Billing','Renewals'], level: 'Intermediate', status: 'new',       thumbnail: '📈', views: 3620, helpful: 214, saved: true,  excerpt: 'Rate changes are one of the most confusing parts of insurance. Here is what actually drives your renewal pricing — and what to do about it.', author: 'Agency Marketing' },
  { id: 'LA-006', title: 'Insurance 101 — How Insurance Actually Works',                   category: 'basics',   type: 'Video',     read_time: '2 min', published: '2026-01-15', updated: '2026-01-15', tags: ['Foundations'], level: 'Beginner', status: 'popular',   thumbnail: '🎬', views: 12400, helpful: 682, saved: false, excerpt: 'A 2-minute visual explanation of how premiums, pooling, and claims work together. Perfect for sharing with your team.', author: 'Bridgepoint Studios' },
  { id: 'LA-007', title: 'How to File a Claim (Step-by-Step Video)',                       category: 'claims',   type: 'Video',     read_time: '3 min', published: '2026-03-30', updated: '2026-03-30', tags: ['Claims','How-To'], level: 'Beginner', status: 'popular', thumbnail: '🎥', views: 9420, helpful: 512, saved: false, excerpt: 'Walk through the full FNOL process from first call to settlement — what to say, what to send, what to expect.', author: 'Jane Rodriguez, Claims' },
  { id: 'LA-008', title: 'Commercial Auto vs Personal Auto — What Is the Difference?',      category: 'coverage', type: 'Article',   read_time: '5 min', published: '2026-02-10', updated: '2026-02-10', tags: ['Auto','Commercial'], level: 'Beginner', status: 'updated',       thumbnail: '🚚', views: 3240, helpful: 198, saved: false, excerpt: 'Using your truck for business? Your personal auto policy may not cover you. Here is the full breakdown.', author: 'Sarah Chen, Producer' },
  { id: 'LA-009', title: 'Cyber Insurance for Small Business — The Basics',                 category: 'coverage', type: 'Article',   read_time: '8 min', published: '2026-04-08', updated: '2026-04-08', tags: ['Cyber','Commercial'], level: 'Intermediate', status: 'new',     thumbnail: '🔒', views: 1840, helpful: 124, saved: true,  excerpt: 'A ransomware attack costs small businesses $120K on average. Here is what cyber insurance covers and why you may need it.', author: 'Mike Torres, CSR' },
  { id: 'LA-010', title: 'Annual Business Insurance Review Checklist',                      category: 'basics',   type: 'Download',  read_time: '1 page',published: '2026-01-05', updated: '2026-04-01', tags: ['Commercial','Checklist'], level: 'Beginner', status: 'popular', thumbnail: '📋', views: 5420, helpful: 298, saved: false, excerpt: 'Print-ready 1-page checklist for your annual policy review. Takes 10 minutes; catches gaps before they cost you.', author: 'Agency Marketing' },
  { id: 'LA-011', title: 'What "Replacement Cost" vs "Actual Cash Value" Actually Means',    category: 'coverage', type: 'Article',   read_time: '4 min', published: '2026-02-20', updated: '2026-02-20', tags: ['Property','Coverage'], level: 'Intermediate', status: 'popular', thumbnail: '🏢', views: 4120, helpful: 258, saved: false, excerpt: 'Two very different ways a claim gets paid. The wrong one could leave you $10K+ short after a loss.', author: 'Agency Marketing' },
  { id: 'LA-012', title: 'Subrogation — What Happens After Someone Else Causes Your Loss',   category: 'claims',   type: 'Article',   read_time: '5 min', published: '2026-03-10', updated: '2026-03-10', tags: ['Claims','Liability'], level: 'Advanced', status: 'updated', thumbnail: '⚖️', views: 1280, helpful: 92,  saved: false, excerpt: 'When your carrier pays your claim, they may go after the other guy. Here is what that means for you.', author: 'Jane Rodriguez, Claims' },
  { id: 'LA-013', title: 'Business Continuity — A 15-Minute Starter Plan',                   category: 'basics',   type: 'Download',  read_time: '6 pages',published: '2026-03-25', updated: '2026-03-25', tags: ['Commercial','Planning'], level: 'Intermediate', status: 'new',    thumbnail: '📥', views: 2120, helpful: 148, saved: false, excerpt: 'A short, practical template for getting your business back up after a major loss. Fill in 6 blanks, print, keep handy.', author: 'Risk Control Team' },
  { id: 'LA-014', title: 'Hard Market vs Soft Market — Why Prices Swing Every Few Years',    category: 'basics',   type: 'Video',     read_time: '3 min', published: '2026-04-02', updated: '2026-04-02', tags: ['Industry','Trends'], level: 'Intermediate', status: 'new',     thumbnail: '📊', views: 1680, helpful: 104, saved: false, excerpt: 'Industry pricing cycles explained in 3 minutes. Know what drives your renewal so you can plan ahead.', author: 'Bridgepoint Studios' }
];

export const customerLearnGlossary = [
  { term: 'Actual Cash Value (ACV)',    letter: 'A', definition: 'Replacement cost minus depreciation. If your 5-year-old laptop is destroyed, ACV pays what it was worth the day of the loss — not what a new one costs.' },
  { term: 'Additional Insured',         letter: 'A', definition: 'A person or business (like your landlord or client) named on your policy so they are also protected by your coverage for specific situations.' },
  { term: 'Aggregate Limit',            letter: 'A', definition: 'The maximum your policy pays for all claims combined during the policy term, no matter how many losses you have.' },
  { term: 'Binder',                     letter: 'B', definition: 'A short-term document proving you have coverage before the full policy is issued. Usually valid 30–60 days.' },
  { term: 'Certificate of Insurance (COI)', letter: 'C', definition: 'A one-page summary proving you carry insurance. Landlords, clients, and vendors often require one before doing business with you.' },
  { term: 'Claim',                      letter: 'C', definition: 'A formal request to your insurance company to pay for a loss covered by your policy.' },
  { term: 'Coinsurance',                letter: 'C', definition: 'On property policies, a requirement that you insure your building/contents to at least a specified percentage of value (typically 80%) or face a penalty at claim time.' },
  { term: 'Declarations Page',          letter: 'D', definition: 'The front page of your policy listing who is covered, for how much, for what, and what it costs. Your one-page cheat sheet.' },
  { term: 'Deductible',                 letter: 'D', definition: 'The amount you pay out-of-pocket on a claim before insurance kicks in. Higher deductible = lower premium.' },
  { term: 'Endorsement',                letter: 'E', definition: 'A written change to your policy mid-term — add a vehicle, change a limit, remove a location.' },
  { term: 'Experience Modifier (ExMod)', letter: 'E', definition: 'A multiplier applied to your Workers Comp premium based on your claim history vs. peers. Below 1.0 = better than average.' },
  { term: 'Exclusion',                  letter: 'E', definition: 'Something specifically NOT covered by your policy. Always read these.' },
  { term: 'First Notice of Loss (FNOL)', letter: 'F', definition: 'The initial report you file when a loss happens. Starts the claim process.' },
  { term: 'Liability',                  letter: 'L', definition: 'Legal responsibility for causing harm to someone else. Liability insurance pays for damage you cause others.' },
  { term: 'Occurrence',                 letter: 'O', definition: 'A single incident or continuous exposure that causes a loss. Many policies have per-occurrence limits.' },
  { term: 'Premium',                    letter: 'P', definition: 'What you pay for insurance coverage. Usually stated annually but may be billed monthly, quarterly, or at renewal.' },
  { term: 'Replacement Cost',           letter: 'R', definition: 'Coverage that pays what it costs today to replace a damaged item, no depreciation. More expensive than ACV but better at claim time.' },
  { term: 'Reserve',                    letter: 'R', definition: 'Money your insurance company sets aside to pay a claim. Not a cap — the final payment may be more or less.' },
  { term: 'Rider',                      letter: 'R', definition: 'Optional add-on coverage that modifies your base policy (often used interchangeably with "endorsement").' },
  { term: 'Subrogation',                letter: 'S', definition: 'Your insurance company\'s right to collect from the at-fault party after paying your claim. May affect your deductible recovery.' },
  { term: 'Umbrella Policy',            letter: 'U', definition: 'Extra liability coverage on top of your auto, property, and/or commercial policies. Kicks in when underlying limits are exhausted.' },
  { term: 'Underwriting',               letter: 'U', definition: 'The process where a carrier decides whether to insure you, on what terms, and at what price.' },
  { term: 'Waiver of Subrogation',      letter: 'W', definition: 'You give up your carrier\'s right to go after another party who causes your loss. Often required by contracts.' }
];

export const customerLearnFAQs = [
  { id: 'LFAQ-01', q: 'How is my premium calculated?',                                  category: 'basics',   answer: 'Premiums are based on three things: your risk profile (industry, size, losses), the coverage you buy (limits, deductibles), and broad market conditions (reinsurance costs, inflation). Your specific factors matter most.', views: 1284 },
  { id: 'LFAQ-02', q: 'What should I do in the first 24 hours after a loss?',           category: 'claims',   answer: 'Make sure everyone is safe. Call 911 if needed. Document everything with photos/video. Prevent further damage if you can safely. Then call us or file via the portal — ideally within 24 hours.', views: 982 },
  { id: 'LFAQ-03', q: 'Does my business insurance cover my home office?',                category: 'coverage', answer: 'Usually partially. Business equipment at home is typically limited to $2,500–$10,000 unless scheduled. Check your policy or ask about a small-business endorsement.', views: 742 },
  { id: 'LFAQ-04', q: 'Why do I need umbrella insurance if I already have GL?',          category: 'coverage', answer: 'Your GL caps at $1M–$2M per occurrence. A serious claim can blow through that fast. Umbrella adds $1M–$10M+ of extra cushion at a fraction of the cost of raising underlying limits.', views: 620 },
  { id: 'LFAQ-05', q: 'Can I cancel my policy mid-term?',                                 category: 'basics',   answer: 'Yes, but you may get a pro-rated refund with a small short-rate penalty. Auto-financed policies may have minimum earned premiums. Talk to us before cancelling to avoid coverage gaps.', views: 524 },
  { id: 'LFAQ-06', q: 'What happens if I miss a premium payment?',                        category: 'basics',   answer: 'Most carriers have a 10–20 day grace period. After that, coverage can lapse. Autopay prevents this entirely. If you need more time, ask us about payment plans or premium finance.', views: 482 },
  { id: 'LFAQ-07', q: 'Does my policy cover rideshare driving?',                           category: 'coverage', answer: 'Personal auto policies usually EXCLUDE rideshare. You need either a commercial auto policy or a rideshare endorsement. Do not drive for Uber/Lyft without checking first.', views: 362 },
  { id: 'LFAQ-08', q: 'How long do claims stay on my record?',                              category: 'claims',   answer: 'Most commercial carriers look at 3–5 years of loss history for underwriting. A single claim rarely affects your premium dramatically; a pattern of claims will.', views: 324 },
  { id: 'LFAQ-09', q: 'What is the difference between "Claims-Made" and "Occurrence" coverage?', category: 'coverage', answer: '"Occurrence" covers losses that HAPPEN during the policy term, even if you report later. "Claims-Made" covers losses REPORTED during the term (regardless of when they happened). Common for professional liability.', views: 284 },
  { id: 'LFAQ-10', q: 'Should I file every small claim?',                                    category: 'claims',   answer: 'Not always. If your loss is near or below your deductible, consider paying out of pocket. A pattern of small claims can affect future pricing. We can help you decide.', views: 248 }
];

export const customerLearnBookmarks = ['LA-002', 'LA-005', 'LA-009'];

export const customerLearnRecentlyViewed = ['LA-003', 'LA-007', 'LA-011', 'LA-001', 'LA-004'];

// ─── Customer Profile & Account Settings ───
export const customerProfileKPIs = [
  { label: 'Profile Completeness', value: '94%' },
  { label: '2FA Status',          value: 'On' },
  { label: 'Active Devices',      value: '3' },
  { label: 'Last Login',          value: 'Today 9:22 AM' },
  { label: 'Data Export Requests',value: '0' },
  { label: 'Verified Fields',     value: '12 of 14' }
];

export const customerProfilePersonal = {
  legal_name: 'James Reynolds',
  preferred_name: 'James',
  company: 'Magnolia Construction LLC',
  title: 'Owner / CEO',
  dob: '1978-03-14',
  fein_masked: '88-XXXX492',
  ssn_masked: 'XXX-XX-4421',
  primary_email: 'james@magnoliaconstruction.com',
  primary_email_verified: true,
  secondary_email: 'james.reynolds.personal@gmail.com',
  secondary_email_verified: true,
  primary_phone: '(916) 555-0184',
  primary_phone_verified: true,
  mobile_phone: '(916) 555-0199',
  mobile_phone_verified: true,
  mailing_address: {
    street: '1201 Industrial Blvd',
    street2: 'Suite 200',
    city: 'Sacramento',
    state: 'CA',
    zip: '95814',
    verified: true
  },
  risk_locations: [
    { id: 'LOC-01', label: 'HQ / Main Office',       address: '1201 Industrial Blvd, Sacramento CA 95814', primary: true,  verified: true },
    { id: 'LOC-02', label: 'Yard / Equipment Storage',address: '1250 Industrial Blvd, Sacramento CA 95814',primary: false, verified: true },
    { id: 'LOC-03', label: 'Satellite Shop — Folsom', address: '892 East Bidwell St, Folsom CA 95630',      primary: false, verified: true }
  ],
  preferred_language: 'English',
  preferred_contact_method: 'Email'
};

export const customerProfileSecurity = {
  password_strength: 'Strong',
  password_last_changed: '2026-01-22',
  two_factor: {
    enabled: true,
    methods: [
      { key: 'authenticator', label: 'Authenticator app (Google Authenticator)', primary: true,  icon: '📱', enabled: true  },
      { key: 'sms',           label: 'SMS to (916) 555-0199',                     primary: false, icon: '💬', enabled: true  },
      { key: 'email',         label: 'Email to james@magnoliaconstruction.com',   primary: false, icon: '📧', enabled: false },
      { key: 'passkey',       label: 'Passkey / biometric (Face ID)',             primary: false, icon: '🔑', enabled: true  }
    ]
  },
  sessions: [
    { id: 'SES-01', device: 'MacBook Pro — Safari',      location: 'Sacramento, CA', ip: '72.14.188.4',   last_active: '2026-04-19 09:22', this_device: true,  trusted: true },
    { id: 'SES-02', device: 'iPhone 16 — Safari / App',  location: 'Sacramento, CA', ip: '98.42.113.22',  last_active: '2026-04-18 18:02', this_device: false, trusted: true },
    { id: 'SES-03', device: 'Chrome — Windows',          location: 'Folsom, CA',     ip: '47.222.184.11', last_active: '2026-04-17 16:44', this_device: false, trusted: false },
    { id: 'SES-04', device: 'Safari — iPad Air',         location: 'Sacramento, CA', ip: '98.42.113.22',  last_active: '2026-04-10 11:22', this_device: false, trusted: true }
  ],
  security_events: [
    { ts: '2026-04-17 16:44', event: 'New device logged in (Chrome, Windows — Folsom CA)',  type: 'warning' },
    { ts: '2026-04-15 09:02', event: 'Password changed successfully',                         type: 'info' },
    { ts: '2026-04-10 11:22', event: '2FA verification via authenticator app',                type: 'info' },
    { ts: '2026-01-22 14:00', event: '2FA enabled via Face ID passkey',                       type: 'info' }
  ]
};

export const customerProfileNotifPrefs = {
  categories: [
    { key: 'policies', label: 'Policies & Renewals',     desc: 'Upcoming renewals, endorsements, ID cards',        email: true,  sms: true,  push: true,  in_app: true  },
    { key: 'billing',  label: 'Billing & Payments',      desc: 'Invoices, due dates, autopay, refunds',             email: true,  sms: true,  push: true,  in_app: true  },
    { key: 'claims',   label: 'Claims Updates',           desc: 'Status changes, document requests, settlements',    email: true,  sms: true,  push: true,  in_app: true  },
    { key: 'messages', label: 'Messages & Support',       desc: 'New replies, ticket updates',                        email: true,  sms: false, push: true,  in_app: true  },
    { key: 'docs',     label: 'Documents & e-Sig',        desc: 'New documents, signatures required, expiring docs', email: true,  sms: true,  push: false, in_app: true  },
    { key: 'risk',     label: 'Risk Tips & Discounts',    desc: 'Safety tips, seasonal alerts, discount unlocks',    email: true,  sms: false, push: false, in_app: true  },
    { key: 'marketing',label: 'Marketing & Promotions',   desc: 'Agency news, webinars, educational content',         email: false, sms: false, push: false, in_app: false }
  ],
  quiet_hours: { enabled: true, start: '21:00', end: '07:00' },
  preferred_channel: 'email',
  preferred_language: 'English'
};

export const customerProfileDependents = [
  { id: 'DEP-01', name: 'Sarah Reynolds',    role: 'Spouse / Authorized contact',  access: 'View + edit', linked_policies: ['SEMC-WC-2025-48821','TRV-AUTO-2026-11223'], email: 's.reynolds@magnoliaconstruction.com', phone: '(916) 555-0177', added: '2019-06-01' },
  { id: 'DEP-02', name: 'Tom Chen',          role: 'CFO / Financial authority',    access: 'Billing only', linked_policies: ['SEMC-WC-2025-48821','CNA-GL-2025-33102','LIB-UMB-2025-88103','TRV-AUTO-2026-11223'], email: 'tom.chen@magnoliaconstruction.com', phone: '(916) 555-0188', added: '2020-03-15' }
];

export const customerProfileAdditionalInsureds = [
  { id: 'AI-01', name: 'Kroger Real Estate',    relationship: 'Landlord',         policy: 'SEMC-WC-2025-48821', since: '2026-04-15', expires: '2027-04-15' },
  { id: 'AI-02', name: 'Prologis Trust',        relationship: 'Landlord',         policy: 'SEMC-WC-2025-48821', since: '2026-03-22', expires: '2027-03-22' },
  { id: 'AI-03', name: 'Amazon Freight',        relationship: 'Client / Vendor',  policy: 'TRV-AUTO-2026-11223', since: '2026-02-05', expires: '2027-02-05' },
  { id: 'AI-04', name: 'Ally Financial',        relationship: 'Lienholder',       policy: 'TRV-AUTO-2026-11223', since: '2025-08-05', expires: '2026-08-05' }
];

export const customerProfilePrivacy = {
  data_shared_with: [
    { party: 'SEMC / Liberty Mutual',   purpose: 'Workers Comp underwriting, claims',    fields: ['Name','FEIN','Payroll','Claims history'],       consent: '2025-05-18', revocable: false, note: 'Required to maintain coverage' },
    { party: 'CNA',                      purpose: 'General Liability underwriting',       fields: ['Name','Revenue','Locations','Loss runs'],         consent: '2025-04-08', revocable: false, note: 'Required to maintain coverage' },
    { party: 'Travelers',                purpose: 'Commercial Auto underwriting, claims', fields: ['Name','FEIN','Fleet data','Driver records'],     consent: '2025-08-01', revocable: false, note: 'Required to maintain coverage' },
    { party: 'Liberty Mutual (Umbrella)', purpose: 'Umbrella underwriting',                fields: ['Name','Underlying policies','Exposures'],          consent: '2025-05-18', revocable: false, note: 'Required to maintain coverage' },
    { party: 'ZoomInfo',                 purpose: 'Company enrichment (optional)',         fields: ['Company name','Industry','Revenue'],             consent: '2024-03-01', revocable: true,  note: 'You can opt out without affecting coverage' },
    { party: 'Samsara Telematics',       purpose: 'Fleet safety discount verification',   fields: ['Vehicle activity','Driver scores'],                consent: '2025-08-05', revocable: true,  note: 'Revoking will end the 12% fleet discount' }
  ],
  export_requests: [
    { id: 'EXP-04', type: 'Full data package', requested: '2025-11-02', completed: '2025-11-03', format: 'ZIP (PDF + JSON)',  size: '84 MB', downloaded: true  }
  ],
  consent_log: [
    { ts: '2025-01-15', action: 'Accepted Terms of Service v3.2' },
    { ts: '2025-01-15', action: 'Accepted Privacy Notice v2.8' },
    { ts: '2025-01-15', action: 'Signed GLBA Disclosure' },
    { ts: '2026-01-10', action: 'Re-accepted updated Privacy Notice v3.0' }
  ]
};

// ─── Customer Messages & Support ───
export const customerMessagesKPIs = [
  { label: 'Unread Messages',    value: '2', warning: true },
  { label: 'Open Tickets',       value: '1' },
  { label: 'Avg Response Time',  value: '2.4h' },
  { label: 'Resolution Rate',    value: '96%' },
  { label: 'Your CSAT',          value: '4.8 / 5' },
  { label: 'Conversations (YTD)',value: '18' }
];

export const customerMessageCategories = [
  { key: 'general',   icon: '💬', name: 'General Inquiry',            desc: 'Coverage questions, policy concepts', sla: '24h' },
  { key: 'policy',    icon: '📋', name: 'Policy & Endorsements',      desc: 'Changes, additions, cancellations',   sla: '1 business day' },
  { key: 'billing',   icon: '💳', name: 'Billing & Payments',         desc: 'Invoices, refunds, payment plans',    sla: '1 business day' },
  { key: 'claims',    icon: '🛡', name: 'Claims Support',              desc: 'Status updates, documents needed',    sla: '4h' },
  { key: 'risk',      icon: '⚠️', name: 'Risk & Safety',               desc: 'Discounts, assessments, resources',   sla: '2 business days' },
  { key: 'technical', icon: '🛠', name: 'Portal / Technical',          desc: 'Login, uploads, app issues',          sla: '4h' },
  { key: 'feedback',  icon: '⭐', name: 'Feedback & Complaints',       desc: 'Service issues or suggestions',       sla: '1 business day' }
];

export const customerMessageStatuses = ['New', 'In Progress', 'Awaiting Your Reply', 'Resolved', 'Closed'];

export const customerConversations = [
  {
    id: 'MSG-5042',
    subject: 'GL renewal — question about deductible option',
    category: 'policy',
    linked: { type: 'Policy', ref: 'CNA-GL-2025-33102' },
    last_message_at: '2026-04-19 09:12',
    last_from: 'Sarah Chen',
    preview: 'The $5K deductible option you asked about would save ~$840/yr. Should I run the numbers and send a formal offer?',
    unread: 2,
    status: 'Awaiting Your Reply',
    statusColor: 'amber',
    priority: 'normal',
    participants: [
      { name: 'You',          role: 'Client',   avatar_color: '#6c5ce7', initials: 'JR' },
      { name: 'Sarah Chen',   role: 'Producer', avatar_color: '#ff8a65', initials: 'SC' }
    ]
  },
  {
    id: 'MSG-5041',
    subject: 'Auto claim — photos uploaded',
    category: 'claims',
    linked: { type: 'Claim', ref: 'CLM-2026-0051' },
    last_message_at: '2026-04-18 10:24',
    last_from: 'Jane Rodriguez',
    preview: 'Got the photos — thanks! I will send the estimate by EOD tomorrow.',
    unread: 0,
    status: 'In Progress',
    statusColor: 'blue',
    priority: 'normal',
    participants: [
      { name: 'You',             role: 'Client',   avatar_color: '#6c5ce7', initials: 'JR' },
      { name: 'Jane Rodriguez',  role: 'Adjuster', avatar_color: '#ff8a65', initials: 'JR2' },
      { name: 'Sarah Chen',      role: 'Producer', avatar_color: '#ff8a65', initials: 'SC' }
    ]
  },
  {
    id: 'MSG-5040',
    subject: 'Q1 payment confirmation — thanks!',
    category: 'billing',
    linked: { type: 'Invoice', ref: 'INV-20441' },
    last_message_at: '2026-04-15 14:02',
    last_from: 'You',
    preview: 'Thanks Sarah, received the confirmation. All good on my end.',
    unread: 0,
    status: 'Resolved',
    statusColor: 'green',
    priority: 'normal',
    participants: [
      { name: 'You',          role: 'Client',   avatar_color: '#6c5ce7', initials: 'JR' },
      { name: 'Sarah Chen',   role: 'Producer', avatar_color: '#ff8a65', initials: 'SC' }
    ]
  },
  {
    id: 'MSG-5039',
    subject: 'Fleet telematics discount question',
    category: 'risk',
    linked: { type: 'Policy', ref: 'TRV-AUTO-2026-11223' },
    last_message_at: '2026-04-12 16:44',
    last_from: 'Mike Torres',
    preview: 'Confirmed — Samsara integration is active and the 12% credit was applied at your last renewal. You saved $680 this year.',
    unread: 0,
    status: 'Resolved',
    statusColor: 'green',
    priority: 'normal',
    participants: [
      { name: 'You',         role: 'Client', avatar_color: '#6c5ce7', initials: 'JR' },
      { name: 'Mike Torres', role: 'CSR',    avatar_color: '#81c784', initials: 'MT' }
    ]
  },
  {
    id: 'MSG-5038',
    subject: 'Can\'t log in from mobile app',
    category: 'technical',
    linked: null,
    last_message_at: '2026-04-08 11:15',
    last_from: 'Support Team',
    preview: 'Resolved — mobile app was cached with old token. Cleared on our side, please try again and let us know.',
    unread: 0,
    status: 'Closed',
    statusColor: 'gray',
    priority: 'normal',
    participants: [
      { name: 'You',           role: 'Client',  avatar_color: '#6c5ce7', initials: 'JR' },
      { name: 'Support Team',  role: 'Support', avatar_color: '#78909c', initials: 'ST' }
    ]
  }
];

export const customerConversationThread = {
  id: 'MSG-5042',
  messages: [
    { ts: '2026-04-19 09:12', from: 'Sarah Chen',   role: 'Producer', avatar_color: '#ff8a65', initials: 'SC', text: 'The $5K deductible option you asked about would save ~$840/yr. Should I run the numbers and send a formal offer?', read: false, attachments: [] },
    { ts: '2026-04-18 15:40', from: 'You',          role: 'Client',   avatar_color: '#6c5ce7', initials: 'JR', text: 'Quick question on GL renewal — what would the premium look like if I took a $5K deductible instead of $2,500?', read: true, attachments: [] },
    { ts: '2026-04-18 15:35', from: 'Sarah Chen',   role: 'Producer', avatar_color: '#ff8a65', initials: 'SC', text: 'Happy to help! Go ahead and send the question, or we can jump on a quick call.', read: true, attachments: [] },
    { ts: '2026-04-18 15:32', from: 'You',          role: 'Client',   avatar_color: '#6c5ce7', initials: 'JR', text: 'Hi Sarah, got a quick question on my GL renewal — do you have 2 minutes?', read: true, attachments: [{ name: 'CNA_GL_Renewal_Offer.pdf', type: 'pdf', size: '380 KB' }] }
  ],
  attachments_summary: 1
};

export const customerSupportTickets = [
  { id: 'TKT-8842', subject: 'Renewal deductible comparison', category: 'policy',    priority: 'Normal', status: 'In Progress',         statusColor: 'blue',  created: '2026-04-18', assigned: 'Sarah Chen',  sla_target: '2026-04-19 18:00', linked_conv: 'MSG-5042' },
  { id: 'TKT-8841', subject: 'Auto claim — photo submission', category: 'claims',    priority: 'High',   status: 'In Progress',         statusColor: 'amber', created: '2026-04-17', assigned: 'Jane Rodriguez', sla_target: '2026-04-18 12:00', linked_conv: 'MSG-5041' },
  { id: 'TKT-8840', subject: 'Q1 payment confirmation',        category: 'billing',   priority: 'Low',    status: 'Resolved',            statusColor: 'green', created: '2026-04-15', assigned: 'Sarah Chen',  resolved: '2026-04-15', linked_conv: 'MSG-5040' },
  { id: 'TKT-8839', subject: 'Telematics discount verification',category: 'risk',     priority: 'Normal', status: 'Resolved',            statusColor: 'green', created: '2026-04-12', assigned: 'Mike Torres', resolved: '2026-04-12', linked_conv: 'MSG-5039' },
  { id: 'TKT-8838', subject: 'Mobile app login issue',          category: 'technical', priority: 'High',   status: 'Closed',              statusColor: 'gray',  created: '2026-04-08', assigned: 'Support Team',resolved: '2026-04-08', linked_conv: 'MSG-5038' }
];

export const customerLiveChatTranscript = [
  { ts: '11:22 AM', from: 'AI Assistant', role: 'ai',     text: 'Hi James! I\'m your agency\'s AI assistant. How can I help you today?' },
  { ts: '11:23 AM', from: 'You',          role: 'client', text: 'When is my next premium payment due?' },
  { ts: '11:23 AM', from: 'AI Assistant', role: 'ai',     text: 'Your next payment is **$15,392** for General Liability, due **2026-04-12** (past due 7 days ago — please pay ASAP to avoid cancellation). Want me to open the payment flow?' },
  { ts: '11:24 AM', from: 'You',          role: 'client', text: 'Actually I want to talk to Sarah about a deductible change' },
  { ts: '11:24 AM', from: 'AI Assistant', role: 'ai',     text: 'Got it — I\'m handing you off to Sarah Chen now. She typically replies within 2 hours. Meanwhile, here is a helpful article on deductible options.' },
  { ts: '11:25 AM', from: 'Sarah Chen',   role: 'human',  text: 'Hi James! I saw your question come in. Happy to walk through deductible options — do you have 2 minutes now or would you prefer I send a formal comparison?' }
];

export const customerCallbackSlots = [
  { date: '2026-04-19', day: 'Today',      slots: ['2:00 PM', '3:30 PM', '4:45 PM'] },
  { date: '2026-04-20', day: 'Monday',     slots: ['9:00 AM', '10:30 AM', '1:00 PM', '3:15 PM'] },
  { date: '2026-04-21', day: 'Tuesday',    slots: ['9:30 AM', '11:00 AM', '2:00 PM'] },
  { date: '2026-04-22', day: 'Wednesday',  slots: ['10:00 AM', '1:45 PM', '4:00 PM'] }
];

export const customerKnowledgeBase = [
  { id: 'KB-101', title: 'How do I file a claim on the portal?',                category: 'claims',    views: 1284, rating: 4.8, updated: '2026-04-10', preview: 'Step-by-step guide to filing your first claim through the portal — takes about 5 minutes.' },
  { id: 'KB-102', title: 'What is a certificate of insurance (COI)?',            category: 'policy',    views: 982,  rating: 4.9, updated: '2026-03-22', preview: 'A COI is a one-page document that proves you carry insurance. Your landlord, customers, and vendors may require one.' },
  { id: 'KB-103', title: 'Why is my premium going up at renewal?',               category: 'billing',   views: 876,  rating: 4.6, updated: '2026-04-05', preview: 'Premiums change at renewal based on loss history, coverage, industry trends, and inflation. Here is how we determine your rate.' },
  { id: 'KB-104', title: 'How do I enroll in autopay?',                          category: 'billing',   views: 742,  rating: 4.9, updated: '2026-03-15', preview: 'Autopay takes 60 seconds to set up and waives all installment fees. Here is how.' },
  { id: 'KB-105', title: 'What do I do immediately after a loss?',               category: 'claims',    views: 684,  rating: 5.0, updated: '2026-04-15', preview: 'First 24 hours after a loss — safety, documentation, notification. The quick checklist.' },
  { id: 'KB-106', title: 'How to get a premium discount with telematics',        category: 'risk',      views: 612,  rating: 4.7, updated: '2026-04-02', preview: 'Telematics devices or mobile apps can save 10–22% on commercial auto — here is how the programs work.' },
  { id: 'KB-107', title: 'Can I add a new vehicle mid-term?',                    category: 'policy',    views: 524,  rating: 4.8, updated: '2026-02-28', preview: 'Yes — endorsements can be added at any time. Most are effective within 24 hours. Here is the process.' },
  { id: 'KB-108', title: 'Two-factor authentication setup',                      category: 'technical', views: 428,  rating: 4.9, updated: '2026-03-01', preview: 'Protect your account with 2FA in 90 seconds — authenticator app or SMS.' },
  { id: 'KB-109', title: 'What happens if my claim is denied?',                  category: 'claims',    views: 394,  rating: 4.5, updated: '2026-03-20', preview: 'Understand why claims get denied, how to appeal, and what other options you have.' },
  { id: 'KB-110', title: 'How do I request a payment plan?',                     category: 'billing',   views: 362,  rating: 4.8, updated: '2026-04-08', preview: 'If you need to split a large premium, we offer 2–6 month plans at no cost for autopay clients.' }
];

// ─── Customer Risk Management & Resources ───
export const customerRiskKPIs = [
  { label: 'Your Risk Score',        value: '82 / 100' },
  { label: 'Claim-Free Streak',      value: '14 mo' },
  { label: 'Active Safety Programs', value: '4' },
  { label: 'Unlocked Discounts',     value: '$2,840 / yr' },
  { label: 'Actions Completed',      value: '8 of 12' },
  { label: 'Peer Ranking',           value: 'Top 12%' }
];

export const customerRiskProfile = {
  overall_score: 82,
  prior_score: 74,
  change: '+8',
  tier: 'Strong',
  tier_color: 'green',
  benchmark: { industry: 'Construction', peer_avg: 68, top_quartile: 80 },
  top_exposures: [
    { name: 'Fleet Safety',      score: 76, weight: 30, trend: 'up',   note: 'Telematics enabled · DriverScore 88 · 0 at-fault 24mo' },
    { name: 'Workplace Safety',  score: 88, weight: 25, trend: 'up',   note: 'OSHA-compliant · DART rate below industry avg · safety audit 88' },
    { name: 'Cyber Exposure',    score: 58, weight: 20, trend: 'flat', note: 'MFA on email only · no endpoint protection · attention needed' },
    { name: 'Property / Premises',score: 82, weight: 15, trend: 'up',   note: 'Sprinklered · monitored alarm · deadbolts · fire extinguishers current' },
    { name: 'Liability Exposure',score: 86, weight: 10, trend: 'flat', note: 'Strong contracts · waiver-of-subro active · additional insureds on file' }
  ],
  claim_frequency_delta: -42,
  premium_savings_unlocked: 2840,
  premium_savings_available: 1620
};

export const customerRiskActions = [
  { id: 'RA-01', title: 'Enable multi-factor authentication on all business accounts', category: 'Cyber',      impact: 'High',   effort: 'Low',    est_savings: 420, status: 'in_progress', due: '2026-04-30', required_docs: 'Screenshot showing MFA enforcement' },
  { id: 'RA-02', title: 'Install endpoint protection (anti-malware) on all fleet laptops', category: 'Cyber', impact: 'High',   effort: 'Medium', est_savings: 480, status: 'pending',     due: '2026-05-15', required_docs: 'Proof of install or vendor agreement' },
  { id: 'RA-03', title: 'Complete employee phishing training (annual)',               category: 'Cyber',      impact: 'Medium', effort: 'Low',    est_savings: 240, status: 'pending',     due: '2026-06-01', required_docs: 'Completion certificate' },
  { id: 'RA-04', title: 'Quarterly driver safety refresher (all fleet drivers)',      category: 'Fleet',      impact: 'High',   effort: 'Medium', est_savings: 680, status: 'complete',    completed: '2026-03-22', verified: true },
  { id: 'RA-05', title: 'Dashcam install — remaining 3 vehicles',                     category: 'Fleet',      impact: 'Medium', effort: 'Medium', est_savings: 320, status: 'in_progress', due: '2026-05-01', required_docs: 'Install invoice' },
  { id: 'RA-06', title: 'Fire extinguisher annual inspection',                        category: 'Property',   impact: 'Medium', effort: 'Low',    est_savings: 180, status: 'complete',    completed: '2026-02-10', verified: true },
  { id: 'RA-07', title: 'Update OSHA 300 log (annual posting)',                       category: 'Workplace',  impact: 'Low',    effort: 'Low',    est_savings: 0,   status: 'complete',    completed: '2026-02-01', verified: true },
  { id: 'RA-08', title: 'Slip/fall signage in shop floor wet areas',                  category: 'Liability',  impact: 'Medium', effort: 'Low',    est_savings: 150, status: 'complete',    completed: '2026-01-15', verified: true },
  { id: 'RA-09', title: 'Add hazmat spill kit (per OSHA 1910.120)',                   category: 'Workplace',  impact: 'Low',    effort: 'Low',    est_savings: 100, status: 'pending',     due: '2026-06-30', required_docs: 'Photo of kit in place' },
  { id: 'RA-10', title: 'Roof inspection post-winter storms',                         category: 'Property',   impact: 'Medium', effort: 'Medium', est_savings: 220, status: 'complete',    completed: '2026-03-05', verified: true },
  { id: 'RA-11', title: 'Security camera installation at yard entrance',              category: 'Property',   impact: 'High',   effort: 'High',   est_savings: 380, status: 'complete',    completed: '2026-02-28', verified: true },
  { id: 'RA-12', title: 'Client contract review — liability caps',                    category: 'Liability',  impact: 'Medium', effort: 'High',   est_savings: 200, status: 'complete',    completed: '2026-01-22', verified: true }
];

export const customerRiskResourceCategories = [
  { key: 'all',        icon: '🗂', name: 'All Resources',      count: 58 },
  { key: 'fleet',      icon: '🚚', name: 'Fleet & Auto',       count: 14 },
  { key: 'workplace',  icon: '👷', name: 'Workplace Safety',   count: 12 },
  { key: 'cyber',      icon: '🔒', name: 'Cyber Security',      count: 10 },
  { key: 'property',   icon: '🏢', name: 'Property & Premises', count: 8  },
  { key: 'claims',     icon: '🛡', name: 'Claim Prevention',    count: 9  },
  { key: 'seasonal',   icon: '🌦', name: 'Seasonal / Weather',  count: 5  }
];

export const customerRiskResources = [
  { id: 'RR-201', title: 'How to Prevent Water-Damage Claims in Commercial Properties', category: 'property', type: 'Video',         duration: '4 min',  relevance: 94, status: 'new',         updated: '2026-04-10', thumbnail: '💧', discount_eligible: true,  description: '5 easy checks that stop 80% of water claims — from shut-off valves to drain maintenance.' },
  { id: 'RR-202', title: 'Fleet Telematics 101 — What Your Data Can Do for You',        category: 'fleet',    type: 'Article',       duration: '6 min',  relevance: 92, status: 'recommended', updated: '2026-03-28', thumbnail: '📡', discount_eligible: true,  description: 'Use telematics to reduce at-fault accidents, coach drivers, and qualify for premium credits.' },
  { id: 'RR-203', title: 'Cyber Readiness Quiz — Is Your Business Protected?',          category: 'cyber',    type: 'Assessment',    duration: '8 min',  relevance: 98, status: 'recommended', updated: '2026-04-05', thumbnail: '🔒', discount_eligible: true,  description: 'Get a personalized cyber score + specific next steps for your size and industry.' },
  { id: 'RR-204', title: 'OSHA 300 Log — Why It Matters and How to Post It',             category: 'workplace',type: 'PDF Guide',     duration: '12 pages',relevance: 78, status: 'completed',   updated: '2026-01-15', thumbnail: '📋', discount_eligible: false, description: 'Required annual posting · step-by-step walkthrough with sample entries.' },
  { id: 'RR-205', title: 'Winter Weather Prep for California Businesses',                category: 'seasonal', type: 'Checklist',     duration: '5 min',  relevance: 72, status: 'new',         updated: '2026-04-01', thumbnail: '❄️', discount_eligible: false, description: 'Atmospheric river season is here — 14-point checklist to protect your property and fleet.' },
  { id: 'RR-206', title: 'Driver Safety Webinar — Defensive Driving Essentials',         category: 'fleet',    type: 'Webinar',       duration: '45 min', relevance: 88, status: 'in_progress', updated: '2026-02-14', thumbnail: '🎥', discount_eligible: true,  description: 'Live monthly webinar · counts toward annual driver training requirement · discount-eligible.' },
  { id: 'RR-207', title: 'Slip, Trip & Fall Prevention for Construction Sites',          category: 'workplace',type: 'Infographic',   duration: '2 min',  relevance: 86, status: 'completed',   updated: '2026-01-10', thumbnail: '⚠️', discount_eligible: false, description: 'Top 10 causes and simple prevention actions · print for the shop floor.' },
  { id: 'RR-208', title: 'Phishing & Social Engineering — 6 Red Flags',                  category: 'cyber',    type: 'Video',         duration: '3 min',  relevance: 94, status: 'recommended', updated: '2026-04-12', thumbnail: '🎣', discount_eligible: true,  description: 'Share with your team · passes as employee training for cyber credit.' },
  { id: 'RR-209', title: 'Post-Claim Playbook — Preventing Repeat Water Damage',         category: 'claims',   type: 'PDF Guide',     duration: '8 pages',relevance: 90, status: 'recommended', updated: '2026-04-15', thumbnail: '🔁', discount_eligible: false, description: 'After your 2025 burst-pipe claim, here are the 7 specific upgrades that stop recurrence.' },
  { id: 'RR-210', title: 'Additional Insured Essentials — What to Require from Vendors', category: 'property', type: 'Article',       duration: '7 min',  relevance: 74, status: 'new',         updated: '2026-04-08', thumbnail: '📝', discount_eligible: false, description: 'Protect yourself from vendor exposure with the right contract language.' }
];

export const customerRiskAssessments = [
  { id: 'AS-01', title: 'Cyber Readiness Assessment',          lob: 'Cyber',     questions: 12, duration: '8 min',  status: 'recommended', last_score: null, discount: '$420 / yr',  description: 'Benchmark your controls vs. carrier requirements. Unlocks cyber premium credit.' },
  { id: 'AS-02', title: 'Fleet Safety & Driver Scorecard',     lob: 'Auto',      questions: 18, duration: '12 min', status: 'completed',   last_score: 88,   discount: '$680 / yr',  description: 'Your fleet scored 88/100 — top quartile. Discount applied on next renewal.' },
  { id: 'AS-03', title: 'Workplace Safety Self-Audit',         lob: 'WC',        questions: 25, duration: '15 min', status: 'completed',   last_score: 92,   discount: '$520 / yr',  description: 'OSHA-aligned checklist · exceeded carrier threshold for preferred WC rate.' },
  { id: 'AS-04', title: 'Business Continuity Readiness',        lob: 'Property',  questions: 14, duration: '10 min', status: 'not_started', last_score: null, discount: '$180 / yr',  description: 'How prepared are you for an event that shuts you down for 72+ hours?' },
  { id: 'AS-05', title: 'Contract Liability Review',            lob: 'GL',        questions: 8,  duration: '5 min',  status: 'not_started', last_score: null, discount: '$0',         description: 'Identify gaps in your vendor/customer contracts that could expose you.' }
];

export const customerRiskDiscounts = [
  { id: 'DI-01', name: 'Fleet Telematics Credit',           savings: 680,  status: 'Active',     statusColor: 'green', policy: 'TRV-AUTO-2026-11223', source: 'Verified by carrier · Samsara feed', program: 'Safe Fleet Program', expiry: '2026-08-05' },
  { id: 'DI-02', name: 'WC Safety Program Discount',         savings: 520,  status: 'Active',     statusColor: 'green', policy: 'SEMC-WC-2025-48821', source: 'Verified annual audit (88/100)',      program: 'Schedule Credit',    expiry: '2026-06-01' },
  { id: 'DI-03', name: 'Security Camera Credit',             savings: 380,  status: 'Active',     statusColor: 'green', policy: 'CNA-GL-2025-33102',  source: 'Receipt + photo verified',           program: 'Premises Credit',    expiry: '2026-04-12' },
  { id: 'DI-04', name: 'Driver Safety Training',              savings: 420,  status: 'Active',     statusColor: 'green', policy: 'TRV-AUTO-2026-11223', source: 'Quarterly completion on file',       program: 'Safe Fleet Program', expiry: '2026-07-01' },
  { id: 'DI-05', name: 'Sprinkler / Alarm Credit',            savings: 240,  status: 'Active',     statusColor: 'green', policy: 'CNA-GL-2025-33102',  source: 'Certificate verified',               program: 'Protection Credit',  expiry: '2026-04-12' },
  { id: 'DI-06', name: 'Cyber Training Program',             savings: 420,  status: 'Available',  statusColor: 'amber', policy: '—',                   source: 'Complete Cyber Readiness Quiz',      program: 'Cyber Credit',       expiry: '—',        action: 'Complete assessment' },
  { id: 'DI-07', name: 'Endpoint Protection Credit',         savings: 480,  status: 'Available',  statusColor: 'amber', policy: '—',                   source: 'Upload vendor agreement',            program: 'Cyber Credit',       expiry: '—',        action: 'Upload proof' },
  { id: 'DI-08', name: 'Remote Worker Safety Program',       savings: 380,  status: 'Available',  statusColor: 'amber', policy: '—',                   source: 'Attest to remote-work policy',       program: 'WC Credit',          expiry: '—',        action: 'Submit attestation' },
  { id: 'DI-09', name: 'Continuity Plan Credit',              savings: 340,  status: 'Available',  statusColor: 'amber', policy: '—',                   source: 'Complete Business Continuity Quiz',  program: 'Property Credit',    expiry: '—',        action: 'Take quiz' }
];

export const customerSeasonalAlerts = [
  { id: 'SE-01', title: 'Atmospheric River Season — CA',          season: 'Apr–Jun',  severity: 'High',   status: 'Active',     icon: '🌧️', description: 'Heavy rainfall expected through early May. Atmospheric rivers caused $2.1B in claims last year.', checklist: ['Inspect roof drains', 'Clear gutters', 'Test sump pumps', 'Seal windows', 'Move inventory off ground floor'], link: 'RR-205' },
  { id: 'SE-02', title: 'Wildfire Season Prep — California',      season: 'Jun–Oct',  severity: 'High',   status: 'Upcoming',   icon: '🔥', description: 'Defensible space and ember preparation reduce wildfire claims by 78%. Begin prep by June.',         checklist: ['Clear 100-ft defensible space', 'Install ember-resistant vents', 'Photo inventory for claims', 'Update emergency contact list'], link: null },
  { id: 'SE-03', title: 'Heat Stress & OSHA Compliance',          season: 'Jun–Sep',  severity: 'Medium', status: 'Upcoming',   icon: '🌡', description: 'Outdoor workers require heat-illness prevention per CA Title 8 §3395. Violations = WC claims.',    checklist: ['Heat-illness plan current', 'Water supply on site', 'Shaded rest area', 'Acclimatization schedule', 'Emergency response plan'], link: null },
  { id: 'SE-04', title: 'Year-End Tax Documentation',             season: 'Nov–Dec',  severity: 'Low',    status: 'Dormant',    icon: '📊', description: 'Insurance documents for tax prep (dec pages, premium tax statements).',                          checklist: ['Download all declarations', 'Export premium summary', 'Claim settlement docs', 'Paid invoices for deductibility'], link: null }
];

export const customerRiskReports = [
  { id: 'RPT-2026', year: 2026, generated: '2026-04-01', type: 'Annual Risk Review', producer: 'Sarah Chen', status: 'Available', statusColor: 'green', pages: 14, highlights: ['Risk score +8 (74 → 82)', '$2,840/yr in credits unlocked', '0 claims vs. peer avg of 1.2', 'Top quartile industry benchmark'] },
  { id: 'RPT-2025', year: 2025, generated: '2025-04-02', type: 'Annual Risk Review', producer: 'Sarah Chen', status: 'Archived',  statusColor: 'gray',  pages: 12, highlights: ['Initial baseline score: 74', '$1,420/yr credits unlocked', '1 claim (water damage)', 'Median peer benchmark'] },
  { id: 'RPT-2024', year: 2024, generated: '2024-04-05', type: 'Annual Risk Review', producer: 'Sarah Chen', status: 'Archived',  statusColor: 'gray',  pages: 10, highlights: ['Initial baseline score: 66', '$820/yr credits unlocked', '2 claims', 'Below peer benchmark'] }
];

// ─── Customer Claims Center ───
export const customerClaimsKPIs = [
  { label: 'Open Claims',         value: '1', warning: true },
  { label: 'Awaiting Your Action', value: '1', warning: true },
  { label: 'Paid to Date',        value: '$0' },
  { label: 'Closed (12 mo)',      value: '2' },
  { label: 'Avg Resolution',      value: '18 days' },
  { label: 'Your Satisfaction',   value: '4.6 / 5' }
];

export const customerClaimTypes = [
  { key: 'auto',     icon: '🚗',  name: 'Auto / Fleet',           desc: 'Collision, comprehensive, liability' },
  { key: 'property', icon: '🏢',  name: 'Property / Commercial',  desc: 'Fire, wind, theft, water damage' },
  { key: 'liability',icon: '⚖️',  name: 'Liability / General',    desc: 'Slip-and-fall, product, professional' },
  { key: 'wc',       icon: '👷',  name: 'Workers Comp',           desc: 'Employee injury or illness' },
  { key: 'cyber',    icon: '💻',  name: 'Cyber / Specialty',      desc: 'Data breach, ransomware, fraud' },
  { key: 'other',    icon: '📝',  name: 'Other',                  desc: 'Not sure? Our team will route it' }
];

export const customerClaimStatuses = ['FNOL Filed', 'Adjuster Assigned', 'Under Investigation', 'Estimate Issued', 'Payment Issued', 'Closed', 'Denied'];

export const customerClaims = [
  {
    id: 'CLM-2026-0051',
    type: 'Auto / Fleet',
    icon: '🚗',
    policy: 'TRV-AUTO-2026-11223',
    carrier: 'Travelers',
    loss_date: '2026-04-12',
    loss_type: 'Collision — rear-ended at intersection',
    location: 'Folsom Blvd & 65th St, Sacramento CA',
    status: 'Under Investigation',
    statusColor: 'amber',
    stage_index: 2,
    reported: '2026-04-12 16:40',
    reported_via: 'Portal · FNOL Wizard',
    adjuster: { name: 'Jane Rodriguez', phone: '(800) 238-6225 ext. 4472', email: 'j.rodriguez@travelers.com', photo_color: 'linear-gradient(135deg,#ff8a65,#ffab40)', initials: 'JR' },
    paid_to_date: 0,
    reserve: 8500,
    final_settlement: null,
    next_action: 'Photos of damage requested',
    next_action_urgent: true,
    days_open: 7,
    docs_count: 5,
    messages_unread: 2,
    has_open_task: true
  },
  {
    id: 'CLM-2026-0042',
    type: 'Auto / Fleet',
    icon: '🚗',
    policy: 'TRV-AUTO-2026-11223',
    carrier: 'Travelers',
    loss_date: '2026-03-15',
    loss_type: 'Fender-bender — parking lot',
    location: 'Costco parking lot, West Sacramento CA',
    status: 'Closed',
    statusColor: 'green',
    stage_index: 5,
    reported: '2026-03-15 14:22',
    reported_via: 'Phone · After-hours hotline',
    adjuster: { name: 'Mark Chen', phone: '(800) 238-6225 ext. 3118', email: 'm.chen@travelers.com', photo_color: 'linear-gradient(135deg,#4fc3f7,#29b6f6)', initials: 'MC' },
    paid_to_date: 3240,
    reserve: 0,
    final_settlement: 3240,
    next_action: '—',
    next_action_urgent: false,
    days_open: 21,
    docs_count: 8,
    messages_unread: 0,
    has_open_task: false
  },
  {
    id: 'CLM-2025-1188',
    type: 'Property / Commercial',
    icon: '🏢',
    policy: 'CNA-GL-2025-33102',
    carrier: 'CNA',
    loss_date: '2025-11-20',
    loss_type: 'Water damage — burst pipe',
    location: '1201 Industrial Blvd, Sacramento CA',
    status: 'Closed',
    statusColor: 'green',
    stage_index: 5,
    reported: '2025-11-20 08:30',
    reported_via: 'Portal · FNOL Wizard',
    adjuster: { name: 'Linda Park', phone: '(800) 262-2000 ext. 8804', email: 'linda.park@cna.com', photo_color: 'linear-gradient(135deg,#81c784,#66bb6a)', initials: 'LP' },
    paid_to_date: 12800,
    reserve: 0,
    final_settlement: 12800,
    next_action: '—',
    next_action_urgent: false,
    days_open: 32,
    docs_count: 12,
    messages_unread: 0,
    has_open_task: false
  }
];

export const customerClaimDetail = {
  id: 'CLM-2026-0051',
  timeline: [
    { ts: '2026-04-18 10:22', stage: 'Under Investigation', event: 'Photos of damage requested',              actor: 'Jane Rodriguez',  system: false, urgent: true  },
    { ts: '2026-04-17 14:15', stage: 'Under Investigation', event: 'Police report uploaded · CHP #2026-88421',actor: 'You',             system: false, urgent: false },
    { ts: '2026-04-14 09:30', stage: 'Under Investigation', event: 'Adjuster inspection scheduled for 4/22',  actor: 'Jane Rodriguez',  system: false, urgent: false },
    { ts: '2026-04-13 11:05', stage: 'Adjuster Assigned',   event: 'Jane Rodriguez assigned as your adjuster', actor: 'System',          system: true,  urgent: false },
    { ts: '2026-04-12 16:40', stage: 'FNOL Filed',          event: 'Claim filed via portal · confirmation #CLM-2026-0051', actor: 'You', system: false, urgent: false }
  ],
  documents: [
    { id: 'CDOC-C051-1', name: 'Dashcam clip — collision.mp4',      type: 'Video',          size: '12 MB',  uploaded: '2026-04-12 16:42', uploaded_by: 'You' },
    { id: 'CDOC-C051-2', name: 'Police report — CHP #2026-88421.pdf', type: 'Police Report',size: '820 KB', uploaded: '2026-04-17 14:15', uploaded_by: 'You' },
    { id: 'CDOC-C051-3', name: 'Other driver insurance info.pdf',   type: 'Third Party',    size: '120 KB', uploaded: '2026-04-12 16:50', uploaded_by: 'You' },
    { id: 'CDOC-C051-4', name: 'Repair estimate — Firestone.pdf',   type: 'Estimate',       size: '480 KB', uploaded: '2026-04-18 09:04', uploaded_by: 'You' },
    { id: 'CDOC-C051-5', name: 'FNOL Confirmation.pdf',              type: 'FNOL',           size: '180 KB', uploaded: '2026-04-12 16:41', uploaded_by: 'System' }
  ],
  messages: [
    { ts: '2026-04-18 10:22', from: 'Jane Rodriguez', role: 'Adjuster', avatar_color: '#ff8a65', initials: 'JR', read: false, text: 'Hi James — good news, the police report gives us a clear picture. To finalize the estimate I need 3 more photos: a wide shot of the rear bumper, a close-up of the tail-light damage, and the driver-side quarter panel. Upload when convenient.' },
    { ts: '2026-04-17 14:20', from: 'Jane Rodriguez', role: 'Adjuster', avatar_color: '#ff8a65', initials: 'JR', read: false, text: 'Got the police report — thanks for the fast turnaround. I will circle back tomorrow with next steps.' },
    { ts: '2026-04-17 14:15', from: 'You',            role: 'Client',   avatar_color: '#6c5ce7', initials: 'JR', read: true,  text: 'Uploaded the police report. Should have all details there.' },
    { ts: '2026-04-14 09:30', from: 'Jane Rodriguez', role: 'Adjuster', avatar_color: '#ff8a65', initials: 'JR', read: true,  text: "Welcome — I'm Jane, your adjuster. I'd like to schedule an inspection for next Tuesday. Does 4/22 at 10am work?" },
    { ts: '2026-04-13 11:05', from: 'System',         role: 'System',   avatar_color: '#78909c', initials: 'SY', read: true,  text: 'Your claim has been assigned to Jane Rodriguez (Travelers · License CA-AD-48829). She will reach out within 24 hours.' }
  ],
  requested_docs: [
    { item: '3 photos of rear bumper damage', required: true,  status: 'pending'  },
    { item: 'Repair shop written estimate',    required: true,  status: 'complete' },
    { item: 'Police report or incident #',     required: true,  status: 'complete' },
    { item: 'Medical bills (if any)',          required: false, status: 'pending'  }
  ]
};

export const customerClaimSettlement = {
  id: 'CLM-2026-0042',
  estimate: {
    total: 3240,
    line_items: [
      { k: 'Labor (4.5 hrs @ $120)',              v: 540 },
      { k: 'Parts — front bumper + tail light',    v: 1880 },
      { k: 'Paint and refinish',                  v: 620 },
      { k: 'Shop supplies / disposal',            v: 200 }
    ],
    less_deductible: 1000,
    payable: 2240
  },
  payments: [
    { ts: '2026-04-05 08:00', amount: 2240, method: 'ACH direct-deposit ••4421',  status: 'Settled', statusColor: 'green', note: 'Final settlement' }
  ],
  closing_signed: true,
  satisfaction: 5
};

export const customerClaimFeedback = [
  { q: 'Overall, how satisfied are you with the claim experience?',     type: 'rating'   },
  { q: 'How clear and timely were the updates you received?',            type: 'rating'   },
  { q: 'How easy was it to use the portal to manage this claim?',        type: 'rating'   },
  { q: 'What could we have done better?',                                type: 'text'     },
  { q: 'Anything else you would like your producer to know?',            type: 'text'     }
];

export const customerClaimsSuggestedQs = [
  'What documents do I need for a water damage claim?',
  'How long does an auto claim usually take?',
  'How do you calculate my deductible?',
  'Can I use my own repair shop?',
  'What if I disagree with the estimate?'
];

// ─── Customer Billing & Payments ───
export const customerBillingKPIs = [
  { label: 'Total Balance',   value: '$15,392', warning: true },
  { label: 'Next Payment Due', value: '2026-04-12' },
  { label: 'Past Due',        value: '$0' },
  { label: 'Paid YTD',        value: '$98,450' },
  { label: 'Autopay Active',  value: '2 of 4' },
  { label: 'Saved Methods',   value: '3' }
];

export const customerInvoiceStatuses = ['Due', 'Paid', 'Partially Paid', 'Past Due', 'Overdue', 'Refund Issued', 'Cancelled'];

export const customerInvoices = [
  { id: 'INV-20446', policy: 'CNA-GL-2025-33102',  policy_type: 'General Liability', carrier: 'CNA',             billing_type: 'Renewal',              issued: '2026-04-10', due: '2026-04-12', amount: 15392, base: 14800, taxes: 0,   fees: 592,  paid: 0,     balance: 15392, status: 'Due',           statusColor: 'amber', direct_bill: false, autopay: false, aging: 2,  urgent: true  },
  { id: 'INV-20445', policy: 'TRV-AUTO-2026-11223',policy_type: 'Commercial Auto',  carrier: 'Travelers',        billing_type: 'Installment',           issued: '2026-04-05', due: '2026-05-05', amount: 5225,  base: 5225,  taxes: 0,   fees: 0,    paid: 0,     balance: 5225,  status: 'Due',           statusColor: 'blue',  direct_bill: false, autopay: true,  aging: 0,  urgent: false },
  { id: 'INV-20444', policy: 'SEMC-WC-2025-48821', policy_type: 'Workers Comp',    carrier: 'SEMC / Liberty',   billing_type: 'Installment',           issued: '2026-04-01', due: '2026-04-15', amount: 46175, base: 46175, taxes: 0,   fees: 0,    paid: 46175, balance: 0,    status: 'Paid',          statusColor: 'green', direct_bill: false, autopay: true,  paid_date: '2026-04-15', paid_method: 'ACH · Business Checking ••4421' },
  { id: 'INV-20443', policy: 'LIB-UMB-2025-88103', policy_type: 'Umbrella',         carrier: 'Liberty Mutual',   billing_type: 'New Business',          issued: '2025-06-01', due: '2025-06-15', amount: 18200, base: 18200, taxes: 0,   fees: 0,    paid: 18200, balance: 0,    status: 'Paid',          statusColor: 'green', direct_bill: false, autopay: false, paid_date: '2025-06-14', paid_method: 'Card · Visa ••1181' },
  { id: 'INV-20442', policy: 'TRV-AUTO-2026-11223',policy_type: 'Commercial Auto',  carrier: 'Travelers',        billing_type: 'Endorsement',           issued: '2026-03-22', due: '2026-04-05', amount: 860,   base: 825,   taxes: 0,   fees: 35,   paid: 860,   balance: 0,    status: 'Paid',          statusColor: 'green', direct_bill: false, autopay: true,  paid_date: '2026-04-05', paid_method: 'Autopay · ACH ••4421', note: 'Added Truck #12 mid-term' },
  { id: 'INV-20441', policy: 'SEMC-WC-2025-48821', policy_type: 'Workers Comp',    carrier: 'SEMC / Liberty',   billing_type: 'Installment',           issued: '2026-01-01', due: '2026-01-15', amount: 46175, base: 46175, taxes: 0,   fees: 0,    paid: 46175, balance: 0,    status: 'Paid',          statusColor: 'green', direct_bill: false, autopay: true,  paid_date: '2026-01-15', paid_method: 'Autopay · ACH ••4421' },
  { id: 'INV-20440', policy: 'CNA-GL-2025-33102',  policy_type: 'General Liability', carrier: 'CNA',             billing_type: 'Refund / Return Premium',issued: '2026-03-10', due: '2026-03-10', amount: -480,  base: -480,  taxes: 0,   fees: 0,    paid: -480,  balance: 0,    status: 'Refund Issued', statusColor: 'blue',  direct_bill: true,  autopay: false, paid_date: '2026-03-12', paid_method: 'ACH credit to ••4421', note: 'Mid-term credit — reduced exposure' }
];

export const customerInvoiceDetail = {
  id: 'INV-20446',
  policy: 'CNA-GL-2025-33102',
  carrier: 'CNA',
  line_items: [
    { k: 'General Liability Premium (annual)', v: 14800, note: 'Renewal 2026-04-12 to 2027-04-12' },
    { k: 'Policy Fee',                          v: 50 },
    { k: 'State Surplus Lines Tax',             v: 0 },
    { k: 'Agency Admin Fee',                    v: 42 },
    { k: 'Installment Fee (waived — autopay)',  v: 0 },
    { k: 'Prior Credit Applied',                v: -500 }
  ]
};

export const customerPaymentMethods = [
  { id: 'PM-01', type: 'ACH',  label: 'Business Checking ••4421',  bank: 'Bank of America',  default: true,  autopay: ['SEMC-WC-2025-48821','TRV-AUTO-2026-11223'], added: '2023-06-14' },
  { id: 'PM-02', type: 'Visa', label: 'Visa ••1181',                bank: 'Corporate Card',    default: false, autopay: [],                            added: '2024-08-02', expires: '08/27' },
  { id: 'PM-03', type: 'AmEx', label: 'AmEx ••2006',                bank: 'Corporate Card',    default: false, autopay: [],                            added: '2025-02-12', expires: '02/28' }
];

export const customerAutopayPlans = [
  { policy: 'SEMC-WC-2025-48821', lob: 'Workers Comp',     carrier: 'SEMC / Liberty', frequency: 'Quarterly',    amount: 46175, method_id: 'PM-01', next: '2026-07-01', status: 'Active',  statusColor: 'green' },
  { policy: 'TRV-AUTO-2026-11223',lob: 'Commercial Auto',  carrier: 'Travelers',      frequency: 'Monthly',      amount: 5225,  method_id: 'PM-01', next: '2026-05-05', status: 'Active',  statusColor: 'green' },
  { policy: 'CNA-GL-2025-33102',  lob: 'General Liability',carrier: 'CNA',            frequency: 'Annual',       amount: 15392, method_id: null,    next: '—',          status: 'Not Enrolled', statusColor: 'gray'  },
  { policy: 'LIB-UMB-2025-88103', lob: 'Umbrella',          carrier: 'Liberty Mutual', frequency: 'Annual',       amount: 18200, method_id: null,    next: '—',          status: 'Not Enrolled', statusColor: 'gray'  }
];

export const customerPaymentHistory = [
  { id: 'PMT-88421', invoice: 'INV-20444', date: '2026-04-15 09:22', amount: 46175, method: 'Autopay · ACH ••4421', status: 'Settled', statusColor: 'green' },
  { id: 'PMT-88420', invoice: 'INV-20442', date: '2026-04-05 00:02', amount: 860,   method: 'Autopay · ACH ••4421', status: 'Settled', statusColor: 'green' },
  { id: 'PMT-88419', invoice: 'INV-20441', date: '2026-01-15 09:22', amount: 46175, method: 'Autopay · ACH ••4421', status: 'Settled', statusColor: 'green' },
  { id: 'PMT-88418', invoice: 'INV-20438', date: '2025-10-15 09:22', amount: 46175, method: 'Autopay · ACH ••4421', status: 'Settled', statusColor: 'green' },
  { id: 'PMT-88417', invoice: 'INV-20435', date: '2025-07-15 09:22', amount: 46175, method: 'Autopay · ACH ••4421', status: 'Settled', statusColor: 'green' },
  { id: 'PMT-88416', invoice: 'INV-20443', date: '2025-06-14 16:05', amount: 18200, method: 'Visa ••1181',           status: 'Settled', statusColor: 'green' },
  { id: 'PMT-88415', invoice: 'INV-20440', date: '2026-03-12 08:00', amount: -480,  method: 'Refund to ACH ••4421',  status: 'Refunded',statusColor: 'blue'  }
];

export const customerBillingDisputes = [
  { id: 'DIS-204', invoice: 'INV-20442', submitted: '2026-04-06', status: 'Resolved', statusColor: 'green', reason: 'Fee questioned', resolution: 'Confirmed — $35 fee is for mid-term endorsement. Waived on your next invoice as a courtesy.' }
];

// ─── Customer Documents Vault ───
export const customerVaultKPIs = [
  { label: 'Total Documents', value: '42' },
  { label: 'Pending Signature', value: '2', warning: true },
  { label: 'Expiring Soon', value: '1', warning: true },
  { label: 'Recently Added (7d)', value: '5' },
  { label: 'Active Shares', value: '3' },
  { label: 'Storage Used', value: '24 MB' }
];

export const customerVaultCategories = [
  { key: 'policy',     icon: '📋', name: 'Policy Documents',       desc: 'Declarations, policy forms, endorsements, ID cards', count: 18 },
  { key: 'coi',        icon: '📄', name: 'Certificates (COI)',     desc: 'Certificates of insurance · ACORD 25',               count: 5  },
  { key: 'billing',    icon: '💳', name: 'Billing & Financial',    desc: 'Invoices, receipts, premium finance agreements',     count: 9  },
  { key: 'claims',     icon: '🛡️', name: 'Claims Documents',       desc: 'FNOL, adjuster reports, settlement letters',         count: 4  },
  { key: 'onboarding', icon: '📝', name: 'Onboarding & Compliance',desc: 'Signed applications, disclosures, W-9',              count: 4  },
  { key: 'risk',       icon: '⚠️', name: 'Risk Management',        desc: 'Safety reports, loss control, inspection photos',    count: 2  }
];

export const customerVaultStatuses = ['Current','Expiring Soon','Expired','Pending Signature','Approved','Uploaded by You'];

export const customerDocuments = [
  // Policy docs
  { id: 'CDOC-3042', name: 'WC Declarations Page 2025-26.pdf',          category: 'policy',     type: 'Dec Page',      policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2025-06-01', expires: '2026-06-01', uploaded: '2025-06-01', size: '420 KB', status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-05-28', tags: ['Ready for Tax'] },
  { id: 'CDOC-3041', name: 'WC Policy Form 2025-26.pdf',                category: 'policy',     type: 'Policy',        policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2025-06-01', expires: '2026-06-01', uploaded: '2025-06-01', size: '2.1 MB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: [] },
  { id: 'CDOC-3040', name: 'WC ID Card.pdf',                            category: 'policy',     type: 'ID Card',       policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2025-06-01', expires: '2026-06-01', uploaded: '2025-06-01', size: '82 KB',  status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: ['Ready for Tax'] },
  { id: 'CDOC-3039', name: 'WC Endorsement — Added Prologis AI.pdf',    category: 'policy',     type: 'Endorsement',   policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2026-03-20', expires: '2026-06-01', uploaded: '2026-03-20', size: '180 KB', status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2026-03-18', tags: [] },
  { id: 'CDOC-3038', name: 'GL Declarations Page 2025-26.pdf',          category: 'policy',     type: 'Dec Page',      policy: 'CNA-GL-2025-33102',  carrier: 'CNA',            effective: '2025-04-12', expires: '2026-04-12', uploaded: '2025-04-12', size: '380 KB', status: 'Expiring Soon',     statusColor: 'amber', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-04-08', tags: ['Expires in 6 days'] },
  { id: 'CDOC-3037', name: 'Umbrella Declarations Page 2025-26.pdf',    category: 'policy',     type: 'Dec Page',      policy: 'LIB-UMB-2025-88103', carrier: 'Liberty Mutual', effective: '2025-06-01', expires: '2026-06-01', uploaded: '2025-06-01', size: '284 KB', status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-05-28', tags: [] },
  { id: 'CDOC-3036', name: 'Auto Declarations Page 2025-26.pdf',        category: 'policy',     type: 'Dec Page',      policy: 'TRV-AUTO-2026-11223',carrier: 'Travelers',      effective: '2025-08-05', expires: '2026-08-05', uploaded: '2025-08-05', size: '340 KB', status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-08-02', tags: [] },
  { id: 'CDOC-3035', name: 'Auto ID Cards (12 vehicles).pdf',           category: 'policy',     type: 'ID Card',       policy: 'TRV-AUTO-2026-11223',carrier: 'Travelers',      effective: '2025-08-05', expires: '2026-08-05', uploaded: '2025-08-05', size: '120 KB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: ['Ready for DMV'] },

  // COIs
  { id: 'CDOC-3034', name: 'COI — Kroger Real Estate.pdf',              category: 'coi',        type: 'COI',           policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2026-04-17', expires: '2027-04-17', uploaded: '2026-04-17', size: '240 KB', status: 'Current',           statusColor: 'green', new: true,  esigned: false, tags: [] },
  { id: 'CDOC-3033', name: 'COI — Prologis Trust.pdf',                  category: 'coi',        type: 'COI',           policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2026-03-22', expires: '2027-03-22', uploaded: '2026-03-22', size: '236 KB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: [] },
  { id: 'CDOC-3032', name: 'COI — General Contractor.pdf',              category: 'coi',        type: 'COI',           policy: 'LIB-UMB-2025-88103', carrier: 'Liberty Mutual', effective: '2026-04-10', expires: '2027-04-10', uploaded: '2026-04-10', size: '210 KB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: [] },
  { id: 'CDOC-3031', name: 'COI — Commerce Title.pdf',                  category: 'coi',        type: 'COI',           policy: 'CNA-GL-2025-33102',  carrier: 'CNA',            effective: '2025-11-12', expires: '2026-05-12', uploaded: '2025-11-12', size: '220 KB', status: 'Expiring Soon',     statusColor: 'amber', new: false, esigned: false, tags: ['Expires in 24 days'] },
  { id: 'CDOC-3030', name: 'COI — Amazon Freight.pdf',                  category: 'coi',        type: 'COI',           policy: 'TRV-AUTO-2026-11223',carrier: 'Travelers',      effective: '2026-02-05', expires: '2027-02-05', uploaded: '2026-02-05', size: '260 KB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: [] },

  // Billing
  { id: 'CDOC-3029', name: 'Invoice — WC Q2 2026.pdf',                  category: 'billing',    type: 'Invoice',       policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2026-04-01', expires: '—',          uploaded: '2026-04-01', size: '124 KB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: ['Paid'] },
  { id: 'CDOC-3028', name: 'Payment Receipt — WC Q2.pdf',               category: 'billing',    type: 'Receipt',       policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2026-04-15', expires: '—',          uploaded: '2026-04-15', size: '84 KB',  status: 'Current',           statusColor: 'green', new: true,  esigned: false, tags: [] },
  { id: 'CDOC-3027', name: 'Invoice — GL Renewal 2026.pdf',             category: 'billing',    type: 'Invoice',       policy: 'CNA-GL-2025-33102',  carrier: 'CNA',            effective: '2026-04-12', expires: '—',          uploaded: '2026-04-10', size: '132 KB', status: 'Current',           statusColor: 'amber', new: true,  esigned: false, tags: ['Due 2026-04-12'] },
  { id: 'CDOC-3026', name: 'Premium Finance Agreement.pdf',             category: 'billing',    type: 'Finance Agmt',  policy: 'TRV-AUTO-2026-11223',carrier: 'Travelers',      effective: '2025-08-05', expires: '2026-08-05', uploaded: '2025-08-05', size: '420 KB', status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-08-01', tags: [] },

  // Claims
  { id: 'CDOC-3025', name: 'FNOL Confirmation — Auto Claim #CLM-2026-0042.pdf', category: 'claims', type: 'FNOL',     policy: 'TRV-AUTO-2026-11223',carrier: 'Travelers',      effective: '2026-03-15', expires: '—',          uploaded: '2026-03-15', size: '180 KB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: [] },
  { id: 'CDOC-3024', name: 'Adjuster Report — Vehicle Inspection.pdf',  category: 'claims',     type: 'Adjuster Rpt',  policy: 'TRV-AUTO-2026-11223',carrier: 'Travelers',      effective: '2026-03-22', expires: '—',          uploaded: '2026-03-22', size: '1.4 MB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: [] },
  { id: 'CDOC-3023', name: 'Settlement Letter — CLM-2026-0042.pdf',     category: 'claims',     type: 'Settlement',    policy: 'TRV-AUTO-2026-11223',carrier: 'Travelers',      effective: '2026-04-05', expires: '—',          uploaded: '2026-04-05', size: '220 KB', status: 'Current',           statusColor: 'green', new: true,  esigned: true,  signer: 'James Reynolds', signed_date: '2026-04-03', tags: ['Settled'] },

  // Onboarding / Compliance
  { id: 'CDOC-3022', name: 'Signed Application — WC 2025.pdf',          category: 'onboarding', type: 'Application',   policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2025-05-18', expires: '—',          uploaded: '2025-05-18', size: '320 KB', status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-05-18', tags: [] },
  { id: 'CDOC-3021', name: 'Privacy Notice & GLBA Disclosure.pdf',      category: 'onboarding', type: 'Disclosure',    policy: '—',                  carrier: 'Bridgepoint',    effective: '2025-01-15', expires: '—',          uploaded: '2025-01-15', size: '96 KB',  status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-01-15', tags: [] },
  { id: 'CDOC-3020', name: 'W-9 Form — Magnolia Construction.pdf',      category: 'onboarding', type: 'W-9',           policy: '—',                  carrier: 'Bridgepoint',    effective: '2025-01-15', expires: '—',          uploaded: '2025-01-15', size: '42 KB',  status: 'Current',           statusColor: 'green', new: false, esigned: true,  signer: 'James Reynolds', signed_date: '2025-01-15', tags: ['Ready for Tax'] },

  // Risk
  { id: 'CDOC-3019', name: 'Safety Audit Report 2026.pdf',              category: 'risk',       type: 'Safety Audit',  policy: 'SEMC-WC-2025-48821', carrier: 'SEMC / Liberty', effective: '2026-04-10', expires: '—',          uploaded: '2026-04-10', size: '1.1 MB', status: 'Current',           statusColor: 'green', new: true,  esigned: false, tags: ['Score: 88/100'] },
  { id: 'CDOC-3018', name: 'Loss Prevention Guide — Construction.pdf',  category: 'risk',       type: 'LP Guide',      policy: '—',                  carrier: 'Bridgepoint',    effective: '2026-01-10', expires: '—',          uploaded: '2026-01-10', size: '2.8 MB', status: 'Current',           statusColor: 'green', new: false, esigned: false, tags: [] }
];

export const customerDocumentDetail = {
  id: 'CDOC-3042',
  name: 'WC Declarations Page 2025-26.pdf',
  type: 'Declarations Page',
  category: 'policy',
  policy: 'SEMC-WC-2025-48821',
  carrier: 'SEMC / Liberty',
  pages: 4,
  size: '420 KB',
  uploaded: '2025-06-01 08:12',
  uploaded_by: 'Carrier (auto-sync)',
  effective: '2025-06-01',
  expires: '2026-06-01',
  esigned: true,
  signer: 'James Reynolds',
  signed_date: '2025-05-28',
  signed_ip: '72.14.188.4',
  encryption: 'AES-256 at rest · TLS 1.3',
  access_log: [
    { ts: '2026-04-17 14:22', actor: 'You',              action: 'Viewed',      ip: '72.14.188.4' },
    { ts: '2026-04-15 09:45', actor: 'Sarah Chen',       action: 'Shared w/ Kroger', ip: '192.168.10.22' },
    { ts: '2026-03-20 10:18', actor: 'You',              action: 'Downloaded',  ip: '72.14.188.4' },
    { ts: '2025-06-01 08:12', actor: 'System',           action: 'Uploaded',    ip: '—' }
  ],
  metadata: [
    { k: 'Policy Number',   v: 'SEMC-WC-2025-48821' },
    { k: 'Carrier',         v: 'SEMC / Liberty Mutual' },
    { k: 'LOB',             v: 'Workers Comp' },
    { k: 'Effective',       v: '2025-06-01' },
    { k: 'Expiration',      v: '2026-06-01' },
    { k: 'Premium',         v: '$184,700' },
    { k: 'State',           v: 'CA' }
  ]
};

export const customerEsignInbox = [
  { id: 'ENV-CUS-842', doc: 'Renewal Offer — GL 2026-27.pdf',            policy: 'CNA-GL-2025-33102',  carrier: 'CNA',         sent: '2026-04-10 09:04', deadline: '2026-04-24', pages: 6, status: 'Awaiting Signature',  statusColor: 'amber', sender: 'Sarah Chen',  preview: 'Your renewal offer for General Liability effective 2026-04-12 is ready. Please review and e-sign.' },
  { id: 'ENV-CUS-841', doc: 'Endorsement Acknowledgement — Add Vehicle.pdf', policy: 'TRV-AUTO-2026-11223', carrier: 'Travelers', sent: '2026-04-14 11:22', deadline: '2026-04-21', pages: 2, status: 'Awaiting Signature',  statusColor: 'amber', sender: 'Sarah Chen',  preview: 'Please sign to confirm addition of 2025 Ford F-250 (VIN 1FTEX1EP...) to your commercial auto policy.' },
  { id: 'ENV-CUS-840', doc: 'Settlement Letter — Auto Claim CLM-2026-0042.pdf', policy: 'TRV-AUTO-2026-11223', carrier: 'Travelers', sent: '2026-04-03 14:20', deadline: '—',         pages: 3, status: 'Signed',              statusColor: 'green', sender: 'Travelers UW',signed: '2026-04-03 15:12', preview: 'Final settlement for fender-bender claim filed 2026-03-15.' },
  { id: 'ENV-CUS-839', doc: 'WC Endorsement — Added Prologis AI.pdf',     policy: 'SEMC-WC-2025-48821', carrier: 'SEMC',        sent: '2026-03-18 10:00', deadline: '—',         pages: 2, status: 'Signed',              statusColor: 'green', sender: 'Sarah Chen',  signed: '2026-03-18 11:42', preview: 'Confirm Prologis Trust added as additional insured per lease.' }
];

export const customerUploadChecklist = [
  { id: 'UPL-101', title: 'Driver license for new driver',            policy: 'TRV-AUTO-2026-11223', requested_by: 'Sarah Chen', requested: '2026-04-14', required: true,  accepts: 'PDF, JPG, PNG', note: 'For added vehicle endorsement · primary driver Oscar Lopez' },
  { id: 'UPL-102', title: 'Vehicle registration (Truck #13)',          policy: 'TRV-AUTO-2026-11223', requested_by: 'Sarah Chen', requested: '2026-04-14', required: true,  accepts: 'PDF, JPG, PNG', note: 'CA DMV registration for 2025 Ford F-250' },
  { id: 'UPL-103', title: 'Updated safety program PDF',                policy: 'SEMC-WC-2025-48821', requested_by: 'Sarah Chen', requested: '2026-04-01', required: false, accepts: 'PDF',             note: 'For WC schedule credit renewal review' },
  { id: 'UPL-104', title: 'Loss run from prior GL carrier (3 years)',  policy: 'CNA-GL-2025-33102',  requested_by: 'Sarah Chen', requested: '2026-03-28', required: true,  accepts: 'PDF',             note: 'Requested by CNA for renewal underwriting · upload before 2026-04-11', overdue: true }
];

export const customerSharedLinks = [
  { id: 'SHR-20284', doc: 'COI — Kroger Real Estate.pdf',     recipient: 'leasing@kroger.com',      created: '2026-04-17', expires: '2026-04-24', views: 1, status: 'Active',  statusColor: 'green', link: 'https://cust.quantana.com/s/a8f2...' },
  { id: 'SHR-20283', doc: 'Auto ID Card (Truck #8).pdf',       recipient: 'dmv-audit@ca.gov',        created: '2026-04-12', expires: '2026-04-19', views: 2, status: 'Active',  statusColor: 'green', link: 'https://cust.quantana.com/s/9d11...' },
  { id: 'SHR-20282', doc: 'WC Declarations Page 2025-26.pdf',  recipient: 'compliance@contractor.co',created: '2026-04-08', expires: '2026-04-15', views: 1, status: 'Expired', statusColor: 'gray',  link: 'https://cust.quantana.com/s/3c72...' },
  { id: 'SHR-20281', doc: 'COI — Prologis Trust.pdf',          recipient: 'legal@prologis.com',      created: '2026-03-22', expires: '2026-03-29', views: 3, status: 'Expired', statusColor: 'gray',  link: 'https://cust.quantana.com/s/5e41...' }
];

export const customerPolicyHistory = [
  { policy: 'SEMC-WC-2025-48821', action: 'COI Issued',         entity: 'Kroger Real Estate',    ts: '2026-04-17 14:08', actor: 'Portal self-service' },
  { policy: 'TRV-AUTO-2026-11223',action: 'Endorsement Req',     entity: 'Add Vehicle',           ts: '2026-04-14 10:22', actor: 'Portal self-service' },
  { policy: 'CNA-GL-2025-33102',  action: 'Renewal Offer Received',entity: 'CNA',                ts: '2026-04-10 09:04', actor: 'Carrier' },
  { policy: 'SEMC-WC-2025-48821', action: 'Premium Paid',        entity: 'Q2 2026 — $46,175',     ts: '2026-04-15 09:22', actor: 'ACH — Business Checking' },
  { policy: 'SEMC-WC-2025-48821', action: 'Safety Audit Done',   entity: 'Score: 88',             ts: '2026-04-10 11:40', actor: 'Carrier Inspector' },
  { policy: 'CNA-GL-2025-33102',  action: 'Address Change',      entity: 'HQ → Industrial Blvd',  ts: '2026-04-12 16:50', actor: 'Portal self-service' },
  { policy: 'SEMC-WC-2025-48821', action: 'Endorsement Applied', entity: 'Added Prologis AI',     ts: '2026-03-20 15:00', actor: 'Sarah Chen' },
  { policy: 'TRV-AUTO-2026-11223',action: 'Policy Issued',       entity: '12-month term',         ts: '2025-08-05 08:00', actor: 'Carrier UW' }
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
  { label: 'Expiring ≤ 30d', value: '12', warning: true },
  { label: 'Endorsements Open', value: '4' },
  { label: 'Loss Ratio (YTD)', value: '42%' },
  { label: 'Retention (YTD)', value: '91%' }
];

export const policyStages = [
  { key: 'In-Force',        color: 'green', desc: 'Active, clean' },
  { key: 'Endorsement',     color: 'blue',  desc: 'Endorsement pending' },
  { key: 'Expiring',        color: 'amber', desc: '< 60 days to expiry' },
  { key: 'Non-Renewing',    color: 'amber', desc: 'Carrier NOI issued' },
  { key: 'Cancelled',       color: 'red',   desc: 'Mid-term cancellation' },
  { key: 'Expired',         color: 'gray',  desc: 'No active coverage' }
];

export const policiesExtended = [
  { id: 'SEMC-WC-2025-48821', epic_id: 'POL-19283-99', client: 'Magnolia Construction LLC',  lob: 'Workers Comp',          carrier: 'SEMC / Liberty',    carrier_code: 'SEMC',  effective: '2025-06-01', expiry: '2026-06-01', premium: 184700, billing: 'Agency Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'In-Force',    loss_ratio: 18, claims_open: 0, commission: 22164, endorsements: 1, cois: 3 },
  { id: 'CNA-GL-2025-33102',  epic_id: 'POL-11022-44', client: 'Apex Industries',            lob: 'General Liability',     carrier: 'CNA',               carrier_code: 'CNA',   effective: '2025-04-12', expiry: '2026-04-12', premium: 52000,  billing: 'Direct Bill', state: 'CA', producer: 'Mike Torres', stage: 'Expiring',    loss_ratio: 32, claims_open: 1, commission: 5200,  endorsements: 0, cois: 2 },
  { id: 'LIB-BOP-20291',      epic_id: 'POL-44122-11', client: 'Ridge Builders',             lob: 'BOP',                   carrier: 'Liberty Mutual',    carrier_code: 'LIB',   effective: '2025-05-01', expiry: '2026-05-01', premium: 93100,  billing: 'Agency Bill', state: 'CA', producer: 'Mike Torres', stage: 'Expiring',    loss_ratio: 24, claims_open: 0, commission: 11172, endorsements: 0, cois: 1 },
  { id: 'HTF-BOP-2025-90112', epic_id: 'POL-55841-22', client: 'Harbor Foods',               lob: 'BOP',                   carrier: 'Hartford',          carrier_code: 'HTF',   effective: '2025-03-18', expiry: '2026-03-18', premium: 38200,  billing: 'Direct Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'Expired',     loss_ratio: 41, claims_open: 0, commission: 4202,  endorsements: 0, cois: 1 },
  { id: 'TRV-AUTO-2026-11223',epic_id: 'POL-67731-11', client: 'Delta Logistics',            lob: 'Commercial Auto',       carrier: 'Travelers',         carrier_code: 'TRV',   effective: '2025-08-05', expiry: '2026-08-05', premium: 142800, billing: 'Agency Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'In-Force',    loss_ratio: 28, claims_open: 1, commission: 16422, endorsements: 1, cois: 4 },
  { id: 'CNA-CYB-2026-88102', epic_id: 'POL-78221-33', client: 'TechCorp Inc',               lob: 'Cyber',                 carrier: 'CNA',               carrier_code: 'CNA',   effective: '2025-07-22', expiry: '2026-07-22', premium: 256100, billing: 'Agency Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'In-Force',    loss_ratio: 12, claims_open: 0, commission: 38415, endorsements: 0, cois: 2 },
  { id: 'LIB-PRO-2025-22841', epic_id: 'POL-81293-44', client: 'Summit Medical',             lob: 'Professional Liability',carrier: 'Liberty Mutual',    carrier_code: 'LIB',   effective: '2025-09-12', expiry: '2026-09-12', premium: 78500,  billing: 'Direct Bill', state: 'NY', producer: 'Sarah Chen',  stage: 'Endorsement', loss_ratio: 8,  claims_open: 0, commission: 7850,  endorsements: 1, cois: 1 },
  { id: 'AMT-WC-2025-44821',  epic_id: 'POL-90014-55', client: 'Coastal Realty',             lob: 'Workers Comp',          carrier: 'AMTrust',           carrier_code: 'AMT',   effective: '2025-05-14', expiry: '2026-05-14', premium: 38900,  billing: 'Agency Bill', state: 'FL', producer: 'Lisa Park',   stage: 'Expiring',    loss_ratio: 54, claims_open: 2, commission: 4668,  endorsements: 0, cois: 1 },
  { id: 'CNA-WC-2024-55012',  epic_id: 'POL-12293-66', client: 'Blue Ridge Supplies',        lob: 'Workers Comp',          carrier: 'CNA',               carrier_code: 'CNA',   effective: '2025-02-18', expiry: '2026-02-18', premium: 62400,  billing: 'Direct Bill', state: 'IL', producer: 'Sarah Chen',  stage: 'Cancelled',   loss_ratio: 78, claims_open: 1, commission: 0,     endorsements: 0, cois: 0 },
  { id: 'HTF-BOP-2024-77004', epic_id: 'POL-22893-77', client: 'Peak Fitness Co.',           lob: 'BOP',                   carrier: 'Hartford',          carrier_code: 'HTF',   effective: '2025-01-20', expiry: '2026-01-20', premium: 28400,  billing: 'Direct Bill', state: 'AZ', producer: 'Mike Torres', stage: 'Expired',     loss_ratio: 88, claims_open: 0, commission: 0,     endorsements: 0, cois: 0 },
  { id: 'LIB-UMB-2025-88103', epic_id: 'POL-33844-88', client: 'Magnolia Construction LLC',  lob: 'Umbrella',              carrier: 'Liberty Mutual',    carrier_code: 'LIB',   effective: '2025-06-01', expiry: '2026-06-01', premium: 18200,  billing: 'Agency Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'In-Force',    loss_ratio: 0,  claims_open: 0, commission: 1820,  endorsements: 0, cois: 2 },
  { id: 'CHB-DO-2025-10091',  epic_id: 'POL-43281-99', client: 'TechCorp Inc',               lob: 'D&O',                   carrier: 'Chubb',             carrier_code: 'CHB',   effective: '2025-07-22', expiry: '2026-07-22', premium: 48500,  billing: 'Direct Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'In-Force',    loss_ratio: 0,  claims_open: 0, commission: 4850,  endorsements: 0, cois: 0 },
  { id: 'TRV-WC-2025-22004',  epic_id: 'POL-55932-00', client: 'Delta Logistics',            lob: 'Workers Comp',          carrier: 'Travelers',         carrier_code: 'TRV',   effective: '2025-08-05', expiry: '2026-08-05', premium: 88400,  billing: 'Agency Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'In-Force',    loss_ratio: 22, claims_open: 0, commission: 10166, endorsements: 0, cois: 1 },
  { id: 'ZUR-PRP-2025-60012', epic_id: 'POL-66233-11', client: 'Summit Medical',             lob: 'Property',              carrier: 'Zurich',            carrier_code: 'ZUR',   effective: '2025-09-12', expiry: '2026-09-12', premium: 94200,  billing: 'Agency Bill', state: 'NY', producer: 'Sarah Chen',  stage: 'In-Force',    loss_ratio: 14, claims_open: 0, commission: 11304, endorsements: 0, cois: 3 },
  { id: 'NWD-AUTO-2025-41201',epic_id: 'POL-77833-22', client: 'Harbor Foods',               lob: 'Commercial Auto',       carrier: 'Nationwide',        carrier_code: 'NWD',   effective: '2025-03-18', expiry: '2026-03-18', premium: 42800,  billing: 'Agency Bill', state: 'CA', producer: 'Sarah Chen',  stage: 'Non-Renewing',loss_ratio: 96, claims_open: 2, commission: 5136,  endorsements: 0, cois: 1 }
];

export const policyAnalytics = {
  premium_by_lob: [
    { lob: 'Workers Comp',           premium: 4_820_000, policies: 148, share: 34 },
    { lob: 'General Liability',      premium: 3_120_000, policies: 162, share: 22 },
    { lob: 'Commercial Auto',        premium: 2_240_000, policies: 94,  share: 16 },
    { lob: 'BOP',                    premium: 1_580_000, policies: 118, share: 11 },
    { lob: 'Cyber',                  premium: 1_240_000, policies: 42,  share: 9  },
    { lob: 'Professional Liability', premium: 620_000,   policies: 38,  share: 4  },
    { lob: 'Property',               premium: 380_000,   policies: 28,  share: 3  },
    { lob: 'Umbrella / D&O / Other', premium: 220_000,   policies: 56,  share: 1  }
  ],
  carrier_concentration: [
    { carrier: 'Liberty Mutual / SEMC', premium: 3_820_000, share: 27, policies: 182 },
    { carrier: 'CNA',                   premium: 2_420_000, share: 17, policies: 124 },
    { carrier: 'Travelers',             premium: 2_140_000, share: 15, policies: 98  },
    { carrier: 'Hartford',              premium: 1_640_000, share: 12, policies: 112 },
    { carrier: 'AMTrust',               premium: 1_180_000, share: 8,  policies: 84  },
    { carrier: 'Zurich',                premium: 980_000,   share: 7,  policies: 42  },
    { carrier: 'Chubb',                 premium: 820_000,   share: 6,  policies: 38  },
    { carrier: 'Nationwide',            premium: 580_000,   share: 4,  policies: 52  },
    { carrier: 'Other (5 carriers)',    premium: 620_000,   share: 4,  policies: 115 }
  ],
  loss_ratio_by_lob: [
    { lob: 'Workers Comp',           earned: 4_820_000, incurred: 2_120_000, ratio: 44, benchmark: 62 },
    { lob: 'General Liability',      earned: 3_120_000, incurred: 1_340_000, ratio: 43, benchmark: 58 },
    { lob: 'Commercial Auto',        earned: 2_240_000, incurred: 1_210_000, ratio: 54, benchmark: 68 },
    { lob: 'BOP',                    earned: 1_580_000, incurred: 520_000,   ratio: 33, benchmark: 52 },
    { lob: 'Cyber',                  earned: 1_240_000, incurred: 384_000,   ratio: 31, benchmark: 48 },
    { lob: 'Professional Liability', earned: 620_000,   incurred: 186_000,   ratio: 30, benchmark: 55 },
    { lob: 'Property',               earned: 380_000,   incurred: 146_000,   ratio: 38, benchmark: 58 }
  ],
  retention: {
    ytd: 91.4,
    by_tier: [
      { tier: 'Platinum', retained: 94, lost: 6,  rate: 94 },
      { tier: 'Gold',     retained: 128,lost: 14, rate: 90 },
      { tier: 'Silver',   retained: 168,lost: 22, rate: 88 },
      { tier: 'Bronze',   retained: 84, lost: 20, rate: 81 }
    ],
    lost_reasons: [
      { reason: 'Price', count: 22, pct: 35 },
      { reason: 'Non-renewed by carrier', count: 12, pct: 19 },
      { reason: 'Acquired / consolidated', count: 8, pct: 13 },
      { reason: 'Broker switch', count: 11, pct: 17 },
      { reason: 'Business closed', count: 6, pct: 10 },
      { reason: 'Other', count: 4, pct: 6 }
    ]
  },
  expiration_calendar: [
    { bucket: '0–30d',   count: 12, premium: 1_820_000, color: 'red'   },
    { bucket: '31–60d',  count: 28, premium: 3_240_000, color: 'amber' },
    { bucket: '61–90d',  count: 47, premium: 4_120_000, color: 'amber' },
    { bucket: '91–180d', count: 118,premium: 6_840_000, color: 'blue'  },
    { bucket: '180d+',   count: 642,premium: 14_180_000,color: 'gray'  }
  ]
};

export const policyBulkCOI = [
  { policy: 'SEMC-WC-2025-48821', client: 'Magnolia Construction LLC', holder: 'Kroger Real Estate',  status: 'Issued',  issued: '2026-04-15', expires: '2027-04-15' },
  { policy: 'SEMC-WC-2025-48821', client: 'Magnolia Construction LLC', holder: 'Prologis Trust',      status: 'Issued',  issued: '2026-03-22', expires: '2027-03-22' },
  { policy: 'TRV-AUTO-2026-11223',client: 'Delta Logistics',           holder: 'Amazon Freight',      status: 'Pending', issued: '—',          expires: '—' },
  { policy: 'LIB-PRO-2025-22841', client: 'Summit Medical',            holder: 'Blue Shield Network', status: 'Pending', issued: '—',          expires: '—' },
  { policy: 'CNA-CYB-2026-88102', client: 'TechCorp Inc',              holder: 'Vendor — SaaS MSA',   status: 'Issued',  issued: '2026-04-01', expires: '2027-04-01' },
  { policy: 'LIB-UMB-2025-88103', client: 'Magnolia Construction LLC', holder: 'General Contractor',  status: 'Issued',  issued: '2026-04-10', expires: '2027-04-10' }
];

export const policyAIChat = [
  { role: 'ai',   text: 'Hi! I can find policies, summarize coverage, or flag issues. Try: "Which policies expire in the next 45 days with loss ratio > 50%?"' },
  { role: 'user', text: 'Which policies expire in the next 45 days with loss ratio > 50%?' },
  { role: 'ai',   text: 'Found 2 policies matching:\n• **AMT-WC-2025-44821** — Coastal Realty · LR 54% · expires 2026-05-14\n• **NWD-AUTO-2025-41201** — Harbor Foods · LR 96% · expires 2026-03-18 (already non-renewing)\n\nRecommend proactive market search for Coastal Realty now to get ahead of renewal.' }
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
  { label: 'New (30d)', value: '8' },
  { label: 'Book of Business', value: '$14.2M' },
  { label: 'Retention Rate', value: '94%', warning: false },
  { label: 'Cross-Sell Ready', value: '38' },
  { label: 'At-Risk', value: '14', warning: true }
];

export const brokerClients = [
  { id: 'CLI-1001', name: 'Magnolia Construction LLC', tier: 'Platinum', industry: 'Construction',  naics: '238220', revenue: '$42M', employees: 180, state: 'CA', policies: 3, lobs: ['WC','GL','Umbrella'],         carrier: 'SEMC / Liberty',    premium: 202900, exp_date: '2026-06-01', status: 'Active',      statusColor: 'green', producer: 'Sarah Chen',  last_contact: '2026-04-15', onboarded: '2019-06-01', nps: 82, loss_ratio: 14, cross_sell: ['Cyber'],          risk: 'low'    },
  { id: 'CLI-1002', name: 'Apex Industries',            tier: 'Gold',     industry: 'Manufacturing', naics: '332999', revenue: '$28M', employees: 120, state: 'CA', policies: 2, lobs: ['GL','Property'],                carrier: 'CNA',               premium: 92400,  exp_date: '2026-04-12', status: 'Expiring',    statusColor: 'amber', producer: 'Mike Torres', last_contact: '2026-04-08', onboarded: '2020-04-12', nps: 64, loss_ratio: 32, cross_sell: ['WC','Cyber'],     risk: 'medium' },
  { id: 'CLI-1003', name: 'TechCorp Inc',               tier: 'Platinum', industry: 'Tech',          naics: '541511', revenue: '$84M', employees: 340, state: 'CA', policies: 4, lobs: ['Cyber','D&O','GL','Property'], carrier: 'CNA / Chubb',       premium: 304600, exp_date: '2026-07-22', status: 'Active',      statusColor: 'green', producer: 'Sarah Chen',  last_contact: '2026-04-14', onboarded: '2021-07-22', nps: 88, loss_ratio: 12, cross_sell: ['WC'],              risk: 'low'    },
  { id: 'CLI-1004', name: 'Coastal Realty',             tier: 'Silver',   industry: 'Real Estate',   naics: '531210', revenue: '$6.4M',employees: 42,  state: 'FL', policies: 1, lobs: ['WC'],                           carrier: 'AMTrust',           premium: 38900,  exp_date: '2026-05-14', status: 'Expiring',    statusColor: 'amber', producer: 'Lisa Park',   last_contact: '2026-03-28', onboarded: '2023-05-14', nps: 48, loss_ratio: 54, cross_sell: ['GL','Property'],  risk: 'high'   },
  { id: 'CLI-1005', name: 'Ridge Builders',             tier: 'Gold',     industry: 'Construction',  naics: '236220', revenue: '$18M', employees: 88,  state: 'CA', policies: 2, lobs: ['BOP','Commercial Auto'],       carrier: 'Liberty Mutual',    premium: 93250,  exp_date: '2026-05-30', status: 'Renewal Due', statusColor: 'amber', producer: 'Mike Torres', last_contact: '2026-04-10', onboarded: '2021-05-30', nps: 72, loss_ratio: 24, cross_sell: ['WC','Umbrella'],  risk: 'medium' },
  { id: 'CLI-1006', name: 'Delta Logistics',            tier: 'Platinum', industry: 'Logistics',     naics: '484110', revenue: '$52M', employees: 240, state: 'CA', policies: 3, lobs: ['Commercial Auto','WC','GL'],    carrier: 'Travelers',         premium: 312800, exp_date: '2026-08-05', status: 'Active',      statusColor: 'green', producer: 'Sarah Chen',  last_contact: '2026-04-12', onboarded: '2018-08-05', nps: 84, loss_ratio: 26, cross_sell: ['Cyber'],          risk: 'low'    },
  { id: 'CLI-1007', name: 'Harbor Foods',               tier: 'Silver',   industry: 'Food Services', naics: '311421', revenue: '$9.2M',employees: 56,  state: 'CA', policies: 2, lobs: ['BOP','Commercial Auto'],       carrier: 'Hartford/Nationwide', premium: 81000,exp_date: '2026-03-18', status: 'At Risk',     statusColor: 'red',   producer: 'Sarah Chen',  last_contact: '2026-03-10', onboarded: '2022-03-18', nps: 42, loss_ratio: 76, cross_sell: [],                  risk: 'high'   },
  { id: 'CLI-1008', name: 'Summit Medical',             tier: 'Platinum', industry: 'Healthcare',    naics: '621111', revenue: '$38M', employees: 164, state: 'NY', policies: 5, lobs: ['Professional','BOP','Cyber','Property','WC'], carrier: 'CNA / Liberty / Zurich', premium: 412450, exp_date: '2026-09-12', status: 'Active', statusColor: 'green', producer: 'Sarah Chen', last_contact: '2026-04-13', onboarded: '2017-09-12', nps: 91, loss_ratio: 10, cross_sell: ['D&O'],        risk: 'low'    },
  { id: 'CLI-1009', name: 'Blue Ridge Supplies',        tier: 'Bronze',   industry: 'Wholesale',     naics: '424410', revenue: '$3.8M',employees: 22,  state: 'IL', policies: 1, lobs: ['WC'],                           carrier: 'CNA',               premium: 12000,  exp_date: '2026-02-18', status: 'Cancelled',   statusColor: 'red',   producer: 'Sarah Chen',  last_contact: '2026-02-10', onboarded: '2023-02-18', nps: 22, loss_ratio: 78, cross_sell: [],                  risk: 'high'   },
  { id: 'CLI-1010', name: 'Peak Fitness Co.',           tier: 'Bronze',   industry: 'Recreation',    naics: '713940', revenue: '$2.8M',employees: 24,  state: 'AZ', policies: 1, lobs: ['BOP'],                          carrier: 'Hartford',          premium: 28400,  exp_date: '2026-01-20', status: 'Cancelled',   statusColor: 'red',   producer: 'Mike Torres', last_contact: '2026-01-15', onboarded: '2022-01-20', nps: 28, loss_ratio: 88, cross_sell: [],                  risk: 'high'   },
  { id: 'CLI-1011', name: 'DataCore Inc',               tier: 'Gold',     industry: 'Tech',          naics: '541512', revenue: '$15M', employees: 48,  state: 'TX', policies: 2, lobs: ['Cyber','D&O'],                  carrier: 'CNA / Chubb',       premium: 148000, exp_date: '2026-07-22', status: 'Active',      statusColor: 'green', producer: 'Sarah Chen',  last_contact: '2026-04-16', onboarded: '2024-07-22', nps: 78, loss_ratio: 18, cross_sell: ['GL','Professional'],risk: 'low'    },
  { id: 'CLI-1012', name: 'Valley Logistics',           tier: 'Gold',     industry: 'Logistics',     naics: '484110', revenue: '$22M', employees: 112, state: 'CA', policies: 3, lobs: ['Commercial Auto','WC','GL'],    carrier: 'Travelers',         premium: 142800, exp_date: '2026-11-08', status: 'Active',      statusColor: 'green', producer: 'Sarah Chen',  last_contact: '2026-04-11', onboarded: '2022-11-08', nps: 74, loss_ratio: 28, cross_sell: ['Cyber'],          risk: 'medium' },
  { id: 'CLI-1013', name: 'Bright Horizon Academy',     tier: 'Silver',   industry: 'Education',     naics: '611110', revenue: '$4.8M',employees: 42,  state: 'CA', policies: 3, lobs: ['WC','Professional','Property'], carrier: 'Nationwide',        premium: 72000,  exp_date: '2026-06-30', status: 'Active',      statusColor: 'green', producer: 'Sarah Chen',  last_contact: '2026-04-10', onboarded: '2026-04-18', nps: 80, loss_ratio: 8,  cross_sell: ['Cyber','Auto'],   risk: 'low'    }
];

export const clientTiers = [
  { tier: 'Platinum', min: 200000, color: 'blue',  desc: 'Strategic accounts · white-glove service' },
  { tier: 'Gold',     min: 75000,  color: 'amber', desc: 'Core accounts · dedicated CSR' },
  { tier: 'Silver',   min: 25000,  color: 'gray',  desc: 'Standard accounts · shared service' },
  { tier: 'Bronze',   min: 0,      color: 'gray',  desc: 'Small accounts · self-service portal' }
];

export const clientAnalytics = {
  book_of_business: {
    total_premium: 14_200_000,
    total_clients: 127,
    avg_per_client: 111811,
    multi_lob: 84,
    single_lob: 43,
    platinum: 18, gold: 34, silver: 42, bronze: 33
  },
  segmentation_by_industry: [
    { industry: 'Construction',   clients: 24, premium: 3_120_000, avg_nps: 78, loss_ratio: 22 },
    { industry: 'Tech',           clients: 18, premium: 2_640_000, avg_nps: 84, loss_ratio: 14 },
    { industry: 'Healthcare',     clients: 16, premium: 2_420_000, avg_nps: 86, loss_ratio: 12 },
    { industry: 'Logistics',      clients: 14, premium: 1_840_000, avg_nps: 79, loss_ratio: 27 },
    { industry: 'Manufacturing',  clients: 12, premium: 1_420_000, avg_nps: 68, loss_ratio: 32 },
    { industry: 'Real Estate',    clients: 10, premium: 820_000,   avg_nps: 62, loss_ratio: 44 },
    { industry: 'Food Services',  clients:  8, premium: 620_000,   avg_nps: 58, loss_ratio: 62 },
    { industry: 'Other',          clients: 25, premium: 1_320_000, avg_nps: 70, loss_ratio: 34 }
  ],
  retention_quarterly: [
    { q: 'Q1 2025', retained: 118, lost: 8,  rate: 94 },
    { q: 'Q2 2025', retained: 122, lost: 6,  rate: 95 },
    { q: 'Q3 2025', retained: 119, lost: 11, rate: 91 },
    { q: 'Q4 2025', retained: 124, lost: 8,  rate: 94 },
    { q: 'Q1 2026', retained: 121, lost: 9,  rate: 93 }
  ],
  churn_by_tier: [
    { tier: 'Platinum', churn: 3,  rate: 4  },
    { tier: 'Gold',     churn: 8,  rate: 10 },
    { tier: 'Silver',   churn: 14, rate: 12 },
    { tier: 'Bronze',   churn: 17, rate: 19 }
  ],
  at_risk: [
    { client: 'Harbor Foods',        reason: 'Loss ratio 76% · NPS dropped 20pts',    producer: 'Sarah Chen',  action: 'Remediation call scheduled' },
    { client: 'Coastal Realty',      reason: 'Only 1 LOB · LR 54% · Competitor bid',  producer: 'Lisa Park',   action: 'Present renewal comparison' },
    { client: 'Peak Fitness Co.',    reason: 'Mid-term cancellation · LR 88%',         producer: 'Mike Torres', action: '30-day nurture restart' },
    { client: 'Apex Industries',     reason: 'Expiring in 14 days · Quoted w/ 2 markets', producer: 'Mike Torres', action: 'Schedule decision call' }
  ],
  cross_sell_opportunities: [
    { client: 'Magnolia Construction', gap: 'Cyber',          rationale: '$42M revenue · IT footprint · no current Cyber coverage',  est_premium: 24000, fit: 94, producer: 'Sarah Chen' },
    { client: 'TechCorp Inc',          gap: 'Workers Comp',   rationale: '340 employees · currently PEO-covered · better rate available', est_premium: 82000, fit: 88, producer: 'Sarah Chen' },
    { client: 'Delta Logistics',       gap: 'Cyber',          rationale: 'TMS systems · customer PII · regulatory exposure',       est_premium: 48000, fit: 86, producer: 'Sarah Chen' },
    { client: 'Ridge Builders',        gap: 'Umbrella',       rationale: 'Auto + GL exposure · below industry umbrella norm',      est_premium: 12000, fit: 82, producer: 'Mike Torres' },
    { client: 'Summit Medical',        gap: 'D&O',            rationale: 'Growing 5-location group · board formation',             est_premium: 36000, fit: 78, producer: 'Sarah Chen' },
    { client: 'Apex Industries',       gap: 'WC + Cyber',     rationale: 'Mfg exposure + ERP data · existing relationship',         est_premium: 54000, fit: 76, producer: 'Mike Torres' }
  ],
  lifecycle_stages: [
    { stage: 'Onboarding (< 90d)',    count: 8,  pct: 6 },
    { stage: 'Active (< 2yr)',         count: 42, pct: 33 },
    { stage: 'Mature (2–5yr)',         count: 54, pct: 43 },
    { stage: 'Legacy (5yr+)',          count: 18, pct: 14 },
    { stage: 'At-Risk',                count: 5,  pct: 4  }
  ]
};

export const clientActivities = [
  { client: 'Magnolia Construction', type: 'Email',    subject: 'COI request — Kroger',             ts: '2026-04-17 09:22', producer: 'Sarah Chen' },
  { client: 'TechCorp Inc',          type: 'Meeting',  subject: 'Q2 coverage review',               ts: '2026-04-16 14:00', producer: 'Sarah Chen' },
  { client: 'Apex Industries',       type: 'Call',     subject: 'Renewal decision follow-up',       ts: '2026-04-16 11:30', producer: 'Mike Torres' },
  { client: 'Harbor Foods',          type: 'Meeting',  subject: 'Remediation — loss trends',        ts: '2026-04-15 10:00', producer: 'Sarah Chen' },
  { client: 'Summit Medical',        type: 'Email',    subject: 'D&O quote comparison',             ts: '2026-04-15 08:40', producer: 'Sarah Chen' },
  { client: 'Delta Logistics',       type: 'Call',     subject: 'Cross-sell: Cyber discovery',      ts: '2026-04-14 15:10', producer: 'Sarah Chen' }
];

export const clientAIChat = [
  { role: 'ai',   text: 'Hi! Ask me about any client in your book. Try: "Show my top-10 at-risk clients by premium" or "What cross-sell opportunities exist for Magnolia?"' },
  { role: 'user', text: 'What cross-sell opportunities exist for Magnolia Construction?' },
  { role: 'ai',   text: 'Magnolia Construction currently has 3 policies ($202,900 premium): WC, GL, Umbrella.\n\n**Gap identified: Cyber**\n• Rationale: $42M revenue · 180 employees · IT footprint with customer data\n• Estimated premium: ~$24,000\n• Fit score: 94% · CNA or Chubb are top carrier candidates\n\nWant me to create a cross-sell opportunity in Prospects?' }
];

// ─── MGA Portal Data ───
export const mgaKPIs = [
  { label: 'Brokers Active', value: '34' },
  { label: 'Policies Active', value: '847' },
  { label: 'Quotes This Month', value: '312' },
  { label: 'Bindings This Month', value: '89' },
  { label: 'Total Premium', value: '$14.2M' }
];

// Extended top-row executive KPIs for the main dashboard
export const mgaDashboardHeroKPIs = [
  { label: 'Written Premium YTD',  value: '$58.5M', delta: '+18%',   deltaColor: 'green' },
  { label: 'Loss Ratio YTD',       value: '38%',    delta: '-2pp',   deltaColor: 'green' },
  { label: 'Combined Ratio',       value: '88%',    delta: '-1pp',   deltaColor: 'green' },
  { label: 'Retention Rate',       value: '91%',    delta: '+1pp',   deltaColor: 'green' },
  { label: 'Bind Ratio',           value: '52%',    delta: '+3pp',   deltaColor: 'green' },
  { label: 'Open Claims Value',    value: '$4.24M', delta: '$272k flagged SIU', deltaColor: 'amber' }
];

export const mgaAlerts = [
  { type: 'red',   category: 'Large Loss',         text: 'Large loss reported — TechCorp cyber breach · $420k reserve · CNA notified', link: 'mga-claim-details', param: 'CLM-MGA-2026-0245', ts: '2026-04-05' },
  { type: 'red',   category: 'Authority',           text: 'Authority breach attempt — SEMC/Liberty treaty 81% capacity · approaching cap',           link: 'mga-carrier-authority',                                  ts: '2026-04-17' },
  { type: 'red',   category: 'Commission Dispute',  text: 'Commission reconciliation dispute — CNA $3,200 variance (March period) · resolution 2026-04-24', link: 'mga-commissions-reconciliation',                 ts: '2026-04-17' },
  { type: 'red',   category: 'Commission Dispute',  text: 'Commission reconciliation dispute — Zurich $6,200 variance · Peninsula Mfg endorsement tie-out', link: 'mga-commissions-reconciliation',                ts: '2026-04-17' },
  { type: 'amber', category: 'Renewal Risk',        text: '14 high-value renewals at risk — $2.8M premium · AI-flagged · 60 days',              link: 'mga-reports-kpis',                                       ts: '2026-04-17' },
  { type: 'amber', category: 'Payout Pending',      text: '2 payout approvals pending — $326,440 combined · CFO + Compliance signoff required', link: 'mga-commissions-payouts',                                ts: '2026-04-18' },
  { type: 'amber', category: 'Bordereau',           text: 'Zurich premium bordereau dispute — $8,400 variance · meeting 2026-04-22',             link: 'mga-carrier-bordereau-report',                          ts: '2026-04-17' },
  { type: 'amber', category: 'Compliance',          text: 'TX MGA license renewal — 7 days · fingerprint verification pending',                     link: 'mga-compliance-filings',                                 ts: '2026-04-18' },
  { type: 'amber', category: 'Reserve Approval',    text: '2 reserve approvals pending — Ridge Builders $100k · Harbor Foods $14k',                link: 'mga-claim-approvals',                                    ts: '2026-04-18' },
  { type: 'amber', category: 'Chargeback',          text: '$1,513 chargebacks processed this period — pro-rata cancellations (2 agents)',          link: 'mga-commissions-agents',                                 ts: '2026-04-15' },
  { type: 'blue',  category: 'Submissions',         text: '42 submissions received today · +12% vs. avg · 3 high-value ($500k+)',                   link: 'mga-submissions',                                        ts: '2026-04-18' },
  { type: 'blue',  category: 'Onboarding',          text: 'Markel E&S carrier onboarding at 68% — rate filings TX + FL pending',                   link: 'mga-carrier-profile',  param: 'CAR-08',                  ts: '2026-04-17' }
];

export const renewalPipeline = [
  { range: '0–30 days', count: 23, pct: 19 },
  { range: '31–60 days', count: 41, pct: 34 },
  { range: '61–90 days', count: 58, pct: 47 }
];

// Dashboard-specific widgets
export const mgaDashboardGeoMix = [
  { state: 'CA', premium: 24800000, policies: 1842, lr: 40 },
  { state: 'TX', premium: 10200000, policies:  842, lr: 42 },
  { state: 'NY', premium:  6800000, policies:  482, lr: 44 },
  { state: 'FL', premium:  5400000, policies:  392, lr: 48 },
  { state: 'IL', premium:  4200000, policies:  342, lr: 38 },
  { state: 'OH', premium:  2400000, policies:  228, lr: 34 },
  { state: 'PA', premium:  2100000, policies:  204, lr: 36 },
  { state: 'GA', premium:  1600000, policies:  188, lr: 40 },
  { state: 'AZ', premium:  1000000, policies:  112, lr: 36 }
];

export const mgaDashboardActivityFeed = [
  { ts: '2026-04-18 14:30', icon: '📋', type: 'Policy', text: 'Westshore Logistics policy TRV-AUTO-2026-11445 issued · premium $48,400', actor: 'Mike Torres',        link: 'mga-policy-profile', param: 'POL-10445' },
  { ts: '2026-04-18 14:22', icon: '⚖', type: 'Claim',   text: 'Reserve change approved — Ridge Builders CLM-0237 · $420k → $520k',       actor: 'Marcus Henderson',    link: 'mga-claim-details',  param: 'CLM-MGA-2026-0237' },
  { ts: '2026-04-18 14:15', icon: '📤', type: 'Doc',    text: 'Repair estimate uploaded by insured · CLM-0248 Westshore · OCR complete',   actor: 'Insured (portal)',    link: 'mga-claim-details',  param: 'CLM-MGA-2026-0248' },
  { ts: '2026-04-18 13:55', icon: '🤖', type: 'AI',     text: 'High-severity AI insight — FleetSafe Auto FL loss ratio surge to 62%',   actor: 'AI Engine',           link: 'mga-reports-kpis' },
  { ts: '2026-04-18 13:20', icon: '🔒', type: 'Bind',   text: 'Policy bound — Westshore Logistics FleetSafe Auto · Travelers · $48,400',   actor: 'Mike Torres',        link: 'mga-policy-profile', param: 'POL-10445' },
  { ts: '2026-04-18 12:05', icon: '⚠',  type: 'Security',text:'MFA bypass attempted — USR-013 · blocked · alert sent',                     actor: 'Security',            link: 'mga-settings-logs' },
  { ts: '2026-04-18 11:42', icon: '💰', type: 'Claim',   text: 'Vendor payment approved — CyberDefense forensics $35k (TechCorp)',          actor: 'Rachel Kim',          link: 'mga-claim-details',  param: 'CLM-MGA-2026-0245' },
  { ts: '2026-04-18 11:22', icon: '💼', type: 'Comm',    text: 'Mid-month Lockton wire request — $42,200 · CFO review',                     actor: 'Omar Khalid',         link: 'mga-commissions-payouts' },
  { ts: '2026-04-18 09:30', icon: '📤', type: 'Bordereau',text:'Travelers premium bordereau delivered — 82 policies · $1.42M',              actor: 'System',              link: 'mga-carrier-bordereau-report' },
  { ts: '2026-04-18 08:42', icon: '🔑', type: 'Login',   text: 'Login — Marcus Henderson via OKTA SSO + MFA',                               actor: 'OKTA',                link: 'mga-settings-logs' }
];

export const mgaDashboardMyTasks = [
  { id: 'MT-1', module: 'Claims',      title: 'Review reserve approval — Harbor Foods CLM-0244',   due: '2026-04-19', priority: 'High',   status: 'Open',       link: 'mga-claim-approvals' },
  { id: 'MT-2', module: 'Renewals',    title: 'Kick off Magnolia Construction renewal (exp 2026-06-01)', due: '2026-04-22', priority: 'High', status: 'In Progress', link: 'mga-policy-profile', param: 'POL-10444' },
  { id: 'MT-3', module: 'Compliance',  title: 'Sign Q1 TX Premium Tax Return (FLG-2026-Q1-TX)',      due: '2026-04-20', priority: 'High',   status: 'Awaiting',   link: 'mga-compliance-filings' },
  { id: 'MT-4', module: 'Commissions', title: 'Approve April 2026 payout run ($284,240 · 14 agents)', due: '2026-04-30', priority: 'High',   status: 'Pending',    link: 'mga-commissions-payouts' },
  { id: 'MT-5', module: 'Endorsements',title: 'Issue Ridge Builders Add Location endorsement (END-88419)',due: '2026-04-20',priority: 'Normal', status: 'Ready',      link: 'mga-policy-endorsements' },
  { id: 'MT-6', module: 'Carriers',    title: 'Prepare for Travelers Q2 QBR (2026-04-22)',           due: '2026-04-22', priority: 'Normal', status: 'In Progress', link: 'mga-carrier-scorecard' }
];

export const mgaDashboardQuickStats = {
  submissions_today: 42,
  submissions_week: 284,
  bind_ratio_24h: 58,
  avg_uw_hrs: 21,
  policies_issued_today: 18,
  policies_issued_month: 512,
  open_claims: 82,
  claims_cycle_days: 38,
  renewal_30d_value: 2840000,
  renewal_60d_value: 4120000,
  renewal_90d_value: 6480000,
  projected_retention: 91
};

export const mgaDashboardRoles = [
  { key: 'executive',     label: 'Executive View',     icon: '👔' },
  { key: 'underwriting',  label: 'Underwriting',       icon: '📝' },
  { key: 'claims',        label: 'Claims',             icon: '🛡' },
  { key: 'finance',       label: 'Finance',            icon: '💰' },
  { key: 'agent-mgr',     label: 'Agent Manager',      icon: '👥' }
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

// ─── MGA Commissions & Payments ───
export const mgaCommissionsKPIs = [
  { label: 'Commission Payable (Month)', value: '$284,240' },
  { label: 'Pending Approval',           value: '4', warning: true },
  { label: 'Outstanding Payouts',        value: '$48,420', warning: true },
  { label: 'Receivable (Carriers)',      value: '$1.28M' },
  { label: 'Profit Share Accrual',       value: '$1.74M' },
  { label: 'Next Payout Run',            value: 'May 5' }
];

export const mgaCommissionTxns = [
  { id: 'CT-88421', policy_id: 'POL-10445', policy_number: 'TRV-AUTO-2026-11445',   agent_id: 'AGT-2041', agent: 'Brown & Brown',         carrier: 'Travelers',       product: 'FleetSafe Auto',          type: 'New Business', tier: 'Tier 1', premium: 48400,  rate_pct: 14, amount: 6776,  chargeback: 0,     net_payable: 6776,  status: 'Accrued',    statement: 'STM-2026-04', payout_date: null,           carrier_ref: 'TRV-COMM-88421', created: '2026-04-18 13:20' },
  { id: 'CT-88420', policy_id: 'POL-10439', policy_number: 'TRV-AUTO-2026-11223',   agent_id: 'AGT-2038', agent: 'Lockton Companies',     carrier: 'Travelers',       product: 'FleetSafe Auto',          type: 'New Business', tier: 'Tier 1', premium: 68400,  rate_pct: 14, amount: 9576,  chargeback: 0,     net_payable: 9576,  status: 'Accrued',    statement: 'STM-2026-04', payout_date: null,           carrier_ref: 'TRV-COMM-88420', created: '2026-04-15 09:40' },
  { id: 'CT-88419', policy_id: 'POL-10441', policy_number: 'CNA-CYB-2026-88102',    agent_id: 'AGT-2038', agent: 'Lockton Companies',     carrier: 'CNA',             product: 'SecureEdge Cyber',         type: 'Renewal',       tier: 'Tier 1', premium: 248000, rate_pct: 15, amount: 37200, chargeback: 0,     net_payable: 37200, status: 'Approved',   statement: 'STM-2026-04', payout_date: '2026-05-05', carrier_ref: 'CNA-COMM-88419', created: '2026-04-14 08:15' },
  { id: 'CT-88418', policy_id: 'POL-10440', policy_number: 'CHB-DO-2025-10091',      agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',       carrier: 'Chubb',           product: 'BoardGuard D&O',          type: 'Renewal',       tier: 'Tier 1', premium: 184000, rate_pct: 18, amount: 33120, chargeback: 0,     net_payable: 33120, status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'CHB-COMM-88418', created: '2026-03-18 10:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88417', policy_id: 'POL-10444', policy_number: 'SEMC-WC-2025-48821',     agent_id: 'AGT-2038', agent: 'Lockton Companies',     carrier: 'SEMC / Liberty',  product: 'WorkForce WC — CA',        type: 'Renewal',       tier: 'Tier 1', premium: 184700, rate_pct: 13, amount: 24011, chargeback: 0,     net_payable: 24011, status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'SEMC-COMM-88417',created: '2026-02-20 09:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88416', policy_id: 'POL-10442', policy_number: 'HTF-BOP-2025-90112',     agent_id: 'AGT-2038', agent: 'Lockton Companies',     carrier: 'Hartford',        product: 'MainStreet BOP',          type: 'New Business', tier: 'Tier 1', premium: 32200,  rate_pct: 13, amount: 4186,  chargeback: 0,     net_payable: 4186,  status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'HFD-COMM-88416', created: '2025-09-05 09:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88415', policy_id: 'POL-10443', policy_number: 'CNA-GL-2025-33102',       agent_id: 'AGT-2038', agent: 'Lockton Companies',     carrier: 'CNA',             product: 'GuardPoint GL',           type: 'Endorsement',   tier: 'Tier 1', premium: 4800,   rate_pct: 15, amount: 720,   chargeback: 0,     net_payable: 720,   status: 'Approved',   statement: 'STM-2026-04', payout_date: '2026-05-05', carrier_ref: 'CNA-COMM-88415', created: '2026-04-15 11:22' },
  { id: 'CT-88414', policy_id: 'POL-10434', policy_number: 'HTF-AUTO-2025-31204',     agent_id: 'AGT-2042', agent: 'Hub International',      carrier: 'Hartford',        product: 'FleetSafe Auto',           type: 'Renewal',       tier: 'Tier 2', premium: 92400,  rate_pct: 13, amount: 12012, chargeback: 0,     net_payable: 12012, status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'HFD-COMM-88414', created: '2025-07-10 09:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88413', policy_id: 'POL-10437', policy_number: 'ZUR-PRP-2025-60012',     agent_id: 'AGT-2035', agent: 'Arthur J. Gallagher',    carrier: 'Zurich',          product: 'PropertyGuard',            type: 'Renewal',       tier: 'Tier 2', premium: 142000, rate_pct: 12, amount: 17040, chargeback: 0,     net_payable: 17040, status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'ZUR-COMM-88413', created: '2025-08-12 10:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88412', policy_id: 'POL-10432', policy_number: 'CHB-CYB-2025-18802',     agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',       carrier: 'Chubb',           product: 'SecureEdge Cyber (Enterprise)', type: 'Renewal', tier: 'Tier 1', premium: 384000, rate_pct: 18, amount: 69120, chargeback: 0,     net_payable: 69120, status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'CHB-COMM-88412', created: '2025-10-20 11:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88411', policy_id: 'POL-10438', policy_number: 'CNA-GL-2024-33104',       agent_id: 'AGT-2040', agent: 'Apex Insurance Services',carrier: 'CNA',             product: 'GuardPoint GL',            type: 'Chargeback',    tier: 'Tier 3', premium: -7100,  rate_pct: 15, amount: -1065, chargeback: 1065,  net_payable: -1065, status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'CNA-CHBK-88411', created: '2026-03-18 14:00', paid: '2026-04-05 14:00', note: 'Policy cancelled pro-rata at 3 months · 75% chargeback' },
  { id: 'CT-88410', policy_id: 'POL-10436', policy_number: 'TRV-BOP-2025-12884',     agent_id: 'AGT-2041', agent: 'Brown & Brown',          carrier: 'Travelers',       product: 'MainStreet BOP',           type: 'New Business', tier: 'Tier 2', premium: 14200,  rate_pct: 13, amount: 1846,  chargeback: 0,     net_payable: 1846,  status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'TRV-COMM-88410', created: '2025-11-05 09:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88409', policy_id: 'POL-10430', policy_number: 'HTF-BOP-2026-90045',     agent_id: 'AGT-2045', agent: 'AssuredPartners',        carrier: 'Hartford',        product: 'MainStreet BOP',           type: 'New Business', tier: 'Tier 3', premium: 18400,  rate_pct: 13, amount: 2392,  chargeback: 0,     net_payable: 2392,  status: 'Accrued',    statement: 'STM-2026-04', payout_date: null,           carrier_ref: 'HFD-COMM-88409', created: '2026-02-05 10:00' },
  { id: 'CT-88408', policy_id: 'POL-10435', policy_number: 'LIB-WC-2025-55041',       agent_id: 'AGT-2035', agent: 'Arthur J. Gallagher',    carrier: 'SEMC / Liberty',  product: 'WorkForce WC — CA',        type: 'Renewal',       tier: 'Tier 2', premium: 98400,  rate_pct: 13, amount: 12792, chargeback: 0,     net_payable: 12792, status: 'Paid',       statement: 'STM-2026-03', payout_date: '2026-04-05', carrier_ref: 'LIB-COMM-88408', created: '2025-08-10 14:00', paid: '2026-04-05 14:00' },
  { id: 'CT-88407', policy_id: 'POL-10433', policy_number: 'CNA-UMB-2025-88040',     agent_id: 'AGT-2038', agent: 'Lockton Companies',     carrier: 'CNA',             product: 'OverShield Umbrella',      type: 'Override',      tier: 'Tier 1', premium: 42800,  rate_pct: 3,  amount: 1284,  chargeback: 0,     net_payable: 1284,  status: 'Approved',   statement: 'STM-2026-04', payout_date: '2026-05-05', carrier_ref: 'CNA-OVRD-88407', created: '2026-04-01 08:00', note: 'Override for AGT-2038 mentor relationship' },
  { id: 'CT-88406', policy_id: 'POL-10431', policy_number: 'TRV-AUTO-2025-88420',    agent_id: 'AGT-2037', agent: 'Risk Strategies',        carrier: 'Travelers',       product: 'FleetSafe Auto',           type: 'Chargeback',    tier: 'Tier 2', premium: -3200,  rate_pct: 14, amount: -448,  chargeback: 448,   net_payable: -448,  status: 'Approved',   statement: 'STM-2026-04', payout_date: '2026-05-05', carrier_ref: 'TRV-CHBK-88406', created: '2026-04-10 11:20', note: 'Driver removal endorsement · pro-rata' }
];

export const mgaAgentCommissionProfiles = [
  { agent_id: 'AGT-2038', agent: 'Lockton Companies',       tier: 'Tier 1', new_biz_pct: 14, renewal_pct: 14, override_pct: 2, ytd_earned: 284200, ytd_paid: 238600, ytd_pending: 45600, ytd_chargebacks: 2400,  profit_share_accrued: 48200, policies: 142, statements: 12, next_payout: 42200, model: 'Tiered · standard + override on junior agent subs' },
  { agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',         tier: 'Tier 1', new_biz_pct: 14, renewal_pct: 13, override_pct: 0, ytd_earned: 186400, ytd_paid: 164800, ytd_pending: 21600, ytd_chargebacks: 800,   profit_share_accrued: 32000, policies: 92,  statements: 12, next_payout: 18400, model: 'Flat + profit share' },
  { agent_id: 'AGT-2040', agent: 'Apex Insurance Services',   tier: 'Tier 2', new_biz_pct: 13, renewal_pct: 12, override_pct: 0, ytd_earned:  94200, ytd_paid:  84600, ytd_pending:  9600, ytd_chargebacks: 1065,  profit_share_accrued: 14200, policies: 58,  statements: 12, next_payout:  8800, model: 'Flat tiered' },
  { agent_id: 'AGT-2041', agent: 'Brown & Brown',             tier: 'Tier 2', new_biz_pct: 13, renewal_pct: 13, override_pct: 0, ytd_earned:  68400, ytd_paid:  58200, ytd_pending: 10200, ytd_chargebacks: 0,     profit_share_accrued:  8400, policies: 42,  statements: 12, next_payout: 10400, model: 'Flat · standard' },
  { agent_id: 'AGT-2042', agent: 'Hub International',         tier: 'Tier 2', new_biz_pct: 13, renewal_pct: 12, override_pct: 0, ytd_earned:  48200, ytd_paid:  42800, ytd_pending:  5400, ytd_chargebacks: 0,     profit_share_accrued:  6200, policies: 32,  statements: 10, next_payout:  4200, model: 'Flat · standard' },
  { agent_id: 'AGT-2043', agent: 'Arthur J. Gallagher',       tier: 'Tier 2', new_biz_pct: 13, renewal_pct: 12, override_pct: 0, ytd_earned:  52400, ytd_paid:  46200, ytd_pending:  6200, ytd_chargebacks: 240,   profit_share_accrued:  7800, policies: 28,  statements: 10, next_payout:  5200, model: 'Flat · standard' },
  { agent_id: 'AGT-2044', agent: 'Risk Strategies',            tier: 'Tier 2', new_biz_pct: 13, renewal_pct: 12, override_pct: 0, ytd_earned:  38200, ytd_paid:  32400, ytd_pending:  5800, ytd_chargebacks: 448,   profit_share_accrued:  4800, policies: 24,  statements: 10, next_payout:  4800, model: 'Flat · standard' },
  { agent_id: 'AGT-2045', agent: 'AssuredPartners',           tier: 'Tier 3', new_biz_pct: 12, renewal_pct: 11, override_pct: 0, ytd_earned:  24200, ytd_paid:  18400, ytd_pending:  5800, ytd_chargebacks: 0,     profit_share_accrued:  2400, policies: 18,  statements: 8,  next_payout:  2400, model: 'Flat · entry tier' },
  { agent_id: 'AGT-2078', agent: 'SunBelt Insurance Co',       tier: 'Tier 4', new_biz_pct: 10, renewal_pct: 10, override_pct: 0, ytd_earned:   6200, ytd_paid:   4400, ytd_pending:  1800, ytd_chargebacks: 0,     profit_share_accrued:     0, policies:  8,  statements: 4,  next_payout:  1800, model: 'PIP reduced tier · performance improvement' }
];

export const mgaCommissionStatements = [
  { id: 'STM-2026-04-AGT-2038', period: 'April 2026', agent_id: 'AGT-2038', agent: 'Lockton Companies',       transactions: 18, gross: 44200, chargebacks: 1600, net: 42600, status: 'Pending Approval', generated: '2026-04-18 06:00', sent: null,                  pdf_doc: 'DOC-52014' },
  { id: 'STM-2026-04-AGT-2039', period: 'April 2026', agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',         transactions: 12, gross: 21600, chargebacks: 0,    net: 21600, status: 'Pending Approval', generated: '2026-04-18 06:00', sent: null,                  pdf_doc: 'DOC-52015' },
  { id: 'STM-2026-04-AGT-2040', period: 'April 2026', agent_id: 'AGT-2040', agent: 'Apex Insurance Services',  transactions:  8, gross: 10665, chargebacks: 1065, net: 9600,  status: 'Pending Approval', generated: '2026-04-18 06:00', sent: null,                  pdf_doc: 'DOC-52016' },
  { id: 'STM-2026-04-AGT-2041', period: 'April 2026', agent_id: 'AGT-2041', agent: 'Brown & Brown',            transactions:  7, gross: 10200, chargebacks: 0,    net: 10200, status: 'Pending Approval', generated: '2026-04-18 06:00', sent: null,                  pdf_doc: 'DOC-52017' },
  { id: 'STM-2026-03-AGT-2038', period: 'March 2026', agent_id: 'AGT-2038', agent: 'Lockton Companies',       transactions: 16, gross: 40400, chargebacks: 0,    net: 40400, status: 'Paid',             generated: '2026-04-01 06:00', sent: '2026-04-01 06:02',   pdf_doc: 'DOC-52010', paid: '2026-04-05 14:00' },
  { id: 'STM-2026-03-AGT-2039', period: 'March 2026', agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',         transactions: 10, gross: 33120, chargebacks: 0,    net: 33120, status: 'Paid',             generated: '2026-04-01 06:00', sent: '2026-04-01 06:02',   pdf_doc: 'DOC-52011', paid: '2026-04-05 14:00' },
  { id: 'STM-2026-03-AGT-2040', period: 'March 2026', agent_id: 'AGT-2040', agent: 'Apex Insurance Services',  transactions:  8, gross:  9600, chargebacks: 0,    net: 9600,  status: 'Paid',             generated: '2026-04-01 06:00', sent: '2026-04-01 06:02',   pdf_doc: 'DOC-52012', paid: '2026-04-05 14:00' },
  { id: 'STM-2026-03-AGT-2041', period: 'March 2026', agent_id: 'AGT-2041', agent: 'Brown & Brown',            transactions:  6, gross:  8200, chargebacks: 0,    net: 8200,  status: 'Paid',             generated: '2026-04-01 06:00', sent: '2026-04-01 06:02',   pdf_doc: 'DOC-52013', paid: '2026-04-05 14:00' }
];

export const mgaPayoutApprovals = [
  { id: 'PAY-2026-05-001', batch: 'May 2026 Monthly Run', period: 'April 2026', total_amount: 284240, agents: 14, payment_method: 'ACH · First Republic', scheduled: '2026-05-05 14:00', status: 'Pending Approval', priority: 'High',   requires: 'CFO + Compliance', submitted_by: 'Omar Khalid', submitted: '2026-04-18 06:00', note: 'Monthly commission run · 14 agents · includes $1.6k chargebacks' },
  { id: 'PAY-2026-05-002', batch: 'Mid-month Wire — Lockton', period: 'April 2026', total_amount: 42200,  agents: 1,  payment_method: 'Wire · top agent expedite', scheduled: '2026-04-25 14:00', status: 'Pending Approval', priority: 'Normal', requires: 'CFO',              submitted_by: 'Omar Khalid', submitted: '2026-04-18 11:20', note: 'Early payout requested by Lockton (top producer)' },
  { id: 'PAY-2026-04-004', batch: 'April 2026 Monthly Run',  period: 'March 2026', total_amount: 238640, agents: 14, payment_method: 'ACH · First Republic', scheduled: '2026-04-05 14:00', status: 'Completed',         priority: 'High',   requires: 'CFO + Compliance', submitted_by: 'Omar Khalid', submitted: '2026-04-01 06:00', approved_by: 'Marcus Henderson', approved: '2026-04-02 09:15', completed: '2026-04-05 14:12' },
  { id: 'PAY-2026-04-003', batch: 'March 2026 Contingent Accrual', period: 'Q1 2026', total_amount: 0,     agents: 0,  payment_method: 'Accrual only',          scheduled: null,                status: 'Completed',         priority: 'Low',    requires: 'CFO',              submitted_by: 'Omar Khalid', submitted: '2026-04-02 10:00', approved_by: 'Marcus Henderson', approved: '2026-04-02 14:00', completed: '2026-04-02 14:15' }
];

export const mgaCarrierCommReconciliation = [
  { id: 'CR-2026-04-01', carrier: 'Travelers',       period: 'March 2026', mga_expected: 342000, carrier_paid: 342000, variance: 0,     status: 'Reconciled', statusColor: 'green', payment_received: '2026-04-12',  ack_ref: 'TRV-PAID-88421' },
  { id: 'CR-2026-04-02', carrier: 'SEMC / Liberty',  period: 'March 2026', mga_expected: 252000, carrier_paid: 252000, variance: 0,     status: 'Reconciled', statusColor: 'green', payment_received: '2026-04-11',  ack_ref: 'LIB-PAID-44210' },
  { id: 'CR-2026-04-03', carrier: 'CNA',              period: 'March 2026', mga_expected: 194000, carrier_paid: 190800, variance: -3200, status: 'Dispute Open', statusColor: 'red',  payment_received: '2026-04-10',  ack_ref: 'CNA-PAID-22010', note: '$3,200 variance · endorsement timing · follow-up 2026-04-24' },
  { id: 'CR-2026-04-04', carrier: 'Hartford',         period: 'March 2026', mga_expected:  84000, carrier_paid:  84000, variance: 0,     status: 'Reconciled', statusColor: 'green', payment_received: '2026-04-12',  ack_ref: 'HFD-PAID-99210' },
  { id: 'CR-2026-04-05', carrier: 'Chubb',            period: 'March 2026', mga_expected: 102000, carrier_paid: 102000, variance: 0,     status: 'Reconciled', statusColor: 'green', payment_received: '2026-04-08',  ack_ref: 'CHB-PAID-11010' },
  { id: 'CR-2026-04-06', carrier: 'Zurich',           period: 'March 2026', mga_expected:  17040, carrier_paid:  10840, variance: -6200, status: 'Dispute Open', statusColor: 'red',  payment_received: '2026-04-09',  ack_ref: 'ZUR-PAID-04400', note: 'Peninsula Mfg endorsement dispute tied to PBD-2026-04-06' },
  { id: 'CR-2026-04-07', carrier: 'Berkley Net',      period: 'March 2026', mga_expected:  14200, carrier_paid:  14200, variance: 0,     status: 'Reconciled', statusColor: 'green', payment_received: '2026-04-14',  ack_ref: 'BKN-PAID-88120' }
];

export const mgaCommissionRules = [
  { id: 'RULE-001', name: 'Tier 1 Base Rate',             trigger: 'Policy bound', condition: 'agent.tier = 1 AND product.category IN (Premium,Core)',  action: 'Apply 14% NB / 14% RN rate',                                               status: 'Active',  priority: 100, created: '2024-01-01', last_edited: '2026-03-01', uses_30d: 284 },
  { id: 'RULE-002', name: 'Tier 2 Standard',              trigger: 'Policy bound', condition: 'agent.tier = 2',                                           action: 'Apply 13% NB / 12% RN rate',                                               status: 'Active',  priority: 100, created: '2024-01-01', last_edited: '2025-11-15', uses_30d: 142 },
  { id: 'RULE-003', name: 'Tier 3 Entry',                  trigger: 'Policy bound', condition: 'agent.tier = 3',                                           action: 'Apply 12% NB / 11% RN rate',                                               status: 'Active',  priority: 100, created: '2024-01-01', last_edited: '2024-01-01', uses_30d: 48  },
  { id: 'RULE-004', name: 'PIP Reduced',                  trigger: 'Policy bound', condition: 'agent.status = PIP',                                       action: 'Apply 10% NB / 10% RN rate · cap $2k/month',                               status: 'Active',  priority: 200, created: '2025-08-01', last_edited: '2026-02-10', uses_30d: 12  },
  { id: 'RULE-005', name: 'Chargeback: Pro-Rata Cancel',  trigger: 'Policy cancelled', condition: 'cancellation_type = pro-rata AND paid_commission > 0', action: 'Generate chargeback = paid * (1 - earned_pct)',                           status: 'Active',  priority: 100, created: '2024-01-01', last_edited: '2025-05-10', uses_30d: 4   },
  { id: 'RULE-006', name: 'Mentor Override — Lockton',    trigger: 'Policy bound', condition: 'insured_agent.mentor = AGT-2038',                         action: 'Accrue 2% override to AGT-2038',                                           status: 'Active',  priority: 150, created: '2025-06-01', last_edited: '2025-06-01', uses_30d: 8   },
  { id: 'RULE-007', name: 'Profit Share — Accrual',         trigger: 'Monthly',      condition: 'agent.ytd_loss_ratio <= 45 AND agent.ytd_premium >= $1M', action: 'Accrue 3% of earned premium as contingent (paid in Q1 of next year)', status: 'Active',  priority: 100, created: '2024-01-01', last_edited: '2024-12-15', uses_30d: 1   },
  { id: 'RULE-008', name: 'Volume Bonus — $5M+',           trigger: 'Monthly',      condition: 'agent.ytd_premium >= $5,000,000',                         action: 'Add 1% bonus on NB written in month',                                       status: 'Active',  priority: 120, created: '2024-06-01', last_edited: '2025-01-05', uses_30d: 2   },
  { id: 'RULE-009', name: 'Draft: New Product Launch Bonus',trigger: 'Policy bound',condition: 'product.launched <= 90d ago',                             action: 'Add 2% launch bonus on first 30d NB',                                       status: 'Draft',   priority: 110, created: '2026-04-10', last_edited: '2026-04-10', uses_30d: 0   }
];

export const mgaTax1099s = [
  { agent_id: 'AGT-2038', agent: 'Lockton Companies',       tin_masked: '**-***5821', address: 'Kansas City, MO',      tax_year: 2025, total_paid: 720400, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52020' },
  { agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',         tin_masked: '**-***3102', address: 'New York, NY',        tax_year: 2025, total_paid: 484200, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52021' },
  { agent_id: 'AGT-2040', agent: 'Apex Insurance Services',  tin_masked: '**-***4421', address: 'Phoenix, AZ',         tax_year: 2025, total_paid: 224800, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52022' },
  { agent_id: 'AGT-2041', agent: 'Brown & Brown',            tin_masked: '**-***8421', address: 'Daytona Beach, FL',   tax_year: 2025, total_paid: 168200, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52023' },
  { agent_id: 'AGT-2042', agent: 'Hub International',        tin_masked: '**-***1104', address: 'Chicago, IL',          tax_year: 2025, total_paid: 124800, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52024' },
  { agent_id: 'AGT-2043', agent: 'Arthur J. Gallagher',      tin_masked: '**-***9420', address: 'Rolling Meadows, IL', tax_year: 2025, total_paid: 118400, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52025' },
  { agent_id: 'AGT-2044', agent: 'Risk Strategies',           tin_masked: '**-***2018', address: 'Boston, MA',          tax_year: 2025, total_paid:  94200, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52026' },
  { agent_id: 'AGT-2045', agent: 'AssuredPartners',           tin_masked: '**-***6602', address: 'Lake Mary, FL',        tax_year: 2025, total_paid:  58200, status: 'Filed',   filed_date: '2026-01-28', correction: false, doc_id: 'DOC-52027' },
  { agent_id: 'AGT-2038', agent: 'Lockton Companies',       tin_masked: '**-***5821', address: 'Kansas City, MO',      tax_year: 2026, total_paid: 238600, status: 'Accruing',filed_date: null,          correction: false, doc_id: null }
];

export const mgaCommissionAnalytics = {
  monthly_trend: [
    { month: 'Nov 25', commission: 224000, profit_share: 18400 },
    { month: 'Dec 25', commission: 248000, profit_share: 22000 },
    { month: 'Jan 26', commission: 262000, profit_share: 24800 },
    { month: 'Feb 26', commission: 254000, profit_share: 28200 },
    { month: 'Mar 26', commission: 238600, profit_share: 32400 },
    { month: 'Apr 26', commission: 284240, profit_share: 42000 }
  ],
  by_carrier: [
    { carrier: 'Travelers',      comm: 28420, earned: 342000 },
    { carrier: 'SEMC / Liberty', comm: 22400, earned: 252000 },
    { carrier: 'CNA',             comm: 28400, earned: 194000 },
    { carrier: 'Chubb',           comm: 33120, earned: 102000 },
    { carrier: 'Hartford',        comm: 16200, earned:  84000 },
    { carrier: 'Zurich',          comm: 17040, earned:  17040 },
    { carrier: 'Berkley Net',     comm: 14200, earned:  14200 }
  ],
  leakage: { total_earned_ytd: 1784000, paid_out_ytd: 1742600, leakage_pct: 2.3, uncollected_chargebacks: 42400, unreconciled_variance: 9400 }
};

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

// ─── MGA Products & Rating Engine ───
export const mgaProductKPIs = [
  { label: 'Active Products',   value: '18' },
  { label: 'In Development',    value: '5' },
  { label: 'Written Premium',   value: '$48.2M' },
  { label: 'Avg Combined Ratio',value: '87%' },
  { label: 'Rate Changes (30d)',value: '3' },
  { label: 'Launched (YTD)',    value: '2' }
];

export const mgaProductLifecycleStages = [
  { key: 'ideation',     label: 'Ideation',        color: 'blue',  order: 1 },
  { key: 'design',       label: 'Design',          color: 'blue',  order: 2 },
  { key: 'testing',      label: 'Testing',         color: 'amber', order: 3 },
  { key: 'carrier_appr', label: 'Carrier Approval',color: 'amber', order: 4 },
  { key: 'rate_filing',  label: 'Rate Filing',     color: 'amber', order: 5 },
  { key: 'launch',       label: 'Launched',        color: 'green', order: 6 },
  { key: 'monitoring',   label: 'Monitoring',      color: 'green', order: 7 },
  { key: 'enhancement',  label: 'Enhancement',     color: 'blue',  order: 8 },
  { key: 'sunset',       label: 'Sunset',          color: 'gray',  order: 9 }
];

export const mgaProducts = [
  { id: 'PROD-WC-CA-01',   name: 'WorkForce WC — CA Small Biz',          code: 'WF-WC-CA',    lob: 'Workers Comp',      type: 'Admitted',      states: 'CA',                     target: 'Small-biz <$10M rev', carriers: ['SEMC','Liberty Mutual'], stage: 'monitoring',  launched: '2023-06-01', version: '3.2', written_premium: 8420000, loss_ratio: 38, bind_ratio: 62, combined_ratio: 76, profit_margin: 24, retention: 92, policies: 248, forms: 14, rating_factors: 12, last_rate_change: '2026-02-15',  rate_change_pct: 3.5 },
  { id: 'PROD-GL-CNA-01',  name: 'GuardPoint GL — Contractors',           code: 'GP-GL-CTR',   lob: 'General Liability', type: 'Admitted',      states: 'CA,NV,OR,WA,AZ',          target: 'Construction trades', carriers: ['CNA'],                 stage: 'monitoring',  launched: '2024-04-10', version: '2.1', written_premium: 6120000, loss_ratio: 44, bind_ratio: 58, combined_ratio: 82, profit_margin: 18, retention: 88, policies: 182, forms: 18, rating_factors: 14, last_rate_change: '2026-01-20',  rate_change_pct: 5.2 },
  { id: 'PROD-CYB-CNA-01', name: 'SecureEdge Cyber — Tech + Prof Svcs',   code: 'SE-CYB',      lob: 'Cyber',             type: 'Admitted',      states: 'All 50',                  target: 'Tech $1M–$500M rev',  carriers: ['CNA','Chubb'],          stage: 'monitoring',  launched: '2024-08-15', version: '2.3', written_premium: 5840000, loss_ratio: 28, bind_ratio: 52, combined_ratio: 68, profit_margin: 32, retention: 90, policies: 142, forms: 16, rating_factors: 22, last_rate_change: '2026-03-10',  rate_change_pct: 2.8 },
  { id: 'PROD-AUTO-TRV-01',name: 'FleetSafe — Commercial Auto',           code: 'FS-AUTO',     lob: 'Commercial Auto',   type: 'Admitted',      states: 'CA,NV,OR,WA',             target: 'Fleets 5–100 units',   carriers: ['Travelers'],           stage: 'monitoring',  launched: '2024-11-22', version: '2.0', written_premium: 4820000, loss_ratio: 52, bind_ratio: 54, combined_ratio: 88, profit_margin: 12, retention: 84, policies: 92,  forms: 12, rating_factors: 18, last_rate_change: '2026-02-28',  rate_change_pct: 6.1 },
  { id: 'PROD-BOP-HTF-01', name: 'MainStreet BOP — Retail & Office',      code: 'MS-BOP',      lob: 'BOP',               type: 'Admitted',      states: 'CA,NV,OR,AZ,TX',          target: 'Small retail/office',  carriers: ['Hartford'],            stage: 'monitoring',  launched: '2023-03-15', version: '3.4', written_premium: 3820000, loss_ratio: 42, bind_ratio: 68, combined_ratio: 84, profit_margin: 16, retention: 86, policies: 284, forms: 22, rating_factors: 16, last_rate_change: '2026-01-12',  rate_change_pct: 4.0 },
  { id: 'PROD-UMB-LIB-01', name: 'OverShield Umbrella',                    code: 'OS-UMB',      lob: 'Umbrella',          type: 'Admitted',      states: 'All 50',                  target: 'Mid-market $2M+',      carriers: ['Liberty Mutual'],       stage: 'monitoring',  launched: '2023-01-10', version: '2.8', written_premium: 2820000, loss_ratio: 18, bind_ratio: 48, combined_ratio: 62, profit_margin: 38, retention: 94, policies: 186, forms: 8,  rating_factors: 8,  last_rate_change: '2025-10-30',  rate_change_pct: 2.0 },
  { id: 'PROD-PRO-HIS-01', name: 'Professional Shield — Consulting & IT', code: 'PS-PROF',     lob: 'Professional',      type: 'Admitted',      states: 'All 50',                  target: 'Tech/consulting',      carriers: ['Hiscox'],              stage: 'monitoring',  launched: '2024-06-18', version: '1.4', written_premium: 2240000, loss_ratio: 36, bind_ratio: 56, combined_ratio: 76, profit_margin: 24, retention: 88, policies: 98,  forms: 14, rating_factors: 18, last_rate_change: '2026-01-08',  rate_change_pct: 3.2 },
  { id: 'PROD-DO-CHB-01',  name: 'BoardGuard D&O — Private Co',           code: 'BG-DO',       lob: 'D&O',               type: 'Admitted',      states: 'All 50',                  target: 'Private cos $10M–$500M',carriers: ['Chubb'],              stage: 'monitoring',  launched: '2024-09-22', version: '1.3', written_premium: 1820000, loss_ratio: 24, bind_ratio: 44, combined_ratio: 70, profit_margin: 30, retention: 92, policies: 62,  forms: 12, rating_factors: 14, last_rate_change: '2026-02-02',  rate_change_pct: 1.5 },
  { id: 'PROD-PROP-ZUR-01',name: 'PropertyGuard Commercial',               code: 'PG-PROP',     lob: 'Property',          type: 'Admitted',      states: 'All 50 (excl. coastal FL)',target: 'TIV $1M–$50M',        carriers: ['Zurich'],              stage: 'monitoring',  launched: '2023-09-05', version: '2.5', written_premium: 1620000, loss_ratio: 48, bind_ratio: 42, combined_ratio: 86, profit_margin: 14, retention: 82, policies: 84,  forms: 20, rating_factors: 20, last_rate_change: '2025-12-15',  rate_change_pct: 7.5 },
  { id: 'PROD-WC-CA-02',   name: 'WorkForce WC — CA Mid-Market',           code: 'WF-WC-MID',   lob: 'Workers Comp',      type: 'Admitted',      states: 'CA,NV',                   target: 'Mid-market $10M–$100M',carriers: ['SEMC','Liberty Mutual'], stage: 'monitoring',launched: '2024-12-01', version: '1.2', written_premium: 1420000, loss_ratio: 34, bind_ratio: 64, combined_ratio: 74, profit_margin: 26, retention: 90, policies: 42,  forms: 14, rating_factors: 12, last_rate_change: '2026-03-20',  rate_change_pct: 4.2 },
  { id: 'PROD-CYB-CNA-02', name: 'SecureEdge Cyber — SMB Express',        code: 'SE-CYB-SMB',  lob: 'Cyber',             type: 'Admitted',      states: 'All 50',                  target: 'SMB <$5M rev',        carriers: ['CNA'],                 stage: 'testing',      launched: null,          version: '0.8', written_premium: 0,       loss_ratio: null, bind_ratio: null, combined_ratio: null, profit_margin: null, retention: null, policies: 0,   forms: 12, rating_factors: 16, last_rate_change: null, rate_change_pct: null },
  { id: 'PROD-GL-MKL-01',  name: 'ArtisanGuard GL — E&S',                 code: 'AG-GL-ES',    lob: 'General Liability', type: 'Surplus / E&S', states: 'All 50',                  target: 'Artisan contractors',  carriers: ['Markel'],              stage: 'carrier_appr', launched: null,          version: '1.0', written_premium: 0,       loss_ratio: null, bind_ratio: null, combined_ratio: null, profit_margin: null, retention: null, policies: 0,   forms: 14, rating_factors: 16, last_rate_change: null, rate_change_pct: null },
  { id: 'PROD-CANN-01',    name: 'CannaShield — Cannabis Dispensary',      code: 'CS-CAN',      lob: 'Specialty / BOP',   type: 'Surplus / E&S', states: 'CA,CO,NV,MA (pilot)',     target: 'Cannabis retail',      carriers: ['Scottsdale'],          stage: 'rate_filing',  launched: null,          version: '1.0', written_premium: 0,       loss_ratio: null, bind_ratio: null, combined_ratio: null, profit_margin: null, retention: null, policies: 0,   forms: 16, rating_factors: 18, last_rate_change: null, rate_change_pct: null },
  { id: 'PROD-EV-FLEET-01',name: 'EVFleet — Electric Vehicle Commercial Auto', code: 'EV-AUTO', lob: 'Commercial Auto',   type: 'Admitted',      states: 'CA (pilot)',              target: 'EV fleets 5–50 units', carriers: ['Travelers'],           stage: 'design',        launched: null,          version: '0.3', written_premium: 0,       loss_ratio: null, bind_ratio: null, combined_ratio: null, profit_margin: null, retention: null, policies: 0,   forms: 0,  rating_factors: 0,  last_rate_change: null, rate_change_pct: null },
  { id: 'PROD-MPL-01',     name: 'MedPractice Shield — PMPM',             code: 'MPS-PL',      lob: 'Professional',       type: 'Admitted',      states: 'All 50 (planned)',         target: 'Medical practices',    carriers: ['Chubb','CNA'],         stage: 'ideation',      launched: null,          version: '0.1', written_premium: 0,       loss_ratio: null, bind_ratio: null, combined_ratio: null, profit_margin: null, retention: null, policies: 0,   forms: 0,  rating_factors: 0,  last_rate_change: null, rate_change_pct: null },
  { id: 'PROD-BOP-OLD-01', name: 'MainStreet BOP — Legacy v1 (sunset)',    code: 'MS-BOP-V1',   lob: 'BOP',                type: 'Admitted',      states: 'CA,NV',                   target: 'Legacy book',          carriers: ['Hartford'],            stage: 'sunset',        launched: '2020-05-10', version: '1.9', written_premium: 240000,  loss_ratio: 58, bind_ratio: 22, combined_ratio: 94, profit_margin: 6,  retention: 72, policies: 18,  forms: 22, rating_factors: 14, last_rate_change: '2024-10-15',  rate_change_pct: 8.0 }
];

export const mgaProductDetail = {
  id: 'PROD-WC-CA-01',
  general: {
    name: 'WorkForce WC — CA Small Biz',
    code: 'WF-WC-CA',
    description: 'Admitted Workers Comp product for California small businesses (revenue under $10M · class codes 5000–9000).',
    lob: 'Workers Comp',
    type: 'Admitted',
    states: ['CA'],
    target_market: 'Small-business employers · 5–100 employees · $500k–$10M revenue',
    target_classes: '5403 Carpentry · 5437 Plumbing · 5645 HVAC · 8810 Clerical · 8742 Sales · 8813 Auto service · 3632 Restaurants · 3669 Retail food',
    carriers: ['SEMC (primary)', 'Liberty Mutual (co-insurer)'],
    version: '3.2',
    effective: '2026-01-01',
    owner: 'Elena Rodriguez',
    filing_number: 'CA-WC-2025-14728'
  },
  coverages: [
    { k: 'Employers Liability — BI by Accident',        v: '$1M / accident',                 mandatory: true },
    { k: 'Employers Liability — BI by Disease',          v: '$1M / employee · $1M aggregate', mandatory: true },
    { k: 'Workers Compensation — Statutory',             v: 'CA Statutory',                   mandatory: true },
    { k: 'Terrorism (TRIA)',                              v: 'Included',                       mandatory: false },
    { k: 'Foreign Voluntary Compensation',                v: 'Optional endorsement',            mandatory: false },
    { k: 'Stop-Gap Employers Liability (monopolistic)',    v: 'Not applicable CA',              mandatory: false }
  ],
  forms: [
    { id: 'WC-FRM-01', name: 'WC Declarations Page',                        type: 'Dec',         version: '3.2', filed: '2025-12-01' },
    { id: 'WC-FRM-02', name: 'WC 00 00 01 A · Workers Comp Policy',          type: 'Policy',      version: 'ISO',  filed: '2025-12-01' },
    { id: 'WC-FRM-03', name: 'WC 04 14 A · CA Cancellation Endorsement',    type: 'Endorsement', version: 'ISO',  filed: '2025-12-01' },
    { id: 'WC-FRM-04', name: 'WC 00 03 13 · Waiver of Subro',                 type: 'Endorsement', version: 'ISO',  filed: '2025-12-01' },
    { id: 'WC-FRM-05', name: 'Schedule of Insured Locations',                  type: 'Schedule',    version: '3.2',  filed: '2025-12-01' },
    { id: 'WC-FRM-06', name: 'Officer Exclusion Election',                     type: 'Endorsement', version: 'CA',   filed: '2025-12-01' },
    { id: 'WC-FRM-07', name: 'Alternative Dispute Resolution Notice',           type: 'Notice',      version: '3.2',  filed: '2025-12-01' }
  ],
  rating_factors: [
    { factor: 'Base Rate (per $100 payroll)',  type: 'base',       by: 'Class code',           example: 'Class 5403: $4.82 · Class 8810: $0.19', impact: 'Primary' },
    { factor: 'Experience Modification',         type: 'modifier',   by: 'WCIRB ExMod',          example: '0.75 (min) – 2.00 (max) · avg 0.92',   impact: 'Primary' },
    { factor: 'Schedule Rating Credits',          type: 'adjustment',  by: 'Safety program',      example: '-5% to -25%',                           impact: 'Secondary' },
    { factor: 'Safety Program Participation',     type: 'credit',     by: 'Certification',        example: '-10% for OSHA VPP',                     impact: 'Secondary' },
    { factor: 'Premium Discount',                 type: 'discount',   by: 'Premium band',         example: '$0–$10k: 0% · $100k–$500k: 9.5% · $500k+: 14%', impact: 'Secondary' },
    { factor: 'Terrorism Premium (TRIA)',         type: 'add',        by: 'Flat fee',              example: '$50 per policy',                        impact: 'Tertiary' },
    { factor: 'Minimum Premium',                   type: 'floor',      by: 'Class group',          example: 'Low hazard: $750 · High hazard: $2,500', impact: 'Tertiary' },
    { factor: 'Taxes & Assessments',              type: 'surcharge',  by: 'State mandate',        example: 'CA: ~7% of premium (UAA + Fraud + STBM)', impact: 'Tertiary' }
  ],
  underwriting_rules: [
    { type: 'eligibility', rule: 'Revenue ≤ $10M',                                                 action: 'Proceed' },
    { type: 'eligibility', rule: 'Headquartered in CA',                                            action: 'Proceed' },
    { type: 'eligibility', rule: 'Experience Mod ≤ 1.20',                                          action: 'Proceed' },
    { type: 'referral',    rule: 'Experience Mod 1.20–1.50',                                       action: 'Refer to senior UW' },
    { type: 'decline',     rule: 'Experience Mod > 1.50',                                          action: 'Decline' },
    { type: 'referral',    rule: 'Prior 5-yr loss ratio > 70%',                                    action: 'Refer + require narrative' },
    { type: 'decline',     rule: 'Class code in prohibited list (hazmat, aviation, explosives)',    action: 'Decline' },
    { type: 'referral',    rule: 'Annual payroll > $5M',                                           action: 'Refer (authority cap)' },
    { type: 'eligibility', rule: 'At least 2 full years in business',                              action: 'Proceed' },
    { type: 'decline',     rule: 'Prior cancellation for non-payment or fraud',                    action: 'Decline' }
  ],
  questionnaire: [
    { q: 'Annual estimated payroll by class code?',              type: 'number_per_class', required: true,  weight: 25 },
    { q: 'Years in business?',                                    type: 'number',           required: true,  weight: 8 },
    { q: 'Prior insurance carrier (last 5 years)?',               type: 'text',              required: true,  weight: 6 },
    { q: 'Experience Modification (WCIRB)?',                       type: 'number',           required: true,  weight: 20 },
    { q: 'Prior claims in last 5 years? (count + amount)',         type: 'claims_list',      required: true,  weight: 18 },
    { q: 'Safety program in place?',                               type: 'choice',            required: true,  weight: 10 },
    { q: 'Does the company use subcontractors?',                   type: 'choice',            required: true,  weight: 8 },
    { q: 'OSHA VPP certified?',                                    type: 'choice',            required: false, weight: 5 }
  ],
  pricing_example: {
    insured: 'Magnolia Construction LLC',
    class_code: '5403 Carpentry',
    payroll: 2400000,
    base_rate: 4.82,
    base_premium: 115680,
    ex_mod: 0.92,
    modified_premium: 106426,
    schedule_credit_pct: -15,
    schedule_credit: -15964,
    subtotal: 90462,
    premium_discount_pct: -9.5,
    premium_discount: -8594,
    terrorism: 50,
    taxes: 5728,
    final_premium: 87646
  },
  launch_workflow: [
    { step: 'Product Design',           status: 'complete', date: '2023-02-15', owner: 'Elena Rodriguez', note: 'Class mix + coverage structure finalized' },
    { step: 'Internal Review',          status: 'complete', date: '2023-03-10', owner: 'Marcus Henderson', note: 'UW committee approved' },
    { step: 'Carrier Approval',         status: 'complete', date: '2023-04-05', owner: 'SEMC',            note: 'Binding authority granted up to $500k' },
    { step: 'CA DOI Rate Filing',        status: 'complete', date: '2023-05-12', owner: 'Compliance',      note: 'Filed 2023-04-15 · approved 2023-05-10' },
    { step: 'Agent Training',            status: 'complete', date: '2023-05-28', owner: 'Ops',             note: '4 training sessions · 142 agents trained' },
    { step: 'Soft Launch (pilot)',       status: 'complete', date: '2023-06-01', owner: 'Ops',             note: '10 agents · 30-day pilot' },
    { step: 'Full Launch',               status: 'complete', date: '2023-07-01', owner: 'Ops',             note: 'Rolled out to all appointed agents' },
    { step: 'Monitoring (90-day)',        status: 'complete', date: '2023-09-30', owner: 'Product Team',    note: 'LR 42% · bind 58% · on-track' }
  ],
  rate_history: [
    { effective: '2023-06-01', version: '1.0', change_pct: 0,    reason: 'Initial launch rates',                 approved_by: 'CA DOI' },
    { effective: '2024-01-15', version: '2.0', change_pct: 3.2,  reason: 'Market adjustment · class 5403 +3.2%', approved_by: 'CA DOI' },
    { effective: '2024-09-01', version: '2.5', change_pct: 4.5,  reason: 'LR trending · broad adjustment',        approved_by: 'CA DOI' },
    { effective: '2025-04-01', version: '3.0', change_pct: -1.8, reason: 'Favorable loss experience · decrease',  approved_by: 'CA DOI' },
    { effective: '2025-12-01', version: '3.2', change_pct: 3.5,  reason: 'Inflation + medical cost index',         approved_by: 'CA DOI' }
  ]
};

export const mgaRateSimulations = [
  { id: 'SIM-482', run: '2026-04-18 15:22', product: 'WF-WC-CA', agent: 'Bridgepoint', insured: 'Magnolia Construction', version_a: 'v3.1', version_b: 'v3.2', premium_a: 84480, premium_b: 87646, delta: 3.7, user: 'Elena Rodriguez', status: 'Review' },
  { id: 'SIM-481', run: '2026-04-17 11:04', product: 'SE-CYB',   agent: 'Aon',          insured: 'DataCore Inc',           version_a: 'v2.2', version_b: 'v2.3', premium_a: 256100, premium_b: 249000, delta: -2.8, user: 'Priya Sharma',     status: 'Approved' },
  { id: 'SIM-480', run: '2026-04-15 14:30', product: 'FS-AUTO',  agent: 'Lockton',      insured: 'Westshore Logistics',    version_a: 'v1.8', version_b: 'v2.0', premium_a: 161200, premium_b: 172400, delta: 6.9, user: 'David Park',       status: 'Approved' },
  { id: 'SIM-479', run: '2026-04-15 09:15', product: 'GP-GL-CTR',agent: 'Marsh',        insured: 'Apex Industries',        version_a: 'v2.0', version_b: 'v2.1', premium_a: 49400, premium_b: 52000, delta: 5.3, user: 'Marcus Henderson', status: 'Approved' },
  { id: 'SIM-478', run: '2026-04-12 16:45', product: 'MS-BOP',   agent: 'Hub',           insured: 'Neon Brewing',           version_a: 'v3.3', version_b: 'v3.4', premium_a: 32600, premium_b: 34000, delta: 4.3, user: 'Tomás Weber',      status: 'Review' },
  { id: 'SIM-477', run: '2026-04-10 10:20', product: 'OS-UMB',   agent: 'Bridgepoint',  insured: 'Magnolia Umbrella',      version_a: 'v2.7', version_b: 'v2.8', premium_a: 17850, premium_b: 18200, delta: 2.0, user: 'Marcus Henderson', status: 'Approved' }
];

export const mgaLaunchPipeline = [
  { id: 'PROD-CYB-CNA-02', product: 'SecureEdge Cyber — SMB Express',    stage: 'testing',     owner: 'Priya Sharma',     target_launch: '2026-07-01', progress: 62, blockers: ['Rating model v0.8 needs A/B test data from CNA'],                 open_items: 3 },
  { id: 'PROD-GL-MKL-01',  product: 'ArtisanGuard GL — E&S',              stage: 'carrier_appr',owner: 'Marcus Henderson', target_launch: '2026-06-15', progress: 78, blockers: ['Markel final appetite sign-off pending · expected Apr 25'],      open_items: 2 },
  { id: 'PROD-CANN-01',    product: 'CannaShield — Cannabis Dispensary',   stage: 'rate_filing', owner: 'Compliance',       target_launch: '2026-08-01', progress: 85, blockers: ['CA DOI rate filing submitted · 30-day review window'],            open_items: 1 },
  { id: 'PROD-EV-FLEET-01',product: 'EVFleet — EV Commercial Auto',        stage: 'design',      owner: 'David Park',        target_launch: '2026-09-15', progress: 38, blockers: ['Telematics integration · battery-hazard rating factor research'], open_items: 5 },
  { id: 'PROD-MPL-01',     product: 'MedPractice Shield — PMPM',          stage: 'ideation',    owner: 'Elena Rodriguez',  target_launch: '2027-01-01', progress: 12, blockers: ['Market research in progress', 'Chubb + CNA capacity discussion'], open_items: 4 }
];

export const mgaProductAnalytics = {
  profitability: [
    { product: 'OverShield Umbrella',                    written: 2820000, loss_ratio: 18, combined: 62, profit: 1072000, profit_pct: 38 },
    { product: 'SecureEdge Cyber — Tech + Prof Svcs',    written: 5840000, loss_ratio: 28, combined: 68, profit: 1869000, profit_pct: 32 },
    { product: 'BoardGuard D&O — Private Co',            written: 1820000, loss_ratio: 24, combined: 70, profit: 546000,  profit_pct: 30 },
    { product: 'WorkForce WC — CA Mid-Market',           written: 1420000, loss_ratio: 34, combined: 74, profit: 369000,  profit_pct: 26 },
    { product: 'WorkForce WC — CA Small Biz',            written: 8420000, loss_ratio: 38, combined: 76, profit: 2021000, profit_pct: 24 },
    { product: 'Professional Shield — Consulting & IT',  written: 2240000, loss_ratio: 36, combined: 76, profit: 538000,  profit_pct: 24 },
    { product: 'GuardPoint GL — Contractors',            written: 6120000, loss_ratio: 44, combined: 82, profit: 1102000, profit_pct: 18 },
    { product: 'MainStreet BOP — Retail & Office',       written: 3820000, loss_ratio: 42, combined: 84, profit: 611000,  profit_pct: 16 },
    { product: 'PropertyGuard Commercial',               written: 1620000, loss_ratio: 48, combined: 86, profit: 227000,  profit_pct: 14 },
    { product: 'FleetSafe — Commercial Auto',            written: 4820000, loss_ratio: 52, combined: 88, profit: 579000,  profit_pct: 12 }
  ],
  rate_impact: [
    { product: 'WorkForce WC — CA Small Biz',   rate_change: 3.5,  retained: 92, lost: 8,  new_business_delta: 6,  premium_delta: 284000 },
    { product: 'GuardPoint GL — Contractors',    rate_change: 5.2,  retained: 88, lost: 12, new_business_delta: 4,  premium_delta: 318000 },
    { product: 'SecureEdge Cyber',                rate_change: 2.8,  retained: 90, lost: 10, new_business_delta: 8,  premium_delta: 164000 },
    { product: 'FleetSafe Auto',                  rate_change: 6.1,  retained: 84, lost: 16, new_business_delta: 2,  premium_delta: 294000 },
    { product: 'MainStreet BOP',                  rate_change: 4.0,  retained: 86, lost: 14, new_business_delta: 5,  premium_delta: 153000 }
  ],
  submission_to_bound: [
    { product: 'WorkForce WC — CA Small Biz',   submitted: 412, quoted: 312, bound: 248, bind_ratio: 62, avg_tat_hrs: 18 },
    { product: 'GuardPoint GL — Contractors',    submitted: 328, quoted: 241, bound: 182, bind_ratio: 58, avg_tat_hrs: 22 },
    { product: 'SecureEdge Cyber',                submitted: 218, quoted: 148, bound: 142, bind_ratio: 52, avg_tat_hrs: 28 },
    { product: 'FleetSafe Auto',                  submitted: 186, quoted: 124, bound: 92,  bind_ratio: 54, avg_tat_hrs: 24 },
    { product: 'MainStreet BOP',                  submitted: 428, quoted: 312, bound: 284, bind_ratio: 68, avg_tat_hrs: 16 },
    { product: 'OverShield Umbrella',             submitted: 412, quoted: 221, bound: 186, bind_ratio: 48, avg_tat_hrs: 20 },
    { product: 'BoardGuard D&O',                  submitted: 164, quoted: 88,  bound: 62,  bind_ratio: 44, avg_tat_hrs: 36 }
  ]
};

// ─── MGA Delegated Claims Management ───
export const mgaClaimsKPIs = [
  { label: 'Open Claims',          value: '82' },
  { label: 'New FNOL (Today)',     value: '4' },
  { label: 'Incurred (YTD)',       value: '$18.4M' },
  { label: 'Avg Cycle Time',       value: '38d' },
  { label: 'Pending Approval',     value: '6', warning: true },
  { label: 'Loss Ratio',           value: '38%' }
];

export const mgaClaimStatuses = ['FNOL','Under Investigation','Reserve Set','Estimate Issued','Pending Approval','Payment Issued','Paid','Subrogating','Closed','Denied','Reopened'];

export const mgaAdjusters = [
  { id: 'ADJ-01', name: 'Jane Rodriguez',    title: 'Senior Adjuster — Auto',         authority: 100000, specialty: ['Auto','Fleet'],          wip: 18, avg_cycle: 32, csat: 4.6, initials: 'JR', avatar_color: 'linear-gradient(135deg,#ff8a65,#ffab40)' },
  { id: 'ADJ-02', name: 'Mark Chen',          title: 'Senior Adjuster — Property',    authority: 100000, specialty: ['Property','BOP'],       wip: 14, avg_cycle: 38, csat: 4.5, initials: 'MC', avatar_color: 'linear-gradient(135deg,#4fc3f7,#29b6f6)' },
  { id: 'ADJ-03', name: 'Linda Park',         title: 'Senior Adjuster — Casualty',    authority: 100000, specialty: ['GL','Umbrella'],         wip: 22, avg_cycle: 42, csat: 4.4, initials: 'LP', avatar_color: 'linear-gradient(135deg,#81c784,#66bb6a)' },
  { id: 'ADJ-04', name: 'Daniel Ortiz',        title: 'Large Loss Adjuster',            authority: 250000, specialty: ['All'],                    wip: 8,  avg_cycle: 68, csat: 4.7, initials: 'DO', avatar_color: 'linear-gradient(135deg,#ba68c8,#ab47bc)' },
  { id: 'ADJ-05', name: 'Rachel Kim',         title: 'Cyber Claims Specialist',         authority: 150000, specialty: ['Cyber','Tech E&O'],     wip: 9,  avg_cycle: 48, csat: 4.8, initials: 'RK', avatar_color: 'linear-gradient(135deg,#6c5ce7,#a67dff)' },
  { id: 'ADJ-06', name: 'Tyler Washington',    title: 'Adjuster — WC',                  authority: 75000,  specialty: ['WC'],                    wip: 28, avg_cycle: 52, csat: 4.3, initials: 'TW', avatar_color: 'linear-gradient(135deg,#ffb74d,#ff9800)' },
  { id: 'ADJ-07', name: 'Sofia Martinez',     title: 'Junior Adjuster',                 authority: 25000,  specialty: ['BOP','Auto'],          wip: 34, avg_cycle: 28, csat: 4.2, initials: 'SM', avatar_color: 'linear-gradient(135deg,#f06292,#ec407a)' }
];

export const mgaClaims = [
  { id: 'CLM-MGA-2026-0248', carrier_claim_no: 'TRV-CA-88421-X',     policy_id: 'TRV-AUTO-2026-11445', product: 'FleetSafe Auto',      lob: 'Commercial Auto', agent_id: 'AGT-2041', insured: 'Westshore Logistics',           loss_date: '2026-04-12', reported: '2026-04-12 16:40', status: 'Under Investigation', sub_status: 'Photos requested',     severity: 'Medium', initial_reserve: 8500,   current_reserve: 12400,  paid: 0,     outstanding: 12400,  adjuster: 'ADJ-01', authority_used: 'Senior', closure_date: null,         final_paid: null,     statusColor: 'blue',  fraud_flag: false, litigation: false, red_flags: 0, days_open: 7,  carrier_reporting: 'Pending', next_action: 'Inspection scheduled 2026-04-22', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0247', carrier_claim_no: 'SEMC-WC-88420-X',    policy_id: 'SEMC-WC-2025-48821', product: 'WorkForce WC — CA',    lob: 'Workers Comp',    agent_id: 'AGT-2038', insured: 'Magnolia Construction LLC',      loss_date: '2026-04-10', reported: '2026-04-11 09:15', status: 'Reserve Set',         sub_status: 'Treatment ongoing',    severity: 'Small',  initial_reserve: 18500,  current_reserve: 18500,  paid: 4200,  outstanding: 14300,  adjuster: 'ADJ-06', authority_used: 'Junior', closure_date: null,         final_paid: null,     statusColor: 'blue',  fraud_flag: false, litigation: false, red_flags: 0, days_open: 9,  carrier_reporting: 'Reported', next_action: 'Medical bills review', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0246', carrier_claim_no: 'CNA-GL-88419-X',     policy_id: 'CNA-GL-2025-33102',  product: 'GuardPoint GL',        lob: 'General Liability',agent_id: 'AGT-2038', insured: 'Apex Industries',                loss_date: '2026-04-08', reported: '2026-04-08 14:22', status: 'Estimate Issued',     sub_status: 'Awaiting claimant response', severity: 'Medium', initial_reserve: 42000,  current_reserve: 38000,  paid: 0,     outstanding: 38000,  adjuster: 'ADJ-03', authority_used: 'Senior', closure_date: null,         final_paid: null,     statusColor: 'amber', fraud_flag: false, litigation: false, red_flags: 0, days_open: 11, carrier_reporting: 'Reported', next_action: 'Follow-up with claimant attorney', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0245', carrier_claim_no: 'CNA-CYB-88418-X',    policy_id: 'CNA-CYB-2026-88102', product: 'SecureEdge Cyber',     lob: 'Cyber',           agent_id: 'AGT-2038', insured: 'TechCorp Inc',                   loss_date: '2026-04-05', reported: '2026-04-05 20:15', status: 'Under Investigation', sub_status: 'Forensic firm engaged', severity: 'Large',  initial_reserve: 420000, current_reserve: 420000, paid: 35000, outstanding: 385000, adjuster: 'ADJ-05', authority_used: 'Referred', closure_date: null,         final_paid: null,     statusColor: 'red',   fraud_flag: false, litigation: false, red_flags: 1, days_open: 14, carrier_reporting: 'Reported', next_action: 'Forensic report expected 2026-04-28', priority: 'High' },
  { id: 'CLM-MGA-2026-0244', carrier_claim_no: 'HTF-BOP-88417-X',    policy_id: 'HTF-BOP-2025-90112', product: 'MainStreet BOP',        lob: 'BOP',             agent_id: 'AGT-2038', insured: 'Harbor Foods',                  loss_date: '2026-03-28', reported: '2026-03-28 11:05', status: 'Pending Approval',    sub_status: 'Settlement offer pending', severity: 'Medium', initial_reserve: 28000,  current_reserve: 42000,  paid: 0,     outstanding: 42000,  adjuster: 'ADJ-02', authority_used: 'Senior', closure_date: null,         final_paid: null,     statusColor: 'amber', fraud_flag: false, litigation: false, red_flags: 0, days_open: 22, carrier_reporting: 'Reported', next_action: 'Waiting on reserve approval', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0243', carrier_claim_no: 'TRV-AUTO-88416-X',   policy_id: 'TRV-AUTO-2026-11223',product: 'FleetSafe Auto',       lob: 'Commercial Auto', agent_id: 'AGT-2038', insured: 'Delta Logistics',                loss_date: '2026-03-22', reported: '2026-03-23 08:40', status: 'Payment Issued',      sub_status: 'Awaiting check clearance', severity: 'Small',  initial_reserve: 6200,   current_reserve: 6200,   paid: 5200,  outstanding: 1000,   adjuster: 'ADJ-01', authority_used: 'Junior', closure_date: null,         final_paid: null,     statusColor: 'blue',  fraud_flag: false, litigation: false, red_flags: 0, days_open: 28, carrier_reporting: 'Reported', next_action: 'Close after check clears', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0242', carrier_claim_no: 'TRV-AUTO-88415-X',   policy_id: 'TRV-AUTO-2026-11223',product: 'FleetSafe Auto',       lob: 'Commercial Auto', agent_id: 'AGT-2038', insured: 'Delta Logistics · Driver B',    loss_date: '2026-03-15', reported: '2026-03-15 14:22', status: 'Paid',                sub_status: 'Awaiting closure',        severity: 'Small',  initial_reserve: 4800,   current_reserve: 3240,   paid: 3240,  outstanding: 0,      adjuster: 'ADJ-01', authority_used: 'Junior', closure_date: null,         final_paid: null,     statusColor: 'green', fraud_flag: false, litigation: false, red_flags: 0, days_open: 35, carrier_reporting: 'Reported', next_action: 'Close file + subro review', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0241', carrier_claim_no: 'CNA-GL-88414-X',     policy_id: 'CNA-GL-2025-33102',  product: 'GuardPoint GL',        lob: 'General Liability', agent_id: 'AGT-2040',insured: 'Coastal Realty',                 loss_date: '2026-03-10', reported: '2026-03-12 10:00', status: 'Subrogating',         sub_status: 'Third-party paying',       severity: 'Medium', initial_reserve: 38000,  current_reserve: 38000,  paid: 38000, outstanding: 0,      adjuster: 'ADJ-03', authority_used: 'Senior', closure_date: null,         final_paid: null,     statusColor: 'blue',  fraud_flag: false, litigation: false, red_flags: 0, days_open: 40, carrier_reporting: 'Reported', next_action: 'Subrogation · expecting $22k recovery', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0240', carrier_claim_no: 'LIB-WC-88413-X',     policy_id: 'SEMC-WC-2025-48821', product: 'WorkForce WC — CA',    lob: 'Workers Comp',    agent_id: 'AGT-2038', insured: 'Magnolia Constr · Employee A',   loss_date: '2026-03-05', reported: '2026-03-05 16:20', status: 'Closed',              sub_status: 'Settled',                   severity: 'Small',  initial_reserve: 12000,  current_reserve: 8420,   paid: 8420,  outstanding: 0,      adjuster: 'ADJ-06', authority_used: 'Junior', closure_date: '2026-04-15', final_paid: 8420,     statusColor: 'green', fraud_flag: false, litigation: false, red_flags: 0, days_open: 41, carrier_reporting: 'Reported', next_action: '—', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0239', carrier_claim_no: 'HTF-BOP-88412-X',    policy_id: 'HTF-BOP-2025-90112', product: 'MainStreet BOP',        lob: 'BOP',             agent_id: 'AGT-2040', insured: 'Apex Industries · Showroom',     loss_date: '2026-02-28', reported: '2026-02-28 22:30', status: 'Closed',              sub_status: 'Paid in full',              severity: 'Medium', initial_reserve: 68000,  current_reserve: 54200,  paid: 54200, outstanding: 0,      adjuster: 'ADJ-02', authority_used: 'Senior', closure_date: '2026-04-10', final_paid: 54200,    statusColor: 'green', fraud_flag: false, litigation: false, red_flags: 0, days_open: 41, carrier_reporting: 'Reported', next_action: '—', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0238', carrier_claim_no: 'ZUR-PRP-88411-X',    policy_id: 'ZUR-PRP-2025-60012', product: 'PropertyGuard',         lob: 'Property',        agent_id: 'AGT-2035', insured: 'Peninsula Manufacturing',        loss_date: '2026-02-22', reported: '2026-02-22 18:15', status: 'Under Investigation', sub_status: 'Suspicious — SIU engaged',   severity: 'Large',  initial_reserve: 284000, current_reserve: 284000, paid: 12000, outstanding: 272000, adjuster: 'ADJ-04', authority_used: 'Referred', closure_date: null,         final_paid: null,     statusColor: 'red',   fraud_flag: true,  litigation: false, red_flags: 3, days_open: 56, carrier_reporting: 'Reported', next_action: 'SIU investigation · carrier aware', priority: 'High' },
  { id: 'CLM-MGA-2026-0237', carrier_claim_no: 'CNA-GL-88410-X',     policy_id: 'CNA-GL-2025-33102',  product: 'GuardPoint GL',        lob: 'General Liability', agent_id: 'AGT-2038',insured: 'Ridge Builders',                 loss_date: '2026-02-15', reported: '2026-02-16 10:40', status: 'Under Investigation', sub_status: 'Attorney represented',      severity: 'Large',  initial_reserve: 420000, current_reserve: 520000, paid: 48000, outstanding: 472000, adjuster: 'ADJ-04', authority_used: 'Referred', closure_date: null,         final_paid: null,     statusColor: 'red',   fraud_flag: false, litigation: true,  red_flags: 1, days_open: 63, carrier_reporting: 'Reported', next_action: 'Deposition scheduled 2026-05-12', priority: 'High' },
  { id: 'CLM-MGA-2026-0236', carrier_claim_no: 'CHB-DO-88409-X',     policy_id: 'CHB-DO-2025-10091',  product: 'BoardGuard D&O',        lob: 'D&O',             agent_id: 'AGT-2039', insured: 'TechCorp Inc · Class Action',    loss_date: '2026-02-08', reported: '2026-02-10 11:15', status: 'Under Investigation', sub_status: 'Carrier defense counsel',   severity: 'Large',  initial_reserve: 850000, current_reserve: 850000, paid: 0,     outstanding: 850000, adjuster: 'ADJ-04', authority_used: 'Referred', closure_date: null,         final_paid: null,     statusColor: 'red',   fraud_flag: false, litigation: true,  red_flags: 0, days_open: 70, carrier_reporting: 'Reported', next_action: 'Monitoring defense strategy', priority: 'High' },
  { id: 'CLM-MGA-2026-0235', carrier_claim_no: 'HTF-AUTO-88408-X',   policy_id: 'NWD-AUTO-2025-41201',product: 'FleetSafe Auto',        lob: 'Commercial Auto', agent_id: 'AGT-2035', insured: 'Summit Industrial · Truck #4',   loss_date: '2026-01-28', reported: '2026-01-28 06:15', status: 'Denied',              sub_status: 'Driver excluded from policy', severity: 'Medium', initial_reserve: 28000,  current_reserve: 0,      paid: 0,     outstanding: 0,      adjuster: 'ADJ-01', authority_used: 'Senior', closure_date: '2026-02-28', final_paid: 0,        statusColor: 'gray',  fraud_flag: false, litigation: false, red_flags: 2, days_open: 31, carrier_reporting: 'Reported', next_action: '—', priority: 'Normal' },
  { id: 'CLM-MGA-2026-0234', carrier_claim_no: 'TRV-AUTO-88407-X',   policy_id: 'TRV-AUTO-2025-88420',product: 'FleetSafe Auto',        lob: 'Commercial Auto', agent_id: 'AGT-2037', insured: 'Desert Rides Transport',         loss_date: '2026-01-15', reported: '2026-01-15 09:30', status: 'Reopened',            sub_status: 'New injury disclosed',      severity: 'Medium', initial_reserve: 38000,  current_reserve: 72000,  paid: 38000, outstanding: 34000,  adjuster: 'ADJ-01', authority_used: 'Senior', closure_date: null,         final_paid: null,     statusColor: 'amber', fraud_flag: false, litigation: false, red_flags: 1, days_open: 94, carrier_reporting: 'Reported', next_action: 'Medical eval scheduled', priority: 'High' }
];

export const mgaClaimDetail = {
  id: 'CLM-MGA-2026-0248',
  header: {
    claim_number_mga: 'CLM-MGA-2026-0248',
    claim_number_carrier: 'TRV-CA-88421-X',
    policy_number: 'TRV-AUTO-2026-11445',
    product: 'FleetSafe Auto',
    carrier: 'Travelers',
    loss_date: '2026-04-12',
    reported_date: '2026-04-12 16:40',
    status: 'Under Investigation',
    severity: 'Medium',
    insured: 'Westshore Logistics',
    agent: 'Lockton Companies'
  },
  loss_details: {
    description: 'Rear-ended at stop light at Folsom Blvd & 65th St. Insured vehicle (2024 Ford F-250) was stationary at red light when struck from behind by claimant vehicle. No injuries reported on scene.',
    location: 'Folsom Blvd & 65th St, Sacramento CA 95819',
    cause_of_loss: 'Collision — rear impact',
    police_report: 'CHP #2026-88421',
    officer: 'Officer R. Martinez, Badge #4421',
    weather: 'Clear · 68°F',
    involved_parties: [
      { name: 'Driver (insured)',   role: 'Operator',   vehicle: '2024 Ford F-250 · VIN 1FTEX1EP... · Co. truck #8', injury: 'None reported' },
      { name: 'Other driver',       role: 'At-fault',    vehicle: '2021 Honda Civic · Personal · insured by Geico · policy CAA-8842-X', injury: 'Neck pain — visited ER' },
      { name: 'Passenger (other)',  role: 'Witness',     vehicle: 'Same as at-fault', injury: 'None' }
    ]
  },
  financials: {
    initial_reserve: 8500,
    reserve_history: [
      { ts: '2026-04-19 14:22', amount: 12400, reason: 'Updated after photo review · rear bumper + tail light + quarter panel', actor: 'Jane Rodriguez' },
      { ts: '2026-04-13 10:15', amount: 8500,  reason: 'Initial reserve based on FNOL + insured statement',                      actor: 'Jane Rodriguez' }
    ],
    current_reserve: 12400,
    paid: 0,
    outstanding: 12400,
    incurred: 12400,
    payments: [],
    expenses: [
      { k: 'Adjuster time',           v: 480 },
      { k: 'Photo inspection',        v: 250 }
    ],
    subrogation: { potential: 12400, pursuing: true, third_party_carrier: 'Geico', status: 'In pursuit' }
  },
  documents: [
    { name: 'FNOL Confirmation.pdf',           type: 'FNOL',             size: '180 KB', uploaded: '2026-04-12 16:42', source: 'Insured' },
    { name: 'Dashcam clip.mp4',                 type: 'Video',            size: '12 MB',  uploaded: '2026-04-12 16:42', source: 'Insured' },
    { name: 'Police report CHP 2026-88421.pdf', type: 'Police Report',    size: '820 KB', uploaded: '2026-04-17 14:15', source: 'Insured' },
    { name: 'Damage photos (12).zip',           type: 'Photos',           size: '48 MB',  uploaded: '2026-04-19 10:30', source: 'Adjuster' },
    { name: 'Repair estimate — Firestone.pdf',  type: 'Estimate',         size: '480 KB', uploaded: '2026-04-18 09:04', source: 'Insured' },
    { name: 'Other driver insurance.pdf',       type: 'Third Party',       size: '120 KB', uploaded: '2026-04-12 16:50', source: 'Insured' }
  ],
  timeline: [
    { ts: '2026-04-19 14:22', event: 'Reserve revised up to $12,400 after photo review',    actor: 'Jane Rodriguez', category: 'Reserve' },
    { ts: '2026-04-19 10:30', event: '12 damage photos uploaded · shop floor inspection',   actor: 'Jane Rodriguez', category: 'Investigation' },
    { ts: '2026-04-18 09:04', event: 'Repair estimate received from Firestone ($11,200)',    actor: 'Insured (portal)', category: 'Documentation' },
    { ts: '2026-04-17 14:15', event: 'Police report uploaded by insured',                    actor: 'Insured (portal)', category: 'Documentation' },
    { ts: '2026-04-15 10:00', event: 'Inspection scheduled for 2026-04-22 @ 10 AM',           actor: 'Jane Rodriguez', category: 'Workflow' },
    { ts: '2026-04-14 09:30', event: 'First-party statement completed with insured',          actor: 'Jane Rodriguez', category: 'Investigation' },
    { ts: '2026-04-13 11:05', event: 'Assigned to Jane Rodriguez (Senior Adjuster · Auto)',   actor: 'System auto-assign', category: 'Workflow' },
    { ts: '2026-04-13 10:15', event: 'Initial reserve $8,500 · auto-triage score 42 (medium)', actor: 'MGA System',         category: 'Reserve' },
    { ts: '2026-04-12 16:42', event: 'FNOL acknowledged · claim number assigned',              actor: 'MGA System',         category: 'Intake' },
    { ts: '2026-04-12 16:40', event: 'FNOL filed via insured portal · no injuries',            actor: 'Insured (portal)',   category: 'Intake' }
  ],
  audit_trail: [
    { ts: '2026-04-19 14:22', actor: 'Jane Rodriguez', action: 'Reserve raised from $8,500 to $12,400', auth_level: 'Senior ($100k cap)', authority_used: 'No (well under cap)' },
    { ts: '2026-04-13 11:05', actor: 'System',          action: 'Auto-assigned to ADJ-01',              auth_level: '—',                    authority_used: 'Routing rule' },
    { ts: '2026-04-13 10:15', actor: 'System',          action: 'Initial reserve $8,500 set',            auth_level: 'Auto',                  authority_used: 'Auto-triage model' },
    { ts: '2026-04-12 16:42', actor: 'MGA System',      action: 'Claim number generated',                auth_level: '—',                    authority_used: '—' }
  ],
  messages: [
    { ts: '2026-04-19 14:42', from: 'Jane Rodriguez', to: 'James Reynolds (insured)', channel: 'Portal',    text: 'Hi James — got your photos. Reserve updated to match estimate. We\'re subrogating against Geico; you should see payment within 10 business days of repair completion.' },
    { ts: '2026-04-18 11:20', from: 'James Reynolds', to: 'Jane Rodriguez',          channel: 'Portal',    text: 'Firestone quoted $11,200 for the repair. Attached estimate.' },
    { ts: '2026-04-17 14:20', from: 'Jane Rodriguez', to: 'James Reynolds',          channel: 'Portal',    text: 'Thanks for the police report. Any estimate on file?' }
  ]
};

export const mgaReserveApprovals = [
  { id: 'RES-4201', claim_id: 'CLM-MGA-2026-0244', insured: 'Harbor Foods',                  current_reserve: 28000,  proposed_reserve: 42000,  delta: 14000,  proposed_by: 'Mark Chen',          submitted: '2026-04-18 16:22', reason: 'Additional damage discovered in back storage room · water damage spread',                                        priority: 'Normal', status: 'Pending' },
  { id: 'RES-4200', claim_id: 'CLM-MGA-2026-0237', insured: 'Ridge Builders',                current_reserve: 420000, proposed_reserve: 520000, delta: 100000, proposed_by: 'Daniel Ortiz',       submitted: '2026-04-17 11:04', reason: 'Attorney demand letter received · potential exposure higher than initial assessment',                           priority: 'High',   status: 'Pending' },
  { id: 'RES-4199', claim_id: 'CLM-MGA-2026-0245', insured: 'TechCorp Inc (cyber breach)',   current_reserve: 280000, proposed_reserve: 420000, delta: 140000, proposed_by: 'Rachel Kim',         submitted: '2026-04-15 09:15', reason: 'Forensic firm identified broader scope than initial · 2.1M PII records · regulatory notifications required', priority: 'High',   status: 'Approved', approved_by: 'Marcus Henderson', approved: '2026-04-15 14:00' },
  { id: 'RES-4198', claim_id: 'CLM-MGA-2026-0238', insured: 'Peninsula Manufacturing',        current_reserve: 150000, proposed_reserve: 284000, delta: 134000, proposed_by: 'Daniel Ortiz',       submitted: '2026-03-22 10:00', reason: 'SIU investigation revealed greater damage · fraud flag still open',                                              priority: 'High',   status: 'Approved', approved_by: 'Marcus Henderson', approved: '2026-03-22 16:30' },
  { id: 'RES-4197', claim_id: 'CLM-MGA-2026-0234', insured: 'Desert Rides Transport',        current_reserve: 38000,  proposed_reserve: 72000,  delta: 34000,  proposed_by: 'Jane Rodriguez',    submitted: '2026-04-08 11:20', reason: 'Claim reopened after new injury disclosed by claimant',                                                         priority: 'Medium', status: 'Approved', approved_by: 'Daniel Ortiz',       approved: '2026-04-09 09:15' }
];

export const mgaPaymentApprovals = [
  { id: 'PMT-8821', claim_id: 'CLM-MGA-2026-0244', insured: 'Harbor Foods',                payee: 'Servpro Restoration',    amount: 28400, payment_type: 'Vendor', method: 'ACH',     proposed_by: 'Mark Chen',    submitted: '2026-04-18 16:22', status: 'Pending Approval', priority: 'Normal', auth_cap: 100000 },
  { id: 'PMT-8820', claim_id: 'CLM-MGA-2026-0241', insured: 'Coastal Realty',              payee: 'Plaintiff — Slip & Fall', amount: 38000, payment_type: 'Settlement', method: 'Check', proposed_by: 'Linda Park',   submitted: '2026-04-12 10:15', status: 'Approved',         priority: 'Normal', auth_cap: 100000, approved_by: 'Marcus Henderson', approved: '2026-04-12 15:00' },
  { id: 'PMT-8819', claim_id: 'CLM-MGA-2026-0240', insured: 'Magnolia · Employee A',       payee: 'Employee (medical)',      amount: 8420,  payment_type: 'Indemnity', method: 'ACH',     proposed_by: 'Tyler Washington',submitted: '2026-04-05 14:30', status: 'Paid',             priority: 'Normal', auth_cap: 75000,  approved_by: 'Tyler Washington',approved: '2026-04-05 14:30' },
  { id: 'PMT-8818', claim_id: 'CLM-MGA-2026-0245', insured: 'TechCorp Inc',                payee: 'CyberDefense Forensics',  amount: 35000, payment_type: 'Vendor', method: 'ACH',     proposed_by: 'Rachel Kim',   submitted: '2026-04-08 11:15', status: 'Paid',             priority: 'High',   auth_cap: 150000, approved_by: 'Rachel Kim',        approved: '2026-04-08 11:20' }
];

export const mgaCarrierBordereau = [
  { id: 'BDX-2026-04-18', carrier: 'Travelers',       type: 'Claims Daily',   period: '2026-04-18', claims: 18, paid_amount: 18420, reserve_movement: 32400, status: 'Delivered', statusColor: 'green', ack: 'TRV-ACK-8842', sent: '2026-04-18 18:00' },
  { id: 'BDX-2026-04-17', carrier: 'SEMC / Liberty',  type: 'Claims Daily',   period: '2026-04-17', claims: 12, paid_amount: 28200, reserve_movement: 8400,  status: 'Delivered', statusColor: 'green', ack: 'SEMC-ACK-4481', sent: '2026-04-17 18:00' },
  { id: 'BDX-2026-04-W16',carrier: 'CNA',              type: 'Claims Weekly',  period: 'Wk 16 2026', claims: 28, paid_amount: 82400, reserve_movement: 142000, status: 'Delivered', statusColor: 'green', ack: 'CNA-ACK-4481', sent: '2026-04-15 06:00' },
  { id: 'BDX-2026-04-M4', carrier: 'Hartford',         type: 'Claims Monthly', period: 'Apr 2026',    claims: 6,  paid_amount: 54200, reserve_movement: 0,      status: 'Queued',    statusColor: 'blue',  ack: null,          sent: null },
  { id: 'BDX-2026-04-W16-2',carrier: 'Chubb',            type: 'Large Loss',     period: 'Wk 16 2026', claims: 1,  paid_amount: 0,     reserve_movement: 850000, status: 'Delivered', statusColor: 'green', ack: 'CHB-ACK-221',  sent: '2026-04-15 14:30' }
];

export const mgaClaimsAnalytics = {
  cycle_time_by_lob: [
    { lob: 'Workers Comp',        avg_days: 45, closed_30d: 12, closed_45d: 58, closed_60d: 74, target: 45 },
    { lob: 'General Liability',   avg_days: 62, closed_30d: 8,  closed_45d: 42, closed_60d: 58, target: 60 },
    { lob: 'Commercial Auto',     avg_days: 32, closed_30d: 18, closed_45d: 72, closed_60d: 88, target: 30 },
    { lob: 'BOP',                 avg_days: 28, closed_30d: 22, closed_45d: 78, closed_60d: 92, target: 30 },
    { lob: 'Cyber',               avg_days: 68, closed_30d: 3,  closed_45d: 28, closed_60d: 52, target: 90 },
    { lob: 'Property',            avg_days: 42, closed_30d: 14, closed_45d: 54, closed_60d: 78, target: 45 },
    { lob: 'D&O',                 avg_days: 184,closed_30d: 0,  closed_45d: 4,  closed_60d: 8,  target: 180 }
  ],
  loss_ratio_by_product: [
    { product: 'OverShield Umbrella',    written: 2820000, incurred: 508000,   loss_ratio: 18 },
    { product: 'BoardGuard D&O',         written: 1820000, incurred: 437000,   loss_ratio: 24 },
    { product: 'SecureEdge Cyber',       written: 5840000, incurred: 1635000,  loss_ratio: 28 },
    { product: 'WorkForce WC — CA Small',written: 8420000, incurred: 3200000,  loss_ratio: 38 },
    { product: 'MainStreet BOP',         written: 3820000, incurred: 1604000,  loss_ratio: 42 },
    { product: 'GuardPoint GL',          written: 6120000, incurred: 2693000,  loss_ratio: 44 },
    { product: 'FleetSafe Auto',         written: 4820000, incurred: 2506000,  loss_ratio: 52 },
    { product: 'PropertyGuard',          written: 1620000, incurred: 778000,   loss_ratio: 48 }
  ],
  severity_trend: [
    { month: 'Nov 25', small: 18, medium: 8,  large: 1 },
    { month: 'Dec 25', small: 22, medium: 12, large: 2 },
    { month: 'Jan 26', small: 24, medium: 14, large: 1 },
    { month: 'Feb 26', small: 19, medium: 10, large: 3 },
    { month: 'Mar 26', small: 21, medium: 11, large: 2 },
    { month: 'Apr 26', small: 8,  medium: 4,  large: 2 }
  ],
  adjuster_performance: [
    { name: 'Jane Rodriguez',   wip: 18, closed_30d: 24, avg_cycle: 32, csat: 4.6, accuracy: 94 },
    { name: 'Mark Chen',         wip: 14, closed_30d: 18, avg_cycle: 38, csat: 4.5, accuracy: 92 },
    { name: 'Linda Park',         wip: 22, closed_30d: 16, avg_cycle: 42, csat: 4.4, accuracy: 90 },
    { name: 'Daniel Ortiz',       wip: 8,  closed_30d: 4,  avg_cycle: 68, csat: 4.7, accuracy: 96 },
    { name: 'Rachel Kim',         wip: 9,  closed_30d: 6,  avg_cycle: 48, csat: 4.8, accuracy: 95 },
    { name: 'Tyler Washington',    wip: 28, closed_30d: 32, avg_cycle: 52, csat: 4.3, accuracy: 88 },
    { name: 'Sofia Martinez',     wip: 34, closed_30d: 42, avg_cycle: 28, csat: 4.2, accuracy: 84 }
  ],
  subro_recovery: { pursued_30d: 142000, recovered_30d: 88000, rate: 62 }
};

// ─── MGA Risk & Appetite Management ───
export const mgaAppetiteKPIs = [
  { label: 'Total Written (YTD)',  value: '$48.2M' },
  { label: 'Avg Loss Ratio',       value: '38%' },
  { label: 'Within Appetite %',    value: '94%' },
  { label: 'Appetite Changes (30d)',value: '7' },
  { label: 'Pending Approvals',    value: '3', warning: true },
  { label: 'Capacity Used',        value: '68%' }
];

export const mgaAppetiteTiers = [
  { key: 'aggressive', label: 'Aggressive',  color: '#00c853', desc: 'High capacity · competitive pricing · fast-track UW · actively seeking' },
  { key: 'selective',  label: 'Selective',   color: '#ffb300', desc: 'Limited capacity · stricter terms · case-by-case' },
  { key: 'restricted', label: 'Restricted',  color: '#ff5252', desc: 'Very limited · senior UW only · requires exec approval' },
  { key: 'prohibited', label: 'Prohibited',  color: '#424242', desc: 'Auto-decline · not accepting under any circumstances' }
];

export const mgaAppetiteMatrix = [
  // LOB × State × class tier · shape: {lob, state, class_group, tier, capacity_pct, active_policies, written_ytd, loss_ratio, notes}
  { lob: 'Workers Comp',      state: 'CA', class_group: 'Low-hazard office/clerical', tier: 'aggressive', capacity_pct: 48, policies: 62, written_ytd: 2840000, loss_ratio: 28, notes: 'Preferred · all classes 8810 + 8742' },
  { lob: 'Workers Comp',      state: 'CA', class_group: 'Construction trades',         tier: 'aggressive', capacity_pct: 72, policies: 94, written_ytd: 3820000, loss_ratio: 36, notes: 'Class 5403/5437/5645 with ExMod ≤ 1.0' },
  { lob: 'Workers Comp',      state: 'CA', class_group: 'Restaurants',                  tier: 'selective',  capacity_pct: 38, policies: 28, written_ytd: 820000,  loss_ratio: 52, notes: 'Class 3632/3669 — tighten for >$2M rev' },
  { lob: 'Workers Comp',      state: 'CA', class_group: 'Heavy manufacturing',          tier: 'restricted', capacity_pct: 14, policies: 6,  written_ytd: 220000,  loss_ratio: 68, notes: 'Senior UW only · ExMod required ≤0.95' },
  { lob: 'Workers Comp',      state: 'TX', class_group: 'All low-hazard',               tier: 'selective',  capacity_pct: 24, policies: 14, written_ytd: 420000,  loss_ratio: 44, notes: 'New market · build slowly' },
  { lob: 'Workers Comp',      state: 'NV', class_group: 'All',                          tier: 'aggressive', capacity_pct: 42, policies: 22, written_ytd: 840000,  loss_ratio: 32, notes: 'Preferred · expanding' },
  { lob: 'Workers Comp',      state: 'All', class_group: 'Hazmat / Nuclear',            tier: 'prohibited', capacity_pct: 0,  policies: 0,  written_ytd: 0,       loss_ratio: null, notes: 'Auto-decline' },
  { lob: 'General Liability', state: 'CA', class_group: 'Contractors · artisan',         tier: 'aggressive', capacity_pct: 68, policies: 124,written_ytd: 4120000, loss_ratio: 38, notes: 'Top segment · continue growth' },
  { lob: 'General Liability', state: 'CA', class_group: 'Restaurants',                   tier: 'selective',  capacity_pct: 32, policies: 22, written_ytd: 620000,  loss_ratio: 58, notes: 'Liquor liability refer' },
  { lob: 'General Liability', state: 'TX', class_group: 'All',                           tier: 'aggressive', capacity_pct: 56, policies: 42, written_ytd: 1820000, loss_ratio: 42, notes: 'Profitable market' },
  { lob: 'General Liability', state: 'FL', class_group: 'Coastal contractors',           tier: 'restricted', capacity_pct: 8,  policies: 4,  written_ytd: 180000,  loss_ratio: 62, notes: 'Coastal wind exposure · limited' },
  { lob: 'General Liability', state: 'All', class_group: 'Professional / Medical',       tier: 'prohibited', capacity_pct: 0,  policies: 0,  written_ytd: 0,       loss_ratio: null, notes: 'Refer to Chubb / carrier' },
  { lob: 'Commercial Auto',   state: 'CA', class_group: 'Fleet 5–50 units',               tier: 'aggressive', capacity_pct: 54, policies: 48, written_ytd: 2420000, loss_ratio: 44, notes: 'Telematics required' },
  { lob: 'Commercial Auto',   state: 'CA', class_group: 'Fleet 50–100 units',             tier: 'selective',  capacity_pct: 28, policies: 18, written_ytd: 1820000, loss_ratio: 56, notes: 'Driver MVR strict' },
  { lob: 'Commercial Auto',   state: 'All', class_group: 'Long-haul / Hazmat',           tier: 'prohibited', capacity_pct: 0,  policies: 0,  written_ytd: 0,       loss_ratio: null, notes: 'Auto-decline' },
  { lob: 'Cyber',             state: 'All', class_group: 'Tech + Prof Services',          tier: 'aggressive', capacity_pct: 64, policies: 142,written_ytd: 5840000, loss_ratio: 28, notes: 'Best-performing segment · expand' },
  { lob: 'Cyber',             state: 'All', class_group: 'Healthcare / Hospital',        tier: 'selective',  capacity_pct: 18, policies: 8,  written_ytd: 480000,  loss_ratio: 48, notes: 'HIPAA exposure · strict controls' },
  { lob: 'Cyber',             state: 'All', class_group: 'Critical infrastructure',      tier: 'restricted', capacity_pct: 4,  policies: 2,  written_ytd: 120000,  loss_ratio: null, notes: 'Refer to senior UW + carrier' },
  { lob: 'BOP',               state: 'CA', class_group: 'Retail / Office',               tier: 'aggressive', capacity_pct: 72, policies: 182,written_ytd: 3120000, loss_ratio: 38, notes: 'Core product · high volume' },
  { lob: 'BOP',               state: 'CA', class_group: 'Wholesale / Distribution',      tier: 'selective',  capacity_pct: 22, policies: 22, written_ytd: 480000,  loss_ratio: 48, notes: 'Larger risks only' },
  { lob: 'Property',          state: 'CA', class_group: 'Wildfire zones',                 tier: 'restricted', capacity_pct: 6,  policies: 4,  written_ytd: 180000,  loss_ratio: null, notes: 'Defensible space required · cat limit' },
  { lob: 'Property',          state: 'All (excl. coastal FL)', class_group: 'TIV <$50M',  tier: 'aggressive', capacity_pct: 52, policies: 74, written_ytd: 1820000, loss_ratio: 42, notes: 'COPE ≥ 70 required' },
  { lob: 'D&O / Professional',state: 'All', class_group: 'Private cos $10M–$500M',       tier: 'aggressive', capacity_pct: 44, policies: 62, written_ytd: 1820000, loss_ratio: 24, notes: 'Growing segment' },
  { lob: 'Umbrella',          state: 'All', class_group: 'Mid-market · follow-form',     tier: 'aggressive', capacity_pct: 38, policies: 186,written_ytd: 2820000, loss_ratio: 18, notes: 'Top-quartile margin · scale aggressively' }
];

export const mgaAppetiteRulesEnhanced = [
  { id: 'APT-001', lob: 'Workers Comp',     state: 'CA',           risk_attr: 'Class codes 5000–5999 · Payroll $500k–$10M',  tier: 'aggressive', max_limit: 500000,  referral_threshold: 250000, effective: '2025-12-01', expiry: '2026-12-31', last_modified: 'Elena Rodriguez', notes: 'Core WC appetite · ExMod ≤ 1.20 · safety program required', active: true, version: 'v3.2' },
  { id: 'APT-002', lob: 'Workers Comp',     state: 'CA',           risk_attr: 'Class 3632/3669 (restaurants) · rev $250k–$10M', tier: 'selective', max_limit: 150000,  referral_threshold: 75000,  effective: '2026-01-15', expiry: '2026-12-31', last_modified: 'Elena Rodriguez', notes: 'Liquor liability exclusion applies · LR watch',                  active: true, version: 'v2.1' },
  { id: 'APT-003', lob: 'Workers Comp',     state: 'All',          risk_attr: 'Class hazmat/nuclear/aviation',                  tier: 'prohibited', max_limit: 0,       referral_threshold: 0,      effective: '2023-01-01', expiry: '—',          last_modified: 'Marcus Henderson', notes: 'Permanent auto-decline',                                            active: true, version: 'v1.0' },
  { id: 'APT-004', lob: 'General Liability',state: 'All 50',       risk_attr: 'Most contractors · artisan trades',               tier: 'aggressive', max_limit: 500000,  referral_threshold: 200000, effective: '2025-10-15', expiry: '2026-10-15', last_modified: 'Marcus Henderson', notes: 'Prior loss runs required',                                           active: true, version: 'v2.4' },
  { id: 'APT-005', lob: 'General Liability',state: 'FL',           risk_attr: 'Coastal contractors · wind exposure',             tier: 'restricted', max_limit: 100000,  referral_threshold: 50000,  effective: '2026-03-01', expiry: '2026-10-31', last_modified: 'David Park',       notes: 'Hurricane season adjustment · limited capacity',                     active: true, version: 'v1.1' },
  { id: 'APT-006', lob: 'Cyber',             state: 'All 50',       risk_attr: 'Tech + Prof Services · Rev <$500M',               tier: 'aggressive', max_limit: 500000,  referral_threshold: 250000, effective: '2026-04-01', expiry: '2027-04-01', last_modified: 'Priya Sharma',     notes: 'MFA + SOC2 preferred · top-performing segment',                      active: true, version: 'v3.0' },
  { id: 'APT-007', lob: 'Cyber',             state: 'All 50',       risk_attr: 'Healthcare / PHI-heavy',                          tier: 'selective',  max_limit: 250000,  referral_threshold: 100000, effective: '2026-02-15', expiry: '2026-12-31', last_modified: 'Priya Sharma',     notes: 'HIPAA controls required · MFA 100%',                                  active: true, version: 'v2.2' },
  { id: 'APT-008', lob: 'Commercial Auto',   state: 'CA,NV,OR,WA',  risk_attr: 'Fleet 5–100 units',                                tier: 'aggressive', max_limit: 500000,  referral_threshold: 250000, effective: '2025-11-22', expiry: '2026-11-22', last_modified: 'David Park',       notes: 'Telematics required for discount',                                    active: true, version: 'v2.0' },
  { id: 'APT-009', lob: 'Commercial Auto',   state: 'All',          risk_attr: 'Long-haul / Hazmat / Aviation',                    tier: 'prohibited', max_limit: 0,       referral_threshold: 0,      effective: '2023-01-01', expiry: '—',          last_modified: 'Marcus Henderson', notes: 'Permanent auto-decline',                                              active: true, version: 'v1.0' },
  { id: 'APT-010', lob: 'Property',          state: 'CA',           risk_attr: 'Wildfire zones · defensible space verified',      tier: 'restricted', max_limit: 250000,  referral_threshold: 100000, effective: '2026-04-01', expiry: '2026-10-31', last_modified: 'David Park',       notes: 'Wildfire season restriction · cat limit applies',                     active: true, version: 'v1.4' },
  { id: 'APT-011', lob: 'Property',          state: 'All (excl. FL coastal)', risk_attr: 'COPE ≥ 70 · TIV <$50M',               tier: 'aggressive', max_limit: 500000,  referral_threshold: 250000, effective: '2025-08-10', expiry: '2026-08-10', last_modified: 'David Park',       notes: 'Sprinkler + alarm monitoring required',                               active: true, version: 'v2.5' },
  { id: 'APT-012', lob: 'D&O',                state: 'All 50',       risk_attr: 'Private cos · rev $10M–$500M',                     tier: 'aggressive', max_limit: 500000,  referral_threshold: 250000, effective: '2025-09-22', expiry: '2026-09-22', last_modified: 'Priya Sharma',     notes: 'IPO/M&A exclusions · clean financials required',                      active: true, version: 'v1.3' }
];

export const mgaPortfolioExposure = {
  by_state: [
    { state: 'California',   tiv: 1820000000, policies: 684, premium_ytd: 28420000, loss_ratio: 36, concentration_pct: 59 },
    { state: 'Texas',        tiv: 320000000,  policies: 108, premium_ytd: 4820000,  loss_ratio: 42, concentration_pct: 10 },
    { state: 'Nevada',       tiv: 180000000,  policies: 62,  premium_ytd: 2420000,  loss_ratio: 38, concentration_pct: 5 },
    { state: 'Oregon',       tiv: 140000000,  policies: 48,  premium_ytd: 1820000,  loss_ratio: 34, concentration_pct: 4 },
    { state: 'Washington',   tiv: 120000000,  policies: 42,  premium_ytd: 1620000,  loss_ratio: 36, concentration_pct: 3 },
    { state: 'Arizona',      tiv: 100000000,  policies: 36,  premium_ytd: 1240000,  loss_ratio: 48, concentration_pct: 3 },
    { state: 'New York',     tiv: 240000000,  policies: 54,  premium_ytd: 3240000,  loss_ratio: 32, concentration_pct: 7 },
    { state: 'Florida',      tiv: 160000000,  policies: 28,  premium_ytd: 1820000,  loss_ratio: 58, concentration_pct: 4 },
    { state: 'Illinois',     tiv: 80000000,   policies: 24,  premium_ytd: 980000,   loss_ratio: 40, concentration_pct: 2 },
    { state: 'Other (12 states)', tiv: 120000000, policies: 42, premium_ytd: 1820000, loss_ratio: 44, concentration_pct: 3 }
  ],
  top_agents: [
    { agent: 'Lockton Companies',              policies: 182, premium: 8420000, concentration_pct: 17 },
    { agent: 'Marsh McLennan',                  policies: 148, premium: 6120000, concentration_pct: 13 },
    { agent: 'Aon Risk Solutions',              policies: 132, premium: 5840000, concentration_pct: 12 },
    { agent: 'Bridgepoint Insurance Brokers',   policies: 127, premium: 3920000, concentration_pct: 8 },
    { agent: 'Hub International',               policies: 84,  premium: 2480000, concentration_pct: 5 },
    { agent: 'Woodruff Sawyer',                 policies: 62,  premium: 1820000, concentration_pct: 4 },
    { agent: 'All Others (8 agents)',           policies: 118, premium: 19600000,concentration_pct: 41 }
  ],
  top_locations: [
    { location: 'Sacramento, CA',     tiv: 124000000, policies: 42, premium: 1820000 },
    { location: 'Los Angeles, CA',    tiv: 218000000, policies: 68, premium: 3420000 },
    { location: 'San Francisco, CA',  tiv: 184000000, policies: 54, premium: 2820000 },
    { location: 'San Diego, CA',      tiv: 142000000, policies: 48, premium: 2020000 },
    { location: 'Houston, TX',        tiv: 98000000,  policies: 32, premium: 1420000 },
    { location: 'Dallas, TX',         tiv: 82000000,  policies: 28, premium: 1240000 },
    { location: 'New York, NY',       tiv: 156000000, policies: 38, premium: 2240000 },
    { location: 'Miami, FL',          tiv: 78000000,  policies: 18, premium: 1120000 }
  ],
  by_lob: [
    { lob: 'Workers Comp',        written: 16820000, share: 35, target_share: 38, delta: -3, loss_ratio: 38 },
    { lob: 'General Liability',   written: 10440000, share: 22, target_share: 22, delta: 0,  loss_ratio: 44 },
    { lob: 'Commercial Auto',     written: 6840000,  share: 14, target_share: 12, delta: +2, loss_ratio: 52 },
    { lob: 'Cyber',               written: 5200000,  share: 11, target_share: 10, delta: +1, loss_ratio: 28 },
    { lob: 'BOP',                 written: 4340000,  share: 9,  target_share: 10, delta: -1, loss_ratio: 42 },
    { lob: 'Property',            written: 2820000,  share: 6,  target_share: 6,  delta: 0,  loss_ratio: 48 },
    { lob: 'D&O / Professional',  written: 1440000,  share: 3,  target_share: 2,  delta: +1, loss_ratio: 24 }
  ]
};

export const mgaCatExposure = [
  { peril: 'Wildfire',        region: 'CA · Nor Cal',     tiv: 124000000, policies: 42, pml_1in100: 24800000, pml_1in250: 62000000, reinsurance_attach: 10000000, capacity_remaining: 8200000, status: 'Healthy' },
  { peril: 'Wildfire',        region: 'CA · So Cal',      tiv: 218000000, policies: 68, pml_1in100: 43600000, pml_1in250: 109000000,reinsurance_attach: 15000000, capacity_remaining: 12400000, status: 'Watch' },
  { peril: 'Earthquake',      region: 'CA Bay Area',      tiv: 184000000, policies: 54, pml_1in100: 27600000, pml_1in250: 73600000, reinsurance_attach: 12000000, capacity_remaining: 9800000, status: 'Healthy' },
  { peril: 'Hurricane / Wind', region: 'FL Coastal',      tiv: 78000000,  policies: 18, pml_1in100: 19500000, pml_1in250: 54600000, reinsurance_attach: 8000000,  capacity_remaining: 2400000, status: 'Approaching Cap' },
  { peril: 'Hail',             region: 'TX Plains',       tiv: 98000000,  policies: 32, pml_1in100: 7840000,  pml_1in250: 19600000, reinsurance_attach: 5000000,  capacity_remaining: 8200000, status: 'Healthy' },
  { peril: 'Winter Storm',    region: 'NY Metro',         tiv: 156000000, policies: 38, pml_1in100: 9360000,  pml_1in250: 23400000, reinsurance_attach: 6000000,  capacity_remaining: 12600000, status: 'Healthy' },
  { peril: 'Flood',           region: 'Multi-state',       tiv: 420000000, policies: 124,pml_1in100: 16800000, pml_1in250: 42000000, reinsurance_attach: 10000000, capacity_remaining: 18000000, status: 'Healthy' }
];

export const mgaAppetiteChanges = [
  { id: 'CHG-042', rule_id: 'APT-005', title: 'Extend FL Coastal GL restriction through hurricane season',    proposed_by: 'David Park',        submitted: '2026-04-18 10:22', status: 'Pending Committee Review', statusColor: 'amber', priority: 'High',   tier_from: 'restricted', tier_to: 'restricted', expiry_from: '2026-10-15', expiry_to: '2026-12-31', rationale: 'Continue cap through year-end per reinsurance treaty renewal terms' },
  { id: 'CHG-041', rule_id: 'APT-006', title: 'Expand Cyber aggressive tier to healthcare (non-PHI)',        proposed_by: 'Priya Sharma',     submitted: '2026-04-16 14:15', status: 'Pending Committee Review', statusColor: 'amber', priority: 'Medium', tier_from: 'selective',  tier_to: 'aggressive',  effective_from: '2026-02-15', effective_to: '2026-05-01',  rationale: 'Loss ratio 28% in tech cyber book · extend confidence to healthcare admins · refer PHI-heavy separately' },
  { id: 'CHG-040', rule_id: 'APT-001', title: 'Tighten WC Restaurant class (CA 3632/3669)',                  proposed_by: 'Elena Rodriguez', submitted: '2026-04-14 09:30', status: 'Approved',                   statusColor: 'green', priority: 'Medium', tier_from: 'aggressive', tier_to: 'selective',   effective_from: '2026-05-01', effective_to: '2026-05-01',  rationale: 'LR 52% in past 12 months · require ExMod ≤ 1.0 · cap new bus at $150k', approved_by: 'Marcus Henderson', approved: '2026-04-17' },
  { id: 'CHG-039', rule_id: 'APT-010', title: 'Add wildfire defensible-space requirement',                    proposed_by: 'David Park',        submitted: '2026-04-10 11:05', status: 'Approved',                   statusColor: 'green', priority: 'High',   tier_from: 'selective',  tier_to: 'restricted',  effective_from: '2026-04-01', effective_to: '2026-04-15',  rationale: 'Wildfire season prep · photo-verified defensible space now required', approved_by: 'Marcus Henderson', approved: '2026-04-12' },
  { id: 'CHG-038', rule_id: 'APT-008', title: 'Expand Commercial Auto telematics incentive',                  proposed_by: 'David Park',        submitted: '2026-04-05 15:40', status: 'Approved',                   statusColor: 'green', priority: 'Low',    tier_from: 'aggressive', tier_to: 'aggressive',  effective_from: '2026-05-01', effective_to: '2026-05-01',  rationale: 'Increase telematics credit from 8% to 10% · no tier change · competitive advantage', approved_by: 'Marcus Henderson', approved: '2026-04-08' },
  { id: 'CHG-037', rule_id: 'APT-003', title: 'Add explosives class to prohibited list',                       proposed_by: 'Marcus Henderson', submitted: '2026-03-28 10:00', status: 'Approved',                   statusColor: 'green', priority: 'High',   tier_from: 'prohibited', tier_to: 'prohibited',  effective_from: '2023-01-01', effective_to: '2023-01-01',  rationale: 'Explicitly add Class 7605/7607 · zero tolerance', approved_by: 'CEO',              approved: '2026-03-30' }
];

export const mgaRiskScoringModel = {
  factors: [
    { factor: 'Prior 3-year Loss Ratio',              weight: 25, threshold_aggressive: 30, threshold_selective: 50, threshold_restricted: 70 },
    { factor: 'Years in Business',                     weight: 12, threshold_aggressive: 10, threshold_selective: 3,  threshold_restricted: 1 },
    { factor: 'Experience Modifier (WC only)',         weight: 18, threshold_aggressive: 0.90, threshold_selective: 1.10, threshold_restricted: 1.30 },
    { factor: 'Revenue Size',                           weight: 10, threshold_aggressive: 10000000, threshold_selective: 2000000, threshold_restricted: 500000 },
    { factor: 'Safety Program / Controls',              weight: 12, threshold_aggressive: 'OSHA VPP / SOC 2', threshold_selective: 'Basic', threshold_restricted: 'None' },
    { factor: 'Prior Cancellation / Non-renewal',      weight: 10, threshold_aggressive: 'None', threshold_selective: '1 non-renewal', threshold_restricted: '2+ / fraud' },
    { factor: 'Industry / NAICS Risk Score',            weight: 8, threshold_aggressive: 'Low-hazard', threshold_selective: 'Medium', threshold_restricted: 'High-hazard' },
    { factor: 'Submission Quality (agent quality)',     weight: 5, threshold_aggressive: '≥90 score', threshold_selective: '≥70 score', threshold_restricted: '<70 score' }
  ],
  outcomes: [
    { score_range: '85–100', tier: 'Preferred',    action: 'Auto-approve at target',         avg_bind_rate: 78, avg_loss_ratio: 28 },
    { score_range: '70–84',  tier: 'Standard',     action: 'Approve with standard rates',     avg_bind_rate: 62, avg_loss_ratio: 42 },
    { score_range: '55–69',  tier: 'Watch',         action: 'Refer to senior UW',              avg_bind_rate: 38, avg_loss_ratio: 58 },
    { score_range: '40–54',  tier: 'Sub-Standard',  action: 'Refer to carrier or decline',     avg_bind_rate: 12, avg_loss_ratio: 72 },
    { score_range: '< 40',   tier: 'Auto-Decline',  action: 'Automatic decline',               avg_bind_rate: 0,  avg_loss_ratio: null }
  ]
};

// ─── MGA Policy Issuance & Bindings ───
export const mgaBindingKPIs = [
  { label: 'Pending Bind',       value: '14' },
  { label: 'Bound Today',        value: '8' },
  { label: 'Issued Today',       value: '6' },
  { label: 'Avg Time-to-Issue',  value: '3.2 hrs' },
  { label: 'Straight-Through %', value: '42%' },
  { label: 'Written Premium MTD',value: '$8.4M' }
];

export const mgaBindingStatuses = ['Pending Bind','Authority Check','Bound','Documents Generating','Issued','Carrier Reporting','Active','Cancelled','Reinstated','Rewritten'];

export const mgaBindings = [
  { id: 'BND-48842', submission: 'SUB-28931', policy_number: 'LIB-UMB-2026-88203', agent_id: 'AGT-2038', agent_name: 'Bridgepoint Insurance Brokers', insured: 'Magnolia Construction LLC — Umbrella',   product_id: 'PROD-UMB-LIB-01', product: 'OverShield Umbrella',         lob: 'Umbrella',      carrier: 'Liberty Mutual',     state: 'CA', effective: '2026-06-01', expiration: '2027-06-01', written_premium: 18200,  status: 'Issued',                statusColor: 'green', bound_at: '2026-04-19 09:42', issued_at: '2026-04-19 10:04', bound_by: 'Elena Rodriguez',    authority_used: 18200,  auth_cap: 500000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4842',   stp: true,  documents_ready: true },
  { id: 'BND-48841', submission: 'SUB-28935', policy_number: 'CNA-CYB-2026-88201', agent_id: 'AGT-2036', agent_name: 'Woodruff Sawyer',               insured: 'DataCore Inc',                        product_id: 'PROD-CYB-CNA-01', product: 'SecureEdge Cyber',            lob: 'Cyber',         carrier: 'CNA',                state: 'TX', effective: '2026-07-22', expiration: '2027-07-22', written_premium: 249000, status: 'Documents Generating',  statusColor: 'blue',  bound_at: '2026-04-19 08:30', issued_at: null,              bound_by: 'Priya Sharma',        authority_used: 249000, auth_cap: 500000,  carrier_reporting: 'Pending',  binder_number: 'B-2026-4841',   stp: false, documents_ready: false },
  { id: 'BND-48840', submission: 'SUB-28939', policy_number: 'TRV-AUTO-2026-11445', agent_id: 'AGT-2041', agent_name: 'Lockton Companies',              insured: 'Westshore Logistics',                 product_id: 'PROD-AUTO-TRV-01',product: 'FleetSafe Auto',               lob: 'Commercial Auto', carrier: 'Travelers',         state: 'CA', effective: '2026-06-15', expiration: '2027-06-15', written_premium: 172400, status: 'Bound',                 statusColor: 'blue',  bound_at: '2026-04-18 16:22', issued_at: null,              bound_by: 'Elena Rodriguez',     authority_used: 172400, auth_cap: 500000,  carrier_reporting: 'Queued',   binder_number: 'B-2026-4840',   stp: false, documents_ready: false },
  { id: 'BND-48839', submission: 'SUB-28900', policy_number: 'SEMC-WC-2026-48823', agent_id: 'AGT-2038', agent_name: 'Bridgepoint Insurance Brokers',  insured: 'Magnolia Construction LLC',           product_id: 'PROD-WC-CA-01',   product: 'WorkForce WC — CA Small Biz',  lob: 'Workers Comp',  carrier: 'SEMC / Liberty',    state: 'CA', effective: '2026-06-01', expiration: '2027-06-01', written_premium: 87646,  status: 'Issued',                statusColor: 'green', bound_at: '2026-04-18 14:15', issued_at: '2026-04-18 15:02', bound_by: 'Elena Rodriguez',     authority_used: 87646,  auth_cap: 500000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4839',   stp: true,  documents_ready: true },
  { id: 'BND-48838', submission: 'SUB-28890', policy_number: 'HTF-BOP-2026-44229', agent_id: 'AGT-2040', agent_name: 'Marsh McLennan',                 insured: 'Apex Industries Group',               product_id: 'PROD-BOP-HTF-01', product: 'MainStreet BOP',              lob: 'BOP',           carrier: 'Hartford',           state: 'TX', effective: '2026-05-10', expiration: '2027-05-10', written_premium: 48200,  status: 'Issued',                statusColor: 'green', bound_at: '2026-04-17 11:04', issued_at: '2026-04-17 13:30', bound_by: 'Tomás Weber',         authority_used: 48200,  auth_cap: 250000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4838',   stp: true,  documents_ready: true },
  { id: 'BND-48837', submission: 'SUB-28888', policy_number: 'LIB-WC-2026-33102', agent_id: 'AGT-2041', agent_name: 'Lockton Companies',              insured: 'Summit Industrial Services',          product_id: 'PROD-WC-CA-02',   product: 'WorkForce WC — Mid-Market',    lob: 'Workers Comp', carrier: 'Liberty Mutual',     state: 'CA', effective: '2026-06-01', expiration: '2027-06-01', written_premium: 228400, status: 'Active',                statusColor: 'green', bound_at: '2026-04-15 09:15', issued_at: '2026-04-15 10:02', bound_by: 'Marcus Henderson',    authority_used: 228400, auth_cap: 2000000, carrier_reporting: 'Reported', binder_number: 'B-2026-4837',   stp: false, documents_ready: true },
  { id: 'BND-48836', submission: 'SUB-28886', policy_number: 'CNA-GL-2026-20118', agent_id: 'AGT-2038', agent_name: 'Bridgepoint Insurance Brokers',  insured: 'Cascade HVAC Services',               product_id: 'PROD-GL-CNA-01',  product: 'GuardPoint GL',                lob: 'General Liability',carrier: 'CNA',            state: 'OR', effective: '2026-08-10', expiration: '2027-08-10', written_premium: 96800,  status: 'Pending Bind',          statusColor: 'amber', bound_at: null,              issued_at: null,              bound_by: null,                   authority_used: 96800,  auth_cap: 500000,  carrier_reporting: '—',        binder_number: null,            stp: false, documents_ready: false },
  { id: 'BND-48835', submission: 'SUB-28884', policy_number: 'CHB-DO-2026-10091', agent_id: 'AGT-2039', agent_name: 'Aon Risk Solutions',             insured: 'Helix Biotech Inc',                    product_id: 'PROD-DO-CHB-01',  product: 'BoardGuard D&O',               lob: 'D&O',           carrier: 'Chubb',              state: 'CA', effective: '2026-05-30', expiration: '2027-05-30', written_premium: 438000, status: 'Authority Check',       statusColor: 'amber', bound_at: null,              issued_at: null,              bound_by: null,                   authority_used: 438000, auth_cap: 500000,  carrier_reporting: '—',        binder_number: null,            stp: false, documents_ready: false },
  { id: 'BND-48834', submission: 'SUB-28882', policy_number: 'ZUR-PRP-2026-60014', agent_id: 'AGT-2035', agent_name: 'USI Insurance Services',         insured: 'Peninsula Manufacturing',              product_id: 'PROD-PROP-ZUR-01',product: 'PropertyGuard Commercial',     lob: 'Property',      carrier: 'Zurich',             state: 'CA', effective: '2026-06-01', expiration: '2027-06-01', written_premium: 132400, status: 'Issued',                statusColor: 'green', bound_at: '2026-04-14 16:40', issued_at: '2026-04-14 18:15', bound_by: 'David Park',          authority_used: 132400, auth_cap: 1000000, carrier_reporting: 'Reported', binder_number: 'B-2026-4834',   stp: false, documents_ready: true },
  { id: 'BND-48833', submission: 'SUB-28878', policy_number: 'HIS-PRO-2026-22104', agent_id: 'AGT-2036', agent_name: 'Woodruff Sawyer',                insured: 'BlueSky Consulting Group',             product_id: 'PROD-PRO-HIS-01', product: 'Professional Shield',          lob: 'Professional',  carrier: 'Hiscox',             state: 'CA', effective: '2026-07-01', expiration: '2027-07-01', written_premium: 84200,  status: 'Issued',                statusColor: 'green', bound_at: '2026-04-12 10:05', issued_at: '2026-04-12 11:40', bound_by: 'Priya Sharma',        authority_used: 84200,  auth_cap: 500000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4833',   stp: true,  documents_ready: true },
  { id: 'BND-48832', submission: 'SUB-28874', policy_number: 'TRV-AUTO-2025-88820', agent_id: 'AGT-2037', agent_name: 'Hub International',              insured: 'Desert Rides Transport',                product_id: 'PROD-AUTO-TRV-01',product: 'FleetSafe Auto',              lob: 'Commercial Auto', carrier: 'Travelers',         state: 'AZ', effective: '2026-04-01', expiration: '2027-04-01', written_premium: 62400,  status: 'Cancelled',             statusColor: 'red',   bound_at: '2026-03-28 14:30', issued_at: '2026-03-28 16:10', bound_by: 'Tomás Weber',         authority_used: 62400,  auth_cap: 500000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4832',   stp: true,  documents_ready: true, cancel_reason: 'Non-payment', cancel_date: '2026-04-18' },
  { id: 'BND-48831', submission: 'SUB-28870', policy_number: 'LIB-UMB-2026-88204', agent_id: 'AGT-2040', agent_name: 'Marsh McLennan',                 insured: 'Sterling Financial Holdings',          product_id: 'PROD-UMB-LIB-01', product: 'OverShield Umbrella',          lob: 'Umbrella',      carrier: 'Liberty Mutual',     state: 'NY', effective: '2026-05-15', expiration: '2027-05-15', written_premium: 42800,  status: 'Active',                statusColor: 'green', bound_at: '2026-04-10 14:22', issued_at: '2026-04-10 15:04', bound_by: 'Marcus Henderson',    authority_used: 42800,  auth_cap: 2000000, carrier_reporting: 'Reported', binder_number: 'B-2026-4831',   stp: true,  documents_ready: true },
  { id: 'BND-48830', submission: 'SUB-28865', policy_number: 'CNA-CYB-2026-88202', agent_id: 'AGT-2034', agent_name: 'Newfront Insurance',             insured: 'PixelFlow Media',                       product_id: 'PROD-CYB-CNA-01', product: 'SecureEdge Cyber',             lob: 'Cyber',         carrier: 'CNA',                state: 'CA', effective: '2026-05-01', expiration: '2027-05-01', written_premium: 118000, status: 'Active',                statusColor: 'green', bound_at: '2026-04-08 11:15', issued_at: '2026-04-08 12:30', bound_by: 'Priya Sharma',        authority_used: 118000, auth_cap: 500000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4830',   stp: false, documents_ready: true },
  { id: 'BND-48829', submission: 'SUB-28862', policy_number: 'SEMC-WC-2025-48819', agent_id: 'AGT-2038', agent_name: 'Bridgepoint Insurance Brokers', insured: 'Magnolia Construction LLC (OLD)',      product_id: 'PROD-WC-CA-01',   product: 'WorkForce WC — CA Small Biz',  lob: 'Workers Comp', carrier: 'SEMC / Liberty',    state: 'CA', effective: '2026-02-01', expiration: '2027-02-01', written_premium: 82140,  status: 'Rewritten',             statusColor: 'gray',  bound_at: '2026-01-28 09:30', issued_at: '2026-01-28 10:15', bound_by: 'Elena Rodriguez',     authority_used: 82140,  auth_cap: 500000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4829',   stp: true,  documents_ready: true, rewrite_to: 'BND-48839' },
  { id: 'BND-48828', submission: 'SUB-28858', policy_number: 'MKL-GL-2026-ES0012', agent_id: 'AGT-2033', agent_name: 'Regional Brokers Inc',           insured: 'Atlantic Artisan Contractors',          product_id: 'PROD-GL-MKL-01',  product: 'ArtisanGuard GL — E&S',        lob: 'General Liability', carrier: 'Markel',         state: 'FL', effective: '2026-05-01', expiration: '2027-05-01', written_premium: 24800,  status: 'Reinstated',            statusColor: 'green', bound_at: '2026-04-05 10:22', issued_at: '2026-04-05 11:45', bound_by: 'Marcus Henderson',    authority_used: 24800,  auth_cap: 500000,  carrier_reporting: 'Reported', binder_number: 'B-2026-4828',   stp: false, documents_ready: true, reinstate_reason: 'Payment received after lapse' }
];

export const mgaBindingDetail = {
  id: 'BND-48839',
  submission_link: 'SUB-28900',
  policy_header: {
    policy_number: 'SEMC-WC-2026-48823',
    carrier_policy_no: 'SEMC-WC-0088923-X',
    carrier: 'SEMC / Liberty Mutual',
    mga_reference: 'Singlepoint MGA · WF-WC-CA',
    line_of_business: 'Workers Comp',
    product: 'WorkForce WC — CA Small Biz',
    product_version: 'v3.2',
    effective: '2026-06-01',
    expiration: '2027-06-01',
    term: '12 months',
    state: 'CA',
    billing_type: 'Agency Bill',
    billing_frequency: 'Quarterly'
  },
  premium_breakdown: {
    base: 115680,
    ex_mod: 0.92,
    modified: 106426,
    schedule_credit: -15964,
    subtotal: 90462,
    premium_discount: -8594,
    terrorism: 50,
    taxes: 5728,
    written: 87646,
    commission_rate: 13,
    commission: 11394,
    mga_fee: 2629,
    carrier_share: 73623
  },
  insured: {
    legal_name: 'Magnolia Construction LLC',
    dba: 'Magnolia Build Co.',
    fein: '88-XXXX492',
    primary_contact: 'James Reynolds · CEO',
    phone: '(916) 555-0184',
    email: 'james@magnoliaconstruction.com',
    primary_address: '1201 Industrial Blvd, Sacramento CA 95814',
    operations: 'Electrical contracting · specialty trade'
  },
  coverage_schedule: [
    { coverage: 'Employers Liability — Each Accident',        limit: '$1,000,000',                    deductible: '$0',   premium: 0 },
    { coverage: 'Employers Liability — Disease / Employee',   limit: '$1,000,000',                    deductible: '$0',   premium: 0 },
    { coverage: 'Employers Liability — Disease / Aggregate',  limit: '$1,000,000',                    deductible: '$0',   premium: 0 },
    { coverage: 'Workers Compensation — Statutory',            limit: 'CA Statutory',                  deductible: '$0',   premium: 0 },
    { coverage: 'Terrorism (TRIA)',                             limit: 'Included',                      deductible: '—',   premium: 50 },
    { coverage: 'Waiver of Subrogation (Blanket)',              limit: 'Applied to all scheduled',     deductible: '—',   premium: 0 }
  ],
  locations: [
    { id: 'LOC-01', label: 'HQ / Main Office',        address: '1201 Industrial Blvd, Sacramento CA 95814',    payroll: 1440000, class_codes: ['8810 Clerical','5403 Carpentry'] },
    { id: 'LOC-02', label: 'Yard / Equipment Storage',address: '1250 Industrial Blvd, Sacramento CA 95814',    payroll: 540000,  class_codes: ['5403 Carpentry','8813 Auto Service'] },
    { id: 'LOC-03', label: 'Satellite — Folsom',       address: '892 East Bidwell St, Folsom CA 95630',          payroll: 420000,  class_codes: ['5403 Carpentry'] }
  ],
  endorsements: [
    { form: 'WC 00 03 13', title: 'Waiver of Our Right to Recover From Others (Blanket)', applied: '2026-06-01', premium_effect: 0 },
    { form: 'WC 04 14 A',  title: 'CA Cancellation Endorsement',                            applied: '2026-06-01', premium_effect: 0 },
    { form: 'CUSTOM-01',   title: 'Additional Insured — Kroger Real Estate (Job site lease)', applied: '2026-06-01', premium_effect: 0 }
  ],
  documents_package: [
    { name: 'Declarations Page.pdf',        type: 'Dec',          size: '420 KB', status: 'Generated', generated: '2026-04-18 15:02' },
    { name: 'Workers Comp Policy Form.pdf', type: 'Policy',       size: '2.1 MB', status: 'Generated', generated: '2026-04-18 15:02' },
    { name: 'Endorsement Schedule.pdf',     type: 'Endorsement',  size: '180 KB', status: 'Generated', generated: '2026-04-18 15:02' },
    { name: 'Location Schedule.pdf',        type: 'Schedule',     size: '96 KB',  status: 'Generated', generated: '2026-04-18 15:02' },
    { name: 'Officer Exclusion Election.pdf', type: 'Endorsement', size: '64 KB', status: 'Generated', generated: '2026-04-18 15:02' },
    { name: 'Alternative Dispute Resolution Notice.pdf', type: 'Notice', size: '48 KB', status: 'Generated', generated: '2026-04-18 15:02' }
  ],
  authority_check: {
    used: 87646,
    agent_cap: 500000,
    product_cap: 500000,
    underwriter_cap: 750000,
    aggregate_state_cap: 15000000,
    aggregate_state_used: 8420000,
    result: 'Within authority · all checks passed'
  },
  compliance_checks: [
    { check: 'State DOI filing approved (CA)',         status: 'pass', detail: 'Rate version 3.2 approved 2025-12-01' },
    { check: 'E&O coverage verified (agent)',          status: 'pass', detail: 'Scottsdale $2M/$4M · expires 2027-01-15' },
    { check: 'License active in CA (agent)',           status: 'pass', detail: 'CA-LIC-892341 · active through 2027-01-15' },
    { check: 'Underwriter authority not exceeded',     status: 'pass', detail: 'Premium $87,646 within $750k cap' },
    { check: 'Required forms filed for state',         status: 'pass', detail: '6 mandatory forms attached' },
    { check: 'Commission percentage within cap',       status: 'pass', detail: '13% within max 15% for class' },
    { check: 'No prohibited class codes',              status: 'pass', detail: 'All 3 class codes within appetite' }
  ],
  carrier_reporting: {
    status: 'Reported',
    sent_at: '2026-04-18 15:30',
    bordereau_batch: 'BDX-2026-04-18',
    method: 'API',
    fields_sent: 42,
    ack_received: '2026-04-18 15:32',
    ack_reference: 'SEMC-ACK-4481729'
  },
  audit_trail: [
    { ts: '2026-04-18 15:32', actor: 'SEMC System',      event: 'Bordereau acknowledgment received',         category: 'Carrier' },
    { ts: '2026-04-18 15:30', actor: 'MGA System',       event: 'Carrier bordereau sent via API',             category: 'Carrier' },
    { ts: '2026-04-18 15:02', actor: 'MGA System',       event: 'Policy documents generated (6 files · 2.9 MB)', category: 'Issuance' },
    { ts: '2026-04-18 14:20', actor: 'MGA System',       event: 'Binder B-2026-4839 created',                 category: 'Issuance' },
    { ts: '2026-04-18 14:15', actor: 'Elena Rodriguez',  event: 'Policy bound · Straight-Through Processing', category: 'Binding' },
    { ts: '2026-04-18 14:12', actor: 'MGA System',       event: 'Authority check passed · $87,646 within all caps', category: 'Compliance' },
    { ts: '2026-04-18 14:10', actor: 'Elena Rodriguez',  event: 'Approved at $87,646 · UW decision logged',   category: 'Underwriting' }
  ]
};

export const mgaAuthorityLimits = [
  { entity: 'Agent', name: 'Lockton Companies',            limit: 500000, ytd_used: 8420000, ytd_written: 8420000, utilization_per_policy: 42, pct_capacity: 68 },
  { entity: 'Agent', name: 'Marsh McLennan',              limit: 500000, ytd_used: 6120000, ytd_written: 6120000, utilization_per_policy: 38, pct_capacity: 52 },
  { entity: 'Agent', name: 'Aon Risk Solutions',            limit: 500000, ytd_used: 5840000, ytd_written: 5840000, utilization_per_policy: 36, pct_capacity: 48 },
  { entity: 'Agent', name: 'Bridgepoint Insurance Brokers', limit: 500000, ytd_used: 3920000, ytd_written: 3920000, utilization_per_policy: 34, pct_capacity: 42 },
  { entity: 'Product', name: 'WF-WC-CA',                     limit: 10000000, ytd_used: 8420000, ytd_written: 8420000, utilization_per_policy: 82, pct_capacity: 84 },
  { entity: 'Product', name: 'SE-CYB',                       limit: 8000000,  ytd_used: 5840000, ytd_written: 5840000, utilization_per_policy: 68, pct_capacity: 73 },
  { entity: 'Product', name: 'GP-GL-CTR',                    limit: 10000000, ytd_used: 6120000, ytd_written: 6120000, utilization_per_policy: 61, pct_capacity: 61 },
  { entity: 'State',  name: 'California (WC)',              limit: 15000000, ytd_used: 8420000, ytd_written: 8420000, utilization_per_policy: 56, pct_capacity: 56 },
  { entity: 'State',  name: 'California (GL)',              limit: 12000000, ytd_used: 6120000, ytd_written: 6120000, utilization_per_policy: 51, pct_capacity: 51 },
  { entity: 'State',  name: 'Texas (All Lines)',             limit: 8000000,  ytd_used: 2240000, ytd_written: 2240000, utilization_per_policy: 28, pct_capacity: 28 }
];

export const mgaBulkCerts = [
  { id: 'BCR-2042', batch: 'Lockton_Apr_Batch_1', requested_by: 'Lockton Companies',        requested: '2026-04-18 10:22', policies: 18, certificates: 28, status: 'Completed',  statusColor: 'green', sent: '2026-04-18 10:45', format: 'PDF' },
  { id: 'BCR-2041', batch: 'Bridgepoint_Q2_Holders', requested_by: 'Bridgepoint Insurance', requested: '2026-04-17 15:10', policies: 12, certificates: 42, status: 'Completed',  statusColor: 'green', sent: '2026-04-17 15:38', format: 'PDF + Email' },
  { id: 'BCR-2040', batch: 'Aon_MegaCorp_Package',     requested_by: 'Aon Risk Solutions',    requested: '2026-04-17 09:20', policies: 8,  certificates: 18, status: 'Completed',  statusColor: 'green', sent: '2026-04-17 09:42', format: 'PDF' },
  { id: 'BCR-2039', batch: 'Marsh_Auto_Renewal_COIs',  requested_by: 'Marsh McLennan',         requested: '2026-04-16 14:30', policies: 24, certificates: 36, status: 'Processing', statusColor: 'blue',  sent: null,                format: 'PDF + Mail' },
  { id: 'BCR-2038', batch: 'Hub_Q2_MassGen',            requested_by: 'Hub International',     requested: '2026-04-15 11:15', policies: 6,  certificates: 14, status: 'Completed',  statusColor: 'green', sent: '2026-04-15 11:40', format: 'PDF' }
];

export const mgaIssuanceAudit = [
  { ts: '2026-04-19 10:04', bind_id: 'BND-48842', actor: 'Elena Rodriguez',    action: 'Policy LIB-UMB-2026-88203 issued',             category: 'Issuance',  severity: 'info',    ip: '10.0.0.42' },
  { ts: '2026-04-19 09:42', bind_id: 'BND-48842', actor: 'Elena Rodriguez',    action: 'Policy bound · STP auto-issued',                category: 'Binding',   severity: 'info',    ip: '10.0.0.42' },
  { ts: '2026-04-19 08:30', bind_id: 'BND-48841', actor: 'Priya Sharma',        action: 'Policy CNA-CYB-2026-88201 bound',               category: 'Binding',   severity: 'info',    ip: '10.0.0.18' },
  { ts: '2026-04-19 08:15', bind_id: 'BND-48841', actor: 'Priya Sharma',        action: 'Authority check passed at $249k',                category: 'Compliance',severity: 'info',    ip: '10.0.0.18' },
  { ts: '2026-04-18 18:15', bind_id: 'BND-48834', actor: 'David Park',          action: 'Policy ZUR-PRP-2026-60014 issued',               category: 'Issuance',  severity: 'info',    ip: '10.0.0.22' },
  { ts: '2026-04-18 15:32', bind_id: 'BND-48839', actor: 'SEMC System',          action: 'Bordereau ACK received · BDX-2026-04-18',        category: 'Carrier',   severity: 'info',    ip: 'ext' },
  { ts: '2026-04-18 15:30', bind_id: 'BND-48839', actor: 'MGA System',           action: 'Bordereau auto-sent to SEMC via API',            category: 'Carrier',   severity: 'info',    ip: 'system' },
  { ts: '2026-04-18 15:02', bind_id: 'BND-48839', actor: 'MGA System',           action: 'Documents auto-generated (6 files · 2.9 MB)',    category: 'Issuance',  severity: 'info',    ip: 'system' },
  { ts: '2026-04-18 14:30', bind_id: 'BND-48832', actor: 'System',                action: 'Policy TRV-AUTO-2025-88820 cancelled · non-payment', category: 'Cancellation', severity: 'warning', ip: 'system' },
  { ts: '2026-04-18 14:15', bind_id: 'BND-48839', actor: 'Elena Rodriguez',     action: 'Policy bound · STP',                             category: 'Binding',   severity: 'info',    ip: '10.0.0.42' },
  { ts: '2026-04-18 11:04', bind_id: 'BND-48835', actor: 'System',                action: 'Authority check flagged · 87.6% of $500k cap',   category: 'Compliance',severity: 'warning', ip: 'system' },
  { ts: '2026-04-17 13:30', bind_id: 'BND-48838', actor: 'Tomás Weber',          action: 'Policy HTF-BOP-2026-44229 issued',               category: 'Issuance',  severity: 'info',    ip: '10.0.0.31' },
  { ts: '2026-04-15 10:02', bind_id: 'BND-48837', actor: 'Marcus Henderson',    action: 'Policy LIB-WC-2026-33102 issued · high-value',   category: 'Issuance',  severity: 'info',    ip: '10.0.0.11' },
  { ts: '2026-04-12 11:40', bind_id: 'BND-48833', actor: 'Priya Sharma',        action: 'Policy HIS-PRO-2026-22104 issued · STP',         category: 'Issuance',  severity: 'info',    ip: '10.0.0.18' }
];

// ─── MGA Submissions & Underwriting ───
export const mgaSubmissionKPIs = [
  { label: 'New Today',          value: '24' },
  { label: 'Pending Review',     value: '48', warning: true },
  { label: 'Avg TAT',            value: '19 hrs' },
  { label: 'Bind Ratio',         value: '61%' },
  { label: 'Auto-Underwritten',  value: '38%' },
  { label: 'Referred to Carrier',value: '8' }
];

export const mgaSubmissionStatuses = ['New','Auto-Triaged','Pending Agent Info','In Underwriting','Peer Review','Quoted','Approved','Conditional Approve','Referred to Carrier','Declined','Withdrawn','Bound'];

export const mgaUnderwriters = [
  { id: 'UW-01', name: 'Marcus Henderson',   title: 'Director of Underwriting',      authority: 2000000, lobs: ['WC','GL','Property','Umbrella','D&O','Cyber'], wip: 8,  avg_tat: 14, bind_rate: 68, avatar_color: 'linear-gradient(135deg,#6c5ce7,#a67dff)', initials: 'MH' },
  { id: 'UW-02', name: 'Elena Rodriguez',     title: 'Senior Underwriter — Casualty', authority: 750000,  lobs: ['WC','GL','Auto','Umbrella'],                   wip: 14, avg_tat: 18, bind_rate: 62, avatar_color: 'linear-gradient(135deg,#ff8a65,#ffab40)', initials: 'ER' },
  { id: 'UW-03', name: 'David Park',          title: 'Senior Underwriter — Property', authority: 1000000, lobs: ['Property','BOP','Auto'],                       wip: 11, avg_tat: 16, bind_rate: 65, avatar_color: 'linear-gradient(135deg,#81c784,#66bb6a)', initials: 'DP' },
  { id: 'UW-04', name: 'Priya Sharma',        title: 'Underwriter — Cyber & Professional', authority: 500000,  lobs: ['Cyber','D&O','Professional','Tech E&O'], wip: 9,  avg_tat: 22, bind_rate: 58, avatar_color: 'linear-gradient(135deg,#4fc3f7,#29b6f6)', initials: 'PS' },
  { id: 'UW-05', name: 'Tomás Weber',         title: 'Underwriter — Commercial Lines', authority: 250000,  lobs: ['WC','GL','BOP','Auto'],                       wip: 18, avg_tat: 26, bind_rate: 54, avatar_color: 'linear-gradient(135deg,#ba68c8,#ab47bc)', initials: 'TW' },
  { id: 'UW-06', name: 'Hannah Okafor',       title: 'Junior Underwriter',            authority: 100000,  lobs: ['WC','BOP','Auto'],                            wip: 22, avg_tat: 32, bind_rate: 48, avatar_color: 'linear-gradient(135deg,#ffb74d,#ff9800)', initials: 'HO' }
];

export const mgaDeclineReasons = [
  { code: 'APPETITE',        label: 'Outside MGA appetite',          count: 42, category: 'Appetite' },
  { code: 'LOSS_HISTORY',    label: 'Adverse loss history',          count: 28, category: 'Risk' },
  { code: 'CAPACITY',        label: 'Capacity exhausted — class',     count: 18, category: 'Capacity' },
  { code: 'CLASS_CODE',      label: 'Prohibited class code',          count: 14, category: 'Appetite' },
  { code: 'MIN_PREMIUM',     label: 'Below minimum premium',          count: 12, category: 'Financial' },
  { code: 'STATE_EXCL',      label: 'State not authorized',            count: 8,  category: 'Licensing' },
  { code: 'PRIOR_CANCEL',    label: 'Prior cancellation / non-renew', count: 8,  category: 'Risk' },
  { code: 'INCOMPLETE',      label: 'Incomplete submission',           count: 10, category: 'Data' },
  { code: 'HAZMAT',          label: 'Hazmat / prohibited exposure',    count: 6,  category: 'Appetite' },
  { code: 'NAICS_EXCL',      label: 'NAICS code excluded',             count: 5,  category: 'Appetite' }
];

export const mgaSubmissions = [
  { id: 'SUB-28942', agent_id: 'AGT-2041', agent_name: 'Lockton Companies',            insured_id: 'CLI-20421', insured: 'TechForward Dynamics Inc',     naics: '541511', product: 'Cyber Liability',         lob: 'Cyber',           state: 'CA', received: '2026-04-19 09:22', effective: '2026-05-15', target_premium: 148000, risk_score: 82, appetite_match: 94, status: 'In Underwriting',       stage_color: 'blue',  underwriter: 'UW-04', underwriter_name: 'Priya Sharma',    priority: 'Normal', age_hrs: 6,  channel: 'Agent Portal', documents: 8, red_flags: 0, loss_ratio_3yr: 12, final_premium: null, decision_reason: null, auto_uw_eligible: false, revenue: 38000000, employees: 120 },
  { id: 'SUB-28941', agent_id: 'AGT-2038', agent_name: 'Bridgepoint Insurance Brokers',insured_id: 'CLI-18292', insured: 'Magnolia Construction LLC',   naics: '238220', product: 'Workers Comp',            lob: 'WC',              state: 'CA', received: '2026-04-19 08:14', effective: '2026-05-01', target_premium: 184700, risk_score: 88, appetite_match: 96, status: 'Auto-Triaged',          stage_color: 'blue',  underwriter: null,    underwriter_name: null,             priority: 'Normal', age_hrs: 7,  channel: 'Agent Portal', documents: 12, red_flags: 0, loss_ratio_3yr: 18, final_premium: null, decision_reason: null, auto_uw_eligible: true,  revenue: 42000000, employees: 180 },
  { id: 'SUB-28940', agent_id: 'AGT-2040', agent_name: 'Marsh McLennan',              insured_id: 'CLI-19822', insured: 'Apex Industries Group',         naics: '332999', product: 'General Liability',        lob: 'GL',              state: 'TX', received: '2026-04-18 16:40', effective: '2026-05-10', target_premium: 52000,  risk_score: 72, appetite_match: 78, status: 'Pending Agent Info',     stage_color: 'amber', underwriter: 'UW-02', underwriter_name: 'Elena Rodriguez', priority: 'Normal', age_hrs: 23, channel: 'API',          documents: 5,  red_flags: 1, loss_ratio_3yr: 32, final_premium: null, decision_reason: null, auto_uw_eligible: false, revenue: 28000000, employees: 120 },
  { id: 'SUB-28939', agent_id: 'AGT-2041', agent_name: 'Lockton Companies',            insured_id: 'CLI-20218', insured: 'Westshore Logistics',           naics: '484110', product: 'Commercial Auto',          lob: 'Auto',            state: 'CA', received: '2026-04-18 14:22', effective: '2026-06-15', target_premium: 168000, risk_score: 78, appetite_match: 86, status: 'Quoted',                 stage_color: 'green', underwriter: 'UW-02', underwriter_name: 'Elena Rodriguez', priority: 'Normal', age_hrs: 26, channel: 'Agent Portal', documents: 10, red_flags: 0, loss_ratio_3yr: 24, final_premium: 172400, decision_reason: null, auto_uw_eligible: false, revenue: 18000000, employees: 48  },
  { id: 'SUB-28938', agent_id: 'AGT-2039', agent_name: 'Aon Risk Solutions',           insured_id: 'CLI-20021', insured: 'Helix Biotech Inc',             naics: '541714', product: 'D&O Liability',            lob: 'D&O',             state: 'CA', received: '2026-04-18 11:15', effective: '2026-05-30', target_premium: 420000, risk_score: 85, appetite_match: 88, status: 'Peer Review',            stage_color: 'amber', underwriter: 'UW-04', underwriter_name: 'Priya Sharma',    priority: 'High',   age_hrs: 29, channel: 'Agent Portal', documents: 14, red_flags: 0, loss_ratio_3yr: 8,  final_premium: null, decision_reason: null, auto_uw_eligible: false, revenue: 42000000, employees: 112 },
  { id: 'SUB-28937', agent_id: 'AGT-2038', agent_name: 'Bridgepoint Insurance Brokers',insured_id: 'CLI-19611', insured: 'Cascade HVAC Services',         naics: '238220', product: 'Workers Comp',             lob: 'WC',              state: 'OR', received: '2026-04-18 10:04', effective: '2026-08-10', target_premium: 94000,  risk_score: 80, appetite_match: 91, status: 'In Underwriting',        stage_color: 'blue',  underwriter: 'UW-02', underwriter_name: 'Elena Rodriguez', priority: 'Normal', age_hrs: 30, channel: 'Agent Portal', documents: 9,  red_flags: 0, loss_ratio_3yr: 22, final_premium: null, decision_reason: null, auto_uw_eligible: false, revenue: 12000000, employees: 62  },
  { id: 'SUB-28936', agent_id: 'AGT-2037', agent_name: 'Hub International',            insured_id: 'CLI-19102', insured: 'Summit Dental Group',           naics: '621210', product: 'Professional Liability',   lob: 'Professional',    state: 'CA', received: '2026-04-18 09:30', effective: '2026-07-01', target_premium: 56000,  risk_score: 76, appetite_match: 82, status: 'Referred to Carrier',    stage_color: 'amber', underwriter: 'UW-04', underwriter_name: 'Priya Sharma',    priority: 'Normal', age_hrs: 31, channel: 'Agent Portal', documents: 7,  red_flags: 0, loss_ratio_3yr: 6,  final_premium: null, decision_reason: null, auto_uw_eligible: false, revenue: 8400000, employees: 34 },
  { id: 'SUB-28935', agent_id: 'AGT-2036', agent_name: 'Woodruff Sawyer',             insured_id: 'CLI-19822', insured: 'DataCore Inc',                  naics: '541512', product: 'Cyber Liability',          lob: 'Cyber',           state: 'TX', received: '2026-04-17 15:20', effective: '2026-07-22', target_premium: 256100, risk_score: 89, appetite_match: 92, status: 'Approved',              stage_color: 'green', underwriter: 'UW-04', underwriter_name: 'Priya Sharma',    priority: 'Normal', age_hrs: 47, channel: 'Agent Portal', documents: 16, red_flags: 0, loss_ratio_3yr: 14, final_premium: 249000, decision_reason: null, auto_uw_eligible: false, revenue: 15000000, employees: 48  },
  { id: 'SUB-28934', agent_id: 'AGT-2035', agent_name: 'USI Insurance Services',       insured_id: 'CLI-18812', insured: 'Peninsula Manufacturing',        naics: '332710', product: 'Property',                 lob: 'Property',        state: 'CA', received: '2026-04-17 13:10', effective: '2026-06-01', target_premium: 118000, risk_score: 64, appetite_match: 68, status: 'Conditional Approve',   stage_color: 'amber', underwriter: 'UW-03', underwriter_name: 'David Park',      priority: 'Normal', age_hrs: 49, channel: 'Email',        documents: 8,  red_flags: 1, loss_ratio_3yr: 54, final_premium: 132400, decision_reason: null, auto_uw_eligible: false, revenue: 14000000, employees: 58  },
  { id: 'SUB-28933', agent_id: 'AGT-2033', agent_name: 'Regional Brokers Inc',          insured_id: 'CLI-17291', insured: 'Neon Brewing Co.',              naics: '312120', product: 'BOP',                       lob: 'BOP',             state: 'CA', received: '2026-04-17 11:15', effective: '2026-09-01', target_premium: 34000,  risk_score: 68, appetite_match: 72, status: 'New',                    stage_color: 'blue',  underwriter: null,    underwriter_name: null,             priority: 'Normal', age_hrs: 51, channel: 'Agent Portal', documents: 6,  red_flags: 0, loss_ratio_3yr: 28, final_premium: null, decision_reason: null, auto_uw_eligible: true,  revenue: 6200000, employees: 28 },
  { id: 'SUB-28932', agent_id: 'AGT-2032', agent_name: 'Summit Agency',                insured_id: 'CLI-16842', insured: 'Fleet Flex Rentals',            naics: '532111', product: 'Commercial Auto',          lob: 'Auto',            state: 'CA', received: '2026-04-17 10:04', effective: '2026-10-15', target_premium: 22000,  risk_score: 42, appetite_match: 38, status: 'Declined',              stage_color: 'red',   underwriter: 'UW-05', underwriter_name: 'Tomás Weber',     priority: 'Normal', age_hrs: 53, channel: 'Agent Portal', documents: 4,  red_flags: 2, loss_ratio_3yr: 78, final_premium: null, decision_reason: 'LOSS_HISTORY', auto_uw_eligible: false, revenue: 22000000, employees: 54  },
  { id: 'SUB-28931', agent_id: 'AGT-2038', agent_name: 'Bridgepoint Insurance Brokers',insured_id: 'CLI-18292', insured: 'Magnolia Construction — Umbrella', naics: '238220', product: 'Umbrella',              lob: 'Umbrella',        state: 'CA', received: '2026-04-16 14:22', effective: '2026-06-01', target_premium: 18200,  risk_score: 92, appetite_match: 96, status: 'Bound',                  stage_color: 'green', underwriter: 'UW-02', underwriter_name: 'Elena Rodriguez', priority: 'Normal', age_hrs: 69, channel: 'Agent Portal', documents: 5,  red_flags: 0, loss_ratio_3yr: 0,  final_premium: 18200,  decision_reason: null, auto_uw_eligible: true,  revenue: 42000000, employees: 180 },
  { id: 'SUB-28930', agent_id: 'AGT-2034', agent_name: 'Newfront Insurance',           insured_id: 'CLI-18104', insured: 'Cipher Security Labs',           naics: '541512', product: 'Tech E&O',                 lob: 'Tech E&O',        state: 'CA', received: '2026-04-16 10:15', effective: '2026-07-22', target_premium: 148000, risk_score: 86, appetite_match: 88, status: 'Withdrawn',             stage_color: 'gray',  underwriter: 'UW-04', underwriter_name: 'Priya Sharma',    priority: 'Normal', age_hrs: 73, channel: 'Agent Portal', documents: 11, red_flags: 0, loss_ratio_3yr: 18, final_premium: null, decision_reason: 'WITHDRAWN', auto_uw_eligible: false, revenue: 15000000, employees: 48 },
  { id: 'SUB-28929', agent_id: 'AGT-2031', agent_name: 'GreenLeaf Brokers',            insured_id: 'CLI-16104', insured: 'GreenField Landscaping',         naics: '561730', product: 'Workers Comp',             lob: 'WC',              state: 'CA', received: '2026-04-15 16:22', effective: '2027-01-10', target_premium: 12000,  risk_score: 34, appetite_match: 48, status: 'Declined',              stage_color: 'red',   underwriter: 'UW-06', underwriter_name: 'Hannah Okafor',   priority: 'Normal', age_hrs: 90, channel: 'Agent Portal', documents: 3,  red_flags: 3, loss_ratio_3yr: 88, final_premium: null, decision_reason: 'APPETITE', auto_uw_eligible: false, revenue: 3200000, employees: 24 },
  { id: 'SUB-28928', agent_id: 'AGT-2040', agent_name: 'Marsh McLennan',              insured_id: 'CLI-20104', insured: 'Atlas Energy Services',          naics: '213112', product: 'General Liability',        lob: 'GL',              state: 'TX', received: '2026-04-15 14:22', effective: '2026-06-01', target_premium: 820000, risk_score: 58, appetite_match: 42, status: 'Referred to Carrier',    stage_color: 'amber', underwriter: 'UW-01', underwriter_name: 'Marcus Henderson',priority: 'High',   age_hrs: 92, channel: 'API',          documents: 22, red_flags: 1, loss_ratio_3yr: 42, final_premium: null, decision_reason: null, auto_uw_eligible: false, revenue: 124000000, employees: 480 }
];

export const mgaSubmissionDetail = {
  id: 'SUB-28942',
  risk_overview: {
    insured_legal_name: 'TechForward Dynamics Inc',
    dba: 'TechForward',
    website: 'techforwarddynamics.com',
    address: '2200 Mission College Blvd, Santa Clara CA 95054',
    operations: 'SaaS platform + custom software · 120 employees · 4 offices',
    revenue: '$38M (2025)',
    employees_split: 'US: 92 · Intl: 28',
    years_in_business: 11,
    ceo: 'Priya Rao',
    cfo: 'Marcus Chen'
  },
  exposures: [
    { k: 'Annual Revenue',            v: '$38M' },
    { k: 'Employee Count',            v: '120' },
    { k: 'PHI / PII Records',         v: '~2.1M records' },
    { k: 'Cloud Infrastructure',      v: 'AWS + Azure (multi-region)' },
    { k: 'Security Certifications',   v: 'SOC 2 Type II · ISO 27001' },
    { k: 'MFA Coverage',              v: '100% of employees' },
    { k: 'Prior Breaches',            v: 'None disclosed' },
    { k: 'Incident Response Plan',    v: 'Tested quarterly' }
  ],
  loss_history: [
    { year: 2025, claims: 0, paid: 0,    reserves: 0,   status: 'Clean' },
    { year: 2024, claims: 1, paid: 8400, reserves: 0,   status: 'Closed · phishing incident $8.4k' },
    { year: 2023, claims: 0, paid: 0,    reserves: 0,   status: 'Clean' },
    { year: 2022, claims: 0, paid: 0,    reserves: 0,   status: 'Clean' },
    { year: 2021, claims: 0, paid: 0,    reserves: 0,   status: 'Clean' }
  ],
  coverage_requested: [
    { k: 'Cyber Liability — Aggregate',     v: '$10M' },
    { k: 'First-Party Cyber',                v: '$5M' },
    { k: 'Third-Party Cyber',                v: '$10M' },
    { k: 'Business Interruption (72hr)',    v: '$2M' },
    { k: 'Ransomware / Extortion',           v: '$1M sublimit' },
    { k: 'Notification & Credit Monitoring', v: '$2M sublimit' },
    { k: 'Regulatory Defense',                v: '$5M sublimit' },
    { k: 'Retention / Deductible',           v: '$50,000' }
  ],
  documents: [
    { name: 'ACORD 125 — Commercial Application.pdf', type: 'Application',  size: '1.2 MB', uploaded: '2026-04-19 09:22' },
    { name: 'Supplemental Cyber Questionnaire.pdf',    type: 'Questionnaire', size: '680 KB', uploaded: '2026-04-19 09:22' },
    { name: 'SOC 2 Type II Report (2025).pdf',         type: 'Certification', size: '4.8 MB', uploaded: '2026-04-19 09:22' },
    { name: 'ISO 27001 Certificate.pdf',                type: 'Certification', size: '420 KB', uploaded: '2026-04-19 09:22' },
    { name: 'Incident Response Plan v3.pdf',            type: 'Documentation', size: '1.1 MB', uploaded: '2026-04-19 09:22' },
    { name: 'Loss Run — AIG (5 years).pdf',             type: 'Loss Run',      size: '380 KB', uploaded: '2026-04-19 09:22' },
    { name: 'Financial Statements 2024.pdf',            type: 'Financials',    size: '2.2 MB', uploaded: '2026-04-19 09:22' },
    { name: 'Incumbent Policy — AIG Cyber.pdf',         type: 'Incumbent',     size: '3.4 MB', uploaded: '2026-04-19 09:22' }
  ],
  questionnaire: [
    { q: 'How many records of PII/PHI do you store?',        a: '~2.1 million records (customer data)' },
    { q: 'Is multi-factor authentication enforced?',          a: 'Yes — 100% of employees, all systems' },
    { q: 'Do you have a written incident response plan?',     a: 'Yes — tested quarterly · last test 2026-02-15' },
    { q: 'What backup frequency do you maintain?',            a: 'Continuous replication + daily snapshots · 30-day retention' },
    { q: 'Cloud provider(s)?',                                a: 'AWS (primary) + Azure (DR) · multi-region active/active' },
    { q: 'Any known breaches in past 5 years?',               a: '1 minor phishing incident 2024 · $8.4k · contained within 4 hours' },
    { q: 'Security certifications?',                          a: 'SOC 2 Type II (annual) · ISO 27001 · PCI-DSS Level 2' },
    { q: 'Employee security training cadence?',              a: 'Monthly phishing tests · annual KnowBe4 certification' }
  ],
  uw_notes: [
    { ts: '2026-04-19 11:42', author: 'Priya Sharma',  note: 'Strong security posture — SOC 2 + ISO 27001 · clean 5yr loss run. Prior incident was minor phishing, well-contained. Leaning toward approval at target premium or slightly below.' },
    { ts: '2026-04-19 09:28', author: 'System',        note: 'Auto-triage: passed appetite (94% match) · risk score 82 · no red flags.' },
    { ts: '2026-04-19 09:22', author: 'System',        note: 'Submission received via agent portal · routed to Priya Sharma (Cyber specialist).' }
  ],
  audit_trail: [
    { ts: '2026-04-19 11:42', actor: 'Priya Sharma',   action: 'UW note added · tentative approval at target', category: 'Review' },
    { ts: '2026-04-19 10:15', actor: 'Priya Sharma',   action: 'SOC 2 report reviewed · passed',               category: 'Review' },
    { ts: '2026-04-19 09:28', actor: 'System',         action: 'Auto-triage complete · assigned to UW-04',      category: 'Automation' },
    { ts: '2026-04-19 09:22', actor: 'Sarah Mitchell', action: 'Submission filed via agent portal',             category: 'Intake' }
  ],
  pricing: {
    base_premium: 142000,
    schedule_credits: [
      { reason: 'SOC 2 Type II certified', amount: -4200 },
      { reason: 'MFA 100% enforced',        amount: -2800 },
      { reason: 'Clean 5-year loss run',    amount: -3600 }
    ],
    debits: [
      { reason: 'PHI record count >2M', amount: 1800 }
    ],
    fees: [
      { k: 'Policy fee',    v: 250 },
      { k: 'TRIA premium',  v: 850 },
      { k: 'State tax',     v: 2100 }
    ],
    final_premium: 136400,
    commission_rate: 15,
    commission_dollars: 20460,
    mga_fee: 6820
  }
};

export const mgaUwGuidelines = [
  { id: 'UG-01', lob: 'Cyber',               title: 'Cyber Appetite Matrix (2026)',       version: '2026.2', updated: '2026-04-01', owner: 'Priya Sharma',    tags: ['appetite','authority','class'],          summary: 'Defines preferred classes, MFA / encryption requirements, and per-UW authority caps. Use with ACORD 140.' },
  { id: 'UG-02', lob: 'Workers Comp',        title: 'WC Class Code & State Matrix',       version: '2026.1', updated: '2026-03-15', owner: 'Elena Rodriguez', tags: ['class','state','rates'],                   summary: 'Approved/declined class codes by state. Includes experience mod thresholds and schedule credit rules.' },
  { id: 'UG-03', lob: 'General Liability',   title: 'GL Underwriting Playbook',           version: '2025.4', updated: '2026-01-20', owner: 'Marcus Henderson', tags: ['appetite','questionnaire','risk'],        summary: 'Standard GL risk-selection criteria, contractor vs. non-contractor flows, hazmat exclusions.' },
  { id: 'UG-04', lob: 'Commercial Auto',     title: 'Fleet Safety & Rating Guidelines',   version: '2026.1', updated: '2026-02-28', owner: 'David Park',       tags: ['telematics','driver','MVR'],              summary: 'Driver MVR thresholds, telematics incentives, fleet size × radius matrix.' },
  { id: 'UG-05', lob: 'Property',            title: 'Property COPE & Sprinkler Rules',    version: '2026.1', updated: '2026-02-10', owner: 'David Park',       tags: ['COPE','protection','construction'],        summary: 'Construction class, protection class, sprinkler discounts, coastal/wind exclusions.' },
  { id: 'UG-06', lob: 'Umbrella',            title: 'Umbrella Underlying Limits Matrix',  version: '2026.1', updated: '2026-01-05', owner: 'Marcus Henderson', tags: ['underlying','limits','follow-form'],      summary: 'Required GL/Auto/WC underlying limits, scheduled excess placement rules.' },
  { id: 'UG-07', lob: 'D&O / Professional',  title: 'D&O Questionnaire Decision Tree',    version: '2026.1', updated: '2026-03-05', owner: 'Priya Sharma',     tags: ['questionnaire','financials','industry'], summary: 'Financial health checks, IPO/M&A exclusions, regulated-industry underwriting.' },
  { id: 'UG-08', lob: 'All Lines',           title: 'MGA Authority Matrix',                version: '2026.3', updated: '2026-04-10', owner: 'Marcus Henderson', tags: ['authority','escalation','referral'],      summary: 'Per-underwriter authority caps by LOB and state · escalation paths · carrier referral triggers.' }
];

export const mgaCarrierReferrals = [
  { id: 'REF-4421', submission: 'SUB-28928', insured: 'Atlas Energy Services',    carrier: 'Liberty Mutual',   reason: 'Premium above MGA authority ($820k > $500k GL cap)', sent: '2026-04-16 09:22', status: 'Under Carrier Review', statusColor: 'amber', sla_hrs: 48, carrier_contact: 'Daniel Ortiz · d.ortiz@libertymutual.com', underwriter: 'Marcus Henderson' },
  { id: 'REF-4420', submission: 'SUB-28936', insured: 'Summit Dental Group',       carrier: 'CNA',              reason: 'Dental professional liability · requires carrier sign-off', sent: '2026-04-18 10:04', status: 'Quoted by Carrier',    statusColor: 'green', sla_hrs: 24, carrier_contact: 'Linda Park · l.park@cna.com',                underwriter: 'Priya Sharma' },
  { id: 'REF-4419', submission: 'SUB-28901', insured: 'Coastal Shipping Co.',      carrier: 'Travelers',        reason: 'Marine cargo · outside MGA book',                            sent: '2026-04-12 14:15', status: 'Declined by Carrier', statusColor: 'red',   sla_hrs: 72, carrier_contact: 'Jim Walsh · j.walsh@travelers.com',         underwriter: 'Marcus Henderson' },
  { id: 'REF-4418', submission: 'SUB-28892', insured: 'Valley Biotech Research',    carrier: 'Chubb',            reason: 'Clinical trials D&O · carrier authority only',              sent: '2026-04-10 11:30', status: 'Bound',                 statusColor: 'green', sla_hrs: 24, carrier_contact: 'Rachel Kim · r.kim@chubb.com',                 underwriter: 'Priya Sharma' },
  { id: 'REF-4417', submission: 'SUB-28884', insured: 'Pacific Aviation Partners',  carrier: 'AIG',              reason: 'Aviation hull · not in MGA appetite',                        sent: '2026-04-08 09:15', status: 'Under Carrier Review', statusColor: 'amber', sla_hrs: 72, carrier_contact: 'Marcus Lee · m.lee@aig.com',                   underwriter: 'Marcus Henderson' }
];

export const mgaAppetiteRules = [
  { id: 'AP-01', lob: 'Workers Comp',        class_codes: '5403, 5645, 5437, 8810',  states: 'CA, NV, OR, WA, AZ',   revenue_min: '$500k',  revenue_max: '$50M',  loss_ratio_max: 60,  authority: '$500k premium', priority: 1, active: true },
  { id: 'AP-02', lob: 'Workers Comp',        class_codes: '3632, 3669 (restaurants)', states: 'CA only',             revenue_min: '$250k',  revenue_max: '$10M',  loss_ratio_max: 70,  authority: '$150k premium', priority: 2, active: true },
  { id: 'AP-03', lob: 'General Liability',   class_codes: 'Most contractors',         states: 'All 50',              revenue_min: '$500k',  revenue_max: '$100M', loss_ratio_max: 55,  authority: '$500k premium', priority: 1, active: true },
  { id: 'AP-04', lob: 'Cyber Liability',     class_codes: 'Tech + Prof services',     states: 'All 50',              revenue_min: '$1M',    revenue_max: '$500M', loss_ratio_max: 40,  authority: '$500k premium', priority: 1, active: true },
  { id: 'AP-05', lob: 'Commercial Auto',     class_codes: 'Fleet 5–100 units',         states: 'CA, NV, OR, WA',      revenue_min: '$1M',    revenue_max: '$50M',  loss_ratio_max: 55,  authority: '$500k premium', priority: 1, active: true },
  { id: 'AP-06', lob: 'Property',            class_codes: 'COPE ≥ 70',                 states: 'All 50 (excl. coastal FL)', revenue_min: '$500k', revenue_max: '$50M', loss_ratio_max: 50, authority: '$500k premium', priority: 1, active: true },
  { id: 'AP-07', lob: 'Any',                  class_codes: 'Prohibited: Hazmat, Nuclear, Aviation, Professional MD/Lawyer', states: 'All', revenue_min: '—', revenue_max: '—', loss_ratio_max: null, authority: '—', priority: 99, active: true }
];

export const mgaAgentSubmissionSummary = [
  { agent_id: 'AGT-2041', ytd_submissions: 248, bound: 159, declined: 28, in_flight: 38, bind_ratio: 64, avg_tat_hrs: 14, loss_ratio: 38, quality: 94, top_lobs: 'WC, GL, Cyber' },
  { agent_id: 'AGT-2040', ytd_submissions: 204, bound: 118, declined: 32, in_flight: 42, bind_ratio: 58, avg_tat_hrs: 16, loss_ratio: 42, quality: 91, top_lobs: 'GL, WC, D&O' },
  { agent_id: 'AGT-2039', ytd_submissions: 192, bound: 108, declined: 30, in_flight: 34, bind_ratio: 56, avg_tat_hrs: 17, loss_ratio: 44, quality: 89, top_lobs: 'Cyber, GL, Property' },
  { agent_id: 'AGT-2038', ytd_submissions: 184, bound: 114, declined: 22, in_flight: 28, bind_ratio: 62, avg_tat_hrs: 13, loss_ratio: 35, quality: 93, top_lobs: 'WC, GL, Auto, BOP' },
  { agent_id: 'AGT-2037', ytd_submissions: 122, bound: 58,  declined: 18, in_flight: 24, bind_ratio: 48, avg_tat_hrs: 22, loss_ratio: 52, quality: 82, top_lobs: 'WC, GL, BOP' },
  { agent_id: 'AGT-2036', ytd_submissions: 96,  bound: 52,  declined: 14, in_flight: 18, bind_ratio: 54, avg_tat_hrs: 19, loss_ratio: 38, quality: 88, top_lobs: 'Cyber, D&O' }
];

// ─── MGA Agents & Brokers Management ───
export const mgaAgentKPIs = [
  { label: 'Active Agents',        value: '142' },
  { label: 'In Onboarding',        value: '8' },
  { label: 'On Hold',              value: '3', warning: true },
  { label: 'Premium YTD',          value: '$48.2M' },
  { label: 'Avg Bind Ratio',       value: '52%' },
  { label: 'Tier-1 Contribution',  value: '74%' }
];

export const mgaAgentStages = ['Prospecting','Application','Appointment','Active','On Hold','Terminated'];

export const mgaAgentTiers = [
  { key: 'tier1', label: 'Tier 1 — Preferred',   color: 'green', desc: 'Top producers · higher commission · binding authority up to $500k · priority UW' },
  { key: 'tier2', label: 'Tier 2 — Standard',    color: 'blue',  desc: 'Solid production · standard commission · binding authority up to $150k' },
  { key: 'tier3', label: 'Tier 3 — Developing',  color: 'amber', desc: 'Probation period · reduced commission · all submissions require MGA UW review' }
];

export const mgaAgents = [
  { id: 'AGT-2041', name: 'Lockton Companies',              npn: '16842041', primary: 'Sarah Mitchell',   contact: 'sarah.mitchell@lockton.com', phone: '(212) 555-0184', states: 'All 50',       lobs: ['WC','GL','BOP','Umbrella','Cyber'], tier: 'tier1', stage: 'Active',       health: 'green',  joined: '2021-03-15', premium_ytd: 8420000, bind_ratio: 64, loss_ratio: 38, quality: 94, retention: 92, performance_score: 92, active_policies: 182, submissions_ytd: 248, commission_rate: 13, producers: 4,  eo_expiry: '2026-12-15', license_check: 'Verified', submissions_30d: 28, pending_comm: 42840 },
  { id: 'AGT-2040', name: 'Marsh McLennan',                  npn: '15284012', primary: 'David Kim',         contact: 'david.kim@marsh.com',       phone: '(212) 555-0122', states: 'All 50',       lobs: ['WC','GL','Cyber','D&O','Property'],tier: 'tier1', stage: 'Active',       health: 'green',  joined: '2020-05-20', premium_ytd: 6120000, bind_ratio: 58, loss_ratio: 42, quality: 91, retention: 88, performance_score: 87, active_policies: 148, submissions_ytd: 204, commission_rate: 12.5,producers: 3,  eo_expiry: '2026-09-30', license_check: 'Verified', submissions_30d: 22, pending_comm: 28920 },
  { id: 'AGT-2039', name: 'Aon Risk Solutions',              npn: '14921008', primary: 'Jennifer Liu',      contact: 'jen.liu@aon.com',           phone: '(312) 555-0177', states: 'All 50',       lobs: ['GL','Property','Cyber','Management'], tier: 'tier1', stage: 'Active',    health: 'green',  joined: '2019-09-12', premium_ytd: 5840000, bind_ratio: 56, loss_ratio: 44, quality: 89, retention: 90, performance_score: 85, active_policies: 132, submissions_ytd: 192, commission_rate: 12.5,producers: 3,  eo_expiry: '2026-07-22', license_check: 'Verified', submissions_30d: 18, pending_comm: 14600 },
  { id: 'AGT-2038', name: 'Bridgepoint Insurance Brokers',   npn: '18924088', primary: 'Sarah Chen',        contact: 'sarah@bridgepoint.com',     phone: '(916) 555-0182', states: 'CA,NV,OR,WA,AZ',lobs: ['WC','GL','BOP','Auto','Cyber'],tier: 'tier1', stage: 'Active',      health: 'green',  joined: '2020-01-08', premium_ytd: 3920000, bind_ratio: 62, loss_ratio: 35, quality: 93, retention: 94, performance_score: 91, active_policies: 127, submissions_ytd: 184, commission_rate: 13, producers: 4,  eo_expiry: '2027-01-15', license_check: 'Verified', submissions_30d: 24, pending_comm: 38720 },
  { id: 'AGT-2037', name: 'Hub International',               npn: '17432055', primary: 'Mike Torres',       contact: 'mike.torres@hub.com',       phone: '(602) 555-0141', states: 'CA,AZ,NV,TX',    lobs: ['WC','GL','BOP'],                   tier: 'tier2', stage: 'Active',       health: 'green',  joined: '2022-04-14', premium_ytd: 2480000, bind_ratio: 48, loss_ratio: 52, quality: 82, retention: 84, performance_score: 74, active_policies: 84,  submissions_ytd: 122, commission_rate: 11, producers: 2,  eo_expiry: '2026-08-10', license_check: 'Verified', submissions_30d: 14, pending_comm: 18240 },
  { id: 'AGT-2036', name: 'Woodruff Sawyer',                 npn: '18120094', primary: 'Lisa Park',         contact: 'l.park@woodruffsawyer.com', phone: '(415) 555-0156', states: 'CA,OR,WA',       lobs: ['Cyber','D&O','Professional'],      tier: 'tier2', stage: 'Active',       health: 'green',  joined: '2021-11-05', premium_ytd: 1820000, bind_ratio: 54, loss_ratio: 38, quality: 88, retention: 89, performance_score: 81, active_policies: 62,  submissions_ytd: 96,  commission_rate: 11.5,producers: 2,  eo_expiry: '2027-02-28', license_check: 'Verified', submissions_30d: 10, pending_comm: 12400 },
  { id: 'AGT-2035', name: 'USI Insurance Services',          npn: '17928062', primary: 'Tom Chen',          contact: 't.chen@usi.com',            phone: '(503) 555-0199', states: 'Pacific Northwest', lobs: ['WC','GL','Auto','Property'],    tier: 'tier2', stage: 'Active',       health: 'amber',  joined: '2022-06-22', premium_ytd: 1420000, bind_ratio: 42, loss_ratio: 58, quality: 78, retention: 80, performance_score: 66, active_policies: 48,  submissions_ytd: 104, commission_rate: 10.5,producers: 2,  eo_expiry: '2026-06-30', license_check: 'Verified', submissions_30d: 11, pending_comm: 8420,  watch_note: 'Loss ratio trending high — QBR scheduled' },
  { id: 'AGT-2034', name: 'Newfront Insurance',              npn: '19241021', primary: 'Alex Morgan',       contact: 'alex@newfront.com',         phone: '(415) 555-0133', states: 'CA,TX,NY,FL',    lobs: ['Cyber','Tech E&O','D&O'],          tier: 'tier2', stage: 'Active',       health: 'green',  joined: '2023-02-10', premium_ytd: 1280000, bind_ratio: 50, loss_ratio: 41, quality: 86, retention: 85, performance_score: 78, active_policies: 42,  submissions_ytd: 84,  commission_rate: 11, producers: 2,  eo_expiry: '2026-11-20', license_check: 'Verified', submissions_30d: 8,  pending_comm: 9180 },
  { id: 'AGT-2033', name: 'Regional Brokers Inc',            npn: '18520011', primary: 'Ramon Ortiz',       contact: 'ramon@regionalbrkr.com',    phone: '(714) 555-0188', states: 'CA',              lobs: ['WC','GL','BOP'],                    tier: 'tier2', stage: 'Active',       health: 'green',  joined: '2023-08-04', premium_ytd: 820000,  bind_ratio: 46, loss_ratio: 48, quality: 80, retention: 82, performance_score: 72, active_policies: 28,  submissions_ytd: 62,  commission_rate: 10, producers: 1,  eo_expiry: '2026-10-05', license_check: 'Verified', submissions_30d: 6,  pending_comm: 4820 },
  { id: 'AGT-2032', name: 'Summit Agency',                   npn: '20118049', primary: 'Priya Menon',       contact: 'priya@summitagency.com',    phone: '(510) 555-0148', states: 'CA,NV',           lobs: ['WC','GL'],                         tier: 'tier3', stage: 'Active',       health: 'amber',  joined: '2025-02-18', premium_ytd: 420000,  bind_ratio: 38, loss_ratio: 64, quality: 72, retention: 78, performance_score: 58, active_policies: 18,  submissions_ytd: 48,  commission_rate: 9,  producers: 1,  eo_expiry: '2026-07-15', license_check: 'Verified', submissions_30d: 5,  pending_comm: 2420,  watch_note: 'Probation — 12 months from appointment' },
  { id: 'AGT-2031', name: 'GreenLeaf Brokers',               npn: '19984072', primary: 'Carl Weaver',       contact: 'carl@greenleafbrokers.com', phone: '(916) 555-0118', states: 'CA',              lobs: ['WC','BOP'],                        tier: 'tier3', stage: 'Active',       health: 'red',    joined: '2024-11-20', premium_ytd: 180000,  bind_ratio: 28, loss_ratio: 78, quality: 62, retention: 65, performance_score: 44, active_policies: 8,   submissions_ytd: 32,  commission_rate: 8,  producers: 1,  eo_expiry: '2026-06-10', license_check: 'Verified', submissions_30d: 3,  pending_comm: 1240,  watch_note: 'Performance Improvement Plan active · manager review due' },
  { id: 'AGT-2030', name: 'Pacific Crest Advisors',          npn: '18642033', primary: 'Jill Nguyen',       contact: 'jill@pacificcrest.com',     phone: '(503) 555-0156', states: 'OR,WA,CA',        lobs: ['WC','GL','Property'],              tier: 'tier2', stage: 'On Hold',     health: 'red',    joined: '2022-09-30', premium_ytd: 620000,  bind_ratio: 36, loss_ratio: 82, quality: 64, retention: 70, performance_score: 42, active_policies: 14,  submissions_ytd: 28,  commission_rate: 10, producers: 1,  eo_expiry: '2026-05-30', license_check: 'EXPIRING', submissions_30d: 0,  pending_comm: 0,     watch_note: 'E&O expiring in 41 days · license lapse TX' },
  { id: 'AGT-2029', name: 'Neon Insurance Group',            npn: '20412088', primary: 'Dana Carter',       contact: 'dana@neonins.com',          phone: '(415) 555-0133', states: 'CA,TX',          lobs: ['Cyber','Tech E&O'],                tier: 'tier3', stage: 'Application',  health: 'amber',  joined: null,         premium_ytd: 0,       bind_ratio: null, loss_ratio: null, quality: null, retention: null, performance_score: null, active_policies: 0,   submissions_ytd: 0,   commission_rate: 10, producers: 1,  eo_expiry: '2027-03-10', license_check: 'Pending', submissions_30d: 0,  pending_comm: 0,     watch_note: 'Background check in progress · est. appointment 2026-05-01',  projected_volume: 1200000, expected_appt: '2026-05-01', referrer: 'Sarah Mitchell (Lockton)', application_progress: 75 },
  { id: 'AGT-2028', name: 'Cipher Risk Advisors',            npn: '20628002', primary: 'Alex Kim',          contact: 'alex@cipher-risk.com',      phone: '(650) 555-0168', states: 'CA,NY',          lobs: ['Cyber','D&O'],                     tier: 'tier3', stage: 'Prospecting',  health: 'amber',  joined: null,         premium_ytd: 0,       bind_ratio: null, loss_ratio: null, quality: null, retention: null, performance_score: null, active_policies: 0,   submissions_ytd: 0,   commission_rate: null,producers: 1,  eo_expiry: 'Pending',    license_check: 'Not Started', submissions_30d: 0, pending_comm: 0, watch_note: 'Initial outreach · exec meeting scheduled 2026-04-28',  projected_volume: 800000,  expected_appt: '2026-07-15', referrer: 'Sarah Mitchell (Lockton)', application_progress: 10 }
];

export const mgaAgentDetail = {
  id: 'AGT-2038',
  name: 'Bridgepoint Insurance Brokers',
  dba: 'Bridgepoint',
  entity_type: 'LLC',
  fein: '88-XXXX492',
  website: 'bridgepoint.com',
  founded: 2017,
  employees: 24,
  primary_contact: { name: 'Sarah Chen', title: 'Principal', email: 'sarah@bridgepoint.com', phone: '(916) 555-0182', decision_maker: true },
  other_contacts: [
    { name: 'Mike Torres',  title: 'Senior Producer',  email: 'mike@bridgepoint.com',  phone: '(916) 555-0185', decision_maker: false },
    { name: 'Lisa Park',    title: 'Commercial CSR',   email: 'lisa@bridgepoint.com',  phone: '(916) 555-0186', decision_maker: false },
    { name: 'David Kim',    title: 'Producer',         email: 'david@bridgepoint.com', phone: '(916) 555-0187', decision_maker: false }
  ],
  address: '1201 Industrial Blvd, Suite 200, Sacramento CA 95814',
  npn: '18924088',
  licenses: [
    { state: 'CA', npn: '18924088', license_no: 'CA-LIC-892341', type: 'Producer License',      status: 'Active', expires: '2027-01-15' },
    { state: 'NV', npn: '18924088', license_no: 'NV-LIC-99214',  type: 'Non-Resident Producer', status: 'Active', expires: '2026-11-22' },
    { state: 'OR', npn: '18924088', license_no: 'OR-LIC-40281',  type: 'Non-Resident Producer', status: 'Active', expires: '2027-03-08' },
    { state: 'WA', npn: '18924088', license_no: 'WA-LIC-33120',  type: 'Non-Resident Producer', status: 'Active', expires: '2026-12-10' },
    { state: 'AZ', npn: '18924088', license_no: 'AZ-LIC-21833',  type: 'Non-Resident Producer', status: 'Active', expires: '2027-04-02' }
  ],
  appointments: [
    { lob: 'Workers Comp',    states: 'CA,NV,OR,WA,AZ', authority: 'Bind up to $500k', effective: '2020-01-08' },
    { lob: 'General Liability',states: 'CA,NV,OR,WA,AZ', authority: 'Bind up to $250k', effective: '2020-01-08' },
    { lob: 'BOP',             states: 'CA,NV,OR,WA,AZ', authority: 'Bind up to $200k', effective: '2020-01-08' },
    { lob: 'Commercial Auto', states: 'CA,NV,OR',       authority: 'Bind up to $300k', effective: '2021-06-15' },
    { lob: 'Cyber',           states: 'All appointed',  authority: 'Quote only — refer for bind', effective: '2023-04-01' }
  ],
  commission_structure: {
    new_business: 13,
    renewal: 13,
    bonus_threshold: 3500000,
    bonus_rate: 2,
    contingent: 'Yes — 2% of profit share',
    override: null
  },
  eo_insurance: { carrier: 'Scottsdale', limit: '$2M/$4M', expires: '2027-01-15', uploaded: '2026-01-08' },
  contract: { version: 'v3.2', signed: '2023-04-01', auto_renew: true, next_review: '2026-04-01' },
  performance_scorecard: {
    submission_volume: { value: 184, rank: '8 of 142', percentile: 94, trend: 'up' },
    bind_ratio:        { value: 62,  rank: '12 of 142', percentile: 91, trend: 'up' },
    loss_ratio:        { value: 35,  rank: '11 of 142', percentile: 92, trend: 'down' },
    avg_premium:       { value: 30870, rank: '34 of 142', percentile: 76, trend: 'flat' },
    retention:         { value: 94, rank: '18 of 142', percentile: 87, trend: 'up' },
    quality_score:     { value: 93, rank: '14 of 142', percentile: 90, trend: 'up' }
  },
  documents: [
    { name: 'Appointment Contract v3.2.pdf',         type: 'Contract',     signed: '2023-04-01', status: 'Active' },
    { name: 'E&O Certificate 2026–27.pdf',            type: 'E&O',          uploaded: '2026-01-08', expires: '2027-01-15', status: 'Active' },
    { name: 'W-9 Form.pdf',                           type: 'W-9',          uploaded: '2024-01-12', status: 'Active' },
    { name: 'Commission Schedule — Q2 2026.pdf',      type: 'Commission',   uploaded: '2026-04-01', status: 'Active' },
    { name: 'CA License Renewal Cert.pdf',            type: 'License',      uploaded: '2026-01-15', status: 'Active' },
    { name: 'Quarterly Business Review — Q1 2026.pdf',type: 'QBR',          uploaded: '2026-04-05', status: 'Active' }
  ],
  qbr_history: [
    { date: '2026-04-05', overall: 92, highlights: ['+18% premium growth YoY','Top-quartile loss ratio','Expanded into cyber'], concerns: [],                                  next_date: '2026-07-05' },
    { date: '2026-01-08', overall: 88, highlights: ['Strong Q4 production','0 declinations by UW'],                              concerns: ['Below-target retention on WC book'], next_date: '2026-04-05' },
    { date: '2025-10-10', overall: 86, highlights: ['Added 2 new producers','Completed cyber training'],                         concerns: ['Avg premium slipping'],                next_date: '2026-01-08' }
  ],
  activity_timeline: [
    { ts: '2026-04-18 14:22', event: 'New submission received — TechCorp WC renewal',     actor: 'Sarah Chen' },
    { ts: '2026-04-15 10:04', event: 'Commission statement Q1 2026 — $38,720 paid',       actor: 'MGA Finance' },
    { ts: '2026-04-10 09:18', event: 'QBR completed · score 92 · no action items',         actor: 'MGA Ops' },
    { ts: '2026-04-05 11:30', event: 'Annual E&O certificate uploaded · expires 2027-01-15', actor: 'Sarah Chen' },
    { ts: '2026-03-22 16:40', event: 'Tier review: maintained Tier 1 — Preferred',         actor: 'Auto-scoring' },
    { ts: '2026-02-14 13:05', event: 'Bound SEMC-WC-2025-48821 · $184,700 premium',         actor: 'Sarah Chen' }
  ]
};

export const mgaAgentOnboardingSteps = [
  { key: 'app',       label: 'Application',     desc: 'Agency details, license info, E&O, history' },
  { key: 'dd',        label: 'Due Diligence',   desc: 'License + background + credit + AML/OFAC' },
  { key: 'contract',  label: 'Contract',        desc: 'Digital signing · commission · authority' },
  { key: 'portal',    label: 'Portal Setup',    desc: 'Login · products · welcome kit' },
  { key: 'go',        label: 'Go-Live',         desc: 'Probation period + first submission review' }
];

export const mgaAgentCommissions = [
  { agent: 'Lockton Companies',         period: 'Apr 2026', new_business: 28420, renewal: 14400, bonus: 0,    overrides: 0,    chargebacks: 0,    total: 42820, status: 'Paid',     statusColor: 'green', paid_date: '2026-04-15', method: 'ACH' },
  { agent: 'Marsh McLennan',            period: 'Apr 2026', new_business: 18420, renewal: 10500, bonus: 0,    overrides: 0,    chargebacks: 0,    total: 28920, status: 'Paid',     statusColor: 'green', paid_date: '2026-04-15', method: 'ACH' },
  { agent: 'Bridgepoint Insurance',     period: 'Apr 2026', new_business: 24880, renewal: 13840, bonus: 0,    overrides: 0,    chargebacks: 0,    total: 38720, status: 'Pending Approval',statusColor: 'amber', paid_date: '—',         method: '—' },
  { agent: 'Aon Risk Solutions',        period: 'Apr 2026', new_business: 8600,  renewal: 6000,  bonus: 0,    overrides: 0,    chargebacks: 0,    total: 14600, status: 'Pending Approval',statusColor: 'amber', paid_date: '—',         method: '—' },
  { agent: 'Hub International',         period: 'Apr 2026', new_business: 11420, renewal: 6820,  bonus: 0,    overrides: 0,    chargebacks: 0,    total: 18240, status: 'Processing',statusColor: 'blue',  paid_date: '—',         method: 'ACH' },
  { agent: 'Woodruff Sawyer',           period: 'Apr 2026', new_business: 7420,  renewal: 4980,  bonus: 0,    overrides: 0,    chargebacks: 0,    total: 12400, status: 'Paid',     statusColor: 'green', paid_date: '2026-04-15', method: 'ACH' },
  { agent: 'USI Insurance',              period: 'Apr 2026', new_business: 5820,  renewal: 3200,  bonus: 0,    overrides: 0,    chargebacks: -600, total: 8420,  status: 'Paid',     statusColor: 'green', paid_date: '2026-04-15', method: 'ACH' },
  { agent: 'Newfront Insurance',         period: 'Apr 2026', new_business: 6080,  renewal: 3100,  bonus: 0,    overrides: 0,    chargebacks: 0,    total: 9180,  status: 'Paid',     statusColor: 'green', paid_date: '2026-04-15', method: 'ACH' },
  { agent: 'Regional Brokers Inc',       period: 'Apr 2026', new_business: 3220,  renewal: 1600,  bonus: 0,    overrides: 0,    chargebacks: 0,    total: 4820,  status: 'Paid',     statusColor: 'green', paid_date: '2026-04-15', method: 'Check' },
  { agent: 'Bridgepoint — Bonus Q1',     period: 'Q1 2026',  new_business: 0,     renewal: 0,     bonus: 8400, overrides: 0,    chargebacks: 0,    total: 8400,  status: 'Paid',     statusColor: 'green', paid_date: '2026-04-01', method: 'ACH', note: 'Production bonus · 2% above $3.5M threshold' }
];

export const mgaAgentCommissionRules = [
  { carrier: 'SEMC / Liberty', lob: 'Workers Comp',    nb_rate: 13.0, renewal_rate: 13.0, bonus: '2% over $3.5M',   contingent: '2% profit share',        tier1_uplift: '+0.5%', tier3_haircut: '-2.0%' },
  { carrier: 'CNA',            lob: 'General Liability',nb_rate: 12.0, renewal_rate: 12.0, bonus: '1.5% over $2M',   contingent: '1.5% profit share',      tier1_uplift: '+0.5%', tier3_haircut: '-2.0%' },
  { carrier: 'Hartford',       lob: 'BOP',              nb_rate: 11.0, renewal_rate: 11.0, bonus: '1% over $1.5M',   contingent: '—',                      tier1_uplift: '+0.5%', tier3_haircut: '-2.0%' },
  { carrier: 'Travelers',      lob: 'Commercial Auto',  nb_rate: 11.5, renewal_rate: 11.5, bonus: '1.5% over $2M',   contingent: '1% profit share',        tier1_uplift: '+0.5%', tier3_haircut: '-2.0%' },
  { carrier: 'CNA',            lob: 'Cyber',            nb_rate: 15.0, renewal_rate: 14.0, bonus: 'Flat $5k at $500k',contingent: '—',                      tier1_uplift: '+1.0%', tier3_haircut: '-3.0%' },
  { carrier: 'Chubb',          lob: 'D&O',              nb_rate: 12.5, renewal_rate: 12.5, bonus: '—',              contingent: '2% profit share',        tier1_uplift: '+0.5%', tier3_haircut: '-2.0%' }
];

export const mgaAgentAnalytics = {
  production_by_tier: [
    { tier: 'Tier 1 — Preferred', agents: 12, premium_ytd: 28420000, share: 59, bind_ratio: 61, loss_ratio: 39 },
    { tier: 'Tier 2 — Standard',  agents: 68, premium_ytd: 14820000, share: 31, bind_ratio: 48, loss_ratio: 48 },
    { tier: 'Tier 3 — Developing',agents: 62, premium_ytd: 4960000,  share: 10, bind_ratio: 32, loss_ratio: 64 }
  ],
  top_agents: [
    { name: 'Lockton Companies',     premium: 8420000, bind_ratio: 64, loss_ratio: 38, retention: 92 },
    { name: 'Marsh McLennan',        premium: 6120000, bind_ratio: 58, loss_ratio: 42, retention: 88 },
    { name: 'Aon Risk Solutions',    premium: 5840000, bind_ratio: 56, loss_ratio: 44, retention: 90 },
    { name: 'Bridgepoint Insurance', premium: 3920000, bind_ratio: 62, loss_ratio: 35, retention: 94 },
    { name: 'Hub International',     premium: 2480000, bind_ratio: 48, loss_ratio: 52, retention: 84 }
  ],
  bottom_agents: [
    { name: 'GreenLeaf Brokers',     premium: 180000, bind_ratio: 28, loss_ratio: 78, retention: 65, concern: 'PIP active · LR above threshold' },
    { name: 'Pacific Crest Advisors',premium: 620000, bind_ratio: 36, loss_ratio: 82, retention: 70, concern: 'On Hold · E&O expiring · license lapse' },
    { name: 'Summit Agency',         premium: 420000, bind_ratio: 38, loss_ratio: 64, retention: 78, concern: 'Probation period — 12 months' }
  ],
  lob_mix: [
    { lob: 'Workers Comp',        premium: 16820000, share: 35 },
    { lob: 'General Liability',   premium: 10440000, share: 22 },
    { lob: 'Commercial Auto',     premium: 6840000,  share: 14 },
    { lob: 'Cyber',               premium: 5200000,  share: 11 },
    { lob: 'BOP',                 premium: 4340000,  share: 9  },
    { lob: 'Property',            premium: 2820000,  share: 6  },
    { lob: 'D&O / Professional',  premium: 1440000,  share: 3  }
  ],
  retention_trend: [
    { q: 'Q1 2025', new: 8,  terminated: 2 },
    { q: 'Q2 2025', new: 6,  terminated: 1 },
    { q: 'Q3 2025', new: 10, terminated: 3 },
    { q: 'Q4 2025', new: 7,  terminated: 2 },
    { q: 'Q1 2026', new: 11, terminated: 4 }
  ],
  submission_quality: [
    { week: 'Wk 14', submitted: 142, clean: 118, flagged: 18, rejected: 6 },
    { week: 'Wk 15', submitted: 158, clean: 132, flagged: 20, rejected: 6 },
    { week: 'Wk 16', submitted: 164, clean: 138, flagged: 22, rejected: 4 },
    { week: 'Wk 17', submitted: 148, clean: 128, flagged: 16, rejected: 4 }
  ]
};

export const mgaAgentBroadcastTemplates = [
  { id: 'BT-01', name: 'Monthly Producer Newsletter',  category: 'Newsletter',   audience: 'All active agents',      channel: 'Email',     last_used: '2026-04-01', open_rate: 62, variables: ['agent_name','top_products','upcoming_webinars'] },
  { id: 'BT-02', name: 'Rate Change Announcement',     category: 'Rate Notice',  audience: 'By LOB',                  channel: 'Email+SMS', last_used: '2026-03-14', open_rate: 78, variables: ['carrier','lob','effective_date','change_pct'] },
  { id: 'BT-03', name: 'New Product Launch',            category: 'Product',      audience: 'Tier 1 + 2',              channel: 'Email',     last_used: '2026-02-20', open_rate: 71, variables: ['product_name','states','launch_date','commission_rate'] },
  { id: 'BT-04', name: 'Appetite Update',               category: 'Underwriting', audience: 'All by LOB',              channel: 'Email',     last_used: '2026-04-10', open_rate: 84, variables: ['carrier','lob','class_codes','changes'] },
  { id: 'BT-05', name: 'Training Webinar Invite',      category: 'Training',     audience: 'Tier 2 + 3',              channel: 'Email',     last_used: '2026-04-02', open_rate: 54, variables: ['topic','date','presenter','zoom_link'] },
  { id: 'BT-06', name: 'QBR Scheduling',                category: 'Operations',   audience: 'Tier 1 preferred',        channel: 'Email',     last_used: '2026-04-01', open_rate: 91, variables: ['agent_name','quarter','proposed_dates','mga_rep'] },
  { id: 'BT-07', name: 'Compliance Deadline Reminder', category: 'Compliance',   audience: 'By state',                channel: 'Email+SMS', last_used: '2026-03-28', open_rate: 88, variables: ['deadline','state','filing_type','link'] },
  { id: 'BT-08', name: 'Commission Statement Available',category: 'Finance',     audience: 'All paid agents',         channel: 'Email',     last_used: '2026-04-15', open_rate: 95, variables: ['agent_name','period','amount','statement_link'] }
];

export const mgaAgentBroadcasts = [
  { id: 'BC-8842', template: 'Appetite Update',           subject: 'SEMC WC appetite expansion — CA class codes added',   sent: '2026-04-18 10:00', recipients: 142, delivered: 141, opened: 119, clicked: 48, replied: 12, status: 'Sent',     statusColor: 'green' },
  { id: 'BC-8841', template: 'Commission Statement Available', subject: 'Your April 2026 commission statement is ready', sent: '2026-04-15 08:00', recipients: 142, delivered: 142, opened: 135, clicked: 102,replied: 18, status: 'Sent',     statusColor: 'green' },
  { id: 'BC-8840', template: 'Rate Change Announcement',  subject: 'Travelers Commercial Auto rate change eff. 5/1',     sent: '2026-04-14 14:30', recipients: 86,  delivered: 85,  opened: 67,  clicked: 42, replied: 6,  status: 'Sent',     statusColor: 'green' },
  { id: 'BC-8839', template: 'Training Webinar Invite',  subject: 'Q2 Cyber Underwriting Deep-Dive · Tue Apr 22 @ 10am', sent: '2026-04-10 09:15', recipients: 84,  delivered: 84,  opened: 56,  clicked: 38, replied: 4,  status: 'Sent',     statusColor: 'green' },
  { id: 'BC-8838', template: 'Monthly Producer Newsletter',subject: 'April 2026 Producer Bulletin — 3 new wins, 2 updates',sent: '2026-04-01 08:00', recipients: 142, delivered: 141, opened: 92,  clicked: 34, replied: 8,  status: 'Sent',     statusColor: 'green' },
  { id: 'BC-8837', template: 'QBR Scheduling',            subject: 'Q2 QBR scheduling — please pick a time',              sent: null,                recipients: 12,  delivered: 0,   opened: 0,   clicked: 0,  replied: 0,  status: 'Draft',    statusColor: 'gray'  },
  { id: 'BC-8836', template: 'Compliance Deadline Reminder',subject: 'CA surplus lines filing due 4/30',                 sent: '2026-04-19 06:00', recipients: 38,  delivered: 38,  opened: 18,  clicked: 8,  replied: 2,  status: 'Sending',  statusColor: 'blue'  }
];

export const mgaAgentBrandingTemplates = [
  { id: 'TM-01', name: 'Classic Blue',          preview: '🌊', primary: '#1976d2', accent: '#64b5f6', uses: 48, last_updated: '2026-03-12', default: true,  description: 'Clean corporate blue — default template for Tier 2/3 agents' },
  { id: 'TM-02', name: 'Agency Premium',        preview: '✨', primary: '#6c5ce7', accent: '#a67dff', uses: 28, last_updated: '2026-02-18', default: false, description: 'Purple gradient · Tier 1 preferred · available as "premium" template' },
  { id: 'TM-03', name: 'Emerald',                preview: '🌿', primary: '#00897b', accent: '#4db6ac', uses: 14, last_updated: '2026-01-22', default: false, description: 'Green palette · popular with wellness & specialty agents' },
  { id: 'TM-04', name: 'Sunset Orange',         preview: '🌅', primary: '#f4511e', accent: '#ff8a65', uses: 9,  last_updated: '2025-11-04', default: false, description: 'Warm orange · construction & trade-focused agents' },
  { id: 'TM-05', name: 'Monochrome',             preview: '⬛', primary: '#37474f', accent: '#78909c', uses: 18, last_updated: '2026-01-08', default: false, description: 'Professional charcoal · common with large broker houses' },
  { id: 'TM-06', name: 'Custom (per agent)',    preview: '🎨', primary: null,      accent: null,      uses: 17, last_updated: '—',          default: false, description: 'Fully custom · agent uploads their own brand kit · subject to review' }
];

export const mgaAgentEmailComponents = [
  { type: 'Header Logo',      active: true,  desc: 'Agency logo rendered at top of every email · fallback to MGA logo' },
  { type: 'Producer Signature',active: true, desc: 'Primary contact name, title, phone, email auto-appended to every outbound email' },
  { type: 'Footer Disclaimer', active: true, desc: 'State-specific legal disclaimers appended per recipient state of residence' },
  { type: 'Unsubscribe Link',  active: true, desc: 'CAN-SPAM compliant unsubscribe link in every broadcast' },
  { type: 'Social Links',      active: false,desc: 'LinkedIn / Facebook / Twitter icons · opt-in per agent' },
  { type: 'Co-Branding',       active: true, desc: 'MGA + agency logos side-by-side on rate change and appetite notices' }
];

export const mgaAgentCommNotifications = [
  { type: 'tier_change', title: 'Tier promotion — USI Insurance Services',          body: 'USI qualifies for Tier 2 based on Q1 production. Confirm promotion.',                 ts: '2026-04-18', unread: true },
  { type: 'eo_expiry',    title: 'E&O expiring — Pacific Crest (41 days)',          body: 'E&O expires 2026-05-30. Auto-hold triggered. Notify agent.',                          ts: '2026-04-18', unread: true },
  { type: 'qbr_due',      title: 'QBR due — USI Insurance Services',                body: 'Q1 QBR overdue by 8 days · LR trending 58%.',                                         ts: '2026-04-17', unread: true },
  { type: 'commission',   title: 'Commission approval queued — 3 statements',       body: 'Bridgepoint, Aon, Hub statements awaiting your approval · $81,580 total.',           ts: '2026-04-17', unread: false },
  { type: 'submission',   title: 'High-quality submission from Tier 3 — GreenLeaf', body: 'First clean submission in 90 days · consider PIP checkpoint.',                        ts: '2026-04-16', unread: false }
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

// ─── Documents Module Data ───
export const documentKPIs = [
  { label: 'Total Documents', value: '4,812' },
  { label: 'Pending Signatures', value: '28', warning: true },
  { label: 'Expiring < 30d', value: '14', warning: true },
  { label: 'Storage Used', value: '142 GB' },
  { label: 'Compliance Score', value: '96%' },
  { label: 'e-Sign Adoption', value: '93%' }
];

export const documentCategories = [
  { key: 'client',     icon: '👥', name: 'Client & Prospect',     desc: 'Applications, ID proof, W-9, loss runs',     count: 1284 },
  { key: 'policy',     icon: '📋', name: 'Policy Lifecycle',      desc: 'Binders, decs, endorsements, COIs, ID cards', count: 1962 },
  { key: 'carrier',    icon: '🏢', name: 'Carrier & Submission',  desc: 'ACORD forms, underwriting Qs, quotes',        count: 748  },
  { key: 'claims',     icon: '📝', name: 'Claims & Loss',         desc: 'FNOL, adjuster reports, settlement docs',     count: 312  },
  { key: 'billing',    icon: '💰', name: 'Billing & Financial',   desc: 'Invoices, payment proofs, commission stmts',  count: 284  },
  { key: 'compliance', icon: '⚖️', name: 'Compliance & Legal',    desc: 'e-signatures, disclosures, privacy notices',  count: 158  },
  { key: 'marketing',  icon: '📣', name: 'Marketing & Misc',      desc: 'Welcome kits, risk management reports',       count: 64   }
];

export const documentStatuses = ['Draft','Pending Review','Pending Signature','Signed','Active','Expiring','Expired','Archived'];

export const documentLibrary = [
  { id: 'DOC-10482', name: 'ACORD 125 — Commercial Application.pdf', category: 'carrier',    type: 'ACORD 125',        client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', lob: 'Workers Comp',        version: 3, size: '1.4 MB',  uploaded: '2026-04-12', uploadedBy: 'Sarah Chen',     status: 'Signed',            statusColor: 'green', expires: '—',           confidentiality: 'Internal',  signers: 2, signed: 2 },
  { id: 'DOC-10481', name: 'Certificate of Insurance — Landlord.pdf', category: 'policy',    type: 'COI',              client: 'Apex Industries',           policy: 'CNA-GL-2025-33102',  lob: 'General Liability',   version: 1, size: '284 KB', uploaded: '2026-04-17', uploadedBy: 'Mike Torres',    status: 'Active',            statusColor: 'green', expires: '2027-04-01',  confidentiality: 'Shared',    signers: 1, signed: 1 },
  { id: 'DOC-10480', name: 'Workers Comp Binder 2026-05-01.pdf',      category: 'policy',    type: 'Binder',           client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', lob: 'Workers Comp',        version: 2, size: '820 KB', uploaded: '2026-04-15', uploadedBy: 'Sarah Chen',     status: 'Pending Signature', statusColor: 'amber', expires: '2026-04-25',  confidentiality: 'Internal',  signers: 3, signed: 1 },
  { id: 'DOC-10479', name: 'Loss Run — Liberty 2023-2025.pdf',        category: 'client',    type: 'Loss Run',         client: 'Ridge Builders',            policy: '—',                  lob: 'Workers Comp',        version: 1, size: '2.1 MB', uploaded: '2026-04-10', uploadedBy: 'Lisa Park',      status: 'Active',            statusColor: 'green', expires: '—',           confidentiality: 'Internal',  signers: 0, signed: 0 },
  { id: 'DOC-10478', name: 'FNOL — Slip & Fall Incident.pdf',         category: 'claims',    type: 'FNOL',             client: 'Valley Logistics',          policy: 'HTF-GL-2025-44208',  lob: 'General Liability',   version: 1, size: '612 KB', uploaded: '2026-04-09', uploadedBy: 'David Kim',      status: 'Signed',            statusColor: 'green', expires: '—',           confidentiality: 'Internal',  signers: 2, signed: 2 },
  { id: 'DOC-10477', name: 'Endorsement — Add Location 1400 Ind.pdf', category: 'policy',    type: 'Endorsement',      client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', lob: 'Workers Comp',        version: 1, size: '198 KB', uploaded: '2026-04-08', uploadedBy: 'Sarah Chen',     status: 'Pending Signature', statusColor: 'amber', expires: '2026-04-22',  confidentiality: 'Internal',  signers: 2, signed: 0 },
  { id: 'DOC-10476', name: 'Commission Statement — Liberty Apr.pdf',  category: 'billing',   type: 'Commission Stmt',  client: 'Agency-wide',               policy: '—',                  lob: 'Multi',               version: 1, size: '1.8 MB', uploaded: '2026-04-05', uploadedBy: 'Finance Bot',    status: 'Active',            statusColor: 'green', expires: '—',           confidentiality: 'Internal',  signers: 0, signed: 0 },
  { id: 'DOC-10475', name: 'Privacy Notice & GLBA Disclosure.pdf',    category: 'compliance',type: 'Disclosure',       client: 'TechCorp Inc',              policy: '—',                  lob: 'Cyber',               version: 2, size: '96 KB',  uploaded: '2026-04-04', uploadedBy: 'Sarah Chen',     status: 'Signed',            statusColor: 'green', expires: '2027-04-04',  confidentiality: 'Shared',    signers: 1, signed: 1 },
  { id: 'DOC-10474', name: 'W-9 Form — Harbor Foods.pdf',             category: 'client',    type: 'W-9',              client: 'Harbor Foods',              policy: '—',                  lob: '—',                   version: 1, size: '42 KB',  uploaded: '2026-04-03', uploadedBy: 'Client Upload',  status: 'Active',            statusColor: 'green', expires: '—',           confidentiality: 'Internal',  signers: 1, signed: 1 },
  { id: 'DOC-10473', name: 'COI — Apex Expiring.pdf',                 category: 'policy',    type: 'COI',              client: 'Apex Industries',           policy: 'CNA-GL-2025-33102',  lob: 'General Liability',   version: 1, size: '276 KB', uploaded: '2025-04-20', uploadedBy: 'Mike Torres',    status: 'Expiring',          statusColor: 'amber', expires: '2026-05-01',  confidentiality: 'Shared',    signers: 1, signed: 1 },
  { id: 'DOC-10472', name: 'Quote — AMTrust GL Coastal.pdf',          category: 'carrier',   type: 'Quote',            client: 'Coastal Realty',            policy: '—',                  lob: 'General Liability',   version: 1, size: '412 KB', uploaded: '2026-04-02', uploadedBy: 'Lisa Park',      status: 'Draft',             statusColor: 'gray',  expires: '2026-05-02',  confidentiality: 'Internal',  signers: 0, signed: 0 },
  { id: 'DOC-10471', name: 'Welcome Kit — TechCorp.pdf',              category: 'marketing', type: 'Welcome Kit',      client: 'TechCorp Inc',              policy: '—',                  lob: 'Cyber',               version: 1, size: '3.2 MB', uploaded: '2026-03-29', uploadedBy: 'Sarah Chen',     status: 'Active',            statusColor: 'green', expires: '—',           confidentiality: 'Shared',    signers: 0, signed: 0 },
  { id: 'DOC-10470', name: 'FNOL — Data Breach DataCore.pdf',         category: 'claims',    type: 'FNOL',             client: 'DataCore Inc',              policy: 'CNA-CYB-2024-22093', lob: 'Cyber',               version: 2, size: '1.1 MB', uploaded: '2026-03-28', uploadedBy: 'David Kim',      status: 'Pending Review',    statusColor: 'amber', expires: '—',           confidentiality: 'Confidential', signers: 2, signed: 1 },
  { id: 'DOC-10469', name: 'Invoice — Summit Medical Q2.pdf',         category: 'billing',   type: 'Invoice',          client: 'Summit Medical',            policy: 'LIB-PRO-2025-22841', lob: 'Professional Liability', version: 1, size: '84 KB', uploaded: '2026-03-26', uploadedBy: 'Finance Bot',    status: 'Active',            statusColor: 'green', expires: '2026-05-26',  confidentiality: 'Shared',    signers: 0, signed: 0 },
  { id: 'DOC-10468', name: 'Declinations — Hartford BOP.pdf',         category: 'carrier',   type: 'Declination',      client: 'Ridge Builders',            policy: '—',                  lob: 'BOP',                 version: 1, size: '118 KB', uploaded: '2026-03-24', uploadedBy: 'Mike Torres',    status: 'Archived',          statusColor: 'gray',  expires: '—',           confidentiality: 'Internal',  signers: 0, signed: 0 }
];

export const documentDetail = {
  id: 'DOC-10480',
  name: 'Workers Comp Binder 2026-05-01.pdf',
  type: 'Binder',
  category: 'policy',
  client: 'Magnolia Construction LLC',
  policy: 'SEMC-WC-2025-48821',
  lob: 'Workers Comp',
  carrier: 'Liberty Mutual / SEMC',
  size: '820 KB',
  pages: 8,
  version: 2,
  status: 'Pending Signature',
  uploaded: '2026-04-15 09:32 AM',
  uploadedBy: 'Sarah Chen',
  effective: '2026-05-01',
  expires: '2026-04-25 (signature deadline)',
  confidentiality: 'Internal',
  retention: '7 years (CA DOI §2695.5)',
  deletion: '2033-05-01',
  encryption: 'AES-256 at rest · TLS 1.3 in transit',
  lastAccessed: '2026-04-17 14:08',
  permissions: [
    { role: 'Producer (Sarah Chen)', access: 'Owner' },
    { role: 'CSR Team',              access: 'Edit' },
    { role: 'Underwriter (Liberty)', access: 'View' },
    { role: 'Client (Magnolia)',     access: 'Sign' }
  ],
  signers: [
    { name: 'Sarah Chen',         role: 'Producer',   status: 'Signed',  signed: '2026-04-15 09:45', ip: '192.168.10.22', method: 'Click-to-sign' },
    { name: 'Marc Henderson',     role: 'Underwriter',status: 'Sent',    signed: '—',                ip: '—',             method: '—' },
    { name: 'James Reynolds',     role: 'Client',     status: 'Viewed',  signed: '—',                ip: '72.14.188.4',   method: '—' }
  ],
  versions: [
    { v: 2, date: '2026-04-15', by: 'Sarah Chen',  change: 'Updated effective date to 2026-05-01 per UW request' },
    { v: 1, date: '2026-04-11', by: 'Sarah Chen',  change: 'Initial binder generated from quote QT-48821' }
  ],
  auditTrail: [
    { ts: '2026-04-17 14:08', actor: 'James Reynolds (Client)',    event: 'Viewed via portal link',  ip: '72.14.188.4' },
    { ts: '2026-04-15 10:02', actor: 'DocuSign Envelope',          event: 'Envelope sent to 3 signers', ip: '—' },
    { ts: '2026-04-15 09:45', actor: 'Sarah Chen',                 event: 'Signed as Producer',      ip: '192.168.10.22' },
    { ts: '2026-04-15 09:32', actor: 'Sarah Chen',                 event: 'Uploaded v2',             ip: '192.168.10.22' },
    { ts: '2026-04-11 16:20', actor: 'System',                     event: 'Generated from template ACORD-Binder-v2', ip: '—' }
  ],
  metadata: [
    { k: 'Policy Number',    v: 'SEMC-WC-2025-48821' },
    { k: 'LOB',              v: 'Workers Comp' },
    { k: 'Effective Date',   v: '2026-05-01' },
    { k: 'Expiration Date',  v: '2027-05-01' },
    { k: 'Premium',          v: '$184,700' },
    { k: 'State',            v: 'CA' },
    { k: 'Red-Flag',         v: 'None' },
    { k: 'Exposure Class',   v: 'Class 5403 — Carpentry' }
  ]
};

export const documentChecklist = [
  { client: 'Magnolia Construction LLC', policy: 'SEMC-WC-2025-48821', owner: 'Sarah Chen',  lob: 'Workers Comp', total: 8, done: 7, items: [
    { name: 'ACORD 125 Application',       status: 'done',    owner: 'Producer',  due: '2026-04-10' },
    { name: 'Loss Runs (3-yr)',            status: 'done',    owner: 'Client',    due: '2026-04-10' },
    { name: 'W-9 Form',                    status: 'done',    owner: 'Client',    due: '2026-04-10' },
    { name: 'Quote Proposal',              status: 'done',    owner: 'Producer',  due: '2026-04-12' },
    { name: 'Binder',                      status: 'done',    owner: 'Producer',  due: '2026-04-15' },
    { name: 'Signed Binder',               status: 'pending', owner: 'Client',    due: '2026-04-25' },
    { name: 'TRIA Election Form',          status: 'done',    owner: 'Client',    due: '2026-04-25' },
    { name: 'COI to Landlord',             status: 'done',    owner: 'CSR',       due: '2026-05-01' }
  ]},
  { client: 'Apex Industries', policy: 'CNA-GL-2025-33102', owner: 'Mike Torres', lob: 'General Liability', total: 6, done: 4, items: [
    { name: 'ACORD 125 Application',       status: 'done',    owner: 'Producer',  due: '2026-04-01' },
    { name: 'Loss Runs',                   status: 'done',    owner: 'Client',    due: '2026-04-01' },
    { name: 'Renewal Questionnaire',       status: 'pending', owner: 'Client',    due: '2026-04-20' },
    { name: 'Quote Proposal',              status: 'done',    owner: 'Producer',  due: '2026-04-08' },
    { name: 'Signed Renewal Offer',        status: 'pending', owner: 'Client',    due: '2026-04-28' },
    { name: 'COI — Landlord Update',       status: 'done',    owner: 'CSR',       due: '2026-04-15' }
  ]},
  { client: 'TechCorp Inc', policy: 'CNA-CYB-2026-88102', owner: 'Sarah Chen', lob: 'Cyber', total: 7, done: 5, items: [
    { name: 'Cyber Questionnaire',         status: 'done',    owner: 'Client',    due: '2026-03-28' },
    { name: 'Security Audit Summary',      status: 'done',    owner: 'Client',    due: '2026-03-30' },
    { name: 'Privacy Policy',              status: 'done',    owner: 'Client',    due: '2026-03-30' },
    { name: 'ACORD 125',                   status: 'done',    owner: 'Producer',  due: '2026-04-01' },
    { name: 'Quote Proposal',              status: 'done',    owner: 'Producer',  due: '2026-04-02' },
    { name: 'Signed Binder',               status: 'pending', owner: 'Client',    due: '2026-04-22' },
    { name: 'Welcome Kit Delivered',       status: 'pending', owner: 'CSR',       due: '2026-05-01' }
  ]}
];

export const documentEnvelopes = [
  { id: 'ENV-8842', doc: 'DOC-10480', docName: 'Workers Comp Binder', client: 'Magnolia Construction LLC', signatory: 'James Reynolds', sent: '2026-04-15 10:02', viewed: '2026-04-17 14:08', expires: '2026-04-25', status: 'Viewed',   provider: 'DocuSign' },
  { id: 'ENV-8841', doc: 'DOC-10477', docName: 'Endorsement — Add Loc', client: 'Magnolia Construction LLC', signatory: 'James Reynolds', sent: '2026-04-08 11:14', viewed: '—',                expires: '2026-04-22', status: 'Sent',     provider: 'DocuSign' },
  { id: 'ENV-8840', doc: 'DOC-10472', docName: 'Coastal Realty Quote', client: 'Coastal Realty',            signatory: 'Lena Park',       sent: '2026-04-02 15:22', viewed: '2026-04-03 09:40', expires: '2026-05-02', status: 'Viewed',   provider: 'Adobe Sign' },
  { id: 'ENV-8839', doc: 'DOC-10470', docName: 'FNOL DataCore',         client: 'DataCore Inc',              signatory: 'Ross Patel',      sent: '2026-03-28 09:48', viewed: '2026-03-28 13:10', expires: '2026-04-28', status: 'In Progress', provider: 'Built-in' },
  { id: 'ENV-8838', doc: 'DOC-10482', docName: 'ACORD 125 — Magnolia',  client: 'Magnolia Construction LLC', signatory: 'James Reynolds', sent: '2026-04-12 08:10', viewed: '2026-04-12 09:22', expires: '—',          status: 'Signed',   provider: 'DocuSign', signed: '2026-04-12 09:45' },
  { id: 'ENV-8837', doc: 'DOC-10475', docName: 'Privacy Notice TechCorp',client: 'TechCorp Inc',             signatory: 'Alex Kim',        sent: '2026-04-04 10:05', viewed: '2026-04-04 10:30', expires: '—',          status: 'Signed',   provider: 'DocuSign', signed: '2026-04-04 10:45' }
];

export const documentAutomatedTasks = [
  { id: 'T-DOC-204', task: 'Request missing ACORD application',       entity: 'Ridge Builders',        due: '2026-04-20', owner: 'Mike Torres', priority: 'High',   status: 'Open' },
  { id: 'T-DOC-203', task: 'Send e-signature request for endorsement',entity: 'Magnolia Construction', due: '2026-04-18', owner: 'Sarah Chen',  priority: 'High',   status: 'In Progress' },
  { id: 'T-DOC-202', task: 'Follow up on unsigned binder',            entity: 'Magnolia Construction', due: '2026-04-22', owner: 'Sarah Chen',  priority: 'Urgent', status: 'Open' },
  { id: 'T-DOC-201', task: 'Notify 30 days before COI expiration',    entity: 'Apex Industries',       due: '2026-04-01', owner: 'Mike Torres', priority: 'Med',    status: 'Done' },
  { id: 'T-DOC-200', task: 'Archive expired policy documents',        entity: '12 expired policies',   due: '2026-04-25', owner: 'Compliance',  priority: 'Low',    status: 'Open' },
  { id: 'T-DOC-199', task: 'Compliance review — signed disclosures',  entity: 'Q1 onboarding batch',   due: '2026-04-19', owner: 'Compliance',  priority: 'Med',    status: 'In Progress' }
];

export const documentAnalytics = {
  completion_by_producer: [
    { name: 'Sarah Chen', rate: 96, avg_days: 4.1, packages: 38 },
    { name: 'Mike Torres', rate: 88, avg_days: 6.3, packages: 26 },
    { name: 'Lisa Park',  rate: 93, avg_days: 5.0, packages: 25 },
    { name: 'David Kim',  rate: 81, avg_days: 7.8, packages: 17 }
  ],
  esign_funnel: [
    { stage: 'Sent',        count: 328, pct: 100 },
    { stage: 'Viewed',      count: 301, pct: 92 },
    { stage: 'Started',     count: 284, pct: 87 },
    { stage: 'Completed',   count: 271, pct: 83 },
    { stage: 'Signed',      count: 268, pct: 82 }
  ],
  time_to_package: [
    { range: '< 3 days',    count: 58, pct: 44 },
    { range: '3–7 days',    count: 42, pct: 32 },
    { range: '7–14 days',   count: 22, pct: 17 },
    { range: '14+ days',    count: 10, pct: 7  }
  ],
  storage: [
    { tier: 'Active',  gb: 92,  cost: '$184/mo' },
    { tier: 'Archive', gb: 42,  cost: '$21/mo' },
    { tier: 'Cold',    gb: 8,   cost: '$2/mo' }
  ],
  top_doc_types: [
    { type: 'COI',                count: 1284, bottleneck: false },
    { type: 'Binder',             count: 612,  bottleneck: false },
    { type: 'ACORD 125',          count: 486,  bottleneck: false },
    { type: 'Endorsement',        count: 402,  bottleneck: true  },
    { type: 'Loss Run',           count: 312,  bottleneck: false },
    { type: 'Commission Stmt',    count: 284,  bottleneck: false },
    { type: 'FNOL',               count: 198,  bottleneck: false }
  ],
  compliance_score: {
    overall: 96,
    subs: [
      { k: 'Retention Policy Automation', v: 100 },
      { k: 'e-Signature Audit Trail',     v: 98  },
      { k: 'Signed Disclosures Current',  v: 94  },
      { k: 'Retention Deletion On-Time',  v: 92  }
    ]
  },
  retention: [
    { state: 'CA', years: 7,  docs: 1820, compliant: true },
    { state: 'NY', years: 6,  docs: 742,  compliant: true },
    { state: 'TX', years: 5,  docs: 618,  compliant: true },
    { state: 'FL', years: 5,  docs: 480,  compliant: false },
    { state: 'IL', years: 7,  docs: 312,  compliant: true }
  ]
};

// ─── Prospects & Leads Module Data ───
export const prospectKPIs = [
  { label: 'Open Prospects', value: '218' },
  { label: 'Hot Leads (>80)', value: '34' },
  { label: 'Pipeline Value', value: '$2.84M' },
  { label: 'Avg Lead→Close', value: '18d' },
  { label: 'Conversion Rate', value: '27%' },
  { label: 'Overdue Follow-ups', value: '11', warning: true }
];

export const prospectStages = [
  { key: 'Prospect',      color: 'gray',  prob: 10 },
  { key: 'Lead',          color: 'blue',  prob: 25 },
  { key: 'Qualified',     color: 'blue',  prob: 40 },
  { key: 'Quoted',        color: 'amber', prob: 55 },
  { key: 'Proposal Sent', color: 'amber', prob: 70 },
  { key: 'Negotiation',   color: 'amber', prob: 85 },
  { key: 'Won',           color: 'green', prob: 100 },
  { key: 'Lost',          color: 'red',   prob: 0  }
];

export const prospects = [
  { id: 'PRO-2041', company: 'Westshore Logistics',      contact: 'Emma Blake',     email: 'emma@westshore.com',   phone: '(415) 555-0184', source: 'Referral',        campaign: 'Partner — Kempers',   industry: 'Transportation', naics: '484110', revenue: '$18M',  employees: 48,  state: 'CA', lob: ['Commercial Auto','WC'], current_carrier: 'Progressive', exp_date: '2026-06-15', stage: 'Negotiation',   prob: 85, score: 92, value: 168000, producer: 'Sarah Chen',  owner_id: 'sc',  received: '2026-03-28', last_activity: '2026-04-17', next_action: 'Send final proposal',         next_due: '2026-04-19', tags: ['Hot','Referral'],        notes: '5-year operating history, clean losses. Decision maker ready.' },
  { id: 'PRO-2040', company: 'Helix Biotech',            contact: 'David Wu',       email: 'dwu@helixbio.com',     phone: '(408) 555-0122', source: 'Website',         campaign: 'Google Ads — Cyber',  industry: 'Biotech',        naics: '541714', revenue: '$42M',  employees: 112, state: 'CA', lob: ['Cyber','D&O','GL'],      current_carrier: 'Chubb',       exp_date: '2026-05-30', stage: 'Proposal Sent', prob: 70, score: 88, value: 420000, producer: 'Sarah Chen',  owner_id: 'sc',  received: '2026-04-02', last_activity: '2026-04-16', next_action: 'Follow up on proposal',       next_due: '2026-04-18', tags: ['Hot','High Value'],      notes: 'SOC2 certified, strong security posture.' },
  { id: 'PRO-2039', company: 'Summit Dental Group',      contact: 'Dr. Priya Shah', email: 'priya@summitdent.com', phone: '(916) 555-0177', source: 'Trade Show',      campaign: 'CDA Conference 2026', industry: 'Healthcare',     naics: '621210', revenue: '$8.4M', employees: 34,  state: 'CA', lob: ['Professional','BOP','WC'], current_carrier: 'CNA',       exp_date: '2026-07-01', stage: 'Quoted',        prob: 55, score: 78, value: 56000,  producer: 'Lisa Park',   owner_id: 'lp',  received: '2026-04-05', last_activity: '2026-04-15', next_action: 'Schedule needs analysis call',next_due: '2026-04-20', tags: ['Warm'],                 notes: '3 locations. Looking to consolidate carriers.' },
  { id: 'PRO-2038', company: 'Cascade HVAC Services',    contact: 'Ramon Ortiz',    email: 'ramon@cascadehvac.com',phone: '(503) 555-0199', source: 'Referral',        campaign: 'Client — Magnolia',   industry: 'Construction',   naics: '238220', revenue: '$12M',  employees: 62,  state: 'OR', lob: ['WC','GL','Auto'],        current_carrier: 'AMTrust',     exp_date: '2026-08-10', stage: 'Qualified',     prob: 40, score: 82, value: 94000,  producer: 'Sarah Chen',  owner_id: 'sc',  received: '2026-04-08', last_activity: '2026-04-14', next_action: 'Request loss runs',           next_due: '2026-04-19', tags: ['Hot','Referral'],       notes: 'Referred by Magnolia. High intent.' },
  { id: 'PRO-2037', company: 'Neon Brewing Co.',         contact: 'Jill Nguyen',    email: 'jill@neonbrew.com',    phone: '(510) 555-0156', source: 'Website',         campaign: 'Organic Search',      industry: 'Manufacturing',  naics: '312120', revenue: '$6.2M', employees: 28,  state: 'CA', lob: ['Liquor Liab','GL','Property'], current_carrier: 'Liberty', exp_date: '2026-09-01', stage: 'Lead',          prob: 25, score: 64, value: 34000,  producer: 'Mike Torres', owner_id: 'mt',  received: '2026-04-12', last_activity: '2026-04-13', next_action: 'Discovery call',              next_due: '2026-04-19', tags: ['Warm'],                 notes: 'Growing brewery, 2 taprooms planned.' },
  { id: 'PRO-2036', company: 'Fleet Flex Rentals',       contact: 'Marcus Lee',     email: 'marcus@fleetflex.com', phone: '(213) 555-0141', source: 'Cold Outreach',   campaign: 'Q2 SDR Outbound',     industry: 'Auto Rental',    naics: '532111', revenue: '$22M',  employees: 54,  state: 'CA', lob: ['Commercial Auto','GL'],  current_carrier: 'Travelers',   exp_date: '2026-10-15', stage: 'Prospect',      prob: 10, score: 48, value: 0,      producer: 'Mike Torres', owner_id: 'mt',  received: '2026-04-15', last_activity: '2026-04-15', next_action: 'Initial discovery email',     next_due: '2026-04-18', tags: ['Cold'],                 notes: 'No current contact — outbound only.' },
  { id: 'PRO-2035', company: 'Bright Horizon Academy',   contact: 'Dana Carter',    email: 'dana@brighthorizon.ed',phone: '(415) 555-0133', source: 'Referral',        campaign: 'Partner — EduBenefit',industry: 'Education',      naics: '611110', revenue: '$4.8M', employees: 42,  state: 'CA', lob: ['WC','Professional','Property'], current_carrier: 'Nationwide', exp_date: '2026-06-30', stage: 'Won',           prob: 100,score: 91, value: 72000,  producer: 'Sarah Chen',  owner_id: 'sc',  received: '2026-03-10', last_activity: '2026-04-10', next_action: 'Hand-off to onboarding',      next_due: '2026-04-18', tags: ['Won'],                  notes: 'Closed — moving to onboarding this week.' },
  { id: 'PRO-2034', company: 'Cipher Security Labs',     contact: 'Alex Kim',       email: 'alex@cipherlabs.io',   phone: '(650) 555-0168', source: 'Carrier Referral',campaign: 'CNA Referral Q2',     industry: 'Tech',           naics: '541512', revenue: '$15M',  employees: 48,  state: 'CA', lob: ['Cyber','D&O','Professional'], current_carrier: 'AIG',      exp_date: '2026-07-22', stage: 'Qualified',     prob: 40, score: 86, value: 148000, producer: 'Sarah Chen',  owner_id: 'sc',  received: '2026-04-06', last_activity: '2026-04-16', next_action: 'Underwriting meeting',        next_due: '2026-04-22', tags: ['Hot','Carrier Ref'],    notes: 'Carrier appetite confirmed. Fast-track.' },
  { id: 'PRO-2033', company: 'Quickpath Couriers',       contact: 'Jenny Ha',       email: 'jenny@quickpath.com',  phone: '(408) 555-0194', source: 'Event',           campaign: 'PIA Webinar Apr',     industry: 'Logistics',      naics: '492110', revenue: '$9.8M', employees: 72,  state: 'CA', lob: ['Auto','WC','GL'],        current_carrier: 'Progressive', exp_date: '2026-11-08', stage: 'Lead',          prob: 25, score: 58, value: 48000,  producer: 'Mike Torres', owner_id: 'mt',  received: '2026-04-13', last_activity: '2026-04-14', next_action: 'Send discovery questionnaire',next_due: '2026-04-19', tags: ['Warm'],                 notes: '72 drivers. Past loss concerns.' },
  { id: 'PRO-2032', company: 'Grove Street Eatery',      contact: 'Tomás Reyes',    email: 'tom@groveeatery.com',  phone: '(818) 555-0122', source: 'Website',         campaign: 'Organic Search',      industry: 'Restaurant',     naics: '722511', revenue: '$2.4M', employees: 18,  state: 'CA', lob: ['BOP','WC','Liquor'],     current_carrier: 'Hartford',    exp_date: '2026-05-20', stage: 'Lost',          prob: 0,  score: 42, value: 0,      producer: 'Lisa Park',   owner_id: 'lp',  received: '2026-03-20', last_activity: '2026-04-04', next_action: '30-day nurture drip',         next_due: '2026-05-04', tags: ['Lost','Nurture'],       notes: 'Lost to incumbent. Price sensitive.', lost_reason: 'Price' },
  { id: 'PRO-2031', company: 'Steelhead Machining',      contact: 'Carl Weaver',    email: 'carl@steelhead.com',   phone: '(714) 555-0188', source: 'Cold Outreach',   campaign: 'Q2 SDR Outbound',     industry: 'Manufacturing',  naics: '332710', revenue: '$14M',  employees: 58,  state: 'CA', lob: ['WC','Property','GL'],    current_carrier: 'Berkshire',   exp_date: '2026-12-01', stage: 'Proposal Sent', prob: 70, score: 76, value: 118000, producer: 'Sarah Chen',  owner_id: 'sc',  received: '2026-03-25', last_activity: '2026-04-12', next_action: 'Proposal follow-up',          next_due: '2026-04-18', tags: ['Warm'],                 notes: 'Multi-site, complex WC exposure.' },
  { id: 'PRO-2030', company: 'Aurora Wellness Clinics',  contact: 'Dr. Nina Patel', email: 'nina@aurorawell.com',  phone: '(415) 555-0192', source: 'Trade Show',      campaign: 'CMA Health Expo',     industry: 'Healthcare',     naics: '621111', revenue: '$6.8M', employees: 32,  state: 'CA', lob: ['Professional','BOP','Cyber'], current_carrier: 'The Doctors', exp_date: '2026-08-15', stage: 'Quoted',        prob: 55, score: 84, value: 92000,  producer: 'Lisa Park',   owner_id: 'lp',  received: '2026-04-04', last_activity: '2026-04-15', next_action: 'Present quote comparison',    next_due: '2026-04-20', tags: ['Hot'],                  notes: 'Expanding 3rd location Q3.' },
  { id: 'PRO-2029', company: 'GreenLeaf Landscaping',    contact: 'Rob Delgado',    email: 'rob@greenleaf.com',    phone: '(916) 555-0118', source: 'Website',         campaign: 'Facebook Ads',        industry: 'Services',       naics: '561730', revenue: '$3.2M', employees: 24,  state: 'CA', lob: ['WC','GL','Auto'],        current_carrier: 'AMTrust',     exp_date: '2027-01-10', stage: 'Prospect',      prob: 10, score: 54, value: 0,      producer: 'Mike Torres', owner_id: 'mt',  received: '2026-04-16', last_activity: '2026-04-16', next_action: 'First contact email',         next_due: '2026-04-18', tags: ['Cold'],                 notes: 'Seasonal business. Large workforce.' },
  { id: 'PRO-2028', company: 'Lakeshore Food Mart',      contact: 'Priya Menon',    email: 'priya@lakeshoremart.com',phone:'(510) 555-0148',source: 'Cold Outreach',   campaign: 'Q1 SDR',              industry: 'Retail',         naics: '445110', revenue: '$4.6M', employees: 38,  state: 'CA', lob: ['BOP','WC'],              current_carrier: 'State Farm',  exp_date: '2026-07-12', stage: 'Lost',          prob: 0,  score: 48, value: 0,      producer: 'Mike Torres', owner_id: 'mt',  received: '2026-03-08', last_activity: '2026-03-29', next_action: 'Suppressed',                  next_due: '—',         tags: ['Lost'],                 notes: 'Not ready to switch.', lost_reason: 'Timing' }
];

export const prospectDetail = {
  id: 'PRO-2041',
  company: 'Westshore Logistics',
  dba: 'Westshore Express',
  industry: 'Transportation & Trucking',
  naics: '484110',
  naics_desc: 'General Freight Trucking, Local',
  revenue: '$18M',
  employees: 48,
  state: 'CA',
  established: 2018,
  website: 'westshorelogistics.com',
  linkedin: 'linkedin.com/company/westshore-logistics',
  primary_contact: { name: 'Emma Blake', title: 'Operations Director', email: 'emma@westshore.com', phone: '(415) 555-0184', decision_maker: true, buying_role: 'Primary Decision Maker' },
  other_contacts: [
    { name: 'Carlos Rivera',  title: 'CFO',   email: 'carlos@westshore.com',  phone: '(415) 555-0189', decision_maker: true,  buying_role: 'Financial Approver' },
    { name: 'Janet Morris',   title: 'HR Manager', email: 'janet@westshore.com', phone: '(415) 555-0190', decision_maker: false, buying_role: 'Influencer (WC)' }
  ],
  score: 92,
  score_breakdown: [
    { factor: 'Demographic Fit (industry, size, state)',  weight: 25, value: 24 },
    { factor: 'Behavioral (website visits, email opens)', weight: 15, value: 14 },
    { factor: 'Financial Profile (revenue, growth)',      weight: 15, value: 14 },
    { factor: 'Insurance Profile (carrier exp, LOBs)',    weight: 20, value: 19 },
    { factor: 'Referral Quality / Source',                weight: 15, value: 15 },
    { factor: 'Decision Authority Identified',            weight: 10, value:  6 }
  ],
  stage: 'Negotiation',
  prob: 85,
  value: 168000,
  source: 'Referral',
  campaign: 'Partner — Kempers',
  producer: 'Sarah Chen',
  received: '2026-03-28',
  next_action: 'Send final proposal',
  next_due: '2026-04-19',
  insurance_profile: {
    current_carrier: 'Progressive Commercial',
    exp_date: '2026-06-15',
    lob_needed: ['Commercial Auto','WC','GL','Umbrella'],
    coverage_gaps: ['No Cyber','Umbrella limit insufficient'],
    prior_claims: '2 (auto, both < $25k, closed)',
    loss_ratio_3yr: '18%',
    fleet_size: 28,
    annual_miles: '1.8M',
    hazmat: false
  },
  qualification: [
    { q: 'Primary motivation to switch?',            a: 'Better service + bundled umbrella' },
    { q: 'Expected effective date?',                 a: '2026-06-15 (current exp)' },
    { q: 'Target premium budget?',                   a: '$150–180k total program' },
    { q: 'Decision timeline?',                       a: '30 days — board reviews May 15' },
    { q: 'Other brokers competing?',                 a: 'One — incumbent (Marsh)' },
    { q: 'Must-have carriers?',                      a: 'A.M. Best A-rated or better' },
    { q: 'Safety / risk management program?',        a: 'Yes — Samsara telematics fleet-wide' }
  ],
  activities: [
    { ts: '2026-04-17 15:20', type: 'Email',   actor: 'Sarah Chen',  note: 'Sent revised proposal with Liberty + umbrella option' },
    { ts: '2026-04-15 10:05', type: 'Meeting', actor: 'Sarah Chen',  note: 'Needs analysis call with Emma & Carlos — 45min' },
    { ts: '2026-04-12 14:30', type: 'Call',    actor: 'Sarah Chen',  note: 'Discovery call w/ Emma (Ops). Strong fit.' },
    { ts: '2026-04-10 09:15', type: 'Email',   actor: 'System',      note: 'Discovery questionnaire sent — completed same day' },
    { ts: '2026-04-08 11:00', type: 'Task',    actor: 'Auto',        note: 'Assigned to Sarah Chen (territory + Auto LOB expertise)' },
    { ts: '2026-03-28 08:40', type: 'Lead',    actor: 'System',      note: 'Lead captured — referral from Kempers, auto-scored 92' }
  ],
  tasks: [
    { task: 'Send final proposal v3',           due: '2026-04-19', owner: 'Sarah Chen', status: 'Open',         priority: 'Urgent' },
    { task: 'Schedule signing call w/ CFO',     due: '2026-04-21', owner: 'Sarah Chen', status: 'Open',         priority: 'High'   },
    { task: 'Prep broker-of-record letter',     due: '2026-04-20', owner: 'CSR Team',   status: 'Open',         priority: 'Med'    },
    { task: 'Confirm A.M. Best ratings slide',  due: '2026-04-18', owner: 'Sarah Chen', status: 'Done',         priority: 'Med'    }
  ],
  documents: [
    { name: 'Westshore_Proposal_v3.pdf',   type: 'Proposal',        added: '2026-04-17' },
    { name: 'Loss_Runs_2023-2025.pdf',     type: 'Loss Run',        added: '2026-04-12' },
    { name: 'ACORD_125_Draft.pdf',         type: 'Application',     added: '2026-04-10' },
    { name: 'W-9_Westshore.pdf',           type: 'W-9',             added: '2026-04-10' }
  ],
  checklist: [
    { name: 'First contact within 48h',             done: true,  owner: 'Producer' },
    { name: 'Duplicate check passed',               done: true,  owner: 'System' },
    { name: 'Discovery questionnaire completed',    done: true,  owner: 'Client' },
    { name: 'Needs analysis meeting',               done: true,  owner: 'Producer' },
    { name: 'Loss runs collected',                  done: true,  owner: 'Client' },
    { name: 'Proposal generated',                   done: true,  owner: 'Producer' },
    { name: 'Decision-maker identified',            done: true,  owner: 'Producer' },
    { name: 'Verbal commitment',                    done: false, owner: 'Producer' },
    { name: 'Signed BOR letter',                    done: false, owner: 'Client' }
  ],
  suggestions: [
    'This prospect matches your top-performing book (Transportation $10–25M) with 74% historical close rate.',
    'Fast-track to Onboarding on verbal: all prerequisites are met except BOR letter.',
    'Similar risks placed with Liberty Mutual at 12.8–13.2% rate.'
  ]
};

export const prospectAutomatedTasks = [
  { id: 'T-LEAD-501', task: 'Call new lead within 5 minutes (score 92)', entity: 'PRO-2029 GreenLeaf',       due: '2026-04-18 17:45', owner: 'Mike Torres',  priority: 'Urgent', status: 'Open' },
  { id: 'T-LEAD-502', task: 'Send discovery questionnaire',              entity: 'PRO-2037 Neon Brewing',     due: '2026-04-19',       owner: 'Mike Torres',  priority: 'High',   status: 'Open' },
  { id: 'T-LEAD-503', task: 'Schedule needs analysis meeting',           entity: 'PRO-2034 Cipher Security',  due: '2026-04-22',       owner: 'Sarah Chen',   priority: 'High',   status: 'In Progress' },
  { id: 'T-LEAD-504', task: 'Create quote opportunity',                  entity: 'PRO-2038 Cascade HVAC',     due: '2026-04-20',       owner: 'Sarah Chen',   priority: 'Med',    status: 'Open' },
  { id: 'T-LEAD-505', task: 'Follow up on lost lead in 30 days',         entity: 'PRO-2032 Grove Eatery',     due: '2026-05-04',       owner: 'Auto-nurture', priority: 'Low',    status: 'Open' },
  { id: 'T-LEAD-506', task: 'Stalled opportunity — manager notified',    entity: 'PRO-2031 Steelhead',        due: '2026-04-18',       owner: 'Sales Mgr',    priority: 'High',   status: 'In Progress' }
];

export const prospectLostReasons = [
  { reason: 'Price',                      count: 22, pct: 31, avg_value: 42000, recoverable: true  },
  { reason: 'Stayed with incumbent',      count: 14, pct: 20, avg_value: 58000, recoverable: true  },
  { reason: 'Timing — not ready',         count: 11, pct: 16, avg_value: 36000, recoverable: true  },
  { reason: 'Coverage gaps / appetite',   count:  8, pct: 11, avg_value: 72000, recoverable: false },
  { reason: 'Chose another broker',       count:  7, pct: 10, avg_value: 84000, recoverable: false },
  { reason: 'Business closed / paused',   count:  5, pct:  7, avg_value: 28000, recoverable: false },
  { reason: 'No response',                count:  4, pct:  5, avg_value: 24000, recoverable: true  }
];

export const prospectAnalytics = {
  conversion_funnel: [
    { stage: 'Prospect',      count: 412, pct: 100 },
    { stage: 'Lead',          count: 286, pct: 69  },
    { stage: 'Qualified',     count: 172, pct: 42  },
    { stage: 'Quoted',        count: 124, pct: 30  },
    { stage: 'Proposal Sent', count:  94, pct: 23  },
    { stage: 'Negotiation',   count:  58, pct: 14  },
    { stage: 'Won',           count:  42, pct: 10  }
  ],
  time_to_convert: [
    { source: 'Referral',         avg_days: 14, rate: 42 },
    { source: 'Website',          avg_days: 22, rate: 24 },
    { source: 'Trade Show',       avg_days: 28, rate: 32 },
    { source: 'Carrier Referral', avg_days: 12, rate: 48 },
    { source: 'Cold Outreach',    avg_days: 38, rate: 14 },
    { source: 'Event',            avg_days: 25, rate: 28 }
  ],
  pipeline_by_stage: [
    { stage: 'Prospect',      value: 320000,  count: 42 },
    { stage: 'Lead',          value: 520000,  count: 38 },
    { stage: 'Qualified',     value: 680000,  count: 32 },
    { stage: 'Quoted',        value: 580000,  count: 26 },
    { stage: 'Proposal Sent', value: 468000,  count: 18 },
    { stage: 'Negotiation',   value: 272000,  count: 12 }
  ],
  by_producer: [
    { name: 'Sarah Chen',  open: 48, won_30d: 14, win_rate: 34, pipeline: 1_420_000, avg_days: 16 },
    { name: 'Lisa Park',   open: 32, won_30d: 10, win_rate: 29, pipeline: 780_000,   avg_days: 19 },
    { name: 'Mike Torres', open: 42, won_30d: 8,  win_rate: 21, pipeline: 620_000,   avg_days: 24 },
    { name: 'David Kim',   open: 26, won_30d: 6,  win_rate: 24, pipeline: 410_000,   avg_days: 22 }
  ],
  source_roi: [
    { source: 'Carrier Referral', leads: 62,  converted: 30, cost: 0,      revenue: 520000,  roi: '∞'    },
    { source: 'Referral',         leads: 108, converted: 45, cost: 12000,  revenue: 1240000, roi: '10230%' },
    { source: 'Trade Show',       leads: 84,  converted: 27, cost: 38000,  revenue: 620000,  roi: '1532%'  },
    { source: 'Website',          leads: 128, converted: 31, cost: 24000,  revenue: 480000,  roi: '1900%'  },
    { source: 'Cold Outreach',    leads: 176, converted: 25, cost: 42000,  revenue: 380000,  roi: '804%'   },
    { source: 'Event',            leads: 52,  converted: 15, cost: 18000,  revenue: 260000,  roi: '1344%'  }
  ],
  score_accuracy: [
    { band: '90–100', predicted_win: 78, actual_win: 74 },
    { band: '80–89',  predicted_win: 58, actual_win: 61 },
    { band: '70–79',  predicted_win: 38, actual_win: 42 },
    { band: '60–69',  predicted_win: 22, actual_win: 24 },
    { band: '50–59',  predicted_win: 10, actual_win: 12 },
    { band: '< 50',   predicted_win:  4, actual_win:  6 }
  ],
  activity_completion: [
    { name: 'Sarah Chen',  scheduled: 64, completed: 61, rate: 95 },
    { name: 'Lisa Park',   scheduled: 42, completed: 38, rate: 90 },
    { name: 'Mike Torres', scheduled: 58, completed: 48, rate: 83 },
    { name: 'David Kim',   scheduled: 32, completed: 24, rate: 75 }
  ]
};

export const prospectAIChat = [
  { role: 'ai',   text: 'Hi! I can help you qualify leads, prioritize follow-ups, or suggest next-best-actions. Try: "Show my hottest leads that haven\'t been contacted in 3 days."' },
  { role: 'user', text: 'Show my hottest leads that haven\'t been contacted in 3 days.' },
  { role: 'ai',   text: 'Found 2 high-score leads overdue for follow-up:\n• **PRO-2038 Cascade HVAC** — Score 82 · last contact 2026-04-14 · owed: loss runs request\n• **PRO-2040 Helix Biotech** — Score 88 · last contact 2026-04-16 · owed: proposal follow-up\n\nWant me to schedule calls with both for tomorrow morning?' }
];

// ─── Market Routing Module Data ───
export const marketKPIs = [
  { label: 'Open Submissions', value: '34' },
  { label: 'Auto-Routed (30d)', value: '82%' },
  { label: 'Avg Time-to-Quote', value: '3.8h' },
  { label: 'Hit Ratio', value: '41%' },
  { label: 'Active Carriers', value: '47' },
  { label: 'Declined (30d)', value: '18', warning: true }
];

export const marketStatuses = ['Received','Data Validated','Appetite Scored','Routed','Quoted','Declined','Withdrawn','Bound','Placed'];

export const marketSubmissions = [
  { id: 'SUB-92104', client: 'Magnolia Construction LLC', lob: 'Workers Comp',         premium: 184700, state: 'CA', naics: '238220', routed: 5, quoted: 3, declined: 1, pending: 1, best_rate: '12.4%', status: 'Quoted',          statusColor: 'green',  received: '2026-04-12', producer: 'Sarah Chen',  appetite: 92, mode: 'Auto', tier: 'Standard' },
  { id: 'SUB-92103', client: 'DataCore Inc',              lob: 'Cyber',                premium: 256100, state: 'TX', naics: '541512', routed: 6, quoted: 4, declined: 2, pending: 0, best_rate: '8.1%',  status: 'Quoted',          statusColor: 'green',  received: '2026-04-14', producer: 'Sarah Chen',  appetite: 88, mode: 'Auto', tier: 'Preferred' },
  { id: 'SUB-92102', client: 'Apex Industries',           lob: 'General Liability',    premium: 52000,  state: 'CA', naics: '332999', routed: 4, quoted: 2, declined: 0, pending: 2, best_rate: '—',     status: 'Routed',          statusColor: 'amber',  received: '2026-04-15', producer: 'Mike Torres', appetite: 78, mode: 'Auto', tier: 'Standard' },
  { id: 'SUB-92101', client: 'Coastal Realty',            lob: 'General Liability',    premium: 38900,  state: 'FL', naics: '531210', routed: 8, quoted: 1, declined: 5, pending: 2, best_rate: '—',     status: 'Appetite Scored', statusColor: 'amber',  received: '2026-04-16', producer: 'Lisa Park',   appetite: 64, mode: 'Manual', tier: 'E&S' },
  { id: 'SUB-92100', client: 'Ridge Builders',            lob: 'Workers Comp',         premium: 93100,  state: 'CA', naics: '236220', routed: 3, quoted: 0, declined: 3, pending: 0, best_rate: '—',     status: 'Declined',        statusColor: 'red',    received: '2026-04-10', producer: 'Mike Torres', appetite: 42, mode: 'Auto', tier: 'E&S' },
  { id: 'SUB-92099', client: 'Summit Medical',            lob: 'Professional Liability',premium: 78500, state: 'NY', naics: '621111', routed: 4, quoted: 3, declined: 0, pending: 1, best_rate: '10.2%', status: 'Bound',           statusColor: 'green',  received: '2026-04-08', producer: 'Sarah Chen',  appetite: 94, mode: 'Auto', tier: 'Preferred' },
  { id: 'SUB-92098', client: 'Harbor Foods',              lob: 'BOP',                  premium: 38200,  state: 'CA', naics: '311421', routed: 3, quoted: 2, declined: 1, pending: 0, best_rate: '11.0%', status: 'Placed',          statusColor: 'green',  received: '2026-04-05', producer: 'Sarah Chen',  appetite: 86, mode: 'Auto', tier: 'Standard' },
  { id: 'SUB-92097', client: 'Valley Logistics',          lob: 'Commercial Auto',      premium: 142800, state: 'CA', naics: '484110', routed: 5, quoted: 2, declined: 2, pending: 1, best_rate: '11.5%', status: 'Routed',          statusColor: 'amber',  received: '2026-04-11', producer: 'Sarah Chen',  appetite: 81, mode: 'Auto', tier: 'Standard' },
  { id: 'SUB-92096', client: 'TechCorp Inc',              lob: 'Cyber',                premium: 89400,  state: 'CA', naics: '541511', routed: 4, quoted: 3, declined: 1, pending: 0, best_rate: '14.5%', status: 'Quoted',          statusColor: 'green',  received: '2026-04-13', producer: 'Sarah Chen',  appetite: 89, mode: 'Auto', tier: 'Preferred' },
  { id: 'SUB-92095', client: 'Peak Fitness Co.',          lob: 'BOP',                  premium: 28400,  state: 'AZ', naics: '713940', routed: 6, quoted: 0, declined: 4, pending: 2, best_rate: '—',     status: 'Withdrawn',       statusColor: 'gray',   received: '2026-04-04', producer: 'Mike Torres', appetite: 58, mode: 'Manual', tier: 'E&S' },
  { id: 'SUB-92094', client: 'Delta Logistics',           lob: 'Commercial Auto',      premium: 142800, state: 'CA', naics: '484110', routed: 5, quoted: 3, declined: 1, pending: 1, best_rate: '11.5%', status: 'Bound',           statusColor: 'green',  received: '2026-04-02', producer: 'Sarah Chen',  appetite: 87, mode: 'Auto', tier: 'Standard' },
  { id: 'SUB-92093', client: 'Blue Ridge Supplies',       lob: 'Workers Comp',         premium: 62400,  state: 'IL', naics: '424410', routed: 3, quoted: 2, declined: 1, pending: 0, best_rate: '12.0%', status: 'Placed',          statusColor: 'green',  received: '2026-03-28', producer: 'Sarah Chen',  appetite: 84, mode: 'Auto', tier: 'Standard' }
];

export const marketSubmissionDetail = {
  id: 'SUB-92104',
  client: 'Magnolia Construction LLC',
  lob: 'Workers Comp',
  state: 'CA',
  naics: '238220',
  naics_desc: 'Plumbing, Heating & Air-Conditioning Contractors',
  premium_target: 184700,
  effective: '2026-05-01',
  producer: 'Sarah Chen',
  received: '2026-04-12 08:22',
  status: 'Quoted',
  completeness: 100,
  red_flags: 0,
  appetite_score: 92,
  exposures: [
    { k: 'Annual Payroll',          v: '$2.4M' },
    { k: 'Employee Count',          v: '38' },
    { k: 'Locations',               v: '3 (CA)' },
    { k: 'Class Code',              v: '5403 Carpentry' },
    { k: 'Experience Mod',          v: '0.92' },
    { k: '3-yr Loss Ratio',         v: '22%' },
    { k: 'Open Claims',             v: '0' },
    { k: 'Prior Declinations',      v: 'None (24 mo)' }
  ],
  timeline: [
    { ts: '2026-04-15 16:40', event: 'Quote received from Liberty Mutual @ 12.4% — best rate' },
    { ts: '2026-04-15 10:12', event: 'Quote received from AMTrust @ 13.1%' },
    { ts: '2026-04-14 18:30', event: 'Quote received from SEMC @ 12.8%' },
    { ts: '2026-04-14 09:05', event: 'Declined — Zurich (capacity exhausted in class)' },
    { ts: '2026-04-13 14:20', event: 'Routed to 5 carriers via API + 1 via portal' },
    { ts: '2026-04-13 11:08', event: 'Appetite scored — 92% fit · Top match: Liberty Mutual' },
    { ts: '2026-04-12 09:50', event: 'Data validated — 100% complete, 0 red flags' },
    { ts: '2026-04-12 08:22', event: 'Submission received from onboarding' }
  ],
  routed_carriers: [
    { carrier: 'Liberty Mutual',  method: 'API',      sent: '2026-04-13 14:20', responded: '2026-04-15 16:40', response_hr: 50.3, appetite: 96, status: 'Quoted',   rate: '12.4%', premium: 22903, note: 'Best quote · 15% schedule credit applied' },
    { carrier: 'AMTrust',         method: 'API',      sent: '2026-04-13 14:20', responded: '2026-04-15 10:12', response_hr: 43.9, appetite: 91, status: 'Quoted',   rate: '13.1%', premium: 24195, note: 'Within underwriting authority' },
    { carrier: 'SEMC / Liberty',  method: 'API',      sent: '2026-04-13 14:20', responded: '2026-04-14 18:30', response_hr: 28.2, appetite: 94, status: 'Quoted',   rate: '12.8%', premium: 23642, note: 'Standard workers comp appetite match' },
    { carrier: 'Zurich',          method: 'API',      sent: '2026-04-13 14:20', responded: '2026-04-14 09:05', response_hr: 18.8, appetite: 72, status: 'Declined', rate: '—',     premium: 0,     note: 'Capacity exhausted — class 5403' },
    { carrier: 'Travelers',       method: 'Portal',   sent: '2026-04-13 14:22', responded: '—',                response_hr: null, appetite: 83, status: 'Pending',   rate: '—',     premium: 0,     note: 'Chase sent 2026-04-17' },
    { carrier: 'Hartford',        method: 'API',      sent: '2026-04-13 14:20', responded: '—',                response_hr: null, appetite: 78, status: 'Pending',   rate: '—',     premium: 0,     note: 'Chase sent 2026-04-17' }
  ],
  recommendations: [
    { carrier: 'Liberty Mutual',  fit: 96, reason: 'Top-quartile appetite for class 5403; 14% avg schedule credit; 92% hit ratio in last 12 mo' },
    { carrier: 'SEMC / Liberty',  fit: 94, reason: 'Sub-carrier variant with matching appetite; shorter quote turnaround (28h vs 50h)' },
    { carrier: 'AMTrust',         fit: 91, reason: 'Strong CA WC book; binding authority up to $250k; competitive rates in 12–14%' }
  ]
};

export const marketAppetiteLibrary = [
  { carrier: 'Liberty Mutual',   tier: 'Preferred', lobs: ['WC','GL','BOP','Auto','Property'], states: 'All 50',     premium_range: '$50k – $5M',   api: true, hit_ratio: 64, avg_time_hr: 18, capacity: '$15M',  status: 'Healthy',  do_not_route: false },
  { carrier: 'SEMC / Liberty',   tier: 'Preferred', lobs: ['WC','GL'],                         states: 'CA,NV,OR,WA',premium_range: '$25k – $2M',   api: true, hit_ratio: 71, avg_time_hr: 16, capacity: '$5M',   status: 'Healthy',  do_not_route: false },
  { carrier: 'CNA',              tier: 'Preferred', lobs: ['GL','Cyber','Property'],           states: 'All 50',     premium_range: '$30k – $3M',   api: true, hit_ratio: 58, avg_time_hr: 22, capacity: '$10M',  status: 'Healthy',  do_not_route: false },
  { carrier: 'Hartford',         tier: 'Preferred', lobs: ['BOP','Auto','Umbrella'],           states: 'All 50',     premium_range: '$15k – $2M',   api: true, hit_ratio: 52, avg_time_hr: 24, capacity: '$8M',   status: 'Healthy',  do_not_route: false },
  { carrier: 'Travelers',        tier: 'Preferred', lobs: ['Auto','Property','WC'],            states: 'All 50',     premium_range: '$50k – $5M',   api: true, hit_ratio: 48, avg_time_hr: 28, capacity: '$12M',  status: 'Slow',     do_not_route: false },
  { carrier: 'AMTrust',          tier: 'Standard',  lobs: ['WC','GL'],                         states: '44 states',  premium_range: '$10k – $500k', api: true, hit_ratio: 61, avg_time_hr: 20, capacity: '$1M',   status: 'Healthy',  do_not_route: false },
  { carrier: 'Zurich',           tier: 'Standard',  lobs: ['GL','Property','Cyber'],           states: 'All 50',     premium_range: '$100k – $10M', api: true, hit_ratio: 34, avg_time_hr: 36, capacity: '$25M',  status: 'Slow',     do_not_route: false },
  { carrier: 'Chubb',            tier: 'Standard',  lobs: ['Cyber','D&O','Professional'],      states: 'All 50',     premium_range: '$25k – $5M',   api: true, hit_ratio: 42, avg_time_hr: 30, capacity: '$15M',  status: 'Healthy',  do_not_route: false },
  { carrier: 'Markel (E&S)',     tier: 'E&S',       lobs: ['GL','Professional','Specialty'],   states: 'All 50',     premium_range: '$5k – $1M',    api: true, hit_ratio: 38, avg_time_hr: 40, capacity: '$5M',   status: 'Healthy',  do_not_route: false },
  { carrier: 'Scottsdale (E&S)', tier: 'E&S',       lobs: ['GL','Commercial Property'],        states: 'All 50',     premium_range: '$5k – $500k',  api: false, hit_ratio: 28, avg_time_hr: 72, capacity: '$2M',   status: 'Degraded', do_not_route: false },
  { carrier: 'RLI (Specialty)',  tier: 'Specialty', lobs: ['Umbrella','Contractors','Surety'], states: 'All 50',     premium_range: '$2k – $1M',    api: true, hit_ratio: 56, avg_time_hr: 26, capacity: '$10M',  status: 'Healthy',  do_not_route: false },
  { carrier: 'Nationwide',       tier: 'Standard',  lobs: ['BOP','Auto','Property'],           states: 'All 50',     premium_range: '$10k – $2M',   api: true, hit_ratio: 45, avg_time_hr: 32, capacity: '$6M',   status: 'Healthy',  do_not_route: true  }
];

export const marketAppetiteRules = [
  { id: 'APP-01', carrier: 'Liberty Mutual', lob: 'Workers Comp', rule: 'Class codes 5000–5999 · Payroll $500k–$10M · CA/NV/OR/WA · No losses >$50k in 3 yrs', priority: 1, enabled: true, hits_30d: 142 },
  { id: 'APP-02', carrier: 'AMTrust',        lob: 'Workers Comp', rule: 'Class codes 5000–5999, 8000–8999 · Payroll <$5M · 44 states · ExperienceMod ≤ 1.2', priority: 2, enabled: true, hits_30d: 118 },
  { id: 'APP-03', carrier: 'CNA',            lob: 'Cyber',        rule: 'Revenue <$500M · No PHI without HIPAA controls · Multi-factor auth required',         priority: 1, enabled: true, hits_30d: 86 },
  { id: 'APP-04', carrier: 'Chubb',          lob: 'Cyber',        rule: 'Tech & professional services · Revenue $10M–$5B · SOC2 or equivalent preferred',     priority: 1, enabled: true, hits_30d: 72 },
  { id: 'APP-05', carrier: 'Markel (E&S)',   lob: 'GL',           rule: 'Contractors · Artisan trades · Limits to $2M/$4M · Prior loss runs required',        priority: 3, enabled: true, hits_30d: 58 },
  { id: 'APP-06', carrier: 'Travelers',      lob: 'Commercial Auto', rule: 'Fleets 5–100 units · No hazmat · Driver MVRs on file · No at-fault in 24 mo',    priority: 2, enabled: true, hits_30d: 94 },
  { id: 'APP-07', carrier: 'Zurich',         lob: 'Property',     rule: 'TIV $1M–$50M · COPE scoring ≥ 70 · Sprinklered for manufacturing',                  priority: 2, enabled: false, hits_30d: 12 }
];

export const marketQuoteComparisons = [
  { carrier: 'Liberty Mutual', premium: 22903, rate: '12.4%', tria: 'Included', deductible: '$0',    limit: '$1M / $1M / $1M', credits: ['15% schedule', '5% safety'], score: 96, recommended: true  },
  { carrier: 'SEMC / Liberty', premium: 23642, rate: '12.8%', tria: 'Included', deductible: '$0',    limit: '$1M / $1M / $1M', credits: ['10% schedule'],              score: 94, recommended: false },
  { carrier: 'AMTrust',        premium: 24195, rate: '13.1%', tria: '+$485',    deductible: '$0',    limit: '$1M / $1M / $1M', credits: ['8% schedule'],               score: 91, recommended: false }
];

export const marketAnalytics = {
  hit_ratio_by_carrier: [
    { carrier: 'SEMC / Liberty', submitted: 84, quoted: 74, bound: 60, rate: 71 },
    { carrier: 'Liberty Mutual', submitted: 128, quoted: 108, bound: 82, rate: 64 },
    { carrier: 'AMTrust',        submitted: 96, quoted: 74, bound: 59, rate: 61 },
    { carrier: 'CNA',            submitted: 72, quoted: 52, bound: 42, rate: 58 },
    { carrier: 'RLI',            submitted: 44, quoted: 30, bound: 25, rate: 56 },
    { carrier: 'Hartford',       submitted: 68, quoted: 42, bound: 35, rate: 52 },
    { carrier: 'Travelers',      submitted: 82, quoted: 46, bound: 39, rate: 48 },
    { carrier: 'Nationwide',     submitted: 56, quoted: 28, bound: 25, rate: 45 },
    { carrier: 'Chubb',          submitted: 38, quoted: 20, bound: 16, rate: 42 }
  ],
  hit_ratio_by_lob: [
    { lob: 'Workers Comp',           rate: 58, volume: 186 },
    { lob: 'General Liability',      rate: 47, volume: 142 },
    { lob: 'Commercial Auto',        rate: 44, volume: 88 },
    { lob: 'Cyber',                  rate: 52, volume: 62 },
    { lob: 'BOP',                    rate: 49, volume: 54 },
    { lob: 'Professional Liability', rate: 41, volume: 38 }
  ],
  time_to_quote: [
    { range: '< 4 hours',  count: 142, pct: 48 },
    { range: '4–24 hours', count: 94,  pct: 32 },
    { range: '1–3 days',   count: 42,  pct: 14 },
    { range: '3+ days',    count: 18,  pct: 6  }
  ],
  auto_vs_manual: { auto: 82, manual: 18, auto_avg_hr: 3.8, manual_avg_hr: 18.4 },
  decline_reasons: [
    { reason: 'Capacity exhausted',       count: 42, pct: 27 },
    { reason: 'Outside class appetite',   count: 38, pct: 24 },
    { reason: 'Loss history',             count: 28, pct: 18 },
    { reason: 'Premium below minimum',    count: 18, pct: 11 },
    { reason: 'State not licensed',       count: 12, pct: 8  },
    { reason: 'Incomplete submission',    count: 10, pct: 6  },
    { reason: 'Other',                    count: 8,  pct: 6  }
  ],
  carrier_health: [
    { carrier: 'Liberty Mutual', response_hr: 18, comp_score: 92, relationship: 'Strong' },
    { carrier: 'SEMC / Liberty', response_hr: 16, comp_score: 94, relationship: 'Strong' },
    { carrier: 'AMTrust',        response_hr: 20, comp_score: 88, relationship: 'Strong' },
    { carrier: 'CNA',            response_hr: 22, comp_score: 84, relationship: 'Healthy' },
    { carrier: 'Travelers',      response_hr: 28, comp_score: 72, relationship: 'At Risk' },
    { carrier: 'Scottsdale',     response_hr: 72, comp_score: 54, relationship: 'At Risk' }
  ],
  volume_by_source: [
    { source: 'Onboarding Wizard', submissions: 128, placed: 82, rate: 64 },
    { source: 'Renewal Engine',    submissions: 94,  placed: 68, rate: 72 },
    { source: 'Direct Upload',     submissions: 62,  placed: 24, rate: 39 },
    { source: 'Email Intake',      submissions: 48,  placed: 18, rate: 37 },
    { source: 'API (Producer)',    submissions: 38,  placed: 22, rate: 58 }
  ]
};

export const marketAutomatedTasks = [
  { id: 'T-MKT-401', task: 'Route to Liberty Mutual — appetite match 96%',  entity: 'SUB-92104 Magnolia', due: '2026-04-13', owner: 'Auto-route',   priority: 'High',   status: 'Done' },
  { id: 'T-MKT-402', task: 'Chase quote — Travelers 48h overdue',            entity: 'SUB-92104 Magnolia', due: '2026-04-17', owner: 'Sarah Chen',   priority: 'High',   status: 'In Progress' },
  { id: 'T-MKT-403', task: 'Notify producer — 3 quotes received',            entity: 'SUB-92104 Magnolia', due: '2026-04-16', owner: 'Auto-notify',  priority: 'Med',    status: 'Done' },
  { id: 'T-MKT-404', task: 'Archive low-hit-ratio carrier — Scottsdale WC',  entity: 'Class 5403',         due: '2026-04-22', owner: 'Market Analyst', priority: 'Low',    status: 'Open' },
  { id: 'T-MKT-405', task: 'Review manual override — SUB-92101',             entity: 'Coastal Realty',     due: '2026-04-19', owner: 'Lisa Park',    priority: 'High',   status: 'Open' },
  { id: 'T-MKT-406', task: 'Re-route declined — find E&S market',            entity: 'SUB-92100 Ridge',    due: '2026-04-20', owner: 'Mike Torres',  priority: 'Urgent', status: 'Open' }
];

export const marketAIChat = [
  { role: 'ai',   text: 'Hi! I can help route submissions, recommend markets, or analyze carrier fit. Try: "Route this $250k GL risk for a construction client in Texas."' },
  { role: 'user', text: 'Route this $250k GL risk for a construction client in Texas.' },
  { role: 'ai',   text: 'Analyzed risk profile: construction (class 5645), TX, $250k premium target.\n\n**Top 3 recommended markets:**\n1. **Liberty Mutual** — 94% fit · 58% hit ratio · avg 18h response\n2. **Markel E&S** — 89% fit (E&S specialty) · 42% hit ratio · avg 36h\n3. **Scottsdale E&S** — 81% fit · 28% hit ratio · avg 72h\n\nWould you like me to auto-route to all 3 in parallel?' },
  { role: 'user', text: 'Yes, and skip Scottsdale — too slow.' },
  { role: 'ai',   text: '✓ Routed to 2 carriers via API:\n• Liberty Mutual (primary) — sent 2026-04-18 14:22\n• Markel E&S (secondary) — sent 2026-04-18 14:22\n\nI\'ve also flagged Scottsdale in your Do-Not-Route preferences for construction risks <$500k. Expected first quote in ~18h.' }
];

export const documentAIChat = [
  { role: 'ai',   text: 'Hi! I can help you find, summarize, or draft any document. Try: "Show unsigned binders expiring this week."' },
  { role: 'user', text: 'Show unsigned binders expiring this week.' },
  { role: 'ai',   text: 'Found 2 unsigned binders expiring within 7 days:\n• Magnolia Construction — DOC-10480 (expires 2026-04-25)\n• Endorsement Add Loc — DOC-10477 (expires 2026-04-22)\n\nWould you like me to send reminders to both signatories?' },
  { role: 'user', text: 'Yes, and also summarize the Magnolia binder.' },
  { role: 'ai',   text: '✓ Reminders sent to 2 signatories via DocuSign.\n\n**Summary — DOC-10480 Magnolia WC Binder v2:**\n• Carrier: Liberty Mutual / SEMC\n• Premium: $184,700 / yr · Effective 2026-05-01\n• 3 signers (1 signed, 1 viewed, 1 pending)\n• Conditional on TRIA election + down payment by 2026-04-25\n• No red-flag indicators detected.' }
];

// ─── MGA Compliance & Administration ───
export const mgaComplianceKPIs = [
  { label: 'Compliance Score',       value: '94' },
  { label: 'Open Items',             value: '14', warning: true },
  { label: 'Due This Week',          value: '6',  warning: true },
  { label: 'On-Time Filing Rate',    value: '98%' },
  { label: 'Active Users',           value: '84' },
  { label: 'MFA Enrollment',         value: '92%' }
];

export const mgaRoles = [
  { id: 'ROL-01', name: 'Admin',                       tier: 1, users: 3,  perms: ['users:*','settings:*','audit:read','compliance:*','finance:*','uw:*','claims:*'], description: 'Full system access · can edit users, settings, and all modules',                                       authority_limit: null,    mfa_required: true },
  { id: 'ROL-02', name: 'Senior Underwriter',          tier: 2, users: 8,  perms: ['submissions:*','policies:*','bindings:write','uw:approve','referrals:approve'],    description: 'Binding authority up to $250k · can approve referrals · no admin rights',                             authority_limit: 250000,  mfa_required: true },
  { id: 'ROL-03', name: 'Underwriter',                 tier: 3, users: 14, perms: ['submissions:read+write','policies:read','bindings:write','rating:use'],           description: 'Standard UW authority up to $100k · no binding outside appetite',                                      authority_limit: 100000,  mfa_required: true },
  { id: 'ROL-04', name: 'Claims Adjuster (Senior)',    tier: 2, users: 4,  perms: ['claims:*','reserves:write','payments:approve<=100k','subrogation:*'],              description: 'Senior adjuster · reserve + payment authority up to $100k',                                             authority_limit: 100000,  mfa_required: true },
  { id: 'ROL-05', name: 'Claims Adjuster',             tier: 3, users: 6,  perms: ['claims:read+write','reserves:write<=25k','payments:propose'],                     description: 'Junior adjuster · authority up to $25k · proposes payments for senior approval',                       authority_limit: 25000,   mfa_required: true },
  { id: 'ROL-06', name: 'Agent Manager',               tier: 2, users: 3,  perms: ['agents:*','appointments:write','commissions:read','access:grant'],                description: 'Manages agent relationships, appointments, commission overrides',                                      authority_limit: null,    mfa_required: true },
  { id: 'ROL-07', name: 'Finance / Accounting',        tier: 2, users: 4,  perms: ['commissions:*','payments:*','reconciliation:*','trust-accounts:*','reports:*'],  description: 'Manages premium trust accounts, bordereau reconciliation, commission payouts',                          authority_limit: null,    mfa_required: true },
  { id: 'ROL-08', name: 'Compliance Officer',          tier: 2, users: 2,  perms: ['compliance:*','audit:read','filings:*','contracts:*','users:read'],              description: 'Regulatory filings, DOI examinations, audit readiness, compliance calendar',                           authority_limit: null,    mfa_required: true },
  { id: 'ROL-09', name: 'Agent Portal (External)',      tier: 4, users: 32, perms: ['submissions:own','policies:own','commissions:own','documents:own'],              description: 'External agent login · can only see their own book of business',                                       authority_limit: null,    mfa_required: false },
  { id: 'ROL-10', name: 'Read-Only / Auditor',         tier: 4, users: 8,  perms: ['*:read'],                                                                         description: 'External carrier auditor · read-only access for audit windows · auto-expires after 30 days',            authority_limit: null,    mfa_required: true }
];

export const mgaComplianceUsers = [
  { id: 'USR-001', name: 'Marcus Henderson',      email: 'marcus.h@singlepoint.com',   role: 'Admin',                       dept: 'Executive',        last_login: '2026-04-18 08:42', mfa: true,  sso: true,  status: 'Active',   training: ['SOC2 2025','SOX 2025','NAIC Ethics'], failed_logins: 0, created: '2022-03-15' },
  { id: 'USR-002', name: 'Sarah Chen',             email: 'sarah.c@singlepoint.com',    role: 'Senior Underwriter',          dept: 'Underwriting',     last_login: '2026-04-18 09:15', mfa: true,  sso: true,  status: 'Active',   training: ['UW Authority 2025','Appetite Guidelines'], failed_logins: 0, created: '2023-01-10' },
  { id: 'USR-003', name: 'Lisa Park',              email: 'lisa.p@singlepoint.com',     role: 'Senior Underwriter',          dept: 'Underwriting',     last_login: '2026-04-18 10:22', mfa: true,  sso: true,  status: 'Active',   training: ['UW Authority 2025','Appetite Guidelines'], failed_logins: 0, created: '2022-09-04' },
  { id: 'USR-004', name: 'Mike Torres',             email: 'mike.t@singlepoint.com',     role: 'Underwriter',                 dept: 'Underwriting',     last_login: '2026-04-18 11:04', mfa: true,  sso: true,  status: 'Active',   training: ['UW Authority 2025'], failed_logins: 0, created: '2024-02-18' },
  { id: 'USR-005', name: 'Jane Rodriguez',         email: 'jane.r@singlepoint.com',     role: 'Claims Adjuster (Senior)',    dept: 'Claims',           last_login: '2026-04-18 09:30', mfa: true,  sso: true,  status: 'Active',   training: ['Claims Authority 2025','Fair Claims Act'], failed_logins: 0, created: '2021-11-22' },
  { id: 'USR-006', name: 'Daniel Ortiz',            email: 'daniel.o@singlepoint.com',   role: 'Claims Adjuster (Senior)',    dept: 'Claims',           last_login: '2026-04-17 16:45', mfa: true,  sso: true,  status: 'Active',   training: ['Claims Authority 2025','Large Loss'], failed_logins: 1, created: '2021-06-08' },
  { id: 'USR-007', name: 'Rachel Kim',              email: 'rachel.k@singlepoint.com',   role: 'Claims Adjuster (Senior)',    dept: 'Claims',           last_login: '2026-04-18 08:15', mfa: true,  sso: true,  status: 'Active',   training: ['Claims Authority 2025','Cyber Specialty'], failed_logins: 0, created: '2023-05-14' },
  { id: 'USR-008', name: 'Sofia Martinez',          email: 'sofia.m@singlepoint.com',    role: 'Claims Adjuster',             dept: 'Claims',           last_login: '2026-04-18 07:58', mfa: true,  sso: true,  status: 'Active',   training: ['Claims 101'], failed_logins: 0, created: '2025-08-01' },
  { id: 'USR-009', name: 'Priya Shah',               email: 'priya.s@singlepoint.com',    role: 'Compliance Officer',          dept: 'Compliance',        last_login: '2026-04-18 09:40', mfa: true,  sso: true,  status: 'Active',   training: ['SOC2','DOI Exam Prep','Surplus Lines Law'], failed_logins: 0, created: '2022-07-19' },
  { id: 'USR-010', name: 'Omar Khalid',              email: 'omar.k@singlepoint.com',     role: 'Finance / Accounting',        dept: 'Finance',          last_login: '2026-04-18 10:10', mfa: true,  sso: true,  status: 'Active',   training: ['SOX 2025','Trust Account Rules'], failed_logins: 0, created: '2023-09-12' },
  { id: 'USR-011', name: 'Rebecca Fields',           email: 'rebecca.f@singlepoint.com',  role: 'Agent Manager',               dept: 'Distribution',     last_login: '2026-04-18 11:22', mfa: true,  sso: true,  status: 'Active',   training: ['Appointment Regulations'], failed_logins: 0, created: '2022-04-05' },
  { id: 'USR-012', name: 'David Wong',               email: 'david.w@singlepoint.com',    role: 'Underwriter',                 dept: 'Underwriting',     last_login: '2026-04-17 15:30', mfa: false, sso: true,  status: 'Active',   training: ['UW Authority 2025'], failed_logins: 0, created: '2024-11-03', flags:['MFA not enrolled'] },
  { id: 'USR-013', name: 'Olivia Sanchez',           email: 'olivia.s@lockton.com',       role: 'Agent Portal (External)',     dept: 'External',         last_login: '2026-04-18 08:00', mfa: false, sso: false, status: 'Active',   training: [], failed_logins: 0, created: '2024-02-10' },
  { id: 'USR-014', name: 'Ex-Employee Account',     email: 'former@singlepoint.com',     role: 'Underwriter',                 dept: 'Underwriting',     last_login: '2025-12-14 10:00', mfa: true,  sso: true,  status: 'Offboarded', training: [], failed_logins: 0, created: '2023-03-22', flags:['Scheduled for deletion 2026-04-22'] },
  { id: 'USR-015', name: 'Audit Reviewer — Travelers', email: 'audit@travelers.com',      role: 'Read-Only / Auditor',         dept: 'External Audit',    last_login: '2026-04-17 14:00', mfa: true,  sso: false, status: 'Active',   training: [], failed_logins: 0, created: '2026-04-01', expires:'2026-05-01', flags:['Time-limited access'] }
];

export const mgaComplianceItems = [
  { id: 'CMP-2026-041', task: 'File Q1 2026 Surplus Lines Tax — CA',            regulatory_body: 'CA Surplus Lines Assoc.',    category: 'Tax Filing',         due: '2026-04-30', owner: 'Priya Shah',      status: 'In Progress', priority: 'High',   days_to_due: 12, attachments: 2, notes: 'Preparing SLA-5 form · need Q1 placements export from bordereau system' },
  { id: 'CMP-2026-040', task: 'Annual CA DOI Financial Statement',                regulatory_body: 'CA Dept. of Insurance',      category: 'DOI Report',          due: '2026-05-15', owner: 'Priya Shah',      status: 'Open',        priority: 'High',   days_to_due: 27, attachments: 0, notes: 'Annual Schedule T + Premium Tax Return' },
  { id: 'CMP-2026-039', task: 'Renew MGA License — Texas',                        regulatory_body: 'TX Dept. of Insurance',      category: 'License',             due: '2026-04-25', owner: 'Priya Shah',      status: 'In Progress', priority: 'High',   days_to_due: 7,  attachments: 4, notes: 'Application filed 2026-04-01 · awaiting fingerprint verification · CE credits confirmed' },
  { id: 'CMP-2026-038', task: 'SOC2 Type II — Evidence Collection',              regulatory_body: 'External Auditor (Deloitte)', category: 'SOC2',                due: '2026-05-31', owner: 'Marcus Henderson', status: 'In Progress', priority: 'Medium', days_to_due: 43, attachments: 8, notes: '11 of 14 controls evidenced · awaiting incident response drill + 2 user access reviews' },
  { id: 'CMP-2026-037', task: 'NAIC Model Audit Rule — Q1',                        regulatory_body: 'NAIC',                       category: 'NAIC',                 due: '2026-04-20', owner: 'Priya Shah',      status: 'In Progress', priority: 'Medium', days_to_due: 2,  attachments: 0, notes: 'Internal control certifications due' },
  { id: 'CMP-2026-036', task: 'Travelers Carrier Audit — Readiness Pack',        regulatory_body: 'Travelers',                   category: 'Carrier Audit',       due: '2026-05-10', owner: 'Priya Shah',      status: 'Open',        priority: 'High',   days_to_due: 22, attachments: 0, notes: '10-policy sample · loss runs · UW files' },
  { id: 'CMP-2026-035', task: 'Annual MGA Appointment Filing — Ohio',             regulatory_body: 'OH Dept. of Insurance',      category: 'License',             due: '2026-06-30', owner: 'Rebecca Fields',  status: 'Open',        priority: 'Medium', days_to_due: 73, attachments: 0, notes: '4 agent appointments to renew' },
  { id: 'CMP-2026-034', task: 'Q1 Premium Tax Return — Texas',                    regulatory_body: 'TX Comptroller',             category: 'Tax Filing',         due: '2026-04-20', owner: 'Omar Khalid',      status: 'Review',       priority: 'High',   days_to_due: 2,  attachments: 3, notes: 'Draft prepared · pending Omar final review' },
  { id: 'CMP-2026-033', task: 'ISO 27001 Annual Surveillance Audit',               regulatory_body: 'BSI Group',                  category: 'ISO',                  due: '2026-08-15', owner: 'Marcus Henderson', status: 'Open',        priority: 'Low',    days_to_due: 119,attachments: 0, notes: 'Scheduled · gap assessment due May 2026' },
  { id: 'CMP-2026-032', task: 'Producer Licensing Audit — Florida',                regulatory_body: 'FL Dept. of Financial Svc.', category: 'License',             due: '2026-04-18', owner: 'Rebecca Fields',  status: 'In Progress', priority: 'High',   days_to_due: 0,  attachments: 2, notes: '⚠ Due today · 12 FL producers to verify' },
  { id: 'CMP-2026-031', task: 'Anti-Money Laundering Training (All Staff)',       regulatory_body: 'Internal + FinCEN',          category: 'Training',            due: '2026-06-01', owner: 'Priya Shah',      status: 'In Progress', priority: 'Medium', days_to_due: 44, attachments: 0, notes: '61 of 84 completed (73%) · 23 overdue' },
  { id: 'CMP-2026-030', task: 'Cyber Liability Policy Renewal — MGA Own Coverage',regulatory_body: 'Internal',                   category: 'Internal Policy',    due: '2026-05-01', owner: 'Marcus Henderson', status: 'Open',        priority: 'Medium', days_to_due: 13, attachments: 0, notes: 'Compare 3 markets · legal review clauses' },
  { id: 'CMP-2026-029', task: 'SOC2 Pen-Test — Scoping',                           regulatory_body: 'Offensive Security Ltd',     category: 'SOC2',                due: '2026-05-20', owner: 'Marcus Henderson', status: 'Open',        priority: 'Medium', days_to_due: 32, attachments: 1, notes: '—' },
  { id: 'CMP-2026-028', task: 'E&O Insurance Renewal Documentation',                regulatory_body: 'Internal',                   category: 'Internal Policy',    due: '2026-07-15', owner: 'Marcus Henderson', status: 'Open',        priority: 'Low',    days_to_due: 88, attachments: 0, notes: '—' },
  { id: 'CMP-2026-027', task: 'DOI Complaint Response — CA Complaint #88421',     regulatory_body: 'CA Dept. of Insurance',      category: 'DOI Response',        due: '2026-04-22', owner: 'Priya Shah',      status: 'In Progress', priority: 'High',   days_to_due: 4,  attachments: 3, notes: 'Response drafted · legal review Monday' }
];

export const mgaAuditLogs = [
  { ts: '2026-04-18 14:22', actor: 'Marcus Henderson', module: 'Compliance',  action: 'Approved reserve change RES-4200 · Ridge Builders · $420k → $520k', ip: '10.0.8.42',   severity: 'Info',    before: '$420,000', after: '$520,000' },
  { ts: '2026-04-18 14:15', actor: 'Sarah Chen',        module: 'Submissions', action: 'Quoted SUB-92104 Magnolia Construction at $184,700',                 ip: '10.0.8.18',   severity: 'Info',    before: 'Not quoted', after: '$184,700' },
  { ts: '2026-04-18 14:08', actor: 'Jane Rodriguez',    module: 'Claims',      action: 'Updated reserve on CLM-MGA-2026-0248 · $8,500 → $12,400',           ip: '10.0.8.24',   severity: 'Info',    before: '$8,500',   after: '$12,400' },
  { ts: '2026-04-18 13:55', actor: 'Priya Shah',        module: 'Compliance',  action: 'Generated Q1 2026 Premium Tax Return draft · TX',                     ip: '10.0.8.65',   severity: 'Info',    before: '—',        after: 'Draft created' },
  { ts: '2026-04-18 13:40', actor: 'Daniel Ortiz',      module: 'Claims',      action: 'Requested reserve change RES-4200 on CLM-MGA-2026-0237',            ip: '10.0.8.52',   severity: 'Info',    before: '—',        after: 'Submitted for approval' },
  { ts: '2026-04-18 13:20', actor: 'Mike Torres',       module: 'Policies',    action: 'Issued policy TRV-AUTO-2026-11445 · Westshore Logistics',             ip: '10.0.8.31',   severity: 'Info',    before: 'Bound',     after: 'Issued' },
  { ts: '2026-04-18 12:48', actor: 'Omar Khalid',       module: 'Finance',     action: 'Initiated commission payment batch $184,240 to 14 agents',            ip: '10.0.8.19',   severity: 'Info',    before: 'Pending',   after: 'Processing' },
  { ts: '2026-04-18 12:30', actor: 'System',            module: 'Compliance',  action: 'Auto-routed CA Surplus Lines filing to Priya Shah (due 2026-04-30)',  ip: '—',            severity: 'Info',    before: '—',        after: 'Assigned' },
  { ts: '2026-04-18 12:05', actor: 'David Wong',        module: 'Login',       action: 'Login — SSO success (MFA not enrolled)',                                ip: '10.0.8.77',   severity: 'Warning', before: '—',        after: 'Session opened' },
  { ts: '2026-04-18 11:42', actor: 'Rachel Kim',        module: 'Claims',      action: 'Approved forensic firm engagement · CyberDefense $35k',              ip: '10.0.8.48',   severity: 'Info',    before: 'Proposed',  after: 'Approved' },
  { ts: '2026-04-18 11:18', actor: 'Rebecca Fields',    module: 'Agents',      action: 'Appointed Lockton Companies to FL (Workers Comp)',                    ip: '10.0.8.22',   severity: 'Info',    before: '—',        after: 'Appointment filed' },
  { ts: '2026-04-18 10:50', actor: 'System',            module: 'Security',    action: 'Failed login attempt — USR-006 Daniel Ortiz (1 of 3)',                 ip: '172.98.45.11',severity: 'Warning', before: '—',        after: 'Locked no' },
  { ts: '2026-04-18 10:25', actor: 'Audit Reviewer',    module: 'Policies',    action: 'Downloaded 10 policy samples for Travelers carrier audit',            ip: '203.44.89.2', severity: 'Info',    before: '—',        after: 'Exported' },
  { ts: '2026-04-18 09:58', actor: 'Lisa Park',        module: 'Settings',    action: 'Updated commission schedule · Commercial Auto · 13% → 14%',            ip: '10.0.8.45',   severity: 'Info',    before: '13%',       after: '14%' },
  { ts: '2026-04-18 09:30', actor: 'System',            module: 'Bordereau',   action: 'Delivered BDX-2026-04-18 to Travelers (18 claims)',                    ip: '—',            severity: 'Info',    before: 'Queued',    after: 'Delivered (ACK: TRV-ACK-8842)' },
  { ts: '2026-04-18 09:02', actor: 'Marcus Henderson', module: 'Users',        action: 'Scheduled offboarding for Ex-Employee Account (USR-014)',              ip: '10.0.8.42',   severity: 'Info',    before: 'Active',    after: 'Offboarded · deletion 2026-04-22' },
  { ts: '2026-04-18 08:42', actor: 'Marcus Henderson', module: 'Login',       action: 'Login — SSO + MFA success',                                            ip: '10.0.8.42',   severity: 'Info',    before: '—',        after: 'Session opened' },
  { ts: '2026-04-17 18:22', actor: 'Priya Shah',        module: 'Contracts',   action: 'Uploaded 2026 Travelers MGA Agreement Amendment #4',                  ip: '10.0.8.65',   severity: 'Info',    before: '—',        after: 'Contract v4 stored' }
];

export const mgaContracts = [
  { id: 'CNT-1001', party: 'Travelers',                     type: 'Carrier MGA Agreement',   effective: '2024-01-01', expiry: '2027-12-31', status: 'Active',      version: 'v4',   signer_mga: 'Marcus Henderson', signer_carrier: 'R. Patel (Travelers)',    notes: 'Amendment #4 2026-04-17 · added CA Property capacity $5M/risk',           renewal_alert: '180d pre-expiry', premium_cap: '25000000' },
  { id: 'CNT-1002', party: 'SEMC / Liberty Mutual',          type: 'Carrier MGA Agreement',   effective: '2023-06-01', expiry: '2026-05-31', status: 'Expiring',    version: 'v2',   signer_mga: 'Marcus Henderson', signer_carrier: 'J. Kim (Liberty)',          notes: '⚠ Expires in 43 days · renewal terms in review · committee meets 2026-04-25', renewal_alert: '90d pre-expiry',  premium_cap: '18000000' },
  { id: 'CNT-1003', party: 'CNA',                             type: 'Carrier MGA Agreement',   effective: '2023-01-01', expiry: '2026-12-31', status: 'Active',      version: 'v3',   signer_mga: 'Marcus Henderson', signer_carrier: 'M. Brody (CNA)',             notes: 'Auto-renewal with 90-day notice · standard terms',                          renewal_alert: '180d pre-expiry', premium_cap: '12000000' },
  { id: 'CNT-1004', party: 'Hartford',                        type: 'Carrier MGA Agreement',   effective: '2025-01-01', expiry: '2027-12-31', status: 'Active',      version: 'v1',   signer_mga: 'Marcus Henderson', signer_carrier: 'P. Collins (Hartford)',     notes: 'New 2025 partnership · BOP + Auto focus',                                    renewal_alert: '180d pre-expiry', premium_cap: '8000000' },
  { id: 'CNT-1005', party: 'Chubb',                           type: 'Carrier MGA Agreement',   effective: '2024-07-01', expiry: '2026-06-30', status: 'Active',      version: 'v2',   signer_mga: 'Marcus Henderson', signer_carrier: 'S. Reeves (Chubb)',          notes: 'D&O + Cyber specialty · limited capacity · renewal negotiations May 2026',    renewal_alert: '90d pre-expiry',  premium_cap: '6000000' },
  { id: 'CNT-1006', party: 'Zurich',                          type: 'Carrier MGA Agreement',   effective: '2022-01-01', expiry: '2026-12-31', status: 'Active',      version: 'v5',   signer_mga: 'Marcus Henderson', signer_carrier: 'A. Schmidt (Zurich)',       notes: 'Property only · Cat-heavy capacity',                                          renewal_alert: '180d pre-expiry', premium_cap: '4000000' },
  { id: 'CNT-2001', party: 'Lockton Companies',               type: 'Agent Appointment',        effective: '2023-03-15', expiry: '2028-03-14', status: 'Active',      version: 'v2',   signer_mga: 'Rebecca Fields',   signer_carrier: 'Olivia Sanchez (Lockton)', notes: 'Top producer · 14 states · all LOBs',                                         renewal_alert: '365d pre-expiry', premium_cap: null },
  { id: 'CNT-2002', party: 'Marsh Agency Inc',                 type: 'Agent Appointment',        effective: '2024-01-01', expiry: '2029-01-01', status: 'Active',      version: 'v1',   signer_mga: 'Rebecca Fields',   signer_carrier: 'T. Mitchell (Marsh)',       notes: 'Mid-tier producer · 8 states',                                                renewal_alert: '365d pre-expiry', premium_cap: null },
  { id: 'CNT-2003', party: 'Apex Insurance Services',          type: 'Agent Appointment',        effective: '2022-09-01', expiry: '2026-08-31', status: 'Active',      version: 'v3',   signer_mga: 'Rebecca Fields',   signer_carrier: 'J. Osborn (Apex)',          notes: 'Regional agent · 4 states',                                                  renewal_alert: '180d pre-expiry', premium_cap: null },
  { id: 'CNT-3001', party: 'Munich Re',                        type: 'Reinsurance Treaty',      effective: '2026-01-01', expiry: '2026-12-31', status: 'Active',      version: 'v2',   signer_mga: 'Marcus Henderson', signer_carrier: 'K. Berg (Munich Re)',       notes: 'Quota share 50% · Commercial Auto book · $5M/risk cession',                  renewal_alert: '90d pre-expiry',  premium_cap: null },
  { id: 'CNT-3002', party: 'Swiss Re',                         type: 'Reinsurance Treaty',      effective: '2026-01-01', expiry: '2026-12-31', status: 'Active',      version: 'v1',   signer_mga: 'Marcus Henderson', signer_carrier: 'E. Fischer (Swiss Re)',     notes: 'Cat XL for Property book · $10M xs $2M per event',                            renewal_alert: '90d pre-expiry',  premium_cap: null },
  { id: 'CNT-4001', party: 'Snowflake Inc',                    type: 'Vendor Contract',         effective: '2024-06-01', expiry: '2027-05-31', status: 'Active',      version: 'v1',   signer_mga: 'Marcus Henderson', signer_carrier: 'Sales Rep',                  notes: 'Data warehouse · processes all claims/policy data · DPA executed',           renewal_alert: '90d pre-expiry',  premium_cap: null },
  { id: 'CNT-4002', party: 'DocuSign Inc',                     type: 'Vendor Contract',         effective: '2023-01-01', expiry: '2026-12-31', status: 'Active',      version: 'v2',   signer_mga: 'Marcus Henderson', signer_carrier: 'Sales Rep',                  notes: 'E-signature · SOC2 Type II compliant',                                       renewal_alert: '90d pre-expiry',  premium_cap: null },
  { id: 'CNT-4003', party: 'Deloitte LLP',                     type: 'Professional Services',    effective: '2026-01-01', expiry: '2026-12-31', status: 'Active',      version: 'v1',   signer_mga: 'Marcus Henderson', signer_carrier: 'Partner',                    notes: 'SOC2 Type II + financial audit · annual engagement',                         renewal_alert: '60d pre-expiry',  premium_cap: null }
];

export const mgaLicenses = [
  { id: 'LIC-CA-01', state: 'California',   license_type: 'MGA / Surplus Lines Broker', license_no: 'MGA-CA-884210',  issued: '2023-01-15', expires: '2026-12-31', status: 'Active',  renewal_days: 258, designated_ro: 'Sarah Chen',     exam_credits: 24, filing_required: 'Annual' },
  { id: 'LIC-TX-01', state: 'Texas',        license_type: 'MGA / Agent',                  license_no: 'MGA-TX-772201',  issued: '2024-06-01', expires: '2026-04-25', status: 'Renewing', renewal_days: 7,   designated_ro: 'Mike Torres',     exam_credits: 16, filing_required: 'Biennial' },
  { id: 'LIC-NY-01', state: 'New York',     license_type: 'MGA',                          license_no: 'MGA-NY-551103',  issued: '2022-08-10', expires: '2026-08-10', status: 'Active',  renewal_days: 114, designated_ro: 'Marcus Henderson', exam_credits: 20, filing_required: 'Annual' },
  { id: 'LIC-FL-01', state: 'Florida',      license_type: 'MGA / Surplus Lines',          license_no: 'MGA-FL-441002',  issued: '2023-04-20', expires: '2027-04-20', status: 'Active',  renewal_days: 368, designated_ro: 'Lisa Park',       exam_credits: 24, filing_required: 'Annual' },
  { id: 'LIC-IL-01', state: 'Illinois',     license_type: 'MGA',                          license_no: 'MGA-IL-330405',  issued: '2023-10-01', expires: '2026-09-30', status: 'Active',  renewal_days: 165, designated_ro: 'Marcus Henderson', exam_credits: 16, filing_required: 'Annual' },
  { id: 'LIC-OH-01', state: 'Ohio',         license_type: 'MGA / Agent',                  license_no: 'MGA-OH-220806',  issued: '2024-03-15', expires: '2026-06-30', status: 'Active',  renewal_days: 73,  designated_ro: 'David Wong',      exam_credits: 12, filing_required: 'Biennial' },
  { id: 'LIC-PA-01', state: 'Pennsylvania', license_type: 'MGA',                          license_no: 'MGA-PA-110207',  issued: '2023-11-12', expires: '2026-11-12', status: 'Active',  renewal_days: 208, designated_ro: 'Marcus Henderson', exam_credits: 16, filing_required: 'Annual' },
  { id: 'LIC-GA-01', state: 'Georgia',      license_type: 'MGA',                          license_no: 'MGA-GA-990308',  issued: '2024-07-04', expires: '2027-07-03', status: 'Active',  renewal_days: 441, designated_ro: 'Rebecca Fields',  exam_credits: 12, filing_required: 'Annual' }
];

export const mgaRegulatoryFilings = [
  { id: 'FLG-2026-Q1-CA',  filing_type: 'Quarterly Surplus Lines Tax',  state: 'CA', period: 'Q1 2026',        due: '2026-04-30', filed: null,            status: 'In Preparation', owner: 'Priya Shah',      amount_reported: 1840000, tax_due: 54200, form: 'SLA-5' },
  { id: 'FLG-2026-Q1-TX',  filing_type: 'Quarterly Premium Tax',         state: 'TX', period: 'Q1 2026',        due: '2026-04-20', filed: null,            status: 'Review',         owner: 'Omar Khalid',      amount_reported: 920000,  tax_due: 16560, form: 'IT-175' },
  { id: 'FLG-2026-Q1-FL',  filing_type: 'Quarterly Surplus Lines Tax',  state: 'FL', period: 'Q1 2026',        due: '2026-04-15', filed: '2026-04-14 16:30',status: 'Filed',          owner: 'Priya Shah',      amount_reported: 620000,  tax_due: 31000, form: 'SL-1' },
  { id: 'FLG-2026-Q1-NY',  filing_type: 'Quarterly Premium Tax',         state: 'NY', period: 'Q1 2026',        due: '2026-04-20', filed: '2026-04-18 14:22',status: 'Filed',          owner: 'Omar Khalid',      amount_reported: 1240000, tax_due: 22320, form: 'CT-33' },
  { id: 'FLG-2026-AN-CA',  filing_type: 'Annual MGA Report',             state: 'CA', period: '2025',            due: '2026-05-15', filed: null,            status: 'Open',            owner: 'Priya Shah',      amount_reported: null,    tax_due: null,  form: 'MGA-AN-1' },
  { id: 'FLG-2026-AN-NY',  filing_type: 'Annual Financial Statement',    state: 'NY', period: '2025',            due: '2026-03-01', filed: '2026-02-28 17:00',status: 'Filed',          owner: 'Marcus Henderson', amount_reported: null,    tax_due: null,  form: 'Schedule T' },
  { id: 'FLG-2026-RT-CA',  filing_type: 'Rate & Form Filing — Cyber v2',  state: 'CA', period: '2026 Cycle',      due: '2026-06-01', filed: null,            status: 'In Preparation', owner: 'Priya Shah',      amount_reported: null,    tax_due: null,  form: 'RT-Form-CYB2' },
  { id: 'FLG-2025-Q4-CA',  filing_type: 'Quarterly Surplus Lines Tax',  state: 'CA', period: 'Q4 2025',        due: '2026-01-30', filed: '2026-01-28 15:40',status: 'Filed',          owner: 'Priya Shah',      amount_reported: 2140000, tax_due: 63100, form: 'SLA-5' },
  { id: 'FLG-2026-AP-OH',  filing_type: 'Annual Appointment Filing',    state: 'OH', period: '2026',            due: '2026-06-30', filed: null,            status: 'Open',            owner: 'Rebecca Fields',  amount_reported: null,    tax_due: null,  form: 'APPT-1' }
];

export const mgaSystemSettings = [
  { category: 'Binding',          key: 'Max Auto-Bind Authority',         value: '$100,000',                   last_modified: '2026-01-15 by Marcus Henderson', description: 'Hard cap on auto-bind without UW sign-off' },
  { category: 'Binding',          key: 'Appetite Check Required',           value: 'Yes',                        last_modified: '2025-10-01 by Sarah Chen',        description: 'Every submission must pass appetite matrix' },
  { category: 'Claims',           key: 'Auto-Assign Adjuster',              value: 'Enabled (by LOB + WIP)',     last_modified: '2026-02-04 by Jane Rodriguez',   description: 'Round-robin within LOB specialty; skip if WIP > 35' },
  { category: 'Claims',           key: 'Reserve Auto-Approve Threshold',     value: 'Up to $25k (junior) · $100k (senior) · $250k (large loss)', last_modified: '2025-12-10 by Marcus Henderson', description: 'Per role tier · above this requires committee approval' },
  { category: 'Claims',           key: 'Large Loss Notification (Carrier)', value: '$100k+ within 24h',          last_modified: '2025-11-01 by Priya Shah',        description: 'Auto-email to carrier loss desk · SEMC bordereau flag' },
  { category: 'Compliance',       key: 'Audit Log Retention',               value: '7 years',                    last_modified: '2024-01-01 by Marcus Henderson', description: 'SOX + NAIC minimum retention' },
  { category: 'Compliance',       key: 'MFA Enforcement',                   value: 'All internal roles',         last_modified: '2025-06-15 by Marcus Henderson', description: 'External agents optional · internal required · auditors required' },
  { category: 'Compliance',       key: 'Session Timeout',                    value: '30 minutes',                 last_modified: '2025-09-01 by Marcus Henderson', description: 'Idle-only · Active sessions extended' },
  { category: 'Financial',        key: 'Premium Trust Bank',                 value: 'First Republic · ***4421',    last_modified: '2024-07-01 by Omar Khalid',       description: 'Segregated trust account · daily reconciliation' },
  { category: 'Financial',        key: 'Commission Pay Schedule',            value: 'Monthly · 5th of next month',last_modified: '2025-01-01 by Omar Khalid',       description: 'ACH batch run 1st · released 5th after reconciliation' },
  { category: 'Notifications',    key: 'Renewal Kickoff Lead Time',         value: '120 days pre-expiry',        last_modified: '2025-04-01 by Sarah Chen',        description: 'Auto-email to producer + account exec' },
  { category: 'Notifications',    key: 'FNOL Acknowledgment',               value: 'Auto within 4 business hours',last_modified: '2024-10-01 by Jane Rodriguez',    description: 'Email + portal notification to insured + agent' },
  { category: 'Integrations',     key: 'SEMC (Carrier)',                      value: 'Active · 6 carriers',        last_modified: '2026-03-22 by IT',                description: 'Bordereau + claims + submissions via SEMC API' },
  { category: 'Integrations',     key: 'Accounting (NetSuite)',              value: 'Connected · nightly sync',   last_modified: '2024-11-01 by Omar Khalid',       description: 'GL · AR · trust · commissions' },
  { category: 'Integrations',     key: 'DocuSign',                            value: 'Connected · 14,224 envelopes', last_modified: '2023-01-15 by IT',                 description: 'E-signature for all binders, contracts, endorsements' },
  { category: 'Data',             key: 'PII Encryption at Rest',             value: 'AES-256',                    last_modified: '2024-01-01 by IT',                description: 'Keys rotated annually · KMS-managed' },
  { category: 'Data',             key: 'Backup Frequency',                   value: 'Daily · 30d retained · monthly 7y', last_modified: '2024-01-01 by IT',           description: 'Cross-region replication · SOC2 control' }
];

export const mgaComplianceTrend = [
  { month: 'Nov 25', score: 88, open: 22, filed_ontime: 94 },
  { month: 'Dec 25', score: 91, open: 18, filed_ontime: 96 },
  { month: 'Jan 26', score: 93, open: 16, filed_ontime: 97 },
  { month: 'Feb 26', score: 92, open: 17, filed_ontime: 95 },
  { month: 'Mar 26', score: 94, open: 15, filed_ontime: 98 },
  { month: 'Apr 26', score: 94, open: 14, filed_ontime: 98 }
];

// ─── MGA Principal Carriers Management ───
export const mgaCarriersKPIs = [
  { label: 'Principal Carriers',     value: '8' },
  { label: 'Total Capacity',         value: '$128M' },
  { label: 'Capacity Used',          value: '68%' },
  { label: 'Avg Loss Ratio',         value: '38%' },
  { label: 'Contracts Expiring',     value: '2', warning: true },
  { label: 'Partnership Score',      value: '4.4 ★' }
];

export const mgaCarriersEnhanced = [
  {
    id: 'CAR-01', name: 'Travelers', naic: '19046', am_best: 'A++', sp_rating: 'AA', tier: 'Core',
    logo_initials: 'TR', logo_color: 'linear-gradient(135deg,#d32f2f,#ef5350)',
    relationship_status: 'Active', since: '2021-01-01', contract_id: 'CNT-1001',
    contract_effective: '2024-01-01', contract_expiry: '2027-12-31', contract_version: 'v4',
    products: ['FleetSafe Auto', 'MainStreet BOP', 'PropertyGuard'], lobs: ['Commercial Auto','BOP','Property'],
    states: ['CA','TX','NY','FL','IL','OH','PA','GA','AZ','CO','NV','WA','OR','NC'],
    binding_authority: 250000, claims_authority: 100000, subjectivity_required_above: 500000,
    commission_rate: 14, profit_share_threshold_lr: 55, profit_share_pct: 30, profit_share_earned_ytd: 482000,
    capacity_treaty: 25000000, capacity_used: 18400000, capacity_pct: 74,
    premium_ytd: 18400000, premium_prior_ytd: 15800000, growth_pct: 16, policies_inforce: 842,
    loss_ratio_ytd: 42, combined_ratio_ytd: 88, claims_count_ytd: 42,
    submission_quality: 92, claims_handling: 94, uw_response_time_hrs: 18,
    performance_score: 91, partnership_rating: 4.6, last_qbr: '2026-01-15', next_qbr: '2026-04-22',
    key_contact_uw: 'Rajesh Patel',   key_contact_claims: 'Karen Liu',   key_contact_audit: 'Michael Donovan',
    integration_method: 'SEMC API', health: 'Healthy',
    contingent_commission_projected: 620000, open_referrals: 3, data_feeds: ['Policies','Claims','Bordereau']
  },
  {
    id: 'CAR-02', name: 'SEMC / Liberty Mutual', naic: '23035', am_best: 'A', sp_rating: 'A', tier: 'Core',
    logo_initials: 'LM', logo_color: 'linear-gradient(135deg,#fdd835,#fbc02d)',
    relationship_status: 'Renewing', since: '2018-06-01', contract_id: 'CNT-1002',
    contract_effective: '2023-06-01', contract_expiry: '2026-05-31', contract_version: 'v2',
    products: ['WorkForce WC — CA', 'GuardPoint GL', 'MainStreet BOP'], lobs: ['Workers Comp','General Liability','BOP'],
    states: ['CA','TX','NY','NJ','MA','FL','IL','OH','PA','GA','AZ','CO','NV','WA','OR','NC','VA','MD','CT','MN'],
    binding_authority: 250000, claims_authority: 75000, subjectivity_required_above: 500000,
    commission_rate: 13, profit_share_threshold_lr: 60, profit_share_pct: 25, profit_share_earned_ytd: 210000,
    capacity_treaty: 18000000, capacity_used: 14600000, capacity_pct: 81,
    premium_ytd: 14600000, premium_prior_ytd: 13200000, growth_pct: 11, policies_inforce: 1842,
    loss_ratio_ytd: 48, combined_ratio_ytd: 92, claims_count_ytd: 82,
    submission_quality: 88, claims_handling: 90, uw_response_time_hrs: 22,
    performance_score: 85, partnership_rating: 4.4, last_qbr: '2026-01-20', next_qbr: '2026-04-25',
    key_contact_uw: 'Jennifer Kim',   key_contact_claims: 'David Park',   key_contact_audit: 'Ruben Cohen',
    integration_method: 'SEMC API', health: 'Watch',
    contingent_commission_projected: 285000, open_referrals: 5, data_feeds: ['Policies','Claims','Bordereau']
  },
  {
    id: 'CAR-03', name: 'CNA', naic: '20443', am_best: 'A', sp_rating: 'A+', tier: 'Core',
    logo_initials: 'CN', logo_color: 'linear-gradient(135deg,#1e88e5,#1565c0)',
    relationship_status: 'Active', since: '2020-01-01', contract_id: 'CNT-1003',
    contract_effective: '2023-01-01', contract_expiry: '2026-12-31', contract_version: 'v3',
    products: ['GuardPoint GL', 'SecureEdge Cyber', 'OverShield Umbrella'], lobs: ['General Liability','Cyber','Umbrella','Management'],
    states: ['CA','TX','NY','FL','IL','OH','PA','MA','NJ','CT','GA','AZ','CO','NC','VA'],
    binding_authority: 500000, claims_authority: 150000, subjectivity_required_above: 1000000,
    commission_rate: 15, profit_share_threshold_lr: 50, profit_share_pct: 35, profit_share_earned_ytd: 342000,
    capacity_treaty: 20000000, capacity_used: 12200000, capacity_pct: 61,
    premium_ytd: 12200000, premium_prior_ytd: 10400000, growth_pct: 17, policies_inforce: 524,
    loss_ratio_ytd: 34, combined_ratio_ytd: 82, claims_count_ytd: 28,
    submission_quality: 94, claims_handling: 92, uw_response_time_hrs: 16,
    performance_score: 94, partnership_rating: 4.8, last_qbr: '2026-01-08', next_qbr: '2026-04-18',
    key_contact_uw: 'Matthew Brody',   key_contact_claims: 'Lisa Chen',   key_contact_audit: 'Steven Walsh',
    integration_method: 'SEMC API', health: 'Healthy',
    contingent_commission_projected: 485000, open_referrals: 2, data_feeds: ['Policies','Claims','Bordereau','Appetite']
  },
  {
    id: 'CAR-04', name: 'Hartford', naic: '19682', am_best: 'A+', sp_rating: 'A+', tier: 'Growth',
    logo_initials: 'HF', logo_color: 'linear-gradient(135deg,#00897b,#00acc1)',
    relationship_status: 'Active', since: '2025-01-01', contract_id: 'CNT-1004',
    contract_effective: '2025-01-01', contract_expiry: '2027-12-31', contract_version: 'v1',
    products: ['MainStreet BOP', 'FleetSafe Auto', 'WorkForce WC — CA'], lobs: ['BOP','Commercial Auto','Workers Comp'],
    states: ['CA','TX','NY','FL','IL','OH','PA','GA','AZ','CO','NC','VA','MA','NJ','CT'],
    binding_authority: 150000, claims_authority: 75000, subjectivity_required_above: 350000,
    commission_rate: 13, profit_share_threshold_lr: 55, profit_share_pct: 25, profit_share_earned_ytd: 128000,
    capacity_treaty: 8000000, capacity_used: 5400000, capacity_pct: 68,
    premium_ytd: 5400000, premium_prior_ytd: 3800000, growth_pct: 42, policies_inforce: 284,
    loss_ratio_ytd: 36, combined_ratio_ytd: 86, claims_count_ytd: 14,
    submission_quality: 90, claims_handling: 88, uw_response_time_hrs: 24,
    performance_score: 88, partnership_rating: 4.5, last_qbr: '2026-02-05', next_qbr: '2026-05-10',
    key_contact_uw: 'Patricia Collins',   key_contact_claims: 'Anthony Miller',   key_contact_audit: 'Diane Fox',
    integration_method: 'SEMC API', health: 'Healthy',
    contingent_commission_projected: 182000, open_referrals: 4, data_feeds: ['Policies','Claims','Bordereau']
  },
  {
    id: 'CAR-05', name: 'Chubb', naic: '10052', am_best: 'A++', sp_rating: 'AA', tier: 'Specialty',
    logo_initials: 'CH', logo_color: 'linear-gradient(135deg,#6d4c41,#8d6e63)',
    relationship_status: 'Active', since: '2024-07-01', contract_id: 'CNT-1005',
    contract_effective: '2024-07-01', contract_expiry: '2026-06-30', contract_version: 'v2',
    products: ['BoardGuard D&O', 'SecureEdge Cyber (Enterprise)'], lobs: ['Management Liability','D&O','Cyber'],
    states: ['CA','TX','NY','FL','IL','MA','NJ','CT'],
    binding_authority: 100000, claims_authority: 50000, subjectivity_required_above: 250000,
    commission_rate: 18, profit_share_threshold_lr: 45, profit_share_pct: 40, profit_share_earned_ytd: 92000,
    capacity_treaty: 6000000, capacity_used: 3800000, capacity_pct: 63,
    premium_ytd: 3800000, premium_prior_ytd: 2800000, growth_pct: 36, policies_inforce: 124,
    loss_ratio_ytd: 28, combined_ratio_ytd: 76, claims_count_ytd: 6,
    submission_quality: 96, claims_handling: 96, uw_response_time_hrs: 12,
    performance_score: 96, partnership_rating: 4.9, last_qbr: '2026-02-18', next_qbr: '2026-05-20',
    key_contact_uw: 'Stephen Reeves',   key_contact_claims: 'Miranda Hayes',   key_contact_audit: 'James Tanaka',
    integration_method: 'File (SFTP)', health: 'Healthy',
    contingent_commission_projected: 148000, open_referrals: 1, data_feeds: ['Policies','Claims','Bordereau']
  },
  {
    id: 'CAR-06', name: 'Zurich', naic: '16535', am_best: 'A+', sp_rating: 'AA-', tier: 'Specialty',
    logo_initials: 'ZR', logo_color: 'linear-gradient(135deg,#1976d2,#0d47a1)',
    relationship_status: 'Active', since: '2022-01-01', contract_id: 'CNT-1006',
    contract_effective: '2022-01-01', contract_expiry: '2026-12-31', contract_version: 'v5',
    products: ['PropertyGuard', 'PropertyGuard Plus (Cat)'], lobs: ['Property'],
    states: ['CA','TX','FL','NY','IL','OH','PA','GA','NC','VA','MA','NJ','AZ','CO','NV','WA','OR'],
    binding_authority: 500000, claims_authority: 100000, subjectivity_required_above: 1000000,
    commission_rate: 12, profit_share_threshold_lr: 50, profit_share_pct: 30, profit_share_earned_ytd: 64000,
    capacity_treaty: 4000000, capacity_used: 1620000, capacity_pct: 41,
    premium_ytd: 1620000, premium_prior_ytd: 1780000, growth_pct: -9, policies_inforce: 82,
    loss_ratio_ytd: 48, combined_ratio_ytd: 94, claims_count_ytd: 8,
    submission_quality: 86, claims_handling: 88, uw_response_time_hrs: 32,
    performance_score: 80, partnership_rating: 4.1, last_qbr: '2026-01-22', next_qbr: '2026-04-28',
    key_contact_uw: 'Andreas Schmidt',   key_contact_claims: 'Elena Rossi',   key_contact_audit: 'Bernd Fischer',
    integration_method: 'File (SFTP)', health: 'Watch',
    contingent_commission_projected: 72000, open_referrals: 2, data_feeds: ['Policies','Claims']
  },
  {
    id: 'CAR-07', name: 'Berkley Net', naic: '32603', am_best: 'A-', sp_rating: 'A-', tier: 'Growth',
    logo_initials: 'BK', logo_color: 'linear-gradient(135deg,#43a047,#388e3c)',
    relationship_status: 'Active', since: '2023-09-01', contract_id: 'CNT-1007',
    contract_effective: '2023-09-01', contract_expiry: '2026-08-31', contract_version: 'v2',
    products: ['WorkForce WC — CA Small'], lobs: ['Workers Comp'],
    states: ['CA'],
    binding_authority: 75000, claims_authority: 50000, subjectivity_required_above: 150000,
    commission_rate: 13, profit_share_threshold_lr: 60, profit_share_pct: 20, profit_share_earned_ytd: 42000,
    capacity_treaty: 2400000, capacity_used: 1820000, capacity_pct: 76,
    premium_ytd: 1820000, premium_prior_ytd: 1420000, growth_pct: 28, policies_inforce: 248,
    loss_ratio_ytd: 52, combined_ratio_ytd: 96, claims_count_ytd: 14,
    submission_quality: 82, claims_handling: 84, uw_response_time_hrs: 36,
    performance_score: 76, partnership_rating: 4.0, last_qbr: '2026-02-01', next_qbr: '2026-05-05',
    key_contact_uw: 'Andrew Collins',   key_contact_claims: 'Maria Rodriguez',   key_contact_audit: 'Peter Nguyen',
    integration_method: 'Direct API', health: 'Watch',
    contingent_commission_projected: 48000, open_referrals: 6, data_feeds: ['Policies','Claims','Bordereau']
  },
  {
    id: 'CAR-08', name: 'Markel E&S', naic: '38970', am_best: 'A', sp_rating: 'A', tier: 'Onboarding',
    logo_initials: 'MK', logo_color: 'linear-gradient(135deg,#ab47bc,#8e24aa)',
    relationship_status: 'Onboarding', since: '2026-03-15', contract_id: 'CNT-1008',
    contract_effective: '2026-05-01', contract_expiry: '2028-04-30', contract_version: 'v1 (draft)',
    products: ['SecureEdge Cyber (E&S)', 'PropertyGuard Plus (E&S Cat)'], lobs: ['Cyber','Property E&S'],
    states: ['TX','FL','LA','GA'],
    binding_authority: 100000, claims_authority: 50000, subjectivity_required_above: 250000,
    commission_rate: 17, profit_share_threshold_lr: 55, profit_share_pct: 30, profit_share_earned_ytd: 0,
    capacity_treaty: 5000000, capacity_used: 0, capacity_pct: 0,
    premium_ytd: 0, premium_prior_ytd: 0, growth_pct: 0, policies_inforce: 0,
    loss_ratio_ytd: 0, combined_ratio_ytd: 0, claims_count_ytd: 0,
    submission_quality: null, claims_handling: null, uw_response_time_hrs: null,
    performance_score: null, partnership_rating: null, last_qbr: null, next_qbr: '2026-07-15',
    key_contact_uw: 'Paul Westbrook',   key_contact_claims: 'Sara Williams',   key_contact_audit: '—',
    integration_method: 'Pending (API planned)', health: 'Onboarding',
    contingent_commission_projected: 0, open_referrals: 0, data_feeds: [],
    onboarding_progress: 68, onboarding_next_step: 'Complete rate + form filings in TX + FL'
  }
];

export const mgaCarrierProfileCanonical = {
  carrier_id: 'CAR-01',
  overview: {
    strategic_importance: 'Tier 1 / Core Partner — primary carrier for commercial auto and BOP/Property programs. Top-3 carrier by written premium and consistent loss ratio performance.',
    relationship_health: 'Healthy',
    concerns: [],
    opportunities: ['Expand property capacity to PA + NJ (treaty amendment pending)', 'Cross-sell BOP to existing auto accounts (62 prospects identified)']
  },
  agreement_terms: {
    contract_id: 'CNT-1001', version: 'v4', effective: '2024-01-01', expiry: '2027-12-31',
    auto_renew: true, termination_notice_days: 120,
    addendums: [
      { number: 4, date: '2026-04-17', description: 'CA Property capacity increase $5M/risk · new SFHA underwriting rules' },
      { number: 3, date: '2025-08-15', description: 'TRIA election and cyber extension form updates' },
      { number: 2, date: '2025-03-01', description: 'Commission schedule revision — BOP 13%→14%' },
      { number: 1, date: '2024-06-01', description: 'Addition of Auto program (FleetSafe)' }
    ],
    side_letters: [
      { date: '2026-02-10', description: 'Side letter: waiver of minimum premium volume for 2026 due to market softening' }
    ]
  },
  contacts: [
    { role: 'VP Underwriting (National)',  name: 'Rajesh Patel',    email: 'rajesh.patel@travelers.com',   phone: '860-555-4421', ext: '4421' },
    { role: 'Director, Commercial Auto',   name: 'Susan Fletcher',  email: 'susan.fletcher@travelers.com', phone: '860-555-4425', ext: '4425' },
    { role: 'Claims Operations Lead',      name: 'Karen Liu',       email: 'karen.liu@travelers.com',       phone: '860-555-4500', ext: '4500' },
    { role: 'Large Loss Committee Chair',  name: 'Robert Young',    email: 'robert.young@travelers.com',    phone: '860-555-4512', ext: '4512' },
    { role: 'MGA Audit Lead',               name: 'Michael Donovan', email: 'michael.donovan@travelers.com', phone: '860-555-4600', ext: '4600' },
    { role: 'Accounting / Bordereau',       name: 'Sharon Wells',     email: 'sharon.wells@travelers.com',    phone: '860-555-4640', ext: '4640' }
  ],
  products_and_states: [
    { product: 'FleetSafe Auto',       states: ['CA','TX','NY','FL','IL','OH','PA','GA','AZ','CO','NV','WA','OR','NC'], rate_filed: true,  form_filed: true,  deployed: true,  written_ytd: 10800000, policies: 482 },
    { product: 'MainStreet BOP',       states: ['CA','TX','NY','FL','IL','OH','GA','AZ'],                                 rate_filed: true,  form_filed: true,  deployed: true,  written_ytd:  5200000, policies: 282 },
    { product: 'PropertyGuard',         states: ['CA','TX','FL','GA','NC','AZ'],                                           rate_filed: true,  form_filed: true,  deployed: true,  written_ytd:  2400000, policies:  78 }
  ],
  authority: {
    binding_limit: 250000, claims_limit: 100000, new_products_authority: 'Senior UW or higher',
    subjectivity_req_above: 500000, class_exclusions: ['Nightclubs','Amusement parks','Armed security','Professional drivers under 21'],
    loss_ratio_trigger: 65, authority_last_reviewed: '2026-01-15'
  },
  commission_and_profit_share: {
    schedule: [
      { product: 'FleetSafe Auto', rate: 14, new_business_bonus: 1, renewal_rate: 14 },
      { product: 'MainStreet BOP', rate: 14, new_business_bonus: 1, renewal_rate: 14 },
      { product: 'PropertyGuard',   rate: 12, new_business_bonus: 1, renewal_rate: 12 }
    ],
    profit_share: {
      threshold_lr: 55, pct: 30, min_premium: 5000000, measurement_period: 'Calendar Year',
      ytd_earned: 482000, full_year_projected: 620000, prior_year_actual: 512000
    },
    contingent_commission: {
      ytd_earned: 482000, projected_full_year: 620000, paid_last: '2026-02-15', next_payment: '2027-02-15'
    }
  },
  documents: [
    { name: '2026 MGA Agreement v4.pdf',                type: 'Contract',      size: '2.4 MB', date: '2026-04-17' },
    { name: 'Travelers Amendment #4.pdf',               type: 'Addendum',       size: '380 KB', date: '2026-04-17' },
    { name: '2025 Q4 Carrier Audit Report.pdf',         type: 'Audit Report',   size: '1.2 MB', date: '2026-02-28' },
    { name: 'CA Rate Filing — PropertyGuard 2026.pdf',  type: 'Rate Filing',     size: '680 KB', date: '2025-11-05' },
    { name: 'FleetSafe Side Letter — Volume Waiver.pdf', type: 'Side Letter',   size: '120 KB', date: '2026-02-10' },
    { name: '2026 Commission Schedule.xlsx',             type: 'Commission',     size: '80 KB',  date: '2026-01-01' },
    { name: 'Claims Bordereau Template.xlsx',            type: 'Template',        size: '42 KB',  date: '2025-01-01' },
    { name: '2025 Q3 QBR Deck.pptx',                     type: 'QBR',            size: '4.2 MB', date: '2025-10-15' },
    { name: '2025 Q4 QBR Deck.pptx',                     type: 'QBR',            size: '4.4 MB', date: '2026-01-15' }
  ]
};

export const mgaCarrierScorecards = [
  { carrier_id: 'CAR-01', carrier: 'Travelers',          period: '2026 Q1', premium: 4600000, growth: 18, loss_ratio: 42, combined_ratio: 88, sub_quality: 92, claims_handling: 94, profit_share: 140000, partnership: 4.6, overall: 91 },
  { carrier_id: 'CAR-02', carrier: 'SEMC / Liberty',     period: '2026 Q1', premium: 3650000, growth: 11, loss_ratio: 48, combined_ratio: 92, sub_quality: 88, claims_handling: 90, profit_share: 52000,  partnership: 4.4, overall: 85 },
  { carrier_id: 'CAR-03', carrier: 'CNA',                 period: '2026 Q1', premium: 3050000, growth: 17, loss_ratio: 34, combined_ratio: 82, sub_quality: 94, claims_handling: 92, profit_share: 95000,  partnership: 4.8, overall: 94 },
  { carrier_id: 'CAR-04', carrier: 'Hartford',            period: '2026 Q1', premium: 1350000, growth: 42, loss_ratio: 36, combined_ratio: 86, sub_quality: 90, claims_handling: 88, profit_share: 38000,  partnership: 4.5, overall: 88 },
  { carrier_id: 'CAR-05', carrier: 'Chubb',               period: '2026 Q1', premium:  950000, growth: 36, loss_ratio: 28, combined_ratio: 76, sub_quality: 96, claims_handling: 96, profit_share: 42000,  partnership: 4.9, overall: 96 },
  { carrier_id: 'CAR-06', carrier: 'Zurich',              period: '2026 Q1', premium:  405000, growth: -9, loss_ratio: 48, combined_ratio: 94, sub_quality: 86, claims_handling: 88, profit_share: 18000,  partnership: 4.1, overall: 80 },
  { carrier_id: 'CAR-07', carrier: 'Berkley Net',         period: '2026 Q1', premium:  455000, growth: 28, loss_ratio: 52, combined_ratio: 96, sub_quality: 82, claims_handling: 84, profit_share: 12000,  partnership: 4.0, overall: 76 },
  { carrier_id: 'CAR-01', carrier: 'Travelers',          period: '2025 Q4', premium: 4100000, growth: 12, loss_ratio: 44, combined_ratio: 90, sub_quality: 90, claims_handling: 92, profit_share: 118000, partnership: 4.5, overall: 89 },
  { carrier_id: 'CAR-03', carrier: 'CNA',                 period: '2025 Q4', premium: 2820000, growth: 14, loss_ratio: 32, combined_ratio: 80, sub_quality: 92, claims_handling: 92, profit_share: 82000,  partnership: 4.7, overall: 93 }
];

export const mgaCarrierQBRs = [
  { id: 'QBR-2026Q2-CAR-03', carrier_id: 'CAR-03', carrier: 'CNA',                 scheduled: '2026-04-18', duration_min: 90, status: 'Today',       agenda_items: 11, action_items_open: 4, stakeholders: ['Marcus Henderson','Sarah Chen','Matthew Brody','Lisa Chen'],    meeting_link: 'meet.google.com/cna-qbr-q2' },
  { id: 'QBR-2026Q2-CAR-01', carrier_id: 'CAR-01', carrier: 'Travelers',          scheduled: '2026-04-22', duration_min: 120,status: 'Scheduled',  agenda_items: 14, action_items_open: 6, stakeholders: ['Marcus Henderson','Lisa Park','Rajesh Patel','Karen Liu'],       meeting_link: 'meet.google.com/trv-qbr-q2' },
  { id: 'QBR-2026Q2-CAR-02', carrier_id: 'CAR-02', carrier: 'SEMC / Liberty',     scheduled: '2026-04-25', duration_min: 120,status: 'Scheduled',  agenda_items: 16, action_items_open: 8, stakeholders: ['Marcus Henderson','Sarah Chen','Jennifer Kim','David Park'],    meeting_link: 'meet.google.com/lib-qbr-q2', note: 'Renewal negotiations on agenda' },
  { id: 'QBR-2026Q2-CAR-06', carrier_id: 'CAR-06', carrier: 'Zurich',              scheduled: '2026-04-28', duration_min: 60, status: 'Scheduled',  agenda_items: 8,  action_items_open: 3, stakeholders: ['Marcus Henderson','Lisa Park','Andreas Schmidt'],                meeting_link: 'meet.google.com/zur-qbr-q2' },
  { id: 'QBR-2026Q2-CAR-07', carrier_id: 'CAR-07', carrier: 'Berkley Net',         scheduled: '2026-05-05', duration_min: 60, status: 'Scheduled',  agenda_items: 7,  action_items_open: 2, stakeholders: ['Marcus Henderson','Mike Torres','Andrew Collins'],                meeting_link: 'meet.google.com/bkn-qbr-q2' },
  { id: 'QBR-2026Q2-CAR-04', carrier_id: 'CAR-04', carrier: 'Hartford',            scheduled: '2026-05-10', duration_min: 90, status: 'Scheduled',  agenda_items: 10, action_items_open: 3, stakeholders: ['Marcus Henderson','Sarah Chen','Patricia Collins','Anthony Miller'], meeting_link: 'meet.google.com/hrt-qbr-q2' },
  { id: 'QBR-2026Q1-CAR-03', carrier_id: 'CAR-03', carrier: 'CNA',                 scheduled: '2026-01-08', duration_min: 90, status: 'Completed',  agenda_items: 12, action_items_open: 0, stakeholders: ['—'],                                                                  meeting_link: null, note: 'All action items closed · strong quarter' },
  { id: 'QBR-2026Q1-CAR-01', carrier_id: 'CAR-01', carrier: 'Travelers',          scheduled: '2026-01-15', duration_min: 120,status: 'Completed',  agenda_items: 13, action_items_open: 2, stakeholders: ['—'],                                                                  meeting_link: null, note: '2 open items · capacity amendment and TRIA renewal' }
];

export const mgaCarrierCapacity = [
  { carrier_id: 'CAR-01', carrier: 'Travelers',       treaty: 25000000, used: 18400000, pct: 74, per_risk_max: 5000000, buffer: 6600000, health: 'Healthy',  trend_30d: '+2.1pp' },
  { carrier_id: 'CAR-02', carrier: 'SEMC / Liberty',  treaty: 18000000, used: 14600000, pct: 81, per_risk_max: 3000000, buffer: 3400000, health: 'Watch',    trend_30d: '+3.4pp' },
  { carrier_id: 'CAR-03', carrier: 'CNA',              treaty: 20000000, used: 12200000, pct: 61, per_risk_max: 5000000, buffer: 7800000, health: 'Healthy',  trend_30d: '+1.2pp' },
  { carrier_id: 'CAR-04', carrier: 'Hartford',         treaty:  8000000, used:  5400000, pct: 68, per_risk_max: 2000000, buffer: 2600000, health: 'Healthy',  trend_30d: '+5.2pp' },
  { carrier_id: 'CAR-05', carrier: 'Chubb',            treaty:  6000000, used:  3800000, pct: 63, per_risk_max: 2000000, buffer: 2200000, health: 'Healthy',  trend_30d: '+4.1pp' },
  { carrier_id: 'CAR-06', carrier: 'Zurich',           treaty:  4000000, used:  1620000, pct: 41, per_risk_max: 2500000, buffer: 2380000, health: 'Low-Util', trend_30d: '-1.0pp' },
  { carrier_id: 'CAR-07', carrier: 'Berkley Net',      treaty:  2400000, used:  1820000, pct: 76, per_risk_max:  500000, buffer:  580000, health: 'Watch',    trend_30d: '+4.8pp' },
  { carrier_id: 'CAR-08', carrier: 'Markel E&S',        treaty:  5000000, used:        0, pct:  0, per_risk_max: 1000000, buffer: 5000000, health: 'Onboarding',trend_30d: '0.0pp' }
];

export const mgaCarrierAuthorityRequests = [
  { id: 'AUTH-2026-041', carrier_id: 'CAR-01', carrier: 'Travelers',      type: 'Capacity Amendment',      description: 'Increase PA + NJ Property treaty capacity from $2M/risk to $5M/risk · adds ~$8M capacity',                            submitted: '2026-04-12', submitted_by: 'Sarah Chen',     status: 'With Carrier UW',  priority: 'High',   eta: '2026-05-01' },
  { id: 'AUTH-2026-040', carrier_id: 'CAR-02', carrier: 'SEMC / Liberty', type: 'New Product Approval',     description: 'Launch MainStreet BOP — Restaurants subclass for FL market · rate + form filings complete',                        submitted: '2026-03-20', submitted_by: 'Lisa Park',      status: 'Approved',         priority: 'High',   eta: '2026-04-15', approved: '2026-04-10' },
  { id: 'AUTH-2026-039', carrier_id: 'CAR-03', carrier: 'CNA',             type: 'Binding Authority Raise',   description: 'Raise cyber binding authority from $500k to $1M for enterprise tech risks · subject to senior UW co-sign',           submitted: '2026-04-05', submitted_by: 'Sarah Chen',     status: 'Under Review',     priority: 'Medium', eta: '2026-05-15' },
  { id: 'AUTH-2026-038', carrier_id: 'CAR-04', carrier: 'Hartford',        type: 'New State',                  description: 'Add MA + NJ to FleetSafe Auto program · rate filing in progress',                                                  submitted: '2026-03-28', submitted_by: 'Mike Torres',    status: 'Rate Filing Pending', priority: 'Medium', eta: '2026-06-01' },
  { id: 'AUTH-2026-037', carrier_id: 'CAR-06', carrier: 'Zurich',          type: 'Class Expansion',           description: 'Add manufacturing — Class 5403 (chemicals) to PropertyGuard appetite · declined last cycle',                       submitted: '2026-03-15', submitted_by: 'Lisa Park',      status: 'Declined',         priority: 'Low',    eta: '—',           declined: '2026-04-02', decline_reason: 'Outside Zurich global chemical appetite · resubmit with narrower class (5400) in Q3' },
  { id: 'AUTH-2026-036', carrier_id: 'CAR-05', carrier: 'Chubb',           type: 'Profit Share Adjustment',   description: 'Renegotiate profit share threshold from 45% LR to 40% LR · supported by 4-quarter performance',                    submitted: '2026-02-25', submitted_by: 'Marcus Henderson',status: 'Counter-Offered', priority: 'Medium', eta: '2026-05-01', counter: '42% LR threshold with 35% profit share pct (vs. current 40%)' },
  { id: 'AUTH-2026-035', carrier_id: 'CAR-07', carrier: 'Berkley Net',     type: 'Claims Authority Raise',    description: 'Raise claims authority from $50k to $75k for California WC · improves cycle time by ~4 days',                       submitted: '2026-03-10', submitted_by: 'Jane Rodriguez', status: 'Approved',         priority: 'Medium', eta: '2026-04-01', approved: '2026-03-28' }
];

export const mgaCarrierPremiumBordereau = [
  { id: 'PBD-2026-04-01', carrier_id: 'CAR-01', carrier: 'Travelers',       type: 'Premium Monthly',  period: 'Mar 2026', policies: 82, premium_written: 1420000, commission_due: 198800, reserve_change: 42000, submitted: '2026-04-05 09:00', status: 'Reconciled',        statusColor:'green', variance: 0,       ack: 'TRV-PBD-8801' },
  { id: 'PBD-2026-04-02', carrier_id: 'CAR-02', carrier: 'SEMC / Liberty',  type: 'Premium Monthly',  period: 'Mar 2026', policies: 142,premium_written: 1240000, commission_due: 161200, reserve_change: 18400, submitted: '2026-04-05 09:00', status: 'Reconciled',        statusColor:'green', variance: 0,       ack: 'LIB-PBD-4421' },
  { id: 'PBD-2026-04-03', carrier_id: 'CAR-03', carrier: 'CNA',              type: 'Premium Monthly',  period: 'Mar 2026', policies: 54, premium_written:  920000, commission_due: 138000, reserve_change: 12400, submitted: '2026-04-05 09:00', status: 'In Reconciliation', statusColor:'amber', variance: -4200,   ack: 'CNA-PBD-2201', note: 'Variance from endorsement premium timing — under investigation' },
  { id: 'PBD-2026-04-04', carrier_id: 'CAR-04', carrier: 'Hartford',         type: 'Premium Monthly',  period: 'Mar 2026', policies: 42, premium_written:  580000, commission_due: 75400,  reserve_change: 8200,  submitted: '2026-04-05 09:00', status: 'Reconciled',        statusColor:'green', variance: 0,       ack: 'HFD-PBD-9921' },
  { id: 'PBD-2026-04-05', carrier_id: 'CAR-05', carrier: 'Chubb',            type: 'Premium Monthly',  period: 'Mar 2026', policies: 12, premium_written:  320000, commission_due: 57600,  reserve_change: 0,      submitted: '2026-04-05 09:00', status: 'Reconciled',        statusColor:'green', variance: 0,       ack: 'CHB-PBD-1101' },
  { id: 'PBD-2026-04-06', carrier_id: 'CAR-06', carrier: 'Zurich',           type: 'Premium Monthly',  period: 'Mar 2026', policies: 8,  premium_written:  148000, commission_due: 17760,  reserve_change: 0,      submitted: '2026-04-05 09:00', status: 'Dispute Open',      statusColor:'red',   variance: -8400,   ack: 'ZUR-PBD-0440', note: 'Disputed: Zurich claims $8,400 premium mismatch on Peninsula Mfg endorsement · meeting scheduled 2026-04-22' },
  { id: 'PBD-2026-04-07', carrier_id: 'CAR-07', carrier: 'Berkley Net',      type: 'Premium Monthly',  period: 'Mar 2026', policies: 22, premium_written:  162000, commission_due: 21060,  reserve_change: 2200,   submitted: '2026-04-05 09:00', status: 'Reconciled',        statusColor:'green', variance: 0,       ack: 'BKN-PBD-8812' }
];

export const mgaCarrierAnalytics = {
  profitability_by_carrier: [
    { carrier: 'Chubb',            premium: 3800000,  loss_ratio: 28, combined_ratio: 76, comm: 684000,  contingent: 148000, margin: 24 },
    { carrier: 'CNA',               premium: 12200000, loss_ratio: 34, combined_ratio: 82, comm: 1830000, contingent: 485000, margin: 18 },
    { carrier: 'Hartford',          premium: 5400000,  loss_ratio: 36, combined_ratio: 86, comm: 702000,  contingent: 182000, margin: 14 },
    { carrier: 'Travelers',         premium: 18400000, loss_ratio: 42, combined_ratio: 88, comm: 2576000, contingent: 620000, margin: 12 },
    { carrier: 'SEMC / Liberty',    premium: 14600000, loss_ratio: 48, combined_ratio: 92, comm: 1898000, contingent: 285000, margin: 8  },
    { carrier: 'Zurich',            premium: 1620000,  loss_ratio: 48, combined_ratio: 94, comm: 194400,  contingent: 72000,  margin: 6  },
    { carrier: 'Berkley Net',       premium: 1820000,  loss_ratio: 52, combined_ratio: 96, comm: 236600,  contingent: 48000,  margin: 4  }
  ],
  growth_trend: [
    { q: '2025 Q1', total: 12400000 },
    { q: '2025 Q2', total: 13200000 },
    { q: '2025 Q3', total: 13850000 },
    { q: '2025 Q4', total: 14620000 },
    { q: '2026 Q1', total: 14465000 }
  ],
  authority_utilization: [
    { carrier: 'SEMC / Liberty', binding_used: 92, claims_used: 68 },
    { carrier: 'Travelers',       binding_used: 76, claims_used: 52 },
    { carrier: 'CNA',              binding_used: 64, claims_used: 44 },
    { carrier: 'Hartford',         binding_used: 62, claims_used: 58 },
    { carrier: 'Berkley Net',      binding_used: 84, claims_used: 72 },
    { carrier: 'Chubb',            binding_used: 48, claims_used: 40 },
    { carrier: 'Zurich',           binding_used: 32, claims_used: 28 }
  ],
  loss_ratio_by_product_carrier: [
    { carrier: 'Travelers',      product: 'FleetSafe Auto',     lr: 52 },
    { carrier: 'Travelers',      product: 'MainStreet BOP',     lr: 38 },
    { carrier: 'Travelers',      product: 'PropertyGuard',      lr: 44 },
    { carrier: 'CNA',             product: 'GuardPoint GL',      lr: 38 },
    { carrier: 'CNA',             product: 'SecureEdge Cyber',   lr: 28 },
    { carrier: 'CNA',             product: 'OverShield Umbrella',lr: 18 },
    { carrier: 'SEMC / Liberty', product: 'WorkForce WC — CA',  lr: 42 },
    { carrier: 'SEMC / Liberty', product: 'MainStreet BOP',     lr: 46 },
    { carrier: 'Hartford',       product: 'FleetSafe Auto',     lr: 50 },
    { carrier: 'Chubb',           product: 'BoardGuard D&O',     lr: 24 },
    { carrier: 'Chubb',           product: 'SecureEdge Cyber',   lr: 32 },
    { carrier: 'Zurich',          product: 'PropertyGuard',      lr: 48 }
  ]
};

// ─── MGA Reports & Analytics ───
export const mgaReportsKPIs = [
  { label: 'Written Premium (YTD)',  value: '$58.5M' },
  { label: 'Combined Ratio',         value: '88%' },
  { label: 'Retention Rate',         value: '91%' },
  { label: 'New Biz Growth',         value: '+18%' },
  { label: 'Bind Ratio',             value: '52%' },
  { label: 'Risk Quality Index',     value: '86' }
];

export const mgaExecMetrics = {
  written_premium_ytd: 58500000,
  written_premium_prior_ytd: 49600000,
  loss_ratio_ytd: 38,
  combined_ratio_ytd: 88,
  retention_rate: 91,
  new_business_growth: 18,
  commission_income_ytd: 7605000,
  capacity_utilization: 68,
  submission_bind_ratio: 52,
  risk_quality_index: 86,
  policies_inforce: 4946,
  active_agents: 84,
  monthly_trend: [
    { month: 'Nov 25', premium: 4200000, loss_ratio: 36, combined_ratio: 86 },
    { month: 'Dec 25', premium: 4800000, loss_ratio: 38, combined_ratio: 88 },
    { month: 'Jan 26', premium: 5400000, loss_ratio: 37, combined_ratio: 87 },
    { month: 'Feb 26', premium: 5100000, loss_ratio: 39, combined_ratio: 89 },
    { month: 'Mar 26', premium: 5600000, loss_ratio: 38, combined_ratio: 88 },
    { month: 'Apr 26', premium: 2800000, loss_ratio: 38, combined_ratio: 88 }
  ],
  yoy_growth: [
    { year: '2022', premium: 28400000, growth: null },
    { year: '2023', premium: 38200000, growth: 35 },
    { year: '2024', premium: 44800000, growth: 17 },
    { year: '2025', premium: 58400000, growth: 30 },
    { year: '2026 (proj)', premium: 72000000, growth: 23 }
  ]
};

export const mgaSubmissionFunnel = {
  stages: [
    { stage: 'Submissions Received',   count: 1840, pct: 100, drop: null },
    { stage: 'Cleared Appetite',        count: 1424, pct:  77, drop: 416  },
    { stage: 'Quoted',                   count:  986, pct:  54, drop: 438  },
    { stage: 'Bound',                    count:  512, pct:  28, drop: 474  },
    { stage: 'Issued',                   count:  498, pct:  27, drop:  14  }
  ],
  overall_bind_ratio: 52,
  avg_days_to_quote: 2.1,
  avg_days_to_bind: 4.8,
  top_decline_reasons: [
    { reason: 'Outside appetite',         count: 312, pct: 75 },
    { reason: 'Missing subjectivity',     count: 62,  pct: 15 },
    { reason: 'Loss history exceeds threshold', count: 28, pct: 7 },
    { reason: 'Rate inadequate',          count: 14,  pct: 3 }
  ]
};

export const mgaProfitHeatmap = {
  dimensions: ['Commercial Auto','General Liability','Workers Comp','BOP','Cyber','Property','D&O','Umbrella'],
  states: ['CA','TX','NY','FL','IL','OH','PA','GA'],
  cells: [
    // Commercial Auto
    { lob: 'Commercial Auto', state: 'CA', lr: 52, premium: 2400000 },
    { lob: 'Commercial Auto', state: 'TX', lr: 48, premium: 2800000 },
    { lob: 'Commercial Auto', state: 'NY', lr: 58, premium: 1800000 },
    { lob: 'Commercial Auto', state: 'FL', lr: 62, premium: 2100000 },
    { lob: 'Commercial Auto', state: 'IL', lr: 44, premium: 1200000 },
    { lob: 'Commercial Auto', state: 'OH', lr: 42, premium: 820000 },
    { lob: 'Commercial Auto', state: 'PA', lr: 46, premium: 940000 },
    { lob: 'Commercial Auto', state: 'GA', lr: 54, premium: 680000 },
    // General Liability
    { lob: 'General Liability', state: 'CA', lr: 38, premium: 1800000 },
    { lob: 'General Liability', state: 'TX', lr: 42, premium: 2200000 },
    { lob: 'General Liability', state: 'NY', lr: 48, premium: 1400000 },
    { lob: 'General Liability', state: 'FL', lr: 52, premium: 1620000 },
    { lob: 'General Liability', state: 'IL', lr: 36, premium: 820000 },
    { lob: 'General Liability', state: 'OH', lr: 34, premium: 480000 },
    { lob: 'General Liability', state: 'PA', lr: 40, premium: 640000 },
    { lob: 'General Liability', state: 'GA', lr: 44, premium: 380000 },
    // Workers Comp
    { lob: 'Workers Comp', state: 'CA', lr: 42, premium: 4800000 },
    { lob: 'Workers Comp', state: 'TX', lr: null, premium: 0 },
    { lob: 'Workers Comp', state: 'NY', lr: 44, premium: 1840000 },
    { lob: 'Workers Comp', state: 'FL', lr: 48, premium: 1200000 },
    { lob: 'Workers Comp', state: 'IL', lr: 38, premium: 820000 },
    { lob: 'Workers Comp', state: 'OH', lr: null, premium: 0 },
    { lob: 'Workers Comp', state: 'PA', lr: 40, premium: 580000 },
    { lob: 'Workers Comp', state: 'GA', lr: null, premium: 0 },
    // BOP
    { lob: 'BOP', state: 'CA', lr: 38, premium: 1200000 },
    { lob: 'BOP', state: 'TX', lr: 44, premium: 1420000 },
    { lob: 'BOP', state: 'NY', lr: 42, premium: 820000 },
    { lob: 'BOP', state: 'FL', lr: 48, premium: 1100000 },
    { lob: 'BOP', state: 'IL', lr: 36, premium: 620000 },
    { lob: 'BOP', state: 'OH', lr: 38, premium: 420000 },
    { lob: 'BOP', state: 'PA', lr: 40, premium: 340000 },
    { lob: 'BOP', state: 'GA', lr: 44, premium: 380000 },
    // Cyber
    { lob: 'Cyber', state: 'CA', lr: 28, premium: 1800000 },
    { lob: 'Cyber', state: 'TX', lr: 24, premium: 1240000 },
    { lob: 'Cyber', state: 'NY', lr: 32, premium: 1100000 },
    { lob: 'Cyber', state: 'FL', lr: 30, premium: 620000 },
    { lob: 'Cyber', state: 'IL', lr: 26, premium: 420000 },
    { lob: 'Cyber', state: 'OH', lr: 22, premium: 240000 },
    { lob: 'Cyber', state: 'PA', lr: 28, premium: 320000 },
    { lob: 'Cyber', state: 'GA', lr: null, premium: 0 },
    // Property
    { lob: 'Property', state: 'CA', lr: 46, premium: 620000 },
    { lob: 'Property', state: 'TX', lr: 42, premium: 380000 },
    { lob: 'Property', state: 'NY', lr: null, premium: 0 },
    { lob: 'Property', state: 'FL', lr: 68, premium: 420000 },
    { lob: 'Property', state: 'IL', lr: 38, premium: 140000 },
    { lob: 'Property', state: 'OH', lr: null, premium: 0 },
    { lob: 'Property', state: 'PA', lr: 40, premium: 60000 },
    { lob: 'Property', state: 'GA', lr: 44, premium: 140000 },
    // D&O
    { lob: 'D&O', state: 'CA', lr: 24, premium: 820000 },
    { lob: 'D&O', state: 'TX', lr: 28, premium: 420000 },
    { lob: 'D&O', state: 'NY', lr: 32, premium: 680000 },
    { lob: 'D&O', state: 'FL', lr: null, premium: 0 },
    { lob: 'D&O', state: 'IL', lr: 22, premium: 240000 },
    { lob: 'D&O', state: 'OH', lr: null, premium: 0 },
    { lob: 'D&O', state: 'PA', lr: null, premium: 0 },
    { lob: 'D&O', state: 'GA', lr: null, premium: 0 },
    // Umbrella
    { lob: 'Umbrella', state: 'CA', lr: 18, premium: 840000 },
    { lob: 'Umbrella', state: 'TX', lr: 22, premium: 620000 },
    { lob: 'Umbrella', state: 'NY', lr: 16, premium: 480000 },
    { lob: 'Umbrella', state: 'FL', lr: 24, premium: 380000 },
    { lob: 'Umbrella', state: 'IL', lr: 14, premium: 220000 },
    { lob: 'Umbrella', state: 'OH', lr: 18, premium: 140000 },
    { lob: 'Umbrella', state: 'PA', lr: 16, premium: 140000 },
    { lob: 'Umbrella', state: 'GA', lr: 20, premium: 0 }
  ]
};

export const mgaAgentLeaderboard = {
  top_performers: [
    { rank: 1, agent: 'Lockton Companies',    id: 'AGT-2038', premium_ytd: 8400000, submissions: 142, bound: 88, bind_ratio: 62, loss_ratio: 36, score: 96 },
    { rank: 2, agent: 'Marsh Agency Inc',      id: 'AGT-2039', premium_ytd: 6200000, submissions: 108, bound: 68, bind_ratio: 63, loss_ratio: 34, score: 94 },
    { rank: 3, agent: 'Apex Insurance Svc',    id: 'AGT-2040', premium_ytd: 4800000, submissions:  94, bound: 58, bind_ratio: 62, loss_ratio: 38, score: 92 },
    { rank: 4, agent: 'Brown & Brown',          id: 'AGT-2041', premium_ytd: 3900000, submissions:  82, bound: 48, bind_ratio: 59, loss_ratio: 40, score: 90 },
    { rank: 5, agent: 'Hub International',     id: 'AGT-2042', premium_ytd: 3200000, submissions:  72, bound: 42, bind_ratio: 58, loss_ratio: 42, score: 88 },
    { rank: 6, agent: 'Arthur J. Gallagher',   id: 'AGT-2043', premium_ytd: 2800000, submissions:  68, bound: 38, bind_ratio: 56, loss_ratio: 44, score: 86 },
    { rank: 7, agent: 'Risk Strategies',        id: 'AGT-2044', premium_ytd: 2400000, submissions:  58, bound: 32, bind_ratio: 55, loss_ratio: 44, score: 85 },
    { rank: 8, agent: 'AssuredPartners',        id: 'AGT-2045', premium_ytd: 1800000, submissions:  52, bound: 28, bind_ratio: 54, loss_ratio: 46, score: 82 }
  ],
  bottom_performers: [
    { rank: 1, agent: 'Regional Alpha Agency',  id: 'AGT-2080', premium_ytd:  180000, submissions:  22, bound:  6, bind_ratio: 27, loss_ratio: 68, score: 48, issue: 'Low hit ratio · high loss ratio · submissions often outside appetite' },
    { rank: 2, agent: 'SunBelt Insurance Co',   id: 'AGT-2078', premium_ytd:  240000, submissions:  28, bound:  8, bind_ratio: 29, loss_ratio: 62, score: 54, issue: '4 unresolved E&O claims · compliance training overdue' },
    { rank: 3, agent: 'Coastline Brokers',      id: 'AGT-2082', premium_ytd:  120000, submissions:  18, bound:  4, bind_ratio: 22, loss_ratio: 72, score: 42, issue: 'Under PIP · quality improvement plan due 2026-06-01' }
  ]
};

export const mgaReportCatalog = [
  // Executive
  { id: 'RPT-EXE-01', name: 'MGA Profitability Overview',          category: 'Executive',   format: 'PDF + Excel', frequency: 'Monthly',   owner: 'Marcus Henderson', last_generated: '2026-04-01', distribution: 'C-Suite + Board', description: 'Written premium, loss ratio, combined ratio, commission, contingent income · by carrier and overall' },
  { id: 'RPT-EXE-02', name: 'Portfolio Health Scorecard',          category: 'Executive',   format: 'PDF',         frequency: 'Weekly',    owner: 'Sarah Chen',        last_generated: '2026-04-14', distribution: 'Executive Team',  description: 'Key KPIs · appetite distribution · growth · risk quality index · flags' },
  { id: 'RPT-EXE-03', name: 'Carrier Partnership Summary',          category: 'Executive',   format: 'PDF',         frequency: 'Quarterly', owner: 'Marcus Henderson', last_generated: '2026-01-15', distribution: 'CEO + Board',      description: '360° view of each carrier · premium · LR · contingent · partnership rating · renewal roadmap' },
  { id: 'RPT-EXE-04', name: 'Year-over-Year Growth Analysis',       category: 'Executive',   format: 'Excel',        frequency: 'Monthly',   owner: 'Omar Khalid',       last_generated: '2026-04-02', distribution: 'CFO + Board',      description: 'Premium growth by year/quarter · product/state/carrier mix shift · drivers' },
  // Operational
  { id: 'RPT-OPR-01', name: 'Submission Funnel Analysis',            category: 'Operational', format: 'Dashboard',    frequency: 'Weekly',    owner: 'Sarah Chen',        last_generated: '2026-04-15', distribution: 'UW Team',           description: 'Submissions received → quoted → bound funnel · drop-off reasons · by underwriter/agent' },
  { id: 'RPT-OPR-02', name: 'Renewal Retention Dashboard',           category: 'Operational', format: 'Dashboard',    frequency: 'Daily',     owner: 'Lisa Park',          last_generated: '2026-04-18', distribution: 'UW + Account Exec',  description: 'Renewal pipeline · at-risk accounts · retention by agent/carrier/product · premium at stake' },
  { id: 'RPT-OPR-03', name: 'Claims Leakage Report',                 category: 'Operational', format: 'PDF + Excel', frequency: 'Monthly',   owner: 'Jane Rodriguez',     last_generated: '2026-04-05', distribution: 'Claims Mgmt',       description: 'Unnecessary claim payment variance · by adjuster · by LOB · leakage % against benchmark' },
  { id: 'RPT-OPR-04', name: 'Agent Performance Leaderboard',         category: 'Operational', format: 'Dashboard',    frequency: 'Weekly',    owner: 'Rebecca Fields',     last_generated: '2026-04-14', distribution: 'Distribution Team',  description: 'Top 20 / Bottom 10 agents · premium · bind ratio · LR · score · PIP status' },
  { id: 'RPT-OPR-05', name: 'Large Loss Watch Report',                category: 'Operational', format: 'PDF',         frequency: 'Daily',     owner: 'Daniel Ortiz',       last_generated: '2026-04-18', distribution: 'Claims + Carriers',  description: 'All claims $100k+ · status · reserve movement · litigation/SIU flags · daily carrier notification' },
  { id: 'RPT-OPR-06', name: 'Underwriter Productivity Report',       category: 'Operational', format: 'Excel',        frequency: 'Monthly',   owner: 'Sarah Chen',        last_generated: '2026-04-02', distribution: 'UW Mgmt',            description: 'Submissions processed · avg TAT · bind ratio · premium written · by UW' },
  // Financial
  { id: 'RPT-FIN-01', name: 'Commission Payout Reconciliation',      category: 'Financial',   format: 'Excel',        frequency: 'Monthly',   owner: 'Omar Khalid',       last_generated: '2026-04-05', distribution: 'Finance',             description: 'Commission earned vs. paid · profit share accrual · variance · pending disputes' },
  { id: 'RPT-FIN-02', name: 'Premium Trust Account Ledger',          category: 'Financial',   format: 'Excel',        frequency: 'Daily',     owner: 'Omar Khalid',       last_generated: '2026-04-18', distribution: 'Finance + Audit',     description: 'Trust account receipts · disbursements · reconciliation · outstanding items' },
  { id: 'RPT-FIN-03', name: 'Contingent Commission Projections',      category: 'Financial',   format: 'Excel',        frequency: 'Quarterly', owner: 'Omar Khalid',       last_generated: '2026-04-10', distribution: 'CFO + Actuary',       description: 'YTD accrual · projected FY · confidence intervals · by carrier' },
  // Compliance
  { id: 'RPT-CMP-01', name: 'Bordereau Reconciliation Report',       category: 'Compliance',  format: 'PDF',         frequency: 'Monthly',   owner: 'Priya Shah',         last_generated: '2026-04-06', distribution: 'Carriers + Finance',   description: 'All bordereau · ack status · variance/disputes · trend in timeliness + accuracy' },
  { id: 'RPT-CMP-02', name: 'Authority Utilization Report',           category: 'Compliance',  format: 'PDF',         frequency: 'Monthly',   owner: 'Priya Shah',         last_generated: '2026-04-01', distribution: 'UW Mgmt + Carriers',  description: '% binding/claims authority used by carrier · over-authority events · approval volume' },
  { id: 'RPT-CMP-03', name: 'Audit Readiness Summary',               category: 'Compliance',  format: 'PDF',         frequency: 'Quarterly', owner: 'Priya Shah',         last_generated: '2026-03-31', distribution: 'Carriers + DOI',       description: '10-policy sample · loss runs · audit trail · training completion · compliance score' },
  { id: 'RPT-CMP-04', name: 'Regulatory Filing Status Tracker',      category: 'Compliance',  format: 'Dashboard',    frequency: 'Weekly',    owner: 'Priya Shah',         last_generated: '2026-04-14', distribution: 'Compliance',            description: 'All filings · state · status · due date · on-time % · overdue count' },
  // Claims
  { id: 'RPT-CLM-01', name: 'Claims Aging & Cycle Time',             category: 'Claims',      format: 'Excel',        frequency: 'Weekly',    owner: 'Jane Rodriguez',     last_generated: '2026-04-15', distribution: 'Claims Mgmt',          description: 'Claims by aging bucket · cycle time by LOB · adjuster · avg vs. target' },
  { id: 'RPT-CLM-02', name: 'Subrogation Recovery Report',           category: 'Claims',      format: 'Excel',        frequency: 'Monthly',   owner: 'Jane Rodriguez',     last_generated: '2026-04-06', distribution: 'Claims + Finance',     description: 'Subro pursued · recovered · pending · recovery rate trend' },
  { id: 'RPT-CLM-03', name: 'Fraud Detection Summary',                category: 'Claims',      format: 'PDF',         frequency: 'Monthly',   owner: 'Daniel Ortiz',       last_generated: '2026-04-04', distribution: 'Claims + SIU',         description: 'SIU-referred claims · red-flag patterns · fraud confirmed/denied · savings' }
];

export const mgaScheduledReports = [
  { id: 'SCH-001', report_id: 'RPT-EXE-01', name: 'MGA Profitability Overview',        schedule: 'Monthly · 1st · 6:00 UTC',  next_run: '2026-05-01 06:00', recipients: 12, format: 'PDF + Excel', status: 'Active',  last_sent: '2026-04-01 06:02' },
  { id: 'SCH-002', report_id: 'RPT-EXE-02', name: 'Portfolio Health Scorecard',        schedule: 'Weekly · Mon · 7:00 UTC',    next_run: '2026-04-20 07:00', recipients: 8,  format: 'PDF',         status: 'Active',  last_sent: '2026-04-14 07:01' },
  { id: 'SCH-003', report_id: 'RPT-OPR-02', name: 'Renewal Retention Dashboard',       schedule: 'Daily · 8:00 UTC',            next_run: '2026-04-19 08:00', recipients: 14, format: 'Dashboard URL', status: 'Active', last_sent: '2026-04-18 08:00' },
  { id: 'SCH-004', report_id: 'RPT-OPR-05', name: 'Large Loss Watch Report',            schedule: 'Daily · 18:00 UTC',            next_run: '2026-04-18 18:00', recipients: 22, format: 'PDF',         status: 'Active',  last_sent: '2026-04-18 18:00' },
  { id: 'SCH-005', report_id: 'RPT-FIN-02', name: 'Premium Trust Account Ledger',      schedule: 'Daily · 04:00 UTC',            next_run: '2026-04-19 04:00', recipients: 4,  format: 'Excel',        status: 'Active',  last_sent: '2026-04-18 04:00' },
  { id: 'SCH-006', report_id: 'RPT-CMP-04', name: 'Regulatory Filing Status',          schedule: 'Weekly · Mon · 9:00 UTC',     next_run: '2026-04-20 09:00', recipients: 5,  format: 'Dashboard URL', status: 'Active', last_sent: '2026-04-14 09:00' },
  { id: 'SCH-007', report_id: 'RPT-EXE-03', name: 'Carrier Partnership Summary',        schedule: 'Quarterly · 1st · 7:00 UTC', next_run: '2026-07-01 07:00', recipients: 6,  format: 'PDF',         status: 'Active',  last_sent: '2026-01-15 07:00' },
  { id: 'SCH-008', report_id: 'RPT-OPR-01', name: 'Submission Funnel Analysis',         schedule: 'Weekly · Fri · 17:00 UTC',   next_run: '2026-04-18 17:00', recipients: 6,  format: 'Dashboard URL', status: 'Active', last_sent: '2026-04-11 17:00' },
  { id: 'SCH-009', report_id: 'RPT-CLM-01', name: 'Claims Aging & Cycle Time',          schedule: 'Weekly · Fri · 17:00 UTC',   next_run: '2026-04-18 17:00', recipients: 8,  format: 'Excel',        status: 'Paused',  last_sent: '2026-03-28 17:00', paused_reason: 'Paused until claims system migration complete' }
];

export const mgaAIInsights = [
  { id: 'AI-9042', severity: 'High',   detected: '2026-04-18 08:15', category: 'Loss Ratio Anomaly',
    insight: 'FleetSafe Auto loss ratio in Florida surged to 62% (vs. 48% 12-mo avg)',
    analysis: '3 large losses in past 14 days driven by a single agent (Regional Alpha) writing outside appetite guidelines. Pattern matches 2024 Q3 spike that cost $1.2M.',
    recommendation: 'Pause Regional Alpha new business in FL · notify Travelers · tighten FL auto appetite to include only fleets <15 vehicles',
    confidence: 92, impact: '$480k potential exposure saved', owner: 'Sarah Chen', status: 'Under Review' },
  { id: 'AI-9041', severity: 'Medium', detected: '2026-04-17 16:40', category: 'Retention Risk',
    insight: '14 high-value renewals at risk — total $2.8M premium — due in next 60 days',
    analysis: 'Model flags accounts with: (a) >20% rate increase proposed, (b) competitor quote in file, or (c) >3 mo without agent contact. Lockton and Marsh have 8 of the 14.',
    recommendation: 'Auto-route to senior UW for personalized renewal strategy · consider 5% discretionary adjustment for top 5',
    confidence: 86, impact: '$1.4M premium retention', owner: 'Lisa Park', status: 'Open' },
  { id: 'AI-9040', severity: 'Medium', detected: '2026-04-17 14:22', category: 'Capacity Forecast',
    insight: 'SEMC/Liberty treaty projected to hit 100% capacity by 2026-06-02',
    analysis: 'Linear projection based on 30-day trend (+3.4pp/month). Three large submissions pending could accelerate.',
    recommendation: 'Initiate treaty amendment conversation with Jennifer Kim by 2026-04-25 QBR · prepare 90-day production pipeline data',
    confidence: 94, impact: 'Prevent 2-3 week binding freeze', owner: 'Marcus Henderson', status: 'Actioned' },
  { id: 'AI-9039', severity: 'Low',    detected: '2026-04-17 11:05', category: 'Cross-Sell Opportunity',
    insight: '62 existing auto policyholders could add BOP → ~$820k potential premium',
    analysis: 'Clustering analysis identified insureds with >3 employees, >1 location, BOP-suitable SIC codes, and no BOP in force. 78% Lockton relationships.',
    recommendation: 'Produce Lockton-branded cross-sell list · 10% bundle discount · 6-week campaign',
    confidence: 78, impact: '$820k upside', owner: 'Sarah Chen', status: 'Open' },
  { id: 'AI-9038', severity: 'High',   detected: '2026-04-16 09:22', category: 'Fraud Detection',
    insight: 'Peninsula Manufacturing claim shows 3 indicators matching historical SIU-referred losses',
    analysis: 'Pattern match: claim reported 6d after policy effective, previous denial in other state, inconsistent cause-of-loss statements.',
    recommendation: 'SIU engagement confirmed · freeze payments pending investigation · notify Zurich',
    confidence: 96, impact: 'Avoid $272k potential fraud loss', owner: 'Daniel Ortiz', status: 'Actioned' },
  { id: 'AI-9037', severity: 'Low',    detected: '2026-04-15 10:15', category: 'Submission Quality',
    insight: 'Agent SunBelt Insurance submission quality score declining 3 quarters in row',
    analysis: 'Avg clearance rate 58% vs. 72% peer group · missing subjectivity in 42% of submissions.',
    recommendation: 'Enroll in Q2 submission quality training · follow-up audit in 90 days',
    confidence: 88, impact: 'Quality improvement', owner: 'Rebecca Fields', status: 'Open' }
];

export const mgaCustomReportBuilderTemplates = [
  { id: 'TPL-001', name: 'Premium by Agent × Carrier',          description: 'Cross-tab agent × carrier · pivot by month · filterable by product',  saved_by: 'Sarah Chen',     last_run: '2026-04-15' },
  { id: 'TPL-002', name: 'Loss Ratio Drill-Down',                description: '3-level drill (LOB → State → Product) with trend · exports to Excel', saved_by: 'Lisa Park',      last_run: '2026-04-12' },
  { id: 'TPL-003', name: 'Agent PIP Candidates',                  description: 'Agents with score <70, LR >55%, >6mo tenure · triggers PIP workflow',   saved_by: 'Rebecca Fields', last_run: '2026-04-10' },
  { id: 'TPL-004', name: 'Submission-to-Bind Funnel by Product',  description: 'Funnel drop-off with reason codes per product · weekly refresh',         saved_by: 'Sarah Chen',     last_run: '2026-04-17' },
  { id: 'TPL-005', name: 'Claims Severity Curve',                 description: 'Histogram of closed claim final paid amounts · by LOB · by year',      saved_by: 'Jane Rodriguez', last_run: '2026-04-04' }
];

export const mgaCarrierMessages = [
  { ts: '2026-04-18 11:22', carrier: 'Travelers',      from: 'Rajesh Patel (Travelers)',    to: 'Sarah Chen',        subject: 'Property capacity amendment — AUTH-2026-041', snippet: 'Approved in principle. Legal is drafting the addendum now. Expect signature by 2026-04-29.' },
  { ts: '2026-04-17 16:40', carrier: 'CNA',             from: 'Matthew Brody (CNA)',         to: 'Sarah Chen',        subject: 'Q2 QBR agenda',                                 snippet: 'Attached draft agenda for 2026-04-18. Added discussion on cyber binding authority raise.' },
  { ts: '2026-04-17 14:00', carrier: 'Zurich',          from: 'Andreas Schmidt (Zurich)',    to: 'Lisa Park',          subject: 'Premium bordereau PBD-2026-04-06 dispute',       snippet: 'We show a $8,400 variance on the Peninsula Mfg endorsement. Can we compare our ledgers on the call 04-22?' },
  { ts: '2026-04-16 09:15', carrier: 'Chubb',           from: 'Stephen Reeves (Chubb)',      to: 'Marcus Henderson',  subject: 'Profit share counter-offer',                      snippet: 'Proposal: 42% LR threshold with 35% share pct. Lets chat next Monday.' },
  { ts: '2026-04-15 13:30', carrier: 'Hartford',        from: 'Patricia Collins (Hartford)', to: 'Rebecca Fields',   subject: 'MA + NJ rate filings — status',                   snippet: 'Filings submitted to MA DOI 04-10. Received acknowledgment. NJ expected by 04-22.' }
];

// ─── MGA Documents Management ───
export const mgaDocsKPIs = [
  { label: 'Total Documents',          value: '14,224' },
  { label: 'Added This Week',          value: '284' },
  { label: 'Pending e-Signature',       value: '18', warning: true },
  { label: 'Expiring (30d)',           value: '12', warning: true },
  { label: 'Avg Retrieval Time',       value: '1.2s' },
  { label: 'OCR Accuracy',             value: '98.4%' }
];

export const mgaDocCategories = [
  { key: 'policy',     label: 'Policy Documents',       icon: '📋', count: 5842, sub: ['Applications','Binders','Declarations','Forms','Endorsements','COI','ID Cards'] },
  { key: 'claims',     label: 'Claims Documents',        icon: '🛡', count: 3124, sub: ['FNOL','Photos','Police Reports','Estimates','Release Forms','Adjuster Notes','Payment Proofs'] },
  { key: 'submission', label: 'Submission & UW',         icon: '📝', count: 2184, sub: ['ACORD','Supplemental','Loss History','UW Worksheets','Referrals'] },
  { key: 'agent',      label: 'Agent & Compliance',      icon: '👥', count: 1248, sub: ['Agent Contracts','E&O Certificates','W-9s','Licenses','Training Certificates'] },
  { key: 'carrier',    label: 'Carrier & Contracts',     icon: '🏢', count:  482, sub: ['Carrier Agreements','Addendums','Side Letters','Rate Filings','Audit Reports'] },
  { key: 'financial',  label: 'Financial & Bordereau',    icon: '💰', count:  920, sub: ['Invoices','Commission Statements','Bordereau','Tax Filings'] },
  { key: 'legal',      label: 'Legal & Regulatory',      icon: '⚖', count:  424, sub: ['Legal Documents','DOI Correspondence','Litigation Files','Compliance Filings'] }
];

export const mgaDocs = [
  // Policy Documents
  { id: 'DOC-54201', name: 'Westshore Logistics — FleetSafe Auto Binder v2.pdf',       category: 'policy',     sub: 'Binders',             size_kb: 1420, uploaded: '2026-04-18 13:20', uploaded_by: 'Mike Torres',       version: 2,  status: 'Final',      linked_entity: 'TRV-AUTO-2026-11445', linked_type: 'policy',     linked_label: 'Policy TRV-AUTO-2026-11445', tags: ['FleetSafe','auto','CA'],           expires: null,         retention_yrs: 10, signed: true,  pending_signatures: 0, views: 12, downloads: 4 },
  { id: 'DOC-54200', name: 'Westshore Logistics — Declarations Page.pdf',               category: 'policy',     sub: 'Declarations',        size_kb: 480,  uploaded: '2026-04-18 13:22', uploaded_by: 'System',             version: 1,  status: 'Final',      linked_entity: 'TRV-AUTO-2026-11445', linked_type: 'policy',     linked_label: 'Policy TRV-AUTO-2026-11445', tags: ['auto','declarations'],             expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 6,  downloads: 3 },
  { id: 'DOC-54199', name: 'Magnolia Construction — COI #4421.pdf',                      category: 'policy',     sub: 'COI',                  size_kb: 280,  uploaded: '2026-04-17 10:15', uploaded_by: 'Lockton (portal)',   version: 1,  status: 'Final',      linked_entity: 'SEMC-WC-2025-48821', linked_type: 'policy',     linked_label: 'Policy SEMC-WC-2025-48821', tags: ['WC','COI','additional insured'], expires: '2026-06-30', retention_yrs: 7,  signed: false, pending_signatures: 0, views: 18, downloads: 8 },
  { id: 'DOC-54198', name: 'Apex Industries — GL Policy Form 2026.pdf',                 category: 'policy',     sub: 'Forms',                size_kb: 820,  uploaded: '2026-04-16 14:40', uploaded_by: 'System',             version: 3,  status: 'Final',      linked_entity: 'CNA-GL-2025-33102',  linked_type: 'policy',     linked_label: 'Policy CNA-GL-2025-33102',  tags: ['GL','forms','CNA'],               expires: null,         retention_yrs: 10, signed: true,  pending_signatures: 0, views: 24, downloads: 12 },
  { id: 'DOC-54197', name: 'Ridge Builders — Endorsement #4 (Add Location).pdf',         category: 'policy',     sub: 'Endorsements',         size_kb: 340,  uploaded: '2026-04-15 11:22', uploaded_by: 'Mike Torres',       version: 1,  status: 'Pending Signature', linked_entity: 'CNA-GL-2025-33102',  linked_type: 'policy', linked_label: 'Policy CNA-GL-2025-33102',  tags: ['endorsement','add location','GL'], expires: null,         retention_yrs: 10, signed: false, pending_signatures: 2, views: 4,  downloads: 0 },
  { id: 'DOC-54196', name: 'TechCorp Inc — Cyber Policy Form + Retention Rider.pdf',      category: 'policy',     sub: 'Forms',                size_kb: 1240, uploaded: '2026-04-14 09:00', uploaded_by: 'System',             version: 2,  status: 'Final',      linked_entity: 'CNA-CYB-2026-88102', linked_type: 'policy',     linked_label: 'Policy CNA-CYB-2026-88102', tags: ['cyber','tech E&O','CNA'],         expires: null,         retention_yrs: 10, signed: true,  pending_signatures: 0, views: 15, downloads: 5 },
  // Claims
  { id: 'DOC-54150', name: 'CLM-MGA-2026-0248 — Dashcam clip.mp4',                        category: 'claims',     sub: 'Photos',                size_kb: 12288,uploaded: '2026-04-12 16:42', uploaded_by: 'Insured (portal)',   version: 1,  status: 'Final',      linked_entity: 'CLM-MGA-2026-0248',  linked_type: 'claim',      linked_label: 'Claim CLM-MGA-2026-0248',   tags: ['dashcam','auto','evidence'],       expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 22, downloads: 3 },
  { id: 'DOC-54149', name: 'CLM-MGA-2026-0248 — Police Report CHP 2026-88421.pdf',         category: 'claims',     sub: 'Police Reports',       size_kb: 820,  uploaded: '2026-04-17 14:15', uploaded_by: 'Insured (portal)',   version: 1,  status: 'Final',      linked_entity: 'CLM-MGA-2026-0248',  linked_type: 'claim',      linked_label: 'Claim CLM-MGA-2026-0248',   tags: ['police','evidence','auto'],        expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 14, downloads: 2 },
  { id: 'DOC-54148', name: 'CLM-MGA-2026-0248 — Firestone Repair Estimate.pdf',            category: 'claims',     sub: 'Estimates',            size_kb: 480,  uploaded: '2026-04-18 09:04', uploaded_by: 'Insured (portal)',   version: 1,  status: 'Under Review', linked_entity: 'CLM-MGA-2026-0248',  linked_type: 'claim',     linked_label: 'Claim CLM-MGA-2026-0248',   tags: ['estimate','repair','shop'],        expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 8,  downloads: 1 },
  { id: 'DOC-54147', name: 'CLM-MGA-2026-0245 — Forensic Report (TechCorp breach).pdf',     category: 'claims',     sub: 'Adjuster Notes',       size_kb: 3840, uploaded: '2026-04-16 17:20', uploaded_by: 'Rachel Kim',        version: 2,  status: 'Final',      linked_entity: 'CLM-MGA-2026-0245',  linked_type: 'claim',      linked_label: 'Claim CLM-MGA-2026-0245',   tags: ['cyber','forensic','SIU'],          expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 42, downloads: 8 },
  { id: 'DOC-54146', name: 'CLM-MGA-2026-0241 — Coastal Realty Settlement Release.pdf',     category: 'claims',     sub: 'Release Forms',        size_kb: 240,  uploaded: '2026-04-12 14:00', uploaded_by: 'Linda Park',        version: 1,  status: 'Final',      linked_entity: 'CLM-MGA-2026-0241',  linked_type: 'claim',      linked_label: 'Claim CLM-MGA-2026-0241',   tags: ['settlement','release','signed'],    expires: null,         retention_yrs: 10, signed: true,  pending_signatures: 0, views: 6,  downloads: 3 },
  { id: 'DOC-54145', name: 'CLM-MGA-2026-0240 — Medical Bills (Magnolia employee).zip',     category: 'claims',     sub: 'Adjuster Notes',       size_kb: 2400, uploaded: '2026-04-02 11:40', uploaded_by: 'Tyler Washington',  version: 1,  status: 'Final',      linked_entity: 'CLM-MGA-2026-0240',  linked_type: 'claim',      linked_label: 'Claim CLM-MGA-2026-0240',   tags: ['WC','medical','bills'],             expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 12, downloads: 4 },
  // Submission & UW
  { id: 'DOC-54100', name: 'SUB-92104 Magnolia — ACORD 125 (General).pdf',                  category: 'submission', sub: 'ACORD',                 size_kb: 420,  uploaded: '2026-04-11 09:30', uploaded_by: 'Lockton (portal)',  version: 1,  status: 'Final',      linked_entity: 'SUB-92104',           linked_type: 'submission', linked_label: 'Submission SUB-92104',      tags: ['ACORD','submission','WC'],         expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 8,  downloads: 2 },
  { id: 'DOC-54099', name: 'SUB-92104 Magnolia — ACORD 130 (Workers Comp).pdf',              category: 'submission', sub: 'ACORD',                 size_kb: 480,  uploaded: '2026-04-11 09:30', uploaded_by: 'Lockton (portal)',  version: 1,  status: 'Final',      linked_entity: 'SUB-92104',           linked_type: 'submission', linked_label: 'Submission SUB-92104',      tags: ['ACORD','WC','submission'],          expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 10, downloads: 3 },
  { id: 'DOC-54098', name: 'SUB-92104 Magnolia — 5-Year Loss Runs.pdf',                      category: 'submission', sub: 'Loss History',          size_kb: 1200, uploaded: '2026-04-11 09:35', uploaded_by: 'Lockton (portal)',  version: 1,  status: 'Final',      linked_entity: 'SUB-92104',           linked_type: 'submission', linked_label: 'Submission SUB-92104',      tags: ['loss history','WC','5-year'],       expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 22, downloads: 4 },
  { id: 'DOC-54097', name: 'SUB-92104 Magnolia — UW Worksheet.xlsx',                        category: 'submission', sub: 'UW Worksheets',         size_kb: 320,  uploaded: '2026-04-12 11:20', uploaded_by: 'Sarah Chen',        version: 2,  status: 'Final',      linked_entity: 'SUB-92104',           linked_type: 'submission', linked_label: 'Submission SUB-92104',      tags: ['UW worksheet','rating'],            expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 14, downloads: 6 },
  { id: 'DOC-54096', name: 'SUB-92104 Magnolia — Supplemental App (Exposures).pdf',        category: 'submission', sub: 'Supplemental',          size_kb: 380,  uploaded: '2026-04-11 10:00', uploaded_by: 'Lockton (portal)',  version: 1,  status: 'Final',      linked_entity: 'SUB-92104',           linked_type: 'submission', linked_label: 'Submission SUB-92104',      tags: ['supplemental','exposures'],         expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 7,  downloads: 2 },
  // Agent & Compliance
  { id: 'DOC-54050', name: 'Lockton Companies — Agent Agreement v2.pdf',                    category: 'agent',      sub: 'Agent Contracts',       size_kb: 2800, uploaded: '2024-01-15 09:00', uploaded_by: 'Rebecca Fields',    version: 2,  status: 'Final',      linked_entity: 'AGT-2038',            linked_type: 'agent',      linked_label: 'Agent Lockton (AGT-2038)',   tags: ['contract','agent','signed'],         expires: '2029-01-14', retention_yrs: 10, signed: true,  pending_signatures: 0, views: 24, downloads: 6 },
  { id: 'DOC-54049', name: 'Lockton Companies — E&O Certificate 2026.pdf',                  category: 'agent',      sub: 'E&O Certificates',      size_kb: 180,  uploaded: '2026-01-02 08:15', uploaded_by: 'Lockton (portal)',  version: 1,  status: 'Final',      linked_entity: 'AGT-2038',            linked_type: 'agent',      linked_label: 'Agent Lockton (AGT-2038)',   tags: ['E&O','certificate','2026'],         expires: '2026-12-31', retention_yrs: 7,  signed: false, pending_signatures: 0, views: 12, downloads: 3 },
  { id: 'DOC-54048', name: 'Lockton Companies — W-9 2026.pdf',                              category: 'agent',      sub: 'W-9s',                  size_kb: 120,  uploaded: '2026-01-02 08:15', uploaded_by: 'Lockton (portal)',  version: 1,  status: 'Final',      linked_entity: 'AGT-2038',            linked_type: 'agent',      linked_label: 'Agent Lockton (AGT-2038)',   tags: ['W-9','tax','2026'],                 expires: '2026-12-31', retention_yrs: 7,  signed: true,  pending_signatures: 0, views: 4,  downloads: 2 },
  { id: 'DOC-54047', name: 'SunBelt Insurance — E&O Certificate.pdf',                        category: 'agent',      sub: 'E&O Certificates',      size_kb: 180,  uploaded: '2025-11-12 10:20', uploaded_by: 'SunBelt (portal)',  version: 1,  status: 'Expiring',   linked_entity: 'AGT-2078',            linked_type: 'agent',      linked_label: 'Agent SunBelt (AGT-2078)',   tags: ['E&O','expiring'],                   expires: '2026-05-01', retention_yrs: 7,  signed: false, pending_signatures: 0, views: 8,  downloads: 1 },
  { id: 'DOC-54046', name: 'Brown & Brown — Agent Training Certificate Q1.pdf',             category: 'agent',      sub: 'Training Certificates', size_kb: 220,  uploaded: '2026-03-22 14:10', uploaded_by: 'Rebecca Fields',    version: 1,  status: 'Final',      linked_entity: 'AGT-2041',            linked_type: 'agent',      linked_label: 'Agent Brown & Brown',        tags: ['training','Q1','completed'],         expires: null,         retention_yrs: 3,  signed: true,  pending_signatures: 0, views: 3,  downloads: 1 },
  // Carrier & Contracts
  { id: 'DOC-53021', name: '2026 Travelers MGA Agreement Amendment #4.pdf',                category: 'carrier',    sub: 'Addendums',             size_kb: 380,  uploaded: '2026-04-17 18:22', uploaded_by: 'Priya Shah',        version: 1,  status: 'Final',      linked_entity: 'CAR-01',              linked_type: 'carrier',    linked_label: 'Carrier Travelers',          tags: ['contract','amendment','Travelers'],  expires: '2027-12-31', retention_yrs: 10, signed: true,  pending_signatures: 0, views: 18, downloads: 7 },
  { id: 'DOC-53020', name: '2026 SEMC/Liberty MGA Agreement v2.pdf',                       category: 'carrier',    sub: 'Carrier Agreements',    size_kb: 4200, uploaded: '2023-06-01 12:00', uploaded_by: 'Priya Shah',        version: 2,  status: 'Expiring',   linked_entity: 'CAR-02',              linked_type: 'carrier',    linked_label: 'Carrier SEMC/Liberty',       tags: ['contract','expiring','Liberty'],     expires: '2026-05-31', retention_yrs: 10, signed: true,  pending_signatures: 0, views: 42, downloads: 16 },
  { id: 'DOC-53019', name: 'CA Rate Filing — PropertyGuard 2026.pdf',                       category: 'carrier',    sub: 'Rate Filings',          size_kb: 680,  uploaded: '2025-11-05 15:30', uploaded_by: 'Priya Shah',        version: 1,  status: 'Final',      linked_entity: 'CAR-01',              linked_type: 'carrier',    linked_label: 'Carrier Travelers',          tags: ['rate filing','CA','property'],       expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 9,  downloads: 3 },
  { id: 'DOC-53018', name: '2025 Q4 Travelers Audit Report.pdf',                           category: 'carrier',    sub: 'Audit Reports',         size_kb: 1200, uploaded: '2026-02-28 14:00', uploaded_by: 'Michael Donovan',   version: 1,  status: 'Final',      linked_entity: 'CAR-01',              linked_type: 'carrier',    linked_label: 'Carrier Travelers',          tags: ['audit','Q4 2025','Travelers'],       expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 32, downloads: 12 },
  // Financial
  { id: 'DOC-52010', name: 'March 2026 Commission Statement — Lockton.pdf',                category: 'financial',  sub: 'Commission Statements', size_kb: 240,  uploaded: '2026-04-05 06:00', uploaded_by: 'System',             version: 1,  status: 'Final',      linked_entity: 'AGT-2038',            linked_type: 'agent',      linked_label: 'Agent Lockton (AGT-2038)',   tags: ['commission','March 2026'],           expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 8,  downloads: 4 },
  { id: 'DOC-52009', name: 'PBD-2026-04-01 Travelers Premium Bordereau.xlsx',                category: 'financial',  sub: 'Bordereau',             size_kb: 184,  uploaded: '2026-04-05 09:00', uploaded_by: 'System',             version: 1,  status: 'Final',      linked_entity: 'CAR-01',              linked_type: 'carrier',    linked_label: 'Carrier Travelers',          tags: ['bordereau','premium','March'],        expires: null,         retention_yrs: 10, signed: false, pending_signatures: 0, views: 12, downloads: 6 },
  { id: 'DOC-52008', name: 'Q1 2026 Premium Tax Return — TX.pdf',                           category: 'financial',  sub: 'Tax Filings',           size_kb: 220,  uploaded: '2026-04-14 11:40', uploaded_by: 'Omar Khalid',       version: 2,  status: 'Pending Signature', linked_entity: 'FLG-2026-Q1-TX',    linked_type: 'filing',     linked_label: 'Filing FLG-2026-Q1-TX',      tags: ['tax','TX','Q1','signature required'], expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 1, views: 4,  downloads: 1 },
  { id: 'DOC-52007', name: 'Invoice #88421 — Deloitte SOC2 Audit.pdf',                     category: 'financial',  sub: 'Invoices',               size_kb: 140,  uploaded: '2026-04-08 13:20', uploaded_by: 'Omar Khalid',       version: 1,  status: 'Final',      linked_entity: 'CNT-4003',            linked_type: 'contract',   linked_label: 'Contract CNT-4003 Deloitte', tags: ['invoice','Deloitte'],                 expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 0, views: 3,  downloads: 1 },
  // Legal
  { id: 'DOC-51005', name: 'DOI Complaint Response — CA-88421.pdf',                         category: 'legal',      sub: 'DOI Correspondence',    size_kb: 340,  uploaded: '2026-04-16 10:20', uploaded_by: 'Priya Shah',        version: 2,  status: 'Pending Signature', linked_entity: 'CMP-2026-027',      linked_type: 'compliance', linked_label: 'Task CMP-2026-027',          tags: ['DOI','complaint','CA'],               expires: null,         retention_yrs: 7,  signed: false, pending_signatures: 1, views: 9,  downloads: 2 },
  { id: 'DOC-51004', name: 'Litigation Hold — Ridge Builders CLM-0237.pdf',                category: 'legal',      sub: 'Litigation Files',     size_kb: 180,  uploaded: '2026-03-14 11:30', uploaded_by: 'Priya Shah',        version: 1,  status: 'Final',      linked_entity: 'CLM-MGA-2026-0237',  linked_type: 'claim',      linked_label: 'Claim CLM-MGA-2026-0237',    tags: ['litigation','hold','GL'],             expires: null,         retention_yrs: 10, signed: true,  pending_signatures: 0, views: 14, downloads: 4 },
  { id: 'DOC-51003', name: '2026 NY Annual Financial Statement (filed).pdf',                category: 'legal',      sub: 'Compliance Filings',   size_kb: 2400, uploaded: '2026-02-28 17:00', uploaded_by: 'Marcus Henderson',  version: 1,  status: 'Final',      linked_entity: 'FLG-2026-AN-NY',      linked_type: 'filing',     linked_label: 'Filing FLG-2026-AN-NY',      tags: ['NY','annual','filed'],                expires: null,         retention_yrs: 10, signed: true,  pending_signatures: 0, views: 6,  downloads: 2 }
];

export const mgaDocExpiring = [
  { id: 'DOC-53020', name: '2026 SEMC/Liberty MGA Agreement v2.pdf',     type: 'Carrier Agreement', expires: '2026-05-31', days_to_expire: 43,  action: 'Renewal negotiation in progress · committee 2026-04-25',       owner: 'Marcus Henderson' },
  { id: 'DOC-54047', name: 'SunBelt Insurance — E&O Certificate.pdf',     type: 'E&O Certificate',    expires: '2026-05-01', days_to_expire: 13,  action: '⚠ Agent flagged · renewal certificate requested',                 owner: 'Rebecca Fields' },
  { id: 'DOC-54199', name: 'Magnolia Construction — COI #4421.pdf',       type: 'Certificate (COI)',  expires: '2026-06-30', days_to_expire: 73,  action: 'Auto-regenerate 7d before policy expiry',                          owner: 'System (auto)' },
  { id: 'DOC-54049', name: 'Lockton Companies — E&O Certificate 2026.pdf',type: 'E&O Certificate',    expires: '2026-12-31', days_to_expire: 257, action: 'Annual renewal due year-end',                                       owner: 'Rebecca Fields' },
  { id: 'DOC-54048', name: 'Lockton Companies — W-9 2026.pdf',            type: 'W-9',                expires: '2026-12-31', days_to_expire: 257, action: 'Annual renewal due year-end',                                       owner: 'Rebecca Fields' }
];

export const mgaDocEsigQueue = [
  { id: 'SIG-8821', doc_id: 'DOC-54197', doc_name: 'Ridge Builders — Endorsement #4 (Add Location).pdf',        signers: 2, signed: 0, sent: '2026-04-15 11:22', expires_in_days: 4,  status: 'Awaiting First Signer',  workflow: 'Sequential · Agent → Insured', next_signer: 'Olivia Sanchez (Lockton)' },
  { id: 'SIG-8820', doc_id: 'DOC-52008', doc_name: 'Q1 2026 Premium Tax Return — TX.pdf',                        signers: 1, signed: 0, sent: '2026-04-14 11:40', expires_in_days: 3,  status: 'Awaiting First Signer',  workflow: 'Single signer',                 next_signer: 'Marcus Henderson' },
  { id: 'SIG-8819', doc_id: 'DOC-51005', doc_name: 'DOI Complaint Response — CA-88421.pdf',                     signers: 1, signed: 0, sent: '2026-04-16 10:20', expires_in_days: 5,  status: 'Viewed (not signed)',      workflow: 'Single signer',                 next_signer: 'Marcus Henderson' },
  { id: 'SIG-8818', doc_id: 'DOC-54200', doc_name: 'Westshore Logistics — New Policy Declarations.pdf',           signers: 2, signed: 1, sent: '2026-04-17 14:00', expires_in_days: 6,  status: 'In Progress · 1 of 2',    workflow: 'Sequential · UW → Insured',     next_signer: 'James Reynolds (Westshore)' }
];

export const mgaDocVersions = [
  { doc_id: 'DOC-54201', versions: [
    { v: 2, ts: '2026-04-18 13:20', by: 'Mike Torres',   change: 'Corrected VIN on vehicle #3 · updated limits section · added TRIA election',    size_kb: 1420 },
    { v: 1, ts: '2026-04-17 09:15', by: 'System',        change: 'Initial binder generated from bound quote',                                        size_kb: 1280 }
  ]},
  { doc_id: 'DOC-53020', versions: [
    { v: 2, ts: '2023-06-01 12:00', by: 'Priya Shah',    change: 'Renewed contract with revised commission schedule and capacity increase',          size_kb: 4200 },
    { v: 1, ts: '2020-06-01 10:00', by: 'Priya Shah',    change: 'Original Liberty MGA agreement',                                                   size_kb: 3800 }
  ]},
  { doc_id: 'DOC-54198', versions: [
    { v: 3, ts: '2026-04-16 14:40', by: 'System',        change: 'Policy renewal · updated forms to 2026 CNA edition · new TRIA selection',         size_kb: 820 },
    { v: 2, ts: '2025-04-15 10:00', by: 'System',        change: '2025 renewal',                                                                     size_kb: 780 },
    { v: 1, ts: '2024-04-15 10:00', by: 'System',        change: 'Original policy issuance',                                                         size_kb: 720 }
  ]},
  { doc_id: 'DOC-54147', versions: [
    { v: 2, ts: '2026-04-16 17:20', by: 'Rachel Kim',   change: 'Updated with full forensic report including regulatory notifications required',    size_kb: 3840 },
    { v: 1, ts: '2026-04-14 11:00', by: 'CyberDefense', change: 'Initial forensic report from vendor',                                               size_kb: 2400 }
  ]}
];

export const mgaDocAuditLogs = [
  { ts: '2026-04-18 14:30', doc_id: 'DOC-54147', action: 'Downloaded',   actor: 'Rachel Kim',       ip: '10.0.8.48',    metadata: 'Full file · 3.8 MB',              severity: 'Info' },
  { ts: '2026-04-18 14:22', doc_id: 'DOC-54201', action: 'Generated',    actor: 'System',            ip: '—',            metadata: 'Auto-generated from bound quote', severity: 'Info' },
  { ts: '2026-04-18 14:15', doc_id: 'DOC-54148', action: 'Uploaded',     actor: 'Insured (portal)',  ip: '98.44.12.45',  metadata: 'PDF · OCR completed · linked to CLM-MGA-2026-0248', severity: 'Info' },
  { ts: '2026-04-18 13:22', doc_id: 'DOC-54200', action: 'Shared',       actor: 'Mike Torres',       ip: '10.0.8.31',    metadata: 'Secure link sent to James Reynolds · expires 7d', severity: 'Info' },
  { ts: '2026-04-18 13:20', doc_id: 'DOC-54201', action: 'E-Sign Sent',  actor: 'Mike Torres',       ip: '10.0.8.31',    metadata: 'DocuSign envelope · 2 signers',    severity: 'Info' },
  { ts: '2026-04-18 12:45', doc_id: 'DOC-51005', action: 'Viewed',       actor: 'Marcus Henderson', ip: '10.0.8.42',    metadata: 'Preview only · 3m 20s',              severity: 'Info' },
  { ts: '2026-04-17 18:22', doc_id: 'DOC-53021', action: 'Uploaded',     actor: 'Priya Shah',        ip: '10.0.8.65',    metadata: 'PDF · auto-classified · contract',   severity: 'Info' },
  { ts: '2026-04-17 17:00', doc_id: 'DOC-54099', action: 'Downloaded',   actor: 'Audit Reviewer',    ip: '203.44.89.2',  metadata: 'Audit export · watermarked',        severity: 'Info' },
  { ts: '2026-04-17 14:15', doc_id: 'DOC-54149', action: 'Uploaded',     actor: 'Insured (portal)',  ip: '98.44.12.45',  metadata: 'PDF · OCR · linked to claim',        severity: 'Info' },
  { ts: '2026-04-17 10:15', doc_id: 'DOC-54199', action: 'Generated',    actor: 'System',            ip: '—',            metadata: 'COI auto-generated for certificate holder', severity: 'Info' },
  { ts: '2026-04-16 17:20', doc_id: 'DOC-54147', action: 'Version 2',    actor: 'Rachel Kim',       ip: '10.0.8.48',    metadata: 'Replaced v1 · forensic report final', severity: 'Info' },
  { ts: '2026-04-16 10:20', doc_id: 'DOC-51005', action: 'Uploaded',     actor: 'Priya Shah',        ip: '10.0.8.65',    metadata: 'DOI complaint response · legal-reviewed', severity: 'Info' },
  { ts: '2026-04-15 22:12', doc_id: 'DOC-52007', action: 'Access Denied',actor: 'unknown',            ip: '45.202.89.11',metadata: 'User lacked finance:read permission', severity: 'Warning' }
];

// ─── MGA Settings & Administration ───
export const mgaSettingsKPIs = [
  { label: 'Config Keys',          value: '284' },
  { label: 'Active Workflows',     value: '42' },
  { label: 'Integrations',         value: '18' },
  { label: 'Active Env',           value: 'Production' },
  { label: 'Pending Approvals',    value: '3', warning: true },
  { label: 'System Uptime (30d)',  value: '99.98%' }
];

export const mgaWorkflows = [
  { id: 'WF-001', name: 'Auto-Route New Submission',     module: 'Submissions', trigger: 'On Submission Created', condition: 'LOB IN (WC,GL,BOP) AND state IN [all active]',   actions: ['Assign UW by round-robin (LOB specialty)','Send ack to agent','Create task for clearance'], status: 'Active',  runs_30d: 1420, success_rate: 99.2, owner: 'Sarah Chen',        last_edited: '2026-02-15' },
  { id: 'WF-002', name: 'Binding → Documents + Welcome', module: 'Bindings',    trigger: 'On Policy Bound',        condition: 'always',                                          actions: ['Generate declarations page','Generate policy forms','Email welcome pack to insured','Notify agent'], status: 'Active', runs_30d: 512, success_rate: 99.8, owner: 'Mike Torres',       last_edited: '2026-03-02' },
  { id: 'WF-003', name: 'Claims FNOL Triage',             module: 'Claims',      trigger: 'On Claim Reported',      condition: 'severity IN (Medium,Large) OR fraud_indicators>=2', actions: ['Auto-assign adjuster by LOB','Set initial reserve from model','Notify carrier (if Large)','Create tasks'], status: 'Active',  runs_30d: 84,   success_rate: 98.8, owner: 'Jane Rodriguez',    last_edited: '2026-02-18' },
  { id: 'WF-004', name: 'Commission Batch Runner',         module: 'Finance',     trigger: 'Monthly · 1st · 6:00 UTC', condition: 'policies.status IN [Active,Renewing]',        actions: ['Calculate commission per agent','Generate statements PDF','Initiate ACH batch','Email statements'], status: 'Active', runs_30d: 1,   success_rate: 100,  owner: 'Omar Khalid',       last_edited: '2025-12-10' },
  { id: 'WF-005', name: 'Renewal Kickoff (120d pre-exp)', module: 'Policies',    trigger: 'Daily · 8:00 UTC',        condition: 'expiry <= today + 120 AND status = Active',   actions: ['Create renewal task','Email producer','Pull loss run + MVR update','Flag at-risk accounts'], status: 'Active',  runs_30d: 30,  success_rate: 99.4, owner: 'Lisa Park',          last_edited: '2026-01-05' },
  { id: 'WF-006', name: 'Reserve Approval Router',         module: 'Claims',      trigger: 'On Reserve Change Proposed', condition: 'delta > adjuster.authority',                 actions: ['Route to supervisor by LOB','Send notification with rationale','SLA: 24h response'], status: 'Active',  runs_30d: 28,  success_rate: 100,  owner: 'Daniel Ortiz',       last_edited: '2026-02-28' },
  { id: 'WF-007', name: 'Bordereau Auto-Generation',       module: 'Carriers',    trigger: 'Daily · 18:00 UTC',       condition: 'per-carrier config',                             actions: ['Aggregate policy + claims data','Format per carrier template','Encrypt + send via SFTP or API','Log ack'], status: 'Active', runs_30d: 30,  success_rate: 99.6, owner: 'Priya Shah',        last_edited: '2026-03-14' },
  { id: 'WF-008', name: 'Agent Onboarding — Step 4 to 5',  module: 'Agents',      trigger: 'On E&O Certificate Uploaded', condition: 'certificate.validated = true',              actions: ['Advance onboarding to Step 5','Notify agent manager','Issue portal credentials'], status: 'Active',  runs_30d: 4,   success_rate: 100,  owner: 'Rebecca Fields',    last_edited: '2026-01-28' },
  { id: 'WF-009', name: 'COI Auto-Regenerate',              module: 'Policies',    trigger: 'Daily · 7d before renewal', condition: 'COI.auto_renew = true',                     actions: ['Regenerate COI with new policy period','Email to certificate holder'],                   status: 'Active',  runs_30d: 8,   success_rate: 100,  owner: 'Mike Torres',       last_edited: '2025-11-22' },
  { id: 'WF-010', name: 'High-Severity AI Alert',          module: 'Analytics',   trigger: 'On Anomaly Detected',     condition: 'severity = High',                                actions: ['Slack notify #risk-management','Email assigned owner','Create escalation task'], status: 'Active',  runs_30d: 12,  success_rate: 100,  owner: 'Marcus Henderson',  last_edited: '2026-03-22' },
  { id: 'WF-011', name: 'Expired Policy Cancellation Flow', module: 'Policies',    trigger: 'Daily · policy.expiry < today - 30', condition: 'no renewal in progress',               actions: ['Move status → Expired','Notify finance','Stop commission accrual','Archive docs'], status: 'Active', runs_30d: 6,   success_rate: 100,  owner: 'Lisa Park',          last_edited: '2025-10-05' },
  { id: 'WF-012', name: 'Draft: Agent Training Reminder',  module: 'Agents',      trigger: 'Monthly',                   condition: 'agent.training_due_days <= 30',                 actions: ['Email reminder','Create training task','Notify agent manager if overdue 30d'], status: 'Draft',   runs_30d: 0,   success_rate: null, owner: 'Rebecca Fields',    last_edited: '2026-04-10' }
];

export const mgaIntegrations = [
  { id: 'INT-001', name: 'SEMC (Carrier Aggregator)',      category: 'Carrier',     vendor: 'SEMC',                 connection: 'API (OAuth 2.0)',  status: 'Healthy', last_sync: '2026-04-18 14:30', volume_24h: '1,420 transactions', latency_ms: 142, uptime_30d: 99.98, feeds: ['Policies','Claims','Bordereau','Submissions'], owner: 'IT Ops',         notes: 'Primary carrier hub · 6 carriers' },
  { id: 'INT-002', name: 'Travelers Direct API',            category: 'Carrier',     vendor: 'Travelers',            connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 14:28', volume_24h: '282 transactions',   latency_ms: 180, uptime_30d: 99.95, feeds: ['Submissions','Bindings','Bordereau'],           owner: 'IT Ops',         notes: 'Premium partner · direct feed' },
  { id: 'INT-003', name: 'IVANS',                            category: 'Carrier',     vendor: 'IVANS',                connection: 'IVANS Download',    status: 'Healthy', last_sync: '2026-04-18 06:00', volume_24h: '42 policy downloads',latency_ms: 320, uptime_30d: 99.80, feeds: ['Policy Download (agency bill)'],                owner: 'IT Ops',         notes: 'Nightly IVANS download' },
  { id: 'INT-004', name: 'Chubb SFTP',                       category: 'Carrier',     vendor: 'Chubb',                connection: 'SFTP (keyed)',      status: 'Watch',   last_sync: '2026-04-18 02:00', volume_24h: '12 files',            latency_ms: 480, uptime_30d: 98.40, feeds: ['Claims Bordereau','Premium Bordereau'],        owner: 'IT Ops',         notes: 'File-based · planned API migration Q3' },
  { id: 'INT-005', name: 'Zurich SFTP',                      category: 'Carrier',     vendor: 'Zurich',                connection: 'SFTP (keyed)',      status: 'Healthy', last_sync: '2026-04-18 03:00', volume_24h: '8 files',             latency_ms: 420, uptime_30d: 99.20, feeds: ['Property bordereau'],                             owner: 'IT Ops',         notes: 'File-based · legacy' },
  { id: 'INT-006', name: 'NetSuite',                         category: 'Accounting', vendor: 'Oracle NetSuite',      connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 04:00', volume_24h: '1,200 records',       latency_ms: 220, uptime_30d: 99.90, feeds: ['GL Sync','AR','Commissions','Trust Accounts'], owner: 'Finance',         notes: 'Nightly full sync · Omar Khalid owns' },
  { id: 'INT-007', name: 'DocuSign',                         category: 'e-Signature', vendor: 'DocuSign',             connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 14:22', volume_24h: '84 envelopes',       latency_ms: 180, uptime_30d: 99.99, feeds: ['Envelope Status','Event Webhooks'],            owner: 'IT Ops',         notes: 'E-sign for binders, contracts, endorsements' },
  { id: 'INT-008', name: 'Adobe Sign',                        category: 'e-Signature', vendor: 'Adobe',                connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 11:10', volume_24h: '14 envelopes',       latency_ms: 220, uptime_30d: 99.92, feeds: ['Envelope Status'],                              owner: 'IT Ops',         notes: 'Backup e-sign · used for carrier audits' },
  { id: 'INT-009', name: 'Snowflake (Data Warehouse)',       category: 'Analytics',   vendor: 'Snowflake',             connection: 'Snowpipe',          status: 'Healthy', last_sync: '2026-04-18 04:00', volume_24h: '84M rows',            latency_ms: 3200,uptime_30d: 99.99, feeds: ['Analytics Warehouse','BI Reporting'],           owner: 'Analytics',       notes: 'Full platform data' },
  { id: 'INT-010', name: 'LexisNexis ThreatMetrix',           category: 'Risk',        vendor: 'LexisNexis',            connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 14:29', volume_24h: '82 risk scores',     latency_ms: 480, uptime_30d: 99.85, feeds: ['Risk Scoring'],                                  owner: 'Underwriting',   notes: 'Real-time risk scoring for submissions' },
  { id: 'INT-011', name: 'LexisNexis MVR',                    category: 'Risk',        vendor: 'LexisNexis',            connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 14:20', volume_24h: '22 MVR pulls',        latency_ms: 680, uptime_30d: 99.90, feeds: ['MVR for Commercial Auto'],                      owner: 'Underwriting',   notes: 'Motor vehicle records for auto UW' },
  { id: 'INT-012', name: 'QuickBooks Online',                 category: 'Accounting',  vendor: 'Intuit',               connection: 'REST API',          status: 'Not Connected', last_sync: null,      volume_24h: '—',                     latency_ms: null, uptime_30d: null,  feeds: [],                                              owner: '—',               notes: 'Available for smaller agents · not currently enabled' },
  { id: 'INT-013', name: 'Slack',                             category: 'Notifications',vendor: 'Slack',                connection: 'Webhook',           status: 'Healthy', last_sync: '2026-04-18 14:22', volume_24h: '42 messages',         latency_ms: 84,  uptime_30d: 99.99, feeds: ['Alerts','Workflow notifications'],              owner: 'IT Ops',         notes: '#risk-management, #carrier-ops, #claims-ops' },
  { id: 'INT-014', name: 'SendGrid (Transactional Email)',    category: 'Notifications',vendor: 'Twilio SendGrid',     connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 14:30', volume_24h: '1,840 emails',        latency_ms: 120, uptime_30d: 99.98, feeds: ['Transactional','Bulk'],                         owner: 'IT Ops',         notes: 'All outbound email (except Slack)' },
  { id: 'INT-015', name: 'Twilio (SMS)',                      category: 'Notifications',vendor: 'Twilio',               connection: 'REST API',          status: 'Healthy', last_sync: '2026-04-18 14:20', volume_24h: '28 SMS',              latency_ms: 220, uptime_30d: 99.95, feeds: ['SMS Alerts'],                                     owner: 'IT Ops',         notes: 'Urgent claim notifications · large loss' },
  { id: 'INT-016', name: 'OKTA (SSO + MFA)',                  category: 'Security',    vendor: 'OKTA',                 connection: 'SAML 2.0 / OIDC',   status: 'Healthy', last_sync: '2026-04-18 14:30', volume_24h: '184 auth events',     latency_ms: 140, uptime_30d: 99.99, feeds: ['SSO','MFA enforcement'],                        owner: 'Security',         notes: 'Primary auth provider' },
  { id: 'INT-017', name: 'ClamAV (Virus Scan)',               category: 'Security',    vendor: 'ClamAV',               connection: 'Internal service',  status: 'Healthy', last_sync: '2026-04-18 14:22', volume_24h: '42 uploads scanned',  latency_ms: 420, uptime_30d: 99.98, feeds: ['Doc Uploads'],                                    owner: 'Security',         notes: 'Every document upload scanned' },
  { id: 'INT-018', name: 'Webhook: Agent Portal Events',      category: 'Webhook',     vendor: 'Internal',             connection: 'HTTPS Webhook Out', status: 'Healthy', last_sync: '2026-04-18 14:29', volume_24h: '320 events',          latency_ms: 80,  uptime_30d: 99.99, feeds: ['Submission events','Policy events'],            owner: 'IT Ops',         notes: 'Events pushed to customer integrations' }
];

export const mgaGlobalConfig = {
  branding: {
    legal_name: 'Singlepoint MGA, LLC',
    dba: 'Singlepoint Insurance Services',
    primary_color: '#6c5ce7',
    accent_color: '#a67dff',
    logo_url: '/assets/logo-mga.svg',
    favicon_url: '/assets/favicon.ico',
    portal_footer: '© 2026 Singlepoint MGA, LLC. Licensed in 22 states. NPN: 17421.',
    disclaimer: 'This platform contains confidential information. Unauthorized access prohibited.',
    website: 'singlepoint-mga.com',
    support_email: 'support@singlepoint-mga.com',
    support_phone: '1-888-555-MGA1'
  },
  localization: {
    default_country: 'United States',
    default_timezone: 'America/Los_Angeles (PDT)',
    default_currency: 'USD',
    multi_state: true,
    multi_currency: false,
    date_format: 'YYYY-MM-DD',
    number_format: 'en-US',
    languages: ['en-US']
  },
  notifications: {
    default_channels: ['Email','In-App','Portal'],
    quiet_hours: '22:00 – 06:00 PT',
    digest_frequency: 'Daily at 8:00 AM PT',
    large_loss_sms: true,
    agent_daily_digest: true,
    carrier_bordereau_ack: 'Slack + Email'
  },
  business_hours: {
    mon_fri: '08:00 – 18:00 PT',
    sat: '09:00 – 13:00 PT',
    sun: 'Closed',
    holidays: 'NYSE schedule'
  }
};

export const mgaSecurityConfig = [
  { category: 'Authentication',  key: 'Password Policy',             value: 'Min 14 chars · 1 upper · 1 digit · 1 symbol · rotate 90d', last_modified: '2025-06-15 by Marcus Henderson', risk_level: 'High' },
  { category: 'Authentication',  key: 'MFA Enforcement',             value: 'Required for all internal roles · optional for external agents', last_modified: '2025-06-15 by Marcus Henderson', risk_level: 'Critical' },
  { category: 'Authentication',  key: 'SSO (OKTA)',                  value: 'Enabled for all employees',                                last_modified: '2024-01-10 by IT',             risk_level: 'Critical' },
  { category: 'Authentication',  key: 'Session Timeout',             value: '30 min idle · 8 hr absolute',                              last_modified: '2025-09-01 by Marcus Henderson', risk_level: 'Medium' },
  { category: 'Authentication',  key: 'Failed Login Lockout',         value: '5 attempts · 30 min lockout · alert after 3',             last_modified: '2025-06-15 by IT',             risk_level: 'High' },
  { category: 'Access Control',  key: 'IP Allowlist (Admin)',         value: '10.0.0.0/16 · 172.16.0.0/12 · corp VPN only',             last_modified: '2025-11-20 by Security',        risk_level: 'Critical' },
  { category: 'Access Control',  key: 'IP Allowlist (External)',     value: 'Disabled · rely on MFA + device attestation',              last_modified: '2025-11-20 by Security',        risk_level: 'Medium' },
  { category: 'Access Control',  key: 'Data-level Security',          value: 'Enabled · agents see only own book · auditors read-only', last_modified: '2024-06-01 by Marcus Henderson', risk_level: 'Critical' },
  { category: 'Data Protection', key: 'Encryption at Rest',           value: 'AES-256 · keys managed in KMS · rotated annually',         last_modified: '2024-01-01 by Security',        risk_level: 'Critical' },
  { category: 'Data Protection', key: 'Encryption in Transit',        value: 'TLS 1.3 · HSTS enforced',                                   last_modified: '2024-01-01 by Security',        risk_level: 'Critical' },
  { category: 'Data Protection', key: 'PII Redaction',                 value: 'Auto-detected on upload · redacted in exports unless admin', last_modified: '2025-03-14 by Security',    risk_level: 'High' },
  { category: 'Backup',          key: 'Database Backup',               value: 'Daily full + hourly incremental · 30d retention',            last_modified: '2024-01-01 by IT',             risk_level: 'Critical' },
  { category: 'Backup',          key: 'Document Backup',               value: 'S3 cross-region replication · 7y retention',                 last_modified: '2024-01-01 by IT',             risk_level: 'High' },
  { category: 'Disaster Recov.', key: 'RTO (Recovery Time Objective)', value: '4 hours',                                                   last_modified: '2025-01-01 by IT',             risk_level: 'High' },
  { category: 'Disaster Recov.', key: 'RPO (Recovery Point Objective)',value: '1 hour',                                                    last_modified: '2025-01-01 by IT',             risk_level: 'High' },
  { category: 'Disaster Recov.', key: 'Last DR Test',                  value: '2026-03-15 · Passed · 3h 12m RTO actual',                   last_modified: '2026-03-15 by IT',             risk_level: 'Medium' },
  { category: 'Compliance',      key: 'SOC2 Type II',                  value: 'Certified · audit Deloitte · next audit 2026-11',         last_modified: '2025-12-01 by Compliance',     risk_level: 'High' },
  { category: 'Compliance',      key: 'ISO 27001',                     value: 'Certified · BSI · next surveillance 2026-08',              last_modified: '2025-08-15 by Compliance',     risk_level: 'High' },
  { category: 'Compliance',      key: 'PCI DSS',                       value: 'Not applicable · no direct card processing',                last_modified: '2024-01-01 by Compliance',     risk_level: 'Low' },
  { category: 'Monitoring',      key: 'SIEM',                           value: 'Splunk · 180-day log retention · 24/7 SOC',                last_modified: '2024-06-01 by Security',        risk_level: 'High' }
];

export const mgaSystemLogs = [
  { ts: '2026-04-18 14:30:04.182', level: 'INFO',    service: 'policy-svc',    message: 'Policy TRV-AUTO-2026-11445 issued · binder sent',        request_id: 'req-8842', duration_ms: 182 },
  { ts: '2026-04-18 14:29:58.042', level: 'INFO',    service: 'auth',           message: 'User login success · sarah.c@singlepoint.com · OKTA SSO', request_id: 'req-8841', duration_ms: 120 },
  { ts: '2026-04-18 14:28:12.380', level: 'INFO',    service: 'claim-svc',      message: 'Reserve change approved · RES-4200 · $420k → $520k',    request_id: 'req-8840', duration_ms: 92  },
  { ts: '2026-04-18 14:25:45.220', level: 'WARN',    service: 'carrier-svc',    message: 'Chubb SFTP latency 480ms (threshold 400ms) · 3 of 5 last minute', request_id: null, duration_ms: null },
  { ts: '2026-04-18 14:22:08.100', level: 'INFO',    service: 'bordereau-svc',  message: 'BDX-2026-04-18 delivered to Travelers · ACK TRV-ACK-8842', request_id: 'req-8839', duration_ms: 2420 },
  { ts: '2026-04-18 14:15:22.060', level: 'INFO',    service: 'docs-svc',       message: 'Doc upload DOC-54148 · OCR completed · linked CLM-MGA-2026-0248', request_id: 'req-8838', duration_ms: 1820 },
  { ts: '2026-04-18 14:10:40.220', level: 'ERROR',   service: 'rating-engine',  message: 'Rating calculation failed · product PRD-CYB · missing class code lookup · retried successfully on attempt 2', request_id: 'req-8837', duration_ms: 820 },
  { ts: '2026-04-18 14:05:12.400', level: 'INFO',    service: 'commission-svc', message: 'Commission batch job completed · 14 agents · $184,240 total', request_id: 'job-ct-8820', duration_ms: 18420 },
  { ts: '2026-04-18 13:55:18.020', level: 'INFO',    service: 'ai-service',     message: 'High-severity anomaly detected · AI-9042 · Florida LR surge', request_id: 'ai-9042',  duration_ms: 420 },
  { ts: '2026-04-18 13:45:02.100', level: 'WARN',    service: 'auth',           message: 'Failed login attempt · USR-006 · IP 172.98.45.11 · 1 of 5', request_id: 'req-8836', duration_ms: 80  },
  { ts: '2026-04-18 13:20:40.380', level: 'INFO',    service: 'binding-svc',    message: 'Policy TRV-AUTO-2026-11445 bound · premium $48,400',   request_id: 'req-8835', duration_ms: 1280 },
  { ts: '2026-04-18 12:30:22.400', level: 'INFO',    service: 'scheduler',      message: 'Cron: compliance-auto-route fired · 1 task routed',    request_id: 'cron-4422',duration_ms: 220 },
  { ts: '2026-04-18 12:05:12.100', level: 'WARN',    service: 'auth',           message: 'MFA bypass attempted · USR-013 · blocked · alert sent', request_id: 'req-8834', duration_ms: 180 },
  { ts: '2026-04-18 10:50:08.200', level: 'WARN',    service: 'auth',           message: 'Failed login attempt · USR-006 · IP 172.98.45.11 · 1 of 5', request_id: 'req-8833', duration_ms: 82 },
  { ts: '2026-04-18 09:30:14.180', level: 'INFO',    service: 'bordereau-svc',  message: 'Premium bordereau generated · Travelers PBD-2026-04-01 · $1.42M premium', request_id: 'req-8832', duration_ms: 4200 },
  { ts: '2026-04-18 09:02:02.080', level: 'INFO',    service: 'user-svc',       message: 'User USR-014 marked Offboarded · access revoked · deletion scheduled', request_id: 'req-8831', duration_ms: 180 },
  { ts: '2026-04-18 08:42:00.020', level: 'INFO',    service: 'auth',           message: 'User login success · marcus.h@singlepoint.com · OKTA SSO + MFA', request_id: 'req-8830', duration_ms: 140 },
  { ts: '2026-04-18 04:00:00.200', level: 'INFO',    service: 'backup-svc',     message: 'Daily database backup completed · 284 GB · 42 minutes · SHA-256 verified', request_id: 'job-bk-4420', duration_ms: 2520000 },
  { ts: '2026-04-17 22:12:14.100', level: 'WARN',    service: 'docs-svc',       message: 'Access denied · DOC-52007 · user lacked finance:read',   request_id: 'req-8829', duration_ms: 40 },
  { ts: '2026-04-17 18:22:18.400', level: 'INFO',    service: 'docs-svc',       message: 'Contract uploaded · CNT-1001 Travelers Amendment #4 · auto-classified',  request_id: 'req-8828', duration_ms: 620 }
];

export const mgaMaintenanceJobs = [
  { id: 'MNT-001', name: 'Database Full Backup',             schedule: 'Daily · 04:00 UTC',           last_run: '2026-04-18 04:00', status: 'Success', duration: '42m 18s', next_run: '2026-04-19 04:00', notes: '284 GB · SHA-256 verified · cross-region replicated' },
  { id: 'MNT-002', name: 'Database Incremental Backup',        schedule: 'Hourly',                       last_run: '2026-04-18 14:00', status: 'Success', duration: '82s',     next_run: '2026-04-18 15:00', notes: 'Last 1h WAL · streamed to S3' },
  { id: 'MNT-003', name: 'Document Archive → Cold Storage',    schedule: 'Weekly · Sun · 02:00 UTC',    last_run: '2026-04-14 02:00', status: 'Success', duration: '1h 48m',  next_run: '2026-04-20 02:00', notes: 'Moved 1,820 docs >7 years old to Glacier' },
  { id: 'MNT-004', name: 'Cache Rebuild',                      schedule: 'Weekly · Sun · 03:00 UTC',    last_run: '2026-04-14 03:00', status: 'Success', duration: '24m',     next_run: '2026-04-20 03:00', notes: 'Redis · 4.2M keys refreshed' },
  { id: 'MNT-005', name: 'Analytics Warehouse Sync',           schedule: 'Daily · 04:00 UTC',            last_run: '2026-04-18 04:00', status: 'Success', duration: '1h 12m',  next_run: '2026-04-19 04:00', notes: 'Snowflake · 84M rows merged' },
  { id: 'MNT-006', name: 'DR Test — Failover Drill',          schedule: 'Quarterly',                    last_run: '2026-03-15 14:00', status: 'Success', duration: '3h 12m',  next_run: '2026-06-15 14:00', notes: 'RTO 3h 12m (target 4h) · passed · next Q2 drill' },
  { id: 'MNT-007', name: 'Security Patch Window',              schedule: 'Monthly · 2nd Sun · 01:00',    last_run: '2026-04-13 01:00', status: 'Success', duration: '45m',     next_run: '2026-05-11 01:00', notes: 'OS + app patches · zero-downtime rolling' },
  { id: 'MNT-008', name: 'Audit Log Archive',                  schedule: 'Monthly · 1st · 05:00 UTC',   last_run: '2026-04-01 05:00', status: 'Success', duration: '2h 18m',  next_run: '2026-05-01 05:00', notes: 'Logs >1 year moved to compliance archive (7-year retention)' },
  { id: 'MNT-009', name: 'Orphan Record Cleanup',              schedule: 'Monthly · Last Sun · 04:00',  last_run: '2026-03-30 04:00', status: 'Success', duration: '18m',     next_run: '2026-04-27 04:00', notes: '42 orphan records purged · safely · dry-run mode off' },
  { id: 'MNT-010', name: 'Platform Upgrade Window (v2.14)',    schedule: 'Ad-hoc',                       last_run: '2026-03-22 02:00', status: 'Success', duration: '18m',     next_run: '—',                 notes: 'Zero-downtime blue-green · rollback-ready' }
];

export const mgaEnvironments = [
  { env: 'Production',  version: 'v2.14.1',  status: 'Healthy', users_24h: 84, last_deploy: '2026-03-22 02:00', latency_p95: '142ms', uptime_30d: 99.98, alerts_24h: 0 },
  { env: 'Staging',      version: 'v2.15.0-rc2',status: 'Healthy',users_24h: 12, last_deploy: '2026-04-17 16:20', latency_p95: '160ms', uptime_30d: 99.92, alerts_24h: 0 },
  { env: 'Sandbox',      version: 'v2.15.0-dev',status: 'Healthy', users_24h: 6,  last_deploy: '2026-04-18 11:22', latency_p95: '180ms', uptime_30d: 99.80, alerts_24h: 0 }
];

export const mgaConfigChangeLog = [
  { ts: '2026-04-18 09:58', actor: 'Lisa Park',        category: 'Commission',   key: 'Commercial Auto Rate',           before: '13%',                        after: '14%',                            reason: 'Travelers Amendment #4 · new rate effective 2026-04-17', approval: 'Auto-applied',          severity: 'High' },
  { ts: '2026-04-17 14:40', actor: 'Marcus Henderson', category: 'Security',     key: 'MFA Enforcement Scope',         before: 'Internal only',              after: 'Internal + external auditors',  reason: 'Compliance · SOC2 2026 control update',                  approval: 'Security Committee',    severity: 'Critical' },
  { ts: '2026-04-15 10:00', actor: 'Sarah Chen',        category: 'Appetite',     key: 'GL Min Premium',                 before: '$2,500',                      after: '$3,000',                         reason: 'Improve risk mix · decline low-premium GL',             approval: 'UW Committee',          severity: 'Medium' },
  { ts: '2026-04-10 16:22', actor: 'Priya Shah',         category: 'Retention',    key: 'Claims Doc Retention',           before: '7 years',                     after: '10 years',                       reason: 'NAIC model audit rule update',                            approval: 'Compliance Officer',    severity: 'High' },
  { ts: '2026-04-05 11:04', actor: 'Marcus Henderson', category: 'Authority',    key: 'Daniel Ortiz Authority Cap',       before: '$200,000',                    after: '$250,000',                       reason: 'Promotion to Large Loss specialist',                      approval: 'Authority Committee',   severity: 'High' },
  { ts: '2026-03-22 11:30', actor: 'Omar Khalid',        category: 'Billing',      key: 'Commission Pay Schedule',        before: '10th of month',               after: '5th of month',                    reason: 'Agent request + reconciliation now faster',               approval: 'Finance Director',      severity: 'Medium' }
];

// ─── MGA Policy Management ───
export const mgaPoliciesKPIs = [
  { label: 'Policies In Force',      value: '4,946' },
  { label: 'Written Premium (IF)',   value: '$58.5M' },
  { label: 'Expiring (30d)',          value: '284', warning: true },
  { label: 'Retention Rate',         value: '91%' },
  { label: 'Open Endorsements',      value: '42', warning: true },
  { label: 'COI Requests (24h)',     value: '18' }
];

export const mgaPoliciesEnhanced = [
  { id: 'POL-10445', policy_number: 'TRV-AUTO-2026-11445',  carrier_ref: 'TRV-2026-88421', carrier: 'Travelers',       carrier_id: 'CAR-01', insured: 'Westshore Logistics',           client_id: 'CL-8842', agent_id: 'AGT-2041', agent: 'Lockton Companies',       product: 'FleetSafe Auto',         product_id: 'PRD-AUTO',  lob: 'Commercial Auto',  effective: '2026-01-01', expiry: '2027-01-01', days_to_expiry: 257, status: 'Active',  status_color: 'green',  premium: 48400,   prior_premium: 44200,  commission_pct: 14, commission: 6776,  billing: 'Direct Bill',   installments: 4, paid_pct: 25, states: ['CA','NV','AZ'], coverages: ['Auto Liability $1M','PD $1M','UM/UIM $500k','Medical Pay $10k'], deductible: 1000, open_claims: 1, open_reserves: 12400, loss_ratio: 26, last_endorsement: null, compliance_flags: [],                     exposure: { vehicles: 14, drivers: 18, zip: '95819' } },
  { id: 'POL-10444', policy_number: 'SEMC-WC-2025-48821',    carrier_ref: 'LIB-WC-88420', carrier: 'SEMC / Liberty',   carrier_id: 'CAR-02', insured: 'Magnolia Construction LLC',      client_id: 'CL-8821', agent_id: 'AGT-2038', agent: 'Lockton Companies',       product: 'WorkForce WC — CA Small', product_id: 'PRD-WC-CA', lob: 'Workers Comp',    effective: '2025-06-01', expiry: '2026-06-01', days_to_expiry: 43,  status: 'Renewing',status_color: 'amber',  premium: 184700,  prior_premium: 168400,  commission_pct: 13, commission: 24011, billing: 'Direct Bill',   installments: 12,paid_pct: 92, states: ['CA','TX','NC'], coverages: ['WC Statutory CA','WC Statutory TX','Employers Liability $1M/$1M/$1M'], deductible: 0,    open_claims: 2, open_reserves: 22720, loss_ratio: 42, last_endorsement: '2026-02-15', compliance_flags: ['Renewal terms due'], exposure: { employees: 142, payroll: 4800000, class_codes: ['5403','5474','8810'] } },
  { id: 'POL-10443', policy_number: 'CNA-GL-2025-33102',     carrier_ref: 'CNA-33102', carrier: 'CNA',               carrier_id: 'CAR-03', insured: 'Apex Industries',                 client_id: 'CL-3310', agent_id: 'AGT-2038', agent: 'Lockton Companies',       product: 'GuardPoint GL',          product_id: 'PRD-GL',   lob: 'General Liability',effective: '2025-04-01', expiry: '2026-04-01', days_to_expiry: -17, status: 'In Renewal', status_color: 'red',  premium: 52000,   prior_premium: 48000,   commission_pct: 15, commission: 7800,  billing: 'Agency Bill',   installments: 2, paid_pct: 100,states: ['TX','OK','NM','AR'], coverages: ['Each Occurrence $1M','Aggregate $2M','Products/Completed $1M','Medical Exp $5k'], deductible: 5000, open_claims: 2, open_reserves: 510000, loss_ratio: 52, last_endorsement: '2026-02-15', compliance_flags: ['Expired · policy in renewal workflow'], exposure: { locations: 3, employees: 84, sales: 12400000 } },
  { id: 'POL-10442', policy_number: 'HTF-BOP-2025-90112',    carrier_ref: 'HFD-BOP-11223', carrier: 'Hartford',          carrier_id: 'CAR-04', insured: 'Harbor Foods',                   client_id: 'CL-9011', agent_id: 'AGT-2038', agent: 'Lockton Companies',       product: 'MainStreet BOP',         product_id: 'PRD-BOP',  lob: 'BOP',              effective: '2025-09-01', expiry: '2026-09-01', days_to_expiry: 136, status: 'Active',  status_color: 'green',  premium: 32200,   prior_premium: 30500,    commission_pct: 13, commission: 4186,  billing: 'Direct Bill',   installments: 12,paid_pct: 58, states: ['CA'],             coverages: ['Property $1M BPP','Business Income $500k','GL $1M/$2M','Employee Dishonesty $25k'], deductible: 1000, open_claims: 1, open_reserves: 42000, loss_ratio: 38, last_endorsement: '2025-11-10', compliance_flags: [],                     exposure: { locations: 2, sq_ft: 12400, sales: 8400000 } },
  { id: 'POL-10441', policy_number: 'CNA-CYB-2026-88102',    carrier_ref: 'CNA-CYB-8821', carrier: 'CNA',              carrier_id: 'CAR-03', insured: 'TechCorp Inc',                   client_id: 'CL-8810', agent_id: 'AGT-2038', agent: 'Lockton Companies',       product: 'SecureEdge Cyber',        product_id: 'PRD-CYB',  lob: 'Cyber',             effective: '2026-01-15', expiry: '2027-01-15', days_to_expiry: 271, status: 'Active',  status_color: 'green',  premium: 248000,  prior_premium: 215000,   commission_pct: 15, commission: 37200, billing: 'Agency Bill',   installments: 2, paid_pct: 50, states: ['CA','NY','TX','WA','IL','MA'], coverages: ['Cyber Liability $5M','Network Security $5M','Privacy Liability $5M','Breach Response $2M','Reg Fines $2M','Cyber Crime $500k'], deductible: 50000, open_claims: 1, open_reserves: 420000, loss_ratio: 48, last_endorsement: null, compliance_flags: ['SIU review in progress'], exposure: { records: 2100000, annual_rev: 84000000, employees: 420 } },
  { id: 'POL-10440', policy_number: 'CHB-DO-2025-10091',      carrier_ref: 'CHB-DO-10091', carrier: 'Chubb',           carrier_id: 'CAR-05', insured: 'TechCorp Inc',                   client_id: 'CL-8810', agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',         product: 'BoardGuard D&O',         product_id: 'PRD-DO',   lob: 'D&O',               effective: '2025-10-01', expiry: '2026-10-01', days_to_expiry: 166, status: 'Active',  status_color: 'green',  premium: 184000,  prior_premium: 148000,   commission_pct: 18, commission: 33120, billing: 'Agency Bill',   installments: 1, paid_pct: 100,states: ['CA','DE'],     coverages: ['Side A $5M','Side B/C $5M','Employment Practices $2M','Fiduciary $1M'], deductible: 100000, open_claims: 1, open_reserves: 850000, loss_ratio: 46, last_endorsement: null, compliance_flags: ['Class-action litigation'], exposure: { board_seats: 9, officer_count: 14, annual_rev: 84000000 } },
  { id: 'POL-10439', policy_number: 'TRV-AUTO-2026-11223',    carrier_ref: 'TRV-2026-11223', carrier: 'Travelers',       carrier_id: 'CAR-01', insured: 'Delta Logistics',                 client_id: 'CL-1122', agent_id: 'AGT-2038', agent: 'Lockton Companies',       product: 'FleetSafe Auto',          product_id: 'PRD-AUTO', lob: 'Commercial Auto',   effective: '2026-03-01', expiry: '2027-03-01', days_to_expiry: 316, status: 'Active',  status_color: 'green',  premium: 68400,   prior_premium: 62400,   commission_pct: 14, commission: 9576,  billing: 'Direct Bill',   installments: 12,paid_pct: 17, states: ['CA','OR','WA','NV'], coverages: ['Auto Liability $1M','PD $1M','UM/UIM $1M','Medical Pay $10k'], deductible: 1000, open_claims: 2, open_reserves: 4240, loss_ratio: 8, last_endorsement: '2026-03-28', compliance_flags: [],                     exposure: { vehicles: 22, drivers: 28, zip: '94612' } },
  { id: 'POL-10438', policy_number: 'CNA-GL-2024-33104',     carrier_ref: 'CNA-33104', carrier: 'CNA',               carrier_id: 'CAR-03', insured: 'Coastal Realty',                 client_id: 'CL-3311', agent_id: 'AGT-2040', agent: 'Apex Insurance Services', product: 'GuardPoint GL',           product_id: 'PRD-GL',   lob: 'General Liability',effective: '2024-05-01', expiry: '2025-05-01', days_to_expiry: -352,status: 'Expired',  status_color: 'gray',  premium: 28400,   prior_premium: 26800,   commission_pct: 15, commission: 4260,  billing: 'Agency Bill',   installments: 2, paid_pct: 100,states: ['FL','GA'],      coverages: ['Each Occurrence $1M','Aggregate $2M'], deductible: 2500, open_claims: 0, open_reserves: 0,   loss_ratio: 100,last_endorsement: null, compliance_flags: ['Did not renew'], exposure: { locations: 4, employees: 18 } },
  { id: 'POL-10437', policy_number: 'ZUR-PRP-2025-60012',    carrier_ref: 'ZUR-60012', carrier: 'Zurich',            carrier_id: 'CAR-06', insured: 'Peninsula Manufacturing',         client_id: 'CL-6001', agent_id: 'AGT-2035', agent: 'Arthur J. Gallagher',      product: 'PropertyGuard',           product_id: 'PRD-PRP',  lob: 'Property',          effective: '2025-07-01', expiry: '2026-07-01', days_to_expiry: 73,  status: 'Active',  status_color: 'green',  premium: 142000,  prior_premium: 128000,   commission_pct: 12, commission: 17040, billing: 'Direct Bill',   installments: 4, paid_pct: 75, states: ['CA'],            coverages: ['Building $12M','BPP $4M','Business Income $2M','EQ Sublimit $1M','Flood Sublimit $500k'], deductible: 25000, open_claims: 1, open_reserves: 272000, loss_ratio: 58, last_endorsement: null, compliance_flags: ['SIU fraud review'], exposure: { locations: 1, sq_ft: 120000, TIV: 16000000 } },
  { id: 'POL-10436', policy_number: 'TRV-BOP-2025-12884',    carrier_ref: 'TRV-BOP-12884', carrier: 'Travelers',       carrier_id: 'CAR-01', insured: 'Bright Dental Group',             client_id: 'CL-1288', agent_id: 'AGT-2041', agent: 'Brown & Brown',             product: 'MainStreet BOP',          product_id: 'PRD-BOP',  lob: 'BOP',              effective: '2025-11-01', expiry: '2026-11-01', days_to_expiry: 196, status: 'Active',  status_color: 'green',  premium: 14200,   prior_premium: 13400,    commission_pct: 13, commission: 1846,  billing: 'Direct Bill',   installments: 12,paid_pct: 46, states: ['TX'],            coverages: ['Property $500k BPP','Business Income $300k','GL $1M/$2M','Professional Liability $500k'], deductible: 1000, open_claims: 0, open_reserves: 0,  loss_ratio: 12, last_endorsement: null, compliance_flags: [],                     exposure: { locations: 1, sq_ft: 3200, sales: 1800000 } },
  { id: 'POL-10435', policy_number: 'LIB-WC-2025-55041',     carrier_ref: 'LIB-WC-55041', carrier: 'SEMC / Liberty',   carrier_id: 'CAR-02', insured: 'Summit Industrial',              client_id: 'CL-5504', agent_id: 'AGT-2035', agent: 'Arthur J. Gallagher',      product: 'WorkForce WC — CA Small', product_id: 'PRD-WC-CA',lob: 'Workers Comp',    effective: '2025-08-01', expiry: '2026-08-01', days_to_expiry: 104, status: 'Active',  status_color: 'green',  premium: 98400,   prior_premium: 88400,    commission_pct: 13, commission: 12792, billing: 'Direct Bill',   installments: 12,paid_pct: 67, states: ['CA','OR'],      coverages: ['WC Statutory CA','WC Statutory OR','Employers Liability $1M'], deductible: 0,    open_claims: 1, open_reserves: 34000, loss_ratio: 34, last_endorsement: null, compliance_flags: [],                     exposure: { employees: 82, payroll: 2800000, class_codes: ['3724','8810'] } },
  { id: 'POL-10434', policy_number: 'HTF-AUTO-2025-31204',   carrier_ref: 'HFD-AUTO-31204', carrier: 'Hartford',        carrier_id: 'CAR-04', insured: 'Ace Courier Services',            client_id: 'CL-3120', agent_id: 'AGT-2042', agent: 'Hub International',         product: 'FleetSafe Auto',          product_id: 'PRD-AUTO', lob: 'Commercial Auto',   effective: '2025-06-15', expiry: '2026-06-15', days_to_expiry: 57,  status: 'Active',  status_color: 'amber',  premium: 92400,   prior_premium: 84200,   commission_pct: 13, commission: 12012, billing: 'Direct Bill',   installments: 12,paid_pct: 83, states: ['IL','IN','WI','MO'], coverages: ['Auto Liability $1M','PD $1M','UM/UIM $250k'], deductible: 1000, open_claims: 0, open_reserves: 0,  loss_ratio: 22, last_endorsement: '2026-01-20', compliance_flags: [],                     exposure: { vehicles: 18, drivers: 24, zip: '60601' } },
  { id: 'POL-10433', policy_number: 'CNA-UMB-2025-88040',     carrier_ref: 'CNA-UMB-88040', carrier: 'CNA',              carrier_id: 'CAR-03', insured: 'Ridge Builders',                 client_id: 'CL-8804', agent_id: 'AGT-2038', agent: 'Lockton Companies',       product: 'OverShield Umbrella',     product_id: 'PRD-UMB',  lob: 'Umbrella',          effective: '2025-04-01', expiry: '2026-04-01', days_to_expiry: -17, status: 'In Renewal', status_color: 'red',  premium: 42800,   prior_premium: 38200,   commission_pct: 15, commission: 6420,  billing: 'Agency Bill',   installments: 1, paid_pct: 100,states: ['TX','OK','NM','AR','LA'], coverages: ['Umbrella Liability $10M xs Primary'], deductible: 10000, open_claims: 1, open_reserves: 520000, loss_ratio: 78, last_endorsement: null, compliance_flags: ['Attorney represented'], exposure: { locations: 3, employees: 84, sales: 12400000 } },
  { id: 'POL-10432', policy_number: 'CHB-CYB-2025-18802',    carrier_ref: 'CHB-CYB-18802', carrier: 'Chubb',           carrier_id: 'CAR-05', insured: 'Apex Cloud Services',             client_id: 'CL-1880', agent_id: 'AGT-2039', agent: 'Marsh Agency Inc',         product: 'SecureEdge Cyber (Enterprise)', product_id: 'PRD-CYB-E', lob: 'Cyber',        effective: '2025-10-15', expiry: '2026-10-15', days_to_expiry: 180, status: 'Active',  status_color: 'green',  premium: 384000,  prior_premium: 340000,   commission_pct: 18, commission: 69120, billing: 'Agency Bill',   installments: 1, paid_pct: 100,states: ['CA','WA','NY','TX','MA'], coverages: ['Cyber Liability $10M','Network Security $10M','Biz Interruption $5M','Regulatory $3M','Social Engineering $500k'], deductible: 100000, open_claims: 0, open_reserves: 0,  loss_ratio: 18, last_endorsement: null, compliance_flags: [],                     exposure: { records: 8200000, annual_rev: 248000000, employees: 1200 } },
  { id: 'POL-10431', policy_number: 'TRV-AUTO-2025-88420',    carrier_ref: 'TRV-88420', carrier: 'Travelers',           carrier_id: 'CAR-01', insured: 'Desert Rides Transport',           client_id: 'CL-8841', agent_id: 'AGT-2037', agent: 'Risk Strategies',          product: 'FleetSafe Auto',          product_id: 'PRD-AUTO', lob: 'Commercial Auto',   effective: '2025-01-15', expiry: '2026-01-15', days_to_expiry: -93, status: 'Reopened Claim', status_color: 'amber',  premium: 62400,   prior_premium: 58400,    commission_pct: 14, commission: 8736, billing: 'Direct Bill',   installments: 12,paid_pct: 100,states: ['NV','UT','AZ'], coverages: ['Auto Liability $1M','PD $1M','UM/UIM $500k','Medical Pay $5k'], deductible: 1000, open_claims: 1, open_reserves: 34000, loss_ratio: 62, last_endorsement: null, compliance_flags: ['Claim reopened'], exposure: { vehicles: 12, drivers: 16, zip: '89101' } },
  { id: 'POL-10430', policy_number: 'HTF-BOP-2026-90045',    carrier_ref: 'HFD-90045', carrier: 'Hartford',           carrier_id: 'CAR-04', insured: 'Starlight Cafés LLC',              client_id: 'CL-9004', agent_id: 'AGT-2045', agent: 'AssuredPartners',          product: 'MainStreet BOP',          product_id: 'PRD-BOP',  lob: 'BOP',              effective: '2026-02-01', expiry: '2027-02-01', days_to_expiry: 288, status: 'Active',  status_color: 'green',  premium: 18400,   prior_premium: null,    commission_pct: 13, commission: 2392, billing: 'Direct Bill',   installments: 12,paid_pct: 25, states: ['FL','GA'],        coverages: ['Property $500k','BI $250k','GL $1M/$2M','Liquor Liability $500k','Food Spoilage $25k'], deductible: 1000, open_claims: 0, open_reserves: 0,  loss_ratio: 0,  last_endorsement: null, compliance_flags: ['New Business'], exposure: { locations: 3, sq_ft: 6400, sales: 2400000 } },
  { id: 'POL-10429', policy_number: 'CNA-GL-2026-33201',     carrier_ref: 'CNA-33201', carrier: 'CNA',               carrier_id: 'CAR-03', insured: 'GreenField Landscaping Co',        client_id: 'CL-3320', agent_id: 'AGT-2043', agent: 'Arthur J. Gallagher',      product: 'GuardPoint GL',           product_id: 'PRD-GL',   lob: 'General Liability',effective: '2026-03-15', expiry: '2027-03-15', days_to_expiry: 330, status: 'Active',  status_color: 'green',  premium: 24800,   prior_premium: null,    commission_pct: 15, commission: 3720, billing: 'Agency Bill',   installments: 2, paid_pct: 50, states: ['CA','NV','OR'],  coverages: ['Each Occurrence $1M','Aggregate $2M','Products $1M','Employees Benefits $1M'], deductible: 2500, open_claims: 0, open_reserves: 0,  loss_ratio: 0,  last_endorsement: null, compliance_flags: ['New Business'], exposure: { locations: 2, employees: 22, sales: 1800000 } },
  { id: 'POL-10428', policy_number: 'LIB-WC-2026-55088',     carrier_ref: 'LIB-WC-55088', carrier: 'SEMC / Liberty',  carrier_id: 'CAR-02', insured: 'Pacific Marine Services',          client_id: 'CL-5508', agent_id: 'AGT-2038', agent: 'Lockton Companies',       product: 'WorkForce WC — CA Small', product_id: 'PRD-WC-CA',lob: 'Workers Comp',    effective: '2026-04-01', expiry: '2027-04-01', days_to_expiry: 347, status: 'Active',  status_color: 'green',  premium: 64200,   prior_premium: null,    commission_pct: 13, commission: 8346, billing: 'Direct Bill',   installments: 12,paid_pct: 8,  states: ['CA'],          coverages: ['WC Statutory CA','Employers Liability $1M/$1M/$1M','USL&H Endorsement'], deductible: 0,    open_claims: 0, open_reserves: 0,  loss_ratio: 0,  last_endorsement: null, compliance_flags: ['New Business'], exposure: { employees: 48, payroll: 2400000, class_codes: ['7317','8810'] } }
];

export const mgaPolicyDetailCanonical = {
  policy_id: 'POL-10445',
  transactions: [
    { type: 'Issuance',     effective: '2026-01-01', processed: '2025-12-28 14:22', premium: 48400, change: '+48400', actor: 'Mike Torres',   note: 'New business binding completed · DocuSign envelope #CC-8821' },
    { type: 'Endorsement',  effective: '2026-02-10', processed: '2026-02-10 11:30', premium: 50200, change: '+1800',  actor: 'Mike Torres',   note: 'Added vehicle #8 · 2024 Ford F-250 · Premium recalculated' },
    { type: 'Endorsement',  effective: '2026-03-01', processed: '2026-03-01 09:45', premium: 49800, change: '-400',   actor: 'Sarah Chen',    note: 'Removed driver (Driver C) · pro-rata adjustment' }
  ],
  servicing_history: [
    { ts: '2026-04-12 16:42', actor: 'Insured (portal)', event: 'Filed claim CLM-MGA-2026-0248 (rear-end collision)' },
    { ts: '2026-03-15 10:00', actor: 'Agent Olivia (Lockton)', event: 'Requested COI for Port of Sacramento additional insured' },
    { ts: '2026-03-01 09:45', actor: 'Sarah Chen',      event: 'Endorsement #3 processed — driver removal' },
    { ts: '2026-02-10 11:30', actor: 'Mike Torres',     event: 'Endorsement #2 processed — vehicle addition' },
    { ts: '2026-01-05 14:00', actor: 'System',          event: 'First billing installment $12,100 processed via ACH' },
    { ts: '2025-12-28 14:22', actor: 'Mike Torres',     event: 'Policy bound and issued · declarations + forms sent to insured' }
  ],
  risk_profile: {
    score: 72, tier: 'Standard',
    drivers_avg_age: 38, drivers_mvr_clean: 17,
    fleet_avg_age_yrs: 4.2, garaged_in: 'CA', city: 'Sacramento',
    loss_ratio_36mo: 28, prior_claims_3yr: 2,
    moderator_notes: 'Clean loss history · young driver percentage low · GPS tracking + 2024 fleet renewal in progress'
  }
};

export const mgaPolicyEndorsements = [
  { id: 'END-88421', policy_id: 'POL-10445', policy_number: 'TRV-AUTO-2026-11445', insured: 'Westshore Logistics',              type: 'Add Vehicle',              description: 'Add 2026 Ford F-250 · VIN 1FT...9812 · Co. truck #15',                 submitted: '2026-04-17 10:00', submitted_by: 'Olivia Sanchez (Lockton)', status: 'Awaiting UW Review', priority: 'Normal', premium_impact: 3200,  effective: '2026-04-20', docs: 2 },
  { id: 'END-88420', policy_id: 'POL-10441', policy_number: 'CNA-CYB-2026-88102',   insured: 'TechCorp Inc',                     type: 'Increase Limit',            description: 'Increase Cyber Liability limit $5M → $10M · regulatory notification driver',  submitted: '2026-04-16 14:22', submitted_by: 'Sarah Chen',               status: 'Carrier Referred',   priority: 'High',   premium_impact: 48000, effective: '2026-05-01', docs: 4 },
  { id: 'END-88419', policy_id: 'POL-10443', policy_number: 'CNA-GL-2025-33102',    insured: 'Apex Industries',                  type: 'Add Location',              description: 'Add El Paso, TX (4th location) · 12,000 sq ft office',                  submitted: '2026-04-15 11:22', submitted_by: 'Mike Torres',              status: 'Ready to Issue',      priority: 'Normal', premium_impact: 4800,  effective: '2026-05-01', docs: 3 },
  { id: 'END-88418', policy_id: 'POL-10444', policy_number: 'SEMC-WC-2025-48821',   insured: 'Magnolia Construction LLC',         type: 'Class Code Change',         description: 'Update class 5474→5403 · payroll reclass (40% of $1.8M)',              submitted: '2026-04-14 09:40', submitted_by: 'Olivia Sanchez (Lockton)', status: 'Awaiting Insured Signature', priority: 'Normal', premium_impact: 12400, effective: '2026-04-01', docs: 5 },
  { id: 'END-88417', policy_id: 'POL-10442', policy_number: 'HTF-BOP-2025-90112',   insured: 'Harbor Foods',                     type: 'Additional Insured',        description: 'Add Port of Oakland as Additional Insured on all liability lines',      submitted: '2026-04-12 13:15', submitted_by: 'Olivia Sanchez (Lockton)', status: 'Issued',              priority: 'Normal', premium_impact: 0,     effective: '2026-04-12', docs: 2 },
  { id: 'END-88416', policy_id: 'POL-10439', policy_number: 'TRV-AUTO-2026-11223',   insured: 'Delta Logistics',                  type: 'Name Change',               description: 'Update Named Insured: Delta Logistics LLC → Delta Logistics Inc (corp change)', submitted: '2026-03-28 14:00', submitted_by: 'Olivia Sanchez (Lockton)', status: 'Issued',              priority: 'Low',    premium_impact: 0,     effective: '2026-03-28', docs: 3 },
  { id: 'END-88415', policy_id: 'POL-10437', policy_number: 'ZUR-PRP-2025-60012',    insured: 'Peninsula Manufacturing',          type: 'Increase Deductible',        description: 'Increase property deductible $25k → $50k · premium credit',             submitted: '2026-03-20 10:30', submitted_by: 'Mike Torres',              status: 'Issued',              priority: 'Normal', premium_impact: -6200, effective: '2026-04-01', docs: 2 },
  { id: 'END-88414', policy_id: 'POL-10440', policy_number: 'CHB-DO-2025-10091',     insured: 'TechCorp Inc',                     type: 'Acquisition Notice',         description: 'Add newly acquired subsidiary (SecureDot Inc) to D&O coverage',          submitted: '2026-03-15 15:40', submitted_by: 'Sarah Chen',               status: 'Carrier Referred',    priority: 'High',   premium_impact: 18000, effective: '2026-04-01', docs: 6 }
];

export const mgaCOIRequests = [
  { id: 'COI-22104', policy_id: 'POL-10444', policy_number: 'SEMC-WC-2025-48821', insured: 'Magnolia Construction LLC',          certificate_holder: 'Port of Sacramento',              type: 'Additional Insured', requested: '2026-04-17 10:15', requested_by: 'Olivia Sanchez (Lockton)', status: 'Issued',   issued: '2026-04-17 10:18', doc_id: 'DOC-54199', wait_sec: 3 },
  { id: 'COI-22103', policy_id: 'POL-10445', policy_number: 'TRV-AUTO-2026-11445',insured: 'Westshore Logistics',                  certificate_holder: 'Port of Sacramento',              type: 'Certificate Holder', requested: '2026-04-18 09:40', requested_by: 'Olivia Sanchez (Lockton)', status: 'Issued',   issued: '2026-04-18 09:42', doc_id: 'DOC-54310', wait_sec: 2 },
  { id: 'COI-22102', policy_id: 'POL-10439', policy_number: 'TRV-AUTO-2026-11223',insured: 'Delta Logistics',                      certificate_holder: 'XYZ Shipping Inc',                  type: 'Additional Insured', requested: '2026-04-17 14:20', requested_by: 'Agent Portal',              status: 'Issued',   issued: '2026-04-17 14:22', doc_id: 'DOC-54305', wait_sec: 2 },
  { id: 'COI-22101', policy_id: 'POL-10442', policy_number: 'HTF-BOP-2025-90112', insured: 'Harbor Foods',                         certificate_holder: 'Walmart Stores Inc',                type: 'Waiver of Subrogation', requested: '2026-04-17 11:05', requested_by: 'Olivia Sanchez (Lockton)', status: 'Pending UW Review', issued: null, doc_id: null, wait_sec: null, note: 'Waiver of Subro endorsement required · routing to UW' },
  { id: 'COI-22100', policy_id: 'POL-10441', policy_number: 'CNA-CYB-2026-88102',insured: 'TechCorp Inc',                         certificate_holder: 'Microsoft Corporation',              type: 'Additional Insured', requested: '2026-04-17 09:22', requested_by: 'Agent Portal',              status: 'Issued',   issued: '2026-04-17 09:24', doc_id: 'DOC-54302', wait_sec: 2 },
  { id: 'COI-22099', policy_id: 'POL-10436', policy_number: 'TRV-BOP-2025-12884',insured: 'Bright Dental Group',                   certificate_holder: 'State of Texas DSHS',               type: 'Certificate Holder', requested: '2026-04-16 16:00', requested_by: 'Agent Portal',              status: 'Issued',   issued: '2026-04-16 16:02', doc_id: 'DOC-54300', wait_sec: 2 },
  { id: 'COI-22098', policy_id: 'POL-10435', policy_number: 'LIB-WC-2025-55041', insured: 'Summit Industrial',                     certificate_holder: 'General Dynamics',                   type: 'Waiver of Subrogation', requested: '2026-04-16 13:40', requested_by: 'Olivia Sanchez (Lockton)', status: 'Issued',   issued: '2026-04-16 13:48', doc_id: 'DOC-54298', wait_sec: 8 },
  { id: 'COI-22097', policy_id: 'POL-10434', policy_number: 'HTF-AUTO-2025-31204',insured: 'Ace Courier Services',                certificate_holder: 'United Parcel Service (UPS)',        type: 'Additional Insured', requested: '2026-04-16 09:15', requested_by: 'Agent Portal',              status: 'Issued',   issued: '2026-04-16 09:17', doc_id: 'DOC-54295', wait_sec: 2 }
];

export const mgaPolicyTasks = [
  { id: 'TSK-44201', policy_id: 'POL-10444', policy_number: 'SEMC-WC-2025-48821', type: 'Renewal Kickoff',           description: 'Policy expires 2026-06-01 · 43 days away · carrier renewal negotiations active',               priority: 'High',    status: 'In Progress', assigned: 'Sarah Chen',        due: '2026-04-22', created: '2026-04-01' },
  { id: 'TSK-44200', policy_id: 'POL-10443', policy_number: 'CNA-GL-2025-33102',  type: 'Renewal Processing',        description: 'Policy expired 2026-04-01 · in renewal workflow · quote requested from CNA',                    priority: 'High',    status: 'In Progress', assigned: 'Sarah Chen',        due: '2026-04-20', created: '2026-03-15' },
  { id: 'TSK-44199', policy_id: 'POL-10434', policy_number: 'HTF-AUTO-2025-31204',type: 'Renewal Kickoff',           description: 'Policy expires 2026-06-15 · prepare renewal packet · loss run + MVR update needed',               priority: 'Medium',  status: 'Open',        assigned: 'Mike Torres',       due: '2026-04-25', created: '2026-04-15' },
  { id: 'TSK-44198', policy_id: 'POL-10441', policy_number: 'CNA-CYB-2026-88102', type: 'Endorsement Processing',    description: 'END-88420 limit increase to $10M · carrier response expected · follow up if no response by 2026-04-25', priority: 'High',    status: 'Waiting',     assigned: 'Sarah Chen',        due: '2026-04-25', created: '2026-04-16' },
  { id: 'TSK-44197', policy_id: 'POL-10442', policy_number: 'HTF-BOP-2025-90112', type: 'Claim Follow-up',           description: 'CLM-MGA-2026-0244 reserve approval pending · Harbor Foods · update insured',                     priority: 'Normal',  status: 'Open',        assigned: 'Mike Torres',       due: '2026-04-22', created: '2026-04-18' },
  { id: 'TSK-44196', policy_id: 'POL-10444', policy_number: 'SEMC-WC-2025-48821', type: 'Premium Audit',              description: 'Annual premium audit · collect 2026 payroll data · class code verification',                     priority: 'Normal',  status: 'Open',        assigned: 'Omar Khalid',       due: '2026-05-15', created: '2026-04-10' },
  { id: 'TSK-44195', policy_id: 'POL-10437', policy_number: 'ZUR-PRP-2025-60012', type: 'SIU Investigation',           description: 'Peninsula Mfg loss · SIU findings expected · review with claims + compliance',                   priority: 'High',    status: 'In Progress', assigned: 'Priya Shah',        due: '2026-04-25', created: '2026-03-22' },
  { id: 'TSK-44194', policy_id: 'POL-10445', policy_number: 'TRV-AUTO-2026-11445', type: 'COI Coordination',          description: 'Issue 3 COI pack for Westshore · Port of Sacramento (done), Walmart, UPS',                      priority: 'Normal',  status: 'In Progress', assigned: 'Agent (self-service)', due: '2026-04-20', created: '2026-04-18' },
  { id: 'TSK-44193', policy_id: 'POL-10433', policy_number: 'CNA-UMB-2025-88040', type: 'Renewal Processing',        description: 'Umbrella expired 2026-04-01 · litigation pending · renewal at risk · carrier review',           priority: 'High',    status: 'In Progress', assigned: 'Lisa Park',         due: '2026-04-30', created: '2026-03-20' },
  { id: 'TSK-44192', policy_id: 'POL-10431', policy_number: 'TRV-AUTO-2025-88420',type: 'Reopened Claim Handling',   description: 'CLM-0234 reopened · new injury disclosed · update insured and agent',                             priority: 'Normal',  status: 'In Progress', assigned: 'Jane Rodriguez',    due: '2026-04-22', created: '2026-04-08' }
];

export const mgaPoliciesAnalytics = {
  inforce_by_lob: [
    { lob: 'Commercial Auto',  count: 620, premium: 14820000 },
    { lob: 'Workers Comp',     count: 420, premium: 11640000 },
    { lob: 'General Liability',count: 980, premium:  9420000 },
    { lob: 'BOP',               count: 1820,premium:  7820000 },
    { lob: 'Cyber',             count: 380, premium:  6240000 },
    { lob: 'Property',          count: 182, premium:  3200000 },
    { lob: 'Umbrella',          count: 244, premium:  2820000 },
    { lob: 'D&O',               count: 120, premium:  2540000 }
  ],
  retention_trend: [
    { period: '2025 Q1', renewed: 412, not_renewed: 58, retention: 88 },
    { period: '2025 Q2', renewed: 428, not_renewed: 52, retention: 89 },
    { period: '2025 Q3', renewed: 442, not_renewed: 48, retention: 90 },
    { period: '2025 Q4', renewed: 462, not_renewed: 44, retention: 91 },
    { period: '2026 Q1', renewed: 504, not_renewed: 48, retention: 91 }
  ],
  endorsements_by_type: [
    { type: 'Add Vehicle',           count: 84 },
    { type: 'Additional Insured',    count: 128 },
    { type: 'Add Location',          count: 46 },
    { type: 'Increase Limit',        count: 32 },
    { type: 'Name Change',            count: 18 },
    { type: 'Class Code Change',     count: 14 },
    { type: 'Waiver of Subrogation', count: 62 }
  ],
  cancellation_reasons: [
    { reason: 'Non-payment',                count: 28, pct: 42 },
    { reason: 'Moved to competitor',        count: 18, pct: 27 },
    { reason: 'Business closed',            count: 8,  pct: 12 },
    { reason: 'Outside appetite (mid-term)',count: 6,  pct: 9  },
    { reason: 'Voluntary (insured)',        count: 4,  pct: 6  },
    { reason: 'Underwriter request',        count: 2,  pct: 3  }
  ]
};

export const mgaDocRetentionRules = [
  { category: 'Policy Documents',         retention: '10 years after policy expiry',                reg: 'NAIC Model Audit Rule · CA Insurance Code §10509',  auto_archive: true,  auto_delete: false },
  { category: 'Claims Documents',         retention: '10 years after claim closure',                reg: 'Fair Claims Practices + state SOL',                  auto_archive: true,  auto_delete: false },
  { category: 'Submission & Underwriting',retention: '7 years after submission close (bound or declined)', reg: 'SOX + carrier contract',                    auto_archive: true,  auto_delete: false },
  { category: 'Agent & Compliance',        retention: '7 years after contract termination',         reg: 'IRS + state licensing',                            auto_archive: true,  auto_delete: false },
  { category: 'Carrier Agreements',       retention: '10 years after contract termination',        reg: 'Carrier contractual requirement',                   auto_archive: true,  auto_delete: false },
  { category: 'Financial Records',         retention: '7 years from fiscal year end',               reg: 'SOX · IRS · trust account rules',                  auto_archive: true,  auto_delete: false },
  { category: 'Audit / DOI Correspondence',retention: 'Permanent',                                  reg: 'Audit readiness · regulatory response',             auto_archive: false, auto_delete: false },
  { category: 'PII / Temporary',            retention: '90 days unless linked',                      reg: 'GDPR-aligned · CCPA',                                auto_archive: false, auto_delete: true  }
];

/* ============================================================
   KONDUIT CAPACITY PORTAL — Data Layer
   MGA ↔ Capacity Provider marketplace
   ============================================================ */

export const KONDUIT_USERS = {
  mga:      { name: 'Evan Harlow',    role: 'MGA Founder',       company: 'Meridian Specialty Underwriters', avatar: 'EH' },
  capacity: { name: 'Priya Raman',    role: 'Lead Underwriter',  company: 'Summit Fronting Re',             avatar: 'PR' },
  admin:    { name: 'Konduit Ops',    role: 'Platform Admin',    company: 'Konduit',                        avatar: 'KO' }
};

export const KONDUIT_LOBS = [
  'Commercial Property','CAT Personal Lines','CAT Commercial','Cyber','Casualty / GL','E&O','D&O',
  'Marine','Transportation','Workers Compensation','Aviation','Healthcare','Surety','Construction',
  'Environmental','Specialty'
];

export const KONDUIT_STRUCTURES = ['Fronting only','Reinsurance only','Full-stack','Fronting + Reinsurance'];
export const KONDUIT_GEO = ['US — Nationwide','US — SE','US — NE','US — West','US — Midwest','Lloyd\'s / Global','EU','UK'];

export const konduitDashboardKPIs = {
  mga: [
    { label: 'Active Programs',       value: '3' },
    { label: 'Marketplace Views (30d)', value: '247' },
    { label: 'NDA Requests',          value: '12', warning: true },
    { label: 'Signed NDAs',           value: '8' },
    { label: 'Data Quality Score',    value: '94%' },
    { label: 'Avg Time to Match',     value: '11 days' }
  ],
  capacity: [
    { label: 'Matched Programs',      value: '18' },
    { label: 'In Diligence',          value: '5' },
    { label: 'NDA Signed',            value: '9' },
    { label: 'Avg Loss Ratio (pool)', value: '58.4%' },
    { label: 'Pending Decisions',     value: '3', warning: true },
    { label: 'Bound YTD',             value: '$84M GWP' }
  ],
  admin: [
    { label: 'Programs Awaiting QA',  value: '4', warning: true },
    { label: 'Published Programs',    value: '62' },
    { label: 'Active MGAs',           value: '41' },
    { label: 'Active Capacity Orgs',  value: '27' },
    { label: 'NDAs This Month',       value: '136' },
    { label: 'Platform Uptime',       value: '99.98%' }
  ]
};

export const konduitPrograms = [
  {
    id: 'KDP-0812',
    name: 'Meridian Coastal Property',
    mga: 'Meridian Specialty Underwriters',
    lob: 'Commercial Property',
    geo: 'US — SE',
    status: 'Live',
    statusColor: 'green',
    structure: 'Fronting + Reinsurance',
    gwp_target: 42000000,
    gwp_display: '$42M',
    loss_ratio_band: '52–58%',
    loss_ratio: 54.8,
    combined_ratio: 91.2,
    retention: '85%',
    quality_score: 96,
    views: 84,
    nda_requests: 6,
    nda_signed: 4,
    match_score: 92,
    submitted: '2026-03-11',
    published: '2026-03-18',
    summary: 'Middle-market coastal property program targeting $5M–$50M TIV. 8-year combined track record on similar book at Nephila.',
    founder_track: 'Ex-Nephila / Markel · 18 yrs',
    files: 7
  },
  {
    id: 'KDP-0813',
    name: 'Meridian Cyber SME',
    mga: 'Meridian Specialty Underwriters',
    lob: 'Cyber',
    geo: 'US — Nationwide',
    status: 'In Review',
    statusColor: 'amber',
    structure: 'Fronting only',
    gwp_target: 18000000,
    gwp_display: '$18M',
    loss_ratio_band: '44–50%',
    loss_ratio: 47.1,
    combined_ratio: 86.5,
    retention: '78%',
    quality_score: 88,
    views: 12,
    nda_requests: 0,
    nda_signed: 0,
    match_score: 0,
    submitted: '2026-04-09',
    published: null,
    summary: 'SME cyber with $1M/$3M limits, proprietary scoring model, 24-month claims data from sister book.',
    founder_track: 'Ex-Beazley · 12 yrs',
    files: 5
  },
  {
    id: 'KDP-0814',
    name: 'Meridian Marine Cargo',
    mga: 'Meridian Specialty Underwriters',
    lob: 'Marine',
    geo: 'Lloyd\'s / Global',
    status: 'Draft',
    statusColor: 'grey',
    structure: 'Reinsurance only',
    gwp_target: 27000000,
    gwp_display: '$27M',
    loss_ratio_band: '55–62%',
    loss_ratio: 59.0,
    combined_ratio: 93.8,
    retention: '72%',
    quality_score: 62,
    views: 0,
    nda_requests: 0,
    nda_signed: 0,
    match_score: 0,
    submitted: null,
    published: null,
    summary: 'Stock throughput and marine cargo for mid-size shippers. Draft — financials pending.',
    founder_track: 'Ex-Munich Re · 9 yrs',
    files: 3
  },
  {
    id: 'KDP-0815',
    name: 'Harbor WC — West',
    mga: 'Harbor Program Partners',
    lob: 'Workers Compensation',
    geo: 'US — West',
    status: 'Live',
    statusColor: 'green',
    structure: 'Full-stack',
    gwp_target: 65000000,
    gwp_display: '$65M',
    loss_ratio_band: '60–66%',
    loss_ratio: 62.7,
    combined_ratio: 94.4,
    retention: '88%',
    quality_score: 93,
    views: 141,
    nda_requests: 11,
    nda_signed: 7,
    match_score: 87,
    submitted: '2026-02-02',
    published: '2026-02-09',
    summary: 'Western-states WC on hospitality, light manufacturing, retail. 6-year book with declining loss trend.',
    founder_track: 'Ex-Zurich / AmTrust · 22 yrs',
    files: 9
  },
  {
    id: 'KDP-0816',
    name: 'Skyline Aviation',
    mga: 'Skyline Aviation MGA',
    lob: 'Aviation',
    geo: 'US — Nationwide',
    status: 'Live',
    statusColor: 'green',
    structure: 'Reinsurance only',
    gwp_target: 38000000,
    gwp_display: '$38M',
    loss_ratio_band: '48–54%',
    loss_ratio: 51.2,
    combined_ratio: 88.9,
    retention: '81%',
    quality_score: 91,
    views: 73,
    nda_requests: 5,
    nda_signed: 3,
    match_score: 84,
    submitted: '2026-03-04',
    published: '2026-03-12',
    summary: 'Part-91/135 fleet, rotor-wing EMS, and light jets. Avg fleet age 8.2 yrs.',
    founder_track: 'Ex-Global Aerospace · 14 yrs',
    files: 8
  },
  {
    id: 'KDP-0817',
    name: 'Evergreen Environmental',
    mga: 'Evergreen Environmental Risk',
    lob: 'Environmental',
    geo: 'US — Nationwide',
    status: 'Paused',
    statusColor: 'amber',
    structure: 'Fronting + Reinsurance',
    gwp_target: 22000000,
    gwp_display: '$22M',
    loss_ratio_band: '50–58%',
    loss_ratio: 53.9,
    combined_ratio: 90.6,
    retention: '74%',
    quality_score: 85,
    views: 38,
    nda_requests: 2,
    nda_signed: 1,
    match_score: 72,
    submitted: '2026-01-18',
    published: '2026-01-27',
    summary: 'Contractors pollution liability and site-specific environmental. Paused pending new financials.',
    founder_track: 'Ex-Chubb Environmental · 16 yrs',
    files: 6
  },
  {
    id: 'KDP-0818',
    name: 'Atlas Surety — Small Contractor',
    mga: 'Atlas Surety Group',
    lob: 'Surety',
    geo: 'US — Nationwide',
    status: 'Live',
    statusColor: 'green',
    structure: 'Full-stack',
    gwp_target: 15000000,
    gwp_display: '$15M',
    loss_ratio_band: '18–24%',
    loss_ratio: 21.3,
    combined_ratio: 74.8,
    retention: '91%',
    quality_score: 95,
    views: 58,
    nda_requests: 4,
    nda_signed: 3,
    match_score: 89,
    submitted: '2026-02-20',
    published: '2026-02-26',
    summary: 'Contract and commercial surety for contractors under $5M revenue. Tight underwriting criteria.',
    founder_track: 'Ex-Liberty Mutual Surety · 20 yrs',
    files: 7
  },
  {
    id: 'KDP-0819',
    name: 'Northstar Trucking',
    mga: 'Northstar Transportation MGA',
    lob: 'Transportation',
    geo: 'US — Midwest',
    status: 'Bound',
    statusColor: 'blue',
    structure: 'Fronting + Reinsurance',
    gwp_target: 54000000,
    gwp_display: '$54M',
    loss_ratio_band: '62–68%',
    loss_ratio: 64.5,
    combined_ratio: 96.1,
    retention: '79%',
    quality_score: 90,
    views: 202,
    nda_requests: 14,
    nda_signed: 10,
    match_score: 95,
    submitted: '2025-11-10',
    published: '2025-11-18',
    bound: '2026-01-12',
    summary: 'Long-haul trucking with telematics-driven pricing. Bound with Summit Fronting Re for 2026 treaty.',
    founder_track: 'Ex-Great West Casualty · 25 yrs',
    files: 11
  }
];

export const konduitCapacityOrgs = [
  { id: 'CAP-01', name: 'Summit Fronting Re',     type: 'Fronting Carrier',   paper: 'A (AM Best)', gwp_appetite: '$10M–$100M', lobs: ['Commercial Property','Cyber','Marine','Workers Compensation','Transportation'], geo: ['US — Nationwide','Lloyd\'s / Global'], notes: 'Aggressive on property, selective on cyber.' },
  { id: 'CAP-02', name: 'Nordic Global Re',       type: 'Reinsurer',          paper: 'A+ (S&P)',    gwp_appetite: '$20M–$250M', lobs: ['Commercial Property','CAT Commercial','Aviation','Marine'],               geo: ['US — Nationwide','EU','UK'],          notes: 'CAT-hungry; prefers non-US peril concentration.' },
  { id: 'CAP-03', name: 'Syndicate 4488 — Lloyd\'s', type: 'Lloyd\'s Syndicate', paper: 'A (AM Best)', gwp_appetite: '$5M–$80M',   lobs: ['Cyber','E&O','D&O','Specialty','Marine'],                                  geo: ['Lloyd\'s / Global','UK','US — Nationwide'], notes: 'Specialty-focused; fast NDA turnaround.' },
  { id: 'CAP-04', name: 'Pacific Paper Group',    type: 'Fronting Carrier',   paper: 'A- (AM Best)',gwp_appetite: '$5M–$60M',   lobs: ['Workers Compensation','Casualty / GL','Transportation','Construction'],  geo: ['US — West','US — Nationwide'],         notes: 'Strong in WC/GL; skips healthcare.' },
  { id: 'CAP-05', name: 'Gateway Re (Bermuda)',   type: 'Reinsurer',          paper: 'A (AM Best)', gwp_appetite: '$25M–$200M', lobs: ['Commercial Property','CAT Personal Lines','CAT Commercial','Casualty / GL'], geo: ['US — Nationwide','US — SE'],         notes: 'Programmatic; prefers multi-year deals.' },
  { id: 'CAP-06', name: 'Brookline Full-Stack',   type: 'Full-stack Capacity',paper: 'A (AM Best)', gwp_appetite: '$15M–$120M', lobs: ['Surety','Environmental','Construction','Casualty / GL'],                   geo: ['US — Nationwide'],                     notes: 'Fronting + treaty retention in one package.' }
];

export const konduitBenchmarks = [
  { lob: 'Commercial Property', median_lr: 55.0, p25_lr: 48.0, p75_lr: 62.0, median_cr: 92.0, median_ret: 82 },
  { lob: 'Cyber',               median_lr: 46.0, p25_lr: 38.0, p75_lr: 55.0, median_cr: 88.0, median_ret: 76 },
  { lob: 'Workers Compensation',median_lr: 63.0, p25_lr: 56.0, p75_lr: 70.0, median_cr: 95.0, median_ret: 86 },
  { lob: 'Aviation',            median_lr: 52.0, p25_lr: 44.0, p75_lr: 60.0, median_cr: 89.5, median_ret: 80 },
  { lob: 'Marine',              median_lr: 58.5, p25_lr: 51.0, p75_lr: 66.0, median_cr: 93.0, median_ret: 75 },
  { lob: 'Surety',              median_lr: 22.0, p25_lr: 16.0, p75_lr: 30.0, median_cr: 76.0, median_ret: 90 },
  { lob: 'Environmental',       median_lr: 54.0, p25_lr: 47.0, p75_lr: 62.0, median_cr: 91.0, median_ret: 74 },
  { lob: 'Transportation',      median_lr: 65.0, p25_lr: 58.0, p75_lr: 72.0, median_cr: 96.5, median_ret: 78 }
];

export const konduitDealEvents = [
  { id: 'EV-501', ts: '2026-04-19 14:22', programId: 'KDP-0812', type: 'NDA Signed',    party: 'Summit Fronting Re',       actor: 'Priya Raman',     note: 'Full data room unlocked' },
  { id: 'EV-502', ts: '2026-04-19 11:08', programId: 'KDP-0812', type: 'View',          party: 'Nordic Global Re',         actor: 'Lars Fjeldstad',  note: 'Opened program summary' },
  { id: 'EV-503', ts: '2026-04-18 16:47', programId: 'KDP-0815', type: 'NDA Requested', party: 'Gateway Re (Bermuda)',     actor: 'Dana Kinross',    note: 'Requesting underwriting detail' },
  { id: 'EV-504', ts: '2026-04-18 10:12', programId: 'KDP-0818', type: 'Message',       party: 'Brookline Full-Stack',     actor: 'Omar Farouk',     note: 'Follow-up on loss triangles' },
  { id: 'EV-505', ts: '2026-04-17 15:33', programId: 'KDP-0816', type: 'Term Sheet',    party: 'Nordic Global Re',         actor: 'Lars Fjeldstad',  note: 'Preliminary term sheet sent' },
  { id: 'EV-506', ts: '2026-04-17 09:04', programId: 'KDP-0812', type: 'View',          party: 'Syndicate 4488 — Lloyd\'s',actor: 'Harriet Blake',   note: 'Banded-metrics view' },
  { id: 'EV-507', ts: '2026-04-16 14:55', programId: 'KDP-0819', type: 'Bound',         party: 'Summit Fronting Re',       actor: 'Priya Raman',     note: 'Bound $54M GWP, 1/1 inception' },
  { id: 'EV-508', ts: '2026-04-16 11:21', programId: 'KDP-0815', type: 'View',          party: 'Pacific Paper Group',      actor: 'Nina Alvarez',    note: 'Filter match: WC / West' }
];

export const konduitDocuments = [
  { id: 'DOC-1001', programId: 'KDP-0812', name: 'Meridian_Coastal_Program_Deck.pdf',    type: 'Program Deck',       size: '4.2 MB', uploaded: '2026-03-11', confidence: 0.96, status: 'Extracted' },
  { id: 'DOC-1002', programId: 'KDP-0812', name: 'Historical_Loss_Triangles.xlsx',       type: 'Actuarial',          size: '1.8 MB', uploaded: '2026-03-11', confidence: 0.92, status: 'Extracted' },
  { id: 'DOC-1003', programId: 'KDP-0812', name: 'Founder_Bios.pdf',                     type: 'Team',               size: '0.9 MB', uploaded: '2026-03-11', confidence: 0.99, status: 'Extracted' },
  { id: 'DOC-1004', programId: 'KDP-0812', name: 'Pro_Forma_Financials.xlsx',            type: 'Financials',         size: '2.1 MB', uploaded: '2026-03-12', confidence: 0.88, status: 'Extracted' },
  { id: 'DOC-1005', programId: 'KDP-0813', name: 'Cyber_SME_Appetite.pdf',               type: 'Appetite',           size: '1.1 MB', uploaded: '2026-04-09', confidence: 0.94, status: 'Extracted' },
  { id: 'DOC-1006', programId: 'KDP-0813', name: 'Cyber_Claims_24mo.xlsx',               type: 'Claims',             size: '3.3 MB', uploaded: '2026-04-09', confidence: 0.81, status: 'Review Needed' },
  { id: 'DOC-1007', programId: 'KDP-0814', name: 'Marine_Cargo_Draft.pptx',              type: 'Program Deck',       size: '5.6 MB', uploaded: '2026-04-14', confidence: 0.71, status: 'Review Needed' },
  { id: 'DOC-1008', programId: 'KDP-0815', name: 'Harbor_WC_West_Program.pdf',           type: 'Program Deck',       size: '6.8 MB', uploaded: '2026-02-02', confidence: 0.97, status: 'Extracted' },
  { id: 'DOC-1009', programId: 'KDP-0815', name: 'Harbor_WC_Actuarial_Study.pdf',        type: 'Actuarial',          size: '4.1 MB', uploaded: '2026-02-03', confidence: 0.93, status: 'Extracted' }
];

export const konduitNDAs = [
  { id: 'NDA-201', programId: 'KDP-0812', counterparty: 'Summit Fronting Re',   requested: '2026-04-14', signed: '2026-04-19', status: 'Signed',    expiry: '2027-04-19' },
  { id: 'NDA-202', programId: 'KDP-0812', counterparty: 'Nordic Global Re',     requested: '2026-04-17', signed: null,         status: 'Pending',   expiry: null },
  { id: 'NDA-203', programId: 'KDP-0815', counterparty: 'Gateway Re (Bermuda)', requested: '2026-04-18', signed: null,         status: 'Pending',   expiry: null },
  { id: 'NDA-204', programId: 'KDP-0815', counterparty: 'Pacific Paper Group',  requested: '2026-03-01', signed: '2026-03-04', status: 'Signed',    expiry: '2027-03-04' },
  { id: 'NDA-205', programId: 'KDP-0816', counterparty: 'Nordic Global Re',     requested: '2026-03-20', signed: '2026-03-22', status: 'Signed',    expiry: '2027-03-22' },
  { id: 'NDA-206', programId: 'KDP-0818', counterparty: 'Brookline Full-Stack', requested: '2026-03-05', signed: '2026-03-08', status: 'Signed',    expiry: '2027-03-08' },
  { id: 'NDA-207', programId: 'KDP-0819', counterparty: 'Summit Fronting Re',   requested: '2025-12-02', signed: '2025-12-05', status: 'Signed',    expiry: '2026-12-05' }
];

export const konduitMessages = [
  { id: 'MSG-301', programId: 'KDP-0812', thread: 'Summit Fronting Re',   last: '2026-04-19 14:28', preview: 'Received the data room. Starting actuarial review — will revert by Monday.', unread: 1 },
  { id: 'MSG-302', programId: 'KDP-0818', thread: 'Brookline Full-Stack', last: '2026-04-18 10:12', preview: 'Could you share the 5-year loss triangle for the contractor segment?',        unread: 2 },
  { id: 'MSG-303', programId: 'KDP-0816', thread: 'Nordic Global Re',     last: '2026-04-17 15:38', preview: 'Term sheet attached for preliminary discussion.',                              unread: 0 },
  { id: 'MSG-304', programId: 'KDP-0815', thread: 'Pacific Paper Group',  last: '2026-04-16 11:25', preview: 'Appetite fit confirmed. Let\'s schedule a call next week.',                   unread: 0 }
];

export const konduitSavedSearches = [
  { id: 'SRCH-01', name: 'Cyber SME · US · $10–30M',    lob: ['Cyber'],                      geo: ['US — Nationwide'], gwp_min: 10000000, gwp_max: 30000000, lr_max: 55, alerts: true,  matches: 4 },
  { id: 'SRCH-02', name: 'Property CAT SE · $25M+',     lob: ['Commercial Property','CAT Commercial'], geo: ['US — SE'], gwp_min: 25000000, gwp_max: 150000000, lr_max: 60, alerts: true, matches: 2 },
  { id: 'SRCH-03', name: 'Specialty Lloyd\'s',          lob: ['Marine','E&O','D&O','Specialty'], geo: ['Lloyd\'s / Global','UK'], gwp_min: 5000000, gwp_max: 80000000, lr_max: 58, alerts: false, matches: 7 },
  { id: 'SRCH-04', name: 'WC West · $30M+',             lob: ['Workers Compensation'],       geo: ['US — West'],       gwp_min: 30000000, gwp_max: 100000000, lr_max: 66, alerts: true,  matches: 1 }
];

export const konduitAppetiteProfile = {
  org: 'Summit Fronting Re',
  lobs: ['Commercial Property','Cyber','Marine','Workers Compensation','Transportation'],
  geo: ['US — Nationwide','Lloyd\'s / Global'],
  gwp_min: 10000000,
  gwp_max: 100000000,
  loss_ratio_max: 65,
  combined_ratio_max: 95,
  min_founder_years: 8,
  excluded_classes: ['Hazardous waste','Nuclear','War risk'],
  require_actuarial: true,
  preferred_structures: ['Fronting only','Fronting + Reinsurance']
};

export const konduitPortfolio = [
  { id: 'PORT-01', program: 'Northstar Trucking',       mga: 'Northstar Transportation MGA', lob: 'Transportation', gwp: '$54M',  loss_ratio: 64.5, status: 'In-force',  inception: '2026-01-12', renewal: '2027-01-12' },
  { id: 'PORT-02', program: 'Anchor Renewable Energy',  mga: 'Anchor Specialty',              lob: 'Environmental',  gwp: '$18M',  loss_ratio: 48.2, status: 'In-force',  inception: '2025-11-01', renewal: '2026-11-01' },
  { id: 'PORT-03', program: 'Heritage Coastal Homes',   mga: 'Heritage Property MGA',         lob: 'CAT Personal Lines', gwp: '$31M', loss_ratio: 57.9, status: 'In-force',  inception: '2025-09-15', renewal: '2026-09-15' },
  { id: 'PORT-04', program: 'Vector E&O (Tech)',        mga: 'Vector Professional',           lob: 'E&O',            gwp: '$12M',  loss_ratio: 41.3, status: 'In-force',  inception: '2025-12-01', renewal: '2026-12-01' }
];

export const konduitQualityReviewQueue = [
  { id: 'QR-901', program: 'Meridian Cyber SME',        mga: 'Meridian Specialty Underwriters', submitted: '2026-04-09', items: 3, reviewer: 'Konduit Ops', status: 'Open',    priority: 'Normal' },
  { id: 'QR-902', program: 'Cascade Healthcare Liability', mga: 'Cascade Medical Program',      submitted: '2026-04-12', items: 5, reviewer: 'Unassigned',  status: 'Open',    priority: 'High'   },
  { id: 'QR-903', program: 'Anchor Renewable Extension', mga: 'Anchor Specialty',               submitted: '2026-04-14', items: 1, reviewer: 'Konduit Ops', status: 'Awaiting MGA', priority: 'Normal' },
  { id: 'QR-904', program: 'Pinnacle D&O Tech',         mga: 'Pinnacle Professional Risk',     submitted: '2026-04-15', items: 2, reviewer: 'Konduit Ops', status: 'Open',    priority: 'Normal' }
];

export const konduitNdaTemplates = [
  { id: 'TMPL-01', name: 'Mutual NDA — Standard',         version: 'v3.2', updated: '2026-02-10', uses: 412, jurisdiction: 'Delaware, USA' },
  { id: 'TMPL-02', name: 'Mutual NDA — UK / Lloyd\'s',    version: 'v2.8', updated: '2026-01-22', uses: 188, jurisdiction: 'England & Wales' },
  { id: 'TMPL-03', name: 'One-way NDA — Capacity Rec.',    version: 'v1.4', updated: '2025-11-30', uses: 67,  jurisdiction: 'Delaware, USA' },
  { id: 'TMPL-04', name: 'Program-specific NDA (custom)', version: 'v1.0', updated: '2026-03-05', uses: 23,  jurisdiction: 'Varies' }
];

export const konduitAuditLog = [
  { ts: '2026-04-19 14:22:11', actor: 'Priya Raman (Summit)',    action: 'NDA Signed',         target: 'KDP-0812',      ip: '74.12.88.41' },
  { ts: '2026-04-19 11:08:02', actor: 'Lars Fjeldstad (Nordic)', action: 'Program Viewed',     target: 'KDP-0812',      ip: '195.64.12.7' },
  { ts: '2026-04-18 16:47:33', actor: 'Dana Kinross (Gateway)',  action: 'NDA Requested',      target: 'KDP-0815',      ip: '92.118.4.201'},
  { ts: '2026-04-18 10:12:56', actor: 'Omar Farouk (Brookline)', action: 'Message Sent',       target: 'KDP-0818',      ip: '65.201.3.14' },
  { ts: '2026-04-17 15:33:19', actor: 'Lars Fjeldstad (Nordic)', action: 'Term Sheet Uploaded',target: 'KDP-0816',      ip: '195.64.12.7' },
  { ts: '2026-04-17 09:04:40', actor: 'Harriet Blake (Lloyd\'s)',action: 'Program Viewed',     target: 'KDP-0812',      ip: '81.144.22.5' },
  { ts: '2026-04-16 14:55:02', actor: 'Konduit Ops',             action: 'Program Approved',   target: 'KDP-0819',      ip: '10.0.0.12'   },
  { ts: '2026-04-16 11:21:27', actor: 'Nina Alvarez (Pacific)',  action: 'Program Viewed',     target: 'KDP-0815',      ip: '68.44.128.91'},
  { ts: '2026-04-15 17:02:13', actor: 'Evan Harlow (Meridian)',  action: 'Program Published',  target: 'KDP-0812',      ip: '24.118.77.23'},
  { ts: '2026-04-14 12:09:44', actor: 'Konduit Ops',             action: 'QR Review Started',  target: 'KDP-0813',      ip: '10.0.0.12'   }
];

export const konduitTeam = [
  { name: 'Evan Harlow',   role: 'Founder & CUO',      email: 'evan@meridianspec.com', avatar: 'EH', authority: 'Full' },
  { name: 'Sofia Ramirez', role: 'Deputy CUO',         email: 'sofia@meridianspec.com', avatar: 'SR', authority: 'Sign NDAs · Publish' },
  { name: 'Jordan Okafor', role: 'Analyst',            email: 'jordan@meridianspec.com', avatar: 'JO', authority: 'Build / Upload' },
  { name: 'Priya Shah',    role: 'CFO',                email: 'priya@meridianspec.com', avatar: 'PS', authority: 'Financials only' }
];

export const konduitOnboardingSteps = [
  { step: 1, label: 'Upload program docs',     description: 'Deck, actuarial, financials, appetite', status: 'done' },
  { step: 2, label: 'AI data extraction',       description: 'Review + accept extracted fields',      status: 'done' },
  { step: 3, label: 'Complete 5-section wizard', description: 'Company · Program · Team · Financials · Appetite', status: 'active' },
  { step: 4, label: 'Benchmark against market',  description: 'Compare to peer programs',              status: 'pending' },
  { step: 5, label: 'Quality review',            description: 'Konduit pre-publication QA',           status: 'pending' },
  { step: 6, label: 'Publish to marketplace',    description: 'Go live to matched capacity',          status: 'pending' }
];

/* ============================================================
   CARRIER QP — Data Layer (Carrier / Insurer portal)
   Carrier-side counterpart to MGA portal · issues the paper
   ============================================================ */

export const CARRIER_USERS = {
  uw:         { name: 'Alex Chen',        role: 'Line Underwriter',     company: 'Summit Fronting Re',  avatar: 'AC' },
  cuo:        { name: 'Morgan Whitaker',  role: 'Chief Underwriting Officer', company: 'Summit Fronting Re', avatar: 'MW' },
  srUw:       { name: 'Priya Raman',      role: 'Senior UW / Referral Authority', company: 'Summit Fronting Re', avatar: 'PR' },
  claims:     { name: 'Daniel Ortega',    role: 'Claims Manager',       company: 'Summit Fronting Re',  avatar: 'DO' },
  actuary:    { name: 'Ingrid Lindqvist', role: 'Chief Actuary',        company: 'Summit Fronting Re',  avatar: 'IL' },
  reinsHead:  { name: 'Sanjay Rao',       role: 'Head of Reinsurance',  company: 'Summit Fronting Re',  avatar: 'SR' },
  compliance: { name: 'Helen Becker',     role: 'Compliance Officer',   company: 'Summit Fronting Re',  avatar: 'HB' },
  retro:      { name: 'Munich Re US',     role: 'Reinsurer View',       company: 'Munich Re America',    avatar: 'MR' }
};

export const CARRIER_LOBS = [
  'Commercial Property','CAT Commercial','CAT Personal Lines','Cyber','Casualty / GL','E&O','D&O',
  'Marine','Transportation','Workers Compensation','Aviation','Healthcare','Surety','Construction',
  'Environmental','Specialty','Personal Auto','Homeowners'
];

export const CARRIER_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

export const carrierDashboardKPIs = {
  uw: [
    { label: 'Submissions in queue', value: '23', warning: true },
    { label: 'Quotes open',          value: '47' },
    { label: 'Bind ratio (30d)',     value: '34%' },
    { label: 'Avg UW turnaround',    value: '2.3 days' },
    { label: 'Portfolio GWP',        value: '$482M' },
    { label: 'YTD loss ratio',       value: '56.8%' }
  ],
  reins: [
    { label: 'Ceded premium YTD',    value: '$178M' },
    { label: 'Recoverables open',    value: '$12.4M' },
    { label: 'Active treaties',      value: '7' },
    { label: 'CAT 1-in-250 PML',     value: '$94M' },
    { label: 'Retention vs target',  value: '97%' },
    { label: 'Treaty renewals <120d',value: '2', warning: true }
  ],
  claims: [
    { label: 'Open claims',          value: '384', warning: true },
    { label: 'Paid YTD',             value: '$48.9M' },
    { label: 'Case reserves',        value: '$31.2M' },
    { label: 'IBNR',                 value: '$22.8M' },
    { label: 'Avg close cycle',      value: '67 days' },
    { label: 'Litigation open',      value: '18' }
  ],
  retro: [
    { label: 'Ceded to me (inforce)',value: '$86M' },
    { label: 'Claims bordereau',     value: '3 pending' },
    { label: 'Recoverables due',     value: '$4.1M' },
    { label: 'Treaty layer burn',    value: '42%' },
    { label: 'Last statement',       value: '2026-03-31' },
    { label: 'Next reconciliation',  value: 'Apr 30' }
  ]
};

export const carrierAppetite = [
  { lob: 'Commercial Property', state: 'All', class: 'Habitational — Class A', status: 'In', authority: '$25M/risk', notes: 'Preferred if IAS > 85' },
  { lob: 'Commercial Property', state: 'FL',  class: 'Coastal residential',    status: 'Refer', authority: 'Sr UW only', notes: 'Wind-pool check required' },
  { lob: 'Commercial Property', state: 'CA',  class: 'Wildfire zone 3+',       status: 'Out',   authority: '—', notes: 'Non-renewable' },
  { lob: 'Cyber',               state: 'All', class: 'SME < $100M rev',        status: 'In',    authority: '$5M/risk', notes: 'MFA required on all endpoints' },
  { lob: 'Cyber',               state: 'All', class: 'Healthcare SMB',         status: 'Refer', authority: 'Sr UW only', notes: 'PHI exposure review' },
  { lob: 'Workers Compensation',state: 'All', class: 'Hospitality',            status: 'In',    authority: '$3M retention', notes: '' },
  { lob: 'Workers Compensation',state: 'NY',  class: 'Construction Class 5+',  status: 'Refer', authority: 'Sr UW only', notes: 'Scaffold law exposure' },
  { lob: 'Marine',              state: 'All', class: 'Stock throughput',       status: 'In',    authority: '$10M/risk', notes: '' },
  { lob: 'Transportation',      state: 'All', class: 'Long-haul trucking',     status: 'In',    authority: '$5M/unit', notes: 'Telematics required' },
  { lob: 'Aviation',            state: 'All', class: 'Part 91/135',            status: 'In',    authority: '$15M/risk', notes: '' },
  { lob: 'Aviation',            state: 'All', class: 'Rotor-wing EMS',         status: 'Refer', authority: 'Sr UW only', notes: 'Loss-run required' },
  { lob: 'Surety',              state: 'All', class: 'Contract < $5M',         status: 'In',    authority: '$2M/bond', notes: '' },
  { lob: 'Environmental',       state: 'All', class: 'Contractors pollution', status: 'In',    authority: '$10M/risk', notes: '' },
  { lob: 'D&O',                 state: 'All', class: 'Public co < $500M cap',  status: 'Refer', authority: 'Sr UW only', notes: '10-K review' }
];

export const carrierSubmissions = [
  { id: 'SUB-2026-1142', received: '2026-04-20 09:14', insured: 'Kroger Real Estate',          lob: 'Commercial Property', state: 'OH', premium_est: '$284,000', channel: 'MGA · Meridian Specialty', status: 'New',         assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 0 },
  { id: 'SUB-2026-1141', received: '2026-04-19 16:22', insured: 'Prologis Trust',               lob: 'Commercial Property', state: 'CA', premium_est: '$512,000', channel: 'Broker · Marsh',            status: 'Triaged',     assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'High',   days_in_queue: 1 },
  { id: 'SUB-2026-1140', received: '2026-04-19 11:08', insured: 'Harbor Logistics',             lob: 'Transportation',      state: 'IL', premium_est: '$221,000', channel: 'MGA · Northstar',           status: 'In UW',       assigned: 'Priya Raman',  appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 1 },
  { id: 'SUB-2026-1139', received: '2026-04-18 14:47', insured: 'Westbrook Hospitality',        lob: 'Workers Compensation',state: 'CA', premium_est: '$98,000',  channel: 'MGA · Harbor Program',      status: 'In UW',       assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 2 },
  { id: 'SUB-2026-1138', received: '2026-04-18 10:33', insured: 'Magnolia Construction',        lob: 'Casualty / GL',       state: 'GA', premium_est: '$147,000', channel: 'Broker · Aon',               status: 'Referred',    assigned: 'Priya Raman',  appetite: 'Refer', clearance: 'Clear',      priority: 'High',   days_in_queue: 2 },
  { id: 'SUB-2026-1137', received: '2026-04-17 16:04', insured: 'Gulf Coast Condo Assoc',       lob: 'Commercial Property', state: 'FL', premium_est: '$420,000', channel: 'MGA · Meridian Specialty', status: 'Referred',    assigned: 'Priya Raman',  appetite: 'Refer', clearance: 'Dup-check', priority: 'High',   days_in_queue: 3 },
  { id: 'SUB-2026-1136', received: '2026-04-17 09:22', insured: 'Big Sky Freight',               lob: 'Transportation',      state: 'MT', premium_est: '$334,000', channel: 'MGA · Northstar',           status: 'Quoted',      assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 3 },
  { id: 'SUB-2026-1135', received: '2026-04-16 13:15', insured: 'Oakwood Builders',              lob: 'Surety',              state: 'TX', premium_est: '$68,000',  channel: 'MGA · Atlas Surety',         status: 'Quoted',      assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 4 },
  { id: 'SUB-2026-1134', received: '2026-04-16 09:48', insured: 'Cascade Aerials',              lob: 'Aviation',            state: 'WA', premium_est: '$195,000', channel: 'MGA · Skyline Aviation',    status: 'Bound',       assigned: 'Priya Raman',  appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 4 },
  { id: 'SUB-2026-1133', received: '2026-04-15 15:37', insured: 'Southside Tech LLC',           lob: 'Cyber',               state: 'NY', premium_est: '$42,000',  channel: 'Broker · Lockton',          status: 'Declined',    assigned: 'Alex Chen',    appetite: 'Out',   clearance: 'Clear',      priority: 'Low',    days_in_queue: 5 },
  { id: 'SUB-2026-1132', received: '2026-04-15 11:01', insured: 'Evergreen Medical',            lob: 'Cyber',               state: 'OR', premium_est: '$88,000',  channel: 'MGA · Meridian Specialty', status: 'Bound',       assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 5 },
  { id: 'SUB-2026-1131', received: '2026-04-14 14:29', insured: 'Anchor Renewable Energy',      lob: 'Environmental',       state: 'TX', premium_est: '$156,000', channel: 'MGA · Evergreen Env.',      status: 'Bound',       assigned: 'Priya Raman',  appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 6 },
  { id: 'SUB-2026-1130', received: '2026-04-14 09:14', insured: 'Heritage Coastal Homes',       lob: 'CAT Personal Lines',  state: 'NC', premium_est: '$267,000', channel: 'MGA · Heritage Property',   status: 'Bound',       assigned: 'Priya Raman',  appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 6 },
  { id: 'SUB-2026-1129', received: '2026-04-13 16:55', insured: 'Vector Tech Services',         lob: 'E&O',                 state: 'CA', premium_est: '$77,000',  channel: 'MGA · Vector Professional', status: 'Bound',       assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 7 },
  { id: 'SUB-2026-1128', received: '2026-04-13 10:22', insured: 'Pinnacle BioHealth',           lob: 'D&O',                 state: 'MA', premium_est: '$184,000', channel: 'Broker · Willis Towers',    status: 'Quoted',      assigned: 'Priya Raman',  appetite: 'Refer', clearance: 'Clear',      priority: 'High',   days_in_queue: 7 },
  { id: 'SUB-2026-1127', received: '2026-04-12 15:01', insured: 'Rivera Trucking Fleet',         lob: 'Transportation',      state: 'TX', premium_est: '$312,000', channel: 'MGA · Northstar',           status: 'Quoted',      assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 8 },
  { id: 'SUB-2026-1126', received: '2026-04-12 11:18', insured: 'Blue Ridge Winery',            lob: 'Commercial Property', state: 'VA', premium_est: '$56,000',  channel: 'Broker · CRC',              status: 'Declined',    assigned: 'Alex Chen',    appetite: 'Out',   clearance: 'Clear',      priority: 'Low',    days_in_queue: 8 },
  { id: 'SUB-2026-1125', received: '2026-04-11 14:44', insured: 'Global Yacht Services',         lob: 'Marine',              state: 'FL', premium_est: '$118,000', channel: 'Broker · Amwins',           status: 'In UW',       assigned: 'Priya Raman',  appetite: 'In',    clearance: 'Dup-check', priority: 'Normal', days_in_queue: 9 },
  { id: 'SUB-2026-1124', received: '2026-04-11 09:07', insured: 'Crown Manufacturing',           lob: 'Workers Compensation',state: 'OH', premium_est: '$92,000',  channel: 'MGA · Harbor Program',      status: 'In UW',       assigned: 'Alex Chen',    appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 9 },
  { id: 'SUB-2026-1123', received: '2026-04-10 16:31', insured: 'Lone Star Energy LLC',         lob: 'Environmental',       state: 'TX', premium_est: '$203,000', channel: 'MGA · Evergreen Env.',      status: 'Bound',       assigned: 'Priya Raman',  appetite: 'In',    clearance: 'Clear',      priority: 'Normal', days_in_queue: 10 }
];

export const carrierPolicies = [
  { id: 'POL-2026-0421', insured: 'Kroger Real Estate',     lob: 'Commercial Property', state: 'OH', effective: '2026-03-01', expiry: '2027-03-01', premium: '$284,000', status: 'Active',       mga: 'Meridian Specialty',  uw: 'Alex Chen',   retention: '$5M',  ceded_pct: '65%',  loss_ratio: '12.4%' },
  { id: 'POL-2026-0422', insured: 'Prologis Trust',          lob: 'Commercial Property', state: 'CA', effective: '2026-03-04', expiry: '2027-03-04', premium: '$512,000', status: 'Active',       mga: 'Meridian Specialty',  uw: 'Alex Chen',   retention: '$5M',  ceded_pct: '65%',  loss_ratio: '8.1%' },
  { id: 'POL-2026-0420', insured: 'Magnolia Construction',   lob: 'Casualty / GL',       state: 'GA', effective: '2026-03-08', expiry: '2027-03-08', premium: '$147,000', status: 'Active',       mga: 'Direct Broker',       uw: 'Priya Raman', retention: '$3M',  ceded_pct: '50%',  loss_ratio: '22.5%' },
  { id: 'POL-2026-0419', insured: 'Westbrook Hospitality',  lob: 'Commercial Property', state: 'CA', effective: '2026-03-11', expiry: '2027-03-11', premium: '$98,000',  status: 'Active',       mga: 'Harbor Program',      uw: 'Alex Chen',   retention: '$5M',  ceded_pct: '65%',  loss_ratio: '35.8%', has_open_claim: true },
  { id: 'POL-2026-0418', insured: 'Harbor Logistics',        lob: 'Transportation',      state: 'IL', effective: '2026-03-19', expiry: '2027-03-19', premium: '$221,000', status: 'Active',       mga: 'Northstar',           uw: 'Priya Raman', retention: '$2M',  ceded_pct: '70%',  loss_ratio: '18.2%' },
  { id: 'POL-2026-0417', insured: 'Cascade Aerials',         lob: 'Aviation',            state: 'WA', effective: '2026-03-22', expiry: '2027-03-22', premium: '$195,000', status: 'Active',       mga: 'Skyline Aviation',    uw: 'Priya Raman', retention: '$10M', ceded_pct: '75%',  loss_ratio: '3.2%' },
  { id: 'POL-2026-0416', insured: 'Evergreen Medical',       lob: 'Cyber',               state: 'OR', effective: '2026-04-01', expiry: '2027-04-01', premium: '$88,000',  status: 'Active',       mga: 'Meridian Specialty',  uw: 'Alex Chen',   retention: '$1M',  ceded_pct: '80%',  loss_ratio: '0.0%' },
  { id: 'POL-2026-0415', insured: 'Anchor Renewable Energy', lob: 'Environmental',       state: 'TX', effective: '2026-04-01', expiry: '2027-04-01', premium: '$156,000', status: 'Active',       mga: 'Evergreen Env.',      uw: 'Priya Raman', retention: '$5M',  ceded_pct: '60%',  loss_ratio: '4.8%' },
  { id: 'POL-2026-0414', insured: 'Heritage Coastal Homes',  lob: 'CAT Personal Lines',  state: 'NC', effective: '2026-04-01', expiry: '2027-04-01', premium: '$267,000', status: 'Active',       mga: 'Heritage Property',   uw: 'Priya Raman', retention: '$2M',  ceded_pct: '80%',  loss_ratio: '6.4%' },
  { id: 'POL-2026-0413', insured: 'Vector Tech Services',    lob: 'E&O',                 state: 'CA', effective: '2026-04-05', expiry: '2027-04-05', premium: '$77,000',  status: 'Active',       mga: 'Vector Professional', uw: 'Alex Chen',   retention: '$1M',  ceded_pct: '75%',  loss_ratio: '0.0%' },
  { id: 'POL-2026-0412', insured: 'Oakwood Builders',        lob: 'Surety',              state: 'TX', effective: '2026-04-10', expiry: '2027-04-10', premium: '$68,000',  status: 'Active',       mga: 'Atlas Surety',        uw: 'Alex Chen',   retention: '$1M',  ceded_pct: '0%',   loss_ratio: '0.0%' },
  { id: 'POL-2026-0411', insured: 'Big Sky Freight',          lob: 'Transportation',      state: 'MT', effective: '2026-04-14', expiry: '2027-04-14', premium: '$334,000', status: 'Active',       mga: 'Northstar',           uw: 'Alex Chen',   retention: '$2M',  ceded_pct: '70%',  loss_ratio: '28.4%', has_open_claim: true },
  { id: 'POL-2025-2284', insured: 'Anchor Renewable (prior)',lob: 'Environmental',       state: 'TX', effective: '2025-04-01', expiry: '2026-03-31', premium: '$148,000', status: 'Expired',      mga: 'Evergreen Env.',      uw: 'Priya Raman', retention: '$5M',  ceded_pct: '60%',  loss_ratio: '42.3%' },
  { id: 'POL-2025-2185', insured: 'Heritage Coastal (prior)', lob: 'CAT Personal Lines',  state: 'NC', effective: '2025-04-01', expiry: '2026-03-31', premium: '$251,000', status: 'Expired',      mga: 'Heritage Property',   uw: 'Priya Raman', retention: '$2M',  ceded_pct: '80%',  loss_ratio: '58.7%' },
  { id: 'POL-2025-2089', insured: 'Northstar Fleet #1',       lob: 'Transportation',      state: 'MN', effective: '2025-09-15', expiry: '2026-09-14', premium: '$412,000', status: 'Active',       mga: 'Northstar',           uw: 'Alex Chen',   retention: '$2M',  ceded_pct: '70%',  loss_ratio: '64.5%', has_open_claim: true },
  { id: 'POL-2025-1832', insured: 'Crown Manufacturing',      lob: 'Workers Compensation',state: 'OH', effective: '2025-07-01', expiry: '2026-06-30', premium: '$172,000', status: 'Renewing',     mga: 'Harbor Program',      uw: 'Alex Chen',   retention: '$3M',  ceded_pct: '70%',  loss_ratio: '71.2%' },
  { id: 'POL-2025-1711', insured: 'Pinnacle BioHealth',       lob: 'D&O',                 state: 'MA', effective: '2025-06-15', expiry: '2026-06-14', premium: '$178,000', status: 'Renewing',     mga: 'Direct Broker',       uw: 'Priya Raman', retention: '$5M',  ceded_pct: '65%',  loss_ratio: '0.0%' },
  { id: 'POL-2025-1598', insured: 'Blue Ridge Winery',        lob: 'Commercial Property', state: 'VA', effective: '2025-05-20', expiry: '2026-05-19', premium: '$64,000',  status: 'Non-renewed',  mga: 'Direct Broker',       uw: 'Alex Chen',   retention: '$2M',  ceded_pct: '65%',  loss_ratio: '142.5%' },
  { id: 'POL-2025-1402', insured: 'Rivera Trucking Fleet',    lob: 'Transportation',      state: 'TX', effective: '2025-04-10', expiry: '2026-04-09', premium: '$297,000', status: 'Renewing',     mga: 'Northstar',           uw: 'Alex Chen',   retention: '$2M',  ceded_pct: '70%',  loss_ratio: '52.8%' },
  { id: 'POL-2025-0987', insured: 'Gulf Coast Condo Assoc',   lob: 'Commercial Property', state: 'FL', effective: '2025-03-01', expiry: '2026-02-28', premium: '$385,000', status: 'Active',       mga: 'Meridian Specialty',  uw: 'Priya Raman', retention: '$5M',  ceded_pct: '70%',  loss_ratio: '112.4%', has_open_claim: true }
];

export const carrierEndorsements = [
  { id: 'END-2026-0081', policy: 'POL-2026-0421', insured: 'Kroger Real Estate',    type: 'Add location',      effective: '2026-04-15', premium_change: '+$12,400', status: 'In UW',     requested_by: 'MGA · Meridian', days: 3 },
  { id: 'END-2026-0080', policy: 'POL-2026-0422', insured: 'Prologis Trust',         type: 'Increase limit',    effective: '2026-04-12', premium_change: '+$34,800', status: 'Approved',  requested_by: 'Broker · Marsh', days: 5 },
  { id: 'END-2026-0079', policy: 'POL-2026-0419', insured: 'Westbrook Hospitality', type: 'Add AI',            effective: '2026-04-10', premium_change: '$0',       status: 'Issued',    requested_by: 'Insured',        days: 8 },
  { id: 'END-2026-0078', policy: 'POL-2026-0418', insured: 'Harbor Logistics',       type: 'Delete vehicle',    effective: '2026-04-08', premium_change: '-$4,200',  status: 'Issued',    requested_by: 'MGA · Northstar',days: 10 },
  { id: 'END-2026-0077', policy: 'POL-2026-0417', insured: 'Cascade Aerials',        type: 'Add aircraft',      effective: '2026-04-05', premium_change: '+$18,200', status: 'Approved',  requested_by: 'MGA · Skyline', days: 13 },
  { id: 'END-2026-0076', policy: 'POL-2025-2089', insured: 'Northstar Fleet #1',    type: 'Cov territory ext',  effective: '2026-04-01', premium_change: '+$7,800',  status: 'Issued',    requested_by: 'MGA · Northstar',days: 17 },
  { id: 'END-2026-0075', policy: 'POL-2026-0415', insured: 'Anchor Renewable',       type: 'Named insured chg',  effective: '2026-04-01', premium_change: '$0',       status: 'Issued',    requested_by: 'Insured',        days: 17 },
  { id: 'END-2026-0074', policy: 'POL-2025-0987', insured: 'Gulf Coast Condo',       type: 'Deductible change',  effective: '2026-03-28', premium_change: '-$22,400', status: 'Issued',    requested_by: 'Insured',        days: 21 }
];

export const carrierRenewals = [
  { id: 'REN-2026-01', policy: 'POL-2025-2284', insured: 'Anchor Renewable Energy', lob: 'Environmental',       expiry: '2026-03-31', days: -20, status: 'Re-bound',        rate_change: '+5.4%', loss_ratio: '42.3%', premium_new: '$156,000' },
  { id: 'REN-2026-02', policy: 'POL-2025-2185', insured: 'Heritage Coastal Homes',   lob: 'CAT Personal Lines',  expiry: '2026-03-31', days: -20, status: 'Re-bound',        rate_change: '+6.4%', loss_ratio: '58.7%', premium_new: '$267,000' },
  { id: 'REN-2026-03', policy: 'POL-2025-1832', insured: 'Crown Manufacturing',      lob: 'Workers Compensation',expiry: '2026-06-30', days: 71,  status: 'Re-underwriting', rate_change: '+12.5%',loss_ratio: '71.2%', premium_new: '$193,500' },
  { id: 'REN-2026-04', policy: 'POL-2025-1711', insured: 'Pinnacle BioHealth',       lob: 'D&O',                 expiry: '2026-06-14', days: 55,  status: 'Quoted',          rate_change: '+3.2%', loss_ratio: '0.0%',  premium_new: '$183,700' },
  { id: 'REN-2026-05', policy: 'POL-2025-1402', insured: 'Rivera Trucking Fleet',    lob: 'Transportation',      expiry: '2026-04-09', days: -11, status: 'Re-bound',        rate_change: '+8.2%', loss_ratio: '52.8%', premium_new: '$321,500' },
  { id: 'REN-2026-06', policy: 'POL-2025-0987', insured: 'Gulf Coast Condo Assoc',   lob: 'Commercial Property', expiry: '2026-02-28', days: -52, status: 'Non-renewed',     rate_change: 'n/a',   loss_ratio: '112.4%',premium_new: 'n/a' },
  { id: 'REN-2026-07', policy: 'POL-2025-1598', insured: 'Blue Ridge Winery',         lob: 'Commercial Property', expiry: '2026-05-19', days: 29,  status: 'Non-renewal notice',rate_change: 'n/a', loss_ratio: '142.5%',premium_new: 'n/a' },
  { id: 'REN-2026-08', policy: 'POL-2025-2089', insured: 'Northstar Fleet #1',        lob: 'Transportation',      expiry: '2026-09-14', days: 147, status: 'Pre-renewal review',rate_change: '+7.0%', loss_ratio: '64.5%', premium_new: '$440,840' }
];

export const carrierMGAs = [
  { id: 'MGA-01', name: 'Meridian Specialty Underwriters', lobs: ['Commercial Property','Cyber','Marine'],         gwp_ytd: '$68M',  policies: 412, treaty: 'TR-2026-001 · QS + XoL', authority: '$50M/risk', loss_ratio: '54.8%', combined_ratio: '91.2%', scorecard: 'A', since: '2024-06-01', audit_due: '2026-06-01', bordereau_cadence: 'Monthly', status: 'Active' },
  { id: 'MGA-02', name: 'Harbor Program Partners',          lobs: ['Workers Compensation','Casualty / GL'],        gwp_ytd: '$48M',  policies: 286, treaty: 'TR-2026-004 · Full-stack', authority: '$25M/risk', loss_ratio: '62.7%', combined_ratio: '94.4%', scorecard: 'A-',since: '2023-08-15', audit_due: '2026-05-10', bordereau_cadence: 'Monthly', status: 'Active' },
  { id: 'MGA-03', name: 'Northstar Transportation MGA',     lobs: ['Transportation','Casualty / GL'],              gwp_ytd: '$54M',  policies: 198, treaty: 'TR-2026-005 · QS + XoL', authority: '$10M/unit', loss_ratio: '64.5%', combined_ratio: '96.1%', scorecard: 'B+',since: '2023-11-10', audit_due: '2026-04-30', bordereau_cadence: 'Monthly', status: 'Active' },
  { id: 'MGA-04', name: 'Skyline Aviation MGA',             lobs: ['Aviation'],                                    gwp_ytd: '$38M',  policies: 94,  treaty: 'TR-2026-003 · Reinsurance only', authority: '$15M/risk', loss_ratio: '51.2%', combined_ratio: '88.9%', scorecard: 'A', since: '2024-03-12', audit_due: '2026-09-01', bordereau_cadence: 'Monthly', status: 'Active' },
  { id: 'MGA-05', name: 'Atlas Surety Group',               lobs: ['Surety'],                                      gwp_ytd: '$15M',  policies: 174, treaty: 'TR-2026-002 · Full-stack', authority: '$5M/bond',  loss_ratio: '21.3%', combined_ratio: '74.8%', scorecard: 'A+',since: '2024-02-26', audit_due: '2026-08-01', bordereau_cadence: 'Monthly', status: 'Active' },
  { id: 'MGA-06', name: 'Evergreen Environmental Risk',     lobs: ['Environmental'],                               gwp_ytd: '$22M',  policies: 108, treaty: 'TR-2026-006 · QS',        authority: '$10M/risk', loss_ratio: '53.9%', combined_ratio: '90.6%', scorecard: 'B',  since: '2025-01-27', audit_due: '2026-07-27', bordereau_cadence: 'Monthly', status: 'Paused' },
  { id: 'MGA-07', name: 'Heritage Property MGA',            lobs: ['CAT Personal Lines','Commercial Property'],    gwp_ytd: '$31M',  policies: 342, treaty: 'TR-2026-007 · QS + CAT', authority: '$5M/risk',  loss_ratio: '57.9%', combined_ratio: '93.2%', scorecard: 'B+',since: '2024-09-15', audit_due: '2026-09-30', bordereau_cadence: 'Monthly', status: 'Active' },
  { id: 'MGA-08', name: 'Vector Professional',              lobs: ['E&O','D&O'],                                   gwp_ytd: '$12M',  policies: 68,  treaty: 'TR-2026-008 · QS',        authority: '$5M/risk',  loss_ratio: '41.3%', combined_ratio: '86.5%', scorecard: 'A', since: '2024-12-01', audit_due: '2026-12-01', bordereau_cadence: 'Monthly', status: 'Active' }
];

export const carrierBordereau = [
  { id: 'BDX-2026-03-01', mga: 'Meridian Specialty Underwriters', period: 'Mar 2026', type: 'Premium', gwp: '$4.8M', net: '$3.1M', commissions: '$1.2M', claims: '$0.4M', status: 'Reconciled',   variance: '0.8%',  received: '2026-04-05', processed: '2026-04-07' },
  { id: 'BDX-2026-03-02', mga: 'Harbor Program Partners',          period: 'Mar 2026', type: 'Premium', gwp: '$3.9M', net: '$2.8M', commissions: '$0.9M', claims: '$0.3M', status: 'Reconciled',   variance: '1.2%',  received: '2026-04-05', processed: '2026-04-08' },
  { id: 'BDX-2026-03-03', mga: 'Northstar Transportation MGA',     period: 'Mar 2026', type: 'Premium', gwp: '$4.5M', net: '$3.2M', commissions: '$1.1M', claims: '$0.8M', status: 'Exception',    variance: '4.8%',  received: '2026-04-04', processed: null        },
  { id: 'BDX-2026-03-04', mga: 'Skyline Aviation MGA',             period: 'Mar 2026', type: 'Premium', gwp: '$3.2M', net: '$2.4M', commissions: '$0.7M', claims: '$0.1M', status: 'Reconciled',   variance: '0.3%',  received: '2026-04-03', processed: '2026-04-06' },
  { id: 'BDX-2026-03-05', mga: 'Atlas Surety Group',               period: 'Mar 2026', type: 'Premium', gwp: '$1.3M', net: '$1.3M', commissions: '$0.4M', claims: '$0.0M', status: 'Reconciled',   variance: '0.0%',  received: '2026-04-02', processed: '2026-04-04' },
  { id: 'BDX-2026-03-06', mga: 'Heritage Property MGA',            period: 'Mar 2026', type: 'Premium', gwp: '$2.6M', net: '$2.0M', commissions: '$0.6M', claims: '$0.5M', status: 'Pending',      variance: '—',     received: '2026-04-10', processed: null        },
  { id: 'BDX-2026-03-07', mga: 'Vector Professional',              period: 'Mar 2026', type: 'Premium', gwp: '$1.0M', net: '$0.8M', commissions: '$0.2M', claims: '$0.0M', status: 'Reconciled',   variance: '0.0%',  received: '2026-04-03', processed: '2026-04-05' },
  { id: 'BDX-2026-03-08', mga: 'Evergreen Environmental Risk',     period: 'Mar 2026', type: 'Premium', gwp: '$1.8M', net: '$1.4M', commissions: '$0.5M', claims: '$0.2M', status: 'Paused',       variance: '—',     received: null,          processed: null        },
  { id: 'BDX-2026-03-09', mga: 'Meridian Specialty Underwriters', period: 'Mar 2026', type: 'Claims',  gwp: '—',     net: '—',     commissions: '—',    claims: '$0.4M', status: 'Reconciled',   variance: '0.0%',  received: '2026-04-05', processed: '2026-04-07' },
  { id: 'BDX-2026-03-10', mga: 'Northstar Transportation MGA',     period: 'Mar 2026', type: 'Claims',  gwp: '—',     net: '—',     commissions: '—',    claims: '$0.8M', status: 'Exception',    variance: '12.4%', received: '2026-04-04', processed: null        }
];

export const carrierTreaties = [
  { id: 'TR-2026-001', name: 'Property QS + XoL',         lob: 'Commercial Property', type: 'Quota Share + XoL', share: '65%', layer: '$5M xs $5M',   reinsurer: 'Munich Re America',   inception: '2026-01-01', expiry: '2026-12-31', reinstatements: '2 paid, 1 free', ceded_premium: '$42M',  recoverables: '$3.2M', status: 'Active' },
  { id: 'TR-2026-002', name: 'Surety Full-Stack',          lob: 'Surety',              type: 'Full-stack',        share: '100%',layer: '$15M aggregate',reinsurer: 'Brookline Full-Stack',inception: '2026-01-01', expiry: '2026-12-31', reinstatements: '1 free',         ceded_premium: '$13M',  recoverables: '$0.0M', status: 'Active' },
  { id: 'TR-2026-003', name: 'Aviation Reinsurance',       lob: 'Aviation',            type: 'Surplus',          share: '75%', layer: '$10M xs $5M',  reinsurer: 'Nordic Global Re',    inception: '2026-01-01', expiry: '2026-12-31', reinstatements: '2 paid',          ceded_premium: '$28M',  recoverables: '$0.4M', status: 'Active' },
  { id: 'TR-2026-004', name: 'WC Full-stack',              lob: 'Workers Compensation',type: 'Full-stack',       share: '100%',layer: 'Statutory',    reinsurer: 'Pacific Paper Group', inception: '2026-01-01', expiry: '2026-12-31', reinstatements: 'Unlimited',       ceded_premium: '$36M',  recoverables: '$2.8M', status: 'Active' },
  { id: 'TR-2026-005', name: 'Transportation QS',          lob: 'Transportation',      type: 'Quota Share',       share: '70%', layer: 'Pro-rata',     reinsurer: 'Summit Retrocession', inception: '2026-01-01', expiry: '2026-12-31', reinstatements: '1 free',          ceded_premium: '$38M',  recoverables: '$3.8M', status: 'Active' },
  { id: 'TR-2026-006', name: 'Environmental QS',           lob: 'Environmental',       type: 'Quota Share',       share: '60%', layer: 'Pro-rata',     reinsurer: 'Gateway Re (Bermuda)',inception: '2026-01-01', expiry: '2026-12-31', reinstatements: '1 free',          ceded_premium: '$13M',  recoverables: '$0.8M', status: 'Active' },
  { id: 'TR-2026-007', name: 'Property CAT XoL',            lob: 'CAT Personal Lines',  type: 'XoL (CAT)',         share: '—',   layer: '$50M xs $25M', reinsurer: 'Munich Re America',   inception: '2026-01-01', expiry: '2026-12-31', reinstatements: '1 paid, 1 free', ceded_premium: '$8M',   recoverables: '$0.0M', status: 'Active' },
  { id: 'TR-2026-008', name: 'Professional QS',             lob: 'E&O',                 type: 'Quota Share',       share: '75%', layer: 'Pro-rata',     reinsurer: "Syndicate 4488 — Lloyd's",inception: '2026-01-01', expiry: '2026-12-31', reinstatements: 'Unlimited',       ceded_premium: '$9M',   recoverables: '$1.4M', status: 'Active' }
];

export const carrierRecoverables = [
  { id: 'RCV-2026-01', treaty: 'TR-2026-001', reinsurer: 'Munich Re America',   claim: 'CLM-2026-0128', amount: '$1,200,000', aged_days: 18,  status: 'Billed',   notes: 'Gulf Coast Condo water damage' },
  { id: 'RCV-2026-02', treaty: 'TR-2026-004', reinsurer: 'Pacific Paper Group', claim: 'CLM-2026-0081', amount: '$22,400',    aged_days: 28,  status: 'Collected',notes: 'Westbrook Hospitality wind' },
  { id: 'RCV-2026-03', treaty: 'TR-2026-005', reinsurer: 'Summit Retrocession', claim: 'CLM-2026-0078', amount: '$48,500',    aged_days: 36,  status: 'Billed',   notes: 'Big Sky Freight collision' },
  { id: 'RCV-2026-04', treaty: 'TR-2026-001', reinsurer: 'Munich Re America',   claim: 'CLM-2026-0075', amount: '$35,000',    aged_days: 58,  status: 'Collected',notes: 'Kroger water damage' },
  { id: 'RCV-2026-05', treaty: 'TR-2026-003', reinsurer: 'Nordic Global Re',    claim: 'CLM-2026-0076', amount: '$4,800',     aged_days: 62,  status: 'Collected',notes: 'Cascade Aerials ground damage' },
  { id: 'RCV-2026-06', treaty: 'TR-2026-004', reinsurer: 'Pacific Paper Group', claim: 'CLM-2026-0079', amount: '$10,000',    aged_days: 68,  status: 'Collected',notes: 'Harbor Logistics water' },
  { id: 'RCV-2026-07', treaty: 'TR-2026-005', reinsurer: 'Summit Retrocession', claim: 'CLM-2025-2841', amount: '$320,000',   aged_days: 95,  status: 'Disputed', notes: 'Northstar fleet — coverage dispute' },
  { id: 'RCV-2026-08', treaty: 'TR-2026-006', reinsurer: 'Gateway Re (Bermuda)',claim: 'CLM-2025-2687', amount: '$180,000',   aged_days: 122, status: 'Aged >90', notes: 'Anchor RE remediation' }
];

export const carrierClaims = [
  { id: 'CLM-2026-0128', policy: 'POL-2025-0987', insured: 'Gulf Coast Condo Assoc', lob: 'Commercial Property', state: 'FL', dol: '2026-03-22', cause: 'Water damage',    reserved: '$1,200,000', paid: '$420,000',  status: 'Open',      adjuster: 'Crawford & Co',  severity: 'Large',  litigation: false, subrogation: false, treaty: 'TR-2026-001' },
  { id: 'CLM-2026-0081', policy: 'POL-2026-0419', insured: 'Westbrook Hospitality',  lob: 'Commercial Property', state: 'CA', dol: '2026-03-14', cause: 'Wind',            reserved: '$10,000',    paid: '$22,400',   status: 'Open',      adjuster: 'Crawford & Co',  severity: 'Normal', litigation: false, subrogation: false, treaty: 'TR-2026-001' },
  { id: 'CLM-2026-0079', policy: 'POL-2026-0418', insured: 'Harbor Logistics',       lob: 'Transportation',      state: 'IL', dol: '2026-03-02', cause: 'Water damage',    reserved: '$0',         paid: '$10,000',   status: 'Closed',    adjuster: 'In-house',       severity: 'Normal', litigation: false, subrogation: false, treaty: 'TR-2026-005' },
  { id: 'CLM-2026-0078', policy: 'POL-2025-2089', insured: 'Northstar Fleet #1',     lob: 'Transportation',      state: 'MN', dol: '2026-02-27', cause: 'Collision',       reserved: '$25,000',    paid: '$48,500',   status: 'Open',      adjuster: 'Sedgwick',       severity: 'Normal', litigation: true,  subrogation: true,  treaty: 'TR-2026-005' },
  { id: 'CLM-2026-0077', policy: 'POL-2026-0412', insured: 'Oakwood Builders',       lob: 'Surety',              state: 'TX', dol: '2026-02-12', cause: 'Default',         reserved: '$0',         paid: '$18,200',   status: 'Closed',    adjuster: 'In-house',       severity: 'Normal', litigation: false, subrogation: true,  treaty: 'TR-2026-002' },
  { id: 'CLM-2026-0076', policy: 'POL-2026-0417', insured: 'Cascade Aerials',        lob: 'Aviation',            state: 'WA', dol: '2026-01-30', cause: 'Ground damage',   reserved: '$0',         paid: '$4,800',    status: 'Closed',    adjuster: 'In-house',       severity: 'Normal', litigation: false, subrogation: false, treaty: 'TR-2026-003' },
  { id: 'CLM-2026-0075', policy: 'POL-2026-0421', insured: 'Kroger Real Estate',     lob: 'Commercial Property', state: 'OH', dol: '2026-01-22', cause: 'Water damage',    reserved: '$15,000',    paid: '$35,000',   status: 'Open',      adjuster: 'Crawford & Co',  severity: 'Normal', litigation: false, subrogation: false, treaty: 'TR-2026-001' },
  { id: 'CLM-2026-0074', policy: 'POL-2026-0411', insured: 'Big Sky Freight',         lob: 'Transportation',      state: 'MT', dol: '2026-01-18', cause: 'Collision',       reserved: '$18,000',    paid: '$42,300',   status: 'Open',      adjuster: 'Sedgwick',       severity: 'Normal', litigation: false, subrogation: true,  treaty: 'TR-2026-005' },
  { id: 'CLM-2025-2948', policy: 'POL-2025-2089', insured: 'Northstar Fleet #1',     lob: 'Transportation',      state: 'MN', dol: '2025-11-18', cause: 'Fire',            reserved: '$8,000',     paid: '$88,400',   status: 'Open',      adjuster: 'Sedgwick',       severity: 'Large',  litigation: true,  subrogation: false, treaty: 'TR-2026-005' },
  { id: 'CLM-2025-2841', policy: 'POL-2025-2089', insured: 'Northstar Fleet #1',     lob: 'Transportation',      state: 'ND', dol: '2025-10-29', cause: 'Collision-BI',    reserved: '$180,000',   paid: '$320,000',  status: 'Litigated', adjuster: 'Sedgwick',       severity: 'Large',  litigation: true,  subrogation: false, treaty: 'TR-2026-005' },
  { id: 'CLM-2025-2687', policy: 'POL-2025-2284', insured: 'Anchor Renewable',       lob: 'Environmental',       state: 'TX', dol: '2025-09-14', cause: 'Pollution',       reserved: '$62,000',    paid: '$180,000',  status: 'Open',      adjuster: 'Crawford & Co',  severity: 'Large',  litigation: false, subrogation: false, treaty: 'TR-2026-006' },
  { id: 'CLM-2025-2541', policy: 'POL-2025-1598', insured: 'Blue Ridge Winery',      lob: 'Commercial Property', state: 'VA', dol: '2025-08-22', cause: 'Fire',            reserved: '$0',         paid: '$91,200',   status: 'Closed',    adjuster: 'Crawford & Co',  severity: 'Normal', litigation: false, subrogation: false, treaty: 'TR-2026-001' },
  { id: 'CLM-2025-2488', policy: 'POL-2025-1402', insured: 'Rivera Trucking Fleet',  lob: 'Transportation',      state: 'TX', dol: '2025-08-10', cause: 'Cargo theft',     reserved: '$0',         paid: '$48,000',   status: 'Closed',    adjuster: 'Sedgwick',       severity: 'Normal', litigation: false, subrogation: true,  treaty: 'TR-2026-005' },
  { id: 'CLM-2025-2312', policy: 'POL-2025-0987', insured: 'Gulf Coast Condo Assoc', lob: 'Commercial Property', state: 'FL', dol: '2025-07-18', cause: 'Wind (Hurricane)',reserved: '$280,000',   paid: '$420,000',  status: 'Open',      adjuster: 'Crawford & Co',  severity: 'CAT',    litigation: false, subrogation: false, treaty: 'TR-2026-007' },
  { id: 'CLM-2025-2104', policy: 'POL-2025-0987', insured: 'Gulf Coast Condo Assoc', lob: 'Commercial Property', state: 'FL', dol: '2025-07-18', cause: 'Wind (Hurricane)',reserved: '$140,000',   paid: '$225,000',  status: 'Open',      adjuster: 'Crawford & Co',  severity: 'CAT',    litigation: false, subrogation: false, treaty: 'TR-2026-007' }
];

export const carrierSubrogation = [
  { id: 'SUBRO-01', claim: 'CLM-2026-0078', insured: 'Northstar Fleet #1',    target: 'Other driver (at fault)',      amount_paid: '$48,500', recovery_sought: '$48,500', status: 'Pursuing',  attorney: 'In-house',     notes: 'Police report confirms third-party fault' },
  { id: 'SUBRO-02', claim: 'CLM-2026-0077', insured: 'Oakwood Builders',      target: 'Principal (Oakwood)',          amount_paid: '$18,200', recovery_sought: '$18,200', status: 'Recovered', attorney: 'In-house',     notes: 'Indemnity recovery complete' },
  { id: 'SUBRO-03', claim: 'CLM-2026-0074', insured: 'Big Sky Freight',        target: 'Cargo consignor',              amount_paid: '$42,300', recovery_sought: '$20,000', status: 'Pursuing',  attorney: 'Jones Day',    notes: 'Negligence in cargo securement' },
  { id: 'SUBRO-04', claim: 'CLM-2025-2488', insured: 'Rivera Trucking',        target: 'Warehouse (cargo theft)',      amount_paid: '$48,000', recovery_sought: '$36,000', status: 'Recovered', attorney: 'Jones Day',    notes: '75% recovered via warehouse insurance' },
  { id: 'SUBRO-05', claim: 'CLM-2025-2841', insured: 'Northstar Fleet #1',    target: 'Truck manufacturer (recall)',  amount_paid: '$320,000',recovery_sought: '$150,000',status: 'Litigating',attorney: 'Kasowitz',     notes: 'Product liability pursuit' }
];

export const carrierLitigation = [
  { id: 'LIT-01', claim: 'CLM-2025-2841', case: 'Northstar v. Estate of Garcia', court: 'ND District, Dakota',    stage: 'Discovery',      filed: '2026-01-22', trial_date: '2026-09-14', defense: 'Kasowitz Benson Torres', reserve: '$500,000', ledes_ytd: '$42,800' },
  { id: 'LIT-02', claim: 'CLM-2025-2948', case: 'Northstar v. State Trooper',   court: 'MN Hennepin Cty',         stage: 'Mediation',      filed: '2025-12-14', trial_date: '2026-07-01', defense: 'Jones Day',              reserve: '$250,000', ledes_ytd: '$18,200' },
  { id: 'LIT-03', claim: 'CLM-2026-0078', case: 'Fleet v. At-fault driver',     court: 'MN Hennepin Cty',         stage: 'Pleadings',      filed: '2026-03-28', trial_date: 'TBD',         defense: 'In-house',               reserve: '$50,000',  ledes_ytd: '$4,200' }
];

export const carrierCATEvents = [
  { id: 'CAT-2026-001', name: 'Hurricane Delta',  date: '2025-09-14', status: 'Active · reporting', peril: 'Wind/flood',   region: 'SE US (FL/GA/SC)', total_claims: 142, gross_incurred: '$8.2M',  net: '$3.1M', reinsurance: 'TR-2026-007 · $5M xs $25M · $1M burn', reinstatement: '1 paid, 1 free' },
  { id: 'CAT-2025-008', name: 'Wildfire Complex', date: '2025-08-04', status: 'Closed',             peril: 'Wildfire',     region: 'CA (N)',           total_claims: 38,  gross_incurred: '$14.8M', net: '$4.2M', reinsurance: 'Prior-year treaty',                     reinstatement: 'Exhausted' },
  { id: 'CAT-2025-003', name: 'Winter Storm Orion',date: '2025-02-14', status: 'Closed',            peril: 'Freeze/ice',   region: 'TX / SE US',       total_claims: 261, gross_incurred: '$19.4M', net: '$7.1M', reinsurance: 'Prior-year treaty',                     reinstatement: 'Exhausted' }
];

export const carrierReserveTriangles = {
  lob: 'Commercial Property',
  years: ['2021','2022','2023','2024','2025'],
  months: ['12','24','36','48','60'],
  paid: [
    [4850, 5920, 6180, 6210, 6215],
    [5120, 6240, 6520, 6560, null],
    [5880, 7180, 7410, null, null],
    [6540, 7920, null, null, null],
    [7120, null, null, null, null]
  ],
  incurred: [
    [5240, 6120, 6240, 6225, 6220],
    [5580, 6480, 6610, 6580, null],
    [6280, 7420, 7540, null, null],
    [7020, 8200, null, null, null],
    [7680, null, null, null, null]
  ],
  ultimate_lr: ['54.8%','56.1%','58.2%','60.1%','62.8%']
};

export const carrierFinancials = {
  ytd: {
    dwp: 482,
    nwp: 148,
    nep: 136,
    losses_incurred: 77,
    loss_ratio: 56.6,
    expense_ratio: 28.4,
    combined_ratio: 85.0,
    commissions_payable: 44,
    claims_paid_ytd: 48.9,
    case_reserves: 31.2,
    ibnr: 22.8,
    ulae: 6.8,
    cash_surplus: 208
  },
  by_lob: [
    { lob: 'Commercial Property', dwp: 142, nep: 42, lr: 52.1, cr: 86.2 },
    { lob: 'Workers Compensation',dwp: 84,  nep: 24, lr: 62.7, cr: 94.4 },
    { lob: 'Transportation',      dwp: 78,  nep: 21, lr: 64.5, cr: 96.1 },
    { lob: 'Aviation',            dwp: 52,  nep: 12, lr: 51.2, cr: 88.9 },
    { lob: 'Cyber',               dwp: 34,  nep: 7,  lr: 44.5, cr: 82.1 },
    { lob: 'Environmental',       dwp: 31,  nep: 11, lr: 53.9, cr: 90.6 },
    { lob: 'CAT Personal Lines',  dwp: 31,  nep: 10, lr: 57.9, cr: 93.2 },
    { lob: 'Surety',              dwp: 15,  nep: 5,  lr: 21.3, cr: 74.8 },
    { lob: 'E&O',                 dwp: 8,   nep: 2,  lr: 41.3, cr: 86.5 },
    { lob: 'D&O',                 dwp: 7,   nep: 2,  lr: 0.0,  cr: 78.0 }
  ]
};

export const carrierSerffFilings = [
  { id: 'SRF-2026-TX-01', state: 'TX', lob: 'Commercial Property', type: 'Rate',       filing_no: 'SUMM-CP-2026-0042', status: 'Approved',  filed: '2026-02-10', effective: '2026-05-01', rate_change: '+5.2%', form: 'CP 00 10 10 12', doi_contact: 'Texas DOI · K. Pearson' },
  { id: 'SRF-2026-CA-01', state: 'CA', lob: 'Commercial Property', type: 'Rate',       filing_no: 'SUMM-CP-2026-0043', status: 'Pending',   filed: '2026-03-04', effective: '2026-07-01', rate_change: '+8.4%', form: 'CP 00 10 CA',    doi_contact: 'CDI · M. Li' },
  { id: 'SRF-2026-FL-01', state: 'FL', lob: 'Commercial Property', type: 'Rate',       filing_no: 'SUMM-CP-2026-0044', status: 'Objection', filed: '2026-02-28', effective: 'TBD',       rate_change: '+14.2%', form: 'CP 00 10 FL',    doi_contact: 'FL OIR · J. Ortega' },
  { id: 'SRF-2026-NY-01', state: 'NY', lob: 'Workers Compensation',type: 'Form',       filing_no: 'SUMM-WC-2026-0011', status: 'Approved',  filed: '2026-01-22', effective: '2026-04-01', rate_change: 'n/a',   form: 'WC NY endorsement', doi_contact: 'NYS DFS · R. Kim' },
  { id: 'SRF-2026-OH-01', state: 'OH', lob: 'Workers Compensation',type: 'Rate + Form',filing_no: 'SUMM-WC-2026-0012', status: 'Approved',  filed: '2026-01-15', effective: '2026-04-01', rate_change: '+2.1%', form: 'WC OH rev 3',     doi_contact: 'OH BWC · T. Grant' },
  { id: 'SRF-2026-CA-02', state: 'CA', lob: 'Cyber',               type: 'Rate + Form',filing_no: 'SUMM-CY-2026-0005', status: 'Withdrawn', filed: '2026-01-08', effective: 'n/a',       rate_change: '+12.0%',form: 'CY CA endorsement', doi_contact: 'CDI · S. Hong' },
  { id: 'SRF-2026-TX-02', state: 'TX', lob: 'Cyber',               type: 'Rate + Form',filing_no: 'SUMM-CY-2026-0006', status: 'Approved',  filed: '2026-02-04', effective: '2026-05-01', rate_change: '+6.8%', form: 'CY TX rev 2',     doi_contact: 'Texas DOI · A. Reyes' },
  { id: 'SRF-2026-IL-01', state: 'IL', lob: 'Transportation',      type: 'Rate',       filing_no: 'SUMM-TR-2026-0008', status: 'Pending',   filed: '2026-03-20', effective: '2026-08-01', rate_change: '+7.4%', form: 'TR IL GL',        doi_contact: 'IL DOI · M. Jackson' },
  { id: 'SRF-2026-MT-01', state: 'MT', lob: 'Transportation',      type: 'Rate',       filing_no: 'SUMM-TR-2026-0009', status: 'Approved',  filed: '2026-02-28', effective: '2026-05-15', rate_change: '+4.1%', form: 'TR MT',           doi_contact: 'MT CSI · D. Boyd' },
  { id: 'SRF-2026-WA-01', state: 'WA', lob: 'Aviation',            type: 'Form',       filing_no: 'SUMM-AV-2026-0003', status: 'Approved',  filed: '2026-01-30', effective: '2026-04-15', rate_change: 'n/a',   form: 'AV WA endorsement', doi_contact: 'WA OIC · P. Chung' }
];

export const carrierComplaints = [
  { id: 'COM-2026-01', state: 'FL', insured: 'Gulf Coast Condo Assoc', subject: 'Claim delay',       filed: '2026-03-20', status: 'Open',       deadline: '2026-04-20', reviewer: 'Helen Becker',   notes: 'DOI requesting claim handling timeline' },
  { id: 'COM-2026-02', state: 'CA', insured: 'Policy shopper',          subject: 'Non-renewal notice',filed: '2026-03-02', status: 'Responded',  deadline: '2026-04-02', reviewer: 'Helen Becker',   notes: 'Compliance with 75-day notice confirmed' },
  { id: 'COM-2026-03', state: 'TX', insured: 'Rivera Trucking',          subject: 'Rate increase',     filed: '2026-02-18', status: 'Closed',     deadline: '2026-03-18', reviewer: 'Helen Becker',   notes: 'DOI accepted filing as basis' },
  { id: 'COM-2026-04', state: 'NY', insured: 'Agency complaint',         subject: 'Producer conduct',  filed: '2026-04-05', status: 'Investigating',deadline: '2026-05-05', reviewer: 'Helen Becker', notes: 'Producer license status confirmed' }
];

export const carrierAuditLog = [
  { ts: '2026-04-20 09:14:12', actor: 'Alex Chen',          action: 'Submission received',  target: 'SUB-2026-1142', ip: '10.2.4.12' },
  { ts: '2026-04-20 08:32:41', actor: 'Priya Raman',        action: 'Endorsement approved', target: 'END-2026-0080', ip: '10.2.4.22' },
  { ts: '2026-04-19 16:02:18', actor: 'Alex Chen',          action: 'Quote issued',         target: 'SUB-2026-1136', ip: '10.2.4.12' },
  { ts: '2026-04-19 14:48:01', actor: 'Daniel Ortega',      action: 'Reserve adjusted',     target: 'CLM-2026-0128', ip: '10.2.4.41' },
  { ts: '2026-04-19 11:22:33', actor: 'Helen Becker',       action: 'DOI filing submitted', target: 'SRF-2026-IL-01', ip: '10.2.4.55' },
  { ts: '2026-04-19 10:04:02', actor: 'Sanjay Rao',         action: 'Ceded bordereau out',  target: 'BDX-2026-03-03', ip: '10.2.4.31' },
  { ts: '2026-04-18 17:01:44', actor: 'Ingrid Lindqvist',   action: 'Reserve triangle run', target: 'LOB: CP',        ip: '10.2.4.18' },
  { ts: '2026-04-18 15:22:18', actor: 'Morgan Whitaker',    action: 'Appetite updated',     target: 'CP · FL · Coastal',ip: '10.2.4.01' },
  { ts: '2026-04-18 14:04:02', actor: 'Alex Chen',          action: 'Policy bound',         target: 'POL-2026-0421', ip: '10.2.4.12' },
  { ts: '2026-04-18 11:41:33', actor: 'Priya Raman',        action: 'Referral approved',    target: 'SUB-2026-1128', ip: '10.2.4.22' }
];

export const carrierProducers = [
  { id: 'PRD-001', name: 'Marsh & McLennan',        type: 'Broker',  license: 'NIPR-ACTIVE',   commissions_ytd: '$2.8M', appointments: 50, gwp_ytd: '$42M', lr: '52.1%', status: 'Active' },
  { id: 'PRD-002', name: 'Aon plc',                 type: 'Broker',  license: 'NIPR-ACTIVE',   commissions_ytd: '$2.1M', appointments: 50, gwp_ytd: '$31M', lr: '48.7%', status: 'Active' },
  { id: 'PRD-003', name: 'Lockton Companies',       type: 'Broker',  license: 'NIPR-ACTIVE',   commissions_ytd: '$1.6M', appointments: 42, gwp_ytd: '$24M', lr: '54.8%', status: 'Active' },
  { id: 'PRD-004', name: 'Willis Towers Watson',    type: 'Broker',  license: 'NIPR-ACTIVE',   commissions_ytd: '$1.4M', appointments: 48, gwp_ytd: '$21M', lr: '56.2%', status: 'Active' },
  { id: 'PRD-005', name: 'Amwins',                  type: 'Wholesale',license: 'NIPR-ACTIVE',   commissions_ytd: '$0.9M', appointments: 35, gwp_ytd: '$14M', lr: '61.4%', status: 'Active' },
  { id: 'PRD-006', name: 'CRC Group',               type: 'Wholesale',license: 'NIPR-ACTIVE',   commissions_ytd: '$0.8M', appointments: 40, gwp_ytd: '$12M', lr: '58.9%', status: 'Active' },
  { id: 'PRD-007', name: 'Ryan Specialty',          type: 'Wholesale',license: 'NIPR-ACTIVE',   commissions_ytd: '$0.7M', appointments: 38, gwp_ytd: '$10M', lr: '55.1%', status: 'Active' },
  { id: 'PRD-008', name: 'Brown & Brown',           type: 'Broker',  license: 'NIPR-ACTIVE',   commissions_ytd: '$0.5M', appointments: 28, gwp_ytd: '$8M',  lr: '49.2%', status: 'Active' },
  { id: 'PRD-009', name: 'Heffernan Insurance',     type: 'Broker',  license: 'NIPR-EXPIRING', commissions_ytd: '$0.3M', appointments: 12, gwp_ytd: '$4M',  lr: '62.1%', status: 'Review' },
  { id: 'PRD-010', name: 'Sterling Insurance Group',type: 'Wholesale',license: 'NIPR-LAPSED',   commissions_ytd: '$0.1M', appointments: 8,  gwp_ytd: '$1M',  lr: '—',     status: 'Suspended' }
];

export const carrierRetroPanel = [
  { reinsurer: 'Munich Re America',   treaty: 'TR-2026-001 · Property QS + XoL', ceded_ytd: '$42M', recoverables: '$3.2M', statements_delivered: '2026-03-31', next_statement: '2026-06-30' },
  { reinsurer: 'Pacific Paper Group', treaty: 'TR-2026-004 · WC Full-stack',     ceded_ytd: '$36M', recoverables: '$2.8M', statements_delivered: '2026-03-31', next_statement: '2026-06-30' },
  { reinsurer: 'Summit Retrocession', treaty: 'TR-2026-005 · Transportation QS', ceded_ytd: '$38M', recoverables: '$3.8M', statements_delivered: '2026-03-31', next_statement: '2026-06-30' },
  { reinsurer: 'Nordic Global Re',    treaty: 'TR-2026-003 · Aviation Surplus',  ceded_ytd: '$28M', recoverables: '$0.4M', statements_delivered: '2026-03-31', next_statement: '2026-06-30' },
  { reinsurer: 'Gateway Re (Bermuda)',treaty: 'TR-2026-006 · Environmental QS',  ceded_ytd: '$13M', recoverables: '$0.8M', statements_delivered: '2026-03-31', next_statement: '2026-06-30' },
  { reinsurer: 'Brookline Full-Stack',treaty: 'TR-2026-002 · Surety Full-Stack', ceded_ytd: '$13M', recoverables: '$0.0M', statements_delivered: '2026-03-31', next_statement: '2026-06-30' },
  { reinsurer: "Syndicate 4488 — Lloyd's",treaty: 'TR-2026-008 · E&O QS',       ceded_ytd: '$9M',  recoverables: '$1.4M', statements_delivered: '2026-03-31', next_statement: '2026-06-30' }
];

export const carrierIntegrations = [
  { name: 'SERFF (NAIC)',         purpose: 'Rate & form filings',  status: 'Connected',    since: '2024-11-01' },
  { name: 'NIPR',                 purpose: 'Producer licensing',   status: 'Connected',    since: '2024-12-15' },
  { name: 'ISO ERC',              purpose: 'Loss costs · forms',    status: 'Connected',    since: '2024-10-22' },
  { name: 'RMS (CAT modeling)',   purpose: 'Aggregate / PML',       status: 'Connected',    since: '2025-01-10' },
  { name: 'AIR Worldwide',        purpose: 'CAT scenarios',          status: 'Pending',      since: null },
  { name: 'NAIC (Statutory)',     purpose: 'Yellow Book / Schedule P',status: 'Connected',  since: '2024-12-01' },
  { name: 'DocuSign',             purpose: 'e-signature',           status: 'Connected',    since: '2024-09-30' },
  { name: 'Stripe / ACH',         purpose: 'Claims payments',       status: 'Connected',    since: '2024-11-15' },
  { name: 'OFAC / sanctions',     purpose: 'Clearance screening',   status: 'Connected',    since: '2024-10-05' },
  { name: 'SICS (Swiss Re)',      purpose: 'Reinsurance accounting', status: 'Not connected', since: null }
];

/* ============================================================
   SYNAPI — Data Layer (Insurance API Platform, 6th portal)
   The API fabric underneath all other portals
   ============================================================ */

export const SYNAPI_USERS = {
  consumer:    { name: 'Jordan Park',    role: 'Agency Tech Lead',       company: 'Lockton',             avatar: 'JP' },
  dev:         { name: 'Ravi Nair',      role: 'Senior Developer',       company: 'Lockton',             avatar: 'RN' },
  publisherCa: { name: 'Alex Chen',      role: 'Integration Manager',    company: 'Summit Fronting Re',  avatar: 'AC' },
  publisherMg: { name: 'Evan Harlow',    role: 'MGA Integration Lead',   company: 'Meridian Specialty',  avatar: 'EH' },
  admin:       { name: 'Casey Wu',       role: 'Platform Admin',         company: 'Synapi',              avatar: 'CW' },
  devAdv:      { name: 'Morgan Lee',     role: 'Developer Advocate',     company: 'Synapi',              avatar: 'ML' },
  partnerSucc: { name: 'Dana Robinson',  role: 'Partner Success',        company: 'Synapi',              avatar: 'DR' },
  ops:         { name: 'Riley Okafor',   role: 'Platform Ops / SRE',     company: 'Synapi',              avatar: 'RO' },
  compliance:  { name: 'Helen Becker',   role: 'Compliance Officer',     company: 'Synapi',              avatar: 'HB' }
};

export const synapiPartners = [
  // Carriers
  { id: 'P-001', name: 'Summit Fronting Re',       type: 'Carrier',  status: 'Production', plan: 'Scale',       gwp_api: '$82M', calls_30d: 142000, uptime: '99.98%', since: '2024-10-01', region: 'US Nationwide' },
  { id: 'P-002', name: 'Nordic Global Re',          type: 'Carrier',  status: 'Production', plan: 'Enterprise',  gwp_api: '$64M', calls_30d: 88000,  uptime: '99.97%', since: '2024-11-15', region: 'US + EU' },
  { id: 'P-003', name: 'Pacific Paper Group',       type: 'Carrier',  status: 'Production', plan: 'Pro',         gwp_api: '$38M', calls_30d: 64000,  uptime: '99.95%', since: '2024-12-10', region: 'US West' },
  { id: 'P-004', name: 'Munich Re America',         type: 'Reinsurer',status: 'Production', plan: 'Enterprise',  gwp_api: '$124M',calls_30d: 42000,  uptime: '99.99%', since: '2024-08-01', region: 'US + Global' },
  { id: 'P-005', name: 'Gateway Re (Bermuda)',      type: 'Reinsurer',status: 'Production', plan: 'Scale',       gwp_api: '$58M', calls_30d: 18000,  uptime: '99.96%', since: '2025-01-15', region: 'Bermuda' },
  { id: 'P-006', name: "Syndicate 4488 — Lloyd's",  type: 'Carrier',  status: 'Production', plan: 'Pro',         gwp_api: '$22M', calls_30d: 24000,  uptime: '99.94%', since: '2025-02-01', region: "Lloyd's / UK" },
  // MGAs
  { id: 'P-010', name: 'Meridian Specialty Underwriters', type: 'MGA', status: 'Production', plan: 'Pro',        gwp_api: '$42M', calls_30d: 58000,  uptime: '99.97%', since: '2025-01-01', region: 'US SE' },
  { id: 'P-011', name: 'Harbor Program Partners',         type: 'MGA', status: 'Production', plan: 'Pro',        gwp_api: '$48M', calls_30d: 48000,  uptime: '99.96%', since: '2024-11-01', region: 'US West' },
  { id: 'P-012', name: 'Northstar Transportation MGA',    type: 'MGA', status: 'Production', plan: 'Pro',        gwp_api: '$54M', calls_30d: 42000,  uptime: '99.95%', since: '2024-12-20', region: 'US Midwest' },
  { id: 'P-013', name: 'Atlas Surety Group',              type: 'MGA', status: 'Production', plan: 'Starter',    gwp_api: '$15M', calls_30d: 11000,  uptime: '99.92%', since: '2025-03-01', region: 'US Nationwide' },
  // Brokers (consumers)
  { id: 'P-020', name: 'Marsh & McLennan',          type: 'Broker',   status: 'Production', plan: 'Enterprise',  gwp_api: null,   calls_30d: 94000,  uptime: '—',       since: '2024-09-01', region: 'Global' },
  { id: 'P-021', name: 'Aon plc',                   type: 'Broker',   status: 'Production', plan: 'Enterprise',  gwp_api: null,   calls_30d: 72000,  uptime: '—',       since: '2024-10-10', region: 'Global' },
  { id: 'P-022', name: 'Lockton Companies',         type: 'Broker',   status: 'Production', plan: 'Scale',       gwp_api: null,   calls_30d: 68000,  uptime: '—',       since: '2024-09-15', region: 'Global' },
  { id: 'P-023', name: 'Willis Towers Watson',      type: 'Broker',   status: 'Production', plan: 'Scale',       gwp_api: null,   calls_30d: 48000,  uptime: '—',       since: '2024-11-01', region: 'Global' },
  // InsurTechs / Embedded
  { id: 'P-030', name: 'NestLease (real estate)',   type: 'Embedded', status: 'Production', plan: 'Pro',         gwp_api: null,   calls_30d: 22000,  uptime: '—',       since: '2025-02-14', region: 'US' },
  { id: 'P-031', name: 'FleetForward (telematics)', type: 'InsurTech',status: 'Sandbox',    plan: 'Starter',     gwp_api: null,   calls_30d: 3200,   uptime: '—',       since: '2026-03-20', region: 'US' },
  { id: 'P-032', name: 'BoldPenguin Exchange',      type: 'Aggregator',status:'Production', plan: 'Scale',       gwp_api: null,   calls_30d: 28000,  uptime: '—',       since: '2025-01-20', region: 'US' }
];

export const SYNAPI_LOBS = ['Commercial Property','Workers Compensation','Cyber','Transportation','Aviation','Casualty / GL','E&O','D&O','Marine','Surety','Environmental','CAT Personal Lines','Homeowners','Auto'];

export const synapiApis = [
  { id: 'API-001', partnerId: 'P-001', partner: 'Summit Fronting Re',      name: 'Commercial Property — Quote',    endpoint: 'POST /v1/carriers/summit/quote/commercial-property', method: 'POST', version: 'v1',     status: 'GA',         lob: 'Commercial Property',     auth: 'OAuth 2.0', rate_limit: '100 rpm',  p95_ms: 680,  error_30d: 0.4,  calls_30d: 42000, acord_schema: 'NGDS-CP-v1.2',  sandbox: true },
  { id: 'API-002', partnerId: 'P-001', partner: 'Summit Fronting Re',      name: 'Commercial Property — Bind',     endpoint: 'POST /v1/carriers/summit/bind/commercial-property', method: 'POST', version: 'v1',     status: 'GA',         lob: 'Commercial Property',     auth: 'OAuth 2.0', rate_limit: '50 rpm',   p95_ms: 1240, error_30d: 0.2,  calls_30d: 8400,  acord_schema: 'NGDS-CP-v1.2',  sandbox: true },
  { id: 'API-003', partnerId: 'P-001', partner: 'Summit Fronting Re',      name: 'Policy — Endorsement',           endpoint: 'POST /v1/carriers/summit/endorsement',               method: 'POST', version: 'v1',     status: 'GA',         lob: 'All',                     auth: 'OAuth 2.0', rate_limit: '100 rpm',  p95_ms: 420,  error_30d: 0.3,  calls_30d: 3200,  acord_schema: 'NGDS-POL-v1.1', sandbox: true },
  { id: 'API-004', partnerId: 'P-001', partner: 'Summit Fronting Re',      name: 'Claim — FNOL',                   endpoint: 'POST /v1/carriers/summit/fnol',                      method: 'POST', version: 'v1',     status: 'GA',         lob: 'All',                     auth: 'OAuth 2.0', rate_limit: '200 rpm',  p95_ms: 380,  error_30d: 0.5,  calls_30d: 1800,  acord_schema: 'NGDS-CLM-v1.0', sandbox: true },
  { id: 'API-005', partnerId: 'P-001', partner: 'Summit Fronting Re',      name: 'Bordereau — Premium',             endpoint: 'POST /v1/carriers/summit/bordereau/premium',         method: 'POST', version: 'v1',     status: 'GA',         lob: 'All',                     auth: 'OAuth 2.0 + mTLS', rate_limit: '10 rpm', p95_ms: 2100, error_30d: 0.1, calls_30d: 320,  acord_schema: 'AL3-BDX-2019',  sandbox: true },
  { id: 'API-006', partnerId: 'P-002', partner: 'Nordic Global Re',        name: 'Aviation — Quote',               endpoint: 'POST /v1/carriers/nordic/quote/aviation',           method: 'POST', version: 'v1',     status: 'GA',         lob: 'Aviation',                auth: 'OAuth 2.0', rate_limit: '50 rpm',   p95_ms: 920,  error_30d: 0.6,  calls_30d: 8800,  acord_schema: 'NGDS-AV-v1.0',  sandbox: true },
  { id: 'API-007', partnerId: 'P-002', partner: 'Nordic Global Re',        name: 'Property CAT — Bind',            endpoint: 'POST /v1/carriers/nordic/bind/property-cat',         method: 'POST', version: 'v1',     status: 'Beta',       lob: 'CAT Commercial',          auth: 'OAuth 2.0', rate_limit: '25 rpm',   p95_ms: 1820, error_30d: 1.2,  calls_30d: 1200,  acord_schema: 'NGDS-CP-v1.2',  sandbox: true },
  { id: 'API-008', partnerId: 'P-003', partner: 'Pacific Paper Group',     name: 'Workers Comp — Quote',           endpoint: 'POST /v1/carriers/pacific/quote/wc',                 method: 'POST', version: 'v1',     status: 'GA',         lob: 'Workers Compensation',    auth: 'OAuth 2.0', rate_limit: '100 rpm',  p95_ms: 740,  error_30d: 0.3,  calls_30d: 22000, acord_schema: 'NGDS-WC-v1.1',  sandbox: true },
  { id: 'API-009', partnerId: 'P-003', partner: 'Pacific Paper Group',     name: 'Workers Comp — Bind',            endpoint: 'POST /v1/carriers/pacific/bind/wc',                  method: 'POST', version: 'v1',     status: 'GA',         lob: 'Workers Compensation',    auth: 'OAuth 2.0', rate_limit: '50 rpm',   p95_ms: 1180, error_30d: 0.2,  calls_30d: 4200,  acord_schema: 'NGDS-WC-v1.1',  sandbox: true },
  { id: 'API-010', partnerId: 'P-004', partner: 'Munich Re America',       name: 'Treaty — Ceded Bordereau',       endpoint: 'POST /v1/reinsurers/munich-re/bordereau/ceded',     method: 'POST', version: 'v1',     status: 'GA',         lob: 'All',                     auth: 'OAuth 2.0 + mTLS', rate_limit: '5 rpm',  p95_ms: 3200, error_30d: 0.1, calls_30d: 120,  acord_schema: 'AL3-RE-BDX-2020',sandbox: true },
  { id: 'API-011', partnerId: 'P-010', partner: 'Meridian Specialty',       name: 'Program — Quote (broker)',       endpoint: 'POST /v1/mgas/meridian/quote',                       method: 'POST', version: 'v2',     status: 'GA',         lob: 'Commercial Property',     auth: 'OAuth 2.0', rate_limit: '150 rpm',  p95_ms: 580,  error_30d: 0.2,  calls_30d: 38000, acord_schema: 'NGDS-CP-v1.2',  sandbox: true },
  { id: 'API-012', partnerId: 'P-010', partner: 'Meridian Specialty',       name: 'Program — Bind (broker)',        endpoint: 'POST /v1/mgas/meridian/bind',                        method: 'POST', version: 'v2',     status: 'GA',         lob: 'Commercial Property',     auth: 'OAuth 2.0', rate_limit: '75 rpm',   p95_ms: 1020, error_30d: 0.3,  calls_30d: 4800,  acord_schema: 'NGDS-CP-v1.2',  sandbox: true },
  { id: 'API-013', partnerId: 'P-010', partner: 'Meridian Specialty',       name: 'Program — Quote (broker)',       endpoint: 'POST /v1/mgas/meridian/quote',                       method: 'POST', version: 'v1',     status: 'Deprecated', lob: 'Commercial Property',     auth: 'OAuth 2.0', rate_limit: '150 rpm',  p95_ms: 620,  error_30d: 0.3,  calls_30d: 2400,  acord_schema: 'NGDS-CP-v1.1',  sandbox: true },
  { id: 'API-014', partnerId: 'P-011', partner: 'Harbor Program Partners',  name: 'WC Program — Quote',             endpoint: 'POST /v1/mgas/harbor/quote/wc',                     method: 'POST', version: 'v1',     status: 'GA',         lob: 'Workers Compensation',    auth: 'OAuth 2.0', rate_limit: '100 rpm',  p95_ms: 660,  error_30d: 0.4,  calls_30d: 18000, acord_schema: 'NGDS-WC-v1.1',  sandbox: true },
  { id: 'API-015', partnerId: 'P-012', partner: 'Northstar MGA',            name: 'Trucking — Quote',               endpoint: 'POST /v1/mgas/northstar/quote/trucking',            method: 'POST', version: 'v1',     status: 'GA',         lob: 'Transportation',          auth: 'OAuth 2.0', rate_limit: '80 rpm',   p95_ms: 810,  error_30d: 0.5,  calls_30d: 12000, acord_schema: 'NGDS-TR-v1.0',  sandbox: true },
  { id: 'API-016', partnerId: 'P-013', partner: 'Atlas Surety',             name: 'Surety — Quote',                 endpoint: 'POST /v1/mgas/atlas/quote/surety',                  method: 'POST', version: 'v1',     status: 'GA',         lob: 'Surety',                  auth: 'OAuth 2.0', rate_limit: '100 rpm',  p95_ms: 520,  error_30d: 0.2,  calls_30d: 7200,  acord_schema: 'NGDS-SU-v1.0',  sandbox: true },
  { id: 'API-017', partnerId: 'P-006', partner: "Syndicate 4488 — Lloyd's", name: 'Specialty Cyber — Quote',        endpoint: 'POST /v1/carriers/lloyds-4488/quote/cyber',        method: 'POST', version: 'v1',     status: 'Beta',       lob: 'Cyber',                   auth: 'OAuth 2.0', rate_limit: '40 rpm',   p95_ms: 1140, error_30d: 0.8,  calls_30d: 2200,  acord_schema: 'NGDS-CY-v1.0',  sandbox: true },
  { id: 'API-018', partnerId: 'P-005', partner: 'Gateway Re',               name: 'CAT XoL — Quote (fac)',          endpoint: 'POST /v1/reinsurers/gateway/quote/fac',             method: 'POST', version: 'v1',     status: 'GA',         lob: 'CAT Commercial',          auth: 'OAuth 2.0', rate_limit: '20 rpm',   p95_ms: 1480, error_30d: 0.4,  calls_30d: 840,   acord_schema: 'NGDS-RE-v1.0',  sandbox: true },
  { id: 'API-019', partnerId: 'P-001', partner: 'Summit Fronting Re',      name: 'Docs — Fetch declarations',       endpoint: 'GET /v1/carriers/summit/policy/{id}/declarations',  method: 'GET',  version: 'v1',     status: 'GA',         lob: 'All',                     auth: 'OAuth 2.0', rate_limit: '500 rpm',  p95_ms: 140,  error_30d: 0.1,  calls_30d: 48000, acord_schema: 'NGDS-DOC-v1.0', sandbox: true },
  { id: 'API-020', partnerId: 'P-010', partner: 'Meridian Specialty',       name: 'Program — Endorsement',          endpoint: 'POST /v1/mgas/meridian/endorsement',                 method: 'POST', version: 'v1',     status: 'GA',         lob: 'Commercial Property',     auth: 'OAuth 2.0', rate_limit: '80 rpm',   p95_ms: 520,  error_30d: 0.3,  calls_30d: 1800,  acord_schema: 'NGDS-POL-v1.1', sandbox: true }
];

export const synapiConsumerApps = [
  { id: 'APP-001', partnerId: 'P-022', partner: 'Lockton Companies',        name: 'Lockton-AppliedEpic-Prod',   env: 'Production', scopes: ['quote:read','bind:write','endorsement:write','docs:read'], created: '2024-09-15', calls_30d: 42000, keys: 2, status: 'Active' },
  { id: 'APP-002', partnerId: 'P-022', partner: 'Lockton Companies',        name: 'Lockton-Sandbox',             env: 'Sandbox',    scopes: ['quote:read','bind:write'],                                    created: '2024-09-15', calls_30d: 8200,  keys: 1, status: 'Active' },
  { id: 'APP-003', partnerId: 'P-020', partner: 'Marsh & McLennan',          name: 'Marsh-Vertafore-Prod',        env: 'Production', scopes: ['quote:read','bind:write','endorsement:write','docs:read','webhook:subscribe'], created: '2024-09-01', calls_30d: 68000, keys: 3, status: 'Active' },
  { id: 'APP-004', partnerId: 'P-021', partner: 'Aon plc',                  name: 'Aon-Global-Hub',              env: 'Production', scopes: ['quote:read','bind:write','claim:write','webhook:subscribe'],   created: '2024-10-10', calls_30d: 52000, keys: 2, status: 'Active' },
  { id: 'APP-005', partnerId: 'P-023', partner: 'Willis Towers Watson',      name: 'WTW-Connect',                 env: 'Production', scopes: ['quote:read','bind:write','docs:read'],                         created: '2024-11-01', calls_30d: 38000, keys: 2, status: 'Active' },
  { id: 'APP-006', partnerId: 'P-030', partner: 'NestLease',                name: 'NestLease-Embedded',          env: 'Production', scopes: ['quote:read','bind:write'],                                    created: '2025-02-14', calls_30d: 18000, keys: 1, status: 'Active' },
  { id: 'APP-007', partnerId: 'P-031', partner: 'FleetForward',             name: 'FleetForward-Telematics',      env: 'Sandbox',    scopes: ['quote:read'],                                                 created: '2026-03-20', calls_30d: 3200,  keys: 1, status: 'Active' },
  { id: 'APP-008', partnerId: 'P-032', partner: 'BoldPenguin Exchange',    name: 'BP-Aggregator-Prod',           env: 'Production', scopes: ['quote:read','bind:write','webhook:subscribe'],                created: '2025-01-20', calls_30d: 28000, keys: 2, status: 'Active' }
];

export const synapiRoutingRules = [
  { id: 'RR-01', app: 'Lockton-AppliedEpic-Prod', name: 'Commercial Property · US · $10M+', lob: 'Commercial Property', state_in: ['Any'],         premium_min: 10000000, premium_max: 100000000, carriers: ['Summit Fronting Re','Nordic Global Re','Meridian Specialty'], strategy: 'Parallel fan-out · return best 3', timeout_ms: 4000, fallback: 'Manual review queue', enabled: true },
  { id: 'RR-02', app: 'Lockton-AppliedEpic-Prod', name: 'Workers Comp · West · $1M–$5M',    lob: 'Workers Compensation',state_in: ['CA','OR','WA'], premium_min: 1000000,  premium_max: 5000000,   carriers: ['Pacific Paper Group','Harbor Program Partners'],             strategy: 'Parallel fan-out · return all', timeout_ms: 3500, fallback: 'Pacific Paper Group',      enabled: true },
  { id: 'RR-03', app: 'Marsh-Vertafore-Prod',     name: 'Transportation · US',               lob: 'Transportation',      state_in: ['Any'],         premium_min: 500000,   premium_max: 50000000,  carriers: ['Northstar MGA','Summit Fronting Re'],                        strategy: 'Sequential · first success', timeout_ms: 5000, fallback: 'Manual review queue', enabled: true },
  { id: 'RR-04', app: 'Marsh-Vertafore-Prod',     name: 'Aviation · global',                 lob: 'Aviation',            state_in: ['Any'],         premium_min: 100000,   premium_max: 20000000,  carriers: ['Nordic Global Re'],                                          strategy: 'Single carrier',             timeout_ms: 4000, fallback: 'Decline',             enabled: true },
  { id: 'RR-05', app: 'Aon-Global-Hub',           name: 'Cyber · SME',                       lob: 'Cyber',               state_in: ['Any'],         premium_min: 50000,    premium_max: 1000000,   carriers: ["Syndicate 4488 — Lloyd's"],                                   strategy: 'Single carrier',             timeout_ms: 3000, fallback: 'Decline',             enabled: true },
  { id: 'RR-06', app: 'BP-Aggregator-Prod',       name: 'SME package · multi-line',          lob: 'Commercial Property', state_in: ['Any'],         premium_min: 25000,    premium_max: 500000,    carriers: ['Summit Fronting Re','Meridian Specialty','Pacific Paper Group','Harbor Program Partners'], strategy: 'Parallel fan-out · return top 3 by price', timeout_ms: 5000, fallback: 'Manual review queue', enabled: true },
  { id: 'RR-07', app: 'NestLease-Embedded',       name: 'Homeowners · embedded',             lob: 'Homeowners',          state_in: ['CA','TX','FL','NY'], premium_min: 500, premium_max: 10000,  carriers: ['Summit Fronting Re','Heritage Property MGA'],                 strategy: 'Single carrier (cheapest)',  timeout_ms: 2000, fallback: 'Decline',             enabled: true },
  { id: 'RR-08', app: 'Lockton-AppliedEpic-Prod', name: 'Surety · contract bonds',           lob: 'Surety',              state_in: ['Any'],         premium_min: 10000,    premium_max: 2000000,   carriers: ['Atlas Surety'],                                               strategy: 'Single carrier',             timeout_ms: 3000, fallback: 'Decline',             enabled: false }
];

export const synapiTransactions = [
  { id: 'TX-889142', ts: '2026-04-20 14:22:11', app: 'Lockton-AppliedEpic-Prod', direction: 'out', method: 'POST', endpoint: '/v1/synapi/quote', target: 'Multi-fan-out (RR-01)', status: 200, latency_ms: 2840, bytes: 24580, error: null,             scenario: 'Commercial Property · Kroger Real Estate · $42M TIV · 3 carrier responses' },
  { id: 'TX-889141', ts: '2026-04-20 14:22:08', app: 'Lockton-AppliedEpic-Prod', direction: 'out', method: 'POST', endpoint: '/v1/carriers/summit/quote/commercial-property', target: 'Summit Fronting Re', status: 200, latency_ms: 680,  bytes: 8420,  error: null,             scenario: '—' },
  { id: 'TX-889140', ts: '2026-04-20 14:22:08', app: 'Lockton-AppliedEpic-Prod', direction: 'out', method: 'POST', endpoint: '/v1/mgas/meridian/quote', target: 'Meridian Specialty', status: 200, latency_ms: 580,  bytes: 8120,  error: null,             scenario: '—' },
  { id: 'TX-889139', ts: '2026-04-20 14:22:08', app: 'Lockton-AppliedEpic-Prod', direction: 'out', method: 'POST', endpoint: '/v1/carriers/nordic/quote/aviation', target: 'Nordic Global Re', status: 504, latency_ms: 4000, bytes: 0,     error: 'Gateway timeout', scenario: '—' },
  { id: 'TX-889138', ts: '2026-04-20 14:18:02', app: 'Marsh-Vertafore-Prod',     direction: 'out', method: 'POST', endpoint: '/v1/synapi/bind',   target: 'Summit Fronting Re', status: 201, latency_ms: 1240, bytes: 12800, error: null,             scenario: 'Bind · POL-2026-0421 · $284,000' },
  { id: 'TX-889137', ts: '2026-04-20 14:15:47', app: 'Lockton-AppliedEpic-Prod', direction: 'in',  method: 'POST', endpoint: 'webhook:policy.bound', target: 'Lockton AMS', status: 200, latency_ms: 240, bytes: 4120, error: null,         scenario: 'Event fanout · POL-2026-0421' },
  { id: 'TX-889136', ts: '2026-04-20 14:12:19', app: 'NestLease-Embedded',      direction: 'out', method: 'POST', endpoint: '/v1/synapi/quote',  target: 'Summit Fronting Re', status: 200, latency_ms: 820, bytes: 4200,  error: null,             scenario: 'Homeowners · embedded at lease signing' },
  { id: 'TX-889135', ts: '2026-04-20 14:10:08', app: 'Aon-Global-Hub',           direction: 'out', method: 'POST', endpoint: '/v1/carriers/lloyds-4488/quote/cyber', target: "Syndicate 4488 — Lloyd's", status: 200, latency_ms: 1140, bytes: 6800, error: null,         scenario: 'Cyber SME · $2M limit' },
  { id: 'TX-889134', ts: '2026-04-20 14:08:44', app: 'Marsh-Vertafore-Prod',     direction: 'out', method: 'POST', endpoint: '/v1/carriers/summit/fnol', target: 'Summit Fronting Re', status: 201, latency_ms: 380, bytes: 2400, error: null,         scenario: 'FNOL · CLM-2026-0129' },
  { id: 'TX-889133', ts: '2026-04-20 14:05:22', app: 'BP-Aggregator-Prod',      direction: 'out', method: 'POST', endpoint: '/v1/synapi/quote',  target: 'Multi-fan-out (RR-06)', status: 200, latency_ms: 3280, bytes: 28400, error: null,             scenario: 'SME package · 4 carrier responses · top 3 returned' },
  { id: 'TX-889132', ts: '2026-04-20 14:02:01', app: 'WTW-Connect',              direction: 'out', method: 'POST', endpoint: '/v1/carriers/pacific/quote/wc', target: 'Pacific Paper Group', status: 200, latency_ms: 740, bytes: 7200, error: null,   scenario: 'WC · hospitality chain · CA' },
  { id: 'TX-889131', ts: '2026-04-20 13:58:14', app: 'Lockton-AppliedEpic-Prod', direction: 'out', method: 'GET',  endpoint: '/v1/carriers/summit/policy/POL-2026-0421/declarations', target: 'Summit Fronting Re', status: 200, latency_ms: 140, bytes: 2100, error: null, scenario: 'Declarations PDF retrieval' },
  { id: 'TX-889130', ts: '2026-04-20 13:55:02', app: 'Marsh-Vertafore-Prod',     direction: 'out', method: 'POST', endpoint: '/v1/mgas/northstar/quote/trucking', target: 'Northstar MGA', status: 400, latency_ms: 120, bytes: 340, error: 'Invalid DOT number format', scenario: 'Validation failure on DOT number' },
  { id: 'TX-889129', ts: '2026-04-20 13:52:44', app: 'FleetForward-Telematics',  direction: 'out', method: 'POST', endpoint: '/v1/mgas/northstar/quote/trucking', target: 'Northstar MGA', status: 200, latency_ms: 810, bytes: 5200, error: null,         scenario: 'Telematics-scored fleet · 180 units' },
  { id: 'TX-889128', ts: '2026-04-20 13:50:18', app: 'Lockton-AppliedEpic-Prod', direction: 'out', method: 'POST', endpoint: '/v1/mgas/atlas/quote/surety', target: 'Atlas Surety', status: 200, latency_ms: 520, bytes: 3200, error: null,         scenario: 'Contract bond · contractor' },
  { id: 'TX-889127', ts: '2026-04-20 13:48:02', app: 'Marsh-Vertafore-Prod',     direction: 'out', method: 'POST', endpoint: '/v1/mgas/meridian/endorsement', target: 'Meridian Specialty', status: 200, latency_ms: 520, bytes: 4200, error: null,         scenario: 'Endorsement · add insured' },
  { id: 'TX-889126', ts: '2026-04-20 13:45:33', app: 'Aon-Global-Hub',           direction: 'in',  method: 'POST', endpoint: 'webhook:endorsement.approved', target: 'Aon-Global-Hub', status: 200, latency_ms: 180, bytes: 3200, error: null, scenario: 'Event fanout · END-2026-0080' },
  { id: 'TX-889125', ts: '2026-04-20 13:42:14', app: 'BP-Aggregator-Prod',      direction: 'out', method: 'POST', endpoint: '/v1/reinsurers/gateway/quote/fac', target: 'Gateway Re', status: 200, latency_ms: 1480, bytes: 9800, error: null,         scenario: 'Facultative reinsurance quote · coastal' }
];

export const synapiWebhooks = [
  { id: 'WH-01', app: 'Marsh-Vertafore-Prod',     event: 'policy.bound',        url: 'https://api.marsh.internal/synapi/events',      last_delivery: '2026-04-20 14:15:47', success_rate: '99.8%', retries: 0 },
  { id: 'WH-02', app: 'Marsh-Vertafore-Prod',     event: 'endorsement.approved',url: 'https://api.marsh.internal/synapi/events',      last_delivery: '2026-04-20 13:45:33', success_rate: '99.7%', retries: 1 },
  { id: 'WH-03', app: 'Aon-Global-Hub',           event: 'policy.bound',        url: 'https://hub.aon.com/insurance/events',          last_delivery: '2026-04-20 14:15:47', success_rate: '99.9%', retries: 0 },
  { id: 'WH-04', app: 'Aon-Global-Hub',           event: 'claim.fnol',          url: 'https://hub.aon.com/insurance/events',          last_delivery: '2026-04-20 14:08:44', success_rate: '99.5%', retries: 2 },
  { id: 'WH-05', app: 'Lockton-AppliedEpic-Prod', event: 'policy.bound',        url: 'https://ams.lockton.internal/webhooks/synapi',  last_delivery: '2026-04-20 14:15:47', success_rate: '98.2%', retries: 3 },
  { id: 'WH-06', app: 'BP-Aggregator-Prod',      event: 'quote.ready',         url: 'https://exchange.boldpenguin.com/hooks/synapi',last_delivery: '2026-04-20 13:42:14', success_rate: '99.6%', retries: 1 }
];

export const synapiAcordSchemas = [
  { id: 'NGDS-CP-v1.2',    family: 'NGDS', lob: 'Commercial Property',     version: '1.2', published: '2025-11-01', consumers: 12, diff_to_prev: 'Added windMitigation{} object; optional buildingCodePlus{}', format: 'JSON' },
  { id: 'NGDS-CP-v1.1',    family: 'NGDS', lob: 'Commercial Property',     version: '1.1', published: '2025-03-15', consumers: 3,  diff_to_prev: 'Previous baseline',                                            format: 'JSON' },
  { id: 'NGDS-WC-v1.1',    family: 'NGDS', lob: 'Workers Compensation',    version: '1.1', published: '2025-09-20', consumers: 8,  diff_to_prev: 'Added classCodes[] array with NCCI mappings',                  format: 'JSON' },
  { id: 'NGDS-CY-v1.0',    family: 'NGDS', lob: 'Cyber',                   version: '1.0', published: '2025-06-10', consumers: 6,  diff_to_prev: 'Initial release',                                              format: 'JSON' },
  { id: 'NGDS-AV-v1.0',    family: 'NGDS', lob: 'Aviation',                version: '1.0', published: '2025-05-01', consumers: 2,  diff_to_prev: 'Initial release',                                              format: 'JSON' },
  { id: 'NGDS-TR-v1.0',    family: 'NGDS', lob: 'Transportation',          version: '1.0', published: '2025-04-15', consumers: 4,  diff_to_prev: 'Initial release',                                              format: 'JSON' },
  { id: 'NGDS-SU-v1.0',    family: 'NGDS', lob: 'Surety',                  version: '1.0', published: '2025-08-01', consumers: 2,  diff_to_prev: 'Initial release',                                              format: 'JSON' },
  { id: 'NGDS-CLM-v1.0',   family: 'NGDS', lob: 'All LOBs · Claims',        version: '1.0', published: '2025-07-01', consumers: 9,  diff_to_prev: 'Initial release',                                              format: 'JSON' },
  { id: 'NGDS-POL-v1.1',   family: 'NGDS', lob: 'All LOBs · Policy',        version: '1.1', published: '2025-10-01', consumers: 10, diff_to_prev: 'Added endorsement delta object',                                format: 'JSON' },
  { id: 'NGDS-DOC-v1.0',   family: 'NGDS', lob: 'Documents',               version: '1.0', published: '2025-05-20', consumers: 11, diff_to_prev: 'Initial release',                                              format: 'JSON' },
  { id: 'NGDS-RE-v1.0',    family: 'NGDS', lob: 'Reinsurance',             version: '1.0', published: '2025-09-01', consumers: 3,  diff_to_prev: 'Initial release',                                              format: 'JSON' },
  { id: 'AL3-BDX-2019',    family: 'AL3',  lob: 'Bordereau (Premium)',      version: '2019', published: '2019-01-01', consumers: 7,  diff_to_prev: 'Legacy format · still required by some reinsurers',           format: 'XML' },
  { id: 'AL3-RE-BDX-2020', family: 'AL3',  lob: 'Bordereau (Reinsurance)',  version: '2020', published: '2020-06-15', consumers: 4,  diff_to_prev: 'Legacy format · reinsurer-standard',                          format: 'XML' }
];

export const synapiIncidents = [
  { id: 'INC-2026-042', started: '2026-04-19 16:42', resolved: '2026-04-19 17:18', duration_min: 36,  severity: 'P2', scope: 'Nordic Global Re · Aviation quote endpoint',   summary: 'Elevated p95 latency — upstream carrier timeout', status: 'Resolved',    sla_credit_triggered: true },
  { id: 'INC-2026-041', started: '2026-04-14 09:02', resolved: '2026-04-14 09:14', duration_min: 12,  severity: 'P3', scope: 'Webhooks · Marsh delivery',                     summary: 'Temporary DNS resolution failure for subscriber', status: 'Resolved',    sla_credit_triggered: false },
  { id: 'INC-2026-040', started: '2026-04-02 11:22', resolved: '2026-04-02 13:08', duration_min: 106, severity: 'P1', scope: 'Platform-wide · OAuth token refresh',           summary: 'Token rotation rollout introduced regression',     status: 'Resolved',    sla_credit_triggered: true  },
  { id: 'INC-2026-045', started: '2026-04-20 13:58', resolved: null,               duration_min: null,severity: 'P3', scope: 'Northstar MGA · 4xx validation rate spike',     summary: 'Investigating elevated 400s on trucking endpoint', status: 'Investigating', sla_credit_triggered: false }
];

export const synapiSla = [
  { tier: 'Enterprise', uptime_target: '99.99%', uptime_ytd: '99.987%', credit_rate: '10% per 0.1% miss', breach: false, partners: 4 },
  { tier: 'Scale',      uptime_target: '99.95%', uptime_ytd: '99.962%', credit_rate: '5% per 0.1% miss',  breach: false, partners: 6 },
  { tier: 'Pro',        uptime_target: '99.9%',  uptime_ytd: '99.94%',  credit_rate: '2% per 0.1% miss',  breach: false, partners: 8 },
  { tier: 'Starter',    uptime_target: '99.5%',  uptime_ytd: '99.82%',  credit_rate: 'Best effort',       breach: false, partners: 2 }
];

export const synapiBillingPlans = [
  { name: 'Starter',    price: '$500/mo',      included_calls: '25k / mo',   overage: '$0.01 / call',   support: 'Community',       sla: '99.5%',  seats: '3',   sandbox: true },
  { name: 'Pro',        price: '$2,500/mo',    included_calls: '250k / mo',  overage: '$0.006 / call',  support: 'Email',           sla: '99.9%',  seats: '10',  sandbox: true },
  { name: 'Scale',      price: '$8,000/mo',    included_calls: '1.5M / mo',  overage: '$0.004 / call',  support: 'Priority',        sla: '99.95%', seats: '25',  sandbox: true },
  { name: 'Enterprise', price: 'Custom',       included_calls: 'Unlimited',  overage: 'Included',       support: 'Dedicated CSM',   sla: '99.99%', seats: 'Custom', sandbox: true }
];

export const synapiInvoices = [
  { id: 'INV-2026-04-LOCK',   partner: 'Lockton Companies',   period: 'Apr 2026', calls: '1,420,000', amount: '$10,250.00', status: 'Paid' },
  { id: 'INV-2026-04-MARSH',  partner: 'Marsh & McLennan',    period: 'Apr 2026', calls: '2,340,000', amount: '$14,800.00', status: 'Paid' },
  { id: 'INV-2026-04-AON',    partner: 'Aon plc',             period: 'Apr 2026', calls: '1,680,000', amount: '$11,200.00', status: 'Issued' },
  { id: 'INV-2026-04-WTW',    partner: 'Willis Towers Watson',period: 'Apr 2026', calls: '980,000',   amount: '$7,280.00',  status: 'Issued' },
  { id: 'INV-2026-04-BP',     partner: 'BoldPenguin Exchange',period: 'Apr 2026', calls: '620,000',   amount: '$5,880.00',  status: 'Paid' },
  { id: 'INV-2026-04-NEST',   partner: 'NestLease',           period: 'Apr 2026', calls: '480,000',   amount: '$4,380.00',  status: 'Paid' }
];

export const synapiAuditLog = [
  { ts: '2026-04-20 14:22:11', actor: 'Jordan Park (Lockton)',   action: 'API call · /v1/synapi/quote',           target: 'TX-889142', ip: '10.22.4.12',  pii_accessed: true  },
  { ts: '2026-04-20 14:18:02', actor: 'Marsh-Vertafore-Prod',    action: 'API call · /v1/synapi/bind',            target: 'TX-889138', ip: '10.44.8.18',  pii_accessed: true  },
  { ts: '2026-04-20 14:15:47', actor: 'Synapi webhook delivery', action: 'Webhook dispatched · policy.bound',     target: 'WH-01, WH-03, WH-05', ip: 'internal', pii_accessed: false },
  { ts: '2026-04-20 13:48:02', actor: 'Alex Chen (Summit)',      action: 'Endpoint published · v1.3 draft',       target: 'API-001',   ip: '10.2.4.12',   pii_accessed: false },
  { ts: '2026-04-20 13:22:18', actor: 'Casey Wu (Platform)',     action: 'Partner approved · production access', target: 'P-031',     ip: '10.99.1.4',   pii_accessed: false },
  { ts: '2026-04-20 12:08:44', actor: 'Helen Becker (Compliance)',action: 'Audit export · Q1 market conduct',     target: 'EXP-2026-14', ip: '10.99.2.18',  pii_accessed: true  },
  { ts: '2026-04-20 11:42:01', actor: 'Ravi Nair (Lockton)',     action: 'Key rotated · Lockton-AppliedEpic-Prod',target: 'APP-001',   ip: '10.22.4.18',  pii_accessed: false },
  { ts: '2026-04-20 10:04:02', actor: 'Morgan Lee (Synapi)',     action: 'Changelog published · v1.2 NGDS-CP',    target: 'NGDS-CP-v1.2',ip: '10.99.3.8',  pii_accessed: false },
  { ts: '2026-04-20 09:22:33', actor: 'Dana Robinson (Synapi)',  action: 'Partner request · FleetForward prod',  target: 'PREQ-018',  ip: '10.99.4.2',   pii_accessed: false },
  { ts: '2026-04-20 08:14:02', actor: 'Riley Okafor (Synapi)',   action: 'Incident opened · INC-2026-045',        target: 'INC-2026-045', ip: '10.99.5.14', pii_accessed: false }
];

export const synapiPartnerRequests = [
  { id: 'PREQ-018', partner: 'FleetForward', type: 'Production access',        requested: '2026-04-20', approver: 'Casey Wu',    scope: 'quote:read',              status: 'Approved',  note: 'Telematics use case validated in sandbox · 3.2k calls/month' },
  { id: 'PREQ-017', partner: 'FleetForward', type: 'Scope expansion',          requested: '2026-04-18', approver: 'Casey Wu',    scope: 'bind:write',              status: 'Under review', note: 'Pending legal review of bind scope for telematics partner' },
  { id: 'PREQ-016', partner: 'BoldPenguin',  type: 'Rate-limit increase',     requested: '2026-04-15', approver: 'Alex Chen (Summit)', scope: '200→500 rpm on Summit CP quote', status: 'Approved',  note: 'Peak volume during storm season' },
  { id: 'PREQ-015', partner: 'NestLease',    type: 'New LOB · Homeowners',    requested: '2026-04-10', approver: 'Casey Wu',    scope: 'homeowners:quote',        status: 'Approved',  note: 'Partner with Heritage Property MGA' },
  { id: 'PREQ-014', partner: 'NewPartner Co',type: 'Sandbox access',          requested: '2026-04-08', approver: 'Dana Robinson',scope: 'quote:read (sandbox)',   status: 'Under review', note: 'Evaluating for insurtech startup' },
  { id: 'PREQ-013', partner: 'Marsh',        type: 'Webhook endpoint add',    requested: '2026-04-04', approver: 'Casey Wu',    scope: 'claim.fnol webhook',       status: 'Approved',  note: 'Routed to Aon-Global-Hub' }
];

export const synapiChangelog = [
  { date: '2026-04-20', type: 'Schema',       title: 'NGDS-CP v1.2 published',            scope: 'Commercial Property',       summary: 'Added windMitigation{} object and optional buildingCodePlus{} field.' },
  { date: '2026-04-18', type: 'Endpoint',     title: 'Summit · v1.3 draft in sandbox',    scope: 'Summit Fronting Re',        summary: 'New facultative-reinsurance endpoint opens for beta partners.' },
  { date: '2026-04-15', type: 'SLA',          title: 'Enterprise uptime target raised',    scope: 'Enterprise tier',            summary: 'Uptime commitment moved from 99.95% to 99.99% with stricter credit schedule.' },
  { date: '2026-04-10', type: 'Deprecation',  title: 'v1 Meridian quote sunset — 90 days', scope: 'Meridian Specialty',        summary: 'v1 will return 410 Gone from 2026-07-10. Consumers must migrate to v2.' },
  { date: '2026-04-05', type: 'Feature',      title: 'Routing rules visual editor',        scope: 'Consumer portal',            summary: 'No-code rule builder now available for all Scale and Enterprise consumers.' },
  { date: '2026-03-22', type: 'Incident',     title: 'P1 token refresh regression · resolved', scope: 'Platform-wide',         summary: 'INC-2026-040 RCA published. SLA credits applied to affected partners.' },
  { date: '2026-03-15', type: 'Integration',  title: 'Datadog exporter GA',                 scope: 'Observability',              summary: 'Stream metrics directly to your Datadog workspace.' },
  { date: '2026-03-01', type: 'Schema',       title: 'NGDS-WC v1.1 published',              scope: 'Workers Compensation',       summary: 'Added NCCI class codes array. Backwards-compatible.' },
  { date: '2026-02-18', type: 'Feature',      title: 'OpenAPI spec download',              scope: 'Publisher portal',           summary: 'Publishers can now export OpenAPI 3.1 YAML for each endpoint.' },
  { date: '2026-02-10', type: 'Partner',      title: 'BoldPenguin Exchange integrated',    scope: 'Aggregators',                summary: 'Synapi now federates BoldPenguin routing for SME submissions.' }
];

export const synapiIntegrations = [
  { name: 'ACORD NGDS',            purpose: 'JSON canonical schemas',         status: 'Connected',    since: '2024-09-01' },
  { name: 'ACORD AL3',              purpose: 'Legacy XML batch (reinsurance)', status: 'Connected',    since: '2024-09-01' },
  { name: 'SERFF (NAIC)',           purpose: 'Rate & form filings relay',      status: 'Connected',    since: '2024-11-01' },
  { name: 'NIPR',                   purpose: 'Producer license lookup',        status: 'Connected',    since: '2024-10-15' },
  { name: 'ISO ERC',                purpose: 'Loss costs · forms',             status: 'Connected',    since: '2024-10-22' },
  { name: 'RMS / AIR',              purpose: 'CAT modeling feeds',              status: 'Connected',    since: '2025-01-10' },
  { name: 'Stripe',                 purpose: 'Metering · invoicing',           status: 'Connected',    since: '2024-09-01' },
  { name: 'Okta',                   purpose: 'Partner SSO',                     status: 'Connected',    since: '2024-10-01' },
  { name: 'Microsoft Entra',        purpose: 'Partner SSO (alt)',               status: 'Connected',    since: '2024-11-15' },
  { name: 'Datadog',                purpose: 'Observability export',           status: 'Connected',    since: '2026-03-15' },
  { name: 'New Relic',              purpose: 'Observability export (alt)',     status: 'Pending',      since: null },
  { name: 'SendGrid',               purpose: 'Email · webhook fallback',       status: 'Connected',    since: '2024-10-01' },
  { name: 'Twilio',                 purpose: 'SMS · voice OTP',                status: 'Connected',    since: '2024-11-01' },
  { name: 'Drata',                  purpose: 'SOC2 evidence collection',       status: 'Connected',    since: '2025-01-01' },
  { name: 'AWS KMS',                purpose: 'PII encryption · key mgmt',      status: 'Connected',    since: '2024-09-01' },
  { name: 'Applied Epic connector', purpose: 'AMS integration (broker-side)',  status: 'Connected',    since: '2024-10-20' },
  { name: 'Vertafore connector',    purpose: 'AMS integration (broker-side)',  status: 'Connected',    since: '2024-11-05' },
  { name: 'Hawksoft connector',     purpose: 'AMS integration (broker-side)',  status: 'Pending',      since: null },
  { name: 'EZLynx connector',       purpose: 'AMS integration (broker-side)',  status: 'Pending',      since: null }
];

export const synapiDashboardKPIs = {
  admin: [
    { label: 'Calls / day (avg)',   value: '1.24M' },
    { label: 'p95 latency',         value: '820 ms' },
    { label: 'Error rate 30d',       value: '0.38%' },
    { label: 'Active partners',      value: '17' },
    { label: 'Uptime YTD',           value: '99.98%' },
    { label: 'MRR',                  value: '$186k' }
  ],
  publisher: [
    { label: 'My calls / day',       value: '142k' },
    { label: 'p95 latency',           value: '680 ms' },
    { label: 'Error rate 30d',        value: '0.4%' },
    { label: 'Top consumer',          value: 'Lockton' },
    { label: 'Revenue YTD',           value: '$428k' },
    { label: 'Pending requests',      value: '2', warning: true }
  ],
  consumer: [
    { label: 'My calls / day',       value: '68k' },
    { label: 'Bind ratio',           value: '34%' },
    { label: 'Error rate 30d',       value: '0.6%' },
    { label: 'Active apps',           value: '2' },
    { label: 'MTD spend',            value: '$10,250' },
    { label: 'SLA attainment',       value: '99.96%' }
  ],
  compliance: [
    { label: 'Audit events 30d',     value: '42,800' },
    { label: 'PII accesses',         value: '12,640' },
    { label: 'Open findings',        value: '2', warning: true },
    { label: 'Reports pending',      value: '1' },
    { label: 'Data residency OK',    value: 'Yes' },
    { label: 'SOC2 last evidence',   value: '2026-03-31' }
  ]
};

// ════════════════════════════════════════════════════════════════
// CEDE PORTAL — Carrier ↔ MGA Capacity Bridge (7th portal)
// ════════════════════════════════════════════════════════════════

export const CEDE_USERS = {
  carrier:  { name: 'Helena Park',    role: 'Program Manager',           company: 'Summit Fronting Re',          avatar: 'HP' },
  mga:      { name: 'David Ortiz',    role: 'MGA Founder / CEO',         company: 'Meridian Specialty MGA',      avatar: 'DO' },
  broker:   { name: 'Priya Shah',     role: 'Program Solutions Director',company: 'Gallagher Re',                avatar: 'PS' },
  admin:    { name: 'Noa Bergman',    role: 'Platform Operations',       company: 'Cede Platform',               avatar: 'NB' }
};

export const cedeDashboardKPIs = {
  carrier: [
    { label: 'Active programs',      value: '18' },
    { label: 'MGA-produced GWP',     value: '$412M' },
    { label: 'Trailing LR',          value: '58.3%' },
    { label: 'UW-compliance score',  value: '96.2%' },
    { label: 'Bordereau on-time',    value: '94%' },
    { label: 'Pending activations',  value: '3' }
  ],
  mga: [
    { label: 'Active carriers',      value: '4' },
    { label: 'Capacity deployed',    value: '$185M' },
    { label: 'Profit commission YTD',value: '$2.42M' },
    { label: 'Your trailing LR',     value: '55.8%' },
    { label: 'Matrix compliance',    value: '98.1%' },
    { label: 'Days to renewal',      value: '67' }
  ],
  broker: [
    { label: 'Open mandates',        value: '11' },
    { label: 'BoR fees YTD',         value: '$1.86M' },
    { label: 'Avg placement time',   value: '83 days' },
    { label: 'Mandates won YTD',     value: '9' },
    { label: 'Pipeline value',       value: '$72M' },
    { label: 'Conversion',           value: '64%' }
  ],
  admin: [
    { label: 'Carriers on platform', value: '32' },
    { label: 'MGAs on platform',     value: '148' },
    { label: 'Mandates in flight',   value: '47' },
    { label: 'Platform GWP routed',  value: '$2.9B' },
    { label: 'Disputes open',        value: '1', warning: true },
    { label: 'SOC2 evidence ready',  value: '100%' }
  ]
};

export const cedeCarriers = [
  { id: 'CR-01', name: 'State National',      domicile: 'TX', ambest: 'A (Excellent)', model: 'Pure fronting',    fronting_fee_pct: 5.5, admitted_states: 50, partners: 38, gwp_2024_usd: '4.1B',  status: 'Active',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 0    },
  { id: 'CR-02', name: 'Accelerant',           domicile: 'DE', ambest: 'A- (Excellent)', model: 'Risk exchange',   fronting_fee_pct: 6.2, admitted_states: 50, partners: 232,gwp_2024_usd: '4.19B', status: 'Active',  collateral_std: 'Reg 114 trust + RCPs',                retained_risk_pct: 12   },
  { id: 'CR-03', name: 'Sutton National',      domicile: 'OK', ambest: 'A- (Excellent)', model: 'Hybrid fronting', fronting_fee_pct: 5.8, admitted_states: 50, partners: 54, gwp_2024_usd: '1.2B',  status: 'Active',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 5    },
  { id: 'CR-04', name: 'Transverse (RSG)',     domicile: 'NJ', ambest: 'A- (Excellent)', model: 'Program writer',  fronting_fee_pct: 7.0, admitted_states: 49, partners: 41, gwp_2024_usd: '1.1B',  status: 'Active',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 10   },
  { id: 'CR-05', name: 'Clear Blue Insurance', domicile: 'TX', ambest: 'A- (Excellent)', model: 'Pure fronting',   fronting_fee_pct: 5.2, admitted_states: 50, partners: 36, gwp_2024_usd: '1.9B',  status: 'Active',  collateral_std: 'Reg 114 trust + LOC',                 retained_risk_pct: 0    },
  { id: 'CR-06', name: 'Trisura US',           domicile: 'NY', ambest: 'A- (Excellent)', model: 'Hybrid fronting', fronting_fee_pct: 6.0, admitted_states: 49, partners: 28, gwp_2024_usd: '980M',  status: 'Active',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 4    },
  { id: 'CR-07', name: 'Spinnaker (Hippo)',    domicile: 'IL', ambest: 'A- (Excellent)', model: 'Hybrid fronting', fronting_fee_pct: 6.4, admitted_states: 50, partners: 22, gwp_2024_usd: '510M',  status: 'Active',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 8    },
  { id: 'CR-08', name: 'Obsidian Insurance',   domicile: 'SC', ambest: 'A- (Excellent)', model: 'Hybrid fronting', fronting_fee_pct: 5.9, admitted_states: 50, partners: 19, gwp_2024_usd: '410M',  status: 'Active',  collateral_std: 'Reg 114 trust + LOC',                 retained_risk_pct: 6    },
  { id: 'CR-09', name: 'Summit Fronting Re',   domicile: 'DE', ambest: 'A- (Excellent)', model: 'Pure fronting',   fronting_fee_pct: 5.7, admitted_states: 50, partners: 24, gwp_2024_usd: '680M',  status: 'Active',  collateral_std: 'Reg 114 trust + G-SIB LOC',           retained_risk_pct: 0    },
  { id: 'CR-10', name: 'Everspan Insurance',   domicile: 'AZ', ambest: 'A- (Excellent)', model: 'Program writer',  fronting_fee_pct: 7.2, admitted_states: 48, partners: 15, gwp_2024_usd: '340M',  status: 'Active',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 15   },
  { id: 'CR-11', name: 'Core Specialty',       domicile: 'OH', ambest: 'A (Excellent)',  model: 'Program writer',  fronting_fee_pct: 7.5, admitted_states: 50, partners: 12, gwp_2024_usd: '780M',  status: 'Active',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 22   },
  { id: 'CR-12', name: 'Palomar Specialty',    domicile: 'OR', ambest: 'A- (Excellent)', model: 'Program writer',  fronting_fee_pct: 7.0, admitted_states: 49, partners: 9,  gwp_2024_usd: '410M',  status: 'Pending',  collateral_std: 'Reg 114 trust',                       retained_risk_pct: 20   }
];

export const cedeMGAs = [
  { id: 'MG-01', name: 'Meridian Specialty MGA',     founded: 2019, domicile: 'NY', lobs: ['E&S Casualty', 'Specialty Property'],  gwp_2024_usd: '145M', lr_5yr: 0.561, lr_3yr: 0.548, employees: 42, leadership: 'David Ortiz (CEO, ex-Chubb)', e_o_limit: '$20M/$20M', producer_states: 48, status: 'Active',     soc1: '2025-09-12', soc2: '2025-09-12' },
  { id: 'MG-02', name: 'Aurora Cyber Underwriters',  founded: 2021, domicile: 'CA', lobs: ['Cyber', 'Tech E&O'],                  gwp_2024_usd: '88M',  lr_5yr: 0.481, lr_3yr: 0.502, employees: 28, leadership: 'Amelia Walsh (CUO, ex-Beazley)', e_o_limit: '$15M/$15M', producer_states: 50, status: 'Active',     soc1: '2026-01-10', soc2: '2026-01-10' },
  { id: 'MG-03', name: 'Heartland Trucking MGA',      founded: 2017, domicile: 'TX', lobs: ['Commercial Auto — Trucking'],          gwp_2024_usd: '212M', lr_5yr: 0.712, lr_3yr: 0.685, employees: 54, leadership: 'Ray Vaughn (CEO, ex-Progressive)', e_o_limit: '$20M/$20M', producer_states: 48, status: 'Watch',      soc1: '2025-06-30', soc2: '2025-06-30' },
  { id: 'MG-04', name: 'Brookline Artisan Contractors',founded:2020, domicile: 'MA', lobs: ['Artisan Contractor GL', 'BOP'],       gwp_2024_usd: '52M',  lr_5yr: 0.593, lr_3yr: 0.577, employees: 19, leadership: 'Joanne Liu (COO, ex-CNA)',      e_o_limit: '$10M/$10M', producer_states: 14, status: 'Active',     soc1: '2025-11-30', soc2: '2025-11-30' },
  { id: 'MG-05', name: 'Pacifica Habitational Cover', founded: 2016, domicile: 'CA', lobs: ['Habitational Property', 'Dwelling'],   gwp_2024_usd: '118M', lr_5yr: 0.624, lr_3yr: 0.602, employees: 36, leadership: 'Elias Kumar (CEO, ex-Allianz)', e_o_limit: '$15M/$15M', producer_states: 22, status: 'Active',     soc1: '2026-02-20', soc2: '2026-02-20' },
  { id: 'MG-06', name: 'Greenline Cannabis Specialty',founded: 2019, domicile: 'CO', lobs: ['Cannabis GL', 'Property', 'Product'], gwp_2024_usd: '38M',  lr_5yr: 0.528, lr_3yr: 0.541, employees: 15, leadership: 'Sky Mendoza (CEO, ex-Hiscox)', e_o_limit: '$10M/$10M', producer_states: 18, status: 'Active',     soc1: '2025-10-01', soc2: '2025-10-01' },
  { id: 'MG-07', name: 'Pet Circle Underwriters',     founded: 2022, domicile: 'WA', lobs: ['Pet Insurance'],                      gwp_2024_usd: '74M',  lr_5yr: 0.648, lr_3yr: 0.629, employees: 31, leadership: 'Nadia Patel (CEO, ex-Trupanion)', e_o_limit: '$10M/$10M', producer_states: 50, status: 'Active',     soc1: '2026-03-15', soc2: '2026-03-15' },
  { id: 'MG-08', name: 'Canyon Craft Brewery MGA',    founded: 2018, domicile: 'CO', lobs: ['Craft Brewery GL', 'Product'],        gwp_2024_usd: '22M',  lr_5yr: 0.559, lr_3yr: 0.571, employees: 12, leadership: 'Mark Feldman (CEO, ex-Liberty)', e_o_limit: '$10M/$10M', producer_states: 16, status: 'Active',     soc1: '2025-08-15', soc2: '2025-08-15' },
  { id: 'MG-09', name: 'Flatiron Event Cover',        founded: 2020, domicile: 'NY', lobs: ['Special Event GL', 'Wedding Cancel'], gwp_2024_usd: '18M',  lr_5yr: 0.512, lr_3yr: 0.489, employees: 9,  leadership: 'Rachel Simons (CEO, ex-XL Catlin)', e_o_limit: '$5M/$5M',   producer_states: 41, status: 'Active',     soc1: '2025-12-01', soc2: '2025-12-01' },
  { id: 'MG-10', name: 'Thalassa Marine Underwriters',founded: 2015, domicile: 'FL', lobs: ['Hull', 'P&I', 'Marine Cargo'],        gwp_2024_usd: '96M',  lr_5yr: 0.604, lr_3yr: 0.594, employees: 33, leadership: 'Captain A. Morales (CUO)',     e_o_limit: '$20M/$20M', producer_states: 10, status: 'Active',     soc1: '2025-07-22', soc2: '2025-07-22' },
  { id: 'MG-11', name: 'Summit Alpine Resort MGA',    founded: 2017, domicile: 'CO', lobs: ['Ski Resort GL', 'Adventure Sports'],  gwp_2024_usd: '29M',  lr_5yr: 0.587, lr_3yr: 0.571, employees: 14, leadership: 'Ingrid Vestergaard (CEO)',     e_o_limit: '$10M/$10M', producer_states: 12, status: 'Active',     soc1: '2025-09-30', soc2: '2025-09-30' },
  { id: 'MG-12', name: 'Frontier Ag Hail',            founded: 2014, domicile: 'NE', lobs: ['Crop Hail', 'Parametric Weather'],    gwp_2024_usd: '142M', lr_5yr: 0.691, lr_3yr: 0.723, employees: 46, leadership: 'Hank Olsen (CEO, ex-CNA Re)',    e_o_limit: '$20M/$20M', producer_states: 19, status: 'Watch',      soc1: '2025-05-20', soc2: '2025-05-20' },
  { id: 'MG-13', name: 'Metro Mobility MGU',          founded: 2023, domicile: 'IL', lobs: ['Livery / TNC', 'Delivery Auto'],      gwp_2024_usd: '44M',  lr_5yr: 0.738, lr_3yr: 0.758, employees: 22, leadership: 'Jesse Rowan (CEO, ex-Uber)',    e_o_limit: '$15M/$15M', producer_states: 26, status: 'Under review', soc1: '—',          soc2: '—'          },
  { id: 'MG-14', name: 'Legacy E&S Casualty',         founded: 2011, domicile: 'GA', lobs: ['Excess Casualty', 'Umbrella'],        gwp_2024_usd: '168M', lr_5yr: 0.537, lr_3yr: 0.521, employees: 61, leadership: 'Carla Bennet (CEO, ex-AIG)',    e_o_limit: '$25M/$25M', producer_states: 50, status: 'Active',     soc1: '2026-02-01', soc2: '2026-02-01' },
  { id: 'MG-15', name: 'Orchard Workforce MGA',       founded: 2018, domicile: 'FL', lobs: ['Workers Comp — Agriculture'],         gwp_2024_usd: '89M',  lr_5yr: 0.672, lr_3yr: 0.639, employees: 30, leadership: 'Lucia Reyes (COO, ex-Zurich)', e_o_limit: '$15M/$15M', producer_states: 11, status: 'Active',     soc1: '2025-11-15', soc2: '2025-11-15' },
  { id: 'MG-16', name: 'Sentry Educator Liability',   founded: 2016, domicile: 'MN', lobs: ['Educator PL', 'Abuse & Molestation'], gwp_2024_usd: '34M',  lr_5yr: 0.479, lr_3yr: 0.463, employees: 17, leadership: 'P. Okonkwo (CEO, ex-Markel)',  e_o_limit: '$15M/$15M', producer_states: 40, status: 'Active',     soc1: '2025-10-20', soc2: '2025-10-20' }
];

export const cedeMandates = [
  { id: 'MD-2026-001', carrier: 'Summit Fronting Re', mga: 'Meridian Specialty MGA',   stage: 'In-force',       sub_stage: 'Monitoring',         owner_carrier: 'Helena Park',    owner_mga: 'David Ortiz',     bor_broker: 'Gallagher Re', target_close: '2024-11-15', actual_close: '2024-11-08', sla_health: 'Green',  est_premium: '$145M',  days_in_stage: 170 },
  { id: 'MD-2026-002', carrier: 'Accelerant',         mga: 'Aurora Cyber Underwriters', stage: 'In-force',       sub_stage: 'Monitoring',         owner_carrier: 'R. Chen',        owner_mga: 'Amelia Walsh',    bor_broker: 'Guy Carpenter (GC Access)', target_close: '2025-02-01', actual_close: '2025-01-22', sla_health: 'Green',  est_premium: '$88M',   days_in_stage: 95 },
  { id: 'MD-2026-003', carrier: 'State National',      mga: 'Heartland Trucking MGA',   stage: 'Run-off',        sub_stage: 'Data export',        owner_carrier: 'M. Levine',      owner_mga: 'Ray Vaughn',      bor_broker: 'Howden Re',    target_close: '2023-06-15', actual_close: '2023-05-30', sla_health: 'Amber',  est_premium: '$212M',  days_in_stage: 62  },
  { id: 'MD-2026-004', carrier: 'Clear Blue Insurance',mga: 'Brookline Artisan Contractors', stage: 'Activating',  sub_stage: 'Collateral setup',   owner_carrier: 'T. Okafor',      owner_mga: 'Joanne Liu',      bor_broker: 'Gallagher Re', target_close: '2026-05-01', actual_close: null,        sla_health: 'Green',  est_premium: '$52M',   days_in_stage: 18  },
  { id: 'MD-2026-005', carrier: 'Trisura US',          mga: 'Pacifica Habitational Cover',   stage: 'Term negotiation', sub_stage: 'Counter-offer v3',   owner_carrier: 'J. Park',        owner_mga: 'Elias Kumar',     bor_broker: 'Gallagher Re', target_close: '2026-06-15', actual_close: null,        sla_health: 'Amber',  est_premium: '$118M',  days_in_stage: 23  },
  { id: 'MD-2026-006', carrier: 'Summit Fronting Re', mga: 'Greenline Cannabis Specialty',  stage: 'DUA drafting', sub_stage: 'Clause review',      owner_carrier: 'Helena Park',    owner_mga: 'Sky Mendoza',     bor_broker: 'Gallagher Re', target_close: '2026-07-01', actual_close: null,        sla_health: 'Green',  est_premium: '$38M',   days_in_stage: 11  },
  { id: 'MD-2026-007', carrier: 'Sutton National',     mga: 'Pet Circle Underwriters',      stage: 'Due diligence',sub_stage: 'Actuarial review',   owner_carrier: 'K. Nagasawa',    owner_mga: 'Nadia Patel',     bor_broker: 'Lockton Re',   target_close: '2026-07-15', actual_close: null,        sla_health: 'Green',  est_premium: '$74M',   days_in_stage: 19  },
  { id: 'MD-2026-008', carrier: 'Obsidian Insurance',  mga: 'Canyon Craft Brewery MGA',     stage: 'Due diligence',sub_stage: 'Reference checks',   owner_carrier: 'D. Abramowitz',  owner_mga: 'Mark Feldman',    bor_broker: 'Gallagher Re', target_close: '2026-08-01', actual_close: null,        sla_health: 'Green',  est_premium: '$22M',   days_in_stage: 8   },
  { id: 'MD-2026-009', carrier: 'Accelerant',          mga: 'Flatiron Event Cover',         stage: 'Prospecting',  sub_stage: 'Mutual NDA',        owner_carrier: 'R. Chen',        owner_mga: 'Rachel Simons',   bor_broker: 'Direct',        target_close: '2026-08-15', actual_close: null,        sla_health: 'Green',  est_premium: '$18M',   days_in_stage: 4   },
  { id: 'MD-2026-010', carrier: 'Transverse (RSG)',    mga: 'Thalassa Marine Underwriters', stage: 'In-force',     sub_stage: 'Amendment pending', owner_carrier: 'E. Delacroix',    owner_mga: 'A. Morales',      bor_broker: 'Aon Re',        target_close: '2024-03-01', actual_close: '2024-02-20', sla_health: 'Amber',  est_premium: '$96M',   days_in_stage: 410 },
  { id: 'MD-2026-011', carrier: 'Everspan Insurance',  mga: 'Summit Alpine Resort MGA',     stage: 'In-force',     sub_stage: 'Monitoring',        owner_carrier: 'S. Huang',       owner_mga: 'Ingrid V.',       bor_broker: 'Gallagher Re', target_close: '2025-09-01', actual_close: '2025-08-25', sla_health: 'Green',  est_premium: '$29M',   days_in_stage: 240 },
  { id: 'MD-2026-012', carrier: 'Core Specialty',      mga: 'Frontier Ag Hail',             stage: 'In-force',     sub_stage: 'Rate-review triggered', owner_carrier: 'B. Lindstrom',owner_mga: 'Hank Olsen',     bor_broker: 'Howden Re',    target_close: '2024-01-15', actual_close: '2023-12-30', sla_health: 'Red',    est_premium: '$142M',  days_in_stage: 480 },
  { id: 'MD-2026-013', carrier: 'Spinnaker (Hippo)',   mga: 'Metro Mobility MGU',           stage: 'Term negotiation', sub_stage: 'Carrier CUO approval', owner_carrier: 'A. Yamamoto', owner_mga: 'Jesse Rowan',  bor_broker: 'Gallagher Re', target_close: '2026-06-01', actual_close: null,        sla_health: 'Red',    est_premium: '$44M',   days_in_stage: 35  },
  { id: 'MD-2026-014', carrier: 'Summit Fronting Re',  mga: 'Legacy E&S Casualty',          stage: 'Renewal',      sub_stage: 'Renewal terms',      owner_carrier: 'Helena Park',   owner_mga: 'Carla Bennet',    bor_broker: 'Gallagher Re', target_close: '2026-05-30', actual_close: null,        sla_health: 'Green',  est_premium: '$168M',  days_in_stage: 12  }
];

export const cedeAppetites = [
  { id: 'AP-01', carrier_id: 'CR-09', carrier: 'Summit Fronting Re', lob: 'E&S Casualty',       territory: 'All 50',        class_focus: 'Manufacturing, Habitational, Artisan',      per_risk_limit: '$5M/$10M', aggregate_limit: '$100M', target_lr: 0.60, commission_range: '25-30%', effective: '2026-01-01', version: 'v3' },
  { id: 'AP-02', carrier_id: 'CR-09', carrier: 'Summit Fronting Re', lob: 'Specialty Property', territory: 'CA, TX, FL, NY',class_focus: 'Habitational, Small Commercial',            per_risk_limit: '$10M TIV', aggregate_limit: '$250M', target_lr: 0.58, commission_range: '22-27%', effective: '2026-01-01', version: 'v3' },
  { id: 'AP-03', carrier_id: 'CR-02', carrier: 'Accelerant',          lob: 'Cyber',              territory: 'All 50',        class_focus: 'SMB, Middle market, Tech E&O',              per_risk_limit: '$5M/$5M',  aggregate_limit: '$150M', target_lr: 0.55, commission_range: '28-32%', effective: '2026-01-15', version: 'v2' },
  { id: 'AP-04', carrier_id: 'CR-01', carrier: 'State National',       lob: 'Commercial Auto',    territory: 'All 50',        class_focus: 'Regional trucking, Delivery fleets',        per_risk_limit: '$2M/$5M',  aggregate_limit: '$200M', target_lr: 0.68, commission_range: '18-22%', effective: '2025-09-01', version: 'v4' },
  { id: 'AP-05', carrier_id: 'CR-05', carrier: 'Clear Blue',           lob: 'Artisan Contractor GL', territory: 'Northeast + CA', class_focus: 'Electricians, Plumbers, HVAC',       per_risk_limit: '$2M/$4M',  aggregate_limit: '$80M',  target_lr: 0.62, commission_range: '24-28%', effective: '2026-03-01', version: 'v2' },
  { id: 'AP-06', carrier_id: 'CR-06', carrier: 'Trisura US',           lob: 'Habitational Property', territory: 'CA, TX, FL, AZ, CO', class_focus: 'Apartments, Condos, Mixed-use',   per_risk_limit: '$25M TIV', aggregate_limit: '$350M', target_lr: 0.60, commission_range: '22-26%', effective: '2026-04-01', version: 'v1' },
  { id: 'AP-07', carrier_id: 'CR-03', carrier: 'Sutton National',      lob: 'Pet Insurance',      territory: 'All 50',        class_focus: 'Companion animals',                          per_risk_limit: '$10K/ani', aggregate_limit: '$90M',  target_lr: 0.65, commission_range: '20-24%', effective: '2026-02-01', version: 'v2' },
  { id: 'AP-08', carrier_id: 'CR-08', carrier: 'Obsidian Insurance',   lob: 'Craft Brewery GL',   territory: 'CO, OR, WA, CA',class_focus: 'Brewpubs, Distilleries, Tap rooms',         per_risk_limit: '$2M/$4M',  aggregate_limit: '$40M',  target_lr: 0.58, commission_range: '26-30%', effective: '2026-01-01', version: 'v1' }
];

export const cedeSeekingProfiles = [
  { id: 'SK-01', mga_id: 'MG-01', mga: 'Meridian Specialty MGA',   lob: 'E&S Casualty',       target_gwp_usd: '160M', territories: 'All 50', attach: '$1M',  history_summary: '5yr LR 56.1% · 3yr LR 54.8%', team_cv_count: 18, references: ['Aon Re','Lockton Re','Sidley Austin'], capital_sought: '100%', ideal_structure: 'Pure fronting + profit commission' },
  { id: 'SK-02', mga_id: 'MG-02', mga: 'Aurora Cyber Underwriters', lob: 'Cyber',              target_gwp_usd: '110M', territories: 'All 50', attach: '$250k',history_summary: '5yr LR 48.1% · 3yr LR 50.2%', team_cv_count: 12, references: ['Guy Carpenter','Orrick','Coalition Re'], capital_sought: '100%', ideal_structure: 'Hybrid: 15% retention' },
  { id: 'SK-03', mga_id: 'MG-04', mga: 'Brookline Artisan Contractors', lob: 'Artisan Contractor GL', target_gwp_usd: '75M', territories: 'Northeast + CA',attach: '$0',  history_summary: '5yr LR 59.3% · 3yr LR 57.7%', team_cv_count: 8,  references: ['Gallagher Re','Marsh'],           capital_sought: '100%', ideal_structure: 'Pure fronting' },
  { id: 'SK-04', mga_id: 'MG-05', mga: 'Pacifica Habitational Cover',   lob: 'Habitational Property', target_gwp_usd: '140M', territories: 'CA, TX, FL, AZ', attach: '$50k',history_summary: '5yr LR 62.4% · 3yr LR 60.2%', team_cv_count: 16, references: ['Gallagher Re','Aon Re'],           capital_sought: '80%',  ideal_structure: 'Fronting + QS reinsurance' },
  { id: 'SK-05', mga_id: 'MG-06', mga: 'Greenline Cannabis Specialty',  lob: 'Cannabis GL',           target_gwp_usd: '60M',  territories: 'CO, WA, CA, OR, NV', attach: '$0',history_summary: '5yr LR 52.8% · 3yr LR 54.1%', team_cv_count: 6,  references: ['Howden Re','Goldberg Segalla'],    capital_sought: '100%', ideal_structure: 'Pure fronting + deferred commission' },
  { id: 'SK-06', mga_id: 'MG-09', mga: 'Flatiron Event Cover',          lob: 'Special Event GL',      target_gwp_usd: '25M',  territories: 'All 50', attach: '$0',  history_summary: '5yr LR 51.2% · 3yr LR 48.9%', team_cv_count: 4,  references: ['Lockton Re'],                       capital_sought: '100%', ideal_structure: 'Pure fronting' }
];

export const cedeMatches = [
  { id: 'MA-01', mandate_id: 'MD-2026-007', carrier: 'Sutton National',      mga: 'Pet Circle Underwriters',       score: 92, class_fit: 95, geo_fit: 100, size_fit: 88, commercial_fit: 85, governance_fit: 92, confidence: 'Green' },
  { id: 'MA-02', mandate_id: 'MD-2026-006', carrier: 'Summit Fronting Re',   mga: 'Greenline Cannabis Specialty',   score: 88, class_fit: 92, geo_fit: 86, size_fit: 85, commercial_fit: 90, governance_fit: 88, confidence: 'Green' },
  { id: 'MA-03', mandate_id: 'MD-2026-008', carrier: 'Obsidian Insurance',   mga: 'Canyon Craft Brewery MGA',        score: 90, class_fit: 98, geo_fit: 95, size_fit: 80, commercial_fit: 88, governance_fit: 88, confidence: 'Green' },
  { id: 'MA-04', mandate_id: 'MD-2026-009', carrier: 'Accelerant',           mga: 'Flatiron Event Cover',            score: 81, class_fit: 88, geo_fit: 100, size_fit: 70, commercial_fit: 82, governance_fit: 78, confidence: 'Amber' },
  { id: 'MA-05', mandate_id: 'MD-2026-013', carrier: 'Spinnaker (Hippo)',    mga: 'Metro Mobility MGU',              score: 68, class_fit: 75, geo_fit: 85, size_fit: 60, commercial_fit: 55, governance_fit: 62, confidence: 'Amber' },
  { id: 'MA-06', mandate_id: 'MD-2026-005', carrier: 'Trisura US',           mga: 'Pacifica Habitational Cover',     score: 86, class_fit: 92, geo_fit: 95, size_fit: 82, commercial_fit: 80, governance_fit: 80, confidence: 'Green' },
  { id: 'MA-07', mandate_id: 'MD-2026-004', carrier: 'Clear Blue Insurance', mga: 'Brookline Artisan Contractors',   score: 93, class_fit: 96, geo_fit: 100, size_fit: 88, commercial_fit: 92, governance_fit: 88, confidence: 'Green' }
];

export const cedeDDPacks = [
  { id: 'DD-01', mandate_id: 'MD-2026-007', mga: 'Pet Circle Underwriters', items_required: 48, items_received: 42, items_approved: 36, red_flags: 1, overall_score: 86, reviewers: ['UW: K. Nagasawa','Legal: S. Bernstein','Actuary: R. Tanaka','Compliance: M. Holst'], status: 'In review',  due: '2026-06-01' },
  { id: 'DD-02', mandate_id: 'MD-2026-008', mga: 'Canyon Craft Brewery MGA', items_required: 44, items_received: 38, items_approved: 24, red_flags: 0, overall_score: 80, reviewers: ['UW: D. Abramowitz','Legal: J. Park','Actuary: T. Kline','Compliance: L. Nair'], status: 'In review', due: '2026-06-10' },
  { id: 'DD-03', mandate_id: 'MD-2026-006', mga: 'Greenline Cannabis Specialty', items_required: 52, items_received: 50, items_approved: 46, red_flags: 2, overall_score: 83, reviewers: ['UW: Helena Park','Legal: A. Chen','Actuary: S. Rehman','Compliance: N. Olsen'], status: 'Approved',  due: '2026-04-15' },
  { id: 'DD-04', mandate_id: 'MD-2026-009', mga: 'Flatiron Event Cover',   items_required: 40, items_received: 22, items_approved: 0,  red_flags: 0, overall_score: null, reviewers: ['UW: R. Chen','Legal: J. Park'], status: 'Collecting', due: '2026-06-30' }
];

export const cedeDDChecklist = [
  { id: 'CK-01', category: 'Financial',     item: '3-year audited financial statements',         required: true, status: 'Received',  reviewer: 'Actuary',   score: 9, confidence: 'Green', notes: 'Deloitte audit, clean opinion' },
  { id: 'CK-02', category: 'Financial',     item: 'Monthly management accounts (trailing 12)',    required: true, status: 'Received',  reviewer: 'Actuary',   score: 8, confidence: 'Green', notes: 'Complete' },
  { id: 'CK-03', category: 'Licensing',     item: 'Producer licenses by state (NIPR verified)',   required: true, status: 'Verified',  reviewer: 'Compliance',score: 10,confidence: 'Green', notes: 'All 50 states active' },
  { id: 'CK-04', category: 'Licensing',     item: 'MGA contract filings (per state)',             required: true, status: 'Received',  reviewer: 'Compliance',score: 9, confidence: 'Green', notes: 'NY Reg 120 — pending' },
  { id: 'CK-05', category: 'Governance',    item: 'UW leadership CVs',                            required: true, status: 'Received',  reviewer: 'UW',        score: 9, confidence: 'Green', notes: '18 CVs, avg 14 yrs tenure' },
  { id: 'CK-06', category: 'Governance',    item: 'E&O certificate + limits',                      required: true, status: 'Received',  reviewer: 'Compliance',score: 10,confidence: 'Green', notes: '$20M/$20M Liberty' },
  { id: 'CK-07', category: 'Governance',    item: 'SOC-1 Type II report (annual)',                 required: true, status: 'Received',  reviewer: 'Compliance',score: 9, confidence: 'Green', notes: '2025-09-12, no material findings' },
  { id: 'CK-08', category: 'Governance',    item: 'SOC-2 Type II report (annual)',                 required: true, status: 'Received',  reviewer: 'Compliance',score: 9, confidence: 'Green', notes: '2025-09-12, clean' },
  { id: 'CK-09', category: 'Underwriting',  item: 'UW guidelines (current)',                       required: true, status: 'Received',  reviewer: 'UW',        score: 8, confidence: 'Green', notes: 'Machine-readable v3' },
  { id: 'CK-10', category: 'Underwriting',  item: 'Sample binders (10 per class)',                 required: true, status: 'Received',  reviewer: 'UW',        score: 8, confidence: 'Amber', notes: 'Manual rate deviations in 3 samples' },
  { id: 'CK-11', category: 'Underwriting',  item: 'Rating algorithm documentation',                required: true, status: 'Received',  reviewer: 'Actuary',   score: 8, confidence: 'Green', notes: 'Docs complete' },
  { id: 'CK-12', category: 'Loss history',  item: '5-year loss runs by class',                     required: true, status: 'Received',  reviewer: 'Actuary',   score: 9, confidence: 'Green', notes: 'No material deterioration' },
  { id: 'CK-13', category: 'Loss history',  item: 'Reserve development triangles',                 required: true, status: 'Received',  reviewer: 'Actuary',   score: 8, confidence: 'Green', notes: 'Normal development' },
  { id: 'CK-14', category: 'Claims',        item: 'Claims handling manual',                         required: true, status: 'Received',  reviewer: 'Claims',    score: 8, confidence: 'Green', notes: 'In-house + Sedgwick overflow' },
  { id: 'CK-15', category: 'Claims',        item: 'TPA agreements (if applicable)',                 required: false,status: 'N/A',       reviewer: 'Claims',    score: 0, confidence: 'Green', notes: 'In-house' },
  { id: 'CK-16', category: 'Reinsurance',   item: 'Reinsurance panel + ratings',                    required: true, status: 'Received',  reviewer: 'UW',        score: 7, confidence: 'Amber', notes: 'One B++ carrier; flagged' },
  { id: 'CK-17', category: 'Operations',    item: 'Policy admin system audit',                      required: true, status: 'Received',  reviewer: 'UW',        score: 8, confidence: 'Green', notes: 'Duck Creek, on-prem' },
  { id: 'CK-18', category: 'Operations',    item: 'Bordereau format samples',                       required: true, status: 'Received',  reviewer: 'Compliance',score: 9, confidence: 'Green', notes: 'ACORD NGDS compliant' },
  { id: 'CK-19', category: 'Privacy',       item: 'CCPA / state privacy attestations',              required: true, status: 'Received',  reviewer: 'Compliance',score: 10,confidence: 'Green', notes: 'All states covered' },
  { id: 'CK-20', category: 'References',    item: 'Broker references (3)',                          required: true, status: 'Received',  reviewer: 'Program Mgr',score: 9,confidence: 'Green', notes: 'Strong endorsements' },
  { id: 'CK-21', category: 'References',    item: 'Legal counsel references (1)',                   required: true, status: 'Received',  reviewer: 'Legal',     score: 10,confidence: 'Green', notes: 'Sidley Austin' },
  { id: 'CK-22', category: 'References',    item: 'Prior carrier references (if any)',              required: false,status: 'N/A',       reviewer: 'Program Mgr',score: 0,confidence: 'Green', notes: 'First carrier relationship' }
];

export const cedeQAThreads = [
  { id: 'QA-01', dd_id: 'DD-01', category: 'Loss history', question: 'Can you explain the 2023 class 7471 (delivery auto) spike?', asker: 'K. Nagasawa',  asked: '2026-04-10', answer: '3-vehicle at-fault in Q3; subrogation recovered 62%. Not a pattern.', answered_by: 'N. Patel', answered: '2026-04-11', status: 'Closed' },
  { id: 'QA-02', dd_id: 'DD-01', category: 'Reinsurance',  question: 'Replace B++ reinsurer or add collateral?',                   asker: 'Helena Park',   asked: '2026-04-12', answer: 'Replacing with A- by 2026-06-01. Interim LOC secured.',                    answered_by: 'N. Patel', answered: '2026-04-13', status: 'Closed' },
  { id: 'QA-03', dd_id: 'DD-02', category: 'Underwriting', question: 'Sample binder SBR-8821 deviated from rate table — why?',      asker: 'D. Abramowitz', asked: '2026-04-15', answer: 'Schedule mod of 12% for fire-suppression sprinklers — within authority.',  answered_by: 'M. Feldman', answered: '2026-04-16', status: 'Closed' },
  { id: 'QA-04', dd_id: 'DD-02', category: 'Claims',       question: 'Large-loss 2024-0844 — coverage dispute resolved?',          asker: 'D. Abramowitz', asked: '2026-04-17', answer: 'Settled at policy limit; no bad-faith allegation pursued.',                answered_by: 'M. Feldman', answered: '2026-04-18', status: 'Closed' },
  { id: 'QA-05', dd_id: 'DD-01', category: 'Operations',   question: 'Duck Creek version and upgrade roadmap?',                     asker: 'K. Nagasawa',  asked: '2026-04-18', answer: 'On v8.3; upgrade to v10 planned Q4 2026.',                                   answered_by: 'N. Patel', answered: null,        status: 'Open' }
];

export const cedeReferences = [
  { id: 'RF-01', mga: 'Pet Circle Underwriters', type: 'Broker',   ref_name: 'Matt Rivera',    ref_org: 'Gallagher Re', contacted: '2026-04-10', response: 'Received', sentiment: 'Strong positive', key_quotes: '"Best-in-class operational discipline and UW leadership. No surprises."', score: 9 },
  { id: 'RF-02', mga: 'Pet Circle Underwriters', type: 'Reinsurer', ref_name: 'Anya Petrova',   ref_org: 'Hannover Re', contacted: '2026-04-10', response: 'Received', sentiment: 'Positive',        key_quotes: '"Bordereaux consistently on-time. LR tracking within plan."',         score: 8 },
  { id: 'RF-03', mga: 'Pet Circle Underwriters', type: 'Legal',     ref_name: 'Jennifer Klein', ref_org: 'Orrick',      contacted: '2026-04-11', response: 'Received', sentiment: 'Strong positive', key_quotes: '"Rare MGA that engages counsel early on regulatory change."',        score: 10 },
  { id: 'RF-04', mga: 'Canyon Craft Brewery MGA',type: 'Broker',   ref_name: 'Trevor Kim',     ref_org: 'Gallagher Re', contacted: '2026-04-15', response: 'Pending',  sentiment: '—',                key_quotes: '—',                                                                    score: null },
  { id: 'RF-05', mga: 'Canyon Craft Brewery MGA',type: 'Reinsurer', ref_name: 'B. Santos',     ref_org: 'Everest Re',   contacted: '2026-04-15', response: 'Received', sentiment: 'Positive',        key_quotes: '"Niche class, well managed. Expense ratio higher than average."',     score: 7 }
];

export const cedeClauses = [
  { id: 'CL-001', category: 'Grant of Authority',   title: 'Scope of delegated authority',         standard_variant: 'LMA 3113 §2.1', carrier_variant: 'Territorial limit to admitted states only', typical_usage: '100%' },
  { id: 'CL-002', category: 'Grant of Authority',   title: 'Effective & expiry dates',              standard_variant: '12-month term', carrier_variant: '12-month + auto-renew w/ 90-day opt-out', typical_usage: '78%' },
  { id: 'CL-003', category: 'UW Guidelines',        title: 'Incorporation by reference',            standard_variant: 'Current guidelines incorporated', carrier_variant: 'Change control requires written consent', typical_usage: '92%' },
  { id: 'CL-004', category: 'UW Guidelines',        title: 'Change control process',                 standard_variant: '30-day notice for material change', carrier_variant: '14-day notice + CUO sign-off', typical_usage: '61%' },
  { id: 'CL-005', category: 'Binding Authority',    title: 'Per-risk limit',                         standard_variant: 'Per-risk limit per class',   carrier_variant: 'Tiered by class with referral triggers', typical_usage: '98%' },
  { id: 'CL-006', category: 'Binding Authority',    title: 'Aggregate limit',                        standard_variant: 'Annual aggregate per program', carrier_variant: 'Quarterly monitoring + stop-loss trigger', typical_usage: '88%' },
  { id: 'CL-007', category: 'Binding Authority',    title: 'Pricing deviation authority',            standard_variant: '±10% from rate card', carrier_variant: '±15% with documented rationale', typical_usage: '72%' },
  { id: 'CL-008', category: 'Binding Authority',    title: 'Excluded risks',                          standard_variant: 'Standard LMA exclusions', carrier_variant: 'Program-specific additions (e.g., no US opioid)', typical_usage: '94%' },
  { id: 'CL-009', category: 'Premium Handling',     title: 'Fiduciary trust account',                standard_variant: 'FDIC-insured, segregated',  carrier_variant: 'Same + monthly recon to carrier treasurer', typical_usage: '100%' },
  { id: 'CL-010', category: 'Premium Handling',     title: 'Remittance cadence',                      standard_variant: '25th of following month', carrier_variant: '15th of following month', typical_usage: '45%' },
  { id: 'CL-011', category: 'Commission',           title: 'Ceding commission (flat)',                standard_variant: 'Percentage of GWP', carrier_variant: '25% flat',  typical_usage: '60%' },
  { id: 'CL-012', category: 'Commission',           title: 'Profit commission — flat',                 standard_variant: '20% of UW profit above 60% LR', carrier_variant: 'Customizable', typical_usage: '40%' },
  { id: 'CL-013', category: 'Commission',           title: 'Sliding scale commission',                  standard_variant: '1:2 ratio of commission to LR change', carrier_variant: 'Min 20% / Provisional 27% / Max 32.5%', typical_usage: '30%' },
  { id: 'CL-014', category: 'Commission',           title: 'Deferred ceding commission',                standard_variant: 'Escrow until 24mo development', carrier_variant: '36-month escrow for long-tail', typical_usage: '18%' },
  { id: 'CL-015', category: 'Commission',           title: 'Loss corridor',                             standard_variant: 'MGA absorbs 5% between 60-70% LR', carrier_variant: 'Varies by LOB', typical_usage: '25%' },
  { id: 'CL-016', category: 'Claims Authority',     title: 'Tier 1 (MGA authority)',                   standard_variant: 'Up to $100k per claim', carrier_variant: 'Varies by class: $25k–$250k', typical_usage: '100%' },
  { id: 'CL-017', category: 'Claims Authority',     title: 'Tier 2 (joint consultation)',              standard_variant: '$100k–$500k', carrier_variant: 'Carrier claims dept. consulted; MGA settles', typical_usage: '85%' },
  { id: 'CL-018', category: 'Claims Authority',     title: 'Tier 3 (carrier-only)',                    standard_variant: 'Above $500k or coverage dispute', carrier_variant: 'Carrier sole settlement authority', typical_usage: '100%' },
  { id: 'CL-019', category: 'Claims Authority',     title: 'Large-loss notification',                   standard_variant: 'Within 48 hours', carrier_variant: 'Within 24 hours for 50% of limit or fatality', typical_usage: '88%' },
  { id: 'CL-020', category: 'Claims Authority',     title: 'Defense counsel panel',                    standard_variant: 'Carrier-approved panel', carrier_variant: 'Panel + MGA-proposed alternates', typical_usage: '72%' },
  { id: 'CL-021', category: 'Reporting',            title: 'Bordereau cadence',                         standard_variant: 'Monthly', carrier_variant: 'Weekly premium + monthly claims', typical_usage: '55%' },
  { id: 'CL-022', category: 'Reporting',            title: 'Bordereau format',                          standard_variant: 'ACORD NGDS', carrier_variant: 'ACORD NGDS or Lloyd CRS v5.2', typical_usage: '62%' },
  { id: 'CL-023', category: 'Audit Rights',         title: 'UW file audit',                             standard_variant: 'Annual + for-cause', carrier_variant: '5% sample + directed sample', typical_usage: '96%' },
  { id: 'CL-024', category: 'Audit Rights',         title: 'Claims file audit',                         standard_variant: '10% sample annually', carrier_variant: 'Risk-stratified sampling', typical_usage: '94%' },
  { id: 'CL-025', category: 'Audit Rights',         title: 'SOC-1 Type II requirement',                 standard_variant: 'Annual', carrier_variant: 'Annual + material change triggers', typical_usage: '100%' },
  { id: 'CL-026', category: 'Audit Rights',         title: 'Collateral verification',                   standard_variant: 'At activation + renewal', carrier_variant: 'Quarterly + upon exposure growth 20%', typical_usage: '85%' },
  { id: 'CL-027', category: 'Collateral',           title: 'Reg 114 trust',                             standard_variant: 'US custodian bank', carrier_variant: 'Top-3 G-SIB only', typical_usage: '78%' },
  { id: 'CL-028', category: 'Collateral',           title: 'Acceptable LOC forms',                      standard_variant: 'Top-20 US/G-SIB', carrier_variant: 'Direct issuing-bank confirmation required', typical_usage: '100%' },
  { id: 'CL-029', category: 'Collateral',           title: 'Collateral maturity',                       standard_variant: '12-month minimum', carrier_variant: '18-month with 90-day renewal notice', typical_usage: '68%' },
  { id: 'CL-030', category: 'Termination',         title: 'Termination for convenience',               standard_variant: '180-day notice', carrier_variant: '90-day mutual notice', typical_usage: '55%' },
  { id: 'CL-031', category: 'Termination',         title: 'Termination for cause',                     standard_variant: 'Immediate or 30-day cure', carrier_variant: 'Enumerated cause events only', typical_usage: '92%' },
  { id: 'CL-032', category: 'Termination',         title: 'Automatic termination',                     standard_variant: 'Licensing loss, insolvency, change of control', carrier_variant: 'Plus: material SOC finding', typical_usage: '85%' },
  { id: 'CL-033', category: 'Run-off',             title: 'Run-off commission',                        standard_variant: 'Pure admin fee (5-10%)',  carrier_variant: '50% of new-business commission', typical_usage: '42%' },
  { id: 'CL-034', category: 'Run-off',             title: 'Data portability SLA',                      standard_variant: '30 days for full data pack', carrier_variant: '5 business days ACORD-canonical', typical_usage: '28%' },
  { id: 'CL-035', category: 'General',             title: 'Representations & Warranties',              standard_variant: 'Standard LMA R&W', carrier_variant: 'Plus: MGA key-person retention', typical_usage: '84%' },
  { id: 'CL-036', category: 'General',             title: 'Indemnification',                            standard_variant: 'Mutual, capped at 2x fees', carrier_variant: 'MGA uncapped for UW breach', typical_usage: '62%' },
  { id: 'CL-037', category: 'General',             title: 'E&O insurance requirement',                  standard_variant: '$10M/$10M minimum', carrier_variant: '$20M/$20M for programs > $100M GWP', typical_usage: '55%' },
  { id: 'CL-038', category: 'General',             title: 'Confidentiality',                            standard_variant: '5-year post-termination', carrier_variant: 'Perpetual for customer data', typical_usage: '91%' },
  { id: 'CL-039', category: 'General',             title: 'IP ownership of data',                        standard_variant: 'MGA retains; carrier license', carrier_variant: 'Carrier co-owner of policy data', typical_usage: '52%' },
  { id: 'CL-040', category: 'Compliance',          title: 'Anti-bribery (FCPA / UK Bribery Act)',        standard_variant: 'Standard representations', carrier_variant: 'Annual training certification', typical_usage: '96%' }
];

export const cedeBindingMatrices = [
  { id: 'BM-01', mandate_id: 'MD-2026-001', program: 'Meridian E&S Casualty',    class: 'Manufacturing',      state: 'All 50',       per_risk: '$5M/$10M',  deductible: '$5k-$50k', attach: '$0',   auto: true,  refer_above: '$4M', decline: ['Munitions','Opioids'], price_dev: '±15%', version: 'v3.1', effective: '2026-01-01' },
  { id: 'BM-02', mandate_id: 'MD-2026-001', program: 'Meridian E&S Casualty',    class: 'Habitational',       state: 'CA, TX, FL',    per_risk: '$3M/$6M',   deductible: '$5k-$25k', attach: '$0',   auto: true,  refer_above: '$2.5M', decline: ['Student housing','Section 8'], price_dev: '±10%', version: 'v3.1', effective: '2026-01-01' },
  { id: 'BM-03', mandate_id: 'MD-2026-001', program: 'Meridian E&S Casualty',    class: 'Artisan Contractor', state: 'Northeast',     per_risk: '$2M/$4M',   deductible: '$2.5k-$10k', attach: '$0', auto: true,  refer_above: '$1.5M', decline: ['Roofers','Demolition'], price_dev: '±12%', version: 'v3.1', effective: '2026-01-01' },
  { id: 'BM-04', mandate_id: 'MD-2026-002', program: 'Aurora Cyber',             class: 'SMB Cyber',          state: 'All 50',        per_risk: '$5M/$5M',   deductible: '$10k-$100k', attach: '$0', auto: true,  refer_above: '$3M',   decline: ['Crypto exchanges','Adult'], price_dev: '±20%', version: 'v2.2', effective: '2026-01-15' },
  { id: 'BM-05', mandate_id: 'MD-2026-002', program: 'Aurora Cyber',             class: 'Middle-market',      state: 'All 50',        per_risk: '$10M/$10M', deductible: '$25k-$250k', attach: '$0', auto: false, refer_above: '$5M',   decline: ['Defense primes','Nuclear'], price_dev: '±15%', version: 'v2.2', effective: '2026-01-15' },
  { id: 'BM-06', mandate_id: 'MD-2026-003', program: 'Heartland Trucking',       class: 'Regional Trucking',  state: 'All 50 ex NY,NJ',per_risk:'$2M/$5M',   deductible: '$2.5k-$25k', attach: '$0', auto: true,  refer_above: '$1.5M', decline: ['Hazmat','Interstate long-haul >1500mi'], price_dev: '±10%', version: 'v4.3', effective: '2025-09-01' },
  { id: 'BM-07', mandate_id: 'MD-2026-004', program: 'Brookline Artisan',        class: 'Electrical',         state: 'MA, CT, RI, NH',per_risk: '$2M/$4M',  deductible: '$2.5k-$10k', attach: '$0', auto: true,  refer_above: '$1.5M', decline: ['Commercial > $5M revenue'], price_dev: '±12%', version: 'v2.0', effective: '2026-03-01' },
  { id: 'BM-08', mandate_id: 'MD-2026-004', program: 'Brookline Artisan',        class: 'Plumbing',           state: 'MA, CT, RI',    per_risk: '$2M/$4M',  deductible: '$2.5k-$10k', attach: '$0', auto: true,  refer_above: '$1.5M', decline: ['Asbestos'], price_dev: '±12%', version: 'v2.0', effective: '2026-03-01' }
];

export const cedeClaimAuthorities = [
  { id: 'CA-01', mandate_id: 'MD-2026-001', tier1_limit_usd: 100000,  tier2_limit_usd: 500000, tier3_authority: 'Carrier only', notify_large_loss_hrs: 24, notify_threshold_pct: 50, defense_panel: 'Carrier-approved panel + MGA proposals',             covers_disputes: 'Tier 3 only' },
  { id: 'CA-02', mandate_id: 'MD-2026-002', tier1_limit_usd: 50000,   tier2_limit_usd: 250000, tier3_authority: 'Carrier only', notify_large_loss_hrs: 24, notify_threshold_pct: 40, defense_panel: 'Carrier panel',                                     covers_disputes: 'Tier 3 + any coverage dispute' },
  { id: 'CA-03', mandate_id: 'MD-2026-003', tier1_limit_usd: 25000,   tier2_limit_usd: 150000, tier3_authority: 'Carrier only', notify_large_loss_hrs: 24, notify_threshold_pct: 40, defense_panel: 'Carrier panel (trucking specialists)',             covers_disputes: 'Tier 2+' },
  { id: 'CA-04', mandate_id: 'MD-2026-004', tier1_limit_usd: 75000,   tier2_limit_usd: 300000, tier3_authority: 'Carrier only', notify_large_loss_hrs: 48, notify_threshold_pct: 50, defense_panel: 'Carrier panel + MGA proposals',                     covers_disputes: 'Tier 3 only' }
];

export const cedeTermSheets = [
  { id: 'TS-01', mandate_id: 'MD-2026-005', version: 'v3', status: 'Counter-offer pending', proposed_by: 'MGA',      date: '2026-04-18', ceding_comm_pct: 26, fronting_fee_pct: 6.2, profit_comm_struct: '20% above 60% LR', loss_corridor: '5% in 60-70% LR', collateral: 'Reg 114 + LOC $18M', termination_notice_days: 120, review_status: 'Carrier CUO', next_meeting: '2026-04-25' },
  { id: 'TS-02', mandate_id: 'MD-2026-005', version: 'v2', status: 'Superseded',         proposed_by: 'Carrier',   date: '2026-04-10', ceding_comm_pct: 25, fronting_fee_pct: 6.5, profit_comm_struct: '20% above 62% LR', loss_corridor: '5% in 62-72% LR', collateral: 'Reg 114 + LOC $20M', termination_notice_days: 90,  review_status: '—',               next_meeting: '—' },
  { id: 'TS-03', mandate_id: 'MD-2026-005', version: 'v1', status: 'Superseded',         proposed_by: 'Carrier',   date: '2026-04-02', ceding_comm_pct: 24, fronting_fee_pct: 7.0, profit_comm_struct: '18% above 62% LR', loss_corridor: '8% in 62-75% LR', collateral: 'Reg 114 only $25M',  termination_notice_days: 90,  review_status: '—',               next_meeting: '—' },
  { id: 'TS-04', mandate_id: 'MD-2026-013', version: 'v2', status: 'Carrier review',     proposed_by: 'Carrier',   date: '2026-04-16', ceding_comm_pct: 20, fronting_fee_pct: 7.5, profit_comm_struct: '15% above 65% LR', loss_corridor: '10% in 65-80% LR', collateral: 'Reg 114 + LOC $12M', termination_notice_days: 90, review_status: 'Pending actuarial', next_meeting: '2026-04-28' },
  { id: 'TS-05', mandate_id: 'MD-2026-014', version: 'v1', status: 'Renewal proposal',   proposed_by: 'Carrier',   date: '2026-04-15', ceding_comm_pct: 27, fronting_fee_pct: 5.8, profit_comm_struct: 'Sliding 20-30%', loss_corridor: '5% in 58-65% LR', collateral: 'Reg 114 + LOC $28M', termination_notice_days: 120, review_status: 'MGA review',  next_meeting: '2026-05-05' }
];

export const cedeAgreements = [
  { id: 'AG-01', mandate_id: 'MD-2026-001', version: '1.2', executed_date: '2024-11-08',  parties: 'Summit Fronting Re (DE) & Meridian Specialty MGA (NY)', pages: 142, clauses: 38, amendments: 2, latest_amendment: '2025-09-01', expiry: '2026-11-07', template: 'LMA 3113 + carrier precedent', storage_hash: '0x8a4b...e92f', esign_provider: 'DocuSign' },
  { id: 'AG-02', mandate_id: 'MD-2026-002', version: '1.0', executed_date: '2025-01-22',  parties: 'Accelerant (DE) & Aurora Cyber Underwriters (CA)',     pages: 98,  clauses: 36, amendments: 0, latest_amendment: null,        expiry: '2027-01-21', template: 'Accelerant Member template',     storage_hash: '0x4c12...a018', esign_provider: 'DocuSign' },
  { id: 'AG-03', mandate_id: 'MD-2026-003', version: '2.3', executed_date: '2023-05-30',  parties: 'State National (TX) & Heartland Trucking MGA (TX)',    pages: 124, clauses: 42, amendments: 3, latest_amendment: '2025-11-20', expiry: '2026-05-29', template: 'State National program agreement',storage_hash:'0x12a8...dd33', esign_provider: 'DocuSign' },
  { id: 'AG-04', mandate_id: 'MD-2026-010', version: '1.1', executed_date: '2024-02-20',  parties: 'Transverse (NJ) & Thalassa Marine Underwriters (FL)',   pages: 116, clauses: 40, amendments: 1, latest_amendment: '2025-03-10', expiry: '2027-02-19', template: 'LMA 5159 + RSG precedent',       storage_hash: '0x9911...cd01', esign_provider: 'AdobeSign' },
  { id: 'AG-05', mandate_id: 'MD-2026-011', version: '1.0', executed_date: '2025-08-25',  parties: 'Everspan (AZ) & Summit Alpine Resort MGA (CO)',        pages: 88,  clauses: 34, amendments: 0, latest_amendment: null,        expiry: '2026-08-24', template: 'LMA 3114 + Everspan precedent',   storage_hash: '0x771a...bb20', esign_provider: 'DocuSign' },
  { id: 'AG-06', mandate_id: 'MD-2026-012', version: '2.1', executed_date: '2023-12-30',  parties: 'Core Specialty (OH) & Frontier Ag Hail (NE)',          pages: 102, clauses: 39, amendments: 2, latest_amendment: '2025-07-01', expiry: '2026-12-29', template: 'LMA 3113',                        storage_hash: '0x5512...ee7a', esign_provider: 'DocuSign' },
  { id: 'AG-07', mandate_id: 'MD-2026-014', version: '3.0', executed_date: '2022-06-01',  parties: 'Summit Fronting Re (DE) & Legacy E&S Casualty (GA)',   pages: 138, clauses: 40, amendments: 4, latest_amendment: '2025-06-01', expiry: '2026-05-31', template: 'Summit standard',                 storage_hash: '0xff01...1193', esign_provider: 'DocuSign' }
];

export const cedeActivations = [
  { id: 'AC-01', mandate_id: 'MD-2026-004', program: 'Brookline Artisan', steps: [
    { key:'collateral',         label:'Collateral setup & verification',    status:'Done',        owner:'Carrier CFO',   done:'2026-04-08' },
    { key:'matrix-push',        label:'Binding matrix pushed to MGA PAS',   status:'Done',        owner:'Platform',      done:'2026-04-10' },
    { key:'bordereau-endpoint', label:'Bordereau endpoint configured',       status:'Done',        owner:'Platform',      done:'2026-04-12' },
    { key:'producers',          label:'Producer appointments (NIPR)',        status:'In progress', owner:'MGA Ops',       due:'2026-04-30' },
    { key:'reinsurance',        label:'Outward cession coordinated',          status:'Pending',     owner:'Carrier Reins', due:'2026-05-05' },
    { key:'signoff',            label:'Go-live sign-off',                     status:'Pending',     owner:'CUOs',          due:'2026-05-10' }
  ], target_golive: '2026-05-01', progress_pct: 50 },
  { id: 'AC-02', mandate_id: 'MD-2026-007', program: 'Pet Circle', steps: [
    { key:'collateral',         label:'Collateral setup & verification',    status:'Pending',     owner:'Carrier CFO',   due:'2026-06-15' },
    { key:'matrix-push',        label:'Binding matrix pushed to MGA PAS',   status:'Pending',     owner:'Platform',      due:'2026-06-20' },
    { key:'bordereau-endpoint', label:'Bordereau endpoint configured',       status:'Pending',     owner:'Platform',      due:'2026-06-20' },
    { key:'producers',          label:'Producer appointments (NIPR)',        status:'Pending',     owner:'MGA Ops',       due:'2026-06-28' },
    { key:'reinsurance',        label:'Outward cession coordinated',          status:'Pending',     owner:'Carrier Reins', due:'2026-07-05' },
    { key:'signoff',            label:'Go-live sign-off',                     status:'Pending',     owner:'CUOs',          due:'2026-07-15' }
  ], target_golive: '2026-07-15', progress_pct: 0 }
];

export const cedeCollateral = [
  { id: 'CO-01', program: 'Meridian E&S Casualty',   type: 'Reg 114 Trust',       amount_usd: 42000000, required_usd: 38000000, custodian: 'JPMorgan Chase',        maturity: 'Evergreen',   verified: '2026-03-28', status: 'Verified',    red_flags: 0 },
  { id: 'CO-02', program: 'Meridian E&S Casualty',   type: 'LOC',                 amount_usd: 8000000,  required_usd: 8000000,  issuing_bank: 'Bank of America',   maturity: '2026-10-15',  verified: '2026-03-28', status: 'Verified',    red_flags: 0 },
  { id: 'CO-03', program: 'Aurora Cyber',            type: 'Reg 114 Trust',       amount_usd: 28000000, required_usd: 25000000, custodian: 'BNY Mellon',            maturity: 'Evergreen',   verified: '2026-03-15', status: 'Verified',    red_flags: 0 },
  { id: 'CO-04', program: 'Heartland Trucking',      type: 'Reg 114 Trust',       amount_usd: 78000000, required_usd: 85000000, custodian: 'JPMorgan Chase',        maturity: 'Evergreen',   verified: '2026-02-10', status: 'Deficit',     red_flags: 1 },
  { id: 'CO-05', program: 'Brookline Artisan',       type: 'LOC',                 amount_usd: 6200000,  required_usd: 6000000,  issuing_bank: 'Citibank',           maturity: '2027-01-20',  verified: '2026-04-05', status: 'Verified',    red_flags: 0 },
  { id: 'CO-06', program: 'Pacifica Habitational',   type: 'Reg 114 Trust',       amount_usd: 34000000, required_usd: 30000000, custodian: 'Wells Fargo',           maturity: 'Evergreen',   verified: '2026-03-01', status: 'Verified',    red_flags: 0 },
  { id: 'CO-07', program: 'Thalassa Marine',         type: 'Funds Withheld',      amount_usd: 18500000, required_usd: 17000000, custodian: 'Transverse in-house',    maturity: 'N/A',         verified: '2026-02-28', status: 'Verified',    red_flags: 0 },
  { id: 'CO-08', program: 'Frontier Ag Hail',        type: 'LOC',                 amount_usd: 32000000, required_usd: 32000000, issuing_bank: 'HSBC USA',           maturity: '2026-07-01',  verified: '2026-03-20', status: 'Renewal-due', red_flags: 0 },
  { id: 'CO-09', program: 'Legacy E&S Casualty',     type: 'Reg 114 Trust',       amount_usd: 68000000, required_usd: 62000000, custodian: 'JPMorgan Chase',        maturity: 'Evergreen',   verified: '2026-03-28', status: 'Verified',    red_flags: 0 },
  { id: 'CO-10', program: 'Summit Alpine Resort',    type: 'Reg 114 Trust',       amount_usd: 9200000,  required_usd: 8500000,  custodian: 'US Bank',                maturity: 'Evergreen',   verified: '2026-01-30', status: 'Verified',    red_flags: 0 }
];

export const cedeCollateralVerifs = [
  { id: 'CV-01', collateral_id: 'CO-01', method: 'Custodian bank API + attestation', requested: '2026-03-28 09:12', confirmed: '2026-03-28 09:14', status: 'Verified',   by: 'JPMC Treasury API',    signature: '0x9a82...' },
  { id: 'CV-02', collateral_id: 'CO-02', method: 'Issuing bank direct confirmation', requested: '2026-03-28 09:15', confirmed: '2026-03-28 10:22', status: 'Verified',   by: 'BofA Treasury',         signature: '0x14bb...' },
  { id: 'CV-03', collateral_id: 'CO-03', method: 'Custodian bank API',               requested: '2026-03-15 08:00', confirmed: '2026-03-15 08:01', status: 'Verified',   by: 'BNY Mellon API',        signature: '0x7c01...' },
  { id: 'CV-04', collateral_id: 'CO-04', method: 'Custodian bank API',               requested: '2026-02-10 11:30', confirmed: '2026-02-10 11:32', status: 'Deficit flagged', by: 'JPMC Treasury API', signature: '0x42ab...' },
  { id: 'CV-05', collateral_id: 'CO-05', method: 'Issuing bank direct confirmation', requested: '2026-04-05 14:45', confirmed: '2026-04-05 15:30', status: 'Verified',   by: 'Citibank Treasury',    signature: '0xef32...' },
  { id: 'CV-06', collateral_id: 'CO-08', method: 'Issuing bank direct confirmation', requested: '2026-03-20 09:00', confirmed: '2026-03-20 09:45', status: 'Verified',   by: 'HSBC Treasury',         signature: '0x28cd...' }
];

export const cedeBordereaux = [
  { id: 'BX-01', program: 'Meridian E&S Casualty',   type: 'Premium', period: '2026-03',  received: '2026-04-05', gwp_usd: 11800000, policies: 428, comm_usd: 3068000, tax_usd: 648000, status: 'Reconciled', variance_pct: 0.02 },
  { id: 'BX-02', program: 'Meridian E&S Casualty',   type: 'Claim',   period: '2026-03',  received: '2026-04-05', paid_usd: 2820000, os_reserve_usd: 18400000, count_open: 112, count_closed: 18, status: 'Reconciled', variance_pct: 0.04 },
  { id: 'BX-03', program: 'Aurora Cyber',            type: 'Premium', period: '2026-03',  received: '2026-04-03', gwp_usd: 7400000,  policies: 914, comm_usd: 2220000, tax_usd: 408000, status: 'Reconciled', variance_pct: 0.01 },
  { id: 'BX-04', program: 'Aurora Cyber',            type: 'Claim',   period: '2026-03',  received: '2026-04-03', paid_usd: 910000,  os_reserve_usd: 4200000,  count_open: 28,  count_closed: 7,  status: 'Reconciled', variance_pct: 0.00 },
  { id: 'BX-05', program: 'Heartland Trucking',      type: 'Premium', period: '2026-03',  received: '2026-04-18', gwp_usd: 17200000, policies: 312, comm_usd: 3440000, tax_usd: 946000, status: 'Exceptions', variance_pct: 1.12 },
  { id: 'BX-06', program: 'Heartland Trucking',      type: 'Claim',   period: '2026-03',  received: '2026-04-18', paid_usd: 6900000, os_reserve_usd: 28400000, count_open: 188, count_closed: 22, status: 'Exceptions', variance_pct: 2.41 },
  { id: 'BX-07', program: 'Pacifica Habitational',   type: 'Premium', period: '2026-03',  received: '2026-04-04', gwp_usd: 9600000,  policies: 542, comm_usd: 2304000, tax_usd: 528000, status: 'Reconciled', variance_pct: 0.03 },
  { id: 'BX-08', program: 'Pacifica Habitational',   type: 'Claim',   period: '2026-03',  received: '2026-04-04', paid_usd: 1820000, os_reserve_usd: 9800000,  count_open: 76,  count_closed: 14, status: 'Reconciled', variance_pct: 0.08 },
  { id: 'BX-09', program: 'Thalassa Marine',         type: 'Premium', period: '2026-03',  received: '2026-04-02', gwp_usd: 8100000,  policies: 188, comm_usd: 1782000, tax_usd: 486000, status: 'Reconciled', variance_pct: 0.02 },
  { id: 'BX-10', program: 'Frontier Ag Hail',        type: 'Premium', period: '2026-03',  received: '2026-04-08', gwp_usd: 11400000, policies: 2418,comm_usd: 2280000, tax_usd: 627000, status: 'Reconciled', variance_pct: 0.09 },
  { id: 'BX-11', program: 'Legacy E&S Casualty',     type: 'Premium', period: '2026-03',  received: '2026-04-03', gwp_usd: 14200000, policies: 488, comm_usd: 3834000, tax_usd: 781000, status: 'Reconciled', variance_pct: 0.01 },
  { id: 'BX-12', program: 'Summit Alpine Resort',    type: 'Premium', period: '2026-03',  received: '2026-04-09', gwp_usd: 2400000,  policies: 88,  comm_usd: 624000,  tax_usd: 132000, status: 'Reconciled', variance_pct: 0.00 }
];

export const cedeBordereauxValidns = [
  { id: 'BV-01', bordereau_id: 'BX-05', rule: 'ACORD NGDS schema',        result: 'Pass' },
  { id: 'BV-02', bordereau_id: 'BX-05', rule: 'Policy count matches AUM', result: 'Fail — 312 vs 319' },
  { id: 'BV-03', bordereau_id: 'BX-05', rule: 'Commission % within range',result: 'Pass' },
  { id: 'BV-04', bordereau_id: 'BX-06', rule: 'ACORD NGDS schema',        result: 'Pass' },
  { id: 'BV-05', bordereau_id: 'BX-06', rule: 'Reserve delta < 15%',      result: 'Fail — 18.2%' },
  { id: 'BV-06', bordereau_id: 'BX-01', rule: 'ACORD NGDS schema',        result: 'Pass' },
  { id: 'BV-07', bordereau_id: 'BX-01', rule: 'Taxes by state',            result: 'Pass' },
  { id: 'BV-08', bordereau_id: 'BX-03', rule: 'ACORD NGDS schema',        result: 'Pass' }
];

export const cedeReconciliations = [
  { id: 'RC-01', program: 'Meridian E&S Casualty', period: '2026-03', bordereau_gwp: 11800000, ledger_cash: 11797600, earned: 9834000, commission_paid: 3068000, tax_filed: 648000, matched_pct: 99.98, exceptions: 0 },
  { id: 'RC-02', program: 'Aurora Cyber',          period: '2026-03', bordereau_gwp: 7400000,  ledger_cash: 7399300,  earned: 6166000, commission_paid: 2220000, tax_filed: 408000, matched_pct: 99.99, exceptions: 0 },
  { id: 'RC-03', program: 'Heartland Trucking',    period: '2026-03', bordereau_gwp: 17200000, ledger_cash: 17008500, earned: 14320000,commission_paid: 3440000, tax_filed: 946000, matched_pct: 98.89, exceptions: 7 },
  { id: 'RC-04', program: 'Pacifica Habitational', period: '2026-03', bordereau_gwp: 9600000,  ledger_cash: 9597000,  earned: 8010000, commission_paid: 2304000, tax_filed: 528000, matched_pct: 99.97, exceptions: 0 },
  { id: 'RC-05', program: 'Thalassa Marine',       period: '2026-03', bordereau_gwp: 8100000,  ledger_cash: 8098000,  earned: 6800000, commission_paid: 1782000, tax_filed: 486000, matched_pct: 99.98, exceptions: 0 },
  { id: 'RC-06', program: 'Frontier Ag Hail',      period: '2026-03', bordereau_gwp: 11400000, ledger_cash: 11386000, earned: 9500000, commission_paid: 2280000, tax_filed: 627000, matched_pct: 99.88, exceptions: 2 },
  { id: 'RC-07', program: 'Legacy E&S Casualty',   period: '2026-03', bordereau_gwp: 14200000, ledger_cash: 14198000, earned: 11833000,commission_paid: 3834000, tax_filed: 781000, matched_pct: 99.99, exceptions: 0 }
];

export const cedeCompliance = [
  { id: 'BR-01', program: 'Heartland Trucking',   policy_no: 'HT-2026-00821', breach_type: 'Binding authority — limit',     rule: 'Per-risk > $1.5M requires referral',           severity: 'High',    detected: '2026-04-12', status: 'Open',       carrier_owner: 'M. Levine', mga_response: 'Schedule mod approved in error; rescinding' },
  { id: 'BR-02', program: 'Heartland Trucking',   policy_no: 'HT-2026-00844', breach_type: 'Binding authority — class',     rule: 'Hazmat class excluded',                          severity: 'Critical',detected: '2026-04-14', status: 'Resolved',   carrier_owner: 'M. Levine', mga_response: 'Policy cancelled flat; premium returned' },
  { id: 'BR-03', program: 'Meridian E&S Casualty',policy_no: 'ME-2026-01192', breach_type: 'Pricing deviation',              rule: 'Pricing deviation > ±15%',                        severity: 'Medium',  detected: '2026-03-28', status: 'Closed',     carrier_owner: 'Helena Park',mga_response: 'Documented loss-control rationale accepted' },
  { id: 'BR-04', program: 'Pacifica Habitational',policy_no: 'PH-2026-00451', breach_type: 'Claims authority',                rule: 'Tier 1 limit $75k exceeded ($82k)',              severity: 'Medium',  detected: '2026-04-02', status: 'Closed',     carrier_owner: 'J. Park',    mga_response: 'Joint consultation post-facto; approved' },
  { id: 'BR-05', program: 'Frontier Ag Hail',     policy_no: 'FA-2026-02814', breach_type: 'Excluded risk',                   rule: 'GMO crop excluded',                              severity: 'High',    detected: '2026-04-10', status: 'Open',       carrier_owner: 'B. Lindstrom',mga_response: 'Under review — MGA claims misclassified' },
  { id: 'BR-06', program: 'Aurora Cyber',         policy_no: 'AC-2026-00812', breach_type: 'Territorial',                      rule: 'Non-admitted state (LA)',                        severity: 'Medium',  detected: '2026-04-05', status: 'Closed',     carrier_owner: 'R. Chen',    mga_response: 'E&S filing completed retroactively' }
];

export const cedeAudits = [
  { id: 'AU-01', program: 'Meridian E&S Casualty',   type: 'Annual',    kickoff: '2026-03-15', complete: '2026-04-10', sampled_uw: 85, sampled_claims: 42, observations: 4, critical_findings: 0, severity: 'Low',    report_ref: 'AUD-ME-2026-01' },
  { id: 'AU-02', program: 'Heartland Trucking',       type: 'For-cause',kickoff: '2026-04-01', complete: null,         sampled_uw: 52, sampled_claims: 28, observations: 8, critical_findings: 2, severity: 'High',   report_ref: 'AUD-HT-2026-02' },
  { id: 'AU-03', program: 'Aurora Cyber',              type: 'Annual',    kickoff: '2026-01-20', complete: '2026-02-18', sampled_uw: 64, sampled_claims: 18, observations: 2, critical_findings: 0, severity: 'Low',    report_ref: 'AUD-AC-2026-01' },
  { id: 'AU-04', program: 'Frontier Ag Hail',          type: 'For-cause', kickoff: '2026-03-10', complete: '2026-04-08', sampled_uw: 48, sampled_claims: 22, observations: 6, critical_findings: 1, severity: 'Medium', report_ref: 'AUD-FA-2026-01' },
  { id: 'AU-05', program: 'Legacy E&S Casualty',       type: 'Annual',    kickoff: '2026-02-01', complete: '2026-03-12', sampled_uw: 90, sampled_claims: 38, observations: 3, critical_findings: 0, severity: 'Low',    report_ref: 'AUD-LE-2026-01' }
];

export const cedeSocReports = [
  { id: 'SR-01', mga: 'Meridian Specialty MGA',     type: 'SOC-1 Type II', auditor: 'Deloitte',   period: '2024-07-01 to 2025-06-30', issued: '2025-09-12', material_findings: 0, status: 'Current' },
  { id: 'SR-02', mga: 'Meridian Specialty MGA',     type: 'SOC-2 Type II', auditor: 'Deloitte',   period: '2024-07-01 to 2025-06-30', issued: '2025-09-12', material_findings: 0, status: 'Current' },
  { id: 'SR-03', mga: 'Aurora Cyber Underwriters',  type: 'SOC-1 Type II', auditor: 'EY',         period: '2024-11-01 to 2025-10-31', issued: '2026-01-10', material_findings: 0, status: 'Current' },
  { id: 'SR-04', mga: 'Aurora Cyber Underwriters',  type: 'SOC-2 Type II', auditor: 'EY',         period: '2024-11-01 to 2025-10-31', issued: '2026-01-10', material_findings: 0, status: 'Current' },
  { id: 'SR-05', mga: 'Heartland Trucking MGA',      type: 'SOC-1 Type II', auditor: 'Grant Thornton', period: '2024-01-01 to 2024-12-31', issued: '2025-06-30', material_findings: 1, status: 'Renewal-due' },
  { id: 'SR-06', mga: 'Pacifica Habitational Cover',type: 'SOC-1 Type II', auditor: 'KPMG',       period: '2024-11-01 to 2025-12-31', issued: '2026-02-20', material_findings: 0, status: 'Current' },
  { id: 'SR-07', mga: 'Frontier Ag Hail',            type: 'SOC-1 Type II', auditor: 'PwC',        period: '2024-01-01 to 2024-12-31', issued: '2025-05-20', material_findings: 2, status: 'Under review' },
  { id: 'SR-08', mga: 'Legacy E&S Casualty',         type: 'SOC-1 Type II', auditor: 'Deloitte',   period: '2024-12-01 to 2025-11-30', issued: '2026-02-01', material_findings: 0, status: 'Current' }
];

export const cedeAmendments = [
  { id: 'AM-01', program: 'Meridian E&S Casualty', agreement_id: 'AG-01', version_from: '1.1', version_to: '1.2', effective: '2025-09-01', prior: true, changes: ['Binding matrix: artisan contractor per-risk raised $1.5M → $2M','Commission: profit-comm trigger 62% → 60% LR'], counsel: 'Sidley Austin', executed_by: 'Both CUOs', esign: 'DocuSign' },
  { id: 'AM-02', program: 'State National × Heartland Trucking', agreement_id: 'AG-03', version_from: '2.2', version_to: '2.3', effective: '2025-11-20', prior: true, changes: ['Excluded risk: long-haul >1500mi added','Tier 1 claim authority reduced $50k → $25k'], counsel: 'Wilson Elser', executed_by: 'Both CUOs', esign: 'DocuSign' },
  { id: 'AM-03', program: 'Thalassa Marine',       agreement_id: 'AG-04', version_from: '1.0', version_to: '1.1', effective: '2025-03-10', prior: true, changes: ['Territories: added Pacific NW','Bordereau cadence: monthly → weekly'], counsel: 'Holland & Knight', executed_by: 'Both CUOs', esign: 'AdobeSign' },
  { id: 'AM-04', program: 'Legacy E&S Casualty',   agreement_id: 'AG-07', version_from: '2.5', version_to: '3.0', effective: '2025-06-01', prior: true, changes: ['New class: E&O for financial advisors added','Sliding scale commission restructure 25-32% → 24-31%'], counsel: 'Morgan Lewis', executed_by: 'Both CUOs', esign: 'DocuSign' },
  { id: 'AM-05', program: 'Thalassa Marine',       agreement_id: 'AG-04', version_from: '1.1', version_to: '1.2 (proposed)', effective: '2026-05-15', prior: false, changes: ['Per-risk hull raised $5M → $8M','Commission profit trigger 58% → 56% LR'], counsel: 'Holland & Knight', executed_by: 'Pending', esign: 'Pending' }
];

export const cedeRenewals = [
  { id: 'RN-01', program: 'Meridian E&S Casualty',   current_expiry: '2026-11-07', lookahead_days: 200, plan_status: 'Plan drafted',      rate_change_pct: 0,   key_changes: 'Expanded into IL + OH for Habitational',       commission_change: 'Unchanged',  terms_target: '2026-06-01' },
  { id: 'RN-02', program: 'Aurora Cyber',            current_expiry: '2027-01-21', lookahead_days: 275, plan_status: 'Planning',         rate_change_pct: 5,   key_changes: 'SMB ransomware sub-limit lowered to $250k',     commission_change: '−1% profit commission trigger (63→62%)', terms_target: '2026-09-15' },
  { id: 'RN-03', program: 'Legacy E&S Casualty',     current_expiry: '2026-05-31', lookahead_days: 40,  plan_status: 'In negotiation',   rate_change_pct: 3,   key_changes: 'New class: E&O for financial advisors',         commission_change: 'Sliding scale recast',               terms_target: '2026-05-05' },
  { id: 'RN-04', program: 'Brookline Artisan',       current_expiry: '2027-03-01', lookahead_days: 320, plan_status: 'Not started',     rate_change_pct: null,key_changes: '—',                                                commission_change: '—',                                  terms_target: '—' },
  { id: 'RN-05', program: 'State National × Heartland Trucking', current_expiry: '2026-05-29', lookahead_days: 38, plan_status: 'Non-renewal (Run-off)', rate_change_pct: null, key_changes: 'Non-renewal notice issued due to LR 71%+', commission_change: 'N/A — run-off rules', terms_target: '—' }
];

export const cedeTerminations = [
  { id: 'TM-01', program: 'State National × Heartland Trucking', reason: 'For convenience (portfolio exit)', notice_date: '2026-03-10', effective_date: '2026-09-10', runoff_end: '2027-09-10', runoff_comm_pct: 5, status: 'Active (run-off)', in_force_policies: 312, open_claims: 188, data_export_status: 'In progress' },
  { id: 'TM-02', program: 'Obsidian × Glassline Specialty (legacy)', reason: 'For cause (UW breach pattern)', notice_date: '2025-11-22', effective_date: '2025-12-22', runoff_end: '2026-06-22', runoff_comm_pct: 5, status: 'Completed',        in_force_policies: 0,   open_claims: 4,   data_export_status: 'Exported' }
];

export const cedeDataPortability = [
  { id: 'DE-01', termination_id: 'TM-01', requested: '2026-03-15', delivered: null,           format: 'ACORD NGDS', volume: '18.4 GB', scope: 'Policies + claims + bordereaux 2023-2026', status: 'In progress' },
  { id: 'DE-02', termination_id: 'TM-02', requested: '2025-12-24', delivered: '2025-12-28',  format: 'ACORD NGDS', volume: '4.2 GB',  scope: 'Policies + claims + bordereaux 2024-2025', status: 'Delivered' }
];

export const cedeCommissions = [
  { id: 'CM-01', program: 'Meridian E&S Casualty', period: '2026-03', gwp_usd: 11800000, ceding_comm_pct: 26, fronting_fee_pct: 5.7, ceding_comm_usd: 3068000, fronting_fee_usd: 672600, net_premium_usd: 8059400, profit_comm_accrued_usd: 198000, paid: true, paid_date: '2026-04-10' },
  { id: 'CM-02', program: 'Aurora Cyber',          period: '2026-03', gwp_usd: 7400000,  ceding_comm_pct: 30, fronting_fee_pct: 6.2, ceding_comm_usd: 2220000, fronting_fee_usd: 458800, net_premium_usd: 4721200, profit_comm_accrued_usd: 142000, paid: true, paid_date: '2026-04-10' },
  { id: 'CM-03', program: 'Pacifica Habitational', period: '2026-03', gwp_usd: 9600000,  ceding_comm_pct: 24, fronting_fee_pct: 6.0, ceding_comm_usd: 2304000, fronting_fee_usd: 576000, net_premium_usd: 6720000, profit_comm_accrued_usd: 118000, paid: true, paid_date: '2026-04-10' },
  { id: 'CM-04', program: 'Heartland Trucking',    period: '2026-03', gwp_usd: 17200000, ceding_comm_pct: 20, fronting_fee_pct: 5.5, ceding_comm_usd: 3440000, fronting_fee_usd: 946000, net_premium_usd: 12814000,profit_comm_accrued_usd: 0,     paid: false, paid_date: null },
  { id: 'CM-05', program: 'Thalassa Marine',       period: '2026-03', gwp_usd: 8100000,  ceding_comm_pct: 22, fronting_fee_pct: 7.0, ceding_comm_usd: 1782000, fronting_fee_usd: 567000, net_premium_usd: 5751000, profit_comm_accrued_usd: 88000,  paid: true, paid_date: '2026-04-10' },
  { id: 'CM-06', program: 'Legacy E&S Casualty',   period: '2026-03', gwp_usd: 14200000, ceding_comm_pct: 27, fronting_fee_pct: 5.7, ceding_comm_usd: 3834000, fronting_fee_usd: 809400, net_premium_usd: 9556600, profit_comm_accrued_usd: 286000, paid: true, paid_date: '2026-04-10' },
  { id: 'CM-07', program: 'Frontier Ag Hail',      period: '2026-03', gwp_usd: 11400000, ceding_comm_pct: 20, fronting_fee_pct: 7.5, ceding_comm_usd: 2280000, fronting_fee_usd: 855000, net_premium_usd: 8265000, profit_comm_accrued_usd: 0,     paid: false, paid_date: null },
  { id: 'CM-08', program: 'Summit Alpine Resort',  period: '2026-03', gwp_usd: 2400000,  ceding_comm_pct: 26, fronting_fee_pct: 7.2, ceding_comm_usd: 624000,  fronting_fee_usd: 172800, net_premium_usd: 1603200, profit_comm_accrued_usd: 22000,  paid: true, paid_date: '2026-04-10' }
];

export const cedeSlidingScales = [
  { id: 'SS-01', program: 'Legacy E&S Casualty', min_comm_pct: 24, max_comm_pct: 32, provisional_pct: 28, min_lr: 50, max_lr: 70, step_pct_per_pt_lr: 0.5, current_lr: 52.1, current_commission_pct: 30.95, next_true_up: '2026-07-15' },
  { id: 'SS-02', program: 'Meridian E&S Casualty', min_comm_pct: 22, max_comm_pct: 30, provisional_pct: 26, min_lr: 52, max_lr: 68, step_pct_per_pt_lr: 0.5, current_lr: 58.3, current_commission_pct: 27.15, next_true_up: '2026-08-15' }
];

export const cedeProfitCommissions = [
  { id: 'PC-01', program: 'Meridian E&S Casualty', ay: 2025, est_lr: 0.558, estimated_profit_usd: 3120000, profit_comm_pct: 20, accrual_usd: 624000, realized_pct: 0.35, next_true_up: '2026-11-15' },
  { id: 'PC-02', program: 'Aurora Cyber',          ay: 2025, est_lr: 0.502, estimated_profit_usd: 1880000, profit_comm_pct: 25, accrual_usd: 470000, realized_pct: 0.45, next_true_up: '2026-12-01' },
  { id: 'PC-03', program: 'Legacy E&S Casualty',   ay: 2025, est_lr: 0.521, estimated_profit_usd: 4220000, profit_comm_pct: 22, accrual_usd: 928400, realized_pct: 0.30, next_true_up: '2026-09-15' },
  { id: 'PC-04', program: 'Pacifica Habitational', ay: 2025, est_lr: 0.602, estimated_profit_usd: 1840000, profit_comm_pct: 18, accrual_usd: 331200, realized_pct: 0.25, next_true_up: '2026-10-20' },
  { id: 'PC-05', program: 'Thalassa Marine',       ay: 2025, est_lr: 0.594, estimated_profit_usd: 1280000, profit_comm_pct: 20, accrual_usd: 256000, realized_pct: 0.20, next_true_up: '2026-11-01' },
  { id: 'PC-06', program: 'Summit Alpine Resort',  ay: 2025, est_lr: 0.571, estimated_profit_usd: 380000,  profit_comm_pct: 20, accrual_usd: 76000,  realized_pct: 0.25, next_true_up: '2026-10-30' }
];

export const cedeBorFees = [
  { id: 'BF-01', broker: 'Gallagher Re',                mandate_id: 'MD-2026-001', program: 'Meridian E&S Casualty', gwp_usd: 145000000, fee_bps: 45, fee_usd: 652500, status: 'Paid',    paid: '2024-12-15' },
  { id: 'BF-02', broker: 'Guy Carpenter (GC Access)',   mandate_id: 'MD-2026-002', program: 'Aurora Cyber',           gwp_usd: 88000000,  fee_bps: 50, fee_usd: 440000, status: 'Paid',    paid: '2025-02-28' },
  { id: 'BF-03', broker: 'Howden Re',                    mandate_id: 'MD-2026-003', program: 'Heartland Trucking',     gwp_usd: 212000000, fee_bps: 45, fee_usd: 954000, status: 'Paid',    paid: '2023-07-15' },
  { id: 'BF-04', broker: 'Gallagher Re',                 mandate_id: 'MD-2026-004', program: 'Brookline Artisan',      gwp_usd: 52000000,  fee_bps: 50, fee_usd: 260000, status: 'Pending', paid: null         },
  { id: 'BF-05', broker: 'Gallagher Re',                 mandate_id: 'MD-2026-005', program: 'Pacifica Habitational',  gwp_usd: 118000000, fee_bps: 45, fee_usd: 531000, status: 'Accruing',paid: null         },
  { id: 'BF-06', broker: 'Lockton Re',                   mandate_id: 'MD-2026-007', program: 'Pet Circle',             gwp_usd: 74000000,  fee_bps: 50, fee_usd: 370000, status: 'Accruing',paid: null         }
];

export const cedeBenchmarks = [
  { id: 'BN-01', lob: 'E&S Casualty',         cohort: 'Mid-sized MGA ($100-200M GWP)', metric: 'Trailing 12mo LR',        peer_p25: 55.0, peer_p50: 58.5, peer_p75: 62.0, you: 55.8,  k_anon_count: 12 },
  { id: 'BN-02', lob: 'E&S Casualty',         cohort: 'Mid-sized MGA ($100-200M GWP)', metric: 'Expense ratio',            peer_p25: 32.0, peer_p50: 35.5, peer_p75: 40.0, you: 33.8,  k_anon_count: 12 },
  { id: 'BN-03', lob: 'Cyber',                cohort: 'SMB focus ($50-100M GWP)',      metric: 'Trailing 12mo LR',        peer_p25: 48.0, peer_p50: 54.5, peer_p75: 62.0, you: 50.2,  k_anon_count: 9  },
  { id: 'BN-04', lob: 'Habitational Property',cohort: 'Mid-market ($50-150M GWP)',     metric: 'Trailing 12mo LR',        peer_p25: 58.0, peer_p50: 62.0, peer_p75: 66.5, you: 60.2,  k_anon_count: 14 },
  { id: 'BN-05', lob: 'Commercial Auto',       cohort: 'Specialty trucking (>$100M)',  metric: 'Trailing 12mo LR',        peer_p25: 62.0, peer_p50: 68.0, peer_p75: 74.0, you: 71.2,  k_anon_count: 7  },
  { id: 'BN-06', lob: 'E&S Casualty',         cohort: 'Mid-sized MGA ($100-200M GWP)', metric: 'Bordereau timeliness (%)', peer_p25: 85.0, peer_p50: 91.0, peer_p75: 95.0, you: 94.0,  k_anon_count: 12 },
  { id: 'BN-07', lob: 'Cyber',                cohort: 'SMB focus ($50-100M GWP)',      metric: 'UW-compliance score (%)', peer_p25: 92.0, peer_p50: 96.0, peer_p75: 98.5, you: 98.1,  k_anon_count: 9  }
];

export const cedeNaicCompliance = [
  { id: 'NC-01', program: 'Meridian E&S Casualty',     state: 'NY', written_contract: true,  uw_guidelines: true, prohibited_acts: true, commission_terms: true, termination: true, claims_standards: true, bordereaux_cadence: true, producer_licensed: true, fiduciary: true, mga_financial_exam_date: '2025-09-12', board_review_date: '2026-01-15', onsite_review_date: '2025-11-08', eo_in_force: true, status: 'Compliant' },
  { id: 'NC-02', program: 'Meridian E&S Casualty',     state: 'CA', written_contract: true,  uw_guidelines: true, prohibited_acts: true, commission_terms: true, termination: true, claims_standards: true, bordereaux_cadence: true, producer_licensed: true, fiduciary: true, mga_financial_exam_date: '2025-09-12', board_review_date: '2026-01-15', onsite_review_date: '2025-11-08', eo_in_force: true, status: 'Compliant' },
  { id: 'NC-03', program: 'Aurora Cyber',              state: 'All 50', written_contract: true,uw_guidelines: true, prohibited_acts: true, commission_terms: true, termination: true, claims_standards: true, bordereaux_cadence: true, producer_licensed: true, fiduciary: true, mga_financial_exam_date: '2026-01-10', board_review_date: '2026-02-20', onsite_review_date: '2025-10-15', eo_in_force: true, status: 'Compliant' },
  { id: 'NC-04', program: 'Heartland Trucking',        state: 'All ex NY,NJ', written_contract: true, uw_guidelines: true, prohibited_acts: true, commission_terms: true, termination: true, claims_standards: true, bordereaux_cadence: true, producer_licensed: true, fiduciary: true, mga_financial_exam_date: '2025-06-30', board_review_date: '2026-01-10', onsite_review_date: '2026-02-20', eo_in_force: true, status: 'Under review' },
  { id: 'NC-05', program: 'Pacifica Habitational',     state: 'CA, TX, FL, AZ', written_contract: true, uw_guidelines: true, prohibited_acts: true, commission_terms: true, termination: true, claims_standards: true, bordereaux_cadence: true, producer_licensed: true, fiduciary: true, mga_financial_exam_date: '2026-02-20', board_review_date: '2026-03-10', onsite_review_date: '2025-12-05', eo_in_force: true, status: 'Compliant' },
  { id: 'NC-06', program: 'Frontier Ag Hail',          state: 'All 19', written_contract: true, uw_guidelines: true, prohibited_acts: true, commission_terms: true, termination: true, claims_standards: true, bordereaux_cadence: true, producer_licensed: true, fiduciary: true, mga_financial_exam_date: '2025-05-20', board_review_date: '2026-01-30', onsite_review_date: '2026-03-08', eo_in_force: true, status: 'Compliant' }
];

export const cedeStateVariations = [
  { id: 'SV-01', state: 'NY', additional_requirement: 'Circular Letters + Reg 120 additional disclosure and licensing', impacted_programs: 6, severity: 'Material',   action: 'Per-program Circular Letter filing required within 60 days of DUA execution' },
  { id: 'SV-02', state: 'TX', additional_requirement: 'Ch. 4053 Insurance Code: MGA annual statement',                   impacted_programs: 8, severity: 'Standard',   action: 'Annual filing with TX DOI' },
  { id: 'SV-03', state: 'CA', additional_requirement: 'Producer-appointment filings per NAIC uniform + CA additions',    impacted_programs: 7, severity: 'Standard',   action: 'Appointment Part A/B on every producer' },
  { id: 'SV-04', state: 'FL', additional_requirement: 'Post-2022 property crisis — program-business scrutiny',            impacted_programs: 4, severity: 'Material',   action: 'Enhanced financial reporting quarterly' },
  { id: 'SV-05', state: 'LA', additional_requirement: 'Non-admitted E&S filings via SLAC',                                 impacted_programs: 3, severity: 'Standard',   action: 'SLAC monthly filing' },
  { id: 'SV-06', state: 'HI', additional_requirement: 'State-level MGA appointment form (HI-MGA-100)',                     impacted_programs: 2, severity: 'Standard',   action: 'Form HI-MGA-100 annually' }
];

export const cedeAuditLog = [
  { id: 'LG-01', ts: '2026-04-21 09:12', actor: 'Helena Park',  role: 'Carrier Program Mgr', action: 'Approved term-sheet v3', target: 'MD-2026-005', context: 'Counter-offer to Pacifica Habitational' },
  { id: 'LG-02', ts: '2026-04-21 09:05', actor: 'System',       role: 'Platform',            action: 'Collateral verified',    target: 'CO-01',        context: 'JPMorgan Chase API confirmation' },
  { id: 'LG-03', ts: '2026-04-20 17:42', actor: 'David Ortiz',  role: 'MGA CEO',             action: 'Submitted bordereau',     target: 'BX-01',        context: 'Meridian March 2026' },
  { id: 'LG-04', ts: '2026-04-20 15:30', actor: 'System',       role: 'Platform',            action: 'UW-compliance breach',    target: 'BR-01',        context: 'Heartland Trucking policy HT-2026-00821' },
  { id: 'LG-05', ts: '2026-04-20 11:15', actor: 'Noa Bergman',  role: 'Platform Admin',      action: 'Approved application',    target: 'MG-16',        context: 'Sentry Educator Liability onboarding' },
  { id: 'LG-06', ts: '2026-04-19 14:22', actor: 'Priya Shah',   role: 'Broker (BoR)',        action: 'Viewed DD pack',          target: 'DD-01',        context: 'Pet Circle Underwriters' },
  { id: 'LG-07', ts: '2026-04-19 10:50', actor: 'Helena Park',  role: 'Carrier Program Mgr', action: 'Generated ORSA export',   target: 'ORSA-2026-Q1', context: 'Summit quarterly regulatory pack' },
  { id: 'LG-08', ts: '2026-04-18 16:20', actor: 'System',       role: 'Platform',            action: 'NDA reveal',              target: 'MD-2026-009',   context: 'Accelerant × Flatiron Event Cover' }
];

export const cedeMemberApplications = [
  { id: 'AP-01', type: 'MGA',    applicant: 'Sentry Educator Liability',       submitted: '2026-04-10', status: 'Approved',   rubric_score: 86, reviewer: 'Noa Bergman',  notes: 'Strong governance, niche class, approved' },
  { id: 'AP-02', type: 'MGA',    applicant: 'Bluewater Crop Hail MGA',         submitted: '2026-04-15', status: 'In review',  rubric_score: 78, reviewer: 'Noa Bergman',  notes: 'Leadership references pending' },
  { id: 'AP-03', type: 'MGA',    applicant: 'Metro Delivery Auto Underwriters',submitted: '2026-04-18', status: 'Waitlisted', rubric_score: 64, reviewer: 'Noa Bergman',  notes: 'Below bar: single-person UW team' },
  { id: 'AP-04', type: 'Carrier',applicant: 'Coastal Fronting Specialty',      submitted: '2026-04-12', status: 'In review',  rubric_score: 82, reviewer: 'Noa Bergman',  notes: 'AM Best A- confirmed; legal DD outstanding' },
  { id: 'AP-05', type: 'Broker', applicant: 'Bolton Re Program Solutions',     submitted: '2026-04-14', status: 'Approved',   rubric_score: 88, reviewer: 'Noa Bergman',  notes: 'BoR approved' }
];

export const cedeDisputes = [
  { id: 'DS-01', program: 'Frontier Ag Hail',  filed_by: 'Carrier (Core Specialty)', subject: 'Commission true-up 2024 AY', amount_usd: 840000, status: 'Mediation', filed: '2026-03-20', next_hearing: '2026-05-05' }
];

export const cedeStages = [
  'Prospecting','Due diligence','DUA drafting','Term negotiation','E-sign','Activating','In-force','Renewal','Amending','Run-off','Completed'
];

export const cedePartnerBanks = [
  { id: 'BK-01', name: 'JPMorgan Chase',   role: 'Custodian + LOC issuer', api_verified: true, g_sib: true, tier: 'Tier 1' },
  { id: 'BK-02', name: 'Bank of America',  role: 'LOC issuer',               api_verified: true, g_sib: true, tier: 'Tier 1' },
  { id: 'BK-03', name: 'Citibank',         role: 'LOC issuer',               api_verified: true, g_sib: true, tier: 'Tier 1' },
  { id: 'BK-04', name: 'Wells Fargo',       role: 'Custodian + LOC issuer', api_verified: true, g_sib: true, tier: 'Tier 1' },
  { id: 'BK-05', name: 'HSBC USA',          role: 'LOC issuer',               api_verified: true, g_sib: true, tier: 'Tier 1' },
  { id: 'BK-06', name: 'Barclays',          role: 'LOC issuer',               api_verified: true, g_sib: true, tier: 'Tier 1' },
  { id: 'BK-07', name: 'BNY Mellon',        role: 'Custodian',                api_verified: true, g_sib: true, tier: 'Tier 1' },
  { id: 'BK-08', name: 'US Bank',            role: 'Custodian',                api_verified: true, g_sib: false,tier: 'Tier 2' }
];

