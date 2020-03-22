console.log('total.js initialization');

function getTotalData(countryNumber) {
  fetch('https://coronavirus-19-api.herokuapp.com/countries')
      .then((resp) => resp.json())
      .then((data) => {

          $('.country-number').html(`${countryNumber}/${data.length}`)
          $('#slider').attr('max', data.length);

          let countries = [];
          let countryLabels = [];
          let countryCases = [];

          for (let i = 0; i < countryNumber; i++) {
            countries.push(data[i]);
            countryLabels.push(data[i].country);
            countryCases.push(data[i].cases);
          }

          let casesCtx = document.getElementById('cases_canvas').getContext('2d');

          if (window.bar) window.bar.destroy();

          window.bar = new Chart(casesCtx, {
            type: 'bar',
            data: {
              labels: countryLabels,
              datasets: [{
                label: 'Cases Per Country',
                data: countryCases,
                backgroundColor: 'rgba(255, 0, 0, 0.7)'
              }],
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                  },
                }],
              },
              responsive: true,
            },
          });

      }).catch(() => {
        console.log('Request Error');
      });

}

$('.slider').on('input', () => {
  getTotalData($('.slider').val())
});

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
  getTotalData($('.slider').val())
});

$(document).ready(() => {
  getTotalData(10);
});
