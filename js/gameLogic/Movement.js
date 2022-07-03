let PassageTime = 6*1000;
async function Movement(fish){

    let start = Date.now(); // запоминаем время, когда начинается движение
    let pauseTimeStart = 0;
    let timer = setInterval(function() {

        if(!playing){
            clearInterval(timer);
            while (aquarium.firstChild) {
                aquarium.removeChild(aquarium.firstChild);
            }
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
                start  += (Date.now()-pauseTimeStart);
                pauseTimeStart=0;
            }
        }
        let timePassed = Date.now() - start;

        if (timePassed >= PassageTime*(1/fishs[fish.classList[1]].speed)) {

            clearInterval(timer);
            addFish(fish.parentNode);
            fish.remove();

            return;
        }
        draw(timePassed, fish);

    }, 24);


    function draw(timePassed, fish) {
        let lineWhidth = document.querySelector(".line").getBoundingClientRect().width;
        let speedFactor =(PassageTime/(lineWhidth+250))*(1/fishs[fish.classList[1]].speed);
        fish.style.left =   timePassed / (speedFactor) + 'px';
    }
}