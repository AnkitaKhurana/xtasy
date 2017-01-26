$( document ).ready(function() {
var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$('.default').show();
    $('.spons').hide();
$(document).mousemove(function(e) {
// function start_first(e)
 //{

//$(document).mousemove(function(event){ 
    
  var docX = $(document).width();
    var docY = $(document).height();
    
  //  $('.spons').hide();
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('.popup')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');


});
//}
$(".s").click(function(){

   // $('.s').live('click',function(){

         $('.spons').show();
        $('.default').hide();
    //});
 
 });

});
