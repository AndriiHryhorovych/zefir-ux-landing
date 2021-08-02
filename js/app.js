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




// feedback-sider__photos

$('.feedback-sider__photos').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// Опрацьовуємо подію запуску слайдеру
$('.feedback-sider__photos').on('init', function(event, slick){
  
  // отримуємо загальну кількість слайдів
  var feedbackTotalSlides = slick.slideCount;
  // оновлюємо html у відповідному елементі
  $('#feedback-total_slides').html(feedbackTotalSlides);
});

// отримуємо індекс поточного слайду
$('.feedback-sider__photos').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var feedbackCurrentSlide = slick.currentSlide + 1;
  $('#feedback-current_slide').html(feedbackCurrentSlide);
});

// ініціалізація (запуск) слайдерв
$(document).ready(function(){

  var sliderOptions = {
    arrows: false
  }

  $('.feedback-slider__photos').slick(sliderOptions);
});


$('#feedback-slider_next').on('click',function(){
  // перехід до наступного слайду
  $('.feedback-sider__photos').slick('slickNext');
});
$('#feedback-slider_prev').on('click',function(){
    // перехід до попереднього слайду
  $('.feedback-sider__photos').slick('slickPrev');
});