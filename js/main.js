// Header Component
const headerHTML = `
<div class="header-container">
  <a href="index.html" class="logo">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
    PestGuard Pro
  </a>
  
  <nav class="nav-desktop">
    <a href="index.html" class="nav-link">Home</a>
    <a href="about.html" class="nav-link">About</a>
    <a href="services.html" class="nav-link">Services</a>
    <a href="blog.html" class="nav-link">Blog</a>
    <a href="contact.html" class="nav-link">Contact</a>
  </nav>
  
  <div class="header-actions">
    <a href="tel:+16517627822" class="header-phone">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      <span>+1-651-762-7822</span>
    </a>
    <a href="contact.html" class="btn btn-primary" style="padding: 0.75rem 1.5rem; font-size: 1rem;">Get Free Quote</a>
  </div>
  
  <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  </button>
</div>

<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-header">
    <a href="index.html" class="logo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
      PestGuard Pro
    </a>
    <button class="mobile-close-btn" onclick="toggleMobileMenu()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <nav class="mobile-nav">
    <a href="index.html" class="nav-link">Home</a>
    <a href="about.html" class="nav-link">About</a>
    <a href="services.html" class="nav-link">Services</a>
    <a href="blog.html" class="nav-link">Blog</a>
    <a href="contact.html" class="nav-link">Contact</a>
    <a href="tel:+16517627822" class="mobile-phone">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      <span>+1-651-762-7822</span>
    </a>
  </nav>
</div>
`;

// Footer Component
const footerHTML = `
<div class="footer-container">
  <div class="footer-grid">
    <div class="footer-section">
      <h3>PestGuard Pro</h3>
      <p>Your trusted partner in professional pest control services. Protecting homes and businesses for over 15 years.</p>
    </div>
    
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Our Services</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    
    <div class="footer-section">
      <h3>Services</h3>
      <ul>
        <li><a href="services/general-pest-control.html">General Pest Control</a></li>
        <li><a href="services/termite-control.html">Termite Control</a></li>
        <li><a href="services/bed-bug-treatment.html">Bed Bug Treatment</a></li>
        <li><a href="services/commercial-pest-control.html">Commercial Services</a></li>
      </ul>
    </div>
    
    <div class="footer-section footer-contact">
      <h3>Contact Us</h3>
      <ul>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <a href="tel:+16517627822">+1-651-762-7822</a>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <a href="mailto:info@pestguardpro.com">info@pestguardpro.com</a>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>123 Pest Control Ave, Safety City, ST 12345</span>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>&copy; 2026 PestGuard Pro. All rights reserved. | <a href="privacy.html" style="color: #9ca3af; text-decoration: underline;">Privacy Policy</a> | <a href="terms.html" style="color: #9ca3af; text-decoration: underline;">Terms & Conditions</a></p>
  </div>
</div>
`;

// Load Header and Footer
document.addEventListener('DOMContentLoaded', function() {
  // Insert header
  const headerElement = document.getElementById('header');
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  }
  
  // Insert footer
  const footerElement = document.getElementById('footer');
  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  }
  
  // Set active nav link
  setActiveNavLink();
  
  // Initialize hero slider if exists
  if ($('.hero-slider').length) {
    $('.hero-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      fade: true,
      cssEase: 'linear'
    });
  }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }
}

// Set Active Navigation Link
function setActiveNavLink() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if current page matches link
    if (currentPage === linkPath || 
        (currentPage === '/' && linkPath === 'index.html') ||
        (currentPage.includes(linkPath.replace('.html', '')) && linkPath !== 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Contact Form Submission
function handleContactForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Here you would normally send the data to a server
  console.log('Form submitted:', data);
  
  // Show success message
  alert('Thank you for your message! We will contact you shortly.');
  event.target.reset();
}

// Smooth Scroll
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