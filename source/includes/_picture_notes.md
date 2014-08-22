# Picture_notes

FixMe

## Get All Picture_notes

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/picture_notes", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/picture_notes"
```

> The above command returns JSON structured like this:

```json
"hits": {
    "total": 1,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-picturenotes",
        "_type": "picture_note",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": "contretype",
          "comment": "",
          "detail": "Obtenu à partir d'une épreuve photographique re-photographiée. Sa matrice n'est pas le négatif original.\r\n",
          "id": 1,
          "created_at": "2014-08-14T10:16:37.100Z",
          "updated_at": "2014-08-14T10:16:37.253Z"
        }
      }
    ]
  }

```

This endpoint retrieves all know collections.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/picture_notes`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results

For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>