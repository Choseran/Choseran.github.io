$(document).ready(function(){
  var bt = document.getElementsByClassName('bt');
  var sub_bt = document.getElementsByClassName('sub_bt');

  var aboutOffset = $( '#about' ).offset();
  var portfolioOffset = $( '#portfolio' ).offset();
  var contactOffset = $( '#contact' ).offset();

  $('.article1').mouseover(function() {
    $('.article1>.back>span').show(900);
  });
  $('.article1').trigger('mouseover');

  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > aboutOffset.top - 5000 ) {
      $(bt[1]).children('b').css("color", "#fff");
      $(bt[2]).children('b').css("color", "#ffa896");
      $(bt[3]).children('b').css("color", "#ffa896");
      $(sub_bt[1]).css("background-color", "#22404a");
      $(sub_bt[2]).css("background-color", "#ffa896");
      $(sub_bt[3]).css("background-color", "#ffa896");
      $(sub_bt).hover(function(){
        $(this).css("background-color", "#22404a");
      }, function(){
        $(this).css("background-color", "#ffa896");
      });
      $(bt[1]).hover(function(){
        $(bt[1]).children('b').css("color", "#fff");
      });
      $(sub_bt[1]).hover(function(){
        $(sub_bt[1]).css("background-color", "#22404a");
      });
    }
    if ( $( document ).scrollTop() > portfolioOffset.top - 400 ) {
      $(bt[1]).children('b').css("color", "#ffa896");
      $(bt[2]).children('b').css("color", "#fff");
      $(bt[3]).children('b').css("color", "#ffa896");
      $(sub_bt[1]).css("background-color", "#ffa896");
      $(sub_bt[2]).css("background-color", "#fff");
      $(sub_bt[3]).css("background-color", "#ffa896");
      $(sub_bt).hover(function(){
        $(this).css("background-color", "#fff");
      }, function(){
        $(this).css("background-color", "#ffa896");
      });
      $(bt[2]).hover(function(){
        $(bt[2]).children('b').css("color", "#fff");
      });
      $(sub_bt[2]).hover(function(){
        $(sub_bt[2]).css("background-color", "#fff");
      });
    }
    if ( $( document ).scrollTop() > contactOffset.top - 500 ) {
      $(bt[1]).children('b').css("color", "#ffa896");
      $(bt[2]).children('b').css("color", "#ffa896");
      $(bt[3]).children('b').css("color", "#fff");
      $(sub_bt[1]).css("background-color", "#ffa896");
      $(sub_bt[2]).css("background-color", "#ffa896");
      $(sub_bt[3]).css("background-color", "#22404a");
      $(sub_bt).hover(function(){
        $(this).css("background-color", "#22404a");
      }, function(){
        $(this).css("background-color", "#ffa896");
      });
      $(bt[3]).hover(function(){
        $(bt[3]).children('b').css("color", "#fff");
      });
      $(sub_bt[3]).hover(function(){
        $(sub_bt[3]).css("background-color", "#22404a");
      });
    }
  });

  $(sub_bt[1]).click(function(){
    $(this).css("background-color", "#22404a");
    $(bt[1]).children('b').css("color", "#fff");
  });
  $(sub_bt[2]).click(function(){
    $(this).css("background-color", "#fff");
    $(bt[2]).children('b').css("color", "#fff");
  });
  $(sub_bt[3]).click(function(){
    $(this).css("background-color", "#22404a");
    $(bt[3]).children('b').css("color", "#fff");
  });
  $(bt[1]).click(function(){
    $(sub_bt[1]).css("background-color", "#22404a");
    $(this).children('b').css("color", "#fff");
  });
  $(bt[2]).click(function(){
    $(sub_bt[2]).css("background-color", "#fff");
    $(this).children('b').css("color", "#fff");
  });
  $(bt[3]).click(function(){
    $(sub_bt[3]).css("background-color", "#22404a");
    $(this).children('b').css("color", "#fff");
  });

  $(bt).hover(function(){
    $(this).children('b').css("color", "#fff");
  }, function(){
    $(this).children('b').css("color", "#ffa896");
  });
});
