let btnStartGame = document.querySelector(".btnStartGame")
function fstartgame(){
    if(playing){
        return;
    }
    let inputText = document.querySelector(".inputText");
    if(inputText.value !=""){
        let usernameDiv =document.querySelector(".username");
        username = usernameDiv.innerHTML = inputText.value;
        if(username =="tester"){
            usernameDiv.style.color = "#5c0096"
            tester = true
        }
        else {
            usernameDiv.style.color = ""
            tester = false
        }
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".pauseMenu").style.display = "none";
        document.querySelector(".game").style.display="";
        document.querySelector(".error").innerHTML = "";
        startGame();
    }
    else{
        document.querySelector(".error").innerHTML = "Введите имя";
    }
}
btnStartGame.onclick = function (){
    fstartgame()

}