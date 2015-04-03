var assert = require('assert');
var app = require('../app');

var PORT = 20000 + Math.floor(Math.random() * 1000);

var request = require('request').defaults({
  baseUrl: 'http://127.0.0.1:' + PORT
});

describe('Example API', function() {

  var server;

  before(function(done) {
    server = app.listen(PORT, done);
  });

  after(function(done) {
    server.close(done);
  });

  it('should respond 200 for GET /', function(done) {
    request.get('/', function(err, res) {
      if (err) return done(err);
      assert.equal(200, res.statusCode);
      done();
    });
  });

});
