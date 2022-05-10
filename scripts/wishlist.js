function all() {
    // To Get All Remove Buttons
    allRemoveButtons = document.getElementsByClassName('remove-btn');
    for (let i = 0; i < allRemoveButtons.length; i++) {
        let button = allRemoveButtons[i];
        button.addEventListener('click', itemRemove);
    }
    document.getElementsByClassName('clear-btn')[0].addEventListener('click', clearBtn);
    // If Cart Is Empty     
    if (localStorage.getItem("bookOneTitle") === null && localStorage.getItem("bookTwoTitle") === null &&
        localStorage.getItem("bookThreeTitle") === null ) {
            textDisplayed = document.getElementsByClassName('wishlist-items')[0];
            textDisplayed.innerHTML = "Your Wishlist Is Empty Right Now";
            textDisplayed.style.cssText = "font-size: 40px; margin: 30px 0 30px -40px;text-align: center;color: #444;"
    }
}
// Remove Item Start
function removeFromStorage (title, image, price) {
    localStorage.removeItem(`${title}`);
    localStorage.removeItem(`${image}`);
    localStorage.removeItem(`${price}`);
    location.reload();
}
function itemRemove(event) {
    removebtn = event.target;
    if (removebtn.parentElement.parentElement.classList.contains("productOne")) {
        removebtn.parentElement.parentElement.remove();
        removeFromStorage("bookOneTitle", "bookOneImage", "bookOnePrice");
    }
    if (removebtn.parentElement.parentElement.classList.contains("productTwo")) {
        removebtn.parentElement.parentElement.remove();
        console.log(removebtn.parentElement.parentElement.classList.contains("productTwo"));
        removeFromStorage("bookTwoTitle", "bookTwoImage", "bookTwoPrice");
    }
    if (removebtn.parentElement.parentElement.classList.contains("productThree")) {
        removebtn.parentElement.parentElement.remove();
        removeFromStorage("bookThreeTitle", "bookThreeImage", "bookThreePrice");
    }
}
// Remove Item End
// Products Start
let titleOne = localStorage.getItem('bookOneTitle');
let titleTwo = localStorage.getItem('bookTwoTitle');
let titleThree = localStorage.getItem('bookThreeTitle');
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
    addToFavItem(products[0].image, products[0].price, products[0].title, "productOne");
}
if (titleTwo === "كان لك معايا") {
    addToFavItem(products[1].image, products[1].price, products[1].title, "productTwo");
}
if (titleThree === "ورد اسود") {
    addToFavItem(products[2].image, products[2].price, products[2].title, "productThree");
}
// Products End
// Add To Cart Item Start
function addToFavItem (image, price, title, claseName) {
    let itemRow = document.createElement('div');
    itemRow.classList.add('item-row');
    itemRow.classList.add(`${claseName}`);
    let product = document.getElementsByClassName('wishlist-items')[0]; 
    itemRowContent = `
        <div class="col">
            <img src="${image}" alt="" class="item-image" width="100" height="100">
            <p class="item-title">${title}</p>
        </div>
        <span class="col cart-price text">${price} EGP</span>
        <div class="col text item-total">
            <button class="remove-btn">
                <i class="fa fa-trash"></i>
                Delete
            </button>
        </div>
        `
    itemRow.innerHTML = itemRowContent;
    product.appendChild(itemRow);
    itemRow.getElementsByClassName("remove-btn")[0].addEventListener('click', itemRemove);
}
// Add To Cart Item End
// Clear Button Start
function clearBtn () {
    localStorage.removeItem("bookOneTitle");
    localStorage.removeItem("bookOneImage");
    localStorage.removeItem("bookOnePrice");
    localStorage.removeItem("bookTwoTitle");
    localStorage.removeItem("bookTwoImage");
    localStorage.removeItem("bookTwoPrice");
    localStorage.removeItem("bookThreeTitle");
    localStorage.removeItem("bookThreeImage");
    localStorage.removeItem("bookThreePrice");
    location.reload();
}
// Clear Button End
all()
