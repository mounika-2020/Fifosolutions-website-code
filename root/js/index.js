$(document).ready(function(){
  $(".default_option").click(function(){
    $(".dropdown ul").addClass("active");
  });
  $(".default_option1").click(function(){
    $(".dropdown1 ul").addClass("active");
  });

  $(".dropdown ul li").click(function(){
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown ul").removeClass("active");
  });
  $(".dropdown1 ul li").click(function(){
    var text = $(this).text();
    $(".default_option1").text(text);
    $(".dropdown1 ul").removeClass("active");
  });
});
