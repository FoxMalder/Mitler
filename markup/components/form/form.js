(function () {
    $('#form').submit(function () {
        let self = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: self.serialize()
        }).done(function () {
            $(self).find('.modal').addClass('.modal_state_active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                $(self).find('.modal').removeClass('.modal_state_active').fadeOut();
                self.trigger('reset');
            }, 1000);
        });
        return false;
    });
})();
