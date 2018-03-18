// $(".mini__grid").hover(function() {
//   $(".mini__grid").toggleClass("mini__grid__transform");
//   $(".mini__item1").toggleClass("mini__grid__transform1");
//   $(".mini__item3").toggleClass("mini__grid__transform3");
//   $("#css").css("transform", "rotate(360deg)");
//   $("#css").css("text-align", "center");
//   $(".mini__item2").toggleClass("mini__grid__transform2");
//   $(".mini__item4").toggleClass("mini__grid__transform4");
// });
console.log("js works");

$(document).ready(function frame1(){
  // event.preventDefault();
  console.log("hover");
  $(".mini__item2").fadeIn("slow");
  $(".mini__item3").delay(1000).fadeIn("slow");
  $(".mini__item1").delay(1000).fadeOut("slow");
  $(".mini__item4").delay(1000).fadeIn("slow");
  $(".mini__item5").delay(1000).fadeIn("slow", function(){
    
  });
});

// animate function below

// $("box").animate({
//
// }, function() {
//
//
// });
