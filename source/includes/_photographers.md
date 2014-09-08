## Photographers

### Get All Photographers

Authors of the many images available through the API.

Examples:

- Gérard Blot
- Hervé Lewandowski
- René-Gabriel Ojéda
- Jean-Gilles Berizzi

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/photographers", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/photographers"
```

This endpoint retrieves all know photographers.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/photographers`
