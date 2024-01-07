const subscribe_form = document.querySelector("form.subscribe-form");
subscribe_form.addEventListener("submit", form_Submit);

function form_Submit(event)
{
    event.preventDefault();

    const input = document.querySelector("input.subscribe-form-email-field");
    alert(input.value);
    subscribe_form.reset();
}