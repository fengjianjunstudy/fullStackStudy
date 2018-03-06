/***
		原型方法：
		obj.hasOwnProperty(prop)
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
