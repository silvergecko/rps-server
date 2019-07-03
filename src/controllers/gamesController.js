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
    
        var cursor = db.collection('games').find().toArray(function(err, docs) {
            assert.equal(err, null);
            res.json(docs);
        });
    
        client.close();
    });

};

exports.launchGame = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);

        var game = {   
            timestamp: new Timestamp(),
            contenders:[
                {userId: req.body.challengerId},
                {userId: req.body.opponentId}
            ],
            winner: null,
            closed: false,
            sets:[
                {
                    gambles:[
                        {userId: req.body.challengerId, gamble:req.body.gamble}
                    ],
                    winner: null,
                    closed: false
                }
            ]
        };
        db.collection('games').insertOne(game, {forceServerObjectId:true}, function(error, result){
            
            if(error) res.send(error);
            else {
                assert.equal(1, result.insertedCount);
                res.json(game);
            }

        });
        
        client.close();
    });

};
