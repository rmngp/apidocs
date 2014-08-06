# Techniques

## Get All Techniques

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/techniques", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/techniques"
```

> The above command returns JSON structured like this:

```json
{
    "hits": {
        "total": 42,
            "hits": [
            {
                "_source": {
                    "name": "carton",
                    "comment": "",
                    "detail": "",
                    "id": 4,
                    "created_at": "2014-08-06T14:44:50.581Z",
                    "updated_at": "2014-08-06T14:44:50.741Z"
                }
            },
            {
                "_source": {
                    "name": "mine de plomb",
                    "comment": "VA crayon graphite",
                    "detail": "",
                    "id": 9,
                    "created_at": "2014-08-06T14:45:55.411Z",
                    "updated_at": "2014-08-06T14:45:55.539Z"
                }
            }
        ]
    }
}
```

This endpoint retrieves all know techniques.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/techniques`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results
