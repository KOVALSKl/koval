$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.owl-carousel.owl-vids').owlCarousel({
        mouseDrag: false,
        loop: true,
        margin: 10,
        nav: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    // центруем навигационные точки слайдера 

    let sliders = $('.owl-carousel');

    for (let i = 0; i < sliders.length; i++) {
        let item_id = sliders[i].id;
        let dots_count = $(`#${item_id} .owl-dots > .owl-dot`).length;
        let dots = $(`#${item_id} .owl-dots`);

        dots.css({
            left: $('.owl-carousel').width() * 0.5 - ((dots_count % 2 === 0) ? dots.width() / 2 : 0),
        });
    }
});