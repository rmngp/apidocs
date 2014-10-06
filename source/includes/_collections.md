## Collections

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/collections"
```

> The above command returns JSON structured like this:

```json
{
  "took": 1,
  "timed_out": false,
  "hits": {
    "total": 31,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-collections",
        "_type": "collection",
        "_id": "1",
        "_score": 1,
        "_source": { "path": "Peintures", "name": { "en": "Paintings", "fr": "Peintures" }, "detail": { }, "level": 0 }
      },
      {
        "_index": "rmn-development-collections",
        "_type": "collection",
        "_id": "6",
        "_score": 1,
        "_source": {
          "path": "Antiquités grecques, étrusques et romaines",
          "name": { "en": "Greek, Etruscan and Roman antiquities ", "fr": "Antiquités grecques, étrusques et romaines" },
          "detail": { },
          "level": 0
        }
      },
      {
        "_index": "rmn-development-collections",
        "_type": "collection",
        "_id": "13",
        "_score": 1,
        "_source": {
          "path": "Arts de l'Islam",
          "name": { "en": "Islamic art", "fr": "Arts de l'Islam" },
          "detail": { },
          "level": 0
        }
      }
    ]
  }
}
```

Collections are arbitrary groups of works.

Examples:

- Dessins
- Photographies
- Estampes
- Peintures

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy, example: Islamic art/Moroccan art
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Collections


This endpoint retrieves all known collections.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/collections`
