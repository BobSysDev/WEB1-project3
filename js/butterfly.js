// code by Karolina Krysiak

// make the butterfly fly randomly over the screen
$(document).ready(function () {
	animateButterfly();
});

// calculate the position of butterfly
function makeNewPosition() {
	var h = $(window).height() - $("#butterfly").height();
	var w = $(window).width() - $("#butterfly").width();

	var nh = Math.floor(20 + Math.random() * h);
	var nw = Math.floor(20 + Math.random() * w);

	return [nh, nw];
}

// make butterfly move to new position
function animateButterfly() {
	var newPos = makeNewPosition();
	$("#butterfly").animate({ top: newPos[0], left: newPos[1] }, 2000, function () {
		animateButterfly();
	});
}

// butterfly flies away when touched by mouse
$("#butterfly").on("mouseover", function () {
	var newPos = makeNewPosition();
	$(this)
		.stop(true)
		.animate({ top: newPos[0], left: newPos[1] }, "fast", function () {
			animateButterfly();
		});
});
