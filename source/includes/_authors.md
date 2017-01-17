# Authors

List all authors present on the API.

## Definition

### Attributes

* `name`: Name in several languages
* `detail`: Detail in several languages
* `other_names`: Other known names for this author
* `birth`: Date of birth, structured like this:
  * `display`: Text representation, example: 15th century, renaissance, …
  * `estimated_day`: Estimated date
  * `estimation_spread`: Precision of the estimated date
* `death`: Date of death, structured like this:
  * `display`: Text representation, example: 15th century, renaissance, …
  * `estimated_day`: Estimated date
  * `estimation_spread`: Precision of the estimated date
* `birth_place`: Place of birth, structured like this:
  * `display`: Text representation, example: Málaga, Paris…
  * `latitude`: Latitude
  * `longitude`: Longitude
* `death_place`: Place of death, structured like this:
  * `display`: Text representation, example: Málaga, Paris…
  * `latitude`: Latitude
  * `longitude`: Longitude
* `wikipedia_url`: Url of corresponding wikipedia article
* `wikipedia_extract`: Extract from the content of the wikipedia article

### Associations

* `data_inferred_from_works`: Represents data related to author's works
  * `collections`: Collections in which author's works appear. See [Thesaurus/Collections](#collections)
  * `locations`: Place where are located author's works. See [Thesaurus/Locations](#locations)
  * `techniques`: Techniques used to create author's works. See [Thesaurus/Techniques](#techniques)
  * `periods`: Period in which author's works were created. Creation .See [Thesaurus/Periods](#periods)
  * `geographies`: Places related to author's works. See [Thesaurus/Geographies](#geographies)


## Get All Authors

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/authors"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/authors">
</pre>

This endpoint retrieves all known authors.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/authors`

### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
sort                   |          | Field used to sort results
order                  | asc      | Sorting order, desc or asc.
page                   | 1        | Results page offset
per_page               | 10       | Number of results per page
facet_page             | 1        | Facet page offset
facet_per              | 10       | Number of facets per page
facets[collections]    |          | Filter on a collection facet
facets[locations]      |          | Filter on a location facet
facets[periods]        |          | Filter on a period facet
facets[techniques]     |          | Filter on a technique facet
facets[geographies]    |          | Filter on a geography facet


For more specific search see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>
