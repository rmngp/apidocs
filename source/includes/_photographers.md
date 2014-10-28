## Photographers

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/photographers"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/thesaurus/photographers">
</pre>

Authors of the many images available through the API.

### Definition

#### Attributes

* `name`: name in several languages
* `city`: photographer city
* `country_code`: ISO code of the country
* `comments`: details on this photographer

### Get All Photographers

This endpoint retrieves all know photographers.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/photographers`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
page                   | 1        | Results page offset
per                    | 10       | Number of results per page

For more specific research see [Search](/?shell#search)
