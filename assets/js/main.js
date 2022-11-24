// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@             PRELOADER             @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const preloader = document.querySelector('.preloader');
// setTimeout(() => {
//   preloader.classList.add('preloader-opacity');
// }, 3000);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@       ADD HEADER BOX SHADOW       @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (this.scrollY >= 50) {
    header.classList.add('header-shadow');
  } else {
    header.classList.remove('header-shadow');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW & REMOVE MENU      @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@      swiperjs.com (HOME SECTION)      @@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const homeSwiper = new Swiper('.home__swiper', {
  spaceBetween: 100,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@            SCROLL UP              @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const scrollUp = document.querySelector('.scrollup');

// window.addEventListener('scroll', function () {
//   if (this.scrollY > 50) {
//     scrollUp.classList.add('show-scrollup');
//   } else {
//     scrollUp.classList.remove('show-scrollup');
//   }
// });

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@        scrollrevealjs.org         @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 300,
});

sr.reveal(`.trade__content`);

sr.reveal(`.investment__data ,.products__card`, {
  interval: 200,
});

sr.reveal(``, { origin: 'bottom' });
sr.reveal(`.trade__img`, { origin: 'left' });
sr.reveal(`.trade__data`, { origin: 'right' });
