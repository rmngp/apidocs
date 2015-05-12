$(function() {
  config = {
    api_key: 'demo',
    host: undefined
  }

  $.get('/urls')
    .done(init)
    .fail(function(resp) {
      console.log('Fail to load urls: ' + resp);
    });

  function init(urls){
    config.host = urls.root_api;

    $('.live_requests').waypoint(function() {
      $(this).html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div></div>');
      makeRequest(this);
    }, {
      offset: function() { return $(window).height(); }
    });
  }

  function urlWithHost(path) {
    return config.host + path;
  }

  function makeRequest(e) {
    $.ajax({
      url: urlWithHost( $(e).data('path') ),
      data: { api_key: config.api_key },
      xhrFields: { withCredentials: true }
    }).success(function(resp) {
      var collapsed = true;
      if ((c = $(e).data('collapsed')) != undefined){ collapsed = c; }
      $(e).JSONView(resp, {collapsed: collapsed});
      toc.eventProxy.trigger('resize');
    }).error(function(resp){
      $(e).replaceWith("<blockquote class='warning'><p>Cannot load API response. Sorry.</p></blockquote>");
    });
  }

});
