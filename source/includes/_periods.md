# Periods

Periods can be a century ( 14e siècle ), an age ( renaissance ), or a périod ( période contemporaine de 1789 à 1914 )

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
"hits": {
    "total": 10,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "10",
        "_score": 1,
        "_source": {
          "name": "période Chancay (1100-1400)"
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "3",
        "_score": 1,
        "_source": {
          "name": "19e siècle",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "8",
        "_score": 1,
        "_source": {
          "name": "période Chancay (1100-1400)",
          "detail": "VA Chançay (vallée)"
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "9",
        "_score": 1,
        "_source": {
          "name": "12e siècle"
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "4",
        "_score": 1,
        "_source": {
          "name": "15e siècle",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "5",
        "_score": 1,
        "_source": {
          "name": "13e siècle",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": "période contemporaine de 1789 à 1914",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "6",
        "_score": 1,
        "_source": {
          "name": "14e siècle",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "2",
        "_score": 1,
        "_source": {
          "name": "20e siècle",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-periods",
        "_type": "period",
        "_id": "7",
        "_score": 1,
        "_source": {
          "name": "12e siècle",
          "detail": ""
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