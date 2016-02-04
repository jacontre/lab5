var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
// Create JSON object for new friend
var newFriend = {
		'name': req.query.name, 
		'description': req.query.description,
		'imageURL': 'http://lorempixel.com/400/400/people'
	}
// push to the end of the data array
data["friends"].push(newFriend);
// check if data is correct
console.log(newFriend);
// render the add page with the new friend added to data
res.render('add', data);
};