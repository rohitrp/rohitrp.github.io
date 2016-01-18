$('document').ready(function() {
  var appid = "12acfb652983303e07fa62abd337805b";
  var lat, lon;
  var url = "";
  var host = "http://api.openweathermap.org/data/2.5/weather?";
  var isCelcius = true;
  var tempC, tempF;
  
  function toF(temp) {
    return 9 * temp / 5 + 32;
  };
  
  function checkUnit() {
    if (isCelcius) {
      $('.C').addClass('active');
      $('.F').removeClass('active');
      $(".temp h2").html((tempC + "").substr(0, 4)+ " &deg;C");
    }
    else {
      $('.F').addClass('active');
      $('.C').removeClass('active');
      $(".temp h2").html((tempF + "").substr(0, 4)+ " &deg;F");
    }
  };
  
  $.getJSON("http://ipinfo.io/json", function(jsonip) {
    var loc = jsonip.loc.split(",");
    lat = loc[0]; lon = loc[1];

    url = host + "lat=" + lat + "&lon=" + lon + "&appid=" + appid + "&units=metric";
      
    $.getJSON(url, function(json) {
      updateInfo(json);
    });
  });
  
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = positon.coords.latitude;
      lon = positon.coords.longitude;
      url = host + "lat=" + lat + "&lon=" + lon + "&appid=" + appid + "&units=metric";
      
      $.getJSON(url, function(json) {    
        updateInfo(json);
      });
    });
  }
  
  function updateInfo(json) {
    tempC = json.main.temp;
    tempF = toF(tempC);
    var location = json.name + ", " + json.sys.country;
    var description = json.weather[0].main;
    var subdescription = json.weather[0].description;
    var humidity = json.main.humidity + "%";
    var imgSrc;
      
    if (tempC > 30) imgSrc = "http://i1308.photobucket.com/albums/s613/rohitrp3/Weather%20app/hot-weather_zps12ph32j9.jpg";
    else if (tempC > 15) imgSrc = "http://i1308.photobucket.com/albums/s613/rohitrp3/Weather%20app/normal-weather_zpsk3faa8jq.jpg";
    else imgSrc = "http://i1308.photobucket.com/albums/s613/rohitrp3/Weather%20app/cold-weather_zpsjkll6pyn.jpg";
    
    $(".temp h2").html((tempC + "").substr(0, 4)+ " &deg;C");
    $(".location p:nth-child(2)").text(location);
    $(".description p:nth-child(1)").text(description);
    $(".description p:nth-child(2)").text(subdescription);
    $(".humidity p:nth-child(2)").text(humidity);
    $("html").css("background-image", 'url("' + imgSrc + '")');
    checkUnit();
  };
  
  $('.C').click(function() {
    isCelcius = true;
    checkUnit();
  });
  
  $('.F').click(function() {
    isCelcius = false;
    checkUnit();
  });
  
  $("input").keyup(function() {
    var value = $(this).val();
    url = host + "q=" + value + "&appid=" + appid + "&units=metric";

    $.getJSON(url, function(json) {
      updateInfo(json);
    });
  });
  
});