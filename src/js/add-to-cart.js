if (!getInCart()) setInCart();

export function getInCart() {
  return JSON.parse(localStorage.getItem("in-cart"));
}

export function setInCart(inCart = []) {
  localStorage.setItem("in-cart", JSON.stringify(inCart));
}

export function addToCart(id) {
  setInCart([...getInCart(), id]);
}
