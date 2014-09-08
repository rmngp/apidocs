## Locations

Locations are the differents museeum where the works are.

Examples:

- Paris, musée national d'Art moderne - Centre Georges Pompidou
- Paris, musée du Louvre
- Versailles, châteaux de Versailles et de Trianon
- Royaume-Uni, Londres, British Museum

### Get All Locations

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/locations", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/locations"
```

This endpoint retrieves all know locations.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/locations`
