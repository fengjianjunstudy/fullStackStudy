"use strict";
//Object.create实现类式继承
function  Shape() {
    this.x = 0;
    this.y = 0;
}
Shape.prototype.move = function(x,y){
    this.x = x;
    this.y = y;
}

function Rectangle(){
    super.call(this);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
