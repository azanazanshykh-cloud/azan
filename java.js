// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Stats counter animation
const statsSection = document.querySelector('.stats');
const statNumbers = document.querySelectorAll('.stat-number');

let animated = false;

const animateCounters = () => {
    if (animated) return;
    animated = true;

    statNumbers.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
                if (counter.nextElementSibling.innerText === 'Client Satisfaction') {
                    counter.innerText += '%';
                } else {
                    counter.innerText += '+';
                }
            }
        };

        updateCounter();
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    observer.observe(statsSection);
}