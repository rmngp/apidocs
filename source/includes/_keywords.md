# Keywords

Keywords contain all the keyword that has'nt a special type.

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
"hits": {
    "total": 66,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "46",
        "_score": 1,
        "_source": {
          "name": "costume (époque contemporaine)",
          "comment": "",
          "detail": "De 1789 à nos jours",
          "id": 46,
          "keyword_type_id": 1,
          "created_at": "2014-08-06T14:48:00.116Z",
          "updated_at": "2014-08-07T08:34:34.625Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "27",
        "_score": 1,
        "_source": {
          "name": "taureau (animal)",
          "comment": "",
          "detail": "Bovin domestique ruminant généralement porteur de cornes sur le front. Sa femelle est la vache.",
          "id": 27,
          "keyword_type_id": 1,
          "created_at": "2014-08-06T14:45:55.936Z",
          "updated_at": "2014-08-07T08:34:52.196Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "34",
        "_score": 1,
        "_source": {
          "name": "Photographies",
          "comment": "",
          "detail": "",
          "id": 34,
          "keyword_type_id": 4,
          "created_at": "2014-08-06T14:46:23.439Z",
          "updated_at": "2014-08-07T08:35:13.056Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "58",
        "_score": 1,
        "_source": {
          "name": "allongé",
          "comment": "VA accoudé",
          "detail": "Corps étendu en position horizontale en partie ou en totalité",
          "id": 58,
          "keyword_type_id": 1,
          "created_at": "2014-08-07T08:33:04.046Z",
          "updated_at": "2014-08-07T08:33:04.210Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "53",
        "_score": 1,
        "_source": {
          "name": "vase (porte-bouquet)",
          "comment": "VA vase décoratif de jardin",
          "detail": "récipient (vase) représenté avec des fleurs ou destiné à en recevoir (tulipière, bouquetière)",
          "id": 53,
          "keyword_type_id": 1,
          "created_at": "2014-08-06T14:48:24.712Z",
          "updated_at": "2014-08-07T08:36:39.304Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "22",
        "_score": 1,
        "_source": {
          "name": "art précolombien "
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "65",
        "_score": 1,
        "_source": {
          "name": "acrobate",
          "comment": "",
          "detail": "",
          "id": 65,
          "keyword_type_id": 1,
          "created_at": "2014-08-07T15:02:53.512Z",
          "updated_at": "2014-08-07T15:02:53.735Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "39",
        "_score": 1,
        "_source": {
          "name": "intérieur d'habitation",
          "comment": "A combiner avec le genre de pièce (chambre, salon..) Aucune scène importante ne se déroule, sinon : 'scène d'intérieur'",
          "detail": "",
          "id": 39,
          "keyword_type_id": 1,
          "created_at": "2014-08-06T14:47:22.680Z",
          "updated_at": "2014-08-07T08:37:45.725Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "41",
        "_score": 1,
        "_source": {
          "name": "chambre",
          "comment": "",
          "detail": "",
          "id": 41,
          "keyword_type_id": 1,
          "created_at": "2014-08-06T14:47:23.208Z",
          "updated_at": "2014-08-07T08:37:46.108Z"
        }
      },
      {
        "_index": "rmn-dev-keywords",
        "_type": "keyword",
        "_id": "60",
        "_score": 1,
        "_source": {
          "name": "portrait à mi-corps",
          "comment": "",
          "detail": "",
          "id": 60,
          "keyword_type_id": 1,
          "created_at": "2014-08-07T14:35:50.633Z",
          "updated_at": "2014-08-07T14:35:50.794Z"
        }
      }
    ]
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


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>