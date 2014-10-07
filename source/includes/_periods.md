## Periods

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/periods"
```

```json
{
  "took": 2,
  "timed_out": false,
  "hits": {
    "total": 4,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-periods",
        "_type": "period",
        "_id": "4",
        "_score": 1,
        "_source": { "path": "20e siècle", "name": { "en": "20th century", "fr": "20e siècle" }, "detail": { } }
      },
      {
        "_index": "rmn-development-periods",
        "_type": "period",
        "_id": "1",
        "_score": 1,
        "_source": { "path": "15e siècle", "name": { "en": "15th century", "fr": "15e siècle" }, "detail": { } }
      },
      {
        "_index": "rmn-development-periods",
        "_type": "period",
        "_id": "2",
        "_score": 1,
        "_source": {
          "path": "Renaissance (période)",
          "name": { "fr": "Renaissance (période)" },
          "detail": { "fr": "Fin du Moyen Age à la fin du 16e siècle" }
        }
      },
      {
        "_index": "rmn-development-periods",
        "_type": "period",
        "_id": "3",
        "_score": 1,
        "_source": {
          "path": "période contemporaine de 1914 à nos jours",
          "name": { "en": "contemporary period of 1914 in our days", "fr": "période contemporaine de 1914 à nos jours" },
          "detail": { }
        }
      }
    ]
  }
}
```

Periods can be a century, an age, or a period.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Periods

This endpoint retrieves all know periods.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/periods`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
