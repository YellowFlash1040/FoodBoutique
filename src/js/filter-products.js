const form = document.getElementById("filters-form");
const searchQuery = form.elements.searchQuery;
const category = form.elements.category;
const priceAndPopularity = form.elements.priceAndPopularity;

//change
form.addEventListener("input", () => {
  console.log(searchQuery.value);
  console.log(category.value);
  console.log(priceAndPopularity.value);
});
