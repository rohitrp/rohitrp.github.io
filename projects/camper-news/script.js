$('document').ready(function() {

  var html = `
    <div class="mdl-cell mdl-cell--3-col mdl-cell--middle mdl-cell--4-col-phone mdl-cell--col-2-tablet mdl-card mdl-shadow--4dp">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text "></h2>
      </div>
      <div class="mdl-card__supporting-text primary"></div>
      <div class="mdl-card__supporting-text secondary">
        <div class="secondary-wrapper">
          <p>By: <a href="" target="_blank"></a></p>
          <i class="material-icons">favorite_border</i>
          <p></p>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank">
          Read this article
        </a>
      </div>
    </div>
    `
  var elementNum = 1;
  $.getJSON("http://www.freecodecamp.com/news/hot", function(json) {
    for (var i = 0; i < json.length; i++) {
      var curr = json[i];
      if (curr.image == "") curr.image = curr.author.picture;
      
      $('.mdl-grid').append(html);
      var $lastChild = $('.mdl-grid .mdl-cell:nth-last-child(1)');
      $lastChild.find('.mdl-card__title-text').text(curr.headline);
      $lastChild.find('.mdl-card__title').css("background-image", "url(" + curr.image + ")");
      $lastChild.find('.primary').text(curr.metaDescription);
      $lastChild.find('a').attr("href", curr.link);
      $lastChild.find('.secondary a').text(curr.author.username);
      $lastChild.find('.secondary a').attr("href", "http://www.freecodecamp.com/" + curr.author.username);
      $lastChild.find('.secondary p:nth-child(3)').text(curr.upVotes.length);
    }
  });
  
});