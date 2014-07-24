// Script for Project 1
var albumsNeeded = [
  {
    title: "Clarity",
    artist: "Jimmy Eat World",
    year: "1998",
    genre: "Emo",
    life_Detail: "First post-pop-punk album liked; top 5 life album; favorite among friends",
    albumCover: "AlbumCover01 - Clarity.jpg"
    },
  {
    title: "Fate\'s Got a Driver",
    artist: "Chamberlain",
    year: "1995",
    genre: "Emo/Post-Hardcore",
    life_Detail: "Late nights on the computer at 25 Prospect, top 5 life album (strong contender for my favorite album of all time)",
    albumCover: "AlbumCover02 - Fates Got a Driver.jpg"
    },
  {
    title: "The Moon My Saddle",
    artist: "Chamberlain",
    year: "1998",
    genre: "Emo/Rock",
    life_Detail: "My brothers; Old Black Point; Early days with Kaytee Sue",
    albumCover: "AlbumCover03 - The Moon My Saddle.jpg"
    },
  {
    title: "Exit 263",
    artist: "Chamberlain",
    year: "2000",
    genre: "Rock",
    life_Detail: "Chilling with Kaytee Sue and Mrs. Foster; Kaytee\'s Favorite",
    albumCover: "AlbumCover04 - Exit 263.jpg"
    },
  {
    title: "Man on the Moon: Part I",
    artist: "Kid Cudi",
    year: "2009",
    genre: "Hip-Hop",
    life_Detail: "Summer/Fall in NYC 2009; Restarting school; Ride with Alex, Ashley and Kaytee Sue to Salem, MA [foliage]",
    albumCover: "AlbumCover05 - Man on the Moon.jpg"
    },
  {
    title: "Reasonable Doubt",
    artist: "Jay-Z",
    year: "1996",
    genre: "Hip-Hop",
    life_Detail: "NYC [Flushing, Queens]; Walks to Planet Fitness",
    albumCover: "AlbumCover06 - Reasonable Doubt.jpg"
    },
  {
    title: "Illmatic",
    artist: "Nas",
    year: "1992",
    genre: "Hip-Hop",
    life_Detail: "Drinking at apartment; Flushing, Queens",
    albumCover: "AlbumCover07 - Illmatic.jpg"
    },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: "1973",
    genre: "Progressive Rock",
    life_Detail: "Junior year of high school [2004]; Project Fun; Movie I owned about the making of the album",
    albumCover: "AlbumCover08 - Dark Side of the Moon.jpg"
    },
  {
    title: "The Bake Sale",
    artist: "Cool Kids",
    year: "2008",
    genre: "Hip-Hop",
    life_Detail: "Summer in Astoria/apartment [2009]; TV on in apartment",
    albumCover: "AlbumCover09 - The Bake Sale.jpg"
    },
  {
    title: "Bleed American",
    artist: "Jimmy Eat World",
    year: "2001",
    genre: "Emo/Alternative Rock",
    life_Detail: "104 Fest; beach dances; Rides down I-95",
    albumCover: "AlbumCover10 - Bleed American.jpg"
    },
  {
    title: "Today\'s Empires, Tommorow\'s Ashes",
    artist: "Propagandhi",
    year: "2001",
    genre: "Political Punk",
    life_Detail: "Camping with Matt in Cape Cod [2002]; Post-9/11 angst; Ricky\'s love for \"Fuck the Border\"",
    albumCover: "AlbumCover11 - Todays Empires Tomorrows Ashes.jpg"
    },
  {
    title: "Greatest Hits",
    artist: "The Guess Who",
    year: "1999",
    genre: "Rock",
    life_Detail: "Ride to Burlington, VT [2004]; old room at 32 Seaview",
    albumCover: "AlbumCover12 - GreatestHits.jpg"
    },
  {
    title: "Emotion is Dead",
    artist: "The Juliana Theory",
    year: "2000",
    genre: "Emo",
    life_Detail: "Walking around downtown Niantic",
    albumCover: "AlbumCover13 - Emotion is Dead.jpg"
    },
  {
    title: "De-loused in the Comatorium",
    artist: "The Mars Volta",
    year: "2003",
    genre: "Progressive Rock",
    life_Detail: "Hanging out with Alex and Ricky while visiting them in CT [2005]",
    albumCover: "AlbumCover14 - De-loused in the Comatorium.jpg"
    },
  {
    title: "Frances the Mute",
    artist: "The Mars Volta",
    year: "2005",
    genre: "Progressive Rock",
    life_Detail: "Buying and listening to the album in Kentucky; bringing it back to CT and showing it to Alex and Ricky who loved it",
    albumCover: "AlbumCover15 - Frances the Mute.jpg"
    }
  ];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');

    function albumDisplay() {

        var albumField = document.getElementById('albums');
        var s = albumField.selectedIndex;
        var album = albumField.options[s].value;
        
        var resultsHTML = '';
        var albumsLength = albumsNeeded.length;

        if (album != 0) {
            resultsHTML += '<img id="albumCover"\
             src="' + albumsNeeded[s - 1].albumCover + '">';
        };

        results.innerHTML = resultsHTML;

    };

    function randomAlbum() {
        var randomNumber = Math.random();
        var randomSelection = Math.floor((randomNumber * 15) + 1);
        var randomNumberStorage = document.getElementById('randomNumberStorage');

        var resultsHTML = '';

        resultsHTML += '<img id="albumCover"\
         src="' + albumsNeeded[randomSelection].albumCover + '">';

        randomNumberStorage.innerHTML = randomSelection;
        results.innerHTML = resultsHTML;
    };

    var searchButton = document.getElementById('searchButton');
    var randomButton = document.getElementById('randomButton');

    searchButton.addEventListener('click', albumDisplay);
    randomButton.addEventListener('click', randomAlbum);

});

