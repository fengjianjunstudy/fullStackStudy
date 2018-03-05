/***
		原型方法：
		[].push()
		[].pop()
		[].unshift()
		[].shift()
		[].forEach(function(item，index){}) //对每个元素执行提供的函数 ，没有返回值
		[].map(function(item){}) //返回新的数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
		[].join()
		[].reduce()
		[].slice() //返回一个新的数组 从开始位置到结束位置(不包括结束位置的值)的元素组成的数组(浅拷贝)
		[].splice() //修改原始数组，返回一个由删除元素组成的新数组
		[].concat() //返回新的数组
		[].copyWithin(target,start,end) 复制数组中从位置start开始到end结束的内容到target位置，不修改数组的大小,修改原始数组
		[].entries() 返回一个新的Array iterator对象，该对象包括数组中每个索引的键/值对 ,IE中不支持
		[].every(function(item,index,arr){}) //返回布尔值  不会改变原始数组
		[].some(function(item,index,arr){})
		[].filter(function(item,index){}) //返回新的数组，返回测试函数为true的元素组成的新数组
		[].fill(val,start,end)
		[].find(function(item,index){}) //返回满足提供的测试函数的第一个元素的值
		[].findIndex(function(item,index){}) //返回满足提供的测试函数的第一个元素的索引值
		[].includes() //返回布尔值 判断一个数组是否包含一个指定的值
		[].indexOf(searchElement,fromIndex) //返回在数组中找到的一个给定元素的第一个索引值
		[].reverse() //数组中的元素翻转

*/
var arr = ["alpha", "beta", "copy", "delta"]
arr.copyWithin(1,2,3);
console.log(arr)
for(let [key,value] of arr.entries()){
	console.log(key,value)
}
arr.every((item,index)=>{
	console.log(item,index);
	return true;
})
var newArr = arr.filter((item,index) => {
		return index % 2;
})
var val = arr.find(function(item,index){ return index === 0 })
console.log(val)
console.log(arr.includes('copy'))

var arr1 = ["a","b","c","d"];
console.log('删除元素')
console.log(arr1.splice(1,1))
console.log(arr1);
console.log('替换元素')
console.log(arr1.splice(1,1,'hello'))
console.log(arr1);
console.log('插入元素')
console.log(arr1.splice(1,0,'Word'))
console.log(arr1);