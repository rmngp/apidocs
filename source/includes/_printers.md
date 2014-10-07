## Printers

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/printers"
```

```json
{
  "took": 1,
  "timed_out": false,
  "hits": {
    "total": 6,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-printers",
        "_type": "printer",
        "_id": "2",
        "_score": 1,
        "_source": { "path": "Roger Vulliez", "name": { "fr": "Roger Vulliez" }, "detail": { } }
      },
      {
        "_index": "rmn-development-printers",
        "_type": "printer",
        "_id": "3",
        "_score": 1,
        "_source": { "path": "Rémy Petit-Demange", "name": { "fr": "Rémy Petit-Demange" }, "detail": { } }
      }
    ]
  }
}
```

Printers of the many images available through the API.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Printers

This endpoint retrieves all know printers.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/printers`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
