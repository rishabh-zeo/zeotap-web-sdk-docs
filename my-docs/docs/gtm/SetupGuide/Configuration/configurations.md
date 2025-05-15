---
sidebar_position: 0
title: Tag Configuration Overview
---

# Configuring the Zeotap Collect Tag

Once the Zeotap Collect Tag is added to your Google Tag Manager (GTM) workspace, detailed configuration is required to tailor its functionality to your specific data collection needs. This involves setting up various options that control how the tag initializes, tracks user behavior, manages identities, and integrates with other services.

The configuration process is broken down into the following key sections:

Below is a visual overview of where these configuration options are typically found within the GTM interface for the Zeotap Collect Tag:

![Overview of Zeotap Collect Tag configuration options in GTM](../../../../static/img/GTM_ConfigurationOptions.png)

### 1. Initialization Options
This section covers the fundamental settings for the tag, including your Zeotap Write Key, user country for data storage, and consent management preferences. These are critical for the tag to start collecting data correctly.

### 2. Tracking Page Views and Events
Here, you'll define how the tag tracks user interactions, such as page views and custom events. This includes specifying event names, using regex for event matching, and managing properties associated with these events.

### 3. Login and Identities Settings
This part focuses on how user identities are captured and managed. You'll configure settings related to login events, hashing of personally identifiable information (PII) like email or phone numbers.

### 4. Google Analytics Configuration
If you use Google Analytics, this section allows you to configure settings to capture GA-related IDs. This can enhance reporting and enable integrations like Optimize360.

### 5. ID5 Integration
This section enables integration with the [ID5 Identity solution](https://www.id5.io/). It allows the Zeotap Collect Tag to collect and use the ID5 ID for identity resolution and enrichment.
