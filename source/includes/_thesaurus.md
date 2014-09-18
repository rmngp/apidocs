# Thesaurus

## Get all resources

```ruby
require 'open-uri'

open("http://api.dev.rmn.af83.com/v1/thesaurus/sources", 'ApiKey' => 'secret')
```


```shell
curl -H "ApiKey: secret" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/sources"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/thesaurus/sources">
</pre>

Thesaurus consists of several types of resources that are searchable in the same way.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/$resource_type`

Where ```$resource_type``` is one of:

- ```collections```
- ```geographies```
- ```keywords```
- ```locations```
- ```packagings```
- ```periods```
- ```photographers```
- ```picture_notes```
- ```printers```
- ```schools```
- ```sources```
- ```styles```
- ```techniques```

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
q         | ""      | If set, results are filtered to match this String
page      | 1       | Paginate through results

For more specific research see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>
