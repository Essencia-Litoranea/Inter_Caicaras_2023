
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
})


sr.reveal(`.section-title, .section-aboutus--left, .flip-card, .content `,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.about__data, 
         .video__description`,{
  origin: 'left',
})

sr.reveal(`.about__img-overlay, 
         .video__content,`,{
  origin: 'right',
  interval: 100,
})