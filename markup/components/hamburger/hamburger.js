(function () {
    $('#hamburger').on('click', function () {
        $(this).toggleClass('hamburger_is_active');
        $('#page').toggleClass('page_is_open');
        $('#sidebar').toggleClass('sidebar_is_open');
        $('#menu').fadeIn(5000);
    });
})();
