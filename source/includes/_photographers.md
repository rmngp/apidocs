# Photographers

## Get All Photographers

Authors of the many images available through the API.

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/photographers", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/photographers"
```

> The above command returns JSON structured like this:

```json
"hits": {
    "total": 11,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "8",
        "_score": 1,
        "_source": {
          "id": 8,
          "name": "National Gallery Photographic Department",
          "city": "",
          "country_code": "GB",
          "comments": "National Gallery of London",
          "created_at": "2014-08-06T14:48:20.298Z",
          "updated_at": "2014-08-06T14:48:20.330Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "10",
        "_score": 1,
        "_source": {
          "id": 10,
          "name": "Thierry Le Mage",
          "city": "",
          "country_code": "FR",
          "comments": "",
          "created_at": "2014-08-07T14:36:09.736Z",
          "updated_at": "2014-08-07T14:36:09.759Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "3",
        "_score": 1,
        "_source": {
          "id": 3,
          "name": "Hervé Lewandowski",
          "city": "",
          "country_code": "FR",
          "comments": "Ancien photographe de l'Agence. En indépendant depuis 2011 environ. DS",
          "created_at": "2014-08-18T16:10:45.318Z",
          "updated_at": "2014-08-18T16:11:19.796Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "9",
        "_score": 1,
        "_source": {
          "id": 9,
          "name": "René-Gabriel Ojéda",
          "city": "",
          "country_code": "FR",
          "comments": "",
          "created_at": "2014-08-07T14:35:47.922Z",
          "updated_at": "2014-08-07T14:35:47.941Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "11",
        "_score": 1,
        "_source": {
          "id": 11,
          "name": "Fratelli Alinari",
          "city": "",
          "country_code": "IT",
          "comments": "",
          "created_at": "2014-08-07T15:02:50.590Z",
          "updated_at": "2014-08-07T15:02:50.640Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "4",
        "_score": 1,
        "_source": {
          "id": 4,
          "name": "Thierry Le Mage",
          "city": "",
          "country_code": "FR",
          "comments": "",
          "created_at": "2014-08-14T10:38:08.190Z",
          "updated_at": "2014-08-14T10:38:27.435Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "5",
        "_score": 1,
        "_source": {
          "id": 5,
          "name": "Hervé Lewandowski",
          "city": "",
          "country_code": "FR",
          "comments": "Ancien photographe de l'Agence. En indépendant depuis 2011 environ. DS",
          "created_at": "2014-08-14T10:38:11.080Z",
          "updated_at": "2014-08-14T10:38:35.835Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "6",
        "_score": 1,
        "_source": {
          "id": 6,
          "name": "Hervé Lewandowski",
          "city": "",
          "country_code": "FR",
          "comments": "Ancien photographe de l'Agence. En indépendant depuis 2011 environ. DS",
          "created_at": "2014-08-06T14:47:17.357Z",
          "updated_at": "2014-08-06T14:47:17.386Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "1",
        "_score": 1,
        "_source": {
          "id": 1,
          "name": "Gérard Blot",
          "city": "",
          "country_code": "FR",
          "comments": "",
          "created_at": "2014-08-18T16:10:36.837Z",
          "updated_at": "2014-08-18T16:10:52.357Z"
        }
      },
      {
        "_index": "rmn-dev-photographers",
        "_type": "photographer",
        "_id": "7",
        "_score": 1,
        "_source": {
          "id": 7,
          "name": "Gérard Blot",
          "city": "",
          "country_code": "FR",
          "comments": "",
          "created_at": "2014-08-06T14:47:55.338Z",
          "updated_at": "2014-08-06T14:47:55.372Z"
        }
      }
    ]
  }
```

This endpoint retrieves all know photographers.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/photographers`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results

For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>