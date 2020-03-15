let countries = document.getElementById('countries');

function appendText(inserted) {
    var txt = document.createElement("p");
    txt.innerHTML = inserted;         // Create text with DOM
    $("body").append(txt);   // Append new elements
  }

fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then((resp) => resp.json())
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {;
            appendText(`Country: ${data[i].country} <br> Cases: ${data[i].cases} <br> Recovered ${data[i].recovered}`)
        }
    })
    .catch(function (error) {
        console.log(error);
    })