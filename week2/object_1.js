"use strict";
var obj = {name:"xiaoming"}
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

class User{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}
var user = new User("小明");
console.log(Object.getOwnPropertyDescriptor(user,"name"));
console.log(Object.getOwnPropertyDescriptor(user.__proto__,"sayName"));