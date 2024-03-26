function togglerNavbar() {

    var navbarLinks = document.getElementById("navbarLinks");
    if (navbarLinks.style.display == "block") {

      navbarLinks.style.display = "none" ;
    } else {
      navbarLinks.style.display = "block";
    }
  }
  function togglerNavbarClose() {
    var navbarLinksClose = document.getElementById("navbarClose");
    if(navbarLinks.style.display == "none"){
      navbarLinks.style.display = "block" ;
    }else{
      navbarLinks.style.display = "none";
    }
  }

const SignIn = document.getElementById('signinshow')
const body = document.querySelector('#parrentbody')
const shadow = document.querySelector('#shadow')
const bodyContent = document.querySelector('#parrentbody')


window.onscroll = function () {
  scrollfunction();
}
function scrollfunction() {
  if (document.documentElement) {
    body.style.position = 'fixed'
   SignIn.style.display = 'block'
  bodyContent.style.display = 'none'

  }else{
    SignIn.style.display = 'none'
  }
}

var signInClose = document.getElementById('closeIcon');

signInClose.addEventListener('click', function () {
  if ( SignIn.style.display === 'block') {
    body.style.position = 'absolute'
    body.style.width = '100%'
    SignIn.style.display = 'none'
    bodyContent.style.display = 'block'
  
  }else{
    SignIn.style.display = 'none'
  }
window.onscroll = function () {
  scrollfunction();
}
function scrollfunction() {
}
});

const scrollTOTop = document.getElementById('topBtn')

window.onscrollend = function () {
  scrollfunction2();
}
function scrollfunction2() {
  if (document.documentElement.scrollTop > 10) {
    scrollTOTop.style.display = 'block'
  }else{
    scrollTOTop.style.display = 'none'
  }
}











  
