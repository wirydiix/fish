let aquarium = document.querySelector(".aquarium");
aquarium.onclick = function (e){
    console.log(e.target);
    if(e.target.classList[0] !="fish" && e.className !="line"){
        return
    }
    if (pause) return;
    let fish= e.target;
    addFish(fish.parentNode);
    fish.remove();
    let scoreDiv = document.querySelector(".score");
    score += fishs[fish.classList[1]].score;
    scoreDiv.innerHTML = score;
    console.log(score);
}
let btnPause = document.querySelector(".btnPause");
btnPause.onclick = function (){
    pausemenu();


}
document.onkeydown=function (e){
    if (e.code =="Space") {
        pausemenu();
    } if (e.code =="Enter") {
        fstartgame()
    }
}