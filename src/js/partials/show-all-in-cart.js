import { showCartAmount, clearCart, deleteFromCart } from "./cart";
import { getInCart } from "./cart";
import { getItem } from "./requests";

const cartItemsList = document.getElementById("cart-items-list");

const deleteAllBtn = document.getElementById("delete-all-btn");

deleteAllBtn.addEventListener("click", () => {
  clearCart();
  showCartAmount();
});

export async function fillItemsList() {
  const inCart = getInCart();

  const items = [];
  for (const id of inCart) {
    const item = await getItem(id);
    items.push(item);
  }

  createCartCards(items);
}

function createCartCards(hits) {
  const items = [];

  for (const hit of hits) {
    const li = document.createElement("li");
    li.className = "cart-products-item";

    let dataProductId = `data-product-id="${hit._id}"`;

    li.innerHTML = `
      <div class="cart-product-img-container">
        <img class="cart-product-img" src="${hit.img}" alt="${hit.name}" />
      </div>
      <div class="properties-and-price-continer">
        <h3 class="product-title">${hit.name}</h3>

        <ul class="product-properties-list">
          <li class="product-properties-item">
            Category:
            <span class="property-value">${hit.category.replaceAll(
              "_",
              " "
            )}</span>
          </li>
          <li class="product-properties-item">
            Size: <span class="property-value">${hit.size}</span>
          </li>
          <li class="product-properties-item">
            Popularity: <span class="property-value">${hit.popularity}</span>
          </li>
        </ul>

        <span class="price">$${hit.price}</span>
      </div>
      <button class="delete-from-cart-btn" data-product-id="${dataProductId}">
        <svg class="delete-from-cart-svg">
          <use href="/images/svg/icons.svg#icon-close"></use>
        </svg>
      </button>
    `;

    items.push(li);
  }

  cartItemsList.innerHTML = "";
  cartItemsList.append(...items);

  const btns = document.querySelectorAll("button[data-product-id]");

  for (const btn of btns) {
    btn.addEventListener("click", toCartClick);
  }

  function toCartClick(evt) {
    const btn = evt.currentTarget;
    const id = btn.getAttribute("data-product-id");
    deleteFromCart(id);
    showCartAmount();
    btn.innerHTML = `
      <svg class="btn-svg product">
        <use href="/images/svg/icons.svg#icon-check"></use>
      </svg>
    `;
    btn.removeEventListener("click", toCartClick);
    btn.classList.add("stroke");
  }
}
