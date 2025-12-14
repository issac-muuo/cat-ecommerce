import { cats } from "./cats.js";
export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(catId) {
  const existing = cart.find((item) => item.id === catId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: catId,
      quantity: 1,
    });
  }
  saveCart();
}

export function removeFromCart(catId) {
  const index = cart.findIndex((item) => item.id === catId);
  // if the item id does not match catId -1 is retuned
  if (index !== -1) {
    cart.splice(index, 1);
    saveCart();

    console.log(`Removed item ${catId} from cart`);
  } else {
    console.log(`Item ${catId} not found in cart`);
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function cartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  console.log(cartQuantity);
  document.querySelector(".items").innerHTML=`checkout (${cartQuantity} items)`
}

cartQuantity();

function calculateTotal() {
  let total=0
    cart.forEach((item) => {
    const product = cats.find(cat => cat.id === item.id);
    if (product) {
      total += item.quantity * product.price;
    }
  });

  // let total = 0;
  // cart.forEach((item) => {
  //   total += item.quantity * item.price;
  // });
  console.log(total)
}
calculateTotal()

cart.forEach((catitem)=>{
  const cat = cats.find(cat => cat.id===catitem.id)
  console.log(cat)
})