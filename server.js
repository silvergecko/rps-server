var express = require("express");
var app = express();
//var port = process.env.PORT || 3000;
//var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var routes = require('./routes/usersRoutes.js'); //importing route
routes(app);
app.listen(port);

console.log('Server started on port ' + port);

