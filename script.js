document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Explore button
    const btnExplorar = document.getElementById('btn-explorar');
    if (btnExplorar) {
        btnExplorar.addEventListener('click', function() {
            document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = contactForm.querySelectorAll('input, select, textarea');
            const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
            
            if (allFilled) {
                formMessage.style.color = '#28a745';
                formMessage.textContent = ' Mensagem enviada com sucesso! Obrigado por entrar em contato.';
                contactForm.reset();
                
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            } else {
                formMessage.style.color = '#dc3545';
                formMessage.textContent = ' Por favor, preencha todos os campos!';
            }
        });
    }

    // Scroll animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Dark theme toggle (existing code)
    const switcher = document.querySelector('.btnn');
    if (switcher) {
        switcher.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
        });
    }
});
