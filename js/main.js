const menu = document.getElementsByClassName("m-menu")[0];
const menuNav = document.getElementsByClassName("m-menu__navigation")[0];
const menuCtaButton = menu.getElementsByClassName("m-menu__cta-button")[0];

const mainCtaButton = document.getElementById("main-cta-button");

const MDCRipple = mdc.ripple.MDCRipple;
const mainCtaButtonRipple = new MDCRipple(
  document.getElementById("main-cta-button")
);
const menuCtaButtonRipple = new MDCRipple(
  menu.getElementsByClassName("m-menu__cta-button")[0]
);

setMenu();

document.addEventListener("scroll", setMenu);

function setMenu() {
  if (menuNav.getBoundingClientRect().top == 0) {
    menu.classList.add("m-menu_sticky");
  } else {
    menu.classList.remove("m-menu_sticky");
  }

  if (
    menuCtaButton &&
    mainCtaButton.getBoundingClientRect().top <= mainCtaButton.clientHeight
  ) {
    menuCtaButton.classList.remove("mdc-button--outlined");
    menuCtaButton.classList.add("mdc-button--unelevated");
    menuCtaButton.classList.add("cta-accent-button");
  } else {
    menuCtaButton.classList.add("mdc-button--outlined");
    menuCtaButton.classList.remove("mdc-button--unelevated");
    menuCtaButton.classList.remove("cta-accent-button");
  }
}
