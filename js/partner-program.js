/*
 * Modino.io - Safe and Secure updates - Platform for safe and secure software delivery
 *
 * (C) Copyright Modino.io Sp. z o.o. <copyright@modino.io> 2020-2023. All Rights Reserved.
 */

const textFields = document.querySelectorAll(".mdc-text-field");
const checkboxes = document.querySelectorAll(".mdc-checkbox");
const button = document.querySelector(".m-join-grow__join-form-confirm-button");
const form = document.getElementById("partner-program-form");
const snackbar = new mdc.snackbar.MDCSnackbar(
  document.querySelector(".mdc-snackbar")
);

for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}
for (const checkbox of checkboxes) {
  new mdc.checkbox.MDCCheckbox(checkbox);
}

new mdc.ripple.MDCRipple(button);
const emailInput = new mdc.textField.MDCTextField(
  document.getElementById("email-input-text-field")
);

const validateEmail = (emailAddress) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailAddress);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  if (!validateEmail(formData.get("email"))) {
    emailInput.helperTextContent = "Invalid value";
    emailInput.valid = false;
    return;
  }

  button.disabled = true;

  fetch(
    "https://script.google.com/macros/s/AKfycbwdQy0uzWFohLgBtHwjY9kL7uhGlgmvx8VTzyQPha6lnTPrcCVVjxEHlTmtGUkEpCTglw/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => {
      if (res.status === 200) {
        snackbar.labelText = "The request has been sent";
      } else {
        snackbar.labelText = "Unable to send the request. Try again.";
      }

      snackbar.open();
      e.target.reset();
      button.disabled = false;
    })
    .catch((err) => console.log(err));
};

form.addEventListener("submit", handleSubmit);

const onBlurEmailInput = (e) => {
  if (!e.target.validity.valid && e.target.value.length) {
    emailInput.helperTextContent = "Incorrect e-mail format";
  }
};

document
  .getElementById("email-input")
  .addEventListener("blur", onBlurEmailInput);
