const cardsSwiper = new Swiper(".js-swiper", {
  loop: true,
  slidesPerView: 1, // default value
  spaceBetween: 30,
  navigation: {
    nextEl: ".js-arrow-next",
    prevEl: ".js-arrow-prev",
  },
  breakpoints: {
    768: { // adjust this value to your desired breakpoint (e.g., 768px)
      slidesPerView: 2,
    },
  },
});