## Locations

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/locations"
```

```json
{
  "took": 1,
  "timed_out": false,
  "hits": {
    "total": 2,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-locations",
        "_type": "location",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": {
            "ar": "متحف اللوفر",
            "de": "Louvre",
            "en": "musée du Louvre",
            "he": "מוזיאון הלובר"
          },
          "city": {
            "ar": "باريس",
            "en": "Paris",
            "ja": "パリ"
          },
          "detail": {
            "en": "art museum in Paris, France",
            "fr": "musée de Paris, France",
            "ja": "パリにある美術館"
          },
          "country_code": "FR"
        }
      },
      {
        "_index": "rmn-development-locations",
        "_type": "location",
        "_id": "2",
        "_score": 1,
        "_source": { "name": { "fr": "Paris, musée Picasso" }, "city": { }, "country_code": "FR" }
      }
    ]
  }
}
```

Locations are the differents museeum where the works are.

Examples:

- Paris, musée national d'Art moderne - Centre Georges Pompidou
- Paris, musée du Louvre
- Versailles, châteaux de Versailles et de Trianon
- Royaume-Uni, Londres, British Museum

### Definition

#### Attributes

* `name`: name in several languages
* `city`: city name in several languages
* `detail`: detail in several languages
* `country_code`: ISO code of the country

### Get All Locations

This endpoint retrieves all know locations.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/locations`
