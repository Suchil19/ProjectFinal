// Preloader
$(window).on('load', function() {
  $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
});

$(document).ready(function(){
    $('.btn').click(function(){
      $('.items').toggleClass("show");
      $('ul li').toggleClass("hide");
    });
  });
 