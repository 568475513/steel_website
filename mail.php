<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $number = $_POST['number'];
    $comment = $_POST['comment'];


    try{
        $mail->isSMTP();
        $mail->Host       = 'smtp.qq.com'; 
        $mail->SMTPAuth   = true;
        $mail->Username   = '568475513@qq.com';  // SMTP 用户名
        $mail->Password   = 'fmgfjexyvodjbebj';      // SMTP 密码
        $mail->SMTPSecure = 'ssl'; // 加密方式
        $mail->Port       = 465;                 // SMTP 端口

    // 收件人设置
        $mail->setFrom('568475513@qq.com', '发件人名称');
        $mail->addAddress('sales@onetopsteel.com', '收件人名称');

        // 邮件内容
        $mail->isHTML(true);                     // 设置为HTML格式
        $mail->Subject = 'One Top Steel!';
        $mail->Body    = "
        Name: $name <br>
        Email: $email <br>
        Website: $website  <br>
        Phone: $number  <br>
        Comment: $comment  <br>
        ";

        $mail->send();
        echo '邮件已发送';
    }catch(Exception $e){
        echo '邮件发送失败';
    }
}
?>