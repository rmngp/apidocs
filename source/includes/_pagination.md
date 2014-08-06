# Pagination

When listing or searching documents, the API always returns paginated results.
The default is to return `10` results per page.

The total number of results matching a Query is indicated by the `total` key,
immediately under the hits key.

<aside class="warning">
Invalid page numbers merely results in an empty results list.
</aside>

> To change page, simply pass a `page` parameter to your request URL.

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/works?page=2", 'ApiKey' => 'secret')
```

```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/works?page=2"
```

> Sample results, matching a total of 42 documents.

```json
{
  "hits": {
    "total": 42,
    "hits": []
  }
}
```
