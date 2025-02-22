document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    let currentIndex = 0;

    const getSlidesToMove = () => {
        return window.innerWidth <= 768 ? 1 : 2;
    };

    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const moveToSlide = (index) => {
        const slidesToMove = getSlidesToMove();
        const maxIndex = Math.ceil(slides.length / slidesToMove) - 1;

        if (index >= 0 && index <= maxIndex) {
            currentIndex = index;
            updateCarousel();
        }
    };

    const handleResize = () => {
        updateCarousel();
    };

    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });

    window.addEventListener('resize', handleResize);

    setInterval(() => {
        moveToSlide((currentIndex + 1) % Math.ceil(slides.length / getSlidesToMove()));
    }, 5000);

    updateCarousel();
});
