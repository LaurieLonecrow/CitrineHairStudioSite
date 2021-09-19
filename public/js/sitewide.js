
$(document).ready(function() {

// Loading Image Screen 

$(window).on("load", function() {

// Homepage slideshow   
$(function(){
  $('.slide-show-img').slice(1).hide();
  setInterval(function(){
    $('.slide-show :first-child').fadeOut(2000)
       .next('.slide-show-img').fadeIn(3000)
       .end().appendTo('.slide-show');
  }, 5000)
});


// Navbar mobile Icon and Menu
    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
    });

$(".service-menu").click(function(e) {
    $(".pricing-detail", this).toggleClass("display");
});

$(".maps-selector").click(function() {
  
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPad") != -1) || 
     (navigator.platform.indexOf("iPod") != -1))
     {
       console.log('maps')
    window.open(`maps://maps.google.com/maps?daddr=<33.9751385>,<-84.4141128>&amp;ll=`);
  
} else {/* else use Google */
    window.open(`https://maps.google.com/maps?daddr=<33.9751385>,<-84.4141128>&amp;ll=`);
}

});

});
});