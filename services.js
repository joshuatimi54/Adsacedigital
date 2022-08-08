window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "rgb(210,230,240)";
    document.getElementById("logo").style.width = "20%";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgb(210,230,240,0.0)";
    document.getElementById("logo").style.width = "25%";
  };
};

function opennav(x){
  x.classList.toggle("change");
  var x = document.getElementById("nav");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }

  var x = document.getElementById("main");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  var x = document.getElementById("footer");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
};

function dropdown(){
  var y = document.getElementById("dropdown-nav");
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
}