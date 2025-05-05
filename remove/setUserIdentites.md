---
sidebar_position: 1
title: Tracking User Identities
description: Send identifiers to persistently identify user activity across the website.
---

**Description:**
This function is used to associate user activities with various identifiers. It accepts an object of key-value pairs where the keys represent the type of identifier (e.g., `userId`, `email`, `cellno`) and the values are the corresponding identifier values.

**Example:**
```javascript
window.zeotap.setUserIdentities( {
  'email': 'user@example.com',
  'userId': '456',
  'customerId': 'ABC-789'
});
```

:::tip[Note]
Identifiers set using setUserIdentities() will be persisted and passed in user node of payload all subsequent events.
:::

## Identifiers
The user identities can be categorised as below.

1.  Personal Identifiable Information (PII)
    * Raw User PII
    * Hashed User PII
2.  Custom Identities


### Personal Identifiable Information (PII)

Personal Identifiable Information (PII) is any data that can confirm an individual's identity. Examples of PII include name, email address, telephone number, address, and other attributes of an individual’s demographic, financial, health, and other personal details. PII can be categorized as Raw User PII and Hashed User PII.

#### Recognised Raw Keys

| Raw Key          | Type   | Description        |
| ---------------- | ------ | --------------------- |
| fpuid   | String | This is the first-party ID for a given user, such as a CRM ID or DB ID.   |
| email      | String | This is the user's raw email address.   |
| cellno     | String | This is the user's raw cell phone number. Recommended format: ```code<space>number```    |
| loginid   | String | This is the user’s login ID logged.       |
| <span style={{"color": "red", "text-decoration": "line-through"}}>cellno_cc</span> |  <span style={{"color": "red"}}>String</span> | <span style={{"color": "red"}}>This key is deprecated.</span> |


#### Recognised Hashed Keys      

| PII Property | Hashed Key         | Type   | Description            |
| -------- | -------------------- | ------ | -------------------------- |
 | email      | String | email_sha256_lowercase, email_sha256_uppercase, email_md5_lowercase, email_md5_uppercase, email_sha1_lowercase, email_sha1_uppercase      | These are user email in hashed format       |
 | cellno     | String | cellno_without_country_code_sha256, cellno_without_country_code_md5, cellno_without_country_code_sha1, cellno_with_country_code_sha256, cellno_with_country_code_md5,cellno_with_country_code_sha1                        | These are user hashed cellno         |
 | loginid   | String | loginid_sha256_lowercase, loginid_sha256_uppercase, loginid_md5_lowercase, loginid_md5_uppercase, loginid_sha1_lowercase, loginid_sha1_uppercase              | This is the user’s login ID that is hashed and logged.      |
 | fpuid   | String | fpuid        | This is the first-party ID for a given user, such as a CRM ID or DB ID.  |


:::tip[Note]
Checkout how the cellno handling and processing is done by sdk [here](../FAQs/howToSendCellno)
:::

### Custom Identities

Custom identities are the identities that the client chooses to input and can be any of their first-party identifiers. Note that the hashing configurations are not applicable for custom identities. Some examples of custom identities are crmID, ECID and visitorID. 

 You can pass the custom identities in the format shown below. ```zeotap.setUserIdentities({crmId:'...'})```




## Hashing Scenrios

### Raw
   This is the simplest case where you provide raw, unhashed identifiers like email addresses or phone numbers directly to the SDK. The SDK sends these values as-is to the Zeotap backend.

    ***Implementation***

    To ensure the SDK does **not** automatically hash the raw identifiers you provide, you must explicitly set ```{`hashIdentities: false`, `areIdentitiesHashed: false`}``` during initialization.


    ```javascript title="SDK Initialization"
    // 1. Initialize SDK
    window.zeotap.init("YOUR_WRITE_KEY", {hashIdentities: false, areIdentitiesHashed: false});
    ```

    ```javascript title="Set User Identities Implementation"
    // 2. Set raw identities
    window.zeotap.setUserIdentities({
    email: 'user@example.com',       // Raw email
    cellno: '1 5551234567',         // Raw phone number
    userId: 'customer-abc-123'     // Your internal ID (usually not hashed)
    });
    ```
    Check out this [example](../Examples/setUserIdentities_Raw)
    
### Already Hashed
    This example demonstrates how to use the `setUserIdentities` method when your application has *already* hashed the user identifiers (like email or phone number) before calling the Zeotap SDK. This is common if hashing is done server-side or via separate client-side logic.

***Implementation***

    You must configure the SDK during initialization to indicate that the identities you will provide are pre-hashed. This prevents the SDK from attempting to hash them again.

    Set the `areIdentitiesHashed` flag to `true`:

    ```javascript title="SDK Initialization"
    // Initialize SDK, indicating provided identities are already hashed
    window.zeotap.init("YOUR_WRITE_KEY", {
    areIdentitiesHashed: true
    });
    ```


    ```javascript title="Set User Identities Implementation"
    // Assume these hashes were generated by your system (e.g., SHA-256)
    const preHashedEmailSha256 = 'a1b2c3d4e5f6...'; // Example SHA-256 hash of the email lowercase
    const preHashedPhoneWithCCSha256 = 'f6e5d4c3b2a1...'; // Example SHA-256 hash of the phone with country code

    // 2. Set pre-hashed identities using specific keys
    window.zeotap.setUserIdentities({
    email_sha256_lowercase : preHashedEmailSha256,   // Provide the pre-hashed email
    cellno_with_country_code_sha256: preHashedPhoneWithCCSha256,   // Provide the pre-hashed phone
    userId: 'customer-abc-123'
    });
    ```
    Check out this [example](../Examples/setUserIdentities_Hashed)

### Hashing to be done by Zeotap
    This example demonstrates how to use the `setUserIdentities` method when you have raw identifiers (like email or phone number) and want the Zeotap SDK to automatically hash them client-side before sending them to the backend. This approach enhances privacy by ensuring raw PII doesn't leave the browser via the SDK's network requests.

***Implementation***

    You need to configure the SDK during initialization to enable its built-in hashing functionality.

    Set the `hashIdentities` flag to `true`:

    ```javascript title="SDK Initialization"
    // 1. Initialize SDK, enabling automatic client-side hashing
    window.zeotap.init("YOUR_WRITE_KEY", {hashIdentities: true});
    ```

    ```javascript title="Set User Identities Implementation"
    // 2. Set the identities
    window.zeotap.setUserIdentities({
    email: 'user@example.com',       // Provide RAW email
    cellno: '1 5551234567',         // Provide RAW phone number
    userId: 'customer-abc-123'     // Internal IDs are typically not hashed
    });
    ```

    Check out this [example](../Examples/setUserIdentities_needHashing)