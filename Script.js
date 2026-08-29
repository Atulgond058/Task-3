// DOM ELEMENTS
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

// MOBILE NAV INTERACTION (TOGGLE OPEN / CLOSE & HAMBURGER ANIMATION)
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});

// CLOSE NAV MENU AND RESET BURGER ANIMATION ON LINK CLICK (MOBILE)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    });
});

// FORM SUBMISSION HANDLING WITH BASIC USER FEEDBACK
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    
    alert(`Thank you, ${name}! Your request has been logged successfully for Task 3 validation. Take your screenshots now.`);
    contactForm.reset();
});
  
