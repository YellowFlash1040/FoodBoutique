import axios from "axios";

const form = document.getElementById("filters-form");
const searchQuery = form.elements.searchQuery;
const categorySelect = form.elements.category;
// const priceAndPopularitySelect = form.elements.priceAndPopularity;

const products = document.getElementById("products");

axios.defaults.baseURL = "https://food-boutique.b.goit.study/api/";

if (!getFilters()) {
  const filters = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
  };
  setFilters(filters);
}

function setFilters(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}

function getFilters() {
  return JSON.parse(localStorage.getItem("filters"));
}

// submit
form.addEventListener("submit", search);
//input
form.addEventListener("change", search);

async function search(evt) {
  evt.preventDefault();

  const query = searchQuery.value.trim();
  const category = categorySelect.value;
  
  const currentFilters = getFilters();
  
  const filters = {
    ...currentFilters,
    keyword: query,
    category,
  };
  setFilters(filters);
  
  const res = await axios.get("products", {
    params: filters
  });
  
  const hits = res.data.results;
  createCards(hits);
}

function createCards(hits) {
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
        <a class="cart-link" href="./">
          <svg class="cart-logo product">
            <use href="/images/svg/icons.svg#icon-shopping-cart"></use>
          </svg>
        </a>
      </div>
    `;

    items.push(li);
  }

  products.innerHTML = "";
  products.append(...items);
}
