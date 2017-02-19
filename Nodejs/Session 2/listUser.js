var fs = require('fs');
function list() {};
var listUserObject = list.prototype;


listUserObject.list = function(res, res, callback){
	fs.readFile("userdetail.json", "utf8", function(err, data){
		if(err){
			callback(err);
		}
		callback(null, data);
	})
}
module.exports = listUserObject;
