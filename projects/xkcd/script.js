var urlPart1 = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D"http%3A%2F%2Fxkcd.com%2F';

var urlPart2 = '%2F"%20and%20xpath%3D%27%2F%2Fdiv%5B%40id%3D"comic"%5D%2F%2Fimg%27%0A&format=json&diagnostics=true&callback';

$(document).ready(function() {
  $('.random').click(function(){
    var randomNum = Math.floor((Math.random() * 1626) + 1);
    var url = urlPart1 + randomNum + urlPart2;
    var xkcdURL = "http://xkcd.com/" + randomNum + "/";
    //$('body').append(url);
    var imgURL;
    var items = [];
    var alt;
    var loading = "http://i.imgur.com/Cm419YC.gif";
    $('img').attr("src", loading);
    $.getJSON(url, function(data){
      $.each(data.query.results.img, function(key, val) {
        items[key] = val;     
      });
      imgURL = 'http:' + items.src;
      alt = items.alt;
      
      $('.xkcd a').remove();
      $('.tweet a').remove();
      $('.xkcd').prepend("<h2><a href='" + xkcdURL + "' target='_blank'>" + xkcdURL + "</h2></a>");
      $('.xkcd img').attr("src", imgURL);
      $('.xkcd img').attr("alt", alt);
      $('.tweet').append('<a class="twitter-share-button tweetbtn btn btn-info" href="https://twitter.com/intent/tweet?text=Check out this awesome comic: ' + xkcdURL +'" data-size="large" target="_blank"><i class="fa fa-twitter"></i> Tweet</a>')
    });   
    
  });
});