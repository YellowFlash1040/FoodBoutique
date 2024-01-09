import axios from "axios";
import * as productInfoModalWindow from "./detailed-product-info-modal-window";
import * as page from "./partials/cart.js";
import icons from "/images/svg/icons.svg";

const countOfProductsToLoad = 2;

const discountProducts = document.querySelector("ul.discount-products-list");

fillDiscountProducts();

discountProducts.addEventListener("click", productClick);

async function productClick(event)
{
    let clickedElement = event.target;

    const name = clickedElement.nodeName.toLowerCase();
    const addToCartButton = clickedElement;

    while (clickedElement && !clickedElement.classList.contains('discount-products-list-item'))
    {
        clickedElement = clickedElement.parentElement;
    }

    const id = clickedElement.dataset.id;

    if (name === "button" || name === "svg" && event.target.parentElement.nodeName.toLowerCase() === "button" || name === "use" && event.target.parentElement.nodeName.toLowerCase() === "button")
    {
        page.addToCart(id);
        page.showCartAmount();
        changeButtonIcon(addToCartButton);
    }
    else
    {
        await productInfoModalWindow.create(id);
        productInfoModalWindow.show();
    }
}

const checkedIconPath = `${icons}#icon-check`;
const cartButtonSelector = "discount-product-shopping-cart-button";

function changeButtonIcon(clickedElement)
{
    while (clickedElement && !clickedElement.classList.contains(cartButtonSelector))
    {
        clickedElement = clickedElement.parentElement;
    }

    clickedElement.classList.remove('svg-fill-container');
    clickedElement.classList.add('svg-stroke-container');

    const buttonIcon = clickedElement.firstElementChild.firstElementChild;
    buttonIcon.setAttribute('href', checkedIconPath);
}

async function fillDiscountProducts()
{
    let products = await getDiscountProducts();
    products = products.slice(0, countOfProductsToLoad);
    const markup = createDiscountProductsMarkup(products);
    addDiscountProductsMarkupToThePage(markup);
}

async function getDiscountProducts()
{
    const url = "https://food-boutique.b.goit.study/api/products/discount";

    try
    {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error)
    {
        console.log(error.message);
    }
}

function createDiscountProductsMarkup(products)
{
    const markup = products.map(product => createDiscountProductItemMarkup(product)).join("");

    return markup;
}

function addDiscountProductsMarkupToThePage(markup)
{
    discountProducts.innerHTML = markup;
}

const shoppingCartIconPath = `${icons}#icon-shopping-cart`;

function createDiscountProductItemMarkup(product)
{
    const image =
    {
        src: product.img,
        alt: product.name
    };

    const info =
    {
        name: product.name,
        price: product.price
    };

    return `<li class="discount-products-list-item" data-id="${product._id}">
    ${createProductImageCardMarkup(image)}
    ${createCardBottomPanelMarkup(info, product._id)}
    </li>`;
}

function createCardBottomPanelMarkup(info, id)
{
    return `<div class="discount-product-bottom-panel-container">
    ${createProductInfoMarkup(info)}
    ${createAddToCardButton(id)}
    </div>`;
}

const discountIconPath = `${icons}#icon-discount`;

function createProductImageCardMarkup({src, alt})
{
    return `<div class="discount-product-image-container">
    <img src="${src}" alt="${alt}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${discountIconPath}"></use>
            </svg>
        </div>
    </div>`;
}

function createProductInfoMarkup({name, price})
{
    return `<div class="discount-product-info-container">
    <span>${name}</span>
    <span>$${price}</span>
    </div>`;
}

function createAddToCardButton(id)
{
    let iconPath;
    let iconClass;
    if (page.getInCart().includes(id))
    {
        iconPath = checkedIconPath;
        iconClass = "svg-stroke-container";
    }
    else
    {
        iconPath = shoppingCartIconPath;
        iconClass = "svg-fill-container";
    }

    return `<button class="discount-product-shopping-cart-button ${iconClass}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${iconPath}"></use>
        </svg>
    </button>`;
}