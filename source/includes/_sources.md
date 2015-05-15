## Sources

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/sources"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/thesaurus/sources">
</pre>

Sources are the museum where the works come from : you can also find the copyright in that part.

### Definition

#### Attributes

* `name`: name in several languages
* `code`: source identifier
* `copyright`: copyright to apply for works of this source

### Get All Sources

This endpoint retrieves all know sources.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/sources`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
page                   | 1        | Results page offset
per_page               | 10       | Number of results per page

For more specific search see [Search](/?shell#search)
