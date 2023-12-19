/*
 * Modino.io - Safe and Secure updates - Platform for safe and secure software delivery
 *
 * (C) Copyright Modino.io Sp. z o.o. <copyright@modino.io> 2020-2023. All Rights Reserved.
 */

const carouselItems = document.querySelectorAll(".m-article-tile");
const carouselItemsContainer = document.querySelectorAll(
  ".m-articles-teaser__carousel-content"
)[0];
const carouselPageButtons = document.querySelectorAll(
  ".m-articles-teaser__carousel-page-button"
);
let currentCarouselItemIndex = 0;
const prevButton = document.querySelector(
  ".m-articles-teaser__carousel-button-prev"
);
const nextButton = document.querySelector(
  ".m-articles-teaser__carousel-button-next"
);

if (prevButton && nextButton) {
  const prevButtonRipple = new mdc.ripple.MDCRipple(prevButton);
  const nextButtonRipple = new mdc.ripple.MDCRipple(nextButton);
}

function displayNthCarouselItem(itemIndex = 0) {
  carouselPageButtons[currentCarouselItemIndex].classList.toggle(
    "m-articles-teaser__carousel-page-button--active"
  );
  carouselPageButtons[itemIndex % carouselItems.length].classList.toggle(
    "m-articles-teaser__carousel-page-button--active"
  );

  scrollCarouselItemTo(itemIndex, currentCarouselItemIndex);
  currentCarouselItemIndex = itemIndex;
}

function displayPreviousCarouselItem() {
  carouselPageButtons[currentCarouselItemIndex].classList.toggle(
    "m-articles-teaser__carousel-page-button--active"
  );
  carouselPageButtons[
    currentCarouselItemIndex - 1 < 0
      ? (currentCarouselItemIndex - 1 + carouselItems.length) %
        carouselItems.length
      : (currentCarouselItemIndex - 1) % carouselItems.length
  ].classList.toggle("m-articles-teaser__carousel-page-button--active");

  scrollCarouselItemTo(
    currentCarouselItemIndex - 1 < 0
      ? (currentCarouselItemIndex - 1 + carouselItems.length) %
          carouselItems.length
      : (currentCarouselItemIndex - 1) % carouselItems.length,
    currentCarouselItemIndex
  );
  currentCarouselItemIndex =
    currentCarouselItemIndex - 1 < 0
      ? (currentCarouselItemIndex - 1 + carouselItems.length) %
        carouselItems.length
      : (currentCarouselItemIndex - 1) % carouselItems.length;
}

function displayNextCarouselItem() {
  carouselPageButtons[currentCarouselItemIndex].classList.toggle(
    "m-articles-teaser__carousel-page-button--active"
  );
  carouselPageButtons[
    (currentCarouselItemIndex + 1) % carouselItems.length
  ].classList.toggle("m-articles-teaser__carousel-page-button--active");

  scrollCarouselItemTo(
    (currentCarouselItemIndex + 1) % carouselItems.length,
    currentCarouselItemIndex
  );
  currentCarouselItemIndex =
    (currentCarouselItemIndex + 1) % carouselItems.length;
}

function scrollCarouselItemTo(itemIndex = 0, previousItemIndex = 2) {
  carouselItemsContainer.classList.toggle(
    `m-articles-teaser__carousel-content--scrolled-to-${itemIndex}`
  );
  carouselItemsContainer.classList.toggle(
    `m-articles-teaser__carousel-content--scrolled-to-${previousItemIndex}`
  );
  carouselItemsContainer.scrollTo({
    left: carouselItems[itemIndex].offsetLeft,
    behavior: "smooth",
  });
}
