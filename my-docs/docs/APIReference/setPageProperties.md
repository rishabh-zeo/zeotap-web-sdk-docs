---
sidebar_position: 2
title: Set Page Properties
description: Send page view events to Zeotap.
---

**Description:**
This function allows you to track information about the web pages users are viewing in your application. This provides valuable context for their website interactions.

**Parameters:**
* `pageName`: `string` - A string representing the name or category of the viewed page (e.g., 'Product Detail', 'Homepage').
* `properties`: `object` (Optional) - An object containing additional key-value pairs describing the page.
    * `url`: `string` (Optional) - The URL of the viewed page.
    * `title`: `string` (Optional) - The title of the page.
    * `category`: `string` (Optional) - The category of the page.
    * ... (Add other relevant parameters)

**Example:**
```javascript
window.zeotap.setPageProperties( {
  'productId': 'XYZ-101',
  'productCategory': 'Electronics',
  'title': 'My Awesome Website'
});
```

:::tip[Note]
If the page view is not recorded this way, then while other events are recorded (refer to the [Set Event Properties](./setEventProperties.md) section), the SDK attaches the page URL, path and referrer URL by default to the payload.
:::