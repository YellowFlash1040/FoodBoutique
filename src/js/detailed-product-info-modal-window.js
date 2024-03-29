import axios from "axios";
import * as page from "./partials/cart.js";
import icons from "/images/svg/icons.svg";
import { refreshPageIcons } from "./partials/refreshPageIcons.js";

const cartIconPath = `${icons}#icon-shopping-cart`;
const closeModalWindowIconPath = `${icons}#icon-close`;

let modalWindow;

export async function create(productId)
{
    const product = await getProductById(productId);
    const markup = createMarkup(product, productId);
    createModalWindow(markup);
}

function createModalWindow(markup)
{
    const options =
    {
        onClose: enablePageScroll
    };
    modalWindow = basicLightbox.create(markup, options);
    document.addEventListener("keydown", closeLightBox);
}

function closeLightBox(event)
{
    if (event.key === 'Escape')
    {
        modalWindow.close();
        document.removeEventListener("keydown", closeLightBox);
    }
}

function isAddedToCart(id)
{
  return page.getInCart().includes(id);
}

function addToCart(event)
{
    const id = event.currentTarget.dataset.id;

    if (!isAddedToCart(id))
    {
        page.addToCart(id);
        page.showCartAmount();
        changeTextOnButton();
        refreshPageIcons(id, false);
    }
    else
    {
        page.deleteFromCart(id);
        page.showCartAmount();
        changeTextOnButtonBack();
        refreshPageIcons(id, true);
    }
}

let addToCartButton;

function changeTextOnButton()
{
    const insideSpan = addToCartButton.querySelector('span');
    insideSpan.textContent = "Remove from";
}

function changeTextOnButtonBack()
{
    const insideSpan = addToCartButton.querySelector('span');
    insideSpan.textContent = "Add to";
}

function createMarkup({ name, category, size, popularity, desc: description, price, img }, productId)
{
    category = category.replace(/_/g, ' ');

    let addToCartButtonText;
    if (page.getInCart().includes(productId))
    {
        addToCartButtonText = "Remove from";
    }
    else
    {
        addToCartButtonText = "Add to";
    }
    
    return `
    <div class="detailed-product-info-modal-window">

        <div class="image-container">
            <img class="image" src="${img}" alt="${name}" width="160" height="160"/>
        </div>

        <div class="product-info-container">
        <p class="productName">${name}</p>

        <ul class="product-characteristics-list">
            <li class="product-characteristic"><span class="span">Category:</span> ${category}</li>
            <li class="product-characteristic"><span class="span">Size:</span> ${size}</li>
            <li class="product-characteristic"><span class="span">Popularity:</span> ${popularity}</li>
        </ul>

        <p class="product-description">${description}</p>
        </div>

        <div class="cart-price-panel-container">
            <p class="product-price">$${price}</p>
            <button class="addToCart-button" type="button" data-id="${productId}">
                <span>${addToCartButtonText}</span>
                <svg class="cart-icon" width="18" height="18">
                    <use href="${cartIconPath}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${closeModalWindowIconPath}"></use>
        </svg>
    </div>
    `;
}

async function getProductById(id)
{
    const url = `https://food-boutique.b.goit.study/api/products/${id}`;
    const response = await axios.get(url);
    return response.data;
}

export function show()
{
    modalWindow.show();

    const scrollLockMethod = 'disableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    const closeModalWindowButton_Selector = ".detailed-product-info-modal-window .close-icon";
    const closeModalWindowButton = document.querySelector(closeModalWindowButton_Selector);
    closeModalWindowButton.addEventListener("click", modalWindow.close);

    addToCartButton = document.querySelector(".detailed-product-info-modal-window .addToCart-button");
    addToCartButton.addEventListener("click", addToCart);
}

function enablePageScroll()
{
    const scrollLockMethod = 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
}