---
title: Configuring the Zeotap Collect Extension
sidebar_position: 3
description: Configure the Zeotap Collect Extension in Adobe Launch, including write key, consent preferences, identity handling, and hashing settings.
---

# Configuring the Zeotap Collect Extension

After installing the Zeotap Collect Extension in Adobe Launch, the next step is to configure it with your required tracking and consent settings. This includes setting up your Write Key, choosing a consent method, configuring identity handling, and optionally enabling ID5 support.

> All settings are available inside the **Zeotap Collect** extension configuration screen (under the **Installed Extensions** tab).

---

## Core Configuration Fields

### Write Key

- **Purpose**: This is your unique identifier for data collection, provided by Zeotap.
- **Action**: Enter the Zeotap **Write Key** assigned to your organization or environment.

```text
Example: zt_us_prod_1234567890
```

---

### Consent Method

- **Purpose**: Defines how the tag handles user consent before collecting any data.

| Option              | Description |
|---------------------|-------------|
| **Default Opt-in**  | Assumes consent is granted by default (recommended only in markets without regulation). |
| **TCF (GDPR)**      | Integrates with IAB TCF-compliant CMPs using `__tcfapi`. |
| **Custom Consent**  | You control consent using `window.zeotap.setConsent(...)` via custom logic or events. |

> If you select **Custom Consent**, make sure to configure the  `setConsent()` action in your rule.

---

### Country Code

- **Purpose**: Determines the data residency and storage policy for Zeotap ingestion.

```text
Example: IN (for India), DE (for Germany), US (for United States)
```

> Contact your Zeotap representative for the appropriate country code.

---

## Identity and Hashing Settings

Zeotap supports capturing user identities in both raw and hashed formats. Depending on your setup and privacy requirements, configure the following:

---

### Identity Collection Type

Choose one or both of the following:

- **Raw Identity Fields**  
  Collect raw values for email, phone, login ID.
- **Hashed Identity Fields**  
  If values are already hashed client-side, provide them directly. You can specify the **hashing algorithm** (e.g., SHA-256).

---

### Hashing Mode

- **Client-side hashing** (default): Hash raw identities in the browser using the selected algorithm.
- **Send unhashed**: Only use if your infrastructure is hashing elsewhere or Zeotap will hash it server-side.
- **Do not hash**: Only valid if working with anonymous IDs or encrypted identities.

---

### Configurable Identity Fields

| Identity Type     | Input Options             |
|-------------------|---------------------------|
| Email             | Raw or hashed (with variable selection) |
| Phone Number      | Raw or hashed, with country code |
| Login ID          | Optional custom identifier |
| Custom Identifiers| CRM ID, ECID, etc. via Data Elements or JavaScript variables |

> You can define these identities using Adobe Data Elements or directly in your rule’s **Set Variables** action.

---

### Optional: Enable ID5

If you plan to capture and sync ID5 identifiers:

- Enable the **ID5 Integration** checkbox.
- Add the [ID5 JavaScript snippet](https://www.id5.io) to your site.
- Provide a Data Element or JS variable that contains the `id5id`.

---

## Example Screenshot (Placeholder)

![Zeotap Extension Configuration](../../static/img/zeotap_logo.svg)

---

## Save and Publish

1. After completing all fields, click **Save**.
2. Return to the **Publishing Flow**.
3. Add the updated extension config to your active library.
4. Submit, approve, and publish the changes to your environment.

---