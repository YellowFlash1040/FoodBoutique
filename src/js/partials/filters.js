const keywordInput = document.getElementById("keyword-input");
const categorySelect = document.getElementById("category-select");

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

  if (filters.category) {
    categorySelect.options[0].innerText = filters.category.replaceAll("_", " ");
  } else categorySelect.options[0].innerText = "Show all";
}

export function setFilters(filters) {
  localStorage.setItem("filters", JSON.stringify(filters));
}

export function getFilters() {
  return JSON.parse(localStorage.getItem("filters"));
}
