"use strict";
//Object.freeze
var obj = {};
Object.defineProperty(obj,"sex",{
    writable:false,
    configurable:false,
    value:"男",
    enumerable:true
})
function SuperClass(name){
    this.name = name;
}
SuperClass.prototype.sayName = function(){
    console.log(this.name);

}
function SubClass(name,age){
    SuperClass.call(this,name);
    this.age = age;
}
SubClass.prototype = Object.create(SuperClass.prototype,Object.getOwnPropertyDescriptors(obj))
var subObj = new SubClass("xiaoming",18)
