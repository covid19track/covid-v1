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
  $('.refresh-btn > i').css({'transition-duration': '1.5s', 'transform': 'rotate(360deg)'});
  $('.refresh-btn > i').bind('transitionend', () => {
    $('.refresh-btn > i').css({'transition-duration': '', 'transform': ''});
  });
  geolocation();
});

$(document).ready(() => {
  geolocation();
});
