var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type' : 'text/plain'});

	console.log("I am here");
	
	var jsonread = fs.readFileSync('package.json');
	var jsoncontent = JSON.parse(jsonread);
	
	//console.log(jsoncontent.name);
	
 	for(var exKey in jsoncontent) {
      console.log(exKey+" : "+jsoncontent[exKey]);
 	}

}).listen(8089);

console.log("Server started at http://127.0.0.1:8089");