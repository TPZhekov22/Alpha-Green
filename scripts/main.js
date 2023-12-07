document.addEventListener("DOMContentLoaded", function() {
    // Get all paragraphs with the class "fade-in"
    var paragraphs = document.querySelectorAll(".fade-in");

    // Function to add the fade-in animation class
    function fadeIn() {
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.add("fade-in-animation");
        });
    }

    // Trigger the fadeIn function after a short delay
    setTimeout(fadeIn, 500); // Adjust the delay as needed
});