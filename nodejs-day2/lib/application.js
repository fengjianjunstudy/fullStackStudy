const http = require('http');
const url = require('url');
const methods = require('methods');
function Application(){
	
}
Application.prototype.lazyrouter = function(){
	if(!this._router){
		this._router = new Router();
	}
}
methods.forEach((method)=>{
	Application.prototype[method] = function(){
		this.lazyrouter();
		this._router[method].apply(this._router,slice.call(arguments))
	}
})
let routes = [{method:'*',path:'*',handler(req,res){ console.log('can not'+req.method+':'+req.url);}}]
// Application.prototype.get = function(path,callback) {
// 	let r = {method:'get',path:path,handler:callback};
// 	routes.push(r);
// };
Application.prototype.listen = function(...args) {
	var _self = this;
	var server = http.createServer((req,res) =>{
		// let {pathname} = url.parse(req.url),
		// 	method = req.method;
		// for(let route of routes){
		// 	if(route['path'] == pathname && method.toLocaleLowerCase() == route['method']){
		// 		return route['handler'](req,res);
		// 	}
		// }
		// routes[0].handler(req,res);
		function done(){
			
		}
		_self._router.handle(req,res,done)

	})
	server.listen(...args);
};
module.exports = Application;