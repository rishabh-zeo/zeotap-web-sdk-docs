## Examples

### Basic Example: Tracking Product Views on a Simple E-commerce Website with GTM Integration

Below is a simplified example of an e-commerce website template with 3 products. This example demonstrates how you can track **page views** and **product click events** using the Zeotap Collect Tag via Google Tag Manager (GTM).

---

### Sample HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Basic E-commerce Site</title>
  
  <!-- Google Tag Manager -->
  <script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');  <!-- Replace GTM-XXXXXXX with your container ID -->
  </script>
  <!-- End Google Tag Manager -->

</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <h1>Welcome to Our Store</h1>
  
  <div class="product" data-product-id="101" data-product-name="Blue T-shirt" data-product-price="19.99">
    <h2>Blue T-shirt</h2>
    <button class="buy-button">Buy Now</button>
  </div>
  
  <div class="product" data-product-id="102" data-product-name="Red Sneakers" data-product-price="49.99">
    <h2>Red Sneakers</h2>
    <button class="buy-button">Buy Now</button>
  </div>
  
  <div class="product" data-product-id="103" data-product-name="Green Cap" data-product-price="14.99">
    <h2>Green Cap</h2>
    <button class="buy-button">Buy Now</button>
  </div>

  <script>
    // Push page view event to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page: 'Home',
      timestamp: new Date().toISOString(),
    });

    // Add event listener for product clicks
    document.querySelectorAll('.buy-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        window.dataLayer.push({
          event: 'product_click',
          productId: productElement.dataset.productId,
          productName: productElement.dataset.productName,
          productPrice: productElement.dataset.productPrice,
          timestamp: new Date().toISOString(),
        });
      });
    });
  </script>
</body>
</html>
```