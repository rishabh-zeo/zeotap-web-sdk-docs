---
sidebar_position: 3
title: Configurations
---

# SDK Configuration Flags

The Zeotap Web SDK can be configured during initialization or potentially through specific methods. Below are some common configuration flags you might encounter:

| Flag Name             | Description                                                                                                | Example Link / Section                                   |
| :-------------------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| `writeKey`            | **Required.** Your unique Zeotap Write Key to authorize data sending to your specific account.             | See Integration           |
| `optOut`         | Configures how the SDK handles user consent (e.g., requires explicit consent, integrates with a CMP).        | See Consent Management        |
| `debug`               | Set to `true` to enable verbose logging in the browser console for debugging purposes. Defaults to `false`. | See Initialization        |
| `cookieDomain`        | Specifies the domain for the SDK's first-party cookies (e.g., `.yourdomain.com` for cross-subdomain tracking). | See Advanced Configuration       |
| `cookieExpirationDays`| Sets the expiration duration (in days) for the SDK's cookies.                                              | See Advanced Configuration       |
| `storageType`         | Defines the storage mechanism (e.g., 'localStorage', 'cookie') used by the SDK.                            | See Advanced Configuration       |
