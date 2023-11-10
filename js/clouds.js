// jQuery
$(document).ready(function () {
	// Get the clouds
	var clouds = $(".cloud");

	// Move the clouds
	function moveClouds() {
		// Get the current position of each cloud
		var cloudPositions = [];
		for (var i = 0; i < clouds.length; i++) {
			cloudPositions[i] = $(clouds[i]).offset();
		}

		// Move each cloud at a different speed
		for (var i = 0; i < clouds.length; i++) {
			var speed = i + 1;
			cloudPositions[i].left += speed;

			// If a cloud reaches the edge of the screen, move it back to the beginning
			if (cloudPositions[i].left > $(window).width()) {
				cloudPositions[i].left = 0;
			}
		}

		// Set the new position of each cloud
		for (var i = 0; i < clouds.length; i++) {
			$(clouds[i]).offset(cloudPositions[i]);
		}

		// Request the next animation frame
		requestAnimationFrame(moveClouds);
	}

	// Start the animation
	moveClouds();
});
