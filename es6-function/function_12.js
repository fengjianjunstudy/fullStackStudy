/**
 n = 10
 num = 10*9*8
*/
// function factorial(n){
// 	if(n === 1){return 1};
// 	return n * factorial(n-1);
// }
// console.log(factorial(5))
function factorial(n,total){
	if(n ===1){ return total}
	return factorial(n-1,total*n)
}
console.log(factorial(5,1))