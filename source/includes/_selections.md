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
include_ids | 0       | Include selected works IDs in the response

### HTTP Response

On success, the server replies with a `200` HTTP status code, and returns a
list of the user's selections in JSON.

```ruby
require 'net/http'

Net::HTTP.new('api.dev.rmn.af83.com').get('/v1/selections', {
    'user_id' => 1,
    'ApiKey'  => 'secret',
})
# => #<Net::HTTPOK 200 OK  readbody=true>
```

```shell
curl -H'ApiKey: secret' 'http://api.dev.rmn.af83.com/v1/selections?user_id=1'
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
> the following structure (the `work_ids` key is added):

```json
[
    {
        "id":         1,
        "name":       "example",
        "user_id":    1,
        "updated_at": "2014-09-01T00:00:00.42Z",
        "created_at": "2014-09-01T00:00:00.42Z",
        "work_ids":   [1, 2, 3]
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


## Create a selection

### HTTP Request

`POST http://api.dev.rmn.af83.com/v1/users/:user_id/selections`

### Parameters

Parameter | Default | Description
--------- | ------- | ------------
name      | ""      | Selections's name (mandatory)
user_id   | ""      | Selections's owner (mandatory)


### HTTP Response

Upon successful creation, the server replies with a `201` HTTP status code, and
returns the newly created selection in JSON format. Any other status code
indicate a failure to create the selection.

```ruby
require 'uri'
require 'net/http'

params = {
  api_key: 'secret',
  name:    'example',
  user_id: 1,
}
Net::HTTP.post_form 'http://api.dev.rmn.af83.com/v1/selections', params
# => #<Net::HTTPCreated 201 Created readbody=true>
```

```shell
curl -H'ApiKey: secret' \
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


## Destroy a selection

### HTTP Request

`DELETE http://api.dev.rmn.af83.com/v1/selections/:id`

### HTTP Response

The server *should* reply with a `200` HTTP status code, when the selection is
successfully destroyed.

```ruby
require 'net/http'

Net::HTTP.new('api.dev.rmn.af83.com').delete('/v1/selections/1', {'ApiKey' => 'secret'})
# => #<Net::HTTPOK 200 OK  readbody=true>
```

```shell
curl -H'ApiKey: secret' \
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


## Add an artwork to a selection

### HTTP Request

`POST http://api.dev.rmn.af83.com/v1/selections/:id/works`

### Parameters

Parameter | Default | Description
--------- | ------- | ------------
work_id   |         | work's ID on the API (mandatory).
order     |         | unsigned integer to choose the entry's position (mandatory).


### HTTP Response

Upon successful creation, the server replies with a `201` HTTP status code, and
returns a JSON object with the selected work ID, and its version number.

Any other status code indicate a failure to create the selection.

```ruby
require 'uri'
require 'net/http'

params = {
  api_key: 'secret',
  work_id: 42,
  order:   1,
}
Net::HTTP.post_form 'http://api.dev.rmn.af83.com/v1/selections/1/works', params
# => #<Net::HTTPCreated 201 Created readbody=true>
```

```shell
curl -H'ApiKey: secret' \
  'http://api.dev.rmn.af83.com/v1/selections/1/works' \
  -XPOST -d'work_id=42&order=1'
```

> On success, the above command results in a `201` HTTP status code, and
> should yield a JSON object, structured as follows:

```json
{
    "id":           1,
    "selection_id": 1,
    "work_id":      42,
    "version_id":   1,
    "order":        1
}
```


## Remove an artwork from a selection

### HTTP Request

`DELETE http://api.dev.rmn.af83.com/v1/selections/:selection_id/works/:id`

### HTTP Response

The server *should* reply with a `200` HTTP status code, when the work is
successfully removed from the selection.

If you try to delete from a selection folder that does not exist, or a work
that is not part of the selection, then the server replies with a `404` HTTP
error code.

```ruby
require 'net/http'

Net::HTTP.new('api.dev.rmn.af83.com').delete('/v1/selections/1/works/42', {'ApiKey' => 'secret'})
# => #<Net::HTTPOK 200 OK  readbody=true>
```

```shell
curl -H'ApiKey: secret' \
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
    "order":        1
}
```
