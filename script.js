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

    // $('#tesla').on('click',function(){
    //   $('.modal').css('display','block');
    //   $('.modal-content').attr('src','images/modely.png');
    // });

    // $('#spacex').on('click',function(){
    //   $('.modal').css('display','block');
    //   $('.modal-content').attr('src','images/spacex.png');
    // });

    // $('#boring').on('click',function(){
    //   $('.modal').css('display','block');
    //   $('.modal-content').attr('src','images/modely.png');
    // });

    // $('#neuralink').on('click',function(){
    //   $('.modal').css('display','block');
    //   $('.modal-content').attr('src','images/modely.png');
    // });

    $('.close').on('click',function(){
      $('.modal').css('display','none');
    }); 

    // $('.nav-links').on('click',function(){

    // });
  });

  function myFunction(id ) {
    var timeOut = 0;
    $('.modal').css('display','block');
    if(id=="tesla"){
      document.getElementById('img').style.animation = "car 5s linear";
       $('.modal-content').attr('src','images/modely.png');
      timeOut = 5000;
    } else if(id=="spacex"){
      document.getElementById('img').style.animation = "rocket 3s linear";
      $('.modal-content').attr('src','images/spacex.png');
      timeOut = 3000;
    }
    console.log(timeOut);
    $("#icon i").toggleClass("fa-align-justify");
    $("#icon i").toggleClass("fa-close");
    $('nav ul').toggleClass("show");
        
  }