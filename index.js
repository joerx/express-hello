var express = require('express');
var format = require('util').format;

var app = express();
app.get('/', function(req, res) {
  res.status(200).json({msg: format('Hello from %s!', req.hostname)});
});

app.get('/headers', function(req, res) {
  res.status(200).json(req.headers);
});

app.get('fail', function(req, res) {
  throw new Error('boo!');
});

app.listen(3000, function() {
  console.log('Here we go...');
});
