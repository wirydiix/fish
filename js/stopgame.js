function stopgame(){
    let aquarium = document.querySelector(".aquarium");
    playing = false;
    while (aquarium.firstChild) {
        aquarium.removeChild(aquarium.firstChild);
    }
    document.querySelector(".menu").style.display = "";
    document.querySelector(".pauseMenu").style.display = "none";
    document.querySelector(".game").style.display="none";
    let url =`./updateBD.php?username=${username}&score=${score}`;
    let promise = fetch(url);
    reloadTopList();
}