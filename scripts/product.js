document.addEventListener('DOMContentLoaded', function () {
    const productImg = document.querySelector('.product img');

    // Toggle the 'clicked' class on click
    productImg.addEventListener('click', function () {
        this.classList.toggle('clicked');
    });
});