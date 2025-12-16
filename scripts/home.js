import { cats } from "../data/cats.js";
import { formatCurrency } from "./utils/money.js";
import { cartQuantity, addToCart, isInCart} from "../data/cart.js";

let filteredCats = [...cats];
renderCats(filteredCats);
cartQuantity();
const searchInput = document.querySelector(".js-search");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();

  filteredCats = cats.filter((cat) => {
    return cat.name.toLowerCase().includes(keyword);
  });

  renderCats(filteredCats);
});

function renderCats(catsToRender) {
  let catsHTML = "";
  catsToRender.forEach((cat) => {
    let breed = cat.name;
    let image = cat.Image;
    let price = cat.price;
    let stars = cat.rating.stars;
    let rate = cat.rating.rates;

    const inCart = isInCart(cat.id);
    let html = `
    <div class="cat-box">
        <div>
          <img src="${image}" alt="" />
        </div>
        <div class="cat-info">
          <div>
            <p>${breed}</p>
          </div>
        
          <div class="ratio">
            <div>
              <img class="rating" src="images/rating/rating-${
                stars * 10
              }.png" alt="">
            </div>
            <div class="rate">
              ${rate}
            </div>
          </div>
          <div class="price">
              Ksh ${formatCurrency(price)}
          </div>
          <div>
             <button class="breed-btn 
             add-to-cart"
             data-id="${cat.id}"
             >
             ${inCart ? "in cart" : "get breed"}
             </button>
          </div>
        </div>
      </div>`;
    catsHTML += html;

    const container = document.querySelector(".js-cart-quantity-tag");
    if (container) {
      container.textContent = cartQuantity();
    }
  });
  document.querySelector(".js-cat-summary").innerHTML = catsHTML;
}

// Event delegation for dynamically created buttons
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const catId = event.target.dataset.id;
    addToCart(catId);

    renderCats(filteredCats);
    alert("Added to cart");
  }
});
