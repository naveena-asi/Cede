/* ============================================================
   MGA Insurance Platform — Main Application
   Three-portal SPA with client-side routing
   ============================================================ */
import * as D from './data.js';

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── State ───
let state = {
  portal: null,          // 'customer' | 'broker' | 'mga'
  screen: 'dashboard',
  wizardStep: 1,
  selectedCarriers: [0,1,2,3,4],
  modal: null,
  clientTab: 'overview',
  coiValidated: false,
  coiProcessingStatus: 'idle',
  coiValidationView: false,
  coiIsIssued: false,
  searchQuery: '',
  searchResults: null
};

window.showModal = function(title, content, actionLabel = 'OK', actionCallback = null) {
  setState({ modal: { title, content, actionLabel, actionCallback } });
};
window.hideModal = function() {
  setState({ modal: null });
};
window.showAlert = function(msg) {
  console.log("Mock action logged:", msg);
  let host = document.getElementById('toast-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'toast-host';
    host.style.cssText = 'position:fixed; bottom:24px; right:24px; z-index:9999; display:flex; flex-direction:column; gap:8px; pointer-events:none;';
    document.body.appendChild(host);
  }
  const toast = document.createElement('div');
  toast.style.cssText = 'background:#1a1a28; color:#f0f0f5; padding:12px 16px; border:1px solid rgba(108,92,231,0.5); border-left:4px solid #6c5ce7; border-radius:6px; box-shadow:0 6px 20px rgba(0,0,0,0.5); font-size:0.85rem; max-width:420px; pointer-events:auto; animation:fadeIn 0.25s ease-out;';
  toast.textContent = msg;
  host.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; }, 2700);
  setTimeout(() => { toast.remove(); }, 3100);
};
window.alert = function(msg) { window.showAlert(msg); };

function setState(patch) {
  Object.assign(state, patch);
  window.state = state;
  render();
}
window.setState = setState;
window.state = state;

// ─── Router ───
function render() {
  const app = $('#app');
  if (!state.portal) {
    app.innerHTML = renderLogin();
    bindLogin();
  } else if (state.portal === 'customer') {
    app.innerHTML = renderCustomerPortal() + (state.modal ? renderModal() : '');
    bindCustomer();
    if (state.modal) bindModal();
  } else if (state.portal === 'broker') {
    app.innerHTML = renderBrokerPortal() + (state.modal ? renderModal() : '');
    bindBroker();
    if (state.modal) bindModal();
  } else if (state.portal === 'mga') {
    app.innerHTML = renderMGAPortal() + (state.modal ? renderModal() : '');
    bindMGA();
    if (state.modal) bindModal();
  }
}

function renderModal() {
  const m = state.modal;
  return `
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <h3>${m.title}</h3>
        <button class="btn btn-ghost btn-sm" id="btn-close-modal">✕</button>
      </div>
      <div class="modal-body">${m.content}</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" id="btn-cancel-modal">Cancel</button>
        <button class="btn btn-primary" id="btn-action-modal">${m.actionLabel}</button>
      </div>
    </div>
  </div>`;
}

function bindModal() {
  const cls = $('#btn-close-modal');
  const cancel = $('#btn-cancel-modal');
  const action = $('#btn-action-modal');
  if (cls) cls.addEventListener('click', window.hideModal);
  if (cancel) cancel.addEventListener('click', window.hideModal);
  if (action) action.addEventListener('click', () => {
    if (state.modal.actionCallback) state.modal.actionCallback();
    window.hideModal();
  });
}

// ─── Helpers ───
function badge(color, text) {
  return `<span class="badge badge-${color}"><span class="badge-dot badge-dot-${color}"></span>${text}</span>`;
}

function kpiCards(items, cols = 4) {
  return `<div class="kpi-grid kpi-grid-${cols}">${items.map(k =>
    `<div class="kpi-card">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value${k.warning ? ' warning' : ''}">${k.value}</div>
    </div>`
  ).join('')}</div>`;
}

// ════════════════════════════════════════════════════════════════
// LOGIN SCREEN
// ════════════════════════════════════════════════════════════════
function renderLogin() {
  return `
  <div class="login-screen">
    <div class="login-container">
      <div class="login-logo">
        <span class="login-logo-icon">⚡</span>
        <h1>MGA Platform</h1>
        <p>Singlepoint · Nexus · Applied Epic</p>
      </div>
      <div class="portal-selector">
        <div class="portal-card" data-portal="customer" id="portal-customer">
          <span class="portal-card-icon">🏢</span>
          <div class="portal-card-info">
            <h3>Customer Portal</h3>
            <p>View policies, submit endorsements, download COIs</p>
          </div>
          <span class="portal-card-arrow">→</span>
        </div>
        <div class="portal-card" data-portal="broker" id="portal-broker">
          <span class="portal-card-icon">🔷</span>
          <div class="portal-card-info">
            <h3>Broker Portal — Nexus</h3>
            <p>Submit clients, compare quotes, track commissions</p>
          </div>
          <span class="portal-card-arrow">→</span>
        </div>
        <div class="portal-card" data-portal="mga" id="portal-mga">
          <span class="portal-card-icon">⚡</span>
          <div class="portal-card-info">
            <h3>MGA Portal — Agency Management</h3>
            <p>Carriers, brokers, policies, compliance & commissions</p>
          </div>
          <span class="portal-card-arrow">→</span>
        </div>
      </div>
    </div>
  </div>`;
}

function bindLogin() {
  $$('.portal-card').forEach(card => {
    card.addEventListener('click', () => {
      setState({ portal: card.dataset.portal, screen: 'dashboard', wizardStep: 1 });
    });
  });
}

// ════════════════════════════════════════════════════════════════
// CUSTOMER PORTAL
// ════════════════════════════════════════════════════════════════
function renderCustomerPortal() {
  const u = D.USERS.customer;
  const content = state.screen === 'endorsement' ? renderCustomerEndorsement() : renderCustomerDashboard();
  return `
  <div class="top-bar customer-top-bar">
    <div class="top-bar-brand">
      <span class="top-bar-brand-icon">🏢</span>
      <span>SINGLEPOINT INSURANCE</span>
    </div>
    <div class="top-bar-right">
      <div class="top-bar-user">
        <span>${u.name} (Customer)</span>
        <div class="top-bar-user-avatar">${u.avatar}</div>
      </div>
      <button class="btn btn-ghost btn-sm" id="btn-logout">Logout ⎋</button>
    </div>
  </div>
  <div class="page-content">${content}</div>`;
}

function renderCustomerDashboard() {
  return `
  ${kpiCards(D.customerKPIs)}
  <div class="data-table-wrapper">
    <div class="data-table-header">
      <h3>MY POLICIES</h3>
      <button class="btn btn-primary btn-sm" id="btn-new-request">+ New Request</button>
    </div>
    <table class="data-table">
      <thead><tr>
        <th>Policy #</th><th>Type</th><th>Carrier</th><th>Expiry</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${D.customerPolicies.map(p => `
        <tr>
          <td>${p.id}</td>
          <td>${p.type}</td>
          <td>${p.carrier}</td>
          <td>${p.expiry} ${p.expiring ? '⚠️' : ''}</td>
          <td>
            <button class="btn btn-secondary btn-sm">View</button>
            <button class="btn btn-ghost btn-sm">COI</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <div class="section-title">QUICK ACTIONS</div>
  <div class="quick-actions">
    <div class="quick-action-card"><span class="quick-action-icon">📄</span><span class="quick-action-label">Download COI</span></div>
    <div class="quick-action-card"><span class="quick-action-icon">🔄</span><span class="quick-action-label">Request Renewal</span></div>
    <div class="quick-action-card" id="btn-endorsement"><span class="quick-action-icon">✏️</span><span class="quick-action-label">Submit Endorsement</span></div>
  </div>`;
}

function renderCustomerEndorsement() {
  return `
  <div style="margin-bottom: var(--space-lg);">
    <button class="btn btn-ghost" id="btn-back-dash">← Back to Dashboard</button>
  </div>
  <div class="data-table-wrapper" style="padding: var(--space-xl);">
    <h2 style="margin-bottom: var(--space-lg);">Endorsement Request</h2>
    <div style="background: var(--bg-card); padding: var(--space-md); border-radius: var(--radius-sm); margin-bottom: var(--space-lg); border: 1px solid var(--border-subtle);">
      Policy: <strong>WC-2025-48821</strong>  ·  Workers Comp  ·  Liberty Mutual
    </div>
    <div class="form-group">
      <div class="form-label">Endorsement Type</div>
      <div class="radio-group">
        <span class="radio-pill active">Add Location</span>
        <span class="radio-pill">Add Person</span>
        <span class="radio-pill">Remove Location</span>
        <span class="radio-pill">Change Limits</span>
        <span class="radio-pill">Add Vehicle</span>
        <span class="radio-pill">Other</span>
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">Description of Change</div>
      <textarea class="form-input" placeholder="Adding new warehouse at 1400 Industrial Blvd, Sacramento CA 95811">Adding new warehouse at 1400 Industrial Blvd, Sacramento CA 95811</textarea>
    </div>
    <div class="form-row">
      <div class="form-group">
        <div class="form-label">Effective Date</div>
        <input class="form-input" type="date" value="2026-04-25" />
      </div>
      <div class="form-group">
        <div class="form-label">Attach Document</div>
        <input class="form-input" type="file" />
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">Submission Status</div>
      <div class="status-tracker">
        <div class="status-step active"><div class="status-step-dot"></div> Submitted</div>
        <div class="status-step-line"></div>
        <div class="status-step"><div class="status-step-dot"></div> Under Review</div>
        <div class="status-step-line"></div>
        <div class="status-step"><div class="status-step-dot"></div> Approved</div>
        <div class="status-step-line"></div>
        <div class="status-step"><div class="status-step-dot"></div> Applied</div>
      </div>
    </div>
    <div class="form-footer">
      <button class="btn btn-secondary" id="btn-back-dash2">Cancel</button>
      <button class="btn btn-primary">Submit Endorsement →</button>
    </div>
  </div>`;
}

function bindCustomer() {
  const logout = $('#btn-logout');
  if (logout) logout.addEventListener('click', () => setState({ portal: null, screen: 'dashboard' }));
  const endorse = $('#btn-endorsement');
  if (endorse) endorse.addEventListener('click', () => setState({ screen: 'endorsement' }));
  const newReq = $('#btn-new-request');
  if (newReq) newReq.addEventListener('click', () => setState({ screen: 'endorsement' }));
  const back = $('#btn-back-dash');
  if (back) back.addEventListener('click', () => setState({ screen: 'dashboard' }));
  const back2 = $('#btn-back-dash2');
  if (back2) back2.addEventListener('click', () => setState({ screen: 'dashboard' }));
  // Radio pills
  $$('.radio-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      $$('.radio-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
}

// ════════════════════════════════════════════════════════════════
// BROKER PORTAL
// ════════════════════════════════════════════════════════════════
function brokerNav() {
  const items = [
    { icon: '📊', label: 'Dashboard', screen: 'dashboard' },
    { icon: '👥', label: 'Clients', screen: 'clients' },
    { icon: '🌱', label: 'Prospects', screen: 'prospects' },
    { icon: '🚀', label: 'Onboarding', screen: 'onboarding' },
    { icon: '📁', label: 'Submissions', screen: 'submission' },
    { icon: '💬', label: 'Quotes', screen: 'quotes' },
    { icon: '🔒', label: 'Bindings', screen: 'bindings' },
    { icon: '📋', label: 'Policies', screen: 'policies' },
    { icon: '🔔', label: 'Renewals', screen: 'renewals' },
    { icon: '💰', label: 'Commissions', screen: 'commissions' },
    { icon: '📝', label: 'Claims', screen: 'claims' },
    { icon: '📅', label: 'Activity', screen: 'activity' },
    { icon: '📄', label: 'Documents', screen: 'documents' },
    { icon: '🎯', label: 'Market', screen: 'market' },
    { icon: '🏢', label: 'Carriers', screen: 'carriers' },
  ];
  return `
  <nav class="side-nav broker-side-nav">
    ${items.map(i => `
      <div class="side-nav-item${state.screen === i.screen && i.label.toLowerCase().includes(state.screen.substring(0,4)) ? ' active' : ''}" data-screen="${i.screen}" data-label="${i.label}">
        <span class="side-nav-item-icon">${i.icon}</span>
        <span>${i.label}</span>
      </div>
    `).join('')}
    <div class="side-nav-cta">
      <button class="btn btn-primary" style="width:100%" id="btn-new-submission">+ New Submission</button>
    </div>
  </nav>`;
}

function renderBrokerPortal() {
  const u = D.USERS.broker;
  let content;
  const routes = {
    'submission': renderBrokerWizard,
    'commissions': renderBrokerCommissions,
    'carriers': renderBrokerCarriers,
    'carrier-details': renderBrokerCarrierDetails,
    'carrier-appetite': renderCarrierAppetiteMatrix,
    'carrier-scorecard': renderCarrierScorecard,
    'carrier-integrations': renderCarrierIntegrations,
    'carrier-comparison-tool': renderCarrierComparisonTool,
    'carrier-analytics': renderBrokerCarrierAnalytics,
    'onboarding': renderOnboardingDashboard,
    'onboarding-wizard': renderOnboardingWizard,
    'onboarding-details': renderOnboardingDetails,
    'onboarding-checklist': renderOnboardingChecklist,
    'onboarding-analytics': renderOnboardingAnalytics,
    'commission-recon': renderCommissionRecon,
    'commission-exception': renderCommissionException,
    'commission-producer': renderCommissionProducer,
    'commission-payout-approval': renderCommissionPayoutApproval,
    'commission-schedules': renderCommissionSchedules,
    'commission-statements': renderCommissionStatements,
    'commission-reports': renderCommissionReports,
    'commission-1099': renderCommission1099,
    'quotes': renderBrokerQuotes,
    'quote-details': renderBrokerQuoteDetails,
    'quote-comparison': renderQuoteComparison,
    'quote-expiring': renderQuoteExpiring,
    'quote-analytics': renderQuoteAnalytics,
    'proposal-generator': renderProposalGenerator,
    'bindings': renderBrokerBindings,
    'binding-details': renderBrokerBindingDetails,
    'binding-wizard': renderBindingWizard,
    'esign-dashboard': renderEsignDashboard,
    'binder-preview': renderBinderPreview,
    'binding-analytics': renderBindingAnalytics,
    'policies': renderBrokerPolicies,
    'policy-details': renderBrokerPolicyDetails,
    'policy-pdf': renderPolicyPdfPreview,
    'policies-analytics': renderPoliciesAnalytics,
    'policies-coi-center': renderPoliciesCOICenter,
    'policies-ai': renderPoliciesAIAssistant,
    'renewals': renderBrokerRenewals,
    'renewal-details': renderBrokerRenewalDetails,
    'renewal-calendar': renderRenewalCalendar,
    'renewal-comparison': renderRenewalComparison,
    'renewal-lost-analysis': renderRenewalLostAnalysis,
    'renewal-analytics': renderRenewalAnalytics,
    'claims': renderBrokerClaims,
    'claim-details': renderBrokerClaimDetails,
    'fnol': renderFNOLWizard,
    'claims-analytics': renderClaimsAnalytics,
    'activity': renderActivityDashboard,
    'activity-calendar': renderActivityCalendar,
    'activity-feed': renderActivityFeed,
    'activity-rules': renderActivityRules,
    'activity-analytics': renderActivityAnalytics,
    'activity-details': renderActivityDetails,
    'clients': renderBrokerClients,
    'client-details': renderBrokerClientDetails,
    'clients-book': renderClientsBookOfBusiness,
    'clients-segmentation': renderClientsSegmentation,
    'clients-retention': renderClientsRetention,
    'clients-crosssell': renderClientsCrossSell,
    'clients-ai': renderClientsAIAssistant,
    'policy-loss-runs': renderBrokerLossRuns,
    'policy-edit': renderBrokerPolicyEdit,
    'policy-renew': renderBrokerPolicyRenew,
    'policy-cancel': renderBrokerPolicyCancel,
    'coi-workbench': renderBrokerCOIWorkbench,
    'documents': renderDocumentsLibrary,
    'document-details': renderDocumentDetails,
    'document-esign': renderDocumentEsignCenter,
    'document-upload': renderDocumentUploadCenter,
    'document-checklist': renderDocumentChecklistDashboard,
    'document-compliance': renderDocumentComplianceReport,
    'document-analytics': renderDocumentAnalytics,
    'document-ai': renderDocumentAIAssistant,
    'market': renderMarketDashboard,
    'market-submission': renderMarketSubmissionDetail,
    'market-wizard': renderMarketRoutingWizard,
    'market-appetite': renderMarketAppetiteLibrary,
    'market-quotes': renderMarketQuoteComparison,
    'market-analytics': renderMarketAnalytics,
    'market-ai': renderMarketAIAssistant,
    'prospects': renderProspectsDashboard,
    'prospects-kanban': renderProspectsKanban,
    'prospects-list': renderProspectsList,
    'prospect-details': renderProspectDetail,
    'prospect-wizard': renderProspectQualificationWizard,
    'prospects-lost': renderProspectsLostAnalyzer,
    'prospects-import': renderProspectsImportCenter,
    'prospects-analytics': renderProspectsAnalytics
  };
  
  content = routes[state.screen] ? routes[state.screen]() : renderBrokerDashboard();

  return `
  <div class="top-bar broker-top-bar">
    <div class="top-bar-brand">
      <span class="top-bar-brand-icon">🔷</span>
      <span>NEXUS BROKER PORTAL</span>
      <span style="color:var(--text-muted); margin-left: var(--space-sm);">│ ${u.company}</span>
    </div>
    <div class="top-bar-right">
      <div class="top-bar-user">
        <span>${u.name}</span>
        <div class="top-bar-user-avatar" style="background:var(--broker-accent)">${u.avatar}</div>
      </div>
      <button class="btn btn-ghost btn-sm" id="btn-logout">⎋</button>
    </div>
  </div>
  <div class="app-layout">
    ${brokerNav()}
    <div class="main-content">
      <div class="page-content">${content}</div>
    </div>
  </div>`;
}

function renderBrokerDashboard() {
  return `
  <!-- GLOBAL HEADER & ACTION STRIP -->
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-xl);">
    <div style="flex: 1; max-width: 400px; position: relative;">
      <input type="text" 
             class="form-input" 
             placeholder="Search (Account, LOB, Policy #)..." 
             style="width:100%; padding-left:36px;" 
             value="${state.searchQuery || ''}"
             oninput="window.handleGlobalSearch(this.value)"
             autocomplete="off">
      <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--text-muted);">🔍</span>
      ${state.searchQuery ? renderSearchResults() : ''}
    </div>
    <div style="display: flex; gap: var(--space-sm);">
      <button class="btn btn-primary" onclick="window.setState({screen: 'submission', wizardStep: 1})">+ New Submission</button>
      <button class="btn btn-secondary" onclick="window.setState({screen: 'coi-workbench'})">📄 Issue COI</button>
      <button class="btn btn-ghost" onclick="console.log('Viewing Alerts')">🔔 Alerts <span style="background:var(--status-red); color:#fff; border-radius:10px; padding:2px 6px; font-size:0.7rem; margin-left:4px;">3</span></button>
    </div>
  </div>

  <!-- PORTFOLIO HEALTH SUMMARY (KPIs) -->
  <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-md); margin-bottom: var(--space-xl);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-lg);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600; margin-bottom:8px;">Active Clients</div>
      <div style="font-size:1.4rem; font-weight:700;">245 <span style="font-size:0.8rem; font-weight:normal; color:var(--status-green);">+12 YTD</span></div>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-lg);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600; margin-bottom:8px;">Written Premium</div>
      <div style="font-size:1.4rem; font-weight:700;">$12.4M <span style="font-size:0.8rem; font-weight:normal; color:var(--status-green);">+4% YTD</span></div>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-lg); border-top: 3px solid var(--status-red);">
      <div style="font-size:0.75rem; color:var(--status-red); text-transform:uppercase; font-weight:600; margin-bottom:8px;">Renewal At Risk</div>
      <div style="font-size:1.4rem; font-weight:700;">$240k <span style="font-size:0.8rem; font-weight:normal; color:var(--text-muted);">(14 policies)</span></div>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-lg);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600; margin-bottom:8px;">Quote-to-Bind</div>
      <div style="font-size:1.4rem; font-weight:700;">42% <span style="font-size:0.8rem; font-weight:normal; color:var(--status-amber);">(! low)</span></div>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-lg);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600; margin-bottom:8px;">Open Tasks</div>
      <div style="font-size:1.4rem; font-weight:700;">12 <span style="font-size:0.8rem; font-weight:normal; color:var(--status-red);">(4 Red)</span></div>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-lg);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:600; margin-bottom:8px;">Comm Pending</div>
      <div style="font-size:1.4rem; font-weight:700; color:var(--status-green);">$45,200</div>
    </div>
  </div>

  <!-- MAIN OPERATIONAL GRID -->
  <div style="display:grid; grid-template-columns: 2.2fr 1fr; gap: var(--space-xl);">
    
    <!-- LEFT COLUMN: RISK & PIPELINE -->
    <div style="display:flex; flex-direction:column; gap: var(--space-xl);">
      
      <!-- Renewals Table -->
      <div class="data-table-wrapper" style="margin:0;">
        <div class="data-table-header" style="justify-content:space-between;">
          <h3 style="font-size:0.9rem;">RENEWAL RISK & EXPIRING POLICIES <span style="font-weight:normal;color:var(--text-muted);">(Next 90 Days)</span></h3>
          <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'renewals'})">View All →</button>
        </div>
        <table class="data-table" style="font-size:0.85rem;">
          <thead><tr><th>Client</th><th>LOB</th><th>Carrier</th><th>Exc</th><th>Premium</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td><strong style="color:var(--text-primary); cursor:pointer;" onclick="window.setState({screen:'client-details', clientTab:'overview'})">Magnolia Const.</strong></td><td>WC</td><td>SEMC</td><td><strong style="color:var(--status-red);">28d</strong></td><td>$170k</td><td><button class="btn btn-primary btn-sm" onclick="window.setState({screen:'renewal-details'})">Quote</button></td></tr>
            <tr><td><strong style="color:var(--text-primary);">Ridge Builders</strong></td><td>BOP</td><td>AMTrust</td><td><strong style="color:var(--status-amber);">45d</strong></td><td>$93k</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'submission', wizardStep:1})">Market</button></td></tr>
            <tr><td><strong style="color:var(--text-primary);">Ocean Logistics</strong></td><td>Auto</td><td>Progressive</td><td><span style="color:var(--status-green);">62d</span></td><td>$12k</td><td><button class="btn btn-ghost btn-sm" disabled>Pend</button></td></tr>
          </tbody>
        </table>
      </div>

      <!-- Pipeline Table -->
      <div class="data-table-wrapper" style="margin:0;">
        <div class="data-table-header" style="justify-content:space-between;">
          <h3 style="font-size:0.9rem;">SUBMISSION PIPELINE <span style="font-weight:normal;color:var(--text-muted);">(In-Market)</span></h3>
          <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'submission'})">View All →</button>
        </div>
        <table class="data-table" style="font-size:0.85rem;">
          <thead><tr><th>Sub ID</th><th>Client</th><th>Stage</th><th>Age</th><th>Due</th></tr></thead>
          <tbody>
            <tr style="cursor:pointer;" onclick="window.setState({screen:'quote-details'})"><td>S-882</td><td><strong style="color:var(--text-primary);">TechCorp Inc</strong></td><td>${badge('amber', 'Negotiating')}</td><td>14d</td><td>04/22</td></tr>
            <tr style="cursor:pointer;" onclick="window.setState({screen:'quote-details'})"><td>S-889</td><td><strong style="color:var(--text-primary);">Coastal Realty</strong></td><td>${badge('blue', 'Quoted')}</td><td>4d</td><td>04/25</td></tr>
            <tr style="cursor:pointer;" onclick="window.setState({screen:'submission', wizardStep:4})"><td>S-890</td><td><strong style="color:var(--text-primary);">Delta Logistics</strong></td><td>${badge('gray', 'Submitted')}</td><td style="color:var(--status-red);font-weight:bold;">18d</td><td>04/18</td></tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- RIGHT COLUMN: ALERTS & EXCEPTIONS -->
    <div style="display:flex; flex-direction:column; gap: var(--space-xl);">
      
      <!-- Servicing Alerts -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <h3 style="font-size:0.9rem; margin-bottom:var(--space-md); text-transform:uppercase;">SERVICING & ALERTS</h3>
        <div style="display:flex; flex-direction:column; gap:12px; font-size:0.85rem;">
          <div style="display:flex; gap:12px; align-items:flex-start; padding-bottom:12px; border-bottom:1px solid var(--border-subtle);">
            <div style="color:var(--status-amber); font-size:1.2rem;">⚠️</div>
            <div>
              <div style="font-weight:600; color:var(--text-primary); margin-bottom:2px;">Missing Loss Runs</div>
              <div style="color:var(--text-muted);">Client: TechCorp Inc · Carrier: Liberty</div>
              <div style="margin-top:6px; color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'policy-loss-runs'})">Request from Carrier →</div>
            </div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start; padding-bottom:12px; border-bottom:1px solid var(--border-subtle);">
            <div style="color:var(--status-red); font-size:1.2rem;">🚨</div>
            <div>
              <div style="font-weight:600; color:var(--text-primary); margin-bottom:2px;">COI Expiration Alert</div>
              <div style="color:var(--text-muted);">Holder: City of Sacramento <span style="color:var(--status-red);font-weight:bold;">(in 5 days)</span></div>
              <div style="margin-top:6px; color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'coi-workbench'})">Generate Override COI →</div>
            </div>
          </div>
          <div style="display:flex; gap:12px; align-items:flex-start; cursor:pointer;" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">
            <div style="color:var(--status-red); font-size:1.2rem;">🚨</div>
            <div>
              <div style="font-weight:600; color:var(--text-primary); margin-bottom:2px;">Open Claim Escalation</div>
              <div style="color:var(--text-muted);">Harbor Foods · Fire · Rsrv $285k · SLA OVERDUE</div>
              <div style="margin-top:6px; color:var(--mga-accent); cursor:pointer;">Open Claim 360° →</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity Feed -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <h3 style="font-size:0.9rem; margin-bottom:var(--space-md); text-transform:uppercase;">RECENT EXCEPTIONS</h3>
        <div style="display:flex; flex-direction:column; gap:16px; font-size:0.85rem;">
          <div style="display:flex; gap:12px; position:relative;">
            <div style="width:2px; background:var(--mga-accent); position:absolute; left:4px; top:16px; bottom:-16px;"></div>
            <div style="width:10px; height:10px; border-radius:50%; background:var(--mga-accent); z-index:1; margin-top:4px;"></div>
            <div>
              <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:2px;">09:15 AM (Today)</div>
              <div>Policy Bound: <strong>Magnolia Const (WC)</strong></div>
            </div>
          </div>
          <div style="display:flex; gap:12px; position:relative;">
            <div style="width:2px; background:var(--border-subtle); position:absolute; left:4px; top:16px; bottom:-16px;"></div>
            <div style="width:10px; height:10px; border-radius:50%; background:var(--status-red); z-index:1; margin-top:4px;"></div>
            <div>
              <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:2px;">08:42 AM (Today)</div>
              <div>Missing Subj: <strong>TRIA Form</strong></div>
            </div>
          </div>
          <div style="display:flex; gap:12px; position:relative;">
            <div style="width:10px; height:10px; border-radius:50%; background:var(--border-subtle); z-index:1; margin-top:4px;"></div>
            <div>
              <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:2px;">Yesterday</div>
              <div>New Quote: <strong>SEMC (Sub S-882)</strong></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>`;
}

// ─── Global Search Logic ───
window.handleGlobalSearch = function(query) {
  if (!query) {
    setState({ searchQuery: '', searchResults: null });
    return;
  }

  const q = query.toLowerCase();
  
  // Filter Categories from D (imported data)
  const clients = D.brokerClients.filter(c => c.name.toLowerCase().includes(q));
  const policies = D.brokerPoliciesList.filter(p => p.id.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.type.toLowerCase().includes(q));
  const quotes = D.brokerQuotes.filter(qte => qte.client.toLowerCase().includes(q) || qte.carrier.toLowerCase().includes(q));

  setState({ 
    searchQuery: query, 
    searchResults: { clients, policies, quotes } 
  });
};

function renderSearchResults() {
  const { clients, policies, quotes } = state.searchResults || { clients: [], policies: [], quotes: [] };
  const hasResults = clients.length > 0 || policies.length > 0 || quotes.length > 0;

  if (!hasResults) {
    return `
    <div class="search-results-overlay">
      <div style="padding:var(--space-md); text-align:center; color:var(--text-muted); font-size:0.85rem;">
        No results found for "${state.searchQuery}"
      </div>
    </div>`;
  }

  const renderGroup = (title, items, type) => {
    if (items.length === 0) return '';
    return `
      <div class="search-result-category">${title}</div>
      ${items.map(item => `
        <div class="search-result-item" onclick="window.handleSearchResultClick('${type}', \`${item.id || item.name}\`)">
          <div>
            <div class="search-result-title">${item.name || item.client}</div>
            <div class="search-result-meta">${item.id || item.type || item.premium || ''} ${item.carrier ? ' | ' + item.carrier : ''}</div>
          </div>
          <div style="color:var(--text-muted);">→</div>
        </div>
      `).join('')}
    `;
  };

  return `
  <div class="search-results-overlay">
    ${renderGroup('Active Accounts', clients, 'client')}
    ${renderGroup('Policies', policies, 'policy')}
    ${renderGroup('Recent Quotes', quotes, 'quote')}
  </div>
  `;
}

window.handleSearchResultClick = function(type, id) {
  if (type === 'client') {
    setState({ screen: 'client-details', searchQuery: '', searchResults: null });
  } else if (type === 'policy') {
    setState({ screen: 'policy-details', searchQuery: '', searchResults: null });
  } else if (type === 'quote') {
    setState({ screen: 'quote-details', searchQuery: '', searchResults: null });
  }
};

function renderBrokerQuotes() {
  const stage = state.quoteStage || 'all';
  const filters = state.quoteFilters || {};
  let rows = D.quotesList;
  if (stage !== 'all') rows = rows.filter(q => q.stage === stage);
  if (filters.lob && filters.lob !== 'All') rows = rows.filter(q => q.lob.includes(filters.lob));
  if (filters.producer && filters.producer !== 'All') rows = rows.filter(q => q.producer === filters.producer);
  if (filters.client_type && filters.client_type !== 'All') {
    if (filters.client_type === 'Existing') rows = rows.filter(q => !q.is_prospect);
    if (filters.client_type === 'Prospect') rows = rows.filter(q => q.is_prospect);
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(r => (r.id + ' ' + r.client + ' ' + r.lob + ' ' + (r.best_carrier||'')).toLowerCase().includes(q));
  }

  // Pipeline tabs with counts and value
  const stageCounts = D.quoteStages.slice(0, 5).map(s => ({
    ...s,
    count: D.quotesList.filter(q => q.stage === s.id).length,
    value: D.quotesList.filter(q => q.stage === s.id).reduce((sum, q) => sum + (q.best_premium || 0), 0)
  }));

  const tab = (id, label, count) => `<div data-q-stage="${id}" style="padding:var(--space-sm) var(--space-md); cursor:pointer; ${stage===id?'border-bottom:2px solid var(--mga-accent); color:var(--text-primary); font-weight:600;':'color:var(--text-muted);'}">${label}${count !== undefined ? ` <span style="background:rgba(255,255,255,0.08); padding:1px 6px; border-radius:8px; font-size:0.75rem; margin-left:4px;">${count}</span>`:''}</div>`;

  const stageBadge = (id) => {
    const s = D.quoteStages.find(s => s.id === id);
    return s ? badge(s.color, s.label) : '';
  };

  const apptColor = (s) => s === null ? 'var(--text-muted)' : s >= 85 ? 'var(--status-green)' : s >= 65 ? 'var(--status-amber)' : 'var(--status-red)';

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Quote Management</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'quote-expiring'})">⏰ Expiring</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'quote-analytics'})">📊 Analytics</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'submission', wizardStep:1})">+ New Quote</button>
    </div>
  </div>

  ${kpiCards(D.brokerQuotesKPIs, 6)}

  <!-- Pipeline Funnel -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
      <div class="section-title" style="margin:0;">QUOTE PIPELINE</div>
      <div style="font-size:0.85rem; color:var(--text-muted);">Total: $${(D.quotesList.reduce((s,q)=>s+(q.best_premium||0),0)/1000).toFixed(0)}k · Click any stage to filter</div>
    </div>
    <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-sm);">
      ${stageCounts.map((s, i) => {
        const colorVar = s.color === 'red' ? 'var(--status-red)' : s.color === 'amber' ? 'var(--status-amber)' : s.color === 'green' ? 'var(--status-green)' : s.color === 'gray' ? 'var(--text-muted)' : 'var(--mga-accent)';
        return `
        <div data-q-stage="${s.id}" style="cursor:pointer; background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); border-left:3px solid ${colorVar}; ${stage===s.id?'outline:1px solid '+colorVar+';':''}">
          <div style="color:var(--text-muted); font-size:0.7rem; text-transform:uppercase; margin-bottom:4px;">${i+1}. ${s.label}</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div style="font-size:1.5rem; font-weight:700;">${s.count}</div>
            <div style="color:${colorVar}; font-size:0.85rem; font-weight:600;">${s.value > 0 ? '$'+(s.value/1000).toFixed(0)+'k' : '—'}</div>
          </div>
          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:4px;">${s.desc}</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div style="display:flex; border-bottom:1px solid var(--border-subtle); margin: var(--space-lg) 0;">
    ${tab('all', 'All', D.quotesList.length)}
    ${tab('draft', 'Draft', D.quotesList.filter(q => q.stage === 'draft').length)}
    ${tab('market', 'In Market', D.quotesList.filter(q => q.stage === 'market').length)}
    ${tab('quoted', 'Quoted', D.quotesList.filter(q => q.stage === 'quoted').length)}
    ${tab('presented', 'Presented', D.quotesList.filter(q => q.stage === 'presented').length)}
    ${tab('bound', 'Bound', D.quotesList.filter(q => q.stage === 'bound').length)}
    ${tab('lost', 'Lost', D.quotesList.filter(q => q.stage === 'lost').length)}
  </div>

  <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap;">
    <input class="form-input" id="q-search" placeholder="Search quote ID, client, carrier, LOB..." value="${filters.search||''}" style="flex:1; min-width:240px;"/>
    <select class="form-input" id="q-lob" style="width:200px;">
      <option value="All">All LOBs</option>
      ${D.quoteLOBs.map(g => `<optgroup label="${g.group}">${g.items.map(l => `<option value="${l}" ${filters.lob===l?'selected':''}>${l}</option>`).join('')}</optgroup>`).join('')}
    </select>
    <select class="form-input" id="q-producer" style="width:160px;"><option value="All">All Producers</option>${['Sarah Chen','Mike Torres','Lisa Park','David Kim'].map(p => `<option ${filters.producer===p?'selected':''}>${p}</option>`).join('')}</select>
    <select class="form-input" id="q-client-type" style="width:160px;">${['All','Existing','Prospect'].map(t => `<option value="${t}" ${filters.client_type===t?'selected':''}>${t==='All'?'All Clients':t}</option>`).join('')}</select>
    <button class="btn btn-ghost btn-sm" id="q-reset">Reset</button>
  </div>

  <div class="data-table-wrapper">
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr>
        <th>Quote ID</th><th>Client / Prospect</th><th>LOB</th><th>Effective</th><th>Carriers</th><th>Best Premium</th><th>Best Carrier</th><th>Appetite</th><th>Stage</th><th>Expires</th><th>Producer</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${rows.length === 0 ? `<tr><td colspan="12" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No quotes match these filters.</td></tr>` : rows.map(q => `
        <tr style="${q.expires && new Date(q.expires) < new Date('2026-04-25') && q.stage !== 'bound' && q.stage !== 'lost' ? 'background:rgba(255,167,38,0.04);' : ''}">
          <td style="white-space:nowrap;"><strong style="color:var(--mga-accent); cursor:pointer; font-family:monospace;" onclick="window.setState({screen:'quote-details', currentQuoteId:'${q.id}'})">${q.id}</strong>${q.tags.length ? `<div style="margin-top:2px;">${q.tags.map(t => `<span style="font-size:0.65rem; color:var(--mga-accent); margin-right:4px;">${t}</span>`).join('')}</div>` : ''}</td>
          <td style="white-space:nowrap;">${q.client}${q.is_prospect ? '<span style="font-size:0.65rem; background:rgba(255,167,38,0.15); color:var(--status-amber); padding:1px 6px; border-radius:8px; margin-left:6px;">PROSPECT</span>' : ''}</td>
          <td style="white-space:nowrap;">${q.lob}</td>
          <td style="white-space:nowrap;">${q.effective}</td>
          <td><strong>${q.carriers_count}</strong></td>
          <td style="white-space:nowrap;">${q.best_premium ? '<strong>$' + q.best_premium.toLocaleString() + '</strong>' : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="font-size:0.85rem; white-space:nowrap;">${q.best_carrier || '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="white-space:nowrap;">${q.appetite_match !== null ? `<div style="display:flex; align-items:center; gap:6px;"><div style="width:36px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${q.appetite_match}%; background:${apptColor(q.appetite_match)};"></div></div><strong style="color:${apptColor(q.appetite_match)};">${q.appetite_match}</strong></div>` : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="white-space:nowrap;">${stageBadge(q.stage)}${q.lost_reason ? `<div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">${q.lost_reason}</div>` : ''}</td>
          <td style="font-size:0.85rem; white-space:nowrap; ${q.expires && new Date(q.expires) < new Date('2026-04-25') && q.stage !== 'bound' && q.stage !== 'lost' ? 'color:var(--status-amber); font-weight:600;' : ''}">${q.expires || '—'}</td>
          <td style="font-size:0.85rem; white-space:nowrap;">${q.producer}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'quote-details', currentQuoteId:'${q.id}'})">Open</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
    <div style="padding: var(--space-md); color: var(--text-muted); font-size: 0.8rem;">Showing ${rows.length} quote${rows.length===1?'':'s'} · Pipeline: $${(rows.reduce((s,q)=>s+(q.best_premium||0),0)/1000).toFixed(0)}k</div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Comparative rater pings 10–100+ carriers in parallel via API + IVANS + EZLynx. Real-time appetite check filters out unlikely fits. Quotes auto-expire after 30 days; presentation triggers a 3-day follow-up task. Goal: 70%+ of new business from quoted opportunities.
  </div>`;
}

function renderBrokerBindings() {
  const stage = state.bindingStage || 'all';
  const filters = state.bindingFilters || {};
  let rows = D.bindingsList;
  if (stage !== 'all') rows = rows.filter(b => b.stage === stage);
  if (filters.type && filters.type !== 'All') rows = rows.filter(b => b.type === filters.type);
  if (filters.carrier && filters.carrier !== 'All') rows = rows.filter(b => b.carrier.includes(filters.carrier));
  if (filters.producer && filters.producer !== 'All') rows = rows.filter(b => b.producer === filters.producer);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(r => (r.id + ' ' + r.client + ' ' + r.lob + ' ' + r.carrier).toLowerCase().includes(q));
  }

  // Pipeline summary per stage
  const stageCounts = D.bindingStages.slice(0, 6).map(s => ({
    ...s,
    count: D.bindingsList.filter(b => b.stage === s.id).length,
    value: D.bindingsList.filter(b => b.stage === s.id).reduce((sum, b) => sum + b.premium, 0)
  }));

  const tab = (id, label, count) => `<div data-bind-stage="${id}" style="padding:var(--space-sm) var(--space-md); cursor:pointer; ${stage===id?'border-bottom:2px solid var(--mga-accent); color:var(--text-primary); font-weight:600;':'color:var(--text-muted);'}">${label}${count !== undefined ? ` <span style="background:rgba(255,255,255,0.08); padding:1px 6px; border-radius:8px; font-size:0.75rem; margin-left:4px;">${count}</span>`:''}</div>`;

  const stageBadge = (id) => {
    const s = D.bindingStages.find(s => s.id === id);
    return s ? badge(s.color, s.label) : '';
  };

  const carriers = [...new Set(D.bindingsList.map(b => b.carrier.split('/')[0].trim()))];

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Binding Management</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'esign-dashboard'})">✍ e-Signatures</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'binding-analytics'})">📊 Analytics</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'binding-wizard', bindingStep:1})">+ Start Binding</button>
    </div>
  </div>

  ${kpiCards(D.brokerBindingsKPIs, 6)}

  <!-- Pipeline Funnel (6 stages) -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
      <div class="section-title" style="margin:0;">BINDING PIPELINE — 6 STAGES</div>
      <div style="font-size:0.85rem; color:var(--text-muted);">Total: $${(D.bindingsList.reduce((s,b)=>s+b.premium,0)/1000).toFixed(0)}k · Click any stage to filter</div>
    </div>
    <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:var(--space-sm);">
      ${stageCounts.map(s => {
        const colorVar = s.color === 'red' ? 'var(--status-red)' : s.color === 'amber' ? 'var(--status-amber)' : s.color === 'green' ? 'var(--status-green)' : s.color === 'gray' ? 'var(--text-muted)' : 'var(--mga-accent)';
        return `
        <div data-bind-stage="${s.id}" style="cursor:pointer; background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); border-left:3px solid ${colorVar}; ${stage===s.id?'outline:1px solid '+colorVar+';':''}">
          <div style="color:var(--text-muted); font-size:0.7rem; text-transform:uppercase; margin-bottom:4px;">${s.order}. ${s.label}</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div style="font-size:1.5rem; font-weight:700;">${s.count}</div>
            <div style="color:${colorVar}; font-size:0.8rem; font-weight:600;">${s.value > 0 ? '$'+(s.value/1000).toFixed(0)+'k' : '—'}</div>
          </div>
          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:4px;">${s.desc}</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div style="display:flex; border-bottom:1px solid var(--border-subtle); margin: var(--space-lg) 0;">
    ${tab('all', 'All', D.bindingsList.length)}
    ${tab('app', 'Application', D.bindingsList.filter(b => b.stage === 'app').length)}
    ${tab('submitted', 'Submitted', D.bindingsList.filter(b => b.stage === 'submitted').length)}
    ${tab('uw', 'UW Review', D.bindingsList.filter(b => b.stage === 'uw').length)}
    ${tab('esig', 'e-Sig', D.bindingsList.filter(b => b.stage === 'esig').length)}
    ${tab('binder', 'Binder', D.bindingsList.filter(b => b.stage === 'binder').length)}
    ${tab('issued', 'Issued', D.bindingsList.filter(b => b.stage === 'issued').length)}
    ${tab('declined', 'Declined', D.bindingsList.filter(b => b.stage === 'declined').length)}
  </div>

  <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap;">
    <input class="form-input" id="b-search" placeholder="Search binding ID, client, carrier..." value="${filters.search||''}" style="flex:1; min-width:240px;"/>
    <select class="form-input" id="b-type" style="width:200px;"><option value="All">All Types</option>${D.bindingTypes.map(t => `<option ${filters.type===t?'selected':''}>${t}</option>`).join('')}</select>
    <select class="form-input" id="b-carrier" style="width:170px;"><option value="All">All Carriers</option>${carriers.map(c => `<option ${filters.carrier===c?'selected':''}>${c}</option>`).join('')}</select>
    <select class="form-input" id="b-producer" style="width:160px;"><option value="All">All Producers</option>${['Sarah Chen','Mike Torres','Lisa Park','David Kim'].map(p => `<option ${filters.producer===p?'selected':''}>${p}</option>`).join('')}</select>
    <button class="btn btn-ghost btn-sm" id="b-reset">Reset</button>
  </div>

  <div class="data-table-wrapper">
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr>
        <th>Binding ID</th><th>Client</th><th>Type</th><th>LOB</th><th>Carrier</th><th>Premium</th><th>Effective</th><th>Subjectivities</th><th>e-Sig</th><th>Payment</th><th>Stage</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${rows.length === 0 ? `<tr><td colspan="12" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No bindings match these filters.</td></tr>` : rows.map(b => {
          const subjPct = b.subj_total > 0 ? (b.subj_done / b.subj_total) * 100 : 100;
          return `
          <tr style="${b.subj_total > b.subj_done && b.stage !== 'declined' && b.stage !== 'issued' ? 'background:rgba(255,167,38,0.04);' : ''}">
            <td style="white-space:nowrap;"><strong style="color:var(--mga-accent); cursor:pointer; font-family:monospace;" onclick="window.setState({screen:'binding-details', currentBindingId:'${b.id}'})">${b.id}</strong>${b.conditional ? '<div style="font-size:0.7rem; color:var(--status-amber);">⚠ Conditional</div>' : ''}</td>
            <td style="white-space:nowrap;">${b.client}<div style="font-family:monospace; font-size:0.7rem; color:var(--text-muted);">${b.quote_id}</div></td>
            <td style="white-space:nowrap;"><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${b.type}</span></td>
            <td style="white-space:nowrap;">${b.lob}</td>
            <td style="font-size:0.85rem; white-space:nowrap;">${b.carrier}</td>
            <td style="white-space:nowrap;"><strong>$${b.premium.toLocaleString()}</strong><div style="font-size:0.7rem; color:var(--text-muted);">${b.billing}</div></td>
            <td style="white-space:nowrap;">${b.effective}</td>
            <td>${b.subj_total === 0 ? '<span style="color:var(--text-muted);">—</span>' : `<div style="display:flex; align-items:center; gap:6px;"><div style="width:50px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${subjPct}%; background:${subjPct === 100 ? 'var(--status-green)' : subjPct >= 50 ? 'var(--status-amber)' : 'var(--status-red)'};"></div></div><strong>${b.subj_done}/${b.subj_total}</strong></div>`}</td>
            <td>${b.esig_status === 'Signed' ? badge('green', 'Signed') : b.esig_status === 'Viewed' ? badge('amber', 'Viewed') : b.esig_status === 'Sent' ? badge('blue', 'Sent') : badge('gray', 'Not Sent')}</td>
            <td>${b.payment_status === 'Applied' ? badge('green', 'Applied') : b.payment_status === 'Received' ? badge('blue', 'Received') : badge('gray', b.payment_status)}</td>
            <td>${stageBadge(b.stage)}${b.decline_reason ? `<div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">${b.decline_reason}</div>` : ''}</td>
            <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'binding-details', currentBindingId:'${b.id}'})">Open</button></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    </div>
    <div style="padding: var(--space-md); color: var(--text-muted); font-size: 0.8rem;">Showing ${rows.length} binding${rows.length===1?'':'s'} · Pipeline: $${(rows.reduce((s,b)=>s+b.premium,0)/1000).toFixed(0)}k</div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Same-day binding available for standard risks. Mobile binding supported via field-agent app. All bindings sync to Applied Epic on issuance. Goal: 80%+ of quoted business bound within 48 hours.
  </div>`;
}

function _policySubNav(active) {
  const tabs = [
    { key: 'policies',            label: 'Portfolio',   icon: '📋' },
    { key: 'policies-analytics',  label: 'Analytics',   icon: '📊' },
    { key: 'policies-coi-center', label: 'COI Center',  icon: '📄' },
    { key: 'policies-ai',         label: 'AI Assistant',icon: '🤖' }
  ];
  return `
  <div class="doc-subnav">
    ${tabs.map(t => `
      <div class="doc-subnav-tab${active === t.key ? ' active' : ''}" onclick="window.setState({screen:'${t.key}'})">
        <span>${t.icon}</span><span>${t.label}</span>
      </div>`).join('')}
  </div>`;
}

function renderBrokerPolicies() {
  const p = D.policiesExtended;
  const stageFilter = state.policyStage || 'all';
  const filters = state.policyFilters || {};
  const byStage = D.policyStages.map(s => ({ ...s, count: p.filter(x => x.stage === s.key).length, premium: p.filter(x => x.stage === s.key).reduce((sum,x) => sum + x.premium, 0) }));

  let rows = p;
  if (stageFilter !== 'all') rows = rows.filter(x => x.stage === stageFilter);
  if (filters.lob && filters.lob !== 'All') rows = rows.filter(x => x.lob === filters.lob);
  if (filters.carrier && filters.carrier !== 'All') rows = rows.filter(x => x.carrier.includes(filters.carrier));
  if (filters.producer && filters.producer !== 'All') rows = rows.filter(x => x.producer === filters.producer);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(r => (r.id + ' ' + r.client + ' ' + r.lob + ' ' + r.carrier).toLowerCase().includes(q));
  }
  const uniqLob = [...new Set(p.map(x => x.lob))];
  const uniqCarrier = [...new Set(p.map(x => x.carrier.split(' / ')[0]))];

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Policy Portfolio</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${p.length} active · $${(p.reduce((s,x)=>s+x.premium,0)/1000).toFixed(0)}k premium · live EPIC sync</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'policies-coi-center'})">📄 COI Center</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'policies-analytics'})">📊 Portfolio Analytics</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'submission', wizardStep:1})">+ New Policy</button>
    </div>
  </div>

  ${kpiCards(D.brokerPoliciesKPIs, 6)}

  ${_policySubNav('policies')}

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">POLICY STATUS PIPELINE</div>
    <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:var(--space-sm);">
      <div onclick="window.setState({policyStage:'all'})" style="cursor:pointer; background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); border-left:3px solid var(--mga-accent); ${stageFilter==='all'?'outline:1px solid var(--mga-accent);':''}">
        <div style="color:var(--text-muted); font-size:0.7rem; text-transform:uppercase;">All Policies</div>
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <div style="font-size:1.5rem; font-weight:700;">${p.length}</div>
          <div style="color:var(--mga-accent); font-size:0.85rem; font-weight:600;">$${(p.reduce((s,x)=>s+x.premium,0)/1000).toFixed(0)}k</div>
        </div>
      </div>
      ${byStage.map(s => {
        const colorVar = s.color === 'red' ? 'var(--status-red)' : s.color === 'amber' ? 'var(--status-amber)' : s.color === 'green' ? 'var(--status-green)' : s.color === 'blue' ? 'var(--status-blue)' : 'var(--text-muted)';
        return `
        <div onclick="window.setState({policyStage:'${s.key}'})" style="cursor:pointer; background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); border-left:3px solid ${colorVar}; ${stageFilter===s.key?'outline:1px solid '+colorVar+';':''}">
          <div style="color:var(--text-muted); font-size:0.7rem; text-transform:uppercase;">${s.key}</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div style="font-size:1.5rem; font-weight:700;">${s.count}</div>
            <div style="color:${colorVar}; font-size:0.8rem; font-weight:600;">$${(s.premium/1000).toFixed(0)}k</div>
          </div>
          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:4px;">${s.desc}</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; gap:var(--space-sm); margin-bottom: var(--space-md);">
      <input type="text" class="form-input" style="flex:1;" placeholder="🔍 Search policy #, client, carrier..." value="${filters.search || ''}" oninput="window.setState({policyFilters: Object.assign({}, window.state?.policyFilters || {}, {search: this.value})})"/>
      <select class="form-input" style="width:160px;" onchange="window.setState({policyFilters: Object.assign({}, window.state?.policyFilters || {}, {lob: this.value})})">
        <option>All</option>${uniqLob.map(l => `<option ${filters.lob===l?'selected':''}>${l}</option>`).join('')}
      </select>
      <select class="form-input" style="width:160px;" onchange="window.setState({policyFilters: Object.assign({}, window.state?.policyFilters || {}, {carrier: this.value})})">
        <option>All</option>${uniqCarrier.map(c => `<option ${filters.carrier===c?'selected':''}>${c}</option>`).join('')}
      </select>
      <select class="form-input" style="width:160px;" onchange="window.setState({policyFilters: Object.assign({}, window.state?.policyFilters || {}, {producer: this.value})})">
        <option>All</option>
        ${['Sarah Chen','Mike Torres','Lisa Park'].map(pr => `<option ${filters.producer===pr?'selected':''}>${pr}</option>`).join('')}
      </select>
      <button class="btn btn-ghost btn-sm" onclick="window.setState({policyFilters:{}, policyStage:'all'})">Reset</button>
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Exporting ${rows.length} policies to CSV')">Export</button>
    </div>
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr><th>Policy #</th><th>Client</th><th>LOB</th><th>Carrier</th><th>Premium</th><th>Effective</th><th>Expiry</th><th>Loss Ratio</th><th>Claims</th><th>State</th><th>Producer</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${rows.map(r => `
        <tr>
          <td style="font-family:monospace; font-size:0.82rem; white-space:nowrap;"><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'policy-details'})">${r.id}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${r.epic_id}</div></td>
          <td style="white-space:nowrap;"><strong>${r.client}</strong></td>
          <td style="white-space:nowrap;">${r.lob}</td>
          <td style="font-size:0.82rem; white-space:nowrap;">${r.carrier}</td>
          <td style="white-space:nowrap;"><strong>$${r.premium.toLocaleString()}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${r.billing}</div></td>
          <td style="font-size:0.82rem; white-space:nowrap;">${r.effective}</td>
          <td style="font-size:0.82rem; white-space:nowrap;">${r.expiry}</td>
          <td style="white-space:nowrap;"><strong style="color:${r.loss_ratio<=30?'var(--status-green)':r.loss_ratio<=60?'var(--mga-accent)':'var(--status-red)'};">${r.loss_ratio}%</strong></td>
          <td style="white-space:nowrap;">${r.claims_open>0 ? `<span style="color:var(--status-amber);">${r.claims_open} open</span>` : '—'}</td>
          <td>${r.state}</td>
          <td style="font-size:0.82rem; white-space:nowrap;">${r.producer}</td>
          <td style="white-space:nowrap;">${badge(D.policyStages.find(s => s.key===r.stage)?.color || 'gray', r.stage)}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'policy-details'})">View</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
    ${rows.length === 0 ? `<div style="text-align:center; color:var(--text-muted); padding: var(--space-xl);">No policies match this filter.</div>` : ''}
    <div style="padding: var(--space-md); color:var(--text-muted); font-size:0.8rem;">Showing ${rows.length} of ${p.length} · $${(rows.reduce((s,x)=>s+x.premium,0)/1000).toFixed(0)}k premium</div>
  </div>`;
}

function renderPoliciesAnalytics() {
  const a = D.policyAnalytics;
  const maxLob = Math.max(...a.premium_by_lob.map(x => x.premium));
  const maxCarrier = Math.max(...a.carrier_concentration.map(x => x.premium));
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Portfolio Analytics</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Premium mix · carrier concentration · loss ratios · retention · expiration calendar</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>YTD</option><option>Last 12 months</option><option>Trailing 24 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — portfolio analytics')">Export</button>
    </div>
  </div>

  ${_policySubNav('policies-analytics')}

  ${kpiCards(D.brokerPoliciesKPIs, 6)}

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin: var(--space-lg) 0;">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PREMIUM BY LOB</div>
      ${a.premium_by_lob.map(l => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${l.lob}</strong> <span style="color:var(--text-muted);">· ${l.policies} policies</span></span>
            <span><strong>$${(l.premium/1e6).toFixed(2)}M</strong> <span style="color:var(--text-muted);">(${l.share}%)</span></span>
          </div>
          <div style="background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden;"><div style="height:100%; width:${(l.premium/maxLob)*100}%; background:linear-gradient(90deg, var(--mga-accent), #a67dff);"></div></div>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CARRIER CONCENTRATION</div>
      ${a.carrier_concentration.map(c => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${c.carrier}</strong> <span style="color:var(--text-muted);">· ${c.policies} policies</span></span>
            <span><strong style="color:${c.share >= 20 ? 'var(--status-amber)' : 'var(--text-primary)'};">${c.share}%</strong> <span style="color:var(--text-muted);">$${(c.premium/1e6).toFixed(2)}M</span></span>
          </div>
          <div style="background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden;"><div style="height:100%; width:${(c.premium/maxCarrier)*100}%; background:${c.share >= 20 ? 'var(--status-amber)' : 'var(--mga-accent)'};"></div></div>
        </div>`).join('')}
      <div style="margin-top: var(--space-md); padding: var(--space-sm); background: rgba(255,171,0,0.1); border-radius:var(--radius-sm); font-size:0.78rem; color:var(--status-amber);">
        ⚠ Liberty/SEMC concentration at 27% — above 20% threshold. Consider diversification for E&O risk.
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">LOSS RATIO BY LOB vs INDUSTRY BENCHMARK</div>
    <table class="data-table">
      <thead><tr><th>LOB</th><th>Earned Premium</th><th>Incurred</th><th>Our LR</th><th>Industry Benchmark</th><th>Variance</th></tr></thead>
      <tbody>
        ${a.loss_ratio_by_lob.map(l => { const v = l.ratio - l.benchmark; return `
        <tr>
          <td><strong>${l.lob}</strong></td>
          <td>$${(l.earned/1e6).toFixed(2)}M</td>
          <td>$${(l.incurred/1e6).toFixed(2)}M</td>
          <td><strong style="color:${l.ratio<=40?'var(--status-green)':l.ratio<=60?'var(--mga-accent)':'var(--status-red)'};">${l.ratio}%</strong></td>
          <td style="color:var(--text-muted);">${l.benchmark}%</td>
          <td style="color:${v<0?'var(--status-green)':'var(--status-red)'};">${v>0?'+':''}${v} pp</td>
        </tr>`; }).join('')}
      </tbody>
    </table>
    <div style="margin-top: var(--space-sm); padding: var(--space-sm); background: rgba(0,230,118,0.1); border-radius:var(--radius-sm); font-size:0.78rem; color:var(--status-green);">
      ✓ All LOBs beat industry benchmarks. Book is outperforming peers on loss experience.
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RETENTION BY TIER (YTD ${a.retention.ytd}%)</div>
      ${a.retention.by_tier.map(t => `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${t.tier}</strong> <span style="color:var(--text-muted);">· ${t.retained} retained, ${t.lost} lost</span></span>
            <strong style="color:${t.rate>=92?'var(--status-green)':t.rate>=85?'var(--mga-accent)':'var(--status-amber)'};">${t.rate}%</strong>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${t.rate}%; background:${t.rate>=92?'var(--status-green)':t.rate>=85?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">LOST POLICIES — REASON ANALYSIS</div>
      ${a.retention.lost_reasons.map(r => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${r.reason}</strong></span>
            <span><strong>${r.count}</strong> <span style="color:var(--text-muted);">(${r.pct}%)</span></span>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${r.pct*2.5}%; background:var(--status-red); opacity:0.7;"></div></div>
        </div>`).join('')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">EXPIRATION CALENDAR (NEXT 180+ DAYS)</div>
    <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-sm);">
      ${a.expiration_calendar.map(b => {
        const colorVar = b.color === 'red' ? 'var(--status-red)' : b.color === 'amber' ? 'var(--status-amber)' : b.color === 'blue' ? 'var(--status-blue)' : 'var(--text-muted)';
        return `
        <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); border-left:3px solid ${colorVar};">
          <div style="color:var(--text-muted); font-size:0.72rem; text-transform:uppercase;">${b.bucket}</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-top:4px;">
            <div style="font-size:1.4rem; font-weight:700; color:${colorVar};">${b.count}</div>
            <div style="color:${colorVar}; font-size:0.8rem; font-weight:600;">$${(b.premium/1e6).toFixed(1)}M</div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderPoliciesCOICenter() {
  const coi = D.policyBulkCOI;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Bulk COI Center</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Issue · track · renew · distribute certificates of insurance at scale</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Bulk renewing ${coi.filter(c=>c.status==='Issued').length} expiring COIs')">🔄 Bulk Renew</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'coi-workbench'})">+ Issue COI</button>
    </div>
  </div>

  ${_policySubNav('policies-coi-center')}

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Total COIs</div><div class="kpi-value">${coi.length + 28}</div></div>
    <div class="kpi-card"><div class="kpi-label">Pending</div><div class="kpi-value warning">${coi.filter(c => c.status === 'Pending').length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Expiring &lt; 30d</div><div class="kpi-value warning">4</div></div>
    <div class="kpi-card"><div class="kpi-label">Issued (30d)</div><div class="kpi-value">22</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">CERTIFICATES OF INSURANCE</div>
    <table class="data-table">
      <thead><tr><th>Policy #</th><th>Client</th><th>Certificate Holder</th><th>Status</th><th>Issued</th><th>Expires</th><th>Action</th></tr></thead>
      <tbody>
        ${coi.map(c => `
        <tr>
          <td style="font-family:monospace; font-size:0.82rem;"><strong style="color:var(--mga-accent);">${c.policy}</strong></td>
          <td><strong>${c.client}</strong></td>
          <td>${c.holder}</td>
          <td>${badge(c.status==='Issued'?'green':'amber', c.status)}</td>
          <td style="font-size:0.82rem;">${c.issued}</td>
          <td style="font-size:0.82rem;">${c.expires}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Downloading COI for ${c.holder}')">⬇</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Sending COI to ${c.holder}')">Send</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">AUTO-ISSUANCE RULES</div>
    <div style="font-size:0.85rem; line-height:1.9;">
      <div>🔁 <strong>Annual auto-renewal</strong> 30 days before COI expiration (configurable)</div>
      <div>📧 <strong>Auto-delivery</strong> to certificate holder email + broker portal</div>
      <div>🏢 <strong>Additional Insured / Waiver of Subro</strong> applied per policy schedule</div>
      <div>⚖ <strong>Compliance check</strong> — required holder language verified</div>
      <div>📋 <strong>Audit log</strong> retained 7 years (CA DOI)</div>
    </div>
  </div>`;
}

function renderPoliciesAIAssistant() {
  const chat = D.policyAIChat;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">AI Policy Assistant</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Search, summarize, flag issues across your ${D.policiesExtended.length} policies</div>
    </div>
  </div>

  ${_policySubNav('policies-ai')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); display:flex; flex-direction:column; min-height:540px;">
      <div style="flex:1; overflow-y:auto; padding-right:8px;">
        ${chat.map(m => `
          <div class="doc-ai-msg doc-ai-msg-${m.role}">
            <div class="doc-ai-avatar doc-ai-avatar-${m.role}">${m.role==='ai'?'🤖':'🧑‍💼'}</div>
            <div class="doc-ai-bubble">${m.text.replace(/\n/g,'<br/>')}</div>
          </div>`).join('')}
      </div>
      <div style="margin-top: var(--space-md); display:flex; gap: var(--space-sm);">
        <input class="form-input" style="flex:1;" placeholder="Ask about any policy or portfolio metric..."/>
        <button class="btn btn-primary" onclick="window.showAlert('AI processing your request…')">Send →</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:var(--space-md);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SUGGESTED PROMPTS</div>
        ${[
          'Policies expiring in 45d with LR > 50%',
          'Largest carrier by premium concentration',
          'Clients with single-LOB policies (cross-sell)',
          'Summarize Magnolia\'s coverage package',
          'Which policies non-renewing by carrier?',
          'Book-of-business trend last 4 quarters'
        ].map(p => `<div class="doc-ai-prompt" onclick="window.showAlert('Running: ${p}')">${p}</div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderBrokerRenewals() {
  const scope = state.renewalStage || 'all';
  const filters = state.renewalFilters || {};
  let rows = D.renewalsList;
  if (scope !== 'all' && scope !== 'closed') rows = rows.filter(r => r.stage === scope);
  if (scope === 'closed') rows = rows.filter(r => r.stage === 'closed');
  else if (scope === 'all') rows = rows.filter(r => r.stage !== 'closed');
  if (filters.tier && filters.tier !== 'All') rows = rows.filter(r => r.tier === filters.tier);
  if (filters.lob && filters.lob !== 'All') rows = rows.filter(r => r.lob.includes(filters.lob));
  if (filters.producer && filters.producer !== 'All') rows = rows.filter(r => r.producer === filters.producer);
  if (filters.risk && filters.risk !== 'All') rows = rows.filter(r => r.retention_tier === filters.risk);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(r => (r.client + ' ' + r.policy_id + ' ' + r.carrier).toLowerCase().includes(q));
  }

  const scoreColor = (s) => s >= 85 ? 'var(--status-green)' : s >= 65 ? 'var(--status-amber)' : 'var(--status-red)';
  const deltaColor = (d) => d > 15 ? 'var(--status-red)' : d > 7 ? 'var(--status-amber)' : 'var(--status-green)';
  const tierBadge = (t) => {
    const map = { Platinum:'blue', Gold:'amber', Silver:'gray', Bronze:'gray' };
    return `<span class="badge badge-${map[t]||'gray'}"><span class="badge-dot badge-dot-${map[t]||'gray'}"></span>${t}</span>`;
  };

  // Pipeline summary per stage
  const stageCounts = D.renewalStages.slice(0, 4).map(s => ({
    ...s,
    count: D.renewalsList.filter(r => r.stage === s.id).length,
    value: D.renewalsList.filter(r => r.stage === s.id).reduce((sum, r) => sum + r.projected, 0)
  }));

  const tab = (id, label, count) => `<div data-ren-stage="${id}" style="padding:var(--space-sm) var(--space-md); cursor:pointer; ${scope===id?'border-bottom:2px solid var(--mga-accent); color:var(--text-primary); font-weight:600;':'color:var(--text-muted);'}">${label}${count !== undefined ? ` <span style="background:rgba(255,255,255,0.08); padding:1px 6px; border-radius:8px; font-size:0.75rem; margin-left:4px;">${count}</span>`:''}</div>`;

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Renewal Management</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'renewal-calendar'})">📅 Calendar</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'renewal-lost-analysis'})">📉 Lost Analysis</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'renewal-analytics'})">📊 Retention Analytics</button>
    </div>
  </div>

  ${kpiCards(D.brokerRenewalsKPIs, 6)}

  <!-- Pipeline Funnel -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
      <div class="section-title" style="margin:0;">RENEWAL PIPELINE BY STAGE</div>
      <div style="font-size:0.85rem; color:var(--text-muted);">Click a stage to filter</div>
    </div>
    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md);">
      ${stageCounts.map(s => {
        const color = s.color === 'red' ? 'var(--status-red)' : s.color === 'amber' ? 'var(--status-amber)' : 'var(--mga-accent)';
        return `
        <div data-ren-stage="${s.id}" style="cursor:pointer; background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); border-left:3px solid ${color}; ${scope===s.id?'outline:1px solid '+color+';':''}">
          <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:4px;">${s.label}</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div style="font-size:1.6rem; font-weight:700;">${s.count}</div>
            <div style="color:${color}; font-size:0.85rem; font-weight:600;">$${(s.value/1000).toFixed(0)}k</div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${s.range} to expiry</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-subtle); margin: var(--space-lg) 0;">
    <div style="display:flex;">
      ${tab('all', 'All Open', D.renewalsList.filter(r => r.stage !== 'closed').length)}
      ${tab('final', '30-day Final', D.renewalsList.filter(r => r.stage === 'final').length)}
      ${tab('market', '60-day Market', D.renewalsList.filter(r => r.stage === 'market').length)}
      ${tab('campaign', '90-day Campaign', D.renewalsList.filter(r => r.stage === 'campaign').length)}
      ${tab('early', '120-day Early', D.renewalsList.filter(r => r.stage === 'early').length)}
      ${tab('closed', 'Closed', D.renewalsList.filter(r => r.stage === 'closed').length)}
    </div>
  </div>

  <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap;">
    <input class="form-input" id="ren-search" placeholder="Search client, policy #, carrier..." value="${filters.search||''}" style="flex:1; min-width:240px;"/>
    <select class="form-input" id="ren-tier" style="width:160px;">
      ${['All','Platinum','Gold','Silver','Bronze'].map(t => `<option value="${t}" ${filters.tier===t?'selected':''}>${t==='All'?'All Tiers':t}</option>`).join('')}
    </select>
    <select class="form-input" id="ren-lob" style="width:180px;">
      ${['All','Workers Comp','General Liability','BOP','Commercial Auto','Cyber','Professional','Umbrella'].map(l => `<option value="${l}" ${filters.lob===l?'selected':''}>${l==='All'?'All LOBs':l}</option>`).join('')}
    </select>
    <select class="form-input" id="ren-producer" style="width:160px;">
      ${['All','Sarah Chen','Mike Torres','Lisa Park','David Kim'].map(p => `<option value="${p}" ${filters.producer===p?'selected':''}>${p==='All'?'All Producers':p}</option>`).join('')}
    </select>
    <select class="form-input" id="ren-risk" style="width:170px;">
      ${['All','High','Medium','At Risk'].map(r => `<option value="${r}" ${filters.risk===r?'selected':''}>${r==='All'?'Any Retention':r}</option>`).join('')}
    </select>
    <button class="btn btn-ghost btn-sm" id="ren-reset">Reset</button>
  </div>

  <div class="data-table-wrapper">
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr>
        <th>Renewal ID</th><th>Client</th><th>Tier</th><th>LOB</th><th>Expiry</th><th>Days</th>
        <th>Current → Projected</th><th>Δ%</th><th>Retention</th><th>Stage / Status</th><th>Producer</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${rows.length === 0 ? `<tr><td colspan="12" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No renewals match these filters.</td></tr>` : rows.map(r => `
        <tr style="${r.days <= 30 && r.stage !== 'closed' ? 'background:rgba(255,82,82,0.04);' : ''}">
          <td style="white-space:nowrap;"><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'renewal-details', currentRenewalId:'${r.id}'})">${r.id}</strong>${r.open_claims ? `<div style="font-size:0.7rem; color:var(--status-red);">⚠ ${r.open_claims} open claim</div>` : ''}</td>
          <td style="white-space:nowrap;">${r.client}<div style="font-family:monospace; font-size:0.7rem; color:var(--text-muted);">${r.policy_id}</div></td>
          <td style="white-space:nowrap;">${tierBadge(r.tier)}</td>
          <td style="white-space:nowrap;">${r.lob}</td>
          <td style="white-space:nowrap;">${r.expiry}</td>
          <td style="white-space:nowrap; ${r.days <= 30 ? 'color:var(--status-red); font-weight:600;' : r.days <= 60 ? 'color:var(--status-amber);' : ''}">${r.days > 0 ? r.days + 'd' : 'Closed'}</td>
          <td style="white-space:nowrap;">$${(r.current_premium/1000).toFixed(0)}k → <strong>$${(r.projected/1000).toFixed(0)}k</strong></td>
          <td style="white-space:nowrap; color:${deltaColor(r.delta_pct)}; font-weight:600;">${r.delta_pct > 0 ? '+' : ''}${r.delta_pct.toFixed(1)}%</td>
          <td style="white-space:nowrap;"><div style="display:flex; align-items:center; gap:6px;"><div style="width:36px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${r.retention_score}%; background:${scoreColor(r.retention_score)};"></div></div><strong style="color:${scoreColor(r.retention_score)};">${r.retention_score}</strong></div><div style="font-size:0.7rem; color:var(--text-muted);">${r.retention_tier}</div></td>
          <td style="white-space:nowrap;">${badge(r.statusColor, r.status)}</td>
          <td style="font-size:0.85rem; white-space:nowrap;">${r.producer}</td>
          <td><button class="btn btn-primary btn-sm" onclick="window.setState({screen:'renewal-details', currentRenewalId:'${r.id}'})">Manage</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
    <div style="padding: var(--space-md); color: var(--text-muted); font-size: 0.8rem;">
      Showing ${rows.length} renewal${rows.length===1?'':'s'} · Pipeline value: $${(rows.reduce((s,r)=>s+r.projected,0)/1000).toFixed(0)}k
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Multi-touch campaign automatically creates tasks at 90d / 60d / 45d / 20d. Retention score uses tenure + loss ratio + multi-policy + open claims + rate delta. Tiered service: Platinum clients receive white-glove renewal specialist.
  </div>`;
}

function renderBrokerClaims() {
  const scope = state.claimsScope || 'my';
  const filters = state.claimsFilters || {};
  const carriers = [...new Set(D.brokerClaimsList.map(c => (c.adjuster || '').split('—').pop().trim()).filter(Boolean))].sort();
  let rows = D.brokerClaimsList;

  // Scope narrows producer/status; explicit status filter overrides the scope's open/closed constraint
  if (scope === 'my') rows = rows.filter(c => c.producer === 'Sarah Chen');
  if (scope === 'closed') rows = rows.filter(c => c.status === 'Closed' || c.status === 'Denied');
  else if (!filters.status || filters.status === 'All') rows = rows.filter(c => c.status !== 'Closed' && c.status !== 'Denied');

  if (filters.status && filters.status !== 'All') rows = rows.filter(c => c.status === filters.status);
  if (filters.lob && filters.lob !== 'All') rows = rows.filter(c => c.lob === filters.lob);
  if (filters.carrier && filters.carrier !== 'All') rows = rows.filter(c => (c.adjuster || '').includes(filters.carrier));
  if (filters.age === '>30') rows = rows.filter(c => c.age_days > 30);
  if (filters.age === '>60') rows = rows.filter(c => c.age_days > 60);
  if (filters.amount === '>50k') rows = rows.filter(c => c.incurred > 50000);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(c =>
      c.internal_no.toLowerCase().includes(q) ||
      c.carrier_no.toLowerCase().includes(q) ||
      c.client.toLowerCase().includes(q) ||
      c.loss_type.toLowerCase().includes(q) ||
      c.lob.toLowerCase().includes(q)
    );
  }

  const agePill = (d) => {
    if (d <= 7) return `<span class="badge badge-green"><span class="badge-dot badge-dot-green"></span>${d}d</span>`;
    if (d <= 30) return `<span class="badge badge-amber"><span class="badge-dot badge-dot-amber"></span>${d}d</span>`;
    return `<span class="badge badge-red"><span class="badge-dot badge-dot-red"></span>${d}d</span>`;
  };
  const slaPill = (s) => {
    if (!s || s === 'OK' || s === 'Closed' || s === 'Denied') return `<span style="color:var(--text-muted); font-size:0.8rem;">${s || '—'}</span>`;
    if (s.startsWith('OVERDUE')) return `<span class="badge badge-red"><span class="badge-dot badge-dot-red"></span>${s}</span>`;
    return `<span class="badge badge-amber"><span class="badge-dot badge-dot-amber"></span>${s}</span>`;
  };
  const flags = (c) => [
    c.injury_flag ? '<span title="Injury" style="color:var(--status-red);">🩹</span>' : '',
    c.fraud_flag ? '<span title="Fraud flag" style="color:var(--status-red);">🚩</span>' : '',
    c.third_party_flag ? '<span title="Third-party" style="color:var(--text-muted);">👥</span>' : '',
    c.cat_flag ? '<span title="Catastrophe / large loss" style="color:var(--status-red);">⚠️</span>' : ''
  ].filter(Boolean).join(' ');

  const tab = (id, label) => `<div data-claims-scope="${id}" style="padding:var(--space-sm) var(--space-md); cursor:pointer; ${scope===id?'border-bottom:2px solid var(--mga-accent); color:var(--text-primary); font-weight:600;':'color:var(--text-muted);'}">${label}</div>`;

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Claims</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'claims-analytics'})">📊 Analytics</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'fnol', fnolStep:1, fnolDraft:{}})">+ Report New Claim</button>
    </div>
  </div>

  ${kpiCards(D.brokerClaimsKPIs, 6)}

  <div style="display:flex; border-bottom:1px solid var(--border-subtle); margin:var(--space-lg) 0;">
    ${tab('my', 'My Open Claims')}
    ${tab('team', 'Team Claims')}
    ${tab('closed', 'Closed / Denied')}
  </div>

  <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap; align-items:center;">
    <input class="form-input" id="claims-search" placeholder="Search claim #, client, carrier #, type..." value="${filters.search || ''}" style="flex:1; min-width:260px;"/>
    <select class="form-input" id="f-status" style="width:180px;">
      <option value="All">All Statuses</option>${D.claimStatuses.map(s => `<option value="${s}" ${filters.status===s?'selected':''}>${s}</option>`).join('')}
    </select>
    <select class="form-input" id="f-lob" style="width:170px;">
      ${['All','Workers Comp','General Liability','Commercial Auto','BOP','Cyber','Professional Liability'].map(l => `<option value="${l}" ${filters.lob===l?'selected':''}>${l==='All'?'All LOBs':l}</option>`).join('')}
    </select>
    <select class="form-input" id="f-carrier" style="width:170px;">
      <option value="All">All Carriers</option>
      ${carriers.map(c => `<option value="${c}" ${filters.carrier===c?'selected':''}>${c}</option>`).join('')}
    </select>
    <select class="form-input" id="f-age" style="width:130px;">
      <option value="All" ${!filters.age||filters.age==='All'?'selected':''}>Any Age</option>
      <option value=">30" ${filters.age==='>30'?'selected':''}>&gt; 30 days</option>
      <option value=">60" ${filters.age==='>60'?'selected':''}>&gt; 60 days</option>
    </select>
    <select class="form-input" id="f-amount" style="width:170px;">
      <option value="All" ${!filters.amount||filters.amount==='All'?'selected':''}>Any Amount</option>
      <option value=">50k" ${filters.amount==='>50k'?'selected':''}>High-Value &gt; $50k</option>
    </select>
    <button class="btn btn-ghost btn-sm" id="claims-reset">Reset</button>
  </div>
  ${Object.keys(filters).length > 0 ? `<div style="margin:-4px 0 var(--space-md) 0; font-size:0.8rem; color:var(--text-muted);">Active filters: ${Object.entries(filters).filter(([,v]) => v && v !== 'All').map(([k,v]) => `<span style="background:rgba(68,138,255,0.15); color:#82b1ff; padding:2px 8px; border-radius:10px; margin-right:6px;">${k}: ${v}</span>`).join('')}</div>` : ''}

  <div class="data-table-wrapper">
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr>
        <th>Claim #</th><th>Client</th><th>LOB</th><th>Loss Type</th><th>Loss Date</th>
        <th>Age</th><th>Reserve</th><th>Paid</th><th>Flags</th><th>Status</th><th>SLA</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${rows.length === 0 ? `<tr><td colspan="12" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No claims match these filters.</td></tr>` : rows.map(c => `
        <tr>
          <td style="white-space:nowrap;"><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'claim-details', claimTab:'overview', currentClaimId:'${c.id}'})">${c.internal_no}</strong><div style="font-size:0.72rem; color:var(--text-muted);">${c.carrier_no}</div></td>
          <td style="white-space:nowrap;">${c.client}</td>
          <td style="white-space:nowrap;">${c.lob}</td>
          <td style="white-space:nowrap;">${c.loss_type}</td>
          <td style="white-space:nowrap;">${c.loss_date}</td>
          <td style="white-space:nowrap;">${agePill(c.age_days)}</td>
          <td style="white-space:nowrap;">$${c.reserve.toLocaleString()}</td>
          <td style="white-space:nowrap;">$${c.paid.toLocaleString()}</td>
          <td style="white-space:nowrap;">${flags(c) || '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="white-space:nowrap;">${badge(c.statusColor, c.status)}</td>
          <td style="white-space:nowrap;">${slaPill(c.sla_due)}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'claim-details', claimTab:'overview', currentClaimId:'${c.id}'})">Open</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
    <div style="padding: var(--space-md); color: var(--text-muted); font-size: 0.8rem;">
      Showing ${rows.length} claim${rows.length===1?'':'s'} · Scope: ${scope === 'my' ? 'My Claims' : scope === 'team' ? 'Team' : 'Closed / Denied'}
    </div>
  </div>`;
}

// ════════════════════════════════════════════════════════════════
// CLAIMS — FNOL Wizard, 360° Detail, Analytics
// ════════════════════════════════════════════════════════════════
function fnolStepper() {
  const steps = ['Client/Policy', 'Loss Info', 'Parties', 'Documents', 'Review', 'Submit'];
  const step = state.fnolStep || 1;
  return `
  <div class="stepper">
    ${steps.map((s, i) => {
      const num = i + 1;
      const cls = num < step ? 'completed' : num === step ? 'active' : '';
      const lineCls = num < step ? 'completed' : '';
      return `
        <div class="stepper-step ${cls}" data-fnol-step="${num}">
          <div class="stepper-dot">${num < step ? '✓' : num}</div>
          <span>${num}. ${s}</span>
        </div>
        ${num < steps.length ? `<div class="stepper-line ${lineCls}"></div>` : ''}`;
    }).join('')}
  </div>`;
}

function renderFNOLWizard() {
  const step = state.fnolStep || 1;
  const d = state.fnolDraft || {};
  const content = [null, renderFnolStep1, renderFnolStep2, renderFnolStep3, renderFnolStep4, renderFnolStep5, renderFnolStep6][step];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" id="btn-fnol-back">← Back</button>
    <span style="margin-left: var(--space-sm); font-weight: 600;">First Notice of Loss (FNOL)${d.client ? ' — ' + d.client : ''}</span>
  </div>
  <div class="data-table-wrapper">
    ${fnolStepper()}
    <div style="padding: var(--space-xl);">
      ${content ? content(d) : ''}
    </div>
    <div class="form-footer">
      ${step > 1 ? '<button class="btn btn-secondary" id="btn-fnol-prev">← Back</button>' : '<button class="btn btn-secondary" id="btn-fnol-save-draft">Save Draft</button>'}
      ${step < 6 ? `<button class="btn btn-primary" id="btn-fnol-next">${['', 'Next: Loss Info →', 'Next: Parties →', 'Next: Documents →', 'Next: Review →', 'Submit to Carrier →'][step]}</button>` : '<button class="btn btn-primary" onclick="window.setState({screen:\'claim-details\', claimTab:\'overview\', currentClaimId:\'CLM-2026-0042\', fnolStep:1, fnolDraft:{}})">Go to Claim 360° →</button>'}
    </div>
  </div>`;
}

function renderFnolStep1(d) {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 1: Select Client & Policy</h3>
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div>
      <label class="form-label">Client</label>
      <select class="form-input" id="fnol-client">
        ${['— Select Client —', ...D.brokerClients.map(c => c.name)].map(n => `<option ${d.client===n?'selected':''}>${n}</option>`).join('')}
      </select>
    </div>
    <div>
      <label class="form-label">Policy</label>
      <select class="form-input" id="fnol-policy">
        ${['— Select Policy —', ...D.brokerPoliciesList.map(p => p.id + ' · ' + p.type)].map(n => `<option ${d.policy===n?'selected':''}>${n}</option>`).join('')}
      </select>
    </div>
  </div>
  <div style="margin-top: var(--space-lg); background: var(--bg-secondary); border:1px solid var(--border-subtle); padding: var(--space-md); border-radius: var(--radius-md); font-size:0.85rem; color:var(--text-secondary);">
    💡 Once client + policy are selected, coverage triggered and adjuster routing will be auto-populated.
  </div>`;
}

function renderFnolStep2(d) {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 2: Loss Information</h3>
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
    <div><label class="form-label">Loss Date</label><input class="form-input" type="date" id="fnol-date" value="${d.loss_date || ''}"/></div>
    <div><label class="form-label">Loss Time</label><input class="form-input" type="time" id="fnol-time" value="${d.loss_time || ''}"/></div>
    <div><label class="form-label">Loss Type</label>
      <select class="form-input" id="fnol-type">
        ${['— Select —', ...D.claimLossTypes].map(t => `<option ${d.loss_type===t?'selected':''}>${t}</option>`).join('')}
      </select>
    </div>
    <div><label class="form-label">Location of Loss</label><input class="form-input" id="fnol-location" placeholder="Street, City, State" value="${d.location || ''}"/></div>
  </div>
  <div style="margin-top: var(--space-md);">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <label class="form-label" style="margin:0;">Description</label>
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('🎤 Voice-to-text capture started (mock)')">🎤 Voice → Text</button>
    </div>
    <textarea class="form-input" id="fnol-desc" rows="5" placeholder="Describe what happened, injuries, damages...">${d.description || ''}</textarea>
  </div>
  <div style="margin-top: var(--space-md); display:flex; gap: var(--space-lg); font-size:0.9rem;">
    <label><input type="checkbox" id="fnol-injury" ${d.injury?'checked':''}/> Injury / Fatality</label>
    <label><input type="checkbox" id="fnol-third" ${d.third_party?'checked':''}/> Third-Party Involved</label>
    <label><input type="checkbox" id="fnol-police" ${d.police?'checked':''}/> Police / Fire Report Filed</label>
  </div>`;
}

function renderFnolStep3(d) {
  const parties = d.parties || [{ role: 'Claimant', name: '', contact: '' }];
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 3: Involved Parties</h3>
  <table class="data-table">
    <thead><tr><th>Role</th><th>Name</th><th>Contact / Phone</th><th>Notes</th><th></th></tr></thead>
    <tbody>
      ${parties.map((p, i) => `
      <tr>
        <td><select class="form-input" data-party="${i}" data-field="role">
          ${['Claimant','Witness','Police','Other Driver','Passenger','Third Party','Treating Provider'].map(r => `<option ${p.role===r?'selected':''}>${r}</option>`).join('')}
        </select></td>
        <td><input class="form-input" data-party="${i}" data-field="name" value="${p.name||''}" placeholder="Full name"/></td>
        <td><input class="form-input" data-party="${i}" data-field="contact" value="${p.contact||''}" placeholder="Phone or email"/></td>
        <td><input class="form-input" data-party="${i}" data-field="notes" value="${p.notes||''}" placeholder="Notes"/></td>
        <td><button class="btn btn-ghost btn-sm" data-party-remove="${i}">✕</button></td>
      </tr>`).join('')}
    </tbody>
  </table>
  <button class="btn btn-ghost" style="margin-top: var(--space-md); border:1px dashed var(--border-subtle); width:100%;" id="btn-fnol-add-party">+ Add Party</button>`;
}

function renderFnolStep4(d) {
  const files = d.files || [];
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 4: Documents, Photos & Evidence</h3>
  <div style="border:2px dashed var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-xl); text-align:center; background: var(--bg-secondary); cursor:pointer;" id="fnol-dropzone">
    <div style="font-size:2rem; margin-bottom:var(--space-sm);">📁</div>
    <div style="font-weight:600;">Drag & drop files or click to browse</div>
    <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Photos, police reports, repair estimates, medical records — auto-categorized</div>
  </div>
  <div style="margin-top: var(--space-md);">
    ${files.length === 0 ? `<div style="color:var(--text-muted); font-size:0.85rem; text-align:center;">No files added yet. Mock items will be auto-generated when you click "Add sample files".</div>` : `
    <table class="data-table">
      <thead><tr><th>File</th><th>Auto-Category</th><th>Size</th><th></th></tr></thead>
      <tbody>${files.map((f,i) => `<tr><td>📄 ${f.name}</td><td><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${f.category}</span></td><td style="color:var(--text-muted);">${f.size}</td><td><button class="btn btn-ghost btn-sm" data-file-remove="${i}">Remove</button></td></tr>`).join('')}</tbody>
    </table>`}
  </div>
  <button class="btn btn-secondary" style="margin-top: var(--space-md);" id="btn-fnol-add-samples">+ Add sample files (mock)</button>`;
}

function renderFnolStep5(d) {
  const parties = d.parties || [];
  const files = d.files || [];
  const row = (k, v) => `<div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--border-subtle);"><span style="color:var(--text-muted);">${k}</span><strong style="text-align:right;">${v || '—'}</strong></div>`;
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 5: Review Before Submit</h3>
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); padding: var(--space-lg); border-radius: var(--radius-md); border:1px solid var(--border-subtle);">
      <div class="section-title">CLIENT & POLICY</div>
      ${row('Client', d.client)}${row('Policy', d.policy)}
      <div class="section-title" style="margin-top: var(--space-md);">LOSS DETAILS</div>
      ${row('Loss Date', d.loss_date)}${row('Loss Time', d.loss_time)}${row('Type', d.loss_type)}${row('Location', d.location)}
      ${row('Description', (d.description || '').slice(0,140) + ((d.description||'').length > 140 ? '…' : ''))}
      ${row('Injury', d.injury ? 'Yes' : 'No')}${row('Third-Party', d.third_party ? 'Yes' : 'No')}${row('Police/Fire Report', d.police ? 'Yes' : 'No')}
    </div>
    <div style="background:var(--bg-secondary); padding: var(--space-lg); border-radius: var(--radius-md); border:1px solid var(--border-subtle);">
      <div class="section-title">PARTIES (${parties.length})</div>
      ${parties.length === 0 ? '<div style="color:var(--text-muted); font-size:0.85rem;">No parties added.</div>' : parties.map(p => `<div style="padding:6px 0; border-bottom:1px solid var(--border-subtle); font-size:0.9rem;"><strong>${p.role}</strong>: ${p.name || '—'} <span style="color:var(--text-muted);">${p.contact || ''}</span></div>`).join('')}
      <div class="section-title" style="margin-top: var(--space-md);">DOCUMENTS (${files.length})</div>
      ${files.length === 0 ? '<div style="color:var(--text-muted); font-size:0.85rem;">No files uploaded.</div>' : files.map(f => `<div style="padding:6px 0; font-size:0.9rem;">📄 ${f.name} <span style="color:var(--text-muted); font-size:0.8rem;">(${f.category})</span></div>`).join('')}
      <div class="section-title" style="margin-top: var(--space-md);">ESTIMATED RESERVE</div>
      <div style="font-size:1.4rem; font-weight:700; color:var(--mga-accent);">$${(d.reserve || 25000).toLocaleString()}</div>
      <div style="color:var(--text-muted); font-size:0.8rem;">Initial estimate; carrier may revise</div>
    </div>
  </div>`;
}

function renderFnolStep6(d) {
  return `
  <div style="text-align:center; padding: var(--space-xl);">
    <div style="font-size:4rem; margin-bottom: var(--space-md);">✅</div>
    <h2 style="margin-bottom: var(--space-sm);">Claim Submitted to Carrier</h2>
    <p style="color:var(--text-secondary); margin-bottom: var(--space-lg);">Carrier acknowledged submission. Internal claim # and carrier claim # assigned below.</p>
    <div style="display:inline-flex; gap: var(--space-xl); background:var(--bg-secondary); border:1px solid var(--border-subtle); padding: var(--space-lg); border-radius: var(--radius-md);">
      <div><div style="color:var(--text-muted); font-size:0.75rem;">INTERNAL</div><div style="font-family:monospace; font-weight:700; color:var(--mga-accent); font-size:1.1rem;">CLM-2026-0042</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">CARRIER</div><div style="font-family:monospace; font-weight:700; color:var(--mga-accent); font-size:1.1rem;">LIB-CL-88219</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">SLA ACKNOWLEDGE</div><div style="font-weight:700; color:var(--status-green);">✓ Met (12m)</div></div>
    </div>
    <div style="margin-top: var(--space-lg); color: var(--text-muted); font-size:0.85rem;">
      Client has been auto-notified. Producer (Sarah Chen) assigned as single point of contact.
    </div>
  </div>`;
}

// ─── Claim 360° Detail ───
function renderBrokerClaimDetails() {
  const c = D.claimDetail;
  const tab = state.claimTab || 'overview';
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'timeline', label: `Timeline (${c.timeline.length})` },
    { id: 'documents', label: `Documents (${c.documents.length})` },
    { id: 'parties', label: `Parties (${c.parties.length})` },
    { id: 'payments', label: 'Payments' },
    { id: 'communication', label: 'Communication' }
  ];
  const content = {
    overview: renderClaimTabOverview,
    timeline: renderClaimTabTimeline,
    documents: renderClaimTabDocuments,
    parties: renderClaimTabParties,
    payments: renderClaimTabPayments,
    communication: renderClaimTabCommunication
  }[tab] || renderClaimTabOverview;

  const flagPills = [
    c.injury_flag ? '<span class="badge badge-red"><span class="badge-dot badge-dot-red"></span>Injury</span>' : '',
    c.fraud_flag ? '<span class="badge badge-red"><span class="badge-dot badge-dot-red"></span>Fraud Flag</span>' : '',
    c.third_party_flag ? '<span class="badge badge-amber"><span class="badge-dot badge-dot-amber"></span>Third-Party</span>' : '',
    c.cat_flag ? '<span class="badge badge-red"><span class="badge-dot badge-dot-red"></span>CAT / Large Loss</span>' : ''
  ].filter(Boolean).join(' ');

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'claims'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Claims</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-md);">
    <div>
      <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom:4px;">
        <h2 style="margin:0; font-size:1.4rem;">Claim ${c.internal_no}</h2>
        ${badge(c.statusColor, c.status)}
        ${flagPills}
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">
        <strong>${c.client}</strong> · ${c.lob} · ${c.loss_type} · Carrier #: <span style="font-family:monospace; color:var(--mga-accent);">${c.carrier_no}</span>
      </div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.openTaskModal({client:'Magnolia Construction LLC', subject:'Claim follow-up: '})">+ Task</button>
      <button class="btn btn-secondary" id="btn-claim-authority">📨 Request Authority</button>
      <button class="btn btn-secondary" id="btn-claim-expedite">⚡ Expedite Payment</button>
      <button class="btn btn-primary" id="btn-claim-actions">Actions ▾</button>
    </div>
  </div>

  ${state.claimActionsOpen ? `
  <div style="position:relative;">
    <div style="position:absolute; right:0; top:-8px; background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding: var(--space-sm); min-width:260px; z-index:10; box-shadow:0 4px 20px rgba(0,0,0,0.4);">
      <div class="claim-action" data-claim-action="authority" style="padding:8px; cursor:pointer;">Approve Settlement</div>
      <div class="claim-action" data-claim-action="cat" style="padding:8px; cursor:pointer;">Mark as CAT / Large Loss</div>
      <div class="claim-action" data-claim-action="subro" style="padding:8px; cursor:pointer;">Open Subrogation</div>
      <div class="claim-action" data-claim-action="deny" style="padding:8px; cursor:pointer;">Record Denial / Appeal</div>
      <div class="claim-action" data-claim-action="litigation" style="padding:8px; cursor:pointer;">Move to Litigation</div>
      <div class="claim-action" data-claim-action="tpa" style="padding:8px; cursor:pointer;">Assign TPA</div>
      <div style="border-top:1px solid var(--border-subtle); margin:6px 0;"></div>
      <div class="claim-action" data-claim-action="close" style="padding:8px; cursor:pointer; color:var(--status-green);">Close Claim</div>
    </div>
  </div>
  ` : ''}

  <!-- SLA & Key Metrics Strip -->
  <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Age</div><div class="kpi-value">${c.age_days}d</div></div>
    <div class="kpi-card"><div class="kpi-label">Reserve</div><div class="kpi-value">$${c.reserves_history.slice(-1)[0].amount.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Paid</div><div class="kpi-value">$${c.payments.reduce((s,p)=>s+p.amount,0).toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Incurred</div><div class="kpi-value">$${(c.reserves_history.slice(-1)[0].amount + c.payments.reduce((s,p)=>s+p.amount,0)).toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Next SLA</div><div class="kpi-value" style="font-size:0.95rem;">${c.sla_next_action_due}</div></div>
  </div>

  <!-- TABS -->
  <div style="display:flex; border-bottom: 1px solid var(--border-subtle); margin-bottom: var(--space-xl); gap: var(--space-lg);">
    ${tabs.map(t => {
      const active = tab === t.id;
      const style = active ? 'border-bottom: 2px solid var(--mga-accent); font-weight:600; color:var(--text-primary);' : 'color:var(--text-muted);';
      return `<div style="padding:var(--space-sm) 0; cursor:pointer; ${style}" onclick="window.setState({claimTab:'${t.id}'})">${t.label}</div>`;
    }).join('')}
  </div>

  ${content(c)}
  `;
}

function renderClaimTabOverview(c) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">LOSS DETAILS</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-md); font-size:0.9rem;">
          <div><span style="color:var(--text-muted);">Loss Date/Time:</span> <strong>${c.loss_date}</strong></div>
          <div><span style="color:var(--text-muted);">Reported:</span> <strong>${c.reported_date}</strong></div>
          <div><span style="color:var(--text-muted);">Type:</span> <strong>${c.loss_type}</strong></div>
          <div><span style="color:var(--text-muted);">LOB:</span> <strong>${c.lob}</strong></div>
          <div style="grid-column:1/-1;"><span style="color:var(--text-muted);">Location:</span> <strong>${c.location}</strong></div>
          <div style="grid-column:1/-1;"><span style="color:var(--text-muted);">Coverage Triggered:</span> <strong>${c.coverage_triggered}</strong></div>
        </div>
        <div style="margin-top: var(--space-md); padding-top: var(--space-md); border-top:1px solid var(--border-subtle);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-sm);">
            <div class="section-title" style="margin:0;">DESCRIPTION</div>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('AI summary: Employee fell from ladder, wrist fracture, treated at ER and discharged. Witness on scene. Low ambiguity, straightforward WC claim.')">✨ AI Summary</button>
          </div>
          <div style="font-size:0.9rem; line-height:1.5; color:var(--text-secondary);">${c.description}</div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
          <div class="section-title" style="margin:0;">AUTO-CREATED TASKS</div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Add Task dialog')">+ Add Task</button>
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
          <thead><tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
            <th style="padding:var(--space-sm) 0; font-weight:normal;">TASK</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">ASSIGNED</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">DUE</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">STATUS</th>
          </tr></thead>
          <tbody>
            ${c.tasks.map(t => `<tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:var(--space-sm) 0;">${t.title}</td>
              <td style="padding:var(--space-sm) 0;">${t.assigned}</td>
              <td style="padding:var(--space-sm) 0;">${t.due}</td>
              <td style="padding:var(--space-sm) 0;">${badge('amber', t.status)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RESERVE HISTORY</div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
          <thead><tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
            <th style="padding:var(--space-sm) 0; font-weight:normal;">DATE</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">TYPE</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">AMOUNT</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">SET BY</th>
          </tr></thead>
          <tbody>
            ${c.reserves_history.map(r => `<tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:var(--space-sm) 0;">${r.date}</td>
              <td style="padding:var(--space-sm) 0;">${r.type}</td>
              <td style="padding:var(--space-sm) 0;"><strong>$${r.amount.toLocaleString()}</strong></td>
              <td style="padding:var(--space-sm) 0; color:var(--text-muted);">${r.set_by}</td>
            </tr>`).join('')}
          </tbody>
        </table>
        <button class="btn btn-ghost btn-sm" style="margin-top: var(--space-md);" onclick="window.showAlert('Reserve adjustment request submitted to carrier')">+ Request Reserve Adjustment</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CARRIER ADJUSTER</div>
        <div style="font-weight:600; margin-bottom:4px;">${c.adjuster.name}</div>
        <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:8px;">${c.adjuster.company}</div>
        <div style="font-size:0.85rem; margin-bottom:4px;">📞 ${c.adjuster.phone}</div>
        <div style="font-size:0.85rem; color:var(--mga-accent);">✉️ ${c.adjuster.email}</div>
        <button class="btn btn-secondary" style="width:100%; margin-top: var(--space-md);" onclick="window.setState({claimTab:'communication'})">Message Adjuster</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CLIENT CONTACT</div>
        <div style="font-size:0.9rem; margin-bottom:4px;"><strong>${c.client}</strong></div>
        <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom: var(--space-md);">${c.client_contact}</div>
        <button class="btn btn-secondary" style="width:100%; margin-bottom: var(--space-sm);" onclick="window.showAlert('Opening client messaging portal...')">💬 Message Client</button>
        <button class="btn btn-ghost" style="width:100%;" onclick="window.showAlert('Client portal claim link copied to clipboard')">🔗 Copy Client Portal Link</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SLA CLOCKS</div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;"><span style="color:var(--text-muted);">Acknowledge</span> <strong style="color:var(--status-green);">${c.sla_acknowledge_due}</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;"><span style="color:var(--text-muted);">Next Action Due</span> <strong>${c.sla_next_action_due}</strong></div>
        <div style="margin-top: var(--space-sm); padding-top: var(--space-sm); border-top:1px solid var(--border-subtle); font-size:0.8rem; color:var(--text-muted);">
          🔒 All events logged to audit trail for E&O protection
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RELATED POLICY</div>
        <div style="font-family:monospace; color:var(--mga-accent); font-size:0.9rem; margin-bottom:4px;">${c.policy_id}</div>
        <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom: var(--space-md);">${c.carrier}</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;" onclick="window.setState({screen:'policy-details'})">View Policy →</button>
      </div>
    </div>
  </div>`;
}

function renderClaimTabTimeline(c) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">CLAIM TIMELINE (IMMUTABLE — AUDIT TRAIL)</div>
    <div style="display:flex; flex-direction:column; gap: var(--space-lg); position:relative; margin-top: var(--space-lg);">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${c.timeline.map(ev => `
      <div style="display:flex; gap: var(--space-lg); position:relative;">
        <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid var(--mga-accent); z-index:1; margin-top:4px;"></div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:600; font-size:0.9rem;">${ev.action}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${ev.when}</div>
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">${ev.details}</div>
          <div style="margin-top:6px; display:flex; gap:8px;">
            <span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${ev.source}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">by ${ev.actor}</span>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function renderClaimTabDocuments(c) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); overflow:hidden;">
    <div style="padding:var(--space-md); border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02);">
      <div style="font-weight:600; font-size:0.85rem;">DOCUMENT CENTER — ${c.documents.length} FILES</div>
      <div style="display:flex; gap:var(--space-sm);">
        <input class="form-input" placeholder="Search..." style="height:32px; font-size:0.8rem;"/>
        <select class="form-input" style="height:32px; font-size:0.8rem;">
          <option>All Categories</option>${D.claimDocCategories.map(c => `<option>${c}</option>`).join('')}
        </select>
        <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Secure client upload link copied to clipboard')">🔗 Client Upload Link</button>
        <button class="btn btn-primary btn-sm" onclick="window.showAlert('Bulk upload (drag-drop mock) launched')">+ Upload</button>
      </div>
    </div>
    <table class="data-table">
      <thead><tr><th>File</th><th>Category</th><th>Size</th><th>Uploaded By</th><th>Date</th><th>Carrier Portal</th><th>Action</th></tr></thead>
      <tbody>
        ${c.documents.map(d => `
        <tr>
          <td><span style="color:var(--mga-accent); cursor:pointer;">📄 ${d.name}</span></td>
          <td><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${d.category}</span></td>
          <td style="color:var(--text-muted);">${d.size}</td>
          <td>${d.by}</td>
          <td>${d.date}</td>
          <td>${d.pushed_to_carrier ? badge('green','Pushed') : badge('amber','Pending')}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Downloading ${d.name}')">↓</button>
            ${d.pushed_to_carrier ? '' : '<button class="btn btn-ghost btn-sm" onclick="window.showAlert(\'Pushing to carrier portal...\')">→ Carrier</button>'}
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div style="padding: var(--space-md); font-size:0.8rem; color:var(--text-muted);">
      💡 OCR is auto-applied to invoices and receipts. Version control is preserved when a file is re-uploaded.
    </div>
  </div>`;
}

function renderClaimTabParties(c) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
      <div class="section-title" style="margin:0;">PARTIES INVOLVED</div>
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Add Party dialog')">+ Add Party</button>
    </div>
    <table class="data-table">
      <thead><tr><th>Role</th><th>Name</th><th>Relation</th><th>Contact</th><th>Notes</th><th></th></tr></thead>
      <tbody>
        ${c.parties.map(p => `
        <tr>
          <td><strong>${p.role}</strong></td>
          <td>${p.name}</td>
          <td>${p.relation}</td>
          <td style="color:var(--mga-accent);">${p.contact}</td>
          <td style="color:var(--text-muted); font-size:0.85rem;">${p.notes}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="window.showAlert('Edit party')">Edit</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div style="margin-top: var(--space-lg); display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); font-size:0.85rem;">
      <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <span style="color:var(--text-muted);">Police Report #:</span> <strong>${c.police_report_no}</strong>
      </div>
      <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <span style="color:var(--text-muted);">Fire Report #:</span> <strong>${c.fire_report_no}</strong>
      </div>
    </div>
  </div>`;
}

function renderClaimTabPayments(c) {
  const totalPaid = c.payments.reduce((s,p)=>s+p.amount, 0);
  const totalRecovered = (c.recoveries || []).reduce((s,r)=>s+r.amount, 0);
  const currentReserve = c.reserves_history.slice(-1)[0].amount;
  return `
  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Current Reserve</div><div class="kpi-value">$${currentReserve.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Paid</div><div class="kpi-value">$${totalPaid.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Recovered (Subro)</div><div class="kpi-value">$${totalRecovered.toLocaleString()}</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
      <div class="section-title" style="margin:0;">PAYMENT HISTORY</div>
      <div style="display:flex; gap:var(--space-sm);">
        <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Expedite request sent to carrier treasury')">⚡ Expedite</button>
        <button class="btn btn-primary btn-sm" onclick="window.showAlert('Settlement approval workflow initiated')">✓ Approve Settlement</button>
      </div>
    </div>
    <table class="data-table">
      <thead><tr><th>Date</th><th>Type</th><th>Payee</th><th>Amount</th><th>Status</th></tr></thead>
      <tbody>
        ${c.payments.length === 0 ? '<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:var(--space-lg);">No payments yet.</td></tr>' : c.payments.map(p => `
        <tr><td>${p.date}</td><td>${p.type}</td><td>${p.payee}</td><td><strong>$${p.amount.toLocaleString()}</strong></td><td>${badge('green', p.status)}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
      <div class="section-title" style="margin:0;">RECOVERIES & SUBROGATION</div>
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Subrogation packet prepared for counsel review')">+ Open Subrogation</button>
    </div>
    ${(c.recoveries || []).length === 0 ? '<div style="color:var(--text-muted); font-size:0.85rem;">No recoveries recorded yet. Subrogation opportunities may exist where a third-party is at fault.</div>' : `
    <table class="data-table">
      <thead><tr><th>Date</th><th>Source</th><th>Amount</th></tr></thead>
      <tbody>${c.recoveries.map(r => `<tr><td>${r.date}</td><td>${r.source}</td><td>$${r.amount.toLocaleString()}</td></tr>`).join('')}</tbody>
    </table>`}
  </div>`;
}

function renderClaimTabCommunication(c) {
  return `
  <div style="display:grid; grid-template-columns: 1.4fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">INTERNAL NOTES & CLIENT-VISIBLE UPDATES</div>
        <div style="display:flex; gap: var(--space-sm); margin-bottom: var(--space-md);">
          <textarea class="form-input" rows="2" placeholder="Add a note. Use @name to tag teammates..." style="flex:1;"></textarea>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
          <label style="font-size:0.85rem;"><input type="checkbox" checked/> Visible to client</label>
          <button class="btn btn-primary btn-sm" onclick="window.showAlert('Note saved & client notified via SMS/email')">Post Note</button>
        </div>
        <div style="display:flex; flex-direction:column; gap: var(--space-md);">
          ${c.notes.map(n => `
          <div style="padding: var(--space-md); background:var(--bg-card); border-radius:var(--radius-md); border-left:3px solid ${n.visibility==='Client-Visible'?'var(--status-green)':'var(--mga-accent)'};">
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-bottom:4px;">
              <span><strong style="color:var(--text-primary);">${n.author}</strong> · ${n.when}</span>
              <span>${n.visibility === 'Client-Visible' ? '👁 Client sees this' : '🔒 Internal only'}</span>
            </div>
            <div style="font-size:0.9rem;">${n.text}</div>
          </div>`).join('')}
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CARRIER MESSAGES</div>
        ${c.carrier_messages.map(m => `
        <div style="padding: var(--space-md); background:var(--bg-card); border-radius:var(--radius-md); margin-bottom: var(--space-sm); border-left:3px solid var(--broker-accent);">
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:4px;"><strong style="color:var(--text-primary);">${m.from}</strong> · ${m.when}</div>
          <div style="font-size:0.9rem;">${m.body}</div>
        </div>`).join('')}
        <button class="btn btn-secondary" style="width:100%; margin-top: var(--space-sm);" onclick="window.showAlert('Message sent to adjuster portal')">+ Reply to Adjuster</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CLIENT PORTAL PREVIEW</div>
        <div style="background:var(--bg-card); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-md); font-size:0.85rem;">
          <div style="font-weight:600; margin-bottom:4px;">Your Claim #${c.internal_no}</div>
          <div style="color:var(--text-muted); margin-bottom: var(--space-sm);">Status: ${c.status}</div>
          <div style="color:var(--text-secondary); line-height:1.5;">${c.notes.find(n => n.visibility === 'Client-Visible')?.text || 'Updates will appear here as your broker posts client-visible notes.'}</div>
        </div>
        <button class="btn btn-ghost btn-sm" style="width:100%; margin-top: var(--space-md);" onclick="window.showAlert('Client portal link copied to clipboard')">🔗 Copy Client Link</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SCHEDULED UPDATE CALL</div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom: var(--space-sm);">Next check-in with client:</div>
        <div style="font-weight:600; margin-bottom: var(--space-md);">Apr 22, 2026 · 2:00 PM PT</div>
        <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="window.showAlert('Calendar invite updated')">Reschedule</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">AUTOMATIONS</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div>✓ Auto-acknowledge email sent at FNOL</div>
          <div>✓ SLA timer active (2h acknowledge → 4h initial contact)</div>
          <div>✓ Client SMS notification on status change</div>
          <div>✓ Daily carrier sync (last: 2 hours ago)</div>
        </div>
      </div>
    </div>
  </div>`;
}

// ─── Claims Analytics ───
function renderClaimsAnalytics() {
  const a = D.claimsAnalytics;
  const maxRatio = Math.max(...a.loss_ratio_by_carrier.map(r => r.ratio));
  const ratioColor = (r) => r > 75 ? 'var(--status-red)' : r > 60 ? 'var(--status-amber)' : 'var(--status-green)';

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'claims'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Claims</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Claims Analytics</h2>
    <div style="display:flex; gap: var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 12 months</option><option>YTD</option><option>Last 24 months</option></select>
      <button class="btn btn-secondary" onclick="window.showAlert('Custom report builder launched')">+ Custom Report</button>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — CSV will download shortly')">Export</button>
    </div>
  </div>

  ${kpiCards(D.brokerClaimsKPIs, 6)}

  <!-- Aging -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div class="section-title">OPEN CLAIMS AGING</div>
    <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
      ${a.aging_buckets.map(b => `
      <tr style="border-bottom:1px solid var(--border-subtle);">
        <td style="padding: var(--space-sm) 0; width:140px; color:var(--text-muted);">${b.range}</td>
        <td style="padding: var(--space-sm) 0; width:60px;"><strong>${b.count}</strong></td>
        <td style="padding: var(--space-sm) 0; width:100px;">${b.value}</td>
        <td style="padding: var(--space-sm) 0;"><div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${b.pct*3}%; background:var(--mga-accent);"></div></div></td>
      </tr>`).join('')}
    </table>
  </div>

  <!-- Two-column: Loss Ratio + Cycle Time -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">LOSS RATIO BY CARRIER</div>
      ${a.loss_ratio_by_carrier.map(r => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${r.carrier}</strong> <span style="color:var(--text-muted);">· ${r.premium} prem · ${r.losses} losses</span></span>
          <strong style="color:${ratioColor(r.ratio)};">${r.ratio}%</strong>
        </div>
        <div style="background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden;"><div style="height:100%; width:${(r.ratio/maxRatio)*100}%; background:${ratioColor(r.ratio)};"></div></div>
      </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">AVG CYCLE TIME (FNOL → PAYMENT)</div>
      ${a.cycle_time_by_lob.map(l => {
        const over = l.avg_days > l.target;
        return `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <strong>${l.lob}</strong>
            <span style="color:${over?'var(--status-red)':'var(--status-green)'};">${l.avg_days}d / ${l.target}d target</span>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; position:relative;">
            <div style="position:absolute; left:${Math.min(100,(l.target/120)*100)}%; top:-2px; bottom:-2px; width:2px; background:var(--text-muted);"></div>
            <div style="height:100%; width:${Math.min(100,(l.avg_days/120)*100)}%; background:${over?'var(--status-red)':'var(--status-green)'};"></div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <!-- Two-column: Frequency + State -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CLAIM TYPE FREQUENCY</div>
      ${a.claim_type_frequency.map(t => `
      <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
        <div style="width:160px;">${t.type}</div>
        <div style="flex:1; background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${t.pct*3}%; background:var(--mga-accent);"></div></div>
        <div style="width:90px; text-align:right;"><strong>${t.count}</strong> <span style="color:var(--text-muted);">(${t.pct}%)</span></div>
      </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CLAIMS BY STATE</div>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead><tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
          <th style="padding:var(--space-sm) 0; font-weight:normal;">STATE</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">COUNT</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">TOTAL VALUE</th>
        </tr></thead>
        <tbody>
          ${a.claims_by_state.map(s => `<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:var(--space-sm) 0;"><strong>${s.state}</strong></td><td style="padding:var(--space-sm) 0;">${s.count}</td><td style="padding:var(--space-sm) 0;">${s.value}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- High-Value -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div class="section-title">HIGH-VALUE CLAIMS (&gt; $100k)</div>
    <table class="data-table">
      <thead><tr><th>Claim #</th><th>Client</th><th>Incurred</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${a.high_value_claims.map(h => `
        <tr>
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">${h.id}</strong></td>
          <td>${h.client}</td>
          <td><strong>${h.incurred}</strong></td>
          <td>${badge('amber', h.status)}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">Open</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Monthly claim performance review is auto-generated on the 1st of each month for each producer. Loss-ratio thresholds >75% trigger retention review.
  </div>`;
}

// ════════════════════════════════════════════════════════════════
// ACTIVITY & TASK MANAGEMENT
// ════════════════════════════════════════════════════════════════
function activityRowShared(a, showClient = true) {
  const priColor = { Urgent:'red', High:'red', Medium:'amber', Low:'green' }[a.priority] || 'blue';
  const statusColor = { Open:'blue', 'In Progress':'amber', Completed:'green', Cancelled:'gray' }[a.status] || 'blue';
  return { priColor, statusColor };
}

function activityIcon(type) {
  const map = {
    'Phone Call':'📞','Meeting':'👥','Email':'✉️','SMS':'💬','Renewal Discussion':'🔁','Claim Update Call':'🚑','Policy Review':'📋',
    'Task':'✅','Follow-up Reminder':'⏰','Underwriting Follow-up':'🔍','Document Request':'📎','Compliance Check':'⚖️',
    'Policy Issued':'🔒','Claim Reported':'🚨','Renewal Alert':'🔔','Workflow Task':'⚙️','Commission Alert':'💰'
  };
  return map[type] || '📝';
}

function isOverdue(a) {
  if (a.status === 'Completed' || a.status === 'Cancelled') return false;
  return new Date(a.due) < new Date('2026-04-18T08:00:00');
}
function isToday(a) {
  return a.due.startsWith('2026-04-18');
}

function renderActivityDashboard() {
  const view = state.activityView || 'list';
  const scope = state.activityScope || 'my';
  const filters = state.activityFilters || {};

  let rows = D.activities;
  if (scope === 'my') rows = rows.filter(a => a.assignee === 'Sarah Chen');
  if (scope === 'team') rows = rows; // all
  if (scope === 'completed') rows = rows.filter(a => a.status === 'Completed' || a.status === 'Cancelled');
  else rows = rows.filter(a => a.status !== 'Completed' && a.status !== 'Cancelled');

  if (filters.type && filters.type !== 'All') rows = rows.filter(a => a.type === filters.type);
  if (filters.priority && filters.priority !== 'All') rows = rows.filter(a => a.priority === filters.priority);
  if (filters.assignee && filters.assignee !== 'All') rows = rows.filter(a => a.assignee === filters.assignee);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(a => (a.subject + ' ' + (a.client||'') + ' ' + a.type).toLowerCase().includes(q));
  }

  const overdue = rows.filter(isOverdue);
  const today = rows.filter(a => isToday(a) && !isOverdue(a));
  const upcoming = rows.filter(a => !isOverdue(a) && !isToday(a));

  const tab = (id, label, count) => `<div data-act-scope="${id}" style="padding:var(--space-sm) var(--space-md); cursor:pointer; ${scope===id?'border-bottom:2px solid var(--mga-accent); color:var(--text-primary); font-weight:600;':'color:var(--text-muted);'}">${label}${count !== undefined ? ` <span style="background:rgba(255,255,255,0.08); padding:1px 6px; border-radius:8px; font-size:0.75rem; margin-left:4px;">${count}</span>`:''}</div>`;

  const activityCard = (a) => {
    const { priColor } = activityRowShared(a);
    const overdueStyle = isOverdue(a) ? 'border-left:3px solid var(--status-red);' : `border-left:3px solid var(--${priColor === 'red' ? 'status-red' : priColor === 'amber' ? 'status-amber' : priColor === 'green' ? 'status-green' : 'mga-accent'});`;
    return `
    <div class="activity-card" style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); ${overdueStyle} cursor:pointer; margin-bottom:var(--space-sm);" onclick="window.setState({screen:'activity-details', currentActivityId:'${a.id}'})">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
        <div style="font-weight:600; font-size:0.9rem;">${activityIcon(a.type)} ${a.subject}</div>
        ${badge(priColor, a.priority)}
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:6px;">${a.type}${a.client ? ' · ' + a.client : ''}</div>
      <div style="display:flex; justify-content:space-between; font-size:0.75rem;">
        <span style="color:${isOverdue(a) ? 'var(--status-red)' : 'var(--text-muted)'};">${isOverdue(a) ? '⚠ OVERDUE · ' : ''}Due ${a.due.split(' ')[1] || a.due}</span>
        <span style="color:var(--text-muted);">${a.assignee}</span>
      </div>
      ${a.tags.length ? `<div style="margin-top:6px;">${a.tags.map(t => `<span style="font-size:0.7rem; color:var(--mga-accent); margin-right:6px;">${t}</span>`).join('')}</div>` : ''}
    </div>`;
  };

  const kanbanCol = (title, items, color) => `
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:var(--space-md);">
      <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-md);">
        <div style="font-weight:600; font-size:0.85rem; text-transform:uppercase; color:${color};">${title}</div>
        <div style="background:rgba(255,255,255,0.08); padding:2px 10px; border-radius:10px; font-size:0.75rem;">${items.length}</div>
      </div>
      ${items.length === 0 ? `<div style="color:var(--text-muted); font-size:0.85rem; text-align:center; padding:var(--space-lg);">No tasks</div>` : items.map(activityCard).join('')}
    </div>`;

  const listView = `
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th>Type</th><th>Subject</th><th>Client / Linked</th><th>Assignee</th><th>Due</th><th>Priority</th><th>Status</th><th>Source</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${rows.length === 0 ? `<tr><td colspan="9" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No activities match these filters.</td></tr>` : rows.map(a => {
          const { priColor, statusColor } = activityRowShared(a);
          return `
          <tr style="${isOverdue(a) ? 'background:rgba(255,82,82,0.04);' : ''}">
            <td>${activityIcon(a.type)} ${a.type}</td>
            <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'activity-details', currentActivityId:'${a.id}'})">${a.subject}</strong></td>
            <td>${a.client || '<span style="color:var(--text-muted);">—</span>'}${a.claim ? `<div style="font-size:0.72rem; color:var(--text-muted);">Claim: ${a.claim}</div>` : ''}${a.policy && !a.claim ? `<div style="font-size:0.72rem; color:var(--text-muted);">Pol: ${a.policy}</div>` : ''}</td>
            <td>${a.assignee}</td>
            <td style="${isOverdue(a) ? 'color:var(--status-red); font-weight:600;':''}">${isOverdue(a) ? '⚠ ' : ''}${a.due}</td>
            <td>${badge(priColor, a.priority)}</td>
            <td>${badge(statusColor, a.status)}</td>
            <td style="font-size:0.75rem; color:var(--text-muted);">${a.source}</td>
            <td style="display:flex; gap:4px;">
              <button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'activity-details', currentActivityId:'${a.id}'})">Open</button>
              ${a.status !== 'Completed' ? `<button class="btn btn-ghost btn-sm" data-act-complete="${a.id}">✓</button>` : ''}
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;

  const kanbanView = `
  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap:var(--space-md);">
    ${kanbanCol('Overdue', overdue, 'var(--status-red)')}
    ${kanbanCol('Today', today, 'var(--status-amber)')}
    ${kanbanCol('Upcoming', upcoming, 'var(--mga-accent)')}
    ${kanbanCol('Completed (last 7d)', D.activities.filter(a => a.status === 'Completed').slice(0, 6), 'var(--status-green)')}
  </div>`;

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Activity & Tasks</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'activity-calendar'})">📅 Calendar</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'activity-feed'})">📡 Feed</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'activity-rules'})">⚙️ Rules</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'activity-analytics'})">📊 Analytics</button>
      <button class="btn btn-primary" id="btn-new-task">+ New Task</button>
    </div>
  </div>

  ${kpiCards(D.activityKPIs, 6)}

  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-subtle); margin: var(--space-lg) 0;">
    <div style="display:flex;">
      ${tab('my', 'My Day', D.activities.filter(a => a.assignee === 'Sarah Chen' && a.status !== 'Completed' && a.status !== 'Cancelled').length)}
      ${tab('team', 'Team', D.activities.filter(a => a.status !== 'Completed' && a.status !== 'Cancelled').length)}
      ${tab('completed', 'Completed', D.activities.filter(a => a.status === 'Completed').length)}
    </div>
    <div style="display:flex; gap:4px; padding-bottom:var(--space-sm);">
      <button class="btn btn-ghost btn-sm" data-act-view="list" style="${view==='list'?'background:var(--bg-card-hover); color:var(--text-primary);':''}">☰ List</button>
      <button class="btn btn-ghost btn-sm" data-act-view="kanban" style="${view==='kanban'?'background:var(--bg-card-hover); color:var(--text-primary);':''}">▦ Kanban</button>
    </div>
  </div>

  <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap;">
    <input class="form-input" id="act-search" placeholder="Search subject, client, type..." value="${filters.search || ''}" style="flex:1; min-width:240px;"/>
    <select class="form-input" id="act-type" style="width:190px;">
      <option value="All">All Types</option>
      <optgroup label="Client-Facing">${D.activityTypes.client.map(t => `<option value="${t}" ${filters.type===t?'selected':''}>${t}</option>`).join('')}</optgroup>
      <optgroup label="Internal">${D.activityTypes.internal.map(t => `<option value="${t}" ${filters.type===t?'selected':''}>${t}</option>`).join('')}</optgroup>
      <optgroup label="Automated">${D.activityTypes.automated.map(t => `<option value="${t}" ${filters.type===t?'selected':''}>${t}</option>`).join('')}</optgroup>
    </select>
    <select class="form-input" id="act-priority" style="width:150px;">
      <option value="All">Any Priority</option>
      ${D.activityPriorities.map(p => `<option value="${p}" ${filters.priority===p?'selected':''}>${p}</option>`).join('')}
    </select>
    <select class="form-input" id="act-assignee" style="width:190px;">
      <option value="All">All Assignees</option>
      ${D.activityAssignees.map(p => `<option value="${p}" ${filters.assignee===p?'selected':''}>${p}</option>`).join('')}
    </select>
    <button class="btn btn-ghost btn-sm" id="act-reset">Reset</button>
  </div>

  ${view === 'kanban' ? kanbanView : listView}

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 SLA enforcement: new claims must be acknowledged in 2 hours; overdue High/Urgent tasks auto-escalate to manager at 3 days. All activities retained for E&O audit trail.
  </div>`;
}

function renderActivityDetails() {
  const id = state.currentActivityId || 'A-200';
  const a = D.activities.find(x => x.id === id) || D.activities[1];
  const { priColor, statusColor } = activityRowShared(a);
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'activity'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Activity</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-lg);">
    <div>
      <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom:4px;">
        <h2 style="margin:0; font-size:1.4rem;">${activityIcon(a.type)} ${a.subject}</h2>
        ${badge(priColor, a.priority)} ${badge(statusColor, a.status)}
        ${isOverdue(a) ? badge('red', 'OVERDUE') : ''}
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">
        ${a.type} · ID <span style="font-family:monospace; color:var(--mga-accent);">${a.id}</span> · Source: ${a.source}
      </div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      ${a.status !== 'Completed' ? `<button class="btn btn-primary" id="btn-act-complete">✓ Mark Complete</button>` : ''}
      <button class="btn btn-secondary" onclick="window.showAlert('Snoozed 24 hours')">⏰ Snooze</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Reassignment dialog')">👤 Reassign</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">DESCRIPTION</div>
        <div style="font-size:0.9rem; line-height:1.6; color:var(--text-secondary);">${a.description}</div>
        ${a.outcome ? `<div style="margin-top:var(--space-md); padding-top:var(--space-md); border-top:1px solid var(--border-subtle);"><div class="section-title" style="margin:0 0 var(--space-sm) 0;">OUTCOME</div><div style="font-size:0.9rem;">${a.outcome}</div></div>` : ''}
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
          <div class="section-title" style="margin:0;">COMMENTS & @MENTIONS</div>
        </div>
        <textarea class="form-input" rows="3" placeholder="Add comment. Use @name to mention a teammate..."></textarea>
        <div style="text-align:right; margin-top: var(--space-sm);"><button class="btn btn-primary btn-sm" onclick="window.showAlert('Comment posted; teammates notified')">Post</button></div>
        <div style="margin-top:var(--space-md); padding-top:var(--space-md); border-top:1px solid var(--border-subtle);">
          <div style="padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem;">
            <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:4px;"><strong style="color:var(--text-primary);">Sarah Chen</strong> · 2026-04-17 11:05</div>
            Client confirmed 14:00 slot. Will cover WC + GL renewal indications.
          </div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">ATTACHMENTS</div>
        <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-sm);">No attachments yet.</div>
        <button class="btn btn-ghost btn-sm" onclick="window.showAlert('File picker launched')">+ Attach File</button>
        <button class="btn btn-ghost btn-sm" onclick="window.showAlert('🎤 Voice note recording started (mock)')">🎤 Voice Note</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">DETAILS</div>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:0.85rem;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Due</span><strong>${a.due}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Assignee</span><strong>${a.assignee}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Owner</span><strong>${a.owner}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Created</span><strong>${a.created}</strong></div>
          ${a.recurrence ? `<div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Recurrence</span><strong>${a.recurrence}</strong></div>` : ''}
          ${a.tags.length ? `<div><div style="color:var(--text-muted); margin-bottom:4px;">Tags</div>${a.tags.map(t => `<span style="background:rgba(68,138,255,0.15); color:#82b1ff; padding:2px 8px; border-radius:10px; margin-right:6px; font-size:0.75rem;">${t}</span>`).join('')}</div>` : ''}
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">LINKED ENTITIES</div>
        ${a.client ? `<div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); cursor:pointer;" onclick="window.setState({screen:'client-details'})"><div style="font-size:0.75rem; color:var(--text-muted);">CLIENT</div><div style="font-weight:600;">${a.client} →</div></div>` : ''}
        ${a.policy ? `<div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); cursor:pointer;" onclick="window.setState({screen:'policy-details'})"><div style="font-size:0.75rem; color:var(--text-muted);">POLICY</div><div style="font-family:monospace; color:var(--mga-accent);">${a.policy} →</div></div>` : ''}
        ${a.claim ? `<div style="padding:8px 0; cursor:pointer;" onclick="window.setState({screen:'claim-details', claimTab:'overview'})"><div style="font-size:0.75rem; color:var(--text-muted);">CLAIM</div><div style="font-family:monospace; color:var(--mga-accent);">${a.claim} →</div></div>` : ''}
        ${!a.client && !a.policy && !a.claim ? '<div style="color:var(--text-muted); font-size:0.85rem;">No linked entities.</div>' : ''}
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RECURRENCE & REMINDERS</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div>📧 Email reminder 1 hour before</div>
          <div>📱 SMS reminder 15 min before</div>
          <div>🔔 In-app + push notification</div>
        </div>
        <button class="btn btn-ghost btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.showAlert('Reminder settings dialog')">Configure</button>
      </div>
    </div>
  </div>`;
}

function renderActivityCalendar() {
  const month = state.calendarMonth || 'April 2026';
  const dayCells = [];
  // Build 30-day April grid starting on Wed Apr 1 (Wed = col 3, 0=Sun)
  const startDay = 3; // Apr 1, 2026 is Wednesday
  const daysInMonth = 30;
  for (let i = 0; i < startDay; i++) dayCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) dayCells.push(d);
  while (dayCells.length % 7 !== 0) dayCells.push(null);

  const acts = D.activities;
  const eventsForDay = (d) => acts.filter(a => a.due.startsWith(`2026-04-${String(d).padStart(2,'0')}`));

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'activity'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Activity</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Activity Calendar</h2>
    <div style="display:flex; gap: var(--space-sm); align-items:center;">
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Previous month — March 2026')">← Prev</button>
      <strong style="padding: 0 var(--space-md); font-size:1.1rem;">${month}</strong>
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Next month — May 2026')">Next →</button>
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('View switched: Week')">Week</button>
      <button class="btn btn-primary btn-sm" id="btn-new-task">+ New Task</button>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-md);">
    <div style="display:grid; grid-template-columns: repeat(7, 1fr); gap:1px; background:var(--border-subtle);">
      ${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => `<div style="background:var(--bg-secondary); padding:var(--space-sm); text-align:center; font-size:0.8rem; font-weight:600; color:var(--text-muted); text-transform:uppercase;">${d}</div>`).join('')}
      ${dayCells.map(d => {
        if (!d) return `<div style="background:rgba(0,0,0,0.2); min-height:110px;"></div>`;
        const events = eventsForDay(d);
        const isTodayCell = d === 18;
        return `
        <div style="background:var(--bg-card); padding:6px; min-height:110px; ${isTodayCell ? 'border:2px solid var(--mga-accent);' : ''}">
          <div style="font-size:0.8rem; font-weight:600; margin-bottom:4px; ${isTodayCell ? 'color:var(--mga-accent);' : ''}">${d}${isTodayCell ? ' · Today' : ''}</div>
          ${events.slice(0, 3).map(a => {
            const { priColor } = activityRowShared(a);
            const colorVar = priColor === 'red' ? 'var(--status-red)' : priColor === 'amber' ? 'var(--status-amber)' : priColor === 'green' ? 'var(--status-green)' : 'var(--mga-accent)';
            return `<div style="background:${colorVar}20; border-left:2px solid ${colorVar}; padding:2px 4px; margin-bottom:2px; font-size:0.7rem; cursor:pointer; border-radius:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" onclick="event.stopPropagation(); window.setState({screen:'activity-details', currentActivityId:'${a.id}'})" title="${a.subject}">${activityIcon(a.type)} ${a.subject}</div>`;
          }).join('')}
          ${events.length > 3 ? `<div style="font-size:0.7rem; color:var(--text-muted);">+${events.length - 3} more</div>` : ''}
        </div>`;
      }).join('')}
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Calendar syncs with Outlook / Google / Microsoft Teams. Click any task block for detail; drag to reschedule (desktop).
  </div>`;
}

function renderActivityFeed() {
  const feed = D.activities.slice().sort((a, b) => b.due.localeCompare(a.due));
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'activity'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Activity</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Global Activity Feed</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:180px;"><option>All Teams</option><option>Commercial Lines</option><option>Personal Lines</option></select>
      <button class="btn btn-secondary" onclick="window.showAlert('Feed export queued — PDF will download')">Export PDF</button>
      <button class="btn btn-secondary" onclick="window.showAlert('E&O audit report prepared')">🛡 E&O Audit</button>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg); position:relative;">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${feed.map(a => {
        const { priColor, statusColor } = activityRowShared(a);
        return `
        <div style="display:flex; gap: var(--space-lg); position:relative;">
          <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid ${a.status==='Completed'?'var(--status-green)':priColor==='red'?'var(--status-red)':'var(--mga-accent)'}; z-index:1; margin-top:4px;"></div>
          <div style="flex:1; cursor:pointer;" onclick="window.setState({screen:'activity-details', currentActivityId:'${a.id}'})">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="font-weight:600; font-size:0.9rem;">${activityIcon(a.type)} ${a.subject}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${a.due}</div>
            </div>
            <div style="font-size:0.85rem; color:var(--text-secondary); margin:4px 0;">${a.description}</div>
            <div style="display:flex; gap:8px; flex-wrap:wrap; font-size:0.75rem;">
              <span style="color:var(--text-muted);">${a.assignee}</span>
              ${a.client ? `<span style="color:var(--text-muted);">· ${a.client}</span>` : ''}
              ${badge(priColor, a.priority)}
              ${badge(statusColor, a.status)}
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderActivityRules() {
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'activity'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Activity</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Workflow Rules Manager</h2>
    <button class="btn btn-primary" id="btn-new-rule">+ New Rule</button>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:var(--space-md); margin-bottom:var(--space-lg); font-size:0.9rem;">
    <strong>No-code rule builder</strong> — chain any trigger → condition → action. Rules fire in real-time on module events (Policy, Claim, Commission, Renewal).
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Rule</th><th>Trigger</th><th>Condition</th><th>Action</th><th>Enabled</th><th>Last Fired</th><th>Fire Count</th><th></th></tr></thead>
      <tbody>
        ${D.workflowRules.map(r => `
        <tr>
          <td><strong>${r.name}</strong><div style="font-family:monospace; font-size:0.72rem; color:var(--text-muted);">${r.id}</div></td>
          <td><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${r.trigger}</span></td>
          <td style="font-size:0.85rem; color:var(--text-muted);">${r.condition}</td>
          <td style="font-size:0.85rem;">${r.action}</td>
          <td><label style="cursor:pointer;"><input type="checkbox" ${r.enabled?'checked':''} onclick="window.showAlert('Rule ${r.id} ${r.enabled?'disabled':'enabled'}')"/> ${r.enabled?'On':'Off'}</label></td>
          <td style="font-size:0.85rem; color:var(--text-muted);">${r.lastFired}</td>
          <td><strong>${r.fireCount}</strong></td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Rule editor: ${r.id}')">Edit</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Rule ${r.id} fired manually — test run')">Test</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem;">
    <strong>Smart reminders:</strong> Email + SMS + in-app + push. Per-activity-type templates configurable under <a href="#" style="color:var(--mga-accent);">Settings → Notifications</a>.
  </div>`;
}

function renderActivityAnalytics() {
  const a = D.activityAnalytics;
  const maxScore = 100;
  const tierColor = t => t === 'Top' ? 'var(--status-green)' : t === 'Strong' ? 'var(--mga-accent)' : 'var(--status-amber)';
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'activity'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Activity</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Activity Analytics</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 30 days</option><option>Last 90 days</option><option>YTD</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — CSV')">Export</button>
    </div>
  </div>

  ${kpiCards(D.activityKPIs, 6)}

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top:var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">COMPLETION RATE BY PRODUCER</div>
      ${a.completionByProducer.map(p => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${p.name}</strong> <span style="color:var(--text-muted);">· ${p.completed}/${p.assigned} tasks</span></span>
          <strong>${p.rate}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${p.rate}%; background:${p.rate > 85 ? 'var(--status-green)' : p.rate > 75 ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Avg response: ${p.avg_response}</div>
      </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">ACTIVITY VOLUME TREND (4 WKS)</div>
      <div style="display:flex; align-items:flex-end; gap:var(--space-md); height:180px; padding: var(--space-md) 0;">
        ${a.volume_trend.map(w => `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; height:100%;">
          <div style="display:flex; gap:3px; align-items:flex-end; flex:1; width:100%;">
            <div style="flex:1; background:var(--mga-accent); border-radius:3px 3px 0 0; height:${w.created*1.3}%;" title="Created: ${w.created}"></div>
            <div style="flex:1; background:var(--status-green); border-radius:3px 3px 0 0; height:${w.completed*1.3}%;" title="Completed: ${w.completed}"></div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${w.week}</div>
        </div>`).join('')}
      </div>
      <div style="display:flex; gap:var(--space-md); font-size:0.75rem; color:var(--text-muted); justify-content:center;">
        <span><span style="background:var(--mga-accent); width:12px; height:12px; display:inline-block; border-radius:2px; vertical-align:middle;"></span> Created</span>
        <span><span style="background:var(--status-green); width:12px; height:12px; display:inline-block; border-radius:2px; vertical-align:middle;"></span> Completed</span>
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top:var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">OVERDUE TASKS AGING</div>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        ${a.overdue_aging.map(r => `
        <tr style="border-bottom:1px solid var(--border-subtle);">
          <td style="padding: var(--space-sm) 0; width:140px; color:var(--text-muted);">${r.range}</td>
          <td style="padding: var(--space-sm) 0; width:60px;"><strong>${r.count}</strong></td>
          <td style="padding: var(--space-sm) 0;"><div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${r.count*15}%; background:var(--status-red);"></div></div></td>
        </tr>`).join('')}
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">TOP ACTIVITY TYPES</div>
      ${a.top_activity_types.map(t => `
      <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
        <div style="width:170px;">${t.type}</div>
        <div style="flex:1; background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${t.pct*3}%; background:var(--mga-accent);"></div></div>
        <div style="width:100px; text-align:right;"><strong>${t.count}</strong> <span style="color:var(--text-muted);">(${t.pct}%)</span></div>
      </div>`).join('')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top:var(--space-lg);">
    <div class="section-title">PRODUCTIVITY SCORE</div>
    <table class="data-table">
      <thead><tr><th>Producer</th><th>Score</th><th>Tier</th><th>Progress</th></tr></thead>
      <tbody>
        ${a.productivity_scores.map(p => `
        <tr>
          <td><strong>${p.name}</strong></td>
          <td><strong style="color:${tierColor(p.tier)};">${p.score}</strong></td>
          <td><span class="badge badge-${p.tier === 'Top' ? 'green' : p.tier === 'Strong' ? 'blue' : 'amber'}"><span class="badge-dot badge-dot-${p.tier === 'Top' ? 'green' : p.tier === 'Strong' ? 'blue' : 'amber'}"></span>${p.tier}</span></td>
          <td style="width:250px;"><div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${p.score}%; background:${tierColor(p.tier)};"></div></div></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 AI suggestions and productivity coaching are surfaced weekly. Score weights: completion rate 40% · avg response 30% · outcome quality 30%.
  </div>`;
}

function _clientSubNav(active) {
  const tabs = [
    { key: 'clients',              label: 'Directory',      icon: '📋' },
    { key: 'clients-book',         label: 'Book',           icon: '💼' },
    { key: 'clients-segmentation', label: 'Segmentation',   icon: '🎯' },
    { key: 'clients-retention',    label: 'Retention',      icon: '📈' },
    { key: 'clients-crosssell',    label: 'Cross-Sell',     icon: '🔀' },
    { key: 'clients-ai',           label: 'AI Assistant',   icon: '🤖' }
  ];
  return `
  <div class="doc-subnav">
    ${tabs.map(t => `
      <div class="doc-subnav-tab${active === t.key ? ' active' : ''}" onclick="window.setState({screen:'${t.key}'})">
        <span>${t.icon}</span><span>${t.label}</span>
      </div>`).join('')}
  </div>`;
}

function _tierBadge(tier) {
  const t = D.clientTiers.find(x => x.tier === tier);
  return badge(t?.color || 'gray', tier);
}
function _riskIndicator(r) {
  const map = { low: { color: 'var(--status-green)', icon: '●' }, medium: { color: 'var(--status-amber)', icon: '●' }, high: { color: 'var(--status-red)', icon: '●' } };
  const x = map[r] || map.medium;
  return `<span style="color:${x.color};">${x.icon}</span>`;
}

function renderBrokerClients() {
  const filters = state.clientFilters || {};
  let rows = D.brokerClients;
  if (filters.tier && filters.tier !== 'All') rows = rows.filter(c => c.tier === filters.tier);
  if (filters.industry && filters.industry !== 'All') rows = rows.filter(c => c.industry === filters.industry);
  if (filters.status && filters.status !== 'All') rows = rows.filter(c => c.status === filters.status);
  if (filters.producer && filters.producer !== 'All') rows = rows.filter(c => c.producer === filters.producer);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(c => (c.id + ' ' + c.name + ' ' + c.industry + ' ' + c.state).toLowerCase().includes(q));
  }
  const uniqInd = [...new Set(D.brokerClients.map(c => c.industry))];
  const uniqStatus = [...new Set(D.brokerClients.map(c => c.status))];

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Client Directory</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${D.brokerClients.length} active clients · $${(D.brokerClients.reduce((s,c)=>s+c.premium,0)/1e6).toFixed(2)}M book</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'clients-crosssell'})">🔀 Cross-Sell</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'clients-retention'})">📈 Retention</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'submission', wizardStep:1})">+ Add Client</button>
    </div>
  </div>

  ${kpiCards(D.brokerClientsKPIs, 6)}

  ${_clientSubNav('clients')}

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; gap:var(--space-sm); margin-bottom: var(--space-md);">
      <input type="text" class="form-input" style="flex:1;" placeholder="🔍 Search client, industry, state, ID..." value="${filters.search || ''}" oninput="window.setState({clientFilters: Object.assign({}, window.state?.clientFilters || {}, {search: this.value})})"/>
      <select class="form-input" style="width:160px;" onchange="window.setState({clientFilters: Object.assign({}, window.state?.clientFilters || {}, {tier: this.value})})">
        <option>All</option>${D.clientTiers.map(t => `<option ${filters.tier===t.tier?'selected':''}>${t.tier}</option>`).join('')}
      </select>
      <select class="form-input" style="width:180px;" onchange="window.setState({clientFilters: Object.assign({}, window.state?.clientFilters || {}, {industry: this.value})})">
        <option>All</option>${uniqInd.map(i => `<option ${filters.industry===i?'selected':''}>${i}</option>`).join('')}
      </select>
      <select class="form-input" style="width:160px;" onchange="window.setState({clientFilters: Object.assign({}, window.state?.clientFilters || {}, {status: this.value})})">
        <option>All</option>${uniqStatus.map(s => `<option ${filters.status===s?'selected':''}>${s}</option>`).join('')}
      </select>
      <select class="form-input" style="width:160px;" onchange="window.setState({clientFilters: Object.assign({}, window.state?.clientFilters || {}, {producer: this.value})})">
        <option>All</option>
        ${['Sarah Chen','Mike Torres','Lisa Park'].map(p => `<option ${filters.producer===p?'selected':''}>${p}</option>`).join('')}
      </select>
      <button class="btn btn-ghost btn-sm" onclick="window.setState({clientFilters:{}})">Reset</button>
    </div>
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr><th>Risk</th><th>Client</th><th>Tier</th><th>Industry</th><th>Revenue</th><th>State</th><th>Policies</th><th>LOBs</th><th>Premium</th><th>NPS</th><th>LR</th><th>Exp</th><th>Producer</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${rows.map(c => `
        <tr>
          <td style="font-size:1rem;">${_riskIndicator(c.risk)}</td>
          <td style="white-space:nowrap;"><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'client-details'})">${c.name}</strong><div style="color:var(--text-muted); font-size:0.72rem; font-family:monospace;">${c.id}</div></td>
          <td style="white-space:nowrap;">${_tierBadge(c.tier)}</td>
          <td style="white-space:nowrap;">${c.industry}</td>
          <td style="white-space:nowrap;">${c.revenue}</td>
          <td>${c.state}</td>
          <td>${c.policies}</td>
          <td style="font-size:0.78rem; white-space:nowrap;">${c.lobs.join(', ')}</td>
          <td style="white-space:nowrap;"><strong>$${(c.premium/1000).toFixed(0)}k</strong></td>
          <td><strong style="color:${c.nps>=75?'var(--status-green)':c.nps>=55?'var(--mga-accent)':'var(--status-amber)'};">${c.nps}</strong></td>
          <td><strong style="color:${c.loss_ratio<=30?'var(--status-green)':c.loss_ratio<=60?'var(--mga-accent)':'var(--status-red)'};">${c.loss_ratio}%</strong></td>
          <td style="font-size:0.82rem; white-space:nowrap;">${c.exp_date}</td>
          <td style="font-size:0.82rem; white-space:nowrap;">${c.producer}</td>
          <td style="white-space:nowrap;">${badge(c.statusColor, c.status)}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'client-details'})">View</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
    ${rows.length === 0 ? `<div style="text-align:center; color:var(--text-muted); padding: var(--space-xl);">No clients match this filter.</div>` : ''}
    <div style="padding: var(--space-md); color:var(--text-muted); font-size:0.8rem;">Showing ${rows.length} of ${D.brokerClients.length} clients · $${(rows.reduce((s,c)=>s+c.premium,0)/1000).toFixed(0)}k premium</div>
  </div>`;
}

function renderClientsBookOfBusiness() {
  const b = D.clientAnalytics.book_of_business;
  const life = D.clientAnalytics.lifecycle_stages;
  const clients = D.brokerClients.slice().sort((a,b) => b.premium - a.premium);
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Book of Business</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Your total book: $${(b.total_premium/1e6).toFixed(2)}M across ${b.total_clients} clients</div>
    </div>
    <button class="btn btn-primary" onclick="window.showAlert('Export queued — book of business')">Export</button>
  </div>

  ${_clientSubNav('clients-book')}

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Total Premium</div><div class="kpi-value">$${(b.total_premium/1e6).toFixed(2)}M</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg per Client</div><div class="kpi-value">$${(b.avg_per_client/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Multi-LOB</div><div class="kpi-value">${b.multi_lob} <span style="color:var(--text-muted); font-size:0.8rem; font-weight:400;">/ ${b.total_clients}</span></div></div>
    <div class="kpi-card"><div class="kpi-label">Single-LOB (cross-sell)</div><div class="kpi-value warning">${b.single_lob}</div></div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">TIER DISTRIBUTION</div>
      ${[
        { tier: 'Platinum', count: b.platinum, color: 'var(--status-blue)' },
        { tier: 'Gold',     count: b.gold,     color: 'var(--status-amber)' },
        { tier: 'Silver',   count: b.silver,   color: '#9aa0a6' },
        { tier: 'Bronze',   count: b.bronze,   color: '#a5673f' }
      ].map(t => {
        const pct = Math.round((t.count / b.total_clients) * 100);
        return `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <strong>${t.tier}</strong>
            <span><strong>${t.count}</strong> <span style="color:var(--text-muted);">(${pct}%)</span></span>
          </div>
          <div style="background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden;"><div style="height:100%; width:${pct}%; background:${t.color};"></div></div>
        </div>`;
      }).join('')}
      <div style="margin-top: var(--space-md); font-size:0.78rem; color:var(--text-muted);">💡 ${D.clientTiers.find(t=>t.tier==='Platinum').desc}</div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">LIFECYCLE STAGES</div>
      ${life.map(l => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <strong>${l.stage}</strong>
            <span><strong>${l.count}</strong> <span style="color:var(--text-muted);">(${l.pct}%)</span></span>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${l.pct*2}%; background:${l.stage.includes('At-Risk')?'var(--status-red)':l.stage.includes('Onboarding')?'var(--status-green)':'var(--mga-accent)'};"></div></div>
        </div>`).join('')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom:var(--space-lg);">
    <div class="section-title">TOP CLIENTS BY PREMIUM</div>
    <table class="data-table">
      <thead><tr><th>Rank</th><th>Client</th><th>Tier</th><th>Industry</th><th>Policies</th><th>Premium</th><th>% of Book</th><th>LR</th><th>Producer</th></tr></thead>
      <tbody>
        ${clients.slice(0,10).map((c,i) => `
        <tr>
          <td><strong>#${i+1}</strong></td>
          <td><strong>${c.name}</strong></td>
          <td>${_tierBadge(c.tier)}</td>
          <td>${c.industry}</td>
          <td>${c.policies}</td>
          <td><strong>$${(c.premium/1000).toFixed(0)}k</strong></td>
          <td>${((c.premium/b.total_premium)*100).toFixed(1)}%</td>
          <td><strong style="color:${c.loss_ratio<=30?'var(--status-green)':c.loss_ratio<=60?'var(--mga-accent)':'var(--status-red)'};">${c.loss_ratio}%</strong></td>
          <td style="font-size:0.82rem;">${c.producer}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">RECENT ACTIVITY</div>
    ${D.clientActivities.map(a => `
      <div style="display:flex; gap:var(--space-sm); padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
        <div style="width:32px; height:32px; border-radius:50%; background:var(--bg-card); display:flex; align-items:center; justify-content:center;">${ {Call:'📞', Email:'📧', Meeting:'🤝'}[a.type] || '📋' }</div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between;"><strong style="font-size:0.88rem;">${a.client}</strong><span style="color:var(--text-muted); font-size:0.78rem;">${a.ts}</span></div>
          <div style="font-size:0.82rem;">${a.type} · ${a.subject}</div>
          <div style="color:var(--text-muted); font-size:0.72rem;">by ${a.producer}</div>
        </div>
      </div>`).join('')}
  </div>`;
}

function renderClientsSegmentation() {
  const seg = D.clientAnalytics.segmentation_by_industry;
  const max = Math.max(...seg.map(s => s.premium));
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Client Segmentation</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">By industry · premium · NPS · loss ratio — identify concentration &amp; quality</div>
    </div>
    <button class="btn btn-primary" onclick="window.showAlert('Export queued — segmentation')">Export</button>
  </div>

  ${_clientSubNav('clients-segmentation')}

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">SEGMENT BY INDUSTRY</div>
    <table class="data-table">
      <thead><tr><th>Industry</th><th>Clients</th><th>Premium</th><th>Share</th><th>Avg NPS</th><th>Loss Ratio</th><th>Quality</th></tr></thead>
      <tbody>
        ${seg.map(s => { const qual = s.loss_ratio <= 30 && s.avg_nps >= 75 ? 'Premium' : s.loss_ratio <= 50 && s.avg_nps >= 65 ? 'Good' : s.loss_ratio <= 65 ? 'Watch' : 'Remediate'; const qualColor = qual === 'Premium' ? 'green' : qual === 'Good' ? 'blue' : qual === 'Watch' ? 'amber' : 'red'; return `
        <tr>
          <td><strong>${s.industry}</strong></td>
          <td>${s.clients}</td>
          <td><strong>$${(s.premium/1e6).toFixed(2)}M</strong></td>
          <td><div style="display:flex; align-items:center; gap:6px;"><div style="width:60px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${(s.premium/max)*100}%; background:var(--mga-accent);"></div></div><span>${((s.premium/14_200_000)*100).toFixed(0)}%</span></div></td>
          <td><strong style="color:${s.avg_nps>=75?'var(--status-green)':s.avg_nps>=55?'var(--mga-accent)':'var(--status-amber)'};">${s.avg_nps}</strong></td>
          <td><strong style="color:${s.loss_ratio<=30?'var(--status-green)':s.loss_ratio<=60?'var(--mga-accent)':'var(--status-red)'};">${s.loss_ratio}%</strong></td>
          <td>${badge(qualColor, qual)}</td>
        </tr>`; }).join('')}
      </tbody>
    </table>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CONCENTRATION RISK</div>
      <div style="padding: var(--space-md); background: rgba(255,171,0,0.1); border-left: 3px solid var(--status-amber); border-radius:var(--radius-sm); margin-bottom: var(--space-sm); font-size:0.85rem;">
        ⚠ Construction is 22% of book — above 20% concentration threshold. Consider diversification.
      </div>
      <div style="padding: var(--space-md); background: rgba(0,230,118,0.1); border-left: 3px solid var(--status-green); border-radius:var(--radius-sm); margin-bottom: var(--space-sm); font-size:0.85rem;">
        ✓ Top 3 industries (Construction, Tech, Healthcare) account for 57% of premium with LR &lt; 25%.
      </div>
      <div style="padding: var(--space-md); background: rgba(255,82,82,0.1); border-left: 3px solid var(--status-red); border-radius:var(--radius-sm); font-size:0.85rem;">
        ⚠ Food Services segment has 62% LR — above profitable threshold. Review underwriting.
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">GROWTH OPPORTUNITIES</div>
      ${[
        { seg: 'Tech',        growth: '+24%', note: '18 clients · high NPS · LR 14%' },
        { seg: 'Healthcare',  growth: '+18%', note: '16 clients · best LR 12% · expanding locations' },
        { seg: 'Construction',growth: '+12%', note: 'Largest segment · stable · referrals strong' }
      ].map(o => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
          <div><strong>${o.seg}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${o.note}</div></div>
          <strong style="color:var(--status-green);">${o.growth} YoY</strong>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderClientsRetention() {
  const a = D.clientAnalytics;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Retention &amp; Churn Analytics</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Quarterly retention · churn by tier · at-risk clients · save actions</div>
    </div>
    <button class="btn btn-primary" onclick="window.showAlert('Launching remediation campaign for ' + ${a.at_risk.length} + ' at-risk clients')">🛟 Save At-Risk</button>
  </div>

  ${_clientSubNav('clients-retention')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">QUARTERLY RETENTION TREND</div>
      <div style="display:flex; align-items:flex-end; gap:var(--space-md); height: 200px; padding-bottom: var(--space-md);">
        ${a.retention_quarterly.map(q => `
          <div style="flex:1; text-align:center;">
            <div style="color:var(--text-muted); font-size:0.75rem;">${q.rate}%</div>
            <div style="background:linear-gradient(180deg, var(--mga-accent), #a67dff); height:${q.rate*2}px; border-radius:var(--radius-sm); margin: 4px 0;"></div>
            <div style="font-size:0.8rem; font-weight:600;">${q.q}</div>
            <div style="color:var(--text-muted); font-size:0.7rem;">${q.retained}R / ${q.lost}L</div>
          </div>`).join('')}
      </div>
      <div style="padding: var(--space-sm); background: rgba(0,230,118,0.1); border-radius:var(--radius-sm); font-size:0.82rem; color:var(--status-green);">
        ✓ 5-quarter average retention: 93.4%. Within top-quartile industry benchmark.
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CHURN BY TIER</div>
      ${a.churn_by_tier.map(t => `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span>${_tierBadge(t.tier)} <span style="color:var(--text-muted);">· ${t.churn} lost</span></span>
            <strong style="color:${t.rate<=5?'var(--status-green)':t.rate<=12?'var(--mga-accent)':'var(--status-amber)'};">${t.rate}%</strong>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${t.rate*4}%; background:${t.rate<=5?'var(--status-green)':t.rate<=12?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
        </div>`).join('')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">AT-RISK CLIENTS — SAVE ACTIONS</div>
    <table class="data-table">
      <thead><tr><th>Client</th><th>Risk Reason</th><th>Producer</th><th>Recommended Action</th><th>Action</th></tr></thead>
      <tbody>
        ${a.at_risk.map(r => `
        <tr>
          <td><strong>${r.client}</strong></td>
          <td style="font-size:0.85rem;">${r.reason}</td>
          <td style="font-size:0.82rem;">${r.producer}</td>
          <td style="font-size:0.85rem;">${r.action}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.showAlert('Starting save campaign for ${r.client}')">Execute</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderClientsCrossSell() {
  const opps = D.clientAnalytics.cross_sell_opportunities;
  const total_opp = opps.reduce((s,o) => s + o.est_premium, 0);
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Cross-Sell Opportunity Analyzer</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${opps.length} opportunities identified · $${(total_opp/1000).toFixed(0)}k potential premium · AI-scored fit</div>
    </div>
    <button class="btn btn-primary" onclick="window.showAlert('Creating prospects for all ' + ${opps.length} + ' cross-sell opportunities')">🚀 Convert All to Prospects</button>
  </div>

  ${_clientSubNav('clients-crosssell')}

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Opportunities</div><div class="kpi-value">${opps.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Potential Premium</div><div class="kpi-value">$${(total_opp/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg Fit Score</div><div class="kpi-value">${Math.round(opps.reduce((s,o)=>s+o.fit,0)/opps.length)}%</div></div>
    <div class="kpi-card"><div class="kpi-label">High-Fit (≥85)</div><div class="kpi-value">${opps.filter(o=>o.fit>=85).length}</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">IDENTIFIED OPPORTUNITIES</div>
    <table class="data-table">
      <thead><tr><th>Client</th><th>Coverage Gap</th><th>Rationale</th><th>Est. Premium</th><th>Fit</th><th>Producer</th><th>Action</th></tr></thead>
      <tbody>
        ${opps.map(o => `
        <tr>
          <td><strong>${o.client}</strong></td>
          <td>${badge('amber', o.gap)}</td>
          <td style="font-size:0.85rem; max-width:380px;">${o.rationale}</td>
          <td><strong>$${(o.est_premium/1000).toFixed(0)}k</strong></td>
          <td>
            <div style="display:flex; align-items:center; gap:6px;">
              <div class="market-fit-bar"><div class="market-fit-fill" style="width:${o.fit}%; background:${o.fit>=85?'var(--status-green)':'var(--mga-accent)'};"></div></div>
              <strong style="color:${o.fit>=85?'var(--status-green)':'var(--mga-accent)'};">${o.fit}%</strong>
            </div>
          </td>
          <td style="font-size:0.82rem;">${o.producer}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'prospect-wizard', prospectWizardStep:1})">Create Prospect</button>
            <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'submission', wizardStep:1})">Quote</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">💡 CROSS-SELL PLAYBOOK</div>
    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-md); font-size:0.85rem; line-height:1.6;">
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
        <strong>🎯 Best timing</strong>
        <p style="color:var(--text-muted); margin-top:6px;">30–60 days before existing renewal — natural review moment.</p>
      </div>
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
        <strong>📊 Highest close rate</strong>
        <p style="color:var(--text-muted); margin-top:6px;">Cyber adds to existing GL clients — 62% close rate historically.</p>
      </div>
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
        <strong>⚡ Fastest to revenue</strong>
        <p style="color:var(--text-muted); margin-top:6px;">Umbrella to Auto/GL clients — &lt; 14 days typical.</p>
      </div>
    </div>
  </div>`;
}

function renderClientsAIAssistant() {
  const chat = D.clientAIChat;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">AI Client Assistant</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Search, summarize, and analyze across your ${D.brokerClients.length} clients</div>
    </div>
  </div>

  ${_clientSubNav('clients-ai')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); display:flex; flex-direction:column; min-height:540px;">
      <div style="flex:1; overflow-y:auto; padding-right:8px;">
        ${chat.map(m => `
          <div class="doc-ai-msg doc-ai-msg-${m.role}">
            <div class="doc-ai-avatar doc-ai-avatar-${m.role}">${m.role==='ai'?'🤖':'🧑‍💼'}</div>
            <div class="doc-ai-bubble">${m.text.replace(/\n/g,'<br/>')}</div>
          </div>`).join('')}
      </div>
      <div style="margin-top: var(--space-md); display:flex; gap: var(--space-sm);">
        <input class="form-input" style="flex:1;" placeholder="Ask about any client, segment, or book metric..."/>
        <button class="btn btn-primary" onclick="window.showAlert('AI processing your request…')">Send →</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:var(--space-md);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SUGGESTED PROMPTS</div>
        ${[
          'Show my top-10 at-risk clients',
          'Which Platinum clients need a QBR?',
          'Cross-sell opportunities for Magnolia',
          'Summarize TechCorp\'s coverage package',
          'Clients with single LOB above $50k premium',
          'Industry segments with LR > 60%'
        ].map(p => `<div class="doc-ai-prompt" onclick="window.showAlert('Running: ${p}')">${p}</div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderBrokerPolicyDetails() {
  const p = D.policyDetails;
  return `
  <!-- HEADER & BREADCRUMB -->
  <div style="margin-bottom: var(--space-md); display:flex; justify-content:space-between; align-items:center;">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'policies'})">← Back to Policy List</button>
    <div style="font-size:0.8rem; color:var(--text-muted);">Last Sync: 10m ago · EPIC ID: <span style="color:var(--text-primary); font-family:monospace;">${p.epic_id}</span></div>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-xl);">
    <div>
      <h2 style="margin:0 0 var(--space-xs) 0; font-size:1.8rem;">Policy #${p.id}</h2>
      <div style="display:flex; gap:var(--space-md); align-items:center; color:var(--text-secondary); font-size:0.9rem;">
        <span><strong>Client:</strong> ${p.client}</span>
        <span style="color:var(--border-subtle);">|</span>
        <span><strong>LOB:</strong> ${p.line_of_business}</span>
        <span style="color:var(--border-subtle);">|</span>
        <span><strong>Carrier:</strong> ${p.carrier_code}</span>
      </div>
    </div>
    <div style="text-align:right;">
      ${badge(p.statusColor, p.status)}
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">Transaction Type: <span style="color:var(--text-primary);">${p.transaction_type}</span></div>
    </div>
  </div>

  <!-- KPI SUMMARY -->
  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom:var(--space-xl);">
    <div class="kpi-card" style="border-left:3px solid var(--mga-accent);">
      <div class="kpi-label">WRITTEN PREMIUM</div>
      <div class="kpi-value">${p.premium_written}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">TERM LENGTH</div>
      <div class="kpi-value">${p.term_length}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">DAYS REMAINING</div>
      <div class="kpi-value" style="color:var(--status-green);">44</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">COMMISSION (EST)</div>
      <div class="kpi-value">${p.commission_amt}</div>
    </div>
  </div>

  <!-- MAIN CONTENT GRID -->
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap:var(--space-xl); margin-bottom:var(--space-xl);">
    
    <!-- LEFT: CORE METADATA -->
    <div style="display:flex; flex-direction:column; gap:var(--space-xl);">
      
      <!-- General & Financial Panel -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">POLICY ATTRIBUTES & FINANCIALS</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-xl); font-size:0.85rem;">
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Carrier Policy #</span> <strong>${p.carrier_policy_no}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Effective Date</span> <strong>${p.effective}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Expiration Date</span> <strong>${p.expiration}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Billing Method</span> <strong>${p.billing_method}</strong></div>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Payment Plan</span> <strong>${p.payment_plan}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Commission Rate</span> <strong>${p.commission_rate}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Annual Premium</span> <strong>${p.premium_written}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Estimated Renewal</span> <strong>${p.premium_estimated}</strong></div>
          </div>
        </div>
        <div style="margin-top:var(--space-lg); padding-top:var(--space-md); border-top:1px solid var(--border-subtle);">
          <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; font-weight:600; margin-bottom:8px;">Description / Handling Notes</div>
          <p style="font-size:0.85rem; line-height:1.5; margin:0;">${p.description}</p>
          <div style="margin-top:12px; background:rgba(255,213,79,0.05); border:1px dashed var(--status-amber); padding:8px 12px; border-radius:var(--radius-sm); font-size:0.8rem;">
            <span style="color:var(--status-amber); font-weight:700;">NOTE:</span> ${p.notes}
          </div>
        </div>
      </div>

      <!-- Compliance & COIs -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SERVICING - ACTIVE COI HOLDERS</div>
        <div class="data-table-wrapper" style="margin:0;">
          <table class="data-table" style="font-size:0.8rem;">
            <thead><tr><th>Holder Name</th><th>Address</th><th>Role</th><th>Action</th></tr></thead>
            <tbody>
              ${p.coi_holders.map(h => `
              <tr>
                <td><strong>${h.name}</strong></td>
                <td style="color:var(--text-muted);">${h.address}</td>
                <td>${h.type}</td>
                <td><button class="btn btn-ghost btn-sm" onclick="alert('Regenerating COI for ${h.name}')">Refesh</button></td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- RIGHT: ROLES & EXPOSURES -->
    <div style="display:flex; flex-direction:column; gap:var(--space-xl);">
      
      <!-- Servicing Team -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SERVICING TEAM</div>
        <div style="display:flex; flex-direction:column; gap:12px; font-size:0.85rem;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="color:var(--text-muted); font-size:0.75rem;">PRODUCER</div>
              <div style="font-weight:600;">${p.producer}</div>
            </div>
            <button class="btn btn-ghost btn-sm">💬</button>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="color:var(--text-muted); font-size:0.75rem;">CSR / REP</div>
              <div style="font-weight:600;">${p.csr}</div>
            </div>
            <button class="btn btn-ghost btn-sm">💬</button>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="color:var(--text-muted); font-size:0.75rem;">UNDERWRITER</div>
              <div style="font-weight:600;">${p.underwriter}</div>
            </div>
            <button class="btn btn-ghost btn-sm">📧</button>
          </div>
        </div>
      </div>

      <!-- Claims & Performance -->
      <div style="background:rgba(255,82,82,0.03); border:1px solid rgba(255,82,82,0.2); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title" style="color:var(--status-red);">CLAIMS & PERFORMANCE</div>
        <div style="font-size:0.85rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">Open Claims</span> <strong style="color:var(--status-red); cursor:pointer;" onclick="window.setState({screen:'claims'})">${p.claims_linkage.open_count} →</strong></div>
          <div style="color:var(--text-muted); font-size:0.75rem; margin-top:12px; margin-bottom:4px;">LOSS HISTORY SUMMARY</div>
          <div style="line-height:1.4; color:var(--text-primary); font-weight:600;">${p.claims_linkage.loss_history_summary}</div>
          <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.setState({screen:'claims'})">View Claims</button>
          <button class="btn btn-ghost btn-sm" style="width:100%; margin-top:var(--space-sm);" onclick="window.setState({screen:'policy-loss-runs'})">View Full Loss Runs</button>
        </div>
      </div>

    </div>

  </div>

  <!-- FULL WIDTH HISTORY -->
  <div class="section-title">TRANSACTIONAL HISTORY & AUDIT TRAIL</div>
  <div class="data-table-wrapper" style="margin-bottom: var(--space-xl);">
    <table class="data-table">
      <thead><tr><th>Date</th><th>Type</th><th>Description / Reason</th><th>User</th><th>Action</th></tr></thead>
      <tbody>
        ${p.history.map(h => `
        <tr>
          <td><span style="font-family:monospace;">${h.date}</span></td>
          <td><span class="badge ${h.type === 'Policy Issued' ? 'badge-green' : h.type === 'Claim' ? 'badge-red' : 'badge-blue'}">${h.type}</span></td>
          <td>
            <div style="font-weight:600;">${h.action}</div>
            ${h.reason ? `<div style="font-size:0.75rem; color:var(--text-muted);">Reason: ${h.reason}</div>` : ''}
          </td>
          <td>${h.user}</td>
          <td><button class="btn btn-ghost btn-sm">Details</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  
  <!-- FLOATING ACTIONS FOOTER -->
  <div class="section-title">DOCUMENTS & OPERATIONAL ACTIONS</div>
  <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap; background: var(--bg-card); padding: var(--space-md); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
    <button class="btn btn-secondary" onclick="window.setState({screen:'policy-pdf'})">📄 View Dec Page</button>
    <button class="btn btn-secondary" onclick="window.setState({screen:'policy-pdf'})">📦 All Policy Docs</button>
    <label class="btn btn-ghost" style="cursor:pointer; display:inline-flex; align-items:center;">⬆️ Upload Doc<input type="file" id="btn-pol-upload" style="display:none;"></label>
    <div style="flex-grow:1"></div>
    <button class="btn btn-secondary" id="btn-pol-edit">✏️ Endorse</button>
    <button class="btn btn-primary" id="btn-pol-renew">🔄 Renew</button>
    <button class="btn btn-danger" id="btn-pol-cancel">🚫 Cancel</button>
  </div>`;
}

function renderBrokerLossRuns() {
  const p = D.policyDetails;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" onclick="window.setState({screen:'policy-details'})">← Back to Policy</button>
  </div>
  <h2 style="margin-bottom: var(--space-md);">Loss Runs for Policy #${p.id}</h2>
  <div class="data-table-wrapper" style="margin-bottom: var(--space-lg);">
    <table class="data-table">
      <thead><tr><th>Year</th><th>Carrier</th><th>Reported Claims</th><th>Total Reserves</th><th>Paid</th><th>Ratio</th></tr></thead>
      <tbody>
        ${D.lossRunSummary.map(l => `
        <tr>
          <td>${l.year}</td><td>${l.carrier}</td><td>${l.level === 'green' ? 0 : 2}</td>
          <td>$${l.level === 'green' ? 0 : '15,000'}</td><td>$${l.level === 'green' ? 0 : '5,000'}</td>
          <td>${badge(l.level, l.ratio)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <button class="btn btn-primary" onclick="alert('Loss Run report generated and sent to email.')">Generate Loss Run Report</button>
  `;
}

function renderBrokerPolicyEdit() {
  const p = D.policyDetails;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" id="btn-back-to-policy-2">← Back to Policy</button>
  </div>
  <h2 style="margin-bottom: var(--space-md);">Endorse Policy #${p.id}</h2>
  <div class="data-table-wrapper" style="padding: var(--space-xl);">
    <div class="form-group">
      <div class="form-label">Endorsement Type</div>
      <select class="form-input">
        <option>Address Change</option>
        <option>Add/Remove Coverage</option>
        <option>Add Vehicle</option>
        <option>Other</option>
      </select>
    </div>
    <div class="form-group" style="margin-top:var(--space-md);">
      <div class="form-label">Effective Date</div>
      <input type="date" class="form-input" value="2026-05-01"/>
    </div>
    <div class="form-group" style="margin-top:var(--space-md);">
      <div class="form-label">Description of Changes</div>
      <textarea class="form-input" rows="4"></textarea>
    </div>
    <div style="margin-top:var(--space-lg);">
      <button class="btn btn-primary" id="btn-submit-edit">Submit Endorsement</button>
    </div>
  </div>`;
}

function renderBrokerPolicyRenew() {
  const p = D.policyDetails;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" onclick="window.setState({screen:'policy-details'})">← Back to Policy</button>
  </div>
  <h2 style="margin-bottom: var(--space-md);">Initiate Renewal: Policy #${p.id}</h2>
  <div class="two-col">
    <div>
      <div class="section-title">INCUMBENT DETAILS</div>
      <div class="detail-panel">
        <p>Premium: <strong>${p.premium}</strong></p>
        <p>Coverage: <strong>${p.coverage}</strong></p>
        <p>Exp: <strong>${p.exp}</strong></p>
      </div>
    </div>
    <div>
      <div class="section-title">RENEWAL ACTIONS</div>
      <div class="detail-panel">
        <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="alert('Renewal task assigned to Underwriting team.')">Request Renewal Quote from Incumbent</button>
        <button class="btn btn-primary" style="width:100%;" onclick="alert('Sent policy details into SEMC marketplace.')">Market Renewal (Submit to SEMC)</button>
      </div>
    </div>
  </div>
  `;
}

function renderBrokerPolicyCancel() {
  const p = D.policyDetails;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" id="btn-back-to-policy-4">← Back to Policy</button>
  </div>
  <h2 style="margin-bottom: var(--space-md);">Cancel Policy #${p.id}</h2>
  <div class="data-table-wrapper" style="padding: var(--space-xl);">
    <div class="alert-banner alert-red" style="margin-bottom:var(--space-lg);">⚠️ Warning: This action represents a formal request to cancel coverage.</div>
    <div class="form-group">
      <div class="form-label">Cancellation Reason</div>
      <select class="form-input">
        <option>Non-payment of premium</option>
        <option>Client Request / Found cheaper coverage</option>
        <option>Business Sold/Closed</option>
        <option>Rewritten with different carrier</option>
      </select>
    </div>
    <div class="form-group" style="margin-top:var(--space-md);">
      <div class="form-label">Cancellation Effective Date</div>
      <input type="date" class="form-input" />
    </div>
    <div style="margin-top:var(--space-lg);">
      <button class="btn btn-danger" id="btn-confirm-cancel">Confirm Cancellation</button>
    </div>
  </div>`;
}

function renderBrokerQuoteDetails() {
  const q = D.quoteDetail;
  const tab = state.quoteTab || 'overview';
  const tabs = [
    { id: 'overview',   label: 'Overview' },
    { id: 'comparison', label: `Carrier Comparison (${q.carrier_quotes.length})` },
    { id: 'risk',       label: 'Risk Profile' },
    { id: 'versions',   label: `Versions (${q.versions.length})` },
    { id: 'presentation', label: 'Presentation' },
    { id: 'actions',    label: 'Actions / Bind' }
  ];
  const content = {
    overview: renderQuoteTabOverview,
    comparison: renderQuoteTabComparison,
    risk: renderQuoteTabRisk,
    versions: renderQuoteTabVersions,
    presentation: renderQuoteTabPresentation,
    actions: renderQuoteTabActions
  }[tab] || renderQuoteTabOverview;

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'quotes'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Quotes</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-md);">
    <div>
      <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom:4px;">
        <h2 style="margin:0; font-size:1.4rem;">${q.id} — ${q.client}</h2>
        ${badge(q.status_color, q.status)}
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">
        ${q.lob} · Effective ${q.effective} · Quote expires ${q.expiration} · Producer: ${q.producer}
      </div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.openTaskModal({client:'${q.client}', subject:'Quote follow-up: '})">+ Task</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Re-rating triggered — pinging 5 carriers...')">🔁 Re-Rate</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'proposal-generator'})">📄 Proposal</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'binding-details'})">🔒 Proceed to Bind</button>
    </div>
  </div>

  <!-- Recommended summary strip -->
  <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-lg); padding:var(--space-md); margin-bottom: var(--space-lg); display:flex; justify-content:space-between; align-items:center;">
    <div>
      <div style="font-size:0.75rem; color:var(--status-green); text-transform:uppercase; font-weight:600;">⭐ ${q.recommended.score}</div>
      <div style="font-size:1.2rem; font-weight:700; margin-top:2px;">${q.recommended.carrier}</div>
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">Range: ${q.current_premium_range} across ${q.carrier_quotes.length} carriers</div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:1.6rem; font-weight:700;">$${q.recommended.premium.toLocaleString()}</div>
      <div style="font-size:0.8rem; color:var(--text-muted);">$${q.recommended.monthly.toLocaleString()}/mo</div>
    </div>
  </div>

  <!-- TABS -->
  <div style="display:flex; border-bottom: 1px solid var(--border-subtle); margin-bottom: var(--space-xl); gap: var(--space-lg);">
    ${tabs.map(t => {
      const active = tab === t.id;
      const style = active ? 'border-bottom: 2px solid var(--mga-accent); font-weight:600; color:var(--text-primary);' : 'color:var(--text-muted);';
      return `<div style="padding:var(--space-sm) 0; cursor:pointer; ${style}" onclick="window.setState({quoteTab:'${t.id}'})">${t.label}</div>`;
    }).join('')}
  </div>

  ${content(q)}`;
}

function renderQuoteTabOverview(q) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <!-- Quick comparison -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
          <div class="section-title" style="margin:0;">CARRIER QUOTES — TOP 4</div>
          <button class="btn btn-ghost btn-sm" onclick="window.setState({quoteTab:'comparison'})">Full Comparison →</button>
        </div>
        <table class="data-table">
          <thead><tr><th>Carrier</th><th>Premium</th><th>Monthly</th><th>Coverage</th><th>Appetite</th><th>Recommendation</th><th>Action</th></tr></thead>
          <tbody>
            ${q.carrier_quotes.slice(0, 4).map(c => `
            <tr style="${c.recommended === 'Best Value' ? 'background:rgba(0,230,118,0.04);' : ''}">
              <td><strong>${c.carrier}</strong></td>
              <td>${c.premium ? '<strong>$' + c.premium.toLocaleString() + '</strong>' : '<span style="color:var(--text-muted);">—</span>'}</td>
              <td>${c.monthly ? '$' + c.monthly.toLocaleString() : '<span style="color:var(--text-muted);">—</span>'}</td>
              <td>${c.coverage_score > 0 ? `<div style="display:flex; align-items:center; gap:6px;"><div style="width:50px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${c.coverage_score}%; background:var(--mga-accent);"></div></div>${c.coverage_score}</div>` : '<span style="color:var(--text-muted);">—</span>'}</td>
              <td>${c.appetite_match > 0 ? `<strong style="color:${c.appetite_match >= 85 ? 'var(--status-green)' : c.appetite_match >= 65 ? 'var(--status-amber)' : 'var(--status-red)'};">${c.appetite_match}</strong>` : '<span style="color:var(--text-muted);">—</span>'}</td>
              <td>${c.recommended ? badge(c.recommended === 'Best Value' ? 'green' : c.recommended === 'Lowest Price' ? 'amber' : 'blue', c.recommended) : c.status === 'Declined' ? badge('red', 'Declined') : '<span style="color:var(--text-muted);">—</span>'}</td>
              <td>${c.binder_ready ? `<button class="btn btn-primary btn-sm" onclick="window.setState({screen:'binding-details'})">Bind</button>` : `<button class="btn btn-ghost btn-sm" disabled>—</button>`}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <!-- AI Recommendations -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">✨ AI RECOMMENDATIONS</div>
        ${q.ai_recommendations.map((r, i) => `
        <div style="display:flex; gap:var(--space-md); padding:var(--space-sm) 0; border-bottom:${i < q.ai_recommendations.length - 1 ? '1px solid var(--border-subtle)' : 'none'};">
          <div style="color:var(--mga-accent); font-weight:700; min-width:24px;">${i+1}.</div>
          <div style="flex:1; font-size:0.9rem;">${r}</div>
        </div>`).join('')}
      </div>

      <!-- Benchmarks -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">MARKET BENCHMARK</div>
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md);">
          <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);"><div style="color:var(--text-muted); font-size:0.7rem;">MARKET LOW</div><div style="font-weight:700; margin-top:4px;">$${(q.benchmarks.market_low/1000).toFixed(0)}k</div></div>
          <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);"><div style="color:var(--text-muted); font-size:0.7rem;">MARKET AVG</div><div style="font-weight:700; margin-top:4px;">$${(q.benchmarks.market_avg_premium/1000).toFixed(0)}k</div></div>
          <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);"><div style="color:var(--text-muted); font-size:0.7rem;">MARKET HIGH</div><div style="font-weight:700; margin-top:4px;">$${(q.benchmarks.market_high/1000).toFixed(0)}k</div></div>
          <div style="background:rgba(0,230,118,0.08); padding:var(--space-md); border-radius:var(--radius-md); border:1px solid var(--status-green);"><div style="color:var(--status-green); font-size:0.7rem;">YOUR QUOTE</div><div style="font-weight:700; margin-top:4px;">$${(q.recommended.premium/1000).toFixed(0)}k</div></div>
        </div>
        <div style="margin-top:var(--space-md); padding:var(--space-sm); background:rgba(0,230,118,0.05); border-radius:var(--radius-md); font-size:0.85rem; color:var(--status-green);">
          ✓ ${q.benchmarks.your_quote_position}
        </div>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <!-- Risk snapshot -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-sm);">
          <div class="section-title" style="margin:0;">RISK SNAPSHOT</div>
          <button class="btn btn-ghost btn-sm" onclick="window.setState({quoteTab:'risk'})">Edit →</button>
        </div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Industry</span><strong style="text-align:right; max-width:60%;">${q.risk_summary.industry}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Revenue</span><strong>${q.risk_summary.revenue}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Employees</span><strong>${q.risk_summary.employees}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Locations</span><strong>${q.risk_summary.locations}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">States</span><strong>${q.risk_summary.states.join(', ')}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Payroll</span><strong>${q.risk_summary.payroll}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">OSHA EMR</span><strong style="color:var(--status-green);">${q.risk_summary.osha_emr}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Loss History</span><strong style="text-align:right;">${q.risk_summary.loss_history}</strong></div>
        </div>
      </div>

      <!-- Presentation status -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">PRESENTATION STATUS</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Proposal</span><strong style="color:var(--status-green);">Generated</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Delivered</span><strong style="color:var(--status-green);">${q.presentation.delivered.split(' ')[0]}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Viewed</span><strong style="color:var(--status-green);">${q.presentation.viewed.split(' ')[0]}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Last Follow-up</span><strong>${q.presentation.last_followup.split(' ')[0]}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Next Follow-up</span><strong style="color:var(--status-amber);">${q.presentation.next_followup.split(' ')[0]}</strong></div>
        </div>
        <button class="btn btn-secondary btn-sm" style="width:100%; margin-top: var(--space-md);" onclick="window.setState({quoteTab:'presentation'})">Manage Presentation →</button>
      </div>
    </div>
  </div>`;
}

function renderQuoteTabComparison(q) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Side-by-Side Carrier Comparison</h3>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'quote-comparison'})">⛶ Full Screen</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Adjusting limits — re-rating all carriers...')">🎚 Adjust Coverages</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Discount applied: Multi-policy 5%')">💰 Apply Discount</button>
    </div>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th style="width:240px;">Coverage</th>
        <th>SEMC ⭐</th><th>CNA</th><th>Travelers</th><th>Hartford</th>
      </tr></thead>
      <tbody>
        ${q.coverage_grid.map(row => {
          const highlight = row.coverage === 'Annual Premium' || row.coverage === 'Monthly';
          return `<tr style="${highlight?'background:rgba(68,138,255,0.04);':''}"><td><strong>${row.coverage}</strong></td><td>${row.semc}</td><td>${row.cna}</td><td>${row.travelers}</td><td>${row.hartford}</td></tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md);">
    <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--status-green); margin-bottom:4px;">⭐ Best Value</div>
      <div style="font-size:0.9rem;">SEMC — $178,500 (+5.0%). Preserves continuity, no coverage gaps, EMR honored.</div>
    </div>
    <div style="background:rgba(255,167,38,0.05); border:1px solid var(--status-amber); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--status-amber); margin-bottom:4px;">💰 Lowest Price</div>
      <div style="font-size:0.9rem;">Travelers — $172,800 (+1.6%). Save $5,700 but $2k deductible vs $1k.</div>
    </div>
    <div style="background:rgba(68,138,255,0.05); border:1px solid var(--mga-accent); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--mga-accent); margin-bottom:4px;">🛡 Broadest Coverage</div>
      <div style="font-size:0.9rem;">Hartford — $189,400 (+11.4%). Includes cyber endorsement + $5M umbrella.</div>
    </div>
  </div>

  <!-- Coverage gap callouts -->
  <div style="margin-top: var(--space-lg); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">⚠ COVERAGE GAPS & EXCLUSIONS</div>
    <div style="font-size:0.9rem; display:flex; flex-direction:column; gap:10px;">
      <div style="padding:8px 0; border-bottom:1px solid var(--border-subtle);"><strong>SEMC:</strong> Cyber endorsement not included. Recommend cross-sell of standalone Cyber policy.</div>
      <div style="padding:8px 0; border-bottom:1px solid var(--border-subtle);"><strong>Travelers:</strong> Higher GL deductible ($2k vs market norm $1k). Owner may push back.</div>
      <div style="padding:8px 0; border-bottom:1px solid var(--border-subtle);"><strong>AMTrust:</strong> Declined — class code outside appetite. Removed from market.</div>
    </div>
  </div>`;
}

function renderQuoteTabRisk(q) {
  const r = q.risk_summary;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Risk Profile (smart questionnaire — auto-populated for re-quoting)</h3>
    <button class="btn btn-secondary" onclick="window.showAlert('Risk re-rated across all carriers')">🔁 Save & Re-Rate</button>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">BUSINESS PROFILE</div>
      <div style="display:flex; flex-direction:column; gap: var(--space-md);">
        <div><label class="form-label">Industry / NAICS</label><input class="form-input" value="${r.industry}"/></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md);">
          <div><label class="form-label">Annual Revenue</label><input class="form-input" value="${r.revenue}"/></div>
          <div><label class="form-label">Employees</label><input class="form-input" value="${r.employees}"/></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md);">
          <div><label class="form-label">Locations</label><input class="form-input" value="${r.locations}"/></div>
          <div><label class="form-label">Annual Payroll</label><input class="form-input" value="${r.payroll}"/></div>
        </div>
        <div><label class="form-label">States of Operation</label><input class="form-input" value="${r.states.join(', ')}"/></div>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RISK FACTORS</div>
      <div style="display:flex; flex-direction:column; gap: var(--space-md);">
        <div><label class="form-label">OSHA EMR Rating</label><input class="form-input" value="${r.osha_emr}" style="color:var(--status-green); font-weight:600;"/></div>
        <div><label class="form-label">5-Year Loss History</label><input class="form-input" value="${r.loss_history}"/></div>
        <div><label class="form-label">Coverage Limits Required</label><select class="form-input"><option>$1M / $2M (Standard)</option><option>$1M / $3M (Enhanced)</option><option>$2M / $4M (Heavy)</option></select></div>
        <div><label class="form-label">Deductible Preference</label><select class="form-input"><option>$1,000</option><option>$2,500</option><option>$5,000</option></select></div>
        <div style="font-size:0.85rem; padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md);">
          <strong>📎 Documents:</strong> Loss runs (5yr) ✓ · Payroll Q1 ✓ · OSHA 300 logs ✓ · <span style="color:var(--status-amber);">Equipment schedule (pending)</span>
        </div>
      </div>
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Risk data is captured ONCE and reused across all carriers. Smart questionnaire shows/hides fields based on LOB. ACORD-style + custom underwriting questions supported. Auto-save runs every 30 seconds.
  </div>`;
}

function renderQuoteTabVersions(q) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Version History & Audit Trail</h3>
    <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Version comparison: v1.2 vs v1.3')">⇄ Compare Versions</button>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg); position:relative;">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${q.versions.map((v, i) => `
      <div style="display:flex; gap: var(--space-lg); position:relative;">
        <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid ${i===0?'var(--status-green)':'var(--mga-accent)'}; z-index:1; margin-top:4px;"></div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap: var(--space-sm);">
              <div style="font-weight:700; font-size:1rem;">${v.v}</div>
              ${i === 0 ? badge('green', 'Current') : ''}
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${v.when}</div>
          </div>
          <div style="font-size:0.9rem; color:var(--text-secondary); margin-top:4px;">${v.change}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">by ${v.who}</div>
          ${i !== 0 ? `<button class="btn btn-ghost btn-sm" style="margin-top:6px;" onclick="window.showAlert('Restored to ${v.v} — re-rate triggered')">Restore</button>` : ''}
        </div>
      </div>`).join('')}
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Auto-save creates a version every change. Multi-user collaboration locks fields when another producer is editing. Full audit trail retained 7 years for E&O.
  </div>`;
}

function renderQuoteTabPresentation(q) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CLIENT PROPOSAL PREVIEW</div>
      <div style="background:white; color:#222; padding: var(--space-xl); border-radius:var(--radius-md); min-height:480px; font-family: Arial, sans-serif;">
        <div style="border-bottom: 3px solid #4a4af0; padding-bottom:12px; margin-bottom:20px;">
          <div style="font-size:0.75rem; color:#888;">BRIDGEPOINT INSURANCE — QUOTE PROPOSAL</div>
          <div style="font-size:1.4rem; font-weight:700; margin-top:4px;">${q.client}</div>
          <div style="color:#666; margin-top:4px;">Quote ${q.id} · Effective ${q.effective}</div>
        </div>
        <div style="margin-bottom:20px;">
          <div style="font-weight:700; margin-bottom:8px;">RECOMMENDED OPTION</div>
          <div style="background:#f5fff8; border-left:4px solid #00c853; padding:12px; font-size:0.9rem;"><strong>${q.recommended.carrier}</strong> — ${q.recommended.score}<br/>Annual Premium: <strong>$${q.recommended.premium.toLocaleString()}</strong> · Monthly: $${q.recommended.monthly.toLocaleString()}</div>
        </div>
        <div style="margin-bottom:20px;">
          <div style="font-weight:700; margin-bottom:8px;">ALTERNATIVE OPTIONS</div>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
            ${q.carrier_quotes.filter(c => c.status === 'Quoted').slice(0, 4).map(c => `
            <tr><td style="padding:6px; border-bottom:1px solid #eee;">${c.carrier}</td><td style="padding:6px; border-bottom:1px solid #eee; text-align:right;"><strong>$${c.premium.toLocaleString()}</strong></td><td style="padding:6px; border-bottom:1px solid #eee; text-align:right; color:#666;">${c.recommended || '—'}</td></tr>`).join('')}
          </table>
        </div>
        <div style="padding-top:16px; border-top:1px solid #ddd; font-size:0.75rem; color:#666;">Quote valid through ${q.expiration}. Ready for e-Signature.</div>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">DELIVERY STATUS</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Generated</span><strong>${q.presentation.proposal_generated}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Delivered</span><strong style="color:var(--status-green);">${q.presentation.delivered}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Viewed</span><strong style="color:var(--status-green);">${q.presentation.viewed}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Signed</span><strong style="color:var(--text-muted);">Pending</strong></div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">DELIVERY ACTIONS</div>
        <button class="btn btn-primary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Proposal regenerated with latest quotes')">📄 Regenerate PDF</button>
        <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Email + portal link re-sent')">📧 Re-send</button>
        <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('SMS link sent to client')">💬 SMS Secure Link</button>
        <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('e-Signature request sent — DocuSign')">✍️ Request e-Sig</button>
        <button class="btn btn-ghost" style="width:100%;" onclick="window.showAlert('Virtual meeting scheduled')">📅 Schedule Meeting</button>
      </div>
    </div>
  </div>`;
}

function renderQuoteTabActions(q) {
  return `
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--status-green);">✓ BIND CLIENT'S CHOICE</div>
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:var(--space-md);">Client has selected ${q.recommended.carrier} at $${q.recommended.premium.toLocaleString()} annual.</div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">Selected Carrier</label>
        <select class="form-input">${q.carrier_quotes.filter(c => c.status === 'Quoted').map(c => `<option ${c.recommended === 'Best Value' ? 'selected' : ''}>${c.carrier} — $${c.premium.toLocaleString()}</option>`).join('')}</select>
      </div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">Effective Date</label><input class="form-input" type="date" value="${q.effective}"/></div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">e-Signature Status</label><div style="padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem;">⏳ Sent to client — awaiting</div></div>
      <button class="btn btn-primary" style="width:100%;" onclick="window.setState({screen:'binding-details'})">🔒 Proceed to Bind →</button>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">OTHER ACTIONS</div>
      <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Counter-offer drafted: -3% if 14-day commitment')">💬 Counter-Offer</button>
      <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.openTaskModal({client:'${q.client}', subject:'Quote follow-up: '})">📞 Schedule Follow-up</button>
      <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Quote expiration extended +14 days')">⏰ Extend Expiration</button>
      <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Re-rated all carriers with new inputs')">🔁 Re-Quote</button>
      <div style="border-top:1px solid var(--border-subtle); margin: var(--space-md) 0;"></div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">If lost, capture reason:</label>
        <select class="form-input">
          <option>—</option>
          <option>Price — competitor cheaper</option>
          <option>Coverage needs changed</option>
          <option>Switched to direct writer</option>
          <option>Decision delayed past expiry</option>
          <option>Carrier appetite mismatch</option>
          <option>Did not respond / ghosted</option>
        </select>
      </div>
      <button class="btn btn-danger" style="width:100%;" onclick="window.showAlert('Quote marked Lost — analytics updated')">✗ Mark as Lost</button>
    </div>
  </div>`;
}

// ─── Full-screen Quote Comparison ───
function renderQuoteComparison() {
  const q = D.quoteDetail;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'quote-details'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Quote</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Comparative Rating — ${q.client}</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${q.id} · ${q.lob} · ${q.carrier_quotes.length} carriers responded</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Adjusting limits — re-rating...')">🎚 Adjust</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'proposal-generator'})">Generate Proposal →</button>
    </div>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th style="width:200px;">Coverage</th>
        ${q.carrier_quotes.filter(c => c.status === 'Quoted').map((c,i) => `<th>${c.carrier}${c.recommended ? ` <span style="color:var(--mga-accent); font-size:0.7rem;">⭐</span>` : ''}</th>`).join('')}
      </tr></thead>
      <tbody>
        ${q.coverage_grid.map(row => {
          const highlight = row.coverage === 'Annual Premium' || row.coverage === 'Monthly';
          const carriers = ['semc', 'cna', 'travelers', 'hartford'];
          return `<tr style="${highlight?'background:rgba(68,138,255,0.04);':''}"><td><strong>${row.coverage}</strong></td>${carriers.map(k => `<td>${row[k]}</td>`).join('')}</tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md);">
    <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--status-green); margin-bottom:4px;">⭐ Best Value</div>
      <div style="font-size:0.9rem;">SEMC — preserves coverage, $178,500.</div>
      <button class="btn btn-primary btn-sm" style="margin-top:var(--space-sm);" onclick="window.setState({screen:'binding-details'})">Bind →</button>
    </div>
    <div style="background:rgba(255,167,38,0.05); border:1px solid var(--status-amber); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--status-amber); margin-bottom:4px;">💰 Lowest Price</div>
      <div style="font-size:0.9rem;">Travelers — $172,800. Save $5,700.</div>
      <button class="btn btn-secondary btn-sm" style="margin-top:var(--space-sm);" onclick="window.setState({screen:'binding-details'})">Bind →</button>
    </div>
    <div style="background:rgba(68,138,255,0.05); border:1px solid var(--mga-accent); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--mga-accent); margin-bottom:4px;">🛡 Broadest</div>
      <div style="font-size:0.9rem;">Hartford — $189,400. Includes cyber.</div>
      <button class="btn btn-secondary btn-sm" style="margin-top:var(--space-sm);" onclick="window.setState({screen:'binding-details'})">Bind →</button>
    </div>
  </div>`;
}

// ─── Expiring Quotes ───
function renderQuoteExpiring() {
  const today = new Date('2026-04-18');
  const expiring = D.quotesList
    .filter(q => q.expires && q.stage !== 'bound' && q.stage !== 'lost')
    .map(q => ({ ...q, days_left: Math.ceil((new Date(q.expires) - today) / (1000*60*60*24)) }))
    .sort((a, b) => a.days_left - b.days_left);
  const expired = expiring.filter(q => q.days_left < 0);
  const urgent = expiring.filter(q => q.days_left >= 0 && q.days_left <= 7);
  const soon = expiring.filter(q => q.days_left > 7 && q.days_left <= 14);
  const later = expiring.filter(q => q.days_left > 14);

  const renderRow = (q) => `
  <tr style="${q.days_left < 0 ? 'background:rgba(255,82,82,0.06);' : q.days_left <= 7 ? 'background:rgba(255,167,38,0.04);' : ''}">
    <td><strong style="color:var(--mga-accent); cursor:pointer; font-family:monospace;" onclick="window.setState({screen:'quote-details', currentQuoteId:'${q.id}'})">${q.id}</strong></td>
    <td>${q.client}</td>
    <td>${q.lob}</td>
    <td>${q.expires}</td>
    <td style="color:${q.days_left < 0 ? 'var(--status-red)' : q.days_left <= 7 ? 'var(--status-amber)' : 'var(--text-primary)'}; font-weight:700;">${q.days_left < 0 ? `Expired ${Math.abs(q.days_left)}d ago` : q.days_left + 'd'}</td>
    <td>${q.best_premium ? '$'+q.best_premium.toLocaleString() : '—'}</td>
    <td>${badge(D.quoteStages.find(s=>s.id===q.stage).color, D.quoteStages.find(s=>s.id===q.stage).label)}</td>
    <td style="display:flex; gap:4px;">
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Quote ${q.id} expiration extended +14 days')">Extend</button>
      <button class="btn btn-primary btn-sm" onclick="window.setState({screen:'quote-details', currentQuoteId:'${q.id}'})">Open</button>
    </td>
  </tr>`;

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'quotes'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Quotes</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Expiring Quotes</h2>
    <button class="btn btn-secondary" onclick="window.showAlert('Sent batch reminder emails to all clients with expiring quotes')">📧 Batch Reminder</button>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Expired</div><div class="kpi-value warning">${expired.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Expires ≤ 7 days</div><div class="kpi-value warning">${urgent.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Expires 8–14 days</div><div class="kpi-value">${soon.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Expires 15–30 days</div><div class="kpi-value">${later.length}</div></div>
  </div>

  ${expired.length > 0 ? `
  <div style="background:var(--bg-secondary); border:1px solid var(--status-red); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title" style="color:var(--status-red);">⚠ EXPIRED — REQUIRES ACTION</div>
    <table class="data-table">
      <thead><tr><th>Quote ID</th><th>Client</th><th>LOB</th><th>Expired</th><th>Days</th><th>Premium</th><th>Stage</th><th>Action</th></tr></thead>
      <tbody>${expired.map(renderRow).join('')}</tbody>
    </table>
  </div>` : ''}

  ${urgent.length > 0 ? `
  <div style="background:var(--bg-secondary); border:1px solid var(--status-amber); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title" style="color:var(--status-amber);">🔔 EXPIRES IN 7 DAYS</div>
    <table class="data-table">
      <thead><tr><th>Quote ID</th><th>Client</th><th>LOB</th><th>Expires</th><th>Days</th><th>Premium</th><th>Stage</th><th>Action</th></tr></thead>
      <tbody>${urgent.map(renderRow).join('')}</tbody>
    </table>
  </div>` : ''}

  ${[...soon, ...later].length > 0 ? `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">UPCOMING EXPIRATIONS</div>
    <table class="data-table">
      <thead><tr><th>Quote ID</th><th>Client</th><th>LOB</th><th>Expires</th><th>Days</th><th>Premium</th><th>Stage</th><th>Action</th></tr></thead>
      <tbody>${[...soon, ...later].map(renderRow).join('')}</tbody>
    </table>
  </div>` : ''}

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Auto-reminder emails go out at 7-day and 1-day expiry markers. Carriers may honor expired quotes within 5 days for active clients; older quotes require re-rating.
  </div>`;
}

// ─── Quote Analytics ───
function renderQuoteAnalytics() {
  const a = D.quoteAnalytics;
  const maxRatio = Math.max(...a.close_ratio_by_producer.map(p => p.ratio));
  const maxQv = Math.max(...a.premium_quoted_vs_written.map(m => m.quoted));

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'quotes'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Quotes</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Quote Analytics Dashboard</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 30 days</option><option>YTD</option><option>Last 12 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Quote analytics report exported')">Export</button>
    </div>
  </div>

  ${kpiCards(D.brokerQuotesKPIs, 6)}

  <!-- Pipeline value cards -->
  <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-md); margin-top: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Draft</div><div class="kpi-value">${a.pipeline_value.draft}</div></div>
    <div class="kpi-card"><div class="kpi-label">In Market</div><div class="kpi-value">${a.pipeline_value.market}</div></div>
    <div class="kpi-card"><div class="kpi-label">Quoted</div><div class="kpi-value">${a.pipeline_value.quoted}</div></div>
    <div class="kpi-card"><div class="kpi-label">Presented</div><div class="kpi-value">${a.pipeline_value.presented}</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Pipeline</div><div class="kpi-value" style="color:var(--mga-accent);">${a.pipeline_value.total}</div></div>
  </div>

  <!-- Close ratio + Hit ratio -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top:var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CLOSE RATIO BY PRODUCER</div>
      ${a.close_ratio_by_producer.map(p => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${p.name}</strong> <span style="color:var(--text-muted);">· ${p.bound}/${p.quoted} bound</span></span>
          <span><strong>${p.ratio}%</strong> <span style="color:${p.growth.startsWith('+')?'var(--status-green)':'var(--status-red)'}; margin-left:8px;">${p.growth}</span></span>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${(p.ratio/maxRatio)*100}%; background:${p.ratio > 40 ? 'var(--status-green)' : p.ratio > 30 ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div>
      </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">HIT RATIO BY CARRIER</div>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead><tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
          <th style="padding:var(--space-sm) 0; font-weight:normal;">CARRIER</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">SUBMITTED</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">WON</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">RATIO</th>
        </tr></thead>
        <tbody>
          ${a.hit_ratio_by_carrier.map(c => `
          <tr style="border-bottom:1px solid var(--border-subtle);">
            <td style="padding:var(--space-sm) 0;"><strong>${c.carrier}</strong></td>
            <td style="padding:var(--space-sm) 0;">${c.submitted}</td>
            <td style="padding:var(--space-sm) 0;">${c.won}</td>
            <td style="padding:var(--space-sm) 0;"><strong style="color:${c.ratio > 40 ? 'var(--status-green)' : c.ratio > 30 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${c.ratio}%</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Premium quoted vs written + Close ratio by LOB -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PREMIUM QUOTED vs WRITTEN ($M)</div>
      <div style="display:flex; align-items:flex-end; gap:var(--space-md); height:200px; padding: var(--space-md) 0;">
        ${a.premium_quoted_vs_written.map(m => `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; height:100%;">
          <div style="display:flex; gap:3px; align-items:flex-end; flex:1; width:100%;">
            <div style="flex:1; background:var(--mga-accent); border-radius:3px 3px 0 0; height:${(m.quoted/maxQv)*85}%;" title="Quoted: $${m.quoted}M"></div>
            <div style="flex:1; background:var(--status-green); border-radius:3px 3px 0 0; height:${(m.written/maxQv)*85}%;" title="Written: $${m.written}M"></div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${m.month}</div>
        </div>`).join('')}
      </div>
      <div style="display:flex; gap:var(--space-md); justify-content:center; font-size:0.75rem; color:var(--text-muted);">
        <span><span style="background:var(--mga-accent); width:12px; height:12px; display:inline-block; border-radius:2px; vertical-align:middle;"></span> Quoted</span>
        <span><span style="background:var(--status-green); width:12px; height:12px; display:inline-block; border-radius:2px; vertical-align:middle;"></span> Written (Bound)</span>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CLOSE RATIO BY LOB</div>
      ${a.close_ratio_by_lob.map(l => `
      <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
        <div style="width:200px;">${l.lob}</div>
        <div style="flex:1; background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${l.ratio*2}%; background:${l.ratio > 40 ? 'var(--status-green)' : l.ratio > 30 ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div>
        <div style="width:60px; text-align:right;"><strong>${l.ratio}%</strong></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Lost reasons + Q-to-bind distribution -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">TOP REASONS FOR LOST QUOTES</div>
      ${a.top_lost_reasons.map(r => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:4px;">
          <span><strong>${r.reason}</strong> <span style="color:var(--text-muted);">· ${r.count}</span></span>
          <strong>${r.pct}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${r.pct*3}%; background:var(--status-red);"></div></div>
      </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">QUOTE-TO-BIND TIME DISTRIBUTION</div>
      ${a.quote_to_bind_distribution.map(r => `
      <div style="display:flex; align-items:center; margin-bottom: var(--space-md); font-size:0.9rem;">
        <div style="width:120px;">${r.range}</div>
        <div style="flex:1; background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${r.pct*2.4}%; background:var(--mga-accent);"></div></div>
        <div style="width:90px; text-align:right;"><strong>${r.count}</strong> <span style="color:var(--text-muted);">(${r.pct}%)</span></div>
      </div>`).join('')}
      <div style="margin-top:var(--space-md); padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem;">
        <strong>Avg quote → bind:</strong> 6.2 days · <strong>Median:</strong> 5 days
      </div>
    </div>
  </div>

  <!-- Carrier appetite matrix -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div class="section-title">CARRIER APPETITE MATRIX</div>
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Workers Comp</th><th>General Liab.</th><th>Commercial Auto</th><th>Cyber</th><th>Professional</th><th>Property</th></tr></thead>
      <tbody>
        ${D.carrierAppetiteMatrix.map(c => {
          const cell = (v) => v === 'Strong' ? `<span style="color:var(--status-green);">●●●</span>` : v === 'Moderate' ? `<span style="color:var(--status-amber);">●●○</span>` : `<span style="color:var(--text-muted);">○○○</span>`;
          return `<tr>
            <td><strong>${c.carrier}</strong></td>
            <td>${cell(c.wc)}</td><td>${cell(c.gl)}</td><td>${cell(c.auto)}</td><td>${cell(c.cyber)}</td><td>${cell(c.prof)}</td><td>${cell(c.property)}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    <div style="margin-top:var(--space-sm); font-size:0.75rem; color:var(--text-muted);">
      <span style="color:var(--status-green);">●●●</span> Strong appetite · <span style="color:var(--status-amber);">●●○</span> Moderate · <span style="color:var(--text-muted);">○○○</span> Not in appetite
    </div>
  </div>`;
}

function renderBrokerBindingDetails() {
  const b = D.bindingDetail;
  const tab = state.bindingTab || 'overview';
  const tabs = [
    { id: 'overview',     label: 'Overview' },
    { id: 'subjectivities', label: `Subjectivities (${b.subjectivities.length})` },
    { id: 'documents',    label: `Documents (${b.documents.length})` },
    { id: 'esig',         label: 'e-Signature' },
    { id: 'payment',      label: 'Payment' },
    { id: 'timeline',     label: `Timeline (${b.timeline.length})` },
    { id: 'postbind',     label: 'Post-Bind Automation' }
  ];
  const content = {
    overview: renderBindingTabOverview,
    subjectivities: renderBindingTabSubjectivities,
    documents: renderBindingTabDocuments,
    esig: renderBindingTabEsig,
    payment: renderBindingTabPayment,
    timeline: renderBindingTabTimeline,
    postbind: renderBindingTabPostBind
  }[tab] || renderBindingTabOverview;

  // Stage progress
  const currentStageOrder = D.bindingStages.find(s => s.id === b.stage)?.order || 1;
  const totalStages = 6;

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'bindings'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Bindings</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-md);">
    <div>
      <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom:4px;">
        <h2 style="margin:0; font-size:1.4rem;">${b.id} — ${b.client}</h2>
        ${badge(b.status_color, b.status)}
        <span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${b.type}</span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">
        ${b.lob} · Carrier: <strong>${b.carrier}</strong> · Effective ${b.effective} · From quote <span style="font-family:monospace; color:var(--mga-accent);">${b.quote_id}</span>
      </div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.openTaskModal({client:'${b.client}', subject:'Binding follow-up: '})">+ Task</button>
      <button class="btn btn-secondary" onclick="window.showAlert('e-Signature reminder sent to client')">📧 Resend e-Sig</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'binder-preview'})">📄 Binder Preview</button>
      <button class="btn btn-primary" id="btn-issue-binder">🔒 Issue Binder</button>
    </div>
  </div>

  <!-- Stage progress strip -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-md); margin-bottom: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-sm);">
      <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">BINDING PROGRESS</div>
      <div style="font-size:0.85rem;"><strong>Stage ${currentStageOrder} of ${totalStages}</strong> · ${b.app_completion}% complete</div>
    </div>
    <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:6px;">
      ${D.bindingStages.slice(0, 6).map(s => {
        const isPast = s.order < currentStageOrder;
        const isCurrent = s.order === currentStageOrder;
        const color = isPast ? 'var(--status-green)' : isCurrent ? 'var(--mga-accent)' : 'var(--bg-card)';
        return `
        <div style="display:flex; flex-direction:column; align-items:center; gap:4px;">
          <div style="width:28px; height:28px; border-radius:50%; background:${color}; display:flex; align-items:center; justify-content:center; color:white; font-weight:600; font-size:0.85rem;">${isPast ? '✓' : s.order}</div>
          <div style="font-size:0.7rem; text-align:center; color:${isCurrent ? 'var(--text-primary)' : 'var(--text-muted)'}; font-weight:${isCurrent?'600':'normal'};">${s.label}</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <!-- TABS -->
  <div style="display:flex; border-bottom: 1px solid var(--border-subtle); margin-bottom: var(--space-xl); gap: var(--space-lg);">
    ${tabs.map(t => {
      const active = tab === t.id;
      const style = active ? 'border-bottom: 2px solid var(--mga-accent); font-weight:600; color:var(--text-primary);' : 'color:var(--text-muted);';
      return `<div style="padding:var(--space-sm) 0; cursor:pointer; ${style}" onclick="window.setState({bindingTab:'${t.id}'})">${t.label}</div>`;
    }).join('')}
  </div>

  ${content(b)}`;
}

function renderBindingTabOverview(b) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">COVERAGE BREAKDOWN</div>
        <table class="data-table">
          <thead><tr><th>Line</th><th>Limit</th><th>Deductible</th><th>Premium</th><th>Add'l Insureds</th></tr></thead>
          <tbody>
            ${b.coverages.map(c => `<tr><td><strong>${c.line}</strong></td><td>${c.limit}</td><td>${c.deductible}</td><td><strong>$${c.premium.toLocaleString()}</strong></td><td>${c.additional_insureds}</td></tr>`).join('')}
            <tr style="background:rgba(68,138,255,0.05); font-weight:700;"><td>TOTAL ANNUAL PREMIUM</td><td colspan="2"></td><td>$${b.premium.toLocaleString()}</td><td></td></tr>
          </tbody>
        </table>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-md);">
          <div class="section-title" style="margin:0;">ADDITIONAL INSUREDS / LOSS PAYEES</div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Add Additional Insured dialog')">+ Add</button>
        </div>
        ${b.additional_insureds.length === 0 ? '<div style="color:var(--text-muted); font-size:0.85rem;">None added.</div>' : b.additional_insureds.map(ai => `
        <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md); margin-bottom:var(--space-sm); display:flex; justify-content:space-between; align-items:start;">
          <div>
            <div style="font-weight:600;">${ai.name}</div>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">${ai.address}</div>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
            ${ai.certificate_holder ? badge('green', 'Cert Holder') : ''}
            ${ai.waiver_of_subro ? badge('blue', 'Waiver of Subro') : ''}
          </div>
        </div>`).join('')}
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">PRE-BINDING VALIDATION</div>
        <div style="display:flex; flex-direction:column; gap:8px; font-size:0.9rem;">
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-green);">✓</span> Risk data complete</span><strong style="color:var(--status-green);">100%</strong></div>
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-green);">✓</span> Underwriting questions answered</span><strong style="color:var(--status-green);">All</strong></div>
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-green);">✓</span> Carrier appetite verified</span><strong style="color:var(--status-green);">95</strong></div>
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-green);">✓</span> State filings compliant (CA, TX)</span><strong style="color:var(--status-green);">Verified</strong></div>
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-amber);">⚠</span> 1 outstanding subjectivity</span><strong style="color:var(--status-amber);">TRIA Form</strong></div>
        </div>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CARRIER & UW</div>
        <div style="font-weight:600; margin-bottom:4px;">${b.carrier}</div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px;">Underwriter: ${b.carrier_underwriter}</div>
        <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="window.showAlert('Direct message sent to carrier portal')">📨 Message UW</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SIGNATORY</div>
        <div style="font-size:0.9rem;">${b.client_signatory}</div>
        <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.setState({bindingTab:'esig'})">View e-Sig Status →</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">EFFECTIVE / EXPIRATION</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Effective</span><strong>${b.effective}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Expiration</span><strong>${b.expiration}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Term</span><strong>12 months</strong></div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">FROM QUOTE</div>
        <div style="font-family:monospace; color:var(--mga-accent); font-size:0.9rem; margin-bottom:4px;">${b.quote_id}</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;" onclick="window.setState({screen:'quote-details'})">View Quote →</button>
      </div>
    </div>
  </div>`;
}

function renderBindingTabSubjectivities(b) {
  const done = b.subjectivities.filter(s => s.status === 'Received').length;
  const total = b.subjectivities.length;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Binding Subjectivities — ${done}/${total} Complete</h3>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Reminder email sent to client for outstanding items')">📧 Send Reminder</button>
      <button class="btn btn-primary" onclick="window.showAlert('Subjectivity upload portal launched')">+ Upload Document</button>
    </div>
  </div>

  <div class="data-table-wrapper" style="margin-bottom: var(--space-lg);">
    <table class="data-table">
      <thead><tr><th>Requirement</th><th>Priority</th><th>Status</th><th>Due By</th><th>Received</th><th>Notes</th><th>Action</th></tr></thead>
      <tbody>
        ${b.subjectivities.map(s => `
        <tr style="${s.status === 'Outstanding' ? 'background:rgba(255,82,82,0.04);' : ''}">
          <td><strong>${s.name}</strong></td>
          <td>${badge(s.priority === 'High' ? 'red' : s.priority === 'Medium' ? 'amber' : 'gray', s.priority)}</td>
          <td>${badge(s.status === 'Received' ? 'green' : s.status === 'Under Review' ? 'amber' : 'red', s.status)}</td>
          <td>${s.due}</td>
          <td style="font-size:0.85rem;">${s.received_date || '<span style="color:var(--text-muted);">Pending</span>'}</td>
          <td style="font-size:0.85rem; color:var(--text-muted);">${s.notes}</td>
          <td>${s.status === 'Outstanding' ? `<button class="btn btn-primary btn-sm" onclick="window.showAlert('Upload dialog for: ${s.name}')">Upload</button>` : `<button class="btn btn-ghost btn-sm" onclick="window.showAlert('View document: ${s.name}')">View</button>`}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  ${b.conditional_terms.length === 0 ? '' : `
  <div style="background:rgba(255,167,38,0.05); border:1px solid var(--status-amber); border-radius:var(--radius-md); padding: var(--space-md);">
    <div style="font-weight:700; color:var(--status-amber);">⚠ Conditional Binding Terms</div>
    ${b.conditional_terms.map(t => `<div style="font-size:0.9rem; margin-top:4px;">• ${t}</div>`).join('')}
  </div>`}

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Subjectivities must be satisfied before carrier issues final policy. Outstanding High-priority items block full policy issuance. Carrier may issue conditional binder while items are outstanding.
  </div>`;
}

function renderBindingTabDocuments(b) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); overflow:hidden;">
    <div style="padding:var(--space-md); border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02);">
      <div style="font-weight:600; font-size:0.85rem;">BINDING DOCUMENTS — ${b.documents.length} FILES</div>
      <div style="display:flex; gap:var(--space-sm);">
        <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Documents bundled and sent to carrier portal')">→ Sync to Carrier</button>
        <button class="btn btn-primary btn-sm" onclick="window.showAlert('Bulk upload modal launched')">+ Upload</button>
      </div>
    </div>
    <table class="data-table">
      <thead><tr><th>File</th><th>Type</th><th>Uploaded</th><th>By</th><th>Action</th></tr></thead>
      <tbody>
        ${b.documents.map(d => `
        <tr>
          <td><span style="color:var(--mga-accent); cursor:pointer;">📄 ${d.name}</span></td>
          <td><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${d.type}</span></td>
          <td style="font-size:0.85rem;">${d.uploaded}</td>
          <td>${d.by}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Downloading ${d.name}')">↓</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Document preview opened')">👁</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderBindingTabEsig(b) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">e-SIGNATURE STATUS</div>
      <div style="display:flex; gap: var(--space-lg); margin-bottom: var(--space-lg); align-items:center;">
        <div style="width:120px; height:120px; border-radius:50%; background:conic-gradient(var(--status-green) 0deg, var(--status-green) 240deg, var(--bg-card) 240deg); display:flex; align-items:center; justify-content:center;">
          <div style="width:92px; height:92px; border-radius:50%; background:var(--bg-secondary); display:flex; align-items:center; justify-content:center; flex-direction:column;">
            <div style="font-size:1.6rem;">📨</div>
            <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">${b.esig_status}</div>
          </div>
        </div>
        <div style="flex:1;">
          <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-green);">✓</span> Envelope sent</span><strong>${b.esig_sent}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-green);">✓</span> Client viewed</span><strong>${b.esig_viewed}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-amber);">⏳</span> Client signed</span><strong style="color:var(--status-amber);">Pending</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Provider</span><strong>${b.esig_provider}</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Envelope ID</span><strong style="font-family:monospace; color:var(--mga-accent);">ELG-88291</strong></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Expires</span><strong>2026-04-24 (6 days)</strong></div>
          </div>
        </div>
      </div>
      <div style="display:flex; gap: var(--space-sm);">
        <button class="btn btn-primary" style="flex:1;" onclick="window.showAlert('e-Sig reminder sent — SMS + email')">📧 Send Reminder</button>
        <button class="btn btn-secondary" style="flex:1;" onclick="window.showAlert('Voiding envelope and creating new one...')">🔄 Resend / Void</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">DOCUMENTS IN ENVELOPE</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div>📄 ACORD 125 Application</div>
          <div>📄 WC Supplement</div>
          <div>📄 No Loss Letter</div>
          <div>📄 TRIA Election Form</div>
          <div>📄 Binding Authorization</div>
        </div>
      </div>
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">ALTERNATIVE SIGNING</div>
        <button class="btn btn-secondary btn-sm" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('In-person signing session created')">👥 In-Person Signing</button>
        <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="window.showAlert('Wet-ink upload portal opened')">🖊 Upload Wet-Ink Sig</button>
      </div>
    </div>
  </div>`;
}

function renderBindingTabPayment(b) {
  const p = b.payment_info;
  return `
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">BILLING DETAILS</div>
      <div style="font-size:0.9rem; display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Billing Type</span><strong>${b.billing}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Annual Premium</span><strong style="font-size:1.1rem;">$${b.premium.toLocaleString()}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Down Payment Required</span><strong>$${p.down_payment.toLocaleString()} (25%)</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Installments</span><strong>${p.installments} monthly</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">First Payment Due</span><strong>${p.first_payment}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Invoice #</span><strong style="font-family:monospace; color:var(--mga-accent);">${p.invoice_number}</strong></div>
      </div>
      <div style="margin-top:var(--space-md); display:flex; gap:var(--space-sm);">
        <button class="btn btn-secondary" style="flex:1;" onclick="window.showAlert('Invoice PDF generated and sent to client')">📄 Send Invoice</button>
        <button class="btn btn-ghost" onclick="window.showAlert('Invoice preview')">View</button>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PAYMENT METHOD</div>
      <div style="font-size:0.9rem; display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Method</span><strong>${p.method}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Account</span><strong style="font-family:monospace;">${p.account_last4}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Status</span>${badge(b.payment_status === 'Applied' ? 'green' : b.payment_status === 'Received' ? 'blue' : 'amber', b.payment_status)}</div>
      </div>
      <div style="margin-top:var(--space-md); padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:4px;">PAYMENT LIFECYCLE</div>
        <div style="display:flex; justify-content:space-between; margin-top:var(--space-sm);">
          <div style="text-align:center;"><div style="width:24px; height:24px; border-radius:50%; background:var(--status-amber); margin:0 auto; display:flex; align-items:center; justify-content:center; color:white; font-size:0.7rem;">●</div><div style="font-size:0.7rem; margin-top:4px; color:var(--status-amber); font-weight:600;">Pending</div></div>
          <div style="flex:1; height:2px; background:var(--bg-card-hover); margin-top:11px;"></div>
          <div style="text-align:center;"><div style="width:24px; height:24px; border-radius:50%; background:var(--bg-card-hover); margin:0 auto; display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-size:0.7rem;">2</div><div style="font-size:0.7rem; margin-top:4px; color:var(--text-muted);">Received</div></div>
          <div style="flex:1; height:2px; background:var(--bg-card-hover); margin-top:11px;"></div>
          <div style="text-align:center;"><div style="width:24px; height:24px; border-radius:50%; background:var(--bg-card-hover); margin:0 auto; display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-size:0.7rem;">3</div><div style="font-size:0.7rem; margin-top:4px; color:var(--text-muted);">Applied</div></div>
        </div>
      </div>
      <button class="btn btn-primary" style="width:100%; margin-top:var(--space-md);" onclick="window.showAlert('Payment recorded — $44,625 marked Received')">✓ Record Payment Received</button>
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Agency Bill: Agency collects payment from insured and remits to carrier. Direct Bill: Carrier handles billing directly. Binder fee may apply for Direct Bill in some states.
  </div>`;
}

function renderBindingTabTimeline(b) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">BINDING JOURNEY — IMMUTABLE AUDIT TRAIL</div>
    <div style="display:flex; flex-direction:column; gap: var(--space-lg); position:relative; margin-top: var(--space-lg);">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${b.timeline.map(ev => `
      <div style="display:flex; gap: var(--space-lg); position:relative;">
        <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid var(--mga-accent); z-index:1; margin-top:4px;"></div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:600; font-size:0.9rem;">${ev.action}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${ev.when}</div>
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">${ev.details}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">by ${ev.actor}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function renderBindingTabPostBind(b) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Post-Binding Automation Tasks</h3>
    <div style="font-size:0.85rem; color:var(--text-muted);">${b.post_bind_tasks.filter(t => t.auto).length} auto-created · ${b.post_bind_tasks.filter(t => !t.auto).length} manual</div>
  </div>

  <div class="data-table-wrapper" style="margin-bottom: var(--space-lg);">
    <table class="data-table">
      <thead><tr><th>Task</th><th>Source</th><th>Assigned</th><th>Due</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${b.post_bind_tasks.map(t => `
        <tr>
          <td><strong>${t.task}</strong></td>
          <td>${t.auto ? badge('blue', 'Auto') : badge('gray', 'Manual')}</td>
          <td>${t.assigned}</td>
          <td>${t.due}</td>
          <td>${badge('amber', 'Scheduled')}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="window.showAlert('Task created in Activity module')">View</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">DOWNSTREAM MODULES TRIGGERED ON BIND</div>
    <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:var(--space-md); font-size:0.9rem;">
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);"><strong>💰 Commission Tracking</strong><div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Expected commission line auto-created in ledger ($21,420 @ 12%)</div></div>
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);"><strong>📋 Policy Record</strong><div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Sync to Applied Epic AMS via Policy Creation API</div></div>
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);"><strong>📅 Renewal Calendar</strong><div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Renewal opportunity record scheduled for 120-day alert</div></div>
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);"><strong>👥 Client Portal</strong><div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Welcome packet + portal invitation sent</div></div>
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);"><strong>📊 Accounting Notification</strong><div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">QuickBooks/Xero sync — new policy record + AR entry</div></div>
      <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);"><strong>📜 Document Repository</strong><div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">All binding documents archived to client folder (7-year retention)</div></div>
    </div>
  </div>

  <div style="background:rgba(255,82,82,0.04); border:1px solid var(--status-red); border-radius:var(--radius-md); padding:var(--space-md); display:flex; justify-content:space-between; align-items:center;">
    <div>
      <strong style="color:var(--status-red);">⚠ Unbind Option</strong>
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">Use only if client withdraws or carrier rescinds within first 24 hours of binding.</div>
    </div>
    <button class="btn btn-danger btn-sm" onclick="window.showAlert('Unbind workflow — requires manager approval')">Unbind Policy</button>
  </div>`;
}

// ─── Binding Wizard (6 steps) ───
function bindingStepper() {
  const steps = ['Application', 'Carrier Submit', 'UW Approval', 'Client e-Sig', 'Binder Issued', 'Policy Issued'];
  const step = state.bindingStep || 1;
  return `
  <div class="stepper">
    ${steps.map((s, i) => {
      const num = i + 1;
      const cls = num < step ? 'completed' : num === step ? 'active' : '';
      const lineCls = num < step ? 'completed' : '';
      return `
        <div class="stepper-step ${cls}" data-bw-step="${num}">
          <div class="stepper-dot">${num < step ? '✓' : num}</div>
          <span>${num}. ${s}</span>
        </div>
        ${num < steps.length ? `<div class="stepper-line ${lineCls}"></div>` : ''}`;
    }).join('')}
  </div>`;
}

function renderBindingWizard() {
  const step = state.bindingStep || 1;
  const stepRenderers = [null, renderBwStep1, renderBwStep2, renderBwStep3, renderBwStep4, renderBwStep5, renderBwStep6];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" id="btn-bw-back">← Back</button>
    <span style="margin-left: var(--space-sm); font-weight: 600;">Binding Wizard — Magnolia Construction (Q-2026-0182)</span>
  </div>
  <div class="data-table-wrapper">
    ${bindingStepper()}
    <div style="padding: var(--space-xl);">
      ${stepRenderers[step]()}
    </div>
    <div class="form-footer">
      ${step > 1 ? '<button class="btn btn-secondary" id="btn-bw-prev">← Back</button>' : '<button class="btn btn-secondary" onclick="window.showAlert(\'Wizard saved as draft\')">Save Draft</button>'}
      ${step < 6 ? `<button class="btn btn-primary" id="btn-bw-next">${['', 'Submit to Carrier →', 'Send for UW Approval →', 'Request Client e-Sig →', 'Issue Binder →', 'Issue Full Policy →'][step]}</button>` : '<button class="btn btn-primary" onclick="window.setState({screen:\'binding-details\', currentBindingId:\'B-2026-0091\', bindingStep:1})">Go to Binding 360° →</button>'}
    </div>
  </div>`;
}

function renderBwStep1() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 1: Application Finalization</h3>
  <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding:var(--space-md); margin-bottom:var(--space-lg); font-size:0.9rem;">
    <strong style="color:var(--status-green);">✓ Auto-populated from quote Q-2026-0182 v1.3</strong> — review and edit final details below.
  </div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md);">
    <div><label class="form-label">Insured Name</label><input class="form-input" value="Magnolia Construction LLC"/></div>
    <div><label class="form-label">FEIN / Tax ID</label><input class="form-input" value="88-XXXX492"/></div>
    <div><label class="form-label">Effective Date</label><input class="form-input" type="date" value="2026-06-01"/></div>
    <div><label class="form-label">Effective Time</label><input class="form-input" type="time" value="00:01"/></div>
    <div><label class="form-label">Selected Carrier</label><input class="form-input" value="SEMC / Liberty Mutual" readonly/></div>
    <div><label class="form-label">Annual Premium</label><input class="form-input" value="$178,500" readonly/></div>
    <div><label class="form-label">Billing Type</label><select class="form-input"><option>Agency Bill</option><option>Direct Bill</option></select></div>
    <div><label class="form-label">Signatory</label><input class="form-input" value="Robert Nguyen — CEO"/></div>
  </div>
  <div style="margin-top:var(--space-md);"><label class="form-label">Additional Insureds / Loss Payees</label>
    <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); font-size:0.85rem;">2 added: City of Sacramento (Cert + Waiver), Pacific Gas & Electric Co.</div>
  </div>`;
}

function renderBwStep2() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 2: Submit Application to Carrier</h3>
  <div style="background:var(--bg-secondary); padding:var(--space-lg); border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:var(--space-lg);">
    <div style="font-weight:600; margin-bottom:var(--space-sm);">📡 Submission Channel</div>
    <div style="display:flex; gap:var(--space-md); margin-bottom:var(--space-md);">
      <label style="flex:1; padding:var(--space-md); background:rgba(68,138,255,0.1); border:1px solid var(--mga-accent); border-radius:var(--radius-md); cursor:pointer;"><input type="radio" name="ch" checked/> Real-time API (Liberty Mutual) — Recommended</label>
      <label style="flex:1; padding:var(--space-md); background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); cursor:pointer;"><input type="radio" name="ch"/> IVANS Daily Feed</label>
      <label style="flex:1; padding:var(--space-md); background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); cursor:pointer;"><input type="radio" name="ch"/> Manual (email + tracking)</label>
    </div>
    <div style="font-size:0.85rem; color:var(--text-muted);">API submission returns an immediate carrier reference. Estimated UW response: 2–4 hours.</div>
  </div>
  <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
    <strong>Documents to be submitted (6):</strong>
    <ul style="margin:8px 0 0 20px; font-size:0.85rem;">
      <li>ACORD 125 Application</li>
      <li>WC Supplement</li>
      <li>5-Year Loss Runs</li>
      <li>OSHA 300 Logs</li>
      <li>No Loss Letter</li>
      <li>Quote v1.3 Reference</li>
    </ul>
  </div>`;
}

function renderBwStep3() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 3: Underwriting Approval</h3>
  <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding:var(--space-lg); margin-bottom:var(--space-lg);">
    <div style="display:flex; align-items:center; gap:var(--space-md); margin-bottom:var(--space-sm);">
      <div style="font-size:2rem;">✅</div>
      <div>
        <div style="font-weight:700; color:var(--status-green); font-size:1.1rem;">Approved by M. Henderson</div>
        <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">Liberty Mutual · Approved 2026-04-17 11:15 · Standard terms, no conditions</div>
      </div>
    </div>
  </div>
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:var(--space-md); margin-bottom:var(--space-md);">
    <div style="font-weight:600; margin-bottom:var(--space-sm);">UW Notes</div>
    <div style="font-size:0.85rem; color:var(--text-secondary);">Account in good standing. EMR 0.85 honored. Strong loss history. Recommend standard binding with 12-installment Agency Bill.</div>
  </div>
  <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); font-size:0.85rem;">
    💡 If conditional, you'll see a list of conditions to satisfy before final policy. Use the negotiate / accept / decline actions.
  </div>`;
}

function renderBwStep4() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 4: Client Acceptance & e-Signature</h3>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:var(--space-lg);">
      <div style="font-weight:600; margin-bottom:var(--space-md);">📨 e-Signature Setup</div>
      <div><label class="form-label">Signing Service</label><select class="form-input"><option>DocuSign</option><option>Built-in</option><option>Adobe Sign</option></select></div>
      <div style="margin-top:var(--space-md);"><label class="form-label">Signatory</label><input class="form-input" value="Robert Nguyen (robert@magnoliaconstruction.com)"/></div>
      <div style="margin-top:var(--space-md);"><label class="form-label">Reminder Schedule</label><select class="form-input"><option>Daily for 3 days</option><option>Once at 24h</option><option>Custom</option></select></div>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:var(--space-lg);">
      <div style="font-weight:600; margin-bottom:var(--space-md);">💳 Down Payment</div>
      <div><label class="form-label">Method</label><select class="form-input"><option>ACH Transfer</option><option>Credit Card</option><option>Check</option></select></div>
      <div style="margin-top:var(--space-md);"><label class="form-label">Down Payment Amount</label><input class="form-input" value="$44,625"/></div>
      <div style="margin-top:var(--space-md); padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem;">
        Premium breakdown: 25% down ($44,625) + 12 monthly installments of $11,156
      </div>
    </div>
  </div>`;
}

function renderBwStep5() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 5: Issue Binder (Temporary Coverage)</h3>
  <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding:var(--space-lg); margin-bottom:var(--space-lg);">
    <div style="display:flex; align-items:center; gap:var(--space-md);">
      <div style="font-size:2.5rem;">🔒</div>
      <div>
        <div style="font-weight:700; color:var(--status-green); font-size:1.1rem;">Binder ready to issue</div>
        <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">Coverage will activate at 12:01 AM PT on 2026-06-01</div>
      </div>
    </div>
  </div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md);">
    <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Binder Number</div>
      <div style="font-family:monospace; font-weight:700; color:var(--mga-accent); font-size:1.1rem;">BND-2026-91-LIB-MAG</div>
    </div>
    <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Valid Through</div>
      <div style="font-weight:700;">2026-07-01 (60 days)</div>
    </div>
  </div>
  <div style="margin-top:var(--space-md); padding:var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Binder provides temporary proof of coverage while carrier issues full policy. ID cards / COI auto-generated and delivered to client portal. Coverage is in force the moment binder issues.
  </div>`;
}

function renderBwStep6() {
  return `
  <div style="text-align:center; padding: var(--space-xl);">
    <div style="font-size:4rem; margin-bottom: var(--space-md);">🎉</div>
    <h2 style="margin-bottom: var(--space-sm);">Binding Complete</h2>
    <p style="color:var(--text-secondary); margin-bottom: var(--space-lg);">Full policy issued by Liberty Mutual. Synced to Applied Epic. All post-bind automation triggered.</p>
    <div style="display:inline-flex; gap: var(--space-xl); background:var(--bg-secondary); border:1px solid var(--border-subtle); padding: var(--space-lg); border-radius: var(--radius-md);">
      <div><div style="color:var(--text-muted); font-size:0.75rem;">POLICY #</div><div style="font-family:monospace; font-weight:700; color:var(--mga-accent); font-size:1.1rem;">SEMC-WC-2026-58821</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">EPIC ID</div><div style="font-family:monospace; font-weight:700; color:var(--mga-accent); font-size:1.1rem;">POL-29381-44</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">EFFECTIVE</div><div style="font-weight:700;">2026-06-01</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">EXPIRES</div><div style="font-weight:700;">2027-06-01</div></div>
    </div>
    <div style="margin-top:var(--space-lg); display:flex; gap:var(--space-md); justify-content:center; font-size:0.85rem;">
      <div>✓ 6 post-bind tasks created</div>
      <div>✓ Welcome packet sent</div>
      <div>✓ Commission line generated</div>
      <div>✓ Renewal scheduled</div>
    </div>
  </div>`;
}

// ─── e-Signature Dashboard ───
function renderEsignDashboard() {
  const env = D.esigEnvelopes;
  const pending = env.filter(e => e.status !== 'Signed');
  const signed = env.filter(e => e.status === 'Signed');
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'bindings'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Bindings</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">e-Signature Dashboard</h2>
    <button class="btn btn-secondary" onclick="window.showAlert('Bulk reminders sent — 4 envelopes')">📧 Bulk Reminder</button>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Pending</div><div class="kpi-value warning">${pending.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Signed (last 30d)</div><div class="kpi-value">${signed.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg Sign Time</div><div class="kpi-value">4.2h</div></div>
    <div class="kpi-card"><div class="kpi-label">Expiring &lt; 48h</div><div class="kpi-value warning">2</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">PENDING SIGNATURES</div>
    <table class="data-table">
      <thead><tr><th>Envelope ID</th><th>Binding</th><th>Client</th><th>Signatory</th><th>Sent</th><th>Viewed</th><th>Status</th><th>Expires</th><th>Action</th></tr></thead>
      <tbody>
        ${pending.map(e => `
        <tr>
          <td style="font-family:monospace;">${e.id}</td>
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'binding-details', currentBindingId:'${e.binding_id}'})">${e.binding_id}</strong></td>
          <td>${e.client}</td>
          <td>${e.signatory}</td>
          <td style="font-size:0.85rem;">${e.sent}</td>
          <td style="font-size:0.85rem;">${e.viewed || '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${badge(e.status === 'Viewed' ? 'amber' : 'blue', e.status)}</td>
          <td>${e.expires}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Reminder sent to ${e.signatory}')">Remind</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Voiding envelope ${e.id}')">Void</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">RECENTLY SIGNED</div>
    <table class="data-table">
      <thead><tr><th>Envelope ID</th><th>Binding</th><th>Client</th><th>Signed</th><th>Provider</th></tr></thead>
      <tbody>
        ${signed.map(e => `
        <tr>
          <td style="font-family:monospace;">${e.id}</td>
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'binding-details'})">${e.binding_id}</strong></td>
          <td>${e.client}</td>
          <td style="font-size:0.85rem;">${e.signed}</td>
          <td>${e.provider}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ─── Binder Preview ───
function renderBinderPreview() {
  const b = D.bindingDetail;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'binding-details'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Binding</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Binder Document Preview</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Binder PDF downloaded')">⬇ Download PDF</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Binder sent to client portal + email')">📧 Send to Client</button>
      <button class="btn btn-primary" onclick="window.showAlert('Binder issued — coverage active 2026-06-01 12:01 AM PT')">🔒 Issue Binder</button>
    </div>
  </div>

  <div style="background:white; color:#222; padding: 48px; border-radius:var(--radius-md); min-height:600px; font-family: Arial, sans-serif; max-width:900px; margin:0 auto;">
    <div style="border-bottom: 4px solid #4a4af0; padding-bottom:16px; margin-bottom:24px; display:flex; justify-content:space-between; align-items:flex-start;">
      <div>
        <div style="font-size:0.75rem; color:#888;">CERTIFICATE OF INSURANCE / BINDER</div>
        <div style="font-size:1.6rem; font-weight:700; margin-top:4px;">Liberty Mutual Insurance</div>
        <div style="color:#666; margin-top:2px;">via SEMC Insurance Group</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:0.75rem; color:#888;">BINDER #</div>
        <div style="font-family:monospace; font-weight:700; color:#4a4af0; font-size:1rem;">${b.binder_preview.binder_number}</div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:24px;">
      <div>
        <div style="font-weight:700; margin-bottom:8px; font-size:0.85rem;">NAMED INSURED</div>
        <div style="font-size:1.05rem;"><strong>${b.client}</strong></div>
        <div style="color:#666; font-size:0.85rem; margin-top:4px;">1201 Industrial Blvd<br/>Sacramento, CA 95814<br/>FEIN: 88-XXXX492</div>
      </div>
      <div>
        <div style="font-weight:700; margin-bottom:8px; font-size:0.85rem;">PRODUCER</div>
        <div style="font-size:1.05rem;"><strong>Bridgepoint Insurance Brokers</strong></div>
        <div style="color:#666; font-size:0.85rem; margin-top:4px;">Sarah Chen<br/>sarah@bridgepoint.com<br/>(916) 555-0182</div>
      </div>
    </div>

    <div style="margin-bottom:24px;">
      <div style="font-weight:700; margin-bottom:8px; font-size:0.85rem;">COVERAGE PERIOD</div>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr><td style="padding:6px; border-bottom:1px solid #eee;">Effective Date / Time</td><td style="padding:6px; border-bottom:1px solid #eee; text-align:right;"><strong>${b.effective}</strong></td></tr>
        <tr><td style="padding:6px; border-bottom:1px solid #eee;">Expiration Date / Time</td><td style="padding:6px; border-bottom:1px solid #eee; text-align:right;"><strong>${b.expiration}</strong></td></tr>
        <tr><td style="padding:6px;">Binder Valid Through</td><td style="padding:6px; text-align:right;"><strong>${b.binder_preview.valid_through}</strong></td></tr>
      </table>
    </div>

    <div style="margin-bottom:24px;">
      <div style="font-weight:700; margin-bottom:8px; font-size:0.85rem;">COVERAGES BOUND</div>
      <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
        <thead><tr style="background:#f5f5fa;"><th style="padding:8px; text-align:left;">LINE</th><th style="padding:8px; text-align:left;">LIMITS</th><th style="padding:8px; text-align:left;">DEDUCTIBLE</th><th style="padding:8px; text-align:right;">PREMIUM</th></tr></thead>
        <tbody>
          ${b.coverages.map(c => `<tr><td style="padding:8px; border-bottom:1px solid #eee;">${c.line}</td><td style="padding:8px; border-bottom:1px solid #eee;">${c.limit}</td><td style="padding:8px; border-bottom:1px solid #eee;">${c.deductible}</td><td style="padding:8px; border-bottom:1px solid #eee; text-align:right;"><strong>$${c.premium.toLocaleString()}</strong></td></tr>`).join('')}
          <tr style="background:#f5fff8; font-weight:700;"><td colspan="3" style="padding:10px;">TOTAL ANNUAL PREMIUM</td><td style="padding:10px; text-align:right;">$${b.premium.toLocaleString()}</td></tr>
        </tbody>
      </table>
    </div>

    <div style="margin-bottom:24px;">
      <div style="font-weight:700; margin-bottom:8px; font-size:0.85rem;">ADDITIONAL INSUREDS</div>
      ${b.additional_insureds.map(ai => `<div style="font-size:0.85rem; padding:6px 0; border-bottom:1px solid #eee;"><strong>${ai.name}</strong> — ${ai.address}${ai.certificate_holder ? ' · Certificate Holder' : ''}${ai.waiver_of_subro ? ' · Waiver of Subrogation' : ''}</div>`).join('')}
    </div>

    <div style="padding:12px; background:#fef9e7; border-left:4px solid #d4ac0d; font-size:0.8rem; color:#7d6608; margin-bottom:16px;">
      <strong>Conditional binder:</strong> Coverage is in force as described above subject to (1) receipt of signed TRIA election form by 2026-05-25, and (2) payment of down payment $${b.payment_info.down_payment.toLocaleString()} by 2026-05-25. Failure to satisfy either may result in cancellation effective ab initio.
    </div>

    <div style="border-top:1px solid #ddd; padding-top:12px; font-size:0.7rem; color:#888;">This binder evidences temporary coverage only. The full policy will be issued by Liberty Mutual within 30 days. Authorized signature on file: M. Henderson, Underwriter.</div>
  </div>`;
}

// ─── Binding Analytics ───
function renderBindingAnalytics() {
  const a = D.bindingAnalytics;
  const tierColor = (r) => r >= 80 ? 'var(--status-green)' : r >= 70 ? 'var(--mga-accent)' : 'var(--status-amber)';
  const carrierMax = Math.max(...a.carrier_approval_rate.map(c => c.rate));
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'bindings'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Bindings</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Binding Analytics</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 30 days</option><option>YTD</option><option>Last 12 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — Binding report')">Export</button>
    </div>
  </div>

  <!-- Top stats -->
  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Bind Ratio</div><div class="kpi-value" style="color:${tierColor(a.bind_ratio.ratio)};">${a.bind_ratio.ratio}%</div></div>
    <div class="kpi-card"><div class="kpi-label">Quoted</div><div class="kpi-value">${a.bind_ratio.quoted}</div></div>
    <div class="kpi-card"><div class="kpi-label">Bound</div><div class="kpi-value">${a.bind_ratio.bound}</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg Quote→Bind</div><div class="kpi-value">${a.avg_time_to_bind.current}d</div></div>
  </div>

  <!-- Time distribution + Carrier approval -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">QUOTE-TO-BIND TIME DISTRIBUTION</div>
      ${a.bind_distribution.map(r => `
      <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
        <div style="width:120px;">${r.range}</div>
        <div style="flex:1; background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${r.pct*3}%; background:${r.range.includes('Same day') || r.range.includes('< 24') ? 'var(--status-green)' : r.range.includes('1–3') ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div>
        <div style="width:90px; text-align:right;"><strong>${r.count}</strong> <span style="color:var(--text-muted);">(${r.pct}%)</span></div>
      </div>`).join('')}
      <div style="margin-top:var(--space-md); padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem;">
        <strong>Goal:</strong> 80%+ within 48h. Currently ${a.bind_distribution[0].pct + a.bind_distribution[1].pct + a.bind_distribution[2].pct}%.
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CARRIER APPROVAL RATE</div>
      ${a.carrier_approval_rate.map(c => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${c.carrier}</strong> <span style="color:var(--text-muted);">· ${c.approved}/${c.submitted}${c.conditional ? ` (${c.conditional} conditional)` : ''}</span></span>
          <strong style="color:${tierColor(c.rate)};">${c.rate}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${(c.rate/carrierMax)*100}%; background:${tierColor(c.rate)};"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Producer + LOB -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">BIND RATIO BY PRODUCER</div>
      <table class="data-table">
        <thead><tr><th>Producer</th><th>Bound</th><th>Bind Ratio</th><th>Avg Time</th></tr></thead>
        <tbody>
          ${a.by_producer.map(p => `
          <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.bound}</td>
            <td><strong style="color:${tierColor(p.ratio)};">${p.ratio}%</strong></td>
            <td>${p.avg_time}d</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">BIND RATIO BY LOB</div>
      ${a.by_lob.map(l => `
      <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
        <div style="width:200px;">${l.lob}</div>
        <div style="flex:1; background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${l.ratio}%; background:${tierColor(l.ratio)};"></div></div>
        <div style="width:90px; text-align:right;"><strong>${l.ratio}%</strong> <span style="color:var(--text-muted);">(${l.count})</span></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- State + Non-bind reasons -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">BIND RATIO BY STATE</div>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead><tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
          <th style="padding:var(--space-sm) 0; font-weight:normal;">STATE</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">BOUND</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">RATIO</th>
        </tr></thead>
        <tbody>
          ${a.by_state.map(s => `
          <tr style="border-bottom:1px solid var(--border-subtle);">
            <td style="padding:var(--space-sm) 0;"><strong>${s.state}</strong></td>
            <td style="padding:var(--space-sm) 0;">${s.bound}</td>
            <td style="padding:var(--space-sm) 0;"><strong style="color:${tierColor(s.ratio)};">${s.ratio}%</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">REASONS FOR NON-BINDING</div>
      ${a.non_bind_reasons.map(r => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${r.reason}</strong> <span style="color:var(--text-muted);">· ${r.count}</span></span>
          <strong>${r.pct}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${r.pct*2.5}%; background:var(--status-red);"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Bind ratio target: 80%+. Same-day binding for standard risks. Mobile binding supported. Carrier approval rate &lt; 75% triggers underwriter relationship review.
  </div>`;
}

function renderBrokerRenewalDetails() {
  const r = D.renewalDetail;
  const tab = state.renewalTab || 'overview';
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'remarketing', label: `Remarketing (${r.carrier_quotes.length})` },
    { id: 'comparison', label: 'Quote Comparison' },
    { id: 'proposal', label: 'Client Proposal' },
    { id: 'timeline', label: `Timeline (${r.timeline.length})` },
    { id: 'winloss', label: 'Decision / Win-Loss' }
  ];
  const content = {
    overview: renderRenewalTabOverview,
    remarketing: renderRenewalTabRemarketing,
    comparison: renderRenewalTabComparison,
    proposal: renderRenewalTabProposal,
    timeline: renderRenewalTabTimeline,
    winloss: renderRenewalTabWinLoss
  }[tab] || renderRenewalTabOverview;

  const scoreColor = r.retention_score >= 85 ? 'var(--status-green)' : r.retention_score >= 65 ? 'var(--status-amber)' : 'var(--status-red)';

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'renewals'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Renewals</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-md);">
    <div>
      <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom:4px;">
        <h2 style="margin:0; font-size:1.4rem;">${r.id} — ${r.client}</h2>
        <span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${r.client_tier}</span>
        ${badge(r.status_color, r.status)}
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">
        ${r.lob} · Incumbent: <strong>${r.incumbent_carrier}</strong> · Expires <strong>${r.expiration}</strong> (${r.days_remaining} days) · Producer: ${r.producer}
      </div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.openTaskModal({client:'${r.client}', subject:'Renewal follow-up: '})">+ Task</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'renewal-comparison'})">⚖ Compare Carriers</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'proposal-generator'})">📄 Generate Proposal</button>
    </div>
  </div>

  <!-- Key metrics strip -->
  <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Current Premium</div><div class="kpi-value">$${(r.current_premium/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Projected Renewal</div><div class="kpi-value">$${(r.projected_premium/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Δ Rate</div><div class="kpi-value" style="color:${r.delta_pct > 10 ? 'var(--status-red)' : r.delta_pct > 5 ? 'var(--status-amber)' : 'var(--status-green)'};">${r.delta_pct > 0 ? '+' : ''}${r.delta_pct.toFixed(1)}%</div></div>
    <div class="kpi-card"><div class="kpi-label">Retention Score</div><div class="kpi-value" style="color:${scoreColor};">${r.retention_score}/100</div></div>
    <div class="kpi-card"><div class="kpi-label">Days to Expiry</div><div class="kpi-value" style="color:${r.days_remaining <= 30 ? 'var(--status-red)' : 'var(--text-primary)'};">${r.days_remaining}</div></div>
  </div>

  <!-- TABS -->
  <div style="display:flex; border-bottom: 1px solid var(--border-subtle); margin-bottom: var(--space-xl); gap: var(--space-lg);">
    ${tabs.map(t => {
      const active = tab === t.id;
      const style = active ? 'border-bottom: 2px solid var(--mga-accent); font-weight:600; color:var(--text-primary);' : 'color:var(--text-muted);';
      return `<div style="padding:var(--space-sm) 0; cursor:pointer; ${style}" onclick="window.setState({renewalTab:'${t.id}'})">${t.label}</div>`;
    }).join('')}
  </div>

  ${content(r)}
  `;
}

function renderRenewalTabOverview(r) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <!-- Retention risk card -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">AI-POWERED RETENTION SCORE</div>
        <div style="display:flex; align-items:center; gap:var(--space-lg); margin-bottom: var(--space-lg);">
          <div style="width:120px; height:120px; border-radius:50%; background:conic-gradient(${r.retention_score >= 85 ? 'var(--status-green)' : r.retention_score >= 65 ? 'var(--status-amber)' : 'var(--status-red)'} ${r.retention_score * 3.6}deg, var(--bg-card) 0); display:flex; align-items:center; justify-content:center;">
            <div style="width:92px; height:92px; border-radius:50%; background:var(--bg-secondary); display:flex; align-items:center; justify-content:center; flex-direction:column;">
              <div style="font-size:1.8rem; font-weight:700;">${r.retention_score}</div>
              <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">${r.retention_tier}</div>
            </div>
          </div>
          <div style="flex:1;">
            <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:var(--space-sm);">Factors contributing to this score:</div>
            ${r.retention_factors.map(f => `
            <div style="display:flex; justify-content:space-between; padding:4px 0; font-size:0.85rem;">
              <span style="color:var(--text-secondary);">${f.positive?'✓':'⚠'} ${f.factor}</span>
              <strong style="color:${f.positive?'var(--status-green)':'var(--status-red)'};">${f.impact}</strong>
            </div>`).join('')}
          </div>
        </div>
        <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md); font-size:0.85rem;">
          <strong>📌 Strategy:</strong> ${r.strategy}
        </div>
      </div>

      <!-- Exposure updates -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
          <div class="section-title" style="margin:0;">EXPOSURE UPDATES</div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Exposure update form launched')">📝 Edit</button>
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
          <thead><tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
            <th style="padding:var(--space-sm) 0; font-weight:normal;">METRIC</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">EXPIRING</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">RENEWAL</th>
            <th style="padding:var(--space-sm) 0; font-weight:normal;">NOTE</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:var(--space-sm) 0;">Annual Payroll</td>
              <td style="padding:var(--space-sm) 0; color:var(--text-muted);">${r.exposure_updates.payroll.was}</td>
              <td style="padding:var(--space-sm) 0;"><strong>${r.exposure_updates.payroll.now}</strong></td>
              <td style="padding:var(--space-sm) 0; color:var(--status-amber); font-size:0.8rem;">${r.exposure_updates.payroll.note}</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:var(--space-sm) 0;">Employees</td>
              <td style="padding:var(--space-sm) 0; color:var(--text-muted);">${r.exposure_updates.employees.was}</td>
              <td style="padding:var(--space-sm) 0;"><strong>${r.exposure_updates.employees.now}</strong></td>
              <td></td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:var(--space-sm) 0;">Vehicles</td>
              <td style="padding:var(--space-sm) 0; color:var(--text-muted);">${r.exposure_updates.vehicles.was}</td>
              <td style="padding:var(--space-sm) 0;"><strong>${r.exposure_updates.vehicles.now}</strong></td>
              <td></td>
            </tr>
            <tr>
              <td style="padding:var(--space-sm) 0;">Locations</td>
              <td style="padding:var(--space-sm) 0; color:var(--text-muted);">${r.exposure_updates.locations.was}</td>
              <td style="padding:var(--space-sm) 0;"><strong>${r.exposure_updates.locations.now}</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Loss history impact -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
          <div class="section-title" style="margin:0;">LOSS HISTORY & CLAIMS IMPACT</div>
          <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'claims'})">View Claims →</button>
        </div>
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md);">
          <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);"><div style="color:var(--text-muted); font-size:0.75rem;">5-YR CLAIMS</div><div style="font-size:1.3rem; font-weight:700;">${r.loss_history['5yr_claims']}</div></div>
          <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);"><div style="color:var(--text-muted); font-size:0.75rem;">5-YR PAID</div><div style="font-size:1.3rem; font-weight:700;">${r.loss_history['5yr_paid']}</div></div>
          <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);"><div style="color:var(--text-muted); font-size:0.75rem;">OPEN CLAIMS</div><div style="font-size:1.3rem; font-weight:700; color:${r.loss_history.open > 0 ? 'var(--status-red)' : 'var(--text-primary)'};">${r.loss_history.open}</div></div>
          <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);"><div style="color:var(--text-muted); font-size:0.75rem;">LOSS RATIO</div><div style="font-size:1.3rem; font-weight:700;">${r.loss_history.loss_ratio}</div></div>
        </div>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <!-- Multi-touch campaign -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">MULTI-TOUCH CAMPAIGN</div>
        ${[
          { d: '90d', label: 'Email + SMS notification', done: true },
          { d: '75d', label: 'Producer phone call + activity task', done: true },
          { d: '45d', label: 'Formal renewal proposal sent', done: true },
          { d: '20d', label: 'Final follow-up + decision request', done: false }
        ].map(t => `
        <div style="display:flex; gap: var(--space-sm); padding:8px 0; border-bottom:1px solid var(--border-subtle); align-items:center;">
          <div style="width:28px; height:28px; border-radius:50%; background:${t.done?'var(--status-green)':'var(--bg-card)'}; display:flex; align-items:center; justify-content:center; font-size:0.8rem;">${t.done?'✓':t.d}</div>
          <div style="flex:1; font-size:0.85rem; ${t.done?'color:var(--text-muted);':''}">${t.label}</div>
        </div>`).join('')}
      </div>

      <!-- Cross-sell -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CROSS-SELL OPPORTUNITIES</div>
        ${r.cross_sell_flags.map(f => `
        <div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.9rem;">⭐ ${f}</span>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Opportunity: ${f} added to pipeline')">Add</button>
        </div>`).join('')}
      </div>

      <!-- Related policy -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RELATED POLICY</div>
        <div style="font-family:monospace; color:var(--mga-accent); font-size:0.9rem; margin-bottom:4px;">${r.policy_id}</div>
        <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom: var(--space-md);">${r.incumbent_carrier}</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;" onclick="window.setState({screen:'policy-details'})">View Policy →</button>
      </div>
    </div>
  </div>`;
}

function renderRenewalTabRemarketing(r) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h3 style="margin:0; font-size:1.1rem;">Market Submissions & Quotes</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Submitted to ${r.carrier_quotes.length} carriers · ${r.carrier_quotes.filter(q => q.status === 'Quoted').length} quoted · ${r.carrier_quotes.filter(q => q.status === 'Declined').length} declined</div>
    </div>
    <button class="btn btn-primary" onclick="window.showAlert('1-click remarketing launched to 5 additional carriers')">🔁 Remarket to More Carriers</button>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Premium</th><th>Coverage Score</th><th>Recommendation</th><th>Notes</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${r.carrier_quotes.map(q => `
        <tr style="${q.recommended === 'Best Value' ? 'background:rgba(0,230,118,0.04);' : ''}">
          <td><strong>${q.carrier}</strong>${q.recommended ? `<div style="font-size:0.72rem; color:var(--mga-accent); margin-top:2px;">⭐ ${q.recommended}</div>` : ''}</td>
          <td>${q.premium ? '<strong>$' + q.premium.toLocaleString() + '</strong>' : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${q.coverage_score > 0 ? `<div style="display:flex; align-items:center; gap:6px;"><div style="width:60px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${q.coverage_score}%; background:var(--mga-accent);"></div></div><span>${q.coverage_score}</span></div>` : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${q.recommended ? badge(q.recommended === 'Best Value' ? 'green' : q.recommended === 'Lowest Price' ? 'amber' : 'blue', q.recommended) : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="font-size:0.85rem; color:var(--text-secondary); max-width:260px;">${q.notes}</td>
          <td>${badge(q.status === 'Quoted' ? 'green' : 'red', q.status)}</td>
          <td>${q.status === 'Quoted' ? `<button class="btn btn-primary btn-sm" onclick="window.setState({screen:'binding-details'})">Bind</button>` : `<button class="btn btn-ghost btn-sm" disabled>—</button>`}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem;">
    <strong>📊 Competitor intelligence:</strong> Hartford is currently offering cyber endorsement bundled on BOP at no additional cost — noted as bundling pressure for the next renewal cycle.
  </div>`;
}

function renderRenewalTabComparison(r) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Side-by-Side Carrier Comparison</h3>
    <button class="btn btn-secondary" onclick="window.setState({screen:'renewal-comparison'})">Full-Screen View →</button>
  </div>
  ${renderComparisonTable()}`;
}

function renderComparisonTable() {
  const c = D.renewalCarrierComparison;
  return `
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th style="width:260px;">Coverage</th>
        <th>SEMC (Incumbent) ⭐</th>
        <th>CNA</th>
        <th>Travelers</th>
        <th>Hartford</th>
      </tr></thead>
      <tbody>
        ${c.coverages.map(cov => {
          const highlight = cov.name === 'Premium' || cov.name === 'Rate vs Current';
          return `
          <tr style="${highlight?'background:rgba(68,138,255,0.04);':''}">
            <td><strong>${cov.name}</strong></td>
            <td>${cov.incumbent}</td>
            <td>${cov.cna}</td>
            <td>${cov.travelers}</td>
            <td>${cov.hartford}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>
  <div style="margin-top: var(--space-md); padding: var(--space-md); background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); font-size:0.9rem;">
    <strong style="color:var(--status-green);">✓ Recommendation:</strong> ${c.recommendation}
  </div>`;
}

function renderRenewalTabProposal(r) {
  return `
  <div style="display:grid; grid-template-columns: 1.3fr 1fr; gap: var(--space-xl);">
    <div>
      <h3 style="margin:0 0 var(--space-md) 0; font-size:1.1rem;">Client-Facing Renewal Proposal</h3>
      <div style="background:white; color:#222; padding: var(--space-xl); border-radius:var(--radius-md); min-height:500px; font-family: Arial, sans-serif;">
        <div style="border-bottom: 3px solid #4a4af0; padding-bottom:12px; margin-bottom:20px;">
          <div style="font-size:0.75rem; color:#888;">BRIDGEPOINT INSURANCE — RENEWAL PROPOSAL</div>
          <div style="font-size:1.4rem; font-weight:700; margin-top:4px;">${r.client}</div>
          <div style="color:#666; margin-top:4px;">Proposal #${r.id} · Effective ${r.expiration}</div>
        </div>
        <div style="margin-bottom:20px;">
          <div style="font-weight:700; margin-bottom:8px;">EXECUTIVE SUMMARY</div>
          <div style="font-size:0.9rem; line-height:1.6;">We recommend renewing with your incumbent carrier (${r.incumbent_carrier}) at a modest ${r.delta_pct}% increase, preserving coverage continuity and claims handling relationship. Alternative markets were explored; incumbent offers the best value when factoring tenure and coverage breadth.</div>
        </div>
        <div style="margin-bottom:20px;">
          <div style="font-weight:700; margin-bottom:8px;">PREMIUM</div>
          <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
            <tr><td style="padding:6px; border-bottom:1px solid #eee;">Current Premium</td><td style="padding:6px; border-bottom:1px solid #eee; text-align:right;">$${r.current_premium.toLocaleString()}</td></tr>
            <tr><td style="padding:6px; border-bottom:1px solid #eee;">Projected Renewal</td><td style="padding:6px; border-bottom:1px solid #eee; text-align:right;"><strong>$${r.projected_premium.toLocaleString()}</strong></td></tr>
            <tr><td style="padding:6px;">Change</td><td style="padding:6px; text-align:right; color:#d48900;">+${r.delta_pct}%</td></tr>
          </table>
        </div>
        <div style="margin-bottom:20px;">
          <div style="font-weight:700; margin-bottom:8px;">COVERAGE HIGHLIGHTS</div>
          <ul style="margin:0; padding-left:20px; font-size:0.85rem; line-height:1.8;">
            <li>Workers Comp — continued $1M per-occurrence limit</li>
            <li>General Liability — $2M aggregate maintained</li>
            <li>Umbrella — $3M limit on top of underlying</li>
            <li>Cross-sell opportunity: <strong>Cyber Liability</strong> recommended</li>
          </ul>
        </div>
        <div style="padding-top:16px; border-top:1px solid #ddd; font-size:0.75rem; color:#666;">Proposal valid 30 days · Questions? Contact Sarah Chen, sarah@bridgepoint.com</div>
      </div>
    </div>
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">PROPOSAL STATUS</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Version</span><strong>${r.proposal.version}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Generated</span><strong>${r.proposal.generated}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Delivered</span><strong>${r.proposal.delivered}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Viewed by client</span><strong style="color:var(--status-green);">${r.proposal.viewed}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Signed</span><strong>${r.proposal.signed || '<span style="color:var(--text-muted);">Pending</span>'}</strong></div>
        </div>
      </div>
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">ACTIONS</div>
        <button class="btn btn-primary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Regenerating PDF with latest quotes...')">📄 Regenerate PDF</button>
        <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Proposal re-sent to client portal + email')">📧 Re-send to Client</button>
        <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('e-Signature request sent — DocuSign')">✍️ Request e-Signature</button>
        <button class="btn btn-ghost" style="width:100%;" onclick="window.showAlert('Download started')">⬇ Download</button>
      </div>
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">EARLY BIRD INCENTIVE</div>
        <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:var(--space-md);">Offer 2% discount for client commitment within 14 days of proposal.</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;" onclick="window.showAlert('Early-bird incentive applied: -2% discount')">Apply 2% Early-Bird Discount</button>
      </div>
    </div>
  </div>`;
}

function renderRenewalTabTimeline(r) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">RENEWAL JOURNEY — IMMUTABLE AUDIT TRAIL</div>
    <div style="display:flex; flex-direction:column; gap: var(--space-lg); position:relative; margin-top: var(--space-lg);">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${r.timeline.map(ev => `
      <div style="display:flex; gap: var(--space-lg); position:relative;">
        <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid var(--mga-accent); z-index:1; margin-top:4px;"></div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between;">
            <div style="font-weight:600; font-size:0.9rem;">${ev.action}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${ev.when}</div>
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">${ev.details}</div>
          <div style="margin-top:4px; font-size:0.75rem; color:var(--text-muted);">by ${ev.actor}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function renderRenewalTabWinLoss(r) {
  return `
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--status-green);">✓ RECORD AS WON</div>
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:var(--space-md);">Client accepted renewal with ${r.incumbent_carrier} at $${r.projected_premium.toLocaleString()}.</div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">Final Premium</label><input class="form-input" value="$${r.projected_premium.toLocaleString()}"/></div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">Retention Reason</label>
        <select class="form-input"><option>Coverage continuity + claims relationship</option><option>Best value across markets</option><option>Broadest coverage</option><option>Multi-policy discount</option><option>Early-bird discount applied</option></select>
      </div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">Discount Applied (optional)</label><input class="form-input" placeholder="e.g. 2% Early-Bird"/></div>
      <button class="btn btn-primary" style="width:100%;" onclick="window.setState({screen:'binding-details'})">Confirm & Bind Renewal →</button>
    </div>

    <div style="background:rgba(255,82,82,0.05); border:1px solid var(--status-red); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--status-red);">✗ RECORD AS LOST</div>
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:var(--space-md);">Capture loss reason for analytics and future retention strategy.</div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">Loss Reason</label>
        <select class="form-input">
          <option>Price — went to cheaper alternative</option>
          <option>Switched to direct writer</option>
          <option>Coverage needs changed</option>
          <option>Business closed / sold</option>
          <option>Dissatisfied with claims service</option>
          <option>Moved to captive / MGA</option>
          <option>Other</option>
        </select>
      </div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">New Carrier (if known)</label><input class="form-input" placeholder="e.g. GEICO Direct"/></div>
      <div style="margin-bottom:var(--space-md);"><label class="form-label">Notes</label><textarea class="form-input" rows="3" placeholder="Additional context..."></textarea></div>
      <button class="btn btn-danger" style="width:100%;" onclick="window.showAlert('Renewal marked Lost. Win/Loss analytics updated.')">Mark as Lost</button>
    </div>
  </div>
  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Lost renewals feed the Lost Analysis dashboard to identify systemic patterns (e.g. price sensitivity in a specific LOB, competitor activity in a region).
  </div>`;
}

// ─── Renewal Calendar ───
function renderRenewalCalendar() {
  const monthData = [
    { label: 'May 2026', renewals: D.renewalsList.filter(r => r.expiry.startsWith('2026-05')) },
    { label: 'June 2026', renewals: D.renewalsList.filter(r => r.expiry.startsWith('2026-06')) },
    { label: 'July 2026', renewals: D.renewalsList.filter(r => r.expiry.startsWith('2026-07')) },
    { label: 'August 2026', renewals: D.renewalsList.filter(r => r.expiry.startsWith('2026-08')) }
  ];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'renewals'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Renewals</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Renewal Calendar</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('View switched: Week')">Week</button>
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('View switched: Quarter')">Quarter</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Exported to Outlook / Google Calendar')">📤 Export to Calendar</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg);">
    ${monthData.map(m => `
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
        <div style="font-weight:700; font-size:1.1rem;">${m.label}</div>
        <div style="color:var(--text-muted); font-size:0.85rem;">${m.renewals.length} renewal${m.renewals.length===1?'':'s'} · $${(m.renewals.reduce((s,r)=>s+r.projected,0)/1000).toFixed(0)}k</div>
      </div>
      ${m.renewals.length === 0 ? '<div style="color:var(--text-muted); font-size:0.85rem;">No renewals this month.</div>' : m.renewals.map(r => `
        <div style="padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); margin-bottom:var(--space-sm); cursor:pointer; border-left:3px solid ${r.days <= 30 ? 'var(--status-red)' : r.days <= 60 ? 'var(--status-amber)' : 'var(--mga-accent)'};" onclick="window.setState({screen:'renewal-details', currentRenewalId:'${r.id}'})">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <strong style="font-size:0.9rem;">${r.client}</strong>
            <span style="font-family:monospace; font-size:0.75rem; color:var(--text-muted);">${r.expiry.slice(-2)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem;">
            <span style="color:var(--text-muted);">${r.lob} · ${r.carrier.split('/')[0].trim()}</span>
            <strong style="color:${r.delta_pct > 10 ? 'var(--status-red)' : r.delta_pct > 5 ? 'var(--status-amber)' : 'var(--status-green)'};">${r.delta_pct > 0 ? '+' : ''}${r.delta_pct.toFixed(1)}%</strong>
          </div>
        </div>`).join('')}
    </div>`).join('')}
  </div>`;
}

// ─── Full-screen Comparison ───
function renderRenewalComparison() {
  const r = D.renewalDetail;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'renewal-details'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Renewal</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Quote Comparison — ${r.client}</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${r.id} · ${r.lob} · Effective ${r.expiration}</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Export to PDF — comparison sheet')">Export PDF</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'proposal-generator'})">Generate Proposal →</button>
    </div>
  </div>
  ${renderComparisonTable()}
  <div style="margin-top: var(--space-lg); display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md);">
    <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--status-green); margin-bottom:4px;">⭐ Best Value</div>
      <div style="font-size:0.9rem;">SEMC (Incumbent) — preserves continuity, moderate increase, no coverage gaps.</div>
    </div>
    <div style="background:rgba(255,167,38,0.05); border:1px solid var(--status-amber); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--status-amber); margin-bottom:4px;">💰 Lowest Price</div>
      <div style="font-size:0.9rem;">Travelers — $172,800 (+1.6%), but higher deductible on GL.</div>
    </div>
    <div style="background:rgba(68,138,255,0.05); border:1px solid var(--mga-accent); border-radius:var(--radius-md); padding: var(--space-md);">
      <div style="font-weight:700; color:var(--mga-accent); margin-bottom:4px;">🛡 Broadest Coverage</div>
      <div style="font-size:0.9rem;">Hartford — $189,400, includes cyber endorsement + $5M umbrella.</div>
    </div>
  </div>`;
}

// ─── Lost Analysis ───
function renderRenewalLostAnalysis() {
  const lost = D.lostRenewalReasons;
  const totalLost = lost.reduce((s, r) => s + r.count, 0);
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'renewals'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Renewals</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Lost Renewal Analysis</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 12 months</option><option>Last quarter</option><option>YTD</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — Lost Business Report')">Export</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Total Lost (YTD)</div><div class="kpi-value">${totalLost}</div></div>
    <div class="kpi-card"><div class="kpi-label">Lost Premium</div><div class="kpi-value" style="color:var(--status-red);">$847k</div></div>
    <div class="kpi-card"><div class="kpi-label">Win Rate</div><div class="kpi-value" style="color:var(--status-green);">91.4%</div></div>
    <div class="kpi-card"><div class="kpi-label">Recoverable Lost</div><div class="kpi-value">4</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">REASONS FOR LOST RENEWALS</div>
    ${lost.map(r => `
    <div style="margin-bottom: var(--space-md);">
      <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:4px;">
        <span><strong>${r.reason}</strong> <span style="color:var(--text-muted);">· ${r.count} clients</span></span>
        <span><strong>${r.pct}%</strong> <span style="color:${r.trend.startsWith('+') ? 'var(--status-red)' : r.trend.startsWith('-') ? 'var(--status-green)' : 'var(--text-muted)'}; margin-left:8px;">${r.trend} vs last period</span></span>
      </div>
      <div style="background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden;"><div style="height:100%; width:${r.pct*3}%; background:var(--status-red);"></div></div>
    </div>`).join('')}
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">RECENTLY LOST RENEWALS</div>
    <table class="data-table">
      <thead><tr><th>Renewal ID</th><th>Client</th><th>LOB</th><th>Lost Premium</th><th>Reason</th><th>Producer</th></tr></thead>
      <tbody>
        ${D.renewalsList.filter(r => r.status === 'Lost').map(r => `
        <tr>
          <td><strong style="color:var(--mga-accent);">${r.id}</strong></td>
          <td>${r.client}</td>
          <td>${r.lob}</td>
          <td>$${r.current_premium.toLocaleString()}</td>
          <td style="font-size:0.85rem; color:var(--text-muted);">${r.strategy}</td>
          <td>${r.producer}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Lost renewals are auto-added to a <strong>"Win-back"</strong> campaign 6 months post-loss. Price-sensitive losses trigger automated market-check alerts on the next renewal cycle.
  </div>`;
}

// ─── Retention Analytics ───
function renderRenewalAnalytics() {
  const a = D.renewalAnalytics;
  const tierColor = (r) => r >= 90 ? 'var(--status-green)' : r >= 85 ? 'var(--mga-accent)' : 'var(--status-amber)';
  const maxTrend = Math.max(...a.retention_trend.map(t => t.rate));

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'renewals'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Renewals</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Retention Performance Dashboard</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 12 months</option><option>YTD</option><option>Last 24 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Retention report exported')">Export</button>
    </div>
  </div>

  ${kpiCards(D.brokerRenewalsKPIs, 6)}

  <!-- Trend + Pipeline -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top:var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RETENTION TREND (QUARTERLY)</div>
      <div style="display:flex; align-items:flex-end; gap:var(--space-md); height:200px; padding: var(--space-md) 0;">
        ${a.retention_trend.map(t => `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px; height:100%;">
          <div style="font-size:0.85rem; font-weight:700; color:${tierColor(t.rate)};">${t.rate}%</div>
          <div style="width:100%; background:${tierColor(t.rate)}; border-radius:4px 4px 0 0; height:${(t.rate/maxTrend)*80}%;"></div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${t.period}</div>
        </div>`).join('')}
      </div>
      <div style="text-align:center; font-size:0.85rem; color:var(--text-muted);">✓ Retention improved +3.2pts over 4 quarters</div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PIPELINE VALUE BY STAGE</div>
      ${a.pipeline_by_stage.map(p => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${p.stage}</strong> <span style="color:var(--text-muted);">· ${p.count} renewals</span></span>
          <strong>${p.value}</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${p.count*5}%; background:var(--mga-accent);"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Carrier + LOB -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top:var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RETENTION BY CARRIER</div>
      ${a.retention_by_carrier.map(c => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${c.carrier}</strong> <span style="color:var(--text-muted);">· ${c.count} policies</span></span>
          <strong style="color:${tierColor(c.rate)};">${c.rate}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${c.rate}%; background:${tierColor(c.rate)};"></div></div>
      </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RETENTION BY LOB</div>
      ${a.retention_by_lob.map(l => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${l.lob}</strong> <span style="color:var(--text-muted);">· ${l.count} policies</span></span>
          <strong style="color:${tierColor(l.rate)};">${l.rate}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${l.rate}%; background:${tierColor(l.rate)};"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Producer table -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top:var(--space-lg);">
    <div class="section-title">RETENTION BY PRODUCER</div>
    <table class="data-table">
      <thead><tr><th>Producer</th><th>Retention Rate</th><th>Policies Retained</th><th>Book Growth</th><th>Progress</th></tr></thead>
      <tbody>
        ${a.retention_by_producer.map(p => `
        <tr>
          <td><strong>${p.name}</strong></td>
          <td><strong style="color:${tierColor(p.rate)};">${p.rate}%</strong></td>
          <td>${p.policies}</td>
          <td style="color:var(--status-green);">${p.growth}</td>
          <td style="width:260px;"><div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${p.rate}%; background:${tierColor(p.rate)};"></div></div></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <!-- Top Producers -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top:var(--space-lg);">
    <div class="section-title">TOP PERFORMING PRODUCERS</div>
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md);">
      ${a.top_producers.map((p, i) => `
      <div style="background:var(--bg-card); padding: var(--space-lg); border-radius:var(--radius-md); text-align:center; ${i===0 ? 'border:1px solid var(--status-green);' : ''}">
        <div style="font-size:1.8rem; margin-bottom:4px;">${i===0 ? '🏆' : i===1 ? '🥈' : '🥉'}</div>
        <div style="font-weight:700; font-size:1.1rem;">${p.name}</div>
        <div style="display:flex; justify-content:center; gap:var(--space-md); margin-top:var(--space-sm); font-size:0.85rem;">
          <div><div style="color:var(--text-muted); font-size:0.75rem;">RETENTION</div><strong>${p.retention}</strong></div>
          <div><div style="color:var(--text-muted); font-size:0.75rem;">GROWTH</div><strong style="color:var(--status-green);">${p.growth}</strong></div>
          <div><div style="color:var(--text-muted); font-size:0.75rem;">SCORE</div><strong>${p.score}</strong></div>
        </div>
      </div>`).join('')}
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Target: 90%+ retention rate. Performance scorecards run monthly. Producers below 85% are paired with a retention coach.
  </div>`;
}

function renderBrokerClientDetails() {
  return `
  <!-- HEADER -->
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'clients'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Clients</button>
  </div>
  <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-md);">
    <div style="display: flex; align-items: center; gap: var(--space-sm);">
      <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-weight:bold;color:var(--status-green);">MC</div>
      <div>
        <h2 style="margin:0;font-size:1.4rem;">Magnolia Construction LLC</h2>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:2px;">
          <span style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;font-size:0.7rem;margin-right:4px;">LLC</span>
          ${badge('green', 'Active')} Client since Jan 2024
        </div>
      </div>
    </div>
    <div style="display: flex; gap: var(--space-sm);">
      <button class="btn btn-primary" onclick="window.setState({screen: 'submission', wizardStep: 1})">+ New Submission</button>
      <button class="btn btn-secondary" onclick="window.openTaskModal({client:'Magnolia Construction LLC'})">+ Task</button>
      <button class="btn btn-secondary" onclick="window.setState({screen: 'coi-workbench'})">📄 Generate COI</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Opening email composer to robert@magnoliaconstruction.com')">✉️ Contact Client</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Client actions menu')">⋮</button>
    </div>
  </div>

  <!-- TABS -->
  <div style="display:flex; border-bottom: 1px solid var(--border-subtle); margin-bottom: var(--space-xl); gap: var(--space-lg);">
    ${['Overview', 'Policies (3)', 'Submissions (2)', 'Certificates (1)', 'Loss Runs', 'Documents (6)', 'Activity'].map((t, i) => {
      const id = ['overview', 'policies', 'submissions', 'certificates', 'loss-runs', 'documents', 'activity'][i];
      const active = (state.clientTab || 'overview') === id;
      const actStyle = active ? 'border-bottom: 2px solid var(--mga-accent); font-weight:600; color:var(--text-primary);' : 'color:var(--text-muted);';
      return `<div style="padding:var(--space-sm) 0; cursor:pointer; ${actStyle}" onclick="setState({clientTab: '${id}'})">${t}</div>`;
    }).join('')}
  </div>

  ${renderClientTabContent()}
  `;
}

function renderClientTabContent() {
  const tab = state.clientTab || 'overview';
  if (tab === 'overview') return renderBrokerClientTabOverview();
  if (tab === 'policies') return renderBrokerClientTabPolicies();
  if (tab === 'submissions') return renderBrokerClientTabSubmissions();
  if (tab === 'certificates') return renderBrokerClientTabCertificates();
  if (tab === 'loss-runs') return renderBrokerClientTabLossRuns();
  if (tab === 'documents') return renderBrokerClientTabDocuments();
  if (tab === 'activity') return renderBrokerClientTabActivity();
  return '';
}

function renderBrokerClientTabOverview() {
  return `
  <!-- MAIN GRID -->
  <div style="display:grid; grid-template-columns: 2.2fr 1fr; gap: var(--space-xl);">
    
    <!-- LEFT COLUMN -->
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <!-- Business Profile -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-lg);">
          <div class="section-title" style="margin:0;">BUSINESS PROFILE</div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Edit Profile Dialog')">📝 Edit</button>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-md); font-size:0.85rem;">
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">LEGAL NAME</span> <strong>Magnolia Construction LLC</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">DBA / TRADE NAME</span> <strong>Magnolia Build Co.</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">ENTITY TYPE</span> <strong>LLC</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">FEIN / TAX ID</span> <strong>88-XXXX492</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">DATE ESTABLISHED</span> <strong style="text-align:right;">2012 (14 years in business)</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">NAICS CODE</span> <strong style="text-align:right;">238990 — Specialty Trade Contractors</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">SIC CODE</span> <strong>1731 — Electrical Work</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">NUMBER OF EMPLOYEES</span> <strong>120</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">ANNUAL REVENUE</span> <strong>$8,500,000 (estimated)</strong></div>
          </div>
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">PRIMARY BUSINESS</span> <strong style="text-align:right;">Electrical contracting, specialty trade</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">LICENSE TYPE</span> <strong style="text-align:right;">Contractor's License - Class A</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">LICENSE NUMBER</span> <strong>CA-LIC-892341</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">WEBSITE</span> <strong style="color:var(--mga-accent);">magnoliaconstruction.com</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">OPERATION STATES</span> <strong>CA, TX</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">OSHA EMR RATING</span> <strong style="color:var(--status-green);">0.85 (below avg 1.0)</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">YEARS WITH AGENCY</span> <strong>2 years (since 2024)</strong></div>
          </div>
        </div>
      </div>
      
      <!-- Locations -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-lg);">
          <div class="section-title" style="margin:0;">LOCATIONS</div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Add Location Dialog')">+ Add Location</button>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-md);">
          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-md);">
            <div style="display:inline-block; background:rgba(68,138,255,0.1); color:#82b1ff; font-size:0.7rem; padding:2px 6px; border-radius:4px; margin-bottom:8px;">HQ</div>
            <div style="font-weight:600; margin-bottom:8px;">1201 Industrial Blvd, Sacramento, CA 95814</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">Phone: (916) 555-0182</div>
            <div style="text-align:right;"><a href="#" style="color:var(--mga-accent); font-size:0.8rem; text-decoration:none;">Edit</a></div>
          </div>
          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-md);">
            <div style="display:inline-block; background:rgba(68,138,255,0.1); color:#82b1ff; font-size:0.7rem; padding:2px 6px; border-radius:4px; margin-bottom:8px;">Operations — CA</div>
            <div style="font-weight:600; margin-bottom:8px;">4890 Contractor Way, Los Angeles, CA 90001</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">WC CA Payroll: $2,340,000</div>
            <div style="text-align:right;"><a href="#" style="color:var(--mga-accent); font-size:0.8rem; text-decoration:none;">Edit</a></div>
          </div>
          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-md);">
            <div style="display:inline-block; background:rgba(68,138,255,0.1); color:#82b1ff; font-size:0.7rem; padding:2px 6px; border-radius:4px; margin-bottom:8px;">Operations — TX</div>
            <div style="font-weight:600; margin-bottom:8px;">712 Trade Center Dr, Houston, TX 77002</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">WC TX Payroll: $870,000</div>
            <div style="text-align:right;"><a href="#" style="color:var(--mga-accent); font-size:0.8rem; text-decoration:none;">Edit</a></div>
          </div>
        </div>
      </div>
      
      <!-- Contacts -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-lg);">
          <div class="section-title" style="margin:0;">CONTACTS</div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Add Contact Dialog')">+ Add Contact</button>
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
          <thead>
            <tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
              <th style="padding:var(--space-sm) 0; font-weight:normal;">CONTACT NAME</th>
              <th style="padding:var(--space-sm) 0; font-weight:normal;">TITLE</th>
              <th style="padding:var(--space-sm) 0; font-weight:normal;">PHONE</th>
              <th style="padding:var(--space-sm) 0; font-weight:normal;">EMAIL</th>
              <th style="padding:var(--space-sm) 0; font-weight:normal;">ROLE</th>
              <th style="padding:var(--space-sm) 0; font-weight:normal;"></th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:var(--space-md) 0; font-weight:bold;">Robert Nguyen</td>
              <td style="padding:var(--space-md) 0;">CEO</td>
              <td style="padding:var(--space-md) 0; color:var(--text-secondary);">(916) 555-0182</td>
              <td style="padding:var(--space-md) 0; color:var(--mga-accent);">robert@magnoliaconstruction.com</td>
              <td style="padding:var(--space-md) 0;">Primary</td>
              <td style="padding:var(--space-md) 0; text-align:right;"><span style="cursor:pointer;color:var(--text-muted);">Edit ✉️</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-subtle);">
              <td style="padding:var(--space-md) 0; font-weight:bold;">Andrea Acct</td>
              <td style="padding:var(--space-md) 0;">Controller</td>
              <td style="padding:var(--space-md) 0; color:var(--text-secondary);">(916) 555-0241</td>
              <td style="padding:var(--space-md) 0; color:var(--mga-accent);">andrea.a@company.com</td>
              <td style="padding:var(--space-md) 0;">Finance</td>
              <td style="padding:var(--space-md) 0; text-align:right;"><span style="cursor:pointer;color:var(--text-muted);">Edit ✉️</span></td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-ghost" style="width:100%; justify-content:center; margin-top:var(--space-md); border:1px dashed var(--border-subtle);" onclick="window.showAlert('Add Contact Dialog')">+ Add Contact</button>
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      
      <!-- Account Summary -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">ACCOUNT SUMMARY</div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Total Active Policies</span> <strong>3</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Total Annual Premium</span> <strong>$184,700</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Carrier (Primary)</span> <strong>SEMC Insurance Group</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Prior Carrier</span> <strong>Berkshire Hathaway ($195,600)</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Savings Achieved</span> <strong style="color:var(--status-green);">$10,900 | 5.6%</strong></div>
        <div style="border-top:1px solid var(--border-subtle); margin:var(--space-sm) 0;"></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Assigned Producer</span> <strong>Sarah Chen</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Producer Email</span> <strong>sarah@bridgepoint.com</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Last Submission</span> <strong>Apr 8, 2026</strong></div>
        <div style="display:flex; justify-content:space-between; font-size:0.85rem;"><span style="color:var(--text-muted);">Next Renewal</span> <strong>May 31, 2027</strong></div>
      </div>
      
      <!-- Active Coverage -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">ACTIVE COVERAGE</div>
        
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <div style="font-weight:600; font-size:0.9rem;">◇ Workers Compensation</div>
          <div style="font-weight:bold; font-size:0.9rem;">$138,400</div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:0.8rem; color:var(--text-muted);">
          <div>SEMC</div><div style="color:var(--status-green);">Active</div>
        </div>
        
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <div style="font-weight:600; font-size:0.9rem;">◇ General Liability</div>
          <div style="font-weight:bold; font-size:0.9rem;">$34,200</div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:0.8rem; color:var(--text-muted);">
          <div>SEMC</div><div style="color:var(--status-green);">Active</div>
        </div>
        
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <div style="font-weight:600; font-size:0.9rem;">◇ Umbrella</div>
          <div style="font-weight:bold; font-size:0.9rem;">$12,100</div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:0.8rem; color:var(--text-muted);">
          <div>SEMC</div><div style="color:var(--status-green);">Active</div>
        </div>
        
        <div style="margin-top:var(--space-md); cursor:pointer; color:var(--mga-accent); font-size:0.85rem;" onclick="window.setState({clientTab: 'policies'})">View All Policies →</div>
      </div>
      
      <!-- Renewal Timeline -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RENEWAL TIMELINE</div>
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">
          <span>Bound: Jun 1, 2026</span><span>May 31, 2027</span>
        </div>
        <div style="height:6px; background:rgba(255,255,255,0.1); border-radius:3px; margin-bottom:8px; overflow:hidden;">
          <div style="height:100%; width:15%; background:var(--status-green); border-radius:3px;"></div>
        </div>
        <div style="color:var(--status-green); font-size:0.85rem; font-weight:bold; margin-bottom:16px;">
          388 days remaining
        </div>
        <button class="btn btn-ghost" style="width:100%; border:1px solid var(--border-subtle); justify-content:center;" disabled>↻ Start Renewal When Ready</button>
      </div>

      <!-- Risk Profile -->
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RISK PROFILE</div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Industry Risk Class</span> <strong style="text-align:right;">Specialty Trade Contractor<br/>(Moderate)</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">OSHA EMR</span> <strong style="color:var(--status-green);">0.85 (Below Average — favorable)</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">5-Year Loss Ratio</span> <strong>73.2%</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Total Claims (5yr)</span> <strong>8</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Last Claim</span> <strong>Q3 2024</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem;"><span style="color:var(--text-muted);">Claim Trend</span> <strong style="color:var(--status-green);">↓ Declining (favorable)</strong></div>
        <div style="margin-top:var(--space-md); cursor:pointer; color:var(--mga-accent); font-size:0.85rem;" onclick="setState({screen:'policy-loss-runs'})">View Loss Runs →</div>
      </div>
      
    </div>
  </div>
  `;
}

function renderBrokerClientTabPolicies() {
  return `
  <div class="data-table-wrapper" style="animation: fadeIn var(--transition-fast);">
    <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-md); align-items:center;">
      <div style="display:flex; gap:var(--space-sm);">
        <input class="form-input" placeholder="Search Policies..." style="width:250px;"/>
        <select class="form-input" style="width:150px;"><option>Active ▼</option><option>Expired</option></select>
      </div>
      <button class="btn btn-primary" onclick="window.setState({screen: 'submission', wizardStep: 1})">+ Record Policy</button>
    </div>
    <table class="data-table">
      <thead><tr><th>LOB</th><th>Policy #</th><th>Carrier</th><th>Eff/Exp</th><th>Premium</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        <tr><td>Workers Comp</td><td>WC-98321</td><td>SEMC</td><td>06/01/26-27</td><td>$138,400</td><td>${badge('green','Active')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen: 'policy-details'})">View</button></td></tr>
        <tr><td>Gen Liability</td><td>GL-99324</td><td>SEMC</td><td>06/01/26-27</td><td>$34,200</td><td>${badge('green','Active')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen: 'policy-details'})">View</button></td></tr>
        <tr><td>Auto (Comm)</td><td>CA-11223</td><td>Travelers</td><td>01/15/26-27</td><td>$41,800</td><td>${badge('amber','Pending Renewal')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen: 'policy-details'})">View</button></td></tr>
      </tbody>
    </table>
  </div>`;
}

function renderBrokerClientTabSubmissions() {
  return `
  <div style="display:flex; gap:var(--space-md); margin-bottom:var(--space-lg);">
    <div style="flex:1; background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-md);">${badge('green','Pipeline Active')} <span style="margin-left:8px;font-size:0.85rem;color:var(--text-secondary);">$450k Quoted | 2 Bound | 1 Negotiating</span></div>
  </div>
  <div class="data-table-wrapper" style="animation: fadeIn var(--transition-fast);">
    <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-md); align-items:center;">
      <input class="form-input" placeholder="Search Pipelines..." style="width:250px;"/>
      <button class="btn btn-primary" onclick="window.setState({screen: 'submission', wizardStep: 1})">+ New Submission</button>
    </div>
    <table class="data-table">
      <thead><tr><th>Sub ID</th><th>LOB</th><th>Markets Approached</th><th>Eff Date</th><th>Indication</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        <tr><td>S-882</td><td>Cyber</td><td>CFC (Qtd), Chubb (Decl)</td><td>08/01/26</td><td>$12,500</td><td>${badge('blue','Quoted')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen: 'quote-details'})">Manage</button></td></tr>
        <tr><td>S-881</td><td>BOP</td><td>Liberty Mutual</td><td>05/15/26</td><td>$4,100</td><td>${badge('amber','Submitted')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen: 'quote-details'})">Manage</button></td></tr>
      </tbody>
    </table>
  </div>`;
}

function renderBrokerClientTabDocuments() {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); overflow:hidden; animation: fadeIn var(--transition-fast);">
    <div style="padding:var(--space-md); border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02);">
      <div style="font-weight:600; font-size:0.85rem;">DOCUMENT REPOSITORY (6 Files)</div>
      <div style="display:flex; gap:var(--space-sm);">
        <input class="form-input" placeholder="Search docs..." style="height:32px; font-size:0.8rem;"/>
        <button class="btn btn-primary btn-sm" onclick="window.showAlert('Launching secure upload portal...')">+ Upload Doc</button>
      </div>
    </div>
    <table class="data-table">
      <thead><tr><th>File Name</th><th>Type</th><th>Size</th><th>Uploaded By</th><th>Date</th><th>Action</th></tr></thead>
      <tbody>
        ${[
          { name: 'Magnolia_GL_Policy_2026.pdf', type: 'Policy', size: '2.4 MB', by: ' Sarah Mitchell', date: 'Apr 08' },
          { name: 'Prior_Carrier_LossRuns_5yr.pdf', type: 'Claims', size: '4.1 MB', by: 'System (Extracted)', date: 'Apr 02' },
          { name: 'Cert_CityOfSac_Master.pdf', type: 'Certificate', size: '0.8 MB', by: 'Sarah Mitchell', date: 'Mar 15' },
          { name: 'Financials_FY2025_Confidential.pdf', type: 'Financial', size: '1.2 MB', by: 'Client Portal', date: 'Feb 20' }
        ].map(doc => `
        <tr>
          <td><span style="color:var(--mga-accent); cursor:pointer;">📄 ${doc.name}</span></td>
          <td>${doc.type}</td>
          <td style="color:var(--text-muted);">${doc.size}</td>
          <td>${doc.by}</td>
          <td>${doc.date}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="window.showAlert('Downloading document...')">Download</button></td>
        </tr>
        `).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderBrokerClientTabActivity() {
  const activities = [
    { date: 'Today, 09:42 AM', user: 'Sarah Mitchell', action: 'Issued Master COI', details: 'Recipient: City of Sacramento (Project #892)' },
    { date: 'Yesterday, 02:15 PM', user: 'System', action: 'Policy Endorsement Issued', details: 'GL Policy #GL-99324 — Added vehicle endorsement' },
    { date: 'Apr 12, 2026', user: 'Robert Nguyen', action: 'Document Uploaded', details: 'Magnolia_Payroll_Q1_2026.xlsx' },
    { date: 'Apr 08, 2026', user: 'Sarah Mitchell', action: 'New Quote Bound', details: 'Workers Comp $138k Annual Premium' }
  ];

  return `
  <div style="padding:var(--space-lg); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); animation: fadeIn var(--transition-fast);">
    <div class="section-title">ACCOUNT ACTIVITY LOG</div>
    <div style="display:flex; flex-direction:column; gap:var(--space-xl); position:relative; margin-top:var(--space-xl);">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${activities.map(a => `
      <div style="display:flex; gap:var(--space-lg); position:relative;">
        <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid var(--mga-accent); z-index:1; margin-top:4px;"></div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">${a.date} &nbsp;·&nbsp; ${a.user}</div>
          <div style="font-weight:600; font-size:0.9rem; color:var(--text-primary);">${a.action}</div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">${a.details}</div>
        </div>
      </div>
      `).join('')}
    </div>
  </div>`;
}

function renderBrokerClientTabCertificates() {
  return `
  <div style="display:flex; gap:var(--space-md); margin-bottom:var(--space-lg);">
    <div style="flex:1; background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-md);">Total Issued COIs: <strong>3</strong> | High-Priority Alerts: <strong style="color:var(--status-red);">1</strong></div>
  </div>
  <div class="data-table-wrapper" style="animation: fadeIn var(--transition-fast);">
    <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-md); align-items:center;">
      <input class="form-input" placeholder="Search Certificate Holders..." style="width:250px;"/>
      <button class="btn btn-primary" onclick="window.setState({screen: 'coi-workbench'})">+ Issue New Master COI</button>
    </div>
    <table class="data-table">
      <thead><tr><th>Req ID</th><th>Holder / Project</th><th>LOBs Covered</th><th>Issue Date</th><th>Expires</th><th>Spcl Req</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>
        <tr><td>C-102</td><td><strong>City of Sacramento</strong></td><td>GL, WC, UMB</td><td>04/12/26</td><td><strong style="color:var(--status-amber);">06/01/26</strong></td><td>AI, WOS</td><td>${badge('green','Issued')}</td><td><button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'coi-workbench'})">View >></button></td></tr>
        <tr><td>C-101</td><td>Irvine Property Mgmt</td><td>GL</td><td>03/05/26</td><td>11/15/26</td><td>AI</td><td>${badge('gray','Voided')}</td><td><button class="btn btn-secondary btn-sm" disabled>View >></button></td></tr>
        <tr><td>C-100</td><td>Default Client Master</td><td>GL, Auto, WC</td><td>01/10/26</td><td>01/01/27</td><td>--</td><td>${badge('green','Issued')}</td><td><button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'coi-workbench'})">View >></button></td></tr>
      </tbody>
    </table>
  </div>`;
}

function renderBrokerCOIWorkbench() {
  const isValidating = state.coiProcessingStatus === 'validating';
  const isIssuing = state.coiProcessingStatus === 'issuing';
  const isComplete = state.coiProcessingStatus === 'complete';

  // [NEW] Split-Screen Validation Route
  if (state.coiValidationView) {
    return renderCoiValidationSplit();
  }

  if (isComplete) {
    return `
    <div style="text-align:center; padding:var(--space-xl); animation: fadeIn 0.4s ease-out; position:relative; overflow:hidden;">
      <div style="font-size:4rem; margin-bottom:var(--space-md);">✅</div>
      <h2 style="margin-bottom:var(--space-md);">Certificate Successfully Issued</h2>
      <p style="color:var(--text-secondary); margin-bottom:var(--space-lg);">Req ID: C-102 has been stamped and delivered to City of Sacramento.</p>
      
      <!-- Stamp Animation Target -->
      <div id="certified-stamp" class="certified-stamp active">ISSUED</div>

      <div style="display:flex; justify-content:center; gap:var(--space-md);">
        <button class="btn btn-primary" onclick="window.setState({screen: 'policy-pdf'})">View Generated PDF</button>
        <button class="btn btn-secondary" onclick="window.setState({screen: 'client-details', clientTab: 'certificates', coiProcessingStatus: 'idle', coiValidated: false, coiIsIssued: false})">Return to Client</button>
      </div>
    </div>`;
  }

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" onclick="window.setState({screen: 'client-details', clientTab: 'certificates', coiValidated: false, coiProcessingStatus: 'idle'})" style="margin-left:-8px;">← Back to Certificates</button>
  </div>
  
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-lg);">
    <div>
      <h2 style="margin-bottom:4px;">COI Workbench: ACORD 25 Simulation</h2>
      <div style="color:var(--text-secondary); font-size:0.9rem;">Request ID: <strong>C-102</strong> &nbsp;·&nbsp; Requestor: <a href="#" style="color:var(--mga-accent);">Sarah Jenkins</a></div>
    </div>
    <div>${badge(state.coiValidated ? 'green' : 'amber', state.coiValidated ? 'Coverage Verified' : 'Validation Required')}</div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-lg); margin-bottom:var(--space-lg);">
    
    <!-- HEADER BLOCKS -->
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-lg); border-radius:var(--radius-lg);">
      <h3 style="font-size:0.75rem; color:var(--text-muted); margin-bottom:var(--space-md); text-transform:uppercase; letter-spacing:1px;">PRODUCER & INSURED</h3>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-md); font-size:0.85rem;">
        <div>
          <div style="color:var(--text-muted); margin-bottom:4px;">PRODUCER</div>
          <div style="font-weight:600;">AlphaBrokers LLC</div>
          <div style="color:var(--text-secondary);">1200 Market St, SF, CA</div>
        </div>
        <div>
          <div style="color:var(--text-muted); margin-bottom:4px;">INSURED</div>
          <div style="font-weight:600;">Magnolia Construction LLC</div>
          <div style="color:var(--text-secondary);">1201 Industrial Blvd, Sac, CA</div>
        </div>
      </div>
    </div>

    <!-- INSURERS -->
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-lg); border-radius:var(--radius-lg);">
      <h3 style="font-size:0.75rem; color:var(--text-muted); margin-bottom:var(--space-md); text-transform:uppercase; letter-spacing:1px;">INSURERS AFFORDING COVERAGE</h3>
      <div style="display:flex; flex-direction:column; gap:4px; font-size:0.85rem;">
        <div style="display:flex; justify-content:space-between;"><span>INSURER A:</span> <strong>SEMC Insurance Group</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>INSURER B:</span> <strong>Liberty Mutual</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>INSURER C:</span> <strong>Travelers</strong></div>
      </div>
    </div>

  </div>

  <!-- COVERAGE MATRIX (ACORD STYLE) -->
  <div class="data-table-wrapper" style="margin-bottom: var(--space-lg); overflow-x: auto;">
    <h3 style="font-size:0.75rem; color:var(--text-muted); padding:var(--space-md); background:rgba(255,255,255,0.03); border-bottom:1px solid var(--border-subtle); text-transform:uppercase; letter-spacing:1px; margin:0;">COVERAGES (ACORD 25)</h3>
    <table class="data-table" style="font-size:0.75rem; min-width:800px;">
      <thead>
        <tr style="background:rgba(255,255,255,0.02);">
          <th style="width:40px;">INSR</th>
          <th>TYPE OF INSURANCE</th>
          <th style="width:60px;">ADDL INSR</th>
          <th style="width:60px;">WVBR SUBR</th>
          <th>POLICY NUMBER</th>
          <th>EFF DATE</th>
          <th>EXP DATE</th>
          <th>LIMITS</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr style="${state.coiValidated ? 'background:rgba(0,230,118,0.03);' : ''}">
          <td>A</td>
          <td style="font-weight:600;">COMMERCIAL GENERAL LIABILITY</td>
          <td style="text-align:center;">${state.coiValidated ? '✅' : '—'}</td>
          <td style="text-align:center;">${state.coiValidated ? '✅' : '—'}</td>
          <td>GL-99324-2025</td>
          <td>06/01/25</td>
          <td>06/01/26</td>
          <td>$1,000,000 Occ / $2,000,000 Agg</td>
          <td>${state.coiValidated ? badge('green', 'Match') : badge('gray', 'Pending')}</td>
        </tr>
        <tr style="${state.coiValidated ? 'background:rgba(0,230,118,0.03);' : ''}">
          <td>B</td>
          <td style="font-weight:600;">AUTOMOBILE LIABILITY</td>
          <td style="text-align:center;">—</td>
          <td style="text-align:center;">—</td>
          <td>CA-11223-2025</td>
          <td>01/15/25</td>
          <td>01/15/26</td>
          <td>$1,000,000 CSL</td>
          <td>${state.coiValidated ? badge('green', 'Match') : badge('gray', 'Pending')}</td>
        </tr>
        <tr style="${state.coiValidated ? 'background:rgba(0,230,118,0.03);' : ''}">
          <td>A</td>
          <td style="font-weight:600;">WORKERS COMPENSATION</td>
          <td style="text-align:center;">N/A</td>
          <td style="text-align:center;">✅</td>
          <td>WC-98321-2025</td>
          <td>06/01/25</td>
          <td>06/01/26</td>
          <td>Statutory / $1M / $1M / $1M</td>
          <td>${state.coiValidated ? badge('green', 'Match') : badge('gray', 'Pending')}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="display:grid; grid-template-columns: 1.5fr 1fr; gap:var(--space-lg); margin-bottom:var(--space-xl);">
    <!-- OP DEETS -->
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-lg); border-radius:var(--radius-lg);">
      <h3 style="font-size:0.75rem; color:var(--text-muted); margin-bottom:var(--space-md); text-transform:uppercase; letter-spacing:1px;">DESCRIPTION OF OPERATIONS / LOCATIONS / VEHICLES</h3>
      <textarea class="form-input" style="width:100%; height:80px; font-size:0.8rem; background:rgba(0,0,0,0.2);" readonly>Project: Trenching at K Street Site. Certificate holder is named as Additional Insured and Waiver of Subrogation is granted on the General Liability policy as required by written contract.</textarea>
    </div>
    <!-- HOLDER -->
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-lg); border-radius:var(--radius-lg);">
      <h3 style="font-size:0.75rem; color:var(--text-muted); margin-bottom:var(--space-md); text-transform:uppercase; letter-spacing:1px;">CERTIFICATE HOLDER</h3>
      <div style="font-size:0.85rem;">
        <div style="font-weight:bold;">City of Sacramento</div>
        <div>Department of Public Works</div>
        <div>1001 I Street, Suite 230</div>
        <div>Sacramento, CA 95814</div>
      </div>
    </div>
  </div>

  <div style="display:flex; justify-content:flex-end; gap:var(--space-sm); align-items:center; padding-top:var(--space-lg); border-top:1px solid var(--border-subtle);">
    ${isValidating ? '<span style="color:var(--text-muted); font-size:0.85rem;">Checking policy endorsements... ⏳</span>' : ''}
    ${isIssuing ? '<span style="color:var(--text-muted); font-size:0.85rem;">Applying digital stamp... 🛡️</span>' : ''}
    
    <button class="btn btn-ghost" onclick="window.handleCoiAction('validate')" ${isValidating || isIssuing || state.coiValidated ? 'disabled' : ''}>
      ${isValidating ? 'Validating...' : 'Validate Coverages'}
    </button>
    
    <button class="btn btn-secondary" onclick="window.setState({screen:'policy-pdf'})" ${isValidating || isIssuing ? 'disabled' : ''}>Preview PDF</button>
    
    <button class="btn btn-secondary" onclick="window.handleCoiAction('email')" ${!state.coiValidated || isValidating || isIssuing ? 'disabled' : ''}>
      📧 Email to Holder
    </button>
    
    <button class="btn btn-primary" onclick="window.handleCoiAction('issue')" ${!state.coiValidated || isValidating || isIssuing ? 'disabled' : ''}>
      ${isIssuing ? 'Processing...' : 'Stamp & Issue COI'}
    </button>
  </div>
  `;
}

function renderCoiValidationSplit() {
  return `
  <div style="margin-bottom: var(--space-md); display:flex; justify-content:space-between; align-items:center;">
    <button class="btn btn-ghost" onclick="setState({coiValidationView: false, coiProcessingStatus: 'idle'})" style="margin-left:-8px;">← Exit Audit Mode</button>
    <div style="font-size:0.9rem; color:var(--text-muted);">COI AUDIT WORKSPACE: <strong>City of Sacramento (Permit #882)</strong></div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-md);">
    
    <!-- LEFT: PROJECT REQUIREMENTS -->
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); display:flex; flex-direction:column; overflow:hidden;">
      <div style="padding:var(--space-md); background:rgba(255,255,255,0.03); border-bottom:1px solid var(--border-subtle); font-weight:600; font-size:0.85rem; letter-spacing:0.5px;">CONTRACT REQUIREMENTS (TARGET)</div>
      <div style="padding:var(--space-lg); overflow-y:auto; flex:1;">
        <div style="display:flex; flex-direction:column; gap:var(--space-lg);">
          
          <div style="padding-bottom:var(--space-md); border-bottom:1px solid var(--border-subtle);">
            <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:8px;">GENERAL LIABILITY</div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>Each Occurrence:</span> <strong>$1,000,000</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>General Aggregate:</span> <strong>$2,000,000</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>AI Endorsement:</span> <strong>Form CG 20 10 Required</strong></div>
          </div>

          <div style="padding-bottom:var(--space-md); border-bottom:1px solid var(--border-subtle);">
            <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:8px;">AUTOMOBILE LIABILITY</div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>Combined Single Limit:</span> <strong>$1,000,000</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>Coverage Period:</span> <strong>Must extend to project end</strong></div>
          </div>

          <div>
            <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:8px;">SPECIAL CONDITIONS</div>
            <div style="padding:var(--space-sm); background:rgba(255,160,0,0.1); border-radius:var(--radius-sm); border-left:3px solid var(--status-amber); font-size:0.8rem;">
              Waiver of Subrogation in favor of the City of Sacramento is required on all policies.
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- RIGHT: CARRIER POLICY DATA -->
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); display:flex; flex-direction:column; overflow:hidden;">
      <div style="padding:var(--space-md); background:rgba(0,230,118,0.05); border-bottom:1px solid var(--status-green); font-weight:600; font-size:0.85rem; letter-spacing:0.5px; color:var(--status-green);">CLIENT POLICY DATA (SOURCE)</div>
      <div style="padding:var(--space-lg); overflow-y:auto; flex:1;">
        <div style="display:flex; flex-direction:column; gap:var(--space-lg);">
          
          <div style="padding-bottom:var(--space-md); border-bottom:1px solid var(--border-subtle); position:relative;">
             <span style="position:absolute; right:0; top:0; color:var(--status-green);">✅ MATCH</span>
            <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:8px;">GL-99324 (SEMC)</div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>Each Occurrence:</span> <strong>$1,000,000</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>General Aggregate:</span> <strong>$2,000,000</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>AI Language:</span> <strong style="color:var(--status-green);">Verified (Blanket AI)</strong></div>
          </div>

          <div style="padding-bottom:var(--space-md); border-bottom:1px solid var(--border-subtle); position:relative;">
             <span style="position:absolute; right:0; top:0; color:var(--status-green);">✅ MATCH</span>
            <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:8px;">CA-11223 (TRAVELERS)</div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>Combined Single Limit:</span> <strong>$1,000,000</strong></div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>Exp Date:</span> <strong>01/15/26</strong></div>
          </div>

          <div style="position:relative;">
             <span style="position:absolute; right:0; top:0; color:var(--status-amber);">⚠️ REVIEWED</span>
            <div style="color:var(--text-muted); font-size:0.75rem; margin-bottom:8px;">WC-98321</div>
            <div style="font-size:0.8rem;">WOS Endorsement: <strong style="color:var(--status-green);">Attached via Blanket Waiver</strong></div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div style="display:flex; justify-content:center; align-items:center; gap:var(--space-md); margin-top:var(--space-xl);">
    <button class="btn btn-secondary" onclick="window.setState({coiValidationView: false, coiProcessingStatus: 'idle'})">Go Back & Edit Form</button>
    <button class="btn btn-primary" style="padding: 12px 32px; font-weight:700;" onclick="window.handleCoiAction('confirmMatches')">Confirm & Verify Coverages →</button>
  </div>
  `;
}

function renderCoiPdfPreview() {
  return `
  <div class="document-backdrop">
    <div class="document-toolbar">
      <div style="display:flex; align-items:center; gap:var(--space-md);">
        <span style="font-size:1.5rem;">📄</span>
        <div>
          <div style="font-weight:700; font-size:1.1rem;">ACORD 25 (2016/03) - PREVIEW</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Magnolia_COI_CitySac_C102.pdf</div>
        </div>
      </div>
      <div style="display:flex; gap:var(--space-sm);">
        <button class="btn btn-ghost" onclick="window.setState({screen: 'coi-workbench'})">Close</button>
        <button class="btn btn-secondary" onclick="window.showAlert('Downloading high-res PDF...')">Download</button>
        <button class="btn btn-primary" onclick="window.showCoiEmailModal()">Email / Send</button>
      </div>
    </div>

    <div class="document-paper">
      <!-- ACORD HEADER -->
      <div style="display:flex; border-bottom:1px solid #000; padding-bottom:10px; margin-bottom:20px;">
        <div style="flex:1; font-weight:900; font-size:1.5rem;">ACORD</div>
        <div style="flex:3; border-left:1px solid #000; padding-left:10px;">
          <h2 style="font-size:1.4rem; font-weight:800; margin:0; color:#000;">CERTIFICATE OF LIABILITY INSURANCE</h2>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0; border:1px solid #000; margin-bottom:20px;">
        <div style="border-right:1px solid #000; padding:10px;">
           <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px;">PRODUCER</div>
           <div style="font-size:0.85rem;">AlphaBrokers LLC<br>1200 Market St, Suite 400<br>San Francisco, CA 94103</div>
        </div>
        <div style="padding:10px; background:#f5f5f5;">
           <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px;">CONTACT NAME:</div>
           <div style="font-size:0.85rem;">Sarah Mitchell<br>PHONE: (415) 555-0122<br>EMAIL: s.mitchell@alphabrokers.com</div>
        </div>
      </div>

      <div style="border:1px solid #000; padding:10px; margin-bottom:20px;">
         <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px;">INSURED</div>
         <div style="font-size:0.85rem;">Magnolia Construction LLC<br>1201 Industrial Blvd<br>Sacramento, CA 95814</div>
      </div>

      <!-- INSURERS -->
      <div style="border:1px solid #000; margin-bottom:20px;">
        <div style="background:#eee; padding:5px; font-size:0.7rem; font-weight:bold; border-bottom:1px solid #000;">INSURERS AFFORDING COVERAGE</div>
        <div style="padding:10px; display:grid; grid-template-columns: 100px 1fr 80px; gap:10px; font-size:0.8rem;">
          <span>INSURER A:</span> <strong>SEMC Insurance Group</strong> <span>NAIC #: 20443</span>
          <span>INSURER B:</span> <strong>Liberty Mutual</strong> <span>NAIC #: 23043</span>
          <span>INSURER C:</span> <strong>Travelers CAS CO</strong> <span>NAIC #: 19038</span>
        </div>
      </div>

      <!-- COVERAGES -->
      <div style="border:1px solid #000; margin-bottom:20px;">
         <div style="background:#eee; padding:5px; font-size:0.7rem; font-weight:bold; border-bottom:1px solid #000;">COVERAGES</div>
         <div style="padding:5px; font-size:0.65rem; border-bottom:1px solid #000;">THIS IS TO CERTIFY THAT THE POLICIES OF INSURANCE LISTED BELOW HAVE BEEN ISSUED TO THE INSURED NAMED ABOVE...</div>
         <table style="width:100%; border-collapse:collapse; font-size:0.75rem;">
           <thead style="background:#f9f9f9; border-bottom:1px solid #000;">
             <tr>
               <th style="padding:5px; text-align:left; border-right:1px solid #000;">INSR</th>
               <th style="padding:5px; text-align:left; border-right:1px solid #000;">TYPE OF INSURANCE</th>
               <th style="padding:5px; text-align:left; border-right:1px solid #000;">POLICY NUMBER</th>
               <th style="padding:5px; text-align:left; border-right:1px solid #000;">EFF / EXP</th>
               <th style="padding:5px; text-align:left;">LIMITS</th>
             </tr>
           </thead>
           <tbody>
             <tr style="border-bottom:1px solid #000;">
               <td style="padding:5px; border-right:1px solid #000;">A</td>
               <td style="padding:5px; border-right:1px solid #000;">Gen Liab (Occur)</td>
               <td style="padding:5px; border-right:1px solid #000;">GL-99324-2025</td>
               <td style="padding:5px; border-right:1px solid #000;">06/01/25 - 06/01/26</td>
               <td style="padding:5px;">$1M Occ / $2M Agg</td>
             </tr>
             <tr style="border-bottom:1px solid #000;">
               <td style="padding:5px; border-right:1px solid #000;">B</td>
               <td style="padding:5px; border-right:1px solid #000;">Auto Liab</td>
               <td style="padding:5px; border-right:1px solid #000;">CA-11223-2025</td>
               <td style="padding:5px; border-right:1px solid #000;">01/15/25 - 01/15/26</td>
               <td style="padding:5px;">$1M CSL</td>
             </tr>
           </tbody>
         </table>
      </div>

      <!-- OPS -->
      <div style="border:1px solid #000; margin-bottom:20px;">
        <div style="background:#eee; padding:5px; font-size:0.7rem; font-weight:bold; border-bottom:1px solid #000;">DESCRIPTION OF OPERATIONS / LOCATIONS / VEHICLES</div>
        <div style="padding:10px; font-size:0.8rem; min-height:80px;">Project: Trenching at K Street Site. City of Sacramento is named as Additional Insured on the General Liability policy per Form CG 20 10.</div>
      </div>

      <!-- HOLDER -->
      <div style="display:grid; grid-template-columns: 1.5fr 1fr; border-top:1px solid #000;">
        <div style="border-right:1px solid #000; padding:10px;">
          <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px;">CERTIFICATE HOLDER</div>
          <div style="font-size:0.85rem;">City of Sacramento<br>Dept of Public Works<br>1001 I Street<br>Sacramento, CA 95814</div>
        </div>
        <div style="padding:10px;">
          <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px;">CANCELLATION</div>
          <div style="font-size:0.65rem;">SHOULD ANY OF THE ABOVE DESCRIBED POLICIES BE CANCELLED BEFORE THE EXPIRATION DATE THEREOF, NOTICE WILL BE DELIVERED IN ACCORDANCE WITH THE POLICY PROVISIONS.</div>
          <div style="margin-top:20px; font-weight:bold; font-family: 'Brush Script MT', cursive; font-size:1.5rem;">Sarah Mitchell</div>
        </div>
      </div>

      <!-- [FINAL STAMP] -->
      <div id="certified-stamp" class="certified-stamp ${state.coiIsIssued ? 'active' : ''}">ISSUED</div>
    </div>
  </div>`;
}

window.showCoiEmailModal = function() {
  showModal(
    'Email Certificate to Holder',
    `<div style="display:flex; flex-direction:column; gap:var(--space-md);">
      <div style="font-size:0.9rem; color:var(--text-secondary);">Recipients will receive a secure link to download the high-res PDF.</div>
      <div class="form-group">
        <label>To:</label>
        <input type="text" class="form-input" value="permit@sactown.gov" style="width:100%;">
      </div>
      <div class="form-group">
        <label>Subject:</label>
        <input type="text" class="form-input" value="Certificate of Insurance: Magnolia Construction - Project #C-102" style="width:100%;">
      </div>
      <div style="padding:var(--space-md); border:1px solid var(--border-subtle); background:rgba(255,255,255,0.03); border-radius:var(--radius-sm); display:flex; align-items:center; gap:var(--space-md);">
        <span style="font-size:1.5rem;">📄</span>
        <div>
          <div style="font-weight:600; font-size:0.85rem;">Magnolia_COI_CitySac_C102.pdf</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">248 KB · Auto-Generated Attachment</div>
        </div>
      </div>
    </div>`,
    'Send Email →',
    () => {
      showAlert('COI successfully dispatched to permit@sactown.gov');
    }
  );
};

// --- SHARED EMAIL MODAL ---
window.showClientEmailModal = function(context = 'this document') {
  showModal(
    `Email ${context.charAt(0).toUpperCase() + context.slice(1)} to Client`,
    `<div style="display:flex; flex-direction:column; gap:var(--space-md);">
      <div style="font-size:0.9rem; color:var(--text-secondary);">Send a secure link for the client to review and approve ${context}.</div>
      <div class="form-group">
        <label>To:</label>
        <input type="text" class="form-input" value="robert@magnoliaconstruction.com" style="width:100%;">
      </div>
      <div class="form-group">
        <label>Subject:</label>
        <input type="text" class="form-input" value="REQUIRED REVIEW: ${context.toUpperCase()} — Magnolia Construction" style="width:100%;">
      </div>
      <div style="padding:var(--space-md); border:1px solid var(--border-subtle); background:rgba(255,255,255,0.03); border-radius:var(--radius-sm); display:flex; align-items:center; gap:var(--space-sm);">
        <span style="font-size:1.5rem;">✉️</span>
        <div>
          <div style="font-weight:600; font-size:0.85rem;">Secure_Link_Access_Portal.lnk</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Client will authenticate via OTP to view documents.</div>
        </div>
      </div>
    </div>`,
    'Dispatch to Client →',
    () => {
      showAlert(`Notification and ${context} link sent to Robert Nguyen.`);
    }
  );
};

// --- PROPOSAL GENERATOR (HIGH FIDELITY) ---
function renderProposalGenerator() {
  return `
  <div class="document-backdrop">
    <div class="document-toolbar">
      <div style="display:flex; align-items:center; gap:var(--space-md);">
        <span style="font-size:1.5rem;">📂</span>
        <div>
          <div style="font-weight:700; font-size:1.1rem;">INSURANCE PROPOSAL — DRAFT v2</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Magnolia_Proposal_WC_GL_UMB_2026.pdf</div>
        </div>
      </div>
      <div style="display:flex; gap:var(--space-sm);">
        <button class="btn btn-ghost" onclick="window.setState({screen: 'quote-details'})">Close Editor</button>
        <button class="btn btn-secondary" onclick="window.showAlert('Proposal updated with current selections.')">Save Draft</button>
        <button class="btn btn-primary" onclick="window.showClientEmailModal('Insurance Proposal')">Send for Approval</button>
      </div>
    </div>

    <div class="document-paper">
      <div style="text-align:center; border-bottom:2px solid var(--border-subtle); padding-bottom:20px; margin-bottom:40px;">
        <h1 style="color:#000; font-size:2rem; margin-bottom:10px;">PROPOSAL OF INSURANCE</h1>
        <div style="font-size:1rem; color:#666;">Prepared for: <strong>Magnolia Construction LLC</strong></div>
        <div style="font-size:1rem; color:#666;">Presented by: <strong>Sarah Mitchell, AlphaBrokers LLC</strong></div>
        <div style="font-size:0.9rem; margin-top:10px;">Date Generated: ${new Date().toLocaleDateString()}</div>
      </div>

      <div style="margin-bottom:30px;">
        <div style="background:#eee; padding:10px; font-weight:bold; border-left:5px solid var(--mga-accent); margin-bottom:15px;">EXECUTIVE SUMMARY</div>
        <p style="font-size:0.9rem; line-height:1.5; color:#333;">This proposal outlines the renewed coverage options for the 2026-2027 policy period. Based on our market analysis, we have secured highly competitive terms with SEMC and Travelers, achieving a 5.6% total cost reduction compared to the previous year while increasing Umbrella limits to $5,000,000.</p>
      </div>

      <div style="margin-bottom:30px;">
        <div style="background:#eee; padding:10px; font-weight:bold; border-left:5px solid var(--mga-accent); margin-bottom:15px;">COVERAGE OPTIONS & PREMIUMS</div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
          <thead style="background:#f9f9f9; border-bottom:2px solid #000;">
            <tr>
              <th style="padding:10px; text-align:left;">Line of Business</th>
              <th style="padding:10px; text-align:left;">Carrier</th>
              <th style="padding:10px; text-align:right;">Proposed Premium</th>
              <th style="padding:10px; text-align:center;">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #ddd;">
              <td style="padding:10px;"><strong>Workers Compensation</strong></td>
              <td style="padding:10px;">SEMC</td>
              <td style="padding:10px; text-align:right;">$147,200</td>
              <td style="padding:10px; text-align:center;"><span style="color:var(--status-green);">✅ Included</span></td>
            </tr>
            <tr style="border-bottom:1px solid #ddd;">
              <td style="padding:10px;"><strong>General Liability</strong></td>
              <td style="padding:10px;">SEMC</td>
              <td style="padding:10px; text-align:right;">$31,500</td>
              <td style="padding:10px; text-align:center;"><span style="color:var(--status-green);">✅ Included</span></td>
            </tr>
            <tr style="border-bottom:1px solid #ddd;">
              <td style="padding:10px;"><strong>Umbrella ($5M)</strong></td>
              <td style="padding:10px;">SEMC</td>
              <td style="padding:10px; text-align:right;">$6,000</td>
              <td style="padding:10px; text-align:center;"><span style="color:var(--status-green);">✅ Included</span></td>
            </tr>
            <tr style="border-bottom:1px solid #ddd; background:rgba(255,160,0,0.05);">
              <td style="padding:10px;"><strong>Cyber Liability (OPTIONAL)</strong></td>
              <td style="padding:10px;">CFC / Hartford</td>
              <td style="padding:10px; text-align:right;">$12,500</td>
              <td style="padding:10px; text-align:center;"><button class="btn btn-primary btn-sm" style="padding:2px 10px;">+ Add to Pkg</button></td>
            </tr>
          </tbody>
          <tfoot style="background:#eee; font-weight:bold;">
            <tr>
              <td colspan="2" style="padding:10px; text-align:right;">TOTAL PROPOSED INVESTMENT:</td>
              <td style="padding:10px; text-align:right; font-size:1.1rem;">$184,700</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div style="font-size:0.75rem; color:#888; border-top:1px solid #ddd; padding-top:20px; margin-top:40px;">
        CONFIDENTIAL PROPOSAL: This document is for informational purposes and does not bind coverage. Final premium subject to audit and carrier approval.
      </div>
    </div>
  </div>`;
}

function renderPolicyPdfPreview() {
  return `
  <div class="document-backdrop">
    <div class="document-toolbar">
      <div style="display:flex; align-items:center; gap:var(--space-md);">
        <span style="font-size:1.5rem;">📜</span>
        <div>
          <div style="font-weight:700; font-size:1.1rem;">POLICY DOCUMENT — SEMC-WC-48821</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Dec_Page_Magnolia_WC_2026.pdf</div>
        </div>
      </div>
      <div style="display:flex; gap:var(--space-sm);">
        <button class="btn btn-ghost" onclick="window.setState({screen: 'policy-details'})">Close</button>
        <button class="btn btn-secondary" onclick="window.showAlert('Full Policy Packet downloaded.')">Download Full Packet</button>
        <button class="btn btn-primary" onclick="window.showClientEmailModal('Policy Documents')">Email to Insured</button>
      </div>
    </div>

    <div class="document-paper">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:40px; border-bottom:2px solid #000; padding-bottom:20px;">
        <div style="font-size:2rem; font-weight:900; color:#003366;">SEMC</div>
        <div style="text-align:right;">
          <h2 style="font-size:1.2rem; font-weight:800; color:#000; margin:0;">COMMON POLICY DECLARATIONS</h2>
          <div style="font-size:0.8rem; color:#444;">Policy Number: <strong>SEMC-WC-48821-00</strong></div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-bottom:30px;">
        <div style="border:1px solid #000; padding:15px;">
           <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px; text-transform:uppercase;">Named Insured and Address</div>
           <div style="font-size:0.9rem;">Magnolia Construction LLC<br>1201 Industrial Blvd<br>Sacramento, CA 95814</div>
        </div>
        <div style="border:1px solid #000; padding:15px;">
           <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px; text-transform:uppercase;">Policy Period</div>
           <div style="font-size:0.9rem;">From: <strong>06/01/2026</strong><br>To: <strong>06/01/2027</strong><br><span style="font-size:0.7rem; color:#666;">12:01 AM Standard Time at your mailing address.</span></div>
        </div>
      </div>

      <div style="border:1px solid #000; margin-bottom:30px;">
        <div style="background:#eee; padding:8px; font-weight:bold; font-size:0.8rem; border-bottom:1px solid #000;">SCHEDULE OF COVERAGES AND PREMIUMS</div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
          <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:10px;">Workers Compensation (Part One)</td>
            <td style="padding:10px; text-align:right;">Statutory Limits</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:10px;">Employers Liability (Part Two)</td>
            <td style="padding:10px; text-align:right;">$1,000,000 / $1,000,000 / $1,000,000</td>
          </tr>
          <tr style="background:#f9f9f9; font-weight:bold;">
            <td style="padding:10px;">TOTAL ESTIMATED ANNUAL PREMIUM</td>
            <td style="padding:10px; text-align:right;">$147,200</td>
          </tr>
        </table>
      </div>

      <div style="border:1px solid #000; padding:15px; margin-bottom:30px;">
        <div style="font-size:0.7rem; font-weight:bold; margin-bottom:5px; text-transform:uppercase;">Endorsements Attached at Issue</div>
        <div style="font-size:0.75rem; display:grid; grid-template-columns: 1fr 1fr; gap:5px;">
          <div>WC 00 00 00 (A) - Standard Policy</div>
          <div>WC 04 03 01 - Calif. Relation of Exp.</div>
          <div>WC 00 03 13 - Waiver of Subrogation</div>
          <div>WC 89 06 01 - Workers Comp. Calif.</div>
        </div>
      </div>

      <div style="margin-top:50px; border-top:1px solid #000; padding-top:20px; font-size:0.8rem; text-align:center; color:#555;">
        IN WITNESS WHEREOF, the Company has caused this policy to be signed by its President and Secretary.
      </div>
    </div>
  </div>`;
}



// COI Interaction Handlers
window.handleCoiAction = function(action) {
  if (action === 'validate') {
    setState({ coiProcessingStatus: 'validating' });
    setTimeout(() => {
      setState({ coiProcessingStatus: 'idle', coiValidationView: true });
    }, 1200);
  } else if (action === 'confirmMatches') {
    setState({ coiValidationView: false, coiValidated: true, coiProcessingStatus: 'idle' });
    showAlert('Coverage match successfully verified against contract.');
  } else if (action === 'issue') {
    setState({ coiProcessingStatus: 'issuing' });
    setTimeout(() => {
      setState({ coiProcessingStatus: 'complete', coiIsIssued: true });
      // Trigger stamping animation
      setTimeout(() => {
        const stamp = document.getElementById('certified-stamp');
        if (stamp) stamp.classList.add('active');
      }, 100);
    }, 2000);
  } else if (action === 'email') {
    window.showCoiEmailModal();
  }
};

function renderBrokerClientTabLossRuns() {
  return `
  <div style="display:flex; gap:var(--space-md); margin-bottom:var(--space-lg);">
    <div style="flex:1; background:var(--bg-secondary); border:1px solid var(--border-subtle); padding:var(--space-md); border-radius:var(--radius-md);">5-Yr Summary: Total Claims: <strong>8</strong> | Paid: <strong style="color:var(--status-red);">$42k</strong> | Reserved: <strong>$12k</strong></div>
  </div>
  <div class="data-table-wrapper" style="animation: fadeIn var(--transition-fast);">
    <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-md); align-items:center;">
      <input class="form-input" placeholder="Search Claims..." style="width:250px;"/>
      <button class="btn btn-primary" onclick="window.setState({screen: 'policy-loss-runs'})">Order Loss Runs</button>
    </div>
    <table class="data-table">
      <thead><tr><th>Claim #</th><th>DOL</th><th>Line</th><th>Paid</th><th>Reserve</th><th>Incurred</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        <tr><td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">CLM-2026-0042</strong></td><td>04/15/26</td><td>WC</td><td>$2,500</td><td>$45,000</td><td>$47,500</td><td>${badge('amber','Under Investigation')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">Open</button></td></tr>
        <tr><td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">CLM-2026-0038</strong></td><td>01/12/26</td><td>WC</td><td>$8,200</td><td>$0</td><td>$8,200</td><td>${badge('green','Closed')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">Open</button></td></tr>
        <tr><td>CL-0008B</td><td>11/02/25</td><td>GL</td><td>$18,000</td><td>$12,000</td><td>$30,000</td><td>${badge('red','Open')}</td><td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'claim-details', claimTab:'overview'})">Open</button></td></tr>
      </tbody>
    </table>
  </div>`;
}



// ─── Broker Wizard ───
function wizardStepper() {
  const steps = ['Client', 'Docs', 'Extract', 'Route', 'Quote', 'Bind'];
  return `
  <div class="stepper">
    ${steps.map((s, i) => {
      const num = i + 1;
      const cls = num < state.wizardStep ? 'completed' : num === state.wizardStep ? 'active' : '';
      const lineCls = num < state.wizardStep ? 'completed' : '';
      return `
        <div class="stepper-step ${cls}" data-step="${num}">
          <div class="stepper-dot">${num < state.wizardStep ? '✓' : num}</div>
          <span>${num}. ${s}</span>
        </div>
        ${num < steps.length ? `<div class="stepper-line ${lineCls}"></div>` : ''}`;
    }).join('')}
  </div>`;
}

function renderBrokerWizard() {
  const stepContent = [null, renderWizardStep1, renderWizardStep2, renderWizardStep3, renderWizardStep4, renderWizardStep5, renderWizardStep6];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" id="btn-back-broker">← Back</button>
    <span style="margin-left: var(--space-sm); font-weight: 600;">New Submission — Magnolia Construction</span>
  </div>
  <div class="data-table-wrapper">
    ${wizardStepper()}
    <div style="padding: var(--space-xl);">
      ${stepContent[state.wizardStep]()}
    </div>
    <div class="form-footer">
      ${state.wizardStep > 1 ? '<button class="btn btn-secondary" id="btn-prev-step">← Back</button>' : '<button class="btn btn-secondary" id="btn-save-draft">Save Draft</button>'}
      ${state.wizardStep < 6 ? `<button class="btn btn-primary" id="btn-next-step">${['', 'Next: Upload Docs →', 'Start AI Extraction →', 'Route to Market →', 'Send to Market →', 'Proceed to Bind →'][state.wizardStep]}</button>` : '<button class="btn btn-primary" id="btn-bind-now">🔒 Bind Coverage Now</button>'}
    </div>
  </div>`;
}

function renderWizardStep1() {
  return `
  <h3 style="margin-bottom: var(--space-lg);">STEP 1 — CLIENT INFORMATION</h3>
  <div class="form-row">
    <div class="form-group">
      <div class="form-label">Legal Business Name</div>
      <input class="form-input" value="Magnolia Construction LLC" />
    </div>
    <div class="form-group">
      <div class="form-label">FEIN / Tax ID</div>
      <input class="form-input" value="XX-XXXXXXX" />
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <div class="form-label">NAICS Code</div>
      <input class="form-input" value="238990 — Specialty Trade Contractors" />
    </div>
    <div class="form-group">
      <div class="form-label">SIC Code</div>
      <input class="form-input" value="1731 — Electrical Work" />
    </div>
  </div>
  <div class="form-group">
    <div class="form-label">Primary Address</div>
    <input class="form-input" value="1200 Commerce Dr, Fresno CA 93727" />
  </div>
  <div class="form-group">
    <div class="form-label">States of Operation</div>
    <div class="check-group">
      <span class="check-pill active">✅ CA</span>
      <span class="check-pill active">✅ TX</span>
      <span class="check-pill active">✅ NC</span>
      <span class="check-pill">+ Add State</span>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <div class="form-label">Years in Business</div>
      <input class="form-input" value="14" />
    </div>
    <div class="form-group">
      <div class="form-label">Annual Revenue</div>
      <input class="form-input" value="$4,200,000" />
    </div>
  </div>
  <div class="form-group">
    <div class="form-label">Lines of Business Required</div>
    <div class="check-group">
      <span class="check-pill active">✅ Workers Comp</span>
      <span class="check-pill active">✅ General Liability</span>
      <span class="check-pill">☐ BOP</span>
      <span class="check-pill">☐ Cyber</span>
      <span class="check-pill active">✅ Umbrella</span>
      <span class="check-pill">☐ Management Lines</span>
    </div>
  </div>`;
}

function renderWizardStep2() {
  return `
  <h3 style="margin-bottom: var(--space-sm);">STEP 2 — DOCUMENT UPLOAD</h3>
  <p style="color: var(--text-secondary); margin-bottom: var(--space-lg); font-size: 0.85rem;">No templates, no reformatting. Drop any unstructured files.</p>
  <div class="upload-zone">
    <div class="upload-zone-icon">⬆️</div>
    <div class="upload-zone-text">Drag & Drop Files Here</div>
    <div class="upload-zone-formats">[PDF] [XLSX/XLS] [CSV] [Loss Runs] [Prior Policies]</div>
    <div style="margin-top: var(--space-md);"><button class="btn btn-secondary">Browse Files</button></div>
  </div>
  <div class="section-title">QUEUED FILES</div>
  ${D.uploadedFiles.map(f => `
    <div class="file-item">
      <span>${f.icon}</span>
      <span class="file-item-name">${f.name}</span>
      <span class="file-item-size">${f.size}</span>
      ${badge('green', '✅ READY')}
    </div>
  `).join('')}
  <p style="margin-top: var(--space-md); font-size: 0.82rem; color: var(--text-secondary);">4 files · 11.7 MB total · All ready</p>`;
}

function renderWizardStep3() {
  return `
  <div style="display:flex; align-items:center; gap: var(--space-md); margin-bottom: var(--space-lg);">
    ${badge('green', '✅ AI Extraction Complete')}
    <span style="color:var(--text-secondary); font-size:0.82rem;">12 fields extracted · Avg: 96.9% conf</span>
  </div>
  <div class="two-col">
    <div>
      <div class="section-title">EXTRACTED FIELDS</div>
      ${D.extractedFields.map(f => `
        <div class="confidence-field">
          <div>
            <div class="confidence-label">${f.label}</div>
            <div class="confidence-value">${f.value}</div>
          </div>
          <span class="confidence-score confidence-${f.level}">${f.level === 'green' ? '🟢' : '🟡'} ${f.confidence}%</span>
        </div>
      `).join('')}
      <div style="margin-top: var(--space-md); font-size: 0.75rem; color: var(--text-muted);">
        🟢 Green ≥95%&nbsp;&nbsp;&nbsp;🟡 Amber 88–94%&nbsp;&nbsp;&nbsp;🔴 Red <88% — mandatory review
      </div>
    </div>
    <div>
      <div class="section-title">LOSS RUN SUMMARY</div>
      <div class="data-table-wrapper" style="margin-bottom: var(--space-lg);">
        <table class="data-table">
          <thead><tr><th>Year</th><th>Carrier</th><th>Ratio</th></tr></thead>
          <tbody>
            ${D.lossRunSummary.map(l => `
            <tr>
              <td>${l.year}</td><td>${l.carrier}</td>
              <td>${badge(l.level, l.ratio)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="alert-banner alert-amber">⚠️ 2022 was an aberration. Trend: Strong downward</div>
      <div class="section-title" style="margin-top: var(--space-lg);">EQUIPMENT SCHEDULE</div>
      <div class="detail-panel">
        <p style="font-size:0.85rem;">Items extracted: <strong>847</strong></p>
        <p style="font-size:0.85rem;">Total value: <strong>$4.2M</strong></p>
        <button class="btn btn-secondary btn-sm" style="margin-top: var(--space-sm);">View Full Schedule</button>
      </div>
    </div>
  </div>
  <p style="margin-top: var(--space-lg); font-size: 0.82rem; color: var(--status-green);">0 fields require mandatory review</p>`;
}

function renderWizardStep4() {
  return `
  <div style="margin-bottom: var(--space-lg); font-size: 0.85rem; color: var(--text-secondary);">
    NAICS: <strong>238990</strong> · Lines: <strong>WC + GL + Umbrella</strong> · States: <strong>CA, TX, NC</strong><br/>
    🛡️ 50-State Compliant via Singlepoint Licensing
  </div>
  <div class="section-title">RECOMMENDED CARRIERS (via SEMC)</div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Line</th><th>Method</th><th>Select</th></tr></thead>
      <tbody>
        ${D.carriers.map((c, i) => `
        <tr>
          <td>${c.name}</td><td>${c.line}</td>
          <td>${c.method === 'API' ? '<span class="conn-badge conn-direct">🔵 API</span>' : '<span class="conn-badge conn-semc">🔵 SEMC</span>'}</td>
          <td>${c.selected
            ? `<button class="btn btn-success btn-sm carrier-toggle" data-idx="${i}">✅ Selected</button>`
            : `<button class="btn btn-secondary btn-sm carrier-toggle" data-idx="${i}">☐ Add</button>`}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: var(--space-lg);">
    ${D.carriers.filter(c => c.selected).length} carriers selected · Simultaneous submission via SEMC API
  </p>
  <div class="section-title">STATUS (after send)</div>
  ${D.carrierStatuses.map(cs => `
    <div class="file-item">
      <span style="font-weight:600;">${cs.name}</span>
      <span class="file-item-name" style="color:var(--text-secondary);">${badge('green', '✅ Sent')} · ${cs.status}</span>
    </div>
  `).join('')}`;
}

function renderWizardStep5() {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div style="font-size: 0.85rem; color: var(--text-secondary);">Expiring Premium: <strong style="color:var(--text-primary);">$185,000</strong></div>
    <div style="font-size: 0.85rem; color: var(--text-secondary);">62 mins since submission</div>
  </div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>WC</th><th>GL</th><th>Umbrella</th><th>Total</th><th>Action</th></tr></thead>
      <tbody>
        ${D.quoteComparison.map(q => `
        <tr style="${q.best ? 'background: rgba(0,230,118,0.04);' : ''}">
          <td>
            ${q.best ? '<span class="best-marker">⭐ </span>' : ''}${q.carrier}
            <div style="font-size:0.7rem; color:var(--text-muted);">AM Best: ${q.rating}${q.time ? ' · '+q.time : ''}${q.partial ? ' · '+q.partial : ''}</div>
          </td>
          <td>${q.wc}</td><td>${q.gl}</td><td>${q.umbrella}</td>
          <td>
            <strong>${q.total}</strong>
            ${q.best ? '<div style="font-size:0.7rem; color:var(--status-green);">🟢 BEST · '+q.savings+'</div>' : ''}
          </td>
          <td>
            <button class="btn btn-primary btn-sm">Bind</button>
            <button class="btn btn-secondary btn-sm" style="margin-left:4px;">Prop</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-size:0.82rem; color: var(--status-green);">Client savings vs expiring: $300</span>
    <button class="btn btn-secondary">Generate Client Proposal PDF</button>
  </div>`;
}

function renderWizardStep6() {
  return `
  <h3 style="margin-bottom: var(--space-lg);">Bind Coverage — SEMC · Magnolia Construction</h3>
  <div class="stepper" style="border-bottom: none; padding: 0; margin-bottom: var(--space-lg);">
    ${['Client','Docs','Extract','Route','Quote','Bind'].map((s,i) => `
      <div class="stepper-step completed"><div class="stepper-dot">✓</div><span>${i+1}. ${s}</span></div>
      ${i < 5 ? '<div class="stepper-line completed"></div>' : ''}
    `).join('')}
  </div>
  <div class="two-col">
    <div>
      <div class="section-title">PRE-FILLED (from AI)</div>
      <div class="confidence-field"><div><div class="confidence-label">Named Insured</div><div class="confidence-value">Magnolia Constr LLC</div></div><span class="confidence-score confidence-green">✅</span></div>
      <div class="confidence-field"><div><div class="confidence-label">Effective Date</div><div class="confidence-value">June 1, 2026</div></div><span class="confidence-score confidence-green">✅</span></div>
      <div class="confidence-field"><div><div class="confidence-label">WC Premium</div><div class="confidence-value">$147,200</div></div><span class="confidence-score confidence-green">✅</span></div>
      <div class="confidence-field"><div><div class="confidence-label">GL Premium</div><div class="confidence-value">$31,500</div></div><span class="confidence-score confidence-green">✅</span></div>
      <div class="confidence-field"><div><div class="confidence-label">Total Premium</div><div class="confidence-value">$184,700</div></div><span class="confidence-score confidence-green">✅</span></div>
      <div class="confidence-field"><div><div class="confidence-label">States Covered</div><div class="confidence-value">CA, TX, NC</div></div><span class="confidence-score confidence-green">✅</span></div>
      <div class="confidence-field"><div><div class="confidence-label">50-State Compliant</div><div class="confidence-value">Yes</div></div><span class="confidence-score confidence-green">✅</span></div>
    </div>
    <div>
      <div class="section-title">NEEDS INPUT</div>
      <div class="form-group">
        <div class="form-label">Primary Contact Phone — Required</div>
        <input class="form-input" placeholder="Enter phone number" />
      </div>
      <div class="form-group">
        <div class="form-label">Payment Plan</div>
        <div class="radio-group">
          <span class="radio-pill active">◉ Monthly</span>
          <span class="radio-pill">○ Quarterly</span>
          <span class="radio-pill">○ Annual</span>
        </div>
      </div>
      <div style="margin-top: var(--space-lg);">
        ${badge('green', '✅ All other fields complete')}
      </div>
    </div>
  </div>
  <div class="binding-confirmation" id="binding-result" style="display:none;">
    <h3>━━━━ BINDING CONFIRMATION ━━━━</h3>
    <p style="margin-top: var(--space-md); font-size: 0.9rem;">✅ Policy #: <strong>SEMC-WC-2025-48821</strong> &nbsp; Effective: Jun 1 2026</p>
    <p style="font-size: 0.9rem;">Total: <strong>$184,700</strong> &nbsp; States: CA, TX, NC &nbsp; 50-State: ✅</p>
    <div style="margin-top: var(--space-lg); display: flex; gap: var(--space-md); justify-content: center;">
      <button class="btn btn-primary">Download Binder PDF</button>
      <button class="btn btn-secondary">Request Commission →</button>
    </div>
  </div>`;
}

function renderBrokerCommissions() {
  const filters = state.commFilters || {};
  let rows = D.commissionLedger;
  if (filters.status && filters.status !== 'All') rows = rows.filter(c => c.status === filters.status);
  if (filters.type && filters.type !== 'All') rows = rows.filter(c => c.txType === filters.type);
  if (filters.carrier && filters.carrier !== 'All') rows = rows.filter(c => c.carrier.includes(filters.carrier));
  if (filters.producer && filters.producer !== 'All') rows = rows.filter(c => c.producer === filters.producer);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(c => (c.id + ' ' + c.policy + ' ' + c.client + ' ' + c.carrier).toLowerCase().includes(q));
  }

  const carriers = [...new Set(D.commissionLedger.map(c => c.carrier.split('/')[0].trim()))];
  const stats = D.commissionAnalytics.reconciliation_stats;

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Commission Management</h2>
    <div style="display:flex; gap:var(--space-sm); flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-recon'})">🔄 Reconciliation</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-exception'})">⚠ Exceptions</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-producer'})">👤 Producer View</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-statements'})">📥 Statements</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-payout-approval'})">💸 Payouts</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-schedules'})">📋 Schedules</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-reports'})">📊 Reports</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'commission-1099'})">📄 1099</button>
      <button class="btn btn-primary" onclick="window.showAlert('Manual commission entry form launched')">+ Manual Entry</button>
    </div>
  </div>

  ${kpiCards(D.commissionKPIs, 6)}

  <!-- Alerts Strip -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-md); margin-top: var(--space-lg); display:flex; flex-direction:column; gap:8px;">
    ${D.commissionAlerts.map(a => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle); font-size:0.9rem;">
      <div style="display:flex; gap:var(--space-sm); align-items:center;"><span style="color:var(--status-${a.type});">●</span> ${a.text}</div>
      <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'${a.screen}'})">${a.action} →</button>
    </div>`).join('')}
  </div>

  <!-- Reconciliation Progress + Receivable Aging -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RECONCILIATION STATUS</div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-md);">
        <div>
          <div style="font-size:2.4rem; font-weight:700; color:${stats.auto_match_rate >= stats.target ? 'var(--status-green)' : 'var(--status-amber)'};">${stats.auto_match_rate}%</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Auto-match rate · Target ${stats.target}%</div>
        </div>
        <div style="text-align:right;">
          <div><strong style="color:var(--status-red);">${stats.exceptions_open}</strong> open exceptions</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">Avg resolve: ${stats.avg_resolve_days}d · Close target ${stats.monthly_close_target}</div>
        </div>
      </div>
      <div style="background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden;"><div style="height:100%; width:${stats.auto_match_rate}%; background:${stats.auto_match_rate >= stats.target ? 'var(--status-green)' : 'var(--status-amber)'};"></div></div>
      <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.setState({screen:'commission-recon'})">Open Reconciliation Center →</button>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RECEIVABLE AGING</div>
      ${D.commissionAnalytics.receivable_aging.map(r => `
      <div style="margin-bottom: var(--space-sm);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:2px;">
          <span style="color:var(--text-muted);">${r.range}</span>
          <strong style="color:${r.range==='90+ days'?'var(--status-red)':r.range==='61–90 days'?'var(--status-amber)':'var(--text-primary)'};">$${(r.amount/1000).toFixed(1)}k</strong>
        </div>
        <div style="background:var(--bg-card); height:6px; border-radius:3px; overflow:hidden;"><div style="height:100%; width:${r.pct*1.5}%; background:${r.range==='90+ days'?'var(--status-red)':r.range==='61–90 days'?'var(--status-amber)':'var(--mga-accent)'};"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Filters + Ledger -->
  <div style="margin-top: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-md); align-items:center;">
      <h3 style="margin:0; font-size:1.1rem;">Commission Ledger</h3>
      <div style="display:flex; gap:var(--space-sm);">
        <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Export queued — Excel')">Export Excel</button>
        <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Export queued — CSV')">Export CSV</button>
      </div>
    </div>
    <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap;">
      <input class="form-input" id="comm-search" placeholder="Search policy, client, carrier, comm ID..." value="${filters.search || ''}" style="flex:1; min-width:240px;"/>
      <select class="form-input" id="comm-status" style="width:160px;"><option value="All">All Statuses</option>${D.commissionStatuses.map(s => `<option ${filters.status===s?'selected':''}>${s}</option>`).join('')}</select>
      <select class="form-input" id="comm-type" style="width:170px;"><option value="All">All Types</option>${D.commissionTypes.map(t => `<option ${filters.type===t?'selected':''}>${t}</option>`).join('')}</select>
      <select class="form-input" id="comm-carrier" style="width:170px;"><option value="All">All Carriers</option>${carriers.map(c => `<option ${filters.carrier===c?'selected':''}>${c}</option>`).join('')}</select>
      <select class="form-input" id="comm-producer" style="width:160px;"><option value="All">All Producers</option>${['Sarah Chen','Mike Torres','Lisa Park','David Kim','Agency'].map(p => `<option ${filters.producer===p?'selected':''}>${p}</option>`).join('')}</select>
      <button class="btn btn-ghost btn-sm" id="comm-reset">Reset</button>
    </div>
    <div class="data-table-wrapper">
      <div class="table-scroll">
      <table class="data-table">
        <thead><tr><th>Comm ID</th><th>Carrier</th><th>Policy / Client</th><th>LOB</th><th>Type</th><th>Premium</th><th>Rate</th><th>Earned</th><th>Paid</th><th>Expected Pay</th><th>Producer</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${rows.length === 0 ? `<tr><td colspan="13" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No commission records match these filters.</td></tr>` : rows.map(c => `
          <tr style="${c.status==='Exception'?'background:rgba(255,82,82,0.04);':''}">
            <td style="white-space:nowrap;"><strong style="color:var(--mga-accent); font-family:monospace;">${c.id}</strong>${c.statement ? `<div style="font-size:0.7rem; color:var(--text-muted);">${c.statement}</div>` : ''}</td>
            <td style="white-space:nowrap;">${c.carrier}</td>
            <td style="white-space:nowrap;">${c.client}<div style="font-family:monospace; font-size:0.7rem; color:var(--text-muted);">${c.policy}</div></td>
            <td style="white-space:nowrap;">${c.lob}</td>
            <td style="white-space:nowrap;">${c.txType === 'Clawback' ? badge('gray', c.txType) : c.txType === 'Contingent' ? badge('blue', c.txType) : c.txType === 'Override/Bonus' ? badge('amber', c.txType) : c.txType}</td>
            <td style="white-space:nowrap;">${c.premium < 0 ? '<span style="color:var(--status-red);">-$'+Math.abs(c.premium).toLocaleString()+'</span>' : '$'+c.premium.toLocaleString()}</td>
            <td>${c.rate}%</td>
            <td style="white-space:nowrap;"><strong style="color:${c.earned<0?'var(--status-red)':'var(--text-primary)'};">${c.earned<0?'-$'+Math.abs(c.earned).toLocaleString():'$'+c.earned.toLocaleString()}</strong></td>
            <td style="white-space:nowrap;">${c.paid ? '$'+c.paid.toLocaleString() : '<span style="color:var(--text-muted);">—</span>'}</td>
            <td style="font-size:0.85rem; white-space:nowrap;">${c.expected_pay}${c.paid_date ? `<div style="font-size:0.7rem; color:var(--status-green);">Paid ${c.paid_date}</div>` : ''}</td>
            <td style="font-size:0.85rem; white-space:nowrap;">${c.producer}</td>
            <td style="white-space:nowrap;">${badge(c.statusColor, c.status)}${c.exception_reason ? `<div style="font-size:0.7rem; color:var(--status-red); margin-top:2px;">${c.exception_reason}</div>` : ''}</td>
            <td>${c.status === 'Exception' ? `<button class="btn btn-primary btn-sm" onclick="window.setState({screen:'commission-exception', currentExceptionId:'${c.id}'})">Resolve</button>` : c.status === 'Pending' ? `<button class="btn btn-secondary btn-sm" onclick="window.showAlert('Commission ${c.id} approval requested')">Request</button>` : `<button class="btn btn-ghost btn-sm" onclick="window.showAlert('Commission detail for ${c.id}')">View</button>`}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      </div>
      <div style="padding: var(--space-md); color: var(--text-muted); font-size: 0.8rem;">Showing ${rows.length} commission line${rows.length===1?'':'s'} · Total earned: $${rows.reduce((s,c)=>s+c.earned,0).toLocaleString()}</div>
    </div>
  </div>

  <!-- Contingent Accruals -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div class="section-title">CONTINGENT COMMISSION ACCRUALS</div>
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>LTY Premium</th><th>Threshold</th><th>Rate</th><th>Loss Ratio (Req / Actual)</th><th>Accrued</th><th>Paid (Q1)</th><th>Projected (Q2)</th></tr></thead>
      <tbody>
        ${D.contingentAccruals.map(c => `
        <tr>
          <td><strong>${c.carrier}</strong></td>
          <td>${c.lty_premium}</td>
          <td style="font-size:0.85rem;">${c.threshold}</td>
          <td>${c.rate}%</td>
          <td>${c.loss_ratio_req} / <strong style="color:${c.loss_ratio_actual > c.loss_ratio_req.replace('≤','').replace('%','') ? 'var(--status-red)' : 'var(--status-green)'};">${c.loss_ratio_actual}</strong></td>
          <td><strong>$${c.accrued.toLocaleString()}</strong></td>
          <td>${c.paid_q1 ? '$'+c.paid_q1.toLocaleString() : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="color:var(--mga-accent);">$${c.projected_q2.toLocaleString()}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Monthly reconciliation target: complete within 15 days of statement receipt. Auto-match engine handles 85–95% of lines; remaining go to the exception queue. Contingent loss-ratio below threshold = no payout. Clawbacks on policy cancellation process automatically.
  </div>`;
}

// ─── Reconciliation Center ───
function renderCommissionRecon() {
  const filters = state.recFilters || {};
  let rows = D.commissionExceptions;
  if (filters.status && filters.status !== 'All') rows = rows.filter(e => e.status === filters.status);
  if (filters.severity && filters.severity !== 'All') rows = rows.filter(e => e.severity === filters.severity);
  if (filters.carrier && filters.carrier !== 'All') rows = rows.filter(e => e.carrier === filters.carrier);

  const totalVariance = D.commissionExceptions.filter(e => e.status !== 'Resolved').reduce((s,e) => s + e.variance, 0);
  const carriers = [...new Set(D.commissionExceptions.map(e => e.carrier))];

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commissions'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Commissions</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Reconciliation Center</h2>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Running auto-match engine — 184 lines processed')">⚡ Re-run Auto-match</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Dispute batch prepared — 3 letters queued')">📨 Batch Dispute</button>
      <button class="btn btn-primary" onclick="window.showAlert('Import carrier statement')">+ Import Statement</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Open Exceptions</div><div class="kpi-value warning">${D.commissionExceptions.filter(e => e.status === 'Open').length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Under Review</div><div class="kpi-value">${D.commissionExceptions.filter(e => e.status === 'Under Review').length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Disputed (Carrier)</div><div class="kpi-value">${D.commissionExceptions.filter(e => e.status === 'Disputed').length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Net Variance</div><div class="kpi-value" style="color:${totalVariance < 0 ? 'var(--status-red)' : 'var(--status-green)'};">${totalVariance < 0 ? '-$' : '$'}${Math.abs(totalVariance).toLocaleString()}</div></div>
  </div>

  <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap;">
    <select class="form-input" id="rec-status" style="width:180px;"><option value="All">All Statuses</option>${['Open','Under Review','Disputed','Resolved'].map(s => `<option ${filters.status===s?'selected':''}>${s}</option>`).join('')}</select>
    <select class="form-input" id="rec-severity" style="width:160px;"><option value="All">Any Severity</option>${['High','Medium','Low'].map(s => `<option ${filters.severity===s?'selected':''}>${s}</option>`).join('')}</select>
    <select class="form-input" id="rec-carrier" style="width:180px;"><option value="All">All Carriers</option>${carriers.map(c => `<option ${filters.carrier===c?'selected':''}>${c}</option>`).join('')}</select>
    <button class="btn btn-ghost btn-sm" id="rec-reset">Reset</button>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Exception</th><th>Carrier</th><th>Policy / Client</th><th>Expected</th><th>Actual</th><th>Variance</th><th>Reason</th><th>Severity</th><th>Aging</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${rows.map(e => `
        <tr>
          <td><strong style="color:var(--mga-accent); font-family:monospace;">${e.id}</strong></td>
          <td>${e.carrier}</td>
          <td>${e.client}<div style="font-family:monospace; font-size:0.7rem; color:var(--text-muted);">${e.policy}</div></td>
          <td>$${e.expected.toLocaleString()}</td>
          <td>${e.actual > 0 ? '$'+e.actual.toLocaleString() : '<span style="color:var(--status-red);">— Missing</span>'}</td>
          <td style="color:${e.variance < 0 ? 'var(--status-red)' : e.variance > 0 ? 'var(--status-amber)' : 'var(--text-muted)'}; font-weight:600;">${e.variance > 0 ? '+$' : e.variance < 0 ? '-$' : '$'}${Math.abs(e.variance).toLocaleString()}<div style="font-size:0.7rem; color:var(--text-muted); font-weight:normal;">${e.variance_pct}%</div></td>
          <td style="font-size:0.85rem;">${e.reason}</td>
          <td>${badge(e.severity === 'High' ? 'red' : e.severity === 'Medium' ? 'amber' : 'gray', e.severity)}</td>
          <td style="color:${e.aging_days > 15 ? 'var(--status-red)' : e.aging_days > 7 ? 'var(--status-amber)' : 'var(--text-muted)'};">${e.aging_days}d</td>
          <td>${badge(e.status === 'Resolved' ? 'green' : e.status === 'Disputed' ? 'amber' : e.status === 'Under Review' ? 'blue' : 'red', e.status)}</td>
          <td><button class="btn btn-primary btn-sm" onclick="window.setState({screen:'commission-exception', currentExceptionId:'${e.id}'})">Open</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 One-click dispute letter generates formal carrier notification with our system-of-record evidence attached. All adjustments are tracked in an immutable audit log for E&O compliance.
  </div>`;
}

// ─── Exception Detail ───
function renderCommissionException() {
  const id = state.currentExceptionId || 'EX-102';
  const e = D.commissionExceptions.find(x => x.id === id) || D.commissionExceptions[0];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commission-recon'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Reconciliation</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-lg);">
    <div>
      <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:4px;">
        <h2 style="margin:0;">Exception ${e.id}</h2>
        ${badge(e.severity === 'High' ? 'red' : e.severity === 'Medium' ? 'amber' : 'gray', e.severity + ' Severity')}
        ${badge(e.status === 'Resolved' ? 'green' : e.status === 'Disputed' ? 'amber' : 'red', e.status)}
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">${e.client} · ${e.policy} · ${e.carrier} · Aging ${e.aging_days} days</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('AI explanation: Carrier applied renewal rate 11% instead of new-business 12%. Likely system issue; recommend formal dispute.')">✨ AI Explain</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Dispute letter generated — PDF ready')">📨 Generate Dispute</button>
      <button class="btn btn-primary" onclick="window.showAlert('Exception marked Resolved + audit logged')">✓ Mark Resolved</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <!-- Agency side -->
    <div style="background:var(--bg-secondary); border:1px solid var(--mga-accent); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--mga-accent);">AGENCY EXPECTED</div>
      <div style="font-size:2rem; font-weight:700; margin-bottom:var(--space-md);">$${e.expected.toLocaleString()}</div>
      <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem;">
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Premium Base</span><strong>$${(e.expected / 0.12).toLocaleString()}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Rate (Schedule)</span><strong>12.0%</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Calculation</span><strong>Premium × Rate</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Tx Type</span><strong>New Business</strong></div>
      </div>
    </div>
    <!-- Carrier side -->
    <div style="background:var(--bg-secondary); border:1px solid var(--status-red); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--status-red);">CARRIER STATEMENT</div>
      <div style="font-size:2rem; font-weight:700; margin-bottom:var(--space-md);">${e.actual > 0 ? '$'+e.actual.toLocaleString() : '— Missing'}</div>
      <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem;">
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Statement</span><strong>STMT-2026-04-AMT</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Rate Applied</span><strong style="color:var(--status-red);">11.0%</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Received</span><strong>2026-04-10</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Source</span><strong>Email PDF</strong></div>
      </div>
    </div>
  </div>

  <!-- Variance callout -->
  <div style="background:rgba(255,82,82,0.05); border:1px solid var(--status-red); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div class="section-title" style="color:var(--status-red);">VARIANCE</div>
        <div style="font-size:1.8rem; font-weight:700; color:var(--status-red);">${e.variance > 0 ? '+$' : '-$'}${Math.abs(e.variance).toLocaleString()} <span style="font-size:0.9rem;">(${e.variance_pct}%)</span></div>
        <div style="font-size:0.9rem; color:var(--text-secondary); margin-top:4px;">${e.reason}</div>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted); text-align:right;">
        <div>Commission ID: <strong style="color:var(--mga-accent); font-family:monospace;">${e.comm_id}</strong></div>
      </div>
    </div>
  </div>

  <!-- Notes & Actions -->
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">NOTES & DISPUTE REASON</div>
      <div style="padding: var(--space-md); background:var(--bg-card); border-radius:var(--radius-md); margin-bottom:var(--space-md); font-size:0.9rem;">${e.notes}</div>
      <textarea class="form-input" rows="3" placeholder="Add note or dispute reason..."></textarea>
      <div style="text-align:right; margin-top: var(--space-sm);"><button class="btn btn-primary btn-sm" onclick="window.showAlert('Note added to exception log')">Add Note</button></div>
    </div>
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RESOLUTION ACTIONS</div>
      <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Adjustment of +$972 applied to commission ledger')">Adjust to Expected</button>
      <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Accepted carrier amount — variance written off')">Accept Carrier Amount</button>
      <button class="btn btn-secondary" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Dispute letter emailed to carrier')">Send Dispute Letter</button>
      <button class="btn btn-ghost" style="width:100%;" onclick="window.showAlert('Assigned to manager for review')">Escalate to Manager</button>
    </div>
  </div>`;
}

// ─── Producer Commission Portal ───
function renderCommissionProducer() {
  const producer = state.producerView || 'Sarah Chen';
  const rows = D.commissionLedger.filter(c => c.producer === producer);
  const payouts = D.producerPayouts.filter(p => p.producer === producer);
  const ytd = D.commissionAnalytics.producer_leaderboard.find(p => p.name === producer) || { ytd: 0, deals: 0, split: 60, rank: 1 };

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commissions'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Commissions</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Producer Commission Portal</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Self-service view — transparent statement for ${producer}</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" id="prod-sel" style="width:180px;">${['Sarah Chen','Mike Torres','Lisa Park','David Kim'].map(p => `<option ${p===producer?'selected':''}>${p}</option>`).join('')}</select>
      <button class="btn btn-secondary" onclick="window.showAlert('Producer statement PDF generated')">📄 Generate Statement</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">YTD Earnings</div><div class="kpi-value">$${(ytd.ytd/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Deals Bound</div><div class="kpi-value">${ytd.deals}</div></div>
    <div class="kpi-card"><div class="kpi-label">Split %</div><div class="kpi-value">${ytd.split}%</div></div>
    <div class="kpi-card"><div class="kpi-label">Leaderboard Rank</div><div class="kpi-value">#${ytd.rank}</div></div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">MY COMMISSIONS</div>
      <table class="data-table">
        <thead><tr><th>Comm ID</th><th>Client</th><th>Type</th><th>Earned</th><th>My Share</th><th>Status</th></tr></thead>
        <tbody>
          ${rows.length === 0 ? '<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No commissions.</td></tr>' : rows.map(c => `
          <tr>
            <td style="font-family:monospace;">${c.id}</td>
            <td>${c.client}</td>
            <td>${c.txType}</td>
            <td>$${c.earned.toLocaleString()}</td>
            <td><strong>$${Math.round(c.earned * ytd.split / 100).toLocaleString()}</strong></td>
            <td>${badge(c.statusColor, c.status)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SPLIT RULES</div>
        <div style="font-size:0.85rem; line-height:1.8;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">New Business</span><strong>${ytd.split}% / ${100-ytd.split}%</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Renewal</span><strong>${ytd.split}% / ${100-ytd.split}%</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Override Q1</span><strong>+$8,200</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Tier bonus (105%)</span><strong>Applied</strong></div>
        </div>
      </div>
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">UPCOMING PAYOUTS</div>
        ${payouts.length === 0 ? '<div style="color:var(--text-muted);">No scheduled payouts.</div>' : payouts.map(p => `
        <div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); font-size:0.85rem;">
          <div style="display:flex; justify-content:space-between;"><span>${p.period}</span>${badge(p.status==='Paid'?'green':p.status==='Approved'?'blue':'amber', p.status)}</div>
          <div style="font-size:1.1rem; font-weight:700; color:var(--mga-accent); margin-top:2px;">$${p.net.toLocaleString()}</div>
          <div style="color:var(--text-muted); font-size:0.75rem;">${p.method} · ${p.payout_date}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ─── Payout Approval Workflow ───
function renderCommissionPayoutApproval() {
  const payouts = D.producerPayouts;
  const pending = payouts.filter(p => p.status === 'Pending Approval');
  const approved = payouts.filter(p => p.status === 'Approved');
  const paid = payouts.filter(p => p.status === 'Paid');

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commissions'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Commissions</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Producer Payout Approval</h2>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('ACH batch file generated (NACHA format)')">Export ACH Batch</button>
      <button class="btn btn-primary" onclick="window.showAlert('All approved payouts submitted to bank — 3 transactions')">💸 Process Approved</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Pending Approval</div><div class="kpi-value warning">${pending.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Approved (Queue)</div><div class="kpi-value">${approved.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Pending $</div><div class="kpi-value">$${pending.reduce((s,p)=>s+p.net,0).toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Paid MTD</div><div class="kpi-value">$${paid.reduce((s,p)=>s+p.net,0).toLocaleString()}</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-md);">
      <div class="section-title" style="margin:0;">PENDING APPROVAL</div>
      <div style="color:var(--text-muted); font-size:0.85rem;">Manager review required for >$40k</div>
    </div>
    <table class="data-table">
      <thead><tr><th>Payout ID</th><th>Producer</th><th>Period</th><th>Gross</th><th>Split</th><th>Gross Share</th><th>Deductions</th><th>Advances</th><th>Net Payout</th><th>Method</th><th>Approver</th><th>Action</th></tr></thead>
      <tbody>
        ${[...pending, ...approved].map(p => `
        <tr style="${p.mgr_required ? 'background:rgba(255,167,38,0.04);' : ''}">
          <td style="font-family:monospace;"><strong>${p.id}</strong></td>
          <td>${p.producer}${p.mgr_required ? ' <span style="font-size:0.7rem; color:var(--status-amber);">⚠ Mgr Req</span>' : ''}</td>
          <td>${p.period}</td>
          <td>$${p.gross.toLocaleString()}</td>
          <td>${p.split_pct}%</td>
          <td>$${p.gross_share.toLocaleString()}</td>
          <td style="color:${p.deductions ? 'var(--status-red)' : 'var(--text-muted)'};">${p.deductions ? '-$'+p.deductions.toLocaleString() : '—'}</td>
          <td style="color:${p.advances ? 'var(--status-amber)' : 'var(--text-muted)'};">${p.advances ? '-$'+p.advances.toLocaleString() : '—'}</td>
          <td><strong style="color:var(--mga-accent);">$${p.net.toLocaleString()}</strong></td>
          <td>${p.method}</td>
          <td style="font-size:0.85rem; color:var(--text-muted);">${p.approver}</td>
          <td>${p.status === 'Pending Approval' ? `<button class="btn btn-primary btn-sm" onclick="window.showAlert('Payout ${p.id} approved — will process ${p.payout_date}')">Approve</button>` : `<button class="btn btn-ghost btn-sm" onclick="window.showAlert('Payout ${p.id} details')">View</button>`}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">PAYMENT HISTORY (LAST 30 DAYS)</div>
    <table class="data-table">
      <thead><tr><th>Payout ID</th><th>Producer</th><th>Period</th><th>Net</th><th>Method</th><th>Paid Date</th><th>Status</th></tr></thead>
      <tbody>
        ${paid.map(p => `
        <tr>
          <td style="font-family:monospace;">${p.id}</td>
          <td>${p.producer}</td>
          <td>${p.period}</td>
          <td><strong>$${p.net.toLocaleString()}</strong></td>
          <td>${p.method}</td>
          <td>${p.paid_date}</td>
          <td>${badge('green', 'Paid')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Large-amount payouts (&gt;$40k) require manager approval. ACH batch file (NACHA format) generates on approval. Deductions cover chargebacks and agency fees; advances are repaid out of next payout. 1099 forms auto-compile at year-end.
  </div>`;
}

// ─── Carrier Schedules ───
function renderCommissionSchedules() {
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commissions'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Commissions</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Carrier Commission Schedules</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Upload commission schedule — Excel or PDF')">📥 Import Schedule</button>
      <button class="btn btn-primary" onclick="window.showAlert('New schedule entry — carrier + LOB + rates')">+ Add Schedule</button>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-md); margin-bottom:var(--space-lg); font-size:0.85rem;">
    <strong>ℹ️ Schedules are the source of truth</strong> for expected commissions. The auto-match engine uses these to calculate expected amounts and flag exceptions. Update annually (most carriers publish Jan 1).
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>LOB</th><th>New Business %</th><th>Renewal %</th><th>Contingent</th><th>Effective</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${D.carrierCommissionSchedules.map(s => `
        <tr>
          <td><strong>${s.carrier}</strong></td>
          <td>${s.lob}</td>
          <td><strong>${s.new_pct}%</strong></td>
          <td>${s.renewal_pct}%</td>
          <td style="font-size:0.85rem;">${s.contingent}</td>
          <td>${s.effective}</td>
          <td>${badge('green', s.status)}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="window.showAlert('Edit schedule: ${s.carrier} / ${s.lob}')">Edit</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ─── Carrier Statements Import Log ───
function renderCommissionStatements() {
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commissions'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Commissions</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Carrier Statement Import Log</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Running API sync — 5 carriers polled')">🔄 Sync APIs</button>
      <button class="btn btn-secondary" onclick="window.showAlert('IVANS download queued')">📥 IVANS Download</button>
      <button class="btn btn-primary" onclick="window.showAlert('Upload statement — Excel or PDF')">📤 Manual Upload</button>
    </div>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Statement ID</th><th>Carrier</th><th>Period</th><th>Received</th><th>Source</th><th>Lines</th><th>Matched</th><th>Exceptions</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${D.carrierStatements.map(s => `
        <tr>
          <td style="font-family:monospace;"><strong>${s.id}</strong></td>
          <td>${s.carrier}</td>
          <td>${s.period}</td>
          <td>${s.received}</td>
          <td><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${s.source}</span></td>
          <td>${s.lines}</td>
          <td style="color:var(--status-green);">${s.matched}</td>
          <td style="color:${s.exceptions > 0 ? 'var(--status-red)' : 'var(--text-muted)'}; font-weight:600;">${s.exceptions}</td>
          <td><strong>${s.amount}</strong></td>
          <td>${badge(s.status === 'Reconciled' ? 'green' : s.status === 'Exceptions' ? 'red' : 'amber', s.status)}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.showAlert('Statement ${s.id} detail — drill into lines')">Open</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Statements arrive via API sync (real-time), IVANS daily feed, SFTP drop, or email attachment (Excel/PDF). OCR auto-parses PDF statements; manual review for unclear lines. All imports retained 7 years for audit.
  </div>`;
}

// ─── Reports Library ───
function renderCommissionReports() {
  const reports = [
    { name: 'Commission Statement by Producer', desc: 'Per-producer detailed ledger with splits and net payouts', type: 'PDF / Excel', freq: 'On-demand' },
    { name: 'Carrier Commission Summary',       desc: 'Monthly roll-up of commissions by carrier', type: 'Excel / CSV', freq: 'Monthly' },
    { name: 'Aging Receivables Report',         desc: 'Outstanding commissions by aging bucket', type: 'PDF / Excel', freq: 'Weekly' },
    { name: 'Commission Leakage Analysis',      desc: 'Variance by root cause (rate, missing, clawback)', type: 'PDF', freq: 'Monthly' },
    { name: 'Year-over-Year Commission Growth', desc: 'Monthly YoY comparison with growth %', type: 'Excel', freq: 'Monthly' },
    { name: 'Commission by LOB / State',        desc: 'Heatmap of commissions across lines + geography', type: 'PDF', freq: 'Quarterly' },
    { name: 'Retention Impact on Commissions',  desc: 'Connects renewal wins/losses to commission flow', type: 'Excel', freq: 'Quarterly' },
    { name: 'Producer Performance Leaderboard', desc: 'Ranked producer earnings and growth', type: 'PDF', freq: 'Monthly' },
    { name: 'Forecasted Commission Revenue',    desc: 'Projected monthly + quarter + year', type: 'Excel', freq: 'Rolling' }
  ];
  const a = D.commissionAnalytics;
  const maxYoy = Math.max(...a.yoy_growth.map(m => Math.max(m.ly, m.ty)));

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commissions'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Commissions</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Commission Reports & Analytics</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 30 days</option><option>Last quarter</option><option>YTD</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Scheduled email delivery configured')">📧 Schedule Email</button>
    </div>
  </div>

  <!-- Forecast Summary -->
  <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">This Month</div><div class="kpi-value">$${(a.forecast.current_month/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Next Month (Forecast)</div><div class="kpi-value">$${(a.forecast.next_month/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Quarter Forecast</div><div class="kpi-value">$${(a.forecast.quarter/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Year Forecast</div><div class="kpi-value">$${(a.forecast.year/1000000).toFixed(2)}M</div></div>
    <div class="kpi-card"><div class="kpi-label">Contingent Projected</div><div class="kpi-value">$${(a.forecast.contingent_projected/1000).toFixed(0)}k</div></div>
  </div>

  <!-- YoY + by LOB -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">YEAR-OVER-YEAR COMMISSION GROWTH</div>
      <div style="display:flex; align-items:flex-end; gap:var(--space-md); height:200px; padding: var(--space-md) 0;">
        ${a.yoy_growth.map(m => `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; height:100%;">
          <div style="display:flex; gap:3px; align-items:flex-end; flex:1; width:100%;">
            <div style="flex:1; background:var(--text-muted); border-radius:3px 3px 0 0; height:${(m.ly/maxYoy)*85}%;" title="LY: $${m.ly}k"></div>
            <div style="flex:1; background:var(--status-green); border-radius:3px 3px 0 0; height:${(m.ty/maxYoy)*85}%;" title="TY: $${m.ty}k"></div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${m.month}</div>
        </div>`).join('')}
      </div>
      <div style="display:flex; gap:var(--space-md); justify-content:center; font-size:0.75rem; color:var(--text-muted);">
        <span><span style="background:var(--text-muted); width:12px; height:12px; display:inline-block; border-radius:2px; vertical-align:middle;"></span> Last Year</span>
        <span><span style="background:var(--status-green); width:12px; height:12px; display:inline-block; border-radius:2px; vertical-align:middle;"></span> This Year</span>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">COMMISSION BY LINE OF BUSINESS</div>
      ${a.by_lob.map(l => `
      <div style="display:flex; align-items:center; margin-bottom:var(--space-sm); font-size:0.9rem;">
        <div style="width:180px;">${l.lob}</div>
        <div style="flex:1; background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${l.pct*3.5}%; background:var(--mga-accent);"></div></div>
        <div style="width:120px; text-align:right;"><strong>$${(l.ytd/1000).toFixed(0)}k</strong> <span style="color:var(--text-muted);">(${l.pct}%)</span></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Carrier breakdown -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">COMMISSION BY CARRIER (YTD)</div>
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>YTD Commission</th><th>Share</th><th>YoY Growth</th></tr></thead>
      <tbody>
        ${a.by_carrier.map(c => `
        <tr>
          <td><strong>${c.carrier}</strong></td>
          <td><strong>$${(c.ytd/1000).toFixed(0)}k</strong></td>
          <td><div style="display:flex; align-items:center; gap:8px;"><div style="width:60px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${c.share*3}%; background:var(--mga-accent);"></div></div>${c.share}%</div></td>
          <td style="color:${c.growth.startsWith('+') ? 'var(--status-green)' : 'var(--status-red)'}; font-weight:600;">${c.growth}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <!-- Leakage + Leaderboard -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">COMMISSION LEAKAGE ANALYSIS</div>
      ${a.leakage.map(l => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
        <div><strong>${l.reason}</strong><div style="font-size:0.8rem; color:var(--text-muted);">${l.count} occurrences</div></div>
        <strong style="color:var(--status-red);">-$${l.amount.toLocaleString()}</strong>
      </div>`).join('')}
      <div style="margin-top:var(--space-md); padding:var(--space-md); background:rgba(255,82,82,0.05); border-radius:var(--radius-md); font-size:0.85rem;">
        <strong style="color:var(--status-red);">Total leakage YTD:</strong> $${a.leakage.reduce((s,l)=>s+l.amount,0).toLocaleString()} — focus area for Q2
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PRODUCER LEADERBOARD (YTD)</div>
      ${a.producer_leaderboard.map((p, i) => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:var(--space-md) 0; border-bottom:1px solid var(--border-subtle); cursor:pointer;" onclick="window.setState({screen:'commission-producer', producerView:'${p.name}'})">
        <div style="display:flex; gap:var(--space-md); align-items:center;">
          <div style="font-size:1.4rem;">${i===0?'🥇':i===1?'🥈':i===2?'🥉':'🔸'}</div>
          <div>
            <div style="font-weight:700;">${p.name}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">${p.deals} deals · ${p.split}% split</div>
          </div>
        </div>
        <strong style="color:var(--mga-accent);">$${(p.ytd/1000).toFixed(0)}k</strong>
      </div>`).join('')}
    </div>
  </div>

  <!-- Standard Reports Library -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">STANDARD REPORTS LIBRARY</div>
    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-md);">
      ${reports.map(r => `
      <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); display:flex; flex-direction:column; gap:8px;">
        <div style="font-weight:600;">${r.name}</div>
        <div style="font-size:0.8rem; color:var(--text-muted); flex:1;">${r.desc}</div>
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted);"><span>${r.type}</span><span>${r.freq}</span></div>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-ghost btn-sm" style="flex:1;" onclick="window.showAlert('Generating ${r.name}...')">Run</button>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Scheduled: ${r.name}')">📧</button>
        </div>
      </div>`).join('')}
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 All reports exportable as PDF / Excel / CSV. Schedule automated email delivery to producers, managers, or accounting. Accounting sync with QuickBooks / Xero runs nightly.
  </div>`;
}

// ─── 1099 & Tax Center ───
function renderCommission1099() {
  const year = state.taxYear || 2025;
  const payouts = D.commissionAnalytics.producer_leaderboard;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'commissions'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Commissions</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">1099 & Tax Reporting Center</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:140px;"><option>Tax Year 2025</option><option>Tax Year 2024</option></select>
      <button class="btn btn-secondary" onclick="window.showAlert('All 1099-NEC forms regenerated')">🔄 Regenerate All</button>
      <button class="btn btn-primary" onclick="window.showAlert('E-filed to IRS — ACK expected in 24h')">📤 E-File to IRS</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Producers Eligible</div><div class="kpi-value">${payouts.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Total 1099 Amount</div><div class="kpi-value">$${(payouts.reduce((s,p)=>s+p.ytd,0)/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Forms Generated</div><div class="kpi-value">${payouts.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">E-File Status</div><div class="kpi-value" style="font-size:1.1rem; color:var(--status-amber);">Pending</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">1099-NEC FORMS — TAX YEAR ${year}</div>
    <table class="data-table">
      <thead><tr><th>Producer</th><th>TIN / SSN</th><th>Total Compensation</th><th>Box 1 (Non-Employee)</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${payouts.map(p => `
        <tr>
          <td><strong>${p.name}</strong></td>
          <td style="font-family:monospace;">***-**-${Math.floor(Math.random()*9000)+1000}</td>
          <td>$${p.ytd.toLocaleString()}</td>
          <td><strong>$${p.ytd.toLocaleString()}</strong></td>
          <td>${p.ytd >= 600 ? badge('green', 'Generated') : badge('gray', 'Below Threshold')}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Preview 1099-NEC for ${p.name}')">Preview</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Download 1099-NEC PDF')">📥</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Email 1099 to ${p.name}')">📧</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">COMPLIANCE & KEY DATES</div>
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); font-size:0.9rem;">
      <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
        <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:4px;">Jan 31</div>
        <div style="font-weight:600; margin-bottom:4px;">Furnish to Recipients</div>
        <div style="color:var(--text-secondary);">Mail / email 1099-NEC to all producers by this date</div>
      </div>
      <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
        <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:4px;">Jan 31</div>
        <div style="font-weight:600; margin-bottom:4px;">E-File to IRS</div>
        <div style="color:var(--text-secondary);">Electronic filing deadline (paper: Feb 28)</div>
      </div>
      <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
        <div style="color:var(--text-muted); font-size:0.75rem; text-transform:uppercase; margin-bottom:4px;">$600 Threshold</div>
        <div style="font-weight:600; margin-bottom:4px;">Reporting Requirement</div>
        <div style="color:var(--text-secondary);">1099-NEC required for all non-employees earning ≥ $600</div>
      </div>
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 1099-NEC forms auto-compile from YTD producer payouts. W-9 on file required for each producer. Corrections (1099-NEC Corrected) supported for post-filing amendments. State-specific filings automated for states participating in CFSF.
  </div>`;
}

// ════════════════════════════════════════════════════════════════
// CARRIER MANAGEMENT (Broker)
// ════════════════════════════════════════════════════════════════
function renderBrokerCarriers() {
  const filters = state.carrierFilters || {};
  let rows = D.brokerCarriersList;
  if (filters.tier && filters.tier !== 'All') rows = rows.filter(c => c.tier === filters.tier);
  if (filters.lob && filters.lob !== 'All') rows = rows.filter(c => c.primary_lobs.some(l => l.includes(filters.lob)));
  if (filters.method && filters.method !== 'All') rows = rows.filter(c => c.integration === filters.method);
  if (filters.status && filters.status !== 'All') rows = rows.filter(c => c.status === filters.status);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(c => (c.name + ' ' + c.code + ' ' + c.naic + ' ' + c.primary_lobs.join(' ')).toLowerCase().includes(q));
  }

  const star = (r) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r));
  const tierBadge = (t) => {
    const map = { 'Tier 1 — Strategic':'green', 'Tier 2 — Standard':'blue', 'Tier 3 — Specialty':'amber', 'Tier 4 — Restricted':'red' };
    return badge(map[t]||'gray', t.split('—')[0].trim());
  };
  const integrationBadge = (i) => {
    const map = { 'Real-time API':'green', 'IVANS':'blue', 'SFTP':'amber', 'Email':'gray', 'Carrier Portal':'gray' };
    return badge(map[i]||'gray', i);
  };
  const apptBadge = (a) => {
    const map = { 'Aggressive':'green', 'Selective':'amber', 'Not Accepting':'red' };
    return badge(map[a]||'gray', a);
  };

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Carrier Directory</h2>
    <div style="display:flex; gap:var(--space-sm); flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="window.setState({screen:'carrier-appetite'})">🎯 Appetite Matrix</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'carrier-scorecard'})">📊 Scorecards</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'carrier-integrations'})">🔌 Integrations</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'carrier-comparison-tool'})">⚖ Compare</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'carrier-analytics'})">📈 Analytics</button>
      <button class="btn btn-primary" onclick="window.showAlert('New Carrier Appointment Request — workflow launched')">+ Add Carrier</button>
    </div>
  </div>

  ${kpiCards(D.brokerCarriersKPIs, 6)}

  <!-- Appetite Alerts -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-md); margin-top: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-sm);">
      <div class="section-title" style="margin:0;">📡 RECENT APPETITE & PRODUCT ALERTS</div>
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Notification settings opened')">⚙ Configure</button>
    </div>
    ${D.carrierAppetiteAlerts.map(a => `
    <div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; font-size:0.9rem;">
      <div style="display:flex; gap:var(--space-sm); align-items:center;">
        <span style="color:var(--status-${a.type});">●</span>
        <strong>${a.carrier}:</strong>
        <span style="color:var(--text-secondary);">${a.message}</span>
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted);">${a.date}</div>
    </div>`).join('')}
  </div>

  <div class="filter-bar" style="margin: var(--space-lg) 0; display:flex; gap:var(--space-sm); flex-wrap:wrap;">
    <input class="form-input" id="car-search" placeholder="Search carrier name, code, NAIC, LOB..." value="${filters.search||''}" style="flex:1; min-width:240px;"/>
    <select class="form-input" id="car-tier" style="width:200px;"><option value="All">All Tiers</option>${D.carrierTiers.map(t => `<option ${filters.tier===t?'selected':''}>${t}</option>`).join('')}</select>
    <select class="form-input" id="car-lob" style="width:180px;"><option value="All">All LOBs</option>${['Workers Comp','GL','BOP','Cyber','Commercial Auto','Professional','Property','Umbrella'].map(l => `<option ${filters.lob===l?'selected':''}>${l}</option>`).join('')}</select>
    <select class="form-input" id="car-method" style="width:170px;"><option value="All">All Methods</option>${D.carrierMethods.map(m => `<option ${filters.method===m?'selected':''}>${m}</option>`).join('')}</select>
    <select class="form-input" id="car-status" style="width:160px;"><option value="All">All Statuses</option>${['Healthy','Watchlist','Suspended'].map(s => `<option ${filters.status===s?'selected':''}>${s}</option>`).join('')}</select>
    <button class="btn btn-ghost btn-sm" id="car-reset">Reset</button>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th>Carrier</th><th>Tier</th><th>AM Best</th><th>Primary LOBs</th><th>Integration</th><th>Appetite</th><th>YTD Premium</th><th>Hit Ratio</th><th>Bind Ratio</th><th>Avg Quote</th><th>Rating</th><th>Status</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${rows.length === 0 ? `<tr><td colspan="13" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No carriers match these filters.</td></tr>` : rows.map(c => `
        <tr style="${c.status === 'Suspended' ? 'opacity:0.6;' : c.status === 'Watchlist' ? 'background:rgba(255,167,38,0.04);' : ''}">
          <td>
            <div style="display:flex; gap:var(--space-sm); align-items:center;">
              <div style="font-size:1.4rem;">🏢</div>
              <div>
                <strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'carrier-details', currentCarrierId:'${c.id}'})">${c.name}</strong>
                <div style="font-family:monospace; font-size:0.7rem; color:var(--text-muted);">${c.code} · NAIC ${c.naic}</div>
              </div>
            </div>
          </td>
          <td>${tierBadge(c.tier)}</td>
          <td><strong>${c.am_best}</strong></td>
          <td style="font-size:0.8rem;">${c.primary_lobs.slice(0,3).join(', ')}${c.primary_lobs.length > 3 ? `<div style="color:var(--text-muted);">+${c.primary_lobs.length - 3} more</div>` : ''}</td>
          <td>${integrationBadge(c.integration)}${c.api_health > 0 ? `<div style="font-size:0.7rem; color:${c.api_health > 95 ? 'var(--status-green)' : c.api_health > 90 ? 'var(--status-amber)' : 'var(--status-red)'};">API ${c.api_health}%</div>` : ''}</td>
          <td>${apptBadge(c.appetite_state)}</td>
          <td><strong>$${(c.ytd_premium/1000).toFixed(0)}k</strong><div style="font-size:0.7rem; color:var(--text-muted);">${c.ytd_policies} policies</div></td>
          <td><strong style="color:${c.hit_ratio >= 45 ? 'var(--status-green)' : c.hit_ratio >= 30 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${c.hit_ratio}%</strong></td>
          <td><strong style="color:${c.bind_ratio >= 80 ? 'var(--status-green)' : c.bind_ratio >= 70 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${c.bind_ratio}%</strong></td>
          <td>${c.avg_quote_hours > 0 ? c.avg_quote_hours + 'h' : '—'}</td>
          <td><strong style="color:var(--status-amber);">${star(c.overall_rating)}</strong><div style="font-size:0.7rem; color:var(--text-muted);">${c.overall_rating}/5</div></td>
          <td>${badge(c.statusColor, c.status)}${c.open_issues > 0 ? `<div style="font-size:0.7rem; color:var(--status-red); margin-top:2px;">⚠ ${c.open_issues} open issue${c.open_issues>1?'s':''}</div>` : ''}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'carrier-details', currentCarrierId:'${c.id}'})">Open</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div style="padding: var(--space-md); color: var(--text-muted); font-size: 0.8rem;">Showing ${rows.length} carrier${rows.length===1?'':'s'} · YTD Premium: $${(rows.reduce((s,c)=>s+c.ytd_premium,0)/1000000).toFixed(2)}M</div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Tiered carrier strategy: Tier 1 = 80% of premium volume, white-glove relationship. Goal: 15–30 active carriers. AI-powered carrier recommendation engine suggests best-fit carriers based on risk profile + appetite.
  </div>`;
}

// ─── Carrier 360° ───
function renderBrokerCarrierDetails() {
  const c = D.brokerCarrierDetail;
  const tab = state.carrierTab || 'overview';
  const tabs = [
    { id: 'overview',     label: 'Overview' },
    { id: 'reps',         label: `Contacts (${c.reps.length})` },
    { id: 'commission',   label: 'Commission' },
    { id: 'integration',  label: 'Integration' },
    { id: 'appetite',     label: 'Appetite & UW' },
    { id: 'scorecard',    label: 'Scorecard' },
    { id: 'qbr',          label: `QBRs (${c.qbrs.length})` }
  ];
  const content = {
    overview: renderCarrierTabOverview,
    reps: renderCarrierTabReps,
    commission: renderCarrierTabCommission,
    integration: renderCarrierTabIntegration,
    appetite: renderCarrierTabAppetite,
    scorecard: renderCarrierTabScorecard,
    qbr: renderCarrierTabQbr
  }[tab] || renderCarrierTabOverview;

  const star = (r) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r));

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'carriers'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Carriers</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-md);">
    <div style="display:flex; gap: var(--space-md); align-items:flex-start;">
      <div style="font-size:3rem;">${c.logo}</div>
      <div>
        <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom:4px;">
          <h2 style="margin:0; font-size:1.4rem;">${c.name}</h2>
          <span class="badge badge-green"><span class="badge-dot badge-dot-green"></span>${c.tier.split('—')[0].trim()}</span>
          <span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>AM Best ${c.am_best.split(' ')[0]}</span>
          ${badge('green', c.appointment.status)}
        </div>
        <div style="font-size:0.85rem; color:var(--text-secondary);">
          ${c.legal_name} · Code <span style="font-family:monospace; color:var(--mga-accent);">${c.code}</span> · NAIC ${c.naic} · <a href="#" style="color:var(--mga-accent);">${c.website}</a>
        </div>
      </div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('SSO launching to ${c.name} agent portal...')">🔗 Open Carrier Portal</button>
      <button class="btn btn-secondary" onclick="window.openTaskModal({subject:'Follow-up with '+'${c.name}'+': '})">+ Task</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'submission', wizardStep:1})">+ Submit Risk</button>
    </div>
  </div>

  <!-- Top metrics -->
  <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">YTD Premium</div><div class="kpi-value">$${(c.growth.current_premium/1000000).toFixed(2)}M</div></div>
    <div class="kpi-card"><div class="kpi-label">YTD Policies</div><div class="kpi-value">${c.growth.current_policies}</div></div>
    <div class="kpi-card"><div class="kpi-label">Bind Ratio</div><div class="kpi-value" style="color:var(--status-green);">${c.scorecard.submission_to_bind}%</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg Quote Time</div><div class="kpi-value">${c.scorecard.avg_quote_hours}h</div></div>
    <div class="kpi-card"><div class="kpi-label">Overall Rating</div><div class="kpi-value" style="color:var(--status-amber);">${star(c.scorecard.overall)}</div></div>
  </div>

  <!-- TABS -->
  <div style="display:flex; border-bottom: 1px solid var(--border-subtle); margin-bottom: var(--space-xl); gap: var(--space-lg);">
    ${tabs.map(t => {
      const active = tab === t.id;
      const style = active ? 'border-bottom: 2px solid var(--mga-accent); font-weight:600; color:var(--text-primary);' : 'color:var(--text-muted);';
      return `<div style="padding:var(--space-sm) 0; cursor:pointer; ${style}" onclick="window.setState({carrierTab:'${t.id}'})">${t.label}</div>`;
    }).join('')}
  </div>

  ${content(c)}`;
}

function renderCarrierTabOverview(c) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RELATIONSHIP DETAILS</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); font-size:0.9rem;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Appointment Status</span><strong style="color:var(--status-green);">${c.appointment.status}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Contract Start</span><strong>${c.appointment.appointed}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Renewal Date</span><strong>${c.appointment.renewal}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Producer Count</span><strong>${c.appointment.producer_count}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Volume Target</span><strong>${c.volume_commitment.target}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Volume Actual</span><strong style="color:var(--status-green);">${c.volume_commitment.actual}</strong></div>
          <div style="display:flex; justify-content:space-between; grid-column:1/-1;"><span style="color:var(--text-muted);">Tier Qualification</span><strong>${c.volume_commitment.tier_qualified}</strong></div>
        </div>
        <div style="margin-top:var(--space-md); padding-top:var(--space-md); border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:0.85rem;">📄 ${c.appointment.contract_pdf}</div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Contract PDF downloaded')">View Contract</button>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">LINES OF BUSINESS</div>
        <div style="margin-bottom:var(--space-md);">
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:6px;">PRIMARY</div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">${c.primary_lobs.map(l => `<span class="badge badge-green"><span class="badge-dot badge-dot-green"></span>${l}</span>`).join('')}</div>
        </div>
        <div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:6px;">SECONDARY</div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">${c.secondary_lobs.map(l => `<span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${l}</span>`).join('')}</div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">PREFERRED FOR (AUTO-ROUTING RULES)</div>
        ${c.preferred_for.map(p => `<div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); font-size:0.9rem;">⭐ ${p}</div>`).join('')}
        <button class="btn btn-ghost btn-sm" style="margin-top:var(--space-md);" onclick="window.showAlert('Routing rule editor launched')">+ Add Routing Rule</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">RECENT ACTIVITY</div>
        ${c.recent_activity.map(a => `
        <div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; gap:var(--space-md); font-size:0.85rem;">
          <div><strong>${a.action}</strong><div style="color:var(--text-muted); margin-top:2px;">${a.details}</div></div>
          <div style="color:var(--text-muted); white-space:nowrap;">${a.when}</div>
        </div>`).join('')}
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">PRIMARY CONTACT</div>
        <div style="font-weight:600;">${c.reps[0].name}</div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:var(--space-sm);">${c.reps[0].role}</div>
        <div style="font-size:0.85rem;">📞 ${c.reps[0].phone}</div>
        <div style="font-size:0.85rem; color:var(--mga-accent);">✉️ ${c.reps[0].email}</div>
        <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.setState({carrierTab:'reps'})">All Contacts →</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">YTD GROWTH</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">LY Premium</span><strong>$${(c.growth.last_year_premium/1000000).toFixed(2)}M</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">TY Premium</span><strong>$${(c.growth.current_premium/1000000).toFixed(2)}M</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Growth</span><strong style="color:var(--status-green);">+${c.growth.growth_pct}%</strong></div>
          <div style="border-top:1px solid var(--border-subtle); margin:4px 0;"></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">LY Policies</span><strong>${c.growth.last_year_policies}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">TY Policies</span><strong>${c.growth.current_policies}</strong></div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">ISSUE LOG</div>
        ${c.issues_log.length === 0 ? '<div style="font-size:0.85rem; color:var(--status-green);">✓ No open escalations</div>' : c.issues_log.map(i => `<div>${i}</div>`).join('')}
        <button class="btn btn-ghost btn-sm" style="margin-top:var(--space-md);" onclick="window.showAlert('New escalation form launched')">+ Log Issue</button>
      </div>
    </div>
  </div>`;
}

function renderCarrierTabReps(c) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Carrier Contacts</h3>
    <button class="btn btn-primary" onclick="window.showAlert('Add contact form launched')">+ Add Contact</button>
  </div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Phone</th><th>Territory</th><th>Action</th></tr></thead>
      <tbody>
        ${c.reps.map(r => `
        <tr>
          <td><strong>${r.name}</strong></td>
          <td>${r.role}</td>
          <td style="color:var(--mga-accent);">${r.email}</td>
          <td>${r.phone}</td>
          <td>${r.territory}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Email composer opened to ${r.email}')">✉️</button>
            <button class="btn btn-ghost btn-sm" onclick="window.openTaskModal({subject:'Follow-up with '+'${r.name}'+': '})">+ Task</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderCarrierTabCommission(c) {
  return `
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">COMMISSION SCHEDULE</div>
      <div style="font-size:0.9rem; display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">New Business</span><strong style="font-size:1.1rem; color:var(--mga-accent);">${c.commission.new_business_pct}%</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Renewal</span><strong style="font-size:1.1rem; color:var(--mga-accent);">${c.commission.renewal_pct}%</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Contingent</span><strong>${c.commission.contingent}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Overrides</span><strong style="text-align:right;">${c.commission.overrides}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Payment Terms</span><strong>${c.commission.payment_terms}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Schedule Effective</span><strong>${c.commission.schedule_effective}</strong></div>
      </div>
      <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.setState({screen:'commission-schedules'})">View Full Schedule →</button>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PAYMENT TIMELINESS</div>
      <div style="display:flex; gap:var(--space-md); align-items:center; margin-bottom:var(--space-md);">
        <div style="font-size:3rem; color:var(--status-amber);">${'★'.repeat(Math.floor(c.scorecard.commission_payment_timeliness))}</div>
        <div>
          <div style="font-size:1.6rem; font-weight:700;">${c.scorecard.commission_payment_timeliness}/5</div>
          <div style="font-size:0.85rem; color:var(--text-muted);">Excellent — pays consistently within Net 30</div>
        </div>
      </div>
      <div style="font-size:0.85rem; padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md);">
        <strong>Last commission payment:</strong> ${c.commission.last_payment}
      </div>
      <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.setState({screen:'commissions'})">View Commission Ledger →</button>
    </div>
  </div>`;
}

function renderCarrierTabIntegration(c) {
  const i = c.integration;
  return `
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">REAL-TIME API STATUS</div>
      <div style="display:flex; gap:var(--space-md); align-items:center; margin-bottom:var(--space-md);">
        <div style="width:96px; height:96px; border-radius:50%; background:conic-gradient(var(--status-green) ${i.api_health*3.6}deg, var(--bg-card) 0); display:flex; align-items:center; justify-content:center;">
          <div style="width:72px; height:72px; border-radius:50%; background:var(--bg-secondary); display:flex; align-items:center; justify-content:center; font-weight:700; color:var(--status-green);">${i.api_health}%</div>
        </div>
        <div>
          <div style="font-weight:700; color:var(--status-green);">Healthy</div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">30-day uptime: ${i.api_uptime_30d}</div>
          <div style="font-size:0.85rem; color:var(--text-muted);">Avg response: ${i.avg_response_ms}ms</div>
          <div style="font-size:0.85rem; color:var(--text-muted);">Last sync: ${i.last_sync}</div>
        </div>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">INTEGRATION CHANNELS</div>
      <div style="font-size:0.9rem; display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center;"><span><span style="color:${i.method.includes('API')?'var(--status-green)':'var(--text-muted)'};">●</span> Real-time API</span>${i.method.includes('API') ? badge('green','Active') : badge('gray','—')}</div>
        <div style="display:flex; justify-content:space-between; align-items:center;"><span><span style="color:${i.ivans.enabled?'var(--status-green)':'var(--text-muted)'};">●</span> IVANS</span>${i.ivans.enabled ? badge('green','Connected') : badge('gray','—')}</div>
        <div style="display:flex; justify-content:space-between; align-items:center;"><span><span style="color:${i.comp_rater.enabled?'var(--status-green)':'var(--text-muted)'};">●</span> Comparative Rater</span>${i.comp_rater.enabled ? badge('green','Live') : badge('gray','—')}</div>
        <div style="display:flex; justify-content:space-between; align-items:center;"><span><span style="color:${i.sso?'var(--status-green)':'var(--text-muted)'};">●</span> SSO Portal Link</span>${i.sso ? badge('green','Active') : badge('gray','—')}</div>
      </div>
      <div style="margin-top:var(--space-md); padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem;">
        <strong>Comp Rater Partners:</strong> ${i.comp_rater.partners.join(' · ')}<br/>
        <strong>Last IVANS download:</strong> ${i.ivans.last_download}
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-md);">
      <div class="section-title" style="margin:0;">WEBHOOKS & NOTIFICATIONS</div>
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Webhook configuration opened')">⚙ Configure</button>
    </div>
    <div style="display:flex; gap:var(--space-sm); flex-wrap:wrap;">
      ${i.webhooks.map(w => `<span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${w}</span>`).join('')}
    </div>
  </div>`;
}

function renderCarrierTabAppetite(c) {
  const cell = (v) => {
    const map = { 'Aggressive':'var(--status-green)', 'Selective':'var(--status-amber)', 'Not Accepting':'var(--status-red)' };
    return `<span style="color:${map[v]||'var(--text-muted)'}; font-weight:600;">${v}</span>`;
  };
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom:var(--space-lg);">
    <div class="section-title">DYNAMIC APPETITE MATRIX (BY STATE)</div>
    <table class="data-table">
      <thead><tr><th>Line of Business</th><th>CA</th><th>TX</th><th>NY</th><th>FL</th></tr></thead>
      <tbody>
        ${c.appetite.map(a => `<tr><td><strong>${a.lob}</strong></td><td>${cell(a.ca)}</td><td>${cell(a.tx)}</td><td>${cell(a.ny)}</td><td>${cell(a.fl)}</td></tr>`).join('')}
      </tbody>
    </table>
    <div style="margin-top:var(--space-sm); font-size:0.75rem; color:var(--text-muted);">
      <span style="color:var(--status-green);">●</span> Aggressive — actively writing
      &nbsp;·&nbsp;
      <span style="color:var(--status-amber);">●</span> Selective — case-by-case
      &nbsp;·&nbsp;
      <span style="color:var(--status-red);">●</span> Not Accepting
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">APPETITE RULES & RESTRICTIONS</div>
    ${c.appetite_rules.map(r => `<div style="padding:8px 0; border-bottom:1px solid var(--border-subtle); font-size:0.9rem;">• ${r}</div>`).join('')}
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-md);">
      <div class="section-title" style="margin:0;">UNDERWRITING GUIDELINES LIBRARY</div>
      <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Guidelines library upload')">+ Upload</button>
    </div>
    <table class="data-table">
      <thead><tr><th>Document</th><th>Type</th><th>Size</th><th>Updated</th><th>Action</th></tr></thead>
      <tbody>
        ${c.uw_guidelines.map(g => `
        <tr>
          <td><span style="color:var(--mga-accent); cursor:pointer;">📄 ${g.name}</span></td>
          <td><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${g.type}</span></td>
          <td style="color:var(--text-muted);">${g.size}</td>
          <td>${g.updated}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="window.showAlert('Downloading ${g.name}')">↓</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:rgba(68,138,255,0.05); border:1px solid var(--mga-accent); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="font-weight:700; color:var(--mga-accent); margin-bottom:var(--space-sm);">🔑 BINDING AUTHORITY</div>
    <div style="font-size:0.9rem; line-height:1.6;">
      <div><strong>Producer Authority:</strong> ${c.authority.binding_authority}</div>
      <div><strong>Referral Required:</strong> ${c.authority.referral_required}</div>
    </div>
  </div>`;
}

function renderCarrierTabScorecard(c) {
  const s = c.scorecard;
  const star = (r) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r));
  const metric = (label, value, bar, color, suffix='') => `
    <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
      <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-sm);">
        <div style="font-size:0.8rem; color:var(--text-muted);">${label}</div>
        <strong style="color:${color};">${value}${suffix}</strong>
      </div>
      <div style="background:var(--bg-secondary); height:6px; border-radius:3px; overflow:hidden;"><div style="height:100%; width:${bar}%; background:${color};"></div></div>
    </div>`;

  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
      <div class="section-title" style="margin:0;">CARRIER SCORECARD</div>
      <div style="font-size:2rem; color:var(--status-amber);">${star(s.overall)}</div>
    </div>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-md);">
      ${metric('Submission-to-Bind Ratio', s.submission_to_bind, s.submission_to_bind, 'var(--status-green)', '%')}
      ${metric('Avg Quote Turnaround', s.avg_quote_hours + 'h', 100 - (s.avg_quote_hours / 24 * 100), 'var(--mga-accent)', '')}
      ${metric('Claims Service Quality', s.claims_service_quality + '/5', s.claims_service_quality * 20, 'var(--status-green)', '')}
      ${metric('Commission Payment Timeliness', s.commission_payment_timeliness + '/5', s.commission_payment_timeliness * 20, 'var(--status-green)', '')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">VOLUME & GROWTH</div>
    <div style="display:flex; align-items:flex-end; gap:var(--space-xl); height:140px; padding:var(--space-md) 0;">
      <div style="flex:1; display:flex; flex-direction:column; align-items:center;">
        <div style="font-size:0.85rem; font-weight:700; margin-bottom:4px;">$${(c.growth.last_year_premium/1000000).toFixed(2)}M</div>
        <div style="width:100%; background:var(--text-muted); border-radius:4px 4px 0 0; height:${(c.growth.last_year_premium / c.growth.current_premium) * 80}%;"></div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">Last Year</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center;">
        <div style="font-size:0.85rem; font-weight:700; margin-bottom:4px; color:var(--status-green);">$${(c.growth.current_premium/1000000).toFixed(2)}M</div>
        <div style="width:100%; background:var(--status-green); border-radius:4px 4px 0 0; height:80%;"></div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">This Year</div>
      </div>
    </div>
    <div style="text-align:center; margin-top:var(--space-md); font-size:0.9rem;">
      <strong style="color:var(--status-green);">+${c.growth.growth_pct}% YoY growth</strong> · Volume target ${c.volume_commitment.target} (achieved ${c.volume_commitment.actual})
    </div>
  </div>`;
}

function renderCarrierTabQbr(c) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Quarterly Business Reviews</h3>
    <button class="btn btn-primary" onclick="window.showAlert('QBR scheduling launched — calendar invite sent')">+ Schedule Next QBR</button>
  </div>
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg); position:relative;">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${c.qbrs.map((q, i) => `
      <div style="display:flex; gap: var(--space-lg); position:relative;">
        <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid ${i===0?'var(--status-green)':'var(--mga-accent)'}; z-index:1; margin-top:4px;"></div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:700;">QBR — ${q.date}</div>
            ${i===0 ? badge('green','Most Recent') : ''}
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">Attendees: ${q.producer_attendees}</div>
          <div style="font-size:0.9rem; color:var(--text-secondary); margin-top:6px;">${q.notes}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ─── Appetite Matrix (cross-carrier view) ───
function renderCarrierAppetiteMatrix() {
  const carriers = D.brokerCarriersList.filter(c => c.appointment === 'Active');
  const lobs = ['Workers Comp', 'GL', 'BOP', 'Commercial Auto', 'Cyber', 'Professional', 'Property', 'Umbrella'];

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'carriers'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Carriers</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Appetite Matrix Viewer</h2>
    <select class="form-input" style="width:140px;"><option>All States</option><option>CA</option><option>TX</option><option>NY</option><option>FL</option></select>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th style="width:200px;">Carrier</th>
        ${lobs.map(l => `<th style="text-align:center;">${l}</th>`).join('')}
      </tr></thead>
      <tbody>
        ${carriers.map(c => {
          // Synthesize appetite per LOB based on primary/secondary
          const cell = (lob) => {
            if (c.primary_lobs.some(l => l === lob || l.includes(lob))) return '<span style="color:var(--status-green); font-size:1.2rem;">●●●</span>';
            if (lob === 'GL' && c.primary_lobs.includes('General Liability')) return '<span style="color:var(--status-green); font-size:1.2rem;">●●●</span>';
            if (c.primary_lobs.length > 0 && Math.random() > 0.5) return '<span style="color:var(--status-amber); font-size:1.2rem;">●●○</span>';
            return '<span style="color:var(--text-muted); font-size:1.2rem;">○○○</span>';
          };
          return `<tr>
            <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'carrier-details', currentCarrierId:'${c.id}'})">${c.name}</strong></td>
            ${lobs.map(l => `<td style="text-align:center;">${cell(l)}</td>`).join('')}
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-md); padding: var(--space-sm); font-size:0.8rem; color:var(--text-muted);">
    <span style="color:var(--status-green);">●●●</span> Aggressive — actively writing
    &nbsp;·&nbsp;
    <span style="color:var(--status-amber);">●●○</span> Selective — case-by-case
    &nbsp;·&nbsp;
    <span style="color:var(--text-muted);">○○○</span> Not in appetite / declined
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem;">
    💡 <strong>AI Carrier Recommender:</strong> Enter a risk profile to get the best 3 carrier matches by appetite + commission + service.
    <button class="btn btn-secondary btn-sm" style="margin-left:12px;" onclick="window.showAlert('AI Recommender opened — enter risk profile to get top 3 carrier matches')">✨ Try AI Recommender</button>
  </div>`;
}

// ─── Cross-carrier Scorecard ───
function renderCarrierScorecard() {
  const star = (r) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r));
  const sorted = [...D.brokerCarriersList].sort((a, b) => b.overall_rating - a.overall_rating);

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'carriers'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Carriers</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Carrier Performance Scorecards</h2>
    <button class="btn btn-primary" onclick="window.showAlert('Scorecard report exported')">Export</button>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Tier</th><th>Sub→Bind</th><th>Avg Quote</th><th>Claims Quality</th><th>Payment</th><th>Overall</th><th>Status</th></tr></thead>
      <tbody>
        ${sorted.map(c => `
        <tr style="${c.status === 'Suspended' ? 'opacity:0.6;' : ''}">
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'carrier-details', currentCarrierId:'${c.id}'})">${c.name}</strong></td>
          <td style="font-size:0.85rem;">${c.tier.split('—')[0].trim()}</td>
          <td><strong style="color:${c.bind_ratio >= 80 ? 'var(--status-green)' : c.bind_ratio >= 70 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${c.bind_ratio}%</strong></td>
          <td>${c.avg_quote_hours > 0 ? c.avg_quote_hours + 'h' : '—'}</td>
          <td><span style="color:var(--status-amber);">${star(c.claims_score)}</span> <span style="color:var(--text-muted);">(${c.claims_score})</span></td>
          <td><span style="color:var(--status-amber);">${star(c.payment_score)}</span> <span style="color:var(--text-muted);">(${c.payment_score})</span></td>
          <td><strong style="font-size:1.1rem; color:${c.overall_rating >= 4.5 ? 'var(--status-green)' : c.overall_rating >= 4.0 ? 'var(--mga-accent)' : c.overall_rating >= 3.0 ? 'var(--status-amber)' : 'var(--status-red)'};">${c.overall_rating}</strong></td>
          <td>${badge(c.statusColor, c.status)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ─── Integrations Monitor ───
function renderCarrierIntegrations() {
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'carriers'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Carriers</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Integration Status Monitor</h2>
    <button class="btn btn-secondary" onclick="window.showAlert('Health check pinged all 14 API endpoints')">⚡ Run Health Check</button>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">API Endpoints Live</div><div class="kpi-value" style="color:var(--status-green);">14</div></div>
    <div class="kpi-card"><div class="kpi-label">IVANS Connections</div><div class="kpi-value">${D.brokerCarriersList.filter(c => c.ivans).length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Comp Rater</div><div class="kpi-value">${D.brokerCarriersList.filter(c => c.comp_rater).length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg API Health</div><div class="kpi-value" style="color:var(--status-green);">96.8%</div></div>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Method</th><th>API Health</th><th>IVANS</th><th>Comp Rater</th><th>SSO</th><th>Status</th></tr></thead>
      <tbody>
        ${D.brokerCarriersList.map(c => `
        <tr>
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'carrier-details', currentCarrierId:'${c.id}'})">${c.name}</strong></td>
          <td>${c.integration}</td>
          <td>${c.api_health > 0 ? `<div style="display:flex; align-items:center; gap:6px;"><div style="width:60px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${c.api_health}%; background:${c.api_health > 95 ? 'var(--status-green)' : c.api_health > 90 ? 'var(--status-amber)' : 'var(--status-red)'};"></div></div><strong>${c.api_health}%</strong></div>` : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${c.ivans ? '✓' : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${c.comp_rater ? '✓' : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${c.sso ? `<button class="btn btn-ghost btn-sm" onclick="window.showAlert('SSO to ${c.name} portal')">🔗 Open</button>` : '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${badge(c.statusColor, c.status)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ─── Carrier Comparison Tool ───
function renderCarrierComparisonTool() {
  const compare = D.brokerCarriersList.slice(0, 4);
  const star = (r) => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(r));

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'carriers'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Carriers</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Carrier Comparison Tool</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:200px;"><option>Workers Comp</option><option>GL</option><option>BOP</option></select>
      <button class="btn btn-secondary" onclick="window.showAlert('Carrier picker opened')">⚙ Change Carriers</button>
    </div>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th style="width:240px;">Attribute</th>
        ${compare.map(c => `<th>${c.name}</th>`).join('')}
      </tr></thead>
      <tbody>
        <tr><td><strong>Tier</strong></td>${compare.map(c => `<td>${c.tier.split('—')[0].trim()}</td>`).join('')}</tr>
        <tr><td><strong>AM Best</strong></td>${compare.map(c => `<td>${c.am_best}</td>`).join('')}</tr>
        <tr><td><strong>Integration</strong></td>${compare.map(c => `<td>${c.integration}</td>`).join('')}</tr>
        <tr><td><strong>Appetite (current LOB)</strong></td>${compare.map(c => `<td>${c.appetite_state}</td>`).join('')}</tr>
        <tr style="background:rgba(68,138,255,0.04);"><td><strong>Hit Ratio</strong></td>${compare.map(c => `<td><strong>${c.hit_ratio}%</strong></td>`).join('')}</tr>
        <tr style="background:rgba(68,138,255,0.04);"><td><strong>Bind Ratio</strong></td>${compare.map(c => `<td><strong>${c.bind_ratio}%</strong></td>`).join('')}</tr>
        <tr><td><strong>Avg Quote Time</strong></td>${compare.map(c => `<td>${c.avg_quote_hours}h</td>`).join('')}</tr>
        <tr><td><strong>Claims Service</strong></td>${compare.map(c => `<td><span style="color:var(--status-amber);">${star(c.claims_score)}</span></td>`).join('')}</tr>
        <tr><td><strong>Payment Timeliness</strong></td>${compare.map(c => `<td><span style="color:var(--status-amber);">${star(c.payment_score)}</span></td>`).join('')}</tr>
        <tr style="background:rgba(0,230,118,0.04);"><td><strong>Overall Rating</strong></td>${compare.map(c => `<td><strong style="font-size:1.1rem;">${c.overall_rating}/5</strong></td>`).join('')}</tr>
        <tr><td><strong>YTD Premium</strong></td>${compare.map(c => `<td>$${(c.ytd_premium/1000).toFixed(0)}k</td>`).join('')}</tr>
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem;">
    💡 Use this tool when deciding which carriers to submit a new risk to. Recommendation: top 3 by combined appetite + bind ratio + service rating.
  </div>`;
}

// ─── Carrier Analytics ───
function renderBrokerCarrierAnalytics() {
  const a = D.carrierAnalytics;
  const maxPrem = Math.max(...a.premium_by_carrier.map(c => c.ytd));
  const maxVol = Math.max(...a.submission_volume_trend.map(v => v.volume));

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'carriers'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Carriers</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Carrier Analytics</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>YTD</option><option>Last 12 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Carrier analytics report exported')">Export</button>
    </div>
  </div>

  ${kpiCards(D.brokerCarriersKPIs, 6)}

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top:var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PREMIUM PRODUCTION BY CARRIER</div>
      ${a.premium_by_carrier.map(c => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <strong>${c.carrier}</strong>
          <span><strong>$${(c.ytd/1000).toFixed(0)}k</strong> <span style="color:var(--text-muted);">(${c.share}%)</span></span>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${(c.ytd/maxPrem)*100}%; background:var(--mga-accent);"></div></div>
      </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">HIT & BIND RATIO BY CARRIER</div>
      <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
        <thead><tr style="color:var(--text-muted); border-bottom:1px solid var(--border-subtle); text-align:left;">
          <th style="padding:var(--space-sm) 0; font-weight:normal;">CARRIER</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">HIT</th>
          <th style="padding:var(--space-sm) 0; font-weight:normal;">BIND</th>
        </tr></thead>
        <tbody>
          ${a.hit_bind_grid.map(c => `<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:var(--space-sm) 0;"><strong>${c.carrier}</strong></td><td style="padding:var(--space-sm) 0;"><strong style="color:${c.hit >= 45 ? 'var(--status-green)' : c.hit >= 35 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${c.hit}%</strong></td><td style="padding:var(--space-sm) 0;"><strong style="color:${c.bind >= 80 ? 'var(--status-green)' : c.bind >= 70 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${c.bind}%</strong></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PROFITABILITY (LOSS RATIO + COMMISSION)</div>
      <table class="data-table">
        <thead><tr><th>Carrier</th><th>Loss Ratio</th><th>Comm %</th><th>Profitability</th></tr></thead>
        <tbody>
          ${a.loss_ratio_profitability.map(c => `
          <tr>
            <td><strong>${c.carrier}</strong></td>
            <td><strong style="color:${c.loss_ratio > 75 ? 'var(--status-red)' : c.loss_ratio > 65 ? 'var(--status-amber)' : 'var(--status-green)'};">${c.loss_ratio}%</strong></td>
            <td>${c.commission_rate}%</td>
            <td>${badge(c.profitability === 'Excellent' ? 'green' : c.profitability === 'Good' ? 'blue' : c.profitability === 'Watch' ? 'amber' : 'red', c.profitability)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">SUBMISSION VOLUME TREND</div>
      <div style="display:flex; align-items:flex-end; gap:var(--space-md); height:200px; padding:var(--space-md) 0;">
        ${a.submission_volume_trend.map(m => `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; height:100%;">
          <div style="font-size:0.85rem; font-weight:700;">${m.volume}</div>
          <div style="width:100%; background:var(--mga-accent); border-radius:3px 3px 0 0; height:${(m.volume/maxVol)*80}%;"></div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${m.month}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div class="section-title">CARRIER RESPONSE TIME ANALYSIS</div>
    ${a.response_time_analysis.map(c => {
      const over = c.avg_hours > c.target;
      return `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <strong>${c.carrier}</strong>
          <span style="color:${over?'var(--status-red)':'var(--status-green)'};">${c.avg_hours}h / ${c.target}h target</span>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; position:relative;">
          <div style="position:absolute; left:${Math.min(100,(c.target/30)*100)}%; top:-2px; bottom:-2px; width:2px; background:var(--text-muted);"></div>
          <div style="height:100%; width:${Math.min(100,(c.avg_hours/30)*100)}%; background:${over?'var(--status-red)':'var(--status-green)'};"></div>
        </div>
      </div>`;
    }).join('')}
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:rgba(0,230,118,0.04); border:1px solid var(--status-green); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--status-green);">🏆 TOP PERFORMING CARRIERS</div>
      ${a.top_bottom.top.map((c, i) => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:var(--space-md) 0; border-bottom:${i<2?'1px solid var(--border-subtle)':'none'};">
        <div><div style="font-weight:700;">${i===0?'🥇':i===1?'🥈':'🥉'} ${c.carrier}</div></div>
        <strong style="font-size:1.1rem; color:var(--status-green);">${c.rating}/5</strong>
      </div>`).join('')}
    </div>
    <div style="background:rgba(255,82,82,0.04); border:1px solid var(--status-red); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--status-red);">⚠ NEEDS ATTENTION</div>
      ${a.top_bottom.bottom.map(c => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:var(--space-md) 0; border-bottom:1px solid var(--border-subtle);">
        <div style="font-weight:700;">${c.carrier}</div>
        <strong style="font-size:1.1rem; color:var(--status-red);">${c.rating}/5</strong>
      </div>`).join('')}
    </div>
  </div>`;
}

// ════════════════════════════════════════════════════════════════
// CLIENT ONBOARDING
// ════════════════════════════════════════════════════════════════
function renderOnboardingDashboard() {
  const stage = state.onbStage || 'all';
  const filters = state.onbFilters || {};
  let rows = D.onboardingsList;
  if (stage !== 'all') rows = rows.filter(o => o.stage === stage);
  if (filters.source && filters.source !== 'All') rows = rows.filter(o => o.source.includes(filters.source));
  if (filters.producer && filters.producer !== 'All') rows = rows.filter(o => o.producer === filters.producer);
  if (filters.segment && filters.segment !== 'All') rows = rows.filter(o => o.segment === filters.segment);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    rows = rows.filter(o => (o.id + ' ' + o.client + ' ' + o.contact + ' ' + o.target_lobs).toLowerCase().includes(q));
  }

  const stageCounts = D.onboardingStages.slice(0, 6).map(s => ({
    ...s,
    count: D.onboardingsList.filter(o => o.stage === s.id).length,
    value: D.onboardingsList.filter(o => o.stage === s.id).reduce((sum, o) => sum + (o.est_premium || 0), 0)
  }));

  const tab = (id, label, count) => `<div data-onb-stage="${id}" style="padding:var(--space-sm) var(--space-md); cursor:pointer; ${stage===id?'border-bottom:2px solid var(--mga-accent); color:var(--text-primary); font-weight:600;':'color:var(--text-muted);'}">${label}${count !== undefined ? ` <span style="background:rgba(255,255,255,0.08); padding:1px 6px; border-radius:8px; font-size:0.75rem; margin-left:4px;">${count}</span>`:''}</div>`;

  const stageBadge = (id) => {
    const s = D.onboardingStages.find(s => s.id === id);
    return s ? badge(s.color, s.label) : '';
  };

  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Client Onboarding</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'onboarding-checklist'})">📋 Checklist Templates</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'onboarding-analytics'})">📊 Analytics</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'onboarding-wizard', onbStep:1})">+ New Client</button>
    </div>
  </div>

  ${kpiCards(D.onboardingKPIs, 6)}

  <!-- Pipeline Funnel (6 stages) -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-top: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-md);">
      <div class="section-title" style="margin:0;">ONBOARDING PIPELINE — 6 STAGES</div>
      <div style="font-size:0.85rem; color:var(--text-muted);">Total active: ${D.onboardingsList.filter(o => o.stage !== 'lost' && o.stage !== 'active').length} · Click any stage to filter</div>
    </div>
    <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:var(--space-sm);">
      ${stageCounts.map(s => {
        const colorVar = s.color === 'red' ? 'var(--status-red)' : s.color === 'amber' ? 'var(--status-amber)' : s.color === 'green' ? 'var(--status-green)' : s.color === 'gray' ? 'var(--text-muted)' : 'var(--mga-accent)';
        return `
        <div data-onb-stage="${s.id}" style="cursor:pointer; background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); border-left:3px solid ${colorVar}; ${stage===s.id?'outline:1px solid '+colorVar+';':''}">
          <div style="color:var(--text-muted); font-size:0.7rem; text-transform:uppercase; margin-bottom:4px;">${s.order}. ${s.label}</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <div style="font-size:1.5rem; font-weight:700;">${s.count}</div>
            <div style="color:${colorVar}; font-size:0.8rem; font-weight:600;">${s.value > 0 ? '$'+(s.value/1000).toFixed(0)+'k' : '—'}</div>
          </div>
          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:4px;">${s.desc}</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div style="display:flex; border-bottom:1px solid var(--border-subtle); margin: var(--space-lg) 0;">
    ${tab('all', 'All', D.onboardingsList.length)}
    ${tab('prospect', 'Prospect', D.onboardingsList.filter(o => o.stage === 'prospect').length)}
    ${tab('lead', 'Lead', D.onboardingsList.filter(o => o.stage === 'lead').length)}
    ${tab('application', 'Application', D.onboardingsList.filter(o => o.stage === 'application').length)}
    ${tab('documents', 'Documents', D.onboardingsList.filter(o => o.stage === 'documents').length)}
    ${tab('bound', 'Bound', D.onboardingsList.filter(o => o.stage === 'bound').length)}
    ${tab('active', 'Active', D.onboardingsList.filter(o => o.stage === 'active').length)}
    ${tab('lost', 'Lost', D.onboardingsList.filter(o => o.stage === 'lost').length)}
  </div>

  <div class="filter-bar" style="margin-bottom: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap;">
    <input class="form-input" id="onb-search" placeholder="Search client, ID, contact..." value="${filters.search||''}" style="flex:1; min-width:240px;"/>
    <select class="form-input" id="onb-source" style="width:200px;"><option value="All">All Sources</option>${D.onboardingSources.map(s => `<option ${filters.source===s?'selected':''}>${s}</option>`).join('')}</select>
    <select class="form-input" id="onb-producer" style="width:160px;"><option value="All">All Producers</option>${['Sarah Chen','Mike Torres','Lisa Park','David Kim'].map(p => `<option ${filters.producer===p?'selected':''}>${p}</option>`).join('')}</select>
    <select class="form-input" id="onb-segment" style="width:160px;"><option value="All">All Segments</option>${['Standard','High-Value','Platinum'].map(s => `<option ${filters.segment===s?'selected':''}>${s}</option>`).join('')}</select>
    <button class="btn btn-ghost btn-sm" id="onb-reset">Reset</button>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr>
        <th>OB ID</th><th>Client</th><th>Source</th><th>Target LOBs</th><th>Segment</th><th>Producer</th><th>Progress</th><th>Started</th><th>Days Open</th><th>Est Premium</th><th>Stage</th><th>Action</th>
      </tr></thead>
      <tbody>
        ${rows.length === 0 ? `<tr><td colspan="12" style="text-align:center; color:var(--text-muted); padding:var(--space-xl);">No onboardings match these filters.</td></tr>` : rows.map(o => {
          const days = Math.round((new Date('2026-04-18') - new Date(o.started)) / (1000*60*60*24));
          return `
          <tr style="${o.stalled ? 'background:rgba(255,82,82,0.04);' : o.segment === 'Platinum' ? 'background:rgba(68,138,255,0.04);' : ''}">
            <td><strong style="color:var(--mga-accent); cursor:pointer; font-family:monospace;" onclick="window.setState({screen:'onboarding-details', currentOnboardingId:'${o.id}'})">${o.id}</strong>${o.stalled ? '<div style="font-size:0.7rem; color:var(--status-red);">⚠ Stalled</div>' : ''}</td>
            <td><strong>${o.client}</strong><div style="font-size:0.7rem; color:var(--text-muted);">${o.contact.split('—')[0].trim()}</div></td>
            <td style="font-size:0.85rem;">${o.source}</td>
            <td style="font-size:0.85rem;">${o.target_lobs}</td>
            <td>${o.segment === 'Platinum' ? badge('blue', '⭐ Platinum') : o.segment === 'High-Value' ? badge('amber', 'High-Value') : badge('gray', 'Standard')}</td>
            <td style="font-size:0.85rem;">${o.producer}</td>
            <td><div style="display:flex; align-items:center; gap:6px;"><div style="width:60px; height:6px; background:var(--bg-card); border-radius:3px; overflow:hidden;"><div style="height:100%; width:${o.completion_pct}%; background:${o.completion_pct >= 80 ? 'var(--status-green)' : o.completion_pct >= 50 ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div><strong>${o.completion_pct}%</strong></div></td>
            <td style="font-size:0.85rem;">${o.started}</td>
            <td style="${days > 14 ? 'color:var(--status-red); font-weight:600;' : days > 7 ? 'color:var(--status-amber);' : ''}">${days}d</td>
            <td>${o.est_premium ? '$'+o.est_premium.toLocaleString() : '<span style="color:var(--text-muted);">—</span>'}</td>
            <td>${stageBadge(o.stage)}${o.lost_reason ? `<div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">${o.lost_reason}</div>` : ''}</td>
            <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'onboarding-details', currentOnboardingId:'${o.id}'})">Open</button></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    <div style="padding: var(--space-md); color: var(--text-muted); font-size: 0.8rem;">Showing ${rows.length} onboarding${rows.length===1?'':'s'} · Pipeline value: $${(rows.reduce((s,o)=>s+(o.est_premium||0),0)/1000).toFixed(0)}k</div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Goal: complete onboarding within 7–14 days for standard risks. Platinum + High-Value clients get white-glove journey. AI-powered document extraction speeds data entry. AML/OFAC compliance checks run automatically.
  </div>`;
}

// ─── Onboarding 360° Detail ───
function renderOnboardingDetails() {
  const o = D.onboardingDetail;
  const tab = state.onboardingTab || 'overview';
  const tabs = [
    { id: 'overview',     label: 'Overview' },
    { id: 'checklist',    label: `Checklist (${o.checklist.filter(c => c.status === 'Done').length}/${o.checklist.length})` },
    { id: 'documents',    label: `Documents (${o.documents.length})` },
    { id: 'esig',         label: 'e-Signatures' },
    { id: 'timeline',     label: `Timeline (${o.timeline.length})` },
    { id: 'welcome',      label: 'Welcome Journey' }
  ];
  const content = {
    overview: renderOnboardingTabOverview,
    checklist: renderOnboardingTabChecklist,
    documents: renderOnboardingTabDocuments,
    esig: renderOnboardingTabEsig,
    timeline: renderOnboardingTabTimeline,
    welcome: renderOnboardingTabWelcome
  }[tab] || renderOnboardingTabOverview;

  const currentStageOrder = D.onboardingStages.find(s => s.id === o.stage)?.order || 1;

  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'onboarding'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Onboarding</button>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-md);">
    <div>
      <div style="display:flex; align-items:center; gap: var(--space-sm); margin-bottom:4px;">
        <h2 style="margin:0; font-size:1.4rem;">${o.id} — ${o.client}</h2>
        ${badge(o.status_color, o.status)}
        ${badge(o.segment === 'Platinum' ? 'blue' : 'gray', o.segment)}
      </div>
      <div style="font-size:0.85rem; color:var(--text-secondary);">
        Source: <strong>${o.source}</strong> · Started ${o.started} · ${o.days_open} days open · Producer: ${o.producer} · CSR: ${o.csr}
      </div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.openTaskModal({client:'${o.client}', subject:'Onboarding follow-up: '})">+ Task</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Welcome packet sent — email + portal invite + agency intro video')">📦 Send Welcome Kit</button>
      <button class="btn btn-primary" onclick="window.showAlert('Activated! Client moved to Active status, portal account created')">✓ Activate Client</button>
    </div>
  </div>

  <!-- Stage progress strip -->
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-md); margin-bottom: var(--space-lg);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-sm);">
      <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">ONBOARDING PROGRESS</div>
      <div style="font-size:0.85rem;"><strong>Stage ${currentStageOrder} of 6</strong> · ${o.checklist.filter(c => c.status === 'Done').length}/${o.checklist.length} tasks complete</div>
    </div>
    <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:6px;">
      ${D.onboardingStages.slice(0, 6).map(s => {
        const isPast = s.order < currentStageOrder;
        const isCurrent = s.order === currentStageOrder;
        const color = isPast ? 'var(--status-green)' : isCurrent ? 'var(--mga-accent)' : 'var(--bg-card)';
        return `
        <div style="display:flex; flex-direction:column; align-items:center; gap:4px;">
          <div style="width:28px; height:28px; border-radius:50%; background:${color}; display:flex; align-items:center; justify-content:center; color:white; font-weight:600; font-size:0.85rem;">${isPast ? '✓' : s.order}</div>
          <div style="font-size:0.7rem; text-align:center; color:${isCurrent ? 'var(--text-primary)' : 'var(--text-muted)'}; font-weight:${isCurrent?'600':'normal'};">${s.label}</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <!-- TABS -->
  <div style="display:flex; border-bottom: 1px solid var(--border-subtle); margin-bottom: var(--space-xl); gap: var(--space-lg);">
    ${tabs.map(t => {
      const active = tab === t.id;
      const style = active ? 'border-bottom: 2px solid var(--mga-accent); font-weight:600; color:var(--text-primary);' : 'color:var(--text-muted);';
      return `<div style="padding:var(--space-sm) 0; cursor:pointer; ${style}" onclick="window.setState({onboardingTab:'${t.id}'})">${t.label}</div>`;
    }).join('')}
  </div>

  ${content(o)}`;
}

function renderOnboardingTabOverview(o) {
  return `
  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-xl);">
    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">BUSINESS PROFILE</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); font-size:0.9rem;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Legal Name</span><strong>${o.business.legal_name}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">DBA</span><strong>${o.business.dba}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">FEIN / Tax ID</span><strong>${o.business.fein}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">NAICS</span><strong style="text-align:right;">${o.business.naics}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Annual Revenue</span><strong>${o.business.revenue}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Employees</span><strong>${o.business.employees}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Years in Business</span><strong>${o.business.years_in_business}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Locations</span><strong>${o.business.locations}</strong></div>
          <div style="display:flex; justify-content:space-between; grid-column:1/-1;"><span style="color:var(--text-muted);">Address</span><strong style="text-align:right;">${o.business.address}</strong></div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">INSURANCE HISTORY</div>
        <div style="font-size:0.9rem; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Current Carrier</span><strong>${o.insurance_history.current_carrier}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Prior Carrier</span><strong>${o.insurance_history.prior_carrier || 'None'}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">5-Yr Loss History</span><strong>${o.insurance_history.losses_5yr}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Prior Declinations</span><strong>${o.insurance_history.declinations}</strong></div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">TARGET COVERAGES</div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">${o.target_lobs.map(l => `<span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${l}</span>`).join('')}</div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:var(--space-md);">Estimated Annual Premium: <strong style="color:var(--text-primary);">$${o.est_premium ? o.est_premium.toLocaleString() : '—'}</strong></div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">AUTOMATED TASKS</div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
          ${o.tasks.map(t => `
          <tr style="border-bottom:1px solid var(--border-subtle);">
            <td style="padding:var(--space-sm) 0;">${t.auto ? '⚙' : '✋'} ${t.task}</td>
            <td style="padding:var(--space-sm) 0; color:var(--text-muted); width:120px;">${t.assigned}</td>
            <td style="padding:var(--space-sm) 0; width:100px;">${t.due}</td>
            <td style="padding:var(--space-sm) 0; width:120px;">${badge(t.status === 'Done' ? 'green' : t.status === 'In Progress' ? 'amber' : 'gray', t.status)}</td>
          </tr>`).join('')}
        </table>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-lg);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">PRIMARY CONTACT</div>
        <div style="font-weight:700; font-size:1rem;">${o.contact.name}</div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">${o.contact.title}</div>
        <div style="font-size:0.85rem; margin-top:8px;">📞 ${o.contact.phone}</div>
        <div style="font-size:0.85rem; color:var(--mga-accent);">✉️ ${o.contact.email}</div>
        <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:var(--space-md);" onclick="window.showAlert('Email + SMS sent to ${o.contact.name}')">💬 Contact</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">KEY DATES</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Started</span><strong>${o.started}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Target Active</span><strong style="color:var(--mga-accent);">${o.target_active_date}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Days Open</span><strong>${o.days_open}d</strong></div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CLIENT PORTAL</div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:var(--space-md);">Magic-link invitation sent · client can self-serve uploads, e-sign, and track status.</div>
        <button class="btn btn-secondary btn-sm" style="width:100%; margin-bottom:var(--space-sm);" onclick="window.showAlert('Portal invitation re-sent')">🔗 Resend Portal Invite</button>
        <button class="btn btn-ghost btn-sm" style="width:100%;" onclick="window.showAlert('Preview opened — what client sees in their portal')">👁 Preview Client View</button>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">COMPLIANCE</div>
        <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-amber);">⏳</span> AML / OFAC Check</span><strong style="color:var(--status-amber);">In Progress</strong></div>
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-amber);">⏳</span> Signed Disclosures</span><strong style="color:var(--status-amber);">Pending</strong></div>
          <div style="display:flex; justify-content:space-between;"><span><span style="color:var(--status-green);">✓</span> KYC Verified</span><strong style="color:var(--status-green);">Done</strong></div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderOnboardingTabChecklist(o) {
  const done = o.checklist.filter(c => c.status === 'Done').length;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">Onboarding Checklist — ${done}/${o.checklist.length} Complete</h3>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Checklist exported — PDF')">Export</button>
      <button class="btn btn-primary" onclick="window.showAlert('Custom task added to checklist')">+ Add Task</button>
    </div>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Task</th><th>Owner</th><th>Status</th><th>Due</th><th>Done</th><th>Auto-check</th><th>Action</th></tr></thead>
      <tbody>
        ${o.checklist.map(c => `
        <tr style="${c.status === 'Done' ? 'opacity:0.7;' : c.status === 'Pending' && new Date(c.due) < new Date('2026-04-18') ? 'background:rgba(255,82,82,0.04);' : ''}">
          <td><label style="display:flex; gap:8px; align-items:center;"><input type="checkbox" ${c.status === 'Done' ? 'checked' : ''} onclick="window.showAlert('Checklist item ${c.status === 'Done' ? 'unchecked' : 'completed'} — audit logged')"/> <strong>${c.task}</strong></label></td>
          <td><span class="badge badge-${c.owner === 'Producer' ? 'blue' : c.owner === 'Client' ? 'amber' : 'gray'}"><span class="badge-dot badge-dot-${c.owner === 'Producer' ? 'blue' : c.owner === 'Client' ? 'amber' : 'gray'}"></span>${c.owner}</span></td>
          <td>${badge(c.status === 'Done' ? 'green' : c.status === 'Sent' ? 'blue' : 'amber', c.status)}</td>
          <td style="font-size:0.85rem;">${c.due}</td>
          <td style="font-size:0.85rem;">${c.done_date || '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="text-align:center;">${c.auto_check ? '⚙ Yes' : '<span style="color:var(--text-muted);">Manual</span>'}</td>
          <td>${c.status === 'Pending' ? `<button class="btn btn-secondary btn-sm" onclick="window.showAlert('Reminder sent — ${c.task}')">Remind</button>` : c.status === 'Sent' ? `<button class="btn btn-ghost btn-sm" onclick="window.showAlert('Re-sent to client')">Resend</button>` : `<button class="btn btn-ghost btn-sm" onclick="window.showAlert('Audit log entry')">View</button>`}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Auto-check items complete on system events (e.g., e-Sig signed → marks application item done). Manual items require human confirmation. Pending items past due trigger automatic reminders.
  </div>`;
}

function renderOnboardingTabDocuments(o) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); overflow:hidden;">
    <div style="padding:var(--space-md); border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02);">
      <div style="font-weight:600; font-size:0.85rem;">DOCUMENT CHECKLIST — ${o.documents.filter(d => d.status === 'Received').length}/${o.documents.length} RECEIVED</div>
      <div style="display:flex; gap:var(--space-sm);">
        <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Secure upload link copied to clipboard — share with client')">🔗 Client Upload Link</button>
        <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Reminder email sent to client for outstanding items')">📧 Remind Client</button>
        <button class="btn btn-primary btn-sm" onclick="window.showAlert('Bulk upload modal launched')">+ Upload</button>
      </div>
    </div>
    <table class="data-table">
      <thead><tr><th>Document</th><th>Type</th><th>Status</th><th>Uploaded</th><th>By</th><th>Action</th></tr></thead>
      <tbody>
        ${o.documents.map(d => `
        <tr style="${d.status === 'Outstanding' ? 'background:rgba(255,167,38,0.04);' : ''}">
          <td>${d.uploaded ? `<span style="color:var(--mga-accent); cursor:pointer;">📄 ${d.name}</span>` : `<span style="color:var(--text-muted);">📄 ${d.name}</span>`}</td>
          <td><span class="badge badge-blue"><span class="badge-dot badge-dot-blue"></span>${d.type}</span></td>
          <td>${badge(d.status === 'Received' ? 'green' : d.status.includes('Sent') ? 'amber' : 'red', d.status)}</td>
          <td style="font-size:0.85rem;">${d.uploaded || '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${d.by || '<span style="color:var(--text-muted);">—</span>'}</td>
          <td>${d.status === 'Outstanding' ? `<button class="btn btn-primary btn-sm" onclick="window.showAlert('Upload portal launched for ${d.name}')">Upload</button>` : `<button class="btn btn-ghost btn-sm" onclick="window.showAlert('Downloading ${d.name}')">↓</button>`}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 AI-assisted data extraction auto-parses uploaded PDFs (financials, payroll, articles) into the application. Encrypted storage with 7-year retention. OFAC/AML scan runs automatically on key documents.
  </div>`;
}

function renderOnboardingTabEsig(o) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h3 style="margin:0; font-size:1.1rem;">e-Signature Requests</h3>
    <button class="btn btn-primary" onclick="window.showAlert('New e-Sig envelope wizard launched')">+ New Envelope</button>
  </div>

  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Envelope</th><th>Document</th><th>Sent</th><th>Viewed</th><th>Signed</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${o.esignatures.map(e => `
        <tr>
          <td style="font-family:monospace;"><strong>${e.envelope}</strong></td>
          <td>${e.doc}</td>
          <td style="font-size:0.85rem;">${e.sent}</td>
          <td style="font-size:0.85rem;">${e.viewed || '<span style="color:var(--text-muted);">—</span>'}</td>
          <td style="font-size:0.85rem;">${e.signed || '<span style="color:var(--text-muted);">Pending</span>'}</td>
          <td>${badge(e.status === 'Signed' ? 'green' : e.status === 'Viewed' ? 'amber' : 'blue', e.status)}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Reminder sent')">Remind</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Voiding envelope')">Void</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderOnboardingTabTimeline(o) {
  return `
  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">ONBOARDING JOURNEY</div>
    <div style="display:flex; flex-direction:column; gap: var(--space-lg); position:relative; margin-top: var(--space-lg);">
      <div style="position:absolute; left:7px; top:10px; bottom:10px; width:2px; background:var(--border-subtle);"></div>
      ${o.timeline.map(ev => `
      <div style="display:flex; gap: var(--space-lg); position:relative;">
        <div style="width:16px; height:16px; border-radius:50%; background:var(--bg-secondary); border:3px solid var(--mga-accent); z-index:1; margin-top:4px;"></div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:600; font-size:0.9rem;">${ev.action}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${ev.when}</div>
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">${ev.details}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">by ${ev.actor}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function renderOnboardingTabWelcome(o) {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h3 style="margin:0; font-size:1.1rem;">Welcome Journey — ${o.welcome_journey.segment_template}</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Auto-triggered touchpoints based on client segment</div>
    </div>
    <button class="btn btn-secondary" onclick="window.showAlert('Journey customizer opened')">⚙ Customize Journey</button>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; flex-direction:column; gap: var(--space-md);">
      ${o.welcome_journey.touchpoints.map((t, i) => `
      <div style="display:flex; gap: var(--space-lg); align-items:center; padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
        <div style="width:48px; height:48px; border-radius:50%; background:var(--mga-accent); color:white; display:flex; align-items:center; justify-content:center; font-weight:700;">D+${t.day}</div>
        <div style="flex:1;">
          <div style="font-weight:600;">${t.action}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${t.day === 0 ? 'On activation' : `${t.day} day${t.day===1?'':'s'} after activation`}</div>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Touchpoint scheduled / re-scheduled')">${t.day === 0 ? 'Send Now' : 'Schedule'}</button>
      </div>`).join('')}
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem;">
    💡 Personalized welcome journey based on client segment. <strong>Standard SMB</strong> follows the default 90-day path; <strong>Platinum</strong> clients add a CEO welcome call + quarterly check-ins; <strong>High-Value</strong> clients receive an in-person agency tour.
  </div>`;
}

// ─── Onboarding Wizard (6 steps) ───
function onboardingStepper() {
  const steps = ['Lead Info', 'Discovery', 'Quoting', 'Documents', 'Binding', 'Activation'];
  const step = state.onbStep || 1;
  return `
  <div class="stepper">
    ${steps.map((s, i) => {
      const num = i + 1;
      const cls = num < step ? 'completed' : num === step ? 'active' : '';
      const lineCls = num < step ? 'completed' : '';
      return `
        <div class="stepper-step ${cls}" data-onb-step="${num}">
          <div class="stepper-dot">${num < step ? '✓' : num}</div>
          <span>${num}. ${s}</span>
        </div>
        ${num < steps.length ? `<div class="stepper-line ${lineCls}"></div>` : ''}`;
    }).join('')}
  </div>`;
}

function renderOnboardingWizard() {
  const step = state.onbStep || 1;
  const stepRenderers = [null, renderOnbStep1, renderOnbStep2, renderOnbStep3, renderOnbStep4, renderOnbStep5, renderOnbStep6];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost" id="btn-onb-back">← Back</button>
    <span style="margin-left: var(--space-sm); font-weight: 600;">New Client Onboarding Wizard</span>
  </div>
  <div class="data-table-wrapper">
    ${onboardingStepper()}
    <div style="padding: var(--space-xl);">
      ${stepRenderers[step]()}
    </div>
    <div class="form-footer">
      ${step > 1 ? '<button class="btn btn-secondary" id="btn-onb-prev">← Back</button>' : '<button class="btn btn-secondary" onclick="window.showAlert(\'Wizard saved as draft\')">Save Draft</button>'}
      ${step < 6 ? `<button class="btn btn-primary" id="btn-onb-next">${['', 'Next: Discovery →', 'Next: Quoting →', 'Next: Documents →', 'Next: Binding →', 'Next: Activate →'][step]}</button>` : '<button class="btn btn-primary" onclick="window.setState({screen:\'onboarding-details\', currentOnboardingId:\'OB-2026-0042\', onbStep:1})">Open Onboarding 360° →</button>'}
    </div>
  </div>`;
}

function renderOnbStep1() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 1: Lead Capture & Prospect Creation</h3>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); margin-bottom:var(--space-md);">
    <div><label class="form-label">Business Name</label><input class="form-input" placeholder="Legal name of business"/></div>
    <div><label class="form-label">DBA / Trade Name</label><input class="form-input" placeholder="If different from legal"/></div>
    <div><label class="form-label">Primary Contact</label><input class="form-input" placeholder="Full name"/></div>
    <div><label class="form-label">Title</label><input class="form-input" placeholder="Owner, CEO, CFO..."/></div>
    <div><label class="form-label">Email</label><input class="form-input" type="email" placeholder="contact@business.com"/></div>
    <div><label class="form-label">Phone</label><input class="form-input" placeholder="(555) 555-5555"/></div>
    <div><label class="form-label">Industry / NAICS</label><input class="form-input" placeholder="Search by industry..."/></div>
    <div><label class="form-label">Source</label>
      <select class="form-input">${D.onboardingSources.map(s => `<option>${s}</option>`).join('')}</select>
    </div>
    <div><label class="form-label">Assigned Producer</label>
      <select class="form-input"><option>Sarah Chen</option><option>Mike Torres</option><option>Lisa Park</option><option>David Kim</option></select>
    </div>
    <div><label class="form-label">Client Segment</label>
      <select class="form-input"><option>Standard</option><option>High-Value</option><option>Platinum (white-glove)</option></select>
    </div>
  </div>
  <div style="padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem;">
    💡 Auto-routing: Platinum clients are auto-assigned to Senior Producer + dedicated CSR. Standard clients use the team pool.
  </div>`;
}

function renderOnbStep2() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 2: Discovery & Needs Analysis</h3>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); margin-bottom:var(--space-md);">
    <div><label class="form-label">Discovery Method</label><select class="form-input"><option>Phone call</option><option>Video call</option><option>In-person meeting</option></select></div>
    <div><label class="form-label">Scheduled Date</label><input class="form-input" type="date"/></div>
    <div><label class="form-label">Annual Revenue</label><input class="form-input" placeholder="$"/></div>
    <div><label class="form-label">Employees</label><input class="form-input" type="number"/></div>
    <div><label class="form-label">Locations</label><input class="form-input" type="number"/></div>
    <div><label class="form-label">Years in Business</label><input class="form-input" type="number"/></div>
  </div>
  <div style="margin-bottom:var(--space-md);">
    <label class="form-label">Current Insurance Summary</label>
    <textarea class="form-input" rows="3" placeholder="Existing carrier, expiration dates, current premiums..."></textarea>
  </div>
  <div style="margin-bottom:var(--space-md);">
    <label class="form-label">Coverage Needs (check all that apply)</label>
    <div style="display:flex; gap:var(--space-md); flex-wrap:wrap; padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
      ${['BOP','Workers Comp','GL','Commercial Auto','Cyber','Professional','Property','Umbrella'].map(l => `<label style="font-size:0.9rem;"><input type="checkbox"/> ${l}</label>`).join('')}
    </div>
  </div>
  <div>
    <label class="form-label">Identified Coverage Gaps / Notes</label>
    <textarea class="form-input" rows="3" placeholder="What's missing from current coverage? Special concerns?"></textarea>
  </div>`;
}

function renderOnbStep3() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 3: Quote & Proposal</h3>
  <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding:var(--space-md); margin-bottom:var(--space-md); font-size:0.9rem;">
    <strong style="color:var(--status-green);">✓ Risk profile complete</strong> — quote workflow will use this data to populate carrier applications.
  </div>
  <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); margin-bottom:var(--space-md);">
    <div style="font-weight:600; margin-bottom:var(--space-sm);">Recommended carriers (by appetite + coverage match):</div>
    <div style="display:flex; flex-direction:column; gap:8px; font-size:0.9rem;">
      <div style="display:flex; justify-content:space-between; padding:8px; background:rgba(68,138,255,0.05); border-radius:4px;"><span>🏢 Hartford — BOP (Aggressive appetite, 92% match)</span><strong style="color:var(--status-green);">Top Pick</strong></div>
      <div style="display:flex; justify-content:space-between; padding:8px;"><span>🏢 Travelers — BOP (Aggressive appetite, 88% match)</span></div>
      <div style="display:flex; justify-content:space-between; padding:8px;"><span>🏢 SEMC — WC + GL bundle (95% match)</span></div>
    </div>
  </div>
  <button class="btn btn-primary" onclick="window.setState({screen:'submission', wizardStep:1})">→ Launch Quote Workflow</button>
  <div style="margin-top:var(--space-md); padding:var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Once quote is created in the Quoting module, return to this wizard to continue. Quote ID will be linked back to this onboarding record.
  </div>`;
}

function renderOnbStep4() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 4: Document Collection</h3>
  <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md); margin-bottom:var(--space-md);">
    <div style="font-weight:600; margin-bottom:var(--space-sm);">📋 Auto-generated checklist (based on selected LOBs):</div>
    <div style="display:flex; flex-direction:column; gap:8px; font-size:0.9rem;">
      <label><input type="checkbox" checked/> Articles of Incorporation/Organization</label>
      <label><input type="checkbox" checked/> Last 12-month payroll register</label>
      <label><input type="checkbox" checked/> Loss runs (5 years)</label>
      <label><input type="checkbox" checked/> Photos of premises</label>
      <label><input type="checkbox" checked/> Lease agreement</label>
      <label><input type="checkbox" checked/> OSHA 300 logs (WC)</label>
    </div>
  </div>
  <div style="display:flex; gap:var(--space-md);">
    <button class="btn btn-primary" style="flex:1;" onclick="window.showAlert('Document request email sent — secure portal link included')">📧 Send Document Request to Client</button>
    <button class="btn btn-secondary" onclick="window.showAlert('Reusable upload link copied')">🔗 Copy Upload Link</button>
  </div>
  <div style="margin-top:var(--space-md); padding:var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Client uploads through their secure portal. AI-assisted data extraction parses uploaded PDFs and pre-fills the application. Reminders auto-send if items are outstanding past due date.
  </div>`;
}

function renderOnbStep5() {
  return `
  <h3 style="margin-bottom: var(--space-md);">Step 5: Application & Binding</h3>
  <div style="background:rgba(0,230,118,0.05); border:1px solid var(--status-green); border-radius:var(--radius-md); padding:var(--space-md); margin-bottom:var(--space-md); font-size:0.9rem;">
    <strong style="color:var(--status-green);">✓ Quote selected · Documents received</strong> — ready to submit to carrier and collect e-Signatures.
  </div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); margin-bottom:var(--space-md);">
    <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
      <div style="font-weight:600; margin-bottom:var(--space-sm);">📝 Pre-filled Application</div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:var(--space-sm);">Auto-populated from quote + uploaded docs. Review before sending.</div>
      <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="window.showAlert('Application preview opened')">Preview & Edit</button>
    </div>
    <div style="background:var(--bg-card); padding:var(--space-md); border-radius:var(--radius-md);">
      <div style="font-weight:600; margin-bottom:var(--space-sm);">✍️ e-Signature Envelope</div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:var(--space-sm);">DocuSign envelope with application + disclosures.</div>
      <button class="btn btn-primary btn-sm" style="width:100%;" onclick="window.showAlert('e-Sig envelope sent to client')">Send for e-Sig</button>
    </div>
  </div>
  <button class="btn btn-primary" style="width:100%;" onclick="window.setState({screen:'binding-wizard', bindingStep:1})">→ Launch Binding Wizard</button>`;
}

function renderOnbStep6() {
  return `
  <div style="text-align:center; padding: var(--space-xl);">
    <div style="font-size:4rem; margin-bottom: var(--space-md);">🎉</div>
    <h2 style="margin-bottom: var(--space-sm);">Welcome to the Family</h2>
    <p style="color:var(--text-secondary); margin-bottom: var(--space-lg);">Client activated. Welcome kit sent. Portal account created. Welcome journey triggered.</p>
    <div style="display:inline-flex; gap: var(--space-xl); background:var(--bg-secondary); border:1px solid var(--border-subtle); padding: var(--space-lg); border-radius: var(--radius-md);">
      <div><div style="color:var(--text-muted); font-size:0.75rem;">CLIENT ID</div><div style="font-family:monospace; font-weight:700; color:var(--mga-accent); font-size:1.1rem;">CL-2026-0142</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">PORTAL STATUS</div><div style="font-weight:700; color:var(--status-green);">✓ Active</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">WELCOME KIT</div><div style="font-weight:700; color:var(--status-green);">✓ Sent</div></div>
      <div><div style="color:var(--text-muted); font-size:0.75rem;">NEXT TOUCHPOINT</div><div style="font-weight:700;">Day 3 Producer Call</div></div>
    </div>
    <div style="margin-top:var(--space-lg); display:flex; gap:var(--space-md); justify-content:center; font-size:0.85rem;">
      <div>✓ 6 welcome touchpoints scheduled</div>
      <div>✓ 30-day review on calendar</div>
      <div>✓ Cross-sell flags activated</div>
    </div>
  </div>`;
}

// ─── Onboarding Checklist Templates ───
function renderOnboardingChecklist() {
  const cl = D.onboardingDocChecklists;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'onboarding'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Onboarding</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Document Checklist Templates</h2>
    <button class="btn btn-primary" onclick="window.showAlert('New checklist template builder')">+ New Template</button>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:var(--space-md); margin-bottom:var(--space-lg); font-size:0.9rem;">
    <strong>📋 Smart checklists by Line of Business</strong> — when a client's target LOBs are selected during onboarding, the system auto-merges these templates into a single document request list.
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    ${Object.entries(cl).map(([lob, items]) => `
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-md);">
        <div class="section-title" style="margin:0;">${lob}</div>
        <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Edit ${lob} checklist')">Edit</button>
      </div>
      <ul style="margin:0; padding-left:20px; font-size:0.9rem; color:var(--text-secondary);">
        ${items.map(i => `<li style="padding:4px 0;">${i}</li>`).join('')}
      </ul>
    </div>`).join('')}
  </div>`;
}

// ─── Onboarding Analytics ───
function renderOnboardingAnalytics() {
  const a = D.onboardingAnalytics;
  const maxFunnel = Math.max(...a.completion_funnel.map(s => s.count));
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'onboarding'})" style="padding: 4px 8px; margin-left:-8px;">← Back to Onboarding</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2 style="margin:0;">Onboarding Analytics</h2>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>YTD</option><option>Last 90 days</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Onboarding report exported')">Export</button>
    </div>
  </div>

  ${kpiCards(D.onboardingKPIs, 6)}

  <!-- Funnel + Time per Stage -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">COMPLETION FUNNEL</div>
      ${a.completion_funnel.map((s, i) => {
        const widthPct = (s.count / maxFunnel) * 100;
        const dropPct = i === 0 ? 0 : Math.round(((a.completion_funnel[i-1].count - s.count) / a.completion_funnel[i-1].count) * 100);
        return `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <strong>${s.stage}</strong>
            <span><strong>${s.count}</strong>${i > 0 ? ` <span style="color:var(--status-red);">(-${dropPct}%)</span>` : ''}</span>
          </div>
          <div style="background:var(--bg-card); height:24px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${widthPct}%; background:var(--mga-accent); display:flex; align-items:center; padding:0 8px; color:white; font-size:0.8rem; font-weight:600;">${s.count}</div></div>
        </div>`;
      }).join('')}
      <div style="margin-top:var(--space-md); padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem; text-align:center;">
        <strong>Overall completion rate:</strong> ${Math.round((a.completion_funnel[5].count / a.completion_funnel[0].count) * 100)}% (Prospect → Active)
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">AVG TIME PER STAGE</div>
      ${a.avg_time_per_stage.map(s => {
        const over = s.days > s.target;
        return `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <strong>${s.stage}</strong>
            <span style="color:${over?'var(--status-red)':'var(--status-green)'};">${s.days}d / ${s.target}d target</span>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; position:relative;">
            <div style="position:absolute; left:${Math.min(100,(s.target/5)*100)}%; top:-2px; bottom:-2px; width:2px; background:var(--text-muted);"></div>
            <div style="height:100%; width:${Math.min(100,(s.days/5)*100)}%; background:${over?'var(--status-red)':'var(--status-green)'};"></div>
          </div>
        </div>`;
      }).join('')}
      <div style="margin-top:var(--space-md); padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.85rem; text-align:center;">
        <strong>End-to-end:</strong> ${a.avg_time_to_onboard}d avg · ${a.target_time}d target
      </div>
    </div>
  </div>

  <!-- Drop-off + Retention -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">DROP-OFF REASONS</div>
      ${a.drop_off_reasons.map(r => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${r.reason}</strong> <span style="color:var(--text-muted);">· ${r.count}</span></span>
          <strong>${r.pct}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${r.pct*3}%; background:var(--status-red);"></div></div>
      </div>`).join('')}
    </div>

    <div style="background:rgba(0,230,118,0.04); border:1px solid var(--status-green); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title" style="color:var(--status-green);">90-DAY RETENTION</div>
      <div style="display:flex; align-items:center; gap:var(--space-lg);">
        <div style="width:140px; height:140px; border-radius:50%; background:conic-gradient(var(--status-green) ${a.retention_90d.rate * 3.6}deg, var(--bg-card) 0); display:flex; align-items:center; justify-content:center;">
          <div style="width:108px; height:108px; border-radius:50%; background:var(--bg-secondary); display:flex; align-items:center; justify-content:center; flex-direction:column;">
            <div style="font-size:2rem; font-weight:700; color:var(--status-green);">${a.retention_90d.rate}%</div>
            <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">RETAINED</div>
          </div>
        </div>
        <div style="flex:1; font-size:0.9rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">Onboarded</span><strong>${a.retention_90d.onboarded}</strong></div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--text-muted);">Retained @ 90d</span><strong style="color:var(--status-green);">${a.retention_90d.retained_90d}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Lost in first 90d</span><strong style="color:var(--status-red);">${a.retention_90d.onboarded - a.retention_90d.retained_90d}</strong></div>
        </div>
      </div>
    </div>
  </div>

  <!-- By source + producer -->
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CONVERSION BY SOURCE</div>
      <table class="data-table">
        <thead><tr><th>Source</th><th>Leads</th><th>Converted</th><th>Rate</th></tr></thead>
        <tbody>
          ${a.conversion_by_source.map(s => `
          <tr>
            <td><strong>${s.source}</strong></td>
            <td>${s.leads}</td>
            <td>${s.converted}</td>
            <td><strong style="color:${s.rate >= 70 ? 'var(--status-green)' : s.rate >= 50 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${s.rate}%</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CONVERSION BY PRODUCER</div>
      ${a.conversion_by_producer.map(p => `
      <div style="margin-bottom: var(--space-md);">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
          <span><strong>${p.name}</strong> <span style="color:var(--text-muted);">· ${p.converted}/${p.leads}</span></span>
          <strong style="color:${p.rate >= 75 ? 'var(--status-green)' : p.rate >= 65 ? 'var(--mga-accent)' : 'var(--status-amber)'};">${p.rate}%</strong>
        </div>
        <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${p.rate}%; background:${p.rate >= 75 ? 'var(--status-green)' : p.rate >= 65 ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <div style="margin-top: var(--space-lg); padding: var(--space-md); background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); font-size:0.85rem; color:var(--text-muted);">
    💡 Goal: 7–14 days end-to-end onboarding. Drop-off > 25% at any stage triggers process review. Producers below 65% conversion rate paired with onboarding coach.
  </div>`;
}

// ════════════════════════════════════════════════════════════════
// DOCUMENTS MODULE
// ════════════════════════════════════════════════════════════════
const _docStatusColor = {
  'Signed': 'green', 'Active': 'green', 'Pending Signature': 'amber',
  'Pending Review': 'amber', 'Expiring': 'amber', 'Draft': 'gray',
  'Archived': 'gray', 'Expired': 'red'
};

function _docSubNav(active) {
  const tabs = [
    { key: 'documents',             label: 'Library',       icon: '📚' },
    { key: 'document-esign',        label: 'e-Signature',   icon: '✍️' },
    { key: 'document-upload',       label: 'Upload / Import', icon: '⬆️' },
    { key: 'document-checklist',    label: 'Checklists',    icon: '☑' },
    { key: 'document-compliance',   label: 'Compliance',    icon: '⚖️' },
    { key: 'document-analytics',    label: 'Analytics',     icon: '📊' },
    { key: 'document-ai',           label: 'AI Assistant',  icon: '🤖' }
  ];
  return `
  <div class="doc-subnav">
    ${tabs.map(t => `
      <div class="doc-subnav-tab${active === t.key ? ' active' : ''}" onclick="window.setState({screen:'${t.key}'})">
        <span>${t.icon}</span><span>${t.label}</span>
      </div>`).join('')}
  </div>`;
}

function renderDocumentsLibrary() {
  const q = (state.docQuery || '').toLowerCase();
  const cat = state.docCategory || 'all';
  const docs = D.documentLibrary.filter(d =>
    (cat === 'all' || d.category === cat) &&
    (!q || d.name.toLowerCase().includes(q) || d.client.toLowerCase().includes(q) || d.policy.toLowerCase().includes(q) || d.id.toLowerCase().includes(q))
  );
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Document Management &amp; e-Signature</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Centralized, audit-ready vault · ACORD / DOI / HIPAA / GLBA compliant</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'document-upload'})">⬆ Upload</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'document-esign'})">✍ Send for Signature</button>
      <button class="btn btn-primary" onclick="window.showAlert('Generating new document from template…')">+ New Document</button>
    </div>
  </div>

  ${kpiCards(D.documentKPIs, 6)}

  ${_docSubNav('documents')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">DOCUMENT CATEGORIES</div>
      <div class="doc-category-grid">
        <div class="doc-category-card${cat==='all'?' active':''}" onclick="window.setState({docCategory:'all'})">
          <span class="doc-category-icon">📁</span>
          <div><strong>All Documents</strong><div style="color:var(--text-muted); font-size:0.8rem;">Everything</div></div>
          <span class="doc-category-count">${D.documentLibrary.length}</span>
        </div>
        ${D.documentCategories.map(c => `
          <div class="doc-category-card${cat===c.key?' active':''}" onclick="window.setState({docCategory:'${c.key}'})">
            <span class="doc-category-icon">${c.icon}</span>
            <div><strong>${c.name}</strong><div style="color:var(--text-muted); font-size:0.8rem;">${c.desc}</div></div>
            <span class="doc-category-count">${c.count}</span>
          </div>`).join('')}
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">STATUS WORKFLOW</div>
      <div class="doc-status-flow">
        ${D.documentStatuses.map((s,i) => `
          <div class="doc-status-step">
            <span class="doc-status-dot doc-status-${(_docStatusColor[s]||'gray')}"></span>
            <span>${s}</span>
          </div>
          ${i < D.documentStatuses.length-1 ? '<span class="doc-status-arrow">›</span>' : ''}
        `).join('')}
      </div>
      <div style="margin-top: var(--space-md); display:flex; gap:var(--space-sm); flex-wrap:wrap; font-size:0.78rem;">
        <span class="doc-legend"><span class="doc-legend-dot" style="background:var(--status-green);"></span>Compliant</span>
        <span class="doc-legend"><span class="doc-legend-dot" style="background:var(--status-amber);"></span>Expiring</span>
        <span class="doc-legend"><span class="doc-legend-dot" style="background:var(--status-red);"></span>Missing</span>
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; gap:var(--space-sm); margin-bottom: var(--space-md); align-items:center;">
      <div style="flex:1; position:relative;">
        <input type="text" class="form-input" placeholder="🔍 Search documents, clients, policies, IDs..." value="${state.docQuery || ''}" style="padding-left:12px;" oninput="window.setState({docQuery:this.value})"/>
      </div>
      <select class="form-input" style="width:160px;"><option>All LOB</option><option>Workers Comp</option><option>General Liability</option><option>Cyber</option><option>BOP</option></select>
      <select class="form-input" style="width:160px;"><option>All Status</option>${D.documentStatuses.map(s=>`<option>${s}</option>`).join('')}</select>
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Exporting ${docs.length} documents to CSV')">Export</button>
    </div>
    <table class="data-table">
      <thead><tr><th>ID</th><th>Document</th><th>Type</th><th>Client / Policy</th><th>LOB</th><th>Version</th><th>Status</th><th>Expires</th><th>Uploaded</th><th>Action</th></tr></thead>
      <tbody>
        ${docs.map(d => `
        <tr>
          <td style="font-family:monospace; font-size:0.8rem;">${d.id}</td>
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'document-details', currentDocId:'${d.id}'})">${d.name}</strong><div style="color:var(--text-muted); font-size:0.75rem;">${d.size}</div></td>
          <td>${d.type}</td>
          <td><div><strong>${d.client}</strong></div><div style="color:var(--text-muted); font-size:0.75rem; font-family:monospace;">${d.policy}</div></td>
          <td>${d.lob}</td>
          <td>v${d.version}</td>
          <td>${badge(d.statusColor, d.status)}</td>
          <td style="font-size:0.85rem;">${d.expires}</td>
          <td style="font-size:0.85rem;"><div>${d.uploaded}</div><div style="color:var(--text-muted); font-size:0.75rem;">${d.uploadedBy}</div></td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'document-details', currentDocId:'${d.id}'})">View</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Downloading ${d.name}')">⬇</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
    ${docs.length === 0 ? `<div style="text-align:center; color:var(--text-muted); padding: var(--space-xl);">No documents found for this filter.</div>` : ''}
  </div>`;
}

function renderDocumentDetails() {
  const d = D.documentDetail;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'documents'})" style="padding:4px 8px; margin-left:-8px;">← Back to Library</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--space-lg);">
    <div>
      <h2 style="margin:0;">${d.name}</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px; font-family:monospace;">${d.id} · ${d.type} · v${d.version} · ${d.size} · ${d.pages} pages</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Downloading ${d.name}')">⬇ Download</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Share link copied — expires in 7 days')">🔗 Share</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Reminder sent to 2 pending signers')">🔔 Remind</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'document-esign'})">✍ e-Signature</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">DOCUMENT PREVIEW</div>
      <div class="doc-preview">
        <div class="doc-preview-page">
          <div class="doc-preview-watermark">BINDER</div>
          <div style="display:flex; justify-content:space-between; border-bottom: 2px solid #4a4af0; padding-bottom:8px; margin-bottom:16px;">
            <div>
              <div style="font-size:0.7rem; color:#888;">CERTIFICATE OF INSURANCE / BINDER</div>
              <div style="font-weight:700; font-size:1.1rem; color:#111;">Liberty Mutual Insurance</div>
            </div>
            <div style="text-align:right; font-family:monospace; font-size:0.75rem; color:#4a4af0;">BDR-48821-05</div>
          </div>
          <div style="font-size:0.75rem; color:#333; line-height:1.6;">
            <p><strong>Named Insured:</strong> ${d.client}</p>
            <p><strong>Policy #:</strong> ${d.policy}</p>
            <p><strong>Effective:</strong> ${d.effective}</p>
            <p style="margin-top:10px;">This binder evidences temporary coverage subject to the conditions described in the attached policy schedule. Full policy will be issued within 30 days.</p>
            <p style="margin-top:10px; color:#888; font-size:0.65rem;">— Page 1 of ${d.pages} —</p>
          </div>
        </div>
        <div style="display:flex; gap:var(--space-sm); margin-top: var(--space-md); align-items:center; justify-content:center;">
          <button class="btn btn-ghost btn-sm">◀</button>
          <span style="color:var(--text-muted); font-size:0.85rem;">Page 1 of ${d.pages}</span>
          <button class="btn btn-ghost btn-sm">▶</button>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Comparing v1 vs v2 side-by-side')">⇄ Compare Versions</button>
        </div>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:var(--space-md);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">STATUS</div>
        <div style="margin-bottom:var(--space-md);">${badge('amber', d.status)}</div>
        <div style="font-size:0.85rem; line-height:1.9;">
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Uploaded</span><span>${d.uploaded}</span></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Uploaded By</span><span>${d.uploadedBy}</span></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Effective</span><span>${d.effective}</span></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Sign Deadline</span><strong style="color:var(--status-amber);">${d.expires}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Confidentiality</span><span>${d.confidentiality}</span></div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">LINKED ENTITIES</div>
        <div style="font-size:0.85rem; line-height:1.9;">
          <div>👥 <strong>${d.client}</strong></div>
          <div style="font-family:monospace; color:var(--text-muted);">📋 ${d.policy}</div>
          <div>🏢 ${d.carrier}</div>
          <div>📂 ${d.lob}</div>
        </div>
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SECURITY &amp; RETENTION</div>
        <div style="font-size:0.82rem; line-height:1.8;">
          <div><span style="color:var(--text-muted);">Encryption:</span> ${d.encryption}</div>
          <div><span style="color:var(--text-muted);">Retention:</span> ${d.retention}</div>
          <div><span style="color:var(--text-muted);">Deletion Date:</span> ${d.deletion}</div>
          <div><span style="color:var(--text-muted);">Last Accessed:</span> ${d.lastAccessed}</div>
        </div>
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">SIGNERS &amp; SIGNATURE TRAIL</div>
      <table class="data-table">
        <thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Signed At</th><th>IP / Method</th></tr></thead>
        <tbody>
          ${d.signers.map(s => `
          <tr>
            <td><strong>${s.name}</strong></td>
            <td>${s.role}</td>
            <td>${badge(s.status==='Signed'?'green':s.status==='Viewed'?'amber':'blue', s.status)}</td>
            <td style="font-size:0.82rem;">${s.signed}</td>
            <td style="font-size:0.75rem; color:var(--text-muted);">${s.ip}<br/>${s.method}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">METADATA</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; font-size:0.85rem;">
        ${d.metadata.map(m => `<div><div style="color:var(--text-muted); font-size:0.75rem;">${m.k}</div><strong>${m.v}</strong></div>`).join('')}
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">VERSION HISTORY</div>
      ${d.versions.map(v => `
        <div style="display:flex; gap:var(--space-md); padding:var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
          <div style="background:var(--mga-accent); color:#fff; width:32px; height:32px; display:flex; align-items:center; justify-content:center; border-radius:var(--radius-sm); font-weight:700; font-size:0.85rem;">v${v.v}</div>
          <div style="flex:1;">
            <div style="font-size:0.85rem;">${v.change}</div>
            <div style="color:var(--text-muted); font-size:0.75rem; margin-top:2px;">${v.date} · ${v.by}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Viewing v${v.v}')">View</button>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">AUDIT TRAIL (CHAIN-OF-CUSTODY)</div>
      <div style="max-height:320px; overflow-y:auto;">
      ${d.auditTrail.map(a => `
        <div style="display:flex; gap:var(--space-sm); padding:6px 0; border-bottom:1px solid var(--border-subtle); font-size:0.82rem;">
          <div style="color:var(--text-muted); font-family:monospace; min-width:140px;">${a.ts}</div>
          <div style="flex:1;"><strong>${a.actor}</strong> — ${a.event}</div>
          <div style="color:var(--text-muted); font-family:monospace; font-size:0.75rem;">${a.ip}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">ACCESS CONTROLS</div>
    <table class="data-table">
      <thead><tr><th>Role / User</th><th>Access Level</th><th>Action</th></tr></thead>
      <tbody>
        ${d.permissions.map(p => `
        <tr>
          <td><strong>${p.role}</strong></td>
          <td>${badge(p.access==='Owner'?'blue':p.access==='Edit'?'green':p.access==='Sign'?'amber':'gray', p.access)}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="window.showAlert('Revoked ${p.role}')">Revoke</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderDocumentEsignCenter() {
  const env = D.documentEnvelopes;
  const pending = env.filter(e => e.status !== 'Signed');
  const signed = env.filter(e => e.status === 'Signed');
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">e-Signature Request Center</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Bulk send · templates · status dashboard · DocuSign / Adobe Sign / built-in</div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Opening template library — 24 templates')">📋 Templates</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Bulk reminders sent — 6 envelopes')">📧 Bulk Reminder</button>
      <button class="btn btn-primary" onclick="window.showAlert('New envelope wizard launched')">+ New Envelope</button>
    </div>
  </div>

  ${_docSubNav('document-esign')}

  <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Envelopes Sent (30d)</div><div class="kpi-value">328</div></div>
    <div class="kpi-card"><div class="kpi-label">Pending</div><div class="kpi-value warning">${pending.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Signed (30d)</div><div class="kpi-value">${signed.length + 262}</div></div>
    <div class="kpi-card"><div class="kpi-label">Completion Rate</div><div class="kpi-value">82%</div></div>
    <div class="kpi-card"><div class="kpi-label">Avg Sign Time</div><div class="kpi-value">4.2h</div></div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">PENDING ENVELOPES</div>
    <table class="data-table">
      <thead><tr><th>Envelope</th><th>Document</th><th>Client</th><th>Signatory</th><th>Sent</th><th>Viewed</th><th>Expires</th><th>Provider</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${pending.map(e => `
        <tr>
          <td style="font-family:monospace; font-size:0.8rem;">${e.id}</td>
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'document-details', currentDocId:'${e.doc}'})">${e.docName}</strong><div style="color:var(--text-muted); font-size:0.75rem; font-family:monospace;">${e.doc}</div></td>
          <td>${e.client}</td>
          <td>${e.signatory}</td>
          <td style="font-size:0.82rem;">${e.sent}</td>
          <td style="font-size:0.82rem;">${e.viewed}</td>
          <td style="font-size:0.82rem;">${e.expires}</td>
          <td>${e.provider}</td>
          <td>${badge(e.status==='Viewed'?'amber':e.status==='In Progress'?'blue':'blue', e.status)}</td>
          <td style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Reminder sent to ${e.signatory}')">Remind</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Voided ${e.id}')">Void</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RECENTLY SIGNED</div>
      <table class="data-table">
        <thead><tr><th>Envelope</th><th>Document</th><th>Client</th><th>Signed</th><th>Provider</th></tr></thead>
        <tbody>
          ${signed.map(e => `
          <tr>
            <td style="font-family:monospace; font-size:0.8rem;">${e.id}</td>
            <td><strong style="color:var(--mga-accent);">${e.docName}</strong></td>
            <td>${e.client}</td>
            <td style="font-size:0.82rem;">${e.signed}</td>
            <td>${e.provider}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">QUICK TEMPLATES</div>
      ${['ACORD 125 Commercial App','Binder + TRIA Election','COI Request','Endorsement Confirmation','Privacy & GLBA Notice','Renewal Offer Acceptance'].map(t => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding: var(--space-sm) 0; border-bottom: 1px solid var(--border-subtle);">
          <div><strong style="font-size:0.88rem;">${t}</strong></div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Launching ${t}')">Send →</button>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderDocumentUploadCenter() {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Upload &amp; Import Center</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Bulk upload · carrier sync · email-to-document · OCR &amp; data extraction</div>
    </div>
  </div>

  ${_docSubNav('document-upload')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="doc-dropzone" onclick="window.showAlert('File picker opened')">
      <div style="font-size:3rem; margin-bottom: var(--space-sm);">⬆</div>
      <h3 style="margin:0;">Drag &amp; drop files here</h3>
      <div style="color:var(--text-muted); margin-top:var(--space-sm);">or <strong style="color:var(--mga-accent); cursor:pointer;">browse files</strong> — supports PDF, DOCX, JPG, PNG, XLSX up to 50 MB each</div>
      <div style="display:flex; gap:var(--space-sm); margin-top: var(--space-lg); flex-wrap:wrap; justify-content:center;">
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('Camera opened')">📱 Mobile Camera</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('Connecting to carrier portals…')">🏢 Carrier Sync</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('Email intake configured — docs@quantana.com.au')">📧 Email-to-Doc</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('OCR scan started — extracting fields…')">🔍 OCR &amp; Extract</button>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">AUTOMATIC FILING</div>
      <div style="font-size:0.85rem; line-height:1.8;">
        <div>📁 Client folder: <strong>Auto-matched by policy #</strong></div>
        <div>🏷️ Metadata: <strong>Auto-tagged from OCR</strong></div>
        <div>📂 Smart folder: <strong>AI categorizes</strong></div>
        <div>✅ Compliance check: <strong>Auto-applied on upload</strong></div>
        <div>🔔 Checklist update: <strong>Item marked done</strong></div>
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); font-size:0.82rem; color:var(--text-muted);">
        💡 95% of uploads file themselves with no manual tagging.
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">IN-FLIGHT UPLOADS</div>
    ${[
      { name: 'Loss_Run_Coastal_2023-2025.pdf', size: '2.4 MB', progress: 100, status: 'OCR Complete — auto-filed to Coastal Realty' },
      { name: 'ACORD_125_DataCore.pdf',        size: '1.1 MB', progress: 100, status: 'Metadata extracted — pending compliance review' },
      { name: 'COI_Certificate_Landlord.pdf',  size: '284 KB', progress: 72,  status: 'Uploading…' },
      { name: 'Bulk_import_archive.zip',       size: '48.2 MB',progress: 44,  status: 'Expanding & scanning 124 files…' }
    ].map(f => `
      <div style="display:flex; gap:var(--space-md); padding: var(--space-sm) 0; align-items:center; border-bottom:1px solid var(--border-subtle);">
        <div style="width:28px;">📄</div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem;"><strong>${f.name}</strong><span style="color:var(--text-muted);">${f.size}</span></div>
          <div style="color:var(--text-muted); font-size:0.78rem; margin:2px 0;">${f.status}</div>
          <div style="background:var(--bg-card); height:4px; border-radius:2px; overflow:hidden;"><div style="height:100%; width:${f.progress}%; background:${f.progress===100?'var(--status-green)':'var(--mga-accent)'};"></div></div>
        </div>
        <div style="width:40px; text-align:right; font-size:0.82rem;">${f.progress}%</div>
      </div>`).join('')}
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">CARRIER PORTAL SYNC STATUS</div>
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Integration</th><th>Last Sync</th><th>Pulled (30d)</th><th>Pushed (30d)</th><th>Status</th></tr></thead>
      <tbody>
        ${[
          { c: 'Liberty Mutual / SEMC', i: 'API',    last: '2026-04-18 08:02', pulled: 142, pushed: 38, ok: true },
          { c: 'CNA',                   i: 'SFTP',   last: '2026-04-18 07:20', pulled: 88,  pushed: 24, ok: true },
          { c: 'Hartford',              i: 'API',    last: '2026-04-18 06:45', pulled: 64,  pushed: 18, ok: true },
          { c: 'AMTrust',               i: 'Email',  last: '2026-04-17 18:10', pulled: 22,  pushed: 8,  ok: false },
          { c: 'Travelers',             i: 'API',    last: '2026-04-18 06:10', pulled: 71,  pushed: 15, ok: true }
        ].map(s => `
        <tr>
          <td><strong>${s.c}</strong></td>
          <td>${s.i}</td>
          <td style="font-size:0.82rem;">${s.last}</td>
          <td>${s.pulled}</td>
          <td>${s.pushed}</td>
          <td>${badge(s.ok?'green':'amber', s.ok?'Healthy':'Degraded')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderDocumentChecklistDashboard() {
  const tasks = D.documentAutomatedTasks;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Document Checklist Dashboard</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Dynamic checklists tied to LOB · auto-complete on upload/sign · owner routing</div>
    </div>
    <button class="btn btn-primary" onclick="window.showAlert('Generating new checklist from LOB template')">+ New Checklist</button>
  </div>

  ${_docSubNav('document-checklist')}

  <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); margin-bottom: var(--space-lg);">
    ${D.documentChecklist.map(c => {
      const pct = Math.round((c.done / c.total) * 100);
      const color = pct === 100 ? 'var(--status-green)' : pct >= 70 ? 'var(--mga-accent)' : 'var(--status-amber)';
      return `
        <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--space-sm);">
            <div>
              <strong style="font-size:1rem;">${c.client}</strong>
              <div style="font-family:monospace; color:var(--text-muted); font-size:0.78rem;">${c.policy}</div>
            </div>
            <span style="background:var(--bg-card); padding:4px 8px; border-radius:var(--radius-sm); font-size:0.78rem;">${c.lob}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span style="color:var(--text-muted);">${c.done}/${c.total} complete</span>
            <strong style="color:${color};">${pct}%</strong>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; margin-bottom: var(--space-md);"><div style="height:100%; width:${pct}%; background:${color};"></div></div>
          ${c.items.map(i => `
            <div style="display:flex; align-items:center; gap: var(--space-sm); padding: 4px 0; font-size:0.82rem;">
              <span style="width:16px; height:16px; border-radius:50%; background:${i.status==='done'?'var(--status-green)':'var(--bg-card)'}; border:${i.status==='done'?'none':'2px solid var(--border-medium)'}; display:inline-flex; align-items:center; justify-content:center; color:#fff; font-size:0.65rem;">${i.status==='done'?'✓':''}</span>
              <div style="flex:1; ${i.status==='done'?'color:var(--text-muted); text-decoration:line-through;':''}">${i.name}</div>
              <span style="color:var(--text-muted); font-size:0.72rem;">${i.owner} · ${i.due}</span>
            </div>`).join('')}
          <div style="margin-top: var(--space-md); font-size:0.82rem;"><span style="color:var(--text-muted);">Owner:</span> <strong>${c.owner}</strong></div>
        </div>`;
    }).join('')}
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">AUTOMATED TASKS QUEUE</div>
    <table class="data-table">
      <thead><tr><th>Task ID</th><th>Task</th><th>Entity</th><th>Due</th><th>Owner</th><th>Priority</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${tasks.map(t => `
        <tr>
          <td style="font-family:monospace; font-size:0.8rem;">${t.id}</td>
          <td><strong>${t.task}</strong></td>
          <td>${t.entity}</td>
          <td style="font-size:0.82rem;">${t.due}</td>
          <td>${t.owner}</td>
          <td>${badge(t.priority==='Urgent'?'red':t.priority==='High'?'amber':t.priority==='Med'?'blue':'gray', t.priority)}</td>
          <td>${badge(t.status==='Done'?'green':t.status==='In Progress'?'blue':'amber', t.status)}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.showAlert('Task ${t.id} marked complete')">Resolve</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderDocumentComplianceReport() {
  const a = D.documentAnalytics;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Compliance &amp; Retention Reports</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">State DOI retention · e-signature audit · disclosures · audit-readiness scoring</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Generating audit report PDF')">📥 Export PDF</button>
      <button class="btn btn-primary" onclick="window.showAlert('Kicking off quarterly compliance sweep')">▶ Run Sweep</button>
    </div>
  </div>

  ${_docSubNav('document-compliance')}

  <div style="display:grid; grid-template-columns: 1fr 2fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); text-align:center;">
      <div class="section-title" style="text-align:left;">AUDIT-READINESS SCORE</div>
      <div style="font-size:4rem; font-weight:800; color:var(--status-green); margin: var(--space-md) 0;">${a.compliance_score.overall}%</div>
      <div style="color:var(--text-muted); font-size:0.85rem;">Above 95% = audit-ready · Above 90% = strong · Below 85% = remediation</div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">SUB-SCORES</div>
      ${a.compliance_score.subs.map(s => `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${s.k}</strong></span>
            <strong style="color:${s.v>=95?'var(--status-green)':s.v>=90?'var(--mga-accent)':'var(--status-amber)'};">${s.v}%</strong>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${s.v}%; background:${s.v>=95?'var(--status-green)':s.v>=90?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
        </div>`).join('')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">RETENTION BY STATE (DOI RULES)</div>
    <table class="data-table">
      <thead><tr><th>State</th><th>Retention Rule</th><th>Docs Under Rule</th><th>Oldest Doc</th><th>Auto-Delete</th><th>Status</th></tr></thead>
      <tbody>
        ${a.retention.map(r => `
        <tr>
          <td><strong>${r.state}</strong></td>
          <td>${r.years} years</td>
          <td>${r.docs.toLocaleString()}</td>
          <td style="font-size:0.82rem; color:var(--text-muted);">${2026 - r.years}-01-01</td>
          <td>${badge('green','Enabled')}</td>
          <td>${badge(r.compliant?'green':'amber', r.compliant?'Compliant':'Review Needed')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">E-SIGNATURE AUDIT TRAIL — LAST 30 DAYS</div>
      <div style="font-size:0.85rem; line-height:1.9;">
        <div style="display:flex; justify-content:space-between;"><span>Envelopes Sent</span><strong>328</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>Signed w/ IP + timestamp</span><strong style="color:var(--status-green);">268 (100%)</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>Multi-factor auth used</span><strong style="color:var(--status-green);">244 (91%)</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>Avg authentication strength</span><strong>SMS OTP + ID</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>Disputes / Voided</span><strong>4</strong></div>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">OPEN COMPLIANCE ITEMS</div>
      ${[
        { item: 'FL retention policy review',        severity: 'Medium', due: '2026-04-30' },
        { item: 'Privacy notice refresh — GLBA 2026', severity: 'High',  due: '2026-04-25' },
        { item: 'Signed disclosure audit — Q1 batch', severity: 'Low',   due: '2026-05-10' },
        { item: 'HIPAA BAA renewals (5 carriers)',    severity: 'Medium',due: '2026-05-15' }
      ].map(i => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
          <div><strong>${i.item}</strong><div style="color:var(--text-muted); font-size:0.78rem; margin-top:2px;">Due ${i.due}</div></div>
          ${badge(i.severity==='High'?'red':i.severity==='Medium'?'amber':'gray', i.severity)}
        </div>`).join('')}
    </div>
  </div>`;
}

function renderDocumentAnalytics() {
  const a = D.documentAnalytics;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Document Analytics</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Completion · e-sign funnel · time-to-package · storage · top doc types</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 30 days</option><option>YTD</option><option>Last 12 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — document analytics')">Export</button>
    </div>
  </div>

  ${_docSubNav('document-analytics')}

  ${kpiCards(D.documentKPIs, 6)}

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg); margin-top: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">COMPLETION RATE BY PRODUCER</div>
      <table class="data-table">
        <thead><tr><th>Producer</th><th>Packages</th><th>Avg Days</th><th>Rate</th></tr></thead>
        <tbody>
          ${a.completion_by_producer.map(p => `
          <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.packages}</td>
            <td>${p.avg_days}d</td>
            <td><strong style="color:${p.rate>=90?'var(--status-green)':p.rate>=85?'var(--mga-accent)':'var(--status-amber)'};">${p.rate}%</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">E-SIGNATURE FUNNEL</div>
      ${a.esign_funnel.map((s,i) => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${s.stage}</strong> <span style="color:var(--text-muted);">${s.count}</span></span>
            <strong>${s.pct}%</strong>
          </div>
          <div style="background:var(--bg-card); height:22px; border-radius:4px; overflow:hidden; position:relative;">
            <div style="height:100%; width:${s.pct}%; background:linear-gradient(90deg, var(--mga-accent), #a67dff);"></div>
          </div>
        </div>`).join('')}
      <div style="margin-top:var(--space-md); padding:var(--space-sm); background:var(--bg-card); border-radius:var(--radius-md); font-size:0.82rem; color:var(--text-muted);">
        💡 Biggest drop-off: Started → Completed (4%). Consider simplifying multi-page binder.
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">TIME TO FULL DOCUMENT PACKAGE</div>
      ${a.time_to_package.map(r => `
        <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
          <div style="width:120px;">${r.range}</div>
          <div style="flex:1; background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${r.pct*2}%; background:${r.range.startsWith('<')?'var(--status-green)':r.range.startsWith('3')?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
          <div style="width:90px; text-align:right;"><strong>${r.count}</strong> <span style="color:var(--text-muted);">(${r.pct}%)</span></div>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">STORAGE USAGE &amp; COST</div>
      <table class="data-table">
        <thead><tr><th>Tier</th><th>GB</th><th>Monthly Cost</th></tr></thead>
        <tbody>
          ${a.storage.map(s => `
          <tr>
            <td><strong>${s.tier}</strong></td>
            <td>${s.gb} GB</td>
            <td>${s.cost}</td>
          </tr>`).join('')}
          <tr style="background:var(--bg-card); font-weight:700;">
            <td>TOTAL</td>
            <td>${a.storage.reduce((s,x)=>s+x.gb,0)} GB</td>
            <td>$207/mo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">MOST REQUESTED DOCUMENT TYPES</div>
    ${a.top_doc_types.map(t => `
      <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
        <div style="width:160px;"><strong>${t.type}</strong></div>
        <div style="flex:1; background:var(--bg-card); height:12px; border-radius:6px; overflow:hidden; margin:0 var(--space-sm);">
          <div style="height:100%; width:${(t.count/1300)*100}%; background:${t.bottleneck?'var(--status-amber)':'var(--mga-accent)'};"></div>
        </div>
        <div style="width:120px; text-align:right;"><strong>${t.count.toLocaleString()}</strong> ${t.bottleneck?`<span style="color:var(--status-amber); font-size:0.75rem;">⚠ bottleneck</span>`:''}</div>
      </div>`).join('')}
  </div>`;
}

function renderDocumentAIAssistant() {
  const chat = D.documentAIChat;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">AI Document Assistant</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Chat to find, summarize, draft, or send any document · OCR-aware · audit-safe</div>
    </div>
  </div>

  ${_docSubNav('document-ai')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); display:flex; flex-direction:column; min-height:540px;">
      <div style="flex:1; overflow-y:auto; padding-right:8px;">
        ${chat.map(m => `
          <div class="doc-ai-msg doc-ai-msg-${m.role}">
            <div class="doc-ai-avatar doc-ai-avatar-${m.role}">${m.role==='ai'?'🤖':'🧑‍💼'}</div>
            <div class="doc-ai-bubble">${m.text.replace(/\n/g,'<br/>')}</div>
          </div>`).join('')}
      </div>
      <div style="margin-top: var(--space-md); display:flex; gap: var(--space-sm);">
        <input class="form-input" style="flex:1;" placeholder="Ask about any document — e.g. 'Find all unsigned binders for Magnolia'"/>
        <button class="btn btn-primary" onclick="window.showAlert('AI processing your request…')">Send →</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-md);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SUGGESTED PROMPTS</div>
        ${[
          'Show unsigned binders expiring this week',
          'Summarize the Magnolia WC policy package',
          'Draft a COI request for Apex Industries',
          'List documents missing GLBA disclosure',
          'Find all Loss Runs uploaded in last 30 days',
          'Compare v1 and v2 of DOC-10480'
        ].map(p => `
          <div class="doc-ai-prompt" onclick="window.showAlert('Running: ${p}')">${p}</div>`).join('')}
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CAPABILITIES</div>
        <div style="font-size:0.85rem; line-height:1.9;">
          <div>🔍 Semantic search across ${D.documentLibrary.length}+ docs</div>
          <div>📝 Auto-summary of any policy or claim</div>
          <div>✍ Draft endorsements, COIs, letters</div>
          <div>📊 Extract fields from scanned PDFs (OCR)</div>
          <div>⚖ Flag missing disclosures</div>
          <div>🔐 Audit-safe — all actions logged</div>
        </div>
      </div>
    </div>
  </div>`;
}

// ════════════════════════════════════════════════════════════════
// MARKET ROUTING MODULE
// ════════════════════════════════════════════════════════════════
function _marketSubNav(active) {
  const tabs = [
    { key: 'market',           label: 'Dashboard',      icon: '📡' },
    { key: 'market-wizard',    label: 'Routing Wizard', icon: '🧭' },
    { key: 'market-quotes',    label: 'Quote Compare',  icon: '⚖' },
    { key: 'market-appetite',  label: 'Appetite Library', icon: '📖' },
    { key: 'market-analytics', label: 'Analytics',      icon: '📊' },
    { key: 'market-ai',        label: 'AI Assistant',   icon: '🤖' }
  ];
  return `
  <div class="doc-subnav">
    ${tabs.map(t => `
      <div class="doc-subnav-tab${active === t.key ? ' active' : ''}" onclick="window.setState({screen:'${t.key}'})">
        <span>${t.icon}</span><span>${t.label}</span>
      </div>`).join('')}
  </div>`;
}

function renderMarketDashboard() {
  const subs = D.marketSubmissions;
  const stages = [
    { key: 'Received',          color: 'blue'  },
    { key: 'Data Validated',    color: 'blue'  },
    { key: 'Appetite Scored',   color: 'amber' },
    { key: 'Routed',            color: 'amber' },
    { key: 'Quoted',            color: 'green' },
    { key: 'Bound',             color: 'green' },
    { key: 'Placed',            color: 'green' },
    { key: 'Declined',          color: 'red'   },
    { key: 'Withdrawn',         color: 'gray'  }
  ];
  const counts = stages.map(s => ({ ...s, n: subs.filter(x => x.status === s.key).length }));
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Market Routing</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Intelligent carrier routing · AI appetite matching · E&amp;S &amp; specialty access</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'market-appetite'})">📖 Appetite Library</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'market-wizard'})">🧭 Route Submission</button>
    </div>
  </div>

  ${kpiCards(D.marketKPIs, 6)}

  ${_marketSubNav('market')}

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">LIVE PIPELINE — ${subs.length} OPEN SUBMISSIONS</div>
    <div class="market-pipeline">
      ${counts.map((s,i) => `
        <div class="market-stage market-stage-${s.color}">
          <div class="market-stage-count">${s.n}</div>
          <div class="market-stage-label">${s.key}</div>
        </div>
        ${i < counts.length-1 ? '<span class="market-stage-arrow">›</span>' : ''}`).join('')}
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="display:flex; gap:var(--space-sm); margin-bottom: var(--space-md); align-items:center;">
      <input type="text" class="form-input" style="flex:1;" placeholder="🔍 Search submission, client, LOB..." oninput="window.setState({marketQuery:this.value})" value="${state.marketQuery||''}"/>
      <select class="form-input" style="width:160px;"><option>All LOB</option><option>Workers Comp</option><option>General Liability</option><option>Cyber</option><option>BOP</option></select>
      <select class="form-input" style="width:160px;"><option>All Status</option>${D.marketStatuses.map(s=>`<option>${s}</option>`).join('')}</select>
      <select class="form-input" style="width:140px;"><option>All Tiers</option><option>Preferred</option><option>Standard</option><option>E&S</option></select>
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Exporting ${subs.length} submissions to CSV')">Export</button>
    </div>
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr><th>Submission</th><th>Client</th><th>LOB</th><th>Premium</th><th>State</th><th>Fit</th><th>Carriers</th><th>Best Rate</th><th>Mode</th><th>Status</th><th>Producer</th><th>Action</th></tr></thead>
      <tbody>
        ${subs.filter(s => !state.marketQuery || [s.id,s.client,s.lob].some(v => v.toLowerCase().includes((state.marketQuery||'').toLowerCase()))).map(s => `
        <tr>
          <td style="font-family:monospace; font-size:0.82rem; white-space:nowrap;"><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'market-submission', currentSubId:'${s.id}'})">${s.id}</strong></td>
          <td style="white-space:nowrap;"><strong>${s.client}</strong><div style="color:var(--text-muted); font-size:0.72rem;">NAICS ${s.naics}</div></td>
          <td style="white-space:nowrap;">${s.lob}</td>
          <td style="white-space:nowrap;">$${s.premium.toLocaleString()}</td>
          <td>${s.state}</td>
          <td style="white-space:nowrap;"><div class="market-fit-bar"><div class="market-fit-fill" style="width:${s.appetite}%; background:${s.appetite>=85?'var(--status-green)':s.appetite>=70?'var(--mga-accent)':'var(--status-amber)'};"></div></div><span style="font-size:0.75rem;">${s.appetite}%</span></td>
          <td style="white-space:nowrap;"><div style="display:flex; gap:4px; font-size:0.75rem;"><span title="Routed">📤${s.routed}</span><span title="Quoted" style="color:var(--status-green);">💬${s.quoted}</span><span title="Pending" style="color:var(--status-amber);">⏳${s.pending}</span><span title="Declined" style="color:var(--status-red);">✗${s.declined}</span></div></td>
          <td style="white-space:nowrap;"><strong>${s.best_rate}</strong></td>
          <td style="white-space:nowrap;">${badge(s.mode==='Auto'?'blue':'gray', s.mode)}</td>
          <td style="white-space:nowrap;">${badge(s.statusColor, s.status)}</td>
          <td style="font-size:0.82rem; white-space:nowrap;">${s.producer}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'market-submission', currentSubId:'${s.id}'})">View</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">AUTOMATED ROUTING TASKS</div>
      <table class="data-table">
        <thead><tr><th>Task</th><th>Entity</th><th>Owner</th><th>Priority</th><th>Status</th></tr></thead>
        <tbody>
          ${D.marketAutomatedTasks.map(t => `
          <tr>
            <td><strong style="font-size:0.85rem;">${t.task}</strong></td>
            <td style="font-size:0.8rem;">${t.entity}</td>
            <td style="font-size:0.8rem;">${t.owner}</td>
            <td>${badge(t.priority==='Urgent'?'red':t.priority==='High'?'amber':t.priority==='Med'?'blue':'gray', t.priority)}</td>
            <td>${badge(t.status==='Done'?'green':t.status==='In Progress'?'blue':'amber', t.status)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CARRIER HEALTH — RESPONSE TIME</div>
      ${D.marketAnalytics.carrier_health.map(c => `
        <div style="margin-bottom:var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${c.carrier}</strong> <span style="color:var(--text-muted);">· ${c.response_hr}h avg · ${c.comp_score} comp score</span></span>
            ${badge(c.relationship==='Strong'?'green':c.relationship==='Healthy'?'blue':'amber', c.relationship)}
          </div>
          <div style="background:var(--bg-card); height:6px; border-radius:3px; overflow:hidden;"><div style="height:100%; width:${Math.max(10, 100 - c.response_hr)}%; background:${c.response_hr<=20?'var(--status-green)':c.response_hr<=30?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderMarketSubmissionDetail() {
  const s = D.marketSubmissionDetail;
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'market'})" style="padding:4px 8px; margin-left:-8px;">← Back to Market Routing</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">${s.client} — Submission 360°</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px; font-family:monospace;">${s.id} · ${s.lob} · ${s.state} · NAICS ${s.naics} ${s.naics_desc} · Eff ${s.effective}</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Chasing 2 pending carriers')">🔔 Chase Pending</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'market-quotes'})">⚖ Compare Quotes</button>
      <button class="btn btn-primary" onclick="window.showAlert('Moving to Binding — Liberty Mutual @ 12.4%')">🔒 Bind Best Quote</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Appetite Score</div><div class="kpi-value" style="color:var(--status-green);">${s.appetite_score}%</div></div>
    <div class="kpi-card"><div class="kpi-label">Completeness</div><div class="kpi-value">${s.completeness}%</div></div>
    <div class="kpi-card"><div class="kpi-label">Red Flags</div><div class="kpi-value">${s.red_flags}</div></div>
    <div class="kpi-card"><div class="kpi-label">Carriers Routed</div><div class="kpi-value">${s.routed_carriers.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Premium Target</div><div class="kpi-value">$${(s.premium_target/1000).toFixed(0)}k</div></div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CARRIER RESPONSES</div>
      <div class="table-scroll">
      <table class="data-table">
        <thead><tr><th>Carrier</th><th>Method</th><th>Fit</th><th>Sent</th><th>Responded</th><th>Response Time</th><th>Rate</th><th>Premium</th><th>Status</th></tr></thead>
        <tbody>
          ${s.routed_carriers.map(c => `
          <tr>
            <td style="white-space:nowrap;"><strong>${c.carrier}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${c.note}</div></td>
            <td style="white-space:nowrap;">${badge(c.method==='API'?'green':c.method==='Portal'?'blue':'gray', c.method)}</td>
            <td style="white-space:nowrap;"><strong style="color:${c.appetite>=90?'var(--status-green)':c.appetite>=75?'var(--mga-accent)':'var(--status-amber)'};">${c.appetite}%</strong></td>
            <td style="font-size:0.8rem; white-space:nowrap;">${c.sent}</td>
            <td style="font-size:0.8rem; white-space:nowrap;">${c.responded}</td>
            <td style="font-size:0.8rem; white-space:nowrap;">${c.response_hr !== null ? c.response_hr.toFixed(1) + 'h' : '—'}</td>
            <td style="white-space:nowrap;"><strong>${c.rate}</strong></td>
            <td style="white-space:nowrap;">${c.premium ? '$' + c.premium.toLocaleString() : '—'}</td>
            <td style="white-space:nowrap;">${badge(c.status==='Quoted'?'green':c.status==='Declined'?'red':'amber', c.status)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">TOP RECOMMENDED MARKETS</div>
      ${s.recommendations.map((r,i) => `
        <div style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border-subtle);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <strong>${i+1}. ${r.carrier}</strong>
            <span style="color:var(--status-green); font-weight:700;">${r.fit}%</span>
          </div>
          <div style="color:var(--text-muted); font-size:0.78rem; line-height:1.5;">${r.reason}</div>
        </div>`).join('')}
      <button class="btn btn-primary btn-sm" style="width:100%; margin-top: var(--space-md);" onclick="window.showAlert('Re-routing to top 3 recommended markets')">Re-route to Top 3</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">RISK PROFILE &amp; EXPOSURES</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px 16px; font-size:0.85rem;">
        ${s.exposures.map(e => `<div><div style="color:var(--text-muted); font-size:0.75rem;">${e.k}</div><strong>${e.v}</strong></div>`).join('')}
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">ROUTING TIMELINE (AUDIT TRAIL)</div>
      <div style="max-height:380px; overflow-y:auto;">
      ${s.timeline.map(t => `
        <div style="display:flex; gap:var(--space-sm); padding:8px 0; border-bottom:1px solid var(--border-subtle);">
          <div style="font-family:monospace; color:var(--text-muted); font-size:0.75rem; min-width:120px;">${t.ts}</div>
          <div style="flex:1; font-size:0.85rem;">${t.event}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderMarketRoutingWizard() {
  const step = state.marketWizardStep || 1;
  const steps = ['Intake', 'Risk Profile', 'Appetite Match', 'Route', 'Confirm'];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'market'})" style="padding:4px 8px; margin-left:-8px;">← Back to Market Routing</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Intelligent Routing Wizard</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Step-by-step guided routing · AI appetite scoring · auto-route to top markets</div>
    </div>
  </div>

  ${_marketSubNav('market-wizard')}

  <div class="market-stepper">
    ${steps.map((s,i) => `
      <div class="market-step${i+1 === step ? ' active' : ''}${i+1 < step ? ' done' : ''}">
        <div class="market-step-num">${i+1 < step ? '✓' : i+1}</div>
        <div class="market-step-label">${s}</div>
      </div>
      ${i < steps.length-1 ? '<div class="market-step-line"></div>' : ''}`).join('')}
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-xl); margin-bottom: var(--space-lg);">
    ${step === 1 ? `
      <h3 style="margin-top:0;">Step 1 — Submission Intake</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">AI will auto-extract data from ACORD forms, applications, or supplemental documents.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
        <div class="form-group"><label class="form-label">Client</label><input class="form-input" value="Magnolia Construction LLC"/></div>
        <div class="form-group"><label class="form-label">LOB</label><select class="form-input"><option>Workers Comp</option><option>General Liability</option><option>Cyber</option><option>BOP</option></select></div>
        <div class="form-group"><label class="form-label">Effective Date</label><input class="form-input" type="date" value="2026-05-01"/></div>
        <div class="form-group"><label class="form-label">Premium Target</label><input class="form-input" value="$184,700"/></div>
        <div class="form-group"><label class="form-label">State(s)</label><input class="form-input" value="CA"/></div>
        <div class="form-group"><label class="form-label">NAICS</label><input class="form-input" value="238220 — Plumbing / HVAC Contractors"/></div>
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-md); background:var(--bg-card); border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="color:var(--status-green);">✓ Data validated · 100% complete · 0 red flags</strong>
          <div style="color:var(--text-muted); font-size:0.8rem;">Loss runs uploaded · W-9 on file · FEIN verified</div>
        </div>
        <button class="btn btn-secondary btn-sm">View Source Docs</button>
      </div>
    ` : step === 2 ? `
      <h3 style="margin-top:0;">Step 2 — Risk Profile</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Exposures, loss history, and underwriting factors used to score carrier appetite.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-md);">
        ${D.marketSubmissionDetail.exposures.map(e => `
          <div class="form-group">
            <label class="form-label">${e.k}</label>
            <input class="form-input" value="${e.v}"/>
          </div>`).join('')}
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); font-size:0.82rem; color:var(--text-muted);">
        💡 Clean loss history (22% 3-yr LR) + low ExpMod (0.92) = Preferred tier candidate
      </div>
    ` : step === 3 ? `
      <h3 style="margin-top:0;">Step 3 — Appetite Match</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">AI-ranked carriers by fit against appetite rules. Select which markets to route to.</div>
      ${D.marketSubmissionDetail.routed_carriers.slice(0,6).map((c,i) => `
        <div style="display:flex; gap:var(--space-md); padding: var(--space-sm); margin-bottom: var(--space-xs); background:var(--bg-card); border-radius:var(--radius-md); align-items:center;">
          <input type="checkbox" ${i < 5 ? 'checked' : ''}/>
          <div style="flex:1;">
            <strong>${i+1}. ${c.carrier}</strong>
            <div style="color:var(--text-muted); font-size:0.78rem;">${c.note} · Method: ${c.method}</div>
          </div>
          <div class="market-fit-bar" style="width:120px;"><div class="market-fit-fill" style="width:${c.appetite}%; background:${c.appetite>=90?'var(--status-green)':c.appetite>=75?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
          <strong style="min-width:40px; text-align:right; color:${c.appetite>=90?'var(--status-green)':c.appetite>=75?'var(--mga-accent)':'var(--status-amber)'};">${c.appetite}%</strong>
        </div>`).join('')}
    ` : step === 4 ? `
      <h3 style="margin-top:0;">Step 4 — Route Configuration</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Configure how submissions are dispatched — parallel, sequential, or mixed.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
        <div class="form-group">
          <label class="form-label">Routing Strategy</label>
          <div class="radio-group">
            <span class="radio-pill active">Parallel (all at once)</span>
            <span class="radio-pill">Sequential (waterfall)</span>
            <span class="radio-pill">Primary + fallback</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Response Deadline</label>
          <select class="form-input"><option>48 hours (standard)</option><option>24 hours (urgent)</option><option>5 days (E&S)</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Producer Notification</label>
          <select class="form-input"><option>On first quote received</option><option>On every quote</option><option>On all quotes in</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Client Visibility</label>
          <select class="form-input"><option>Hidden until best quote selected</option><option>Live updates to client portal</option></select>
        </div>
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-md); background: rgba(108,92,231,0.1); border:1px solid var(--border-accent); border-radius:var(--radius-md);">
        <strong>Summary:</strong> Route to 5 carriers in parallel via API. 48h deadline. Auto-chase non-responsive carriers at 24h. Producer notified on first quote received.
      </div>
    ` : `
      <h3 style="margin-top:0;">Step 5 — Review &amp; Confirm</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Final review before dispatch. Submission audit trail will begin upon confirmation.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
        <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);">
          <div style="font-size:0.78rem; color:var(--text-muted); text-transform:uppercase; margin-bottom: var(--space-sm);">SUBMISSION</div>
          <div style="font-size:0.88rem; line-height:1.9;">
            <div><span style="color:var(--text-muted);">Client:</span> <strong>Magnolia Construction LLC</strong></div>
            <div><span style="color:var(--text-muted);">LOB:</span> Workers Comp</div>
            <div><span style="color:var(--text-muted);">Premium:</span> $184,700</div>
            <div><span style="color:var(--text-muted);">State:</span> CA</div>
            <div><span style="color:var(--text-muted);">Effective:</span> 2026-05-01</div>
          </div>
        </div>
        <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);">
          <div style="font-size:0.78rem; color:var(--text-muted); text-transform:uppercase; margin-bottom: var(--space-sm);">ROUTING</div>
          <div style="font-size:0.88rem; line-height:1.9;">
            <div><span style="color:var(--text-muted);">Carriers:</span> <strong>5 selected</strong></div>
            <div><span style="color:var(--text-muted);">Strategy:</span> Parallel via API</div>
            <div><span style="color:var(--text-muted);">Deadline:</span> 48 hours</div>
            <div><span style="color:var(--text-muted);">Auto-chase:</span> @ 24h</div>
            <div><span style="color:var(--text-muted);">Producer alert:</span> First quote</div>
          </div>
        </div>
      </div>
      <div id="route-result" style="display:none; margin-top: var(--space-md); padding: var(--space-md); background: rgba(0,230,118,0.12); border-left: 4px solid var(--status-green); border-radius:var(--radius-md);">
        <strong style="color:var(--status-green);">✓ Submission routed to 5 carriers.</strong> Envelope SUB-92199 created. Tracking active. You'll receive a notification when the first quote arrives.
      </div>
    `}
  </div>

  <div style="display:flex; justify-content:space-between;">
    <button class="btn btn-secondary" ${step === 1 ? 'disabled' : ''} onclick="window.setState({marketWizardStep: ${Math.max(1, step-1)}})">← Back</button>
    ${step < 5 ? `
      <button class="btn btn-primary" onclick="window.setState({marketWizardStep: ${step+1}})">Continue →</button>
    ` : `
      <button class="btn btn-primary" id="btn-route-now" onclick="document.getElementById('route-result').style.display='block'; this.textContent='✓ Routed — Opening Submission 360°…'; this.disabled=true; setTimeout(() => window.setState({screen:'market-submission', currentSubId:'SUB-92104'}), 1400);">🧭 Route to 5 Carriers</button>
    `}
  </div>`;
}

function renderMarketAppetiteLibrary() {
  const lib = D.marketAppetiteLibrary;
  const tierFilter = state.marketTierFilter || 'all';
  const filtered = lib.filter(c => tierFilter === 'all' || c.tier === tierFilter);
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Carrier Appetite Library &amp; Rules</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${lib.length} contracted carriers · Live API feeds · Do-Not-Route &amp; override controls</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Syncing appetite data from carrier APIs…')">🔄 Refresh All</button>
      <button class="btn btn-primary" onclick="window.showAlert('Opening rule editor')">+ New Rule</button>
    </div>
  </div>

  ${_marketSubNav('market-appetite')}

  <div style="display:flex; gap:var(--space-xs); margin-bottom: var(--space-lg);">
    ${['all','Preferred','Standard','E&S','Specialty'].map(t => `
      <div class="doc-subnav-tab${tierFilter===t?' active':''}" onclick="window.setState({marketTierFilter:'${t}'})" style="padding:6px 12px;">${t === 'all' ? 'All Tiers' : t}</div>`).join('')}
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">CONTRACTED CARRIERS</div>
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Tier</th><th>LOBs</th><th>States</th><th>Premium Range</th><th>API</th><th>Hit Ratio</th><th>Avg Response</th><th>Capacity</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>
        ${filtered.map(c => `
        <tr${c.do_not_route ? ' style="opacity:0.6;"' : ''}>
          <td style="white-space:nowrap;"><strong>${c.carrier}</strong>${c.do_not_route?' <span style="color:var(--status-red); font-size:0.7rem;">🚫 DO NOT ROUTE</span>':''}</td>
          <td style="white-space:nowrap;">${badge(c.tier==='Preferred'?'green':c.tier==='Standard'?'blue':c.tier==='E&S'?'amber':'gray', c.tier)}</td>
          <td style="font-size:0.78rem; white-space:nowrap;">${c.lobs.join(', ')}</td>
          <td style="font-size:0.78rem; white-space:nowrap;">${c.states}</td>
          <td style="font-size:0.78rem; white-space:nowrap;">${c.premium_range}</td>
          <td>${c.api ? badge('green','API') : badge('gray','Portal')}</td>
          <td style="white-space:nowrap;"><strong style="color:${c.hit_ratio>=60?'var(--status-green)':c.hit_ratio>=45?'var(--mga-accent)':'var(--status-amber)'};">${c.hit_ratio}%</strong></td>
          <td style="white-space:nowrap;">${c.avg_time_hr}h</td>
          <td style="white-space:nowrap;">${c.capacity}</td>
          <td style="white-space:nowrap;">${badge(c.status==='Healthy'?'green':c.status==='Slow'?'amber':'red', c.status)}</td>
          <td style="display:flex; gap:4px; white-space:nowrap;">
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Editing ${c.carrier} rules')">Edit</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert(${c.do_not_route?`'Enabling routing for ${c.carrier}'`:`'${c.carrier} added to Do-Not-Route'`})">${c.do_not_route?'Enable':'Block'}</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">APPETITE RULES ENGINE</div>
    <div class="table-scroll">
    <table class="data-table">
      <thead><tr><th>Rule ID</th><th>Carrier</th><th>LOB</th><th>Rule</th><th>Priority</th><th>Hits (30d)</th><th>Enabled</th><th>Action</th></tr></thead>
      <tbody>
        ${D.marketAppetiteRules.map(r => `
        <tr>
          <td style="font-family:monospace; font-size:0.8rem; white-space:nowrap;">${r.id}</td>
          <td style="white-space:nowrap;"><strong>${r.carrier}</strong></td>
          <td style="white-space:nowrap;">${r.lob}</td>
          <td style="font-size:0.82rem; max-width:420px;">${r.rule}</td>
          <td style="white-space:nowrap;"><strong>#${r.priority}</strong></td>
          <td style="white-space:nowrap;">${r.hits_30d}</td>
          <td style="white-space:nowrap;">${badge(r.enabled?'green':'gray', r.enabled?'Active':'Paused')}</td>
          <td style="display:flex; gap:4px; white-space:nowrap;">
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Editing rule ${r.id}')">Edit</button>
            <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Testing rule ${r.id} against 30 days of submissions')">Test</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
  </div>`;
}

function renderMarketQuoteComparison() {
  const q = D.marketQuoteComparisons;
  const s = D.marketSubmissionDetail;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Quote Comparison &amp; Proposal Builder</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${s.id} · ${s.client} · ${s.lob} · Side-by-side · AI-picked best quote</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Generating branded proposal PDF')">📄 Build Proposal</button>
      <button class="btn btn-secondary" onclick="window.showAlert('Sharing quote grid with client portal')">🔗 Share with Client</button>
      <button class="btn btn-primary" onclick="window.showAlert('Proceeding to Binding — Liberty Mutual')">🔒 Select &amp; Bind</button>
    </div>
  </div>

  ${_marketSubNav('market-quotes')}

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">SIDE-BY-SIDE COMPARISON</div>
    <div class="market-quote-grid">
      ${q.map(quote => `
        <div class="market-quote-card${quote.recommended?' recommended':''}">
          ${quote.recommended ? `<div class="market-quote-badge">⭐ AI Recommended</div>` : ''}
          <div class="market-quote-name">${quote.carrier}</div>
          <div class="market-quote-premium">$${quote.premium.toLocaleString()}</div>
          <div class="market-quote-rate">${quote.rate} rate</div>
          <div style="height:1px; background:var(--border-subtle); margin: var(--space-md) 0;"></div>
          <div class="market-quote-row"><span>TRIA</span><strong>${quote.tria}</strong></div>
          <div class="market-quote-row"><span>Deductible</span><strong>${quote.deductible}</strong></div>
          <div class="market-quote-row"><span>Limits</span><strong>${quote.limit}</strong></div>
          <div class="market-quote-row"><span>Fit Score</span><strong style="color:var(--status-green);">${quote.score}%</strong></div>
          <div style="margin-top: var(--space-sm);">
            <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">CREDITS APPLIED</div>
            ${quote.credits.map(c => `<span style="display:inline-block; padding:2px 8px; background:rgba(0,230,118,0.12); color:var(--status-green); border-radius:var(--radius-sm); font-size:0.72rem; margin:2px 2px 0 0;">${c}</span>`).join('')}
          </div>
          <button class="btn ${quote.recommended?'btn-primary':'btn-secondary'} btn-sm" style="width:100%; margin-top: var(--space-md);" onclick="window.showAlert('Selecting ${quote.carrier}')">${quote.recommended?'Bind This Quote':'Select'}</button>
        </div>`).join('')}
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PROPOSAL PREVIEW</div>
      <div style="background:#fafaf6; color:#222; padding: 32px; border-radius:var(--radius-sm); min-height:280px;">
        <div style="border-bottom: 3px solid #4a4af0; padding-bottom:10px; margin-bottom:16px;">
          <div style="font-size:0.75rem; color:#888;">INSURANCE PROPOSAL</div>
          <div style="font-weight:700; font-size:1.2rem; color:#111;">${s.client}</div>
          <div style="color:#666; font-size:0.8rem;">${s.lob} · Effective ${s.effective}</div>
        </div>
        <div style="font-size:0.82rem; line-height:1.7; color:#333;">
          <p><strong>Recommended Carrier:</strong> Liberty Mutual Insurance</p>
          <p><strong>Annual Premium:</strong> $22,903 (including TRIA)</p>
          <p><strong>Rate:</strong> 12.4% (industry avg: 13.8%)</p>
          <p><strong>Savings vs. incumbent:</strong> $3,420 (13%)</p>
          <p style="margin-top:12px; color:#555;">This proposal presents the most competitive quote from 3 responsive markets out of 5 routed carriers. The recommended Liberty Mutual placement offers 15% schedule credit reflecting your strong safety program and 0.92 experience mod.</p>
        </div>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">SIMILAR RISKS — PLACEMENT HISTORY</div>
      <div style="font-size:0.82rem; line-height:1.8;">
        ${[
          { client: 'Cornerstone Builders', rate: '12.2%', carrier: 'Liberty Mutual' },
          { client: 'Bay Area Contracting', rate: '12.6%', carrier: 'SEMC' },
          { client: 'Pacific HVAC Co.',      rate: '13.0%', carrier: 'AMTrust' },
          { client: 'Delta Construction',    rate: '12.4%', carrier: 'Liberty Mutual' },
          { client: 'Summit Builders',       rate: '12.8%', carrier: 'Liberty Mutual' }
        ].map(r => `
          <div style="padding: 6px 0; border-bottom: 1px solid var(--border-subtle); display:flex; justify-content:space-between;">
            <div><strong>${r.client}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${r.carrier}</div></div>
            <strong>${r.rate}</strong>
          </div>`).join('')}
        <div style="margin-top: var(--space-sm); padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); font-size:0.78rem; color:var(--text-muted);">
          📊 Avg for class 5403 in CA: <strong>12.6%</strong>. Your recommended quote at 12.4% is competitive.
        </div>
      </div>
    </div>
  </div>`;
}

function renderMarketAnalytics() {
  const a = D.marketAnalytics;
  const maxCarrier = Math.max(...a.hit_ratio_by_carrier.map(c=>c.rate));
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Market Routing Analytics</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Hit ratio · time-to-quote · decline analysis · carrier health · source attribution</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 30 days</option><option>YTD</option><option>Last 12 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — market analytics')">Export</button>
    </div>
  </div>

  ${_marketSubNav('market-analytics')}

  ${kpiCards(D.marketKPIs, 6)}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin: var(--space-lg) 0;">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">HIT RATIO BY CARRIER</div>
      ${a.hit_ratio_by_carrier.map(c => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <span><strong>${c.carrier}</strong> <span style="color:var(--text-muted);">· ${c.bound}/${c.quoted} bound (${c.submitted} submitted)</span></span>
            <strong style="color:${c.rate>=60?'var(--status-green)':c.rate>=45?'var(--mga-accent)':'var(--status-amber)'};">${c.rate}%</strong>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${(c.rate/maxCarrier)*100}%; background:${c.rate>=60?'var(--status-green)':c.rate>=45?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">AUTO vs MANUAL ROUTING</div>
      <div style="text-align:center; padding: var(--space-md) 0;">
        <div style="font-size:3rem; font-weight:800; color:var(--status-green);">${a.auto_vs_manual.auto}%</div>
        <div style="color:var(--text-muted); font-size:0.85rem;">Auto-routed submissions</div>
      </div>
      <div style="background:var(--bg-card); height:12px; border-radius:6px; overflow:hidden; display:flex; margin-bottom:var(--space-md);">
        <div style="background:var(--status-green); width:${a.auto_vs_manual.auto}%;"></div>
        <div style="background:var(--status-amber); width:${a.auto_vs_manual.manual}%;"></div>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; line-height:1.9;">
        <div><span style="display:inline-block; width:10px; height:10px; background:var(--status-green); border-radius:2px; margin-right:4px;"></span>Auto — avg ${a.auto_vs_manual.auto_avg_hr}h quote</div>
        <div><span style="display:inline-block; width:10px; height:10px; background:var(--status-amber); border-radius:2px; margin-right:4px;"></span>Manual — avg ${a.auto_vs_manual.manual_avg_hr}h quote</div>
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); font-size:0.78rem; color:var(--text-muted);">
        💡 Goal: 80%+ auto-routed. Target &lt; 4h first-quote response.
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">TIME-TO-QUOTE DISTRIBUTION</div>
      ${a.time_to_quote.map(r => `
        <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
          <div style="width:120px;">${r.range}</div>
          <div style="flex:1; background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${r.pct*2}%; background:${r.range.startsWith('<')?'var(--status-green)':r.range.startsWith('4')?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
          <div style="width:90px; text-align:right;"><strong>${r.count}</strong> <span style="color:var(--text-muted);">(${r.pct}%)</span></div>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">DECLINE REASON ANALYSIS</div>
      ${a.decline_reasons.map(r => `
        <div style="display:flex; align-items:center; margin-bottom: var(--space-sm); font-size:0.9rem;">
          <div style="width:170px;">${r.reason}</div>
          <div style="flex:1; background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden; margin:0 var(--space-sm);"><div style="height:100%; width:${r.pct*3}%; background:var(--status-red); opacity:0.8;"></div></div>
          <div style="width:70px; text-align:right;"><strong>${r.count}</strong></div>
        </div>`).join('')}
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">HIT RATIO BY LOB</div>
      <table class="data-table">
        <thead><tr><th>LOB</th><th>Volume</th><th>Hit Ratio</th></tr></thead>
        <tbody>
          ${a.hit_ratio_by_lob.map(l => `
          <tr>
            <td><strong>${l.lob}</strong></td>
            <td>${l.volume}</td>
            <td><strong style="color:${l.rate>=55?'var(--status-green)':l.rate>=45?'var(--mga-accent)':'var(--status-amber)'};">${l.rate}%</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">SUBMISSION VOLUME &amp; PLACEMENT BY SOURCE</div>
      <table class="data-table">
        <thead><tr><th>Source</th><th>Submissions</th><th>Placed</th><th>Rate</th></tr></thead>
        <tbody>
          ${a.volume_by_source.map(s => `
          <tr>
            <td><strong>${s.source}</strong></td>
            <td>${s.submissions}</td>
            <td>${s.placed}</td>
            <td><strong style="color:${s.rate>=60?'var(--status-green)':s.rate>=45?'var(--mga-accent)':'var(--status-amber)'};">${s.rate}%</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderMarketAIAssistant() {
  const chat = D.marketAIChat;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">AI Routing Assistant</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Chat to route risks, analyze markets, and draft instructions · learns from placements</div>
    </div>
  </div>

  ${_marketSubNav('market-ai')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); display:flex; flex-direction:column; min-height:540px;">
      <div style="flex:1; overflow-y:auto; padding-right:8px;">
        ${chat.map(m => `
          <div class="doc-ai-msg doc-ai-msg-${m.role}">
            <div class="doc-ai-avatar doc-ai-avatar-${m.role}">${m.role==='ai'?'🤖':'🧑‍💼'}</div>
            <div class="doc-ai-bubble">${m.text.replace(/\n/g,'<br/>')}</div>
          </div>`).join('')}
      </div>
      <div style="margin-top: var(--space-md); display:flex; gap: var(--space-sm);">
        <input class="form-input" style="flex:1;" placeholder="Ask AI to route a risk, recommend markets, or analyze placements..."/>
        <button class="btn btn-primary" onclick="window.showAlert('AI processing your request…')">Send →</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap: var(--space-md);">
      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">SUGGESTED PROMPTS</div>
        ${[
          'Route this $250k GL risk for TX construction client',
          'Top 3 markets for a $1M cyber risk in healthcare',
          'Why did Zurich decline SUB-92100?',
          'Which carrier has highest hit ratio for CA WC?',
          'Compare Liberty vs AMTrust for class 5403',
          'Find E&S markets for declined submissions'
        ].map(p => `
          <div class="doc-ai-prompt" onclick="window.showAlert('Running: ${p}')">${p}</div>`).join('')}
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
        <div class="section-title">CAPABILITIES</div>
        <div style="font-size:0.85rem; line-height:1.9;">
          <div>🎯 AI appetite matching (47 carriers)</div>
          <div>🚀 One-click parallel routing</div>
          <div>📊 Predict best carrier from risk profile</div>
          <div>🔍 Decline reason analysis</div>
          <div>📈 Learns from every placement</div>
          <div>🌐 E&amp;S &amp; specialty market access</div>
        </div>
      </div>
    </div>
  </div>`;
}

// ════════════════════════════════════════════════════════════════
// PROSPECTS & LEADS MODULE
// ════════════════════════════════════════════════════════════════
function _prospectSubNav(active) {
  const tabs = [
    { key: 'prospects',            label: 'Dashboard',     icon: '📊' },
    { key: 'prospects-kanban',     label: 'Pipeline',      icon: '🗂️' },
    { key: 'prospects-list',       label: 'List',          icon: '📋' },
    { key: 'prospect-wizard',      label: 'Qualify',       icon: '🧭' },
    { key: 'prospects-lost',       label: 'Lost Analyzer', icon: '🔍' },
    { key: 'prospects-import',     label: 'Import',        icon: '⬆' },
    { key: 'prospects-analytics',  label: 'Analytics',     icon: '📈' }
  ];
  return `
  <div class="doc-subnav">
    ${tabs.map(t => `
      <div class="doc-subnav-tab${active === t.key ? ' active' : ''}" onclick="window.setState({screen:'${t.key}'})">
        <span>${t.icon}</span><span>${t.label}</span>
      </div>`).join('')}
  </div>`;
}

function _scoreColor(s) {
  return s >= 80 ? 'var(--status-green)' : s >= 65 ? 'var(--mga-accent)' : s >= 50 ? 'var(--status-amber)' : 'var(--status-red)';
}
function _scoreBadge(s) {
  const label = s >= 80 ? '🔥 Hot' : s >= 65 ? '☀ Warm' : s >= 50 ? '❄ Cool' : '🧊 Cold';
  return `<span style="padding:2px 8px; border-radius:var(--radius-sm); background:${_scoreColor(s)}22; color:${_scoreColor(s)}; font-size:0.72rem; font-weight:600;">${label} ${s}</span>`;
}

function renderProspectsDashboard() {
  const p = D.prospects;
  const hot = p.filter(x => x.score >= 80 && x.stage !== 'Won' && x.stage !== 'Lost');
  const stale = p.filter(x => x.stage !== 'Won' && x.stage !== 'Lost' && x.next_due && x.next_due < '2026-04-18');
  const byStage = D.prospectStages.map(s => ({ ...s, count: p.filter(x => x.stage === s.key).length, value: p.filter(x => x.stage === s.key).reduce((sum,x) => sum + x.value, 0) }));
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Prospects &amp; Leads</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Capture · qualify · nurture · convert · full sales pipeline for broker producers</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.setState({screen:'prospects-import'})">⬆ Import Leads</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'prospects-kanban'})">🗂 View Pipeline</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'prospect-wizard', prospectWizardStep:1})">+ New Lead</button>
    </div>
  </div>

  ${kpiCards(D.prospectKPIs, 6)}

  ${_prospectSubNav('prospects')}

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom:var(--space-lg);">
    <div class="section-title">SALES FUNNEL — PIPELINE BY STAGE</div>
    <div class="market-pipeline">
      ${byStage.map((s,i) => `
        <div class="market-stage market-stage-${s.color}">
          <div class="market-stage-count">${s.count}</div>
          <div class="market-stage-label">${s.key}</div>
          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">$${(s.value/1000).toFixed(0)}k</div>
        </div>
        ${i < byStage.length - 1 ? '<span class="market-stage-arrow">›</span>' : ''}
      `).join('')}
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">🔥 HOT LEADS — IMMEDIATE ATTENTION (${hot.length})</div>
      <table class="data-table">
        <thead><tr><th>Company</th><th>Score</th><th>Stage</th><th>Value</th><th>Next Action</th><th>Due</th><th></th></tr></thead>
        <tbody>
          ${hot.slice(0,6).map(x => `
          <tr>
            <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'prospect-details', currentProspectId:'${x.id}'})">${x.company}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${x.industry}</div></td>
            <td>${_scoreBadge(x.score)}</td>
            <td>${badge(D.prospectStages.find(s => s.key===x.stage)?.color || 'gray', x.stage)}</td>
            <td><strong>$${(x.value/1000).toFixed(0)}k</strong></td>
            <td style="font-size:0.82rem;">${x.next_action}</td>
            <td style="font-size:0.82rem;">${x.next_due}</td>
            <td><button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'prospect-details', currentProspectId:'${x.id}'})">→</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">⚠ STALLED / OVERDUE FOLLOW-UPS (${stale.length})</div>
      ${stale.map(x => `
        <div style="display:flex; gap:var(--space-sm); padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
          <div style="width:48px; height:48px; background:var(--bg-card); border-radius:var(--radius-md); display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0;">${x.score >= 80 ? '🔥' : x.score >= 65 ? '☀' : '❄'}</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between;"><strong style="font-size:0.9rem;">${x.company}</strong><span style="color:var(--status-amber); font-size:0.78rem;">Due: ${x.next_due}</span></div>
            <div style="color:var(--text-muted); font-size:0.78rem;">${x.next_action}</div>
            <div style="color:var(--text-muted); font-size:0.72rem; margin-top:2px;">${x.stage} · Producer: ${x.producer}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.setState({screen:'prospect-details', currentProspectId:'${x.id}'})">View</button>
        </div>`).join('') || '<div style="color:var(--text-muted); text-align:center; padding: var(--space-lg);">✓ No overdue follow-ups</div>'}
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">AUTOMATED TASKS</div>
      <table class="data-table">
        <thead><tr><th>Task</th><th>Entity</th><th>Owner</th><th>Due</th><th>Priority</th><th>Status</th></tr></thead>
        <tbody>
          ${D.prospectAutomatedTasks.map(t => `
          <tr>
            <td><strong style="font-size:0.85rem;">${t.task}</strong></td>
            <td style="font-size:0.82rem;">${t.entity}</td>
            <td style="font-size:0.82rem;">${t.owner}</td>
            <td style="font-size:0.82rem;">${t.due}</td>
            <td>${badge(t.priority==='Urgent'?'red':t.priority==='High'?'amber':t.priority==='Med'?'blue':'gray', t.priority)}</td>
            <td>${badge(t.status==='Done'?'green':t.status==='In Progress'?'blue':'amber', t.status)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PRODUCER LEADERBOARD (30D)</div>
      ${D.prospectAnalytics.by_producer.map((p,i) => `
        <div style="display:flex; gap:var(--space-sm); padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle); align-items:center;">
          <div style="width:28px; height:28px; background:${i===0?'var(--status-green)':i===1?'var(--mga-accent)':'var(--bg-card)'}; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem;">${i+1}</div>
          <div style="flex:1;">
            <div style="font-size:0.88rem;"><strong>${p.name}</strong></div>
            <div style="color:var(--text-muted); font-size:0.72rem;">${p.open} open · ${p.won_30d} won · $${(p.pipeline/1e6).toFixed(2)}M pipeline</div>
          </div>
          <strong style="color:${p.win_rate>=30?'var(--status-green)':p.win_rate>=20?'var(--mga-accent)':'var(--status-amber)'};">${p.win_rate}%</strong>
        </div>`).join('')}
    </div>
  </div>`;
}

function renderProspectsKanban() {
  const stages = D.prospectStages.filter(s => s.key !== 'Lost');
  const p = D.prospects;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Pipeline Kanban</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Drag cards across stages · probability-weighted pipeline · ${p.filter(x=>x.stage!=='Won'&&x.stage!=='Lost').length} open</div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>All Producers</option><option>Sarah Chen</option><option>Mike Torres</option><option>Lisa Park</option></select>
      <button class="btn btn-primary" onclick="window.setState({screen:'prospect-wizard', prospectWizardStep:1})">+ New Lead</button>
    </div>
  </div>

  ${_prospectSubNav('prospects-kanban')}

  <div class="kanban-board">
    ${stages.map(stage => {
      const cards = p.filter(x => x.stage === stage.key);
      const value = cards.reduce((s,c) => s + c.value, 0);
      return `
      <div class="kanban-col kanban-col-${stage.color}">
        <div class="kanban-col-header">
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="doc-status-dot doc-status-${stage.color}"></span>
            <strong>${stage.key}</strong>
          </div>
          <span style="background:var(--bg-card); padding:2px 8px; border-radius:var(--radius-sm); font-size:0.72rem; font-weight:600;">${cards.length}</span>
        </div>
        <div style="padding: 0 var(--space-sm); font-size:0.75rem; color:var(--text-muted); margin-bottom: var(--space-sm);">$${(value/1000).toFixed(0)}k · ${stage.prob}% prob</div>
        <div class="kanban-col-body">
          ${cards.map(c => `
          <div class="kanban-card" onclick="window.setState({screen:'prospect-details', currentProspectId:'${c.id}'})">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 6px;">
              <strong style="font-size:0.85rem; line-height:1.3;">${c.company}</strong>
              ${_scoreBadge(c.score)}
            </div>
            <div style="color:var(--text-muted); font-size:0.72rem; margin-top:2px;">${c.contact}</div>
            <div style="margin-top: var(--space-sm); font-size:0.78rem; display:flex; justify-content:space-between;">
              <span>💼 ${c.lob.join(' · ')}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:var(--space-sm); padding-top: var(--space-sm); border-top: 1px solid var(--border-subtle);">
              <span style="color:var(--mga-accent); font-weight:700;">$${(c.value/1000).toFixed(0)}k</span>
              <span style="color:var(--text-muted); font-size:0.72rem;">${c.next_due}</span>
            </div>
            ${c.tags.length ? `<div style="margin-top:6px;">${c.tags.map(t => `<span style="font-size:0.68rem; padding:1px 6px; background:var(--bg-card); border-radius:var(--radius-sm); color:var(--text-muted); margin-right:2px;">${t}</span>`).join('')}</div>` : ''}
          </div>`).join('') || '<div style="color:var(--text-muted); text-align:center; padding: var(--space-md); font-size:0.82rem;">— empty —</div>'}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function renderProspectsList() {
  const q = (state.prospectQuery || '').toLowerCase();
  const stageFilter = state.prospectStageFilter || 'all';
  const producerFilter = state.prospectProducerFilter || 'all';
  const p = D.prospects.filter(x =>
    (stageFilter === 'all' || x.stage === stageFilter) &&
    (producerFilter === 'all' || x.producer === producerFilter) &&
    (!q || [x.company, x.contact, x.id, x.industry].some(f => f.toLowerCase().includes(q)))
  );
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Lead List</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${p.length} prospects · filterable, sortable, bulk-actionable</div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Exporting ${p.length} prospects to CSV')">Export</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'prospect-wizard', prospectWizardStep:1})">+ New Lead</button>
    </div>
  </div>

  ${_prospectSubNav('prospects-list')}

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div style="display:flex; gap:var(--space-sm); margin-bottom: var(--space-md);">
      <input type="text" class="form-input" style="flex:1;" placeholder="🔍 Search company, contact, ID..." value="${state.prospectQuery || ''}" oninput="window.setState({prospectQuery:this.value})"/>
      <select class="form-input" style="width:160px;" onchange="window.setState({prospectStageFilter:this.value})">
        <option value="all">All Stages</option>
        ${D.prospectStages.map(s => `<option value="${s.key}" ${stageFilter===s.key?'selected':''}>${s.key}</option>`).join('')}
      </select>
      <select class="form-input" style="width:160px;" onchange="window.setState({prospectProducerFilter:this.value})">
        <option value="all">All Producers</option>
        <option value="Sarah Chen"  ${producerFilter==='Sarah Chen'?'selected':''}>Sarah Chen</option>
        <option value="Mike Torres" ${producerFilter==='Mike Torres'?'selected':''}>Mike Torres</option>
        <option value="Lisa Park"   ${producerFilter==='Lisa Park'?'selected':''}>Lisa Park</option>
      </select>
      <select class="form-input" style="width:160px;"><option>All Sources</option><option>Referral</option><option>Website</option><option>Trade Show</option><option>Cold Outreach</option><option>Carrier Referral</option></select>
      <select class="form-input" style="width:140px;"><option>All Scores</option><option>Hot (80+)</option><option>Warm (65-79)</option><option>Cool (50-64)</option><option>Cold (&lt;50)</option></select>
    </div>
    <table class="data-table">
      <thead><tr><th>ID</th><th>Company</th><th>Contact</th><th>Industry</th><th>Source</th><th>LOB</th><th>Revenue</th><th>State</th><th>Score</th><th>Stage</th><th>Value</th><th>Producer</th><th>Next</th><th></th></tr></thead>
      <tbody>
        ${p.map(x => `
        <tr>
          <td style="font-family:monospace; font-size:0.78rem;">${x.id}</td>
          <td><strong style="color:var(--mga-accent); cursor:pointer;" onclick="window.setState({screen:'prospect-details', currentProspectId:'${x.id}'})">${x.company}</strong></td>
          <td>${x.contact}<div style="color:var(--text-muted); font-size:0.72rem;">${x.email}</div></td>
          <td>${x.industry}</td>
          <td>${x.source}</td>
          <td style="font-size:0.78rem;">${x.lob.join(', ')}</td>
          <td>${x.revenue}</td>
          <td>${x.state}</td>
          <td>${_scoreBadge(x.score)}</td>
          <td>${badge(D.prospectStages.find(s => s.key===x.stage)?.color || 'gray', x.stage)}</td>
          <td><strong>$${(x.value/1000).toFixed(0)}k</strong></td>
          <td style="font-size:0.82rem;">${x.producer}</td>
          <td style="font-size:0.78rem;">${x.next_due}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'prospect-details', currentProspectId:'${x.id}'})">→</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
    ${p.length === 0 ? `<div style="text-align:center; color:var(--text-muted); padding: var(--space-xl);">No prospects match this filter.</div>` : ''}
  </div>`;
}

function renderProspectDetail() {
  const d = D.prospectDetail;
  const checklistDone = d.checklist.filter(c => c.done).length;
  const checklistPct = Math.round((checklistDone / d.checklist.length) * 100);
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'prospects-list'})" style="padding:4px 8px; margin-left:-8px;">← Back to List</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">${d.company}${d.dba ? ` <span style="color:var(--text-muted); font-size:0.8rem; font-weight:400;">(${d.dba})</span>` : ''}</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px; font-family:monospace;">${d.id} · ${d.industry} · NAICS ${d.naics} · ${d.state} · Est. ${d.established}</div>
    </div>
    <div style="display:flex; gap: var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Logging activity')">📞 Log Activity</button>
      <button class="btn btn-secondary" onclick="window.setState({screen:'submission', wizardStep:1})">💬 Create Quote</button>
      <button class="btn btn-primary" onclick="window.setState({screen:'onboarding-wizard'})">🚀 Move to Onboarding</button>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Lead Score</div><div class="kpi-value" style="color:${_scoreColor(d.score)};">${d.score}</div></div>
    <div class="kpi-card"><div class="kpi-label">Stage</div><div class="kpi-value" style="font-size:1.2rem; color:var(--status-amber);">${d.stage}</div></div>
    <div class="kpi-card"><div class="kpi-label">Probability</div><div class="kpi-value">${d.prob}%</div></div>
    <div class="kpi-card"><div class="kpi-label">Deal Value</div><div class="kpi-value">$${(d.value/1000).toFixed(0)}k</div></div>
    <div class="kpi-card"><div class="kpi-label">Days Open</div><div class="kpi-value">21</div></div>
    <div class="kpi-card"><div class="kpi-label">Checklist</div><div class="kpi-value">${checklistDone}/${d.checklist.length}</div></div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CONTACTS</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
        <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md); border: 2px solid var(--border-accent);">
          <div style="font-size:0.72rem; color:var(--mga-accent); text-transform:uppercase; font-weight:700;">⭐ PRIMARY DECISION MAKER</div>
          <div style="margin-top:4px;"><strong>${d.primary_contact.name}</strong></div>
          <div style="color:var(--text-muted); font-size:0.82rem;">${d.primary_contact.title}</div>
          <div style="margin-top:6px; font-size:0.82rem; line-height:1.6;">📧 ${d.primary_contact.email}<br/>📞 ${d.primary_contact.phone}</div>
          <div style="margin-top:6px; font-size:0.72rem; color:var(--status-green);">${d.primary_contact.buying_role}</div>
        </div>
        ${d.other_contacts.map(c => `
        <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);">
          <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">${c.decision_maker ? 'DECISION MAKER' : 'INFLUENCER'}</div>
          <div style="margin-top:4px;"><strong>${c.name}</strong></div>
          <div style="color:var(--text-muted); font-size:0.82rem;">${c.title}</div>
          <div style="margin-top:6px; font-size:0.82rem; line-height:1.6;">📧 ${c.email}<br/>📞 ${c.phone}</div>
          <div style="margin-top:6px; font-size:0.72rem; color:var(--text-muted);">${c.buying_role}</div>
        </div>`).join('')}
      </div>
      <div style="margin-top:var(--space-md); display:flex; gap: var(--space-sm); color:var(--text-muted); font-size:0.78rem;">
        🌐 ${d.website} · 💼 ${d.linkedin}
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">LEAD SCORE BREAKDOWN</div>
      ${d.score_breakdown.map(s => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:3px;">
            <span>${s.factor}</span>
            <strong>${s.value}/${s.weight}</strong>
          </div>
          <div style="background:var(--bg-card); height:5px; border-radius:3px; overflow:hidden;"><div style="height:100%; width:${(s.value/s.weight)*100}%; background:${(s.value/s.weight) >= 0.9 ? 'var(--status-green)' : (s.value/s.weight) >= 0.7 ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div>
        </div>`).join('')}
      <div style="margin-top: var(--space-md); padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); font-size:0.78rem;">
        <strong style="color:${_scoreColor(d.score)};">Total: ${d.score_breakdown.reduce((s,x)=>s+x.value,0)} / ${d.score_breakdown.reduce((s,x)=>s+x.weight,0)}</strong>
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">INSURANCE &amp; RISK PROFILE</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px 16px; font-size:0.85rem;">
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Current Carrier</div><strong>${d.insurance_profile.current_carrier}</strong></div>
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Expiration</div><strong style="color:var(--status-amber);">${d.insurance_profile.exp_date}</strong></div>
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Lines Needed</div><strong>${d.insurance_profile.lob_needed.join(', ')}</strong></div>
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Loss Ratio (3yr)</div><strong>${d.insurance_profile.loss_ratio_3yr}</strong></div>
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Prior Claims</div><strong>${d.insurance_profile.prior_claims}</strong></div>
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Revenue</div><strong>${d.revenue}</strong></div>
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Employees</div><strong>${d.employees}</strong></div>
        <div><div style="color:var(--text-muted); font-size:0.75rem;">Fleet</div><strong>${d.insurance_profile.fleet_size} units · ${d.insurance_profile.annual_miles}</strong></div>
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-sm); background: rgba(255,171,0,0.1); border-left: 3px solid var(--status-amber); border-radius:var(--radius-sm); font-size:0.82rem;">
        ⚠ <strong>Coverage gaps identified:</strong> ${d.insurance_profile.coverage_gaps.join(' · ')}
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">QUALIFICATION ANSWERS</div>
      <div style="max-height:300px; overflow-y:auto;">
      ${d.qualification.map(q => `
        <div style="padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
          <div style="color:var(--text-muted); font-size:0.75rem;">${q.q}</div>
          <div style="font-size:0.88rem; margin-top:2px;"><strong>${q.a}</strong></div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">ACTIVITY TIMELINE</div>
      <div style="max-height:380px; overflow-y:auto;">
      ${d.activities.map(a => `
        <div style="display:flex; gap:var(--space-sm); padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
          <div style="width:32px; height:32px; border-radius:50%; background:var(--bg-card); display:flex; align-items:center; justify-content:center; flex-shrink:0;">${ {Call:'📞',Email:'📧',Meeting:'🤝',Task:'✅',Lead:'🌱'}[a.type] || '📋' }</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between;"><strong style="font-size:0.85rem;">${a.type}</strong><span style="color:var(--text-muted); font-size:0.72rem;">${a.ts}</span></div>
            <div style="font-size:0.82rem; margin-top:2px;">${a.note}</div>
            <div style="color:var(--text-muted); font-size:0.72rem; margin-top:2px;">by ${a.actor}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">SMART PROSPECT CHECKLIST (${checklistDone}/${d.checklist.length} · ${checklistPct}%)</div>
      <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden; margin-bottom: var(--space-md);"><div style="height:100%; width:${checklistPct}%; background:${checklistPct===100?'var(--status-green)':checklistPct>=70?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
      ${d.checklist.map(c => `
        <div style="display:flex; align-items:center; gap: var(--space-sm); padding: 6px 0; font-size:0.85rem;">
          <span style="width:18px; height:18px; border-radius:50%; background:${c.done?'var(--status-green)':'var(--bg-card)'}; border:${c.done?'none':'2px solid var(--border-medium)'}; display:inline-flex; align-items:center; justify-content:center; color:#fff; font-size:0.68rem;">${c.done?'✓':''}</span>
          <div style="flex:1; ${c.done?'color:var(--text-muted); text-decoration:line-through;':''}">${c.name}</div>
          <span style="color:var(--text-muted); font-size:0.72rem;">${c.owner}</span>
        </div>`).join('')}
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">OPEN TASKS</div>
      ${d.tasks.map(t => `
        <div style="display:flex; gap:var(--space-sm); padding: var(--space-sm) 0; border-bottom: 1px solid var(--border-subtle); align-items:center;">
          <div style="flex:1;">
            <div style="font-size:0.85rem; ${t.status==='Done'?'color:var(--text-muted); text-decoration:line-through;':''}">${t.task}</div>
            <div style="color:var(--text-muted); font-size:0.72rem; margin-top:2px;">${t.owner} · Due ${t.due}</div>
          </div>
          ${badge(t.priority==='Urgent'?'red':t.priority==='High'?'amber':'blue', t.priority)}
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">DOCUMENTS</div>
      ${d.documents.map(doc => `
        <div style="display:flex; gap:var(--space-sm); padding: var(--space-sm) 0; border-bottom: 1px solid var(--border-subtle); align-items:center;">
          <div style="width:28px;">📄</div>
          <div style="flex:1;">
            <div style="font-size:0.85rem;"><strong>${doc.name}</strong></div>
            <div style="color:var(--text-muted); font-size:0.72rem;">${doc.type} · ${doc.added}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="window.showAlert('Opening ${doc.name}')">View</button>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">🤖 AI SUGGESTIONS</div>
      ${d.suggestions.map(s => `
        <div style="padding: var(--space-sm); background: rgba(108,92,231,0.1); border-left: 3px solid var(--mga-accent); border-radius:var(--radius-sm); margin-bottom: var(--space-sm); font-size:0.82rem; line-height:1.5;">💡 ${s}</div>`).join('')}
    </div>
  </div>`;
}

function renderProspectQualificationWizard() {
  const step = state.prospectWizardStep || 1;
  const steps = ['Capture','Enrichment','Qualification','Scoring','Assign'];
  return `
  <div style="margin-bottom: var(--space-md);">
    <button class="btn btn-ghost btn-sm" onclick="window.setState({screen:'prospects'})" style="padding:4px 8px; margin-left:-8px;">← Back to Prospects</button>
  </div>
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Lead Qualification Wizard</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Capture → enrich → qualify → score → auto-assign to producer</div>
    </div>
  </div>

  ${_prospectSubNav('prospect-wizard')}

  <div class="market-stepper">
    ${steps.map((s,i) => `
      <div class="market-step${i+1 === step ? ' active' : ''}${i+1 < step ? ' done' : ''}">
        <div class="market-step-num">${i+1 < step ? '✓' : i+1}</div>
        <div class="market-step-label">${s}</div>
      </div>
      ${i < steps.length-1 ? '<div class="market-step-line"></div>' : ''}`).join('')}
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-xl); margin-bottom: var(--space-lg);">
    ${step === 1 ? `
      <h3 style="margin-top:0;">Step 1 — Lead Capture</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Auto-duplicate check runs as you type. Dedup against existing prospects + active clients.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
        <div class="form-group"><label class="form-label">Company Name</label><input class="form-input" placeholder="Acme Corp" value="Westshore Logistics"/></div>
        <div class="form-group"><label class="form-label">DBA (if any)</label><input class="form-input" placeholder="Optional" value="Westshore Express"/></div>
        <div class="form-group"><label class="form-label">Primary Contact</label><input class="form-input" value="Emma Blake"/></div>
        <div class="form-group"><label class="form-label">Title</label><input class="form-input" value="Operations Director"/></div>
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" value="emma@westshore.com"/></div>
        <div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="(415) 555-0184"/></div>
        <div class="form-group">
          <label class="form-label">Lead Source</label>
          <select class="form-input">
            <option>Referral</option><option>Website</option><option>Trade Show</option><option>Cold Outreach</option><option>Carrier Referral</option><option>Event</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">Campaign / Referrer</label><input class="form-input" value="Partner — Kempers"/></div>
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-md); background: rgba(0,230,118,0.1); border-left: 3px solid var(--status-green); border-radius:var(--radius-md); font-size:0.85rem;">
        <strong style="color:var(--status-green);">✓ No duplicates found.</strong> New prospect record will be created.
      </div>
    ` : step === 2 ? `
      <h3 style="margin-top:0;">Step 2 — Data Enrichment</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Auto-enriched from Dun & Bradstreet, ZoomInfo, LinkedIn, and carrier appetite previews.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-md);">
        <div class="form-group"><label class="form-label">Industry</label><input class="form-input" value="Transportation & Trucking"/></div>
        <div class="form-group"><label class="form-label">NAICS</label><input class="form-input" value="484110"/></div>
        <div class="form-group"><label class="form-label">Year Founded</label><input class="form-input" value="2018"/></div>
        <div class="form-group"><label class="form-label">Annual Revenue</label><input class="form-input" value="$18M"/></div>
        <div class="form-group"><label class="form-label">Employees</label><input class="form-input" value="48"/></div>
        <div class="form-group"><label class="form-label">State</label><input class="form-input" value="CA"/></div>
        <div class="form-group"><label class="form-label">Website</label><input class="form-input" value="westshorelogistics.com"/></div>
        <div class="form-group"><label class="form-label">LinkedIn</label><input class="form-input" value="linkedin.com/company/westshore-logistics"/></div>
        <div class="form-group"><label class="form-label">D&B Risk</label><input class="form-input" value="Low" style="color:var(--status-green);"/></div>
      </div>
      <div style="margin-top: var(--space-md); padding: var(--space-md); background: rgba(108,92,231,0.1); border-left: 3px solid var(--mga-accent); border-radius:var(--radius-md); font-size:0.85rem;">
        🤖 <strong>Carrier appetite preview:</strong> 14 contracted carriers match this risk profile. Top 3: Liberty Mutual (96%), SEMC (94%), Progressive Fleet (91%).
      </div>
    ` : step === 3 ? `
      <h3 style="margin-top:0;">Step 3 — Qualification Questionnaire</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Fast qualification. Can be sent to client via portal link or filled in together on a call.</div>
      ${D.prospectDetail.qualification.map(q => `
        <div class="form-group" style="margin-bottom: var(--space-md);">
          <label class="form-label">${q.q}</label>
          <input class="form-input" value="${q.a}"/>
        </div>`).join('')}
    ` : step === 4 ? `
      <h3 style="margin-top:0;">Step 4 — Lead Scoring</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Composite score from demographic, behavioral, financial, insurance, and referral signals.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); align-items:center;">
        <div style="text-align:center;">
          <div style="font-size:5rem; font-weight:800; color:var(--status-green);">${D.prospectDetail.score}</div>
          <div>${_scoreBadge(D.prospectDetail.score)}</div>
          <div style="color:var(--text-muted); font-size:0.85rem; margin-top:var(--space-sm);">Predicted close probability: <strong>85%</strong></div>
        </div>
        <div>
          ${D.prospectDetail.score_breakdown.map(s => `
            <div style="margin-bottom: var(--space-sm);">
              <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                <span>${s.factor}</span>
                <strong>${s.value}/${s.weight}</strong>
              </div>
              <div style="background:var(--bg-card); height:6px; border-radius:3px; overflow:hidden;"><div style="height:100%; width:${(s.value/s.weight)*100}%; background:${(s.value/s.weight) >= 0.9 ? 'var(--status-green)' : (s.value/s.weight) >= 0.7 ? 'var(--mga-accent)' : 'var(--status-amber)'};"></div></div>
            </div>`).join('')}
        </div>
      </div>
    ` : `
      <h3 style="margin-top:0;">Step 5 — Auto-Assign &amp; Launch</h3>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:var(--space-lg);">Producer auto-suggested based on territory, LOB expertise, current workload, and historical win rate.</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
        <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);">
          <div style="font-size:0.78rem; color:var(--text-muted); text-transform:uppercase; margin-bottom: var(--space-sm);">RECOMMENDED PRODUCER</div>
          <div style="display:flex; align-items:center; gap: var(--space-md);">
            <div style="width:48px; height:48px; background:var(--mga-accent); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700;">SC</div>
            <div>
              <strong>Sarah Chen</strong>
              <div style="color:var(--text-muted); font-size:0.78rem;">Territory: CA-North · Auto/WC expert · 34% win rate · 48 open leads</div>
            </div>
          </div>
          <div style="margin-top: var(--space-sm); padding: var(--space-sm); background: rgba(0,230,118,0.12); border-radius:var(--radius-sm); font-size:0.78rem; color:var(--status-green);">
            ✓ Top performer for Transportation $10–25M segment (74% historical close)
          </div>
        </div>
        <div style="background:var(--bg-card); padding: var(--space-md); border-radius:var(--radius-md);">
          <div style="font-size:0.78rem; color:var(--text-muted); text-transform:uppercase; margin-bottom: var(--space-sm);">AUTO-TASKS ON ASSIGNMENT</div>
          <div style="font-size:0.85rem; line-height:1.9;">
            <div>✅ Call new lead within <strong>5 minutes</strong> (score 92)</div>
            <div>✅ Send welcome email w/ discovery questionnaire</div>
            <div>✅ Schedule needs analysis meeting (within 48h)</div>
            <div>✅ Add to "Hot Lead" nurture sequence</div>
            <div>✅ Manager CC'd on thread</div>
          </div>
        </div>
      </div>
      <div id="lead-result" style="display:none; margin-top: var(--space-md); padding: var(--space-md); background: rgba(0,230,118,0.12); border-left: 4px solid var(--status-green); border-radius:var(--radius-md);">
        <strong style="color:var(--status-green);">✓ Lead created &amp; assigned.</strong> PRO-2042 assigned to Sarah Chen. 5 automated tasks created. Hot-lead alert sent via Slack.
      </div>
    `}
  </div>

  <div style="display:flex; justify-content:space-between;">
    <button class="btn btn-secondary" ${step === 1 ? 'disabled' : ''} onclick="window.setState({prospectWizardStep: ${Math.max(1, step-1)}})">← Back</button>
    ${step < 5 ? `
      <button class="btn btn-primary" onclick="window.setState({prospectWizardStep: ${step+1}})">Continue →</button>
    ` : `
      <button class="btn btn-primary" onclick="document.getElementById('lead-result').style.display='block'; this.textContent='✓ Created'; this.disabled=true;">✓ Create Lead &amp; Assign</button>
    `}
  </div>`;
}

function renderProspectsLostAnalyzer() {
  const lost = D.prospects.filter(x => x.stage === 'Lost');
  const r = D.prospectLostReasons;
  const total = r.reduce((s,x) => s + x.count, 0);
  const recoverable_value = r.filter(x => x.recoverable).reduce((s,x) => s + (x.count * x.avg_value), 0);
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Lost Opportunity Analyzer</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">${total} lost opportunities · reason codes · recoverable pipeline · auto-nurture</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <button class="btn btn-secondary" onclick="window.showAlert('Launching 30-day re-engagement nurture campaign to ' + ${r.filter(x=>x.recoverable).reduce((s,x)=>s+x.count,0)} + ' recoverable leads')">🔁 Re-engage Recoverables</button>
    </div>
  </div>

  ${_prospectSubNav('prospects-lost')}

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md); margin-bottom: var(--space-lg);">
    <div class="kpi-card"><div class="kpi-label">Total Lost</div><div class="kpi-value">${total}</div></div>
    <div class="kpi-card"><div class="kpi-label">Recoverable</div><div class="kpi-value" style="color:var(--status-green);">${r.filter(x=>x.recoverable).reduce((s,x)=>s+x.count,0)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Recoverable Value</div><div class="kpi-value">$${(recoverable_value/1e6).toFixed(2)}M</div></div>
    <div class="kpi-card"><div class="kpi-label">In Nurture Drip</div><div class="kpi-value">${r.filter(x=>x.recoverable).reduce((s,x)=>s+x.count,0) - 4}</div></div>
  </div>

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">LOST REASON ANALYSIS</div>
      ${r.map(x => `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; margin-bottom:4px; align-items:center;">
            <div>
              <strong>${x.reason}</strong>
              <span style="color:var(--text-muted); font-size:0.78rem; margin-left:var(--space-sm);">${x.count} leads · avg $${(x.avg_value/1000).toFixed(0)}k</span>
              ${x.recoverable ? '<span style="color:var(--status-green); font-size:0.72rem; margin-left:var(--space-sm);">♻ Recoverable</span>' : '<span style="color:var(--text-muted); font-size:0.72rem; margin-left:var(--space-sm);">✗ Not recoverable</span>'}
            </div>
            <strong>${x.pct}%</strong>
          </div>
          <div style="background:var(--bg-card); height:10px; border-radius:5px; overflow:hidden;"><div style="height:100%; width:${x.pct*3}%; background:${x.recoverable?'var(--status-green)':'var(--status-red)'}; opacity:0.7;"></div></div>
        </div>`).join('')}
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">💡 COACHING INSIGHTS</div>
      <div style="font-size:0.85rem; line-height:1.7;">
        <div style="padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); margin-bottom: var(--space-sm);">🎯 <strong>Price</strong> is the #1 reason — 31%. Consider carrier-tier training for producers.</div>
        <div style="padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); margin-bottom: var(--space-sm);">📞 <strong>No response</strong> (5%) has a 68% recovery rate when re-engaged via SMS.</div>
        <div style="padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm);">⏰ <strong>Timing</strong> losses should be tagged by renewal date for automated re-engagement 60 days before expiry.</div>
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">LOST LEADS — RECENT (${lost.length})</div>
    <table class="data-table">
      <thead><tr><th>ID</th><th>Company</th><th>Value</th><th>Lost Reason</th><th>Lost Date</th><th>Producer</th><th>Next</th><th>Action</th></tr></thead>
      <tbody>
        ${lost.map(x => `
        <tr>
          <td style="font-family:monospace; font-size:0.78rem;">${x.id}</td>
          <td><strong>${x.company}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${x.industry}</div></td>
          <td>${x.revenue}</td>
          <td>${badge('red', x.lost_reason || 'Other')}</td>
          <td style="font-size:0.82rem;">${x.last_activity}</td>
          <td style="font-size:0.82rem;">${x.producer}</td>
          <td style="font-size:0.82rem;">${x.next_action}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="window.showAlert('Adding ${x.company} to 30-day re-engagement drip')">🔁 Re-engage</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderProspectsImportCenter() {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Lead Import &amp; Enrichment Center</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Bulk import · smart de-dup · auto-enrichment · source tracking</div>
    </div>
  </div>

  ${_prospectSubNav('prospects-import')}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="doc-dropzone" onclick="window.showAlert('File picker opened')">
      <div style="font-size:3rem; margin-bottom: var(--space-sm);">⬆</div>
      <h3 style="margin:0;">Drop CSV / Excel here</h3>
      <div style="color:var(--text-muted); margin-top:var(--space-sm);">or <strong style="color:var(--mga-accent); cursor:pointer;">browse files</strong> — we'll auto-map columns, de-dup, and enrich</div>
      <div style="display:flex; gap:var(--space-sm); margin-top: var(--space-lg); flex-wrap:wrap; justify-content:center;">
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('Email intake configured — leads@quantana.com.au')">📧 Email-to-Lead</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('Connecting to ZoomInfo…')">🔗 ZoomInfo Sync</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('Connecting to Salesforce…')">☁️ Salesforce Import</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); window.showAlert('Webhook URL copied')">🔌 Webhook (website forms)</button>
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">IMPORT RULES</div>
      <div style="font-size:0.85rem; line-height:1.9;">
        <div>🔍 <strong>Duplicate check:</strong> Name + email + FEIN</div>
        <div>✨ <strong>Auto-enrichment:</strong> D&B, LinkedIn, ZoomInfo</div>
        <div>🎯 <strong>Auto-scoring:</strong> On import</div>
        <div>👤 <strong>Auto-assign:</strong> Territory + LOB + load</div>
        <div>📧 <strong>Welcome sequence:</strong> Triggers automatically</div>
        <div>⚖ <strong>Compliance:</strong> GDPR/CCPA consent tracked</div>
      </div>
    </div>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg); margin-bottom: var(--space-lg);">
    <div class="section-title">RECENT IMPORTS</div>
    <table class="data-table">
      <thead><tr><th>Source</th><th>File / Batch</th><th>Total</th><th>New</th><th>Duplicates</th><th>Enriched</th><th>Assigned</th><th>Imported</th><th>Status</th></tr></thead>
      <tbody>
        ${[
          { src: 'CSV Upload',     file: 'Q2_2026_TradeShow_Leads.csv',        total: 184, new: 156, dup: 28, enr: 142, assg: 156, ts: '2026-04-17 09:12', ok: true  },
          { src: 'Website Form',   file: 'nexusbroker.com/quote',               total: 42,  new: 38,  dup: 4,  enr: 38,  assg: 38,  ts: '2026-04-17 02:00', ok: true  },
          { src: 'Email Intake',   file: 'leads@quantana.com.au',               total: 12,  new: 10,  dup: 2,  enr: 10,  assg: 10,  ts: '2026-04-16 18:44', ok: true  },
          { src: 'ZoomInfo Sync',  file: 'California Transportation $10-25M',   total: 88,  new: 72,  dup: 16, enr: 88,  assg: 72,  ts: '2026-04-15 11:30', ok: true  },
          { src: 'CSV Upload',     file: 'Partner_Referrals_Apr.xlsx',          total: 24,  new: 22,  dup: 2,  enr: 18,  assg: 0,   ts: '2026-04-14 16:15', ok: false }
        ].map(i => `
        <tr>
          <td>${i.src}</td>
          <td style="font-family:monospace; font-size:0.78rem;">${i.file}</td>
          <td>${i.total}</td>
          <td><strong style="color:var(--status-green);">${i.new}</strong></td>
          <td style="color:var(--status-amber);">${i.dup}</td>
          <td>${i.enr}</td>
          <td>${i.assg}</td>
          <td style="font-size:0.8rem;">${i.ts}</td>
          <td>${badge(i.ok?'green':'amber', i.ok?'Complete':'Manual review')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
    <div class="section-title">DATA HYGIENE</div>
    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md);">
      <div class="kpi-card"><div class="kpi-label">Duplicates Prevented</div><div class="kpi-value" style="color:var(--status-green);">52</div></div>
      <div class="kpi-card"><div class="kpi-label">Enrichment Success</div><div class="kpi-value">94%</div></div>
      <div class="kpi-card"><div class="kpi-label">Email Verified</div><div class="kpi-value">97%</div></div>
      <div class="kpi-card"><div class="kpi-label">Pending Review</div><div class="kpi-value warning">6</div></div>
    </div>
  </div>`;
}

function renderProspectsAnalytics() {
  const a = D.prospectAnalytics;
  const maxFunnel = a.conversion_funnel[0].count;
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <div>
      <h2 style="margin:0;">Prospects Analytics</h2>
      <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Conversion · source ROI · pipeline value · win/loss · scoring accuracy</div>
    </div>
    <div style="display:flex; gap:var(--space-sm);">
      <select class="form-input" style="width:160px;"><option>Last 90 days</option><option>YTD</option><option>Last 12 months</option></select>
      <button class="btn btn-primary" onclick="window.showAlert('Export queued — prospects analytics')">Export</button>
    </div>
  </div>

  ${_prospectSubNav('prospects-analytics')}

  ${kpiCards(D.prospectKPIs, 6)}

  <div style="display:grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg); margin: var(--space-lg) 0;">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">CONVERSION FUNNEL (90 DAYS)</div>
      ${a.conversion_funnel.map(s => `
        <div style="margin-bottom: var(--space-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; margin-bottom:4px;">
            <strong>${s.stage}</strong>
            <span><strong>${s.count}</strong> <span style="color:var(--text-muted);">(${s.pct}%)</span></span>
          </div>
          <div style="background:var(--bg-card); height:22px; border-radius:4px; overflow:hidden;">
            <div style="height:100%; width:${(s.count/maxFunnel)*100}%; background:linear-gradient(90deg, var(--mga-accent), #a67dff);"></div>
          </div>
        </div>`).join('')}
      <div style="margin-top: var(--space-md); padding: var(--space-sm); background:var(--bg-card); border-radius:var(--radius-sm); font-size:0.82rem; color:var(--text-muted);">
        💡 Biggest drop-off: Lead → Qualified (27pp). Focus on discovery meeting quality.
      </div>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PIPELINE VALUE BY STAGE</div>
      ${a.pipeline_by_stage.map(s => `
        <div style="padding: var(--space-sm) 0; border-bottom:1px solid var(--border-subtle);">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div><strong style="font-size:0.88rem;">${s.stage}</strong><div style="color:var(--text-muted); font-size:0.72rem;">${s.count} deals</div></div>
            <strong style="color:var(--mga-accent);">$${(s.value/1000).toFixed(0)}k</strong>
          </div>
        </div>`).join('')}
      <div style="margin-top: var(--space-sm); padding: var(--space-sm); background: rgba(108,92,231,0.1); border-radius:var(--radius-sm); font-size:0.85rem;">
        <strong>Weighted Forecast:</strong> <span style="color:var(--mga-accent);">$${((a.pipeline_by_stage.reduce((s,x,i) => s + x.value * (D.prospectStages.find(ps => ps.key===x.stage)?.prob || 0) / 100, 0))/1000).toFixed(0)}k</span>
      </div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); margin-bottom: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">LEAD SOURCE ROI</div>
      <table class="data-table">
        <thead><tr><th>Source</th><th>Leads</th><th>Won</th><th>Cost</th><th>Revenue</th><th>ROI</th></tr></thead>
        <tbody>
          ${a.source_roi.map(s => `
          <tr>
            <td><strong>${s.source}</strong></td>
            <td>${s.leads}</td>
            <td>${s.converted}</td>
            <td>$${(s.cost/1000).toFixed(0)}k</td>
            <td>$${(s.revenue/1000).toFixed(0)}k</td>
            <td><strong style="color:var(--status-green);">${s.roi}</strong></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">TIME TO CONVERT BY SOURCE</div>
      ${a.time_to_convert.map(s => `
        <div style="margin-bottom: var(--space-md);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
            <strong>${s.source}</strong>
            <span><strong>${s.avg_days}d</strong> <span style="color:var(--text-muted);">· ${s.rate}% conversion</span></span>
          </div>
          <div style="background:var(--bg-card); height:8px; border-radius:4px; overflow:hidden;"><div style="height:100%; width:${(s.rate/50)*100}%; background:${s.rate>=40?'var(--status-green)':s.rate>=25?'var(--mga-accent)':'var(--status-amber)'};"></div></div>
        </div>`).join('')}
    </div>
  </div>

  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg);">
    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">PRODUCER PERFORMANCE</div>
      <table class="data-table">
        <thead><tr><th>Producer</th><th>Open</th><th>Won (30d)</th><th>Pipeline</th><th>Win Rate</th><th>Avg Days</th></tr></thead>
        <tbody>
          ${a.by_producer.map(p => `
          <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.open}</td>
            <td>${p.won_30d}</td>
            <td>$${(p.pipeline/1e6).toFixed(2)}M</td>
            <td><strong style="color:${p.win_rate>=30?'var(--status-green)':p.win_rate>=20?'var(--mga-accent)':'var(--status-amber)'};">${p.win_rate}%</strong></td>
            <td>${p.avg_days}d</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:var(--space-lg);">
      <div class="section-title">LEAD SCORING MODEL ACCURACY</div>
      <table class="data-table">
        <thead><tr><th>Score Band</th><th>Predicted Win %</th><th>Actual Win %</th><th>Variance</th></tr></thead>
        <tbody>
          ${a.score_accuracy.map(s => { const v = s.actual_win - s.predicted_win; return `
          <tr>
            <td><strong>${s.band}</strong></td>
            <td>${s.predicted_win}%</td>
            <td>${s.actual_win}%</td>
            <td style="color:${Math.abs(v)<=4?'var(--status-green)':'var(--status-amber)'};">${v>=0?'+':''}${v} pp</td>
          </tr>`; }).join('')}
        </tbody>
      </table>
      <div style="margin-top: var(--space-sm); padding: var(--space-sm); background: rgba(0,230,118,0.1); border-radius:var(--radius-sm); font-size:0.78rem; color:var(--text-muted);">
        ✓ Model accuracy within ±4pp across all bands. Last recalibrated: 2026-04-01.
      </div>
    </div>
  </div>`;
}

function bindBroker() {
  const logout = $('#btn-logout');
  if (logout) logout.addEventListener('click', () => setState({ portal: null, screen: 'dashboard' }));

  // Side nav
  $$('.side-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      setState({ screen: item.dataset.screen, wizardStep: 1 });
    });
  });

  $$('.btn-view-policy').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ screen: 'policy-details' });
    });
  });

  const backPol = $('#btn-back-policies');
  if (backPol) backPol.addEventListener('click', () => setState({ screen: 'policies' }));

  const pdfBtn = $('#btn-pol-pdf');
  if (pdfBtn) pdfBtn.addEventListener('click', () => alert('Downloading Policy Docs...'));
  
  const uploadBtn = $('#btn-pol-upload');
  if (uploadBtn) uploadBtn.addEventListener('change', () => {
    if (uploadBtn.files.length > 0) alert('Uploaded ' + uploadBtn.files[0].name + ' to policy documents repository.');
  });

  const lossBtn = $('#btn-pol-loss-runs');
  if (lossBtn) lossBtn.addEventListener('click', () => setState({ screen: 'policy-loss-runs' }));

  const editBtn = $('#btn-pol-edit');
  if (editBtn) editBtn.addEventListener('click', () => setState({ screen: 'policy-edit' }));

  const renewBtn = $('#btn-pol-renew');
  if (renewBtn) renewBtn.addEventListener('click', () => setState({ screen: 'policy-renew' }));

  const cancelBtn = $('#btn-pol-cancel');
  if (cancelBtn) cancelBtn.addEventListener('click', () => setState({ screen: 'policy-cancel' }));

  const b1 = $('#btn-back-to-policy');
  if (b1) b1.addEventListener('click', () => setState({ screen: 'policy-details' }));
  const b2 = $('#btn-back-to-policy-2');
  if (b2) b2.addEventListener('click', () => setState({ screen: 'policy-details' }));
  const b3 = $('#btn-back-to-policy-3');
  if (b3) b3.addEventListener('click', () => setState({ screen: 'policy-details' }));
  const b4 = $('#btn-back-to-policy-4');
  if (b4) b4.addEventListener('click', () => setState({ screen: 'policy-details' }));

  const subEdit = $('#btn-submit-edit');
  if (subEdit) subEdit.addEventListener('click', () => { alert('Endorsement request submitted!'); setState({ screen: 'policy-details' }); });
  const confCancel = $('#btn-confirm-cancel');
  if (confCancel) confCancel.addEventListener('click', () => { alert('Policy has been queued for cancellation processing.'); setState({ screen: 'policy-details' }); });

  $$('.btn-view-quote').forEach(btn => btn.addEventListener('click', () => setState({ screen: 'quote-details' })));
  $$('.btn-view-binding').forEach(btn => btn.addEventListener('click', () => setState({ screen: 'binding-details' })));
  $$('.btn-manage-renewal').forEach(btn => btn.addEventListener('click', () => setState({ screen: 'renewal-details' })));
  
  $$('.btn-view-client').forEach(btn => btn.addEventListener('click', () => setState({ screen: 'client-details' })));
  
  const bcl = $('#btn-back-to-clients'); if (bcl) bcl.addEventListener('click', () => setState({ screen: 'clients' }));
  const bq = $('#btn-back-to-quotes'); if (bq) bq.addEventListener('click', () => setState({ screen: 'quotes' }));
  const bb = $('#btn-back-to-bindings'); if (bb) bb.addEventListener('click', () => setState({ screen: 'bindings' }));
  const br = $('#btn-back-to-renewals'); if (br) br.addEventListener('click', () => setState({ screen: 'renewals' }));

  const newSub = $('#btn-new-submission');
  if (newSub) newSub.addEventListener('click', () => setState({ screen: 'submission', wizardStep: 1 }));

  const backBroker = $('#btn-back-broker');
  if (backBroker) backBroker.addEventListener('click', () => {
    if (state.wizardStep > 1) setState({ wizardStep: state.wizardStep - 1 });
    else setState({ screen: 'dashboard' });
  });

  const nextStep = $('#btn-next-step');
  if (nextStep) nextStep.addEventListener('click', () => setState({ wizardStep: state.wizardStep + 1 }));

  const prevStep = $('#btn-prev-step');
  if (prevStep) prevStep.addEventListener('click', () => setState({ wizardStep: state.wizardStep - 1 }));

  const saveDraft = $('#btn-save-draft');
  if (saveDraft) saveDraft.addEventListener('click', () => window.showAlert('Submission saved as draft — resume from Dashboard > Drafts'));

  const bindNow = $('#btn-bind-now');
  if (bindNow) bindNow.addEventListener('click', () => {
    const result = $('#binding-result');
    if (result) result.style.display = 'block';
    bindNow.textContent = '✅ Bound';
    bindNow.disabled = true;
  });

  // Radio pills in step 6
  $$('.radio-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      $$('.radio-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Stepper click navigation
  $$('.stepper-step').forEach(step => {
    step.addEventListener('click', () => {
      const num = parseInt(step.dataset.step);
      if (num && num <= state.wizardStep) setState({ wizardStep: num });
    });
  });

  // ─── Claims list: scope tabs & filters ───
  $$('[data-claims-scope]').forEach(t => t.addEventListener('click', () => setState({ claimsScope: t.dataset.claimsScope })));
  const fStatus = $('#f-status');
  if (fStatus) fStatus.addEventListener('change', () => setState({ claimsFilters: { ...(state.claimsFilters||{}), status: fStatus.value } }));
  const fLob = $('#f-lob');
  if (fLob) fLob.addEventListener('change', () => setState({ claimsFilters: { ...(state.claimsFilters||{}), lob: fLob.value } }));
  const fCarrier = $('#f-carrier');
  if (fCarrier) fCarrier.addEventListener('change', () => setState({ claimsFilters: { ...(state.claimsFilters||{}), carrier: fCarrier.value } }));
  const claimsSearch = $('#claims-search');
  if (claimsSearch) {
    claimsSearch.addEventListener('change', () => setState({ claimsFilters: { ...(state.claimsFilters||{}), search: claimsSearch.value } }));
    claimsSearch.addEventListener('keydown', (e) => { if (e.key === 'Enter') setState({ claimsFilters: { ...(state.claimsFilters||{}), search: claimsSearch.value } }); });
  }
  const fAge = $('#f-age');
  if (fAge) fAge.addEventListener('change', () => setState({ claimsFilters: { ...(state.claimsFilters||{}), age: fAge.value } }));
  const fAmt = $('#f-amount');
  if (fAmt) fAmt.addEventListener('change', () => setState({ claimsFilters: { ...(state.claimsFilters||{}), amount: fAmt.value } }));
  const fReset = $('#claims-reset');
  if (fReset) fReset.addEventListener('click', () => setState({ claimsFilters: {} }));

  // ─── Claim 360° Request Authority modal ───
  const authBtn = $('#btn-claim-authority');
  if (authBtn) authBtn.addEventListener('click', () => {
    const c = D.claimDetail;
    const reserve = c.reserves_history.slice(-1)[0].amount;
    window.showModal(
      'Request Settlement Authority',
      `<div style="font-size:0.9rem; line-height:1.5;">
        <p style="margin-top:0;">Request authority from <strong>${c.adjuster.company}</strong> to settle claim <strong>${c.internal_no}</strong>.</p>
        <div style="margin-bottom:12px;"><label class="form-label">Requested Authority</label><input class="form-input" id="auth-amount" type="text" value="$${reserve.toLocaleString()}"/></div>
        <div style="margin-bottom:12px;"><label class="form-label">Basis / Justification</label><textarea class="form-input" id="auth-reason" rows="3" placeholder="e.g. Medical bills finalized, claimant accepted terms...">Injury stabilized; estimated medical + lost-wage exposure aligns with current reserve.</textarea></div>
        <div><label class="form-label">Deliver To</label>
          <select class="form-input" id="auth-to"><option>${c.adjuster.name} — ${c.adjuster.email}</option><option>Claims Manager — claims.mgr@libertymutual.com</option></select>
        </div>
      </div>`,
      'Send Request',
      () => window.showAlert('✅ Authority request sent to ' + c.adjuster.name + '. Expected response: 24–48 hours.')
    );
  });

  // ─── Claim 360° Expedite Payment modal ───
  const expBtn = $('#btn-claim-expedite');
  if (expBtn) expBtn.addEventListener('click', () => {
    const c = D.claimDetail;
    window.showModal(
      'Expedite Payment Request',
      `<div style="font-size:0.9rem; line-height:1.5;">
        <p style="margin-top:0;">Escalate payment on claim <strong>${c.internal_no}</strong> to carrier treasury for expedited processing.</p>
        <div style="margin-bottom:12px;"><label class="form-label">Reason Code</label>
          <select class="form-input" id="exp-reason">
            <option>Hardship — claimant medical necessity</option>
            <option>Vendor deadline — lien / repair release</option>
            <option>Catastrophe event — prioritized queue</option>
            <option>SLA breach correction</option>
            <option>Other (see note)</option>
          </select>
        </div>
        <div style="margin-bottom:12px;"><label class="form-label">Amount to Expedite</label><input class="form-input" id="exp-amount" value="$2,500"/></div>
        <div><label class="form-label">Internal Note (audit trail)</label><textarea class="form-input" id="exp-note" rows="2" placeholder="Why this cannot wait for standard cycle..."></textarea></div>
      </div>`,
      'Submit Expedite',
      () => window.showAlert('⚡ Expedite request submitted to carrier treasury. Target pay date: T+2 business days.')
    );
  });

  // ─── Claim 360° actions menu ───
  const actBtn = $('#btn-claim-actions');
  if (actBtn) actBtn.addEventListener('click', (e) => { e.stopPropagation(); setState({ claimActionsOpen: !state.claimActionsOpen }); });
  $$('.claim-action').forEach(el => el.addEventListener('click', () => {
    const a = el.dataset.claimAction;
    const labels = {
      authority: 'Settlement authority approved — payment will be issued within 48 hours',
      cat: 'Claim flagged as CAT / Large Loss — executive review initiated',
      subro: 'Subrogation file opened — counsel notified',
      deny: 'Denial letter template prepared — awaiting final review',
      litigation: 'Litigation tracker opened — defense counsel will be assigned',
      tpa: 'TPA assignment dialog launched',
      close: 'Claim closed — satisfaction survey sent to client · cross-sell opportunity: Umbrella coverage'
    };
    window.showAlert(labels[a] || 'Action executed');
    setState({ claimActionsOpen: false });
  }));

  // ─── FNOL wizard ───
  const fnolBack = $('#btn-fnol-back');
  if (fnolBack) fnolBack.addEventListener('click', () => {
    if ((state.fnolStep || 1) > 1) setState({ fnolStep: state.fnolStep - 1 });
    else setState({ screen: 'claims', fnolStep: 1, fnolDraft: {} });
  });
  const fnolPrev = $('#btn-fnol-prev');
  if (fnolPrev) fnolPrev.addEventListener('click', () => setState({ fnolStep: (state.fnolStep||1) - 1 }));
  const fnolNext = $('#btn-fnol-next');
  if (fnolNext) fnolNext.addEventListener('click', () => {
    const draft = { ...(state.fnolDraft || {}) };
    const step = state.fnolStep || 1;
    if (step === 1) {
      const cl = $('#fnol-client'); const pl = $('#fnol-policy');
      if (cl) draft.client = cl.value; if (pl) draft.policy = pl.value;
    } else if (step === 2) {
      const g = id => { const el = $('#'+id); return el ? el.value : undefined; };
      draft.loss_date = g('fnol-date'); draft.loss_time = g('fnol-time');
      draft.loss_type = g('fnol-type'); draft.location = g('fnol-location');
      draft.description = g('fnol-desc');
      const inj = $('#fnol-injury'); const tp = $('#fnol-third'); const pol = $('#fnol-police');
      draft.injury = inj && inj.checked; draft.third_party = tp && tp.checked; draft.police = pol && pol.checked;
    }
    setState({ fnolStep: step + 1, fnolDraft: draft });
  });
  const fnolSaveDraft = $('#btn-fnol-save-draft');
  if (fnolSaveDraft) fnolSaveDraft.addEventListener('click', () => window.showAlert('FNOL draft saved'));

  // FNOL Step 3 parties
  const addParty = $('#btn-fnol-add-party');
  if (addParty) addParty.addEventListener('click', () => {
    const draft = { ...(state.fnolDraft || {}) };
    draft.parties = [...(draft.parties || [{ role:'Claimant', name:'', contact:'' }]), { role:'Witness', name:'', contact:'' }];
    setState({ fnolDraft: draft });
  });
  $$('[data-party]').forEach(inp => inp.addEventListener('input', () => {
    const draft = { ...(state.fnolDraft || {}) };
    const parties = [...(draft.parties || [{ role:'Claimant', name:'', contact:'' }])];
    const i = parseInt(inp.dataset.party);
    if (parties[i]) { parties[i] = { ...parties[i], [inp.dataset.field]: inp.value }; }
    draft.parties = parties;
    Object.assign(state, { fnolDraft: draft });
  }));
  $$('[data-party-remove]').forEach(btn => btn.addEventListener('click', () => {
    const draft = { ...(state.fnolDraft || {}) };
    const i = parseInt(btn.dataset.partyRemove);
    draft.parties = (draft.parties || []).filter((_, idx) => idx !== i);
    setState({ fnolDraft: draft });
  }));

  // FNOL Step 4 docs
  const addSamples = $('#btn-fnol-add-samples');
  if (addSamples) addSamples.addEventListener('click', () => {
    const draft = { ...(state.fnolDraft || {}) };
    draft.files = [
      { name: 'Jobsite_Photo_1.jpg', category: 'Photo', size: '2.4 MB' },
      { name: 'Police_Report_2026-04-15.pdf', category: 'Police Report', size: '0.8 MB' },
      { name: 'ER_Discharge_Summary.pdf', category: 'Medical Record', size: '0.6 MB' }
    ];
    setState({ fnolDraft: draft });
  });

  // FNOL dropzone — click to pick files + drag-and-drop
  const fnolDrop = $('#fnol-dropzone');
  if (fnolDrop) {
    const addFile = (name, size) => {
      const draft = { ...(state.fnolDraft || {}) };
      draft.files = [...(draft.files || []), {
        name,
        category: /\.(jpg|jpeg|png|gif)$/i.test(name) ? 'Photo' : /report/i.test(name) ? 'Police Report' : /medical|er|discharge/i.test(name) ? 'Medical Record' : 'Document',
        size: (size / (1024 * 1024)).toFixed(1) + ' MB'
      }];
      setState({ fnolDraft: draft });
    };
    fnolDrop.addEventListener('click', () => {
      const picker = document.createElement('input');
      picker.type = 'file';
      picker.multiple = true;
      picker.onchange = () => {
        [...picker.files].forEach(f => addFile(f.name, f.size));
      };
      picker.click();
    });
    fnolDrop.addEventListener('dragover', (e) => {
      e.preventDefault();
      fnolDrop.style.borderColor = 'var(--mga-accent)';
      fnolDrop.style.background = 'rgba(108,92,231,0.08)';
    });
    fnolDrop.addEventListener('dragleave', () => {
      fnolDrop.style.borderColor = 'var(--border-subtle)';
      fnolDrop.style.background = 'var(--bg-secondary)';
    });
    fnolDrop.addEventListener('drop', (e) => {
      e.preventDefault();
      fnolDrop.style.borderColor = 'var(--border-subtle)';
      fnolDrop.style.background = 'var(--bg-secondary)';
      [...(e.dataTransfer?.files || [])].forEach(f => addFile(f.name, f.size));
    });
  }
  $$('[data-file-remove]').forEach(btn => btn.addEventListener('click', () => {
    const draft = { ...(state.fnolDraft || {}) };
    const i = parseInt(btn.dataset.fileRemove);
    draft.files = (draft.files || []).filter((_, idx) => idx !== i);
    setState({ fnolDraft: draft });
  }));

  // FNOL stepper navigation
  $$('[data-fnol-step]').forEach(step => {
    step.addEventListener('click', () => {
      const num = parseInt(step.dataset.fnolStep);
      if (num && num <= (state.fnolStep||1)) setState({ fnolStep: num });
    });
  });

  // ─── Onboarding list filters ───
  $$('[data-onb-stage]').forEach(t => t.addEventListener('click', () => setState({ onbStage: t.dataset.onbStage })));
  const onbSearch = $('#onb-search');
  if (onbSearch) {
    const fire = () => setState({ onbFilters: { ...(state.onbFilters||{}), search: onbSearch.value } });
    onbSearch.addEventListener('change', fire);
    onbSearch.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
  }
  const onbSource = $('#onb-source');
  if (onbSource) onbSource.addEventListener('change', () => setState({ onbFilters: { ...(state.onbFilters||{}), source: onbSource.value } }));
  const onbProducer = $('#onb-producer');
  if (onbProducer) onbProducer.addEventListener('change', () => setState({ onbFilters: { ...(state.onbFilters||{}), producer: onbProducer.value } }));
  const onbSegment = $('#onb-segment');
  if (onbSegment) onbSegment.addEventListener('change', () => setState({ onbFilters: { ...(state.onbFilters||{}), segment: onbSegment.value } }));
  const onbReset = $('#onb-reset');
  if (onbReset) onbReset.addEventListener('click', () => setState({ onbFilters: {} }));

  // ─── Onboarding wizard nav ───
  const onbBack = $('#btn-onb-back');
  if (onbBack) onbBack.addEventListener('click', () => {
    if ((state.onbStep||1) > 1) setState({ onbStep: state.onbStep - 1 });
    else setState({ screen: 'onboarding', onbStep: 1 });
  });
  const onbPrev = $('#btn-onb-prev');
  if (onbPrev) onbPrev.addEventListener('click', () => setState({ onbStep: (state.onbStep||1) - 1 }));
  const onbNext = $('#btn-onb-next');
  if (onbNext) onbNext.addEventListener('click', () => setState({ onbStep: (state.onbStep||1) + 1 }));
  $$('[data-onb-step]').forEach(s => s.addEventListener('click', () => {
    const num = parseInt(s.dataset.onbStep);
    if (num && num <= (state.onbStep||1)) setState({ onbStep: num });
  }));

  // ─── Carriers list filters ───
  const carSearch = $('#car-search');
  if (carSearch) {
    const fire = () => setState({ carrierFilters: { ...(state.carrierFilters||{}), search: carSearch.value } });
    carSearch.addEventListener('change', fire);
    carSearch.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
  }
  const carTier = $('#car-tier');
  if (carTier) carTier.addEventListener('change', () => setState({ carrierFilters: { ...(state.carrierFilters||{}), tier: carTier.value } }));
  const carLob = $('#car-lob');
  if (carLob) carLob.addEventListener('change', () => setState({ carrierFilters: { ...(state.carrierFilters||{}), lob: carLob.value } }));
  const carMethod = $('#car-method');
  if (carMethod) carMethod.addEventListener('change', () => setState({ carrierFilters: { ...(state.carrierFilters||{}), method: carMethod.value } }));
  const carStatus = $('#car-status');
  if (carStatus) carStatus.addEventListener('change', () => setState({ carrierFilters: { ...(state.carrierFilters||{}), status: carStatus.value } }));
  const carReset = $('#car-reset');
  if (carReset) carReset.addEventListener('click', () => setState({ carrierFilters: {} }));

  // ─── Bindings pipeline tabs + filters ───
  $$('[data-bind-stage]').forEach(t => t.addEventListener('click', () => setState({ bindingStage: t.dataset.bindStage })));
  const bSearch = $('#b-search');
  if (bSearch) {
    const fire = () => setState({ bindingFilters: { ...(state.bindingFilters||{}), search: bSearch.value } });
    bSearch.addEventListener('change', fire);
    bSearch.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
  }
  const bType = $('#b-type');
  if (bType) bType.addEventListener('change', () => setState({ bindingFilters: { ...(state.bindingFilters||{}), type: bType.value } }));
  const bCarrier = $('#b-carrier');
  if (bCarrier) bCarrier.addEventListener('change', () => setState({ bindingFilters: { ...(state.bindingFilters||{}), carrier: bCarrier.value } }));
  const bProducer = $('#b-producer');
  if (bProducer) bProducer.addEventListener('change', () => setState({ bindingFilters: { ...(state.bindingFilters||{}), producer: bProducer.value } }));
  const bReset = $('#b-reset');
  if (bReset) bReset.addEventListener('click', () => setState({ bindingFilters: {} }));

  // ─── Binding wizard nav ───
  const bwBack = $('#btn-bw-back');
  if (bwBack) bwBack.addEventListener('click', () => {
    if ((state.bindingStep||1) > 1) setState({ bindingStep: state.bindingStep - 1 });
    else setState({ screen: 'bindings', bindingStep: 1 });
  });
  const bwPrev = $('#btn-bw-prev');
  if (bwPrev) bwPrev.addEventListener('click', () => setState({ bindingStep: (state.bindingStep||1) - 1 }));
  const bwNext = $('#btn-bw-next');
  if (bwNext) bwNext.addEventListener('click', () => setState({ bindingStep: (state.bindingStep||1) + 1 }));
  $$('[data-bw-step]').forEach(s => s.addEventListener('click', () => {
    const num = parseInt(s.dataset.bwStep);
    if (num && num <= (state.bindingStep||1)) setState({ bindingStep: num });
  }));

  // ─── Issue binder shortcut from binding-details ───
  const issueBinder = $('#btn-issue-binder');
  if (issueBinder) issueBinder.addEventListener('click', () => window.showModal(
    'Issue Binder',
    `<div style="font-size:0.9rem;">
      <p>Issuing binder will activate coverage at the effective date and time below. This action is logged and irreversible (use Unbind for early withdrawal).</p>
      <div style="margin:12px 0; padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
        <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Effective</span><strong>2026-06-01 12:01 AM PT</strong></div>
        <div style="display:flex; justify-content:space-between; margin-top:4px;"><span style="color:var(--text-muted);">Binder #</span><strong style="font-family:monospace; color:var(--mga-accent);">BND-2026-91-LIB-MAG</strong></div>
      </div>
      <label><input type="checkbox" checked/> Auto-issue ID Cards / COI to client portal</label><br/>
      <label><input type="checkbox" checked/> Trigger post-bind tasks</label>
    </div>`,
    'Confirm & Issue Binder',
    () => window.showAlert('🔒 Binder issued · BND-2026-91-LIB-MAG · Coverage active 2026-06-01')
  ));

  // ─── Quotes pipeline tabs + filters ───
  $$('[data-q-stage]').forEach(t => t.addEventListener('click', () => setState({ quoteStage: t.dataset.qStage })));
  const qSearch = $('#q-search');
  if (qSearch) {
    const fire = () => setState({ quoteFilters: { ...(state.quoteFilters||{}), search: qSearch.value } });
    qSearch.addEventListener('change', fire);
    qSearch.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
  }
  const qLob = $('#q-lob');
  if (qLob) qLob.addEventListener('change', () => setState({ quoteFilters: { ...(state.quoteFilters||{}), lob: qLob.value } }));
  const qProducer = $('#q-producer');
  if (qProducer) qProducer.addEventListener('change', () => setState({ quoteFilters: { ...(state.quoteFilters||{}), producer: qProducer.value } }));
  const qClientType = $('#q-client-type');
  if (qClientType) qClientType.addEventListener('change', () => setState({ quoteFilters: { ...(state.quoteFilters||{}), client_type: qClientType.value } }));
  const qReset = $('#q-reset');
  if (qReset) qReset.addEventListener('click', () => setState({ quoteFilters: {} }));

  // ─── Commissions ledger filters ───
  const cSearch = $('#comm-search');
  if (cSearch) {
    const fire = () => setState({ commFilters: { ...(state.commFilters||{}), search: cSearch.value } });
    cSearch.addEventListener('change', fire);
    cSearch.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
  }
  const cStatus = $('#comm-status');
  if (cStatus) cStatus.addEventListener('change', () => setState({ commFilters: { ...(state.commFilters||{}), status: cStatus.value } }));
  const cType = $('#comm-type');
  if (cType) cType.addEventListener('change', () => setState({ commFilters: { ...(state.commFilters||{}), type: cType.value } }));
  const cCarrier = $('#comm-carrier');
  if (cCarrier) cCarrier.addEventListener('change', () => setState({ commFilters: { ...(state.commFilters||{}), carrier: cCarrier.value } }));
  const cProducer = $('#comm-producer');
  if (cProducer) cProducer.addEventListener('change', () => setState({ commFilters: { ...(state.commFilters||{}), producer: cProducer.value } }));
  const cReset = $('#comm-reset');
  if (cReset) cReset.addEventListener('click', () => setState({ commFilters: {} }));

  // ─── Reconciliation filters ───
  const rcStatus = $('#rec-status');
  if (rcStatus) rcStatus.addEventListener('change', () => setState({ recFilters: { ...(state.recFilters||{}), status: rcStatus.value } }));
  const rcSeverity = $('#rec-severity');
  if (rcSeverity) rcSeverity.addEventListener('change', () => setState({ recFilters: { ...(state.recFilters||{}), severity: rcSeverity.value } }));
  const rcCarrier = $('#rec-carrier');
  if (rcCarrier) rcCarrier.addEventListener('change', () => setState({ recFilters: { ...(state.recFilters||{}), carrier: rcCarrier.value } }));
  const rcReset = $('#rec-reset');
  if (rcReset) rcReset.addEventListener('click', () => setState({ recFilters: {} }));

  // ─── Producer portal selector ───
  const prodSel = $('#prod-sel');
  if (prodSel) prodSel.addEventListener('change', () => setState({ producerView: prodSel.value }));

  // ─── Renewals list: stage tabs + filters ───
  $$('[data-ren-stage]').forEach(t => t.addEventListener('click', () => setState({ renewalStage: t.dataset.renStage })));
  const rSearch = $('#ren-search');
  if (rSearch) {
    const fire = () => setState({ renewalFilters: { ...(state.renewalFilters||{}), search: rSearch.value } });
    rSearch.addEventListener('change', fire);
    rSearch.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
  }
  const rTier = $('#ren-tier');
  if (rTier) rTier.addEventListener('change', () => setState({ renewalFilters: { ...(state.renewalFilters||{}), tier: rTier.value } }));
  const rLob = $('#ren-lob');
  if (rLob) rLob.addEventListener('change', () => setState({ renewalFilters: { ...(state.renewalFilters||{}), lob: rLob.value } }));
  const rProd = $('#ren-producer');
  if (rProd) rProd.addEventListener('change', () => setState({ renewalFilters: { ...(state.renewalFilters||{}), producer: rProd.value } }));
  const rRisk = $('#ren-risk');
  if (rRisk) rRisk.addEventListener('change', () => setState({ renewalFilters: { ...(state.renewalFilters||{}), risk: rRisk.value } }));
  const rReset = $('#ren-reset');
  if (rReset) rReset.addEventListener('click', () => setState({ renewalFilters: {} }));

  // ─── Activity Dashboard: scope tabs / view toggle / filters ───
  $$('[data-act-scope]').forEach(t => t.addEventListener('click', () => setState({ activityScope: t.dataset.actScope })));
  $$('[data-act-view]').forEach(t => t.addEventListener('click', () => setState({ activityView: t.dataset.actView })));
  const actSearch = $('#act-search');
  if (actSearch) {
    const fire = () => setState({ activityFilters: { ...(state.activityFilters||{}), search: actSearch.value } });
    actSearch.addEventListener('change', fire);
    actSearch.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
  }
  const actType = $('#act-type');
  if (actType) actType.addEventListener('change', () => setState({ activityFilters: { ...(state.activityFilters||{}), type: actType.value } }));
  const actPri = $('#act-priority');
  if (actPri) actPri.addEventListener('change', () => setState({ activityFilters: { ...(state.activityFilters||{}), priority: actPri.value } }));
  const actAsg = $('#act-assignee');
  if (actAsg) actAsg.addEventListener('change', () => setState({ activityFilters: { ...(state.activityFilters||{}), assignee: actAsg.value } }));
  const actReset = $('#act-reset');
  if (actReset) actReset.addEventListener('click', () => setState({ activityFilters: {} }));

  $$('[data-act-complete]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    window.openOutcomeModal(btn.dataset.actComplete);
  }));

  // ─── + New Task button (appears in multiple screens) ───
  const newTask = $('#btn-new-task');
  if (newTask) newTask.addEventListener('click', () => window.openTaskModal());

  const actComplete = $('#btn-act-complete');
  if (actComplete) actComplete.addEventListener('click', () => window.openOutcomeModal(state.currentActivityId));

  const newRule = $('#btn-new-rule');
  if (newRule) newRule.addEventListener('click', () => window.showModal(
    'Create Workflow Rule',
    `<div style="font-size:0.9rem;">
      <div style="margin-bottom:12px;"><label class="form-label">Rule Name</label><input class="form-input" placeholder="e.g. Policy bound → welcome call"/></div>
      <div style="margin-bottom:12px;"><label class="form-label">Trigger</label>
        <select class="form-input"><option>Policy Issued</option><option>Claim Reported</option><option>Claim Closed</option><option>Policy 90d to expiry</option><option>Task Overdue 3d</option><option>Commission Variance &gt; 5%</option></select>
      </div>
      <div style="margin-bottom:12px;"><label class="form-label">Condition (optional)</label><input class="form-input" placeholder="e.g. LOB = Workers Comp"/></div>
      <div><label class="form-label">Action</label>
        <select class="form-input"><option>Create Task</option><option>Reassign</option><option>Send Email</option><option>Send SMS</option><option>Escalate to Manager</option></select>
      </div>
    </div>`,
    'Create Rule',
    () => window.showAlert('Workflow rule created and enabled')
  ));
}

// ─── Global helpers for task creation & completion ───
window.openTaskModal = function(linked) {
  const clients = D.brokerClients ? D.brokerClients.map(c => c.name) : [];
  const typeOpts = [...D.activityTypes.client, ...D.activityTypes.internal].map(t => `<option>${t}</option>`).join('');
  const priOpts = D.activityPriorities.map(p => `<option ${p==='Medium'?'selected':''}>${p}</option>`).join('');
  const asgOpts = D.activityAssignees.map(a => `<option ${a==='Sarah Chen'?'selected':''}>${a}</option>`).join('');
  const clientOpts = ['— None —', ...clients].map(c => `<option ${linked && linked.client === c ? 'selected' : ''}>${c}</option>`).join('');
  window.showModal(
    'Create Task',
    `<div style="font-size:0.9rem;">
      <div style="margin-bottom:12px;"><label class="form-label">Subject</label><input class="form-input" placeholder="What needs to be done?" value="${linked && linked.subject ? linked.subject : ''}"/></div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <div><label class="form-label">Type</label><select class="form-input">${typeOpts}</select></div>
        <div><label class="form-label">Priority</label><select class="form-input">${priOpts}</select></div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <div><label class="form-label">Due Date</label><input class="form-input" type="date" value="2026-04-22"/></div>
        <div><label class="form-label">Due Time</label><input class="form-input" type="time" value="14:00"/></div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <div><label class="form-label">Assignee</label><select class="form-input">${asgOpts}</select></div>
        <div><label class="form-label">Link to Client</label><select class="form-input">${clientOpts}</select></div>
      </div>
      <div style="margin-bottom:12px;"><label class="form-label">Description (optional)</label><textarea class="form-input" rows="3" placeholder="Context, agenda, next steps..."></textarea></div>
      <div style="display:flex; gap:16px; font-size:0.85rem;">
        <label><input type="checkbox"/> Recurring</label>
        <label><input type="checkbox" checked/> Email reminder</label>
        <label><input type="checkbox"/> SMS reminder</label>
        <label><input type="checkbox"/> Client-visible</label>
      </div>
    </div>`,
    'Create Task',
    () => window.showAlert('Task created and added to your queue')
  );
};

window.openOutcomeModal = function(id) {
  const a = D.activities.find(x => x.id === id);
  window.showModal(
    'Complete Task',
    `<div style="font-size:0.9rem;">
      <div style="margin-bottom:12px; padding:var(--space-md); background:var(--bg-card); border-radius:var(--radius-md);">
        <div style="font-weight:600;">${a ? a.subject : 'Task'}</div>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">${a ? a.type + (a.client ? ' · ' + a.client : '') : ''}</div>
      </div>
      <div style="margin-bottom:12px;"><label class="form-label">Outcome (required)</label>
        <select class="form-input" id="oc-select">
          <option>Completed — no follow-up needed</option>
          <option>Quote Presented</option>
          <option>Client Renewed</option>
          <option>Left voicemail — follow up</option>
          <option>Client declined — cancelled</option>
          <option>Escalated to manager</option>
          <option>Other (see notes)</option>
        </select>
      </div>
      <div style="margin-bottom:12px;"><label class="form-label">Notes</label><textarea class="form-input" rows="3" placeholder="What happened? What's next?"></textarea></div>
      <div style="display:flex; gap:16px; font-size:0.85rem;">
        <label><input type="checkbox"/> Create follow-up task</label>
        <label><input type="checkbox"/> Attach voice note</label>
      </div>
    </div>`,
    'Mark Complete',
    () => window.showAlert('✓ Task completed & logged to audit trail')
  );
};

// ════════════════════════════════════════════════════════════════
// MGA PORTAL
// ════════════════════════════════════════════════════════════════
function mgaNav() {
  const items = [
    { icon: '📊', label: 'Dashboard', screen: 'dashboard' },
    { icon: '🏢', label: 'Carriers', screen: 'carriers' },
    { icon: '👥', label: 'Brokers', screen: 'brokers' },
    { icon: '📋', label: 'Policies', screen: 'policies' },
    { icon: '📄', label: 'Documents', screen: 'dashboard' },
    { icon: '💰', label: 'Commissions', screen: 'commissions' },
    { icon: '⚖️', label: 'Compliance', screen: 'compliance' },
    { icon: '📊', label: 'Reports', screen: 'dashboard' },
    { icon: '🔧', label: 'Settings', screen: 'dashboard' },
  ];
  return `
  <nav class="side-nav">
    <div class="side-nav-section">Main</div>
    ${items.slice(0,5).map(i => `
      <div class="side-nav-item${state.screen === i.screen && state.screen === i.screen ? '' : ''}${state.screen === i.screen ? ' active' : ''}" data-screen="${i.screen}">
        <span class="side-nav-item-icon">${i.icon}</span>
        <span>${i.label}</span>
      </div>
    `).join('')}
    <div class="side-nav-section">Finance & Legal</div>
    ${items.slice(5,7).map(i => `
      <div class="side-nav-item${state.screen === i.screen ? ' active' : ''}" data-screen="${i.screen}">
        <span class="side-nav-item-icon">${i.icon}</span>
        <span>${i.label}</span>
      </div>
    `).join('')}
    <div class="side-nav-section">System</div>
    ${items.slice(7).map(i => `
      <div class="side-nav-item${state.screen === i.screen ? ' active' : ''}" data-screen="${i.screen}">
        <span class="side-nav-item-icon">${i.icon}</span>
        <span>${i.label}</span>
      </div>
    `).join('')}
    <div class="side-nav-cta">
      <button class="btn btn-primary" style="width:100%" id="btn-mga-new-sub">+ New Submission</button>
    </div>
  </nav>`;
}

function renderMGAPortal() {
  const u = D.USERS.mga;
  const screens = {
    dashboard: renderMGADashboard,
    carriers: renderMGACarriers,
    brokers: renderMGABrokers,
    policies: renderMGAPolicies,
    commissions: renderMGACommissions,
    compliance: renderMGACompliance,
  };
  const content = (screens[state.screen] || renderMGADashboard)();

  return `
  <div class="top-bar mga-top-bar">
    <div class="top-bar-brand">
      <span class="top-bar-brand-icon">⚡</span>
      <span>SINGLEPOINT MGA PORTAL</span>
    </div>
    <div class="top-bar-right">
      <div class="top-bar-user">
        <span>Admin: ${u.name}</span>
        <div class="top-bar-user-avatar">${u.avatar}</div>
      </div>
      <button class="btn btn-ghost btn-sm">Settings</button>
      <button class="btn btn-ghost btn-sm" id="btn-logout">⎋</button>
    </div>
  </div>
  <div class="app-layout">
    ${mgaNav()}
    <div class="main-content">
      <div class="page-content">${content}</div>
    </div>
  </div>`;
}

function renderMGADashboard() {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2>Command Center</h2>
    <span style="color:var(--text-muted); font-size:0.85rem;">Apr 17, 2026</span>
  </div>
  ${kpiCards(D.mgaKPIs, 5)}

  <div class="section-title">⚠️ URGENT ALERTS</div>
  ${D.mgaAlerts.map(a => `
    <div class="alert-banner alert-${a.type}">
      ${a.type === 'red' ? '🔴' : a.type === 'amber' ? '🟡' : '🔵'} ${a.text}
    </div>
  `).join('')}

  <div class="section-title" style="margin-top: var(--space-xl);">RENEWAL PIPELINE (Next 90 Days)</div>
  <div class="data-table-wrapper" style="padding: var(--space-lg);">
    ${D.renewalPipeline.map(r => `
      <div class="progress-bar-container">
        <div class="progress-bar-label">
          <span style="color:var(--text-secondary)">${r.range}</span>
          <span style="color:var(--text-primary); font-weight:600;">${r.count} policies</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill blue" style="width:${r.pct}%"></div>
        </div>
      </div>
    `).join('')}
  </div>`;
}

function renderMGACarriers() {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2>Carrier Management</h2>
    <button class="btn btn-primary">+ Add Carrier</button>
  </div>
  <div class="filter-bar">
    <input class="form-input" placeholder="Search carriers…" />
    <select class="form-input"><option>All Lines</option></select>
    <select class="form-input"><option>All Methods</option></select>
  </div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>AM Best</th><th>Lines</th><th>Method</th><th>Status</th></tr></thead>
      <tbody>
        ${D.mgaCarriers.map(c => {
          const methodBadge = c.method === 'SEMC' ? '<span class="conn-badge conn-semc">🔵 SEMC</span>' : c.method === 'Direct' ? '<span class="conn-badge conn-direct">🟢 Direct</span>' : '<span class="conn-badge conn-file">🟡 File</span>';
          const statusBadge = c.status === 'Live' ? badge('green', '✅ Live') : badge('amber', '🔧 Setup');
          return `<tr><td>${c.name}</td><td>${c.rating}</td><td>${c.lines}</td><td>${methodBadge}</td><td>${statusBadge}</td></tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>
  <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom: var(--space-lg);">
    <span class="conn-badge conn-semc" style="margin-right:8px">🔵 SEMC Aggregator</span>
    <span class="conn-badge conn-direct" style="margin-right:8px">🟢 Direct API</span>
    <span class="conn-badge conn-file">🟡 File-Based (Nexus digitized)</span>
  </div>

  <div class="section-title">CARRIER DETAIL — Chubb (Expanded)</div>
  <div class="detail-panel">
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Connection Type:</span> <span class="conn-badge conn-file">🟡 File-Based</span></div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Last updated:</span> Mar 2026</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Lines:</span> Umbrella | Management Lines</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Commission %:</span> Umbrella 8% | Mgmt Lines 11%</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">States Licensed:</span> All 50</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Status:</span> ${badge('amber', '🔧 In Setup')}</div>
    </div>
    <div style="margin-top: var(--space-lg); display: flex; gap: var(--space-sm);">
      <button class="btn btn-primary btn-sm" onclick="window.showAlert('Opening Rating Engine Configuration...')">Upload Rating Rules</button>
      <button class="btn btn-success btn-sm" onclick="window.showAlert('Carrier connection activated! SEMC syncing is live.')">Activate Carrier</button>
      <button class="btn btn-secondary btn-sm" onclick="window.showAlert('Entry edit mode enabled.')">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="window.showAlert('Confirm carrier deactivation? This will pause all quoting.')">Deactivate</button>
    </div>
  </div>`;
}

function renderMGABrokers() {
  return `
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-lg);">
    <h2>Broker Management</h2>
    <button class="btn btn-primary">+ Add Broker</button>
  </div>
  <div class="filter-bar">
    <input class="form-input" placeholder="Search brokers…" />
    <select class="form-input"><option>All States</option></select>
    <select class="form-input"><option>All Status</option></select>
  </div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Broker</th><th>States Licensed</th><th>Active Clients</th><th>Bindings This Mo</th><th>Comm Rate</th><th>Status</th></tr></thead>
      <tbody>
        ${D.mgaBrokers.map(b => `
        <tr>
          <td>${b.name}</td><td>${b.states}</td><td>${b.clients}</td><td>${b.bindings}</td><td>${b.commRate}</td>
          <td>${b.status === 'Active' ? badge('green', '✅ Active') : badge('amber', '🟡 Onboard')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="section-title">BROKER DETAIL — Lockton (Expanded)</div>
  <div class="detail-panel">
    <div class="section-title" style="margin-bottom: var(--space-sm);">ONBOARDING CHECKLIST</div>
    <div class="checklist-item done">✅ License verified (all 50 states)</div>
    <div class="checklist-item done">✅ E&O documentation on file</div>
    <div class="checklist-item done">✅ Commission agreement signed (12%)</div>
    <div class="checklist-item done">✅ Portal access granted</div>

    <div class="section-title" style="margin-top: var(--space-lg); margin-bottom: var(--space-sm);">PENDING COMMISSION REQUESTS</div>
    <div class="data-table-wrapper">
      <table class="data-table">
        <thead><tr><th>Policy</th><th>Client</th><th>Amount</th><th>Date</th><th>Action</th></tr></thead>
        <tbody>
          <tr>
            <td>SEMC-48821</td><td>Magnolia Constr</td><td>$22,164</td><td>Apr 17</td>
            <td>
              <button class="btn btn-success btn-sm" onclick="window.showAlert('Commission for SEMC-48821 approved.')">Approve</button>
              <button class="btn btn-danger btn-sm" style="margin-left:4px;" onclick="window.showAlert('Commission for SEMC-48821 rejected.')">❌</button>
            </td>
          </tr>
          <tr>
            <td>LIB-20291</td><td>Ridge Builders</td><td>$11,172</td><td>Apr 15</td>
            <td>
              <button class="btn btn-success btn-sm" onclick="window.showAlert('Commission for LIB-20291 approved.')">Approve</button>
              <button class="btn btn-danger btn-sm" style="margin-left:4px;" onclick="window.showAlert('Commission for LIB-20291 rejected.')">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderMGAPolicies() {
  return `
  <h2 style="margin-bottom: var(--space-lg);">Policy Repository</h2>
  <div class="filter-bar">
    <input class="form-input" placeholder="Search policies…" value="Magnolia" />
    <select class="form-input"><option>Broker ▼</option></select>
    <select class="form-input"><option>Carrier ▼</option></select>
    <select class="form-input"><option>Line ▼</option></select>
    <select class="form-input"><option>All Statuses ▼</option></select>
    <select class="form-input"><option>Expiry: Next 30 days</option></select>
    <button class="btn btn-secondary btn-sm" style="margin-left:auto;">Export CSV</button>
  </div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Policy #</th><th>Client</th><th>Carrier</th><th>Line</th><th>Premium</th><th>Expiry</th><th>Status</th></tr></thead>
      <tbody>
        ${D.mgaPolicies.map(p => `
        <tr>
          <td>${p.id}</td><td>${p.client}</td><td>${p.carrier}</td><td>${p.line}</td><td>${p.premium}</td><td>${p.expiry}</td>
          <td>${p.ok ? '✅' : '⚠️'}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="section-title">POLICY DETAIL — SEMC-WC-2025-48821 (Expanded)</div>
  <div class="detail-panel">
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-lg);">
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Named Insured:</span> Magnolia Construction LLC</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Carrier:</span> SEMC · Line: Workers Comp · Premium: $184,700</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Effective:</span> Jun 1 2025</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">Expiry:</span> Jun 1 2026 · Days Left: 44 ⚠️</div>
      <div><span style="color:var(--text-muted); font-size:0.78rem;">States:</span> CA ($147,200) · TX ($31,500) · NC (included)</div>
    </div>
    <div class="tab-bar">
      <div class="tab-item active">Documents</div>
      <div class="tab-item">Endorsements</div>
      <div class="tab-item">Claims</div>
      <div class="tab-item">Loss Run</div>
    </div>
    <div style="display:flex; gap: var(--space-sm); flex-wrap: wrap;">
      <button class="btn btn-secondary btn-sm">📄 Dec Page</button>
      <button class="btn btn-secondary btn-sm">📋 Full Policy</button>
      <button class="btn btn-primary btn-sm">🔄 Start Renewal</button>
      <button class="btn btn-ghost btn-sm">📧 Email</button>
    </div>
  </div>`;
}

function renderMGACommissions() {
  return `
  <h2 style="margin-bottom: var(--space-lg);">Commission Management</h2>
  ${kpiCards(D.mgaCommKPIs)}

  <div class="section-title">PENDING BROKER COMMISSION REQUESTS</div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Broker</th><th>Policy #</th><th>Client</th><th>Comm %</th><th>Amount</th><th>Action</th></tr></thead>
      <tbody>
        ${D.mgaPendingComm.map(c => `
        <tr>
          <td>${c.broker}</td><td>${c.policy}</td><td>${c.client}</td><td>${c.pct}</td><td>${c.amount}</td>
          <td>
            <button class="btn btn-success btn-sm">✅</button>
            <button class="btn btn-danger btn-sm" style="margin-left:4px;">❌</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="section-title">COMMISSION CONFIG (by Carrier / Product)</div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>Carrier</th><th>Product</th><th>Broker Comm %</th><th>MGA Comm %</th></tr></thead>
      <tbody>
        ${D.mgaCommConfig.map(c => `
        <tr><td>${c.carrier}</td><td>${c.product}</td><td>${c.brokerPct}</td><td>${c.mgaPct}</td></tr>
        `).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderMGACompliance() {
  return `
  <h2 style="margin-bottom: var(--space-lg);">Compliance & Filings</h2>
  <div class="filter-bar" style="margin-bottom: var(--space-lg);">
    <select class="form-input"><option>State ▼</option></select>
    <select class="form-input"><option>Product Line ▼</option></select>
    <select class="form-input"><option>Status ▼</option></select>
    <button class="btn btn-secondary btn-sm" style="margin-left:auto;">Export Report</button>
  </div>

  <div class="section-title">FILING STATUS OVERVIEW</div>
  ${kpiCards(D.complianceKPIs)}

  <div class="section-title">OVERDUE — IMMEDIATE ACTION REQUIRED</div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>State</th><th>Product</th><th>Type</th><th>Due Date</th><th>Action</th></tr></thead>
      <tbody>
        ${D.overdueFilings.map(f => `
        <tr style="background: var(--status-red-bg);">
          <td>${f.state}</td><td>${f.product}</td><td>${f.type}</td><td>${f.due}</td>
          <td><button class="btn btn-danger btn-sm">File Now</button></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="section-title">ALL FILINGS</div>
  <div class="data-table-wrapper">
    <table class="data-table">
      <thead><tr><th>State</th><th>Product</th><th>Type</th><th>Due</th><th>Filed</th><th>Status</th></tr></thead>
      <tbody>
        ${D.allFilings.map(f => `
        <tr>
          <td>${f.state}</td><td>${f.product}</td><td>${f.type}</td><td>${f.due}</td><td>${f.filed}</td>
          <td>${badge(f.statusColor, f.status === 'Overdue' ? '🔴 '+f.status : f.status === 'Future' ? '🔵 '+f.status : '🟡 '+f.status)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function bindMGA() {
  const logout = $('#btn-logout');
  if (logout) logout.addEventListener('click', () => setState({ portal: null, screen: 'dashboard' }));

  $$('.side-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      setState({ screen: item.dataset.screen });
    });
  });

  // Tab clicks
  $$('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.tab-item').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// ─── Boot ───
render();
