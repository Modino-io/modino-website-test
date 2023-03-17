const menu = document.getElementsByClassName("m-menu")[0];
const menuCtaButton = menu.getElementsByClassName("m-menu__cta-button")[0];

const mainCtaButton = document.getElementById("main-cta-button");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    menu.classList.add("m-menu_sticky");
  } else {
    menu.classList.remove("m-menu_sticky");
  }

  if (menuCtaButton && mainCtaButton.getBoundingClientRect().bottom <= 50) {
    menuCtaButton.classList.remove("mdc-button--outlined");
    menuCtaButton.classList.add("mdc-button--raised");
  } else {
    menuCtaButton.classList.add("mdc-button--outlined");
    menuCtaButton.classList.remove("mdc-button--raised");
  }
});
