var button = document.getElementById('switcher');

function dark() {
        if (document.body.style.backgroundColor == 'rgb(255, 255, 255)') {

                document.body.style.backgroundColor = '#333';
                title.style.color = 'rgb(255, 255, 255)';
                subtitle.style.color = 'rgb(255, 255, 255)';
                brieftext.style.color = 'rgb(255, 255, 255)';
                button.style.color = '#333';
                button.style.backgroundColor = 'rgb(255, 255, 255)';
                // categ.style.color = 'rgb(255, 255, 255)';
                document.getElementById('switcher').innerHTML = "Light Mode";
                // document.getElementsByTagName('ul').style.backgroundColor = 'rgb(255, 255, 255';
        }
        else {
                document.body.style.backgroundColor = 'rgb(255, 255, 255)';
                title.style.color = '#333';
                subtitle.style.color = '#333';
                brieftext.style.color = '#333';
                button.style.color = 'rgb(255, 255, 255)';
                button.style.backgroundColor = '#333';
                // categ.style.color('#333');
                document.getElementById('switcher').innerHTML = "Dark Mode";
                // document.getElementsByTagName('ul').style.backgroundColor = '#333';
        }
}