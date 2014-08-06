---
title: RMN-GP API Reference

language_tabs:
  - shell
  - ruby

toc_footers:
  - <a href='http://dev.rmn.af83.com/'>Sign Up for a Partner Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

Welcome to the RMN-GP API! You can use our API to access RMN-GP API endpoints,
to retrieve information in the JSON format on various artworks, artists, and
related pictures in our database.

This documentation should help you discover our API, and includes some examples
using the Ruby programming language, on the right-most pane.

# Authentication

> To authorize, you will need to include the key in HTTP request headers:

```ruby
require 'open-uri'

open("http://api_endpoint_here", 'ApiKey' => 'secret')
```

```shell
# With shell, you can just pass the correct header with each request
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

```json
{
  "hits": {
    "total": 8,
    "hits": [
      {
        "_source": {
          "id": 6,
          "collection": "Peintures",
          "title": "Artowrk title",
          "description": "Artwork description"
        }
      },
      {
        "_source": {
          "collection": "Peintures",
          "title": "Artwork title",
          "description": "Artwork description"
        }
      }
    ]
  }
}
```

This endpoint retrieves all artworks.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/works`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q | "" | If set, results are filtered to match this String
page | 1 | Paginate through results

<aside class="success">
Remember — don't forget to use your API key!
</aside>
