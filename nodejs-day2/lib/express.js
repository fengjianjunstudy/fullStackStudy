const Application = require('./application');
var app = new Application();
function createApplication(){
	return new Application()
}
createApplication.Router = Router;
module.exports = createApplication;
app.get('/',function(req,res){
	res.write('hello word');
	res.end('');
})
app.listen(3000,function(){
	console.log('http://localhost:3000')
})