function User(name,age){
    this.name = name;
    this.age = age;
    //私有属性
    var a = "hello word";
    //特权方法
    this.fn = function(){
        console.log(a);
    }
}
User.prototype.sayName = function(){
    console.log(this.name);
}
//静态属性
User.version = "1.0.0";
User.printVersion = function(){
    console.log(User.version);
}

var user  = new User('小明',18);
user.fn();
user.sayName();
User.printVersion();
