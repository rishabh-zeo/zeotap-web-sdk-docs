---
sidebar_position: 4
title: API Reference
---


# API Reference Details

## setUserIdentities()

```javascript
window.zeotap.setUserIdentities( {
  'userId': 'user123',
  'email': 'user@example.com'
});
```

**Description:**
This function is used to associate user activities with various identifiers. It accepts an object of key-value pairs where the keys represent the type of identifier (e.g., `userId`, `email`, `phone`) and the values are the corresponding identifier values.

**Parameters:**
* `userIdentities`: `object` - An object containing user identifiers.
    * `userId`: `string` (Optional) - A unique identifier for the user in your system.
    * `email`: `string` (Optional) - The user's email address.
    * `phone`: `string` (Optional) - The user's phone number.
    * ... (Add other relevant parameters specific to your SDK)

**Example:**
```javascript
window.zeotap.setUserIdentities( {
  'userId': '456',
  'customerId': 'ABC-789'
});
```

---

## setPageProperties()

```javascript
window.zeotap.setPageProperties({
  'url': '/',
  'title': 'My Awesome Website'
});
```

**Description:**
This function allows you to track information about the web pages users are viewing in your application. This provides valuable context for their website interactions.

**Parameters:**
* `pageName`: `string` - A string representing the name or category of the viewed page (e.g., 'Product Detail', 'Homepage').
* `properties`: `object` (Optional) - An object containing additional key-value pairs describing the page.
    * `url`: `string` (Optional) - The URL of the viewed page.
    * `title`: `string` (Optional) - The title of the page.
    * `category`: `string` (Optional) - The category of the page.
    * ... (Add other relevant parameters specific to your SDK)

**Example:**
```javascript
window.zeotap.setPageProperties( {
  'productId': 'XYZ-101',
  'productCategory': 'Electronics'
});
```

---

## setEventProperties()

```javascript
window.zeotap.setEventProperties('ButtonClicked', {
  'buttonText': 'Submit',
  'formId': 'mainForm'
});
```

**Description:**
This function is used to record specific user actions (events) on your website and their associated details. This is crucial for understanding user behavior and triggering actions in the Zeotap CDP.

**Parameters:**
* `eventName`: `string` - A string describing the user action (e.g., 'ButtonClicked', 'FormSubmitted').
* `properties`: `object` (Optional) - An object containing key-value pairs providing details about the event.
    * `buttonText`: `string` (Optional) - The text of the button clicked.
    * `formId`: `string` (Optional) - The ID of the form submitted.
    * `value`: `string | number` (Optional) - A value associated with the event.
    * ... (Add other relevant parameters specific to your SDK)

**Example:**
```javascript
window.zeotap.setEventProperties('AddToCart', {
  'productId': 'PQR-222',
  'quantity': 1,
  'price': 29.99
});
```