const closeModalWindowIconPath = "/images/svg/icons.svg#icon-close";
const mobileImagePath = "/images/png/tomatos-phone.png";
const mobileImagePath_2x = "/images/png/tomatos-phone@2x.png";
const tabletImagePath = "/images/png/tomatos-phone.png";
const tabletImagePath_2x = "/images/png/tomatos-phone@2x.png";
const imageAlt = "Tomatos";

let modalWindow;

export function create()
{
    const markup = `
    <div class="cart-page-modal-window">
        <picture>
            <source srcset="${mobileImagePath}, ${mobileImagePath_2x} 2x">

            <source media="(min-width: 768px)" srcset="${tabletImagePath}, ${tabletImagePath_2x} 2x">
  
            <img class="image" src="${mobileImagePath}" alt="${imageAlt}" width="140" height="140"/>
        </picture>

        <p class="title">Order success</p>
        <p class="message">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${closeModalWindowIconPath}"></use>
        </svg>
    </div>
    `;

    modalWindow = basicLightbox.create(markup);
}

export function show()
{
    modalWindow.show();

    const closeModalWindowButton_Selector = ".cart-page-modal-window .close-icon";
    const closeModalWindowButton = document.querySelector(closeModalWindowButton_Selector);
    closeModalWindowButton.addEventListener("click", modalWindow.close);
}