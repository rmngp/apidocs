## Schools

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/schools"
```

```json
{
  "took": 4,
  "timed_out": false,
  "hits": {
    "total": 61,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-schools",
        "_type": "school",
        "_id": "39",
        "_score": 1,
        "_source": { "path": "Ecole belge", "name": { "fr": "Ecole belge" }, "detail": { } }
      },
      {
        "_index": "rmn-development-schools",
        "_type": "school",
        "_id": "41",
        "_score": 1,
        "_source": {
          "path": "Ecole napolitaine",
          "name": { "fr": "Ecole napolitaine" },
          "detail": { "fr": "VA Naples" }
        }
      }
    ]
  }
}
```

Schools are artistic schools.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Schools

This endpoint retrieves all know schools.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/schools`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
