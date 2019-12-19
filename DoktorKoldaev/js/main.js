$(function () {

    let ask = $(".ask-list__text");
    let answer = $(".ask-answer__text");

    $(".comment-slider__list").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $(".slider-btn__right"),
        prevArrow: $(".slider-btn__left"),
        autoplay: true,
        autoplaySpeed: 4000
    });

    // $(".comment-slider__list").slick({
        
    //     infinite: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrows: false,
    //     autoplaySpeed: 4000,

    //     responsive: [
    //         {
    //             breakpoint: 2048,
    //             settings: "unslick"
    //         },
    //         {
    //             breakpoint: 993,
    //             settings: {
    //                 arrows: false 
    //             }
               
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 infinite: false 
    //             }
    //         }
            
    //     ]
    // });



    ask.on("click", function () {
        let indx = $(this).attr("data-tab");

        ask.removeClass("tab-active");

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