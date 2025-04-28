---
sidebar_position: 3
title: Custom Consent
---


You may not want to explicitly give consent or even use the TCF API. Instead, you need to have a custom consent flow. The following initial configurations activate the Custom Consent flow:
    
* The useConsent flag is set to true 
* The checkForCMP option is set to false 
* The setConsent method is used to resolve the user consent [setConsent guide](../APIReference/setConsent.md)


The user consent is then stored in cookie storage and used as the user's consent status for the subsequent event log until a new status is set using the same.

Call the setConsent method as mentioned below.

```javascript
zeotap.setConsent(value)
```

Value param is categorised in two categories:
```json
{primaryConsent, brandConsent}
```

primary consent keys - track, cookieSync, identify

Anything other than primary consent keys will be treated as
brand consent