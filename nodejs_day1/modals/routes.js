// var fs = require('fs');
// module.exports = {
// 	"/login":function(req,res){
// 		fs.readFile('views/login.html', (err, data) => {
// 			if(err){
// 				console.log(err);
// 			}
// 			res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
// 			res.write(data);
// 			res.end('')
// 		});
// 	},
// 	"/reg":function(req,res){

// 	}
// }
function Routes(){
	this.cache ={};
}
Routes.prototype.on = function(path,callback) {
	this.cache[path] = callback;
};
module.exports = new Routes();