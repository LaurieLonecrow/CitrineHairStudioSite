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

$(".service-menu").click(function() {
    $(".pricing-detail", this).toggleClass("showing");
});


});

});