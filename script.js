let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const flowerContainer = document.querySelector('.flower-container');
    const scrollText = document.querySelector('.scroll-text');
    const flower = document.querySelector('.flower');
    
    const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const currentScrollTop = window.scrollY;

    // Changer la couleur de fond en fonction de la position de défilement
    if (scrollPosition === 0) {
        document.body.style.backgroundColor = 'white';
    } else if (scrollPosition === 1) {
        document.body.style.backgroundColor = 'pink';
    } else {
        const maxHue = 20; // Ajuster cette valeur pour l'effet désiré
        const hue = scrollPosition * maxHue;
        document.body.style.backgroundColor = `hsl(${hue}, 100%, 88%)`;
    }

    // Autres effets de défilement
    if (scrollPosition > 0.1) {
        flowerContainer.style.opacity = Math.min(1, scrollPosition);
        scrollText.style.opacity = Math.min(1, (scrollPosition - 0.1) * 2);

        // Rotation de la fleur en fonction de la position de défilement
        const rotation = scrollPosition * 360;
        flower.style.transform = `rotate(${rotation}deg)`;
    } else {
        flowerContainer.style.opacity = 0;
        scrollText.style.opacity = 0;
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});