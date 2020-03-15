var ctx = document.getElementById('covid').getContext('2d');
var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');
var button = document.getElementById('switcher');
var link = document.getElementById('categ');

let graphcountries = [];
let graphcases = [];

fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then((resp) => resp.json())
    .then(function (data) {

        for (let i = 0; i < 10; i++) {
            graphcountries[i] = data[i].country;
            graphcases[i] = data[i].cases;
        }
    })
    .catch(function (error) {
        console.log(error);
    })

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: graphcountries,
        datasets: [{
            label: 'Top 10 Countries',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: graphcases
        }]
    },

    // Configuration options go here
    options: {
        responsive: true
    }
});