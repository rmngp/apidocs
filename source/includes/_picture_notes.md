## Picture Notes

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/picture_notes"
```

```json
{
  "took": 2,
  "timed_out": false,
  "hits": {
    "total": 6,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-picturenotes",
        "_type": "picture_note",
        "_id": "4",
        "_score": 1,
        "_source": {
          "path": "photographie de promotion",
          "name": { "fr": "photographie de promotion" },
          "detail": { "fr": "Photographie destinée à faire la promotion d'un film" }
        }
      },
      {
        "_index": "rmn-development-picturenotes",
        "_type": "picture_note",
        "_id": "1",
        "_score": 1,
        "_source": {
          "path": "contretype",
          "name": { "en": "duplicate", "fr": "contretype" },
          "detail": {
            "fr": "Obtenu à partir d'une épreuve photographique re-photographiée. Sa matrice n'est pas le négatif original.\r\n"
          }
        }
      }
    ]
  }
}
```

Picture notes are informations on how were made pictures.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Picture Notes

This endpoint retrieves all know collections.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/picture_notes`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
