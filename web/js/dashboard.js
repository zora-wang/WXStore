$(document).ready(function() {
    $('.dashboard-box').mouseenter(function() {
        $(this).addClass('highlight');
    });
    $('.dashboard-box').mouseleave(function() {
    $(this).removeClass('highlight');
    });
    
    $('.dashboard-tile').mouseenter(function() {
        $(this).addClass('highlight');
    });
    $('.dashboard-tile').mouseleave(function() {
    $(this).removeClass('highlight');
    });
});

////////////////////////////
//function createFields() {
//    $('.field').remove();
//    var container = $('#container');
//    for(var i = 0; i < 6; i++) {
//        $('<div/>', {
//            'class': 'field',
//            'text': i + 1
//        }).appendTo(container);
//    }
//}
//
//function distributeFields() {
//    var radius = 200;
//    var fields = $('.field'), container = $('#circle-container'),
//        width = container.width(), height = container.height(),
//        angle = 0, step = (2*Math.PI) / fields.length;
//    fields.each(function() {
//        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
//        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
//        if(window.console) {
//            console.log($(this).text(), x, y);
//        }
//        $(this).css({
//            left: x + 'px',
//            top: y + 'px'
//        });
//        angle += step;
//    });
//}
//
////$('input').change(function() {
////    createFields();
////    distributeFields();
////});
//
//createFields();
//distributeFields();