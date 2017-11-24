var obj ={a:12}
obj.__proto__.a = "abc";
console.log(obj.a);
delete obj.a;
console.log(obj.a);