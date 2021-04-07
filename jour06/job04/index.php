<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='style.css'>
    <script src="https://kit.fontawesome.com/de422d42e0.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>  
<header>
<div id='acontainer'>
<a class="headerlink">Accueil</a>
<a class="headerlink">Presentation</a>
<a class="headerlink">Contact</a></div>
<button type='button' class='hamburger' onclick='myFunction()'>
<i class="fas fa-hamburger"></i>
</button>
</header>
    <script>
        function myFunction() {
  var x = document.getElementById("acontainer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
    </script>
</body>
</html>