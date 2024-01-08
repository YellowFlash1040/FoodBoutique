if (!getInCart()) setInCart();

export function getInCart() {
  return JSON.parse(localStorage.getItem("in-cart"));
}

export function setInCart(inCart = []) {
  localStorage.setItem("in-cart", JSON.stringify(inCart));
}

export function addToCart(id) {
  const inCart = getInCart();
  if (!inCart.includes(id)) setInCart([...inCart, id]);
}

export function clearCart() {
  setInCart([]);
}

export function deleteFromCart(id) {
  const inCart = getInCart();
  setInCart(inCart.filter(itemId => itemId !== id));
}

export function showCartAmount() {
  const quantitySpan = document.getElementById("cart-quantity");
  if (quantitySpan) quantitySpan.innerText = `cart (${getInCart().length})`;

  const quantityTitle = document.getElementById("cart-quantity-title");
  if (quantityTitle) quantityTitle.innerText = `cart (${getInCart().length})`;
}
