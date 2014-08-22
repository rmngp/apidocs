# Collections

FixMe

## Get All Collections

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/collections", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/collections"
```

> The above command returns JSON structured like this:

```json
"hits": {
    "total": 9164,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "40",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 40,
          "created_at": "2014-08-19T16:14:29.908Z",
          "updated_at": "2014-08-19T16:14:29.949Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "19",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 19,
          "created_at": "2014-08-19T16:13:44.729Z",
          "updated_at": "2014-08-19T16:13:44.773Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "45",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 45,
          "created_at": "2014-08-19T16:14:39.920Z",
          "updated_at": "2014-08-19T16:14:39.963Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "7",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 7,
          "created_at": "2014-08-19T16:13:19.170Z",
          "updated_at": "2014-08-19T16:13:19.218Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "21",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 21,
          "created_at": "2014-08-19T16:13:48.719Z",
          "updated_at": "2014-08-19T16:13:48.774Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "26",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 26,
          "created_at": "2014-08-19T16:14:01.022Z",
          "updated_at": "2014-08-19T16:14:01.087Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "33",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 33,
          "created_at": "2014-08-19T16:14:15.765Z",
          "updated_at": "2014-08-19T16:14:15.814Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "38",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 38,
          "created_at": "2014-08-19T16:14:25.502Z",
          "updated_at": "2014-08-19T16:14:25.552Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "14",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 14,
          "created_at": "2014-08-19T16:13:34.567Z",
          "updated_at": "2014-08-19T16:13:34.627Z"
        }
      },
      {
        "_index": "rmn-dev-collections",
        "_type": "collection",
        "_id": "57",
        "_score": 1,
        "_source": {
          "name": "ESTAMPES",
          "comment": null,
          "detail": null,
          "id": 57,
          "created_at": "2014-08-19T16:15:06.902Z",
          "updated_at": "2014-08-19T16:15:06.944Z"
        }
      }
    ]
  }

```

This endpoint retrieves all know collections.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/collections`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>