"use strict";
//拷贝所有自由属性的属性描述符
function completeAssign(target,...sources){
    sources.forEach((source)=>{
        let descriptors = Object.keys(source).reduce((descriptors,key)=>{
            descriptors[key] = Object.getOwnPropertyDescriptor(source,key);
            return descriptors;
        },{});
        //拷贝可枚举的Symbols
        Object.getOwnPropertySymbols(sources).forEach((sym)=>{
            let descriptor = Object.getOwnPropertyDescriptor(source,sym);
            if(descriptor.enumerable){
                descriptors[sym]= descriptor;
            }
        })
        Object.defineProperties(target,descriptors);
    })
    return target;

}
var obj = {
    foo: 1,
    get bar() {
        return 2;
    }
};
var copy = completeAssign({}, obj);
console.log(copy);
