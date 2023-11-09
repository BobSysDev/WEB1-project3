//This part of code is done by Aleksander Gwóźdź

//declaring variables - jQuery objects and values
var backgroud = $("body");
var sun = $("#sun");
var moon = $("#moon");
var screenwidth = $(window).width();
var screenheight = $(window).height();

//hiding the moon in the beginning of the animation
moon.css({
    visibility: "hidden"
});

//function to change background color to a custom r, g and b values
function changeBgColor(r, g, b){
    backgroud.css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//declaring variables - logic
var rs = 255;
var gs = 255;
var bs = 255;

var re = 20;
var ge = 25;
var be = 75;

var day = true;

const transitionDuration = 10000; // < this sets how long a day lasts (and night too), in miliseconds


// when the document fully loads, the animation starts
$(document).ready(function(){
    changeBgColor(rs, gs, bs);
    transitionBgColor();
    movementStart();
});

//function to change background color from one set of r, g and b values to another
function transitionBgColor(){
    $({r: rs, g: gs, b: bs}).animate({r: re, g: ge, b: be}, {
        duration: transitionDuration,
        step: function(){
            changeBgColor(Math.ceil(this.r), Math.ceil(this.g), Math.ceil(this.b));
        },
    });

    setTimeout(function(){ //swapping the values so the animation can go on forever, day to night and night to day
        [rs, gs, bs, re, ge, be] = [re, ge, be, rs, gs, bs]; //i hate this line of code but it allowed me to compress 9 lines into a single one so i guess it's fine (+ it works :>)

        transitionBgColor();
    }, transitionDuration);
}

//function to jump-start the animation from half-way through the day so the sun and moon are in sync with the background color
function movementStart(){
    let startH = 0
    let endH = screenheight/2 - 240/2;

    let startW = screenwidth/2 - 240/2;
    let endW = screenwidth + 240;

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

    setTimeout(function(){ //starting to move the sun and the moon in a loop
        day = false;
        moveSunOrMoon();
    }, transitionDuration/2);
}

//function to move the sun and the moon from one side of the screen to the other
function moveSunOrMoon(){
    let startH = screenheight/2 - 240/2;
    let endH = screenheight/2 - 240/2;

    let startW = -240;
    let endW = screenwidth + 240;

    let objectToMove;

    //checking if it's day or night and moving the sun or the moon accordingly + hiding the other one
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
            let heightQuardatic = (((screenwidth/2 - this.w)/60)*((screenwidth/2 - this.w)/60)); //this is a quadratic function that makes the sun and the moon move in a parabolic arc instead of a straight line

            objectToMove.css({
                top: Math.floor(heightQuardatic) + "px",
                left: this.w + "px"
            })
        }
    
    });

    setTimeout(function(){ //swapping the day/night variable and calling the function again
        day = !day;
        moveSun();
    }, transitionDuration);
}