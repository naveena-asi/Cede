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
