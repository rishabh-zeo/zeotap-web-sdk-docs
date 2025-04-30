---
sidebar_position: 2
title: Quick Start Guide
---


## Integration

To install the Zeotap Web SDK, add the following script to your file:

```js
    <script type="text/javascript">!function(e,t){var 
    n=t.createElement("script");
    n.type="text/javascript",n.crossorigin="anonymous",n.async= !0,n.src="<SRC>",n.onload=function(){};
    var s=t.getElementsByTagName("script") [0];
    s.parentNode.insertBefore(n,s);
    function o(e,t,n){function s(t){e[t]=function() {e[n].push([t].concat(Array.prototype.slice.call(arguments,0)))}}for(var o=0;o<t.length;o++)s(t[o])}var r=e.zeotap||{_q:[],_qcmp:[]};
    o(r, 
    ["init","setEventProperties","setUserProperties","setPageProperties","setMetaProperties ","setUserIdentities","unsetUserIdentities","setZI"],"_q"),o(r, 
    ["setConsent","addAskForConsentActionListener"],"_qcmp"),e.zeotap=r}(window,document); </script><script type="text/javascript">window.zeotap.init("YOUR_WRITE_KEY");
    </script>
```

This integrates the zeotap sdk to your website.

## Setting up of User Identities <a href="./APIReference/setUserIdentites.md" style={{"fontSize": "15px"}}>(Learn more)</a>

Once the Zeotap SDK is integrated, you can start setting up user identities. User identities are how you associate data to specific users.

The Zeotap SDK provides the `setUserIdentities` function to identify your users in order to manage them.

 ```js
        window.zeotap.setUserIdentities({
            email: 'user@example.com',
            cellno: '+15551234567',
            userId: '12345',
        })
```

## Sending page propeties to Zeotap <a href="./methods.md" style={{"fontSize": "15px"}}>(Learn more)</a>

Page properties allow you to send information about the current page to Zeotap. This can be useful for tracking user behavior, understanding page engagement, and segmenting your audience.

To send page properties, use the `setPageProperties` method:

 ```js
        window.zeotap.setPageProperties({
          pageCategory: 'product',
          pageName: 'product-details',
          pageUrl: 'https://www.example.com/product/123',
        });
```


## Tracking user events <a href="./methods.md" style={{"fontSize": "15px"}}>(Learn more)</a>

setEventProperties allows you to track specific actions that users take on your website, such as adding an item to a cart, completing a purchase, or signing up for a newsletter.

To track user events, you can use the `setEventProperties` method:

```js
        window.zeotap.setEventProperties('Product Added', {
          productId: '12345',
          productName: 'Example Product',
          category: 'Electronics',
          price: 99.99,
        });
```

## Example

Check out <a href="/examples/quickStartEx.html" target="_blank">this example</a>. 