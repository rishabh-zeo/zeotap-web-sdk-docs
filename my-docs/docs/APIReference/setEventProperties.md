---
sidebar_position: 3
title: Tracking User Actions
description: Track user activities.
---

**Description:**

You can use this method to track events after tracking the page views. Use the ```setEventProperties``` method to track different user actions on the website.
**Parameters:**
* `eventName`: `string` - A string describing the user action (e.g., 'ButtonClicked', 'FormSubmitted').
* `properties`: `object` (Optional) - An object containing key-value pairs providing details about the event.
    * `buttonText`: `string` (Optional) - The text of the button clicked.
    * `formId`: `string` (Optional) - The ID of the form submitted.
    * `value`: `string | number` (Optional) - A value associated with the event.
    * ... (Add other relevant parameters)

**Example:**
```javascript
window.zeotap.setEventProperties('AddToCart', {
  'productId': 'PQR-222',
  'quantity': 1,
  'price': 29.99
});
```