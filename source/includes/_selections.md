# Selections

A selection, or selection folder, allows a [user](#users) to select and
organize artworks found on the API.

There is no limit to the number of selections created for a particular user,
and there is no limit to the number of artworks that a selection may contain.

<aside class="notice">Note that a selection references a particular version of
an artwork, and that an artwork stored in a selection folder does not get
updated automatically.</aside>


## List a user's selections

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/selections`

### Query Parameters

Parameter   | Default | Description
----------- | ------- | ------------
user_id     | ""      | Which user's selections should we show?
page        | 1       | Results page offset
include_ids | 0       | Include selected works IDs in the response

### HTTP Response

On success, the server replies with a `200` HTTP status code, and returns a
list of the user's selections in JSON.

```shell
curl -H'ApiKey: demo' 'http://api.dev.rmn.af83.com/v1/selections?user_id=1'
```

> On success, the above command should yield a JSON array, structured as
> follows:

```json
[
    {
        "id":         1,
        "name":       "example",
        "user_id":    1,
        "updated_at": "2014-09-01T00:00:00.42Z",
        "created_at": "2014-09-01T00:00:00.42Z"
    },
    {
        "id":         2,
        "name":       "Another example",
        "user_id":    1,
        "updated_at": "2014-09-01T00:00:00.42Z",
        "created_at": "2014-09-01T00:00:00.42Z"
    }
]
```

> If you pass the `include_ids` parameter, you should get a JSON array with
> the following structure (the `work_ids` and `image_ids` keys are added):

```json
[
    {
        "id":         1,
        "name":       "example",
        "user_id":    1,
        "updated_at": "2014-09-01T00:00:00.42Z",
        "created_at": "2014-09-01T00:00:00.42Z",
        "work_ids":   [1, 2, 3],
        "image_ids":  [1, 2, 3]
    },
    {
        "id":         2,
        "name":       "Another example",
        "user_id":    1,
        "updated_at": "2014-09-01T00:00:00.42Z",
        "created_at": "2014-09-01T00:00:00.42Z",
        "work_ids":   []
    }
]
```

## Get content of a user's selections

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/selections/:id/:document_type`

### Query Parameters

Parameter     | Default | Description
------------- | ------- | ------------
id            |         | Selection ID (mandatory).
document_type |         | Type of document to add, `images` or `works` (mandatory).
q             |         | Filter results
lang          |         | Limit the research to fields in this language (better relevance)
exists        |         | Limit the research to documents with these fields
sort          |         | Field used to sort results
page          | 1       | Results page offset
per_page      | 10      | Number of results per page
facet_page    | 1       | Facet page offset
facet_per     | 10      | Number of facets per page

### HTTP Response

On success, the server replies with a `200` HTTP status code, and returns the
user's selection content in JSON.

```shell
curl -H'ApiKey: demo' 'http://api.dev.rmn.af83.com/v1/selections/:id/works'
```

## Create a selection

### HTTP Request

`POST http://api.dev.rmn.af83.com/v1/selections`

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
  'http://api.dev.rmn.af83.com/v1/selections' -XPOST -d'name=example&user_id=1'
```

> On success, the above command should yield a JSON object, structured as
> follows:

```json
{
    "id":         1,
    "name":       "example",
    "user_id":    1,
    "updated_at": "2014-09-01T00:00:00.42Z",
    "created_at": "2014-09-01T00:00:00.42Z"
}
```

## Update a selection

### HTTP Request

`PUT http://api.dev.rmn.af83.com/v1/selections/:id`

### Parameters

Parameter   | Default | Description
---------   | ------- | ------------
name        |         | Selection's name
description |         | Selection's description
work_ids    |         | Array of work IDs to associate
image_ids   |         | Array of image IDs to associate


### HTTP Response

Upon successful update, the server replies with a `200` HTTP status code, and
returns the updated selection in JSON format. Any other status code indicate a
failure to update the selection.

```shell
curl -H'ApiKey: demo' \
  'http://api.dev.rmn.af83.com/v1/selections/:id' -XPUT -d'name=example&user_id=1'
```

> On success, the above command should yield a JSON object, structured as
> follows:

```json
{
    "id":         1,
    "name":       "example",
    "user_id":    1,
    "updated_at": "2014-09-01T00:00:00.42Z",
    "created_at": "2014-09-01T00:00:00.42Z"
}
```

## Destroy a selection

### HTTP Request

`DELETE http://api.dev.rmn.af83.com/v1/selections/:id`

### HTTP Response

The server *should* reply with a `200` HTTP status code, when the selection is
successfully destroyed.

```shell
curl -H'ApiKey: demo' \
     'http://api.dev.rmn.af83.com/v1/selections/1' -XDELETE
```

> On success, the above command results in a `200` HTTP code, and returns the 
> JSON representation of the destroyed selection folder. For example:

```json
{
    "id":         1,
    "name":       "example",
    "user_id":    1,
    "updated_at": "2014-09-01T00:00:00.42Z",
    "created_at": "2014-09-01T00:00:00.42Z"
}
```


## Add an work or and image to a selection

### HTTP Request

`POST http://api.dev.rmn.af83.com/v1/selections/:id/:document_type`

### Parameters

Parameter     | Default | Description
------------- | ------- | ------------
document_type |         | Type of document to add, `images` or `works` (mandatory).
document_id   |         | Document's ID on the API (mandatory).
position      |         | unsigned integer to choose the entry's position (mandatory).


### HTTP Response

Upon successful creation, the server replies with a `201` HTTP status code, and
returns a JSON object with the selected work ID, and its version number.

Any other status code indicate a failure to create the selection.

```shell
curl -H'ApiKey: demo' \
  'http://api.dev.rmn.af83.com/v1/selections/1/works' \
  -XPOST -d'work_id=42&position=1'
```

> On success, the above command results in a `201` HTTP status code, and
> should yield a JSON object, structured as follows:

```json
{
    "id":           1,
    "selection_id": 1,
    "work_id":      42,
    "version_id":   1,
    "position":     1
}
```


## Remove a work or an image from a selection

### HTTP Request

`DELETE http://api.dev.rmn.af83.com/v1/selections/:selection_id/:document_type/:id`

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
     'http://api.dev.rmn.af83.com/v1/selections/1/works/42' -XDELETE
```

> On success, the above command results in a `200` HTTP code, and returns the 
> JSON representation of the destroyed entry. For example:

```json
{
    "id":           1,
    "selection_id": 1,
    "work_id":      42,
    "version_id":   1,
    "position":     1
}
```
