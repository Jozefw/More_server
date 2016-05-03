// mongoose package interfaces with mongodb and provide models which map to the database
var mongoose = require('mongoose');

// create a Movie Schema
var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

// export the model schema
module.exports = MovieSchema;


