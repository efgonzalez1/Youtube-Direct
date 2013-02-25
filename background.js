function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
        return match[7];
    }else{
        console.debug(url + ": FAILED!!!");
    }
}

function directLinks(){
    $("a[href]").each(function () {
        var href = $(this).attr('href');
        var id = youtube_parser(href);
        if(id){
            href = "https://youtube.googleapis.com/v/" + id;
        }
        $(this).attr('href', href);
    });
    console.debug("Links updated.");
}

//Run script when page updates
var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(directLinks, 500);
}, false);