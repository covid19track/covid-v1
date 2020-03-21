console.log('darkmode.js Intialization');

function setDarkMode() {
  $('body').addClass("has-text-light has-background-dark");
  $('body').removeClass("has-text-dark has-background-light");

  $('nav').addClass("is-black");
  $('nav').removeClass("is-dark");

  $('#darkmode_btn').addClass("is-dark");
  $('#darkmode_btn').removeClass("is-light");
  $("#darkmode_btn").html('Light Mode&nbsp;<i class="las la-sun"></i>')
}

function setLightMode() {
  $('body').addClass("has-text-dark has-background-light");
  $('body').removeClass("has-text-light has-background-dark");

  $('nav').addClass("is-dark");
  $('nav').removeClass("is-black");

  $('#darkmode_btn').addClass("is-light");
  $('#darkmode_btn').removeClass("is-dark");
  $("#darkmode_btn").html('Dark Mode&nbsp;<i class="las la-moon"></i>')
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
