# Basics

The [Wappalyzer APIs](https://www.wappalyzer.com/api) provide programmatic access to technographic data on websites, either in real-time or prefetched.

* The APIs conform to [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) principles
* The [JSON](https://en.wikipedia.org/wiki/JSON) data format is used for responses and POST requests
* All resources require authentication
* Requests are rate-limited and capped to a monthly quota
* Endpoints are HTTPS only


## Authentication

Wappalyzer uses API keys to provide authorized access to its APIs. [Subscribe](https://www.wappalyzer.com/api) to a plan to obtain an API key.

| Request header | Value              |
|:-------------- |:------------------ |
| `X-Api-Key`    | *`<Your API key>`* |


## Demo API key

Use the API key below to try the APIs before purchasing a subscription. It's good for ten requests per day across all APIs (excluding the Dataset API).

`wappalyzer.api.demo.key`


## Response codes

The APIs return [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) in addition to JSON-based responses.

| HTTP code | Description                                                             |
|:--------- |:------------------------------------------------------------------------|
| `200`     | The request was completed successfully                                  |
| `202`     | The request has been accepted for processing                            |
| `400`     | There was an error with the request                                     |
| `403`     | Authorisation failure (incorrect API key or invalid method or resource) |
| `429`     | Usage plan quota exceeded                                               |

::: tip
In less common scenarios, other status codes may be used. To verify if a request was successful, check for a `2xx` code. A `4xx` code indicates a problem with the request. A `5xx` code means a server-side error occurred. 
:::


## Error types

| Type               | Description                                         |
|:------------------ |:--------------------------------------------------- |
| `GENERIC`          | A generic or unkown error occured                   |
| `RESPONSE_NOT_OK`  | The server did not respond with a `200` HTTP code   |
| `NO_RESPONSE`      | The server did not respond in time                  |
| `NO_HTML_DOCUMENT` | The server response did not include a HTML document |


## Usage

To determine the remaining quota and limits associated with your plan, query the relevant resource URL with `/usage` appended. Note that this request will also be counted towards your subscription quota.

The remaining quota value is updated periodically and should be treated as an estimate only.

**Example request**

``` sh
curl -H "X-Api-Key: wappalyzer.api.demo.key" https://api.wappalyzer.com/lookup/v1/usage
```

**Example response**

``` json
{
  "api": {
    "throttle": {
      "rateLimit": 10
    },
    "quota": {
      "limit": 100000,
      "period": "MONTH"
    }
  },
  "plan": {
    "name": "api_lookup_medium",
    "quota": {
      "remaining": 97520
    }
  }
}
```
