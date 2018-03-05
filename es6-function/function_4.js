var x = 1;
function f(x,y=function(){x =2;}){
	var x = 3;
	y(); 
	console.log(x); // 3
}
f(10);
console.log(x); //1