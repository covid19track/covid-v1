let ctx = document.getElementById('covid').getContext('2d');
let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let button = document.getElementById('switcher');
let link = document.getElementById('categ');

let graphcountries = [];
let graphcases = [];

function main() {
    reload();
}

function reload() {

    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then((resp) => resp.json())
        .then(function (data) {

            for (let i = 0; i < 10; i++) {
                graphcountries[i] = data[i].country;
                graphcases[i] = data[i].cases;
            }

            let covid_chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: graphcountries,
                    datasets: [{
                        label: 'Top 10 Countries',
                        data: graphcases,
                        backgroundColor: [
                            'rgba(360, 0, 0, 0.7)', // 1
                            'rgba(325, 0, 0, 0.7)', // 2
                            'rgba(300, 0, 0, 0.7)', // 3
                            'rgba(270, 0, 0, 0.7)', // 4
                            'rgba(255, 0, 0, 0.7)', // 5 
                            'rgba(230, 0, 0, 0.7)', // 6 
                            'rgba(200, 0, 0, 0.7)', // 7
                            'rgba(150, 0, 0, 0.7)', // 8
                            'rgba(102, 0, 0, 0.7)', // 9
                            'rgba(77, 0, 0, 0.7)' // 10
                        ],
                        borderColor: [ // borders
                            'rgba(77, 0, 0, 0.7)', // 1
                            'rgba(102, 0, 0, 0.7)', // 2
                            'rgba(150, 0, 0, 0.7)', // 3
                            'rgba(200, 0, 0, 0.7)', // 4
                            'rgba(230, 0, 0, 0.7)', // 5 
                            'rgba(255, 0, 0, 0.7)', // 6 
                            'rgba(270, 0, 0, 0.7)', // 7
                            'rgba(300, 0, 0, 0.7)', // 8
                            'rgba(325, 0, 0, 0.7)', // 9
                            'rgba(360, 0, 0, 0.7)', // 10
                        ],
                        borderWidth: 1
                    }]
                },
                options: { // options 
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    responsive: true
                }
            });
        })

        .catch(function (error) {
            console.log(error);
        })
}