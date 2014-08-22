# Printers

FixMe

## Get All Printers

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/printers", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/printers"
```

> The above command returns JSON structured like this:

```json
Fixme

```

This endpoint retrieves all know printers.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/printers`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results

For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>