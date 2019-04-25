$(document).ready(function(){
    console.log('작동됩니다');
    var sub_bt = document.getElementsByClassName('sub_bt');
    var position;
    $("#more").click(function(){
      $(".hide").show(500);
      $(".hide").css('display','inline-block');
      $(this).hide();
    });
    $(sub_bt[0]).click(function() {
        position = $("header").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        console.log(position);
      });
      $(sub_bt[1]).click(function() {
        position = $("#one").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        console.log(position);
      });
      $(sub_bt[2]).click(function() {
        position = $("#last").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        console.log(position);
      });
      $(sub_bt[3]).click(function() {
        position = $("footer").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        console.log(position);
      });
  });
