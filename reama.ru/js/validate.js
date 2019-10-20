$(document).ready(function(){
    $('[data-submit]').on('click', function(e){
        e.preventDefault();
        $(this).parents('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
        );
    function valEl(el){
        $.validator.addMethod("requiredphone", function (value, element) {
            return value.length || $.trim($('[name="email"]').val());
        },
        "Заполните телефон или email!");
        $.validator.addMethod("requiredemail", function (value, element) {
            return value.length || $.trim($('[name="phone"]').val());
        },
        
        "Заполните email или телефон!");

        $(".order-form").validate({
            rules: {
                phone: {requiredphone: true},
                email: {requiredemail: true},
                name:{ required:true}
            },
            messages:{
                name:{
                    required:'Поле обязательно для заполнения',
                }

            },    
            submitHandler: function (form,event) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch($formId){
                    case'popupCall':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize(),
                    })
                    .always(function (response) {                    
                        setTimeout(function (){
                            $('#loader').fadeOut();
                        },800);
            //  $('#loader').fadeOut();
            // },800);
            setTimeout(function (){
                $('#overlay').fadeIn();
                $form.trigger('reset');
              //строки для остлеживания целей в Я.Метрике и Google Analytics
          },1100);
            // скрытие последнего окна с формой и появление первого
            $('#overlay').on('click', function(e) {
                $('#overlay').fadeOut();
                $('.popup_wrapper').css({'opacity': '0', 'z-index': '-1', 'visibility': 'hidden'});
                $('.overlay').css({'display': 'none'});
            });
        });
                    break;

            // popupOrder
            case'popupOrder':
            var i=0,D=new FormData;
            for(i in form.elements)
                if(form.elements[i].type==='file')
                    D.append('fileToUpload',form[i].files[0]);
                else
                    D.append(form.elements[i].name,form.elements[i].value);
                $.ajax({
                    data: D,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    url: $form.attr('action')
                })
//                $.ajax({
//                	type: 'POST',
//                	url: $form.attr('action'),
//                	data: $form.serialize(),
//                })
.always(function (response) {                    
setTimeout(function (){
    $('#loader').fadeOut();
},800);
setTimeout(function (){
    $('#overlay').fadeIn();
    $form.trigger('reset');
              //строки для остлеживания целей в Я.Метрике и Google Analytics
          },1100);
$('#overlay').on('click', function(e) {
    $('#overlay').fadeOut();
    $('.overlay').css({'display': 'none'});
});
$('.img-close').on('click', function(e) {
    $('#overlay').fadeOut();
    $('.overlay').css({'display': 'none'});
});
});
break;

}       
return false; 
}                           
})
    }  
    $('.js-form').each(function() {
        valEl($(this)); 
    });

})