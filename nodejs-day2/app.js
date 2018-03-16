var express = require('express');
var http = require('http')
var app = express();
let user = require('./user')
console.log(http.mothods)
function test(req,res,next){
	req.test = 'abc';
	next();
}
app.use(test)
app.use('/user',user);
app.get('/',function(req,res){
	res.send(req.test);
})
var server = app.listen(3088,function(){
	var host = server.address().address;
  	var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})