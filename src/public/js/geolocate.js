console.log('geolocate.js Intialization');

function geolocation() {
  let country_code;
  let country_name;

  fetch('/geolocate')
    .then(resp => resp.json())
    .then(data => {
      country_code = data.country;
      if (!country_code) return console.log(90);
      fetch(`https://restcountries.eu/rest/v2/alpha/${country_code}`)
        .then(resp => resp.json())
        .then(data => {
          country_name = data.name;
          fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(resp => resp.json())
            .then(data => {
              data.forEach((item, i) => {
                if (item.country == country_name) {
                  $('.brief').html(`
                  <img style="margin-top:30px;" src="https://www.countryflags.io/${country_code}/shiny/64.png">
                  <h1>Statistics For ${country_name}</h1>
                  <p style="margin-bottom: 40px;">Cases: ${item.cases} | Deaths: ${item.deaths} | Recovered: ${item.recovered}</p>
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
  $(".refresh-btn > i").css({"transition-duration": "1.5s", "transform": "rotate(360deg)"});
  $(".refresh-btn > i").bind("transitionend", () => {
    $(".refresh-btn > i").css({"transition-duration": "", "transform": ""});
  });
  geolocation();
});

$(document).ready(() => {
  geolocation();
});
