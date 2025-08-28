document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.emergency-card');

    if (!carouselSlide || !prevBtn || !nextBtn || cards.length === 0) {
        console.error("Erro: Um ou mais elementos do carrossel não foram encontrados. Verifique se as classes no seu HTML estão corretas.");
        return;
    }

    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const cardMargin = 20;
        const totalWidth = cardWidth + cardMargin;
        carouselSlide.style.transform = `translateX(-${currentIndex * totalWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1;
        }
        updateCarousel();
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const number = card.querySelector('.number').innerText;
            window.location.href = `tel:${number}`;
        });
    });
});