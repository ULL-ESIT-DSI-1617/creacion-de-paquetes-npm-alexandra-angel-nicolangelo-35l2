"use strict"

class Shape{
    
    constructor(options){
        Object.assign(this, options);
        console.log(this);
    }
    
    getArea(){
       // var fig = new Shape.ShapeTipos[this.constructor.name](this);
        return this.area();
    }
}

Shape.ShapeTipos = Shape.ShapeTipos || {}



class Triangle extends Shape{
        constructor(options){
            
            super(options); 
        }
          
        area(){
           var area = 5 * this.width * this.height;
           return area;
        }
}

Shape.ShapeTipos.Triangle = Triangle;

class Square extends Shape{
      constructor(options){
            super(options); 
      }
          
      area(){
         var area = Math.pow(this.width, 2);
         return area;
      }
}

Shape.ShapeTipos.Square = Square;

class Rectangle extends Shape{
      constructor(options){
            super(options); 
      }
          
      getArea(){
         var area = this.width * this.height;
         return area;
      }
}

Shape.ShapeTipos.Rectangle = Rectangle;

function getArea(shape, options){
     
      var fig = new Shape.ShapeTipos[shape](options);
      return fig.getArea();
     
}

try {
  var t = getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = getArea('Square',    { width: 100 });
  console.log(s);
  var r = getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
}
catch (e) {
  console.log(e);
}