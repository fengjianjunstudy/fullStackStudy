/**
	数据结构 Set  
**/
let s = new Set([1,2]);
s.add(3);
console.log(s);
console.log(s.delete(1));
console.log(s);
console.log(s.has(2))
s.clear()
console.log(s)

/****数组去重***/
let  arr = ["a","b","1","aa",1,"a"];
console.log(arr);
let ss = new Set(arr)
let newArr =  Array.from(ss)
console.log(newArr)
console.log([...ss])
