## Keywords

Keywords contain all the keyword that has'nt a special type.

Examples:

- portrait d'homme
- étude de figure
- carnet de croquis
- nu féminin

### Get All keywords

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/keywords", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/keywords"
```

This endpoint retrieves all keywords.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/keywords`
