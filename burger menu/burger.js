
$(document).ready(function() {
  $("#burger-container").on("click", function() {
    $("#burger-container").toggleClass("open"),
      $("nav ul").toggleClass("show"),
      $(".content").toggleClass("move"); 
  });
});