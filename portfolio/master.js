$(document).ready(function(){
  var bt = document.getElementsByClassName('bt');
  var sub_bt = document.getElementsByClassName('sub_bt');

  var aboutOffset = $( '#about' ).offset();
  var portfolioOffset = $( '#portfolio' ).offset();
  var contactOffset = $( '#contact' ).offset();

  $('#home').mouseover(function() {
    $('#home>.back>span').show(900);
    $('.center').delay(1450).fadeIn(300);
  });
  $('#home').trigger('mouseover');

  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > aboutOffset.top - 400 ) {
      $(bt[1]).children('b').css("color", "#fff");
      $(bt[2]).children('b').css("color", "#ffa896");
      $(bt[3]).children('b').css("color", "#ffa896");
      $(sub_bt[1]).css("background-color", "#22404a");
      $(sub_bt[2]).css("background-color", "#ffa896");
      $(sub_bt[3]).css("background-color", "#ffa896");
      $(bt).hover(function(){
        $(this).children('b').css("color", "#fff");
      }, function(){
        $(this).children('b').css("color", "#ffa896");
      });
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
      $('.center').css("display","none");
    }
    if ( $( document ).scrollTop() > portfolioOffset.top - 400 ) {
      $(bt[1]).children('b').css("color", "#ffa896");
      $(bt[2]).children('b').css("color", "#fff");
      $(bt[3]).children('b').css("color", "#ffa896");
      $(sub_bt[1]).css("background-color", "#ffa896");
      $(sub_bt[2]).css("background-color", "#fff");
      $(sub_bt[3]).css("background-color", "#ffa896");
      $(bt).hover(function(){
        $(this).children('b').css("color", "#fff");
      }, function(){
        $(this).children('b').css("color", "#ffa896");
      });
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
      $('.center').css("display","none");
    }
    if ( $( document ).scrollTop() > contactOffset.top - 500 ) {
      $(bt[1]).children('b').css("color", "#ffa896");
      $(bt[2]).children('b').css("color", "#ffa896");
      $(bt[3]).children('b').css("color", "#fff");
      $(sub_bt[1]).css("background-color", "#ffa896");
      $(sub_bt[2]).css("background-color", "#ffa896");
      $(sub_bt[3]).css("background-color", "#22404a");
      $(bt).hover(function(){
        $(this).children('b').css("color", "#fff");
      }, function(){
        $(this).children('b').css("color", "#ffa896");
      });
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
      $('.center').css("display","none");
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

  var pWork = document.getElementsByClassName('photo_work');
  var up = document.getElementsByClassName('up');

  $(pWork[0]).click(function(){
    $(up[0]).css('display','block');
    $('.background').css('display','block');
  });
  $(pWork[1]).click(function(){
    $(up[1]).css('display','block');
    $('.background').css('display','block');
  });
  $(pWork[2]).click(function(){
    $(up[2]).css('display','block');
    $('.background').css('display','block');
  });
  $(pWork[3]).click(function(){
    $(up[3]).css('display','block');
    $('.background').css('display','block');
  });
  $(pWork[4]).click(function(){
    $(up[4]).css('display','block');
    $('.background').css('display','block');
  });
  $(pWork[5]).click(function(){
    $(up[5]).css('display','block');
    $('.background').css('display','block');
  });
  $('.background').click(function(){
    $(up).css('display','none');
    $('.background').css('display','none');
  })
});
