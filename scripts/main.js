document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll(".fade-in");

    function fadeIn() {
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.add("fade-in-animation");
        });
    }

    setTimeout(fadeIn, 500);
});
document.addEventListener("scroll", function() {
    let scrolled = window.scrollY;
    let translateValue = "translateY(" + scrolled + "px)";
    document.querySelector(".back img").style.transform = translateValue;
});