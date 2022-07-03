

let spawnFish = function (){

    let object = document.querySelector(".aquarium");
    for(let i=1; i<7;i++){ // создаём 7 линий
        object.innerHTML+=`
         <div class="line" id="line${i}"></div>`
    }
    let lines = document.querySelectorAll(".line");
    for(let i=0; i<lines.length;i++){
        addFish(lines[i]) //добавляем в каждую линию по рыбке
    }
}