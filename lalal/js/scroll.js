$(function () {
  $(window).on("scroll", function () {
    let $scrollCord = $(this).scrollTop();
    let $blockHeight = $("body").height();

    if ($scrollCord > $blockHeight * 0.2) {
      $("#up").fadeIn(500);
    } else {
      $("#up").fadeOut(500);
    }
  });

  $("#up").click(function () {
    const S = $(window).scrollTop();

    const contacts = $("#contacts").scrollTop();

    const speed = 5;
    const t = S / speed;
    $("body,html").animate({ scrollTop: contacts }, t);
  });

  //Обработка нажатия на кнопку "Вниз"
  $("#down").click(function () {
    //Необходимо прокрутить в конец страницы
    const curPos = $(window).scrollTop();
    const height = $("body").height();
    const scrollTime = (height - curPos) / 3;

    $("body,html").animate({ scrollTop: height }, scrollTime);
  });
});
