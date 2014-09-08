# Users

The users API allows partners to create, and destroy user accounts.


## Create a user account

Partners with an API access are allowed to create user accounts.

### HTTP Request

`POST http://api.dev.rmn.af83.com/v1/users`

### Parameters

Parameter | Default | Description
--------- | ------- | ------------
name      | ""      | user's name (mandatory).
email     | ""      | user's email which *must* be unique in the whole API (mandatory).
password  | ""      | user's password: it *must* be at least 8 characters (mandatory).

### HTTP Response

Upon successful creation, the server replies with a `201` HTTP status code, and
returns the newly created user in JSON format. Any other status code indicate a
failure to create the user.

<aside class="notice">Note that user accounts created by a partner can *not* be used to access the
API, as they lack an API key to start with.</aside>

```ruby
require 'uri'
require 'net/http'

params = {
  api_key:  'secret',
  name:     'User name',
  email:    'user@example.com',
  password: 'password',
}
Net::HTTP.post_form URI('http://api.dev.rmn.af83.com/v1/users'), params
# => #<Net::HTTPCreated 201 Created readbody=true>
```

```shell
curl -H'ApiKey: secret' \
     'http://api.dev.rmn.af83.com/v1/users' -XPOST \
     -d'name=User%20name&email=user@example.com&password=password'
```

> On success, the above command results in a `201` HTTP code, and returns JSON
> structured like this:

```json
{
    "id":         1,
    "name":       "User name",
    "partner_id": 1,
    "email":      "user@example.com",
    "created_at": "2014-09-01T00:00:00.42Z",
    "updated_at": "2014-09-01T00:00:00.42Z"
}
```

> If your request contains errors, you will receive a `400` HTTP status code,
> and a JSON array listing the detected errors. For example:

```json
[
  ["email",    "is missing"],
  ["password", "is missing"]
]
```


## Destroy a user account

User accounts created by a partner can be destroyed by the same partner,
identified by their API key.

### HTTP Request

`DELETE http://api.dev.rmn.af83.com/v1/users/:id`

### HTTP Response

The server *should* reply with a `200` HTTP status code when the user is
successfully destroyed.

 - If you try to delete a user that does not exist, or was created with a
   different API key, the server replies with a `404` HTTP error code.
 - If your request contains errors, the server replies with a `400` HTTP error
   code.

```ruby
require 'net/http'

Net::HTTP.new('api.dev.rmn.af83.com').delete('/v1/users/1', {'ApiKey' => 'secret'})
# => #<Net::HTTPOK 200 OK  readbody=true>
```

```shell
curl -H'ApiKey: secret' \
     'http://api.dev.rmn.af83.com/v1/users/1' -XDELETE
```

> On success, the above command results in a `200` HTTP code, and returns the 
> JSON representation of the destroyed user. For example:

```json
{
    "id":         1,
    "name":       "User name",
    "partner_id": 1,
    "email":      "user@example.com",
    "created_at": "2014-09-01T00:00:00.42Z",
    "updated_at": "2014-09-01T00:00:00.42Z"
}
