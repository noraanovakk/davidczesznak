window.onscroll = function () {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('header').style.height = '48px';
    document.querySelector('header').style.opacity = '.7';
  } else {
    document.querySelector('header').style.height = '56px';
    document.querySelector('header').style.opacity = '1';
  }
}

function dropdownMenu() {
  document.querySelector('#navbarToggleExternalContent').style.opacity = '.9';
}