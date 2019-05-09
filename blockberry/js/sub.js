$(document).ready(function(){
    console.log('작동됩니다');
    var sub_bt = document.getElementsByClassName('sub_bt');
    var position;
    $(function() {
      $('#sub_menu').click(function() {
        $('#sub_menu>span').toggleClass('on')
      });
    });
    $("#sub_menu").click(function(){
      $("#hidden_ham").toggle(500);
      $("#sub_menu>span").toggleClass('classname','addOrRemove');
      $("#sub_menu>span").css('background','white');
      $(".classname").css('background','black');
    });
  });
