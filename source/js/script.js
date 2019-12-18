(function () {
var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('.menu-btn');
var weekProduct = document.querySelector('.top-products');
var goods = document.querySelector('.catalog');
var modal = document.querySelector('.popup');

var ESC_KEYCODE = 27;

// menu toggle ----------------------------------------------------------------

menuToggle.classList.remove('menu-btn--nojs');
menu.classList.remove('menu--nojs');

var menuClose = function() {
  menuToggle.classList.remove('menu-btn--open');
  menu.classList.remove('menu--open');
  document.removeEventListener('keydown', onEscMenuClose);
};

var onEscMenuClose = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    menuClose();
  }
};

var onClickToggle = function () {
  if (!menuToggle.classList.contains('menu-btn--open')) {
    menuToggle.classList.add('menu-btn--open');
    menu.classList.add('menu--open');
    document.addEventListener('keydown', onEscMenuClose);
  } else {
    menuToggle.classList.remove('menu-btn--open');
    menu.classList.remove('menu--open');
  }
};

// modal handler --------------------------------------------------------------

var modalClose = function() {
  modal.classList.add('popup--close');
  modal.removeEventListener('click', onClickModalClose);
  document.removeEventListener('keydown', onEscModalClose);
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

var onClickModalOpen = function(evt) {
  var size = document.querySelector('#size-s');
  evt.preventDefault();
  if (modal.classList.contains('popup--close')) {
    modal.classList.remove('popup--close');
    modal.addEventListener('click', onClickModalClose);
    document.addEventListener('keydown', onEscModalClose);
    size.focus();
  } else {
    modal.classList.add('popup--close');
  }
};

// add listeners --------------------------------------------------------------

var addListeners = function() {
  if (menu) {
    menuToggle.addEventListener('click', onClickToggle);
  }

  if (weekProduct) {
    var order = document.querySelector('.week-product__order-btn');
    order.addEventListener('click', onClickModalOpen);
  };

  if (goods) {
    var cartBtns = document.querySelectorAll('.goods__cart');
    [].forEach.call(cartBtns, function(item) {
      item.addEventListener('click', onClickModalOpen);
    })
  }
};

addListeners();

// add map --------------------------------------------------------------------

var contacts = document.querySelector(".contacts");

if(contacts) {
  var mapContainer = document.querySelector('.contacts__map');
  var mapStatic = mapContainer.querySelector('.contacts__map-container');

  var mapInteractive = document.createElement('iframe');

  mapContainer.removeChild(mapStatic);
  mapContainer.appendChild(mapInteractive);
  mapInteractive.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6175532833856!2d30.32143807348629!3d59.93848807108508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2sBolshaya%20Konyushennaya%20St%2C%2019%2F8%2C%20Sankt-Peterburg%2C%20Russia%2C%20191186!5e0!3m2!1sen!2slv!4v1576613182756!5m2!1sen!2slv';
  mapInteractive.title = 'Местоположение магазина Мишка на карте';
  mapInteractive.width = '100%';
  mapInteractive.height = '100%';
  mapInteractive.style.border = '0';
}

})();
