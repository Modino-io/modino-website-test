let currentTab = "founders";
const tabs = document.querySelectorAll(".m-team__list-item");
const tabButtons = document.querySelectorAll('button[role="tab"]');
const peopleLists = document.querySelectorAll(".m-people-list");

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

const initTabs = () => {
  document.getElementById(currentTab).parentElement.classList.add("active");
  document.getElementById(currentTab).classList.add("mdc-button--raised");
  document.getElementById(`${currentTab}-section`).hidden = false;

  tabButtons.forEach((button) => button.addEventListener("click", openTab));
};

initTabs();
