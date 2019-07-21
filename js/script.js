$(document).ready(function(){
  $("#design").on("click",function(){
    $("#design p"). toggle();
  },function(){
      $("#design img"). toggle();
    });
  $("#dev").on("click",function(){
    $("#dev p"). toggle();
  },function(){
      $("#dev img"). toggle();
    });
  $("#product").on("click",function(){
    $("#product p"). toggle();
  },function(){
      $("#product img"). toggle();
  });
    });
