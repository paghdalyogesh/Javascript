var fs = require('fs');
function add() {};
var addUserObject = add.prototype;

addUserObject.add = function(req, res, callback){
	if(req.body){
		var newuser = {
			"userx": {
	    		"id" : req.body.id,
	    		"name" : req.body.name,
	    		"department" : req.body.department
	  		}
		}

		fs.readFile("userdetail.json", "utf8", function(err, data){
			if(err){
				console.log("0.3")
				callback(err);
			}
			data = JSON.parse( data );
			data['userx'] = newuser['userx'];
			callback(null, data);
		})
	}
}
module.exports = addUserObject;