## Sources

Sources are the museeum where the works come from : you can also find the copyright in that part.

Examples:

- RMN
- RMN (musée d'Orsay)
- CNAC
- EPL (Louvre)

### Get All Sources

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/sources", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/sources"
```

This endpoint retrieves all know sources.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/sources`
