$(document).ready(function(){
    console.log('작동됩니다');
    $("#more").click(function(){
      $(".hide").show(500);
      $(".hide").css('display','inline-block');
      $(this).hide();
    });
  });
