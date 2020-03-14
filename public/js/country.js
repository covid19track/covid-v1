let countries = document.getElementById('countries');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function showAll(casen, deathn, recn) {
    return `Cases: <strong>${casen}</strong> <br><br> Deaths: <strong>${deathn}</strong> <br><br> Recovered: <strong>${recn}</strong>`;
}

fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then((resp) => resp.json())
    .then(function (data) {
        let country = data.country;
        let cases = data.cases;
        let todayCases = data.todayCases;
        let recovered = data.recovered;
        let active = data.active;
        let critical = data.active;

    })
    .catch(function (error) {
        console.log(error);
    })