var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	"user_name": {
		"first": {
			type: String,
			required: true
		},
		"middle": {
			type: String
		},
		"last": {
			type: String,
			required: true
		}
	},
	"user_contact_details": {
		"ph_num": [{
			"cntry_code": {
				type: String,
				required: true
			},
			"num": {
				type: Number,
				required: true
			}
		}],
		"user_emailIDs": [],
		"user_address": {
			"address_line1": {
				type: String,
				required: true
			},
			"address_line2": {
				type: String
			},
			"city": {
				type: String,
				required: true
			},
			"state": {
				type: String,
				required: true
			},
			"country": {
				type: String,
				required: true
			},
			"zipcode": {
				type: Number,
				required: true
			}
		}
	},
	"tc_accepted": {
		type: Boolean,
		required: true,
		default: false
	}
},
{
	collection: 'users'
});

module.exports = mongoose.model('users', userSchema);