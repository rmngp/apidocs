# Sources

Sources are the museeum where the works come from : you can also find the copyright in that part

## Get All Sources

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/sources", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/sources"
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
                    "code": "RMN",
                    "copyright": "Photo (C) RMN-Grand Palais",
                    "disabled": false,
                    "name": "RMN",
                    "created_at": "2014-08-06T14:45:30.218Z",
                    "updated_at": "2014-08-06T14:45:30.245Z"
                }
            },
            {
                "_source": {
                    "id": 4,
                    "code": "RMNO",
                    "copyright": "Photo (C) RMN-Grand Palais (musée d'Orsay)",
                    "disabled": false,
                    "name": "RMN (musée d'Orsay)",
                    "created_at": "2014-08-06T14:47:16.613Z",
                    "updated_at": "2014-08-06T14:47:16.670Z"
                }
            }
        ]
    }
}
```

This endpoint retrieves all know sources.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/sources`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results

For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>