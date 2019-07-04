const assert = require('assert');
const request = require('supertest');
const server = require('../src/index.js');

describe('User API Tests', function() {
    it('Checks that GET /api/v1/users returns an array of users', async function() {
        const response = await request(server).get('/api/v1/users');

        assert.equal(response.status, 200);
        assert.ok((response.body instanceof Array));
    });
/*
    it('Checks that POST/api/v1/users creates a new user', async function() {
        const response = await request(server).post('/api/v1/users');

        assert.equal(response.status, 200);
        assert.ok((response.body instanceof Array));

        request(server)
            .post('/api/v1/users')
            .send({'userId=j.bonham'})
            .expect('Content-Type', /json/)
            .expect(201)
            .then(function(response) {
                assert.equal(respose.body instanceof Object);
            });

    });
*/

});
