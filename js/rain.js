$(document).ready(function() {
    function createRaindrop() {
      const raindrop = $('<div class="rain"></div>').css({
        left: Math.random() * $(window).width(),
        top: -100,
        opacity: Math.random() + 0.5,
        transform: 'rotate(' + Math.random() * 360 + 'deg)'
      });
      $('body').append(raindrop);
      
      raindrop.animate({
        top: $(window).height() + 100,
        left: '+=20'
      }, Math.random() * 2000 + 1500, 'linear', function() {
        $(this).remove();
        createRaindrop();
      });
    }
  
    // Create multiple raindrops
    for (let i = 0; i < 30; i++) {
      createRaindrop();
    }
  });