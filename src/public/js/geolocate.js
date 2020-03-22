console.log('geolocate.js Intialization');

function geolocation() {
  let countryCode;
  let countryName;

  fetch('/geolocate')
      .then((resp) => resp.json())
      .then((data) => {
        countryCode = data.country;
        if (!countryCode) return console.log(90);
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            .then((resp) => resp.json())
            .then((data) => {
              countryName = data.name;
              fetch('https://coronavirus-19-api.herokuapp.com/countries')
                  .then((resp) => resp.json())
                  .then((data) => {
                    data.forEach((item, i) => {
                      if (item.country == countryName) {
                        $('.brief').html(`
                              <img class="flag-img" src="https://www.countryflags.io/${countryCode}/shiny/64.png">
                              <h1 class="stat-h">Statistics For ${countryName}</h1>
                              <p class="stat-p">Cases: ${item.cases} | Deaths: ${item.deaths} | Recovered: ${item.recovered}</p>
                              `);

                        const ctx = document.getElementById('covid').getContext('2d');

                        const covidChart = new Chart(ctx, {
                          type: 'bar',
                          data: {
                            labels: ['Cases', 'Cases Today', 'Deaths', 'Deaths Today', 'Recovered Cases', 'Active Cases', 'Critical Cases'],
                            datasets: [{
                              label: 'People',
                              data: [item.cases, item.todatCases, item.deaths, item.todayDeaths, item.recovered, item.active, item.critical],
                              backgroundColor: [
                                'rgba(360, 0, 0, 0.7)', // 1
                                'rgba(325, 0, 0, 0.7)', // 2
                                'rgba(300, 0, 0, 0.7)', // 3
                                'rgba(270, 0, 0, 0.7)', // 4
                                'rgba(255, 0, 0, 0.7)', // 5
                                'rgba(230, 0, 0, 0.7)', // 6
                                'rgba(200, 0, 0, 0.7)', // 7
                              ],
                              borderColor: [ // borders
                                'rgba(77, 0, 0, 0.7)', // 1
                                'rgba(102, 0, 0, 0.7)', // 2
                                'rgba(150, 0, 0, 0.7)', // 3
                                'rgba(200, 0, 0, 0.7)', // 4
                                'rgba(230, 0, 0, 0.7)', // 5
                                'rgba(255, 0, 0, 0.7)', // 6
                                'rgba(230, 0, 0, 0.7)', // 7
                              ],
                              borderWidth: 1,
                            }],
                          },
                          options: { // options
                            scales: {
                              yAxes: [{
                                ticks: {
                                  beginAtZero: true,
                                },
                              }],
                            },
                            responsive: true,
                          },
                        }).catch((error) => {
                          console.log('Chart.js Error:', error);
                        });
                      }
                    });
                  }).catch(() => {
                    console.log('Request Error');
                  });
            }).catch(() => {
              console.log('Request Error');
            });
      }).catch(() => {
        console.log('Request Error');
      });
}

$('.refresh-btn').click(() => {
  $('.refresh-btn > i').css({
    'transition-duration': '1.5s',
    'transform': 'rotate(360deg)',
  });
  $('.refresh-btn > i').bind('transitionend', () => {
    $('.refresh-btn > i').css({
      'transition-duration': '',
      'transform': '',
    });
  });
  geolocation();
});

$(document).ready(() => {
  geolocation();
});
