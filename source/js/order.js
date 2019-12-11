"use strict";

(function () {
var modal = document.querySelector(".popup");
var order = document.querySelector(".week-product__order-btn");
var size = document.querySelector('#size-s');
var ESC_KEYCODE = 27;

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
  if (modal.classList.contains("popup--close")) {
    modal.classList.remove("popup--close");
    modal.addEventListener("click", onClickModalClose);
    document.addEventListener("keydown", onEscModalClose);
    size.focus();
  } else {
    modal.classList.add("popup--close");
  }
};

order.addEventListener("click", onClickModalOpen);
})();
