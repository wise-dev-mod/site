let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const flowerContainer = document.querySelector('.flower-container');
    const scrollText = document.querySelector('.scroll-text');
    const flower = document.querySelector('.flower');
    
    const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const currentScrollTop = window.scrollY;

    if (scrollPosition > 0.1) {
        flowerContainer.style.opacity = Math.min(1, scrollPosition);
        scrollText.style.opacity = Math.min(1, (scrollPosition - 0.1) * 2);

        // Rotate the flower based on scroll position
        const rotation = scrollPosition * 360;
        flower.style.transform = `rotate(${rotation}deg)`;
    } else {
        flowerContainer.style.opacity = 0;
        scrollText.style.opacity = 0;
    }

    // Change background color based on scroll direction
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        const maxHue = 330; // Adjust this value for desired effect
        const hue = scrollPosition * maxHue;
        document.body.style.backgroundColor = `hsl(${hue}, 100%, 88%)`;
    } else {
        // Scrolling up
        document.body.style.backgroundColor = `white`;
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
