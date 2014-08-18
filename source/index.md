---
title: RMN-GP API Reference

language_tabs:
  - shell
  - ruby

toc_footers:
  - <a href='http://dev.rmn.af83.com/'>Sign Up for a Partner Key</a>
  - <a href='http://doc.dev.rmn.af83.com/console/'>Javascript console</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - works
  - sources
  - photographers
  - locations
  - keywords
  - authors
  - periods
  - techniques
  - geographies

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

```ruby
require 'open-uri'

open("http://api_endpoint_here", 'ApiKey' => 'secret')
```

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


## Pagination

When listing or searching documents, the API always returns paginated results.
The default is to return `10` results per page.

The total number of results matching a Query is indicated by the `total` key,
immediately under the hits key.

<aside class="warning">
Invalid page numbers merely results in an empty results list.
</aside>

> To change page, simply pass a `page` parameter to your request URL.

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/works?page=2", 'ApiKey' => 'secret')
```

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


[console]: http://doc.dev.rmn.af83.com/console/
[partners]: http://dev.rmn.af83.com/partners
