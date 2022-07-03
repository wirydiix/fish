function startGame(){
    score = 0;
    let scoreDiv = document.querySelector(".score");
    scoreDiv.innerHTML = score;
    playing = true;
    pause = false;
    spawnFish();
    let startGame = Date.now(); // время старта игры
    let pauseTimeStart = 0;
    let timerGame = setInterval(function() { //тики
        let aquarium = document.querySelector(".aquarium");
        if(!playing){
            clearInterval(timerGame);
            while (aquarium.firstChild) {
                aquarium.removeChild(aquarium.firstChild);
            }
        }

        if(tester){
            document.querySelector(".timer").innerHTML ="∞";
            return;
        }
        if (pause){
            if(pauseTimeStart==0){
                pauseTimeStart =Date.now();
            }
            return;
        }
        else{
            if(pauseTimeStart!=0){
                startGame  += (Date.now()-pauseTimeStart);
                pauseTimeStart=0;
            }
        }
        let timePassed = Date.now() - startGame;

        if (timePassed >= GameTime) {
            reloadTopList();
            pausemenu();
            playing = false;
            clearInterval(timerGame);
            while (aquarium.firstChild) {
                aquarium.removeChild(aquarium.firstChild);
            }
        }

        document.querySelector(".timer").innerHTML = Math.round((GameTime-timePassed)/1000); // вывод оставшегося времени в секундах
    },24);
}