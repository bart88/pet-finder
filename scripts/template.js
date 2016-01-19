define(['jquery'], function($) {
  'use strict';

  /**
   * Pass a html element.
   *
   * @param element A HTML element
   * @constructor
   */
  function Template(element) {
    this.wrapper = $(document.createElement(element));
  }

  function ApplyProp(prop) {
    var $wrapper = this.wrapper;
    // should be an object
    if(typeof prop === 'object') {
      $wrapper.prop(prop.name, prop.value);
      return $wrapper;
    } else {
      console.error('Must be an object');
    }
  }

  Template.prototype = {
    constructor: Template,
    attach: ApplyProp
  };

  return Template;

});
