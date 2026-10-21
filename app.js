/* =============================================
   FixCore AI – JavaScript Engine
   ============================================= */

'use strict';


// ── DATA STORES ──────────────────────────────
const JOBS = [
  { id:'JB-1041', customer:'Aryan Mehta', device:'iPhone 14 Pro', issue:'Screen Cracked', tech:'Ravi Kumar', status:'in-progress', priority:'High', created:'26 May', eta:'Today 6PM', price:'₹4,200' },
  { id:'JB-1040', customer:'Sneha Patel', device:'Samsung S23', issue:'Battery Drain', tech:'Anita Shah', status:'diagnostic', priority:'Medium', created:'25 May', eta:'Tomorrow', price:'₹1,800' },
  { id:'JB-1039', customer:'Karan Singh', device:'OnePlus 11', issue:'Charging Port', tech:'Deepak Rao', status:'completed', priority:'Low', created:'24 May', eta:'Delivered', price:'₹2,500' },
  { id:'JB-1038', customer:'Priya Sharma', device:'Pixel 7 Pro', issue:'Water Damage', tech:'Ravi Kumar', status:'pending', priority:'High', created:'24 May', eta:'27 May', price:'₹6,000' },
  { id:'JB-1037', customer:'Mohit Jain', device:'iPhone 13', issue:'Back Glass', tech:'Anita Shah', status:'completed', priority:'Low', created:'23 May', eta:'Delivered', price:'₹3,500' },
  { id:'JB-1036', customer:'Divya Nair', device:'Realme GT 5', issue:'Speaker Issue', tech:'Deepak Rao', status:'waiting', priority:'Medium', created:'23 May', eta:'28 May', price:'₹900' },
];

const CUSTOMERS = [
  { id:'CU-201', name:'Aryan Mehta', phone:'+91 98765 43210', email:'aryan@email.com', devices:3, visits:7, lastVisit:'26 May 2026', totalSpend:'₹18,400', loyalty:'Gold' },
  { id:'CU-202', name:'Sneha Patel', phone:'+91 87654 32109', email:'sneha@email.com', devices:2, visits:4, lastVisit:'25 May 2026', totalSpend:'₹9,200', loyalty:'Silver' },
  { id:'CU-203', name:'Karan Singh', phone:'+91 76543 21098', email:'karan@email.com', devices:1, visits:2, lastVisit:'24 May 2026', totalSpend:'₹4,500', loyalty:'Bronze' },
  { id:'CU-204', name:'Priya Sharma', phone:'+91 65432 10987', email:'priya@email.com', devices:2, visits:5, lastVisit:'24 May 2026', totalSpend:'₹12,000', loyalty:'Gold' },
  { id:'CU-205', name:'Mohit Jain', phone:'+91 54321 09876', email:'mohit@email.com', devices:1, visits:3, lastVisit:'23 May 2026', totalSpend:'₹7,800', loyalty:'Silver' },
];

const TECHNICIANS = [
  { initials:'RK', name:'Ravi Kumar', role:'Senior Technician', jobs:24, rating:4.9, status:'online', specialty:'Apple Devices', color:'#6366f1' },
  { initials:'AS', name:'Anita Shah', role:'Diagnostics Expert', jobs:18, rating:4.8, status:'online', specialty:'Samsung / Android', color:'#8b5cf6' },
  { initials:'DR', name:'Deepak Rao', role:'Hardware Specialist', jobs:21, rating:4.7, status:'busy', specialty:'Water Damage', color:'#06b6d4' },
  { initials:'MV', name:'Meera Verma', role:'Software Technician', jobs:15, rating:4.6, status:'offline', specialty:'Software & OS', color:'#10b981' },
  { initials:'AK', name:'Amit Kumar', role:'Junior Technician', jobs:9, rating:4.4, status:'online', specialty:'General Repairs', color:'#f59e0b' },
  { initials:'NP', name:'Nisha Pande', role:'Quality Inspector', jobs:6, rating:4.9, status:'online', specialty:'QA & Testing', color:'#ef4444' },
];

const INVENTORY = [
  { name:'iPhone 14 Pro Screen', sku:'SCR-IP14P', qty:12, min:5, price:'₹8,500', category:'Display' },
  { name:'Samsung S23 Battery', sku:'BAT-SS23', qty:3, min:5, price:'₹1,200', category:'Battery' },
  { name:'OnePlus 11 Charging Port', sku:'CHG-OP11', qty:8, min:3, price:'₹850', category:'Ports' },
  { name:'iPhone 13 Back Glass', sku:'BCK-IP13', qty:20, min:10, price:'₹2,400', category:'Body' },
  { name:'Samsung S22 Motherboard', sku:'MBD-SS22', qty:2, min:3, price:'₹12,000', category:'Board' },
  { name:'Pixel 7 Charging Cable', sku:'CBL-PX7', qty:15, min:8, price:'₹350', category:'Accessory' },
  { name:'iPhone 12 Speaker', sku:'SPK-IP12', qty:6, min:4, price:'₹980', category:'Audio' },
  { name:'Universal LCD Adhesive', sku:'ADH-UNV', qty:1, min:3, price:'₹180', category:'Material' },
];

const REVENUE_DATA = [
  { month:'Jan', val:62000 }, { month:'Feb', val:74000 }, { month:'Mar', val:58000 },
  { month:'Apr', val:88000 }, { month:'May', val:95000 }, { month:'Jun', val:71000 },
];

const WARRANTY = [
  { id:'WR-501', customer:'Aryan Mehta', device:'iPhone 14 Pro', repair:'Screen', start:'01 Mar 2026', end:'01 Mar 2027', days_left:279, coverage:76, status:'Active' },
  { id:'WR-502', customer:'Priya Sharma', device:'Pixel 7 Pro', repair:'Water Damage', start:'15 Jan 2026', end:'15 Jan 2027', days_left:104, coverage:28, status:'Expiring' },
  { id:'WR-503', customer:'Mohit Jain', device:'iPhone 13', repair:'Back Glass', start:'01 May 2026', end:'01 Nov 2026', days_left:160, coverage:87, status:'Active' },
  { id:'WR-504', customer:'Karan Singh', device:'OnePlus 11', repair:'Charging Port', start:'10 Feb 2026', end:'10 Aug 2026', days_left:14, coverage:8, status:'Critical' },
];

const NOTIF_QUEUE = [
  { type:'success', icon:'✅', title:'Repair Completed', msg:'JB-1039 — OnePlus 11 is ready for pickup!', delay:2000 },
  { type:'info', icon:'🔔', title:'New Job Received', msg:'JB-1042 — iPhone 15 camera issue from Raj Verma', delay:6000 },
  { type:'warning', icon:'⚠️', title:'Low Stock Alert', msg:'Samsung S23 Battery — only 3 units remaining', delay:10000 },
  { type:'info', icon:'🤖', title:'AI Prediction', msg:'JB-1040 battery capacity at 61% — full replacement advised', delay:14000 },
];

// ── STATE ─────────────────────────────────────
let currentPage = 'dashboard';
let notifCount = 4;

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Expose helpers globally for inline onclick attributes
  window.navigateTo = navigateTo;
  window.showToast = showToast;
  window.openNewJobModal = openNewJobModal;
  window.openAddPartModal = openAddPartModal;
  window.generateInvoice = generateInvoice;
  window.submitNewJob = submitNewJob;
  window.runDiag = runDiag;

  renderAllPages();
  setupNav();
  setupMenuToggle();
  scheduleNotifications();
  initProgressBars();
  initChartAnimations();
  startClock();
  setupSearch();
  setupNotifBtn();
});

function startClock() {
  const el = document.createElement('div');
  el.id = 'live-clock';
  el.style.cssText = 'font-size:12px;font-weight:600;color:var(--text-muted);letter-spacing:0.3px;white-space:nowrap;';
  const topbarRight = document.querySelector('.topbar-right');
  if (topbarRight) topbarRight.prepend(el);
  function tick() {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  tick(); setInterval(tick, 1000);
}

function setupSearch() {
  const input = document.getElementById('global-search');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (!q) return;
      const match = JOBS.find(j => j.customer.toLowerCase().includes(q.toLowerCase()) || j.device.toLowerCase().includes(q.toLowerCase()) || j.id.toLowerCase().includes(q.toLowerCase()));
      if (match) {
        navigateTo('tracker');
        showToast('info', '🔍', 'Search Result', `Found: ${match.id} — ${match.device} (${match.customer})`);
      } else {
        showToast('warning', '🔎', 'No Results', `No match found for "${q}"`);
      }
      input.value = '';
    }
  });
}

function setupNotifBtn() {
  const btn = document.getElementById('notif-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    showToast('info', '🔔', 'Notifications', '4 unread — 1 urgent repair, 1 low stock, 2 job updates');
  });
}

function setupNav() {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      const page = el.dataset.page;
      navigateTo(page);
      closeSidebar();
    });
  });
}

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.getElementById('nav-' + page).classList.add('active');
  document.getElementById('breadcrumb').textContent = pageName(page);
  currentPage = page;
  setTimeout(() => { initProgressBars(); initChartAnimations(); }, 100);
}

function pageName(p) {
  const names = { dashboard:'Dashboard', analytics:'Revenue Analytics', tracker:'Repair Tracker',
    diagnostics:'Device Diagnostics', timeline:'Repair Timeline', technicians:'Technician Management',
    customers:'Customer History', inventory:'Spare Parts Inventory', billing:'QR Billing', warranty:'Warranty Tracking' };
  return names[p] || p;
}

function setupMenuToggle() {
  const btn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  let overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', closeSidebar);
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.querySelector('.sidebar-overlay').classList.remove('active');
}

// ── NOTIFICATIONS ─────────────────────────────
function scheduleNotifications() {
  NOTIF_QUEUE.forEach(n => {
    setTimeout(() => showToast(n.type, n.icon, n.title, n.msg), n.delay);
  });
}

function showToast(type, icon, title, msg) {
  const container = document.getElementById('notification-container');
  const toast = document.createElement('div');
  toast.className = `notif-toast ${type}`;
  toast.innerHTML = `<span class="notif-icon">${icon}</span><div><p class="notif-title">${title}</p><p class="notif-msg">${msg}</p></div>`;
  container.appendChild(toast);
  toast.addEventListener('click', () => dismissToast(toast));
  setTimeout(() => dismissToast(toast), 5000);
  // update badge
  notifCount++;
  const badge = document.getElementById('notif-badge');
  if(badge) { badge.textContent = notifCount; badge.style.animation='none'; badge.offsetHeight; badge.style.animation=''; }
}

function dismissToast(toast) {
  toast.style.animation = 'slideOut 0.3s ease forwards';
  setTimeout(() => toast.remove(), 300);
}

// ── PROGRESS BAR INIT ─────────────────────────
function initProgressBars() {
  document.querySelectorAll('[data-progress]').forEach(bar => {
    const val = bar.dataset.progress;
    requestAnimationFrame(() => { bar.style.width = val + '%'; });
  });
}

function initChartAnimations() {
  document.querySelectorAll('[data-bar-height]').forEach(bar => {
    const h = bar.dataset.barHeight;
    requestAnimationFrame(() => { bar.style.height = h + 'px'; });
  });
}

// ── RENDER ALL PAGES ──────────────────────────
function renderAllPages() {
  document.getElementById('page-dashboard').innerHTML = renderDashboard();
  document.getElementById('page-analytics').innerHTML = renderAnalytics();
  document.getElementById('page-tracker').innerHTML = renderTracker();
  document.getElementById('page-diagnostics').innerHTML = renderDiagnostics();
  document.getElementById('page-timeline').innerHTML = renderTimeline();
  document.getElementById('page-technicians').innerHTML = renderTechnicians();
  document.getElementById('page-customers').innerHTML = renderCustomers();
  document.getElementById('page-inventory').innerHTML = renderInventory();
  document.getElementById('page-billing').innerHTML = renderBilling();
  document.getElementById('page-warranty').innerHTML = renderWarranty();
  // Attach events
  attachTrackerEvents();
  attachInventoryEvents();
  attachBillingEvents();
}

// ════════════════════════════════════════════
//  DASHBOARD
// ════════════════════════════════════════════
function renderDashboard() {
  return `
  <div class="section-header">
    <div>
      <h1 class="section-title">Welcome back, Admin 👋</h1>
      <p class="section-sub">Here's what's happening at FixCore today — 26 May 2026</p>
    </div>
    <div style="display:flex;gap:10px;">
      <span class="ai-pulse">AI Active</span>
      <button class="btn btn-primary btn-sm" onclick="openNewJobModal()">+ New Job</button>
    </div>
  </div>

  <!-- KPI Cards -->
  <div class="grid-4">
    <div class="stat-card">
      <div class="stat-icon purple">🔧</div>
      <div class="stat-value">38</div>
      <div class="stat-label">Active Repairs</div>
      <span class="stat-change up">↑ 12% vs last week</span>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon cyan">📱</div>
      <div class="stat-value">124</div>
      <div class="stat-label">Jobs This Month</div>
      <span class="stat-change up">↑ 8% vs May</span>
    </div>
    <div class="stat-card green">
      <div class="stat-icon green">₹</div>
      <div class="stat-value">₹95K</div>
      <div class="stat-label">Revenue (May)</div>
      <span class="stat-change up">↑ 23% vs Apr</span>
    </div>
    <div class="stat-card amber">
      <div class="stat-icon amber">⭐</div>
      <div class="stat-value">4.87</div>
      <div class="stat-label">Avg Rating</div>
      <span class="stat-change up">↑ 0.12 pts</span>
    </div>
  </div>

  <!-- Recent Jobs + AI Feed -->
  <div class="grid-21">
    <div class="card">
      <div class="card-header">
        <div><p class="card-title">Live Repair Jobs</p><p class="card-sub">Real-time status updates</p></div>
        <button class="btn btn-outline btn-sm" onclick="navigateTo('tracker')">View All</button>
      </div>
      <div class="card-body" style="padding:0;">
        <table class="data-table">
          <thead><tr><th>Job ID</th><th>Customer</th><th>Device</th><th>Status</th><th>ETA</th></tr></thead>
          <tbody>
            ${JOBS.slice(0,5).map(j => `
            <tr>
              <td><span class="chip purple">${j.id}</span></td>
              <td><b>${j.customer}</b></td>
              <td style="color:var(--text-secondary)">${j.device}</td>
              <td>${statusBadge(j.status)}</td>
              <td style="font-size:12px;color:var(--text-muted)">${j.eta}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:18px;">
      <!-- AI Predictions -->
      <div class="glow-card" style="padding:20px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div><p style="font-size:14px;font-weight:700;">🤖 AI Issue Predictions</p><p style="font-size:11px;color:var(--text-muted)">Next 24 hrs forecast</p></div>
          <span class="ai-pulse">Live</span>
        </div>
        ${[
          { icon:'🔋', text:'Battery failure likely — JB-1040 (61% health)', risk:'High' },
          { icon:'📺', text:'Screen pressure crack — JB-1038 progressing', risk:'Medium' },
          { icon:'🌡️', text:'Overheating risk on 3 Samsung units', risk:'Medium' },
        ].map(p => `
        <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border-soft);">
          <span style="font-size:18px;">${p.icon}</span>
          <div style="flex:1;font-size:12.5px;">${p.text}</div>
          <span class="chip ${p.risk==='High'?'red':'amber'}">${p.risk}</span>
        </div>`).join('')}
      </div>

      <!-- Quick Stats -->
      <div class="card">
        <div class="card-header"><p class="card-title">Today's Snapshot</p></div>
        <div class="card-body" style="display:flex;flex-direction:column;gap:14px;">
          ${[
            { label:'Jobs Completed', val:'6', icon:'✅' },
            { label:'Parts Used', val:'14', icon:'🔩' },
            { label:'Revenue Today', val:'₹18,200', icon:'💰' },
            { label:'Pending Pickups', val:'4', icon:'📦' },
          ].map(s => `
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:13px;color:var(--text-secondary);">${s.icon} ${s.label}</span>
            <span style="font-size:14px;font-weight:700;">${s.val}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- Technician Load + Revenue mini -->
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><p class="card-title">Technician Workload</p><p class="card-sub">Active job distribution</p></div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:16px;">
        ${TECHNICIANS.slice(0,4).map(t => `
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <div class="avatar-sm" style="background:${t.color};color:#fff;width:28px;height:28px;font-size:10px;">${t.initials}</div>
              <span style="font-size:13px;font-weight:600;">${t.name}</span>
            </div>
            <span style="font-size:12px;font-weight:700;">${t.jobs} jobs</span>
          </div>
          <div class="progress-wrap"><div class="progress-bar" data-progress="${Math.min(t.jobs/30*100,100).toFixed(0)}" style="width:0;background:${t.color}"></div></div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="card-header"><p class="card-title">Revenue Trend (2026)</p><p class="card-sub">Monthly earnings overview</p></div>
      <div class="card-body">
        <div class="bar-chart" id="rev-mini-chart">
          ${REVENUE_DATA.map((r,i) => `
          <div class="bar-item">
            <div class="bar-fill ${i===4?'':'cyan'}" data-bar-height="${Math.round(r.val/1000)}" style="height:0px;" title="₹${(r.val/1000).toFixed(0)}K"></div>
            <span class="bar-label">${r.month}</span>
          </div>`).join('')}
        </div>
        <div style="margin-top:16px;display:flex;gap:16px;">
          <div><p style="font-size:10px;color:var(--text-muted)">Best Month</p><p style="font-size:15px;font-weight:800;color:var(--accent)">May — ₹95K</p></div>
          <div><p style="font-size:10px;color:var(--text-muted)">Avg Monthly</p><p style="font-size:15px;font-weight:800;">₹74.7K</p></div>
        </div>
      </div>
    </div>
  </div>
  `;
}

// ════════════════════════════════════════════
//  REPAIR TRACKER
// ════════════════════════════════════════════
function renderTracker() {
  const steps = [
    { label:'Job Created', icon:'📝', done: true },
    { label:'Diagnosis', icon:'🔍', done: true },
    { label:'Parts Order', icon:'📦', done: true },
    { label:'In Repair', icon:'🔧', active: true },
    { label:'QA Check', icon:'✅', pending: true },
    { label:'Ready / Delivered', icon:'🚀', pending: true },
  ];

  return `
  <div class="section-header">
    <div><h1 class="section-title">Repair Tracker</h1><p class="section-sub">Interactive real-time repair job management</p></div>
    <div style="display:flex;gap:10px;">
      <select class="input-field" style="width:auto;padding:8px 14px;" id="tracker-filter">
        <option value="all">All Status</option>
        <option value="in-progress">In Progress</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="diagnostic">Diagnostic</option>
        <option value="waiting">Waiting</option>
      </select>
      <button class="btn btn-primary btn-sm" onclick="openNewJobModal()">+ Add Job</button>
    </div>
  </div>

  <!-- Repair Progress Visual -->
  <div class="card" style="margin-bottom:18px;">
    <div class="card-header">
      <div>
        <p class="card-title">JB-1041 — iPhone 14 Pro Screen</p>
        <p class="card-sub">Aryan Mehta • Ravi Kumar • High Priority</p>
      </div>
      <span class="status-badge in-progress">In Progress</span>
    </div>
    <div class="card-body">
      <div class="tracker-steps">
        ${steps.map((s, i) => `
          ${i > 0 ? `<div class="step-connector ${s.done||s.active ? 'done' : 'pending'}"></div>` : ''}
          <div class="tracker-step">
            <div class="step-circle ${s.done ? 'done' : s.active ? 'active' : 'pending-step'}">${s.icon}</div>
            <span class="step-label ${s.active ? 'active-label' : ''}">${s.label}</span>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:24px;margin-top:8px;flex-wrap:wrap;">
        <div><p style="font-size:10px;color:var(--text-muted)">CREATED</p><p style="font-size:13px;font-weight:600;">26 May 2026</p></div>
        <div><p style="font-size:10px;color:var(--text-muted)">ETA</p><p style="font-size:13px;font-weight:600;">Today 6:00 PM</p></div>
        <div><p style="font-size:10px;color:var(--text-muted)">TECHNICIAN</p><p style="font-size:13px;font-weight:600;">Ravi Kumar</p></div>
        <div><p style="font-size:10px;color:var(--text-muted)">PRICE</p><p style="font-size:13px;font-weight:600;color:var(--accent)">₹4,200</p></div>
        <div style="margin-left:auto;">
          <button class="btn btn-outline btn-sm" onclick="showToast('success','📱','SMS Sent','Customer notified via SMS')">Notify Customer</button>
        </div>
      </div>
    </div>
  </div>

  <!-- All Jobs Table -->
  <div class="card">
    <div class="card-header"><p class="card-title">All Repair Jobs</p><p class="card-sub">${JOBS.length} total jobs</p></div>
    <div class="card-body" style="padding:0;" id="tracker-table">
      ${renderJobTable(JOBS)}
    </div>
  </div>
  `;
}

function renderJobTable(jobs) {
  return `
  <table class="data-table">
    <thead><tr><th>Job ID</th><th>Customer</th><th>Device</th><th>Issue</th><th>Technician</th><th>Status</th><th>Price</th><th>Action</th></tr></thead>
    <tbody>
      ${jobs.map(j => `
      <tr>
        <td><span class="chip purple">${j.id}</span></td>
        <td><b>${j.customer}</b></td>
        <td style="color:var(--text-secondary);font-size:12.5px">${j.device}</td>
        <td style="font-size:12.5px">${j.issue}</td>
        <td>
          <div style="display:flex;align-items:center;gap:6px;">
            <div class="avatar-sm" style="width:24px;height:24px;font-size:9px;">${j.tech.split(' ').map(x=>x[0]).join('')}</div>
            <span style="font-size:12.5px">${j.tech}</span>
          </div>
        </td>
        <td>${statusBadge(j.status)}</td>
        <td style="font-weight:700;color:var(--accent)">${j.price}</td>
        <td><button class="btn btn-ghost btn-sm" onclick="showToast('info','🔍','Job Detail','Viewing ${j.id} details')">View</button></td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

function attachTrackerEvents() {
  const filter = document.getElementById('tracker-filter');
  if(!filter) return;
  filter.addEventListener('change', () => {
    const val = filter.value;
    const filtered = val === 'all' ? JOBS : JOBS.filter(j => j.status === val);
    document.getElementById('tracker-table').innerHTML = renderJobTable(filtered);
  });
}

// ════════════════════════════════════════════
//  DIAGNOSTICS
// ════════════════════════════════════════════
function renderDiagnostics() {
  const metrics = [
    { label:'Battery Health', val:61, color:'#ef4444', stroke:'#ef4444', sub:'Replace Recommended' },
    { label:'CPU Performance', val:88, color:'#6366f1', stroke:'#6366f1', sub:'Normal' },
    { label:'Storage Health', val:74, color:'#06b6d4', stroke:'#06b6d4', sub:'Moderate' },
    { label:'Signal Strength', val:92, color:'#10b981', stroke:'#10b981', sub:'Excellent' },
  ];

  return `
  <div class="section-header">
    <div><h1 class="section-title">Device Diagnostics</h1><p class="section-sub">AI-powered hardware health analysis</p></div>
    <span class="ai-pulse">AI Scanning Active</span>
  </div>

  <div class="grid-2" style="margin-bottom:18px;">
    <div class="card">
      <div class="card-header"><p class="card-title">Select Device for Diagnostics</p></div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:12px;">
        ${[
          { icon:'📱', name:'iPhone 14 Pro', model:'A2651 · 256GB', job:'JB-1041' },
          { icon:'📱', name:'Samsung S23', model:'SM-S911B · 128GB', job:'JB-1040' },
          { icon:'📱', name:'Pixel 7 Pro', model:'GE2AE · 128GB', job:'JB-1038' },
        ].map(d => `
        <div class="device-card" onclick="runDiag(this)">
          <div class="device-icon">${d.icon}</div>
          <div>
            <p class="device-name">${d.name}</p>
            <p class="device-model">${d.model}</p>
            <p class="device-meta"><span class="chip purple">${d.job}</span></p>
          </div>
          <button class="btn btn-outline btn-sm" style="margin-left:auto;">Scan</button>
        </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div><p class="card-title">Live Diagnostics — iPhone 14 Pro</p><p class="card-sub">JB-1041 · Last scan: 2 min ago</p></div>
        <span class="chip green">Scan Complete</span>
      </div>
      <div class="card-body">
        <div class="grid-2" style="gap:20px;margin-bottom:0;">
          ${metrics.map(m => `
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div class="diag-ring-wrap">
              ${ringChart(m.val, m.stroke)}
              <div class="diag-ring-value" style="color:${m.color};">
                <div style="font-size:20px;font-weight:800;">${m.val}%</div>
              </div>
            </div>
            <p style="font-size:12px;font-weight:600;text-align:center;">${m.label}</p>
            <p style="font-size:10.5px;color:var(--text-muted);text-align:center;">${m.sub}</p>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <div class="grid-2">
    <div class="glow-card" style="padding:24px;">
      <p style="font-size:14px;font-weight:700;margin-bottom:16px;">🤖 AI Issue Predictions</p>
      ${[
        { issue:'Battery degradation beyond 70% threshold', severity:'Critical', action:'Replace battery immediately' },
        { issue:'Screen OLED burn-in detected at corner', severity:'Moderate', action:'Monitor over next 7 days' },
        { issue:'USB-C port carbon deposits', severity:'Low', action:'Clean with isopropyl alcohol' },
      ].map(p => `
      <div style="background:var(--surface);border-radius:10px;padding:14px;margin-bottom:10px;border-left:3px solid ${p.severity==='Critical'?'var(--accent-danger)':p.severity==='Moderate'?'var(--accent-warn)':'var(--accent-4)'};">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-size:13px;font-weight:600;">${p.issue}</span>
          <span class="chip ${p.severity==='Critical'?'red':p.severity==='Moderate'?'amber':'green'}">${p.severity}</span>
        </div>
        <p style="font-size:12px;color:var(--text-secondary);">Suggested: ${p.action}</p>
      </div>`).join('')}
    </div>

    <div class="card">
      <div class="card-header"><p class="card-title">Component Status</p></div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:14px;">
        ${[
          { name:'Display Module', status:'Cracked', ok:false },
          { name:'Main Battery', status:'Degraded (61%)', ok:false },
          { name:'Face ID Sensor', status:'Functional', ok:true },
          { name:'Rear Camera', status:'Functional', ok:true },
          { name:'Lightning Port', status:'Functional', ok:true },
          { name:'Taptic Engine', status:'Functional', ok:true },
          { name:'Speaker Grille', status:'Minor Dust', ok:false },
          { name:'SIM Tray', status:'Functional', ok:true },
        ].map(c => `
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:13px;">${c.ok?'✅':'❌'} ${c.name}</span>
          <span class="chip ${c.ok?'green':'red'}">${c.status}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>
  `;
}

function ringChart(val, color) {
  const r = 44, cx = 52, cy = 52;
  const circ = 2 * Math.PI * r;
  const dash = (val / 100) * circ;
  return `<svg width="104" height="104" class="ring-svg">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="9"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="9"
      stroke-dasharray="${dash} ${circ}" stroke-linecap="round" style="transition:stroke-dasharray 1.5s ease;"/>
  </svg>`;
}

function runDiag(el) {
  showToast('info','🔍','Scanning Device','Running full diagnostic — please wait...');
  setTimeout(()=>showToast('success','✅','Scan Complete','Report generated for selected device'), 2000);
}

// ════════════════════════════════════════════
//  TIMELINE
// ════════════════════════════════════════════
function renderTimeline() {
  const events = [
    { icon:'📝', label:'Job Created', time:'26 May · 9:15 AM', desc:'JB-1041 opened for Aryan Mehta — iPhone 14 Pro screen replacement request received.', state:'done' },
    { icon:'🔍', label:'Initial Diagnosis', time:'26 May · 9:45 AM', desc:'Ravi Kumar completed initial inspection. Screen cracked — back glass intact. Battery health at 61%.', state:'done' },
    { icon:'📦', label:'Parts Ordered', time:'26 May · 10:30 AM', desc:'iPhone 14 Pro display module ordered from primary supplier. ETA 2-3 hours.', state:'done' },
    { icon:'📦', label:'Parts Received', time:'26 May · 12:15 PM', desc:'Display unit (SKU: SCR-IP14P) received and quality-checked. Serial number logged.', state:'done' },
    { icon:'🔧', label:'Repair In Progress', time:'26 May · 2:00 PM', desc:'Ravi Kumar began screen replacement. Device powered off, display module extraction underway.', state:'active' },
    { icon:'✅', label:'QA Inspection', time:'Est. 5:00 PM', desc:'Quality check by Nisha Pande — full functional test including touch, display, and Face ID.', state:'pending' },
    { icon:'📲', label:'Customer Notification', time:'Est. 5:30 PM', desc:'SMS and push notification will be sent to Aryan Mehta once device is ready.', state:'pending' },
    { icon:'🚀', label:'Delivered / Picked Up', time:'Est. 6:00 PM', desc:'Device handover with warranty card and invoice. QR billing generated.', state:'pending' },
  ];

  return `
  <div class="section-header">
    <div><h1 class="section-title">Repair Timeline</h1><p class="section-sub">Detailed lifecycle visualization for each repair job</p></div>
    <select class="input-field" style="width:auto;padding:8px 14px;">
      ${JOBS.map(j=>`<option>${j.id} — ${j.device}</option>`).join('')}
    </select>
  </div>
  <div class="grid-21">
    <div class="card">
      <div class="card-header">
        <div><p class="card-title">JB-1041 Timeline — iPhone 14 Pro</p><p class="card-sub">Aryan Mehta · Started 9:15 AM · 26 May 2026</p></div>
        <span class="status-badge in-progress">In Progress</span>
      </div>
      <div class="card-body">
        <div class="timeline-list">
          ${events.map((e,i) => `
          <div class="timeline-item">
            <div class="timeline-left">
              <div class="timeline-dot ${e.state==='done'?'done':e.state==='active'?'active':'pending-tl'}">${e.icon}</div>
              ${i < events.length-1 ? '<div class="timeline-line"></div>' : ''}
            </div>
            <div class="timeline-content">
              <p class="timeline-event">${e.label}</p>
              <p class="timeline-time">${e.time}</p>
              <p class="timeline-desc">${e.desc}</p>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:18px;">
      <div class="card">
        <div class="card-header"><p class="card-title">Progress</p></div>
        <div class="card-body">
          <div style="text-align:center;margin-bottom:16px;">
            <div style="font-size:40px;font-weight:900;color:var(--accent);">63%</div>
            <p style="font-size:12px;color:var(--text-muted)">Job Completion</p>
          </div>
          <div class="progress-wrap" style="height:10px;"><div class="progress-bar" data-progress="63" style="width:0"></div></div>
          <div style="display:flex;justify-content:space-between;margin-top:10px;">
            <span style="font-size:11px;color:var(--text-muted)">5 of 8 steps done</span>
            <span style="font-size:11px;color:var(--text-muted)">ETA: 6:00 PM</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><p class="card-title">Job Summary</p></div>
        <div class="card-body" style="display:flex;flex-direction:column;gap:12px;">
          ${[
            ['Job ID','JB-1041'],['Device','iPhone 14 Pro'],['Issue','Screen Cracked'],
            ['Technician','Ravi Kumar'],['Priority','🔴 High'],['Parts Used','SCR-IP14P'],['Quote','₹4,200'],
          ].map(([k,v]) => `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:12px;color:var(--text-muted);">${k}</span>
            <span style="font-size:13px;font-weight:600;">${v}</span>
          </div>`).join('')}
        </div>
      </div>

      <div class="card">
        <div class="card-header"><p class="card-title">Customer</p></div>
        <div class="card-body" style="display:flex;align-items:center;gap:14px;">
          <div class="avatar" style="width:48px;height:48px;font-size:16px;">AM</div>
          <div>
            <p style="font-weight:700;">Aryan Mehta</p>
            <p style="font-size:12px;color:var(--text-muted);">+91 98765 43210</p>
            <span class="chip gold" style="margin-top:4px;background:rgba(245,158,11,0.1);color:var(--accent-warn);">🏆 Gold Member</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

// ════════════════════════════════════════════
//  TECHNICIANS
// ════════════════════════════════════════════
function renderTechnicians() {
  return `
  <div class="section-header">
    <div><h1 class="section-title">Technician Management</h1><p class="section-sub">Team performance and workload overview</p></div>
    <button class="btn btn-primary btn-sm">+ Add Technician</button>
  </div>

  <div class="grid-3" style="margin-bottom:18px;">
    <div class="stat-card">
      <div class="stat-icon purple">👷</div>
      <div class="stat-value">6</div>
      <div class="stat-label">Total Technicians</div>
      <span class="stat-change up">4 online now</span>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon cyan">⚡</div>
      <div class="stat-value">93</div>
      <div class="stat-label">Jobs Completed This Month</div>
      <span class="stat-change up">↑ 18%</span>
    </div>
    <div class="stat-card green">
      <div class="stat-icon green">⭐</div>
      <div class="stat-value">4.76</div>
      <div class="stat-label">Team Avg Rating</div>
      <span class="stat-change up">↑ 0.08 pts</span>
    </div>
  </div>

  <div class="grid-3">
    ${TECHNICIANS.map(t => `
    <div class="tech-card">
      <div style="position:relative;width:fit-content;">
        <div class="tech-avatar" style="background:${t.color}">${t.initials}</div>
        <div style="position:absolute;bottom:2px;right:2px;width:12px;height:12px;border-radius:50%;background:${t.status==='online'?'var(--accent-4)':t.status==='busy'?'var(--accent-warn)':'var(--text-muted)'};border:2px solid #fff;"></div>
      </div>
      <div>
        <p class="tech-name">${t.name}</p>
        <p class="tech-role">${t.role}</p>
        <span class="chip ${t.status==='online'?'green':t.status==='busy'?'amber':'grey'}" style="margin-top:4px;">${t.status}</span>
      </div>
      <div>
        <p class="tech-jobs">${t.jobs}</p>
        <p class="tech-jobs-label">Jobs Completed</p>
      </div>
      <div class="tech-rating">${'⭐'.repeat(Math.floor(t.rating))} <span style="font-size:11px;color:var(--text-secondary);margin-left:4px;">${t.rating}</span></div>
      <p style="font-size:11px;color:var(--text-muted);">${t.specialty}</p>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-outline btn-sm" onclick="showToast('info','👷','Profile','Viewing ${t.name} profile')">Profile</button>
        <button class="btn btn-ghost btn-sm" onclick="showToast('info','📋','Schedule','Opening ${t.name} schedule')">Schedule</button>
      </div>
    </div>`).join('')}
  </div>
  `;
}

// ════════════════════════════════════════════
//  CUSTOMERS
// ════════════════════════════════════════════
function renderCustomers() {
  return `
  <div class="section-header">
    <div><h1 class="section-title">Customer Repair History</h1><p class="section-sub">Full customer lifecycle and loyalty tracking</p></div>
    <button class="btn btn-primary btn-sm">+ Add Customer</button>
  </div>

  <div class="grid-4" style="margin-bottom:18px;">
    <div class="stat-card"><div class="stat-icon purple">👤</div><div class="stat-value">847</div><div class="stat-label">Total Customers</div></div>
    <div class="stat-card cyan"><div class="stat-icon cyan">🔁</div><div class="stat-value">68%</div><div class="stat-label">Repeat Customers</div></div>
    <div class="stat-card green"><div class="stat-icon green">💰</div><div class="stat-value">₹3.2L</div><div class="stat-label">Total Revenue</div></div>
    <div class="stat-card amber"><div class="stat-icon amber">🏆</div><div class="stat-value">124</div><div class="stat-label">Gold Members</div></div>
  </div>

  <div class="card">
    <div class="card-header"><p class="card-title">Customer Directory</p><p class="card-sub">Full repair history & spending</p></div>
    <div class="card-body" style="padding:0;">
      <table class="data-table">
        <thead><tr><th>ID</th><th>Customer</th><th>Contact</th><th>Devices</th><th>Visits</th><th>Last Visit</th><th>Total Spend</th><th>Loyalty</th><th>Action</th></tr></thead>
        <tbody>
          ${CUSTOMERS.map(c => `
          <tr>
            <td><span class="chip grey">${c.id}</span></td>
            <td><b>${c.name}</b><div style="font-size:11px;color:var(--text-muted)">${c.email}</div></td>
            <td style="font-size:12.5px;color:var(--text-secondary)">${c.phone}</td>
            <td style="text-align:center;font-weight:700">${c.devices}</td>
            <td style="text-align:center;font-weight:700">${c.visits}</td>
            <td style="font-size:12px;color:var(--text-muted)">${c.lastVisit}</td>
            <td style="font-weight:700;color:var(--accent)">${c.totalSpend}</td>
            <td><span class="chip ${c.loyalty==='Gold'?'amber':c.loyalty==='Silver'?'grey':'cyan'}">${c.loyalty==='Gold'?'🏆':c.loyalty==='Silver'?'🥈':'🥉'} ${c.loyalty}</span></td>
            <td><button class="btn btn-outline btn-sm" onclick="showToast('info','👤','Profile','Opening ${c.name}\'s full profile')">View</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Repair History Detail -->
  <div class="card" style="margin-top:18px;">
    <div class="card-header"><p class="card-title">Aryan Mehta — Repair History</p><p class="card-sub">7 visits · Gold Member · ₹18,400 lifetime</p></div>
    <div class="card-body" style="padding:0;">
      <table class="data-table">
        <thead><tr><th>Job ID</th><th>Device</th><th>Issue</th><th>Date</th><th>Status</th><th>Amount</th></tr></thead>
        <tbody>
          ${[
            { id:'JB-1041',device:'iPhone 14 Pro',issue:'Screen Cracked',date:'26 May 2026',status:'in-progress',price:'₹4,200'},
            { id:'JB-0998',device:'iPhone 13',issue:'Battery Replace',date:'12 Feb 2026',status:'completed',price:'₹2,800'},
            { id:'JB-0965',device:'iPad Air',issue:'Charging Issue',date:'01 Dec 2025',status:'completed',price:'₹1,500'},
          ].map(j=>`
          <tr>
            <td><span class="chip purple">${j.id}</span></td>
            <td>${j.device}</td>
            <td>${j.issue}</td>
            <td style="font-size:12px;color:var(--text-muted)">${j.date}</td>
            <td>${statusBadge(j.status)}</td>
            <td style="font-weight:700;color:var(--accent)">${j.price}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  `;
}

// ════════════════════════════════════════════
//  INVENTORY
// ════════════════════════════════════════════
function renderInventory() {
  return `
  <div class="section-header">
    <div><h1 class="section-title">Spare Parts Inventory</h1><p class="section-sub">Real-time stock management and smart reorder alerts</p></div>
    <button class="btn btn-primary btn-sm" onclick="openAddPartModal()">+ Add Part</button>
  </div>

  <div class="grid-4" style="margin-bottom:18px;">
    <div class="stat-card"><div class="stat-icon purple">📦</div><div class="stat-value">8</div><div class="stat-label">Part Categories</div></div>
    <div class="stat-card cyan"><div class="stat-icon cyan">🔢</div><div class="stat-value">67</div><div class="stat-label">Total SKUs</div></div>
    <div class="stat-card amber"><div class="stat-icon amber">⚠️</div><div class="stat-value">3</div><div class="stat-label">Low Stock Alerts</div><span class="stat-change down">Needs Reorder</span></div>
    <div class="stat-card green"><div class="stat-icon green">₹</div><div class="stat-value">₹2.1L</div><div class="stat-label">Inventory Value</div></div>
  </div>

  <div class="grid-21">
    <div class="card">
      <div class="card-header"><p class="card-title">Parts Stock</p><p class="card-sub">Live inventory levels</p></div>
      <div class="card-body" style="padding:12px 24px;">
        ${INVENTORY.map(item => `
        <div class="inv-item">
          <div>
            <p class="inv-name">${item.name}</p>
            <p class="inv-sku">${item.sku} · <span class="chip grey" style="font-size:10px;">${item.category}</span></p>
          </div>
          <div style="text-align:right;">
            <p class="inv-stock ${item.qty <= item.min ? 'low' : 'ok'}">${item.qty}</p>
            <p style="font-size:10px;color:var(--text-muted);">units · ${item.price}/pc</p>
            ${item.qty <= item.min ? `<span class="chip red" style="margin-top:4px;">Low Stock</span>` : ''}
          </div>
        </div>`).join('')}
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:18px;">
      <div class="card">
        <div class="card-header"><p class="card-title">Stock Health</p></div>
        <div class="card-body" style="display:flex;flex-direction:column;gap:12px;">
          ${INVENTORY.map(item => `
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
              <span style="font-size:12px;font-weight:600;">${item.name.split(' ').slice(0,2).join(' ')}</span>
              <span style="font-size:12px;color:var(--text-muted);">${item.qty}/${item.min*3} units</span>
            </div>
            <div class="progress-wrap">
              <div class="progress-bar ${item.qty/item.min < 0.8 ? 'amber' : ''}" 
                data-progress="${Math.min(item.qty/(item.min*3)*100,100).toFixed(0)}" style="width:0;"></div>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <div class="glow-card" style="padding:20px;">
        <p style="font-size:14px;font-weight:700;margin-bottom:12px;">🤖 Smart Reorder</p>
        ${INVENTORY.filter(i=>i.qty<=i.min).map(i=>`
        <div style="background:rgba(239,68,68,0.05);border:1px solid rgba(239,68,68,0.12);border-radius:10px;padding:12px;margin-bottom:10px;">
          <p style="font-size:13px;font-weight:600;">${i.name}</p>
          <p style="font-size:11.5px;color:var(--text-secondary);margin:4px 0;">Only ${i.qty} units left · Min: ${i.min}</p>
          <button class="btn btn-primary btn-sm" onclick="showToast('success','📦','Order Placed','Reorder placed for ${i.name}')">Reorder Now</button>
        </div>`).join('')}
        <p style="font-size:11px;color:var(--text-muted);margin-top:8px;">AI recommends weekly restocking every Monday</p>
      </div>
    </div>
  </div>
  `;
}

function attachInventoryEvents() {}

// ════════════════════════════════════════════
//  QR BILLING
// ════════════════════════════════════════════
function renderBilling() {
  return `
  <div class="section-header">
    <div><h1 class="section-title">QR Billing</h1><p class="section-sub">Generate smart invoices with instant QR payment</p></div>
    <button class="btn btn-primary btn-sm" onclick="generateInvoice()">Generate Invoice</button>
  </div>

  <div class="grid-12">
    <!-- Invoice Form -->
    <div class="card">
      <div class="card-header"><p class="card-title">New Invoice</p></div>
      <div class="card-body">
        <div class="form-group">
          <label class="input-label">Select Job</label>
          <select class="input-field" id="inv-job">
            ${JOBS.map(j=>`<option value="${j.id}">${j.id} — ${j.device} (${j.customer})</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="input-label">Customer Name</label>
          <input class="input-field" type="text" id="inv-cust" value="Aryan Mehta" />
        </div>
        <div class="form-group">
          <label class="input-label">Repair Description</label>
          <input class="input-field" type="text" id="inv-desc" value="Screen Replacement (iPhone 14 Pro)" />
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="input-label">Parts Cost (₹)</label>
            <input class="input-field" type="number" id="inv-parts" value="3200" />
          </div>
          <div class="form-group">
            <label class="input-label">Labour (₹)</label>
            <input class="input-field" type="number" id="inv-labour" value="800" />
          </div>
        </div>
        <div class="form-group">
          <label class="input-label">GST %</label>
          <select class="input-field" id="inv-gst"><option value="0">0%</option><option value="5">5%</option><option value="12" selected>12%</option><option value="18">18%</option></select>
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="generateInvoice()">Generate QR Invoice</button>
      </div>
    </div>

    <!-- Invoice Preview -->
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div class="card" id="invoice-preview">
        <div class="card-header">
          <div><p class="card-title">Invoice Preview</p><p class="card-sub">INV-2026-1041</p></div>
          <span class="chip green">Unpaid</span>
        </div>
        <div class="card-body">
          <div style="border-bottom:1px solid var(--border-soft);padding-bottom:16px;margin-bottom:16px;">
            <p style="font-size:22px;font-weight:900;letter-spacing:-0.5px;">FixCore <span style="background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent">AI</span></p>
            <p style="font-size:12px;color:var(--text-muted);">Mobile Repair Ecosystem · GST: 29ABCDE1234F1Z5</p>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
            <div>
              <p style="font-size:10px;color:var(--text-muted)">BILLED TO</p>
              <p style="font-weight:700;font-size:14px">Aryan Mehta</p>
              <p style="font-size:12px;color:var(--text-secondary)">JB-1041 · iPhone 14 Pro</p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:10px;color:var(--text-muted)">DATE</p>
              <p style="font-weight:600;font-size:13px">26 May 2026</p>
              <p style="font-size:10px;color:var(--text-muted);margin-top:8px">DUE DATE</p>
              <p style="font-weight:600;font-size:13px">30 May 2026</p>
            </div>
          </div>
          <table class="data-table" style="margin-bottom:16px;">
            <thead><tr><th>Description</th><th>Amount</th></tr></thead>
            <tbody>
              <tr><td>Screen Replacement Parts</td><td>₹3,200</td></tr>
              <tr><td>Labour Charges</td><td>₹800</td></tr>
              <tr><td>GST 12%</td><td>₹480</td></tr>
              <tr><td><b>Total</b></td><td><b style="color:var(--accent);font-size:16px;">₹4,480</b></td></tr>
            </tbody>
          </table>
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
            <div class="qr-wrap">
              <div class="qr-pattern">
                <div class="qr-corner tl"></div>
                <div class="qr-corner tr"></div>
                <div class="qr-corner bl"></div>
              </div>
              <p style="font-size:10px;color:var(--text-muted);text-align:center;">Scan to Pay · UPI</p>
            </div>
            <div style="flex:1;min-width:120px;">
              <p style="font-size:11px;color:var(--text-muted);">Pay via</p>
              <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;">
                <span class="chip green">✓ UPI / BHIM</span>
                <span class="chip cyan">✓ Net Banking</span>
                <span class="chip purple">✓ Card</span>
              </div>
            </div>
          </div>
          <div style="display:flex;gap:10px;margin-top:16px;">
            <button class="btn btn-primary btn-sm" style="flex:1" onclick="showToast('success','🖨️','Printing','Invoice sent to printer')">Print</button>
            <button class="btn btn-outline btn-sm" style="flex:1" onclick="showToast('success','📱','SMS Sent','Invoice link sent to customer')">Send SMS</button>
            <button class="btn btn-ghost btn-sm" style="flex:1" onclick="showToast('success','📧','Email Sent','Invoice emailed to customer')">Email</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Recent Invoices -->
  <div class="card" style="margin-top:0">
    <div class="card-header"><p class="card-title">Recent Invoices</p></div>
    <div class="card-body" style="padding:0;">
      <table class="data-table">
        <thead><tr><th>Invoice</th><th>Job</th><th>Customer</th><th>Amount</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${[
            { inv:'INV-2026-1040',job:'JB-1040',cust:'Sneha Patel',amt:'₹2,016',date:'25 May',status:'Paid'},
            { inv:'INV-2026-1039',job:'JB-1039',cust:'Karan Singh',amt:'₹2,800',date:'24 May',status:'Paid'},
            { inv:'INV-2026-1037',job:'JB-1037',cust:'Mohit Jain',amt:'₹3,920',date:'23 May',status:'Paid'},
            { inv:'INV-2026-1036',job:'JB-1036',cust:'Divya Nair',amt:'₹1,008',date:'23 May',status:'Pending'},
          ].map(i=>`
          <tr>
            <td><span class="chip purple">${i.inv}</span></td>
            <td><span class="chip grey">${i.job}</span></td>
            <td><b>${i.cust}</b></td>
            <td style="font-weight:700;color:var(--accent)">${i.amt}</td>
            <td style="font-size:12px;color:var(--text-muted)">${i.date}</td>
            <td><span class="chip ${i.status==='Paid'?'green':'amber'}">${i.status}</span></td>
            <td><button class="btn btn-ghost btn-sm" onclick="showToast('info','🧾','Invoice','Viewing ${i.inv}')">View</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  `;
}

function attachBillingEvents() {}

function generateInvoice() {
  const parts = parseInt(document.getElementById('inv-parts')?.value || 3200);
  const labour = parseInt(document.getElementById('inv-labour')?.value || 800);
  const gst = parseInt(document.getElementById('inv-gst')?.value || 12);
  const gstAmt = Math.round((parts + labour) * gst / 100);
  const total = parts + labour + gstAmt;
  showToast('success', '🧾', 'Invoice Generated', `INV-2026-XXXX · Total ₹${total.toLocaleString('en-IN')}`);
}

// ════════════════════════════════════════════
//  WARRANTY
// ════════════════════════════════════════════
function renderWarranty() {
  return `
  <div class="section-header">
    <div><h1 class="section-title">Smart Warranty Tracking</h1><p class="section-sub">Repair warranty status and expiry management</p></div>
    <button class="btn btn-primary btn-sm" onclick="showToast('info','🛡️','Warranty','Opening warranty registration form')">Register Warranty</button>
  </div>

  <div class="grid-4" style="margin-bottom:18px;">
    <div class="stat-card"><div class="stat-icon green">🛡️</div><div class="stat-value">247</div><div class="stat-label">Active Warranties</div></div>
    <div class="stat-card amber"><div class="stat-icon amber">⏰</div><div class="stat-value">18</div><div class="stat-label">Expiring (30 days)</div></div>
    <div class="stat-card" style="--accent:#ef4444"><div class="stat-icon amber">🚨</div><div class="stat-value">6</div><div class="stat-label">Expired This Month</div></div>
    <div class="stat-card cyan"><div class="stat-icon cyan">🔄</div><div class="stat-value">12</div><div class="stat-label">Claims This Month</div></div>
  </div>

  <div class="card">
    <div class="card-header"><p class="card-title">Warranty Registry</p></div>
    <div class="card-body" style="padding:0;">
      <table class="data-table">
        <thead><tr><th>Warranty ID</th><th>Customer</th><th>Device</th><th>Repair</th><th>Expiry</th><th>Coverage</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${WARRANTY.map(w => `
          <tr>
            <td><span class="chip purple">${w.id}</span></td>
            <td><b>${w.customer}</b></td>
            <td style="color:var(--text-secondary);font-size:12.5px">${w.device}</td>
            <td style="font-size:12.5px">${w.repair}</td>
            <td>
              <div style="font-size:12.5px;font-weight:600;">${w.end}</div>
              <div style="font-size:11px;color:var(--text-muted);">${w.days_left} days left</div>
              <div class="warranty-bar" style="width:80px;margin-top:4px;">
                <div class="warranty-fill ${w.coverage < 20 ? 'danger' : w.coverage < 50 ? 'amber' : ''}" style="width:${w.coverage}%;"></div>
              </div>
            </td>
            <td><span style="font-size:14px;font-weight:800;color:var(--accent)">${w.coverage}%</span></td>
            <td><span class="chip ${w.status==='Active'?'green':w.status==='Expiring'?'amber':'red'}">${w.status}</span></td>
            <td>
              <div style="display:flex;gap:6px;">
                <button class="btn btn-outline btn-sm" onclick="showToast('info','🛡️','Warranty','Viewing ${w.id}')">View</button>
                <button class="btn btn-ghost btn-sm" onclick="showToast('success','🔔','Alert','Customer notified for ${w.id}')">Notify</button>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid-2" style="margin-top:18px;">
    <div class="glow-card" style="padding:24px;">
      <p style="font-size:14px;font-weight:700;margin-bottom:16px;">🤖 AI Warranty Insights</p>
      ${[
        { icon:'⚠️', txt:'WR-504 (Karan Singh) expires in 14 days — auto-notification scheduled', type:'warning' },
        { icon:'💡', txt:'3 customers with expiring warranties haven\'t serviced in 90+ days — send re-engagement offer', type:'tip' },
        { icon:'📊', txt:'Average warranty claim rate: 4.8% — industry benchmark is 6%', type:'good' },
      ].map(i => `
      <div style="display:flex;gap:10px;padding:12px;background:var(--surface);border-radius:10px;margin-bottom:10px;">
        <span style="font-size:20px;">${i.icon}</span>
        <p style="font-size:12.5px;color:var(--text-secondary);line-height:1.5;">${i.txt}</p>
      </div>`).join('')}
    </div>

    <div class="card">
      <div class="card-header"><p class="card-title">Warranty Expiry Calendar</p></div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:12px;">
        ${WARRANTY.map(w => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;background:var(--surface-2);border-radius:10px;">
          <div>
            <p style="font-size:13px;font-weight:600;">${w.customer}</p>
            <p style="font-size:11px;color:var(--text-muted);">${w.device} · ${w.repair}</p>
          </div>
          <div style="text-align:right;">
            <p style="font-size:12px;font-weight:700;">${w.days_left}d left</p>
            <span class="chip ${w.status==='Active'?'green':w.status==='Expiring'?'amber':'red'}">${w.status}</span>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
  `;
}

// ════════════════════════════════════════════
//  ANALYTICS
// ════════════════════════════════════════════
function renderAnalytics() {
  const maxRev = Math.max(...REVENUE_DATA.map(r=>r.val));
  return `
  <div class="section-header">
    <div><h1 class="section-title">Revenue Analytics</h1><p class="section-sub">Financial performance and business intelligence dashboard</p></div>
    <div style="display:flex;gap:10px;">
      <select class="input-field" style="width:auto;padding:8px 14px;"><option>2026</option><option>2025</option></select>
      <button class="btn btn-outline btn-sm" onclick="showToast('success','📊','Report','Exporting analytics report...')">Export</button>
    </div>
  </div>

  <div class="grid-4" style="margin-bottom:18px;">
    <div class="stat-card"><div class="stat-icon purple">₹</div><div class="stat-value">₹4.48L</div><div class="stat-label">Annual Revenue (2026)</div><span class="stat-change up">↑ 34%</span></div>
    <div class="stat-card cyan"><div class="stat-icon cyan">📋</div><div class="stat-value">612</div><div class="stat-label">Total Jobs (2026)</div><span class="stat-change up">↑ 28%</span></div>
    <div class="stat-card green"><div class="stat-icon green">💰</div><div class="stat-value">₹732</div><div class="stat-label">Avg Job Value</div><span class="stat-change up">↑ 5%</span></div>
    <div class="stat-card amber"><div class="stat-icon amber">📈</div><div class="stat-value">89%</div><div class="stat-label">Completion Rate</div><span class="stat-change up">↑ 4%</span></div>
  </div>

  <div class="grid-21">
    <!-- Revenue Chart -->
    <div class="card">
      <div class="card-header"><p class="card-title">Monthly Revenue (₹)</p><p class="card-sub">Jan–Jun 2026</p></div>
      <div class="card-body">
        <div class="rev-chart">
          ${REVENUE_DATA.map((r,i) => `
          <div class="rev-row">
            <span class="rev-month">${r.month}</span>
            <div class="rev-bar-wrap">
              <div class="progress-wrap"><div class="progress-bar ${i===4?'':'cyan'}" data-progress="${(r.val/maxRev*100).toFixed(0)}" style="width:0;"></div></div>
            </div>
            <span class="rev-amount">₹${(r.val/1000).toFixed(0)}K</span>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Breakdown -->
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div class="card">
        <div class="card-header"><p class="card-title">Revenue by Category</p></div>
        <div class="card-body" style="display:flex;flex-direction:column;gap:14px;">
          ${[
            { cat:'Screen Repairs', pct:38, color:'var(--accent)', val:'₹1.7L' },
            { cat:'Battery Replacements', pct:22, color:'var(--accent-3)', val:'₹98K' },
            { cat:'Water Damage', pct:18, color:'var(--accent-4)', val:'₹80K' },
            { cat:'Software Fixes', pct:12, color:'var(--accent-warn)', val:'₹54K' },
            { cat:'Others', pct:10, color:'var(--text-muted)', val:'₹45K' },
          ].map(c => `
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
              <span style="font-size:12.5px;font-weight:600;">${c.cat}</span>
              <span style="font-size:12.5px;font-weight:700;">${c.val} <span style="color:var(--text-muted);font-weight:400;">(${c.pct}%)</span></span>
            </div>
            <div class="progress-wrap"><div class="progress-bar" data-progress="${c.pct}" style="width:0;background:${c.color};"></div></div>
          </div>`).join('')}
        </div>
      </div>

      <div class="card">
        <div class="card-header"><p class="card-title">Top Performers</p></div>
        <div class="card-body" style="display:flex;flex-direction:column;gap:12px;">
          ${TECHNICIANS.slice(0,3).map((t,i) => `
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:18px;font-weight:900;color:var(--text-muted);width:20px;">${i+1}</span>
            <div class="avatar-sm" style="background:${t.color};">${t.initials}</div>
            <div style="flex:1">
              <p style="font-size:13px;font-weight:600;">${t.name}</p>
              <p style="font-size:11px;color:var(--text-muted)">${t.jobs} jobs</p>
            </div>
            <span style="font-size:13px;font-weight:700;color:var(--accent)">⭐${t.rating}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- Device & Issue Breakdown -->
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><p class="card-title">Top Device Brands</p></div>
      <div class="card-body">
        <div class="bar-chart" style="height:140px;">
          ${[['Apple',85],['Samsung',68],['OnePlus',42],['Pixel',30],['Others',24]].map(([b,v],i)=>`
          <div class="bar-item">
            <div class="bar-fill ${['','cyan','green','amber',''][i]}" data-bar-height="${Math.round(v*1.5)}" style="height:0px;" title="${b}: ${v} jobs"></div>
            <span class="bar-label">${b}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><p class="card-title">Common Issues</p></div>
      <div class="card-body" style="display:flex;flex-direction:column;gap:12px;">
        ${[
          { issue:'Screen Damage', count:142, pct:23 },
          { issue:'Battery Failure', count:98, pct:16 },
          { issue:'Water Damage', count:76, pct:12 },
          { issue:'Charging Issues', count:65, pct:11 },
          { issue:'Software Bugs', count:54, pct:9 },
        ].map(i => `
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:12.5px;font-weight:600;width:120px;">${i.issue}</span>
          <div class="progress-wrap" style="flex:1"><div class="progress-bar cyan" data-progress="${i.pct*4}" style="width:0;"></div></div>
          <span style="font-size:12px;font-weight:700;width:40px;text-align:right;">${i.count}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>
  `;
}

// ════════════════════════════════════════════
//  MODALS
// ════════════════════════════════════════════
function openNewJobModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
  <div class="modal">
    <p class="modal-title">+ Create New Repair Job</p>
    <div class="form-group"><label class="input-label">Customer Name</label><input class="input-field" type="text" placeholder="Enter customer name" /></div>
    <div class="form-group"><label class="input-label">Device Model</label><input class="input-field" type="text" placeholder="e.g. iPhone 15 Pro" /></div>
    <div class="form-group"><label class="input-label">Issue Description</label><input class="input-field" type="text" placeholder="Describe the issue..." /></div>
    <div class="grid-2">
      <div class="form-group">
        <label class="input-label">Assign Technician</label>
        <select class="input-field">${TECHNICIANS.map(t=>`<option>${t.name}</option>`).join('')}</select>
      </div>
      <div class="form-group">
        <label class="input-label">Priority</label>
        <select class="input-field"><option>High</option><option>Medium</option><option>Low</option></select>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px;">
      <button class="btn btn-primary" style="flex:1" onclick="submitNewJob(this)">Create Job</button>
      <button class="btn btn-ghost" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if(e.target === overlay) overlay.remove(); });
}

function submitNewJob(btn) {
  btn.closest('.modal-overlay').remove();
  showToast('success', '✅', 'Job Created', 'JB-1042 has been created and assigned successfully');
}

function openAddPartModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
  <div class="modal">
    <p class="modal-title">+ Add Spare Part</p>
    <div class="form-group"><label class="input-label">Part Name</label><input class="input-field" type="text" placeholder="e.g. iPhone 15 Display Module" /></div>
    <div class="grid-2">
      <div class="form-group"><label class="input-label">SKU Code</label><input class="input-field" type="text" placeholder="SCR-IP15" /></div>
      <div class="form-group"><label class="input-label">Category</label><select class="input-field"><option>Display</option><option>Battery</option><option>Ports</option><option>Body</option><option>Board</option><option>Audio</option><option>Accessory</option></select></div>
    </div>
    <div class="grid-2">
      <div class="form-group"><label class="input-label">Quantity</label><input class="input-field" type="number" placeholder="10" /></div>
      <div class="form-group"><label class="input-label">Price (₹)</label><input class="input-field" type="number" placeholder="8500" /></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px;">
      <button class="btn btn-primary" style="flex:1" onclick="this.closest('.modal-overlay').remove();showToast('success','📦','Part Added','New spare part added to inventory')">Add Part</button>
      <button class="btn btn-ghost" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if(e.target === overlay) overlay.remove(); });
}

// ── STATUS BADGE HELPER ───────────────────────
function statusBadge(status) {
  const map = {
    'in-progress': 'in-progress', 'pending': 'pending',
    'completed': 'completed', 'diagnostic': 'diagnostic', 'waiting': 'waiting'
  };
  const labels = {
    'in-progress':'In Progress','pending':'Pending','completed':'Completed',
    'diagnostic':'Diagnosis','waiting':'Parts Wait'
  };
  return `<span class="status-badge ${map[status]||'pending'}">${labels[status]||status}</span>`;
}
