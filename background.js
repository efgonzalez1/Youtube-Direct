//Thanks to ridgerunner @ stackexchange for the regex!
function ytPrettify(text) {
    var re = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w]*(?:['"][^<>]*>|<\/a>))[?=&+%\w-]*/ig;
    return text.replace(re, "https://youtube.googleapis.com/v/$1");
}

function directLinks(){
    $("a[href]").each(function () {
        var href = $(this).attr('href');
        href = ytPrettify(href);
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