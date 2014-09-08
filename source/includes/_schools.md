## Schools

Schools are the artistique schools.

Examples:

- Ecole française
- Ecole italienne
- Ecole allemande
- Ecole flamande

### Get All Schools

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/schools", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/schools"
```

This endpoint retrieves all know schools.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/periods`
