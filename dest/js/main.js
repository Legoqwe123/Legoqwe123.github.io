$(document).ready(function(){$(".slider-top__wrapper").slick({slidesToScroll:1,arrows:!0,dots:!1,centerMode:!0,slidesToShow:1,autoplay:!0,autoplaySpeed:5e3,centerPadding:"-5px",prevArrow:'<img class="info-slider-prev" src="img/ar-left.png">',nextArrow:'<img class="info-slider-next" src="img/ar-right.png">',responsive:[{breakpoint:776,settings:{arrows:!1,autoplay:!1}}]}),$(".slider-top__wrapper").on("afterChange",function(e,l,o){$(".content").hide().removeClass("top-0"),$(".content[data-id="+(o+1)+"]").show().addClass("top-0")}),$(".reviews__slider").slick({slidesToScroll:1,arrows:!1,dots:!0,centerMode:!0,slidesToShow:1,centerPadding:"20px",dotsClass:"my-dots"});var e=document.getElementById("scene");new Parallax(e),e=document.getElementById("scene2"),new Parallax(scene2),e=document.getElementById("scene3"),new Parallax(scene3),e=document.getElementById("scene4"),new Parallax(scene4)}),$(function(){$(".btn-popup").click(function(){$(".popup_wrapper").css({opacity:"1","z-index":"9999999",visibility:"visible"}),$(".overlay").css({display:"block"})})}),$(document).ready(function(){$(".overlay, .img-close").click(function(){$(".popup_wrapper").css({opacity:"0","z-index":"-1",visibility:"hidden"}),$(".overlay").css({display:"none"})}),$(document).on("click",".btn-scroll",function(e){e.preventDefault(),$("html, body").stop().animate({scrollTop:$("#orders").offset().top},1e3,"linear")}),$(".scroll_to_slide_1").click(function(e){e.preventDefault(),$(".slider-top-slide").slick("slickGoTo",2)})}),$(document).ready(function(){function e(){$(window).width()<768?($(".name").attr("placeholder","Имя Фамилия"),$(".email").attr("placeholder","E-Mail"),$(".phone").attr("placeholder","Телефон")):($(".name").attr("placeholder","Имя Фамилия (мы будем знать как к вам обратиться)"),$(".email").attr("placeholder","E-Mail (мы сможем вам ответить письменно)"),$(".phone").attr("placeholder","Телефон (только зная ваш номер мы сможем вам позвонить)"))}$(".scroll_to_slide_2").click(function(e){e.preventDefault(),$(".slider-top__wrapper").slick("slickGoTo",1)}),$(".scroll_to_slide_3").click(function(e){e.preventDefault(),$(".slider-top__wrapper").slick("slickGoTo",2)}),$(".scroll_to_slide_4").click(function(e){e.preventDefault(),$(".slider-top__wrapper").slick("slickGoTo",3)}),$(".scroll_to_slide_5").click(function(e){e.preventDefault(),$(".slider-top__wrapper").slick("slickGoTo",4)}),$(".scroll_to_slide_6").click(function(e){e.preventDefault(),$(".slider-top__wrapper").slick("slickGoTo",5)}),$(".slider-top-next").click(function(){$(".slider-top__wrapper").slick("slickNext")}),$(".slider-top-prev").click(function(){$(".slider-top__wrapper").slick("slickPrev")}),$(window).resize(e),e(),$(".burger-menu__link").on("click",function(e){e.preventDefault();var l=$(this).attr("href"),o=$(l);$("html,body").animate({scrollTop:o.offset().top},1e3)}),$(".menu-btn").on("click",function(e){e.preventDefault(),$(this).toggleClass("menu-btn_active"),$(".burger-menu").toggleClass("burger-menu__active")}),$(window).on("scroll",function(){$(this).scrollTop()>$(".offers").offset().top&&($(".burger-menu").removeClass("burger-menu__active"),$(".menu-btn").removeClass("menu-btn_active"))})});