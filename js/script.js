$(document).ready(function() {
  $("#design").click(function() {
    $("#design").toggle();
    $("#design1").toggle();
  });
});
$(document).ready(function() {
  $("#design1").click(function() {
    $("#design").toggle();
    $("#design1").toggle();
  });
});
$(document).ready(function() {
  $("#dev").click(function() {
    $("#dev").toggle();
    $("#dev1").toggle();
  });
});
$(document).ready(function() {
  $("#dev1").click(function() {
    $("#dev").toggle();
    $("#dev1").toggle();
  });
});
$(document).ready(function() {
  $("#product").click(function() {
    $("#product").toggle();
    $("#product1").toggle();
  });
});
$(document).ready(function() {
  $("#product1").click(function() {
    $("#product").toggle();
    $("#product1").toggle();
  });
});

 //hover effect:
 $(document).ready(function(){
   $("#portimg").mouseover(function(){
     $("#porttext").show();
   }).mouseout(function(){
     $("#porttext").hide();
   });
 });
 $(document).ready(function(){
   $("#portimg1").mouseover(function(){
     $("#porttext1").show();
   }).mouseout(function(){
     $("#porttext1").hide();
   });
 });
 $(document).ready(function(){
   $("#portimg2").mouseover(function(){
     $("#porttext2").show();
   }).mouseout(function(){
     $("#porttext2").hide();
   });
 });
 $(document).ready(function(){
   $("#portimg3").mouseover(function(){
     $("#porttext3").show();
   }).mouseout(function(){
     $("#porttext3").hide();
   });
 });
 $(document).ready(function(){
   $("#portimg4").mouseover(function(){
     $("#porttext4").show();
   }).mouseout(function(){
     $("#porttext4").hide();
   });
 });
 $(document).ready(function(){
   $("#portimg5").mouseover(function(){
     $("#porttext5").show();
   }).mouseout(function(){
     $("#porttext5").hide();
   });
 });
 $(document).ready(function(){
   $("#portimg6").mouseover(function(){
     $("#porttext6").show();
   }).mouseout(function(){
     $("#porttext6").hide();
   });
 });
 $(document).ready(function(){
   $("#portimg7").mouseover(function(){
     $("#porttext7").show();
   }).mouseout(function(){
     $("#porttext7").hide();
   });
 });

 $("form").submit(function(){
  var name=$("input#name").val();
  alert("Hello "+name+" Thank you for contacting us");
})
