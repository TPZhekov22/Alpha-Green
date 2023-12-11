document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll(".fade-in");

    function fadeIn() {
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.add("fade-in-animation");
        });
    }

    setTimeout(fadeIn, 500);
});