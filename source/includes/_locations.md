# Locations

FIXME: define here what *are* locations in our case!

## Get All Locations

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/locations", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/locations"
```

> The above command returns JSON structured like this:

```json
{
    "hits": {
        "total": 42,
            "hits": [
            {
                "_source": {
                    "name": "Paris, musée Picasso",
                    "city": "",
                    "id": 3,
                    "country_code": "FR",
                    "created_at": "2014-08-06T14:45:29.939Z",
                    "updated_at": "2014-08-06T14:45:30.049Z"
                }
            },
            {
                "_source": {
                    "name": "Paris, musée du Louvre",
                    "city": "",
                    "id": 1,
                    "country_code": "FR",
                    "created_at": "2014-08-06T14:38:38.366Z",
                    "updated_at": "2014-08-06T14:38:38.561Z"
                }
            }
        ]
    }
}
```

This endpoint retrieves all know locations.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/locations`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results
