//This part of code is done by Aleksander Gwóźdź

var wateringCan = $("#wateringcan");
var tilted = false;
var waterdrops = $(".waterdrop");
var screenheight = $(window).height();

waterdrops.each(function(){
    $(this).css({
        visibility: 'hidden'
    });
});


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
        setTimeout(function(){
            waterdrops.each(function(){
                pour($(this));
            });
        }, 350);
    }
    else{
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

    $({pos: startV}).animate({pos: endV}, {
        duration: speed,
        step: function(now) {
            object.css({
                top: now + 'px'
            });
        }
        
    });
    
    setTimeout(function(){
        object.css({
            visibility: 'hidden'
        });
        if(tilted)
            pour(object);
    }, speed);
}

