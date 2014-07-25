$(document).ready(function() {

    $("#header").hide().fadeIn(1000);
    $("#lyricFooter").hide().fadeIn(700);

    $("#randomNumberStorage").hide();

    var needJSON = function placeJSON(userSelection) {
        $("#title").html(userSelection.Title);
        $("#artist").html(userSelection.Artist);
        $("#year").html(userSelection.Year);
        $("#genre").html(userSelection.Genre);
        $("#lifeDetail").html(userSelection.Life_Detail);

        $("#lyricFooter").html('<p id="sampleLyric"></p>');
        $("#sampleLyric").hide();
        $("#sampleLyric").html("<em>" + userSelection.Lyric + "...</em>");
        $("#sampleLyric").delay(800).fadeIn(750);

        $("#albumInfo").fadeIn(500);
    };

    $("#searchButton").click(function() {
        
        $("#sampleLyric, #albumInfo, #results").hide();
        
    	$("#results").css("margin-Left", "50px");
    	$("#results").fadeIn(600).animate({marginLeft: "700px"}, 250, function() {

            $.getJSON('albumsJSON.json', function(albumsJSON) {
                var albumField = document.getElementById('albums');
                var s = albumField.selectedIndex;
                var album = albumField.options[s].value;
                
                var selectedAlbum = albumsJSON.Albums_Needed[album - 1];

                needJSON(selectedAlbum);

            });
    		
    	});

    	    
    });

    $("#randomButton").click(function() {
        
        $("#sampleLyric, #albumInfo, #results").hide();

        $("#results").css("margin-Left", "50px");
        $("#results").fadeIn(600).animate({marginLeft: "700px"}, 250, function() {

            $.getJSON('albumsJSON.json', function(albumsJSON) {
                var albumField = document.getElementById('albums');
                var s = $("#randomNumberStorage").text();
                var album = albumField.options[s].value;

                var selectedAlbum = albumsJSON.Albums_Needed[album];

                needJSON(selectedAlbum);

            });
            
        });
            
    });    
	
});

