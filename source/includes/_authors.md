# Authors

List all authors present in the API.

## Definition

### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `other_names`: other names used to describe this author
* `birth`: date of birth, structured like this:
  * `display`: Text representation, example: 15th century, renaissance, …
  * `estimated_day`: Estimated date
  * `estimation_spread`: Precision of the estimated date
* `death`: date of death, structured like this:
  * `display`: Text representation, example: 15th century, renaissance, …
  * `estimated_day`: Estimated date
  * `estimation_spread`: Precision of the estimated date
* `birth_place`: place of birth, structured like this:
  * `display`: Text representation, example: Málaga, Paris…
  * `latitude`: Latitude
  * `longitude`: Longitude
* `death_place`: place of death, structured like this:
  * `display`: Text representation, example: Málaga, Paris…
  * `latitude`: Latitude
  * `longitude`: Longitude

### Associations

* `data_inferred_from_works`: Represents data related to author's works
  * `collections`: Collections in which author's works appears. See [Thesaurus/Collections](#collections)
  * `sources`: Museum or institution where author's works come from. See [Thesaurus/Sources](#sources)
  * `locations`: Location where are located author's works. See [Thesaurus/Locations](#locations)
  * `techniques`: Techniques used to create author's works. See [Thesaurus/Techniques](#techniques)
  * `periods`: Period in which author's work were created. Creation .See [Thesaurus/Periods](#periods)
  * `geographies`: Places related to author's work. See [Thesaurus/Geographies](#geographies)


## Get All Authors


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/authors"
```

> The above command returns JSON structured like this:

```json
{
  "took": 7,
  "timed_out": false,
  "hits": {
    "total": 3,
    "max_score": 1,
    "hits": [
      {
        "_index": "rmn-development-authors",
        "_type": "author",
        "_id": "2",
        "_score": 1,
        "_source": {
          "name": { "en": "Manet Edouard", "fr": "Edouard Manet" },
          "detail": { },
          "birth": { "display": "1832", "estimated_day": "1832-07-01", "estimation_spread": "365" },
          "death": { "display": "1883", "estimated_day": "1883-07-02", "estimation_spread": "364" },
          "data_inferred_from_works": {
            "collections": [{ "path": "Estampes", "name": { "en": "Prints", "fr": "Estampes" }, "detail": { } }],
            "sources": [{ "name": "RMN", "code": "RMN", "copyright": "Photo (C) RMN-Grand Palais" }],
            "locations": [{ "name": { "fr": "Paris, musée Picasso" }, "city": { }, "country_code": "FR" }],
            "techniques": [ ],
            "periods": [
              {
                "path": "période contemporaine de 1914 à nos jours",
                "name": { "en": "contemporary period of 1914 in our days", "fr": "période contemporaine de 1914 à nos jours" },
                "detail": { }
              },
              { "path": "20e siècle", "name": { "en": "20th century", "fr": "20e siècle" }, "detail": { } }
            ],
            "geographies": [ ]
          }
        }
      },
      {
        "_index": "rmn-development-authors",
        "_type": "author",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": {
            "ar": "ليوناردو دا فينشي",
            "be": "Леанарда да Вінчы",
            "en": "Leonardo da Vinci",
            "fr": "Léonard de Vinci",
            "he": "לאונרדו דה וינצ'י"
          },
          "detail": {
            "en": "painter, draughtsman",
            "fa": "از برجسته ترین هنرمندان و دانشمندان جهان",
            "fr": "peintre, dessinateur"
          },
          "birth": {
            "display": "1452-04-15T00:00:00+00:00",
            "estimated_day": "1452-04-15T00:00:00+00:00",
            "estimation_spread": "1"
          },
          "death": {
            "display": "1519-05-02T00:00:00+00:00",
            "estimated_day": "1519-05-02T00:00:00+00:00",
            "estimation_spread": "1"
          },
          "birth_place": { "display": "Anchiano", "latitude": "43.799166666667", "longitude": "10.938133333333" },
          "death_place": { "display": "Château du Clos Lucé", "latitude": "47.41", "longitude": "0.99138888888889" },
          "other_names": [ ],
          "data_inferred_from_works": {
            "collections": [{ "path": "Peintures", "name": { "en": "Paintings", "fr": "Peintures" }, "detail": { } }],
            "sources": [
              {
                "name": "RMN (musée du Louvre)",
                "code": "RMNL",
                "copyright": "Photo (C) RMN-Grand Palais (musée du Louvre)"
              }
            ],
            "locations": [{ "name": { "fr": "Paris, musée du Louvre" }, "city": { }, "country_code": "FR" }],
            "techniques": [
              { "path": "huile sur bois", "name": { "en": "oil on wood", "fr": "huile sur bois" }, "detail": { } }
            ],
            "periods": [
              {
                "path": "Renaissance (période)",
                "name": { "fr": "Renaissance (période)" },
                "detail": { "fr": "Fin du Moyen Age à la fin du 16e siècle" }
              },
              { "path": "15e siècle", "name": { "en": "15th century", "fr": "15e siècle" }, "detail": { } }
            ],
            "geographies": [ ]
          }
        }
      },
      {
        "_index": "rmn-development-authors",
        "_type": "author",
        "_id": "3",
        "_score": 1,
        "_source": {
          "name": {
            "en": "Picasso Pablo",
            "he": "פבלו פיקאסו"
          },
          "detail": {
            "en": "painter",
            "fr": "peintre"
          },
          "birth": {
            "display": "1881-10-25T00:00:00+00:00",
            "estimated_day": "1881-10-25T00:00:00+00:00",
            "estimation_spread": "1"
          },
          "death": {
            "display": "1973-04-08T00:00:00+00:00",
            "estimated_day": "1973-04-08T00:00:00+00:00",
            "estimation_spread": "1"
          },
          "birth_place": { "display": "Málaga", "latitude": "36.716666666667", "longitude": "-4.4166666666667" },
          "death_place": { "display": "Mougins", "latitude": "43.6", "longitude": "7" },
          "other_names": [ ],
          "data_inferred_from_works": {
            "collections": [{ "path": "Estampes", "name": { "en": "Prints", "fr": "Estampes" }, "detail": { } }],
            "sources": [{ "name": "RMN", "code": "RMN", "copyright": "Photo (C) RMN-Grand Palais" }],
            "locations": [{ "name": { "fr": "Paris, musée Picasso" }, "city": { }, "country_code": "FR" }],
            "techniques": [ ],
            "periods": [
              {
                "path": "période contemporaine de 1914 à nos jours",
                "name": { "en": "contemporary period of 1914 in our days", "fr": "période contemporaine de 1914 à nos jours" },
                "detail": { }
              },
              { "path": "20e siècle", "name": { "en": "20th century", "fr": "20e siècle" }, "detail": { } }
            ],
            "geographies": [ ]
          }
        }
      }
    ]
  },
  "aggregations": {
    "periods": {
      "buckets": [
        {
          "key": "20e siècle",
          "doc_count": 2,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Bperiods%5D=20e+si%C3%A8cle"
        },
        {
          "key": "période contemporaine de 1914 à nos jours",
          "doc_count": 2,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Bperiods%5D=p%C3%A9riode+contemporaine+de+1914+%C3%A0+nos+jours"
        },
        {
          "key": "15e siècle",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Bperiods%5D=15e+si%C3%A8cle"
        },
        {
          "key": "Renaissance (période)",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Bperiods%5D=Renaissance+%28p%C3%A9riode%29"
        }
      ]
    },
    "geographies": { "buckets": [ ] },
    "locations": {
      "buckets": [
        {
          "key": "Paris, musée Picasso",
          "doc_count": 2,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Blocations%5D=Paris%2C+mus%C3%A9e+Picasso"
        },
        {
          "key": "Paris, musée du Louvre",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Blocations%5D=Paris%2C+mus%C3%A9e+du+Louvre"
        }
      ]
    },
    "techniques": {
      "buckets": [
        {
          "key": "huile sur bois",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Btechniques%5D=huile+sur+bois"
        }
      ]
    },
    "sources": {
      "buckets": [
        {
          "key": "RMN",
          "doc_count": 2,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Bsources%5D=RMN"
        },
        {
          "key": "RMN (musée du Louvre)",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/authors?api_key=secret&facets%5Bsources%5D=RMN+%28mus%C3%A9e+du+Louvre%29"
        }
      ]
    },
    "collections": { "buckets": [ ] }
  }
}
```

This endpoint retrieves all know authors.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/authors`

### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
sort                   |          | Field used to sort results
order                  | asc      | Sorting order, desc or asc.
page                   | 1        | Results page offset
per                    | 10       | Number of results per page
facet_page             | 1        | Facet page offset
facet_per              | 10       | Number of facets per page
facets[collections]    |          | Filter on a collection facet
facets[sources]        |          | Filter on a source facet
facets[locations]      |          | Filter on a location facet
facets[periods]        |          | Filter on a period facet
facets[techniques]     |          | Filter on a technique facet
facets[geographies]    |          | Filter on a geography facet


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>
