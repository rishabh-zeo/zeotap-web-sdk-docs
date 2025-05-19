---
title: Setting Up Rules
sidebar_position: 4
description: Learn how to create and configure rules in Adobe Launch to load the Zeotap SDK, track events, and sync user identities.
---

# Setting Up Rules

In Adobe Launch, **Rules** define when and how extensions should act. The Zeotap Collect Extension relies on rules to determine when to:

- Load the Zeotap SDK
- Send events (e.g., page views, clicks, form submissions)
- Sync user identities
- Set consent or additional properties

A rule in Adobe Launch follows the structure:

```
Event → Condition (optional) → Action
```

This section walks you through configuring all essential rules for Zeotap integration.

---

## Rule 2: Track Events (e.g., Page View)

### Purpose
Sends custom events to Zeotap when user interactions occur.

### Example: Page View Tracking

1. Create a new rule named: `Track Page View`
2. Under **Events**, select:
   - **Core → DOM Ready**
3. Under **Actions**:
   - Extension: **Zeotap Collect**
   - Action Type: **Track Event**
   - Event Name: `page_view`
   - Add any additional properties (optional)

#### Optional: Add Conditions
You can limit this rule to certain pages (e.g., homepage) using **Path or URL conditions**.

> ![Track Event Rule](../../static/img/zeotap_logo.svg)

---

## Rule 3: Sync User Identities

### Purpose
Synchronizes user identifiers like email, phone, or login ID with Zeotap.

### Steps

1. Create a rule: `Sync User Identity`
2. Under **Events**, use:
   - **Direct Call Rule** with identifier: `sync_identity`
3. Under **Actions**:
   - Extension: **Zeotap Collect**
   - Action Type: **Sync User Identity**
   - Select which identities to sync (e.g., email, phone, CRM ID)

### Sample JavaScript to Fire the Rule:

```js
_satellite.setVar('email', 'user@example.com');
_satellite.setVar('phone', '14155552671');
_satellite.track('sync_identity');
```

> ![Sync Identity Rule](../../static/img/zeotap_logo.svg)

---

## Rule 4 (Optional): Set Consent Using Custom Logic

If you've configured the extension to use **Custom Consent**, create a rule to explicitly call:

```js
window.zeotap && window.zeotap.setConsent(true);
```

You can place this in a **Custom Code Action**, triggered by:
- a cookie acceptance banner click
- a CMP signal

> ![Set Consent Rule](../../static/img/zeotap_logo.svg)

---

## Additional Notes

- You can reuse **Data Elements** for identity variables like email, phone, or login ID.
- Use **Conditions** to scope rules to specific environments (e.g., dev vs prod) or paths.
- You may chain multiple **Track Event** actions in a single rule if needed.

---

Deprecated

## Rule 1: Load Zeotap SDK

### Purpose
Loads the Zeotap SDK on every page where you want to collect data.

### Steps

1. Navigate to **Rules > Create New Rule**
2. Name it: `Load Zeotap SDK`
3. Under **Events**, choose:
   - **Library Loaded (Page Top)**
4. Under **Actions**:
   - Extension: **Zeotap Collect**
   - Action Type: **Load SDK**
5. Click **Save** and add it to your build library

> ![Load SDK Rule](../../static/img/zeotap_logo.svg)

