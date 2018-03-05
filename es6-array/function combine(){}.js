function combine(...arrs){
	console.log(arrs);
		// var arr = [].concat.apply([],arrs);
		// return Array.from(new Set(arr));
}
var m = [1, 2, 2], n = [2,3,3]; 
console.log(combine(m,n))