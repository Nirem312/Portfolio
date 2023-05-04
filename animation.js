console.log("dick");
  carousel();

function carousel() {
  var myIndex = 0;
  var i;
  var x = document.querySelectorAll("img.mySlides");
    console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3500); // Change image every 2 seconds
}

