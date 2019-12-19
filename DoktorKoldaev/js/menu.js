$(function () {

    let menuList = $('.menu-list');

    menuList.css('display', 'none');

    $('.header-menu__burger').on('click', function () {

        let menu = $(this).children('.menu-burger');

        if (menu.hasClass('animate')){
            return
        }

       menu.toggleClass('menu-active').addClass('animate');;
        

       (menu.hasClass('menu-active')) ? menuList.slideDown(500 , function (){menu.removeClass('animate')}): menuList.slideUp(500, function () {menu.removeClass('animate')})

    })

})