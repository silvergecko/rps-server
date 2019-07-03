const assert = require('assert');
const request = require('supertest');
const server = require('../src/index.js');

describe('User API Tests', function() {
    it('GET /api/v1/users returns an array of users', async function() {
        const response = await request(server).get('/api/v1/users');

        assert.equal(response.status, 200);
        assert.ok((response.body instanceof Array));
    });
});
