document.querySelectorAll('.faq-item h3').forEach((faqHeader) => {
    faqHeader.addEventListener('click', () => {
        const faqAnswer = faqHeader.nextElementSibling;
        faqHeader.parentElement.classList.toggle('active');
        if (faqAnswer.style.maxHeight) {
            faqAnswer.style.maxHeight = null;
            faqHeader.style.backgroundColor = '';
            faqHeader.style.color = '';
            faqAnswer.style.backgroundColor = '';
            faqAnswer.style.color = '';
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            faqHeader.style.backgroundColor = '#00ffff';
            faqHeader.style.color = '#0c003d';
            faqAnswer.style.backgroundColor = '#00ffff';
            faqAnswer.style.color = '#0c003d';
        }
        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqHeader.parentElement) {
                const otherAnswer = item.querySelector('.faq-answer');
                const otherHeader = item.querySelector('h3');
                otherAnswer.style.maxHeight = null;
                item.classList.remove('active');
                otherHeader.style.backgroundColor = '';
                otherHeader.style.color = '';
                otherAnswer.style.backgroundColor = '';
                otherAnswer.style.color = '';
            }
        });
    });
});
