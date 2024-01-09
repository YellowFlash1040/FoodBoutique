const form = document.getElementById("filters-form");
const categorySelect = document.getElementById("category-select");
const categoriesList = document.getElementById("categories");

import { getAndShowProducts } from "./products";
import { getFilters, setFilters } from "./filters";
import { setParamsBasedOnScreenSize } from "./pages";
import { setFirstPage } from "./pages";

// submit
form.addEventListener("submit", handleForm);
// change
form.addEventListener("input", handleForm);

async function handleForm(evt) {
  evt.preventDefault();
  setFirstPage(1);
  getAndShowProducts();
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
    setFilters({
      ...getFilters(),
      category: target.getAttribute("data-value"),
    });
    categoriesList.classList.add("display-none");
    getAndShowProducts();
  }
}

let timerId = null;

window.addEventListener("resize", onResize);

function onResize() {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    setParamsBasedOnScreenSize();
  }, 100);
}
