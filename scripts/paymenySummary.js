import { cart,cartQuantity } from "../data/cart.js";
import { cats } from "../data/cats.js";
import { formatCurrency } from "./utils/money.js";
export function renderPaymentSummary() {
  let paymentSummaryHTML = "";
  let priceBeforeTax = 0;
  let itemsPrice = 0;
  const items=cartQuantity()
  cart.forEach((item) => {
    const product = cats.find((cat) => cat.id === item.id);

    itemsPrice += product.price * item.quantity;
  });

  let tax = 0;
  let total = 0;
  let shipping = 2000;
  priceBeforeTax = itemsPrice + shipping;
  tax = itemsPrice * 0.1;
  total = tax + itemsPrice;

  let html = `<div class="payment-summary">
        <div>
          <p class="heading">Order Summary</p>
        </div>
        <div class="items">
          <div>
            <p>items(${items})</p>
          </div>
          <div>Ksh ${formatCurrency(itemsPrice)}</div>
        </div>

        <div class="items">
          <div>
            <p>shipping & handling</p>
          </div>
          <div>Ksh ${formatCurrency(shipping)}</div>
        </div>

        <div class="items">
          <div>
            <p>Total before tax</p>
          </div>
          <div>Ksh ${formatCurrency(priceBeforeTax)}</div>
        </div>

        <div class="items">
          <div>
            <p>Estimated tax(10%)</p>
          </div>
          <div>Ksh ${formatCurrency(tax)}</div>
        </div>

        <div class="items">
          <div>
            <p>Order total</p>
          </div>
          <div>Ksh ${formatCurrency(total)}</div>
        </div>

        <div class="place-order">
          <button class="place-order-btn">place your order</button>
        </div>
      </div>`;
  paymentSummaryHTML = html;
  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}
