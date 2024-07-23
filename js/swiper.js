const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: true,
  fade: true,
  gragCursor: true,
  autoplay: true,

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Set a breakpoint for mobile devices (adjust width as needed)
    740: {
      slidesPerView: 2, // Ensure one slide on mobile
      slidesPerGroup: 2,
      autoplay: false,
    },
    1024: {
      slidesPerView: 3, // Ensure one slide on mobile
      slidesPerGroup: 3,
      autoplay: false,
    },
  },
});
