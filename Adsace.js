function myFunction(x) {
  x.classList.toggle("change");
  var x = document.getElementById("topnavul");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }
  /*var y = document.getElementById("Create");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }*/
}

/*function myFunction(x) {
  var x = document.getElementById("topnavul");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("Create");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
 }

{const navicon = document.querySelector("#navicon");
  const topnavul = document.querySelector("#topnavul");
     
  navicon.addEventListener("click", function () {
    // toggle the type attribute
    const display = none.getAttribute("display") === "none" ? "block" : "none";
    password.setAttribute("display", display);
                 
   // toggle the icon
   this.classList.toggle("bi-eye");
   });
}*/