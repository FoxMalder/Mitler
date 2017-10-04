(function partnersCarousel() {
    $('#partners-carousel').owlCarousel({
        loop: true,
        items: 4,
        smartSpeed: 700,
        autoPlay: true,
        autoplayTimeout: 1000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
})();
