document.querySelector(".pauseScoreCount").innerHTML = score;
document.querySelector(".btnEnd").onclick = function (){
    stopgame();
}
function pausemenu(){
    document.querySelector(".pauseScoreCount").innerHTML = score;

    let url =`./updateBD.php?username=${username}&score=${score}`;
    let promise = fetch(url);

    reloadTopList();

    getRank(username,score);
    if (playing){
        if(pause){
            document.querySelector(".pauseMenu").style.display = "none";
        }
        else
            document.querySelector(".pauseMenu").style.display = "";
        pause = !pause;
    }
}
