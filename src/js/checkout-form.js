import axios from 'axios';
import { getInCart, clearCart } from './partials/cart';
import * as checkoutModalWindow from './checkout-modal-window';

const checkoutForm = document.querySelector('form.checkout-form');
checkoutForm.addEventListener('submit', form_Submit);

let modalWindow;

async function form_Submit(event) {
  event.preventDefault();

  const emailField = document.querySelector('input#email.mail-field');

  const productsInCart = getInCart();
  clearCart();
  refreshPageLayout();

  const response = await sendOrderToBackEnd(emailField.value, productsInCart);

  if (response === 201) {
    const markup = checkoutModalWindow.createMarkup();

    const options = {
      onClose: enablePageScroll,
    };

    modalWindow = basicLightbox.create(markup, options);

    const scrollLockMethod = 'disableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    modalWindow.show();

    const closeModalWindowButton = document.querySelector(
      '.checkout-modal-window .close-icon'
    );
    closeModalWindowButton.addEventListener('click', modalWindow.close);
    document.addEventListener('keydown', closeLightBox);
  } else {
    console.log('Something went wrong :(');
  }
}

function refreshPageLayout() {
  const nothingFound = document.getElementById('nothing-found-cart');
  const deleteAll = document.querySelector('.delete-all');
  const checkoutPanel = document.querySelector('.checkout-panel-container');
  const cartSect = document.querySelector('.cart-sect');
  const cartItemsList = document.getElementById('cart-items-list');

  cartSect.style.display = 'block';
  deleteAll.style.display = 'none';
  cartItemsList.style.display = 'none';
  checkoutPanel.style.display = 'none';
  nothingFound.style.display = 'block';

  const quantityTitle = document.getElementById('cart-quantity-title');
  quantityTitle.innerText = `cart (${0})`;
  const quantitySpan = document.getElementById('cart-quantity');
  quantitySpan.innerText = `cart (${0})`;
}

async function sendOrderToBackEnd(email, productIds) {
  const url = 'https://food-boutique.b.goit.study/api/orders';

  const products = productIds.map(product => ({
    productId: product,
    amount: 1,
  }));

  const requestBody = {
    email,
    products,
  };

  try {
    const response = await axios.post(url, requestBody);
    return response.status;
  } catch (error) {
    return error.response.status;
  }
}

function enablePageScroll() {
  const scrollLockMethod = 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
}

function closeLightBox(event) {
  if (event.key === 'Escape') {
    modalWindow.close();
    document.removeEventListener('keydown', closeLightBox);
  }
}
