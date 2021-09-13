$(document).ready(function() {

// Navbar mobile Icon and Menu

    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
    });
 

// Slideshow Auto
let index = 0;
// autoSlideshow();

function autoSlideshow (){
  let imgs = document.getElementsByClassName("slide-show-img");
  for (let i = 0; i < imgs.length; i++){
    imgs[i].style.opacity = "1";
  }
index++;
if (index > imgs.length) {
  index = 1
}
imgs[index-1].style.animation = "slideIn linear infinite";
setTimeout(autoSlideshow, 0);
}







});