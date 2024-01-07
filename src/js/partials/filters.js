import { form, keywordInput } from "./elements";
import { getAndShowProducts } from "./products";

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

export function setFilters(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}

export function getFilters() {
  return JSON.parse(localStorage.getItem("filters"));
}

// submit
form.addEventListener("submit", handleForm);
// change
form.addEventListener("input", handleForm);

async function handleForm(evt) {
  evt.preventDefault();
  getAndShowProducts();
}
