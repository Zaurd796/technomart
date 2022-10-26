let buyButtons = document.querySelectorAll(".catalog__items-button_top");
let orderPopup = document.querySelector(".order-popup");
let orderPopupClose = document.querySelector(".order-popup__close");

buyButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    orderPopup.classList.add("open");
  });
});

orderPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (orderPopup.classList.contains("open")) {
      orderPopup.classList.remove("open");
    }
  }
});

let cart = document.querySelector("#cart");
let orderPopupButton = orderPopup.querySelector(".order-popup__button_left");
let cartLink = document.querySelector("#cart-link");
let cartCounter = 1;

let bookmarkButton = document.querySelectorAll(
  ".catalog__items-button_bottom "
);
let bookmarkLink = document.querySelector("#bookmark-link");
let bookmark = bookmarkLink.querySelector("#bookmark");
let bookmarkCounter = 1;

orderPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart.textContent = cartCounter;
  cartCounter = cartCounter + 1;
  cartLink.style.backgroundColor = "#EE3643";
});

bookmarkButton.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmark.textContent = bookmarkCounter;
    bookmarkCounter = bookmarkCounter + 1;
    bookmarkLink.style.backgroundColor = "#EE3643";
  });
});

if (document.querySelector(".header__toggler")) {
  const toggler = document.querySelector(".header__toggler");
  const headerList = document.querySelector(".header__nav-list");

  toggler.addEventListener("click", function() {
    toggler.classList.toggle("open");
    if(headerList.classList.contains("open")) {
      headerList.classList.remove("open");
    } else {
      headerList.classList.add("open");
    }
  });
}
