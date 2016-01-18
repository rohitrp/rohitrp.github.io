$('document').ready(function() {
  var breakTime = 5;
  var sessionTime = 25;
  var start = true;
  var minutes = sessionTime;
  var seconds = 0;
  var timer;
  var isSession = true;

  $('#break-decrease').click(function() {
    breakTime--;
    if (breakTime < 0) breakTime = 0;

    $('.break-time').text(breakTime);
  });
  
  $('#break-increase').click(function() {
    breakTime++;
    
    $('.break-time').text(breakTime);
  });
  
  $('#session-decrease').click(function() {
    sessionTime--;
    if (sessionTime < 0) sessionTime = 0;
    isSession = true;
    reset();
  });
  
  $('#session-increase').click(function() {
    sessionTime++;
    isSession = true;
    reset();
  });
  
  $('.start img, .start span').click(function() {
    checkStatus();
  });
  
  function reset() {
    minutes = sessionTime;
    seconds = 0;
    clearInterval(timer);
    $('.session-time').text(minutes);
    update();
    start = false;
    checkStatus();
  }
  
  function checkStatus() {
    if (start) {
      $('.start img').attr('src', 'http://s18.postimg.org/tdpqy5ob9/ripple.gif');
      $('.start h3 span').text("Pause");
      timer = setInterval(startTimer, 1000);
      start = false;
    }
    else {
      $('.start img').attr('src', 'http://s21.postimg.org/6i7z15clv/ripple.png');
      $('.start h3 span').text("Start");
      clearInterval(timer);
      start = true;
    }
  }
  
  function update() {
    $('.minutes p').text(minutes);
    var displaySeconds = "";
    if (seconds < 10) {
      displaySeconds = '0' + seconds;
    }
    else {
      displaySeconds = seconds;
    }
    $('.seconds p').text(displaySeconds);
    
    if (isSession) $('.status').text("Session");
    else $('.status').text("Break!");
  }
  
  function startTimer() {
    if (seconds === 0) {
      seconds = 60;
      minutes--;
    }
    
    if (minutes < 0) {
      var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
      var audio = new Audio(wav);
      audio.play();
      clearInterval(timer);
      if (isSession) {
        minutes = breakTime;
        isSession = false;
      }
      else {
        minutes = sessionTime;
        isSession = true;
      }
      seconds = 0;
      timer = setInterval(startTimer, 1000);
    }
    else {
      seconds--;
      update();
    }
  }
    
  update();
});
 