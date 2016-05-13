/**
 * Author: Deleepa
 * Description: This file defines the unit tests for the User API
 */

const supertest = require('supertest');
const should = require('should');
const assert = require('assert');

var server = supertest.agent('http://localhost:3000');

//describes the unit tests for the User API
describe('Unit test for User API', function () {
    
    //checks if the GET method returns all the users
    it('should return an array of all user objects', function(done) {
        server
            .get('/tables/user')
            .set('ZUMO-API-VERSION', '2.0.0')
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function(err, res) {
                
                
                assert.notEqual(res.body.length, 0);
                
                res.body[0].should.have.property('email');
                res.body[0].should.have.property('password');
                res.body[0].should.have.property('package_id');
                
                done();
            });
    });
    
});
 