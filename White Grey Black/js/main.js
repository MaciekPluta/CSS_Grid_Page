// Top Nav Code

// $(".top__nav__hamburger").on("click", function(){
//   $(".sidenav").slideToggle()
//   $(".sidenav").toggleClass(".sidenav__open");
// });

$(".top__nav__hamburger").on("click", function(event){
  event.preventDefault();
  $(".ni_1").delay(500).toggleClass("not__visible");
  $(".ni_2").toggleClass("not__visible");
  $(".ni_3").toggleClass("not__visible");
  console.log("nav toggle");
});



// Body Code

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
    $(this).removeClass("mouseover");
  });

  $(".home").on("click", function() {
      $(window).scrollTop(0);
  });

// About me Fade In

$(".about").click(function(event){
  event.preventDefault();
  $(window).scrollTop(0);
  $(".about__me").fadeIn("slow", function(){
    $(".item__hero").fadeOut("slow");
    console.log("about clicked");
  });
});

// About me Fade Out Home clicked

$(".home").click(function(event){
  event.preventDefault();
  $(window).scrollTop(0);
  $(".about__me").fadeOut(300, function(){
    $(".item__hero").fadeIn(300);
    console.log("about clicked");
  });
});

// $(".overlay").click(function() {
//   console.log("closing nav");
// });

// Mini Grid Animation

$(document).ready(function frame1(){
  // event.preventDefault();
  console.log("start");
  $(".mini__item1").delay(1000).fadeIn("slow", function(){
    console.log("frame 1");
      $(".mini__item1").delay(1000).fadeOut(function(){
        console.log("frame 2");
        $(".mini__item2").delay(1000).fadeIn("slow");
        $(".mini__item3").delay(1000).fadeIn("slow", function(){
          console.log("frame 3");
          $(".mini__item2").delay(500).fadeOut("fast");
            $(".mini__item1").delay(1000).css("transform", "rotate(90deg)");
            $(".mini__item1").delay(1000).fadeIn("slow", function(){
              console.log("frame 4");
              $(".mini__item2").delay(1000).css("grid-area", "g");
              $(".mini__item2").fadeIn("slow");
              $(".mini__item4").fadeIn("slow", function(){
                console.log("frame 5");
                  $(".mini__item1").delay(500).fadeOut("slow");
                  $(".mini__item3").delay(500).fadeOut("slow");
                  $(".mini__item5").delay(1000).fadeIn("slow");
                  $(".mini__item6").delay(1000).fadeIn("slow", function(){
                    console.log("frame 6");
                    $(".mini__item2").delay(500).fadeOut("slow");
                    $(".mini__item5").delay(500).fadeOut("slow");
                    frame1();
            });
          });
        });
      });
    });
  });
});
