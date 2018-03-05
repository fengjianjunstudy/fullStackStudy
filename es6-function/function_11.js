const pipeline = function(...funcs){
	return (val) => funcs.reduce((pre,cur)=>{ return cur(pre)},val)
}
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);
console.log(addThenMult(5))