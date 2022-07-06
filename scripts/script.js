$(document).ready(function () {
    $('.menu_list > li a').on('click', function (e) {
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, {
            duration: offset / 2,
            easing: "linear"
        });

        e.preventDefault();
    });

    // $('footer .menu_list > li a').on('click', function (e) {
    //     let href = $(this).attr('href');
    //     let offset = $(href).offset().top;
    //     $('html, body').animate({
    //         scroll: offset
    //     }, {
    //         duration: offset / 2,
    //         easing: "linear"
    //     });

    //     e.preventDefault();
    // });
});