(function () {
    'use strict';
    $('#feedbacks-carousel').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            },
            1900: {
                items: 1
            }

        }
    });
})();
