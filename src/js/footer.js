import axios from "axios";
import * as footerModalWindow from "./footer-modal-window.js";
import * as footerErrorModalWindow from "./footer-error-modal-window.js";

const subscribe_form = document.querySelector("form.subscribe-form");
subscribe_form.addEventListener("submit", form_Submit);

let modalWindow;

async function form_Submit(event)
{
    event.preventDefault();

    const input = document.querySelector("input.subscribe-form-email-field");
    const user_email_object =
    {
        email: input.value
    }
    subscribe_form.reset();

    const result = await sendEmailToBackEnd(user_email_object);

    let markup;
    let closeModalWindowButton_Selector;
    if (result === 201)
    {
        markup = footerModalWindow.createMarkup();
        closeModalWindowButton_Selector = ".footer-modal-window .close-icon";
    }
    else
    {
        markup = footerErrorModalWindow.createMarkup();
        closeModalWindowButton_Selector = ".footer-error-modal-window .close-icon";
    }

    modalWindow = basicLightbox.create(markup);
    modalWindow.show();

    const closeModalWindowButton = document.querySelector(closeModalWindowButton_Selector);
    closeModalWindowButton.addEventListener("click", modalWindow.close);
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

async function sendEmailToBackEnd(data)
{
    const url = "https://food-boutique.b.goit.study/api/subscription";
    try
    {
        const response = await axios.post(url, data);
        return response.status;
    }
    catch (error)
    {
        return error.response.status;
    }
}