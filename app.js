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
const scrollTOTop = document.getElementById('topBtn')

window.onscroll = function () {
  scrollfunction();
}
function scrollfunction() {
  if (document.documentElement.scrollTop > 10) {
    scrollTOTop.style.display = 'block'
  }else{
    scrollTOTop.style.display = 'none'
  }
}

const scrollSignIn = document.getElementById('signinshow')
const body = document.querySelector('#parrentbody')

window.onscroll = function () {
  scrollfunction();
}
function scrollfunction() {
  if (document.documentElement) {
    body.style.position = 'fixed'
    scrollSignIn.style.display = 'block'
  
  }else{
    scrollSignIn.style.display = 'none'
  }
}

var signInClose = document.getElementById('closeIcon');

signInClose.addEventListener('click', function () {
  if ( scrollSignIn.style.display === 'block') {
    body.style.position = 'absolute'
    scrollSignIn.style.display = 'none'
  
  }else{
    
  }
window.onscroll = function () {
  scrollfunction();
}
function scrollfunction() {
}
});












  
