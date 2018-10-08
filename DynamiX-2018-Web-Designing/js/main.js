function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if(elem.length == 0) {
		return;
	}
	var viewport_top = $(window).scrollTop();
	var viewport_height = $(window).height();
	var viewport_bottom = viewport_top + viewport_height;
	var top = $(elem).offset().top;
	var height = $(elem).height();
	var bottom = top + height;

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
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
    fadeInUp('.sec-2 .left');
    fadeInUp('.sec-2 .right');
    fadeInUp('.sec-3 .top');
    fadeInUp('.sec-3 .box');
    fadeInUp('.sec-4 .inner-sec');
    
    setTimeout(function() {
        console.log("Hey!");
        $(".loader").fadeOut("slow");
    }, 1000)
});