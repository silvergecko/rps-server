'use strict';

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var Timestamp = require('mongodb').Timestamp;
var assert = require('assert');

// Connection URL
const url = 'mongodb://192.168.74.130:27017';

// Database Name
const dbName = 'rps';

exports.listGames = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);
        
        var cursor = db.collection('games').find(
            {
                closed:false, 
                contenders: { userId: req.params.userId }, 
                'sets.closed': false,
                'sets.gambles.userId': { $ne: req.params.userId }
            }
        ).toArray(function(error, docs) {
            
            /*
            assert.equal(err, null);
            res.json(docs);
            */
            
            if(error) res.send(error);
            assert.equal(error, null);
            res.json(docs);
        });
        /*
        db.collection('games').find({closed:false, contenders:{userId:req.params.userId}}, function(error, result) {
            
            if(error) res.send(error);
            assert.equal(error, null);
            res.json(result);

        });
        */
        client.close();
    });

};
