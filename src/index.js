const debug = require('debug')('server:debug');
const express = require("express");
const app = express();
const config = require("config");

//var port = process.env.PORT || 3000;
//var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');

// sets the limit of json bodies in the req body.
app.use(express.json());
// support json encoded bodies in the req
app.use(express.urlencoded({ extended: true }));

// routes imports
const userRoutes = require('./routes/usersRoutes.js');
app.use(config.get('root'), userRoutes);

const gamesRoutes = require('./routes/gamesRoutes.js');
app.use(config.get('root'), gamesRoutes);

const pendingGamesRoutes = require('./routes/pendingGamesRoutes.js');
app.use(config.get('root'), pendingGamesRoutes);

// lanuch the server
const listen = app.listen(config.get('port'), function(){
    debug('Server started on port ' +  config.get('port') + ' and in ' + config.get('name') + ' mode');
});

module.exports = app;
module.exports.port = listen.address().port;

