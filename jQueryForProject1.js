$(document).ready(function() {

    $("#header").hide();
    $("#header").fadeIn(1000);

    $("#searchButton").click(function() {
    	
    	$("#results").css("margin-Left", "50px");
    	$("#results").hide();
    	$("#results").fadeIn(1000);

    	$("#results").animate({marginLeft: "700px"});
    	    
    });
	
});

