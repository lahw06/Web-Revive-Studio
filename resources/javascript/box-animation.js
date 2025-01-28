const services = document.querySelectorAll('.what-we-do, .service, .work-item, .work-text');

const revealOnScroll = () => {
    services.forEach((service, index) => {
        const rect = service.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (service.closest('.row')?.classList.contains('row:nth-of-type(2)')) {
                service.style.animationDelay = `2s`;
            } else {
                service.style.animationDelay = `${index * 0.2}s`;
            }
            service.classList.add('visible');
        }
    });
};
const services1 = document.querySelectorAll('.service1');

const revealOnScrollService1 = () => {
    services1.forEach((service1, index) => {
        const rect = service1.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            service1.style.animationDelay = `${index * 0.2}s`;
            service1.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScrollService1);
revealOnScrollService1();


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


document.querySelectorAll('.step, .arrow').forEach((element, index) => {
    const delayMap = {
        0: 0, 
        1: 4,  
        2: 5,  
        3: 6,  
        4: 7,  
        5: 8,  
        6: 9, 
        7: 10, 
        8: 11  
    };
    const delay = delayMap[index] || 0;
    element.style.animation = `slideInRight 1s ease-out ${delay}s forwards`;
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.web-design-intro, .why-choose-us');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 300);
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
});
