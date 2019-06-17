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
  var i;

  $(pWork[0]).click(function(){
    i = 0;
    clickMore();
  });
  $(pWork[1]).click(function(){
    i = 1;
    clickMore();
  });
  $(pWork[2]).click(function(){
    i = 2;
    clickMore();
  });
  $(pWork[3]).click(function(){
    i = 3;
    clickMore();
  });
  $(pWork[4]).click(function(){
    i = 4;
    clickMore();
  });
  $(pWork[5]).click(function(){
    i = 5;
    clickMore();
  });
  $(pWork[6]).click(function(){
    i = 6;
    clickMore();
  });
  $(pWork[7]).click(function(){
    i = 7;
    clickMore();
  });
  function clickMore() {
    $(up[i]).css('display','block');
    $('.background').css('display','block');
  }

  $('.background').click(function(){
    $(up).css('display','none');
    $('.background').css('display','none');
  });
  $(up).click(function(){
    $(up).css('display','none');
    $('.background').css('display','none');
  });

  $('.html').circleProgress({
    value: 0.8,
    fill: {gradient: ['#ff5f43', '#ffa896']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });
  $('.css').circleProgress({
    value: 0.7,
    fill: {gradient: ['#ff5f43', '#ffa896']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
  });
  $('.jquery').circleProgress({
    value: 0.65,
    fill: {gradient: ['#ff5f43', '#ffa896']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(65 * progress) + '<i>%</i>');
  });
  $('.psd').circleProgress({
    value: 0.8,
    fill: {gradient: ['#ff5f43', '#ffa896']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });
  $('.clip').circleProgress({
    value: 0.6,
    fill: {gradient: ['#ff5f43', '#ffa896']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
  });
});
