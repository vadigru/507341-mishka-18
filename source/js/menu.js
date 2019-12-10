"use strict";

(function () {
var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".page-header__menu-toggle");
var ESC_KEYCODE = 27;

menuToggle.classList.remove("btn-nojs");
menu.classList.remove("menu-nojs");

var menuClose = function() {
  menuToggle.classList.remove("page-header__menu-toggle--open");
  menu.classList.remove("menu--open");
  document.removeEventListener("keydown", onEscMenuClose);
};

var onEscMenuClose = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    menuClose();
  }
};

var onClickToggle = function () {
  if (!menuToggle.classList.contains("page-header__menu-toggle--open")) {
    menuToggle.classList.add("page-header__menu-toggle--open");
    menu.classList.add("menu--open");
    document.addEventListener("keydown", onEscMenuClose);
  } else {
    menuToggle.classList.remove("page-header__menu-toggle--open");
    menu.classList.remove("menu--open");
  }
};

menuToggle.addEventListener("click", onClickToggle);
})();
