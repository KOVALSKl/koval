$(document).ready(function () {
    $('#menu > li > a, #footer_menu > li > a, #get-more-btn').on('click', function (e) {
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $("body, html").animate({
            scrollTop: offset
        }, {
            duration: offset / 1.73,
            easing: "linear"
        });

        e.preventDefault();
    });
});