import { cart, removeFromCart, cartQuantity } from "../data/cart.js";
import { cats } from "../data/cats.js";

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
            <div class="age">
               <p>${product.age}</p>
            </div>
            <div class="order-quantity">
              <p>Quantity:${item.quantity}</p>
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
    cartQuantity();
    document.querySelector(".js-order-summary").innerHTML = ordersummaryHTML;
  }
  renderCart();

  document.addEventListener("click", (event) => {
    // Check if the clicked element has the remove button class
    if (event.target.classList.contains("js-remove-btn")) {
      const productId = event.target.dataset.id;
      removeFromCart(productId);
      renderCart();
      alert("Item removed from cart");
    }
  });

  document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const catId = event.target.dataset.id;
    addToCart(catId);
    alert("added to cart");
    cartQuantity()
  }
});

}
