$('document').ready(function () {

  var html =
    "<div class='mdl-cell mdl-cell--10-col mdl-cell--middle mdl-card mdl-shadow--4dp' id='result'> \
      <div class='mdl-card__title mdl-card--expand'> \
        <h2 class='mdl-card__title-text'></h2> \
      </div> \
      \
      <div class='mdl-card__supporting-text'></div> \
      <div class='mdl-card__actions mdl-card--border'> \
        <a href='#' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' target='_blank'></a> \
      </div> \
    </div>";

  $('.hint button').click(function () {
    $('.hint').fadeOut();
  })

  $(document).scroll(function () {
    if ($(this).scrollTop() > 25) {
      $('.hint').fadeOut();
    } 
    else $('.hint').fadeIn();
  })

  function populateResults() {
    $('.mdl-grid').remove();

    $('.container').append("<div class='mdl-grid'></div>");


    var val = $("#search-input").val();
    var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + val + "&callback=?";

    var url = "https://en.wikipedia.org/wiki/";

    $.getJSON(api, function (json) {
      var res = json.query.search;

      if (res.length == 0) {
        $('.mdl-grid').append(html);
        var $lastChild = $(".mdl-grid .mdl-cell:nth-last-child(1)");
        $lastChild.attr('id', 'result-404');

        $lastChild.find('.mdl-card__title-text').text("404. You have hit a dead end. Try searching something else.");
        $lastChild.find('.mdl-card__supporting-text').text("Or why not be adventurous and read something random? Maybe try that squiggly icon on the top?");
        $lastChild.find('.mdl-card__actions').remove();
      }

      for (var i = 0; i < res.length; i++) {
        addMDLCard(res[i].title, res[i].snippet, url, i);
      }

      shuffleCardBackgrounds();
    });
  };

  function addMDLCard(title, snippet, url, i) {
    $('.mdl-grid').append(html);
    var $lastChild = $(".mdl-grid .mdl-cell:nth-last-child(1)");
    $lastChild.addClass('result-' + i);

    $lastChild.find(".mdl-card__title-text").text(title);
    $lastChild.find(".mdl-card__supporting-text").html(snippet);
    $lastChild.find("a").attr("href", url + title);
    $lastChild.find("a").html("Read about <span>" + title + "</span> on Wikipedia");

    $('.result-' + i).show('slow');
  }

  function shuffleCardBackgrounds() {
    var array = shuffle([0, 1, 2, 3]);

    $('.mdl-card:nth-child(4n+' + array[0] + ') .mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/styles_zpsnhcfos8j.png') bottom right 1% no-repeat #46B6AC");
    $('.mdl-card:nth-child(4n+' + array[0] + ')').hover(
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/styles_mo_zpsoofknsrj.png') bottom right 1% no-repeat #46B6AC");
      },
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/styles_zpsnhcfos8j.png') bottom right 1% no-repeat #46B6AC");
      }
    );

    $('.mdl-card:nth-child(4n+' + array[1] + ') .mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/templates_zpsdkpqntob.png') bottom right 1% no-repeat rgb(139, 195, 74)");
    $('.mdl-card:nth-child(4n+' + array[1] + ')').hover(
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/templates_mo_zpsmb8shn1g.png') bottom right 1% no-repeat rgb(139, 195, 74)");
      },
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/templates_zpsdkpqntob.png') bottom right 1% no-repeat rgb(139, 195, 74)");
      }
    );

    $('.mdl-card:nth-child(4n+' + array[2] + ') .mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/components_mo_zps0kyputrv.png') bottom right 1% no-repeat rgb(233, 28, 99)");
    $('.mdl-card:nth-child(4n+' + array[2] + ')').hover(
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/components_zpskvwrnfp8.png') bottom right 1% no-repeat rgb(233, 28, 99)");
      },
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/components_mo_zps0kyputrv.png') bottom right 1% no-repeat rgb(233, 28, 99)");
      }
    );

    $('.mdl-card:nth-child(4n+' + array[3] + ') .mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/customize_mo_zpsscoy54es.png') bottom right 1% no-repeat #f44336");
    $('.mdl-card:nth-child(4n+' + array[3] + ')').hover(
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/customize_zpsavjb1vuj.png') bottom right 1% no-repeat #f44336");
      },
      function () {
        $(this).find('.mdl-card__title').css('background', "url('http://i1308.photobucket.com/albums/s613/rohitrp3/Wikipedia%20Viewer/customize_mo_zpsscoy54es.png') bottom right 1% no-repeat #f44336");
      }
    );
  }

  $('.search i:nth-child(3)').click(function () {
    $('#search-input').css('width', '200px');
    $('#search-input').css('border-color', '#3F51B5');

    $('#search-input').focus();
    $('#clear').css("visibility", "visible");

    if ($('#search-input').val() != '') populateResults();
  });

  $("#adventurous i").click(function () {
    $('.mdl-grid').remove();

    var api = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&format=json&callback=?'; 
    var pageDetails = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts|info&format=json&explaintext=&exchars=300&inprop=url&pageids=';
    var url = "https://en.wikipedia.org/wiki/";

    $.getJSON(api, function (json) {
      var id = json.query.random[0].id;
      
      $.getJSON(pageDetails + id + "&callback=?", function(pageJSON) {
        var res = pageJSON.query.pages;
        
        $.each(res, function(key, val) {
          $("#search-input").val(val.title);
          adjustSearchBar();

          $('.container').append("<div class='mdl-grid'></div>");

          wait(function() {
            addMDLCard(val.title, val.extract, url, 0);
            shuffleCardBackgrounds();
          });
          
        });
      });
    });
  });
  
  function wait (callback) {
    var x = setInterval(function() {
      if (!$.timers.length) {
        clearInterval(x);
        callback();
      }
    }, 500);
  };

  function adjustSearchBar() {
    var top = "6%";
    var width = "300px";
    var borderColor = "#3F51B5";
    var visibility = "visible";
    
    if ($("#search-input").val() == "") {
      top = "40%"
      width = "0px";
      borderColor = "#fff";
      $('.mdl-grid').remove();
      visibility = "hidden";
    }

    $('.search').css('top', top);
    $('#search-input').css('width', width);
    $('#search-input').css('border-color', borderColor);
    $('#clear').css("visibility", visibility);
  };

  $('#clear').click(function () {
    $('#search-input').val('');
    adjustSearchBar();
  });

  $("#search-input").keyup(function () {
    adjustSearchBar();
  });

  $(document).keypress(function (e) {
    $('#search-input').focus();
    $('#clear').css("visibility", "visible");

    if (e.which == 13) {
      populateResults();
    }
  });

  $('html').click(function (e) {
    var target = $(e.target);
    if (!target.is($(".search i")) && !target.is($('#search-input'))) {
      adjustSearchBar();
    }
  });

});

function shuffle(array) {
  var m = array.length,
    t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
