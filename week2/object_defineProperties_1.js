"use strict";
//Object.defineProperties
var obj = {};
Object.defineProperties(obj,{
    name:{
        configurable:true,
        writable:true,
        value:"xiaoming",
        enumerable:true
    },
    age:{
        configurable:false,
        writable:false,
        value:18,
        enumerable:true
    }
})
console.log(obj);
obj.name = "xiaohua";
console.log(obj);