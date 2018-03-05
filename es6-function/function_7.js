var sum = (...args) => { return args.reduce((accumulator,currentValue) => currentValue + accumulator)}
var arr1 = [1, 2, 3, 4];
console.log(sum(...arr1))