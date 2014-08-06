# Photographers

## Get All Photographers

Authors of the many images available through the API.

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/photographers", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/photographers"
```

> The above command returns JSON structured like this:

```json
{
    "hits": {
        "total": 42,
            "hits": [
            {
                "_source": {
                    "id": 3,
                    "name": "Jean-Gilles Berizzi",
                    "city": "",
                    "country_code": "FR",
                    "comments": "",
                    "created_at": "2014-08-06T14:45:30.911Z",
                    "updated_at": "2014-08-06T14:45:30.942Z"
                }
            },
            {
                "_source": {
                    "id": 8,
                    "name": "National Gallery Photographic Department",
                    "city": "",
                    "country_code": "GB",
                    "comments": "National Gallery of London",
                    "created_at": "2014-08-06T14:48:20.298Z",
                    "updated_at": "2014-08-06T14:48:20.330Z"
                }
            }
        ]
    }
}
```

This endpoint retrieves all know photographers.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/photographers`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results
