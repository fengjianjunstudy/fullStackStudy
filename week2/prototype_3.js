function People(name){
    this.name = name;
}
People.prototype.sayName = function(){
    console.log(this.name);
}
function User(name,age){
    //特权属性的继承
    People.call(this,name);
}
//原型链的继承
User.prototype.__proto__ = People.prototype;
//静态属性方法的继承
User.__proto__ = People;
