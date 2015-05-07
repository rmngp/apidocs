# Thesaurus

## Get all resources

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/art/v1/thesaurus/collections"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/art/v1/thesaurus/sources">
</pre>

Thesaurus consists of several types of resources that are searchable in the same way.

#### HTTP Request

`GET http://api.dev.rmn.af83.com/art/v1/thesaurus/$resource_type`

Where ```$resource_type``` is one of:

- ```collections```
- ```geographies```
- ```keywords```
- ```locations```
- ```periods```
- ```photographers```
- ```schools```
- ```sources```
- ```styles```
- ```techniques```

### Query Parameters

Parameter              | Default  | Description
---------              | -------  | -----------
q                      |          | Filter results matching this query
page                   | 1        | Results page offset
per_page               | 10       | Number of results per page

For more specific search see [Search](/?shell#search)

<aside class="success">
Remember — don't forget to use your API key!
</aside>
