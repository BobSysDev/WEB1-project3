//This javaScript was made by Marius Gafton #343889

$(document).ready(function() {
  // Initial scaling factor for the net
  var scale = 0.5;
   // Factor to adjust distance sensitivity of the net movement
  var distanceFactor = 2; 


   // Event listener for mouse movement within the document
  $(document).mousemove(function(e) {
      var net = $("#net");

      // Calculates the offset for the net based on mouse position and scaling
      var offsetX = e.pageX - net.width() * scale / distanceFactor;
      var offsetY = e.pageY - net.height() * scale / distanceFactor;


       // Updates the net's position and scaling using CSS
      net.css({
          left: offsetX,
          top: offsetY,
          transform: 'scale(' + scale + ')' + (e.pageX > net.data('prevX') ? ' scaleX(-1)' : ''),
      }).data('prevX', e.pageX); // Stores the previous X-coordinate of the mouse for comparison
  });
});


 

      



