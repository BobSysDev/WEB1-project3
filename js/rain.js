$(document).ready(function() {
    function createRain() {
        $('.rain').append('<div class="raindrop"></div>');
    }

    setInterval(createRain, 200); // Adjust timing for raindrop creation

    // Optional: Remove raindrops after reaching the bottom to avoid performance issues
    $('.rain').on('animationiteration', '.raindrop', function() {
        $(this).remove();
    });
});