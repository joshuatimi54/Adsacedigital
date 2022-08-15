window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("up").classList.remove("up");
  
  } else {
    document.getElementById("up").classList.add("up");

  };

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "rgb(210,230,240)";
    function myFunction(x) {
      if (x.matches) { // If media query matches
        document.getElementById("logo").style.width = "20%";
      } else {
        document.getElementById("logo").style.width = "8%";
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
        document.getElementById("logo").style.width = "9%";
      }
    }
    
    var x = window.matchMedia("(max-width: 1000px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
  };
};


function opennav(x){
  x.classList.toggle("change");
  var x = document.getElementById("nav");
      if (x.style.display === "block") {
        x.style.display = "none";
        document.body.classList.remove("stop-scrolling");
      } else {
        x.style.display = "block";
        x.style.backgroundColor = "rgb(210,230,240)";
        document.body.classList.add("stop-scrolling");
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