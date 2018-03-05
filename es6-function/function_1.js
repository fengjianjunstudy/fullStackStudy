function m1({x=0,y=0} = {}){
	console.log(x,y);
	return [x,y];
}
function m2({x,y}={x:1,y:1}){
	console.log(x,y);
	return [x,y];
}
m1();
m2();
console.log(m1.length)

let x =1;
function f(y = x){
	let x = 10;
	console.log('y'+'------'+y);
}
f();