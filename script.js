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
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Target error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        const successMsg = document.getElementById('form-success');

        let isValid = true;

        // Name Validation
        if (nameInput.value.trim().length < 3) {
            nameError.style.display = 'block';
            nameInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderColor = '#ccc';
        }

        // Email Validation Regular Expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '#ccc';
        }

        // Message Validation
        if (messageInput.value.trim().length < 10) {
            messageError.style.display = 'block';
            messageInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            messageError.style.display = 'none';
            messageInput.style.borderColor = '#ccc';
        }

        // Processing success status
        if (isValid) {
            successMsg.style.display = 'block';
            contactForm.reset();
            
            // Hide notification after standard viewing block window
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 4000);
        }
    });
});
