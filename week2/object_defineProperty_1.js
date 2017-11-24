"use strict";
//Object.defineProperties
var obj = {};
Object.defineProperty(obj,"name",{
    configurable:true,
    writable:true,
    value:"xiaoming",
    enumerable:true
})
console.log(obj);
obj.name = "xiaohua";
console.log(obj);