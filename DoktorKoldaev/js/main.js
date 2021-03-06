$(function () {

    let ask = $(".ask-list__text");
    let answer = $(".ask-answer__text");
    let askSlider = $(".ask-list");
    
    $(".comment-slider__list").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $(".slider-btn__right"),
        prevArrow: $(".slider-btn__left"),
        autoplay: true,
        autoplaySpeed: 4000
    });

    askSlider.slick({
        
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
            breakpoint: 768,
                settings: {
                    infinite: false ,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
            
        ]
    });


    $('.ask-list').children().addClass('slider-list__two')

   tabClose(1);
   
    ask.on("click", function () {
        
        let indx = $(this).attr("data-tab");
        let slickIndex  = $(this).attr("data-tab")-1;

        ask.removeClass("tab-active");
      
        askSlider.slick('slickGoTo', slickIndex);
    
        $(this).addClass("tab-active");

        tabClose(indx);
    });

    function tabClose(index) {
        
        if ($('[data-indx='+index+']').hasClass("active")) {
            return;
        }
      
        answer.hide(500, function () {
            answer.removeClass("active");
        });

        $('[data-indx='+index+']').show(500, function () {
            $(this).addClass("active");
       });
    }

  

})
