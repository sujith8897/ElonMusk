$(document).ready(function(){
    $("#icon").click(function(){
      $("#icon i").toggleClass("fa-align-justify");
      $("#icon i").toggleClass("fa-close");
      $('nav ul').toggleClass("show");
    });

    $('nav ul li a').on('click',function(){
        $('nav ul li a').removeClass('active'); 
        $(this).addClass('active');
      });
      
  });