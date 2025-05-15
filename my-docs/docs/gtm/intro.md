---
title: Introduction to Zeotap GTM Tag
description: Understand how Zeotap integrates with Google Tag Manager (GTM) to streamline your data collection and tag management processes.
sidebar_position: 0
---

# Implementing the Google Tag Manager Source with Zeotap

Google Tag Manager (GTM) is a powerful system that simplifies the management and deployment of marketing tags—snippets of code or tracking pixels—on your website or mobile app without needing direct code modifications. Integrating GTM centralizes your tags, making it easier for marketers to manage them autonomously.

## Core Components of Google Tag Manager

GTM operates with three fundamental elements:

-   **Tags**: These are snippets of JavaScript or tracking pixels from third-party services (e.g., Google Analytics, Facebook Pixel, or custom HTML tags like the Zeotap Collect Tag).
-   **Triggers**: These define when and how a tag should be activated (fired). For instance, a trigger could fire a tag on a page view, a button click, or a custom event.
-   **Variables**: These are placeholders for values that GTM might need for tags and triggers to function correctly. They can be built-in (like Page URL) or user-defined (like a specific data layer value).

## Prerequisites

To effectively use the Zeotap Collect Tag Template within GTM, ensure you have the following in place:

1.  **GTM Account**: A Google Tag Manager account must be created.
2.  **GTM Container Installed**: The GTM container snippet must be correctly installed on your website.

> For detailed guidance on creating accounts, setting up containers, and understanding GTM tags, please refer to Google's official documentation on [Setting up and Installing Tag Manager](https://support.google.com/tagmanager/answer/6103696).

## Zeotap Collect Tag Template: An Overview

The Zeotap Collect Tag is offered as a **custom template** within Google Tag Manager, designed for seamless integration. This JavaScript (JS) tag is engineered to capture events and user information as visitors interact with your website.

**Key Characteristics of the Zeotap Collect Tag:**

-   **Asynchronous Operation**: The tag loads and operates asynchronously, meaning it won't block your website's content from loading or negatively impact the end-user experience.
-   **Data Layer Dependency**: To capture comprehensive event information, the Zeotap Collect tag relies on a well-structured data layer on your website. This data layer is crucial for making relevant information available for segment activation and event orchestration.
-   **Flattened Data**: The data layer object's information is flattened (converted into a simple key-value structure) and utilized in the corresponding data collection calls made by the tag.

### Leveraging GTM Custom Templates

GTM's custom templates empower organizations to create their own tag and variable definitions. This allows for standardized and reusable components that can be used alongside GTM's built-in templates. Custom templates, like the Zeotap Collect Tag, provide a user-friendly interface (with text input fields, settings, tables, dropdowns, etc.) for configuring the underlying custom code, simplifying complex tag deployments.

