$(document).ready(function(){
     var button = $('.navbar_button');
     var buttonClose = $('.modal-dialog__close');
     
    button.click(function buttonClick (){
    $('.modal').css('display','flex')
    })
    buttonClose.click(function buttonClose (){
        $('.modal').css('display', 'none')

    })
 
    })
    
  
   
