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

        answer.fadeOut(300, function () {
            answer.removeClass("active");
        });

        $('[data-indx='+index+']').fadeIn(300, function () {
            $(this).addClass("active");
        });
    }


})