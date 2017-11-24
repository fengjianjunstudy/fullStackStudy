"use strict";
var obj = {name:"xiaoming",info:{age:18}};
var target = Object.assign({},obj);
console.log(target);
console.log(target.info === obj.info);

//深拷贝

var obj1 = {name:"xiaoming",info:{age:18}};
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.info.age = 20;
console.log('obj1 info:'+obj1.info.age);
console.log('obj2 info:'+obj2.info.age)

//合并对象
var o1 = {a:1};
var o2 = {b:2};
var o3 = {c:3};
var target = Object.assign(o1,o2,o3);
console.log("o1:",o1);
console.log("o2:",o2);
console.log("o3:",o3);
console.log("target:",target);

// 拷贝symbol类型的属性
var o3 = { a: 1 };
var o4 = { [Symbol('foo')]: 2 };

var o5 = Object.assign({}, o3, o4);
console.log(o5);
