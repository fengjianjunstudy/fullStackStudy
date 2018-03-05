function f(){
	this.id = "haha";
	setTimeout(()=>{console.log(this.id)},1000)
}
var ff = new f();
ff.id = "123"
f.call({id:"xixi"});