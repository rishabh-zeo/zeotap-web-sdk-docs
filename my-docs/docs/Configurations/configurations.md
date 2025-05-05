---
sidebar_position: 1
title: Configurations
---

## Usage

The Zeotap Web SDK can be configured by passing an options object during the [`init`](/docs/quickStart#integration) call. eg: `window.zeotap.init("YOUR_WRITE_KEY", <options>);`

## SDK Configuration Options

### Mandatory Option
| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `writeKey`                         | String                                   | **Required.** Your unique Zeotap Write Key to authorize data sending to your specific source.                                                                    |

### PII related Options

| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="./hashing">`areIdentitiesHashed`</a>           | Boolean                                  | Set to `true` if the identities you pass to `setUserIdentities` are already hashed (e.g., SHA-256). Defaults to `false`.                                         |
| <a href="./hashing">`hashIdentities`</a>                 | Boolean                                  | Set to `true` to enable automatic client-side SHA-256 hashing of email/phone identities before sending. Defaults to `true`.                                    |

### Consent Options

| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `optOut`                           | Boolean                                  | If set to `true`, no events are posted to the backend. This option is a fallback when consent is not used. Defaults to `false`.                                 |
| `useConsent`                       | Boolean                                  | If set to `true`, the SDK waits to receive a consent signal and uses that consent to manage actions. Defaults to `false`.                                        |
| `checkForCMP`                      | Boolean                                  | If set to `false`, the Non-TCF Zeotap CMP is used for consent management. Defaults to `true`.                                                                   |
| `purposesForTracking`              | Number[]                                 | TCF Purpose IDs required for tracking user activity. Default depends on TCF version/config (e.g., `[1,3,4]` or `[1,5,6]`).                                      |
| `purposesForCookieSync`            | Number[]                                 | TCF Purpose IDs required for cookie syncing. Default depends on TCF version/config (e.g., `[1,3,4]` or `[1,5,6]`).                                             |
| `includeTCFString`                 | Boolean                                  | If `true`, the TCF consent string is included in the event payload regardless of the consent mechanism used. No default specified.                              |
| `shouldCheckZeotapVendorConsent`   | Boolean                                  | If `true`, the SDK checks for Zeotap's vendor consent (ID 301) before checking tracking purposes. Defaults to `false`.                                           |

### Stroage options

| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `storageExpirationDays`            | Number                                   | Defines how long (in days) any cookies used for storage are set for. Not applicable to localStorage. Defaults to `365`.                                            |
| `domain`                           | String                                   | If specified, cookies are stored against this domain (e.g., '.yourdomain.com'). By default, cookies are saved against the top-level domain. Defaults to `undefined`. |
| <a href="./persistenceInCookieStorage">`persistenceInCookieStorage`</a>       | Boolean                                  | If `true`, identities and consent info are persisted in cookie storage; otherwise, localStorage is used. Defaults to `false`.                                    |


### ID5 integration Options

| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="./id5">`enableID5`</a>                        | Boolean                                  | Set to `true` to enable the ID5 Universal ID integration. Defaults to `false`.                                                                                 |
| <a href="./id5">`id5PartnerId`</a>                    | Number                                   | Your specific partner ID provided by ID5. Required if `enableID5` is `true`. No default.                                                                         |
| <a href="./id5">`sendPartnerDataToID5`</a>             | Boolean                                  | If `true`, allows the SDK to send user PII (hashed email/phone) to ID5. Requires `enableID5` to be `true`. Defaults to `false`.                                  |

### GA integration options

| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowGAClientId`                  | Boolean                                  | If set to `false`, the Google Analytics Client ID will not be forwarded in POST calls. Defaults to `true`.                                                       |
| `gaClientIdCookiePrefix`           | String                                   | Cookie prefix for the Google Analytics Client ID cookie. If set to `<value>`, the SDK looks for a cookie named `<value>_ga`. Defaults to `''`.                     |
| `gaUserIdCookieName`               | String                                   | Cookie name for the Google Analytics User ID. If set to `<value>`, the SDK looks for a cookie named `<value>`. Defaults to `''`.                                  |
| `gaUserIdOnlyLoginEvent`           | Boolean                                  | If set to `false`, the GA User ID is sent in all event calls. If `true`, it's sent only on `setUserIdentities` calls. Defaults to `false`.                        |

### Logging options
| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enableLogging`                    | Boolean                                  | If set to `false`, debug logs won't appear in the browser console, regardless of `logLevel`. Defaults to `false`.                                               |
| `logLevel`                         | String                                   | Sets the minimum level for logs to appear ('debug', 'info', 'warn', 'error'). Defaults to `'warn'`.                                                              |
| `debug`                            | Boolean                                  | If set to `true`, events are logged to the console instead of being sent to the backend. Useful for development. Defaults to `false`.                           |



### Misc options
| Option                          | Type                                     | Description                                                                                                                                                              |
| :--------------------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="./allowCookieSync">`allowCookieSync`</a>                     | Boolean                                  | If set to `true`, cookie syncing takes place. Defaults to `true`.                                                                                              |
| `user_country`                     | String                                   | If set with a country code (e.g., 'US', 'DE'), this code is sent with every request as `user.user_country`. Defaults to `null`.                                  |
| `eventRetryDelayMillis`            | Number                                   | The delay in milliseconds added per backoff attempt when retrying failed event posts. Defaults to `500`.                                                          |
| `eventUploadPeriodMillis`          | Number                                   | If the event queue size is less than `eventUploadThreshold`, the request to post events will be scheduled after this many milliseconds. Defaults to `500`.         |
| `eventUploadThreshold`             | Number                                   | The maximum number of events allowed in the unsent queue before dispatching immediately. Defaults to `1`.                                                         |
| `uploadBatchSize`                  | Number                                   | The number of events that should be posted at once in a single batch request. Defaults to `1`.                                                                   |
| `maxRetries`                       | Number                                   | The maximum number of retries for posting events before dropping them. Defaults to `3`.                                                                         |
| `maxEventsQueuedTillConsentUnresolved` | Number                                   | The maximum number of events to queue in memory while consent status is unresolved. Defaults to `10`.                                                          |
