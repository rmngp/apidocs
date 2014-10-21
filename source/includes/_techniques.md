## Techniques

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/techniques"
```

```json
{
  "took": 6,
  "timed_out": false,
  "hits": {
    "total": 1512,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-techniques",
        "_type": "technique",
        "_id": "250",
        "_score": 1,
        "_source": {
          "path": "polychromie (technique)",
          "name": { "en": "polychromy (technique)", "fr": "polychromie (technique)" },
          "detail": { "fr": "Mot-outil" }
        }
      },
      {
        "_index": "rmn-development-techniques",
        "_type": "technique",
        "_id": "255",
        "_score": 1,
        "_source": {
          "path": "décor sous couverte",
          "name": { "en": "under covering decoration", "fr": "décor sous couverte" },
          "detail": { }
        }
      },
      {
        "_index": "rmn-development-techniques",
        "_type": "technique",
        "_id": "281",
        "_score": 1,
        "_source": {
          "path": "lithophanie",
          "name": { "en": "lithophany", "fr": "lithophanie" },
          "detail": { "fr": "biscuit de porcelaine translucide" }
        }
      }
    ]
  }
}
```

Techniques used by many works available through the API.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Techniques

This endpoint retrieves all know techniques.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/techniques`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
