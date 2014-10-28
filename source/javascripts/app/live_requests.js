$(function() {

  // Config
  config = {
    api_key: 'demo',
    host: window.location.protocol + '//' + window.location.host.replace('doc.', 'api.')
  }
  // End Config

  function urlWithHost(path) {
    return config.host + path;
  }

  function makeRequest(e) {
    $.ajax({
      url: urlWithHost( $(e).data('path') ),
      data: { api_key: config.api_key },
      xhrFields: { withCredentials: true }
    }).success(function(resp) {
      $(e).text( JSON.stringify(resp, null, "  ") );
      hljs.highlightBlock(e);
      toc.eventProxy.trigger('resize');
    });
  }

  $('.live_requests').waypoint(function() {
    makeRequest(this);
  }, {
    offset: function() { return $(window).height(); }
  });
});
