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
        let seconds = 0;

        if (scrollTop <= 3000) {
            seconds = 1700;
        } else if (scrollTop > 3000 && scrollTop < 5000) {
            seconds = 3000;
        } else {
            seconds = 5000;
        }
        $('html, body').animate({ scrollTop: 0 }, seconds);
    });

});