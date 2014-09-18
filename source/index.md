---
title: RMN-GP API Reference

language_tabs:
  - shell

toc_footers:
  - <a href='http://dev.rmn.af83.com/'>Sign Up for a Partner Key</a>
  - <a href='http://doc.dev.rmn.af83.com/console/'>Javascript console</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - works
  - authors
  - thesaurus
  - collections
  - geographies
  - keywords
  - locations
  - packagings
  - periods
  - photographers
  - picture_notes
  - printers
  - schools
  - sources
  - styles
  - techniques
  - users
  - selections

search: true
---


# Introduction

Welcome to the RMN-GP API! You can use our API to access RMN-GP API endpoints,
to retrieve information in the JSON format on various artworks, artists, and
related pictures in our database.

This documentation should help you discover our API, and includes some examples
using the Ruby programming language, on the right-most pane. You can also
explore the API live using our [Javascript console][console].


## Authentication

> To authorize, you will need to include the key in HTTP request headers:

```shell
curl -H "ApiKey: secret" \
     "http://api_endpoint_here"
```

> Make sure to replace `secret` with your API key.

RMN-GP uses API keys to allow access to the API. You can register on our
[partners' site][partners] to request one.

RMN-GP expects the API key to be included in all API requests to the server in a
HTTP header that looks like the following:

`ApiKey: secret`

<aside class="notice">
You must replace `secret` with your personal API key.
</aside>

## Errors

<aside class="notice">Update this part with the relevant error codes from our API.</aside>

The RMN-GP API uses the following error codes:


Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request sucks
401 | Unauthorized -- Your API key is wrong
403 | Forbidden -- The requested resource is not accessible
404 | Not Found -- The specified resource could not be found
405 | Method Not Allowed -- You tried to access a resource with an invalid method
406 | Not Acceptable -- You requested a format that isn't json
410 | Gone -- The requested resource has been removed from our servers
418 | I'm a teapot
429 | Too Many Requests -- You're requesting too many resources! Slow down!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily off-line for maintenance. Please try again later.

# Search


## Pagination

When listing or searching documents, the API always returns paginated results.
The default is to return `10` results per page.

The total number of results matching a Query is indicated by the `total` key,
immediately under the hits key.



<aside class="warning">
Invalid page numbers merely results in an empty results list.
</aside>

> To change page, simply pass a `page` parameter to your request URL.

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/works?page=2"
```

> Sample results, matching a total of 42 documents.

```json
{
  "hits": {
    "total": 42,
    "hits": []
  }
}
```





##  Full text

When you want to search for a work somme spécial work, you can use full text with the q parameter: for exemple if I want to search the work "la joconde" you pass

`"joconde"`

 in the q parameter

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com:80/v1/works.json?q=la%20joconde"
```

> The above command returns JSON structured like this:

```json
{
  "took": 10,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 2,
    "max_score": 1.7724321,
    "hits": [
      {
        "_index": "rmn-dev-works",
        "_type": "work",
        "_id": "1",
        "_score": 1.7724321,
        "_source": {
          "title": "La 'Joconde' d'après Léonard de Vinci",
          "description": "Dessin pour la gravure de la chalcographie : 'La Joconde' d'après Léonard de Vinci. Dessin annexé à la gravure.",
          "date": null,
          "height": 0,
          "width": 0,
          "depth": null,
          "diameter": null,
          "copyright": null,
          "source": {
            "name": "RMN (musée d'Orsay)",
            "code": "RMNO",
            "copyright": "Photo (C) RMN-Grand Palais (musée d'Orsay)"
          },
          "location": {
            "name": "Paris, musée d'Orsay, conservé au musée du Louvre",
            "city": "",
            "country_code": "FR"
          },
          "authors": [
            {
              "name": "Gaillard Claude-Ferdinand",
              "detail": "",
              "birth": {
                "year": "1834"
              },
              "death": {
                "year": "1887"
              }
            },
            {
              "name": "Vinci Léonard de",
              "detail": "",
              "birth": {
                "year": "1452"
              },
              "death": {
                "year": "1519"
              }
            }
          ],
          "periods": [
            {
              "name": "période contemporaine de 1789 à 1914",
              "detail": ""
            },
            {
              "name": "20e siècle",
              "detail": ""
            },
            {
              "name": "19e siècle",
              "detail": ""
            }
          ],
          "techniques": [
            {
              "name": "crayon (dessin)",
              "detail": ""
            }
          ],
          "geographies": [],
          "images": [
            {
              "identifier": "00-031315",
              "path": "http://www.photo.rmn.fr/CorexDoc/RMN/Media/TR1/AENWFJ/00-031315.jpg"
            }
          ],
          "styles": [],
          "schools": [],
          "collections": [
            {
              "name": "Dessins",
              "detail": ""
            }
          ],
          "picture_notes": [],
          "keywords": [
            {
              "name": "bras croisés",
              "detail": ""
            },
            {
              "name": "portrait en buste",
              "detail": ""
            },
            {
              "name": "fond de paysage",
              "detail": ""
            },
            {
              "name": "main",
              "detail": ""
            },
            {
              "name": "La Joconde",
              "detail": "Peinture (Portrait de Monna Lisa) peint par Léonard de Vinci (conservé au musée du Louvre, INV779)"
            },
            {
              "name": "oeuvre d'art (influence)",
              "detail": "TA copie d'oeuvre, pastiche"
            },
            {
              "name": "sourire",
              "detail": ""
            },
            {
              "name": "portrait de femme",
              "detail": ""
            }
          ],
          "packagings": [],
          "printers": []
        }
      },
      {
        "_index": "rmn-dev-works",
        "_type": "work",
        "_id": "2",
        "_score": 1.5156351,
        "_source": {
          "title": "Copie de la Joconde de Leonard de Vinci",
          "description": "",
          "date": null,
          "height": 0,
          "width": 0,
          "depth": 0,
          "diameter": 0,
          "copyright": null,
          "source": {
            "name": "RMN",
            "code": "RMN",
            "copyright": "Photo (C) RMN-Grand Palais"
          },
          "location": {
            "name": "Paris, musée du Louvre",
            "city": "",
            "country_code": "FR"
          },
          "authors": [
            {
              "name": "Vinci Léonard de",
              "detail": "",
              "birth": {
                "year": "1452"
              },
              "death": {
                "year": "1519"
              }
            },
            {
              "name": "Ferrier Gabriel Joseph Marie Augustin",
              "detail": "",
              "birth": {
                "year": "1847"
              },
              "death": {
                "year": "1914"
              }
            }
          ],
          "periods": [
            {
              "name": "période contemporaine de 1789 à 1914",
              "detail": ""
            },
            {
              "name": "20e siècle",
              "detail": ""
            },
            {
              "name": "19e siècle",
              "detail": ""
            }
          ],
          "techniques": [
            {
              "name": "huile sur toile",
              "detail": ""
            }
          ],
          "geographies": [],
          "images": [
            {
              "identifier": "05-529033",
              "path": "http://www.photo.rmn.fr/CorexDoc/RMN/Media/TR1/55NWFJ/05-529033.jpg"
            }
          ],
          "styles": [],
          "schools": [],
          "collections": [
            {
              "name": "Peintures",
              "detail": ""
            }
          ],
          "picture_notes": [],
          "keywords": [
            {
              "name": "La Joconde",
              "detail": "Peinture (Portrait de Monna Lisa) peint par Léonard de Vinci (conservé au musée du Louvre, INV779)"
            },
            {
              "name": "copie d'oeuvre",
              "detail": "VA pastiche, oeuvre d'art (inspiration)"
            }
          ],
          "packagings": [],
          "printers": []
        }
      }
    ]
  },
  "facets": {
    "collections": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "sources": {
      "_type": "terms",
      "missing": 0,
      "total": 2,
      "other": 0,
      "terms": [
        {
          "term": "RMN (musée d'Orsay)",
          "count": 1
        },
        {
          "term": "RMN",
          "count": 1
        }
      ]
    },
    "locations": {
      "_type": "terms",
      "missing": 0,
      "total": 2,
      "other": 0,
      "terms": [
        {
          "term": "Paris, musée du Louvre",
          "count": 1
        },
        {
          "term": "Paris, musée d'Orsay, conservé au musée du Louvre",
          "count": 1
        }
      ]
    },
    "authors": {
      "_type": "terms",
      "missing": 0,
      "total": 4,
      "other": 0,
      "terms": [
        {
          "term": "Vinci Léonard de",
          "count": 2
        },
        {
          "term": "Gaillard Claude-Ferdinand",
          "count": 1
        },
        {
          "term": "Ferrier Gabriel Joseph Marie Augustin",
          "count": 1
        }
      ]
    },
    "periods": {
      "_type": "terms",
      "missing": 0,
      "total": 6,
      "other": 0,
      "terms": [
        {
          "term": "période contemporaine de 1789 à 1914",
          "count": 2
        },
        {
          "term": "20e siècle",
          "count": 2
        },
        {
          "term": "19e siècle",
          "count": 2
        }
      ]
    },
    "techniques": {
      "_type": "terms",
      "missing": 0,
      "total": 2,
      "other": 0,
      "terms": [
        {
          "term": "huile sur toile",
          "count": 1
        },
        {
          "term": "crayon (dessin)",
          "count": 1
        }
      ]
    },
    "styles": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "schools": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "picture_notes": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "packagings": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "printers": {
      "_type": "terms",
      "missing": 2,
      "total": 0,
      "other": 0,
      "terms": []
    }
  }
}
```

There is two part in the reasult :
 
1. Hits

This is where you can find the number of result, and the list of the result

2. Facets

This is where you can find the facets associated to the research you did


##  Multi-criteria research

The full text research is good but sometime you want something more precise when you do a research in an API :  it's possible.

For exemple, you want to search "la joconde" but you only want to have result that are drawed :  you can pass 

 `"joconde AND techniques=dessin" `

in the q parameter.

You can do that with every terms of the works like periods, keywords, authors, ...

You can also use the operand OR

For exemple you can use

 `"joconde OR collection=estampes" `


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com:80/v1/works.json?q=la%20joconde%20AND%20techniques%3Ddessin"
```

> The above command returns JSON structured like this:

```json

{
  "took": 3,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 1,
    "max_score": 1.4579737,
    "hits": [
      {
        "_index": "rmn-dev-works",
        "_type": "work",
        "_id": "1",
        "_score": 1.4579737,
        "_source": {
          "title": "La 'Joconde' d'après Léonard de Vinci",
          "description": "Dessin pour la gravure de la chalcographie : 'La Joconde' d'après Léonard de Vinci. Dessin annexé à la gravure.",
          "date": null,
          "height": 0,
          "width": 0,
          "depth": null,
          "diameter": null,
          "copyright": null,
          "source": {
            "name": "RMN (musée d'Orsay)",
            "code": "RMNO",
            "copyright": "Photo (C) RMN-Grand Palais (musée d'Orsay)"
          },
          "location": {
            "name": "Paris, musée d'Orsay, conservé au musée du Louvre",
            "city": "",
            "country_code": "FR"
          },
          "authors": [
            {
              "name": "Gaillard Claude-Ferdinand",
              "detail": "",
              "birth": {
                "year": "1834"
              },
              "death": {
                "year": "1887"
              }
            },
            {
              "name": "Vinci Léonard de",
              "detail": "",
              "birth": {
                "year": "1452"
              },
              "death": {
                "year": "1519"
              }
            }
          ],
          "periods": [
            {
              "name": "période contemporaine de 1789 à 1914",
              "detail": ""
            },
            {
              "name": "20e siècle",
              "detail": ""
            },
            {
              "name": "19e siècle",
              "detail": ""
            }
          ],
          "techniques": [
            {
              "name": "crayon (dessin)",
              "detail": ""
            }
          ],
          "geographies": [],
          "images": [
            {
              "identifier": "00-031315",
              "path": "http://www.photo.rmn.fr/CorexDoc/RMN/Media/TR1/AENWFJ/00-031315.jpg"
            }
          ],
          "styles": [],
          "schools": [],
          "collections": [
            {
              "name": "Dessins",
              "detail": ""
            }
          ],
          "picture_notes": [],
          "keywords": [
            {
              "name": "bras croisés",
              "detail": ""
            },
            {
              "name": "portrait en buste",
              "detail": ""
            },
            {
              "name": "fond de paysage",
              "detail": ""
            },
            {
              "name": "main",
              "detail": ""
            },
            {
              "name": "La Joconde",
              "detail": "Peinture (Portrait de Monna Lisa) peint par Léonard de Vinci (conservé au musée du Louvre, INV779)"
            },
            {
              "name": "oeuvre d'art (influence)",
              "detail": "TA copie d'oeuvre, pastiche"
            },
            {
              "name": "sourire",
              "detail": ""
            },
            {
              "name": "portrait de femme",
              "detail": ""
            }
          ],
          "packagings": [],
          "printers": []
        }
      }
    ]
  },
  "facets": {
    "collections": {
      "_type": "terms",
      "missing": 1,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "sources": {
      "_type": "terms",
      "missing": 0,
      "total": 1,
      "other": 0,
      "terms": [
        {
          "term": "RMN (musée d'Orsay)",
          "count": 1
        }
      ]
    },
    "locations": {
      "_type": "terms",
      "missing": 0,
      "total": 1,
      "other": 0,
      "terms": [
        {
          "term": "Paris, musée d'Orsay, conservé au musée du Louvre",
          "count": 1
        }
      ]
    },
    "authors": {
      "_type": "terms",
      "missing": 0,
      "total": 2,
      "other": 0,
      "terms": [
        {
          "term": "Vinci Léonard de",
          "count": 1
        },
        {
          "term": "Gaillard Claude-Ferdinand",
          "count": 1
        }
      ]
    },
    "periods": {
      "_type": "terms",
      "missing": 0,
      "total": 3,
      "other": 0,
      "terms": [
        {
          "term": "période contemporaine de 1789 à 1914",
          "count": 1
        },
        {
          "term": "20e siècle",
          "count": 1
        },
        {
          "term": "19e siècle",
          "count": 1
        }
      ]
    },
    "techniques": {
      "_type": "terms",
      "missing": 0,
      "total": 1,
      "other": 0,
      "terms": [
        {
          "term": "crayon (dessin)",
          "count": 1
        }
      ]
    },
    "styles": {
      "_type": "terms",
      "missing": 1,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "schools": {
      "_type": "terms",
      "missing": 1,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "picture_notes": {
      "_type": "terms",
      "missing": 1,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "packagings": {
      "_type": "terms",
      "missing": 1,
      "total": 0,
      "other": 0,
      "terms": []
    },
    "printers": {
      "_type": "terms",
      "missing": 1,
      "total": 0,
      "other": 0,
      "terms": []
    }
  }
}

```




[console]: http://doc.dev.rmn.af83.com/console/
[partners]: http://dev.rmn.af83.com/partners
