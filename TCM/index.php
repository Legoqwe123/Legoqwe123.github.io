<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/slick.css" />
    <link rel="stylesheet" type="text/css" href="css/slick-theme.css" />

    <title>Title</title>

</head>

<body>

    <div class='container'>
      
      
      <?php include('includes/header.php') ?>

       
        <div class="slider">
            <div class="slider-block">
                <div class="slider-background__one">
                    <div class="slider-block__item  content-container">
                        <div class="slider-block__text">
                            <span class="slider-text">Как организовать эффективный мониторинг охранников?</span>
                        </div>
                        <div class="slider-block__image">
                            <img src="img/slider-phone.png" alt="" class="slider-image">
                        </div>
                    </div>
                </div>
                <div class=" slider-background__two">
                    <div class="slider-block__item  content-container">
                        <div class="slider-block__text">
                            <span class="slider-text">Как проверить охранников, не выезжая на объект?</span>
                        </div>
                    </div>
                </div>
                <div class="slider-background__three ">
                    <div class="slider-block__item  content-container">
                        <div class="slider-block__text">
                            <span class="slider-text">Как контролировать охрану удаленных объектов онлайн?</span>
                        </div>
                    </div>
                </div>
            </div>
          <div class="slider-button">
             <button type="button" class="slider-button__prev">
                    <img src="img/arrow__prev.png" alt="" class="slider-img__prev">
                </button>
                <button type="button" class="slider-button__next">
                    <img src="img/arrow_next.png" alt="" class="slider-img__next">
                </button>
            </div>
         </div>

         <div class="info">
            <div class='info-block content-container'>
                <ul class="info-block__list">
                    <li class="info-block__item">
                        <h3 class="info-block__num">3000</h2>
                        <p class="info-block__text"><span class="info-block__decorate">рублей в месяц</span>стоимость контроля 10 постов </p>
                    </li>
                    <li class="info-block__item">
                        <h3 class="info-block__num">1</h2>
                        <p class="info-block__text"><span class="info-block__decorate">час,</span>чтобы запустить сервис на Ваших объектах</p>
                    </li>
                    <li class="info-block__item">
                        <h3 class="info-block__num">20</h2>
                        <p class="info-block__text"><span class="info-block__decorate">минут</span>на обучение персонала работе с сервисом</p>
                    </li>
                    <li class="info-block__item">
                        <h3 class="info-block__num">20 000</h2>
                        <p class="info-block__text"><span class="info-block__decorate">рублей</span>экономия на топливе для выездных проверок</p>
                    </li>
                </ul>
           </div>
        </div>


        <div class="presentation">
            <div class="presentation-block content-container">
                 <h1 class="presentation-title">Видеопрезентация<span>ТСМ.КОНТРОЛЬ</span></h1>
                 <div class="presentation-video">
                     
                 </div>
            </div>
        </div>


        <div class="test">
          <h1 class="test-name">Протестируйте<span>ТСМ.КОНТРОЛЬ</span> прямо сейчас</span></h1>
            <div class="test-block content-container">
                <div class="test-phone">
                    <img src="img/test-phone.png" alt="" class="test-phone__img">
                </div>
                <div class="test-form">
                 <div class="test-form__wrp">
                   <form action="" class="test-form__tcm" > 
                       <span class="test-form__title">Обратная связь</span>
                       <input type="text" placeholder="Имя" class="test-form__name" >
                       <input type="email" placeholder="E-mail" class="test-form__email">
                       <button type="submit" class="test-form__button">ОТПРАВИТЬ</button>
                       <p class="test-form__info">Нажимая на кнопку «ОТПРАВИТЬ», вы даете  <span>согласие</span> на обработку вашей персональной информации</p>
                   </form>
                </div>
                <div class="test-title__wrp">
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
            </div>
            </div>
        </div>

        <?php include('includes/footer.php') ?>

    </div>



    
    
    
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="js/slick.min.js"></script>
    
    
    
    <script>
        $(function () {

            $('.slider-block').slick({
                slideToShow: 1,
                slidesToSroll: 1,
                prevArrow: $('.slider-button__prev'),
                nextArrow: $('.slider-button__next'),
                draggable: false
            })

        })
    </script>
</body>

</html>