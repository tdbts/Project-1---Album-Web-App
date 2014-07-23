$(document).ready(function() {

    $("#header").hide();
    $("#lyricFooter").hide();
    $("#header").fadeIn(1000);
    $("#lyricFooter").fadeIn(700);

    $("#albumInfo").hide();

    $("#searchButton").click(function() {
        
        $("#sampleLyric").hide();
        $("#albumInfo").hide();     
        $("#results").hide();
    	$("#results").css("margin-Left", "50px");
    	$("#results").fadeIn(600).animate({marginLeft: "700px"}, 250, function() {

            $.getJSON('albumsJSON.json', function(albumsJSON) {
                var albumField = document.getElementById('albums');
                var s = albumField.selectedIndex;
                var album = albumField.options[s].value;
                console.log(album);

                var selectedAlbum = albumsJSON.Albums_Needed[album - 1];

                $("#title").html(selectedAlbum.Title);
                $("#artist").html(selectedAlbum.Artist);
                $("#year").html(selectedAlbum.Year);
                $("#genre").html(selectedAlbum.Genre);
                $("#lifeDetail").html(selectedAlbum.Life_Detail);

                $("#lyricFooter").html('<p id="sampleLyric"></p>');
                $("#sampleLyric").hide();
                $("#sampleLyric").html("<em>" + selectedAlbum.Lyric + "...</em>");
                $("#sampleLyric").delay(800).fadeIn(750);

    		$("#albumInfo").fadeIn(500);

            });
    		
    	});

    	    
    });
	
});

