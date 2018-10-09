function isOnScreen(elem) {
	var v_bottom = $(window).scrollTop() + $(window).height();
	var top = $(elem).offset().top;
	var height = $(elem).height();
	var bottom = top + height;

	return (top >= $(window).scrollTop() && top < v_bottom) ||
	(bottom > $(window).scrollTop() && bottom <= v_bottom) ||
	(height > $(window).height() && top <= $(window).scrollTop() && bottom >= v_bottom)
}

$(document).ready(function() {
    function fadeInUp(elem) {
        window.addEventListener('scroll', function(e) {
            if(isOnScreen($(elem))) {
                $(elem).addClass('fadeInUp');
            } else {
                $(elem).removeClass('fadeInUp');
            }
        });
    }
    function fadeInUpX(elem) {
        window.addEventListener('scroll', function(e) {
            if(isOnScreen($(elem))) {
                $(elem).addClass('fadeInUpX');
            } else {
                $(elem).removeClass('fadeInUpX');
            }
        });
    }

    fadeInUp('.sec-2 .animated');
    fadeInUp('.sec-3 .top');
    fadeInUpX('.sec-3 .box');
    fadeInUpX('.sec-4 .inner-sec .box');
    
    setTimeout(function() {
        $(".loader").fadeOut("slow");
    }, 1000)
});