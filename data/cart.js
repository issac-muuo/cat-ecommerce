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
  saveCart()
}

export function removeFromCart(catId) {
  const index = cart.findIndex((item) => item.id === catId);
  // if the item id does not match catId -1 is retuned
  if (index !== -1) {
    cart.splice(index, 1);
    saveCart()

    console.log(`Removed item ${catId} from cart`);
  } else {
    console.log(`Item ${catId} not found in cart`);
  }
}

export function increaseQuantity(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += 1;
    saveCart()
  }
}
export function decreaseQuantity(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product.quantity > 1) {
    product.quantity -= 1;
    saveCart()
  } else {
    removeFromCart(productId);
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
  return cartQuantity;
}
