var $win = $(window);
var $aboutWork = $('.about-work');

$win.on('scroll', function(){
    var scrollPos = $win.scrollTop();
    if(scrollPos < 450) {
        $aboutWork.css('margin-top',scrollPos/5)
    }
});