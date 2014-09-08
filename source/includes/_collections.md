## Collections

Collections are arbitrary groups of works.

Examples:

- Dessins
- Photographies
- Estampes
- Peintures

### Get All Collections

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/collections", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/collections"
```

This endpoint retrieves all know collections.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/collections`
