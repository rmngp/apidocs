## Sources

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/sources"
```

```json
{
  "took": 2,
  "timed_out": false,
  "hits": {
    "total": 98,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-sources",
        "_type": "source",
        "_id": "27",
        "_score": 1,
        "_source": {
          "name": "RMN (Institut)",
          "code": "RMNI",
          "copyright": "Avant toute utilisation, une autorisation doit expressément être demandée à la Bibliothèque de l’Institut de France : 23 quai de Conti, 75006 Paris, bibliotheque@institut-de-france.fr. Les droits d’utilisation perçus par la Bibliothèque de l’Institut sont indépendants des droits de reproduction dus à l’Agence photographique de la RMN-Grand Palais.\r\nBefore using this picture, you have to apply for authorization at Institut de France : 23 quai de Conti, F-75006 Paris, bibliotheque@institut-de-france.fr. The reproduction fees of the Institut de France are in supplement to those of Agence photographique de la RMN-Grand Palais.\r\nPhoto (C) RMN-Grand Palais (Institut de France)"
        }
      },
      {
        "_index": "rmn-development-sources",
        "_type": "source",
        "_id": "41",
        "_score": 1,
        "_source": {
          "name": "RMN (Sèvres, Cité de la céramique)",
          "code": "RMNS",
          "copyright": "Photo (C) RMN-Grand Palais (Sèvres, Cité de la céramique)"
        }
      },
      {
        "_index": "rmn-development-sources",
        "_type": "source",
        "_id": "53",
        "_score": 1,
        "_source": {
          "name": "RMN (Limoges, Cité de la céramique)",
          "code": "RMNAD",
          "copyright": "Photo (C) RMN-Grand Palais (Limoges, Cité de la céramique)"
        }
      }
    ]
  }
}
```

Sources are the museum where the works come from : you can also find the copyright in that part.

### Definition

#### Attributes

* `name`: name in several languages
* `code`: source identifier
* `copyright`: copyright to apply for works of this source

### Get All Sources

This endpoint retrieves all know sources.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/sources`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
