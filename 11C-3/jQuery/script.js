$(document).ready(function () {
  //menu
  $('.mainmenu > li').mouseenter(function () {
    $(this).find('.submenu').stop().slideDown('500');
  });
  $('.mainmenu > li').mouseleave(function () {
    $(this).find('.submenu').stop().slideUp('500');
  });

  //이미지슬라이드 좌우
  var imgs = 3;
  var now = 0;

  start();

  function start() {
    $('.imgSlide>a').eq(0).siblings().animate({ width: '-800px' });

    setInterval(function () {
      now = now == imgs ? 0 : (now += 1);
      $('.imgSlide>a')
        .eq(now - 1)
        .animate({ width: '-800px' });
      $('.imgSlide>a').eq(now).animate({ width: '800px' });
    }, 3000);
  }

  //layer-popup
  $('.modal').click(function () {
    $('.layer-popup').show();
    $('.layer-bg').show();
  });
  $('.button').click(function () {
    $('.layer-popup').hide();
    $('.layer-bg').hide();
  });
});
