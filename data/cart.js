export let cart = JSON.parse(localStorage.getItem("cart"))||[];

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
  console.log(cart);
}

export function removeFromCart(catId) {
  // Find the index of the item to remove
  const index = cart.findIndex((item) => item.id === catId);
  
  if (index !== -1) {
    // Remove the item from the cart array
    cart.splice(index, 1);
    saveCart();
  
    console.log(`Removed item ${catId} from cart`);
  } else {
    console.log(`Item ${catId} not found in cart`);
  }
}

function saveCart(){
  localStorage.setItem("cart",JSON.stringify(cart))
}


