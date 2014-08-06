# Keywords

FIXME: explain keywords

## Get All keywords

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/keywords", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/keywords"
```

> The above command returns JSON structured like this:

```json
{
    "hits": {
        "total": 42,
            "hits": [
            {
                "_source": {
                    "name": "intérieur d'habitation",
                    "comment": "A combiner avec le genre de pièce (chambre, salon..) Aucune scène importante ne se déroule, sinon : 'scène d'intérieur'",
                    "detail": "",
                    "id": 39,
                    "keyword_type_id": 1,
                    "created_at": "2014-08-06T14:47:22.680Z",
                    "updated_at": "2014-08-06T14:47:22.841Z"
                }
            },
            {
                "_source": {
                    "name": "vase (porte-bouquet)",
                    "comment": "VA vase décoratif de jardin",
                    "detail": "récipient (vase) représenté avec des fleurs ou destiné à en recevoir (tulipière, bouquetière)",
                    "id": 53,
                    "keyword_type_id": 1,
                    "created_at": "2014-08-06T14:48:24.712Z",
                    "updated_at": "2014-08-06T14:48:24.874Z"
                }
            }
        ]
    }
}
```

This endpoint retrieves all keywords.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/keywords`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results
