/***
		静态方法：
		Array.from()
		Array.of()
*/
function combine(...arrs){

		var arr = [].concat.apply([],arrs);
		return Array.from(new Set(arr));  //将类数组或者可以迭代对象创建一个新的数组
}
var m = [1, 2, 2], n = [2,3,3]; 
console.log(combine(m,n))

console.log(Array.of(1,2,[1,2],function(a,b){console.log(a+b)}))