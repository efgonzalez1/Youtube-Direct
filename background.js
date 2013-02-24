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
