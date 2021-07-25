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

    $('.close').on('click',function(){
      $('.modal').css('display','none');
    }); 


  });

  function myFunction(id ) {
    var timeOut = 0;
    $('.modal').css('display','block');
    if(id=="tesla"){
      document.getElementById('img').style.animation = "car 2s linear";
       $('.modal-content').attr('src','images/modely.png');
    } else if(id=="spacex"){
      document.getElementById('img').style.animation = "rocket 2s linear";
      $('.modal-content').attr('src','images/spacex.png');
    } else if(id=="neuralink"){
      document.getElementById('img').style.animation = "neuralink 2s linear";
      $('.modal-content').attr('src','images/n1.png');
    } else if(id=="boring"){
      document.getElementById('img').style.animation = "boring 2s linear";
      $('.modal-content').attr('src','images/b3.png');
    }


    $("#icon i").toggleClass("fa-align-justify");
    $("#icon i").toggleClass("fa-close");
    $('nav ul').toggleClass("show");
    $('nav ul li a').removeClass('active'); 

        
  }


  const countEl = document.getElementById('count');
  updateVisitCount();

  function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/elonmusk.sujith.com/sujith/?amount=1')
          .then(res => res.json())
          .then(res => {
            countEl.innerHTML = res.value;
            console.log('Total Site Visits:',res.value);
          });
  }