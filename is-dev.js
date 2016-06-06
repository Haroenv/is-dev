/**
 * Check if you're on a development version or the live version of your site
 * @module isDev
 */
(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function() {
      return (root.isDev = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.isDev = factory();
  }
})(this, function() {
  // UMD Definition above, do not remove this line

  // To get to know more about the Universal Module Definition
  // visit: https://github.com/umdjs/umd

  'use strict';

  /**
   * Check if you're on a development version or the live version of your site
   * @alias module:isDev
   * @param {array} [options.dev=['.dev','localhost','file:///']]
   *   Parts of the url that signify a development build
   * @param {string} [options.message='development']
   *   Message to display if you're in development mode
   * @param {string} [options.style='top-right']
   *   Style of the message to display in: [top-left, top-right, bottom, top, none]
   *   In case this isn't 'none', the following css gets added:
   *   <code>position: fixed; padding: 1em; display: block; background-color: salmon; color: white; opacity: .7; font-weight: 700; z-index: 9999;</code>
   * @param {string=} options.class.custom
   *   Additional css to add to the element
   */
  function isDev(options) {
    // setting of defaults
    var style = 'position: fixed; padding: 1em; display: block; background-color: salmon; color: white; opacity: .7; font-weight: 700; z-index: 9999;';
    if (typeof options.dev == 'undefined') {
      options.dev = ['.dev','localhost','file:///'];
    }
    if (typeof options.message == 'undefined') {
      options.message = 'development';
    }
    if (typeof options.style == 'undefined') {
      options.style = 'top-right';
    }
    if (typeof options.custom == 'undefined') {
      options.custom = '';
    }

    // we'll assume that the site isn't development by default
    var dev = false;

    // loop over all the options to set dev status
    dev = options.dev.some(function(part){
      return location.href.indexOf(part) !== -1;
    });

    if (dev) {
      var el = document.createElement('div');
      // set the message
      el.innerHTML = options.message;

      // add the style
      el.style.cssText = style;
      switch (options.style) {
        case 'top-right':
          el.style.cssText += 'top: 0; right: 0;';
          break;
        case 'top-left':
          el.style.cssText += 'top: 0; left: 0;';
          break;
        case 'top':
          el.style.cssText += 'left: 0; top: 0; width: 100%; text-align: center;';
          break;
        case 'bottom':
          el.style.cssText += 'left: 0; bottom: 0; width: 100%; text-align: center;';
          break;
        case 'none':
          el.style.cssText = '';
          break;
      }

      // add custom styles
      el.style.cssText += options.custom;

      // insert the element
      document.body.insertBefore(el, document.body.firstChild);
    }
  };

  return isDev;

});
