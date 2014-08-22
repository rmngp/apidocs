# Authors

Authors is the list of the authors that are listed in the API

## Get All Authors

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/authors", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/authors"
```

> The above command returns JSON structured like this:

```json
{
  "took": 39,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 2,
    "max_score": 0.10573117,
    "hits": [
      {
        "_index": "rmn-dev-authors",
        "_type": "author",
        "_id": "1",
        "_score": 0.10573117,
        "_source": {
          "name": "Vinci Léonard de",
          "detail": "",
          "birth": {
            "year": "1452"
          },
          "death": {
            "year": "1519"
          },
          "sources": [
            {
              "name": "RMN",
              "code": "RMN",
              "copyright": "Photo (C) RMN-Grand Palais"
            },
            {
              "name": "RMN (musée d'Orsay)",
              "code": "RMNO",
              "copyright": "Photo (C) RMN-Grand Palais (musée d'Orsay)"
            }
          ],
          "locations": [
            {
              "name": "Paris, musée du Louvre",
              "city": "",
              "country_code": "FR"
            },
            {
              "name": "Paris, musée d'Orsay, conservé au musée du Louvre",
              "city": "",
              "country_code": "FR"
            }
          ],
          "periods": [
            {
              "name": "période contemporaine de 1789 à 1914",
              "detail": ""
            },
            {
              "name": "20e siècle",
              "detail": ""
            },
            {
              "name": "19e siècle",
              "detail": ""
            },
            {
              "name": "période contemporaine de 1789 à 1914",
              "detail": ""
            },
            {
              "name": "20e siècle",
              "detail": ""
            },
            {
              "name": "19e siècle",
              "detail": ""
            }
          ],
          "techniques": [
            {
              "name": "huile sur toile",
              "detail": ""
            },
            {
              "name": "crayon (dessin)",
              "detail": ""
            }
          ],
          "geographies": []
        }
      },
      {
        "_index": "rmn-dev-authors",
        "_type": "author",
        "_id": "6",
        "_score": 0.052865583,
        "_source": {
          "name": "Vinci Léonard de",
          "comment": "",
          "detail": "",
          "id": 6,
          "created_at": "2014-08-14T10:38:05.741Z",
          "updated_at": "2014-08-14T10:38:32.513Z",
          "birth": {
            "year": "1452"
          },
          "death": {
            "year": "1519"
          },
          "sources": [
            {
              "id": 4,
              "code": "RMNO",
              "copyright": "Photo (C) RMN-Grand Palais (musée d'Orsay)",
              "disabled": false,
              "name": "RMN (musée d'Orsay)",
              "created_at": "2014-08-14T10:38:00.493Z",
              "updated_at": "2014-08-14T10:38:13.302Z"
            },
            {
              "id": 5,
              "code": "RMN",
              "copyright": "Photo (C) RMN-Grand Palais",
              "disabled": false,
              "name": "RMN",
              "created_at": "2014-08-14T10:38:06.748Z",
              "updated_at": "2014-08-14T10:38:24.515Z"
            }
          ],
          "locations": [
            {
              "name": "Paris, musée d'Orsay, conservé au musée du Louvre",
              "city": "",
              "id": 5,
              "country_code": "FR",
              "created_at": "2014-08-14T10:38:00.274Z",
              "updated_at": "2014-08-14T10:38:13.268Z"
            },
            {
              "name": "Paris, musée du Louvre",
              "city": "",
              "id": 6,
              "country_code": "FR",
              "created_at": "2014-08-14T10:38:06.700Z",
              "updated_at": "2014-08-14T10:38:24.473Z"
            }
          ],
          "periods": [
            {
              "name": "19e siècle",
              "comment": "",
              "detail": "",
              "id": 2,
              "created_at": "2014-08-12T16:07:53.625Z",
              "updated_at": "2014-08-14T10:38:30.231Z"
            },
            {
              "name": "20e siècle",
              "comment": "",
              "detail": "",
              "id": 3,
              "created_at": "2014-08-14T09:06:20.355Z",
              "updated_at": "2014-08-14T10:38:29.262Z"
            },
            {
              "name": "période contemporaine de 1789 à 1914",
              "comment": "A utiliser uniquement pour l'Europe ",
              "detail": "",
              "id": 1,
              "created_at": "2014-08-12T16:07:53.430Z",
              "updated_at": "2014-08-14T10:38:27.548Z"
            },
            {
              "name": "19e siècle",
              "comment": "",
              "detail": "",
              "id": 2,
              "created_at": "2014-08-12T16:07:53.625Z",
              "updated_at": "2014-08-14T10:38:30.231Z"
            },
            {
              "name": "20e siècle",
              "comment": "",
              "detail": "",
              "id": 3,
              "created_at": "2014-08-14T09:06:20.355Z",
              "updated_at": "2014-08-14T10:38:29.262Z"
            },
            {
              "name": "période contemporaine de 1789 à 1914",
              "comment": "A utiliser uniquement pour l'Europe ",
              "detail": "",
              "id": 1,
              "created_at": "2014-08-12T16:07:53.430Z",
              "updated_at": "2014-08-14T10:38:27.548Z"
            }
          ],
          "techniques": [
            {
              "name": "crayon (dessin)",
              "comment": "",
              "detail": "",
              "id": 4,
              "created_at": "2014-08-14T10:38:06.124Z",
              "updated_at": "2014-08-14T10:38:21.345Z"
            },
            {
              "name": "huile sur toile",
              "comment": "",
              "detail": "",
              "id": 5,
              "created_at": "2014-08-14T10:38:09.522Z",
              "updated_at": "2014-08-14T10:38:32.100Z"
            }
          ],
          "geographies": []
        }
      }
    ]
  },
  "facets": {
    "collections": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "sources": {
      "_type": "terms",
      "missing": 0,
      "total": 4,
      "other": 0,
      "terms": [
        {
          "term": "RMN (musée d'Orsay)",
          "count": 2
        },
        {
          "term": "RMN",
          "count": 2
        }
      ]
    },
    "locations": {
      "_type": "terms",
      "missing": 0,
      "total": 4,
      "other": 0,
      "terms": [
        {
          "term": "Paris, musée du Louvre",
          "count": 2
        },
        {
          "term": "Paris, musée d'Orsay, conservé au musée du Louvre",
          "count": 2
        }
      ]
    },
    "authors": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "periods": {
      "_type": "terms",
      "missing": 0,
      "total": 6,
      "other": 0,
      "terms": [
        {
          "term": "période contemporaine de 1789 à 1914",
          "count": 2
        },
        {
          "term": "20e siècle",
          "count": 2
        },
        {
          "term": "19e siècle",
          "count": 2
        }
      ]
    },
    "techniques": {
      "_type": "terms",
      "missing": 0,
      "total": 4,
      "other": 0,
      "terms": [
        {
          "term": "huile sur toile",
          "count": 2
        },
        {
          "term": "crayon (dessin)",
          "count": 2
        }
      ]
    },
    "geographies": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    }
  }
}
```

This endpoint retrieves all know authors.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/authors`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>