"use strict";
//Object.freeze
function Foo(){

}
function Bar(){

}
function Baz(){

}
Foo.prototype = Object.create(Bar.prototype);
Baz.prototype = Object.create(Foo.prototype);
var baz = new Baz();
console.log(Foo.prototype.isPrototypeOf(baz));
