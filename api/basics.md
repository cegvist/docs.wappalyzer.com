# Basics

[Wappalyzer's REST APIs](https://www.wappalyzer.com/api) fetch and analyze web pages in real-time to identify technologies. 


## Base URL

`https://api.wappalyzer.com/`

## Response codes

| HTTP code | Description                                                             |
|:--------- |:------------------------------------------------------------------------|
| `200`     | The request was completed successfully                                  |
| `202`     | The request has been accepted for processing                            |
| `400`     | There was an error with the request                                     |
| `403`     | Authorisation failure (incorrect API key or invalid method or resource) |
| `429`     | Usage plan quota exceeded                                               |

::: tip
In less common scenarios, other [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) may be used. To verify that a request was successful, check for a `2xx` code. A `4xx` code indicates a problem with the request. A `5xx` code means a server-side error occurred. 
:::


## Error types

| Type               | Description                                         |
|:------------------ |:--------------------------------------------------- |
| `GENERIC`          | An unkown error occured                             |
| `RESPONSE_NOT_OK`  | The server did not respond with a `200` HTTP code   |
| `NO_RESPONSE`      | The server did not respond in time                  |
| `NO_HTML_DOCUMENT` | The server response did not include a HTML document |


## Authentication

Wappalyzer uses API keys to provide authorized access to its APIs.

| Request header | Value              |
|:-------------- |:------------------ |
| `X-Api-Key`    | *`<Your API key>`* |


## Demo API key

Use the API key below to try the APIs before purchasing a subscription. It's good for ten requests per day across all APIs (excluding the Dataset API).

`wappalyzer.api.demo.key`
