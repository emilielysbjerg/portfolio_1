//*Form input start*//
const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();

  form.querySelector(":invalid").focus();
  form.addEventListener("invalid", cancelPopup, true);
}

form.addEventListener("invalid", cancelPopup, true);
//* Form input slu*//

//* Formoutput start*//
const firstNameOutput = document.querySelector("#fornavn_output");
const lastNameOutput = document.querySelector("#efternavn_output");
const emailOutput = document.querySelector("#email_output");

function handleSubmit(event) {
  console.log("nu burde blive loaded");
  event.preventDefault();

  const formData = new FormData(form);

  const firstName = formData.get("fornavn");
  const lastName = formData.get("efternavn");
  const email = formData.get("email");

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
}
form.addEventListener("submit", handleSubmit);

//* Formoutput start*//
