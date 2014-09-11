$(document).ready(function() {
  $('.flip-container').click(function(e) {
    $(this).toggleClass('flipped');
  });
  $(function() {
    $('#ms_timer').countdowntimer({
      minutes: 15,
      seconds: 00,
      size: "lg"
    });
  });
  $(function() {
    $('#ms_timer_1').countdowntimer({
      minutes: 0,
      seconds: 15,
      size: "lg"
    });
  });
  $(function() {
    $('#ms_timer_2').countdowntimer({
      minutes: 0,
      seconds: 15,
      size: "lg"
    });
  });


  var elem = document.getElementById('mySwipe');
  window.mySwipe = Swipe(elem, {
    // startSlide: 4,
    // auto: 3000,
    // continuous: true,
    // disableScroll: true,
    stopPropagation: true,
    // callback: function(index, element) {},
    // transitionEnd: function(index, element) {}
  });
});