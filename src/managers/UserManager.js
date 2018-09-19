var UserSchema = require('../schemas/UserSchema');

module.exports = {
	createUser: function (userObj, callback) {
		var user = new UserSchema();

		user.user_name = {};
		user.user_name.first = userObj.firstName;
		user.user_name.middle = userObj.middleName ? userObj.middleName : "";
		user.user_name.last = userObj.lastName;

		user.user_contact_details = {};

		user.user_contact_details.ph_num = [];
		user.user_contact_details.ph_num.push({
			"cntry_code": userObj.cntryCode,
			"num": userObj.number
		});

		user.user_contact_details.user_emailIDs = [];
		user.user_contact_details.user_emailIDs.push(userObj.emailID);

		user.user_contact_details.user_address = {};
		user.user_contact_details.user_address.address_line1 = userObj.addressLine1;
		user.user_contact_details.user_address.address_line2 = userObj.addressLine2;
		user.user_contact_details.user_address.city = userObj.city;
		user.user_contact_details.user_address.state = userObj.state;
		user.user_contact_details.user_address.country = userObj.country;
		user.user_contact_details.user_address.zipcode = parseInt(userObj.zipcode);

		user.tc_accepted = userObj.tcAccepted;

		user.save(function (err, docs) {
			callback(err, docs);
		});
	},

	editUser: function () {

	},

	getAllUsers: function (callback) {
		UserSchema
		.find({}, {
			_id: 0,
			__v: 0
		})
		.exec(function (err, users) {
			callback(err, users);
		});
	},

	deleteUser: function () {

	}
}