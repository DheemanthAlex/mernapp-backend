var router = require('express').Router();
var UserCtrl = require('../controllers/UserCtrl');

router.post('/createUser', function (req, res) {
	UserCtrl.createUser(req, function (err, status) {
		var response = {};
		if(err) {
			response.err = {};
			response.err.msg = "Failed to create the user.";
			response.err.log = JSON.stringify(err);
		} else {
			response.success = {};
			response.success.msg = "User created successfully.";
		}
		res.setHeader('content-type', 'application/json');
		res.send(response);
	});
});

router.get('/getAllUsers', function (req, res) {
	UserCtrl.getAllUsers(function (err, users) {
		var response = {};
		if(err) {
			response.err = {};
			response.err.msg = "Failed to get all users";
			response.err.log = JSON.stringify(err);
		} else {
			response.success = {};
			response.success.msg = "User details retrived successfully.";
			response.success.data = JSON.stringify(users);
		}
		res.setHeader('content-type', 'application/json');
		res.send(response);
	});
});

router.post('/saveUser', function (req, res) {

});

module.exports = router;