document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const contextSection = document.querySelector('.context-section');
    if (contextSection) {
        observer.observe(contextSection);
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Add staggered delay for card entrance if we wanted to animate them in
        // card.style.animationDelay = `${index * 0.1}s`;

        // Mouse move effect for the glow
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.style.left = `${x - 75}px`; // Center the 150px glow
                glow.style.top = `${y - 75}px`;
            }
        });
    });

    // Optional: Add a simple greeting based on time of day
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const hour = new Date().getHours();
    let greeting = "Transforming Finance with Intelligent Solutions";

    // Only override if we want a time-based greeting, keeping it professional for now.
    // if (hour < 12) greeting = "Good Morning. Transforming Finance...";
    // else if (hour < 18) greeting = "Good Afternoon. Transforming Finance...";
    // else greeting = "Good Evening. Transforming Finance...";

    // Scroll Animation for Video
    const heroVideo = document.querySelector('.hero-video');
    window.addEventListener('scroll', () => {
        if (heroVideo) {
            const scrollY = window.scrollY;
            // Simple parallax or scale effect
            if (scrollY > 50) {
                heroVideo.classList.add('scrolled');
            } else {
                heroVideo.classList.remove('scrolled');
            }
        }
    });
});
