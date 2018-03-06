/***
		静态方法：
		Object.assign(target,...sources) //将所有可以枚举的值从一个或者多个源对象复制到目标对象，返回目标对象，浅拷贝，源属性会覆盖同名的目标对象属性
		Object.create() //使用指定的原型对象及其属性去创建一个新的对象
		Object.defineProperty(proto,propertiesObject)
		Object.defineProperties()
		Object.keys()
		Object.is()
**/
let s1 = {a:1,b:2}
let s2 = {c:3,d:4}
let s3 = {a:5}
let t = {}
let t1 = Object.assign(t,s1,s2,s3)
console.log(t,t1)

let p = {sayName:function(){console.log(this.name)}}
let temp ="xxx";
let newObj = Object.create(p,{name:{configurable:true,get:function(){ return temp;},set:function(val){temp = val+'set'}}})
newObj.name = "xixi";
newObj.sayName();

console.log(newObj.__proto__ === p);