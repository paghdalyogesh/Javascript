var fs = require("fs");

//var data = fs.readFileSync('input.txt');

//console.log(data.toString());


//Blocking way of code: Return the console log first and then read file
fs.readFile('input.txt', function(err, data){
	if(err) return console.error(err);

	console.log(data.toString());
});

console.log("Program End");