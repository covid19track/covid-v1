console.log('total.js initialization');

/**
 * This function fetches the total data using the fetch API
 * @param {number} countryNumber
 */
function getTotalData(countryNumber) {
  fetch('https://coronavirus-19-api.herokuapp.com/countries')
      .then((resp) => resp.json())
      .then((data) => {
        $('.country-number').html(`${countryNumber}/${data.length}`);
        $('#slider').attr('max', data.length);

        const countries = [];
        const countryLabels = [];
        const countryCases = [];
        const countryCasesToday = [];
        const countryDeaths = [];
        const countryDeathsToday = [];
        const countryRecovered = [];
        const countryActive = [];
        const countryCritical = [];

        for (let i = 0; i < countryNumber; i++) {
          countries.push(data[i]);
          countryLabels.push(data[i].country);
          countryCases.push(data[i].cases);
          countryCasesToday.push(data[i].todayCases);
          countryDeaths.push(data[i].deaths);
          countryDeathsToday.push(data[i].todayDeaths);
          countryRecovered.push(data[i].recovered);
          countryActive.push(data[i].active);
          countryCritical.push(data[i].critical);
        }

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

        const casesCtx = document.getElementById('cases_canvas').getContext('2d');
        const casesTodayCtx = document.getElementById('cases_today_canvas').getContext('2d');
        const deathsCtx = document.getElementById('deaths_canvas').getContext('2d');
        const deathsTodayCtx = document.getElementById('deaths_today_canvas').getContext('2d');
        const recoveredCtx = document.getElementById('recovered_canvas').getContext('2d');
        const activeCtx = document.getElementById('active_canvas').getContext('2d');
        const criticalCtx = document.getElementById('critical_canvas').getContext('2d');

        if (window.casesChart) window.casesChart.destroy();
        if (window.casesTodayChart) window.casesTodayChart.destroy();
        if (window.deathsChart) window.deathsChart.destroy();
        if (window.deathsTodayChart) window.deathsTodayChart.destroy();
        if (window.recoveredChart) window.recoveredChart.destroy();
        if (window.activeChart) window.activeChart.destroy();
        if (window.criticalChart) window.criticalChart.destroy();

        window.casesChart = new Chart(casesCtx, {type: 'bar', data: {labels: countryLabels, datasets: [{label: 'Cases', data: countryCases, backgroundColor: 'rgba(255, 0, 0, 0.8)'}]}, options: chartOptions});
        window.casesTodayChart = new Chart(casesTodayCtx, {type: 'bar', data: {labels: countryLabels, datasets: [{label: 'Cases Today', data: countryCasesToday, backgroundColor: 'rgba(255, 0, 0, 0.8)'}]}, options: chartOptions});
        window.deathsChart = new Chart(deathsCtx, {type: 'bar', data: {labels: countryLabels, datasets: [{label: 'Deaths', data: countryDeaths, backgroundColor: 'rgba(255, 0, 0, 0.8)'}]}, options: chartOptions});
        window.deathsTodayChart = new Chart(deathsTodayCtx, {type: 'bar', data: {labels: countryLabels, datasets: [{label: 'Deaths Today', data: countryDeathsToday, backgroundColor: 'rgba(255, 0, 0, 0.8)'}]}, options: chartOptions});
        window.recoveredChart = new Chart(recoveredCtx, {type: 'bar', data: {labels: countryLabels, datasets: [{label: 'Recovered', data: countryRecovered, backgroundColor: 'rgba(255, 0, 0, 0.8)'}]}, options: chartOptions});
        window.activeChart = new Chart(activeCtx, {type: 'bar', data: {labels: countryLabels, datasets: [{label: 'Active', data: countryActive, backgroundColor: 'rgba(255, 0, 0, 0.8)'}]}, options: chartOptions});
        window.criticalChart = new Chart(criticalCtx, {type: 'bar', data: {labels: countryLabels, datasets: [{label: 'Critical', data: countryCritical, backgroundColor: 'rgba(255, 0, 0, 0.8)'}]}, options: chartOptions});
      }).catch(() => {
        console.log('Request Error');
      });
}

$('.slider').on('input', () => {
  getTotalData($('.slider').val());
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
  getTotalData($('.slider').val());
});

$(document).ready(() => {
  getTotalData(10);
});
