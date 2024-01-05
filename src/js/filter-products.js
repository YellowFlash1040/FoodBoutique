import axios from "axios";

// Filters Section
const form = document.getElementById("filters-form");
const keywordInput = form.elements.keyword;
const categorySelect = form.elements.category;
// const priceAndPopularitySelect = form.elements.priceAndPopularity;

// Products List Section
const products = document.getElementById("products");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const nothingFound = document.getElementById("nothing-found");

// AXIOS
axios.defaults.baseURL = "https://food-boutique.b.goit.study/api/";

let totalPages = null;

await fillCategories();

const filters = getFilters();
if (!filters) {
  const filters = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
  };
  setFilters(filters);
} else {
  keywordInput.value = filters.keyword;

  for (let i = 0; i < categorySelect.options.length; i++) {
    if (categorySelect.options[i].value === filters.category) {
      categorySelect.options[i].selected = true;
      break;
    }
  }
}

await fillProductsList();

// Fills products list
async function fillProductsList() {
  const hits = await searchProducts(getFilters());

  if (hits.length > 0) {
    hideNothingFound();
    createCardsForProductsList(hits);
  } else showNothingFound();
}

async function fillCategories() {
  const categories = await getCategories();
  createCategories(categories);
}

async function getCategories() {
  const res = await axios.get("products/categories");
  return res.data;
}

function createCategories(categories) {
  const options = [];

  for (const category of categories) {
    const option = document.createElement("option");
    option.className = "categories-option";
    option.value = category;
    option.innerHTML = category.replaceAll("_", " ");
    options.push(option);
  }

  categorySelect.append(...options);
  categorySelect.innerHTML += `
    <option class="categories-option" value="">Show all</option>
  `;
}

async function searchProducts(filters) {
  const res = await axios.get("products", {
    params: filters,
  });
  totalPages = res.data.totalPages;
  const hits = res.data.results;
  return hits;
}

function createCardsForProductsList(hits) {
  const items = [];

  for (const hit of hits) {
    const li = document.createElement("li");
    li.className = "products-item";
    li.innerHTML = `
      <img class="prodact-img" src="${hit.img}" alt="${hit.name}" />
      <h3 class="product-title">${hit.name}</h3>
      <ul class="product-properties-list">
        <li class="product-properties-item">
          Category: <span class="property-value">${hit.category}</span>
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
        <button class="cart-btn" href="./">
          <svg class="cart-logo product">
            <use href="/images/svg/icons.svg#icon-shopping-cart"></use>
          </svg>
        </button>
      </div>
    `;

    items.push(li);
  }

  products.innerHTML = "";
  products.append(...items);
}

// submit
form.addEventListener("submit", handleForm);
// change
form.addEventListener("input", handleForm);

async function handleForm(evt) {
  evt.preventDefault();

  const keyword = keywordInput.value.trim();
  const category = categorySelect.value;

  setFilters({ ...getFilters(), keyword, category, page: 1 });

  fillProductsList();
}

function setFilters(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}

function getFilters() {
  return JSON.parse(localStorage.getItem("filters"));
}

previousBtn.addEventListener("click", goToPreviousPage);
nextBtn.addEventListener("click", goToNextPage);

function goToPreviousPage() {
  const currentFilters = getFilters();

  if (currentFilters.page <= 1) return;

  currentFilters.page--;
  setFilters(currentFilters);

  fillProductsList();
}

function goToNextPage() {
  const currentFilters = getFilters();

  const counter = totalPages - currentFilters.page;
  if (counter === 0) return;

  currentFilters.page++;
  setFilters(currentFilters);

  fillProductsList();
}

function hideNothingFound() {
  nothingFound.classList.add("display-none");

  previousBtn.classList.remove("display-none");
  nextBtn.classList.remove("display-none");
}

function showNothingFound() {
  products.innerHTML = "";

  nothingFound.classList.remove("display-none");

  previousBtn.classList.add("display-none");
  nextBtn.classList.add("display-none");
}
