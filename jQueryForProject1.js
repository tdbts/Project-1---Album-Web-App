$(document).ready(function() {

    $("#header").hide();
    $("#header").fadeIn(1000);

    $("#albumInfo").hide();

    $("#searchButton").click(function() {
		
		$("#albumInfo").hide();    	
    	$("#results").hide();
    	$("#results").css("margin-Left", "50px");
    	$("#results").fadeIn(600).animate({marginLeft: "700px"}, 250, function() {

    		$("#albumInfo").fadeIn(500);
    		
    	});

    	    
    });
	
});

