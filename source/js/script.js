"use strict";

(function () {
var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".page-header__menu-toggle");
var weekProduct = document.querySelector(".top-products");
var goods = document.querySelector(".catalog");
var modal = document.querySelector(".popup");

var ESC_KEYCODE = 27;

// menu toggle ----------------------------------------------------------------

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

// modal handler --------------------------------------------------------------

var modalClose = function() {
  modal.classList.add("popup--close");
  modal.removeEventListener("click", onClickModalClose);
  document.removeEventListener("keydown", onEscModalClose);
};

var onEscModalClose = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    modalClose();
  }
};

var onClickModalClose = function(evt) {
  var target = evt.target;
  if(target === modal) {
    modalClose();
  }
};

var onClickModalOpen = function() {
  var size = document.querySelector('#size-s');

  if (modal.classList.contains("popup--close")) {
    modal.classList.remove("popup--close");
    modal.addEventListener("click", onClickModalClose);
    document.addEventListener("keydown", onEscModalClose);
    size.focus();
  } else {
    modal.classList.add("popup--close");
  }
};

// add listeners --------------------------------------------------------------
var addListeners = function() {
  if (menu) {
    menuToggle.addEventListener("click", onClickToggle);
  }

  if (weekProduct) {
    var order = document.querySelector(".week-product__order-btn");
    order.addEventListener("click", onClickModalOpen);
  };

  if (goods) {
    var cartBtns = document.querySelectorAll(".goods__cart");
    [].forEach.call(cartBtns, function(item) {
      item.addEventListener("click", onClickModalOpen);
    })
  }
};

addListeners();

// map loader -----------------------------------------------------------------------

var contacts = document.querySelector('.contacts');

if (contacts) {
  var mapPic= document.querySelector('.contacts__map-container');

  ymaps.ready(init);

  function init () {
    mapPic.classList.add('contacts__map-container--hide');

    var myMap = new ymaps.Map('map', {
      center: [59.938680, 30.322992],
      zoom: 16
  }),

  myPlacemark = new ymaps.Placemark([59.938680, 30.322992], {
      hintContent: 'Интернет магазин «Мишка»'
  }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-35, -85]
  })

  myMap.geoObjects.add(myPlacemark);
  };
}
})();
