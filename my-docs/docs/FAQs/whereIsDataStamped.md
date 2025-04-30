---
sidebar_position: 2
title: Where is data stamped
description: Control storage mechanism (cookie vs. local storage).
---

# persistenceInCookieStorage

**Type:** `Boolean`

**Default:** `false`

**Description:**

This configuration flag determines the browser storage mechanism used by the Zeotap SDK to persist user identities and consent information between page loads and sessions.

*   **`false` (Default):** The SDK utilizes `localStorage`. This is generally suitable for most cases, offering potentially larger storage capacity and not being automatically sent with network requests.
*   **`true`:** The SDK utilizes `cookieStorage`.

**Why Use `cookieStorage` (`true`)?**

The primary reason to set `persistenceInCookieStorage: true` is for **cross-subdomain persistence**.

*   If your website operates across multiple subdomains (e.g., `www.example.com`, `shop.example.com`, `app.example.com`) and you need the user's identity or consent status set on one subdomain to be recognized on another, you must use cookie storage.
*   `localStorage` is scoped strictly to the origin (protocol + hostname + port) and cannot be shared across subdomains this way.

**Considerations:**

*   **Storage Limits:** Cookies generally have smaller storage limits per domain compared to `localStorage`.
*   **Network Overhead:** Cookies are automatically included in the headers of every HTTP request sent to the domain they are set for. This can add minor overhead to network traffic. `localStorage` data is not sent automatically.
*   **Session Persistence**: In `localStorage` data is only persisted for the particular session. `cookieStorage` stores the data for subsequent sessions as well.

**Example:**

```javascript title="SDK Initialization for Cross-Subdomain Cookie Storage"
window.zeotap.init("YOUR_WRITE_KEY", {
  persistenceInCookieStorage: true, // Use cookie storage
});
```

:::note ZI Stamping
ZI is always stamped in cookie storage irrespective of this flag's value. In case, cookie storage is not available, then ZI is stamped in local storage.
:::

Try out this <a href="/examples/persistenceInCookieStorage_Ex.html" target="_blank">example</a>. 