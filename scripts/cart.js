function all() {
    // To Get All Remove Buttons
    allRemoveButtons = document.getElementsByClassName('remove-btn');
    for (let i = 0; i < allRemoveButtons.length; i++) {
        let button = allRemoveButtons[i];
        button.addEventListener('click', itemRemove);
    }
    // To Get All Quantity Buttons
    let minusBtns = document.getElementsByClassName('minus');
    let plusBtns = document.getElementsByClassName('plus');
    for(let i = 0; i < minusBtns.length; i++) {
        let mBtn = minusBtns[i];
        let pBtn = plusBtns[i]
        mBtn.addEventListener('click', decreaseQuantity);
        pBtn.addEventListener('click', increaseQuantity);
    }
    // Check If Cart Is Empty
    if (localStorage.getItem("productOneTitle") === null && localStorage.getItem("productTwoTitle") === null &&
        localStorage.getItem("productThreeTitle") === null ) {
            textDisplayed = document.getElementsByClassName('cart-items')[0];
            textDisplayed.innerHTML = "Your Cart Is Empty Right Now";
            textDisplayed.style.cssText = "font-size: 40px; margin: 50px 0px;margin-right: 30%;text-align: center;color: #ddd;"
    }
    cartTotalPrice ()
    document.getElementsByClassName('buying')[0].addEventListener('click', checkoutBtn)
}
// Change Quantity Start
let quantityFields = document.getElementsByTagName("input");
function decreaseQuantity(event) {
    minusBtn = event.target;
    if (minusBtn.parentElement.parentElement.classList.contains("productOne")) {
        qtyField = minusBtn.nextElementSibling
        if (qtyField.value <= 1 || Number.isInteger(qtyField.value)) {
            qtyField.value = 1;
        } else {
            let currentValue = Number(qtyField.value) || 1;
            qtyField.value = currentValue - 1;
            localStorage.setItem("productOneQty", qtyField.value)
        }
    }
    if (minusBtn.parentElement.parentElement.classList.contains("productTwo")) {
        qtyField = minusBtn.nextElementSibling
        if (qtyField.value <= 1 || Number.isInteger(qtyField.value)) {
            qtyField.value = 1;
        } else {
            let currentValue = Number(qtyField.value) || 1;
            qtyField.value = currentValue - 1;
            localStorage.setItem("productTwoQty", qtyField.value)
        }
    }
    if (minusBtn.parentElement.parentElement.classList.contains("productThree")) {
        qtyField = minusBtn.nextElementSibling
        if (qtyField.value <= 1 || Number.isInteger(qtyField.value)) {
            qtyField.value = 1;
        } else {
            let currentValue = Number(qtyField.value) || 1;
            qtyField.value = currentValue - 1;
            localStorage.setItem("productThreeQty", qtyField.value)
        }
    }
    cartTotalPrice ()
    
}
function increaseQuantity(event) {
    plusBtn = event.target;
    if (plusBtn.parentElement.parentElement.classList.contains("productOne")) {
        let qtyField = plusBtn.previousElementSibling
        console.log(qtyField)
        let currentValue = Number(qtyField.value);
        qtyField.value = currentValue + 1;
        localStorage.setItem("productOneQty", qtyField.value)
    }
    if (plusBtn.parentElement.parentElement.classList.contains("productTwo")) {
        let qtyField = plusBtn.previousElementSibling
        let currentValue = Number(qtyField.value);
        qtyField.value = currentValue + 1;
        localStorage.setItem("productTwoQty", qtyField.value)
    }
    if (plusBtn.parentElement.parentElement.classList.contains("productThree")) {
        let qtyField = plusBtn.previousElementSibling
        let currentValue = Number(qtyField.value);
        qtyField.value = currentValue + 1;
        localStorage.setItem("productThreeQty", qtyField.value)
    }
    cartTotalPrice ()
    
}
// Change Quantity End
// Remove Item Start
function RemoveFromStorage (title, image, price, qty) {
    localStorage.removeItem(`${title}`);
    localStorage.removeItem(`${image}`);
    localStorage.removeItem(`${price}`);
    localStorage.removeItem(`${qty}`);
    location.reload();
}
function itemRemove(event) {
    removebtn = event.target;
    if (removebtn.parentElement.parentElement.classList.contains("productOne")) {
        removebtn.parentElement.parentElement.remove();
        RemoveFromStorage("productOneTitle", "productOneImage", "productOnePrice", "productOneQty");
    }
    if (removebtn.parentElement.parentElement.classList.contains("productTwo")) {
        removebtn.parentElement.parentElement.remove();
        RemoveFromStorage("productTwoTitle", "productTwoImage", "productTwoPrice", "productTwoQty");
    }
    if (removebtn.parentElement.parentElement.classList.contains("productThree")) {
        removebtn.parentElement.parentElement.remove();
        RemoveFromStorage("productThreeTitle", "productThreeImage", "productThreePrice", "productThreeQty");
    }
    cartTotalPrice () 
}
// Remove Item End
// Products Start
    let titleOne = localStorage.getItem('productOneTitle');
    let productOneQty = localStorage.getItem("productOneQty");
    let titleTwo = localStorage.getItem('productTwoTitle');
    let productTwoQty = localStorage.getItem("productTwoQty");
    let titleThree = localStorage.getItem('productThreeTitle');
    let productThreeQty = localStorage.getItem("productThreeQty");
products = [
    {
        image: "b2.jpg",
        price: 59.99,
        title: "شهداء الصحابة",
    },
    {
        image: "m3aya.jpg",
        price: 49.99,
        title: "كان لك معايا"
    },
    {
        image: "ward.jpg",
        price: 79.99,
        title: "ورد اسود"
    }
]
if (titleOne === "شهداء الصحابة") {
    addToCartItem(products[0].image, products[0].price, products[0].title, "productOne", productOneQty);
}
if (titleTwo === "كان لك معايا") {
    addToCartItem(products[1].image, products[1].price, products[1].title, "productTwo", productTwoQty);
}
if (titleThree === "ورد اسود") {
    addToCartItem(products[2].image, products[2].price, products[2].title, "productThree", productThreeQty);
}
// Products End
// Add To Cart Item Start
function addToCartItem (image, price, title, claseName, productQty) {
    let itemRow = document.createElement('div');
    itemRow.classList.add('item-row');
    itemRow.classList.add(`${claseName}`);
    let product = document.getElementsByClassName('cart-items')[0]; 
    itemRowContent = `
        <div class="col">
            <img src="${image}" alt="" class="item-image" width="100" height="100">
            <p class="item-title">${title}</p>
        </div>
        <span class="col cart-price text">${price} EGP</span>
        <div class="col text item-quantity">
            <button class="minus">−</button>
            <input type="number" value="${productQty}" class="input" min="1" readonly>
            <button class="plus">+</button>
        </div>
        <div class="col text item-total">
            <button class="remove-btn">Remove</button>
        </div>
        `
    itemRow.innerHTML = itemRowContent;
    product.appendChild(itemRow);
    itemRow.getElementsByClassName("remove-btn")[0].addEventListener('click', itemRemove);
    itemRow.getElementsByClassName("minus")[0].addEventListener('click', decreaseQuantity);
    itemRow.getElementsByClassName("plus")[0].addEventListener('click', increaseQuantity);
}
// Add To Cart Item End
// Cart Total Price Start
function cartTotalPrice () {
    let total = 0;
    if (localStorage.getItem("productOneTitle") === "شهداء الصحابة") {
        let itemPrice = parseFloat(localStorage.getItem("productOnePrice"))
        let elementQty = localStorage.getItem("productOneQty");
        total += itemPrice * elementQty;
    }
    if (localStorage.getItem("productTwoTitle") === "كان لك معايا") {
        let itemPrice = parseFloat(localStorage.getItem("productTwoPrice"))
        let elementQty = localStorage.getItem("productTwoQty");
        total += itemPrice * elementQty;
    }
    if (localStorage.getItem("productThreeTitle") === "ورد اسود") {
        let itemPrice = parseFloat(localStorage.getItem("productThreePrice"))
        let elementQty = localStorage.getItem("productThreeQty");
        total += itemPrice * elementQty;
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerHTML = total + " EGP";
}
// Cart Total Price End
// Checkout Button Start
function checkoutBtn (event) {
    if (titleOne !== "شهداء الصحابة" && titleTwo !== "كان لك معايا" && titleThree !== "ورد اسود") {
        event.preventDefault();
        alert('The Cart Is Empty Please Add Item To Cart');
    } else {
        location.href = 'buyingpage.html';
    }
}
// Checkout Button End
all()
