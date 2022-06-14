$("left-to-right-square").hide();

$(document).ready(function(){
    $("#left-to-right-square").click(function(){
      $("#left-to-right-square").slideToggle("slow");
    });
  });