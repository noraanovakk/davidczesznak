window.onscroll = function () {
  scrollFunction();

  if (window.innerWidth >= 992) {
    showButtons();
  }
};


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
  var afszButton = document.querySelector('.afsz-button');
  var gdprButton = document.querySelector('.gdpr-button');

  if ((afszButton.style.visibility || gdprButton.style.visibility) === 'hidden') {
    setTimeout(function () {
      afszButton.style.visibility = 'visible';
      gdprButton.style.visibility = 'visible';
    }, 300);
  } else {
    afszButton.style.visibility = 'hidden';
    gdprButton.style.visibility = 'hidden';
  }
}

function showButtons() {
  var afszButton = document.querySelector('.afsz-button');
  var gdprButton = document.querySelector('.gdpr-button');

  var y = window.scrollY;

  if (y >= 800) {
    afszButton.style.visibility = 'visible';
    gdprButton.style.visibility = 'visible';
    afszButton.style.transition = 'opacity .5s .25s ease-out';
    gdprButton.style.transition = 'opacity .5s .25s ease-out';
    afszButton.style.opacity = '1';
    gdprButton.style.opacity = '1';
  } else {
    afszButton.style.visibility = 'hidden';
    gdprButton.style.visibility = 'hidden';
    afszButton.style.opacity = '0';
    gdprButton.style.opacity = '0';
  }
}
