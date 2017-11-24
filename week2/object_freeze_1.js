"use strict";
//Object.freeze

function deepFreeze(obj){
    var propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach((propName)=>{
        var prop = obj[propName];
        if(typeof prop == "object" && prop != null){
            deepFreeze(prop);
        }
    })
    return Object.freeze(obj);
}
