## Periods

Periods can be a century, an age, or a period.

Examples:

- période contemporaine de 1789 à 1914
- 19e siècle
- Renaissance
- Empire romain (27 av J.-C.-476 ap J.-C.)

### Get All Periods

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/periods", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/periods"
```

This endpoint retrieves all know periods.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/periods`
