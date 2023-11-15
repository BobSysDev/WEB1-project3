//This javaScript was made by Marius Gafton #343889

$(document).ready(function() {
    function generateFlowers() {
        var gardenWidth = $('.garden').width(); 
        var numFlowers = 8; 

        for (var i = 0; i < numFlowers; i++) {
            $('#flowers-container').append('<div class="flower"></div>');
        }
    }

    generateFlowers();
});
