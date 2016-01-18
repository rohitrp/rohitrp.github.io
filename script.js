$(document).ready(function() {
  $('.projects .mdl-card').click(function() {
    var url = $(this).find('a').attr('href');
    window.open(url);
  });
  
  $(document).scroll(function() {
    if ($(this).scrollTop() > 50) 
      $('.name').fadeOut();
    else
      $('.name').fadeIn();
  });
  
  $('a').click(function() {
    var href = $(this).attr('href');
    
    if (href[0] === '#' && href.length != 1) {
      $('html,body').animate({scrollTop: ($(href).offset().top - 64)});
      return false;
    }
  });
  
  function checkFocus() {
    if ($('input, textarea').is(":focus") ||
       $('#name').val() || $('#email').val() ||
       $('#subject').val() || $('#msg').val()) {
      $('.form').css('border-color', 'rgb(63, 81, 181)');
      $('.contact h2').css("color", "rgb(63, 81, 181)");
    }
    else {
      $('.form').css('border-color', '#888');      
      $('.contact h2').css("color", "#555");
    } 
  };
  
  $('html, body').click(function() {
    checkFocus();
  });
  
  $('input, textarea').keyup(function() {
    checkFocus();
    if ($('#name').val() != '' &&
        $('#email').val() != '' &&
        $('#subject').val() != '' &&
        $('#msg').val() != '') {
      $('#submit').prop('disabled', false);
    }
    else {
      $('#submit').prop('disabled', true);
    }
  });
  
  $('#submit').click(function() {
    var name = $("#name").val(),
        subject = $("#subject").val(),
        email = $("#email").val(),
        msg = $("#msg").val();
    
    var body = "Name: " + name + "%0AEmail: " + email + "%0AMessage: " + msg;
    body = body.replace(" ", "%20");
    subject = subject.replace(" ", "%20");
    
    var url = "mailto:rohitrp@yahoo.com?" + "subject=" + subject + "&body=" + body;
    window.open(url, '_blank');
  });
  
  
});