const assert = require('assert');
const config = require('config');
const server = require('../src/index.js');
const MongoClient = require('mongodb').MongoClient;

describe('Server', function() {
    it('Tests that server is running current port', function() {
        assert.equal(server.port, config.get('port'));
    });
});

describe('Database', function() {
    it('Checks if database is online', async function() {
        var error;

        try {
            const client = await MongoClient.connect(config.get('database'));
            client.close();
        } catch(err) {
            console.log('database connection error: ' + err);
            error = err;
        }

        assert.equal(null, error);

    });
});