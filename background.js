//$(document).ready(function() {

    $("a[href]").each(function () {
        var href = $(this).attr('href');
        href = href.replace('watch?v=', 'v/');
        $(this).attr('href', href);
    });

    $("a[href]").each(function () {
        var href = $(this).attr('href');
        href = href.replace('youtu.be', 'youtube.com/v');
        $(this).attr('href', href);
    });


/*
    $('a').each(function(){
      var newUrl = $(this).attr('href').replace('youtube.com/watch?v=', 'youtube.com/v/');
      $(this).attr('href', newUrl);
    });
 */                
//});