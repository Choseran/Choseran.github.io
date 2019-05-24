$(document).ready(function(){
  var bt = document.getElementsByClassName('bt');
  var sub_bt = document.getElementsByClassName('sub_bt');
  var position;

  $(bt[0]).click(function(){
    count = 0;
    wheel_count();
  });
  $(bt[1]).click(function(){
    count = 1;
    wheel_count();
  });
  $(bt[2]).click(function(){
    count = 2;
    wheel_count();
  });
  $(bt[3]).click(function(){
    count = 3;
    wheel_count();
  });
  $(sub_bt[0]).click(function(){
    count = 0;
    wheel_count();
  });
  $(sub_bt[1]).click(function(){
    count = 1;
    wheel_count();
  });
  $(sub_bt[2]).click(function(){
    count = 2;
    wheel_count();
  });
  $(sub_bt[3]).click(function(){
    count = 3;
    wheel_count();
  });

  var div_h = 0;
  var count = 0;
  var scrollEvent = false;
  var wheel_data;

  $("html").on('mousewheel', function(c){
    wheel_data = c.originalEvent.wheelDelta;
    // console.log(wheel_data);
    wheel_data = c.originalEvent.wheelDelta;
      if (wheel_data > 0 && count > 0 && scrollEvent == false) {
        c.preventDefault();
        scrollEvent = true;
        count --;
        wheel_count();
        setTimeout(function(){
          scrollEvent = false;
        }, 500);
      }else if (wheel_data < 0 && count < 4 && scrollEvent == false) {
        c.preventDefault();
        scrollEvent = true;
        count ++;
        wheel_count();
        setTimeout(function(){
          scrollEvent = false;
        }, 500);
      }
  });

  $(sub_bt[0]).css("background-color", "#fff");
  $(bt[0]).children('b').css("color", "#fff");

  position = $("footer").offset();
  $("html").animate({scrollTop:position.top},1);
  position = $(".article1").offset();
  $("html").animate({scrollTop:position.top},1000);

  $(sub_bt[0]).css("background-color", "#ffa896");
  $(bt[0]).children('b').css("color", "#ffa896");

  function wheel_count(){
    $(bt[0]).children('b').css("color", "#ffa896");
    $(bt[1]).children('b').css("color", "#ffa896");
    $(bt[2]).children('b').css("color", "#ffa896");
    $(bt[3]).children('b').css("color", "#ffa896");
    $(sub_bt[0]).css("background-color", "#ffa896");
    $(sub_bt[1]).css("background-color", "#ffa896");
    $(sub_bt[2]).css("background-color", "#ffa896");
    $(sub_bt[3]).css("background-color", "#ffa896");
  if(count == 0){
      position = $(".article1").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      $(sub_bt[0]).css("background-color", "#fff");
      $(bt[0]).children('b').css("color", "#fff");
    }
    else if (count == 1) {
      position = $("section").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      $(sub_bt[1]).css("background-color", "#22404a");
      $(bt[1]).children('b').css("color", "#fff");
    }
    else if (count == 2) {
      position = $(".article2").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      $(sub_bt[2]).css("background-color", "#fff");
      $(bt[2]).children('b').css("color", "#fff");
    }
    else if (count == 3) {
      position = $(".article3").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      $(sub_bt[2]).css("background-color", "#fff");
      $(bt[2]).children('b').css("color", "#fff");
    }
    else if (count == 4) {
      position = $("footer").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      $(sub_bt[3]).css("background-color", "#fff");
      $(bt[3]).children('b').css("color", "#fff");
    }
  }

  $('.article1').mouseover(function() {
    $('.article1>.back>span').delay(750).show(900);
  });
    $('.article1').trigger('mouseover');
});
