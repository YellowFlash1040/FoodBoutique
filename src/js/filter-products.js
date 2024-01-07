import axios from "axios";

// Filters Section
const form = document.getElementById("filters-form");
const keywordInput = form.elements.keyword;
const categorySelect = form.elements.category;
const categoriesList = document.getElementById("categories");

// Products List Section
const productsList = document.getElementById("products");
const pagesPanel = document.getElementById("pages-panel");
const toTheStartBtn = document.getElementById("to-the-start");
const previousBtn = document.getElementById("previous");
const pagesList = document.getElementById("pages-list");
const nextBtn = document.getElementById("next");
const toTheEnd = document.getElementById("to-the-end");
const nothingFound = document.getElementById("nothing-found");

// AXIOS
axios.defaults.baseURL = "https://food-boutique.b.goit.study/api/";

let totalPages = null;
let pagesMax = null;
let firstPage = 1;

let timerId = null;

// Start application
await start();

async function start() {
  await fillCategories();

  // Set default filters or restore filters
  const filters = getFilters();
  if (!filters) {
    setFilters({
      keyword: null,
      category: null,
      page: 1,
      limit: 6,
    });
  } else {
    keywordInput.value = filters.keyword;
  }

  // first products for the first time
  setParamsBasedOnScreenSize();

  window.addEventListener("resize", onResize);
}

// Fills products list
async function fillProductsList() {
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
  if (filters.page === totalPages) disableNextBtn();
  else enableNextBtn();

  // fill pages list if there's more than one page
  if (totalPages <= 1) pagesPanel.classList.add("display-none");
  else {
    pagesPanel.classList.remove("display-none");
    fillPagesList(filters);
  }
}

// fill pages list
function fillPagesList(filters) {
  const numbers = [];

  const btnsAmount = Math.min(totalPages, pagesMax);

  // If selected index is grater than last button change first page
  const indexOfLastButton = btnsAmount + firstPage - 1;
  const distanceBetweenLastBtnAndSelectedIndex =
    filters.page - indexOfLastButton;
  if (distanceBetweenLastBtnAndSelectedIndex > 0)
    firstPage += distanceBetweenLastBtnAndSelectedIndex;

  for (let i = firstPage; i < btnsAmount + firstPage; i++) {
    const li = document.createElement("li");
    li.className = "pages-item";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
      "circle-btn number-btn " + (filters.page === i ? "current" : "");
    btn.innerHTML = i;
    btn.addEventListener("click", goToPage);

    function goToPage() {
      setFilters({ ...filters, page: i });
      fillProductsList();
    }

    li.appendChild(btn);

    numbers.push(li);
  }

  pagesList.innerHTML = "";
  pagesList.append(...numbers);
}

function disablePreviousBtn() {
  toTheStartBtn.classList.add("disabled");
  previousBtn.classList.add("disabled");
  previousBtn.removeEventListener("click", goToPreviousPage);
  toTheStartBtn.removeEventListener("click", goToFirstPage);
}

function enablePreviousBtn() {
  toTheStartBtn.classList.remove("disabled");
  previousBtn.classList.remove("disabled");
  previousBtn.addEventListener("click", goToPreviousPage);
  toTheStartBtn.addEventListener("click", goToFirstPage);
}

function disableNextBtn() {
  toTheEnd.classList.add("disabled");
  nextBtn.classList.add("disabled");
  nextBtn.removeEventListener("click", goToNextPage);
  toTheEnd.removeEventListener("click", goToLastPage);
}

function enableNextBtn() {
  toTheEnd.classList.remove("disabled");
  nextBtn.classList.remove("disabled");
  nextBtn.addEventListener("click", goToNextPage);
  toTheEnd.addEventListener("click", goToLastPage);
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
    const li = document.createElement("li");
    li.className = "categories-item";
    // li.data
    li.value = category;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "categories-btn";
    btn.setAttribute("data-value", category);
    btn.innerText = category.replaceAll("_", " ");

    li.appendChild(btn);

    options.push(li);
  }

  categoriesList.append(...options);

  categoriesList.innerHTML += `
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
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
          <button class="circle-btn cart-btn product" href="./">
            <svg class="btn-svg product">
              <use href="/images/svg/icons.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </div>
      </div>
    `;

    items.push(li);
  }

  productsList.innerHTML = "";
  productsList.append(...items);
}

// submit
form.addEventListener("submit", handleForm);
// change
form.addEventListener("input", handleForm);

async function handleForm(evt) {
  evt.preventDefault();
  getAndShowProducts();
}

function getAndShowProducts() {
  const keyword = keywordInput.value.trim();

  setFilters({ ...getFilters(), keyword, page: 1 });

  fillProductsList();
}

function setFilters(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}

function getFilters() {
  return JSON.parse(localStorage.getItem("filters"));
}

function goToPreviousPage() {
  const currentFilters = getFilters();

  currentFilters.page--;
  setFilters(currentFilters);

  if (firstPage - 1 === currentFilters.page) {
    firstPage--;
  }

  if (currentFilters.page === 1) disablePreviousBtn();

  fillProductsList();
}

function goToNextPage() {
  const currentFilters = getFilters();

  currentFilters.page++;
  setFilters(currentFilters);

  const btnsAmount = Math.min(totalPages, pagesMax);
  if (firstPage + btnsAmount === currentFilters.page) {
    firstPage++;
  }

  if (currentFilters.page === totalPages) disableNextBtn();

  fillProductsList();
}

function goToFirstPage() {
  const currentFilters = getFilters();

  currentFilters.page = 1;
  setFilters(currentFilters);

  firstPage = 1;

  fillProductsList();
}

function goToLastPage() {
  const currentFilters = getFilters();

  currentFilters.page = totalPages;
  setFilters(currentFilters);

  const btnsAmount = Math.min(totalPages, pagesMax);
  firstPage = currentFilters.page - btnsAmount + 1;

  fillProductsList();
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

// Gets the size of the screen, sets parameters and fills the products list
function setParamsBasedOnScreenSize() {
  let windowWidth = window.innerWidth;

  if (windowWidth >= 1440) {
    setFilters({ ...getFilters(), limit: 9 });
    pagesMax = 5;
  } else if (windowWidth >= 768) {
    setFilters({ ...getFilters(), limit: 8 });
    pagesMax = 5;
  } else {
    setFilters({ ...getFilters(), limit: 6 });
    pagesMax = 3;
  }

  fillProductsList();
}

function onResize() {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    setParamsBasedOnScreenSize();
  }, 100);
}

categorySelect.addEventListener("mousedown", onSelectClick);

function onSelectClick(evt) {
  evt.preventDefault();
  categoriesList.classList.toggle("display-none");
}

categoriesList.addEventListener("click", onCategorySelect);

function onCategorySelect(evt) {
  const target = evt.target;

  if (target.nodeName.toLowerCase() === "button") {
    setFilters({ ...getFilters(), category: target.getAttribute("data-value") });
    categoriesList.classList.add("display-none");
    getAndShowProducts();
  }
}
