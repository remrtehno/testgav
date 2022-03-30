$(function () {
  $('.main-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  })

  setTimeout(function () {
    var $carousel = $('.owl-carousel')
    $carousel.data('owl.carousel')._invalidated.width = true
    $carousel.trigger('refresh.owl.carousel')
  }, 600)
})
