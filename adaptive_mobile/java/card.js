$(document).ready(function(){
let cardAnimate = $('.cards-block__item')
let card = $ ('.cards-block')

 console.log(window.scrollY);
 
 
$(window).scroll(function(){
   if ( window.scrollY > 1710 ) {
        cardAnimate.css('animation-name', 'fadeInUp')
        }
   } )
})
 