$(function(){
   var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',   
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop:true,
      centeredSlides: true,
      initialSlide:0,
      autoplay: 2000,
      autoplayDisableOnInteraction : false,
      paginationClickable: true,
      pagination: '.swiper-pagination'
  })
})