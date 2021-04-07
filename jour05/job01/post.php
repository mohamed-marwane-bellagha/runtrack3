<?php

$db=new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
if(isset($_POST['submit'])){
    $cryptedpass=password_hash($_POST['password'],PASSWORD_BCRYPT);
    $query=$db->prepare("SELECT * FROM `utilisateurs` WHERE`email`='{$_POST['email']}'");
    $query->execute();
    $allresults=$query->fetchAll();
    if($allresults==null){
    $query=$db->prepare("INSERT INTO `utilisateurs`(`nom`, `prenom`, `email`, `password`) VALUES ('{$_POST['nom']}','{$_POST['prenom']}','{$_POST['email']}','{$cryptedpass}')");
    $query->execute(); 
    echo 'Inscription réussi';
    }
}

?>