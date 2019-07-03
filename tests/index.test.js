const assert = require('assert');
const config = require('config');
const server = require('../src/index.js');

describe('Server', function() {
    it('tests that server is running current port', function() {
        assert.equal(server.port, config.get('port'));
    });
});
