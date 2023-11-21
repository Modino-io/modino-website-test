/*
 * Modino.io - Safe and Secure updates - Platform for safe and secure software delivery
 *
 * (C) Copyright Modino.io Sp. z o.o. <copyright@modino.io> 2020-2023. All Rights Reserved.
 */

const menuCtaButton = document.getElementsByClassName("m-menu__cta-button")[0];
const summaryCtaBtn = document.getElementById("summary-cta-btn");
const mainCtaButton = document.getElementById("main-cta-button");

if (summaryCtaBtn) {
  const summaryCtaBtnRipple = new mdc.ripple.MDCRipple(summaryCtaBtn);
}

const MDCRipple = mdc.ripple.MDCRipple;
if (mainCtaButton) {
  const mainCtaButtonRipple = new MDCRipple(mainCtaButton);
}
if (menuCtaButton) {
  const menuCtaButtonRipple = new MDCRipple(menuCtaButton);
}

document.addEventListener("scroll", checkMenuCtaButton);

function checkMenuCtaButton() {
  if (menuCtaButton && mainCtaButton) {
    if (
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
}

const init = () => {
  checkMenuCtaButton();
};

init();
