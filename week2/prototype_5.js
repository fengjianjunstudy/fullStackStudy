"use strict";
class People {
    constructor(name){
        var sa = "hello";
        this.name = name;
        this.print_sa = function(){
            console.log(sa);
        }
    }
    //原型属性
    get type(){
        return "string";
    }
    //原型方法
    sayName(){
        console.log(this.name);
    }
    //静态属性
    static get  version(){
        return "1.0.0";
    }
    //静态方法
    static printVersion(){
        console.log(User.version);
    }

}
class User extends People{
    constructor(name,age){
        super(name);
        this.age = age;
    }
}
var user = new User('xiaoming',18);
user.sayName();
user.printVersion();
