// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky header functionality
  window.onscroll = function() {stickyHeader()};
  
  var header = document.querySelector("header");
  var sticky = header.offsetTop;
  
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  
  // Form validation for the contact form
  document.querySelector('.contact-button').addEventListener('click', function() {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    if (name === "" || email === "" || message === "") {
      alert("All fields are required.");
    } else {
      alert("Message sent successfully!");
    }
  });
  
  // Animations on scroll for skill bars using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.percent-bar').classList.add('fill');
      }
    });
  });
  
  document.querySelectorAll('.bar-box').forEach((barBox) => {
    observer.observe(barBox);
  });
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkmode');
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  // Mobile menu toggle (if required in the future)
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
  
  // Modal popup for services (can be expanded with more complex modals)
  document.querySelectorAll('.services-box a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      alert("More information coming soon!");
    });
  });
  