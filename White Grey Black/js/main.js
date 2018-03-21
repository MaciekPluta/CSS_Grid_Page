// Top Nav Code

$(".top__nav__hamburger").on("click", function(event){
  event.preventDefault();
  $(".ni_1").toggleClass("not__visible", 2000);
  $(".ni_2").toggleClass("not__visible", 2000);
  $(".ni_3").toggleClass("not__visible", 2000);
  console.log("nav toggle");
});

// Body Code

$(document).ready(function() {
    $("body").fadeIn("fast");
});

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
    $(".item__hero p").fadeIn(300);
    $(".mini__grid").css("grid-template-columns", "repeat(3, 12px)");
    $(".mini__grid").css("grid-template-rows", "repeat(3, 12px)");
    $(".mini__grid").css("padding-bottom", "-10px");
    $(".mini__grid").css("max-width", "50px");
    console.log("about clicked");
  });
});

// CSS GRid clicked

$(".css_grid").click(function(event){
  event.preventDefault();
  $(window).scrollTop(0);
    console.log("css grid clicked");
    $(".item__hero p").fadeOut(300, function(){
    $(".mini__grid").css("grid-template-columns", "repeat(3, 100px)");
    $(".mini__grid").css("grid-template-rows", "repeat(3, 100px)");
    $(".mini__grid").css("padding", "20px 235px 40px 0px");
    $(".mini__grid").css("max-width", "auto");
  });
});

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
