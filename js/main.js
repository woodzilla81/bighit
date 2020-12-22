$(document).ready(function(){

  // wow.js - 애니메이션 css가 화면에서 보일때(스크롤 되었을때) 작동
  new WOW().init();

  // 햄버거버튼 클릭 - (.nav_move) 보임
  $('.header_ham').click(function(){
    $('.nav_move').fadeIn();
  });

  // close버튼 클릭 - (.nav_move) 사라짐
  $('.btn_close').click(function(){
    $('.nav_move').fadeOut();
  });

  // 모바일상태에서 (.nav_move)가 보이는 상황에서 화면이 넓어지면 style이 그대로 남아있는 상태가 된다 그걸 방지
  $(window).resize(function(){
    var w =$(window).width();  // 브라우저의 가로길이를 변수 w에 넣어준다
    if(w > 768){                // 모바일 상태보다 화면이 커졌을때
      $('.nav_move').removeAttr('style')
    }
  });

  

  });      