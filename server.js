var express = require("express");
var app = express();
//var port = process.env.PORT || 3000;
//var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var usersRoutes = require('./routes/usersRoutes.js'); //importing route
usersRoutes(app);

var gamesRoutes = require('./routes/gamesRoutes.js'); //importing route
gamesRoutes(app);

var pendingGamesRoutes = require('./routes/pendingGamesRoutes.js'); //importing route
pendingGamesRoutes(app);

app.listen(port);

console.log('Server started on port ' + port);

