// Minimal JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navTrigger = document.getElementById('nav-trigger');
  const trigger = document.querySelector('.trigger');
  
  if (navTrigger && trigger) {
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.site-nav')) {
        navTrigger.checked = false;
      }
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

