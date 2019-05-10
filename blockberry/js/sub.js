$(document).ready(function() {
  console.log('작동됩니다');
  $(function() {
    $('#sub_menu').click(function() {
      $('#sub_menu>span').toggleClass('on')
    });
  });
  $("#sub_menu").click(function() {
    $("#hidden_ham").toggle(500);
    $("#sub_menu>span").toggleClass('classname');
    $("#sub_menu>span").css('background', 'white');
    $(".classname").css('background', 'black');
    $("#sub_menu").toggleClass('black');
    $("#sub_menu").css('position', 'absolute');
    $(".black").css('position', 'fixed');
  });
});
