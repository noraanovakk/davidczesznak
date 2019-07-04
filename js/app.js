window.onscroll = function () {scrollFunction();};

function scrollFunction() {
  var nav = document.querySelector('.cp-nav').style;
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.height = '48px';
    nav.opacity = '.7';
  } else {
    nav.height = '56px';
    nav.opacity = '1';
  }
}


function dropdownMenu() {
  document.querySelector('.header-picture').style.top = '150px';
}
