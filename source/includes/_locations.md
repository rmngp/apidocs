## Locations

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/thesaurus/locations"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/thesaurus/locations">
</pre>

Locations are different museum where the works are.

### Definition

#### Attributes

* `name`: name in several languages
* `city`: city name in several languages
* `detail`: detail in several languages
* `country_code`: ISO code of the country

### Get All Locations

This endpoint retrieves all known locations.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/thesaurus/locations`

#### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
page                   | 1        | Results page offset
per_page               | 10       | Number of results per page

For more specific search see [Search](/?shell#search)
