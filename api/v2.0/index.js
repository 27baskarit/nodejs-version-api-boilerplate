var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hai Welcome to home route for version 2 [ GET method ]');
});

router.post('/parse', function(req, res, next) {
  var input = req.body.input
  if(input){
  	if(input.indexOf("-")){
	  	var arr = input.split("-")
	  	res.send({
	  		statusCode:200,
	  		date:{
	  			firstName:arr[0],
	  			lastName:arr[1],
	  			clientId:arr[2],
	  		}
	  	})	  	
  	}else{
	  	res.send({
	  		statusCode:200,
	  		message:"Unable to parse"
	  	})
  	}
  }else{
  	res.send({
  		statusCode:200,
  		message:"No input Found"
  	})
  }

});
module.exports = router;
