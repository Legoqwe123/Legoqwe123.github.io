$(function(){
   
    let itemWdth = $('.offer-slider__item').width();
    
    $('.offer-item__arrows').on('click', function () {
         let sliderBlock = $(this).next();
         let arrowsBlock = $(this);
        
         arrowsBlock.toggleClass('arrows-active');

        (arrowsBlock.hasClass('arrows-active')) ? sliderBlock.css('margin-left',-+itemWdth+'px') : sliderBlock.css('margin-left' , '0px')
   })
   
   $('.offer-delivery__radio').on('click', function () {
       let radioValue = $(this).attr('value');
       let priceValue = $(this).closest('.offer-wrp__description').siblings('.offer-wrp__cost').children('.offer-price').text();
       let valueBlock = $(this).parent().children('.offer-delivery__block').children('.offer-price');
       let sum = parseInt(radioValue)+ parseInt(priceValue)
       
       valueBlock.text(sum + ' ' + '₽')
       
    })


    

})