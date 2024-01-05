import axios from "axios";

const popularProducts = document.querySelector("ul.popular-products-list");

fillPopularProducts();

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

    return `<li class="popular-products-list-item">
    ${createProductImageMarkup(image)}
    ${createProductInfoMarkup(info)}
    ${createAddToCardButton()}
    </li>`;
}

function createProductImageMarkup({src, alt})
{
    return `<div class="popular-product-image-container" type="button">
    <img src="${src}" alt="${alt}" width="56" height="56" />
    </div>`;
}

function createProductInfoMarkup({ name, category, size, popularity })
{
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

const shoppingCartIconPath = "/images/svg/icons.svg#icon-shopping-cart";

function createAddToCardButton()
{
    return `<button class="popular-product-shopping-cart-button" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${shoppingCartIconPath}"></use>
        </svg>
    </button>`;
}