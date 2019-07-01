'use strict';

var MongoClient = require('mongodb').MongoClient;
//var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');

// Connection URL
const url = 'mongodb://192.168.74.130:27017';

// Database Name
const dbName = 'rps';


exports.listUsers = function(req, res) {

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

exports.createUser = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);
        //var doc = JSON.parse(req.body.user.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
        var user = {
            _id: req.body.userId,
            nation: req.body.nation
        };
        //var doc = JSON.parse(req.body.user);
        db.collection('users').insertOne(user, {forceServerObjectId:false}, function(error, result){
            
            if(error) res.send(error);
            else {
                assert.equal(1, result.insertedCount);
                res.json(user);
            }

        });
        
        client.close();
    });

};

exports.readUser = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);
        
        db.collection('users').findOne({_id:req.params.userId}, function(error, result) {
            
            if(error) res.send(error);
            assert.equal(err, null);
            res.json(result);

        });
        
        client.close();
    });

};

exports.updateUser = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);
        var doc = {"$set": JSON.parse(req.body.user.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '))};
        db.collection('users').findOneAndUpdate({_id:req.params.userId}, doc, function(error, result) {
            
            if(error) res.send(error);
            assert.equal(err, null);
            res.json(result);

        });
        
        client.close();
    });

};

exports.removeUser = function(req, res) {

    MongoClient.connect(url, function(err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        var db = client.db(dbName);

        db.collection('users').deleteOne({_id:req.params.userId}, function(error, result) {
            
            if(error) res.send(error);
            assert.equal(err, null);
            res.json(result);

        });
        
        client.close();
    });

};