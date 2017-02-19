var express = require('express')
var app = express();
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))

var getUser = require('./getUser.js');
var putUser = require('./addUser.js');
var delUser = require('./delUser.js');
var listUser = require('./listUser.js');


app.get('/', function (req, res){
	console.log("Hello this is a result of Get request.");
	//res.send('Hello GET')
	res.sendFile(__dirname + '/login.html')
})

app.post('/addNewUser', function (req, res){
	putUser.add(req, res, function(err, result){
		if(err){
			res.status(500);
			res.json(err);	
		} 
		//if(result)
		//{
			res.status(201);
			console.log(result);
			res.end( JSON.stringify(result) )
		/*} else {
			console.log("no value");
			callback(null, "no value");
		} */
	})
})

app.delete('/delUser', function (req, res){
	delUser.del(req, res, function(err, result){
		if(err){
			res.status(500);
			res.json(err);
		}
		res.status(200);
		console.log(result);
		res.send( JSON.stringify(result) )
	})
})

app.get('/listuser', function (req, res){
	listUser.list(req, res, function(err, result){
		if(err){
			res.status(500);
			res.json(err);	
		}
		res.status(200);
		console.log(result)
		res.end(result);
	})

})

var server = app.listen(8083, function (){
	var host = server.address().address
	var port = server.address().port

	console.log("Exp app for http listning", host, port)
})