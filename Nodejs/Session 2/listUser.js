var fs = require('fs');
function list() {};
var listUserObject = list.prototype;


listUserObject.list = function(res, res, callback){
	fs.readFile("userdetail.json", "UTF8", function(err, data){
		if(err){
			callback(err);
		}
			dataobject - JSON.parse(data);
			console.log( dataobject );
			callback(null, dataobject);
	})
}
module.exports = list;
