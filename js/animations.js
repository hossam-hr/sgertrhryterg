
document.addEventListener('DOMContentLoaded', () => {
    // Apply fade-in animation to all elements with the fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // Add a small delay between each element's animation for a staggered effect
    fadeInElements.forEach((element, index) => {
        element.style.animationDelay = `${0.3 + index * 0.2}s`;
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
});

// Add scroll-triggered animations
window.addEventListener('scroll', () => {
    const scrollElements = document.querySelectorAll('.fade-in');
    
    scrollElements.forEach(element => {
        // Check if the element is in the viewport
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.9) {
            element.classList.add('visible');
        }
    });
});
