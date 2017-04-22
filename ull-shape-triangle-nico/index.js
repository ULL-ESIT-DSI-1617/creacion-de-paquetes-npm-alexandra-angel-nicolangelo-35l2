var sh = require('ull-shape-triangle-nico');
var triangle = require('triangle.js');

"use strict";

   function calculate(shape, options) {

      var fig = new sh.Shape.type[shape](options);

      var result = fig.getArea();

      return result;

  }

module.exports = {calculate: calculate};