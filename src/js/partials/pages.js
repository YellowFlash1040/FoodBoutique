const toTheStartBtn = document.getElementById("to-the-start");
const previousBtn = document.getElementById("previous");
const pagesList = document.getElementById("pages-list");
const nextBtn = document.getElementById("next");
const toTheEnd = document.getElementById("to-the-end");

import { setFilters, getFilters } from "./filters";
import { fillProductsList } from "./products";

let totalPages = null;
let pagesMax = null;
let firstPage = 1;

export function setFirstPage(page) {
  firstPage = page;
}

export function getTotalPages() {
  return totalPages;
}

export function setTotalPages(pages) {
  totalPages = pages;
}

export function fillPagesList(filters) {
  const numbers = [];

  const btnsAmount = Math.min(getTotalPages(), pagesMax);

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

export function disablePreviousBtn() {
  toTheStartBtn.classList.add("disabled");
  previousBtn.classList.add("disabled");
  previousBtn.removeEventListener("click", goToPreviousPage);
  toTheStartBtn.removeEventListener("click", goToFirstPage);
}

export function enablePreviousBtn() {
  toTheStartBtn.classList.remove("disabled");
  previousBtn.classList.remove("disabled");
  previousBtn.addEventListener("click", goToPreviousPage);
  toTheStartBtn.addEventListener("click", goToFirstPage);
}

export function disableNextBtn() {
  toTheEnd.classList.add("disabled");
  nextBtn.classList.add("disabled");
  nextBtn.removeEventListener("click", goToNextPage);
  toTheEnd.removeEventListener("click", goToLastPage);
}

export function enableNextBtn() {
  toTheEnd.classList.remove("disabled");
  nextBtn.classList.remove("disabled");
  nextBtn.addEventListener("click", goToNextPage);
  toTheEnd.addEventListener("click", goToLastPage);
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

  const btnsAmount = Math.min(getTotalPages(), pagesMax);
  if (firstPage + btnsAmount === currentFilters.page) {
    firstPage++;
  }

  if (currentFilters.page === getTotalPages()) disableNextBtn();

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

  currentFilters.page = getTotalPages();
  setFilters(currentFilters);

  const btnsAmount = Math.min(getTotalPages(), pagesMax);
  firstPage = currentFilters.page - btnsAmount + 1;

  fillProductsList();
}

export function setParamsBasedOnScreenSize() {
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
