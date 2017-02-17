var fs = require('fs');
function add() {};
var addUser = add.prototype;

addUser.add = function(res, res, callback){
	var newuser = {
		"userx": {
    		"id" : 2000,
    		"name" : "X User",
    		"department" : "depx"
  		},
	}

	fs.readFile("userdetail.json", "UTF8", function(err, data){
		if(err){
			callback(err);
		}
			data = JSON.parse(data);
			dataobject['userx'] = newuser['userx'];
			console.log( dataobject );
			callback(null, dataobject);
	})
}
module.exports = addUser;
