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

exports.create_a_user = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);
        var doc = JSON.parse(req.body.user);
        db.collection('users').insertOne(doc, {forceServerObjectId:true}, function(error, result){
            
            if(error) res.send(error);
            assert.equal(1, result.insertedCount);
            res.json(doc);

        });
        
        client.close();
    });

};

exports.read_a_user = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);
        //var query = JSON.parse(req.params.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
        
        db.collection('users').findOne(req.params, function(error, result) {
            
            if(error) res.send(error);
            assert.equal(err, null);
            res.json(result);

        });
        
        client.close();
    });

};