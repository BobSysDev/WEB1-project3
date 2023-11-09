var backgroud = $("body");
var sun = $("#sun");
var moon = $("#moon");
var screenwidth = $(window).width();
var screenheight = $(window).height();

moon.css({
    visibility: "hidden"
});

function changeBgColor(r, g, b){
    backgroud.css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

var rs = 255;
var gs = 255;
var bs = 255;

var re = 20;
var ge = 25;
var be = 75;

var day = true;

var transitionDuration = 10000;

$(document).ready(function(){
    changeBgColor(rs, gs, bs);
    transitionBgColor();
    movementStart();
});

function transitionBgColor(){
    $({r: rs, g: gs, b: bs}).animate({r: re, g: ge, b: be}, {
        duration: transitionDuration,
        step: function(){
            changeBgColor(Math.ceil(this.r), Math.ceil(this.g), Math.ceil(this.b));
        },
    });

    setTimeout(function(){
        let temp = rs;
        rs = re;
        re = temp;
        temp = gs;
        gs = ge;
        ge = temp;
        temp = bs;
        bs = be;
        be = temp;

        transitionBgColor();
    }, transitionDuration);
}

function movementStart(){
    var startH = 0
    var endH = screenheight/2 - 240/2;

    var startW = screenwidth/2 - 240/2;
    var endW = screenwidth + 240;

    sun.css({
        top: startH + "px",
        left: startW + "px"
    })

    $({h: startH, w: startW}).animate({h: endH, w: endW}, {
        duration: transitionDuration/2,
        easing: "linear",
        step: function(){
            let heightQuardatic = (((screenwidth/2 - this.w)/60)*((screenwidth/2 - this.w)/60));

            sun.css({
                top: Math.floor(heightQuardatic) + "px",
                left: this.w + "px"
            })
        }
    
    });

    setTimeout(function(){
        day = false;
        moveSun();
    }, transitionDuration/2);
}

function moveSun(){
    var startH = screenheight/2 - 240/2;
    var endH = screenheight/2 - 240/2;

    var startW = -240;
    var endW = screenwidth + 240;

    var objectToMove;


    if(day){
        sun.css({
            visibility: "visible",
            top: startH + "px",
            left: startW + "px"
        })
        moon.css({
            visibility: "hidden"
        })
        objectToMove = sun;
    }
    else{
        sun.css({
            visibility: "hidden"
        })
        moon.css({
            visibility: "visible",
            top: startH + "px",
            left: startW + "px"
        })
        objectToMove = moon;
    }
    

    $({h: startH, w: startW}).animate({h: endH, w: endW}, {
        duration: transitionDuration,
        easing: "linear",
        step: function(){
            let heightQuardatic = (((screenwidth/2 - this.w)/60)*((screenwidth/2 - this.w)/60));

            objectToMove.css({
                top: Math.floor(heightQuardatic) + "px",
                left: this.w + "px"
            })
        }
    
    });

    setTimeout(function(){
        day = !day;
        moveSun();
    }, transitionDuration);
}