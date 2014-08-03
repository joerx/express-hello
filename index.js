var express = require('express');
var format = require('util').format;

var app = express();
app.get('/', function(req, res) {
  res.status(200).json({msg: format('Hello from %s!', req.host)});
});

app.get('/headers', function(req, res) {
  res.status(200).json(req.headers);
});

app.listen(3000, function() {
  console.log('Here we go...');
});