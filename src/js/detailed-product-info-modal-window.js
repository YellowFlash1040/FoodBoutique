import axios from "axios";

const cartIconPath = "/images/svg/icons.svg#icon-shopping-cart";
const closeModalWindowIconPath = "/images/svg/icons.svg#icon-close";

let modalWindow;

export async function create(productId)
{
    const product = await getProductById(productId);
    const markup = createMarkup(product);
    createModalWindow(markup);
}

function createModalWindow(markup)
{
    modalWindow = basicLightbox.create(markup);
}

function createMarkup({ name, category, size, popularity, desc: description, price, img })
{
    category = category.replace(/_/g, ' ');
    
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
            <button class="addToCart-button" type="button">
                <span>Add to</span>
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

    const closeModalWindowButton_Selector = ".detailed-product-info-modal-window .close-icon";
    const closeModalWindowButton = document.querySelector(closeModalWindowButton_Selector);
    closeModalWindowButton.addEventListener("click", modalWindow.close);
}