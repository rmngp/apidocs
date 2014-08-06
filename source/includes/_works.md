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
