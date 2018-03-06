/***
		静态方法：
		Object.assign(target,...sources) //将所有可以枚举的值从一个或者多个源对象复制到目标对象，返回目标对象，浅拷贝，源属性会覆盖同名的目标对象属性
		Object.create(proto,propertiesObject) //使用指定的原型对象及其属性去创建一个新的对象
		Object.defineProperty(obj,prop,descriptor)  // 定义或者修改对象的一个属性
		Object.defineProperties(obj,props) //定义或者修改对象的属性（一个或者多个）
		Object.keys()  返回指定对象自有可枚举属性组成的数组
		Object.is(val1,val2) 判断两个值是否是相同的值
		Object.entries()返回一个给定对象自身可以枚举属性的键值对数组，for-in 循环可枚举的自身及原型链中的属性
		Object.freeze() 冻结对象 
		Object.isFreezen(obj) 判断一个对象是否被冻结
		Object.getOwnPropertyNames(obj) 返回指定对象的所有自身可枚举属性（不包括Symbol值作为名称的属性）的属性名组成的数组
		Object.getOwnPropertyDescriptor(obj,prop) 返回指定对象上一个自有属性对应的属性描述符
		Object.getOwnPropertyDescriptors(obj) 返回指定对象上所有自有属性对应的描述符(键值对：键=>>属性名，值=>>对应的属性描述符)
		Object.getPrototypeOf(obj) 返回指定对象的原型
		Object.isExtensible(obj) 判断一个对象是否可扩展
		Object.seal(obj) 密封一个对象
		Object.isSealed(obj) 判断一个对象是否被密封
		Object.preventExtensions() 让一个对象不可扩展
		Object.values(obj) 方法返回一个给定对象自己的所有可枚举属性值的数组
**/
function Shape({x=0,y=0} = {}){
	Object.assign(this,{x,y})
}
Shape.prototype.move =function(x,y){
	this.x += x;
	this.y += y;
	console.log(this.x,this.y);
}
function Rectangle({x=10,y=10} = {}){
	Shape.call(this,{x,y})
}
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.move =function(x,y){
	console.log('Rectangle move')
}
let r = new Rectangle({x:20,y:40})
r.move(10,10);
console.log(Rectangle.prototype.__proto__ == Shape.prototype)

/***
	深度冻结 
**/
function deepFreeze(obj){
	var props = Object.getOwnPropertyNames(obj);
	props.forEach(function(prop){
		if(typeof prop === "object" && prop != null){
			deepFreeze(obj[prop])
		}
	})
	Object.freeze(obj);
}
var obj1 = {a:123,b:456}
Object.freeze(obj1);
obj1.a = 456;
var obj2 = {
  internal: {}
};
deepFreeze(obj2);
obj2.internal.a = 'anotherValue';
console.log(obj2.internal.a)
console.log(Object.getOwnPropertyDescriptor(obj1,"a"))
console.log(Object.getOwnPropertyDescriptors(obj1))
var obj3 = Object.create({move:function(){ console.log('move')}})
var protoObj = Object.getPrototypeOf(obj3)
console.log(protoObj)
protoObj.move()
