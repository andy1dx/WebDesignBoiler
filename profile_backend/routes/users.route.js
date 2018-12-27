module.exports = function(app) {
	const user = require('../controllers/user.controller');
	const url = '/user';

	//Retrieve a single user with id
	app.get(url, user.findOne);

}