<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Title</title>
</head>

<body>
   
    <div class="container">

        <?php include('includes/header.php') ?>  
        
        <div class="test">
          <div class="contact-block content-container">
               <div class="contact-form">
                  <div class="contact-title__wrp">
                        <p class="test-title">ООО “Технологии спутникового мониторинга”</p>
                          <div class="test-phone">
                                  <img src='img/phone.png' class="test-phone__icon">
                                  <a href="+7(961)7170404" class="test-phone__text">+7 (961)717 04 04</a>
                              </div>
                              <div class="test-mail">
                                  <img src='img/mail.png' class="test-mail__icon">
                                  <a href="specsvyaz@bk.ru" class="test-mail__text">specsvyaz@bk.ru</a>
                            </div>
                            <span class="test-place">г. Новокузнецк, Ростовская, 13</span>
                    </div>
                <div class="test-form__wrp">
                   <form action="" class="test-form__tcm" > 
                       <span class="test-form__title">Обратная связь</span>
                       <input type="text" placeholder="Имя" class="test-form__name" >
                       <input type="email" placeholder="E-mail" class="test-form__email">
                       <button type="submit" class="test-form__button">ОТПРАВИТЬ</button>
                       <p class="test-form__info">Нажимая на кнопку «ОТПРАВИТЬ», вы даете  <span>согласие</span> на обработку вашей персональной информации</p>
                   </form>
                </div>
              </div>
             <div class="contact-map">
                <script type="text/javascript" charset="utf-8" async
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3c2bf0dd0331dcf28cd20af76482f1fb27120d2063a5d0eacf3ef328bcc62e68&amp;width=770&amp;height=520&amp;lang=ru_RU&amp;scroll=false">
                </script>
             </div>
            </div>
        </div>
  
        <?php include('includes/footer.php') ?>

    </div>


</body>

</html>