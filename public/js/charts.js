var ctx = document.getElementById('covid').getContext('2d');
var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['China', 'Italy', 'Greece'],
        datasets: [{
            label: 'Country Dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [80824, 17660, 190]
        }]
    },

    // Configuration options go here
    options: {}
});



function dark() {
    if (document.body.style.backgroundColor == 'rgb(255, 255, 255)') {

            document.body.style.backgroundColor = '#333';
            title.style.color = 'rgb(255, 255, 255)';
            subtitle.style.color = 'rgb(255, 255, 255)';
            document.getElementById('switcher').innerHTML="Light Mode";
    }
    else {
            document.body.style.backgroundColor = 'rgb(255, 255, 255)';
            title.style.color = '#333';
            subtitle.style.color = '#333';
            document.getElementById('switcher').innerHTML="Dark Mode";
    }
}