// Before and After page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add any specific functionality for the before and after page here
    console.log('Before and After page loaded');
    
    // Add smooth scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-text-wrapper');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Add entrance animation for hero text
window.addEventListener('load', function() {
    const heroTextWrapper = document.querySelector('.hero-text-wrapper');
    if (heroTextWrapper) {
        setTimeout(() => {
            heroTextWrapper.style.opacity = '1';
            heroTextWrapper.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Initially hide hero text for entrance animation
document.addEventListener('DOMContentLoaded', function() {
    const heroTextWrapper = document.querySelector('.hero-text-wrapper');
    if (heroTextWrapper) {
        heroTextWrapper.style.opacity = '0';
        heroTextWrapper.style.transform = 'translateY(30px)';
        heroTextWrapper.style.transition = 'all 0.8s ease-out';
    }
});