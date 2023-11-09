//This javaScript was made by Samuel Knieza #343889
$(document).ready(function(){
  //random apperance
  //Window for apples is X= 1000 - 1500 || Y= 200 - 500
  //first apple
  var winL = 550-$("#apple1").width();
  var randomL = Math.floor(Math.random()*(winL))+1000;

  var winT = 300-$("#apple1").height();
  var randomT = Math.floor(Math.random()*(winT))+200;

  $("#apple1").offset({left: randomL});
  $("#apple1").offset({top: randomT});

  //second apple
  var winL = 550-$("#apple2").width();
  var randomL = Math.floor(Math.random()*(winL))+1000;

  var winT = 300-$("#apple2").height();
  var randomT = Math.floor(Math.random()*(winT))+200;

  $("#apple2").offset({left: randomL});
  $("#apple2").offset({top: randomT});

  //thrid apple
  var winL = 550-$("#apple3").width();
  var randomL = Math.floor(Math.random()*(winL))+1000;

  var winT = 300-$("#apple3").height();
  var randomT = Math.floor(Math.random()*(winT))+200;

  $("#apple3").offset({left: randomL});
  $("#apple3").offset({top: randomT});
});

$(document).ready(function(){
  //coordinates of basket
  var basket = $(".basket").position();
  
  $("#apple1").on("click",function(){
    //nonus rotation
    $("#apple1").animate(
        { deg: 60 },{duration: 200,step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );   
    //moving to basket     
    $("#apple1").animate({left: basket.left+50, top: basket.top+170});
  });

  $("#apple2").on("click",function(){
    $("#apple2").animate(
      { deg: 60 },{duration: 200,step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
    $("#apple2").animate({left: basket.left+70, top: basket.top+170});
  });

  $("#apple3").on("click",function(){
    $("#apple3").animate(
      { deg: 60 },{duration: 200,step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
    $("#apple3").animate({left: basket.left+90, top: basket.top+170});
  });

})
