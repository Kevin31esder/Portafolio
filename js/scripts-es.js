$(document).ready(function() {
    
    "use strict";

    // functions
    anchor_links();
    arrow_click();
    animate_text();
    navbar_scroll();
    fadeIn();
    menu_movil();

    $(window).load('body', function(){
        setTimeout(()=>{
            $('.preloader').addClass('loaded');
        }, 1000);
    });

});

function anchor_links() {
    "use strict";
    $('.nav-header a').off().on('click', function(event) {
        const element = $(this);
        const url = element.attr('href');
        if( url.charAt(0) === '#' ) {
            $('html, body').animate({
                scrollTop: $(url).offset().top - 75
            }, 500);
        }
    });
}


function animate_text() {
    "use strict";
    const animatedText = $('.animate_text span');
    animatedText.typed({
        strings: [
            "Back<strong>End</strong>",
            "Desarrollador <strong>Web</strong>",
            "<strong>Front</strong>End",
            "Node<strong>JS</strong>",
            "<strong>Git</strong>Hub",
        ],
        loop: true,
        startDelay: 700,
        backDelay: 1000,
        typeSpeed: 65
    });
}

function arrow_click() {
    "use strict";

    $('.arrow-wrap a').on('click', function(event){
        const element = $(this);
        const url = element.attr('href');
        if(url.charAt(0) === '#' ) {
            $('html, body').animate({
                scrollTop: $(url).offset().top - 75
            }, 500);
        }
    });
}

function navbar_scroll() {
    "use strict";
    $(window).on('scroll', function() {
        const navBar = $('.nav-header');
        const windowScroll = $(window).scrollTop();
        if (windowScroll > 16) {
            navBar.addClass('animate');
        } else {
            navBar.removeClass('animate');
        }
    });
}

function fadeIn() {
    "use strict";
    
    const elements = $('.fade_in');

    elements.each((i) => {
        elements.eq(i).addClass('inicio');
        elements.eq(i).removeClass('fade_in');
    });

    $(window).on('scroll', function() {
        const scrollBottom = $(window).scrollTop();
        elements.each((i) => {
            const element = elements.eq(i);
            const altura = element.offset().top - $(window).height() * .8;
            if ( scrollBottom >= altura) {
                element.removeClass('inicio');
                element.addClass('fade_in');
            }    
        });
    });
}

function menu_movil() {
    "use strict";
    $('#menu-movil').click(function(e) {
        e.preventDefault();
        $('.right').slideToggle();
    });
}