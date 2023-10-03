/*
 * Modino.io - Safe and Secure updates - Platform for safe and secure software delivery
 *
 * (C) Copyright Modino.io Sp. z o.o. <copyright@modino.io> 2020-2023. All Rights Reserved.
 */

const menuCtaButton = document.getElementsByClassName("m-menu__cta-button")[0];
let currentTab = "founders";
const summaryCtaBtn = document.getElementById("summary-cta-btn");
const mainCtaButton = document.getElementById("main-cta-button");
const tabs = document.querySelectorAll(".m-team__list-item");
const tabButtons = document.querySelectorAll('button[role="tab"]');
const peopleLists = document.querySelectorAll(".m-people-list");

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

const openTab = (event) => {
  const arrayOfTabs = Array.from(tabs);
  arrayOfTabs.forEach((tab) => {
    tab.classList.remove("active");
    tab
      .querySelectorAll('button[role="tab"]')[0]
      .classList.remove("mdc-button--raised");
  });

  event.currentTarget.parentElement.classList.add("active");
  event.currentTarget.classList.add("mdc-button--raised");

  document.getElementById(`${currentTab}-section`).hidden = true;

  currentTab = event.currentTarget.id;
  document.getElementById(`${currentTab}-section`).hidden = false;
};

const init = () => {
  document.getElementById(currentTab).parentElement.classList.add("active");
  document.getElementById(currentTab).classList.add("mdc-button--raised");
  document.getElementById(`${currentTab}-section`).hidden = false;
  tabButtons.forEach((button) => button.addEventListener("click", openTab));

  checkMenuCtaButton();
};

init();
