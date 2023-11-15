$(document).ready(function() {
    function createRaindrop() {
        var raindrop = $('<div class="raindrop"></div>');

        // Set random position within the width of the garden
        var posX = Math.random() * $('.garden').width();
        
        raindrop.css({
            left: posX,
        });

        $('.rain').append(raindrop);

        raindrop.animate({
            top: '100%' /* End position at the bottom of the garden */
        }, 3000, 'linear', function() {
            $(this).remove();
        });
    }

    // Create raindrops at intervals for continuous rain
    setInterval(createRaindrop, 200); // Adjust timing for raindrop creation
});
