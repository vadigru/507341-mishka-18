"use strict";

var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".page-header__menu-toggle");

menuToggle.classList.remove("btn-nojs");
menu.classList.remove("menu-nojs");


var onClickToggle = function () {
  if (!menuToggle.classList.contains("page-header__menu-toggle--open")) {
    menuToggle.classList.add("page-header__menu-toggle--open");
    menu.classList.add("menu--open");
  } else {
    menuToggle.classList.remove("page-header__menu-toggle--open");
    menu.classList.remove("menu--open");
  }
};

menuToggle.addEventListener("click", onClickToggle);
