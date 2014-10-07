## Photographers

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/photographers"
```

```json
{
  "took": 6,
  "timed_out": false,
  "hits": {
    "total": 1491,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-photographers",
        "_type": "photographer",
        "_id": "11",
        "_score": 1,
        "_source": {
          "name": "Annie Thomasset",
          "city": "Versailles",
          "comments": "photographe, à la restauration de Versailles (reversement suite à l'agression de Franck Raux par un gardien)"
        }
      },
      {
        "_index": "rmn-development-photographers",
        "_type": "photographer",
        "_id": "47",
        "_score": 1,
        "_source": {
          "name": "Christian Larrieu",
          "comments": "Photographe ayant travaillé au sein de la société La Licorne, notamment  pour les départements antiques du Louvre (1998-1999). CM"
        }
      }
    ]
  }
}
```

Authors of the many images available through the API.

### Definition

#### Attributes

* `name`: name in several languages
* `city`: photographer city
* `country_code`: ISO code of the country
* `comments`: details on this photographer

### Get All Photographers

This endpoint retrieves all know photographers.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/photographers`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
