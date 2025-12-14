import { cats } from "../data/cats.js";

renderCats();
function renderCats() {
  let catsHTML = "";
  cats.forEach((cat) => {
    let breed = cat.name;
    let image = cat.Image;
    let price = cat.price;
    let stars = cat.rating.stars;
    let rate = cat.rating.rates;
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
             ${price} Ksh
          </div>
          <div>
             <button class="breed-btn 
             add-to-cart"
             data-id="${cat.id}">Get breed</button>
          </div>
        </div>
      </div>`;
    catsHTML += html;
  });
  document.querySelector(".js-cat-summary").innerHTML = catsHTML;
}
