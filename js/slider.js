const swiper = new Swiper('.swiper-container', {
  // Ваши настройки слайдера
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});