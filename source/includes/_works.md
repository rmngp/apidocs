# Works

## Get All Works

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/works", 'ApiKey' => 'secret')
```



```shell
curl -H "ApiKey: secret" \
    "http://api.dev.rmn.af83.com/v1/works"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/works">
</pre>

This endpoint retrieves all artworks.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/works`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>
