---
sidebar_position: 2
title: TCF/GDPR
---


If you already have a TCF 2.0 Consent Management Platform (CMP) implemented on your website, then the SDK automatically checks for the same. To do this, both the useConsent and checkForCMP flags are set to true. The SDK also queries the TCF consent string to fetch the Publisher’s consent before recording the events. 

In this consent type, you can pass the setConsent method in the format ```setConsent({track: true, cookieSync: true, brand1Consent: true, brand2Consent: true})```. However, only Brand Consent is considered, while the Track, Cookie Sync fields are ignored, even if they are set to true. 

The below table describes the keys/parameters that need to be configured while using the GDPR consent module.

| Function                | Type      | Value     | Description  |
|-------------------------|-----------|-----------|--------------|
| useConsent | Boolean | true | If this option is set to true, then the SDK waits to receive a consent signal and uses that consent to manage actions. |
| checkForCMP | Boolean | true | If this option is set to true, then we check for the presence of the TCF API. If the TCF 2.0 API is present, then we query the CMP API. |
| purposesForTracking | number[] | [1,3,4] | This option is used to pass a list of purpose IDs, based on which you can manage the consent for tracking. |
| purposesForCookieSyncing | number[] | [1,3,4] | This option is used to pass a list of purpose IDs, based on which you can manage the consent for cookie syncing. |