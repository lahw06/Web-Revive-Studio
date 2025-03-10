document.addEventListener("DOMContentLoaded", function () {
    const skillBoxes = document.querySelectorAll(".skill-box");

    function checkVisibility() {
        skillBoxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxPosition < windowHeight - 50) {
                box.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});
