$(document).ready(function () {
    let button = $('#get-upper-button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            button.addClass('show');
        } else {
            button.removeClass('show');
        }
    });

    button.on('click', function (e) {
        e.preventDefault();

        let scrollTop = $(window).scrollTop();
        let seconds = scrollTop / 1.73;

        $('html, body').animate({ scrollTop: 0 }, seconds);
    });

});