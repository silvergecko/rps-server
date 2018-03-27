'use strict';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
const url = 'mongodb://192.168.74.130:27017';

// Database Name
const dbName = 'rps';


exports.list_all_users = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);
    
        var cursor = db.collection('users').find().toArray(function(err, docs) {
            assert.equal(err, null);
            res.json(docs);
        });
    
        client.close();
    });

};



