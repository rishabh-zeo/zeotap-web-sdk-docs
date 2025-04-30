---
sidebar_position: 1
title: Raw Identitifiers
description: Examples showing different ways to handle identifier hashing with setUserIdentities.
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zeotap SDK - setUserIdentities (Raw Example)</title>
    <style>
        body { font-family: sans-serif; line-height: 1.6; padding: 20px; max-width: 700px; margin: auto; }
        button { padding: 10px 15px; font-size: 1em; cursor: pointer; margin-top: 10px; }
        pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
        code { font-family: monospace; }
    </style>

    <!-- 1. Zeotap SDK Integration Snippet -->
    <script type="text/javascript">
      !function(e,t){var n=t.createElement("script");n.type="text/javascript",n.crossorigin="anonymous",n.async=!0,n.src="https://content.zeotap.com/sdk/qa/zeotap.min.js",n.onload=function(){};var s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s);function o(e,t,n){function s(t){e[t]=function(){e[n].push([t].concat(Array.prototype.slice.call(arguments,0)))}}for(var o=0;o<t.length;o++)s(t[o])}var r=e.zeotap||{_q:[],_qcmp:[]};o(r,["init","setEventProperties","setUserProperties","setPageProperties","setMetaProperties","setUserIdentities","unsetUserIdentities","setZI"],"_q"),o(r,["setConsent","addAskForConsentActionListener"],"_qcmp"),e.zeotap=r}(window,document);
    </script>

    <!-- 2. Initialize the SDK -->
    <script type="text/javascript">
      // IMPORTANT: Replace "YOUR_WRITE_KEY" with your actual Zeotap Write Key
      const writeKey = "YOUR_WRITE_KEY";

      
      const sdkOptions = {
        hashIdentities: false,      // Explicitly tell SDK NOT to hash the provided raw values
        areIdentitiesHashed: false  // Explicitly tell SDK the provided values are NOT already hashed
        };

      window.zeotap.init(writeKey, sdkOptions);
      console.log("Zeotap SDK Initialized (Raw Scenario).");
    </script>
</head>
<body>

    <h1>Zeotap SDK: <code>setUserIdentities</code> (Raw Identifiers Example)</h1>

    <p>This page demonstrates sending raw, unhashed identifiers like email and phone number directly to the Zeotap SDK using <code>setUserIdentities</code>.</p>
    <p>The SDK is initialized without any specific hashing configurations (`areIdentitiesHashed: false`, `hashIdentities: false` are the defaults).</p>

    <button id="identifyButton">Set Raw User Identities</button>

    <p>Click the button above. Check your browser's developer console (F12) to see the function call and the data being passed.</p>

    <!-- 3. Script to handle the button click -->
    <script>
        document.getElementById('identifyButton').addEventListener('click', function() {
            // Define the raw identities
            const rawIds = {
              email: 'user@example.com',       // Raw email
              cellno: '+1 5551234567',         // Raw phone number (using 'cellno' as per API ref)
              userId: 'customer-abc-123'     // Your internal ID
              // You could also add custom identities here, e.g., crmId: 'XYZ987'
            };

            // Call setUserIdentities with the raw data
            window.zeotap.setUserIdentities(rawIds);

            // Log to console for verification
            console.log('Called window.zeotap.setUserIdentities with:', rawIds);
        });
    </script>

</body>
</html>
```


Try out this <a href="/examples/setUserIdentities_rawEx.html" target="_blank">example</a>. 


