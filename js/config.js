let score = 0; //очки по умолчанию
let playing = false;
const GameTime = 60*1000; // длительность игры в миллисекундах
let pause = false;
let tester = false;
let username;
function getRandomInt(max) { //генератор случайных чисел
    return Math.floor(Math.random() * max);
}
let colors =["90deg","180deg","270deg", "0deg"]
let size ={ //размеры рыб
    0:{size:"little"},
    1:{size:"medium"},
    2:{size: "big"},
}
let fishs = { //скорость и очки
    "little":{score:3, speed:1.5},
    "medium":{score:2,speed:1.3},
    "big":{score:1,speed:1.2},
}