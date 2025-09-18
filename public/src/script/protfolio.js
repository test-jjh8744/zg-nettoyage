// Portfolio JavaScript functionality

// Portfolio data for modal content
const portfolioData = {
  'villa-moderne': {
    title: 'Villa Moderne - Casablanca',
    category: 'Résidentiel',
    description: 'Nettoyage complet d\'une villa moderne de 300m² située dans le quartier résidentiel d\'Anfa à Casablanca.',
    details: [
      'Surface: 300m²',
      'Durée: 6 heures',
      'Équipe: 4 professionnels',
      'Services: Nettoyage complet, vitres, sols'
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Excellent travail ! L'équipe a été très professionnelle et le résultat dépasse nos attentes.",
      author: "Mme. Alami",
      rating: 5
    }
  },
  'centre-commercial': {
    title: 'Centre Commercial - Rabat',
    category: 'Commercial',
    description: 'Nettoyage quotidien et maintenance d\'un centre commercial de 5000m² avec plus de 100 boutiques.',
    details: [
      'Surface: 5000m²',
      'Fréquence: Quotidienne',
      'Équipe: 12 professionnels',
      'Services: Nettoyage, désinfection, maintenance'
    ],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "ZG Nettoyage assure un service impeccable depuis 3 ans. Très fiables et professionnels.",
      author: "M. Bennani, Directeur",
      rating: 5
    }
  },
  'bureau-moderne': {
    title: 'Bureau Moderne - Casablanca',
    category: 'Bureau',
    description: 'Nettoyage d\'espaces de travail collaboratifs dans un immeuble de bureaux moderne.',
    details: [
      'Surface: 800m²',
      'Durée: 4 heures',
      'Équipe: 6 professionnels',
      'Services: Bureaux, salles de réunion, espaces communs'
    ],
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Un environnement de travail toujours propre et accueillant grâce à ZG Nettoyage.",
      author: "Équipe RH TechCorp",
      rating: 5
    }
  },
  'restaurant-cuisine': {
    title: 'Restaurant - Mohammedia',
    category: 'Nettoyage Profond',
    description: 'Nettoyage profond et désinfection d\'une cuisine professionnelle selon les normes HACCP.',
    details: [
      'Surface: 200m²',
      'Durée: 8 heures',
      'Équipe: 4 spécialistes',
      'Services: Dégraissage, désinfection, normes HACCP'
    ],
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Respect parfait des normes d'hygiène. Notre cuisine n'a jamais été aussi propre !",
      author: "Chef Rachid",
      rating: 5
    }
  },
  'tour-bureaux': {
    title: 'Tour de Bureaux - Casablanca',
    category: 'Vitres',
    description: 'Nettoyage de vitres en hauteur d\'une tour de bureaux de 20 étages avec équipement spécialisé.',
    details: [
      'Hauteur: 20 étages',
      'Surface vitrée: 2000m²',
      'Équipe: 8 spécialistes',
      'Services: Vitres extérieures, nacelle, sécurité'
    ],
    images: [
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Travail en hauteur réalisé avec un professionnalisme et une sécurité exemplaires.",
      author: "M. Tazi, Facility Manager",
      rating: 5
    }
  },
  'appartement-luxe': {
    title: 'Appartement de Luxe - Rabat',
    category: 'Résidentiel',
    description: 'Nettoyage hebdomadaire d\'un penthouse de luxe avec finitions haut de gamme.',
    details: [
      'Surface: 250m²',
      'Fréquence: Hebdomadaire',
      'Équipe: 3 professionnels',
      'Services: Nettoyage délicat, matériaux nobles'
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Service discret et de qualité supérieure. Parfait pour notre appartement de standing.",
      author: "Mme. Benali",
      rating: 5
    }
  },
  'hotel-luxe': {
    title: 'Hôtel 5 Étoiles - Marrakech',
    category: 'Commercial',
    description: 'Nettoyage quotidien d\'un hôtel de luxe 5 étoiles avec 200 chambres et espaces communs.',
    details: [
      'Chambres: 200',
      'Surface totale: 8000m²',
      'Équipe: 20 professionnels',
      'Services: Chambres, restaurant, spa, piscine'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Un partenaire de confiance qui maintient nos standards de luxe au quotidien.",
      author: "Direction Hôtel Atlas",
      rating: 5
    }
  },
  'siege-social': {
    title: 'Siège Social - Casablanca',
    category: 'Bureau',
    description: 'Nettoyage d\'un open space de 1000m² accueillant 150 employés.',
    details: [
      'Surface: 1000m²',
      'Employés: 150',
      'Équipe: 8 professionnels',
      'Services: Open space, salles de réunion, cafétéria'
    ],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Environnement de travail toujours impeccable. Nos employés apprécient la propreté.",
      author: "DRH Groupe Maghreb",
      rating: 5
    }
  },
  'spa-luxe': {
    title: 'Spa de Luxe - Agadir',
    category: 'Nettoyage Profond',
    description: 'Nettoyage et désinfection complète d\'un spa de luxe avec protocoles sanitaires stricts.',
    details: [
      'Surface: 400m²',
      'Cabines: 12',
      'Équipe: 6 spécialistes',
      'Services: Désinfection, hammam, piscine'
    ],
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Hygiène parfaite respectant tous les protocoles sanitaires. Clients très satisfaits.",
      author: "Spa Argan Wellness",
      rating: 5
    }
  }
};

// DOM elements
let currentFilter = 'all';
let portfolioItems = [];
let visibleItems = 9;
let totalItems = 0;

// Initialize portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
  initializePortfolio();
  setupEventListeners();
  setupScrollAnimations();
  setupFloatingElements();
  setupImageLoading();
});

// Initialize portfolio
function initializePortfolio() {
  portfolioItems = document.querySelectorAll('.portfolio-item');
  totalItems = portfolioItems.length;
  
  // Show initial items
  showPortfolioItems();
  
  // Update load more button visibility
  updateLoadMoreButton();
}

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      setActiveFilter(this, filter);
      filterPortfolioItems(filter);
    });
  });
  
  // Load more button
  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMorePortfolio);
  }
  
  // Modal close events
  const modalOverlay = document.querySelector('.portfolio-modal .modal-overlay');
  const modalClose = document.querySelector('.portfolio-modal .modal-close');
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closePortfolioModal);
  }
  
  if (modalClose) {
    modalClose.addEventListener('click', closePortfolioModal);
  }
  
  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePortfolioModal();
    }
  });
}

// Set active filter
function setActiveFilter(button, filter) {
  // Remove active class from all buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to clicked button
  button.classList.add('active');
  
  // Update current filter
  currentFilter = filter;
}

// Filter portfolio items
function filterPortfolioItems(filter) {
  portfolioItems.forEach((item, index) => {
    const category = item.getAttribute('data-category');
    const shouldShow = filter === 'all' || category === filter;
    
    if (shouldShow) {
      item.classList.remove('hidden');
      // Add staggered animation
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 100);
    } else {
      item.classList.add('hidden');
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
    }
  });
  
  // Reset visible items count
  visibleItems = 9;
  updateLoadMoreButton();
}

// Show portfolio items with animation
function showPortfolioItems() {
  const visiblePortfolioItems = Array.from(portfolioItems).filter(item => 
    !item.classList.contains('hidden')
  ).slice(0, visibleItems);
  
  visiblePortfolioItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Load more portfolio items
function loadMorePortfolio() {
  visibleItems += 6;
  showPortfolioItems();
  updateLoadMoreButton();
  
  // Smooth scroll to new items
  setTimeout(() => {
    const newItems = document.querySelectorAll('.portfolio-item:not(.hidden)');
    if (newItems[visibleItems - 6]) {
      newItems[visibleItems - 6].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, 500);
}

// Update load more button visibility
function updateLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more-btn');
  const visiblePortfolioItems = Array.from(portfolioItems).filter(item => 
    !item.classList.contains('hidden')
  );
  
  if (loadMoreBtn) {
    if (visibleItems >= visiblePortfolioItems.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-flex';
    }
  }
}

// Open portfolio modal
function openPortfolioModal(projectId) {
  const modal = document.getElementById('portfolioModal');
  const modalBody = document.getElementById('modalBody');
  const projectData = portfolioData[projectId];
  
  if (!projectData) {
    console.error('Project data not found for:', projectId);
    return;
  }
  
  // Generate modal content
  const modalContent = generateModalContent(projectData);
  modalBody.innerHTML = modalContent;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Setup image gallery if multiple images
  if (projectData.images && projectData.images.length > 1) {
    setupImageGallery();
  }
}

// Close portfolio modal
function closePortfolioModal() {
  const modal = document.getElementById('portfolioModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Generate modal content
function generateModalContent(data) {
  const starsHtml = '★'.repeat(data.testimonial.rating) + '☆'.repeat(5 - data.testimonial.rating);
  
  return `
    <div class="modal-project-header">
      <div class="project-images">
        ${data.images.map((img, index) => `
          <img src="${img}" alt="${data.title}" class="project-image ${index === 0 ? 'active' : ''}" loading="lazy">
        `).join('')}
        ${data.images.length > 1 ? `
          <div class="image-nav">
            <button class="nav-btn prev" onclick="changeImage(-1)">‹</button>
            <button class="nav-btn next" onclick="changeImage(1)">›</button>
          </div>
          <div class="image-dots">
            ${data.images.map((_, index) => `
              <button class="dot ${index === 0 ? 'active' : ''}" onclick="goToImage(${index})"></button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
    
    <div class="modal-project-content">
      <div class="project-header">
        <span class="project-category">${data.category}</span>
        <h2>${data.title}</h2>
        <p class="project-description">${data.description}</p>
      </div>
      
      <div class="project-details">
        <h3>Détails du Projet</h3>
        <ul>
          ${data.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      </div>
      
      <div class="project-testimonial">
        <h3>Témoignage Client</h3>
        <div class="testimonial-content">
          <div class="stars">${starsHtml}</div>
          <blockquote>"${data.testimonial.text}"</blockquote>
          <cite>- ${data.testimonial.author}</cite>
        </div>
      </div>
      
      <div class="project-cta">
        <p>Intéressé par un projet similaire ?</p>
        <a href="contact.html" class="modal-cta-btn">Demander un Devis</a>
      </div>
    </div>
    
    <style>
      .modal-project-header {
        position: relative;
        margin-bottom: 30px;
      }
      
      .project-images {
        position: relative;
        height: 300px;
        border-radius: 12px;
        overflow: hidden;
      }
      
      .project-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .project-image.active {
        opacity: 1;
      }
      
      .image-nav {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        transform: translateY(-50%);
        pointer-events: none;
      }
      
      .nav-btn {
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        pointer-events: auto;
      }
      
      .nav-btn:hover {
        background: rgba(0, 0, 0, 0.7);
        transform: scale(1.1);
      }
      
      .image-dots {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
      }
      
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .dot.active {
        background: white;
        transform: scale(1.2);
      }
      
      .modal-project-content {
        padding: 0 10px;
      }
      
      .project-header {
        margin-bottom: 30px;
      }
      
      .project-category {
        display: inline-block;
        background: #2099d7;
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 12px;
      }
      
      .project-header h2 {
        font-family: "adobe-caslon-pro", serif;
        font-size: 28px;
        font-weight: 400;
        color: #1a1a1a;
        margin: 0 0 16px 0;
      }
      
      .project-description {
        font-size: 16px;
        line-height: 1.6;
        color: #666;
        margin: 0;
      }
      
      .project-details {
        margin-bottom: 30px;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 12px;
      }
      
      .project-details h3 {
        font-family: "Work Sans", sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 16px 0;
      }
      
      .project-details ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .project-details li {
        padding: 8px 0;
        border-bottom: 1px solid #e0e0e0;
        font-size: 14px;
        color: #333;
      }
      
      .project-details li:last-child {
        border-bottom: none;
      }
      
      .project-testimonial {
        margin-bottom: 30px;
        padding: 20px;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
      }
      
      .project-testimonial h3 {
        font-family: "Work Sans", sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 16px 0;
      }
      
      .testimonial-content .stars {
        color: #ffc107;
        font-size: 16px;
        margin-bottom: 12px;
      }
      
      .testimonial-content blockquote {
        font-size: 16px;
        line-height: 1.6;
        color: #333;
        margin: 0 0 12px 0;
        font-style: italic;
        border-left: 3px solid #2099d7;
        padding-left: 16px;
      }
      
      .testimonial-content cite {
        font-size: 14px;
        color: #666;
        font-weight: 600;
      }
      
      .project-cta {
        text-align: center;
        padding: 20px;
        background: linear-gradient(135deg, #2099d7 0%, #48b3e8 100%);
        border-radius: 12px;
        color: white;
      }
      
      .project-cta p {
        font-size: 16px;
        margin: 0 0 16px 0;
        font-weight: 500;
      }
      
      .modal-cta-btn {
        display: inline-block;
        background: white;
        color: #2099d7;
        padding: 12px 24px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
      }
      
      .modal-cta-btn:hover {
        background: #f8f9fa;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      @media (max-width: 768px) {
        .project-images {
          height: 250px;
        }
        
        .project-header h2 {
          font-size: 24px;
        }
        
        .nav-btn {
          width: 35px;
          height: 35px;
          font-size: 16px;
        }
        
        .image-nav {
          padding: 0 15px;
        }
      }
    </style>
  `;
}

// Image gallery functionality
let currentImageIndex = 0;
let totalImages = 0;

function setupImageGallery() {
  const images = document.querySelectorAll('.project-image');
  totalImages = images.length;
  currentImageIndex = 0;
}

function changeImage(direction) {
  const images = document.querySelectorAll('.project-image');
  const dots = document.querySelectorAll('.dot');
  
  // Remove active class from current image and dot
  images[currentImageIndex].classList.remove('active');
  dots[currentImageIndex].classList.remove('active');
  
  // Calculate new index
  currentImageIndex += direction;
  if (currentImageIndex >= totalImages) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = totalImages - 1;
  
  // Add active class to new image and dot
  images[currentImageIndex].classList.add('active');
  dots[currentImageIndex].classList.add('active');
}

function goToImage(index) {
  const images = document.querySelectorAll('.project-image');
  const dots = document.querySelectorAll('.dot');
  
  // Remove active class from current image and dot
  images[currentImageIndex].classList.remove('active');
  dots[currentImageIndex].classList.remove('active');
  
  // Set new index
  currentImageIndex = index;
  
  // Add active class to new image and dot
  images[currentImageIndex].classList.add('active');
  dots[currentImageIndex].classList.add('active');
}

// Setup scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .bounce-in'
  );

  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Setup floating elements
function setupFloatingElements() {
  const floatingIcon = document.getElementById('floating-quote-icon');
  const floatingModal = document.getElementById('floating-form-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const modalOverlay = floatingModal.querySelector('.modal-overlay');
  const floatingForm = document.getElementById('floatingQuoteForm');

  // Show modal when floating icon is clicked
  if (floatingIcon) {
    floatingIcon.addEventListener('click', function() {
      floatingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close modal when close button is clicked
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      floatingModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close modal when overlay is clicked
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function() {
      floatingModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Handle floating form submission
  if (floatingForm) {
    floatingForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Basic validation
      if (!data.clientName || !data.clientPhone || !data.clientAddress || !data.serviceType) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }

      // Prepare payload for WebForms (Web3Forms)
      const payload = {
        access_key: '29b4ae0e-d93b-4257-bc49-7217e37bfba7',
        subject: 'Nouvelle demande de devis - ZG Nettoyage',
        from_name: data.clientName || 'Client',
        page: window.location.href,
        'Nom complet': data.clientName,
        'Téléphone': data.clientPhone,
        'Adresse': data.clientAddress,
        'Service souhaité': data.serviceType,
        'Message': data.message || '',
        'Langue': 'fr'
      };

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await res.json();
        if (result.success) {
          alert('Merci pour votre demande ! Un email de confirmation a été envoyé et nous vous contacterons sous peu.');
          this.reset();
          floatingModal.classList.remove('active');
          document.body.style.overflow = '';
        } else {
          console.error('Envoi échoué:', result);
          alert("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
        }
      } catch (err) {
        console.error('Erreur réseau:', err);
        alert("Impossible d'envoyer votre demande pour le moment. Vérifiez votre connexion et réessayez.");
      }
    });
  }

  // Add smooth entrance animation for floating icon after page load
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (floatingIcon) {
        floatingIcon.style.opacity = '1';
        floatingIcon.style.transform = 'translateY(0)';
      }
    }, 1000);
  });

  // Initially hide the floating icon
  if (floatingIcon) {
    floatingIcon.style.opacity = '0';
    floatingIcon.style.transform = 'translateY(100px)';
    floatingIcon.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  }
}

// Setup image loading
function setupImageLoading() {
  const images = document.querySelectorAll('.portfolio-image img');
  
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
    }
  });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Add parallax effect to hero section
let ticking = false;
function updateParallax() {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground && scrolled < window.innerHeight) {
    const rate = scrolled * -0.3;
    heroBackground.style.transform = `translateY(${rate}px)`;
  }
  
  ticking = false;
}

function requestParallaxUpdate() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener('scroll', requestParallaxUpdate);

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #2099d7, #48b3e8);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// Initialize scroll progress
addScrollProgress();

// Performance optimization: Lazy load images
function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// Initialize lazy loading
setupLazyLoading();

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
  // Portfolio modal navigation
  if (document.querySelector('.portfolio-modal.active')) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      changeImage(1);
    }
  }
  
  // Filter navigation
  if (e.key === 'Tab' && e.target.classList.contains('filter-btn')) {
    // Allow normal tab navigation
  }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (document.querySelector('.portfolio-modal.active')) {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next image
        changeImage(1);
      } else {
        // Swipe right - previous image
        changeImage(-1);
      }
    }
  }
}

// Export functions for global access
window.openPortfolioModal = openPortfolioModal;
window.closePortfolioModal = closePortfolioModal;
window.loadMorePortfolio = loadMorePortfolio;
window.changeImage = changeImage;
window.goToImage = goToImage;