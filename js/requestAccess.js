const textFields = document.querySelectorAll(".mdc-text-field");
const checkboxes = document.querySelectorAll(".mdc-checkbox");
const formFields = document.querySelectorAll(".mdc-form-field");

const menu = document.querySelector(".mdc-menu");
const button = document.querySelector(".mdc-button");
const selectInput = document.querySelector(".mdc-select");

for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}
for (const checkbox of checkboxes) {
  new mdc.checkbox.MDCCheckbox(checkbox);
}
for (const formField of formFields) {
  new mdc.formField.MDCFormField(formField);
}
new mdc.select.MDCSelect(selectInput);
new mdc.menu.MDCMenu(menu);
const list = new mdc.list.MDCList(
  document.querySelector(".mdc-deprecated-list")
);
list.singleSelection = true;
new mdc.ripple.MDCRipple(button);

const form = document.getElementById("request-access-form");
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
};
form.addEventListener("submit", handleSubmit);
