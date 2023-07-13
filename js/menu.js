/*
 * Modino.io Confidential
 *
 * Object code only source materials
 *
 * Modino.io - Safe and Secure updates - Platform for safe and secure software delivery
 *
 * (C) Copyright Modino.io Sp. z o.o. <copyright@modino.io> 2020-2023. All Rights Reserved.
 */

const menu = document.getElementsByClassName("m-menu")[0];
const menuNav = document.getElementsByClassName("m-menu__navigation")[0];

document.addEventListener("scroll", checkMenuCtaButton);

checkMenuCtaButton();

function checkMenuCtaButton() {
  if (menuNav.getBoundingClientRect().top < window.scrollY) {
    menu.classList.add("m-menu_sticky");
  } else {
    menu.classList.remove("m-menu_sticky");
  }
}
