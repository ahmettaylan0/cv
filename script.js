document.addEventListener('DOMContentLoaded', () => {

    /* --- THEME TOGGLE (Dark/Light) --- */
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    const body = document.body;

    const savedTheme = localStorage.getItem('creative-theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.replace('dark-theme', 'light-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('creative-theme', 'light');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('creative-theme', 'dark');
        }
    });

    /* --- MOBILE NAVIGATION --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    /* --- CUSTOM CURSOR REMOVED --- */

    /* --- SCROLL ANIMATIONS (Intersection Observer) --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's the language bar, animate progress
                if (entry.target.classList.contains('language-card')) {
                    setTimeout(() => {
                        const progress = entry.target.querySelector('.progress');
                        progress.style.width = progress.getAttribute('data-width');
                    }, 500); // Wait for the element reveal to finish roughly
                }

                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.filter-reveal, .reveal-text').forEach(el => {
        revealObserver.observe(el);
    });

    /* --- VANILLA TILT FOR CARDS --- */
    // Using VanillaTilt.js (loaded via script tag in HTML)
    const tiltCards = document.querySelectorAll('.tilt-card');
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(tiltCards, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02
        });
    }

    /* --- TYPEWRITER EFFECT --- */
    const typewriterElement = document.querySelector('.typewriter');
    const phrases = ["Yazılım Geliştirici", "Problem Çözücü", "Tech Enthusiast", "Kod Sanatçısı"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 1500);

    /* --- CONTACT FORM --- */
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uzaya Gönderiliyor...';
            submitBtn.style.pointerEvents = 'none';

            // Fake Network Delay
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.style.pointerEvents = 'auto';

                formMessage.textContent = 'Mesajınız ulaştı! Hızla dönüş yapacağım.';
                formMessage.classList.remove('hidden');
                formMessage.classList.add('success');

                setTimeout(() => {
                    formMessage.classList.add('hidden');
                    formMessage.classList.remove('success');
                }, 5000);
            }, 2000);
        });
    }

    /* --- NAVBAR BLUR ON SCROLL --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
            // Adding a dynamic glass effect shadow constraint
            navbar.style.background = 'rgba(5, 5, 5, 0.7)';
            if (document.body.classList.contains('light-theme')) {
                navbar.style.background = 'rgba(255, 255, 255, 0.7)';
            }
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
        /* --- FLOATING SCROLL BUTTONS LOGIC --- */
        const scrollTopBtn = document.getElementById('scroll-to-top');
        const scrollBottomBtn = document.getElementById('scroll-to-bottom');

        window.addEventListener('scroll', () => {
            // Sayfa 300px'den fazla aşağı inerse "Yukarı Çık" butonu görünsün
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }

            // Sayfa sonuna 300px kala "Aşağı İn" butonu gizlensin
            const scrollHeight = document.documentElement.scrollHeight;
            const currentScroll = window.scrollY + window.innerHeight;

            if (currentScroll < scrollHeight - 300) {
                scrollBottomBtn.classList.add('visible');
            } else {
                scrollBottomBtn.classList.remove('visible');
            }
        });

        // Yukarı Çık Fonksiyonu
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Aşağı İn Fonksiyonu
        scrollBottomBtn.addEventListener('click', () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        });
    });
});
