const swiper = new Swiper('.swiper-container', {
  // Ваши настройки слайдера
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard:true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  lazy: true,
});