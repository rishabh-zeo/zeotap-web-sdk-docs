---
sidebar_position: 1
title: Set User Identities
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

## Identifiers
The user identities can be categorised as below.

1.  Personal Identifiable Information (PII)
    * Raw User PII
    * Hashed User PII
2.  Custom Identities


### Personal Identifiable Information (PII)

Personal Identifiable Information (PII) is any data that can confirm an individual's identity. Examples of PII include name, email address, telephone number, address, and other attributes of an individual’s demographic, financial, health, and other personal details. PII can be categorized as Raw User PII and Hashed User PII.

##### Recognised Raw Keys

| Raw Key          | Type   | Description        |
| ---------------- | ------ | --------------------- |
| fpuid   | String | This is the first-party ID for a given user, such as a CRM ID or DB ID.   |
| email      | String | This is the user's raw email address.   |
| cellno     | String | This is the user's raw cell phone number. Recommended format: ```code<space>number```    |
| loginid   | String | This is the user’s login ID logged.       |


##### Recognised Hashed Keys      

| PII Property | Hashed Key         | Type   | Description            |
| -------- | -------------------- | ------ | -------------------------- |
 | email      | String | email_sha256_lowercase, email_sha256_uppercase, email_md5_lowercase, email_md5_uppercase, email_sha1_lowercase, email_sha1_uppercase      | These are user email in hashed format       |
 | cellno     | String | cellno_without_country_code_sha256, cellno_without_country_code_md5, cellno_without_country_code_sha1, cellno_with_country_code_sha256, cellno_with_country_code_md5,cellno_with_country_code_sha1                        | These are user hashed cellno         |
 | loginid   | String | loginid_sha256_lowercase, loginid_sha256_uppercase, loginid_md5_lowercase, loginid_md5_uppercase, loginid_sha1_lowercase, loginid_sha1_uppercase              | This is the user’s login ID that is hashed and logged.      |
 | fpuid   | String | fpuid        | This is the first-party ID for a given user, such as a CRM ID or DB ID.  |





### Custom Identities

Custom identities are the identities that the client chooses to input and can be any of their first-party identifiers. Note that the hashing configurations are not applicable for custom identities. Some examples of custom identities are crmID, ECID and visitorID. 

 You can pass the custom identities in the format shown below. ```zeotap.setUserIdentities({crmId:'...'})```




## Hashing Scenrios

### Raw
    The client captures user PII in the raw form.
    
    Configuration to be set
    ```javascript
    window.zeotap.init(<WRITE_KEY>)
    ```
### Hashing to be done by Zeotap
    The SDK will hash the data before sending it to Zeotap. All the recognised PIIs are hashed. Custom Identities will be sent as is.
    
    Configuration to be set
    ```javascript
    window.zeotap.init(<WRITE_KEY>, { hashIdentities: true })
    ```
### Already Hashed
    The client is expected to send this data already hashed.

    Configuration to be set
    ```javascript
        window.zeotap.init(<WRITE_KEY>, { areIdentitiesHashed: true })
    ```
    




:::tip[Note]
Identifiers set using setUserIdentities() will be persisted and passed in all subsequent events.
:::