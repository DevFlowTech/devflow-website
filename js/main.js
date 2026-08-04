// Main Interactive Application Logic for Vassu Infotech (Bright Mode Theme)

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initHardwareFilters();
  initModals();
});

// Mobile Navigation Drawer Toggle
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
      toggleBtn.setAttribute('aria-expanded', 'true');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    });
  }
}



// Hardware Catalog Tab Filtering
function initHardwareFilters() {
  const filterBtns = document.querySelectorAll('.hardware-filter-btn');
  const hardwareCards = document.querySelectorAll('.hardware-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-50/50', 'text-emerald-700', 'border-emerald-600');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });

      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
      btn.classList.add('bg-emerald-50/50', 'text-emerald-700', 'border-emerald-600');

      const category = btn.getAttribute('data-filter');

      hardwareCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}



// Modal View Handler
function initModals() {
  const modalOverlay = document.getElementById('custom-modal-overlay');
  const modalClose = document.getElementById('custom-modal-close');
  const modalTitle = document.getElementById('custom-modal-title');
  const modalBody = document.getElementById('custom-modal-body');

  window.openServiceModal = function(title, contentHtml) {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add('active');
  };

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }
}
