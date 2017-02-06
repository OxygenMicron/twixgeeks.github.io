<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Личный сайт студента GeekBrains</title>
    <link rel="stylesheet" href="style.css"> 
    <script type="text/javascript" src="script.js">     </script>
</head>
<body>
    <div id="content">
        <div id="header">
            <a href="index.html">Главная</a> <span>/</span>
            <a href="puzzle.html">Загадки</a> <span>/</span>
            <a href="guess-1.html">Игра "Угадай_число" </a> <span>/</span>
            <a href="guess-2.html">Игра "Угадай_число" мультиплеер</a>
        </div>
        <h1>Загадки</h1>
        <div id="center"> 
            <div id="box">
            
              <?php 
              <form action="puzzle2.php" method="GET">
              <p>валюта сша? </p>
               <input type="text"  name="userAnswer1">
               <p>валюта РФ? </p>
               <input type="text" name="userAnswer2">
              <br><br>
              <input type="submit" value ="Ответить">
              </form>
              ?>
              
            </div>
        </div>
    </div>

    <div id="footer">Copyright © 2016 <a href="https://geekbrains.ru/" target="_blank">GeekBrains</a></div>
</body>

</html>