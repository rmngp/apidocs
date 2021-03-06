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
* `external_urls`: List of other external urls.

### Associations

* `location`: Where this work is located. See [Thesaurus/Locations](#locations)
* `authors`: Authors of this work. See [Thesaurus/Authors](#authors)
* `afters`: Authors that inspired this work. See [Thesaurus/Authors](#authors)
* `authorship_details`: Authors who have been awarded this work. See [Thesaurus/Authors](#authors)
* `collections`: Collections in which this work appears. See [Thesaurus/Collections](#collections)
* `geographies`: Places related to this work. See [Thesaurus/Geographies](#geographies)
* `keywords`: Keywords related to this work. See [Thesaurus/Keywords](#keywords)
* `periods`: Period in which this work was created. Creation .See [Thesaurus/Periods](#periods)
* `styles`: Artistic styles related to this work. See [Thesaurus/Styles](#styles)
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

Parameter                           | Default  | Description
---------                           | -------  | -----------
q                                   |          | Filter results matching this query
lang                                |          | Limit the research to fields in this language (better relevance)
exists                              |          | Limit the research to works with these fields
exclude[keywords.name.fr][]         |          | Array of keywords to exclude
exclude[techniques.name.fr][]       |          | Array of techniques to exclude
exclude[authors.name.fr][]          |          | Array of authors to exclude
exclude[periods.name.fr][]          |          | Array of periods to exclude
exclude[collections.name.fr][]      |          | Array of collections to exclude
exclude[geographies.name.fr][]      |          | Array of geographies to exclude
exclude[location.name.fr][]         |          | Array of locations to exclude
exclude[images.photographer.name][] |          | Array of photographer to exclude
exclude[schools.name.fr][]          |          | Array of schools to exclude
exclude[images.source.name][]       |          | Array of source to exclude
exclude[styles.name.fr][]           |          | Array of styles to exclude
sort                                |          | Field used to sort results
order                               | asc      | Sorting order, desc or asc.
page                                | 1        | Results page offset
per_page                            | 10       | Number of results per page
facet_page                          | 1        | Facet page offset
facet_per                           | 10       | Number of facets per page
facets[collections]                 |          | Filter on a collection facet
facets[locations]                   |          | Filter on a location facet
facets[authors]                     |          | Filter on an author facet
facets[periods]                     |          | Filter on a period facet
facets[techniques]                  |          | Filter on a technique facet
facets[styles]                      |          | Filter on a style facet
facets[schools]                     |          | Filter on a schools facet
facets[geographies]                 |          | Filter on a geography facet
facets[colors]                      |          | Filter on a color facet
facets[keywords]                    |          | Filter on a keyword facet
filters[images.identifier]          |          | Filter on an image identifier


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

Parameter                           | Default  | Description
---------                           | -------  | -----------
id                                  |          | A work id
slug                                |          | A work slug
exists                              |          | Limit the research to works with these fields
exclude[keywords.name.fr][]         |          | Array of keywords to exclude
exclude[techniques.name.fr][]       |          | Array of techniques to exclude
exclude[authors.name.fr][]          |          | Array of authors to exclude
exclude[periods.name.fr][]          |          | Array of periods to exclude
exclude[collections.name.fr][]      |          | Array of collections to exclude
exclude[geographies.name.fr][]      |          | Array of geographies to exclude
exclude[location.name.fr][]         |          | Array of locations to exclude
exclude[images.photographer.name][] |          | Array of photographer to exclude
exclude[schools.name.fr][]          |          | Array of schools to exclude
exclude[images.source.name][]       |          | Array of source to exclude
exclude[styles.name.fr][]           |          | Array of styles to exclude
page                                | 1        | Results page offset
per_page                            | 10       | Number of results per page


## Aggregations

The works endpoint can also decorate the response with some aggregation
computations. It works with the [aggregation framework from
Elasticsearch](http://www.elasticsearch.org/guide/en/elasticsearch/reference/1.3/search-aggregations.html).

> For example, you can have some stats on the dimensions of the works painted
by Picasso. (see: `aggregations.works_width` and `aggregations.works_height`)

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works?q=Picasso&aggregates[][name]=works_width&aggregates[][type]=stats&aggregates[][field]=width&aggregates[][name]=works_height&aggregates[][type]=stats&aggregates[][field]=height"
```

<pre class="live_requests" data-path="/v1/works?q=Picasso&aggregates[][name]=works_width&aggregates[][type]=stats&aggregates[][field]=width&aggregates[][name]=works_height&aggregates[][type]=stats&aggregates[][field]=height">
</pre>

> The citizenship of the authors for the 19th century. (see: `aggregations.authors_citizenship`)

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works?aggregates[][name]=authors_citizenship&aggregates[][type]=terms&aggregates[][field]=authors.citizenship&facets[periods]=19e+siècle"
```

<pre class="live_requests" data-path="/v1/works?aggregates[][name]=authors_citizenship&aggregates[][type]=terms&aggregates[][field]=authors.citizenship&facets[periods]=19e+siècle">
</pre>

Most fields are tokenized and stemmed for a better full-text search. It can
give weird results for aggregation. In that case, you can try to append `.raw`
to the field name.

### Parameters

To add an aggregation, you have to give 3 parameters:

- `name`: it's the key in `aggregations` in the JSON response
- `type`: the type of aggregation to compute
- `field`: the field used as data to aggregate.

Type              | Description
----              |------------
min               | Returns the minimum value among the numeric values extracted from the aggregated documents
max               | Returns the maximum value among numeric values
sum               | Sums up numeric values
avg               | Computes the average of numeric values
stats             | Computes stats over numeric values (min, max, sum, avg and count)
extended_stats    | An extended version of the stats aggregation, where additional metrics are added such as `sum_of_squares`, `variance` and `std_deviation`
cardinality       | Calculates an approximate count of distinct values
value_count       | Counts the number of values that are extracted from the aggregated documents
missing           | Counts all documents in the current document set context that are missing a field value
percentiles       | Calculates percentiles over numeric values (1%, 5%, 25%, 50%, 75%, 95%, 99%)
terms             | A multi-bucket value source based aggregation where buckets are dynamically built - one per unique value
significant_terms | Returns interesting or unusual occurrences of terms in a set (experimental!)
histogram         | Dynamically builds fixed size (a.k.a. interval) buckets over the values
date_histogram    | Same as histogram, but can use interval with not a fixed size (a month or a year for example)

For histograms, a fourth parameter, `interval`, will be given.

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/works?aggregates[][name]=histogram&aggregates[][type]=date_histogram&aggregates[][field]=date.estimated_day&aggregates[][interval]=month"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/v1/works?aggregates[][name]=histogram&aggregates[][type]=date_histogram&aggregates[][field]=date.estimated_day&aggregates[][interval]=month">
</pre>
