$(document).ready(function () {
    let button = $('#get-upper-button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            button.addClass('show');
        } else {
            button.removeClass('show');
        }
    });
});