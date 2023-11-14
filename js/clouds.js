// code by Karolina Krysiak

//make the clouds fly across the screen
$(document).ready(function () {
	function animateClouds() {
		// position of each cloud
		var cloud1Left = $("#cloud1").position().left;
		var cloud2Left = $("#cloud2").position().left;
		var cloud3Left = $("#cloud3").position().left;
		var cloud4Left = $("#cloud4").position().left;

		// move the clouds to the right
		$("#cloud1").css("left", cloud1Left + 0.5);
		$("#cloud2").css("left", cloud2Left + 1.1);
		$("#cloud3").css("left", cloud3Left + 0.7);
		$("#cloud4").css("left", cloud4Left + 0.9);

		// loop the clouds when they reach end of the screen
		if (cloud1Left > $(window).width()) {
			$("#cloud1").css("left", -520);
		}
		if (cloud2Left > $(window).width()) {
			$("#cloud2").css("left", -350);
		}
		if (cloud3Left > $(window).width()) {
			$("#cloud3").css("left", -380);
		}
		if (cloud4Left > $(window).width()) {
			$("#cloud4").css("left", -500);
		}

		requestAnimationFrame(function () {
			animateClouds();
		});
	}

	animateClouds();
});
