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
 "hits": {
    "total": 11,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "9",
        "_score": 1,
        "_source": {
          "name": "mine de plomb",
          "comment": "VA crayon graphite",
          "detail": "",
          "id": 9,
          "created_at": "2014-08-06T14:45:55.411Z",
          "updated_at": "2014-08-07T08:34:51.855Z"
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "11",
        "_score": 1,
        "_source": {
          "name": "pierre noire",
          "comment": "",
          "detail": "",
          "id": 11,
          "created_at": "2014-08-07T14:36:13.418Z",
          "updated_at": "2014-08-07T14:36:13.575Z"
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "4",
        "_score": 1,
        "_source": {
          "name": "crayon (dessin)",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "8",
        "_score": 1,
        "_source": {
          "name": "crayon de couleur",
          "comment": "",
          "detail": "",
          "id": 8,
          "created_at": "2014-08-06T14:45:55.153Z",
          "updated_at": "2014-08-07T08:34:51.665Z"
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "10",
        "_score": 1,
        "_source": {
          "name": "huile sur toile",
          "comment": "",
          "detail": "",
          "id": 10,
          "created_at": "2014-08-06T14:47:20.627Z",
          "updated_at": "2014-08-07T08:37:44.547Z"
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "3",
        "_score": 1,
        "_source": {
          "name": "terre cuite",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "7",
        "_score": 1,
        "_source": {
          "name": "encre de Chine",
          "comment": "",
          "detail": "",
          "id": 7,
          "created_at": "2014-08-06T14:45:54.312Z",
          "updated_at": "2014-08-07T08:34:51.224Z"
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "2",
        "_score": 1,
        "_source": {
          "name": "huile sur toile",
          "detail": ""
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "6",
        "_score": 1,
        "_source": {
          "name": "contreplaqué",
          "comment": "",
          "detail": "",
          "id": 6,
          "created_at": "2014-08-06T14:45:36.952Z",
          "updated_at": "2014-08-07T08:36:22.863Z"
        }
      },
      {
        "_index": "rmn-dev-techniques",
        "_type": "technique",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": "crayon (dessin)",
          "detail": ""
        }
      }
    ]
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


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>