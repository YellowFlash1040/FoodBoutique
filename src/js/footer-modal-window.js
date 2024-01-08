const mobileImagePath = "/images/png/vegetables-basket-phone.png";
const mobileImagePath_2x = "/images/png/vegetables-basket-phone@2x.png";
const tabletImagePath = "/images/png/vegetables-basket-tablet.png";
const tabletImagePath_2x = "/images/png/vegetables-basket-tablet@2x.png";
const imageAlt = "";
const closeModalWindowIconPath = "/images/svg/icons.svg#icon-close";

export function createMarkup()
{
    return `
    <div class="footer-modal-window">
        <p class="title">Thanks for subscribing for <span class="title-span">new</span> products</p>
        <p class="message">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>

        
        <picture>
            <source srcset="${mobileImagePath}, ${mobileImagePath_2x} 2x">

            <source media="(min-width: 768px)" srcset="${tabletImagePath}, ${tabletImagePath_2x} 2x">
  
            <img class="image" src="${mobileImagePath}" alt="${imageAlt}" width="335" height="144"/>
        </picture>

        <svg class="close-icon" width="22" height="22">
            <use href="${closeModalWindowIconPath}"></use>
        </svg>
    </div>
    `;
}