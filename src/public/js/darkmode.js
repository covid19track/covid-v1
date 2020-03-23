console.log('darkmode.js Intialization');

/**
 * This function is being called by a button on the webpage,
 * when called, it inverts the page colors from light to dark
 */
function setDarkMode() {
  $('body').addClass('has-text-light has-background-dark');
  $('body').removeClass('has-text-dark has-background-light');

  $('#navMenu').addClass('has-background-black');
  $('#navMenu').removeClass('has-background-dark');

  $('nav').addClass('is-black');
  $('nav').removeClass('is-dark');

  $('#darkmode_btn').addClass('is-light');
  $('#darkmode_btn').removeClass('is-black');
  $('#darkmode_btn').html('Light Mode&nbsp;<i class=\'las la-sun\'></i>');

  $('#warning').addClass('has-background-black');
  $('#warning').removeClass('has-background-light');

  for (let i = 1; i <= 6; i++) {
    $(`#info${i}`).addClass('has-background-black');
    $(`#info${i}`).removeClass('has-background-light');
  }
}

/**
 * This function is being called by a button on the webpage,
 * when called, it resets the color scheme to default
 */
function setLightMode() {
  $('body').addClass('has-text-dark has-background-light');
  $('body').removeClass('has-text-light has-background-dark');

  $('#navMenu').addClass('has-background-dark');
  $('#navMenu').removeClass('has-background-black');

  $('nav').addClass('is-dark');
  $('nav').removeClass('is-black');

  $('#darkmode_btn').addClass('is-black');
  $('#darkmode_btn').removeClass('is-light');
  $('#darkmode_btn').html('Dark Mode&nbsp;<i class=\'las la-moon\'></i>');

  $('#warning').addClass('has-background-light');
  $('#warning').removeClass('has-background-dark');

  for (let i = 1; i <= 6; i++) {
    $(`#info${i}`).addClass('has-background-light');
    $(`#info${i}`).removeClass('has-background-dark');
  }
}

/**
 * This function is being used by many other functions,
 * to set a cookie date.
 * @param {string} name @param {number} value @param {number} days
 */
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/;';
}

/**
 * This function can access a cookie by it's name
 * @param {string} name
 */
function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

$(document).ready(() => {
  let darkCookie = getCookie('darkmode');

  if (darkCookie == 'true') {
    setDarkMode();
  }

  if (darkCookie == 'false') {
    setLightMode();
  }

  if (!darkCookie) {
    setLightMode();
  }

  $('#darkmode_btn').click(() => {
    darkCookie = getCookie('darkmode');
    if (darkCookie == 'true') {
      setCookie('darkmode', 'false', 1);
      setLightMode();
    }

    if (darkCookie == 'false') {
      setCookie('darkmode', 'true', 1);
      setDarkMode();
    }

    if (!darkCookie) {
      setCookie('darkmode', 'true', 1);
      setDarkMode();
    }
  });
});
