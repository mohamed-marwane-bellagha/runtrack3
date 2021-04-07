

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method='post' id='inscription'>
<div id='containernom'>
    <label for='nom'>Entrez votre Nom:</label>
    <input type='text' name='nom' id='nom'>
    </div>
    <div id='containerprenom'>
    <label for='prenom'>Entrez votre Prenom:</label>
    <input  type='text'name='prenom' id='prenom'>
    </div>
    <div id='containeremail'>
    <label for='email'>Entrez votre Mail:</label>
    <input type='email'name='email' id='email'>
    </div>
    <div id='containerpassword'>
    <label for='password'>Entrez un password:</label>
    <input type='password' name='password' id='password'>
    </div>
    <div id='containercpassword'>
    <label for='cpassword'>Confirmer le password:</label>
    <input type='password' name='cpassword' id='cpassword'>
    </div>
    <button type='button'name='submit'  value='envoyer'id='button'>Envoyer</button>
</form>
<div id='result'></div>
<?php
// $db=new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
// if(isset($_POST['submit'])){
//     $post=$_POST;
// if(isset)
// }
// if(isset($_POST['submit'])){
// var_dump($_POST);
// }
session_start();
if(isset($_SESSION['redirect'])){
    header("Location: connexion.php");
}
?>
<script src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"></script>
<script type='text/javascript' src='script.js'></script>
</body>
</html>