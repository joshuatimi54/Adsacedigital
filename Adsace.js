window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "rgb(210,230,240)";
    function myFunction(x) {
      if (x.matches) { // If media query matches
        document.getElementById("logo").style.width = "20%";
      } else {
        document.getElementById("logo").style.width = "10%";
      }
    }
    
    var x = window.matchMedia("(max-width: 1000px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

  } else {
    document.getElementById("navbar").style.backgroundColor = "rgb(210,230,240,0.0)";
    function myFunction(x) {
      if (x.matches) { // If media query matches
        document.getElementById("logo").style.width = "22%";
      } else {
        document.getElementById("logo").style.width = "12%";
      }
    }
    
    var x = window.matchMedia("(max-width: 1000px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
  };
};

/*
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
*/
function opennav(x){
  x.classList.toggle("change");
  var x = document.getElementById("nav");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
        x.style.backgroundColor = "rgb(210,230,240)";
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