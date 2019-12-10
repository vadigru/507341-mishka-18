"use strict";

(function () {
var modal = document.querySelector(".popup");
var cartBtns = document.querySelectorAll(".goods__cart");
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
  } else {
    modal.classList.add("popup--close");
  }
};

var addListeners = function() {
  [].forEach.call(cartBtns, function(item) {
    item.addEventListener("click", onClickModalOpen);
  })
};

addListeners();
})();
