let currentTab = "founders";
const tabs = document.querySelectorAll(".m-section__item");
const tabButtons = document.querySelectorAll('button[role="tab"]');
const peopleLists = document.querySelectorAll(".m-people-list");

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
};

init();
