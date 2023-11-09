$(document).ready(function() {
  var scale = 0.5;
  var distanceFactor = 2; 

  $(document).mousemove(function(e) {
      var net = $("#net");
      var offsetX = e.pageX - net.width() * scale / distanceFactor;
      var offsetY = e.pageY - net.height() * scale / distanceFactor;

      net.css({
          left: offsetX,
          top: offsetY,
          transform: 'scale(' + scale + ')' + (e.pageX > net.data('prevX') ? ' scaleX(-1)' : ''),
      }).data('prevX', e.pageX);
  });
});
