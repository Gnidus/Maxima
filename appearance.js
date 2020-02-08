myH = document.getElementById("main_h");
about = document.getElementsByClassName("container_about");
asor = document.getElementsByClassName("container_asor");

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

var scrollApear = function() {
  var y = window.scrollY;
  if(getWidth()>1200){
    if (y >= 50) {
      myH.className = "main_h show"
    }
     if (y >= 800) {
      about[0].className = "container_about show_about"
    }
     if (y >= 1500) {
      asor[0].className = "container_asor show_asor"
    }
  }else{
    if (y >= 10) {
      myH.className = "main_h show"
    }
     if (y >= 50) {
      about[0].className = "container_about show_about"
    }
     if (y >= 300) {
      asor[0].className = "container_asor show_asor"
    }
  }
  };

window.addEventListener("scroll", scrollApear);