"use strict"

class Shape{
    constructor(options){
          Object.assign(this, options);
          console.log(this);
    }
    getArea(){
        return this.area();
    }
}

function getArea(shape, options){
    
    var fig = new Shape.ShapeTipos[shape](options);
    return fig.getArea();
}

Shape.ShapeTipos = Shape.ShapeTipos || {}
module.exports = {
 Shape: Shape,
 getArea: getArea
};