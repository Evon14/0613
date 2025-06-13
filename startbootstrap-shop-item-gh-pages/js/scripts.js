/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.querySelector('.badge.bg-dark.text-white');
    const eatButton = document.querySelector('.btn.btn-outline-dark.flex-shrink-0');
    const inputQuantity = document.getElementById('inputQuantity');

    eatButton.addEventListener('click', function () {
        const quantity = parseInt(inputQuantity.value) || 1;
        let currentCount = parseInt(cartCount.innerText) || 0;
        currentCount += quantity;
        cartCount.innerText = currentCount;

        alert(`你吃了 ${quantity} 個小孩!! 現在總共吃了 ${currentCount} 個!!!!齁!!!!!`);
    });
});
