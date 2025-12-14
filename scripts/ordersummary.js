import {
  cart,
  removeFromCart,
  cartQuantity,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../data/cart.js";
import { cats } from "../data/cats.js";
import { renderPaymentSummary } from "./paymenySummary.js";
import { formatCurrency } from "./utils/money.js";

export function renderOrderSummary() {
  function renderCart() {
    let ordersummaryHTML = "";
    cart.forEach((item) => {
      const product = cats.find((cat) => cat.id === item.id);

      let html = `
        <div class="order">
          <div>
            <img src="${product.Image}" alt="" />
          </div>
          <div class="order-details">
            <div class="order-name">
              <p>${product.name}</p> 
            </div>
           <div class="quantity-block">
             <div>quantity: ${item.quantity}</div>
             <div><button data-product-id='${
               product.id
             }' class="increase js-increase">+</button></div>
             <div><button  data-product-id='${
               product.id
             }' class="decrease js-decrease">-</button></div>
            </div>
            <div class="order-quantity">
              <p>Ksh ${formatCurrency(product.price)}</p>
            </div>
            <div>
              <button
              data-id="${product.id}"
               class="remove-btn js-remove-btn"
>Remove from cart</button>
            </div>
          </div>
        </div>`;
      ordersummaryHTML += html;
    });
    document.querySelector(".js-order-summary").innerHTML = ordersummaryHTML;
  }

  renderCart();
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const catId = event.target.dataset.id;
    addToCart(catId);
    alert("added to cart");
    cartQuantity();
  }
});

document.addEventListener("click", (event) => {
  // Check if the clicked element has the remove button class
  if (event.target.classList.contains("js-remove-btn")) {
    const productId = event.target.dataset.id;
    removeFromCart(productId);
    renderOrderSummary();
    renderPaymentSummary();
    alert("Item removed from cart");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-increase")) {
    const productId = event.target.dataset.productId;
    increaseQuantity(productId);
    renderOrderSummary();
    renderPaymentSummary();
    console.log(productId);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-decrease")) {
    const productId = event.target.dataset.productId;
    console.log(productId);
    decreaseQuantity(productId);
    renderOrderSummary();
    renderPaymentSummary();
  }
});
