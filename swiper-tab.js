const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      600: {
          slidesPerView: 1,
          slidesPergroup: 1,
          spaceBetween: 1
  },
      1000: {
          slidesPerView: 1,
          slidesPergroup: 1
          
      }
  }

});


var swiperSlides = document.getElementsByClassName("swiper-buttons")

for(var x of swiperSlides){
  x.addEventListener("hover", function(){
    var image = document.createElement("img")
    img.setAttribute("href")
  })
}