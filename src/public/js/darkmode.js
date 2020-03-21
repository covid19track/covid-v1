console.log('darkmode.js Intialization');

let pheader    = document.getElementById("pheader");
let psubheader = document.getElementById("psubheader");

function setDarkMode() {
  pheader.style.color = '#333';
  psubheader.style.color = '#333';
}

function setLightMode() {
  pheader.style.color = '#fff';
  psubheader.style.color = '#fff';
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/;";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

$(document).ready(() => {
  let dark_cookie = getCookie('darkmode');

  if (dark_cookie == 'true') {
    setDarkMode();
  }

  if (dark_cookie == 'false') {
    setLightMode();
  }

  if (!dark_cookie) {
    setLightMode();
  }

  $('#darkmode_btn').click(() => {
    dark_cookie = getCookie('darkmode');
    if (dark_cookie == 'true') {
      setCookie('darkmode', 'false', 1);
      setLightMode();
    }

    if (dark_cookie == 'false') {
      setCookie('darkmode', 'true', 1);
      setDarkMode();
    }

    if (!dark_cookie) {
      setCookie('darkmode', 'true', 1);
      setDarkMode();
    }
  });

});
