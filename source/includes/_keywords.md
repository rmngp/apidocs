## Keywords

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/keywords"
```

```json
{
  "took": 1,
  "timed_out": false,
  "hits": {
    "total": 9,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-keywords",
        "_type": "keyword",
        "_id": "7",
        "_score": 1,
        "_source": {
          "path": "fond de paysage",
          "name": { "en": "landscape background", "fr": "fond de paysage" },
          "detail": { }
        }
      },
      {
        "_index": "rmn-development-keywords",
        "_type": "keyword",
        "_id": "6",
        "_score": 1,
        "_source": {
          "path": "Renaissance italienne (art)",
          "name": { "en": "Italian Renaissance", "fr": "Renaissance italienne (art)" },
          "detail": { "fr": "VA arts décoratifs (Renaissance). VA Manièrisme (art)" }
        }
      },
      {
        "_index": "rmn-development-keywords",
        "_type": "keyword",
        "_id": "5",
        "_score": 1,
        "_source": {
          "path": "portrait de femme",
          "name": { "en": "portrait of a woman", "fr": "portrait de femme" },
          "detail": { }
        }
      }
    ]
  }
}
```

Keywords contain all the keyword that has'nt a special type.

Examples:

- portrait d'homme
- étude de figure
- carnet de croquis
- nu féminin

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy, example: Femme/nu féminin
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All keywords

This endpoint retrieves all keywords.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/keywords`
