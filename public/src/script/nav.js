// Navigation JavaScript functionality

// Mobile menu toggle functionality
function toggleMobileMenu() {
  const overlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;
  
  if (overlay && overlay.classList.contains('active')) {
    overlay.classList.remove('active');
    body.style.overflow = '';
  } else if (overlay) {
    overlay.classList.add('active');
    body.style.overflow = 'hidden';
  }
}

// Initialize navigation functionality
function initNavigation() {
  // Ensure Résultats points to Before & After (defensive fix)
  document.querySelectorAll('a[href="pricing.html"]').forEach(a => { a.setAttribute('href','befor&after.html'); });
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.mobile-menu-nav a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });

  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('mobileMenuOverlay');
      if (overlay && overlay.classList.contains('active')) {
        toggleMobileMenu();
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      const overlay = document.getElementById('mobileMenuOverlay');
      if (overlay && overlay.classList.contains('active')) {
        toggleMobileMenu();
      }
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to current page navigation item
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.header-nav-item a, .mobile-menu-nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === 'index.html' && linkPage === '/')) {
      link.style.fontWeight = 'bold';
      link.style.opacity = '1';
    }
  });

  // Header scroll effect (optional)
  let lastScrollTop = 0;
  const header = document.querySelector('.header-announcement-bar-wrapper');
  
  if (header) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Add transition for header
    header.style.transition = 'transform 0.3s ease-in-out';
  }
}

// Load navigation function
function loadNavigation() {
  fetch(`nav.html?v=${Date.now()}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;
      // Initialize navigation functionality after loading
      setTimeout(initNavigation, 100);
    })
    .catch(error => console.error('Error loading navigation:', error));
}

/**
 * Ensure favicon exists across all pages.
 * Prefers ../assets/fav_icon.png; falls back to ../assets/logo-videos/logo.png if not found.
 */
function ensureFavicon() {
  try {
    const head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    // Find existing icon link if any
    let link = head.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      head.appendChild(link);
    }

    const primaryHref = '../assets/fav_icon.png';
    const fallbackHref = '../assets/logo-videos/logo.png';

    // Optimistically set primary
    link.href = primaryHref;

    // Validate existence by attempting preload
    const img = new Image();
    img.onload = function() {
      // ok, keep primary
    };
    img.onerror = function() {
      // fallback if primary missing
      link.href = fallbackHref;
    };
    img.src = primaryHref;
  } catch (e) {
    // no-op
  }
}

// Auto-load navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ensureFavicon();
  loadNavigation();
});