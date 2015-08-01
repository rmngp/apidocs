# Autocomplete

Get suggestions for a string pattern, usefull for auto-completions.

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/v1/autocomplete?q=jacob"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-collapsed="false" data-path="/v1/autocomplete?q=jacob">
</pre>

### HTTP Request

`GET http://api.dev.rmn.af83.com/v1/autocomplete`

### Query Parameters

Parameter  | Default      | Description
---------  | -------      | -----------
q          |              | Pattern to search
lang       | fr           | Specific language. `fr` and `en` are available
types      | work,author,location,period,technique  | Specific types of items to search. `work`, `author`, `period`, `technique`, `location` avalaible


<aside class="success">
Remember — don't forget to use your API key!
</aside>
