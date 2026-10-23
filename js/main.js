// Main JavaScript Logic for Dilupa Chathuranga's Portfolio

document.addEventListener('DOMContentLoaded', () => {
  renderMetrics();
  renderTools();
  renderProjects();
  renderSkills();
  setupEventListeners();
  setupThemeToggle();
  setupMobileMenu();
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

// Global Modal Video Switcher
window.switchModalVideo = function(src, btn) {
  const vid = document.getElementById('modal-active-video');
  if (vid) {
    vid.src = src;
    vid.load();
    vid.play().catch(() => {});
  }
  if (btn && btn.parentElement) {
    const allBtns = btn.parentElement.querySelectorAll('.video-tab-btn');
    allBtns.forEach(b => {
      b.style.background = 'rgba(255,255,255,0.06)';
      b.style.color = '#94a3b8';
      b.style.borderColor = 'rgba(255,255,255,0.1)';
    });
    btn.style.background = 'rgba(6, 182, 212, 0.2)';
    btn.style.color = '#38bdf8';
    btn.style.borderColor = 'rgba(6, 182, 212, 0.5)';
  }
};

// Render Automation Tools
function renderTools() {
  const container = document.getElementById('tools-grid');
  if (!container || !portfolioData.tools) return;

  container.innerHTML = portfolioData.tools.map(tool => {
    const mainVideo = tool.video || (tool.videos && tool.videos.length > 0 ? tool.videos[0].src : null);
    return `
    <div class="tool-card" data-category="${tool.category}">
      ${mainVideo ? `
        <div class="tool-video-preview" style="position: relative; overflow: hidden; border-radius: 8px 8px 0 0; background: #0b1120; border-bottom: 1px solid rgba(255,255,255,0.08); margin: -28px -28px 18px -28px;">
          <video src="${mainVideo}" autoplay loop muted playsinline style="width: 100%; height: 165px; object-fit: cover; display: block;"></video>
          <span style="position: absolute; top: 10px; right: 10px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(4px); color: #34d399; font-size: 0.68rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(52, 211, 153, 0.3); letter-spacing: 0.05em;">
            <i class="fas fa-circle" style="font-size: 0.5rem; margin-right: 4px; color: #10b981;"></i> LIVE DEMO
          </span>
        </div>
      ` : (tool.image ? `
        <div class="tool-video-preview" style="position: relative; overflow: hidden; border-radius: 8px 8px 0 0; background: #0b1120; border-bottom: 1px solid rgba(255,255,255,0.08); margin: -28px -28px 18px -28px;">
          <img src="${tool.image}" alt="${tool.title}" style="width: 100%; height: 165px; object-fit: cover; display: block;" />
          <span style="position: absolute; top: 10px; right: 10px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(4px); color: #38bdf8; font-size: 0.68rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(56, 189, 248, 0.3); letter-spacing: 0.05em;">
            <i class="fas fa-layer-group" style="font-size: 0.5rem; margin-right: 4px; color: #38bdf8;"></i> UI PREVIEW
          </span>
        </div>
      ` : '')}
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
  `;
  }).join('');
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
  const container = document.getElementById('skills-container');
  if (!container || !portfolioData.skills) return;

  const categories = [
    { title: 'BIM & Technical Modeling', data: portfolioData.skills.bim, icon: 'fas fa-cubes' },
    { title: 'Engineering Draughtsmanship', data: portfolioData.skills.draughting, icon: 'fas fa-compass-drafting' },
    { title: 'Workflow Automation & Scripting', data: portfolioData.skills.automation, icon: 'fas fa-robot' }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-header">
        <div class="skill-cat-icon"><i class="${cat.icon}"></i></div>
        <h3>${cat.title}</h3>
      </div>
      <div class="skill-bars">
        ${cat.data.map(s => `
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${s.name}</span>
              <span class="skill-pct">${s.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="width: ${s.level}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Filter Buttons Setup
function setupEventListeners() {
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

// Helper to render bulleted or standard text
function renderFormattedPoints(text, isPositive = false) {
  if (!text) return '';
  if (text.includes('•') || text.includes('\n- ')) {
    const parts = text.includes('•') 
      ? text.split('•').map(p => p.trim()).filter(Boolean)
      : text.split('\n- ').map(p => p.trim()).filter(Boolean);
    const intro = parts[0].endsWith(':') ? parts[0] : '';
    const items = intro ? parts.slice(1) : parts;
    const iconClass = isPositive ? 'fas fa-check-circle text-emerald' : 'fas fa-times-circle text-red';
    return `
      ${intro ? `<p style="margin-bottom: 10px; font-weight: 500;">${intro}</p>` : ''}
      <ul style="list-style: none; padding-left: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
        ${items.map(item => `
          <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.92rem; line-height: 1.5;">
            <i class="${iconClass}" style="margin-top: 4px; flex-shrink: 0;"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }
  return `<p>${text}</p>`;
}

// Modal Handlers
function openToolModal(toolId) {
  const tool = portfolioData.tools.find(t => t.id === toolId);
  if (!tool) return;

  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('modal-body');

  const videosList = tool.videos || (tool.video ? [{ label: "Verified Production Demo", src: tool.video }] : []);
  const hasMultipleVideos = videosList.length > 1;

  content.innerHTML = `
    <span class="badge badge-cyan modal-badge">${tool.badge}</span>
    <h2 class="modal-title">${tool.title}</h2>
    <div class="modal-subtitle">${tool.subtitle}</div>

    ${videosList.length > 0 ? `
    <div class="modal-section" style="margin-top: 16px; margin-bottom: 16px; background: #0b1120; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 14px; text-align: center;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; font-family: monospace;">
          <i class="fas fa-play-circle" style="color: var(--accent-cyan, #06b6d4);"></i> Verified Production Automation Loop
        </span>
        <span class="badge badge-emerald" style="font-size: 0.7rem;"><i class="fas fa-check-circle"></i> Verified In Revit</span>
      </div>

      ${hasMultipleVideos ? `
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; justify-content: center;">
        ${videosList.map((v, i) => `
          <button class="video-tab-btn" onclick="switchModalVideo('${v.src}', this)" style="padding: 6px 14px; font-size: 0.78rem; font-weight: 600; border-radius: 6px; cursor: pointer; transition: all 0.2s; border: 1px solid ${i === 0 ? 'rgba(6, 182, 212, 0.5)' : 'rgba(255,255,255,0.1)'}; background: ${i === 0 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.06)'}; color: ${i === 0 ? '#38bdf8' : '#94a3b8'};">
            <i class="fas fa-play" style="font-size: 0.65rem; margin-right: 6px;"></i> ${v.label}
          </button>
        `).join('')}
      </div>
      ` : ''}

      <video id="modal-active-video" src="${videosList[0].src}" autoplay loop muted playsinline controls style="max-width: 100%; height: auto; border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); background: #fff;"></video>
    </div>
    ` : (tool.image ? `
    <div class="modal-section" style="margin-top: 16px; margin-bottom: 16px; background: #0b1120; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 14px; text-align: center;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; font-family: monospace;">
          <i class="fas fa-window-maximize" style="color: var(--accent-blue);"></i> Revit Custom Ribbon Integration
        </span>
        <span class="badge badge-emerald" style="font-size: 0.7rem;">Live In Production</span>
      </div>
      <img src="${tool.image}" alt="${tool.title}" style="max-width: 100%; height: auto; border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); background: #fff;" />
    </div>
    ` : '')}

    <div class="modal-section">
      <h4><i class="fas fa-info-circle text-cyan"></i> Overview</h4>
      <p>${tool.description}</p>
    </div>

    <div class="modal-section" style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 14px 18px; border-radius: 6px;">
      <h4 style="color: #f87171;"><i class="fas fa-exclamation-triangle"></i> The Industry Bottleneck (Before)</h4>
      <div class="modal-box-text">${renderFormattedPoints(tool.problem, false)}</div>
    </div>

    <div class="modal-section" style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 14px 18px; border-radius: 6px; margin-top: 14px;">
      <h4 style="color: #34d399;"><i class="fas fa-cogs"></i> Engineered Automation Architecture (After)</h4>
      <div class="modal-box-text">${renderFormattedPoints(tool.solution, true)}</div>
    </div>

    <div class="modal-section" style="background: rgba(6, 182, 212, 0.08); border-left: 3px solid #06b6d4; padding: 14px 18px; border-radius: 6px; margin-top: 14px;">
      <h4 style="color: #38bdf8;"><i class="fas fa-chart-line"></i> Measurable Production Impact</h4>
      <p class="modal-box-text" style="font-weight: 500;">${tool.impact}</p>
    </div>

    ${tool.ribbonTools ? `
    <div class="modal-section" style="margin-top: 18px; background: rgba(99, 102, 241, 0.08); border-left: 3px solid #6366f1; padding: 14px 18px; border-radius: 6px;">
      <h4 style="color: #818cf8;"><i class="fas fa-th-large"></i> Ribbon Panel Modules & Tools</h4>
      <div class="tag-list" style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
        ${tool.ribbonTools.map(r => `<span class="tag" style="background: rgba(99, 102, 241, 0.18); border-color: rgba(99, 102, 241, 0.35); color: #c7d2fe; font-weight: 500;"><i class="fas fa-cube" style="color: #a5b4fc; margin-right: 4px;"></i> ${r}</span>`).join('')}
      </div>
    </div>
    ` : ''}

    <div class="modal-section" style="margin-top: 20px;">
      <h4><i class="fas fa-tags"></i> Core Technologies</h4>
      <div class="tag-list">
        ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function openProjectModal(projectId) {
  const proj = portfolioData.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('modal-body');

  content.innerHTML = `
    <span class="badge badge-gold modal-badge">${proj.badge}</span>
    <h2 class="modal-title">${proj.title}</h2>
    <div class="modal-subtitle">${proj.subtitle}</div>

    <div class="modal-section">
      <h4><i class="fas fa-building text-gold"></i> Project Overview</h4>
      <p>${proj.description}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fas fa-star text-gold"></i> Key Deliverables & Technical Highlights</h4>
      <ul class="project-highlights" style="margin-top: 10px;">
        ${proj.highlights.map(h => `
          <li><i class="fas fa-check-circle"></i> <span>${h}</span></li>
        `).join('')}
      </ul>
    </div>

    <div class="modal-section" style="margin-top: 20px;">
      <h4><i class="fas fa-tools"></i> Software & Methodologies Used</h4>
      <div class="tag-list">
        ${proj.toolsUsed.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('detail-modal');
  const vid = document.getElementById('modal-active-video');
  if (vid) {
    vid.pause();
    vid.src = "";
  }
  if (modal) modal.classList.remove('active');
}

// Theme Toggle
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const icon = document.getElementById('theme-icon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, icon);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      updateThemeIcon(next, icon);
    });
  }
}

function updateThemeIcon(theme, icon) {
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

// Mobile Menu
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const icon = document.getElementById('mobile-toggle-icon');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      if (icon) icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

// PDF Export Placeholder
window.downloadPortfolioPDF = function() {
  window.print();
};

window.openToolModal = openToolModal;
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;
