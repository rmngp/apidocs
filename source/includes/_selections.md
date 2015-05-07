# Selections

A selection, or selection folder, allows a [user](#users) to select and
organize artworks found on the API.

There is no limit to the number of selections created for a particular user,
and there is no limit to the number of artworks that a selection may contain.

<aside class="notice">Note that a selection references a particular version of
an artwork, and that an artwork stored in a selection folder does not get
updated automatically.</aside>


## List selections

### HTTP Request

`GET http://api.dev.rmn.af83.com/art/v1/selections`

### Query Parameters

Parameter                    | Default | Description
-----------------            | ------- | ------------
user_id                      |         | Which user's selections should we show?
page                         | 1       | Results page offset
per_page                     | 10      | Number of results per page
tags                         |         | comma separated list of tags
works[include]               |         | Include works in results?
works[q]                     |         | Search for works
works[lang]                  | fr      | Return works facets for this language (fr, en, de)
works[sort]                  |         | Sort works
works[per_page]              | 1       | Number of works per page
works[page]                  | 10      | Works page offset
works[facet_per]             | 1       | Number of works facets per page
works[facet_page]            | 10      | Works facets page offset
works[facets][collections]   |         | Filter works on a collection facet
works[facets][locations]     |         | Filter works on a location facet
works[facets][authors]       |         | Filter works on a author facet
works[facets][periods]       |         | Filter works on a period facet
works[facets][techniques]    |         | Filter works on a technique facet
works[facets][styles]        |         | Filter works on a style facet
works[facets][schools]       |         | Filter works on a school facet
works[facets][geographies]   |         | Filter works on a geography facet
images[include]              |         | Include images in results?
images[q]                    |         | Search for images
images[lang]                 | fr      | Return images facets for this language (fr, en, de)
images[sort]                 |         | Sort images
images[per_page]             | 1       | Number of images per page
images[page]                 | 10      | Works page offset
images[facet_per]            | 1       | Number of images facets per page
images[facet_page]           | 10      | Works facets page offset
images[facets][collections]  |         | Filter images on a collection facet
images[facets][locations]    |         | Filter images on a location facet
images[facets][authors]      |         | Filter images on a author facet
images[facets][periods]      |         | Filter images on a period facet
images[facets][techniques]   |         | Filter images on a technique facet
images[facets][styles]       |         | Filter images on a style facet
images[facets][schools]      |         | Filter images on a school facet
images[facets][geographies]  |         | Filter images on a geography facet

### HTTP Response

On success, the server replies with a `200` HTTP status code, and returns a
list of selections in JSON.

```shell
curl -H'ApiKey: demo' 'http://api.dev.rmn.af83.com/art/v1/selections'
```

> On success, the above command should yield a JSON array, structured as
> follows:

<pre class="live_requests" data-path="/art/v1/selections">
</pre>

> If you pass the `include[works]=true` (and/or `include[images]=true`)
parameter, you should get a JSON array with the following structure
(the `works` and `images` keys are added):

<pre class="live_requests"
data-path="/art/v1/selections?works[include]=true&images[include]=true">
</pre>

## Create a selection

### HTTP Request

`POST http://api.dev.rmn.af83.com/art/v1/selections`

### Parameters

Parameter   | Default | Description
---------   | ------- | ------------
name        |         | Selection's name (mandatory)
description |         | Selection's description
user_id     |         | Selection's owner (mandatory)
work_ids    |         | Array of work IDs to associate
image_ids   |         | Array of image IDs to associate


### HTTP Response

Upon successful creation, the server replies with a `201` HTTP status code, and
returns the newly created selection in JSON format. Any other status code
indicate a failure to create the selection.

```shell
curl -H'ApiKey: demo' \
  'http://api.dev.rmn.af83.com/art/v1/selections' -XPOST -d'name=example&user_id=1'
```

> On success, the above command should yield a JSON object, structured as
> follows:

```json
{
    "id":           1,
    "name":         "example",
    "description":  "Example",
    "user_id":      1,
    "default":      true,
    "updated_at":   "2014-09-01T00:00:00.42Z",
    "created_at":   "2014-09-01T00:00:00.42Z",
    "tags":         "Foo,Bar"
}
```

## Update a selection

### HTTP Request

`PUT http://api.dev.rmn.af83.com/art/v1/selections/:id`

### Parameters

Parameter   | Default | Description
---------   | ------- | ------------
id          |         | Selection ID (mandatory)
name        |         | Selection's name
description |         | Selection's description
user_id     |         | Selection's owner (mandatory)
work_ids    |         | Array of work IDs to associate
image_ids   |         | Array of image IDs to associate


### HTTP Response

Upon successful update, the server replies with a `200` HTTP status code, and
returns the updated selection in JSON format. Any other status code indicate a
failure to update the selection.

```shell
curl -H'ApiKey: demo' \
  'http://api.dev.rmn.af83.com/art/v1/selections/:id' -XPUT -d'name=example&user_id=1'
```

> On success, the above command should yield a JSON object, structured as
> follows:

```json
{
    "id":           1,
    "name":         "example",
    "description":  "Example",
    "user_id":      1,
    "default":      true,
    "updated_at":   "2014-09-01T00:00:00.42Z",
    "created_at":   "2014-09-01T00:00:00.42Z",
    "tags":         "Foo,Bar"
}
```

## Destroy a selection

### HTTP Request

`DELETE http://api.dev.rmn.af83.com/art/v1/selections/:id`

### HTTP Response

The server *should* reply with a `200` HTTP status code, when the selection is
successfully destroyed.

```shell
curl -H'ApiKey: demo' \
     'http://api.dev.rmn.af83.com/art/v1/selections/1' -XDELETE
```

> On success, the above command results in a `200` HTTP code, and returns the 
> JSON representation of the destroyed selection folder. For example:

```json
{
    "id":           1,
    "name":         "example",
    "description":  "Example",
    "user_id":      1,
    "default":      true,
    "updated_at":   "2014-09-01T00:00:00.42Z",
    "created_at":   "2014-09-01T00:00:00.42Z",
    "tags":         "Foo,Bar"
}
```

## Get a selection

### HTTP Request

`GET http://api.dev.rmn.af83.com/art/v1/selections/:id`

### Query Parameters

Parameter                    | Default | Description
---------------------------  | ------- | ------------
id                           |         | Selection ID (mandatory)
works[include]               |         | Include works in results?
works[q]                     |         | Search for works
works[lang]                  | fr      | Return works facets for this language (fr, en, de)
works[sort]                  |         | Sort works
works[per_page]              | 1       | Number of works per page
works[page]                  | 10      | Works page offset
works[facet_per]             | 1       | Number of works facets per page
works[facet_page]            | 10      | Works facets page offset
works[facets][collections]   |         | Filter works on a collection facet
works[facets][locations]     |         | Filter works on a location facet
works[facets][authors]       |         | Filter works on a author facet
works[facets][periods]       |         | Filter works on a period facet
works[facets][techniques]    |         | Filter works on a technique facet
works[facets][styles]        |         | Filter works on a style facet
works[facets][schools]       |         | Filter works on a school facet
works[facets][geographies]   |         | Filter works on a geography facet
images[include]              |         | Include images in results?
images[q]                    |         | Search for images
images[lang]                 | fr      | Return images facets for this language (fr, en, de)
images[sort]                 |         | Sort images
images[per_page]             | 1       | Number of images per page
images[page]                 | 10      | Works page offset
images[facet_per]            | 1       | Number of images facets per page
images[facet_page]           | 10      | Works facets page offset
images[facets][collections]  |         | Filter images on a collection facet
images[facets][locations]    |         | Filter images on a location facet
images[facets][authors]      |         | Filter images on a author facet
images[facets][periods]      |         | Filter images on a period facet
images[facets][techniques]   |         | Filter images on a technique facet
images[facets][styles]       |         | Filter images on a style facet
images[facets][schools]      |         | Filter images on a school facet
images[facets][geographies]  |         | Filter images on a geography facet

### HTTP Response

The server *should* reply with a `200` HTTP status code.

```shell
curl -H'ApiKey: demo' \
     'http://api.dev.rmn.af83.com/art/v1/selections/1' -XGET
```

> On success, the above command results in a `200` HTTP code, and returns the 
> JSON representation of this selection folder. For example:

<pre class="live_requests"
data-path="/art/v1/selections/1?works[include]=true&images[include]=true">
</pre>


## Add a work or an image to a selection

### HTTP Request

`POST http://api.dev.rmn.af83.com/art/v1/selections/:id/:document_type`

### Parameters

Parameter     | Default | Description
------------- | ------- | ------------
id            |         | Selection ID (mandatory).
document_type |         | Type of document to add, `images` or `works` (mandatory).
document_id   |         | Document's ID on the API (mandatory).
position      |         | unsigned integer to choose the entry's position (mandatory).


### HTTP Response

Upon successful creation, the server replies with a `201` HTTP status code, and
returns a JSON object with the selected work ID, and its version number.

Any other status code indicate a failure to create the selection.

```shell
curl -H'ApiKey: demo' \
  'http://api.dev.rmn.af83.com/art/v1/selections/1/works' \
  -XPOST -d'work_id=42&position=1'
```

> On success, the above command results in a `201` HTTP status code, and
> should yield a JSON object, structured as follows:

```json
{
    "id":             1,
    "selection_id":   1,
    "document_id":    42,
    "document_type":  "Work",
    "version_id":     1,
    "position":       1
}
```

## Add an work or and image to the user default selection

### HTTP Request

`POST http://api.dev.rmn.af83.com/art/v1/selections/:user_id/default/:document_type`

### Parameters

Parameter     | Default | Description
------------- | ------- | ------------
user_id       |         | User ID (mandatory).
document_type |         | Type of document to add, `images` or `works` (mandatory).
document_id   |         | Document's ID on the API (mandatory).
position      |         | unsigned integer to choose the entry's position (mandatory).


### HTTP Response

Upon successful creation, the server replies with a `201` HTTP status code, and
returns a JSON object with the selected work ID, and its version number.

Any other status code indicate a failure to create the selection.

```shell
curl -H'ApiKey: demo' \
  'http://api.dev.rmn.af83.com/art/v1/selections/42/default/works' \
  -XPOST -d'work_id=42&position=1'
```

> On success, the above command results in a `201` HTTP status code, and
> should yield a JSON object, structured as follows:

```json
{
    "id":             1,
    "selection_id":   1,
    "document_id":    42,
    "document_type":  "Work",
    "version_id":     1,
    "position":       1
}
```


## Remove a work or an image from a selection

### HTTP Request

`DELETE http://api.dev.rmn.af83.com/art/v1/selections/:selection_id/:document_type/:id`

### Parameters

Parameter     | Default | Description
------------- | ------- | ------------
document_type |         | Type of document to add, `images` or `works` (mandatory).
document_id   |         | Document's ID on the API (mandatory).

### HTTP Response

The server *should* reply with a `200` HTTP status code, when the work is
successfully removed from the selection.

If you try to delete from a selection folder that does not exist, or a work
that is not part of the selection, then the server replies with a `404` HTTP
error code.

```shell
curl -H'ApiKey: demo' \
     'http://api.dev.rmn.af83.com/art/v1/selections/1/works/42' -XDELETE
```

> On success, the above command results in a `200` HTTP code, and returns the 
> JSON representation of the destroyed entry. For example:

```json
{
    "id":             1,
    "selection_id":   1,
    "document_id":    42,
    "document_type":  "Work",
    "version_id":     1,
    "position":       1
}
```
