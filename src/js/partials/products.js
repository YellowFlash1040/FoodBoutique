import axios from "axios";

import {
  keywordInput,
  productsList,
  pagesPanel,
  previousBtn,
  nextBtn,
  nothingFound,
  quantitySpan
} from "./elements";
import { getFilters, setFilters } from "./filters";
import { getInCart } from "./cart";
import {
  disableNextBtn,
  disablePreviousBtn,
  enableNextBtn,
  enablePreviousBtn,
  getTotalPages,
  setTotalPages,
} from "./pages";
import { fillPagesList } from "./pages";
import { addToCart } from "./cart";

export async function fillProductsList() {
  const filters = getFilters();
  const hits = await searchProducts(filters);

  // If nothing is found show nothing found div
  if (hits.length > 0) {
    hideNothingFound();
    createCardsForProductsList(hits);
  } else showNothingFound();

  // change buttons state depending on the opened page
  if (filters.page === 1) disablePreviousBtn();
  else enablePreviousBtn();
  if (filters.page === getTotalPages()) disableNextBtn();
  else enableNextBtn();

  // fill pages list if there's more than one page
  if (getTotalPages() <= 1) pagesPanel.classList.add("display-none");
  else {
    pagesPanel.classList.remove("display-none");
    fillPagesList(filters);
  }
}

async function searchProducts(filters) {
  const res = await axios.get("products", {
    params: filters,
  });
  setTotalPages(res.data.totalPages);
  const hits = res.data.results;
  return hits;
}

function hideNothingFound() {
  nothingFound.classList.add("display-none");

  previousBtn.classList.remove("display-none");
  nextBtn.classList.remove("display-none");
}

function showNothingFound() {
  productsList.innerHTML = "";

  nothingFound.classList.remove("display-none");

  previousBtn.classList.add("display-none");
  nextBtn.classList.add("display-none");
}

export function getAndShowProducts() {
  const keyword = keywordInput.value.trim();

  setFilters({ ...getFilters(), keyword, page: 1 });

  fillProductsList();
}

function createCardsForProductsList(hits) {
  const items = [];

  for (const hit of hits) {
    const li = document.createElement("li");
    li.className = "products-item";

    let dataProductId = `data-product-id="${hit._id}"`;
    let svgUrl = "/images/svg/icons.svg#icon-shopping-cart";

    if (getInCart().includes(hit._id)) {
      dataProductId = "";
      svgUrl = "/images/svg/icons.svg#icon-check";
    }

    li.innerHTML = `
      <div class="card-img-container">
        <img class="prodact-img" src="${hit.img}" alt="${hit.name}" />
      </div>
      <h3 class="product-title">${hit.name}</h3>
      <div class="properties-and-price-continer">
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

        <div class="price-and-buy-btn">
          <span class="price">$${hit.price}</span>
          <button class="circle-btn cart-btn product" type="button" ${dataProductId}>
            <svg class="btn-svg product">
              <use href="${svgUrl}"></use>
            </svg>
          </button>
        </div>
      </div>
    `;

    items.push(li);
  }

  productsList.innerHTML = "";
  productsList.append(...items);

  const btns = document.querySelectorAll("button[data-product-id]");

  for (const btn of btns) {
    btn.addEventListener("click", toCartClick);
  }

  function toCartClick(evt) {
    const btn = evt.currentTarget;
    const id = btn.getAttribute("data-product-id");
    addToCart(id);
    showCartAmount();
    btn.innerHTML = `
      <svg class="btn-svg product">
        <use href="/images/svg/icons.svg#icon-check"></use>
      </svg>
    `;
    btn.removeEventListener("click", toCartClick);
  }
}

export function showCartAmount() {
  quantitySpan.innerText = `cart (${getInCart().length})`;
}
