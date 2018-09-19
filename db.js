var mongoose = require('mongoose');
var config = require('./src/config');

try {
	mongoose.connect(config.mongoURL, { useNewUrlParser: true });
} catch (e) {
	console.log("Failed to connect to MongoDB.\n" + e + "\n" + e.stack);
}