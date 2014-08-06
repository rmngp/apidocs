# Periods

FIXME: define here what *are* art periods in our case!

## Get All Periods

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/periods", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/periods"
```

> The above command returns JSON structured like this:

```json
{
    "hits": {
        "total": 42,
            "hits": [
            {
                "_source": {
                    "name": "période contemporaine de 1789 à 1914",
                    "comment": "A utiliser uniquement pour l'Europe ",
                    "detail": "",
                    "id": 4,
                    "created_at": "2014-08-06T14:44:51.316Z",
                    "updated_at": "2014-08-06T14:48:26.234Z"
                }
            },
            {
                "_source": {
                    "name": "Renaissance (période)",
                    "comment": "A utiliser pour la datation des oeuvres",
                    "detail": "Fin du Moyen Age à la fin du 16e siècle",
                    "id": 2,
                    "created_at": "2014-08-06T14:39:00.384Z",
                    "updated_at": "2014-08-06T14:55:46.127Z"
                }
            }
        ]
    }
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
