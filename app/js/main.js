$(function () {

  $('.catalog__filters-btn').on('click', function() {
    $('.catalog__filters').toggleClass("active");
  });

  $('.filter__title').on('click', function() {
    $(this).next('.filter__form').slideToggle();
    $(this).toggleClass('filter__title--active');
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "&#8372;",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });

  $(".header__icon--search").on('click', function () {
    $(".header__search, .header__search-input").toggleClass("active");
  });
  
});

new Swiper('.hero__slider', {
  speed: 400,
  slidesPerView: 1,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.hero__btn-next',
    prevEl: '.hero__btn-prev',
  },
});

new Swiper('.subcategories__slider', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 2,
  grabCursor: true,
  breakpoints: {
    424: {
      slidesPerView: 3
    },
    552: {
      slidesPerView: 4
    },
    696: {
      slidesPerView: 5
    },
    828: {
      slidesPerView: 6
    },
    962: {
      slidesPerView: 7
    },
    1090: {
      slidesPerView: 8
    },
  }
});

const closeMenu = document.querySelector('.header__btn--close-menu').onclick = close;
const openMenu = document.querySelector('.header__btn--menu').onclick = open;
const menu = document.querySelector('.header__nav');


function open() {
  menu.classList.add('active');
}

function close() {
  menu.classList.remove('active');
}