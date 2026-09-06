// Main JavaScript Logic for Dilupa Chathuranga's Portfolio

document.addEventListener('DOMContentLoaded', () => {
  renderMetrics();
  renderTools();
  renderProjects();
  renderSkills();
  setupEventListeners();
  setupThemeToggle();
});

// Render Hero Metrics
function renderMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container || !portfolioData.metrics) return;

  container.innerHTML = portfolioData.metrics.map(m => `
    <div class="metric-card">
      <div class="metric-value">${m.value}</div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-sub">${m.sub}</div>
    </div>
  `).join('');
}

// Render Automation Tools
function renderTools() {
  const container = document.getElementById('tools-grid');
  if (!container || !portfolioData.tools) return;

  container.innerHTML = portfolioData.tools.map(tool => `
    <div class="tool-card" data-category="${tool.category}">
      <div class="tool-card-top">
        <div class="tool-icon-wrapper">
          <i class="${tool.icon}"></i>
        </div>
        <span class="badge badge-cyan">${tool.badge}</span>
        <h3>${tool.title}</h3>
        <div class="tool-subtitle">${tool.subtitle}</div>
        <p class="tool-desc">${tool.description}</p>
        <div class="tag-list">
          ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <button class="btn-card-action" onclick="openToolModal('${tool.id}')">
        <i class="fas fa-search-plus"></i> View Workflow & Impact
      </button>
    </div>
  `).join('');
}

// Render BIM Projects
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !portfolioData.projects) return;

  const filtered = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => `
    <div class="project-card">
      <div class="project-banner">
        <div class="project-banner-pattern"></div>
        <i class="${proj.icon} project-banner-icon"></i>
      </div>
      <div class="project-content">
        <div>
          <span class="badge badge-gold" style="margin-bottom: 10px;">${proj.badge}</span>
          <h3>${proj.title}</h3>
          <div class="project-subtitle">${proj.subtitle}</div>
          <p class="project-desc">${proj.description}</p>
          <ul class="project-highlights">
            ${proj.highlights.map(h => `
              <li><i class="fas fa-check-circle"></i> <span>${h}</span></li>
            `).join('')}
          </ul>
        </div>
        <div class="tag-list" style="margin-top: 14px; margin-bottom: 16px;">
          ${proj.toolsUsed.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <button class="btn-card-action" onclick="openProjectModal('${proj.id}')">
          <i class="fas fa-layer-group"></i> Project Specifications
        </button>
      </div>
    </div>
  `).join('');
}

// Render Skills Matrix
function renderSkills() {
  const bimContainer = document.getElementById('bim-skills-list');
  const draughtContainer = document.getElementById('draught-skills-list');
  const autoContainer = document.getElementById('auto-skills-list');

  if (bimContainer && portfolioData.skills.bim) {
    bimContainer.innerHTML = portfolioData.skills.bim.map(s => createSkillBar(s)).join('');
  }
  if (draughtContainer && portfolioData.skills.draughting) {
    draughtContainer.innerHTML = portfolioData.skills.draughting.map(s => createSkillBar(s)).join('');
  }
  if (autoContainer && portfolioData.skills.automation) {
    autoContainer.innerHTML = portfolioData.skills.automation.map(s => createSkillBar(s)).join('');
  }
}

function createSkillBar(skill) {
  return `
    <div class="skill-item">
      <div class="skill-header">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `;
}

// Setup Event Listeners
function setupEventListeners() {
  // Modal Close on click outside or ESC
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// Modal Handlers
function openToolModal(toolId) {
  const tool = portfolioData.tools.find(t => t.id === toolId);
  if (!tool) return;

  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('modal-body');

  content.innerHTML = `
    <span class="badge badge-cyan modal-badge">${tool.badge}</span>
    <h2 class="modal-title">${tool.title}</h2>
    <div class="modal-subtitle">${tool.subtitle}</div>

    <div class="modal-section">
      <h4><i class="fas fa-info-circle text-cyan"></i> Overview</h4>
      <p>${tool.description}</p>
    </div>

    <div class="modal-section" style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 14px 18px; border-radius: 6px;">
      <h4 style="color: #f87171;"><i class="fas fa-exclamation-triangle"></i> The Industry Problem</h4>
      <p>${tool.problem}</p>
    </div>

    <div class="modal-section" style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 14px 18px; border-radius: 6px; margin-top: 14px;">
      <h4 style="color: #34d399;"><i class="fas fa-cogs"></i> Engineered Automation Solution</h4>
      <p>${tool.solution}</p>
    </div>

    <div class="modal-section" style="background: rgba(6, 182, 212, 0.08); border-left: 3px solid #06b6d4; padding: 14px 18px; border-radius: 6px; margin-top: 14px;">
      <h4 style="color: #38bdf8;"><i class="fas fa-chart-line"></i> Measurable Production Impact</h4>
      <p>${tool.impact}</p>
    </div>

    <div class="modal-section" style="margin-top: 20px;">
      <h4><i class="fas fa-tags"></i> Core Technologies</h4>
      <div class="tag-list">
        ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openProjectModal(projId) {
  const proj = portfolioData.projects.find(p => p.id === projId);
  if (!proj) return;

  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('modal-body');

  content.innerHTML = `
    <span class="badge badge-gold modal-badge">${proj.badge}</span>
    <h2 class="modal-title">${proj.title}</h2>
    <div class="modal-subtitle">${proj.subtitle}</div>

    <div class="modal-section">
      <h4><i class="fas fa-info-circle text-cyan"></i> Scope of Work</h4>
      <p>${proj.description}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fas fa-clipboard-check text-emerald"></i> Key Technical Deliverables</h4>
      <ul class="project-highlights" style="margin-top: 10px;">
        ${proj.highlights.map(h => `
          <li><i class="fas fa-check-circle" style="color: #10b981;"></i> <span>${h}</span></li>
        `).join('')}
      </ul>
    </div>

    <div class="modal-section" style="margin-top: 20px;">
      <h4><i class="fas fa-tools"></i> Software & Methodologies</h4>
      <div class="tag-list">
        ${proj.toolsUsed.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Trigger Print / PDF Download
function downloadPortfolioPDF() {
  window.print();
}

// Setup Theme Switcher
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.className = 'fas fa-moon';
  } else {
    icon.className = 'fas fa-sun';
  }
}
