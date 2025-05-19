---
title: Adobe Launch Integration Overview
sidebar_position: 1
description: Learn how to integrate the Zeotap Collect Tag using Adobe Experience Platform Tags (Adobe Launch) with support for consent, identity tracking, and event capture.
---

# Adobe Launch Integration Overview

The **Zeotap Collect Tag Extension** for **Adobe Experience Platform Tags (Adobe Launch)** allows you to seamlessly capture user events, identities, and consent signals from your website. This data flows directly into the Zeotap Customer Intelligence Platform and powers downstream use cases such as activation, identity resolution, analytics, and more.

Adobe Launch is a tag management system that helps manage and deploy marketing and analytics tags. The Zeotap extension is available in the Adobe Tags Extension catalog and supports a wide range of features, including:

- Event tracking (page views, custom events, etc.)
- Identity syncing (raw or hashed PII)
- Consent management (TCF, custom, default)
- ID5 integration
- Cookie syncing

---

## Why Use Adobe Launch with Zeotap?

- **No-code deployment**: Configure tag rules visually without coding.
- **Consent-aware**: Fully supports GDPR, TCF 2.0, and custom consent workflows.
- **Modular rules**: Fine-grained control using Adobe’s Event → Condition → Action rule engine.
- **Extensible**: Works with Adobe Analytics, CMPs, and third-party tools like ID5.

---

## Key Capabilities of the Zeotap Collect Extension

| Feature                    | Description |
|----------------------------|-------------|
| **Event Tracking**         | Capture user interactions like page views, product clicks, form submissions, etc. |
| **User Identity Capture**  | Collect raw or hashed PII and custom IDs like ECID, CRM ID. |
| **Consent Management**     | Supports GDPR/TCF, default opt-in, and custom flows via `setConsent`. |
| **Cookie Syncing**         | Enabled by default for Zeotap and partner platforms. |
| **ID5 Integration**        | Capture ID5 identifiers for identity enrichment. |

---

## What You'll Learn in This Guide

This guide walks you through:

1. Installing the Zeotap Collect Extension in Adobe Launch
2. Configuring core settings like consent method, write key, and identity handling
3. Creating Rules to:
   - Load the SDK
   - Track Events
   - Sync User Identities
4. Optional: ID5 Integration
5. Debugging and validation

Each step includes relevant Adobe Launch UI references, screenshots (as placeholders), and real implementation examples.

---
