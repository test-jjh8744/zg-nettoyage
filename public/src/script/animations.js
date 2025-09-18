// Simple and Reliable Animation System for ZG Nettoyage
// Applied to all pages except index.html

class AnimationController {
  constructor() {
    this.observers = [];
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
    } else {
      this.setupAnimations();
    }
  }

  setupAnimations() {
    // Don't run on index page
    const currentPath = window.location.pathname.toLowerCase();
    if (currentPath.includes('index.html') || currentPath === '/' || currentPath === '/index.html') {
      console.log('Skipping animations on index page');
      return;
    }

    console.log('Setting up animations for:', currentPath);
    
    // Add animation classes first
    this.addAnimationClasses();
    
    // Then setup observers
    setTimeout(() => {
      this.setupScrollAnimations();
      this.setupHoverAnimations();
    }, 100);
  }

  setupScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Animating element:', entry.target);
          entry.target.classList.add('animate-in');
          // Keep observing for repeated animations
        }
      });
    }, observerOptions);

    // Find all elements with animation classes
    const animatedElements = document.querySelectorAll(`
      .fade-in,
      .slide-in-left,
      .slide-in-right,
      .slide-in-top,
      .slide-in-bottom,
      .scale-in,
      .bounce-in,
      .zoom-in,
      .section-animate,
      .image-reveal
    `);

    console.log('Found animated elements:', animatedElements.length);

    animatedElements.forEach(el => {
      observer.observe(el);
    });

    this.observers.push(observer);
  }

  setupHoverAnimations() {
    // Add hover animations to images
    document.querySelectorAll('.image-block-wrapper, .sqs-block-image img').forEach(el => {
      el.classList.add('hover-lift');
    });

    // Add hover animations to buttons
    document.querySelectorAll('button, .sqs-button-element, .btn').forEach(el => {
      el.classList.add('btn-animate');
    });
  }

  addAnimationClasses() {
    console.log('Adding animation classes...');

    // Hero sections
    document.querySelectorAll('.hero-section').forEach(el => {
      el.classList.add('fade-in');
      console.log('Added fade-in to hero section');
    });

    document.querySelectorAll('.hero-title').forEach(el => {
      el.classList.add('slide-in-top');
      console.log('Added slide-in-top to hero title');
    });

    document.querySelectorAll('.hero-subtitle, .hero-description').forEach(el => {
      el.classList.add('fade-in');
      console.log('Added fade-in to hero text');
    });

    // All headings
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el, index) => {
      if (el.closest('.hero-section')) return; // Skip hero headings, already handled
      
      if (index % 2 === 0) {
        el.classList.add('slide-in-left');
      } else {
        el.classList.add('slide-in-right');
      }
      console.log('Added animation to heading:', el.tagName);
    });

    // All paragraphs
    document.querySelectorAll('p').forEach(el => {
      if (el.closest('.hero-section')) return; // Skip hero paragraphs
      el.classList.add('fade-in');
    });

    // All images
    document.querySelectorAll('.sqs-block-image').forEach((el, index) => {
      const animations = ['scale-in', 'slide-in-left', 'slide-in-right', 'zoom-in'];
      el.classList.add(animations[index % animations.length]);
      el.classList.add('image-reveal');
      console.log('Added animation to image:', animations[index % animations.length]);
    });

    // Gallery sections
    document.querySelectorAll('.gallery-section, .gallery-section-2, .gallery-section-3, .gallery-section-4, .gallery-section-5').forEach((el, index) => {
      el.classList.add('section-animate');
      console.log('Added section-animate to gallery section');
    });

    // Before & After specific animations
    if (window.location.pathname.includes('befor&after')) {
      document.querySelectorAll('.image-block-wrapper').forEach((el, index) => {
        if (index % 2 === 0) {
          el.classList.add('slide-in-left');
        } else {
          el.classList.add('slide-in-right');
        }
        console.log('Added before/after animation to image wrapper');
      });
    }

    // Services page specific
    if (window.location.pathname.includes('services')) {
      document.querySelectorAll('.service-card, .service-item').forEach(el => {
        el.classList.add('scale-in');
      });
    }

    // About page specific
    if (window.location.pathname.includes('about')) {
      document.querySelectorAll('.about-content, .about-card').forEach(el => {
        el.classList.add('slide-in-bottom');
      });
    }

    console.log('Animation classes added successfully');
  }

  // Method to manually trigger animations
  triggerAnimation(element, animationType = 'fade-in') {
    element.classList.add(animationType);
    setTimeout(() => {
      element.classList.add('animate-in');
    }, 100);
  }

  // Cleanup method
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Initialize animations immediately
console.log('Initializing Animation Controller...');
const animationController = new AnimationController();

// Also initialize on window load as backup
window.addEventListener('load', () => {
  console.log('Window loaded, reinitializing animations...');
  if (animationController) {
    animationController.setupAnimations();
  }
});

// Export for debugging
window.AnimationController = AnimationController;
window.animationController = animationController;

// Debug function
window.debugAnimations = () => {
  console.log('=== Animation Debug Info ===');
  console.log('Current path:', window.location.pathname);
  console.log('Animated elements:', document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-top, .slide-in-bottom, .scale-in, .bounce-in, .zoom-in').length);
  console.log('Elements with animate-in:', document.querySelectorAll('.animate-in').length);
  console.log('Animation controller:', animationController);
};