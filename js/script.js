

/// when should I add <button class="listen">Listen</button> in html?

    let songs = [];
      
$(".add").click(function() {
    let title = $(".title").val();
    let length = $(".length").val();
    let url = $(".url").val();
    let artist = $(".artist").val();
    let songLink = $(".songLink").val();
    
    let song= {
        title: title,
        length: length,
        url: url,
        artist: artist,
        songLink: songLink
    };
    
    songs.push(song);
    function addToDiv(div, property){
        $(div).append("<p>" + song[property] + "</p>");
    }
    
    addToDiv(".songTitle","title");
    addToDiv(".songLength","length");
    addToDiv(".songURL","url");
    addToDiv(".artistName","artist");
    addToDiv(".songLink","songLink");
    
    function listen(link){
        $(".listen").append("<button onclick=link>" + "Click Here" +"</button>");
    }
    
    });
    
    