# Geographies

Geographies is the place in the world where the works was done or founded

## Get All Geographies

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/geographies", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/geographies"
```

> The above command returns JSON structured like this:

```json
  "hits": {
    "total": 4,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-geographies",
        "_type": "geography",
        "_id": "3",
        "_score": 1,
        "_source": {
          "name": "Chancay (vallée) (origine)",
          "comment": "A utiliser pour les oeuvres fabriquées, créées ou découvertes ou in situ",
          "detail": "VA culture de Chançay (1100-1400 ); site archélogique précolombien; sépultures, nécropole (nécropole d'Ancon)",
          "id": 3,
          "created_at": "2014-08-14T10:38:12.516Z",
          "updated_at": "2014-08-14T10:38:39.498Z"
        }
      },
      {
        "_index": "rmn-dev-geographies",
        "_type": "geography",
        "_id": "4",
        "_score": 1,
        "_source": {
          "name": "Pérou (origine)",
          "comment": "A utiliser pour les oeuvres fabriquées, créées ou découvertes ou in situ",
          "detail": "VA Amérique précolombienne (période); République du Pérou, traversé par les Andes ; capitale : Lima",
          "id": 4,
          "created_at": "2014-08-14T10:38:12.937Z",
          "updated_at": "2014-08-14T10:38:40.806Z"
        }
      },
      {
        "_index": "rmn-dev-geographies",
        "_type": "geography",
        "_id": "2",
        "_score": 1,
        "_source": {
          "name": "Pérou (origine)",
          "comment": "A utiliser pour les oeuvres fabriquées, créées ou découvertes ou in situ",
          "detail": "VA Amérique précolombienne (période); République du Pérou, traversé par les Andes ; capitale : Lima",
          "id": 2,
          "created_at": "2014-08-18T16:10:47.463Z",
          "updated_at": "2014-08-18T16:11:28.118Z"
        }
      },
      {
        "_index": "rmn-dev-geographies",
        "_type": "geography",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": "Chancay (vallée) (origine)",
          "comment": "A utiliser pour les oeuvres fabriquées, créées ou découvertes ou in situ",
          "detail": "VA culture de Chançay (1100-1400 ); site archélogique précolombien; sépultures, nécropole (nécropole d'Ancon)",
          "id": 1,
          "created_at": "2014-08-18T16:10:47.002Z",
          "updated_at": "2014-08-18T16:11:26.731Z"
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