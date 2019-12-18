# Lookup API

Look up a domain in the Wappalyzer database.

## Endpoint

`GET` `https://api.wappalyzer.com/lookup/v1/`


## Properties

| Property                 | Description 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	       |
|:-------------------------|:--------------------------------------------------------------------------------------------|
| Execution                | Synchronous / Asynchronous (when call yields no results)                                    |
| Request timeout          | 30s                                                                                         | 
| Rate limit               | 1 request / second on the Small plan<br> 10 requests / second on the Medium and Large plans |


## Parameters

| Name           | Required | Description                                                                                                    | Example               |
|:-------------- |:-------- |:-------------------------------------------------------------------------------------------------------------- |:--------------------- |
| `url`          | Yes      | URL of the web page to analyze                                                                                 | `https://example.com` |
| `callback_url` | No       | A POST request will be made to the callback URL upon completion of the request, no more than two minutes later | `https://example.com` |
| `denoise`      | No       | Filter out low confidence results (true (default) or false)                                                    | `false`               |


## Examples

**Example request**

``` sh
curl -H "X-Api-Key: wappalyzer.api.demo.key" \
https://api.wappalyzer.com/lookup/v1/?url=https://example.com&callback_url=https://example.com

```
**Example response (`200`)**

Results are grouped by month and may contain data from anywhere between six months ago and today. If guaranteed up-to-date information is required, consider using the [Crawl API](/api/resources/crawl) instead.

``` json
[
  {
    "monthYear": "01-2020",
    "languages": [
    ],
    "applications": [
      {
        "name": "Craft CMS",
        "categories": [
          "CMS"
        ],
        "versions": [
        ],
        "hits": 0
      }
    ]
  }
]
```

The hits value is the number of times users of the browser extension have visited the website that month. It can be used as a rough indicator of traffic.

**Example response (`202`)**

If no results are found and `callback_url` is specified, the domain will be fetched and analysed using the Crawl API as a fallback. The callback URL will be called within two minutes of completing the request.

if no callback URL is specified, a `404` response code will be returned instead. This call will still be counted towards the subscription quota.

``` json
{
  "status": "received"
}
```

**Example callback response**

``` json
{
  "url": "https://example.com",
  "applications": [
    {
      "name": "Craft CMS",
      "confidence": "100",
      "version": "",
      "icon": "CraftCMS.svg",
      "website": "https://craftcms.com",
      "categories": [
        {
          "1": "CMS"
        }
      ]
    }
  ]
}
```
