# Works

## Definition

### Attributes

* `id`: unique identifier
* `popularity`: popularity based on associated images sales
* `title`: title in several languages
* `detail`: detail in several languages
* `date`: date of creation, structured like this:
  * `display`: Text representation, example: 15th century, renaissance, …
  * `estimated_day`: Estimated date
  * `estimation_spread`: Precision of the estimated date
* `copyright`: copyright details
* `height`: Height in millimeters
* `width`: Width in millimeters
* `depth`: Depth in millimeters
* `diameter`: Diameter in millimeters
* `images`: Images availables for this work, structured like this:
  * `identifier`: RMN identifier
  * `path`: Url
  * `photographer`: Photographer who has taken this picture
  * `source`: Source of this image, can be museum, institution, etc…

### Associations

* `source`: Museum or institution where this work comes from. See [Thesaurus/Sources](#sources)
* `location`: Location where is located this work. See [Thesaurus/Locations](#locations)
* `authors`: Authors of this work. See [Thesaurus/Authors](#authors)
* `afters`: Authors that inspired this work. See [Thesaurus/Authors](#authors)
* `authorship_details`: Authors who have been awarded this work. See [Thesaurus/Authors](#authors)
* `collections`: Collections in which this work appears. See [Thesaurus/Collections](#collections)
* `geographies`: Places related to this work. See [Thesaurus/Geographies](#geographies)
* `keywords`: Keywords related to this work. See [Thesaurus/Keywords](#keywords)
* `periods`: Period in which this work was created. Creation .See [Thesaurus/Periods](#periods)
* `styles`: Artistic styles related to tis work. See [Thesaurus/Styles](#styles)
* `techniques`: Techniques used to create this work. See [Thesaurus/Techniques](#techniques)
* `schools`: Artistic school related to this work. See [Thesaurus/Schools](#schools)
* `picture_notes`: Kind of cliche, only for photographies. See [Thesaurus/PictureNotes](#picture-notes)


## Get All Works

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works"
```

> The above command returns JSON structured like this:

```json
{
  "took": 2,
  "timed_out": false,
  "hits": {
    "total": 2,
    "max_score": null,
    "hits": [
      {
        "_index": "rmn-development-works-admin",
        "_type": "work",
        "_id": "2",
        "_score": null,
        "_source": {
          "id": 2,
          "popularity": 0,
          "authors": [
            {
              "name": { "en": "Picasso Pablo", "fr": "Pablo Picasso" },
              "detail": { "en": "painter", "fr": "peintre" },
              "birth": { "display": "1881", "estimated_day": "1881-07-02", "estimation_spread": "364" },
              "death": { "display": "1973", "estimated_day": "1973-07-02", "estimation_spread": "364" },
              "birth_place": { "display": "Málaga", "latitude": "36.716666666667", "longitude": "-4.4166666666667" },
              "death_place": { "display": "Mougins", "latitude": "43.6", "longitude": "7" },
              "other_names": [ ],
              "relation_type": "author"
            }
          ],
          "title": { "fr": "Le déjeuner sur l'herbe (d'après Manet)" },
          "detail": { "fr": "13 mars 1962" },
          "height": 529,
          "width": 640,
          "source": { "name": "RMN", "code": "RMN", "copyright": "Photo (C) RMN-Grand Palais" },
          "location": { "name": { "fr": "Paris, musée Picasso" }, "city": { }, "country_code": "FR" },
          "images": [
            {
              "identifier": "98-022872",
              "path": "http://www.photo.rmn.fr/CorexDoc/RMN/Media/TR1/HT67MF/98-022872.jpg",
              "photographer": { "name": "Michèle Bellot" },
              "source": { "name": "RMN", "code": "RMN", "copyright": "Photo (C) RMN-Grand Palais" }
            }
          ],
          "afters": [
            {
              "name": { "en": "Manet Edouard", "fr": "Edouard Manet" },
              "detail": { },
              "birth": { "display": "1832", "estimated_day": "1832-07-01", "estimation_spread": "365" },
              "death": { "display": "1883", "estimated_day": "1883-07-02", "estimation_spread": "364" }
            }
          ],
          "authorship_details": [ ],
          "collections": [{ "path": "Estampes", "name": { "en": "Prints", "fr": "Estampes" }, "detail": { } }],
          "geographies": [ ],
          "keywords": [
            {
              "path": "partie de campagne",
              "name": { "en": "country outing", "fr": "partie de campagne" },
              "detail": { }
            },
            {
              "path": "Le Déjeuner sur l'herbe",
              "name": { "fr": "Le Déjeuner sur l'herbe" },
              "detail": { "fr": "Oeuvre peinte par Edouard Manet en 1863" }
            }
          ],
          "packagings": [ ],
          "periods": [
            {
              "path": "période contemporaine de 1914 à nos jours",
              "name": { "en": "contemporary period of 1914 in our days", "fr": "période contemporaine de 1914 à nos jours" },
              "detail": { }
            },
            { "path": "20e siècle", "name": { "en": "20th century", "fr": "20e siècle" }, "detail": { } }
          ],
          "picture_notes": [ ],
          "printers": [ ],
          "schools": [ ],
          "styles": [ ],
          "techniques": [ ]
        },
        "sort": [0]
      },
      {
        "_index": "rmn-development-works-admin",
        "_type": "work",
        "_id": "1",
        "_score": null,
        "_source": {
          "id": 1,
          "popularity": 0,
          "authors": [
            {
              "name": { "en": "Leonardo da Vinci", "fr": "Léonard de Vinci" },
              "detail": { "en": "painter, draughtsman", "fr": "peintre, dessinateur" },
              "birth": { "display": "1452", "estimated_day": "1452-07-01", "estimation_spread": "365" },
              "death": { "display": "1519", "estimated_day": "1519-07-02", "estimation_spread": "364" },
              "birth_place": { "display": "Anchiano", "latitude": "43.799166666667", "longitude": "10.938133333333" },
              "death_place": { "display": "Château du Clos Lucé", "latitude": "47.41", "longitude": "0.99138888888889" },
              "relation_type": "author"
            }
          ],
          "title": {
            "de": "Mona Lisa",
            "el": "Μόνα Λίζα",
            "en": "Mona Lisa",
            "eo": "La Gioconda",
            "es": "Mona Lisa",
            "eu": "Gioconda",
            "fa": "مونالیزا",
            "fi": "Mona Lisa",
            "fr": "La Joconde, portrait de Monna Lisa",
            "he": "מונה ליזה",
            "hy": "Մոնա Լիզա",
            "ja": "モナ・リザ",
            "ka": "მონა ლიზა",
            "ru": "Мона Лиза",
            "zh": "蒙娜丽莎"
          },
          "detail": {
            "de": "Ölgemälde von Leonardo da Vinci",
            "en": "painting by Leonardo da Vinci",
            "es": "cuadro de Leonardo da Vinci",
            "ja": "レオナルド・ダ・ヴィンチによる絵画作品",
            "zh": "列奥纳多·达·芬奇所繪的麗莎·喬宮多的肖像画。"
          },
          "date": {
            "display": "1504-07-01T00:00:00+00:00",
            "estimated_day": "1504-07-01T00:00:00+00:00",
            "estimation_spread": "1095"
          },
          "height": 770,
          "width": 530,
          "source": {
            "name": "RMN (musée du Louvre)",
            "code": "RMNL",
            "copyright": "Photo (C) RMN-Grand Palais (musée du Louvre)"
          },
          "location": { "name": { "fr": "Paris, musée du Louvre" }, "city": { }, "country_code": "FR" },
          "images": [
            {
              "identifier": "11-564767",
              "path": "http://www.photo.rmn.fr/CorexDoc/RMN/Media/TR1/6V3I0G/11-564767.jpg",
              "photographer": { "name": "Michel Urtado", "comments": "En CDI depuis 2011 environ" },
              "source": {
                "name": "RMN (musée du Louvre)",
                "code": "RMNL",
                "copyright": "Photo (C) RMN-Grand Palais (musée du Louvre)"
              }
            }          ],
          "afters": [ ],
          "authorship_details": [ ],
          "collections": [{ "path": "Peintures", "name": { "en": "Paintings", "fr": "Peintures" }, "detail": { } }],
          "geographies": [ ],
          "keywords": [
            {
              "path": "costume (époque renaissance)",
              "name": { "en": "Renaissance costume", "fr": "costume (époque renaissance)" },
              "detail": { "fr": "De 1453 à 1610 (mort d'henri IV)" }
            },
            {
              "path": "portrait de femme",
              "name": { "en": "portrait of a woman", "fr": "portrait de femme" },
              "detail": { }
            },
            {
              "path": "Renaissance italienne (art)",
              "name": { "en": "Italian Renaissance", "fr": "Renaissance italienne (art)" },
              "detail": { "fr": "VA arts décoratifs (Renaissance). VA Manièrisme (art)" }
            }
          ],
          "packagings": [ ],
          "periods": [
            { "path": "15e siècle", "name": { "en": "15th century", "fr": "15e siècle" }, "detail": { } },
            {
              "path": "Renaissance (période)",
              "name": { "fr": "Renaissance (période)" },
              "detail": { "fr": "Fin du Moyen Age à la fin du 16e siècle" }
            }
          ],
          "picture_notes": [ ],
          "printers": [ ],
          "schools": [ ],
          "styles": [ ],
          "techniques": [
            { "path": "huile sur bois", "name": { "en": "oil on wood", "fr": "huile sur bois" }, "detail": { } }
          ]
        },
        "sort": [0]
      }
    ]
  },
  "aggregations": {
    "periods": {
      "buckets": [
        {
          "key": "15e siècle",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bperiods%5D=15e+si%C3%A8cle"
        },
        {
          "key": "20e siècle",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bperiods%5D=20e+si%C3%A8cle"
        },
        {
          "key": "Renaissance (période)",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bperiods%5D=Renaissance+%28p%C3%A9riode%29"
        },
        {
          "key": "période contemporaine de 1914 à nos jours",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bperiods%5D=p%C3%A9riode+contemporaine+de+1914+%C3%A0+nos+jours"
        }
      ]
    },
    "authors": {
      "buckets": [
        {
          "key": "Léonard de Vinci",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bauthors%5D=L%C3%A9onard+de+Vinci"
        },
        {
          "key": "Pablo Picasso",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bauthors%5D=Pablo+Picasso"
        }
      ]
    },
    "geographies": { "buckets": [ ] },
    "schools": { "buckets": [ ] },
    "locations": {
      "buckets": [
        {
          "key": "Paris, musée Picasso",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Blocations%5D=Paris%2C+mus%C3%A9e+Picasso"
        },
        {
          "key": "Paris, musée du Louvre",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Blocations%5D=Paris%2C+mus%C3%A9e+du+Louvre"
        }
      ]
    },
    "picture_notes": { "buckets": [ ] },
    "styles": { "buckets": [ ] },
    "printers": { "buckets": [ ] },
    "packagings": { "buckets": [ ] },
    "techniques": {
      "buckets": [
        {
          "key": "huile sur bois",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Btechniques%5D=huile+sur+bois"
        }
      ]
    },
    "sources": {
      "buckets": [
        {
          "key": "RMN",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bsources%5D=RMN"
        },
        {
          "key": "RMN (musée du Louvre)",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bsources%5D=RMN+%28mus%C3%A9e+du+Louvre%29"
        }
      ]
    },
    "collections": {
      "buckets": [
        {
          "key": "Estampes",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bcollections%5D=Estampes"
        },
        {
          "key": "Peintures",
          "doc_count": 1,
          "link": "http://api.rmn.dev/v1/works?api_key=demo&facets%5Bcollections%5D=Peintures"
        }
      ]
    }
  }
}
```

This endpoint retrieves all artworks.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/works`

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
facets[authors]        |          | Filter on a author facet
facets[periods]        |          | Filter on a period facet
facets[techniques]     |          | Filter on a technique facet
facets[styles]         |          | Filter on a style facet
facets[schools]        |          | Filter on a schools facet
facets[picture_notes]  |          | Filter on a picture_note facet
facets[packagings]     |          | Filter on a packaging facet
facets[geographies]    |          | Filter on a geography facet
facets[printers]       |          | Filter on a printer facet


For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>
