$('document').ready(function() {
  var text = "";
  var result = 0;
  
  $('.digit').addClass('btn-info');
  
  $("#ac").click(function() {
    text = "";
    result = 0;
    $('#result').attr("value", result);
  });
  
  $("#ce").click(function() {
    text = text.substring(0, text.length-1);
  });
  
  $("#mod").click(function() {
    text += "%";
  });
  
  $("#divide").click(function() {
    text += "/"
  });
  
  $("#seven").click(function() {
    text += '7';
  });
  
  $("#eight").click(function() {
    text += '8';
  });
  
  $("#nine").click(function() {
    text += '9';
  });
  
  $("#multiply").click(function() {
    text += '*';
  });
  
  $("#four").click(function() {
    text += '4';
  });
  
  $("#five").click(function() {
    text += '5';
  });
  
  $("#six").click(function() {
    text += '6';
  });
  
  $("#subtract").click(function() {
    text += '-';
  });
  
  $("#one").click(function() {
    text += '1';
  });

  $("#two").click(function() {
    text += '2';
  });
  
  $("#three").click(function() {
    text += '3';
  });
  
  $("#add").click(function() {
    text += '+';
  });
  
  $("#decimal").click(function() {
    text += '.';
  });
  
  $("#zero").click(function() {
    text += '0';
  });
  
  $("#equals").click(function() {
    text = result;
  });
    
  $('button').click(function() {
    var displayText = "";
    
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      
      if (ch === '%' || ch === '*' || ch === '-' || ch === '+' || ch === '/') {
        displayText += ' ' + ch + ' ';
      }
      else displayText += ch;
    }
    $('#display').attr("value", displayText);
    result = eval(text);
    $('#result').attr("value", result);    
  });
});