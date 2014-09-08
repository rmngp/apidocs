## Styles

Styles of the many works available through the API.

Examples:

- surréalisme
- art informel
- art abstrait
- art géométrique après 1945

### Get All Styles

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/styles", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/styles"
```

This endpoint retrieves all know collections.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/collections`
