import axios from "axios";

const subscribe_form = document.querySelector("form.subscribe-form");
subscribe_form.addEventListener("submit", form_Submit);

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
    alert(result);
}

async function sendEmailToBackEnd(data)
{
    const url = "https://food-boutique.b.goit.study/api/subscription";
    try
    {
        const response = await axios.post(url, data);
        return response.data.message;
    }
    catch (error)
    {
        return error.message;
    }
}