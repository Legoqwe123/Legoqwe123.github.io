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
   
    <div class="container" data-page='tariff'>

        <?php include('includes/header.php') ?>  

        <?php include('includes/modal.php') ?>
        
        <div class="tariff">
            <div class="tariff-block content-container">
               <div class="tariff-item">
                   <div class="tariff-item__image">
                        <img src="img/start.jpg" alt="" class="tariff-image__one tariff-image">
                   </div>
                   <div class="tariff-item__text">
                      <p class="tariff-item__title">Старт</p>
                      <p class="tariff-item__text"> Доступны <span>отчёты</span>  <br> <span>1</span> учетная запись менеджера</p>
                  </div>
                   <div class="tariff-item__price price-first"><span>360</span> р/месяц</div>
               </div>
               <div class="tariff-item">
                   <div class="tariff-item__image">
                        <img src="img/leadership.jpg" alt="" class="tariff-image__three tariff-image">
                   </div>
                   <div class="tariff-item__text">
                        <p class="tariff-item__title">Ментор</p>
                        <p class="tariff-item__text"> Доступны <span>отчёты</span> <br> <span>Онлайн</span>  мониторинг <br> <span>5</span> учетных записей <br> менеджера и  <span>диспетчера</span> </p>
                   </div>
                   <div class="tariff-item__price price-second"><span>930</span> р/месяц </div>
               </div>
               <div class="tariff-item">
                   <div class="tariff-item__image">
                        <img src="img/superman.jpg" alt="" class="tariff-image__three tariff-image">
                   </div>
                   <div class="tariff-item__text">
                        <p class="tariff-item__title">Профи</p>
                        <p class="tariff-item__text"> Доступны  <span>все средства</span> мониторинга и контроля; <br> <br><span>Неограниченное</span>  количество учетных записей менеджеров и <span>диспетчеров.</span></p>
                   </div> 
                   <div class="tariff-item__price price-three"><span>8000</span> р/месяц</div>
               </div>

            </div>
        </div>
  
        <?php include('includes/footer.php') ?>

    </div>


    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/main.js"></script>
    
</body>

</html>