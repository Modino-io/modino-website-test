const menu = document.getElementsByClassName("m-menu")[0];
const menuNav = document.getElementsByClassName("m-menu__navigation")[0];

document.addEventListener("scroll", checkMenuCtaButton);

checkMenuCtaButton();

function checkMenuCtaButton() {
  menuNav.getBoundingClientRect().top;
  if (menuNav.getBoundingClientRect().top < window.scrollY) {
    menu.classList.add("m-menu_sticky");
  } else {
    menu.classList.remove("m-menu_sticky");
  }
}
