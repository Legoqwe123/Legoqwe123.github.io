$(function(){
   
    let itemWdth = $('.offer-slider__item').width();
    
    $('.offer-item__arrows').on('click', function () {
         
         let sliderBlock = $(this).parent().siblings('.offer-slider__wrap').children();
        
         let arrowsBlock = $(this);
        
         arrowsBlock.toggleClass('arrows-active');

        (arrowsBlock.hasClass('arrows-active')) ? sliderBlock.css('margin-left',-+itemWdth+'px') : sliderBlock.css('margin-left' , '0px')
   })
   
   $('.offer-delivery__radio').on('click', function () {
       let radioValue = $(this).attr('value');
       let attrHref = $(this).attr('data-href'); // При клике на инпуте считывает атрибут data-href
       let link = $(this).closest('.offer-wrp__description').siblings(".offer-wrp__link").children(); // Находим нужную ссылку которую дудем динамически изменять
       let priceValue = $(this).closest('.offer-wrp__description').siblings('.offer-wrp__cost').children('.offer-price').text();
       let valueBlock = $(this).parent().children('.offer-delivery__block').children('.offer-price');
       let sum = parseInt(radioValue)+ parseInt(priceValue)

       link.attr('href', ''+attrHref+'') // Считываем с дата атрибута нужный нам адрес и на кнопке оплатить вставляем его в атрибуте href
       valueBlock.text(sum + ' ' + '₽')
       
    })


    

})