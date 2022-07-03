function reloadTopList(){
    let url =`./getdate.php?type=TopList`;
    let promise = fetch(url)
        .then((resp) => {
            return resp.json()
        } )
        .then((data) =>{
            topList(data)

        })
    function topList(arrays){
        let tables = document.querySelectorAll("tbody");
        for(let i=0;i<2;i++){
            tables[i].innerHTML="";
            for(let j=0; j<arrays.length; j++){
                tables[i].innerHTML +=`
            <tr>
            <td>${j+1}</td> <td>${arrays[j].name}</td> <td>${arrays[j].score}</td>
            </tr>
            `
            }

        }

    }
}
reloadTopList();