const menu = document.getElementsByClassName("m-menu")[0];
const menuNav = document.getElementsByClassName("m-menu__navigation")[0];
const menuCtaButton = menu.getElementsByClassName("m-menu__cta-button")[0];
let currentTab = "founders";
const tabs = document.querySelectorAll(".m-section__item");
const tabButtons = document.querySelectorAll('button[role="tab"]');
const peopleLists = document.querySelectorAll(".m-people-list");
const summaryCtaBtn = new mdc.ripple.MDCRipple(
  document.getElementById("summary-cta-btn")
);

const mainCtaButton = document.getElementById("main-cta-button");

const MDCRipple = mdc.ripple.MDCRipple;
const mainCtaButtonRipple = new MDCRipple(
  document.getElementById("main-cta-button")
);
const menuCtaButtonRipple = new MDCRipple(
  menu.getElementsByClassName("m-menu__cta-button")[0]
);

document.addEventListener("scroll", setMenu);

function setMenu() {
  menuNav.getBoundingClientRect().top;
  if (menuNav.getBoundingClientRect().top < window.scrollY) {
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

const openTab = (event) => {
  const arrayOfTabs = Array.from(tabs);
  arrayOfTabs.forEach((tab) => tab.classList.remove("active"));

  event.currentTarget.parentElement.classList.add("active");
  document.getElementById(`${currentTab}-section`).hidden = true;

  currentTab = event.currentTarget.id;
  document.getElementById(`${currentTab}-section`).hidden = false;
};

const init = () => {
  document.getElementById(currentTab).parentElement.classList.add("active");
  document.getElementById(`${currentTab}-section`).hidden = false;
  tabButtons.forEach((button) => button.addEventListener("click", openTab));

  const currentYear = new Date().getFullYear();
  document.querySelector("#footer-year").innerHTML = currentYear;

  setMenu();
};

init();
