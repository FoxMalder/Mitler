(function () {
    function equalHeightCarousel() {
        $('.service-item').each(function () {
            let self = $(this);
            let contentHeight = self.find('.service-item__content').outerHeight();
            self.find('.service-item__img').css('height', contentHeight);
        });
    }
    // resize funtions
    function onResize() {
        $('.service-item__content').equalHeights();
    }
    window.onresize = function () {
        onResize();
    };

    $('#services-carousel').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            equalHeightCarousel();
        }, 200);
    });

    $('#services-carousel').owlCarousel({
        nav: true,
        smartSpeed: 700,
        dots: false,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
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
