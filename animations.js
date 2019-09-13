$(document).ready(function() {
    // Check scroll position incase page is already scrolled; i.e. scroll-pos is cached on refresh
    handleScroll();
    // Every time the window is scrolled, check the scoll position and animate if appropriate
    $(window).scroll(handleScroll);
    
});

// Scroll handling logic. Animates appropriate elements if they are visible on the screen
function handleScroll() {
    $('.js-fade-slide-entry').each( function(i, elem) {
        var object_top = $(elem).offset().top + $(elem).outerHeight()/5;
        var screen_bottom = $(window).scrollTop() + $(window).height();
        // 
        if (screen_bottom > object_top) {
            $(elem).css({
                'opacity': '1',
                'transform': 'translateY(0%)'
            });
        }
    }); 
}

