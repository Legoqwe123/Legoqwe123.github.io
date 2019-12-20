$(function () {
    
    let $links = $('.menu-link');
    let $headerLinks = $('.header-menu__link');
    let $buttonUp = $('.button-wrp__up')
    
    $headerLinks.on('click', function (e) {
        scrollLink(e , $(this));
    });

    $links.on('click', function (e) {
        scrollLink(e , $(this));
    });


    function scrollLink (event, element) {
        event.preventDefault();

        $links.removeClass('active');
        let $link = element.addClass('active');
        let id = $link.attr('href');
        let $target = $(id);
        let S = Math.abs($(window).scrollTop() - $target.offset().top);
        let U = 2.8;
        let t = S / U;
       
      if ($target.length > 0) {
            $('html,body').animate({
                scrollTop: $target.offset().top
            }, t );
        }
    };
  $(window).on('scroll', function () {

        let $scrollCord = $(this).scrollTop()
        let $blockHeight = $('body').height()

        if ($scrollCord > ($blockHeight*0.2)) {
            $buttonUp.fadeIn(500)
        } else {
            $buttonUp.fadeOut(500)
        }

    })

    $buttonUp.on('click', function () {

        let S = $(window).scrollTop();
        let speed = 5;
        let t = S / speed;

        $('html,body').animate({
            scrollTop: 0
        }, t);
   
    })


})