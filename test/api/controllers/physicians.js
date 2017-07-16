var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('physicians', function() {

    describe('GET /physicians', function() {

      it('should return empty physicians', function(done) {

        request(server)
          .get('/physicians')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            // TODO: Add assertion here

            done();
          });
      });

    });

  });

});
