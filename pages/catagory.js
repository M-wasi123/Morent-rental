function togglerNavbar() {
    var navbarLinks = document.getElementById("navbarLinks");
    if (navbarLinks.style.display === "block") {
      navbarLinks.style.display = "none";
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
  document.getElementById('filter').addEventListener('click', function (){
    var sidepanel = document.getElementById('side-panel');
    if(sidepanel.style.display === "block"){
sidepanel.style.display = "none";
    }else{
      sidepanel.style.display = "block";
    }
  })