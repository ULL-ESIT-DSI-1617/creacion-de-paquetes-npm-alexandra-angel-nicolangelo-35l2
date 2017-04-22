"use strict"

var obj = require("ull-shape-triangle-nico");
var Shape = obj.Shape;

class Triangle extends Shape {

    constructor(options) {
      super(options)
    }

    area() {
      var area = 5 * this.width * this.height;
      return area;
    }
  }

Shape.type.Triangle = Triangle;
module.exports = { Triangle : Triangle};