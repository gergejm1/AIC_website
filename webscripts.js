// Autoplay Slideshow (for .mySlides)
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000);
}



const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

const verticalSwiper = new Swiper(".swiper-vertical", {
  direction: "vertical", // Enable vertical sliding
  slidesPerView: 2,
  spaceBetween: 10,
  mousewheel: true, // Enable mouse wheel control
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  crossFade: true, // Enable crossfade effect
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 70,
    modifier: 1,
    slideShadows: false,
  },
});




