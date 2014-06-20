// Copyright (c) 2014 - Facet Digital, LLC
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// Generated by CoffeeScript 1.7.1
//
(function($) {
  return $.fn.imageFit = function(dstWidth, dstHeight) {
    var dstAspectRatio;
    dstAspectRatio = dstWidth / dstHeight;
    return this.one("load", function() {
      var $img, srcAspectRatio, srcHeight, srcWidth;
      this.removeAttribute("width");
      this.removeAttribute("height");
      this.style.width = this.style.height = "";
      srcWidth = this.width;
      srcHeight = this.height;
      srcAspectRatio = srcWidth / srcHeight;
      if (srcAspectRatio > dstAspectRatio) {
        this.width = dstWidth;
        this.height = srcHeight / srcWidth * dstWidth;
      } else {
        this.width = srcWidth / srcHeight * dstHeight;
        this.height = dstHeight;
      }
      $img = $(this);
      $img.css('margin-left', ((dstWidth - this.width) / 2) + "px");
      $img.css('margin-top', ((dstHeight - this.height) / 2) + "px");
      return $img.fadeIn('fast');
    }).each(function() {
      if (this.complete) {
        $(this).trigger('load');
      }
      return this.src = this.src;
    });
  };
})(jQuery);
