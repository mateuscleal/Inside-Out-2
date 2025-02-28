// Script para funcionalidades interativas do site
const galleryImages = document.querySelectorAll('#gallery .gallery img');

galleryImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });

    img.addEventListener('click', () => {
        const characterPages = {
            alegria: './pages/alegria.html',
            tristeza: './pages/tristeza.html',
            raiva: './pages/raiva.html',
            medo: './pages/medo.html',
            nojinho: './pages/nojinho.html',
            inveja: './pages/inveja.html'
        };

        const characterName = img.alt.toLowerCase(); 
        const pageUrl = characterPages[characterName];

        if (pageUrl) {
            window.location.href = pageUrl;
        } else {
            alert('Página do personagem não encontrada!');
        }
    });

});