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
                  $(".mini__item1").delay(500).fadeOut("fast");
                  $(".mini__item3").delay(500).fadeOut("fast");
                  $(".mini__item5").delay(1000).fadeIn("slow");
                  $(".mini__item6").delay(1000).fadeIn("slow", function(){
                    console.log("frame 6");
                    $(".mini__item2").delay(500).fadeOut("fast");
                    $(".mini__item5").delay(500).fadeOut("fast");
                    frame1();
            });
          });
        });
      });
    });
  });
});
