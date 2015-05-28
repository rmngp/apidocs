# Works

## Definition

### Attributes

* `id`: unique identifier
* `popularity`: popularity based on associated images sales
* `title`: title in several languages
* `slug`: slug
* `detail`: detail in several languages
* `date`: date of creation, structured like this:
  * `display`: Text representation, example: 15th century, renaissance, …
  * `estimated_day`: Estimated date, this is rough data, should never be displayed, use for sorting / filtering
  * `estimation_spread`: Precision of the estimated date in days
* `inventory_number`: Inventory number
* `copyright`: copyright details
* `use`: Additional copyright informations
* `height`: Height in millimeters
* `width`: Width in millimeters
* `depth`: Depth in millimeters
* `diameter`: Diameter in millimeters
* `images`: Images available for this work, the default image as the boolean `default` to `true`, see [Images](#Images)
  * `identifier`: RMN identifier
  * `urls`: Urls of available versions
  * `photographer`: Photographer who has taken this picture
  * `source`: Source of this image, can be museum, institution, etc…
* `wikipedia_url`: Url of corresponding wikipedia article if found.
* `wikipedia_extract`: Extract from the content of the wikipedia article

### Associations

* `location`: Location where is located this work. See [Thesaurus/Locations](#locations)
* `authors`: Authors of this work. See [Thesaurus/Authors](#authors)
* `afters`: Authors that inspired this work. See [Thesaurus/Authors](#authors)
* `authorship_details`: Authors who have been awarded this work. See [Thesaurus/Authors](#authors)
* `collections`: Collections in which this work appears. See [Thesaurus/Collections](#collections)
* `geographies`: Places related to this work. See [Thesaurus/Geographies](#geographies)
* `keywords`: Keywords related to this work. See [Thesaurus/Keywords](#keywords)
* `periods`: Period in which this work was created. Creation .See [Thesaurus/Periods](#periods)
* `styles`: Artistic styles related to tis work. See [Thesaurus/Styles](#styles)
* `techniques`: Techniques used to create this work. See [Thesaurus/Techniques](#techniques)
* `schools`: Artistic school related to this work. See [Thesaurus/Schools](#schools)


## Get All Works

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/works">
</pre>

This endpoint retrieves all artworks.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/works`

### Query Parameters

Parameter                   | Default  | Description
---------                   | -------  | -----------
q                           |          | Filter results matching this query
lang                        |          | Limit the research to fields in this language (better relevance)
exists                      |          | Limit the research to works with these fields
sort                        |          | Field used to sort results
order                       | asc      | Sorting order, desc or asc.
page                        | 1        | Results page offset
per_page                    | 10       | Number of results per page
facet_page                  | 1        | Facet page offset
facet_per                   | 10       | Number of facets per page
facets[collections]         |          | Filter on a collection facet
facets[locations]           |          | Filter on a location facet
facets[authors]             |          | Filter on a author facet
facets[periods]             |          | Filter on a period facet
facets[techniques]          |          | Filter on a technique facet
facets[styles]              |          | Filter on a style facet
facets[schools]             |          | Filter on a schools facet
facets[geographies]         |          | Filter on a geography facet
facets[colors]              |          | Filter on a color facet
filters[images.identifier]  |          | Filter on an image identifier


For more specific search see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>

## Get a specific work by its ID or slug

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works/:id"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="_work_by_id_">
</pre>

This endpoint retrieves a specific work by its slug.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/works/:id`

### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
id                     |          | A work ID or slug
count_me[user_id]      |          | ID of user visiting the page
count_me[session_id]   |          | Session ID of user visiting the page

## Get suggested works

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works/suggested"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/works/suggested">
</pre>

This endpoint retrieves a list of suggested works. You can provide a work_id to
get contextual suggestions.

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/works/suggested

### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
id                     |          | A work id
slug                   |          | A work slug
exists                 |          | Limit the research to works with these fields
page                   | 1        | Results page offset
per_page               | 10       | Number of results per page

