function getRank(username,score){
        let url =`./getdate.php?type=Rank&username=${username}&score=${score}`;
    let promise = fetch(url)
        .then((resp) => {
            return resp.json()
        } )
        .then((data) =>{
            LoadRank(data)

        })
    function LoadRank(rank){
        document.querySelector(".rank").innerHTML = rank;
        if(rank >10){
            console.log(rank);
            let tables = document.querySelectorAll("tbody");
            tables[1].childNodes[tables[1].childNodes.length-2].childNodes[1].innerHTML = rank;
            tables[1].childNodes[tables[1].childNodes.length-2].childNodes[3].innerHTML = username;
            tables[1].childNodes[tables[1].childNodes.length-2].childNodes[5].innerHTML = score;

        }
    }
}