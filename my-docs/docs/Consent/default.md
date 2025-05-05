---
sidebar_position: 1
title: Default Behavior (No Explicit Consent)
description: Default SDK behavior for consent resolution .
---

## Default
In this scenario, you directly provide consent to Zeotap by setting the optOut flag to true or false. For all these three purposes, if the optOut flag is set to true, then it indicates that you have not granted access to Zeotap. Here, SDK is not allowed to perform user identification or tracking user data. However, if the optOut flag is set to false, then the SDK is allowed to perform all the above actions.

Default setting is `optout: false`

In this consent type, you can pass the setConsent method in the format ```setConsent({track: true, cookieSync: true, brand1Consent: true, brand2Consent: true})```. However, only Brand Consent is considered , while the Track, Cookie Sync  fields are ignored, even if they are set to true.

```javascript title="SDK Initialization (Default Mode)"
window.zeotap.init("YOUR_WRITE_KEY");
```



