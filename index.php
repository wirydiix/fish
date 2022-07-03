<?
$dbconnection = mysqli_connect("localhost", "DiiX", "diix1234", "fish");
$result = mysqli_query($dbconnection,  "SELECT * FROM userscore ORDER BY score DESC LIMIT 0,10");
$result_arr = mysqli_fetch_all($result, MYSQLI_ASSOC);


?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link type="text/css"  rel="stylesheet" href="css/fish.css">
    <link type="text/css"  rel="stylesheet" href="css/aquarium.css">
    <link type="text/css"  rel="stylesheet" href="css/menu.css">
    <link type="text/css"  rel="stylesheet" href="css/pauseMenu.css">
    <title>Поймай рыбку</title>
</head>
<body>
<div class="menu">
    <div class="text">
        <div class="rules"></div>
        <div class="chart">
            <div class="message">Топ лист</div>
            <div class="list">
                <table>
                    <tbody>
                    <tr>
                        <th>Место</th>
                        <th>Имя</th>
                        <th>Очки</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="startGame">
        <input type="text" class="inputText" placeholder="Введите ваше имя">
        <button class="btnStartGame">Начать игру</button>
        <div class="error"></div>
    </div>
</div>
<div class="game" style="display: none">
<div class="static">
    <div class="content">
        Очки:
        <div class="score">0</div>
    </div>
    <div class="content">
        Оставшееся время:
        <div class="timer">0</div>
    </div><div class="content">
        Имя игрока:
        <div class="username">DiiX</div>
    </div>
    <div class="content">
        <button class="btnPause">Пауза</button>
    </div>

</div>

<main class="aquarium">



</main>
    <div class="bubl">
        <div class="bubl1"></div>
        <div class="bubl2"></div>
        <div class="bubl3"></div>
    </div>
</div>

<div class="pauseMenu" style="display: none;">
    <div class="pauseScore">Вы набрали: <div class="pauseScoreCount"></div> очков. Ваше место в рейтинге <selector class="rank"></selector></div>
    <button class="btnEnd">Закончить игру</button>

    <div class="pauseTopList">
        <div class="message">Топ лист</div>
        <table>
            <tbody>
            <tr>
                <th>Место</th>
                <th>Имя</th>
                <th>Очки</th>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="seaweed2"></div>
<div class="seaweed">

</div>
<footer></footer>
</body>
<script src="js/config.js"></script>
<script src="js/gameLogic/Movement.js"></script>
<script src="js/gameLogic/addFish.js"></script>
<script src="js/GameTimer.js"></script>
<script src="js/startGame.js"></script>
<script src="js/stopgame.js"></script>
<script src="js/main.js"></script>
<script src="js/rules.js"></script>
<script src="js/menu.js"></script>
<script src="js/pausemenu.js"></script>
<script src="js/getdata.js"></script>
<script src="js/myRank.js"></script>

</html>
