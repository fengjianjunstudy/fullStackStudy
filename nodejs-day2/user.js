let express = require('express');
let user = express.Router();
user.get('/:id',function(req,res){
	res.send(req.params.id)
})
user.get('/',function(req,res){
	res.send('user');
})
module.exports = user;