console.log('home.js Intialization');

/**
 * This function finds the country of the webpage visitor.
 */
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

                        const chartOptions = {
                          scales: {
                            yAxes: [{
                              gridLines: {
                                display: true,
                                color: 'rgba(128, 128, 128, 0.6)',
                                zeroLineColor: '#808080',
                                lineWidth: 1,
                              },
                              ticks: {
                                fontColor: '#808080',
                                beginAtZero: true,
                              },
                            }],
                            xAxes: [{
                              gridLines: {
                                display: true,
                                color: 'rgba(128, 128, 128, 0.3)',
                                zeroLineColor: '#808080',
                                lineWidth: 1,
                              },
                              ticks: {
                                fontColor: '#808080',
                                beginAtZero: true,
                              },
                            }],
                          },
                          responsive: true,
                        };

                        const ctx = document.getElementById('covid').getContext('2d');

                        const covidChart = new Chart(ctx, {
                          type: 'bar',
                          data: {
                            labels: ['Cases', 'Cases Today', 'Deaths', 'Deaths Today', 'Recovered Cases', 'Active Cases', 'Critical Cases'],
                            datasets: [{
                              label: 'People',
                              data: [item.cases, item.todatCases, item.deaths, item.todayDeaths, item.recovered, item.active, item.critical],
                              backgroundColor: 'rgba(255, 0, 0, 0.7)',
                            }],
                          },
                          options: chartOptions,
                        });
                        console.log('Debugging:', covidChart);
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
