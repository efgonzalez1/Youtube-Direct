function directLinks(){
    $("a[href]").each(function () {
        var href = $(this).attr('href');
        //Try to find/replace short url
        href = href.replace('youtu.be', 'youtube.com/v');
        //Try to find/replace regular url
        href = href.replace('watch?v=', 'v/');
        $(this).attr('href', href);
    });
    console.debug("Links updated.");
}

//Run script if no other events within 500ms
//Useful for updating pages that silently update/refresh
var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(directLinks, 500);
}, false);