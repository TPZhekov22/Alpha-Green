document.addEventListener('DOMContentLoaded', function () {
    // Add fade-in animation to product details
    const productDetails = document.querySelector('.product-details');
    productDetails.classList.add('fade-in-animation');

    // Add hover effect to the buy button
    const buyButton = document.querySelector('.buy-button');
    buyButton.addEventListener('mouseover', function () {
        buyButton.style.backgroundColor = '#45a049';
    });
    buyButton.addEventListener('mouseout', function () {
        buyButton.style.backgroundColor = '#4CAF50';
    });
});