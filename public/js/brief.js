var brieftext = document.getElementById('cdrtext');

function showAll(casen, deathn, recn) {
    return brieftext.innerHTML = `Cases: <strong>${casen}</strong> <br><br> Deaths: <strong>${deathn}</strong> <br><br> Recovered: <strong>${recn}</strong>`; 
}


fetch('https://coronavirus-19-api.herokuapp.com/all')
.then((resp) => resp.json())
.then(function(data) {
    // success

    // brief analytics
    let cnum = data.cases;
    let dnum = data.deaths;
    let rnum = data.recovered;
    return showAll(cnum, dnum, rnum);
})

.catch(function(error) {
    // if the server returns any erros:
    console.log(error)
});