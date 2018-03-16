var http = require('http');
var fs = require('fs');
var routes = require('./modals/routes');
routes.on('/login',function(req,res){
	fs.readFile('views/login.html', (err, data) => {
		if(err){
			console.log(err);
		}
		res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
		res.write(data);
		res.end('')
	});
})
var server = http.createServer((req,res)=>{
	if(req.url == "/favicon.ico"){
		res.end('')
	}
	console.log(routes.cache[req.url])
	// routes.cache[req.url](req,res);
})
server.listen(8080)