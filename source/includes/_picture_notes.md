## Picture Notes

Picture notes are informations on how were made pictures.

Examples:

- tirage de l'auteur
- photographie de plateau
- tirage d'époque
- tirage sous contrôle de l'auteur

### Get All Picture_notes

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/picture_notes", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/picture_notes"
```

This endpoint retrieves all know collections.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/picture_notes`
