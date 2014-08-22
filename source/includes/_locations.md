# Locations

Locations are the differents museeum where the works are

## Get All Locations

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/locations", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/locations"
```

> The above command returns JSON structured like this:

```json
 "hits": {
    "total": 9,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "8",
        "_score": 1,
        "_source": {
          "name": "Italie, Trieste, musée Revoltella",
          "city": "",
          "id": 8,
          "country_code": "IT",
          "created_at": "2014-08-07T15:02:48.415Z",
          "updated_at": "2014-08-07T15:02:48.515Z"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "3",
        "_score": 1,
        "_source": {
          "name": "Saint-Germain-en-Laye, musée d'Archéologie nationale et Domaine national de Saint-Germain-en-Laye",
          "city": "",
          "country_code": "FR"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "6",
        "_score": 1,
        "_source": {
          "name": "Paris, musée du Louvre",
          "city": "",
          "country_code": "FR"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": "Paris, musée d'Orsay, conservé au musée du Louvre",
          "city": "",
          "country_code": "FR"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "7",
        "_score": 1,
        "_source": {
          "name": "Saint-Germain-en-Laye, musée d'Archéologie nationale et Domaine national de Saint-Germain-en-Laye",
          "city": "",
          "country_code": "FR"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "2",
        "_score": 1,
        "_source": {
          "name": "Paris, musée du Louvre",
          "city": "",
          "country_code": "FR"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "9",
        "_score": 1,
        "_source": {
          "name": "Blérancourt, musée franco-américain du château de Blérancourt",
          "city": "",
          "id": 9,
          "country_code": "FR",
          "created_at": "2014-08-07T15:07:42.722Z",
          "updated_at": "2014-08-07T15:07:42.829Z"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "4",
        "_score": 1,
        "_source": {
          "name": "Allemagne, Berlin, Nationalgalerie (SMB)",
          "city": "",
          "country_code": "DE"
        }
      },
      {
        "_index": "rmn-dev-locations",
        "_type": "location",
        "_id": "5",
        "_score": 1,
        "_source": {
          "name": "Paris, musée d'Orsay, conservé au musée du Louvre",
          "city": "",
          "country_code": "FR"
        }
      }
    ]
  }
```

This endpoint retrieves all know locations.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/locations`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>