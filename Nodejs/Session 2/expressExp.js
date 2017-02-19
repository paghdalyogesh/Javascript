var express = require("express");
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', function (req, res){
	console.log("Hello this is a result of Get request");
	//res.send('Hello GET')
	res.sendFile(__dirname + '/login.html')
})

app.post('/login', function (req, res){
	console.log("From login Post request");
	res.send(req.body)
})

app.delete('/del_user', function (req, res){
	console.log("Delete request from /del_user");
	res.send('Hello Del')
})

app.get('/list_user', function (req, res){
	console.log("Listing request");
	var user_list={
		"name" : "Adam",
		"name" : "Stave",
		"name" : "Miranda"
	};
	console.log(user_list)
	res.send('Hello list')
})

app.get('/get*', function (req, res){
	console.log("Get request from /get*");
	res.send('Hello Preg Match')
})
/* negative check
app.get('/*', function (req, res){
	console.log("Get request from /*");
})
*/
var server = app.listen(8083, function (){
	var host = server.address().address
	var port = server.address().port

	console.log("Exp app for http listning", host, port)
})