function togglerNavbar() {
    var navbarLinks = document.getElementById("navbarLinks");
    if (navbarLinks.style.display === "block") {
      navbarLinks.style.display = "none";
    } else {
      navbarLinks.style.display = "block";
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