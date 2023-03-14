// --- NAVBAR ---

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-nav');
const cartBtn = document.querySelector('.cartBtn');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('is-active');
});

cartBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    mobileMenu.classList.toggle('is-active');
});

// --- NAVBAR ---

// --- SLIDE --- 

var btnS = document.getElementsByClassName("btnS");
var slide = document.getElementById("slide");

btnS[0].onclick = function () {
    slide.style.transform = "translateX(0px)";
    for (i = 0; i < 3; i++) {
        btnS[i].classList.remove("active");
    }
    this.classList.add("active");
}
btnS[1].onclick = function () {
    slide.style.transform = "translateX(-800px)";
    for (i = 0; i < 3; i++) {
        btnS[i].classList.remove("active");
    }
    this.classList.add("active");
}
btnS[2].onclick = function () {
    slide.style.transform = "translateX(-1600px)";
    for (i = 0; i < 3; i++) {
        btnS[i].classList.remove("active");
    }
    this.classList.add("active");
}

// --- SLIDE --- 

// --- Cart ---

"use strict";
let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector(".cart");
const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');

addtocartbtnDom.forEach(addtocartbtnDom => {
    addtocartbtnDom.addEventListener("click", () => {
        const productDom = addtocartbtnDom.parentNode.parentNode.parentNode;
        const product = {
            img: productDom.querySelector(".product-img").getAttribute("src"),
            name: productDom.querySelector(".product-name").innerText,
            price: productDom.querySelector(".product-price").innerText,
            quantity: 1
        };

        const IsinCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
        if (IsinCart === false) {
            cartDom.insertAdjacentHTML("beforeend", `
  <div class="product cart-items">
    <div class="cart-img">
        <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="">
        <p class="cart_item_name">${product.name}</p>
    </div>
    <div class="">
        <p class="cart_item_price">${product.price}</p>
    </div>
    <div class="">
        <button class="btn" type="button" data-action="increase-item">&plus;
    </div>
    <div class="">
      <p class="cart_item_quantity">${product.quantity}</p>
    </div>
    <div class="">
      <button class="btn" type="button" data-action="decrease-item">&minus;
    </div>
    <div class="">
      <button class="btn" type="button" data-action="remove-item">&times;
    </div>
  </div> `);

            if (document.querySelector('.cart-footer') === null) {
                cartDom.insertAdjacentHTML("afterend", `
      <div class="cart-footer">
        <div class="">
          <button class="btn" type="button" data-action="clear-cart">Clear Cart
        </div>
        <div class="">
          <button class="btn" type="button" data-action="check-out">Pay <span class="pay">" "</span> 
            &#10137;
        </div>
      </div>`);
            }

            addtocartbtnDom.innerText = "In cart";
            addtocartbtnDom.disabled = true;
            cart.push(product);

            const cartItemsDom = cartDom.querySelectorAll(".cart-items");
            cartItemsDom.forEach(cartItemDom => {

                if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {

                    cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText)
                        * parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
                    document.querySelector('.pay').innerText = cartTotal + " $";

                    // increase item in cart
                    cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            if (cartItem.name === product.name) {
                                cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
                                cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                                    parseInt(cartItem.price) + " $";
                                cartTotal += parseInt(cartItem.price)
                                document.querySelector('.pay').innerText = cartTotal + " $";
                            }
                        });
                    });

                    // decrease item in cart
                    cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            if (cartItem.name === product.name) {
                                if (cartItem.quantity > 1) {
                                    cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
                                    cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                                        parseInt(cartItem.price) + " $";
                                    cartTotal -= parseInt(cartItem.price)
                                    document.querySelector('.pay').innerText = cartTotal + " $";
                                }
                            }
                        });
                    });

                    // remove item from cart
                    cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            if (cartItem.name === product.name) {
                                cartTotal -= parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
                                document.querySelector('.pay').innerText = cartTotal + " $";
                                cartItemDom.remove();
                                cart = cart.filter(cartItem => cartItem.name !== product.name);
                                addtocartbtnDom.innerText = "Add to cart";
                                addtocartbtnDom.disabled = false;
                            }
                            if (cart.length < 1) {
                                document.querySelector('.cart-footer').remove();
                            }
                        });
                    });

                    // clear cart
                    document.querySelector('[data-action="clear-cart"]').addEventListener("click", () => {
                        cartItemDom.remove();
                        cart = [];
                        cartTotal = 0;
                        if (document.querySelector('.cart-footer') !== null) {
                            document.querySelector('.cart-footer').remove();
                        }
                        addtocartbtnDom.innerText = "Add to cart";
                        addtocartbtnDom.disabled = false;
                    });

                   
                }
            });
        }
    });
});



// --- Cart ---