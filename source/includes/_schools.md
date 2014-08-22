
# schools

Schools are the artistique schools like "Ecole française" or "Ecole cubiste"

## Get All Periods

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/schools", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/schools"
```

> The above command returns JSON structured like this:

```json
  "hits": {
    "total": 1,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-schools",
        "_type": "school",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": "Ecole française",
          "comment": "VA école française (d'après); VA France",
          "detail": "",
          "id": 1,
          "created_at": "2014-08-14T10:16:27.328Z",
          "updated_at": "2014-08-14T10:16:27.458Z"
        }
      }
    ]
  }
```

This endpoint retrieves all know periods.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/periods`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>