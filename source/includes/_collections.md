## Collections

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/collections"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/thesaurus/collections">
</pre>

Collections are arbitrary groups of works.

### Definition

#### Attributes

* `name`: name in several languages
* `detail`: detail in several languages
* `path`: path in the thesaurus hierarchy
* `level`: level in the thesaurus hierarchy, 0 for root nodes

### Get All Collections


This endpoint retrieves all known collections.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/collections`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
filters[level]         |          | Filter on a specific level of the thesaurus hierarchy
page                   | 1        | Results page offset
per_page               | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
