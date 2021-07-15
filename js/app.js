// Опрацьовуємо подію запуску слайдеру
$('.photos-slider').on('init', function(event, slick){
  
  // отримуємо загальну кількість слайдів
  var totalSlides = slick.slideCount;
  // оновлюємо html у відповідному елементі
  $('#total_slides').html(totalSlides);
});

// отримуємо індекс поточного слайду
$('.photos-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var currentSlide = slick.currentSlide + 1;
  $('#current_slide').html(currentSlide);
});

// ініціалізація (запуск) слайдерв
$(document).ready(function(){

  var sliderOptions = {
    arrows: false
  }

  $('.photos-slider').slick(sliderOptions);
});


$('#slider_next').on('click',function(){
  // перехід до наступного слайду
  $('.photos-slider').slick('slickNext');
});
$('#slider_prev').on('click',function(){
    // перехід до попереднього слайду
  $('.photos-slider').slick('slickPrev');
});

