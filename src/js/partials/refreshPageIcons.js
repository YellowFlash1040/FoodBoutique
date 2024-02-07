import icons from "/images/svg/icons.svg";
import * as page from "../partials/cart";

export const checkedIconPath = `${icons}#icon-check`;
export const shoppingCartIconPath = `${icons}#icon-shopping-cart`;

export const discountIconPath = `${icons}#icon-discount`;

export function refreshPageIcons(id, added)
{
  const elements = document.querySelectorAll(`li[data-id="${id}"], li[data-product-id="${id}"]`);
  for (let element of elements)
  {
    let iconPath;
    let newIconPath;
    let classToDelete;
    let classToAdd;
    if (!added)
    {
      iconPath = shoppingCartIconPath;
      newIconPath = checkedIconPath;
      classToDelete = "svg-fill-container";
      classToAdd = "svg-stroke-container";
    }
    else
    {
      iconPath = checkedIconPath;
      newIconPath = shoppingCartIconPath;
      classToDelete = "svg-stroke-container";
      classToAdd = "svg-fill-container";
    }

    const icon = element.querySelector(`use[href="${iconPath}"]`);
    if (icon)
    {
      icon.setAttribute('href', newIconPath);
      icon.parentElement.parentElement.classList.remove(classToDelete);
      icon.parentElement.parentElement.classList.add(classToAdd);
    } 
  }
}

export function isAddedToCart(id)
{
  return page.getInCart().includes(id);
}