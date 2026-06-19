// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Join Community Function
function joinCommunity() {


    // Confetti Effect
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.fontSize = '2rem';
            confetti.style.zIndex = '9999';
            confetti.style.transition = 'all 4s';
            confetti.textContent = ['🇳🇬', '🔥', '🚀', '💚', '🌍'][Math.floor(Math.random() * 5)];
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.opacity = '0';
                confetti.style.transform = `rotate(${Math.random() * 800}deg)`;
            }, 50);

            setTimeout(() => confetti.remove(), 4500);
        }, i * 25);
    }
}

// Keyboard Shortcut: Ctrl/Cmd + K
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        joinCommunity();
    }
});

console.log('%cSeiHausa Community Website Loaded Successfully! 🇳🇬', 
    'color: #00c853; font-size: 16px; font-weight: bold;');

// Navbar transparency toggle based on scroll position relative to hero
(function() {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');

    function updateNav() {
        if (!nav) return;
        const threshold = hero ? (hero.offsetHeight - nav.offsetHeight) : 120;
        if (window.scrollY > threshold) {
            nav.classList.add('scrolled');
            nav.classList.remove('transparent');
        } else {
            nav.classList.add('transparent');
            nav.classList.remove('scrolled');
        }
    }

    document.addEventListener('DOMContentLoaded', updateNav);
    window.addEventListener('scroll', updateNav);
    window.addEventListener('resize', updateNav);
})();