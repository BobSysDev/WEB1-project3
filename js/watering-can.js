//This part of code is done by Aleksander Gwóźdź

//declaring variables - jQuery objects and values
var wateringCan = $("#wateringcan");
var waterdrops = $(".waterdrop");
var screenheight = $(window).height();

//declaring variables - logic
var tilted = false;

//hiding waterdrops
waterdrops.each(function(){
    $(this).css({
        visibility: 'hidden'
    });
});

//rotating watering can on click
wateringCan.click(function () {
    if(!tilted){
        $({deg: 0}).animate({deg: -30}, {
            duration: 500,
            step: function(now) {
                wateringCan.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        })
        tilted = true;
        setTimeout(function(){ //starting pouring after 350ms
            waterdrops.each(function(){
                pour($(this));
            });
        }, 350);
    }
    else{ //rotating back if the can is tilted
        $({deg: -30}).animate({deg: 0}, {
            duration: 500,
            step: function(now) {
                wateringCan.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        })
        tilted = false;
    }
});

//pouring function - called separately for each waterdrop
function pour(object){ 
    var startV = wateringCan.position().top + Math.random() * 20 + 50;
    var startH = wateringCan.position().left + Math.random() * 20 - 10;
    var speed = Math.random() * 1200 + 800;
    var endV = screenheight + 100;

    object.css({
        top: startV + 'px',
        left: startH + 'px',
        visibility: 'visible'
    });

    $({pos: startV}).animate({pos: endV}, { //animating waterdrops
        duration: speed,
        step: function(now) {
            object.css({
                top: now + 'px'
            });
        }
        
    });
    
    setTimeout(function(){ //recursively calling pour() after random time (same as it takes the waterdrops to fall to the bottom of the screen)
        object.css({
            visibility: 'hidden'
        });
        if(tilted)
            pour(object);
    }, speed);
}

