// slick slider
$(document).ready(function(){
   $('.slider-top__wrapper').slick({
      slidesToScroll: 1,
      arrows: true,
      dots :false,
      centerMode: true,
      slidesToShow: 1,
  autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '-5px',
    prevArrow: '<img class="info-slider-prev" src="img/ar-left.png">',
    nextArrow: '<img class="info-slider-next" src="img/ar-right.png">',
    responsive: [
    {
        breakpoint: 776,
        settings: {
          arrows: false,
          autoplay: false,
      }
  }
  ]
});

//UPDATED 
  
$('.slider-top__wrapper').on('afterChange', function(event, slick, currentSlide){   
  $('.content').hide().removeClass('top-0');
  $('.content[data-id=' + (currentSlide + 1) + ']').show().addClass('top-0');
});

   $('.reviews__slider').slick({
      slidesToScroll: 1,
      arrows: false,
      dots :true,
      centerMode: true,
      slidesToShow: 1,
      centerPadding: '20px',
      dotsClass: "my-dots",
  });

// paralax
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);

var scene = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3);

var scene = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene4);
});

// показать формы по клику
$(function () {
  $('.btn-popup').click(function() {
    $('.popup_wrapper').css({'opacity': '1', 'z-index': '9999999', 'visibility': 'visible'});
    $('.overlay').css({'display': 'block'});
});
});

// скрытие формы по клику вне области формы или на Х
$(document).ready(function(){
  $('.overlay, .img-close').click(function (){
    $('.popup_wrapper').css({'opacity': '0', 'z-index': '-1', 'visibility': 'hidden'});
    $('.overlay').css({'display': 'none'});
});

  // scroll
  $(document).on('click', '.btn-scroll', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $('#orders').offset().top
    }, 1000, 'linear');
});

// скролл к слайду с индексом
$(".scroll_to_slide_1").click(function(event){
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();
//анимируем переход на расстояние - top за 1500 мс
$('.slider-top-slide').slick('slickGoTo', 2);
});

});

// скролл к слайду с индексом
$(document).ready(function(){
$('.scroll_to_slide_2').click(function(e) {
   e.preventDefault();
   $('.slider-top__wrapper').slick('slickGoTo', 1);
 });

$('.scroll_to_slide_3').click(function(e) {
   e.preventDefault();
   $('.slider-top__wrapper').slick('slickGoTo', 2);
 });

$('.scroll_to_slide_4').click(function(e) {
   e.preventDefault();
   $('.slider-top__wrapper').slick('slickGoTo', 3);
 });

$('.scroll_to_slide_5').click(function(e) {
   e.preventDefault();
   $('.slider-top__wrapper').slick('slickGoTo', 4);
 });

$('.scroll_to_slide_6').click(function(e) {
   e.preventDefault();
   $('.slider-top__wrapper').slick('slickGoTo', 5);
 });
 
 $('.slider-top-next').click(function() {
    $('.slider-top__wrapper').slick('slickNext');
  });
  
  $('.slider-top-prev').click(function() {
    $('.slider-top__wrapper').slick('slickPrev');
  });

  let $window = $(window);
  
  $window.resize(resizeWindow);

  // Меняем значение placeholder при изменении экрана
  function resizeWindow(){
     if ($window.width() < 768){
        $('.name').attr('placeholder', 'Имя Фамилия');
        $('.email').attr('placeholder', 'E-Mail');
        $('.phone').attr('placeholder', 'Телефон');
      } else {
        $('.name').attr('placeholder', 'Имя Фамилия (мы будем знать как к вам обратиться)');
        $('.email').attr('placeholder', 'E-Mail (мы сможем вам ответить письменно)');
        $('.phone').attr('placeholder', 'Телефон (только зная ваш номер мы сможем вам позвонить)');
      }
 };

 resizeWindow();
 

 });

