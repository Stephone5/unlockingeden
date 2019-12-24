var myNav = document.getElementById('mynav');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

.nav-colored { background-color:#000; }
.nav-transparent { background-color:transparent;}

function(){
  if (document.onscroll > 15) {
    navbar.add("new-nav-color");
    navbar.remove("old-nav-color");
  }
}
