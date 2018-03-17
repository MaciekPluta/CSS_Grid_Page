$(".mini__grid").hover(function() {
  $(".mini__grid").toggleClass("mini__grid__transform");
  $(".mini__item1").toggleClass("mini__grid__transform1");
  $(".mini__item3").toggleClass("mini__grid__transform3");
  $("#css").css("transform", "rotate(360deg)");
  $("#css").css("text-align", "center");
  $(".mini__item2").toggleClass("mini__grid__transform2");
  $(".mini__item4").toggleClass("mini__grid__transform4");
});
