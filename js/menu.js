/*
 * Modino.io - Safe and Secure updates - Platform for safe and secure software delivery
 *
 * (C) Copyright Modino.io Sp. z o.o. <copyright@modino.io> 2020-2023. All Rights Reserved.
 */

const menu = document.getElementsByClassName("m-menu")[0];
const menuNav = document.getElementsByClassName("m-menu__navigation")[0];
const hamburgerMenuButton = document.getElementsByClassName(
  "m-menu__hamburger-button"
)[0];
/**
 * @type {HTMLElement}
 */
const mobileMenu = document.getElementsByClassName("m-mobile-menu")[0];

document.addEventListener("scroll", checkMenuCtaButton);

if (hamburgerMenuButton) {
  const hamburgerMenuRipple = new mdc.ripple.MDCRipple(hamburgerMenuButton);
}

checkMenuCtaButton();

function checkMenuCtaButton() {
  if (menuNav.getBoundingClientRect().top < window.scrollY) {
    menu.classList.add("m-menu_sticky");
  } else {
    menu.classList.remove("m-menu_sticky");
  }
}

function toggleHamburgerMenu() {
  mobileMenu.classList.toggle("m-mobile-menu--expanded");

  if (mobileMenu.classList.contains("m-mobile-menu--expanded")) {
    mobileMenu.style.display = "flex";
    setTimeout(() => {
      mobileMenu.style.transform = "none";
    }, 100);
  } else {
    mobileMenu.style.transform = "translateX(100%)";
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 300);
  }
}

const currentYear = new Date().getFullYear();
document.querySelector("#footer-year").innerHTML = currentYear;
