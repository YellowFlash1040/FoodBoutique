import { showCartAmount, clearCart, deleteFromCart } from "./cart";
import { getInCart } from "./cart";
import { getItem } from "./requests";

import icons from "/images/svg/icons.svg";

const cartItemsList = document.getElementById("cart-items-list");

const deleteAllBtn = document.getElementById("delete-all-btn");

let totalPrice = 0;

deleteAllBtn.addEventListener("click", () => {
  clearCart();
  showCartAmount();
  fillItemsList();
  showTotalPrice();
});

function showTotalPrice() {
  const span = document.getElementById("sum-span");
  span.innerText = `$${String(totalPrice)}`;
}

export async function fillItemsList() {
  const inCart = getInCart();

  const items = [];
  for (const id of inCart) {
    const item = await getItem(id);
    items.push(item);
  }

  const nothingFound = document.getElementById("nothing-found-cart");
  const deleteAll = document.querySelector(".delete-all");
  const checkoutPanel = document.querySelector(".checkout-panel-container");
  const cartSect = document.querySelector(".cart-sect");
  if (items.length === 0) {
    cartSect.style.display = "block";
    deleteAll.style.display = "none";
    cartItemsList.style.display = "none";
    checkoutPanel.style.display = "none";
    nothingFound.style.display = "block";
    return;
  } else {
    cartSect.style.display = "flex";
    deleteAll.style.display = "flex";
    cartItemsList.style.display = "block";
    checkoutPanel.style.display = "block";
    nothingFound.style.display = "none";
  }

  createCartCards(items);
}

function createCartCards(hits) {
  const items = [];

  totalPrice = 0;
  for (const hit of hits) {
    totalPrice += hit.price;

    const li = document.createElement("li");
    li.className = "cart-products-item";

    let dataProductId = `data-product-id="${hit._id}"`;

    li.innerHTML = `
      <div class="cart-product-img-container">
        <img class="cart-product-img" src="${hit.img}" alt="${hit.name}" />
      </div>
      <div>
        <h3 class="product-title">${hit.name}</h3>
        <ul class="product-properties-list">
          <li class="product-properties-item">
            Category:
            <span class="property-value">${hit.category.replaceAll( "_", " " )}</span>
          </li>
          <li class="product-properties-item">
            Size: <span class="property-value">${hit.size}</span>
          </li>
        </ul>
      
        <span class="price">$${hit.price}</span>
      </div>
      <button class="delete-from-cart-btn" ${dataProductId}>
        <svg class="delete-from-cart-svg">
          <use href="${icons + "#icon-close"}"></use>
        </svg>
      </button>
    `;

    items.push(li);
  }

  cartItemsList.innerHTML = "";
  cartItemsList.append(...items);

  const btns = document.querySelectorAll("button[data-product-id]");

  for (const btn of btns) {
    btn.addEventListener("click", removeFromCart);
  }

  function removeFromCart(evt) {
    const btn = evt.currentTarget;
    const id = btn.getAttribute("data-product-id");
    deleteFromCart(id);
    showCartAmount();
    fillItemsList();
    showTotalPrice();
  }

  showTotalPrice();
}
