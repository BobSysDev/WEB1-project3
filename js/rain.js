$(document).ready(function() {
  function createRaindrop() {
    const raindrop = $('<div class="raindrop"></div>').css({
      left: Math.random() * ($(window).width() - 20), // Adjust the subtraction to fit the raindrop width
      top: -100,
      opacity: Math.random() + 0.5,
    });
    $('body').append(raindrop);
    
    raindrop.animate({
      top: $(window).height() + 100,
      left: '+=' + Math.random() * 100, // Adjust the random value for horizontal movement
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
