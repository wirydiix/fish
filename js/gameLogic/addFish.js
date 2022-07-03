function addFish(line){
    if(!playing || line == null) return;
    let RespawnTimer = getRandomInt(7);
    setTimeout(() => {
        let randSize = getRandomInt(3);
        let randColor = getRandomInt(colors.length);
        line.innerHTML =`
        <div class="fish ${size[randSize].size}" style="filter: hue-rotate(${colors[randColor]})">
        </div>
    `
        let fish = line.childNodes;
        Movement(fish[1])
    },1000+RespawnTimer*1000);
}
/* <div class="fins">
                <div class="fin ${colors[randColor]}"></div>
                <div class="fin fin-bottom ${colors[randColor]}"></div>
            </div>
            <div class="fish-body ${colors[randColor]}">
                <div class="eye">
                    <div class="pupil"></div>
                </div>
            </div>*/