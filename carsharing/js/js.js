$(function () {

    let $buttonUp = $('.buttonUp')
    let $pageHeight = $('html, body').height();
    let $window = $(window);
    let $headLink = $('.head-nav__link');
    let pxPerSec = 2;
    let $btnPlay = $('.auto-button__play');
    let $btnExit = $('.fa')



    $headLink.on('click', function (e) {
        e.preventDefault();

        let $class = $(this).attr('href');
        let $target = $($class);
        let S = Math.abs($(window).scrollTop() - $target.offset().top);
        
        if ($headLink.hasClass('animate')) {
            return
        }
        $headLink.addClass('animate')

        $('html,body').animate({
            scrollTop: $target.offset().top - 66
        }, S/pxPerSec, function () {
            $headLink.removeClass('animate')
        });

    })


    $buttonUp.on('click', function () {

        let S = $(window).scrollTop();
        
        if ($buttonUp.hasClass('animate')) {
            return
        }

        $buttonUp.addClass('animate')

        $('html,body').animate({
            scrollTop: 0
        }, S/pxPerSec, function () {
            $buttonUp.removeClass('animate')
        });

    })




    $window.on('scroll', onScroll);
    onScroll();

    function onScroll() {
        let pos = $window.scrollTop();
        let $head = $('header')

       
        for (let i = $headLink.length - 1; i >= 0; i--) {
            let $link = $headLink.eq(i);
            let id = $link.attr('href');
            let $target = $(id);
           
            
        if (pos > $target.offset().top - 300 || pos > 3500) {
                $headLink.removeClass('active');
                $link.addClass('active');
                break;
            }
        }


        if (pos > ($pageHeight / 5)) {
            $buttonUp.fadeIn(500)
        } else {
            $buttonUp.fadeOut(500)
        }

        if (pos > 20) {
            $head.addClass('sticky')
        } else {
            $head.removeClass('sticky')
        }
    }



    $btnPlay.on('click', function () {

        let $modal = $('.modal');

       
        $('body').addClass('modal-on');
        
        $modal.show(500);

    });

    $btnExit.on('click', function () {

        let $modal = $('.modal');

        $modal.fadeOut(500);
        
        $('body').removeClass('modal-on');

    });


     
    



})