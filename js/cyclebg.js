
function cyclebg(){
    var whichbg = 0;
    
    $imagesel = $('.toggle-bg');

    setInterval(function() {

        whichbg = whichbg + 1 < $imagesel.length ? whichbg + 1 : 0;

        $imagesel.eq(whichbg).addClass("show");
        $imagesel.eq(whichbg - 1).removeClass("show");
    }, 13000);

};

$(function() {
    cyclebg();

});

