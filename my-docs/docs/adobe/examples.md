---
id: adobe-launch-use-cases
title: Use Cases & Examples
sidebar_position: 5
description: Implement real-world tracking rules such as add to cart, login, and custom event tracking using the Zeotap Collect Extension in Adobe Launch.
---

# Use Cases & Examples

This section covers practical examples of implementing real-world tracking scenarios using the Zeotap Collect Extension in Adobe Launch.

Each example follows Adobe Launch’s Rule model:

```
Event → Condition (optional) → Action
```

These examples assume you've already:
- Installed the Zeotap Collect Extension
- Published changes to your environment

---
## Track Add to Cart

### Goal

Track when a user clicks the "Add to Cart" button.

### Setup

1. Go to **Rules > Create New Rule**
2. Name it: `Track Add to Cart`
3. **Event**:
   - Type: **Click**
   - Element Selector: `.add-to-cart`
4. **Action**:
   - Extension: **Zeotap Collect**
   - Action Type: **Track Event**
   - Event Name: `add_to_cart`
   - Properties:
     - `product_id`: `%productId%`
     - `product_name`: `%productName%`

> Use **Data Elements** to define `%productId%` and `%productName%` dynamically from the DOM.

---

## Track Login Event

### Goal

Track when a user successfully logs in and sync their identity.

### Setup

1. Create a **Direct Call Rule** with identifier `user_logged_in`
2. Name it: `Track Login + Sync Identity`
3. **Actions**:
   - **Action 1**: Zeotap Collect → **Track Event**
     - Event Name: `user_login`
   - **Action 2**: Zeotap Collect → **Sync User Identity**
     - Set Email / Phone using Data Elements (or `_satellite.setVar()`)

### Trigger Example in JS

```js
_satellite.setVar('email', 'user@example.com');
_satellite.setVar('phone', '1 4155552671');
_satellite.track('user_logged_in');
```

---

## Track Form Submission

### Goal

Track when a user submits a newsletter signup form.

### Setup

1. Create a new rule: `Newsletter Signup Submit`
2. **Event**:
   - Type: **Form Submission**
   - Selector: `#newsletter-form`
3. **Action**:
   - Zeotap Collect → Track Event
   - Event Name: `newsletter_signup`
   - Property: `email` = `%formEmail%` (create Data Element to pull this)

---

## Screenshot Placeholder

![Example Rule for Add to Cart](../../static/img/zeotap_logo.svg)

---

