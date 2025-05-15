---
sidebar_position: 4
title: 4. Google Analytics Configuration
description: Configure the Zeotap Collect Tag to capture GA-related IDs like Client ID or User ID for improved identity completeness and integrations such as Optimize360.
---

# 4. Google Analytics Configuration

This section allows you to configure how the Zeotap Collect Tag interacts with your Google Analytics (GA) setup. Capturing GA-related IDs such as the Client ID or User ID can help improve identity resolution, data completeness, and enable integrations with services like **Google Optimize360**.

You can specify whether these IDs are collected on all events or only during login.

---

### Pick Google Analytics Client ID

- **Purpose**: If selected, the Zeotap tag will automatically extract the GA Client ID from the relevant `_ga` cookie.
- **Usage**: This ID is commonly used in GA for identifying unique users across sessions.

#### Configuration

- **Enable Client ID Capture**: Select the checkbox labeled `Pick Google Analytics client ID` in the tag configuration.
- **GA Client ID Cookie Prefix**:
  - If your GA cookie is prefixed (e.g., `brandname_ga`), specify that prefix here.
  - If the GA cookie is standard (`_ga`), leave this field empty.

> **Note**: Make sure your GA setup supports this format and that the `_ga` cookie is accessible at the time of tag execution.

#### Example

If your cookie is named `_ga_example`, enter `example` as the prefix.

```text
GA Client ID Cookie Prefix: example
```

---

### Use Only for Login Event

- **Purpose**: Restrict the use of GA IDs (Client ID or User ID) **only** to login-related events.
- **Behavior**: When this checkbox is selected, the captured GA IDs will only be attached to events that are identified as login actions in your GTM configuration.

> Recommended if GA identifiers are only needed for authenticated users.

---

### Example Configuration UI

![GA Configuration Example Screenshot](../../../../static/img/zeotap_logo.svg)

---

If you're unsure about how your GA cookie is configured or whether to include the Client ID on all events or just login, consult your analytics team or review your GA settings.

