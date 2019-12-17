<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <title>ТСМ.Контроль</title>
</head>

<body>
   
    <div class="container" data-page='contact'>

        <?php include('includes/header.php') ?>  

        <?php include('includes/modal.php') ?>
        
        <div class="test">
          <div class="contact-block content-container">
               <div class="contact-form">
                  <div class="contact-title__wrp">
                        <p class="test-title contact-title">ООО “Технологии спутникового мониторинга”</p>
                          <div class="test-phone">
                                  <img src='img/phone.png' class="test-phone__icon">
                                  <a href="tel:+79617170404" class="test-phone__text">+7 (961)717 04 04</a>
                              </div>
                              <div class="test-mail">
                                  <img src='img/mail.png' class="test-mail__icon">
                                  <a href="mailto:contact@tsmonitor.us" class="test-mail__text">contact@tsmonitor.us</a>
                            </div>
                            <span class="test-place">г. Новокузнецк, Ростовская, 13</span>
                    </div>
                <div class="test-form__wrp contact-form__wrp">
                   <form action="" class="test-form__tcm" id='contact-form' > 
                       <span class="test-form__title">Обратная связь</span>
                       <input type="text" placeholder="Имя" class="test-form__name" name="username">
                       <input type="email" placeholder="E-mail" class="test-form__email" name="email">
                       <button type="submit" class="test-form__button">ОТПРАВИТЬ</button>
                       <p class="test-form__info">Нажимая на кнопку «ОТПРАВИТЬ», вы даете  <span>согласие</span> на обработку вашей персональной информации</p>
                   </form>
                </div>
              </div>
             <div class="contact-map" id ='map'>
            <script type="text/javascript" charset="utf-8" async
                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3c2bf0dd0331dcf28cd20af76482f1fb27120d2063a5d0eacf3ef328bcc62e68&amp;width=100%25&amp;height=557&amp;lang=ru_RU&amp;scroll=false"></script>
             </div>
            </div>
        </div>
  
        <?php include('includes/footer.php') ?>

    </div>

    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/jquery.validate.min.js"></script>
     <script>
       $(function () {
          
        /* Скрипт валидации*/
          $('#contact-form').validate({  
          
          
          rules: {
              username: 'required', 

              email: {
                  required: true ,
                  email: true
              }

          } ,

              messages:{
                  username: "Пожалуйста укажите имя",
                  email: {
                      required: "Введите ваш e-mail",
                      email: "Неправильно введен адрес почты"
                  }
              }

          
      });

    })
    
    
    </script>
 
    <script src="js/main.js"></script>
    
    

</body>

</html>