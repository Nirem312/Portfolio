console.log("dick");
carousel();

function carousel() {
  var myIndex = 0;
  var i;
  var x = document.querySelectorAll("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  console.log(x[1]);
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3500); // Change image every 2 seconds
}

