"use strict";
window.addEventListener('DOMContentLoaded', () => {
  let menu = document.querySelector(".menu");
  let menuButton = document.querySelector(".navigation-header__button");

  menu.classList.add("menu_closed");
  menuButton.classList.add("navigation-header__button_off");

  menuButton.addEventListener("pointerup", () => {
    menu.classList.toggle("menu_open");
    menuButton.classList.toggle("navigation-header__button_off");
    menuButton.classList.toggle("navigation-header__button_on");
  })
})
