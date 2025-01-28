
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 3000);
});
