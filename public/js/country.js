function listappend(div, adata, num) {
    var par = document.createElement("p");
    par.appendChild(document.createTextNode(adata));
    par.setAttribute("id", `cdiv${num}`);
    $(div).prepend(`<p>${adata} <br>`);
}


function refresh() {

    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then((resp) => resp.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                ul = document.createElement("div");
                ul.setAttribute('id', `cdiv${i}`);
                listappend(ul, data[i].country, i);
                // appendText(`Country: ${data[i].country} <br> Cases: ${data[i].cases} <br> Recovered ${data[i].recovered}`);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}