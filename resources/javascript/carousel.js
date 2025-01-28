const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
let scrollPosition = 0;

carousel.append(...Array.from(images).map(img => img.cloneNode(true)));

function scrollCarousel() {
    scrollPosition -= 1;
    if (Math.abs(scrollPosition) >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
    }
    carousel.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(scrollCarousel);
}

scrollCarousel();
