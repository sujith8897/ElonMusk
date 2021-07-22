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

    $('#tesla').on('click',function(){
      $('.modal').css('display','block');
      $('.modal-content').attr('src','images/modely.png');
    });

    $('#spacex').on('click',function(){
      $('.modal').css('display','block');
      $('.modal-content').attr('src','images/spacex.png');
    });

    $('#boring').on('click',function(){
      $('.modal').css('display','block');
      $('.modal-content').attr('src','images/modely.png');
    });

    $('#neuralink').on('click',function(){
      $('.modal').css('display','block');
      $('.modal-content').attr('src','images/modely.png');
    });

    $('.close').on('click',function(){
      $('.modal').css('display','none');
      $('nav ul li a').removeClass('active'); 
    }); 

  });

  function myFunction(thiss) {
    var id = thiss.id;
    console.log(id);
    //document.getElementById('img').style.animation = "";
    if(id=="tesla"){
      document.getElementById('img').style.animation = "car 5s linear";
    } else if(id=="spacex"){
      document.getElementById('img').style.animation = "rocket 3s linear";
    }
    
  }