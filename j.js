$( document ).ready(function() {
var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$('.default').show();
    $('.spons').hide();
    $('.star').hide();
    $('.thr').hide();
    $('.sch').hide();
    $('.even').hide();
    $('.con').hide();


$('.demo').ripples({

  // The width and height of the WebGL texture to render to. 
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 256,

  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 20,

  // Basically the amount of refraction caused by a ripple. 
  // 0 means there is no refraction.
  perturbance: 0.04,

  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,

  // The crossOrigin attribute to use for the affected image. 
  crossOrigin: ''
  
});
$('.demo').ripples('show');





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
$(".s").hover(function(){
//$(".s").click(function(){

   // $('.s').live('click',function(){

         $('.spons').show();
        $('.default').hide();
        $('.even').hide();
        $('.star').hide();
        $('.thr').hide();
        $('.con').hide();
         $('.sch').hide();
    //});
 
 });

$(".sche").hover(function(){
//$(".s").click(function(){

   // $('.s').live('click',function(){
        $('.spons').hide();

         $('.sch').show();
        $('.default').hide();
        $('.thr').hide();
        $('.star').hide();
        $('.even').hide();
        $('.con').hide();
    //});
 
 });



$(".e").hover(function(){
//$(".e").click(function(){


   // $('.s').live('click',function(){
         $('.even').show();
         $('.spons').hide();
         $('.star').hide();
        $('.default').hide();
         $('.sch').hide();
         $('.thr').hide();
        $('.con').hide();
    //});
 
 });

$(".c").hover(function(){
//$(".e").click(function(){

   // $('.s').live('click',function(){

         $('.con').show();
          $('.sch').hide();
         $('.spons').hide();
        $('.default').hide();
        $('.star').hide();
        $('.thr').hide();
        $('.even').hide();
    //});
 
 });

$(".st").hover(function(){
//$(".e").click(function(){

   // $('.s').live('click',function(){

         $('.con').hide();
         $('.thr').hide();
          $('.sch').hide();
         $('.spons').hide();
        $('.default').hide();
        $('.star').show();
        $('.even').hide();
    //});
 
 });
$(".xt").hover(function(){
//$(".e").click(function(){

   // $('.s').live('click',function(){

         $('.con').hide();
         $('.thr').show();
          $('.sch').hide();
         $('.spons').hide();
        $('.default').hide();
        $('.star').hide();
        $('.even').hide();
    //});
 
 });



});
