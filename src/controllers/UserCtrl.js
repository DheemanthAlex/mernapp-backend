var UserManager = require('../managers/UserManager');
module.exports = {
	createUser: function (req, callback) {
		var userObj = {};

		userObj.firstName = req.body.firstName;
		userObj.middleName = ""; //req.body.middleName;
		userObj.lastName = req.body.lastName;

		var phoneNumber = req.body.mobileNumber.split(" ");
		userObj.cntryCode = phoneNumber[0];
		userObj.number = phoneNumber[1];

		userObj.emailID = req.body.email;
		userObj.addressLine1 = req.body.addressLine1;
		userObj.addressLine2 = req.body.addressLine2;
		userObj.city = req.body.city;
		userObj.state = req.body.userState;
		userObj.country = req.body.country;
		userObj.zipcode = req.body.zipCode;
		userObj.tcAccepted = req.body.agreed;

		UserManager.createUser(userObj, function (err, docs) {
			callback(err, docs);
		});
	},

	getAllUsers: function (callback) {
		UserManager.getAllUsers(function (err, users) {
			callback(err, users)
		});
	}
}