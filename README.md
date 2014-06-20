# jquery.imageFit

A simple jQuery plugin to resize an img to fit and fill a given rectangle, while maintaining aspect ratio and properly centering it horizontally or vertically to maintain a nice letterboxed look.

## Usage

The `<img>` needs to be inside a `<div>` that you want to fit it into, and the `<img>` itself should be initially hidden so that you don't see it flash full size before it gets scaled. For example:

```html
<div class="product" style="width:200px; height: 200px;">
  <img src="my-giant-non-square-image.png" style="display:none;">
</div>
```

Then, in your page load, you apply this plugin to find the image(s) you want to fit and scale them like this:

```javascript
$(document).ready(function() {
  $('.product img').imageFit(200, 200);
}
```

## Author

_Copyright &copy; 2014 Facet Digital, LLC - http://facetdigital.com_

## License

This code is licensed under the [MIT License](https://raw.githubusercontent.com/facetdigital/jquery.imageFit/master/MIT-LICENSE.txt)
