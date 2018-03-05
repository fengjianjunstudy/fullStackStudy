let foo = "outer";
function bar(f = () => foo){ //f函数中的作用域中foo是外面的值
	let foo = "inner";
	console.log(f())
}
bar();