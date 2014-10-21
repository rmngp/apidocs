## Geographies

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/geographies"
```

```json
{
  "took": 1,
  "timed_out": false,
  "hits": {
    "total": 11160,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-geographies",
        "_type": "geography",
        "_id": "5",
        "_score": 1,
        "_source": { "path": "Ankara (représentation)", "name": { "fr": "Ankara (représentation)" }, "detail": { } }
      },
      {
        "_index": "rmn-development-geographies",
        "_type": "geography",
        "_id": "17",
        "_score": 1,
        "_source": {
          "path": "Tepe Sialk (site) (origine)",
          "name": { "fr": "Tepe Sialk (site) (origine)" },
          "detail": {
            "fr": "Site situé dans la banlieue de Kashan ; du Ve au IIIe millénaire av JC, avec une phase plus tardive au IIe av JC"
          }
        }
      },
      {
        "_index": "rmn-development-geographies",
        "_type": "geography",
        "_id": "36",
        "_score": 1,
        "_source": {
          "path": "France (origine)",
          "name": { "fr": "France (origine)" },
          "detail": { "fr": "VA école française. République française" }
        }
      },
      {
        "_index": "rmn-development-geographies",
        "_type": "geography",
        "_id": "50",
        "_score": 1,
        "_source": {
          "path": "Polynésie orientale (origine)",
          "name": { "fr": "Polynésie orientale (origine)" },
          "detail": { }
        }
      }
    ]
  }
}
```

Geographies are places in the world where the works was done or founded.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Geographies

This endpoint retrieves all know geographies.

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
