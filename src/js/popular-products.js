import axios from "axios";
import * as productInfoModalWindow from "./detailed-product-info-modal-window.js";
import * as page from "./partials/cart.js";
import { refreshPageIcons, isAddedToCart, checkedIconPath, shoppingCartIconPath } from "./partials/refreshPageIcons.js";

const popularProducts = document.querySelector("ul.popular-products-list");

fillPopularProducts();
popularProducts.addEventListener("click", productClick);

async function productClick(event)
{
    let clickedElement = event.target;
    
    const name = clickedElement.nodeName.toLowerCase();

    while (clickedElement && !clickedElement.classList.contains('popular-products-list-item'))
    {
        clickedElement = clickedElement.parentElement;
    }

    const id = clickedElement.dataset.id;

    if (name === "button" || name === "svg" || name === "use")
    {
        if (!isAddedToCart(id))
        {
            page.addToCart(id);
            page.showCartAmount();
            refreshPageIcons(id, false);
        }
        else
        {
            page.deleteFromCart(id);
            page.showCartAmount();
            refreshPageIcons(id, true);
        }
    }
    else
    {
        await productInfoModalWindow.create(id);
        productInfoModalWindow.show();
    }
}

async function fillPopularProducts()
{
    const products = await getPopularProducts();
    const markup = createPopularProductsMarkup(products);
    addPopularProductsMarkupToThePage(markup);
}

function addPopularProductsMarkupToThePage(markup)
{
    popularProducts.innerHTML = markup;
}

async function getPopularProducts()
{
    const url = "https://food-boutique.b.goit.study/api/products/popular";
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

function createPopularProductsMarkup(products)
{
    const markup = products.map(product => createProductItemMarkup(product)).join("");

    return markup;
}

function createProductItemMarkup(product)
{
    const image =
    {
        src: product.img,
        alt: product.name
    };

    const info =
    {
        name: product.name,
        category: product.category,
        size: product.size,
        popularity: product.popularity
    };

    return `<li class="popular-products-list-item" data-id="${product._id}">
    ${createProductImageMarkup(image)}
    ${createProductInfoMarkup(info)}
    ${createAddToCardButton(product._id)}
    </li>`;
}

function createProductImageMarkup({src, alt})
{
    return `<div class="popular-product-image-container">
    <img src="${src}" alt="${alt}" width="56" height="56" />
    </div>`;
}

function createProductInfoMarkup({ name, category, size, popularity })
{
    category = category.replace(/_/g, ' ');

    return `<div class="popular-product-info-container">
    <p class="popular-product-title">${name}</p>
    <ul class="popular-product-characteristics-list">
        <li class="popular-product-characteristic">
        Category:
        <span class="popular-product-characteristic-value">${category}</span>
        </li>
        <li class="popular-product-characteristic">
        Size:
        <span class="popular-product-characteristic-value">${size}</span>
        </li>
        <li class="popular-product-characteristic">
        Popularity:
        <span class="popular-product-characteristic-value">${popularity}</span>
        </li>
    </ul>
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

    return `<button class="popular-product-shopping-cart-button ${iconClass}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${iconPath}"></use>
        </svg>
    </button>`;
}