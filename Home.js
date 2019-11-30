var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 12;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
  drops[x] = 1;

//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0F0"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random chinese character to print
    var text = chinese[Math.floor(Math.random() * chinese.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}

setInterval(draw, 53);



$('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });
  function init_carousel() {
    H = +($(window).height());  
    $('.carousel-inner').css('height', H + 'px');
}
window.onload = init_carousel;
init_carousel();

AOS.init({
  duration: 800,
  easing: 'slide'
});

$(document).ready(function($) {

 "use strict";

 $(window).stellar({
   responsive: false,
   parallaxBackgrounds: true,
   parallaxElements: true,
   horizontalScrolling: false,
   hideDistantElements: false,
   scrollProperty: 'scroll'
 });

 // Scrollax
 $.Scrollax();


 // loader
 var loader = function() {
   setTimeout(function() { 
     if($('#ftco-loader').length > 0) {
       $('#ftco-loader').removeClass('show');
     }
   }, 1);
 };
 loader();

 var carousel = function() {
   $('.home-slider').owlCarousel({
     center: true,
     loop:true,
     autoplay: true,
     margin:0,
     animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     nav:true,
     autoplayHoverPause: false,
     items: 3,
     dots: true,
     navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
     responsive:{
       0:{
         items:1,
         nav:false
       },
       600:{
         items:2,
         nav:false
       },
       1000:{
         items:3,
         nav:false
       }
     }
    });
   $('.carousel-testimony').owlCarousel({
     autoplay: true,
     loop: true,
     items:1,
     margin: 15,
     stagePadding: 0,
     nav: false,
     navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
     responsive:{
       0:{
         items: 1
       },
       600:{
         items: 2
       },
       1000:{
         items: 2
       }
     }
   });
 };
 carousel();

 var fullHeight = function() {

   $('.js-fullheight').css('height', $(window).height());
   $(window).resize(function(){
     $('.js-fullheight').css('height', $(window).height());
   });

 };
 fullHeight();

 var burgerMenu = function() {

   $('.js-colorlib-nav-toggle').on('click', function(event) {
     event.preventDefault();
     var $this = $(this);
     if( $('body').hasClass('menu-show') ) {
       $('body').removeClass('menu-show');
       $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
     } else {
       $('body').addClass('menu-show');
       setTimeout(function(){
         $('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
       }, 900);
     }
   })
 };
 burgerMenu();
 
 var counter = function() {
   
   $('#section-counter').waypoint( function( direction ) {

     if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

       var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
       $('.number').each(function(){
         var $this = $(this),
           num = $this.data('number');
           console.log(num);
         $this.animateNumber(
           {
             number: num,
             numberStep: comma_separator_number_step
           }, 7000
         );
       });
       
     }

   } , { offset: '95%' } );

 }
 counter();

 var contentWayPoint = function() {
   var i = 0;
   $('.ftco-animate').waypoint( function( direction ) {

     if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
       
       i++;

       $(this.element).addClass('item-animate');
       setTimeout(function(){

         $('body .ftco-animate.item-animate').each(function(k){
           var el = $(this);
           setTimeout( function () {
             var effect = el.data('animate-effect');
             if ( effect === 'fadeIn') {
               el.addClass('fadeIn ftco-animated');
             } else if ( effect === 'fadeInLeft') {
               el.addClass('fadeInLeft ftco-animated');
             } else if ( effect === 'fadeInRight') {
               el.addClass('fadeInRight ftco-animated');
             } else {
               el.addClass('fadeInUp ftco-animated');
             }
             el.removeClass('item-animate');
           },  k * 50, 'easeInOutExpo' );
         });
         
       }, 100);
       
     }

   } , { offset: '95%' } );
 };
 contentWayPoint();


 // magnific popup
 $('.image-popup').magnificPopup({
   type: 'image',
   closeOnContentClick: true,
   closeBtnInside: false,
   fixedContentPos: true,
   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
     verticalFit: true
   },
   zoom: {
     enabled: true,
     duration: 300 // don't foget to change the duration also in CSS
   }
 });

 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
   disableOn: 700,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,

   fixedContentPos: false
 });

  
  $('#appointment_date').datepicker({
   'format': 'm/d/yyyy',
   'autoclose': true
 });
 $('#appointment_time').timepicker();

});

