$(function() {
  window.toc = gajus.contents({
    contents: $('#toc').get(0),
    articles: $('h1, h2'),
    link: function(guide, article){

      var guideLink = document.createElement('a'),
      articleLink = document.createElement('a'),
        articleName = article.textContent,
        articleId = article.id || gajus.contents.id(articleName);

      articleLink.href = '#' + articleId;

      while (article.childNodes.length) {
        articleLink.appendChild(article.childNodes[0], articleLink);
      }

      article.appendChild(articleLink);

      guideLink.appendChild(document.createTextNode(articleName));
      guideLink.href = '#' + articleId;
      guide.insertBefore(guideLink, guide.firstChild);
    }
  });

  toc.eventProxy.on('change', function (data) {
    if (data.previous) {
      $(data.previous.guide)
        .removeClass('active')
        .parents('li')
        .removeClass('active-child');
    }

    $(data.current.guide)
      .addClass('active')
      .parents('li')
      .addClass('active-child');
  });

  $('#toc > ol > li > a').click(function(e){
    $('#toc > ol > li').removeClass('active-child');
    $(e.currentTarget).closest('li').addClass('active-child');
  });
});
