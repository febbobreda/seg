var main = {

    galery: function() {
        // Galeria de Fotos
        $(".fancybox").fancybox();
    },

    tooltips: function() {
        // Bootstrap Tooltips
        $("[data-toggle=tooltip]").tooltip({'placement':'bottom'}).tooltip();
    },

    nav: function() {
        // Menu Nav
        var header_height = $('header nav').height();
        var nav = $('header nav');
        $(window).on('scroll', function() {
            if($(window).scrollTop()>header_height) {
                nav.addClass('scrolled');
            } else {
                nav.removeClass('scrolled');
            }
        });
    }
};

$(function() {

    main.galery();
    main.tooltips();
    main.nav();

});