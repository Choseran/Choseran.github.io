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
    $(function() {
      $('#sub_menu').click(function() {
        $('#sub_menu>span').toggleClass('on')
      });
    });
    $("#sub_menu").click(function(){
      $("#hidden_ham").toggle(500);
      $("#sub_menu>span").toggleClass('classname');
      $("#sub_menu>span").css('background','white');
      $(".classname").css('background','black');
      $("#sub_menu").toggleClass('black');
      $("#sub_menu").css('position','absolute');
      $(".black").css('position','fixed');
    });
  });
