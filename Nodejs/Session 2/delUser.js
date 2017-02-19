var fs = require('fs');
function del() {}
var delUserObject = del.prototype;

delUserObject.del = function(req, res, callback){
	fs.readFile("userdetail.json", "utf8", function(err, data){
		if(err){
			callback(err);
		}
		data = JSON.parse( data );
		delete data['user1'];
		console.log("After User 1 Delete:"+ data);
		callback(null, data);
	})
}
module.exports = delUserObject;