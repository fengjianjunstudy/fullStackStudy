"use strict";
var map = new Map([["name","小明"],["age",18]])
console.log(map)

Array.from(map,([k,v])=>{
    return [k,v+"1"]
}).forEach(([k,v]) =>{
    console.log(k,v);
})