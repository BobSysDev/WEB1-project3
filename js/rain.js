//Code written by Marius Gafton
$(document).ready(function() {

  
  function createRaindrop() {
     // Function to create a raindrop element
    const raindrop = $('<div class="raindrop"></div>').css({
      left: Math.random() * ($(window).width() - 20), // Random horizontal position within the window width
      top: -3000,  // Initial vertical position above the window
      opacity: Math.random() + 0.5, // Random opacity between 0.5 and 1.5
    });

    // Appends the raindrop element to the body of the HTML document
    $('body').append(raindrop);
    

    // Animates the raindrop's movement from its initial position to below the window
    raindrop.animate({
      top: $(window).height() + 100, // Moves the raindrop below the window
      left: '+=' + Math.random() * 100,
    }, Math.random() * 2000 + 1500, 'linear', function() {
      $(this).remove(); // Removes the raindrop after animation completion
    }); 
    
     // Sets a timeout to create a new raindrop after a random interval
    setTimeout(createRaindrop, Math.random() * 1000 + 500);
  }
 // Creates 20 raindrops initially by calling the createRaindrop function
  for (let i = 0; i < 20; i++) {
    createRaindrop();
  }
});
