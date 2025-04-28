---
sidebar_position: 4
title: Set Consent
description: Send consent and/or brand consent flags.
---

**Description:**

If you want to send consent flags to zeotap or brand consent, you may use ```setConsent(value)``` method.

It supports two categories of values Primary Consent and Brand Consent.

## Primary Consent

### Keys for Primary Consent

The following are the primary consent keys that are accepted in user consent:

| Key | Type | Description |
|-----|------|-------------|
| track | Boolean | If the value of the key is true, then you can track any user data |
| cookieSync | Boolean | If the value of the key is true, then you can cookieSync |

## Brand Consent

You can pass any brand consent with/without the primary consent keys. Anything other than the primary consent keys will be considered as brand consent.

```javascript
setConsent({track: true, cookieSync: true}) //provides primary consent values only
setConsent({track: true, brand1Consent: true}) //provides primary consent as well as brand consent
setConsent({ brand1Consent: true, brand2Consent: false}) //provides brand consent only
```

Check out <a href="/examples/quickStartEx.html" target="_blank">this example HTML</a>. 


