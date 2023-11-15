$(document).ready(function() {
  function createRaindrop() {
    const raindrop = $('<div class="raindrop"></div>').css({
      left: Math.random() * ($(window).width() - 20),
      top: -3000, // Adjusted initial top position to start above the viewport
      opacity: Math.random() + 0.5,
    });
    $('body').append(raindrop);
    
    raindrop.animate({
      top: $(window).height() + 100,
      left: '+=' + Math.random() * 100,
    }, Math.random() * 2000 + 1500, 'linear', function() {
      $(this).remove();
    });
    
    setTimeout(createRaindrop, Math.random() * 1000 + 500);
  }

  for (let i = 0; i < 15; i++) {
    createRaindrop();
  }
});
