## Packagings

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/packagings"
```

```json
{
  "took": 11,
  "timed_out": false,
  "hits": {
    "total": 1,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-packagings",
        "_type": "packaging",
        "_id": "1",
        "_score": 1,
        "_source": {
          "path": "sous Diasec",
          "name": { "fr": "sous Diasec" },
          "detail": { "fr": "montage d'une photographie couleur collée en plein sur plexiglass" }
        }
      }
    ]
  }
}
```

Packagings are how work's images are exposed.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Packagings

This endpoint retrieves all know packagings.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/packagings`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
