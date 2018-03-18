
// Top Nav Code

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// $("#mySidenav").on("click", function(){
//
// toggleClass("NavOpen"});
// Main Grid Items Code


$(document).ready(function() {
    $("body").fadeIn("fast");
});

// $(".item").on("click", function() {
//   $(this).toggleClass("clicked");
//   console.log("worked");
// });

// $(".item").mouseover(function() {
//   $(this).addClass(".mouseover");
//   console.log("worked");
//   $(this).addClass(".mouseover");
// });


$(".item")
  .mouseover(function() {
    $(this).addClass("mouseover");
  })
  .mouseout(function() {
    $( this ).removeClass("mouseover");
  });

  $("#home").on("click", function() {
      $(window).scrollTop(0);
  });

// About me Fade In

$(".about").click(function(event){
  event.preventDefault();
  $(window).scrollTop(0);
  $(".about__me").fadeIn("slow");
  $(".item__hero").fadeOut("slow");
  console.log("about clicked");
  closeNav();
});

// About me Fade Out Home clicked

$(".home").click(function(event){
  event.preventDefault();
  $(window).scrollTop(0);
  $(".about__me").fadeOut("slow");
  $(".item__hero").fadeIn("slow");
  console.log("about clicked");
  closeNav();
});

$(".overlay").click(function() {
  console.log("closing nav");
  closeNav();
});
