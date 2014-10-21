## Styles

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/styles"
```

```json
{
  "took": 4,
  "timed_out": false,
  "hits": {
    "total": 131,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-styles",
        "_type": "style",
        "_id": "70",
        "_score": 1,
        "_source": { "path": "Dada", "name": { "fr": "Dada" }, "detail": { } }
      },
      {
        "_index": "rmn-development-styles",
        "_type": "style",
        "_id": "75",
        "_score": 1,
        "_source": {
          "path": "néoplasticisme",
          "name": { "en": "Neoplasticism", "fr": "néoplasticisme" },
          "detail": { "fr": "mouvement lancé en Hollande par Mondrian en 1917" }
        }
      },
      {
        "_index": "rmn-development-styles",
        "_type": "style",
        "_id": "87",
        "_score": 1,
        "_source": {
          "path": "hyperréalisme",
          "name": { "en": "hyperrealism", "fr": "hyperréalisme" },
          "detail": { "fr": "mouvement apparu en 1965 aux Etats-Unis" }
        }
      }
    ]
  }
}
```

Styles of the many works available through the API.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Styles

This endpoint retrieves all know collections.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/collections`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
