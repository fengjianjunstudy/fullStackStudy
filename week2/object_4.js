"use strict";
var obj ={name:"xiaoming",get bar(){return 2;}}
var copy = Object.assign({},obj);
console.log(copy);
