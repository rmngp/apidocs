# Authentication

> To authorize, you will need to include the key in HTTP request headers:

```ruby
require 'open-uri'

open("http://api_endpoint_here", 'ApiKey' => 'secret')
```

```shell
curl -H "ApiKey: secret" \
     "http://api_endpoint_here"
```

> Make sure to replace `secret` with your API key.

RMN-GP uses API keys to allow acces to the API. You can register on our
[partners site](http://dev.rmn.af83.com/partners) to request one.

RMN-GP expects for the API key to be included in all API requests to the server
in a header that looks like the following:

`ApiKey: secret`

<aside class="notice">
You must replace `secret` with your personal API key.
</aside>
