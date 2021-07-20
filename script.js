$(document).ready(function(){
    $("#icon").click(function(){
      $("#icon i").toggleClass("fa-align-justify");
      $("#icon i").toggleClass("fa-close");
      $('nav ul').toggleClass("show");
    });
  });