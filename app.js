// ----Theme Changer----

const icon = document.querySelector("#theme-icon");
const sun = document.querySelector(".fa-sun");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    sun.classList.remove("fa-moon");
  } else {
    sun.classList.add("fa-moon");
  }
};

// ----Projects Switcher----

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
