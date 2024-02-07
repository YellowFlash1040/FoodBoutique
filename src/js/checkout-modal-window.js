import icons from "/images/svg/icons.svg";

import mobileImagePath from "/images/png/cherry-tomatos-phone.png";
import mobileImagePath_2x from "/images/png/cherry-tomatos-phone@2x.png";

const imageAlt = "Cherry tomatos";
const closeModalWindowIconPath = `${icons}#icon-close`;

export function createMarkup() {
  return `
    <div class="checkout-modal-window">
        <picture>
            <source srcset="${mobileImagePath}, ${mobileImagePath_2x} 2x">
  
            <img class="image" src="${mobileImagePath}" alt="${imageAlt}" width="145" height="140"/>
        </picture>

        <p class="title">Order success</p>
        <p class="message">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${closeModalWindowIconPath}"></use>
        </svg>
    </div>
    `;
}
