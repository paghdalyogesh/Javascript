var express = require('express')
var app = express();
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))

var getUser = require('./getUser.js');
var putUser = require('./addUser.js');
var delUser = require('./delUser.js');
var listUser = require('./listUser.js');


app.get('/', function (req, res){
	console.log("Hello this is a result of Get request");
	//res.send('Hello GET')
	res.sendFile(__dirname + '/login.html')
})

app.post('/addNewUser', function (req, res){
	putUser.add(req, res, function(err, result){
		if(err){
			res.status(500);
			res.json(err);	
		}
		res.status(200);
		res.json(result)
	})
	console.log("New User added");
	res.send(req.body)
})

app.delete('/delUser', function (req, res){
	console.log("Delete request from /del_user");
	res.send('Hello Del')
})

app.get('/listUser', function (req, res){
	listUser.list(req, res, function(err, result){
		if(err){
			res.status(500);
			res.json(err);	
		}
		res.status(200);
		res.json(result)	
	})
})

var server = app.listen(8083, function (){
	var host = server.address().address
	var port = server.address().port

	console.log("Exp app for http listning", host, port)
})