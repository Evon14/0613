document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.querySelector('.badge.bg-dark.text-white');
    const eatButton = document.querySelector('.btn.btn-outline-dark.flex-shrink-0');
    const inputQuantity = document.getElementById('inputQuantity');

    eatButton.addEventListener('click', function () {
        const quantity = parseInt(inputQuantity.value) || 1;
        let currentCount = parseInt(cartCount.innerText) || 0;
        currentCount += quantity;
        cartCount.innerText = currentCount;

        alert(`你吃了 ${quantity} 個回憶! 總共吃了 ${currentCount} 個🍡`);
    });
});
