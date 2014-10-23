---
title: RMN-GP API Reference

language_tabs:
  - shell

toc_footers:
  - <a href='http://dev.rmn.af83.com/'>Sign Up for a Partner Key</a>
  - <a href='/console/'>Javascript console</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - works
  - authors
  - thesaurus
  - collections
  - geographies
  - keywords
  - locations
  - periods
  - photographers
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
and retrieve information in the JSON format on various artworks, artists, and
related pictures in our database.

This documentation should help you discover our API, and includes some
examples using curl, on the right-most pane. You can also explore the API live
using our [Javascript console][console].

## Versioning

All API calls must specify which API version to use. This version identifier
ensures that API will not introduce major changes for the given version.

You can get the last API version by requesting the root API endpoint:
http://api.dev.rmn.af83.com/

Then prefix all paths with this version number, for example:
`http://api.dev.rmn.af83.com/v1/api_endpoint_here`.

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com"
```

```json
{
  "versions": [
    {
      "status": "current",
      "links": [{ "href": "http://api.dev.rmn.af83.com/v1/swagger_doc", "templated": false, "rel": "swagger" }],
      "description": "Current version of the api",
      "value": "v1"
    }
  ]
}
```

## Authentication

> To be authorized, you will need to include the key in HTTP request headers:

```shell
curl -H "ApiKey: demo" \
     "http://api_endpoint_here"
```

> Make sure to replace `secret` with your API key.

RMN-GP uses API keys to allow access to the API. You can register on our
[partners' site][partners] to request one.

RMN-GP expects the API key to be included in all API requests to the server in a
HTTP header that looks like the following:

`ApiKey: demo`

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

## Response

The response consists of 2 sections:

### Hits

This section contains the results of your search. Check the [Elastic Search
documentation]
(http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/empty-search.html#_literal_hits_literal)
for more informations.

In short, this section is structured like this:

* `total`: Total hits of your search
* `max_score`:  Maximum score of a hit in your search
* `hits`: The results

### Facets

This section contains the facets related to your search.
Each aggregation is defined by a key, and contains many buckets. Buckets are
the available facets for the current search.

Facet structure looks like this:

* `buckets`
  * `key`: Facet name
  * `doc_count`: Total hits for this facet
  * `link`: The api url to filter your current search on this facet

## Pagination

When listing or searching documents, the API always returns paginated results.
The default is to return `10` results per page.

The total number of results matching a Query is indicated by the `total` key,
immediately under the `hits` key.

To get another results page, just add these parameters:

* `page`: Results page offset
* `per`: Number of results per page


<aside class="warning">
Invalid page numbers merely results in an empty results list.
</aside>

> To change page, simply pass a `page` parameter to your request URL.

```shell
curl -H "ApiKey: demo" \
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

## Full text

When you want to search for documents, you can perform a full text using the `q`
parameter.

This parameter uses the
[Query String Query]
(http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html)
format of Elastic search API.

Here are some examples.

If you want to search on all fields, just provide a string: `la joconde`.

```shell
curl -H "ApiKey: demo" \
     'http://api.dev.rmn.af83.com/v1/works.json?q=la%20joconde'

curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works.json?q=title:"la%20joconde""
```

Alternatively, you can select a field to search for, if you want to search only
in the title, use `title:"la joconde"`.


##  Multi-criteria research

The full text research is good but sometime you want something more precise when
you do a research in an API : it's possible.

For exemple, you want to search `la joconde` but you only want to have result
that are drawed : you can pass `"joconde AND techniques.name=dessin"` in the `q`
parameter.

You can do that with every terms of the works like periods, keywords, authors,…

You can also use the operand `OR` For exemple you can use
`"joconde OR collection=estampes"`


```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works.json?q=la%20joconde%20AND%20techniques%3Ddessin"
```


##  Filtering facets

On works, authors and selections endpoints, facets are availables.

To filter on a facet, just add a `facets[facet_name]=facet_value` params to the
query string.

By default, only 10 items per facet are returned by the api. If you want more,
use the facet pagination.

* `facet_page`: Facet page offset
* `facet_per`: Number of facets to return


> For example, we have the following facets returned by the works endpoint:

```json
  {
    "sources": {
      "buckets": [
        {
          "key": "INHA",
          "doc_count": 5977,
          "link": "http://api.dev.rmn.af83.com/v1/works?api_key=demo&facets%5Bsources%5D=INHA"
        },
        {
          "key": "BPK",
          "doc_count": 2,
          "link": "http://api.dev.rmn.af83.com/v1/works?api_key=demo&facets%5Bsources%5D=BPK"
        },
        {
          "key": "NATIONAL GALLERY OF LONDON",
          "doc_count": 1,
          "link": "http://api.dev.rmn.af83.com/v1/works?api_key=demo&facets%5Bsources%5D=NATIONAL+GALLERY+OF+LONDON"
        },
        {
          "key": "RMN",
          "doc_count": 1,
          "link": "http://api.dev.rmn.af83.com/v1/works?api_key=demo&facets%5Bsources%5D=RMN"
        },
        {
          "key": "RMN (musée du Louvre)",
          "doc_count": 1,
          "link": "http://api.dev.rmn.af83.com/v1/works?api_key=demo&facets%5Bsources%5D=RMN+%28mus%C3%A9e+du+Louvre%29"
        }
      ]
    }
  }
```

> To filter works on the "RMN" source, add this params to the query string:
`facets[sources]=RMN`


[console]: /console/
[partners]: http://dev.rmn.af83.com/partner
