$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });

  $("p").click(function() {
    $("p").addClass("highLight");
    alert("This is a paragraph. You certainly guess it, right !?");
  });

  $("img").click(function() {
    alert("This is an image, in the case you didn't have notice it ;-) ! LOL");
  });

  $("button.clickable").click(function() {
    $("body").addClass("blue-background");
  });

  $(".clickable").click(function() {
    $(".initially-hidden").slideToggle();
    $(".initially-showing").slideToggle();
  });

});
