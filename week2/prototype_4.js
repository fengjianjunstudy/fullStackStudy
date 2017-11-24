"use strict";
class User {
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
var user= new User("xiaoming");
user.print_sa();
console.log(user.type);
user.sayName();
console.log(User.version);
User.printVersion();
