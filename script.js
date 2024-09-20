document.addEventListener("DOMContentLoaded", function() {
    const letter = document.querySelector("p");
    letter.style.opacity = 0;
    letter.style.transition = "opacity 2s";
    setTimeout(() => {
        letter.style.opacity = 1;
    }, 1000); // Fades in after 1 second
});
