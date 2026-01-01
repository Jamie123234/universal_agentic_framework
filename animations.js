document.addEventListener('DOMContentLoaded', () => {
    // Background
    anime({
        targets: '.grid-background',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutQuad'
    });

    anime({
        targets: '.gradient-orb',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 2000,
        delay: anime.stagger(300),
        easing: 'easeOutQuad'
    });

    // Navigation
    anime({
        targets: 'nav',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        delay: 400,
        easing: 'easeOutCubic'
    });

    // Hero sequence
    anime({
        targets: '.hero-label',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 600,
        easing: 'easeOutCubic'
    });

    anime({
        targets: '.hero h1',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 800,
        easing: 'easeOutCubic'
    });

    anime({
        targets: '.hero-description',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 1000,
        easing: 'easeOutCubic'
    });

    anime({
        targets: '.hero-cta',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 1200,
        easing: 'easeOutCubic'
    });

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                if (target.classList.contains('section-header')) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                }
                
                if (target.classList.contains('card')) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutCubic'
                    });
                }

                if (target.classList.contains('comparison-card')) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        scale: [0.98, 1],
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                }

                if (target.classList.contains('timeline-item')) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                }

                if (target.classList.contains('arch-card')) {
                    anime({
                        targets: target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        scale: [0.98, 1],
                        duration: 800,
                        easing: 'easeOutCubic'
                    });
                }
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header, .card, .comparison-card, .timeline-item, .arch-card').forEach(el => {
        observer.observe(el);
    });

    // Floating orbs
    anime({
        targets: '.orb-1',
        translateX: [-100, 100],
        translateY: [-50, 50],
        duration: 20000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });

    anime({
        targets: '.orb-2',
        translateX: [100, -100],
        translateY: [50, -50],
        duration: 25000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });
});