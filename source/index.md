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
  - autocomplete

search: true
---


# Introduction

Welcome to the RMN-GP API documentation! You will soon be able to use our API to access RMN-GP API endpoints,
and retrieve information in the JSON format on various artworks, artists and
related pictures in our database.

This documentation should help you discover our API, and includes some
examples using curl, on the right-most pane. You can also explore the API live
using our [Javascript console][console].

## Versioning

All API calls must specify which API version to use. This version identifier
ensures that API will not introduce major changes for the given version.

You can get the last API version by requesting the root API endpoint:
http://api.dev.rmn.af83.com/art

Then prefix all paths with this version number, for example:
`http://api.dev.rmn.af83.com/v1/api_endpoint_here`.

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/" data-collapsed="false">
</pre>

## Authentication

> To be authorized, you will need to include the key in HTTP request headers:

```shell
curl -H "ApiKey: demo" \
     "http://api_endpoint_here"
```

> Make sure to replace `demo` with your API key.

RMN-GP uses API keys to allow access to the API. You will soon be able to request one on our partners' site.

RMN-GP expects the API key to be included in all API requests to the server in a
HTTP header that looks like the following:

`ApiKey: demo`

<aside class="notice">
You must replace `demo` with your personal API key.
</aside>

## Errors

<aside class="notice">Update this part with the relevant error codes from our API.</aside>

The RMN-GP API uses the following error codes:


Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request is wrong
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

## Images

Some endpoints return images, here the structure:

* `id`: API ID of the image
* `identifier`: RMN identifier
* `urls`: Hash of available image versions
  * `type`: Manipulation done on the image, resize or crop for now
  * `width`: Width of the image
  * `height`: Height of the image
  * `url`: The url
* `photographer`: Photographer who has taken this picture
* `source`: Source of this image, can be museum, institution, etc…
* `default`: Boolean, true if this is the main work image

> Example

```json
{
  "id": 167,
  "identifier": "06-528589",
  "urls": {
    "original": "http://api.dev.rmn.af83.com/v1/images/1/167?t=thisisaprivatetoken",
    "small": {
      "width": 95,
      "height": 95,
      "type": "resize",
      "url": "http://api.dev.rmn.af83.com/v1/images/1/167/s?t=thisisaprivatetoken"
    },
    "thumbnail": {
      "width": 190,
      "height": 190,
      "type": "resize",
      "url": "http://api.dev.rmn.af83.com/v1/images/1/167/t?t=thisisaprivatetoken"
    },
    "medium": {
      "width": 379,
      "height": 379,
      "type": "resize",
      "url": "http://api.dev.rmn.af83.com/v1/images/1/167/m?t=thisisaprivatetoken"
    },
    "large": {
      "width": 758,
      "height": 758,
      "type": "resize",
      "url": "http://api.dev.rmn.af83.com/v1/images/1/167/l?t=thisisaprivatetoken"
    }
  }
}
```

# Search

## Response

The response consists of 2 sections:

### Hits

This section contains the results of your search. Check the [Elastic Search
documentation]
(http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/empty-search.html#_literal_hits_literal)
for more information.

In short, this section is structured like this:

* `total`: Total hits of your search
* `max_score`:  Maximum score of a hit in your search
* `hits`: The results

### Facets

This section contains the facets related to your search.
Each aggregation is defined by a key and contains many buckets. Buckets are
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

* `page`: Results page offset, default 1
* `per_page`: Number of results per page, default 10


<aside class="warning">
Invalid page numbers merely result in an empty results list.
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
     'http://api.dev.rmn.af83.com/v1/works.json?q=la%20joconde&lang=fr'
```

By default, the search is made on all tha available languages. You can limit
the search to a specific language by using the `lang` parameter. It can
improve the relevancy of results by using a more precise analyzer.


## Matching a field

Alternatively, you can select a field to search for. If you want to match an
exact value only on the title, use `title:"la joconde"`. You can use this to
limit the results to a work with a specific id, like this: `id:36238`.

```shell
curl -H "ApiKey: demo" \
     'http://api.dev.rmn.af83.com/v1/works.json?q=title:"la%20joconde"'

curl -H "ApiKey: demo" \
     'http://api.dev.rmn.af83.com/v1/works.json?q=id:36238'
```


##  Multi-criteria search

The full text search is good but sometimes you want something more precise when
you do a search in an API : it's possible.

For exemple, you want to search `la joconde` but you only want to have results
that are drawed : you can pass `"joconde AND techniques.name=dessin"` in the `q`
parameter.

You can do that with every term of the works like periods, keywords, authors…

You can also use the operand `OR` For exemple you can use
`"joconde OR collection=estampes"`


```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works.json?q=la%20joconde%20AND%20techniques%3Ddessin"
```


##  Filtering facets

On works, authors and selections endpoints facets are availables.

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
