# Authors

## Get All Authors

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/authors", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/authors"
```

> The above command returns JSON structured like this:

```json
{
    "hits": {
        "total": 42,
            "hits": [
            {
                "_source": {
                    "name": "Van Gogh Vincent",
                    "comment": "",
                    "detail": "peintre",
                    "id": 5,
                    "created_at": "2014-08-06T14:47:21.419Z",
                    "updated_at": "2014-08-06T14:48:25.702Z",
                    "birth": {
                        "year": "1853"
                    },
                    "death": {
                        "year": "1890"
                    }
                }
            },
            {
                "_source": {
                    "name": "Maar Dora (dite), Markovitch Henriette Dora",
                    "comment": "",
                    "detail": "",
                    "id": 4,
                    "created_at": "2014-08-06T14:46:21.443Z",
                    "updated_at": "2014-08-06T14:46:21.741Z",
                    "birth": {
                        "year": "1907"
                    },
                    "death": {
                        "year": "1997"
                    }
                }
            }
        ]
    }
}
```

This endpoint retrieves all know authors.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/authors`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results
