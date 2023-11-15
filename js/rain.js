$(document).ready(function() {
    function createRaindrop() {
        // Create a raindrop element
        var raindrop = $('<div class="raindrop"></div>');

        // Calculate random position within the width of the garden
        var posX = Math.random() * $('.garden').width();
        
        // Set initial position for the raindrop
        raindrop.css({
            left: posX,
            top: '-50px' /* Start position above the garden */
        });

        // Append the raindrop to the rain container
        $('.rain').append(raindrop);

        // Animate the raindrop falling
        raindrop.animate({
            top: '100%' /* End position at the bottom of the garden */
        }, 3000, 'linear', function() {
            // Remove the raindrop after animation completes
            $(this).remove();
        });
    }

    // Call createRaindrop function at intervals for continuous rain
    setInterval(createRaindrop, 200); // Adjust timing for raindrop creation
});