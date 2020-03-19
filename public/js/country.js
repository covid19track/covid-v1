function listappend(div, adata) {
    div.appendChild(document.createTextNode(adata));
}


function refresh() {

    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then((resp) => resp.json())
        .then(function (data) {
            for (let country in data) {
                ul = document.createElement("div");
                listappend(ul, country);
                
                // appendText(`CouSwedenSwedenntry: ${data[i].country} <br> Cases: ${data[i].cases} <br> Recovered ${data[i].recovered}`);
            }
        })
        .catch(function (error) {
            console.log(error);
        })

        console.log("h");
}