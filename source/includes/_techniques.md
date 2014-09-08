## Techniques

Techniques used by many works available through the API.

Examples:

- huile sur toile
- mine de plomb
- plume (dessin)
- aquarelle


### Get All Techniques

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/techniques", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/techniques"
```

This endpoint retrieves all know techniques.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/techniques`
