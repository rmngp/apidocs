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
      handleRequest(this);
    }, {
      offset: function() { return $(window).height(); }
    });
  }

  function urlWithHost(path) {
    return config.host + path;
  }

  function handleRequest(e) {
    e = $(e);

    if (e.data('path') == '_work_by_id_') {
      request('/v1/works').success(function(resp){
        makeRequest(e, '/v1/works/' + resp.hits.hits[0]._id);
      }).error(function(resp){
        error(e);
      });
    }
    else if (e.data('path') == '_selection_by_id_') {
      request('/v1/selections').success(function(resp){
        makeRequest(e, '/v1/selections/' + resp[0].id);
      }).error(function(resp){
        error(e);
      });
    }
    else {
      makeRequest(e, e.data('path'));
    }

  }

  function request(path) {
    return $.ajax({
      url: urlWithHost(path),
      data: { api_key: config.api_key },
      xhrFields: { withCredentials: true }
    })
  }

  function makeRequest(e, path) {
    request(path).success(function(resp) {
      var collapsed = true;
      if ((c = e.data('collapsed')) != undefined){ collapsed = c; }
      e.JSONView(resp, {collapsed: collapsed});
      toc.eventProxy.trigger('resize');
    }).error(function(resp){
      error(e);
    });
  }

  function error(e) {
    e.replaceWith("<blockquote class='warning'><p>Cannot load API response. Sorry.</p></blockquote>");
  }

});
