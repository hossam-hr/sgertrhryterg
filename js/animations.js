document.addEventListener('DOMContentLoaded', () => {
    // Apply fade-in animation to all elements with the fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // Add a small delay between each element's animation for a staggered effect
    // and make them visible immediately without requiring scroll
    fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${0.3 + index * 0.2}s`;
        // Add visible class immediately to show content
        setTimeout(() => {
            element.classList.add('visible');
        }, 100);
    });
    
    // Animation for the floating shapes to simulate rectangle movement
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        // Random small movement for each shape
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 5;
            const randomY = (Math.random() - 0.5) * 5;
            const randomRotate = (Math.random() - 0.5) * 2;
            
            shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        }, 3000 + index * 500); // Different interval for each shape
    });
    
    // Apply staggered animations to cards
    const cards = document.querySelectorAll('.feature-card, .service-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--item-index', index + 1);
    });
    
    // Apply staggered animations to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index + 1);
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .submit-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all page sections for scroll animations
    document.querySelectorAll('.page-section').forEach(section => {
        observer.observe(section);
    });
});

// Add scroll-triggered animations (keep for elements that appear later)
window.addEventListener('scroll', () => {
    const scrollElements = document.querySelectorAll('.fade-in:not(.visible)');
    
    scrollElements.forEach(element => {
        // Check if the element is in the viewport
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.9) {
            element.classList.add('visible');
        }
    });
});
