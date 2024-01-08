import axios from "axios";
import * as productInfoModalWindow from "./detailed-product-info-modal-window";
import * as page from "./partials/cart.js";

const countOfProductsToLoad = 2;

const discountProducts = document.querySelector("ul.discount-products-list");

fillDiscountProducts();

discountProducts.addEventListener("click", productClick);

async function productClick(event)
{
    let clickedElement = event.target;

    const name = clickedElement.nodeName.toLowerCase();
    if (name === "button" || name === "svg" || name === "use")
    {
        const id = clickedElement.dataset.id;
        page.addToCart(id);
        page.showCartAmount();
        changeButtonIcon(clickedElement);
    }
    else
    {
        while (clickedElement && !clickedElement.classList.contains('discount-products-list-item'))
        {
            clickedElement = clickedElement.parentElement;
        }

        const id = clickedElement.dataset.id;

        await productInfoModalWindow.create(id);
        productInfoModalWindow.show();
    }
}

const checkedIconPath = "/images/svg/icons.svg#icon-check";
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
        console.log(error);
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
    ${createCardBottomPanelMarkup(info)}
    </li>`;
}

function createCardBottomPanelMarkup(info)
{
    return `<div class="discount-product-bottom-panel-container">
    ${createProductInfoMarkup(info)}
    ${createAddToCardButton()}
    </div>`;
}

const discountIconPath = "/images/svg/icons.svg#icon-discount";

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

const shoppingCartIconPath = "/images/svg/icons.svg#icon-shopping-cart";

function createAddToCardButton()
{
    return `<button class="discount-product-shopping-cart-button svg-fill-container" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${shoppingCartIconPath}"></use>
        </svg>
    </button>`;
}