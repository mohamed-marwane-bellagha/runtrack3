<?php 
session_start();
session_destroy();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method='post' action='connexion.php'>
    <label for='email'>Entrez email</label>
    <input type='text' id='email' name='email'>
    <label for='password'>Entrez Password</label>
    <input type='password'id='password'name='password'>
    <input type='submit' name='submit' id='submit'>
    </form>
    <script src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"></script>
<script type='text/javascript' src='script.js'></script>
</body>
</html>