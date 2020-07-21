$(function () {
  let data = $(".container").data("page");

  $(".menu-btn").on("click", function () {
    // Открываем меню

    $(".modal-burger").show(500);
  });

  $(".modal-close__btn").on("click", function () {
    //  закрываем  меню
    $(".modal-burger").hide(500);
  });

  $(".modal-message__button").on("click", function () {
    //  закрываем блок успешной отправки сообщения на сервер

    $(".modal-message").fadeOut(500);
  });

  $(`a[href="${data}.php"]`).addClass("menu-active"); // Выделяем цветом ссылки на страницах которых находится пользователь

  /* Скрипт валидации*/
  $("#index-form").validate({
    rules: {
      username: "required",

      email: {
        required: true,
        email: true,
      },
    },

    messages: {
      username: "Пожалуйста укажите имя",
      email: {
        required: "Введите ваш e-mail",
        email: "Неправильно введен адрес почты",
      },
    },
  });

  $("form").submit(function (e) {
    e.preventDefault();

    if (
      $("label.error").length === false ||
      $("label.error").is(":visible") === false
    ) {
      $.ajax({
        type: "POST",
        url: "smart.php",
        data: $(this).serialize(),
      }).done(function () {
        $("form").find("input").val("");

        $(".modal-message").fadeIn(500);

        $("form").trigger("reset");
      });
    }

    return false;
  });
});
