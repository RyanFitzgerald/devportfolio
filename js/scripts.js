/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page portfolio website.
*/

(function($) {

    const scrollToSection = (heading) => {
        const scrollDistance = $(heading).offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);
    };

    const createTimeline = () => {
        $('#experience-timeline .vtimeline-content').each(function() {
            const $this = $(this);
            $this.addClass('vtimeline-content')
                 .wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
            const date = $this.data('date');
            if (date) {
                $this.parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

        $('#experience-timeline .vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });
    };

    $(document).ready(function() {
        $("#current-year").text(new Date().getFullYear());
        $('html').removeClass('no-js');

        $('header a').click(function(e) {
            if ($(this).hasClass('no-scroll')) return;
            e.preventDefault();
            const heading = $(this).attr('href');
            scrollToSection(heading);
            if ($('header').hasClass('active')) {
                $('header, body').removeClass('active');
            }
        });

        $('#to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });

        $('#lead-down span').click(function() {
            const scrollDistance = $('#lead').next().offset().top;
            $('html, body').animate({
                scrollTop: scrollDistance + 'px'
            }, 500);
        });

        createTimeline();

        $('#mobile-menu-open').click(function() {
            $('header, body').addClass('active');
        });

        $('#mobile-menu-close').click(function() {
            $('header, body').removeClass('active');
        });

        $('#view-more-projects').click(function(e) {
            e.preventDefault();
            $(this).fadeOut(300, function() {
                $('#more-projects').fadeIn(300);
            });
        });
    });

})(jQuery);

