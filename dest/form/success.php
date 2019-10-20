<?php


header("Content-Type: text/html; charset=utf-8");
function htmlspecialchars_($v){return htmlspecialchars($v,ENT_COMPAT|ENT_HTML401,'UTF-8');}
$email = htmlspecialchars_($_POST["email"]);
$name = htmlspecialchars_($_POST["name"]);
$phone = htmlspecialchars_($_POST["phone"]);
$text = htmlspecialchars_($_POST["text"]);

//ini_set('display_errors',1);
//error_reporting(E_ALL);


//// FILE UPLOAD
//$target_dir = "mail_img/";
//$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
//$uploadOk = 1;
//$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
//// Check if image file is a actual image or fake image
//if(isset($_POST["submit"])) {
//    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//    if($check !== false) {
//        echo "File is an image - " . $check["mime"] . ".";
//        $uploadOk = 1;
//    } else {
//        echo "Файл должен быть JPG, JPEG, PNG или GIF.";
//        $uploadOk = 0;
//    }
//}
//// Check if file already exists
//if (file_exists($target_file)) {
//    echo "Sorry, file already exists.";
//    $uploadOk = 0;
//}
//// Check file size
//if ($_FILES["fileToUpload"]["size"] > 500000) {
//    echo "Извините, Ваш файл слишком большой.";
//    $uploadOk = 0;
//}
//// Allow certain file formats
//if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
//&& $imageFileType != "gif" ) {
//    echo "Файл должен быть JPG, JPEG, PNG или GIF.";
//    $uploadOk = 0;
//}
//// Check if $uploadOk is set to 0 by an error
//if ($uploadOk == 0) {
//    echo "Извините, возникла ошибка. Файл не загружен.";
//// if everything is ok, try to upload file
//} else {
//    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
//        echo "Файл загружен ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
//    } else {
//        echo "Извините, возникла ошибка. Файл не загружен.";
//    }
//}
//
//// FILE UPLOAD END

$file=(	$a=@$_FILES['fileToUpload']['tmp_name'] and
		preg_match('/(?:jpg|jpeg|gif|bmp|png|pdf|doc|docx|xls|xlsx)$/i',$b=$_FILES['fileToUpload']['name']) and
		move_uploaded_file($a,$_='./upl_'.$b))
	?$_:false;
	

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "siteREAMA@gmail.ru"; //отправитель почта для получения письма админом

if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
$tema = "$formData";
$message_to_myemail = "
Имя: $name<br>
Email: $email<br>
Телефон: $phone<br>
Текст: $text<br>
"./*Файл: $refferer$target_dir<br>*/"

 Источник (ссылка): $refferer
";

require_once './mailer.inc';
$sender=$reply_to=$myemail;//?
$recipient = "reama325819@gmail.com"; //почта для получения письма админом
// $recipient=$myemail;
$subject=$tema;
$message=$message_to_myemail;
$M=new Mailer($sender,$reply_to,$recipient,$subject,strip_tags($message));
// $M->addHTML($message);
if($file)$M->addAttachment($file);
try{$M->send();}
catch(Exception $e){echo $e->getMessage();}
if($file)unlink($file);

?>
