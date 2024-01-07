const categoriesList = document.getElementById("categories");

import { getCategories } from "./requests";

export async function fillCategories() {
  const categories = await getCategories();
  createCategories(categories);
}

function createCategories(categories) {
  const options = [];

  for (const category of categories) {
    const li = document.createElement("li");
    li.className = "categories-item";
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
