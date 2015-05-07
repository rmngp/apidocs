# Suggestions

Get suggestions for a string pattern, usefull for auto-completions.

```shell
curl -H "ApiKey: demo" \
     "http://api.dev.rmn.af83.com/art/v1/autocomplete?q=le"
```

> The above command returns JSON structured like this:

<pre class="live_requests" data-path="/art/v1/autocomplete?q=le">
</pre>

### HTTP Request

`GET http://api.dev.rmn.af83.com/art/v1/autocomplete`

### Query Parameters

Parameter  | Default      | Description
---------  | -------      | -----------
q          |              | Pattern to search
lang       | fr           | Specific language. `fr`, `en` and `de` available
types      | work,author  | Specific types of items to search. `work` and `author` available


<aside class="success">
Remember — don't forget to use your API key!
</aside>
