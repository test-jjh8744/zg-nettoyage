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
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;
      // Initialize navigation functionality after loading
      setTimeout(initNavigation, 100);
    })
    .catch(error => console.error('Error loading navigation:', error));
}

// Auto-load navigation when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavigation);