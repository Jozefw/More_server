var express = require('express');
var	mongoose = require('mongoose');
var	bodyParser = require('body-parser');
var	methodOverride = require('method-override');
var	_				= require('lodash');

// creates the application instance
var app = express();

// adds middleware necerssry for REST API's
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req,res,next){
	// allows all API-public access
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

app.use('/hello', function(req,res,next){
	res.send("Hello All at the url endpoint Hello");
	next();
});


// place the list of models as a dependency requirement
app.models = require('./models/index');
// connect to mongoDB
mongoose.connect('mongodb://localhost/mean-db');
mongoose.connection.once('open', function(){
	console.log("Listneing like helll on port 3000...");
	app.listen(3000);
});

















