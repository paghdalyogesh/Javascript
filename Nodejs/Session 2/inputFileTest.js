var fs = require("fs");
fs.readFile('inputfile.js', function(err, data){
	if(err) return console.error(err);

	console.log(data.testfunc());
});