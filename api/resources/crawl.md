# Crawl API

Fetch and analyze multiple web pages on a domain by recursively following links. The crawler fetches up to 25 pages.


## Endpoint

`GET` `https://api.wappalyzer.com/crawl/v1/`


## Properties

| Property        | Description                                                                                                                      |
|:----------------|:-------------------------------------------------------------------------------------------|
| Execution       | Asynchronous                                                                               | 
| Request timeout | 5s (callback response timeout: 5m)                                                         |  
| Rate limit      | 1 request / second on the Small plan<br>10 requests / second on the Medium and Large plans |


## Parameters

| Name           | Required | Description                                                                                                    | Example               |
|:-------------- |:-------- |:-------------------------------------------------------------------------------------------------------------- |:--------------------- |
| `url`          | Yes      | URL of the first web page to analyze                                                                           | `https://example.com` |
| `callback_url` | Yes      | A POST request will be made to the callback URL upon completion of the request, no more than two minutes later | `https://example.com` |


## Examples

**Example request**

``` sh
curl -H "X-Api-Key: wappalyzer.api.demo.key" \
https://api.wappalyzer.com/crawl/v1/?url=https://example.com&callback_url=https://example.com
```

**Example response (`202`)**

``` json
{
  "status": "received"
}
```

**Example callback response (success)**

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
  ],
  "status": "success"
}
```

**Example callback response (error)**

``` json
{
  "url": "https://example.com",
  "applications": [],
  "status": "error",
  "errors": [
    {
      "type": "RESPONSE_NOT_OK",
      "message": "Response was not ok"
    }
  ]
}
```
