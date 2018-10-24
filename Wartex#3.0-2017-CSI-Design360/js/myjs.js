$(document).ready(function() {
    $('.scrolldown').click(function(event){
        $('html, body').animate({scrollTop: $(".arguments").position().top}, 800);
    });
    return false;
});